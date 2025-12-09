import re, { useState as we } from "react";
import gr from "react-dom";
var Q, B = gr;
if (process.env.NODE_ENV === "production")
  Q = B.createRoot, B.hydrateRoot;
else {
  var je = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Q = function(g, E) {
    je.usingClientEntryPoint = !0;
    try {
      return B.createRoot(g, E);
    } finally {
      je.usingClientEntryPoint = !1;
    }
  };
}
var ee = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function yr() {
  if (Pe) return $;
  Pe = 1;
  var g = re, E = Symbol.for("react.element"), b = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, C = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(R, a, s) {
    var y, x = {}, S = null, L = null;
    s !== void 0 && (S = "" + s), a.key !== void 0 && (S = "" + a.key), a.ref !== void 0 && (L = a.ref);
    for (y in a) _.call(a, y) && !P.hasOwnProperty(y) && (x[y] = a[y]);
    if (R && R.defaultProps) for (y in a = R.defaultProps, a) x[y] === void 0 && (x[y] = a[y]);
    return { $$typeof: E, type: R, key: S, ref: L, props: x, _owner: C.current };
  }
  return $.Fragment = b, $.jsx = O, $.jsxs = O, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function br() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var g = re, E = Symbol.for("react.element"), b = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), R = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, De = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[De];
      return typeof r == "function" ? r : null;
    }
    var k = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ie = !1, $e = !1, We = !1, Ye = !1, Le = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === P || Le || e === C || e === s || e === y || Ye || e === L || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === x || e.$$typeof === O || e.$$typeof === R || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case b:
          return "Portal";
        case P:
          return "Profiler";
        case C:
          return "StrictMode";
        case s:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ae(r) + ".Consumer";
          case O:
            var t = e;
            return ae(t._context) + ".Provider";
          case a:
            return Ve(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case S: {
            var u = e, l = u._payload, i = u._init;
            try {
              return T(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, oe, ie, ue, le, se, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
          oe = console.log, ie = console.info, ue = console.warn, le = console.error, se = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ue() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: oe
            }),
            info: w({}, e, {
              value: ie
            }),
            warn: w({}, e, {
              value: ue
            }),
            error: w({}, e, {
              value: le
            }),
            group: w({}, e, {
              value: se
            }),
            groupCollapsed: w({}, e, {
              value: ce
            }),
            groupEnd: w({}, e, {
              value: fe
            })
          });
        }
        F < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = k.ReactCurrentDispatcher, K;
    function M(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var q = !1, V;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Be();
    }
    function ve(e, r) {
      if (!e || q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = z.current, z.current = null, Ne();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (p) {
              n = p;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var o = p.stack.split(`
`), v = n.stack.split(`
`), c = o.length - 1, f = v.length - 1; c >= 1 && f >= 0 && o[c] !== v[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (o[c] !== v[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || o[c] !== v[f]) {
                    var h = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, h), h;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, z.current = l, Ue(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", j = A ? M(A) : "";
      return typeof e == "function" && V.set(e, j), j;
    }
    function ze(e, r, t) {
      return ve(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ke(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case s:
          return M("Suspense");
        case y:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return ze(e.render);
          case x:
            return N(e.type, r, t);
          case S: {
            var n = e, u = n._payload, l = n._init;
            try {
              return N(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, pe = {}, ge = k.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, u) {
      {
        var l = Function.call.bind(I);
        for (var i in e)
          if (l(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (U(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), U(null)), o instanceof Error && !(o.message in pe) && (pe[o.message] = !0, U(u), d("Failed %s type: %s", t, o.message), U(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (Xe(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ye(e);
    }
    var he = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Ee;
    function Ze(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, u, l, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, n, u) {
      {
        var l, i = {}, o = null, v = null;
        t !== void 0 && (be(t), o = "" + t), Qe(r) && (be(r.key), o = "" + r.key), Ze(r) && (v = r.ref, er(r, u));
        for (l in r)
          I.call(r, l) && !He.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            i[l] === void 0 && (i[l] = c[l]);
        }
        if (o || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, f), v && tr(i, f);
        }
        return nr(e, o, v, u, n, he.current, i);
      }
    }
    var G = k.ReactCurrentOwner, _e = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Re() {
      {
        if (G.current) {
          var e = T(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var xe = {};
    function ir(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + T(e._owner.type) + "."), D(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Te(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ae(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), i; !(i = l.next()).done; )
              H(i.value) && Te(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = T(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, u, l) {
      {
        var i = Me(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = or();
          v ? o += v : o += Re();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === E ? (c = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var f = ar(e, r, t, u, l);
        if (f == null)
          return f;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (J(h)) {
                for (var A = 0; A < h.length; A++)
                  Ce(h[A], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(h, e);
        }
        if (I.call(r, "key")) {
          var j = T(e), p = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), Z = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[j + Z]) {
            var vr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, j, vr, j), Oe[j + Z] = !0;
          }
        }
        return e === _ ? lr(f) : ur(f), f;
      }
    }
    function sr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var fr = cr, dr = sr;
    W.Fragment = _, W.jsx = fr, W.jsxs = dr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = yr() : ee.exports = br();
var m = ee.exports;
function hr() {
  const [g, E] = we([]), [b, _] = we(""), C = () => {
    if (b.trim() === "") return;
    const a = {
      id: Date.now(),
      text: b.trim(),
      completed: !1
    };
    E([...g, a]), _("");
  }, P = (a) => {
    E(
      g.map(
        (s) => s.id === a ? { ...s, completed: !s.completed } : s
      )
    );
  }, O = (a) => {
    E(g.filter((s) => s.id !== a));
  }, R = (a) => {
    a.key === "Enter" && C();
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderRadius: "0 0 1rem 1rem"
      },
      children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            style: {
              borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
              padding: "16px"
            },
            children: /* @__PURE__ */ m.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  gap: "8px",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      type: "text",
                      value: b,
                      onChange: (a) => _(a.target.value),
                      onKeyPress: R,
                      placeholder: "Add a new task...",
                      style: {
                        flex: 1,
                        padding: "8px 12px",
                        fontSize: "16px",
                        border: "1px solid rgba(17, 24, 39, 0.15)",
                        borderRadius: "8px",
                        outline: "none"
                      }
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      onClick: C,
                      disabled: b.trim() === "",
                      style: {
                        padding: "8px 16px",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#ffffff",
                        backgroundColor: "#3b82f6",
                        border: "none",
                        borderRadius: "8px",
                        cursor: b.trim() === "" ? "not-allowed" : "pointer",
                        opacity: b.trim() === "" ? 0.5 : 1,
                        transition: "background-color 0.2s"
                      },
                      onMouseEnter: (a) => {
                        b.trim() !== "" && (a.currentTarget.style.backgroundColor = "#2563eb");
                      },
                      onMouseLeave: (a) => {
                        b.trim() !== "" && (a.currentTarget.style.backgroundColor = "#3b82f6");
                      },
                      children: "Add"
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden"
            },
            children: g.length === 0 ? /* @__PURE__ */ m.jsx(
              "div",
              {
                style: {
                  padding: "32px",
                  textAlign: "center",
                  color: "#6b7280",
                  fontSize: "16px"
                },
                children: "No tasks yet. Add one above!"
              }
            ) : /* @__PURE__ */ m.jsx("div", { children: g.map((a) => /* @__PURE__ */ m.jsxs(
              "div",
              {
                style: {
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "background-color 0.2s",
                  cursor: "pointer"
                },
                onMouseEnter: (s) => {
                  s.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                },
                onMouseLeave: (s) => {
                  s.currentTarget.style.backgroundColor = "transparent";
                },
                children: [
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: a.completed,
                      onChange: () => P(a.id),
                      style: {
                        width: "20px",
                        height: "20px",
                        cursor: "pointer"
                      }
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      style: {
                        flex: 1,
                        fontSize: "16px",
                        textDecoration: a.completed ? "line-through" : "none",
                        color: a.completed ? "#9ca3af" : "#111827"
                      },
                      children: a.text
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      onClick: () => O(a.id),
                      style: {
                        padding: "6px 12px",
                        fontSize: "14px",
                        color: "#ef4444",
                        backgroundColor: "transparent",
                        border: "1px solid #ef4444",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      },
                      onMouseEnter: (s) => {
                        s.currentTarget.style.backgroundColor = "#ef4444", s.currentTarget.style.color = "#ffffff";
                      },
                      onMouseLeave: (s) => {
                        s.currentTarget.style.backgroundColor = "transparent", s.currentTarget.style.color = "#ef4444";
                      },
                      children: "Delete"
                    }
                  )
                ]
              },
              a.id
            )) })
          }
        )
      ]
    }
  );
}
let Y = null;
function _r(g) {
  Y = Q(g), Y.render(re.createElement(hr));
}
function Rr() {
  Y && (Y.unmount(), Y = null);
}
export {
  _r as mount,
  Rr as unmount
};
