import le, { useState as M } from "react";
import gr from "react-dom";
var ae, J = gr;
if (process.env.NODE_ENV === "production")
  ae = J.createRoot, J.hydrateRoot;
else {
  var Ae = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ae = function(x, T) {
    Ae.usingClientEntryPoint = !0;
    try {
      return J.createRoot(x, T);
    } finally {
      Ae.usingClientEntryPoint = !1;
    }
  };
}
var ie = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function br() {
  if (Fe) return Y;
  Fe = 1;
  var x = le, T = Symbol.for("react.element"), E = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, m = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(_, p, S) {
    var g, y = {}, j = null, F = null;
    S !== void 0 && (j = "" + S), p.key !== void 0 && (j = "" + p.key), p.ref !== void 0 && (F = p.ref);
    for (g in p) w.call(p, g) && !P.hasOwnProperty(g) && (y[g] = p[g]);
    if (_ && _.defaultProps) for (g in p = _.defaultProps, p) y[g] === void 0 && (y[g] = p[g]);
    return { $$typeof: T, type: _, key: j, ref: F, props: y, _owner: m.current };
  }
  return Y.Fragment = E, Y.jsx = R, Y.jsxs = R, Y;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function yr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var x = le, T = Symbol.for("react.element"), E = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), _ = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, G = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[G];
      return typeof r == "function" ? r : null;
    }
    var k = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        o("error", e, t);
      }
    }
    function o(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var l = !1, We = !1, Me = !1, $e = !1, Le = !1, se;
    se = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === P || Le || e === m || e === S || e === g || $e || e === F || l || We || Me || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === y || e.$$typeof === R || e.$$typeof === _ || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case E:
          return "Portal";
        case P:
          return "Profiler";
        case m:
          return "StrictMode";
        case S:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ue(r) + ".Consumer";
          case R:
            var t = e;
            return ue(t._context) + ".Provider";
          case p:
            return Ne(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case j: {
            var s = e, u = s._payload, i = s._init;
            try {
              return O(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, ce, fe, de, pe, ve, ge, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ve() {
      {
        if ($ === 0) {
          ce = console.log, fe = console.info, de = console.warn, pe = console.error, ve = console.group, ge = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        $++;
      }
    }
    function Ue() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ce
            }),
            info: D({}, e, {
              value: fe
            }),
            warn: D({}, e, {
              value: de
            }),
            error: D({}, e, {
              value: pe
            }),
            group: D({}, e, {
              value: ve
            }),
            groupCollapsed: D({}, e, {
              value: ge
            }),
            groupEnd: D({}, e, {
              value: be
            })
          });
        }
        $ < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = k.ReactCurrentDispatcher, Z;
    function z(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, B;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ze();
    }
    function he(e, r) {
      if (!e || Q)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = H.current, H.current = null, Ve();
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
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), b = n.stack.split(`
`), f = a.length - 1, d = b.length - 1; f >= 1 && d >= 0 && a[f] !== b[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (a[f] !== b[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || a[f] !== b[d]) {
                    var C = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, C), C;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        Q = !1, H.current = u, Ue(), Error.prepareStackTrace = s;
      }
      var W = e ? e.displayName || e.name : "", A = W ? z(W) : "";
      return typeof e == "function" && B.set(e, A), A;
    }
    function Be(e, r, t) {
      return he(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ke(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case S:
          return z("Suspense");
        case g:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Be(e.render);
          case y:
            return K(e.type, r, t);
          case j: {
            var n = e, s = n._payload, u = n._init;
            try {
              return K(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, xe = {}, me = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, s) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (q(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in xe) && (xe[a.message] = !0, q(s), v("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Je = Array.isArray;
    function ee(e) {
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
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Xe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Ee(e);
    }
    var _e = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Te;
    function Ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Te || (Te = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, s, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: T,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function or(e, r, t, n, s) {
      {
        var u, i = {}, a = null, b = null;
        t !== void 0 && (Re(t), a = "" + t), Qe(r) && (Re(r.key), a = "" + r.key), Ze(r) && (b = r.ref, er(r, s));
        for (u in r)
          L.call(r, u) && !He.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            i[u] === void 0 && (i[u] = f[u]);
        }
        if (a || b) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(i, d), b && tr(i, d);
        }
        return nr(e, a, b, s, n, _e.current, i);
      }
    }
    var re = k.ReactCurrentOwner, Se = k.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function je() {
      {
        if (re.current) {
          var e = O(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var we = {};
    function ir(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + O(e._owner.type) + "."), I(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && ke(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = X(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              ne(i.value) && ke(i.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var s = O(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Pe = {};
    function De(e, r, t, n, s, u) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar();
          b ? a += b : a += je();
          var f;
          e === null ? f = "null" : ee(e) ? f = "array" : e !== void 0 && e.$$typeof === T ? (f = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var d = or(e, r, t, s, u);
        if (d == null)
          return d;
        if (i) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (ee(C)) {
                for (var W = 0; W < C.length; W++)
                  Oe(C[W], e);
                Object.freeze && Object.freeze(C);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(C, e);
        }
        if (L.call(r, "key")) {
          var A = O(e), h = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), oe = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[A + oe]) {
            var pr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, A, pr, A), Pe[A + oe] = !0;
          }
        }
        return e === w ? sr(d) : lr(d), d;
      }
    }
    function ur(e, r, t) {
      return De(e, r, t, !0);
    }
    function cr(e, r, t) {
      return De(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    N.Fragment = w, N.jsx = fr, N.jsxs = dr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ie.exports = br() : ie.exports = yr();
var c = ie.exports;
function hr() {
  const [x, T] = M([]), [E, w] = M(""), [m, P] = M(""), [R, _] = M(null), [p, S] = M(""), [g, y] = M(""), j = () => {
    if (E.trim() === "" && m.trim() === "") return;
    const o = {
      id: Date.now(),
      title: E.trim() || "Untitled",
      content: m.trim(),
      createdAt: Date.now()
    };
    T([o, ...x]), w(""), P("");
  }, F = (o) => {
    T(x.filter((l) => l.id !== o)), R === o && _(null);
  }, U = (o) => {
    _(o.id), S(o.title), y(o.content);
  }, G = () => {
    R !== null && (T(
      x.map(
        (o) => o.id === R ? {
          ...o,
          title: p.trim() || "Untitled",
          content: g.trim()
        } : o
      )
    ), _(null), S(""), y(""));
  }, X = () => {
    _(null), S(""), y("");
  }, k = (o) => {
    o.key === "Enter" && (o.metaKey || o.ctrlKey) && j();
  }, v = (o) => new Date(o).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx(
          "div",
          {
            style: {
              borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
              padding: "16px"
            },
            children: /* @__PURE__ */ c.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                },
                children: [
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      type: "text",
                      value: E,
                      onChange: (o) => w(o.target.value),
                      placeholder: "Note title...",
                      style: {
                        padding: "8px 12px",
                        fontSize: "16px",
                        fontWeight: "500",
                        border: "1px solid rgba(17, 24, 39, 0.15)",
                        borderRadius: "8px",
                        outline: "none"
                      }
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    "textarea",
                    {
                      value: m,
                      onChange: (o) => P(o.target.value),
                      onKeyDown: k,
                      placeholder: "Write your note here... (Cmd/Ctrl + Enter to save)",
                      rows: 3,
                      style: {
                        padding: "8px 12px",
                        fontSize: "16px",
                        border: "1px solid rgba(17, 24, 39, 0.15)",
                        borderRadius: "8px",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit"
                      }
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      onClick: j,
                      disabled: E.trim() === "" && m.trim() === "",
                      style: {
                        padding: "8px 16px",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#ffffff",
                        backgroundColor: "#3b82f6",
                        border: "none",
                        borderRadius: "8px",
                        cursor: E.trim() === "" && m.trim() === "" ? "not-allowed" : "pointer",
                        opacity: E.trim() === "" && m.trim() === "" ? 0.5 : 1,
                        transition: "background-color 0.2s",
                        alignSelf: "flex-start"
                      },
                      onMouseEnter: (o) => {
                        (E.trim() !== "" || m.trim() !== "") && (o.currentTarget.style.backgroundColor = "#2563eb");
                      },
                      onMouseLeave: (o) => {
                        (E.trim() !== "" || m.trim() !== "") && (o.currentTarget.style.backgroundColor = "#3b82f6");
                      },
                      children: "Add Note"
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden"
            },
            children: x.length === 0 ? /* @__PURE__ */ c.jsx(
              "div",
              {
                style: {
                  padding: "32px",
                  textAlign: "center",
                  color: "#6b7280",
                  fontSize: "16px"
                },
                children: "No notes yet. Create one above!"
              }
            ) : /* @__PURE__ */ c.jsx("div", { children: x.map((o) => /* @__PURE__ */ c.jsx(
              "div",
              {
                style: {
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s"
                },
                onMouseEnter: (l) => {
                  R !== o.id && (l.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)");
                },
                onMouseLeave: (l) => {
                  R !== o.id && (l.currentTarget.style.backgroundColor = "transparent");
                },
                children: R === o.id ? /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    },
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "input",
                        {
                          type: "text",
                          value: p,
                          onChange: (l) => S(l.target.value),
                          style: {
                            padding: "8px 12px",
                            fontSize: "16px",
                            fontWeight: "500",
                            border: "1px solid rgba(17, 24, 39, 0.15)",
                            borderRadius: "8px",
                            outline: "none"
                          }
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "textarea",
                        {
                          value: g,
                          onChange: (l) => y(l.target.value),
                          rows: 4,
                          style: {
                            padding: "8px 12px",
                            fontSize: "16px",
                            border: "1px solid rgba(17, 24, 39, 0.15)",
                            borderRadius: "8px",
                            outline: "none",
                            resize: "vertical",
                            fontFamily: "inherit"
                          }
                        }
                      ),
                      /* @__PURE__ */ c.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            gap: "8px"
                          },
                          children: [
                            /* @__PURE__ */ c.jsx(
                              "button",
                              {
                                onClick: G,
                                style: {
                                  padding: "6px 12px",
                                  fontSize: "14px",
                                  color: "#ffffff",
                                  backgroundColor: "#3b82f6",
                                  border: "none",
                                  borderRadius: "6px",
                                  cursor: "pointer",
                                  transition: "background-color 0.2s"
                                },
                                onMouseEnter: (l) => {
                                  l.currentTarget.style.backgroundColor = "#2563eb";
                                },
                                onMouseLeave: (l) => {
                                  l.currentTarget.style.backgroundColor = "#3b82f6";
                                },
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ c.jsx(
                              "button",
                              {
                                onClick: X,
                                style: {
                                  padding: "6px 12px",
                                  fontSize: "14px",
                                  color: "#6b7280",
                                  backgroundColor: "transparent",
                                  border: "1px solid rgba(17, 24, 39, 0.15)",
                                  borderRadius: "6px",
                                  cursor: "pointer",
                                  transition: "all 0.2s"
                                },
                                onMouseEnter: (l) => {
                                  l.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                                },
                                onMouseLeave: (l) => {
                                  l.currentTarget.style.backgroundColor = "transparent";
                                },
                                children: "Cancel"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "8px"
                    },
                    children: [
                      /* @__PURE__ */ c.jsxs("div", { style: { flex: 1 }, children: [
                        /* @__PURE__ */ c.jsx(
                          "h3",
                          {
                            style: {
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "#111827",
                              margin: "0 0 4px 0"
                            },
                            children: o.title
                          }
                        ),
                        /* @__PURE__ */ c.jsx(
                          "p",
                          {
                            style: {
                              fontSize: "14px",
                              color: "#6b7280",
                              margin: "0 0 8px 0"
                            },
                            children: v(o.createdAt)
                          }
                        ),
                        o.content && /* @__PURE__ */ c.jsx(
                          "p",
                          {
                            style: {
                              fontSize: "16px",
                              color: "#111827",
                              margin: "0",
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word"
                            },
                            children: o.content
                          }
                        )
                      ] }),
                      /* @__PURE__ */ c.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            gap: "8px"
                          },
                          children: [
                            /* @__PURE__ */ c.jsx(
                              "button",
                              {
                                onClick: () => U(o),
                                style: {
                                  padding: "6px 12px",
                                  fontSize: "14px",
                                  color: "#3b82f6",
                                  backgroundColor: "transparent",
                                  border: "1px solid #3b82f6",
                                  borderRadius: "6px",
                                  cursor: "pointer",
                                  transition: "all 0.2s"
                                },
                                onMouseEnter: (l) => {
                                  l.currentTarget.style.backgroundColor = "#3b82f6", l.currentTarget.style.color = "#ffffff";
                                },
                                onMouseLeave: (l) => {
                                  l.currentTarget.style.backgroundColor = "transparent", l.currentTarget.style.color = "#3b82f6";
                                },
                                children: "Edit"
                              }
                            ),
                            /* @__PURE__ */ c.jsx(
                              "button",
                              {
                                onClick: () => F(o.id),
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
                                onMouseEnter: (l) => {
                                  l.currentTarget.style.backgroundColor = "#ef4444", l.currentTarget.style.color = "#ffffff";
                                },
                                onMouseLeave: (l) => {
                                  l.currentTarget.style.backgroundColor = "transparent", l.currentTarget.style.color = "#ef4444";
                                },
                                children: "Delete"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ) })
              },
              o.id
            )) })
          }
        )
      ]
    }
  );
}
let V = null;
function Er(x) {
  V = ae(x), V.render(le.createElement(hr));
}
function Rr() {
  V && (V.unmount(), V = null);
}
export {
  Er as mount,
  Rr as unmount
};
