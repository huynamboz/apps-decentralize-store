# Host Storage API Documentation

## Overview

Weather App sử dụng cơ chế `postMessage` để giao tiếp với Host (parent window) thay vì sử dụng `localStorage` trực tiếp. Điều này cho phép Host quản lý storage tập trung cho tất cả các app.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOST (Parent Window)                     │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Storage Manager                        │    │
│  │  - Lắng nghe get_storage, save_storage                   │    │
│  │  - Phản hồi storage_response                             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                              ▲                                   │
│                              │ postMessage                       │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Weather App (iframe)                   │    │
│  │                                                           │    │
│  │  App Start ──► get_storage ──────────────────────────►   │    │
│  │                                     storage_response ◄── │    │
│  │                                                           │    │
│  │  Save Data ──► save_storage ─────────────────────────►   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Message Types

### 1. Get Storage

Request data từ Host storage.

**Direction:** App → Host

```typescript
window.parent.postMessage(
  {
    type: "get_storage",
    key: "host_token"
  },
  "*"
);
```

| Field | Type | Description |
|-------|------|-------------|
| `type` | `string` | Luôn là `"get_storage"` |
| `key` | `string` | Key của data cần lấy |

---

### 2. Save Storage

Lưu data vào Host storage.

**Direction:** App → Host

```typescript
window.parent.postMessage(
  {
    type: "save_storage",
    key: "host_token",
    data: "eyJhbGciOiJIUzI1NiIs..."
  },
  "*"
);
```

| Field | Type | Description |
|-------|------|-------------|
| `type` | `string` | Luôn là `"save_storage"` |
| `key` | `string` | Key để lưu data |
| `data` | `any` | Data cần lưu |

---

### 3. Storage Response

Host phản hồi data cho App.

**Direction:** Host → App

```typescript
// Host gửi cho App
iframe.contentWindow.postMessage(
  {
    type: "storage_response",
    key: "host_token",
    data: "eyJhbGciOiJIUzI1NiIs..."
  },
  "*"
);
```

| Field | Type | Description |
|-------|------|-------------|
| `type` | `string` | Luôn là `"storage_response"` |
| `key` | `string` | Key của data được request |
| `data` | `any \| null` | Data đã lưu, `null` nếu không tồn tại |

---

## Implementation

### App Side (Weather App)

```typescript
// State để lưu token
const [hostToken, setHostToken] = useState<string>("");

useEffect(() => {
  const handleMessage = (event: MessageEvent) => {
    // Nhận token từ host khi request_token thành công
    if (event.data?.type === "token_response") {
      const token = event.data.token;
      setHostToken(token);

      // Lưu vào host storage
      window.parent.postMessage({
        type: "save_storage",
        key: "host_token",
        data: token,
      }, "*");
    }

    // Nhận data từ host storage
    if (event.data?.type === "storage_response" && event.data?.key === "host_token") {
      if (event.data.data) {
        setHostToken(event.data.data);
      }
    }
  };

  window.addEventListener("message", handleMessage);

  // Request token từ storage khi app start
  window.parent.postMessage({
    type: "get_storage",
    key: "host_token",
  }, "*");

  return () => window.removeEventListener("message", handleMessage);
}, []);
```

### Host Side (Example)

```typescript
// Lắng nghe messages từ các app
window.addEventListener("message", (event) => {
  const { type, key, data } = event.data;

  if (type === "get_storage") {
    // Lấy data từ storage và gửi lại cho app
    const storedData = localStorage.getItem(key);
    event.source.postMessage({
      type: "storage_response",
      key: key,
      data: storedData ? JSON.parse(storedData) : null,
    }, "*");
  }

  if (type === "save_storage") {
    // Lưu data vào storage
    localStorage.setItem(key, JSON.stringify(data));
  }
});
```

---

## Flow Diagrams

### App Startup Flow

```
┌──────────┐          ┌──────────┐
│   App    │          │   Host   │
└────┬─────┘          └────┬─────┘
     │                     │
     │  get_storage        │
     │  {key: "host_token"}│
     │────────────────────>│
     │                     │
     │                     │ Lookup storage
     │                     │
     │  storage_response   │
     │  {key, data}        │
     │<────────────────────│
     │                     │
     │ setHostToken(data)  │
     │                     │
```

### Token Request & Save Flow

```
┌──────────┐          ┌──────────┐          ┌──────────┐
│   App    │          │   Host   │          │  Server  │
└────┬─────┘          └────┬─────┘          └────┬─────┘
     │                     │                     │
     │  request_token      │                     │
     │  {permissions}      │                     │
     │────────────────────>│                     │
     │                     │                     │
     │                     │  Generate token     │
     │                     │                     │
     │  token_response     │                     │
     │  {token}            │                     │
     │<────────────────────│                     │
     │                     │                     │
     │  save_storage       │                     │
     │  {key, data: token} │                     │
     │────────────────────>│                     │
     │                     │                     │
     │                     │ Save to storage     │
     │                     │                     │
```

### API Call with Token Flow

```
┌──────────┐          ┌──────────┐
│   App    │          │  Server  │
└────┬─────┘          └────┬─────┘
     │                     │
     │ GET /api/protected  │
     │ Authorization:      │
     │ Bearer <hostToken>  │
     │────────────────────>│
     │                     │
     │                     │ Verify token
     │                     │
     │  Response           │
     │<────────────────────│
     │                     │
```

---

## Security Considerations

1. **Origin Validation**: Trong production, nên validate `event.origin` thay vì sử dụng `"*"`

```typescript
const handleMessage = (event: MessageEvent) => {
  // Chỉ chấp nhận messages từ trusted origins
  if (event.origin !== "https://trusted-host.com") {
    return;
  }
  // ... handle message
};
```

2. **Data Sanitization**: Host nên validate và sanitize data trước khi lưu

3. **Token Expiry**: Nên implement cơ chế kiểm tra token expiry

---

## Storage Keys

| Key | Description | Type |
|-----|-------------|------|
| `host_token` | JWT token để authenticate với API | `string` |

---

## Error Handling

Khi Host không phản hồi hoặc data không tồn tại:

```typescript
if (event.data?.type === "storage_response") {
  if (event.data.data) {
    // Data exists
    setHostToken(event.data.data);
  } else {
    // Data not found - token chưa được request
    console.log("No token found in storage");
  }
}
```
