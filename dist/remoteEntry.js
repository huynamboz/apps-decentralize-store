function q_(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var dE = { exports: {} }, mt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function X_() {
  if (XR) return mt;
  XR = 1;
  var Z = Symbol.for("react.element"), X = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), Tt = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), S = Symbol.for("react.context"), kt = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ve = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), ee = Symbol.iterator;
  function Ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = ee && _[ee] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, yt = {};
  function pt(_, P, He) {
    this.props = _, this.context = P, this.refs = yt, this.updater = He || ue;
  }
  pt.prototype.isReactComponent = {}, pt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, pt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = pt.prototype;
  function ft(_, P, He) {
    this.props = _, this.context = P, this.refs = yt, this.updater = He || ue;
  }
  var $e = ft.prototype = new fn();
  $e.constructor = ft, We($e, pt.prototype), $e.isPureReactComponent = !0;
  var vt = Array.isArray, be = Object.prototype.hasOwnProperty, ot = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(_, P, He) {
    var Ue, rt = {}, Je = null, Ke = null;
    if (P != null) for (Ue in P.ref !== void 0 && (Ke = P.ref), P.key !== void 0 && (Je = "" + P.key), P) be.call(P, Ue) && !Fe.hasOwnProperty(Ue) && (rt[Ue] = P[Ue]);
    var et = arguments.length - 2;
    if (et === 1) rt.children = He;
    else if (1 < et) {
      for (var at = Array(et), Bt = 0; Bt < et; Bt++) at[Bt] = arguments[Bt + 2];
      rt.children = at;
    }
    if (_ && _.defaultProps) for (Ue in et = _.defaultProps, et) rt[Ue] === void 0 && (rt[Ue] = et[Ue]);
    return { $$typeof: Z, type: _, key: Je, ref: Ke, props: rt, _owner: ot.current };
  }
  function Ht(_, P) {
    return { $$typeof: Z, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Zt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === Z;
  }
  function ln(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(He) {
      return P[He];
    });
  }
  var bt = /\/+/g;
  function ke(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? ln("" + _.key) : P.toString(36);
  }
  function jt(_, P, He, Ue, rt) {
    var Je = typeof _;
    (Je === "undefined" || Je === "boolean") && (_ = null);
    var Ke = !1;
    if (_ === null) Ke = !0;
    else switch (Je) {
      case "string":
      case "number":
        Ke = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case Z:
          case X:
            Ke = !0;
        }
    }
    if (Ke) return Ke = _, rt = rt(Ke), _ = Ue === "" ? "." + ke(Ke, 0) : Ue, vt(rt) ? (He = "", _ != null && (He = _.replace(bt, "$&/") + "/"), jt(rt, P, He, "", function(Bt) {
      return Bt;
    })) : rt != null && (Zt(rt) && (rt = Ht(rt, He + (!rt.key || Ke && Ke.key === rt.key ? "" : ("" + rt.key).replace(bt, "$&/") + "/") + _)), P.push(rt)), 1;
    if (Ke = 0, Ue = Ue === "" ? "." : Ue + ":", vt(_)) for (var et = 0; et < _.length; et++) {
      Je = _[et];
      var at = Ue + ke(Je, et);
      Ke += jt(Je, P, He, at, rt);
    }
    else if (at = Ce(_), typeof at == "function") for (_ = at.call(_), et = 0; !(Je = _.next()).done; ) Je = Je.value, at = Ue + ke(Je, et++), Ke += jt(Je, P, He, at, rt);
    else if (Je === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Ke;
  }
  function _t(_, P, He) {
    if (_ == null) return _;
    var Ue = [], rt = 0;
    return jt(_, Ue, "", "", function(Je) {
      return P.call(He, Je, rt++);
    }), Ue;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(He) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = He);
      }, function(He) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = He);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ee = { current: null }, K = { transition: null }, Re = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: K, ReactCurrentOwner: ot };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return mt.Children = { map: _t, forEach: function(_, P, He) {
    _t(_, function() {
      P.apply(this, arguments);
    }, He);
  }, count: function(_) {
    var P = 0;
    return _t(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return _t(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Zt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, mt.Component = pt, mt.Fragment = A, mt.Profiler = Tt, mt.PureComponent = ft, mt.StrictMode = dt, mt.Suspense = de, mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, mt.act = ne, mt.cloneElement = function(_, P, He) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ue = We({}, _.props), rt = _.key, Je = _.ref, Ke = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Je = P.ref, Ke = ot.current), P.key !== void 0 && (rt = "" + P.key), _.type && _.type.defaultProps) var et = _.type.defaultProps;
      for (at in P) be.call(P, at) && !Fe.hasOwnProperty(at) && (Ue[at] = P[at] === void 0 && et !== void 0 ? et[at] : P[at]);
    }
    var at = arguments.length - 2;
    if (at === 1) Ue.children = He;
    else if (1 < at) {
      et = Array(at);
      for (var Bt = 0; Bt < at; Bt++) et[Bt] = arguments[Bt + 2];
      Ue.children = et;
    }
    return { $$typeof: Z, type: _.type, key: rt, ref: Je, props: Ue, _owner: Ke };
  }, mt.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: je, _context: _ }, _.Consumer = _;
  }, mt.createElement = an, mt.createFactory = function(_) {
    var P = an.bind(null, _);
    return P.type = _, P;
  }, mt.createRef = function() {
    return { current: null };
  }, mt.forwardRef = function(_) {
    return { $$typeof: kt, render: _ };
  }, mt.isValidElement = Zt, mt.lazy = function(_) {
    return { $$typeof: ut, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, mt.memo = function(_, P) {
    return { $$typeof: ve, type: _, compare: P === void 0 ? null : P };
  }, mt.startTransition = function(_) {
    var P = K.transition;
    K.transition = {};
    try {
      _();
    } finally {
      K.transition = P;
    }
  }, mt.unstable_act = ne, mt.useCallback = function(_, P) {
    return Ee.current.useCallback(_, P);
  }, mt.useContext = function(_) {
    return Ee.current.useContext(_);
  }, mt.useDebugValue = function() {
  }, mt.useDeferredValue = function(_) {
    return Ee.current.useDeferredValue(_);
  }, mt.useEffect = function(_, P) {
    return Ee.current.useEffect(_, P);
  }, mt.useId = function() {
    return Ee.current.useId();
  }, mt.useImperativeHandle = function(_, P, He) {
    return Ee.current.useImperativeHandle(_, P, He);
  }, mt.useInsertionEffect = function(_, P) {
    return Ee.current.useInsertionEffect(_, P);
  }, mt.useLayoutEffect = function(_, P) {
    return Ee.current.useLayoutEffect(_, P);
  }, mt.useMemo = function(_, P) {
    return Ee.current.useMemo(_, P);
  }, mt.useReducer = function(_, P, He) {
    return Ee.current.useReducer(_, P, He);
  }, mt.useRef = function(_) {
    return Ee.current.useRef(_);
  }, mt.useState = function(_) {
    return Ee.current.useState(_);
  }, mt.useSyncExternalStore = function(_, P, He) {
    return Ee.current.useSyncExternalStore(_, P, He);
  }, mt.useTransition = function() {
    return Ee.current.useTransition();
  }, mt.version = "18.3.1", mt;
}
var Jp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jp.exports;
var KR;
function K_() {
  return KR || (KR = 1, function(Z, X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", dt = Symbol.for("react.element"), Tt = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), kt = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), ve = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), yt = Symbol.for("react.offscreen"), pt = Symbol.iterator, fn = "@@iterator";
      function ft(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = pt && h[pt] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var $e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, vt = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, an = null;
      function Ht(h) {
        an = h;
      }
      Fe.setExtraStackFrame = function(h) {
        an = h;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = Fe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Zt = !1, ln = !1, bt = !1, ke = !1, jt = !1, _t = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: vt,
        ReactCurrentOwner: ot
      };
      _t.ReactDebugCurrentFrame = Fe, _t.ReactCurrentActQueue = be;
      function Ot(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          K("warn", h, N);
        }
      }
      function Ee(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          K("error", h, N);
        }
      }
      function K(h, C, N) {
        {
          var j = _t.ReactDebugCurrentFrame, q = j.getStackAddendum();
          q !== "" && (C += "%s", N = N.concat([q]));
          var Oe = N.map(function(re) {
            return String(re);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var Re = {};
      function ne(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", q = j + "." + C;
          if (Re[q])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Re[q] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          ne(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, j) {
          ne(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, j) {
          ne(h, "setState");
        }
      }, P = Object.assign, He = {};
      Object.freeze(He);
      function Ue(h, C, N) {
        this.props = h, this.context = C, this.refs = He, this.updater = N || _;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ue.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var rt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Je = function(h, C) {
          Object.defineProperty(Ue.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ke in rt)
          rt.hasOwnProperty(Ke) && Je(Ke, rt[Ke]);
      }
      function et() {
      }
      et.prototype = Ue.prototype;
      function at(h, C, N) {
        this.props = h, this.context = C, this.refs = He, this.updater = N || _;
      }
      var Bt = at.prototype = new et();
      Bt.constructor = at, P(Bt, Ue.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var xr = Array.isArray;
      function Cn(h) {
        return xr(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Vn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (Vn(h))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var q = C.displayName || C.name || "";
        return q !== "" ? N + "(" + q + ")" : N;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case je:
            return "Fragment";
          case Tt:
            return "Portal";
          case kt:
            return "Profiler";
          case S:
            return "StrictMode";
          case ee:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ve:
              var C = h;
              return oa(C) + ".Consumer";
            case de:
              var N = h;
              return oa(N._context) + ".Provider";
            case ut:
              return si(h, h.render, "ForwardRef");
            case ue:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case We: {
              var q = h, Oe = q._payload, re = q._init;
              try {
                return qn(re(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, Yn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ia, Ln;
      Ln = {};
      function Sr(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Wa(h, C) {
        var N = function() {
          gr || (gr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, C) {
        var N = function() {
          Ia || (Ia = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function J(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = qn(ot.current.type);
          Ln[C] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var Te = function(h, C, N, j, q, Oe, re) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: dt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: re,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ne, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function tt(h, C, N) {
        var j, q = {}, Oe = null, re = null, Ne = null, ct = null;
        if (C != null) {
          Sr(C) && (re = C.ref, J(C)), sa(C) && (Ir(C.key), Oe = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, ct = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !Yn.hasOwnProperty(j) && (q[j] = C[j]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          q.children = N;
        else if (xt > 1) {
          for (var nn = Array(xt), $t = 0; $t < xt; $t++)
            nn[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(nn), q.children = nn;
        }
        if (h && h.defaultProps) {
          var nt = h.defaultProps;
          for (j in nt)
            q[j] === void 0 && (q[j] = nt[j]);
        }
        if (Oe || re) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Wa(q, Qt), re && ci(q, Qt);
        }
        return Te(h, Oe, re, Ne, ct, ot.current, q);
      }
      function Ft(h, C) {
        var N = Te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Jt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, q = P({}, h.props), Oe = h.key, re = h.ref, Ne = h._self, ct = h._source, xt = h._owner;
        if (C != null) {
          Sr(C) && (re = C.ref, xt = ot.current), sa(C) && (Ir(C.key), Oe = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !Yn.hasOwnProperty(j) && (C[j] === void 0 && nn !== void 0 ? q[j] = nn[j] : q[j] = C[j]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          q.children = N;
        else if ($t > 1) {
          for (var nt = Array($t), Qt = 0; Qt < $t; Qt++)
            nt[Qt] = arguments[Qt + 2];
          q.children = nt;
        }
        return Te(h.type, Oe, re, Ne, ct, xt, q);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === dt;
      }
      var un = ".", Xn = ":";
      function en(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(q) {
          return N[q];
        });
        return "$" + j;
      }
      var Yt = !1, It = /\/+/g;
      function ca(h) {
        return h.replace(It, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), en("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, N, j, q) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var re = !1;
        if (h === null)
          re = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case dt:
                case Tt:
                  re = !0;
              }
          }
        if (re) {
          var Ne = h, ct = q(Ne), xt = j === "" ? un + Er(Ne, 0) : j;
          if (Cn(ct)) {
            var nn = "";
            xt != null && (nn = ca(xt) + "/"), Ta(ct, C, nn, "", function(qf) {
              return qf;
            });
          } else ct != null && (vn(ct) && (ct.key && (!Ne || Ne.key !== ct.key) && Ir(ct.key), ct = Ft(
            ct,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ct.key && (!Ne || Ne.key !== ct.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + ct.key) + "/"
            ) : "") + xt
          )), C.push(ct));
          return 1;
        }
        var $t, nt, Qt = 0, hn = j === "" ? un : j + Xn;
        if (Cn(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            $t = h[Cl], nt = hn + Er($t, Cl), Qt += Ta($t, C, N, nt, q);
        else {
          var Go = ft(h);
          if (typeof Go == "function") {
            var Vi = h;
            Go === Vi.entries && (Yt || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var qo = Go.call(Vi), uu, Gf = 0; !(uu = qo.next()).done; )
              $t = uu.value, nt = hn + Er($t, Gf++), Qt += Ta($t, C, N, nt, q);
          } else if (Oe === "object") {
            var uc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (uc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : uc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, C, N) {
        if (h == null)
          return h;
        var j = [], q = 0;
        return Ta(h, j, "", "", function(Oe) {
          return C.call(N, Oe, q++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Fi(h, function() {
          C++;
        }), C;
      }
      function Jl(h, C, N) {
        Fi(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function dl(h) {
        return Fi(h, function(C) {
          return C;
        }) || [];
      }
      function pl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function eu(h) {
        var C = {
          $$typeof: ve,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: de,
          _context: C
        };
        var N = !1, j = !1, q = !1;
        {
          var Oe = {
            $$typeof: ve,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return j || (j = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(re) {
                C.Provider = re;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(re) {
                C._currentValue = re;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(re) {
                C._currentValue2 = re;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(re) {
                C._threadCount = re;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(re) {
                q || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), q = !0);
              }
            }
          }), C.Consumer = Oe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var br = -1, _r = 0, rr = 1, fi = 2;
      function $a(h) {
        if (h._status === br) {
          var C = h._result, N = C();
          if (N.then(function(Oe) {
            if (h._status === _r || h._status === br) {
              var re = h;
              re._status = rr, re._result = Oe;
            }
          }, function(Oe) {
            if (h._status === _r || h._status === br) {
              var re = h;
              re._status = fi, re._result = Oe;
            }
          }), h._status === br) {
            var j = h;
            j._status = _r, j._result = N;
          }
        }
        if (h._status === rr) {
          var q = h._result;
          return q === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: br,
          _result: h
        }, N = {
          $$typeof: We,
          _payload: C,
          _init: $a
        };
        {
          var j, q;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Oe) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Oe, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Oe) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Oe, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function pi(h) {
        h != null && h.$$typeof === ue ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ee("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ut,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function B(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === je || h === kt || jt || h === S || h === ee || h === Ce || ke || h === yt || Zt || ln || bt || typeof h == "object" && h !== null && (h.$$typeof === We || h.$$typeof === ue || h.$$typeof === de || h.$$typeof === ve || h.$$typeof === ut || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ae(h, C) {
        B(h) || Ee("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(q) {
              j = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return N;
      }
      function he() {
        var h = $e.current;
        return h === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = he();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = he();
        return C.useState(h);
      }
      function st(h, C, N) {
        var j = he();
        return j.useReducer(h, C, N);
      }
      function it(h) {
        var C = he();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var N = he();
        return N.useEffect(h, C);
      }
      function tn(h, C) {
        var N = he();
        return N.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var N = he();
        return N.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var N = he();
        return N.useCallback(h, C);
      }
      function Qa(h, C) {
        var N = he();
        return N.useMemo(h, C);
      }
      function Ga(h, C, N) {
        var j = he();
        return j.useImperativeHandle(h, C, N);
      }
      function qe(h, C) {
        {
          var N = he();
          return N.useDebugValue(h, C);
        }
      }
      function Ze() {
        var h = he();
        return h.useTransition();
      }
      function qa(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function tu() {
        var h = he();
        return h.useId();
      }
      function nu(h, C, N) {
        var j = he();
        return j.useSyncExternalStore(h, C, N);
      }
      var vl = 0, $u, hl, Wr, Io, Dr, ic, lc;
      function Qu() {
      }
      Qu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            $u = console.log, hl = console.info, Wr = console.warn, Io = console.error, Dr = console.group, ic = console.groupCollapsed, lc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Qu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          vl++;
        }
      }
      function fa() {
        {
          if (vl--, vl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: $u
              }),
              info: P({}, h, {
                value: hl
              }),
              warn: P({}, h, {
                value: Wr
              }),
              error: P({}, h, {
                value: Io
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: ic
              }),
              groupEnd: P({}, h, {
                value: lc
              })
            });
          }
          vl < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = _t.ReactCurrentDispatcher, Ka;
      function Gu(h, C, N) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (q) {
              var j = q.stack.trim().match(/\n( *(at )?)/);
              Ka = j && j[1] || "";
            }
          return `
` + Ka + h;
        }
      }
      var ru = !1, yl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new qu();
      }
      function Xu(h, C) {
        if (!h || ru)
          return "";
        {
          var N = yl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        ru = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Xa.current, Xa.current = null, ml();
        try {
          if (C) {
            var re = function() {
              throw Error();
            };
            if (Object.defineProperty(re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(re, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], re);
            } else {
              try {
                re.call();
              } catch (hn) {
                j = hn;
              }
              h.call(re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              j = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && j && typeof hn.stack == "string") {
            for (var Ne = hn.stack.split(`
`), ct = j.stack.split(`
`), xt = Ne.length - 1, nn = ct.length - 1; xt >= 1 && nn >= 0 && Ne[xt] !== ct[nn]; )
              nn--;
            for (; xt >= 1 && nn >= 0; xt--, nn--)
              if (Ne[xt] !== ct[nn]) {
                if (xt !== 1 || nn !== 1)
                  do
                    if (xt--, nn--, nn < 0 || Ne[xt] !== ct[nn]) {
                      var $t = `
` + Ne[xt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, $t), $t;
                    }
                  while (xt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          ru = !1, Xa.current = Oe, fa(), Error.prepareStackTrace = q;
        }
        var nt = h ? h.displayName || h.name : "", Qt = nt ? Gu(nt) : "";
        return typeof h == "function" && yl.set(h, Qt), Qt;
      }
      function Hi(h, C, N) {
        return Xu(h, !1);
      }
      function $f(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Pi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, $f(h));
        if (typeof h == "string")
          return Gu(h);
        switch (h) {
          case ee:
            return Gu("Suspense");
          case Ce:
            return Gu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ut:
              return Hi(h.render);
            case ue:
              return Pi(h.type, C, N);
            case We: {
              var j = h, q = j._payload, Oe = j._init;
              try {
                return Pi(Oe(q), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ku = _t.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Ku.setExtraStackFrame(N);
        } else
          Ku.setExtraStackFrame(null);
      }
      function Wo(h, C, N, j, q) {
        {
          var Oe = Function.call.bind(Rn);
          for (var re in h)
            if (Oe(h, re)) {
              var Ne = void 0;
              try {
                if (typeof h[re] != "function") {
                  var ct = Error((j || "React class") + ": " + N + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                Ne = h[re](C, re, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Ne = xt;
              }
              Ne && !(Ne instanceof Error) && (wt(q), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, re, typeof Ne), wt(null)), Ne instanceof Error && !(Ne.message in Lt) && (Lt[Ne.message] = !0, wt(q), Ee("Failed %s type: %s", N, Ne.message), wt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Ht(N);
        } else
          Ht(null);
      }
      var Be;
      Be = !1;
      function Zu() {
        if (ot.current) {
          var h = qn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var kr = {};
      function mi(h) {
        var C = Zu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function sn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = mi(C);
          if (!kr[N]) {
            kr[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ot.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), vi(null);
          }
        }
      }
      function Wt(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              vn(j) && sn(j, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = ft(h);
            if (typeof q == "function" && q !== h.entries)
              for (var Oe = q.call(h), re; !(re = Oe.next()).done; )
                vn(re.value) && sn(re.value, C);
          }
        }
      }
      function gl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ut || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = qn(C);
            Wo(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Be) {
            Be = !0;
            var q = qn(C);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function In(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              vi(h), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, N) {
        var j = B(h);
        if (!j) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = hi(C);
          Oe ? q += Oe : q += Zu();
          var re;
          h === null ? re = "null" : Cn(h) ? re = "array" : h !== void 0 && h.$$typeof === dt ? (re = "<" + (qn(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, q);
        }
        var Ne = tt.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (j)
          for (var ct = 2; ct < arguments.length; ct++)
            Wt(arguments[ct], h);
        return h === je ? In(Ne) : gl(Ne), Ne;
      }
      var wa = !1;
      function au(h) {
        var C = Or.bind(null, h);
        return C.type = h, wa || (wa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function $o(h, C, N) {
        for (var j = Jt.apply(this, arguments), q = 2; q < arguments.length; q++)
          Wt(arguments[q], j.type);
        return gl(j), j;
      }
      function Qo(h, C) {
        var N = vt.transition;
        vt.transition = {};
        var j = vt.transition;
        vt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (vt.transition = N, N === null && j._updatedFibers) {
            var q = j._updatedFibers.size;
            q > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, iu = null;
      function Qf(h) {
        if (iu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = Z && Z[C];
            iu = N.call(Z, "timers").setImmediate;
          } catch {
            iu = function(q) {
              Sl === !1 && (Sl = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = q, Oe.port2.postMessage(void 0);
            };
          }
        return iu(h);
      }
      var xa = 0, Za = !1;
      function yi(h) {
        {
          var C = xa;
          xa++, be.current === null && (be.current = []);
          var N = be.isBatchingLegacy, j;
          try {
            if (be.isBatchingLegacy = !0, j = h(), !N && be.didScheduleLegacyUpdate) {
              var q = be.current;
              q !== null && (be.didScheduleLegacyUpdate = !1, El(q));
            }
          } catch (nt) {
            throw ba(C), nt;
          } finally {
            be.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Oe = j, re = !1, Ne = {
              then: function(nt, Qt) {
                re = !0, Oe.then(function(hn) {
                  ba(C), xa === 0 ? Ju(hn, nt, Qt) : nt(hn);
                }, function(hn) {
                  ba(C), Qt(hn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              re || (Za = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var ct = j;
            if (ba(C), xa === 0) {
              var xt = be.current;
              xt !== null && (El(xt), be.current = null);
              var nn = {
                then: function(nt, Qt) {
                  be.current === null ? (be.current = [], Ju(ct, nt, Qt)) : nt(ct);
                }
              };
              return nn;
            } else {
              var $t = {
                then: function(nt, Qt) {
                  nt(ct);
                }
              };
              return $t;
            }
          }
        }
      }
      function ba(h) {
        h !== xa - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function Ju(h, C, N) {
        {
          var j = be.current;
          if (j !== null)
            try {
              El(j), Qf(function() {
                j.length === 0 ? (be.current = null, C(h)) : Ju(h, C, N);
              });
            } catch (q) {
              N(q);
            }
          else
            C(h);
        }
      }
      var eo = !1;
      function El(h) {
        if (!eo) {
          eo = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            eo = !1;
          }
        }
      }
      var lu = Or, to = $o, no = au, Ja = {
        map: Fi,
        forEach: Jl,
        count: Zl,
        toArray: dl,
        only: pl
      };
      X.Children = Ja, X.Component = Ue, X.Fragment = je, X.Profiler = kt, X.PureComponent = at, X.StrictMode = S, X.Suspense = ee, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, X.act = yi, X.cloneElement = to, X.createContext = eu, X.createElement = lu, X.createFactory = no, X.createRef = On, X.forwardRef = pi, X.isValidElement = vn, X.lazy = di, X.memo = ae, X.startTransition = Qo, X.unstable_act = yi, X.useCallback = ar, X.useContext = Ge, X.useDebugValue = qe, X.useDeferredValue = qa, X.useEffect = Tn, X.useId = tu, X.useImperativeHandle = Ga, X.useInsertionEffect = tn, X.useLayoutEffect = on, X.useMemo = Qa, X.useReducer = st, X.useRef = it, X.useState = Ye, X.useSyncExternalStore = nu, X.useTransition = Ze, X.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
process.env.NODE_ENV === "production" ? dE.exports = X_() : dE.exports = K_();
var Wf = dE.exports;
const Z_ = /* @__PURE__ */ q_(Wf);
var pE = { exports: {} }, Ba = {}, $m = { exports: {} }, cE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function J_() {
  return ZR || (ZR = 1, function(Z) {
    function X(K, Re) {
      var ne = K.length;
      K.push(Re);
      e: for (; 0 < ne; ) {
        var _ = ne - 1 >>> 1, P = K[_];
        if (0 < Tt(P, Re)) K[_] = Re, K[ne] = P, ne = _;
        else break e;
      }
    }
    function A(K) {
      return K.length === 0 ? null : K[0];
    }
    function dt(K) {
      if (K.length === 0) return null;
      var Re = K[0], ne = K.pop();
      if (ne !== Re) {
        K[0] = ne;
        e: for (var _ = 0, P = K.length, He = P >>> 1; _ < He; ) {
          var Ue = 2 * (_ + 1) - 1, rt = K[Ue], Je = Ue + 1, Ke = K[Je];
          if (0 > Tt(rt, ne)) Je < P && 0 > Tt(Ke, rt) ? (K[_] = Ke, K[Je] = ne, _ = Je) : (K[_] = rt, K[Ue] = ne, _ = Ue);
          else if (Je < P && 0 > Tt(Ke, ne)) K[_] = Ke, K[Je] = ne, _ = Je;
          else break e;
        }
      }
      return Re;
    }
    function Tt(K, Re) {
      var ne = K.sortIndex - Re.sortIndex;
      return ne !== 0 ? ne : K.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var je = performance;
      Z.unstable_now = function() {
        return je.now();
      };
    } else {
      var S = Date, kt = S.now();
      Z.unstable_now = function() {
        return S.now() - kt;
      };
    }
    var de = [], ve = [], ut = 1, ee = null, Ce = 3, ue = !1, We = !1, yt = !1, pt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, ft = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $e(K) {
      for (var Re = A(ve); Re !== null; ) {
        if (Re.callback === null) dt(ve);
        else if (Re.startTime <= K) dt(ve), Re.sortIndex = Re.expirationTime, X(de, Re);
        else break;
        Re = A(ve);
      }
    }
    function vt(K) {
      if (yt = !1, $e(K), !We) if (A(de) !== null) We = !0, Ot(be);
      else {
        var Re = A(ve);
        Re !== null && Ee(vt, Re.startTime - K);
      }
    }
    function be(K, Re) {
      We = !1, yt && (yt = !1, fn(an), an = -1), ue = !0;
      var ne = Ce;
      try {
        for ($e(Re), ee = A(de); ee !== null && (!(ee.expirationTime > Re) || K && !ln()); ) {
          var _ = ee.callback;
          if (typeof _ == "function") {
            ee.callback = null, Ce = ee.priorityLevel;
            var P = _(ee.expirationTime <= Re);
            Re = Z.unstable_now(), typeof P == "function" ? ee.callback = P : ee === A(de) && dt(de), $e(Re);
          } else dt(de);
          ee = A(de);
        }
        if (ee !== null) var He = !0;
        else {
          var Ue = A(ve);
          Ue !== null && Ee(vt, Ue.startTime - Re), He = !1;
        }
        return He;
      } finally {
        ee = null, Ce = ne, ue = !1;
      }
    }
    var ot = !1, Fe = null, an = -1, Ht = 5, Zt = -1;
    function ln() {
      return !(Z.unstable_now() - Zt < Ht);
    }
    function bt() {
      if (Fe !== null) {
        var K = Z.unstable_now();
        Zt = K;
        var Re = !0;
        try {
          Re = Fe(!0, K);
        } finally {
          Re ? ke() : (ot = !1, Fe = null);
        }
      } else ot = !1;
    }
    var ke;
    if (typeof ft == "function") ke = function() {
      ft(bt);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), _t = jt.port2;
      jt.port1.onmessage = bt, ke = function() {
        _t.postMessage(null);
      };
    } else ke = function() {
      pt(bt, 0);
    };
    function Ot(K) {
      Fe = K, ot || (ot = !0, ke());
    }
    function Ee(K, Re) {
      an = pt(function() {
        K(Z.unstable_now());
      }, Re);
    }
    Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, Z.unstable_continueExecution = function() {
      We || ue || (We = !0, Ot(be));
    }, Z.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < K ? Math.floor(1e3 / K) : 5;
    }, Z.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, Z.unstable_getFirstCallbackNode = function() {
      return A(de);
    }, Z.unstable_next = function(K) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = Ce;
      }
      var ne = Ce;
      Ce = Re;
      try {
        return K();
      } finally {
        Ce = ne;
      }
    }, Z.unstable_pauseExecution = function() {
    }, Z.unstable_requestPaint = function() {
    }, Z.unstable_runWithPriority = function(K, Re) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var ne = Ce;
      Ce = K;
      try {
        return Re();
      } finally {
        Ce = ne;
      }
    }, Z.unstable_scheduleCallback = function(K, Re, ne) {
      var _ = Z.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? _ + ne : _) : ne = _, K) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ne + P, K = { id: ut++, callback: Re, priorityLevel: K, startTime: ne, expirationTime: P, sortIndex: -1 }, ne > _ ? (K.sortIndex = ne, X(ve, K), A(de) === null && K === A(ve) && (yt ? (fn(an), an = -1) : yt = !0, Ee(vt, ne - _))) : (K.sortIndex = P, X(de, K), We || ue || (We = !0, Ot(be))), K;
    }, Z.unstable_shouldYield = ln, Z.unstable_wrapCallback = function(K) {
      var Re = Ce;
      return function() {
        var ne = Ce;
        Ce = Re;
        try {
          return K.apply(this, arguments);
        } finally {
          Ce = ne;
        }
      };
    };
  }(cE)), cE;
}
var fE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function eD() {
  return JR || (JR = 1, function(Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var X = !1, A = 5;
      function dt(J, Te) {
        var tt = J.length;
        J.push(Te), S(J, Te, tt);
      }
      function Tt(J) {
        return J.length === 0 ? null : J[0];
      }
      function je(J) {
        if (J.length === 0)
          return null;
        var Te = J[0], tt = J.pop();
        return tt !== Te && (J[0] = tt, kt(J, tt, 0)), Te;
      }
      function S(J, Te, tt) {
        for (var Ft = tt; Ft > 0; ) {
          var Jt = Ft - 1 >>> 1, vn = J[Jt];
          if (de(vn, Te) > 0)
            J[Jt] = Te, J[Ft] = vn, Ft = Jt;
          else
            return;
        }
      }
      function kt(J, Te, tt) {
        for (var Ft = tt, Jt = J.length, vn = Jt >>> 1; Ft < vn; ) {
          var un = (Ft + 1) * 2 - 1, Xn = J[un], en = un + 1, Yt = J[en];
          if (de(Xn, Te) < 0)
            en < Jt && de(Yt, Xn) < 0 ? (J[Ft] = Yt, J[en] = Te, Ft = en) : (J[Ft] = Xn, J[un] = Te, Ft = un);
          else if (en < Jt && de(Yt, Te) < 0)
            J[Ft] = Yt, J[en] = Te, Ft = en;
          else
            return;
        }
      }
      function de(J, Te) {
        var tt = J.sortIndex - Te.sortIndex;
        return tt !== 0 ? tt : J.id - Te.id;
      }
      var ve = 1, ut = 2, ee = 3, Ce = 4, ue = 5;
      function We(J, Te) {
      }
      var yt = typeof performance == "object" && typeof performance.now == "function";
      if (yt) {
        var pt = performance;
        Z.unstable_now = function() {
          return pt.now();
        };
      } else {
        var fn = Date, ft = fn.now();
        Z.unstable_now = function() {
          return fn.now() - ft;
        };
      }
      var $e = 1073741823, vt = -1, be = 250, ot = 5e3, Fe = 1e4, an = $e, Ht = [], Zt = [], ln = 1, bt = null, ke = ee, jt = !1, _t = !1, Ot = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ne(J) {
        for (var Te = Tt(Zt); Te !== null; ) {
          if (Te.callback === null)
            je(Zt);
          else if (Te.startTime <= J)
            je(Zt), Te.sortIndex = Te.expirationTime, dt(Ht, Te);
          else
            return;
          Te = Tt(Zt);
        }
      }
      function _(J) {
        if (Ot = !1, ne(J), !_t)
          if (Tt(Ht) !== null)
            _t = !0, Ln(P);
          else {
            var Te = Tt(Zt);
            Te !== null && Sr(_, Te.startTime - J);
          }
      }
      function P(J, Te) {
        _t = !1, Ot && (Ot = !1, sa()), jt = !0;
        var tt = ke;
        try {
          var Ft;
          if (!X) return He(J, Te);
        } finally {
          bt = null, ke = tt, jt = !1;
        }
      }
      function He(J, Te) {
        var tt = Te;
        for (ne(tt), bt = Tt(Ht); bt !== null && !(bt.expirationTime > tt && (!J || si())); ) {
          var Ft = bt.callback;
          if (typeof Ft == "function") {
            bt.callback = null, ke = bt.priorityLevel;
            var Jt = bt.expirationTime <= tt, vn = Ft(Jt);
            tt = Z.unstable_now(), typeof vn == "function" ? bt.callback = vn : bt === Tt(Ht) && je(Ht), ne(tt);
          } else
            je(Ht);
          bt = Tt(Ht);
        }
        if (bt !== null)
          return !0;
        var un = Tt(Zt);
        return un !== null && Sr(_, un.startTime - tt), !1;
      }
      function Ue(J, Te) {
        switch (J) {
          case ve:
          case ut:
          case ee:
          case Ce:
          case ue:
            break;
          default:
            J = ee;
        }
        var tt = ke;
        ke = J;
        try {
          return Te();
        } finally {
          ke = tt;
        }
      }
      function rt(J) {
        var Te;
        switch (ke) {
          case ve:
          case ut:
          case ee:
            Te = ee;
            break;
          default:
            Te = ke;
            break;
        }
        var tt = ke;
        ke = Te;
        try {
          return J();
        } finally {
          ke = tt;
        }
      }
      function Je(J) {
        var Te = ke;
        return function() {
          var tt = ke;
          ke = Te;
          try {
            return J.apply(this, arguments);
          } finally {
            ke = tt;
          }
        };
      }
      function Ke(J, Te, tt) {
        var Ft = Z.unstable_now(), Jt;
        if (typeof tt == "object" && tt !== null) {
          var vn = tt.delay;
          typeof vn == "number" && vn > 0 ? Jt = Ft + vn : Jt = Ft;
        } else
          Jt = Ft;
        var un;
        switch (J) {
          case ve:
            un = vt;
            break;
          case ut:
            un = be;
            break;
          case ue:
            un = an;
            break;
          case Ce:
            un = Fe;
            break;
          case ee:
          default:
            un = ot;
            break;
        }
        var Xn = Jt + un, en = {
          id: ln++,
          callback: Te,
          priorityLevel: J,
          startTime: Jt,
          expirationTime: Xn,
          sortIndex: -1
        };
        return Jt > Ft ? (en.sortIndex = Jt, dt(Zt, en), Tt(Ht) === null && en === Tt(Zt) && (Ot ? sa() : Ot = !0, Sr(_, Jt - Ft))) : (en.sortIndex = Xn, dt(Ht, en), !_t && !jt && (_t = !0, Ln(P))), en;
      }
      function et() {
      }
      function at() {
        !_t && !jt && (_t = !0, Ln(P));
      }
      function Bt() {
        return Tt(Ht);
      }
      function On(J) {
        J.callback = null;
      }
      function xr() {
        return ke;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = A, Ir = -1;
      function si() {
        var J = Z.unstable_now() - Ir;
        return !(J < Bn);
      }
      function oa() {
      }
      function qn(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Bn = Math.floor(1e3 / J) : Bn = A;
      }
      var Rn = function() {
        if (nr !== null) {
          var J = Z.unstable_now();
          Ir = J;
          var Te = !0, tt = !0;
          try {
            tt = nr(Te, J);
          } finally {
            tt ? Yn() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, Yn;
      if (typeof Re == "function")
        Yn = function() {
          Re(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ia = gr.port2;
        gr.port1.onmessage = Rn, Yn = function() {
          Ia.postMessage(null);
        };
      } else
        Yn = function() {
          Ee(Rn, 0);
        };
      function Ln(J) {
        nr = J, Cn || (Cn = !0, Yn());
      }
      function Sr(J, Te) {
        Vn = Ee(function() {
          J(Z.unstable_now());
        }, Te);
      }
      function sa() {
        K(Vn), Vn = -1;
      }
      var Wa = oa, ci = null;
      Z.unstable_IdlePriority = ue, Z.unstable_ImmediatePriority = ve, Z.unstable_LowPriority = Ce, Z.unstable_NormalPriority = ee, Z.unstable_Profiling = ci, Z.unstable_UserBlockingPriority = ut, Z.unstable_cancelCallback = On, Z.unstable_continueExecution = at, Z.unstable_forceFrameRate = qn, Z.unstable_getCurrentPriorityLevel = xr, Z.unstable_getFirstCallbackNode = Bt, Z.unstable_next = rt, Z.unstable_pauseExecution = et, Z.unstable_requestPaint = Wa, Z.unstable_runWithPriority = Ue, Z.unstable_scheduleCallback = Ke, Z.unstable_shouldYield = si, Z.unstable_wrapCallback = Je, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var eT;
function uT() {
  return eT || (eT = 1, process.env.NODE_ENV === "production" ? $m.exports = J_() : $m.exports = eD()), $m.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function tD() {
  if (tT) return Ba;
  tT = 1;
  var Z = Wf, X = uT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var dt = /* @__PURE__ */ new Set(), Tt = {};
  function je(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Tt[n] = r, n = 0; n < r.length; n++) dt.add(r[n]);
  }
  var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), de = Object.prototype.hasOwnProperty, ve = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ut = {}, ee = {};
  function Ce(n) {
    return de.call(ee, n) ? !0 : de.call(ut, n) ? !1 : ve.test(n) ? ee[n] = !0 : (ut[n] = !0, !1);
  }
  function ue(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function We(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function yt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var pt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pt[n] = new yt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pt[r] = new yt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pt[n] = new yt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pt[n] = new yt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pt[n] = new yt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pt[n] = new yt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pt[n] = new yt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pt[n] = new yt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pt[n] = new yt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function ft(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      ft
    );
    pt[r] = new yt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, ft);
    pt[r] = new yt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, ft);
    pt[r] = new yt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pt[n] = new yt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pt.xlinkHref = new yt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pt[n] = new yt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function $e(n, r, l, o) {
    var c = pt.hasOwnProperty(r) ? pt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (We(r, l, c, o) && (l = null), o || c === null ? Ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var vt = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ot = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), bt = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var He = !1;
  function Ue(n, r) {
    if (!n || He) return "";
    He = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      He = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function rt(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ue(n.type, !1), n;
      case 11:
        return n = Ue(n.type.render, !1), n;
      case 1:
        return n = Ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function Je(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case ot:
        return "Portal";
      case Ht:
        return "Profiler";
      case an:
        return "StrictMode";
      case ke:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case bt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _t:
        return r = n.displayName || null, r !== null ? r : Je(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return Je(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ke(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Je(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function at(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = at(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function xr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = at(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && $e(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Bn(n, r);
    var l = et(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function Ia(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Wa, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Wa = Wa || document.createElement("div"), Wa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Wa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function J(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Te = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    tt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var en = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, ca = null, Er = null;
  function Ta(n) {
    if (n = _e(n)) {
      if (typeof It != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = mn(r), It(n.stateNode, n.type, r));
    }
  }
  function Fi(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function Jl(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function eu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return Jl(n, r, l);
    } finally {
      pl = !1, (ca !== null || Er !== null) && (dl(), Zl());
    }
  }
  function br(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = mn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (kt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function fi(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (W) {
      this.onError(W);
    }
  }
  var $a = !1, di = null, pi = !1, R = null, B = { onError: function(n) {
    $a = !0, di = n;
  } };
  function ae(n, r, l, o, c, d, m, E, T) {
    $a = !1, di = null, fi.apply(B, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (ae.apply(this, arguments), $a) {
      if ($a) {
        var z = di;
        $a = !1, di = null;
      } else throw Error(A(198));
      pi || (pi = !0, R = z);
    }
  }
  function Ge(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ye(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function st(n) {
    if (Ge(n) !== n) throw Error(A(188));
  }
  function it(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ge(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return st(c), n;
          if (d === o) return st(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = it(n), n !== null ? tn(n) : null;
  }
  function tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = X.unstable_scheduleCallback, ar = X.unstable_cancelCallback, Qa = X.unstable_shouldYield, Ga = X.unstable_requestPaint, qe = X.unstable_now, Ze = X.unstable_getCurrentPriorityLevel, qa = X.unstable_ImmediatePriority, tu = X.unstable_UserBlockingPriority, nu = X.unstable_NormalPriority, vl = X.unstable_LowPriority, $u = X.unstable_IdlePriority, hl = null, Wr = null;
  function Io(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Qu, ic = Math.log, lc = Math.LN2;
  function Qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ic(n) / lc | 0) | 0;
  }
  var ml = 64, fa = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ka(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Gu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ru(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Gu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = ml;
    return ml <<= 1, !(ml & 4194240) && (ml = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function $f(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Ku(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Wo, vi, Be, Zu, ir = !1, hi = [], kr = null, mi = null, sn = null, Wt = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), In = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        kr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        Wt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function au(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _e(r), r !== null && Wo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function $o(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return kr = au(kr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = au(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = au(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Wt.set(d, au(Wt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, au(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Qo(n) {
    var r = pu(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ye(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Sl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = to(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = _e(l), r !== null && Wo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function iu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Qf() {
    ir = !1, kr !== null && Sl(kr) && (kr = null), mi !== null && Sl(mi) && (mi = null), sn !== null && Sl(sn) && (sn = null), Wt.forEach(iu), gl.forEach(iu);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Qf)));
  }
  function Za(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < hi.length) {
      xa(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (kr !== null && xa(kr, n), mi !== null && xa(mi, n), sn !== null && xa(sn, n), Wt.forEach(r), gl.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) Qo(l), l.blockedOn === null && In.shift();
  }
  var yi = vt.ReactCurrentBatchConfig, ba = !0;
  function Ju(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 1, El(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function eo(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 4, El(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (ba) {
      var c = to(n, r, l, o);
      if (c === null) gc(n, r, o, lu, l), wa(n, o);
      else if ($o(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = _e(c);
          if (d !== null && wt(d), d = to(n, r, l, o), d === null && gc(n, r, o, lu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else gc(n, r, o, null, l);
    }
  }
  var lu = null;
  function to(n, r, l, o) {
    if (lu = null, n = Yt(o), n = pu(n), n !== null) if (r = Ge(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ye(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return lu = n, null;
  }
  function no(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ze()) {
          case qa:
            return 1;
          case tu:
            return 4;
          case nu:
          case vl:
            return 16;
          case $u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function re(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : Oe, this.isPropagationStopped = Oe, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Ne = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ct = re(Ne), xt = ne({}, Ne, { view: 0, detail: 0 }), nn = re(xt), $t, nt, Qt, hn = ne({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? ($t = n.screenX - Qt.screenX, nt = n.screenY - Qt.screenY) : nt = $t = 0, Qt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nt;
  } }), Cl = re(hn), Go = ne({}, hn, { dataTransfer: 0 }), Vi = re(Go), qo = ne({}, xt, { relatedTarget: 0 }), uu = re(qo), Gf = ne({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uc = re(Gf), qf = ne({}, Ne, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = re(qf), Xf = ne({}, Ne, { data: 0 }), Kf = re(Xf), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gm[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return Bi;
  }
  var Jf = ne({}, xt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = re(Jf), td = ne({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = re(td), oc = ne({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), iv = re(oc), $r = ne({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = re($r), Mn = ne({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = re(Mn), nd = [9, 13, 27, 32], ro = kt && "CompositionEvent" in window, Xo = null;
  kt && "documentMode" in document && (Xo = document.documentMode);
  var Ko = kt && "TextEvent" in window && !Xo, lv = kt && (!ro || Xo && 8 < Xo && 11 >= Xo), uv = " ", sc = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ao = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (sc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && sc ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (ao) return n === "compositionend" || !ro && ov(n, r) ? (n = N(), C = h = Ja = null, ao = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Fi(o), r = rs(r, "onChange"), 0 < r.length && (l = new ct("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, ou = null;
  function dv(n) {
    fu(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (xr(r)) return n;
  }
  function Km(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (kt) {
    var ad;
    if (kt) {
      var id = "oninput" in document;
      if (!id) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), id = typeof vv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    pv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    gi && (gi.detachEvent("onpropertychange", mv), ou = gi = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Zo(ou)) {
      var r = [];
      rd(r, ou, n, Yt(n)), eu(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (hv(), gi = r, ou = l, gi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(ou);
  }
  function Jm(n, r) {
    if (n === "click") return Zo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ey;
  function Jo(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!de.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function cc(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function Rl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Rl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function es() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function fc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function io(n) {
    var r = es(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && fc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = cc(l, d);
          var m = cc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ty = kt && "documentMode" in document && 11 >= document.documentMode, lo = null, ld = null, ts = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || lo == null || lo !== Cn(o) || (o = lo, "selectionStart" in o && fc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && Jo(ts, o) || (ts = o, o = rs(ld, "onSelect"), 0 < o.length && (r = new ct("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = lo)));
  }
  function dc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var su = { animationend: dc("Animation", "AnimationEnd"), animationiteration: dc("Animation", "AnimationIteration"), animationstart: dc("Animation", "AnimationStart"), transitionend: dc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  kt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete su.animationend.animation, delete su.animationiteration.animation, delete su.animationstart.animation), "TransitionEvent" in window || delete su.transitionend.transition);
  function pc(n) {
    if (lr[n]) return lr[n];
    if (!su[n]) return n;
    var r = su[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Ev = pc("animationend"), Cv = pc("animationiteration"), Rv = pc("animationstart"), Tv = pc("transitionend"), cd = /* @__PURE__ */ new Map(), vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    cd.set(n, r), je(r, [n]);
  }
  for (var fd = 0; fd < vc.length; fd++) {
    var cu = vc[fd], ny = cu.toLowerCase(), ry = cu[0].toUpperCase() + cu.slice(1);
    _a(ny, "on" + ry);
  }
  _a(Ev, "onAnimationEnd"), _a(Cv, "onAnimationIteration"), _a(Rv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function fu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, z), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Pt(n, r) {
    var l = r[ls];
    l === void 0 && (l = r[ls] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function mc(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function uo(n) {
    if (!n[yc]) {
      n[yc] = !0, dt.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || mc(l, !1, n), mc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[yc] || (r[yc] = !0, mc("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (no(r)) {
      case 1:
        var c = Ju;
        break;
      case 4:
        c = eo;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function gc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = pu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    eu(function() {
      var z = d, W = Yt(l), Q = [];
      e: {
        var I = cd.get(n);
        if (I !== void 0) {
          var se = ct, me = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = ed;
              break;
            case "focusin":
              me = "focus", se = uu;
              break;
            case "focusout":
              me = "blur", se = uu;
              break;
            case "beforeblur":
            case "afterblur":
              se = uu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Vi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              se = uc;
              break;
            case Tv:
              se = Yi;
              break;
            case "scroll":
              se = nn;
              break;
            case "wheel":
              se = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = av;
          }
          var Se = (r & 4) !== 0, Dn = !Se && n === "scroll", D = Se ? I !== null ? I + "Capture" : null : I;
          Se = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var $ = L.stateNode;
            if (L.tag === 5 && $ !== null && (L = $, D !== null && ($ = br(x, D), $ != null && Se.push(oo(x, $, L)))), Dn) break;
            x = x.return;
          }
          0 < Se.length && (I = new se(I, me, null, l, W), Q.push({ event: I, listeners: Se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", I && l !== en && (me = l.relatedTarget || l.fromElement) && (pu(me) || me[Wi])) break e;
          if ((se || I) && (I = W.window === W ? W : (I = W.ownerDocument) ? I.defaultView || I.parentWindow : window, se ? (me = l.relatedTarget || l.toElement, se = z, me = me ? pu(me) : null, me !== null && (Dn = Ge(me), me !== Dn || me.tag !== 5 && me.tag !== 6) && (me = null)) : (se = null, me = z), se !== me)) {
            if (Se = Cl, $ = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Se = av, $ = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Dn = se == null ? I : ti(se), L = me == null ? I : ti(me), I = new Se($, x + "leave", se, l, W), I.target = Dn, I.relatedTarget = L, $ = null, pu(W) === z && (Se = new Se(D, x + "enter", me, l, W), Se.target = L, Se.relatedTarget = Dn, $ = Se), Dn = $, se && me) t: {
              for (Se = se, D = me, x = 0, L = Se; L; L = Tl(L)) x++;
              for (L = 0, $ = D; $; $ = Tl($)) L++;
              for (; 0 < x - L; ) Se = Tl(Se), x--;
              for (; 0 < L - x; ) D = Tl(D), L--;
              for (; x--; ) {
                if (Se === D || D !== null && Se === D.alternate) break t;
                Se = Tl(Se), D = Tl(D);
              }
              Se = null;
            }
            else Se = null;
            se !== null && xv(Q, I, se, Se, !1), me !== null && Dn !== null && xv(Q, Dn, me, Se, !0);
          }
        }
        e: {
          if (I = z ? ti(z) : window, se = I.nodeName && I.nodeName.toLowerCase(), se === "select" || se === "input" && I.type === "file") var ye = Km;
          else if (fv(I)) if (pv) ye = gv;
          else {
            ye = yv;
            var Me = Zm;
          }
          else (se = I.nodeName) && se.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (ye = Jm);
          if (ye && (ye = ye(n, z))) {
            rd(Q, ye, l, W);
            break e;
          }
          Me && Me(n, I, z), n === "focusout" && (Me = I._wrapperState) && Me.controlled && I.type === "number" && oa(I, "number", I.value);
        }
        switch (Me = z ? ti(z) : window, n) {
          case "focusin":
            (fv(Me) || Me.contentEditable === "true") && (lo = Me, ld = z, ts = null);
            break;
          case "focusout":
            ts = ld = lo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(Q, l, W);
            break;
          case "selectionchange":
            if (ty) break;
          case "keydown":
          case "keyup":
            od(Q, l, W);
        }
        var ze;
        if (ro) e: {
          switch (n) {
            case "compositionstart":
              var Ve = "onCompositionStart";
              break e;
            case "compositionend":
              Ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ve = "onCompositionUpdate";
              break e;
          }
          Ve = void 0;
        }
        else ao ? ov(n, l) && (Ve = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ve = "onCompositionStart");
        Ve && (lv && l.locale !== "ko" && (ao || Ve !== "onCompositionStart" ? Ve === "onCompositionEnd" && ao && (ze = N()) : (Ja = W, h = "value" in Ja ? Ja.value : Ja.textContent, ao = !0)), Me = rs(z, Ve), 0 < Me.length && (Ve = new Kf(Ve, n, null, l, W), Q.push({ event: Ve, listeners: Me }), ze ? Ve.data = ze : (ze = sv(l), ze !== null && (Ve.data = ze)))), (ze = Ko ? cv(n, l) : qm(n, l)) && (z = rs(z, "onBeforeInput"), 0 < z.length && (W = new Kf("onBeforeInput", "beforeinput", null, l, W), Q.push({ event: W, listeners: z }), W.data = ze));
      }
      fu(Q, r);
    });
  }
  function oo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function rs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = br(n, l), d != null && o.unshift(oo(n, d, c)), d = br(n, r), d != null && o.push(oo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = br(l, d), T != null && m.unshift(oo(l, T, E))) : c || (T = br(l, d), T != null && m.push(oo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(ay, "");
  }
  function Sc(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(A(425));
  }
  function wl() {
  }
  var as = null, du = null;
  function Ec(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, Dv = typeof Promise == "function" ? Promise : void 0, so = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dv < "u" ? function(n) {
    return Dv.resolve(null).then(n).catch(Rc);
  } : Cc;
  function Rc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function co(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function kv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var xl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + xl, is = "__reactProps$" + xl, Wi = "__reactContainer$" + xl, ls = "__reactEvents$" + xl, fo = "__reactListeners$" + xl, iy = "__reactHandles$" + xl;
  function pu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = kv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = kv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _e(n) {
    return n = n[Ei] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function mn(n) {
    return n[is] || null;
  }
  var gt = [], Da = -1;
  function ka(n) {
    return { current: n };
  }
  function rn(n) {
    0 > Da || (n.current = gt[Da], gt[Da] = null, Da--);
  }
  function xe(n, r) {
    Da++, gt[Da] = n.current, n.current = r;
  }
  var Cr = {}, En = ka(Cr), Wn = ka(!1), Qr = Cr;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function po() {
    rn(Wn), rn(En);
  }
  function Ov(n, r, l) {
    if (En.current !== Cr) throw Error(A(168));
    xe(En, r), xe(Wn, l);
  }
  function us(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Ke(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Qr = En.current, xe(En, n), xe(Wn, Wn.current), !0;
  }
  function Tc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = us(n, r, Qr), o.__reactInternalMemoizedMergedChildContext = n, rn(Wn), rn(En), xe(En, n)) : rn(Wn), xe(Wn, l);
  }
  var Ci = null, vo = !1, $i = !1;
  function wc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function bl(n) {
    vo = !0, wc(n);
  }
  function Ri() {
    if (!$i && Ci !== null) {
      $i = !0;
      var n = 0, r = Lt;
      try {
        var l = Ci;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, vo = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), on(qa, Ri), c;
      } finally {
        Lt = r, $i = !1;
      }
    }
    return null;
  }
  var _l = [], Dl = 0, kl = null, Qi = 0, zn = [], Oa = 0, da = null, Ti = 1, wi = "";
  function vu(n, r) {
    _l[Dl++] = Qi, _l[Dl++] = kl, kl = n, Qi = r;
  }
  function Lv(n, r, l) {
    zn[Oa++] = Ti, zn[Oa++] = wi, zn[Oa++] = da, da = n;
    var o = Ti;
    n = wi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - Dr(r) + c | l << c | o, wi = d + n;
    } else Ti = 1 << d | l << c | o, wi = n;
  }
  function xc(n) {
    n.return !== null && (vu(n, 1), Lv(n, 1, 0));
  }
  function bc(n) {
    for (; n === kl; ) kl = _l[--Dl], _l[Dl] = null, Qi = _l[--Dl], _l[Dl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, wi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Xr = null, dn = !1, La = null;
  function vd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Xr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Xr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = Si(l.nextSibling);
          var o = qr;
          r && Mv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function $n(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function _c(n) {
    if (n !== qr) return !1;
    if (!dn) return $n(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ec(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (hd(n)) throw os(), Error(A(418));
      for (; r; ) vd(n, r), r = Si(r.nextSibling);
    }
    if ($n(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xr = null;
      }
    } else Xr = qr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function os() {
    for (var n = Xr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    Xr = qr = null, dn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var ly = vt.ReactCurrentBatchConfig;
  function hu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function mu(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Fl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, $) {
      return x === null || x.tag !== 6 ? (x = Qd(L, D.mode, $), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, $) {
      var ye = L.type;
      return ye === Fe ? W(D, x, L.props.children, $, L.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Ot && Nv(ye) === x.type) ? ($ = c(x, L.props), $.ref = hu(D, x, L), $.return = D, $) : ($ = Fs(L.type, L.key, L.props, null, D.mode, $), $.ref = hu(D, x, L), $.return = D, $);
    }
    function z(D, x, L, $) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = of(L, D.mode, $), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function W(D, x, L, $, ye) {
      return x === null || x.tag !== 7 ? (x = el(L, D.mode, $, ye), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Q(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Qd("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case be:
            return L = Fs(x.type, x.key, x.props, null, D.mode, L), L.ref = hu(D, null, x), L.return = D, L;
          case ot:
            return x = of(x, D.mode, L), x.return = D, x;
          case Ot:
            var $ = x._init;
            return Q(D, $(x._payload), L);
        }
        if (qn(x) || Re(x)) return x = el(x, D.mode, L, null), x.return = D, x;
        Dc(D, x);
      }
      return null;
    }
    function I(D, x, L, $) {
      var ye = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ye !== null ? null : E(D, x, "" + L, $);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            return L.key === ye ? T(D, x, L, $) : null;
          case ot:
            return L.key === ye ? z(D, x, L, $) : null;
          case Ot:
            return ye = L._init, I(
              D,
              x,
              ye(L._payload),
              $
            );
        }
        if (qn(L) || Re(L)) return ye !== null ? null : W(D, x, L, $, null);
        Dc(D, L);
      }
      return null;
    }
    function se(D, x, L, $, ye) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return D = D.get(L) || null, E(x, D, "" + $, ye);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case be:
            return D = D.get($.key === null ? L : $.key) || null, T(x, D, $, ye);
          case ot:
            return D = D.get($.key === null ? L : $.key) || null, z(x, D, $, ye);
          case Ot:
            var Me = $._init;
            return se(D, x, L, Me($._payload), ye);
        }
        if (qn($) || Re($)) return D = D.get(L) || null, W(x, D, $, ye, null);
        Dc(x, $);
      }
      return null;
    }
    function me(D, x, L, $) {
      for (var ye = null, Me = null, ze = x, Ve = x = 0, er = null; ze !== null && Ve < L.length; Ve++) {
        ze.index > Ve ? (er = ze, ze = null) : er = ze.sibling;
        var zt = I(D, ze, L[Ve], $);
        if (zt === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && zt.alternate === null && r(D, ze), x = d(zt, x, Ve), Me === null ? ye = zt : Me.sibling = zt, Me = zt, ze = er;
      }
      if (Ve === L.length) return l(D, ze), dn && vu(D, Ve), ye;
      if (ze === null) {
        for (; Ve < L.length; Ve++) ze = Q(D, L[Ve], $), ze !== null && (x = d(ze, x, Ve), Me === null ? ye = ze : Me.sibling = ze, Me = ze);
        return dn && vu(D, Ve), ye;
      }
      for (ze = o(D, ze); Ve < L.length; Ve++) er = se(ze, D, Ve, L[Ve], $), er !== null && (n && er.alternate !== null && ze.delete(er.key === null ? Ve : er.key), x = d(er, x, Ve), Me === null ? ye = er : Me.sibling = er, Me = er);
      return n && ze.forEach(function(Vl) {
        return r(D, Vl);
      }), dn && vu(D, Ve), ye;
    }
    function Se(D, x, L, $) {
      var ye = Re(L);
      if (typeof ye != "function") throw Error(A(150));
      if (L = ye.call(L), L == null) throw Error(A(151));
      for (var Me = ye = null, ze = x, Ve = x = 0, er = null, zt = L.next(); ze !== null && !zt.done; Ve++, zt = L.next()) {
        ze.index > Ve ? (er = ze, ze = null) : er = ze.sibling;
        var Vl = I(D, ze, zt.value, $);
        if (Vl === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Vl.alternate === null && r(D, ze), x = d(Vl, x, Ve), Me === null ? ye = Vl : Me.sibling = Vl, Me = Vl, ze = er;
      }
      if (zt.done) return l(
        D,
        ze
      ), dn && vu(D, Ve), ye;
      if (ze === null) {
        for (; !zt.done; Ve++, zt = L.next()) zt = Q(D, zt.value, $), zt !== null && (x = d(zt, x, Ve), Me === null ? ye = zt : Me.sibling = zt, Me = zt);
        return dn && vu(D, Ve), ye;
      }
      for (ze = o(D, ze); !zt.done; Ve++, zt = L.next()) zt = se(ze, D, Ve, zt.value, $), zt !== null && (n && zt.alternate !== null && ze.delete(zt.key === null ? Ve : zt.key), x = d(zt, x, Ve), Me === null ? ye = zt : Me.sibling = zt, Me = zt);
      return n && ze.forEach(function(hh) {
        return r(D, hh);
      }), dn && vu(D, Ve), ye;
    }
    function Dn(D, x, L, $) {
      if (typeof L == "object" && L !== null && L.type === Fe && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            e: {
              for (var ye = L.key, Me = x; Me !== null; ) {
                if (Me.key === ye) {
                  if (ye = L.type, ye === Fe) {
                    if (Me.tag === 7) {
                      l(D, Me.sibling), x = c(Me, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Me.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Ot && Nv(ye) === Me.type) {
                    l(D, Me.sibling), x = c(Me, L.props), x.ref = hu(D, Me, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Me);
                  break;
                } else r(D, Me);
                Me = Me.sibling;
              }
              L.type === Fe ? (x = el(L.props.children, D.mode, $, L.key), x.return = D, D = x) : ($ = Fs(L.type, L.key, L.props, null, D.mode, $), $.ref = hu(D, x, L), $.return = D, D = $);
            }
            return m(D);
          case ot:
            e: {
              for (Me = L.key; x !== null; ) {
                if (x.key === Me) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = of(L, D.mode, $), x.return = D, D = x;
            }
            return m(D);
          case Ot:
            return Me = L._init, Dn(D, x, Me(L._payload), $);
        }
        if (qn(L)) return me(D, x, L, $);
        if (Re(L)) return Se(D, x, L, $);
        Dc(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = Qd(L, D.mode, $), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Dn;
  }
  var wn = mu(!0), ie = mu(!1), pa = ka(null), Kr = null, ho = null, yd = null;
  function gd() {
    yd = ho = Kr = null;
  }
  function Sd(n) {
    var r = pa.current;
    rn(pa), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, yd = ho = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, ho === null) {
      if (Kr === null) throw Error(A(308));
      ho = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else ho = ho.next = n;
    return r;
  }
  var yu = null;
  function Cd(n) {
    yu === null ? yu = [n] : yu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, St & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ss(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = z : E.next = z, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, W = z = T = null, E = d;
      do {
        var I = E.lane, se = E.eventTime;
        if ((o & I) === I) {
          W !== null && (W = W.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Se = E;
            switch (I = r, se = l, Se.tag) {
              case 1:
                if (me = Se.payload, typeof me == "function") {
                  Q = me.call(se, Q, I);
                  break e;
                }
                Q = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Se.payload, I = typeof me == "function" ? me.call(se, Q, I) : me, I == null) break e;
                Q = ne({}, Q, I);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else se = { eventTime: se, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (z = W = se, T = Q) : W = W.next = se, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = Q), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      ki |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var cs = {}, xi = ka(cs), fs = ka(cs), ds = ka(cs);
  function gu(n) {
    if (n === cs) throw Error(A(174));
    return n;
  }
  function xd(n, r) {
    switch (xe(ds, r), xe(fs, n), xe(xi, cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(xi), xe(xi, r);
  }
  function Su() {
    rn(xi), rn(fs), rn(ds);
  }
  function Av(n) {
    gu(ds.current);
    var r = gu(xi.current), l = sa(r, n.type);
    r !== l && (xe(fs, n), xe(xi, l));
  }
  function Oc(n) {
    fs.current === n && (rn(xi), rn(fs));
  }
  var gn = ka(0);
  function Lc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ps = [];
  function De() {
    for (var n = 0; n < ps.length; n++) ps[n]._workInProgressVersionPrimary = null;
    ps.length = 0;
  }
  var lt = vt.ReactCurrentDispatcher, Mt = vt.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Zn = null, Mc = !1, vs = !1, Eu = 0, Y = 0;
  function Dt() {
    throw Error(A(321));
  }
  function Ae(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, lt.current = n === null || n.memoizedState === null ? Qc : Es, n = l(o, c), vs) {
      d = 0;
      do {
        if (vs = !1, Eu = 0, 25 <= d) throw Error(A(301));
        d += 1, Zn = Un = null, r.updateQueue = null, lt.current = Gc, n = l(o, c);
      } while (vs);
    }
    if (lt.current = xu, r = Un !== null && Un.next !== null, Gt = 0, Zn = Un = Nt = null, Mc = !1, r) throw Error(A(300));
    return n;
  }
  function ni() {
    var n = Eu !== 0;
    return Eu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function xn() {
    if (Un === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Zn === null ? Nt.memoizedState : Zn.next;
    if (r !== null) Zn = r, Un = n;
    else {
      if (n === null) throw Error(A(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Zn === null ? Nt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Nl(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Un, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var W = z.lane;
        if ((Gt & W) === W) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var Q = {
            lane: W,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = Q, m = o) : T = T.next = Q, Nt.lanes |= W, ki |= W;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Nt.lanes |= d, ki |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Cu(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (An = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Nc() {
  }
  function zc(n, r) {
    var l = Nt, o = xn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, hs(jc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, Ac.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(A(349));
      Gt & 30 || Uc(l, r, c);
    }
    return c;
  }
  function Uc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ac(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Fc(r) && Hc(n);
  }
  function jc(n, r, l) {
    return l(function() {
      Fc(r) && Hc(n);
    });
  }
  function Fc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Hc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = wu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Vc() {
    return xn().memoizedState;
  }
  function mo(n, r, l, o) {
    var c = Rr();
    Nt.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yo(n, r, l, o) {
    var c = xn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Ae(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function Bc(n, r) {
    return mo(8390656, 8, n, r);
  }
  function hs(n, r) {
    return yo(2048, 8, n, r);
  }
  function Yc(n, r) {
    return yo(4, 2, n, r);
  }
  function ms(n, r) {
    return yo(4, 4, n, r);
  }
  function Tu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Ic(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(4, 4, Tu.bind(null, r, n), l);
  }
  function ys() {
  }
  function Wc(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function $c(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = qu(), Nt.lanes |= l, ki |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function gs(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Mt.transition = o;
    }
  }
  function _d() {
    return xn().memoizedState;
  }
  function Ss(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) jv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Kt(l, r, o);
    }
  }
  function wu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) jv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Kt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function jv(n, r) {
    vs = Mc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  var xu = { readContext: Ma, useCallback: Dt, useContext: Dt, useEffect: Dt, useImperativeHandle: Dt, useInsertionEffect: Dt, useLayoutEffect: Dt, useMemo: Dt, useReducer: Dt, useRef: Dt, useState: Dt, useDebugValue: Dt, useDeferredValue: Dt, useTransition: Dt, useMutableSource: Dt, useSyncExternalStore: Dt, useId: Dt, unstable_isNewReconciler: !1 }, Qc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: Bc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(
      4194308,
      4,
      Tu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ss.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: ys, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = gs.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(A(349));
      Gt & 30 || Uc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Bc(jc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, Ac.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Qn.identifierPrefix;
    if (dn) {
      var l = wi, o = Ti;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Eu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Es = {
    readContext: Ma,
    useCallback: Wc,
    useContext: Ma,
    useEffect: hs,
    useImperativeHandle: Ic,
    useInsertionEffect: Yc,
    useLayoutEffect: ms,
    useMemo: $c,
    useReducer: Nl,
    useRef: Vc,
    useState: function() {
      return Nl(Xi);
    },
    useDebugValue: ys,
    useDeferredValue: function(n) {
      var r = xn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = Nl(Xi)[0], r = xn().memoizedState;
      return [n, r];
    },
    useMutableSource: Nc,
    useSyncExternalStore: zc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Gc = { readContext: Ma, useCallback: Wc, useContext: Ma, useEffect: hs, useImperativeHandle: Ic, useInsertionEffect: Yc, useLayoutEffect: ms, useMemo: $c, useReducer: Cu, useRef: Vc, useState: function() {
    return Cu(Xi);
  }, useDebugValue: ys, useDeferredValue: function(n) {
    var r = xn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Cu(Xi)[0], r = xn().memoizedState;
    return [n, r];
  }, useMutableSource: Nc, useSyncExternalStore: zc, useId: _d, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), kc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), kc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), kc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Nn(r) ? Qr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Cs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Nn(r) ? Qr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && qc.enqueueReplaceState(c, c.state, null), ss(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bu(n, r) {
    try {
      var l = "", o = r;
      do
        l += rt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function kd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Kc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      To || (To = !0, ku = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([this]) : Al.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Md(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Kc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Rs = vt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? ie(r, null, l, o) : wn(r, n.child, l, o);
  }
  function Jr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && xc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function _u(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Xe(n, r, d, o, c)) : (n = Fs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function Ts(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(Eo, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xe(Eo, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, xe(Eo, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, xe(Eo, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Nn(l) ? Qr : En.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && xc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Yv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Na(n, r), Xc(r, l, o), Cs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ma(z) : (z = Nn(l) ? Qr : En.current, z = Gr(r, z));
      var W = l.getDerivedStateFromProps, Q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Hv(r, m, o, z), ha = !1;
      var I = r.memoizedState;
      m.state = I, ss(r, o, m, c), T = r.memoizedState, E !== o || I !== T || Wn.current || ha ? (typeof W == "function" && (Dd(r, l, W, o), T = r.memoizedState), (E = ha || Fv(r, l, E, o, I, T, z)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ri(r.type, E), m.props = z, Q = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Nn(l) ? Qr : En.current, T = Gr(r, T));
      var se = l.getDerivedStateFromProps;
      (W = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || I !== T) && Hv(r, m, o, T), ha = !1, I = r.memoizedState, m.state = I, ss(r, o, m, c);
      var me = r.memoizedState;
      E !== Q || I !== me || Wn.current || ha ? (typeof se == "function" && (Dd(r, l, se, o), me = r.memoizedState), (z = ha || Fv(r, l, z, o, I, me, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, l, o, d, c);
  }
  function ws(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Tc(r, l, !1), za(n, r, d);
    o = r.stateNode, Rs.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = wn(r, n.child, null, d), r.child = wn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && Tc(r, l, !0), r.child;
  }
  function go(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), xd(n, r.containerInfo);
  }
  function Iv(n, r, l, o, c) {
    return Ol(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Jc(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), xe(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Hl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Zc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Wv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Fl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Fl(E, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Fl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Hl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xs(n, r, l, o) {
    return o !== null && Gi(o), wn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = kd(Error(A(422))), xs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && wn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return xs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = kd(d, o, void 0), xs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Qn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Wd(), o = kd(Error(A(421))), xs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Si(c.nextSibling), qr = r, dn = !0, La = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = wi, zn[Oa++] = da, Ti = n.id, wi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function bi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (xe(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Lc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Na(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), ki |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function bs(n, r, l) {
    switch (r.tag) {
      case 3:
        go(r), Ol();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Nn(r.type) && Kn(r);
        break;
      case 4:
        xd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        xe(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (xe(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Jc(n, r, l) : (xe(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        xe(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), xe(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ts(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, $v, Qv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jn = function() {
  }, $v = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, gu(xi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      un(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Tt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Tt.hasOwnProperty(z) ? (T != null && z === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (bc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jn(r), null;
      case 1:
        return Nn(r.type) && po(), Jn(r), null;
      case 3:
        return o = r.stateNode, Su(), rn(Wn), rn(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Ou(La), La = null))), jn(n, r), Jn(r), null;
      case 5:
        Oc(r);
        var c = gu(ds.current);
        if (l = r.type, n !== null && r.stateNode != null) $v(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Jn(r), null;
          }
          if (n = gu(xi.current), _c(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[is] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ns.length; c++) Pt(ns[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Vn(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Pt("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Tt.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), si(o, d, !0);
                break;
              case "textarea":
                On(o), Ln(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[is] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ns.length; c++) Pt(ns[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Vn(n, o), c = nr(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = Yn(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && J(n, T) : typeof T == "number" && J(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Tt.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && $e(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rn(n, !!o.multiple, d, !1) : o.defaultValue != null && Rn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = gu(ds.current), gu(xi.current), _c(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) os(), Ol(), r.flags |= 98560, d = !1;
          else if (d = _c(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ei] = r;
            } else Ol(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else La !== null && (Ou(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Su(), jn(n, r), n === null && uo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return Sd(r.type._context), Jn(r), null;
      case 17:
        return Nn(r.type) && po(), Jn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Lc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return xe(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && qe() > Ro && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Lc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Jn(r), null;
          } else 2 * qe() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qe(), r.sibling = null, l = gn.current, xe(gn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return Id(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function ef(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return Nn(r.type) && po(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Su(), rn(Wn), rn(En), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Oc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Su(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Id(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, Tr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function So(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function tf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var qv = !1;
  function Xv(n, r) {
    if (as = ba, n = es(), fc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, W = 0, Q = n, I = null;
          t: for (; ; ) {
            for (var se; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (T = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (se = Q.firstChild) !== null; )
              I = Q, Q = se;
            for (; ; ) {
              if (Q === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++W === o && (T = m), (se = Q.nextSibling) !== null) break;
              Q = I, I = Q.parentNode;
            }
            Q = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (du = { focusedElem: n, selectionRange: l }, ba = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
    else for (; pe !== null; ) {
      r = pe;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Se = me.memoizedProps, Dn = me.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Se : ri(r.type, Se), Dn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch ($) {
        pn(r, r.return, $);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, pe = n;
        break;
      }
      pe = r.return;
    }
    return me = qv, qv = !1, me;
  }
  function ks(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && tf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Os(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function nf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, nf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[is], delete r[ls], delete r[fo], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ls(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ki(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ls(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var bn = null, Mr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) Kv(n, r, l), l = l.sibling;
  }
  function Kv(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || So(l, r);
      case 6:
        var o = bn, c = Mr;
        bn = null, Nr(n, r, l), bn = o, Mr = c, bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? co(n.parentNode, l) : n.nodeType === 1 && co(n, l), Za(n)) : co(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Mr, bn = l.stateNode.containerInfo, Mr = !0, Nr(n, r, l), bn = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && tf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!Tr && (So(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          pn(l, r, E);
        }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Nr(n, r, l), Tr = o) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
    }
  }
  function Zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = uh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Mr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Mr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(A(160));
        Kv(d, m, c), bn = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        pn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fd(r, n), r = r.sibling;
  }
  function Fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            ks(3, n, n.return), Os(3, n);
          } catch (Se) {
            pn(n, n.return, Se);
          }
          try {
            ks(5, n, n.return);
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && So(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && So(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            J(c, "");
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(E, m);
            var z = Xn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], Q = T[m + 1];
              W === "style" ? Jt(c, Q) : W === "dangerouslySetInnerHTML" ? ci(c, Q) : W === "children" ? J(c, Q) : $e(c, W, Q, z);
            }
            switch (E) {
              case "input":
                Ir(c, d);
                break;
              case "textarea":
                Ia(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? Rn(c, !!d.multiple, se, !1) : I !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[is] = d;
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Se) {
            pn(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Se) {
          pn(n, n.return, Se);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = qe())), o & 4 && Zv(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (z = Tr) || W, ai(r, n), Tr = z) : ai(r, n), ea(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !W && n.mode & 1) for (pe = n, W = n.child; W !== null; ) {
            for (Q = pe = W; pe !== null; ) {
              switch (I = pe, se = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ks(4, I, I.return);
                  break;
                case 1:
                  So(I, I.return);
                  var me = I.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Se) {
                      pn(o, l, Se);
                    }
                  }
                  break;
                case 5:
                  So(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Ms(Q);
                    continue;
                  }
              }
              se !== null ? (se.return = I, pe = se) : Ms(Q);
            }
            W = W.sibling;
          }
          e: for (W = null, Q = n; ; ) {
            if (Q.tag === 5) {
              if (W === null) {
                W = Q;
                try {
                  c = Q.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Se) {
                  pn(n, n.return, Se);
                }
              }
            } else if (Q.tag === 6) {
              if (W === null) try {
                Q.stateNode.nodeValue = z ? "" : Q.memoizedProps;
              } catch (Se) {
                pn(n, n.return, Se);
              }
            } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
              Q.child.return = Q, Q = Q.child;
              continue;
            }
            if (Q === n) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === n) break e;
              W === Q && (W = null), Q = Q.return;
            }
            W === Q && (W = null), Q.sibling.return = Q.return, Q = Q.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Zv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ls(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (J(c, ""), o.flags &= -33);
            var d = Ki(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ki(n);
            _i(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    pe = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = Ds;
          var z = Tr;
          if (Ds = m, (Tr = T) && !z) for (pe = c; pe !== null; ) m = pe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : T !== null ? (T.return = m, pe = T) : Pd(c);
          for (; d !== null; ) pe = d, Hd(d), d = d.sibling;
          pe = c, Ds = E, Tr = z;
        }
        Jv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : Jv(n);
    }
  }
  function Jv(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Os(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var W = z.memoizedState;
                  if (W !== null) {
                    var Q = W.dehydrated;
                    Q !== null && Za(Q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (I) {
          pn(r, r.return, I);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Ms(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Pd(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Os(4, r);
            } catch (T) {
              pn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                pn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              pn(r, m, T);
            }
        }
      } catch (T) {
        pn(r, r.return, T);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, pe = E;
        break;
      }
      pe = r.return;
    }
  }
  var sy = Math.ceil, Ul = vt.ReactCurrentDispatcher, Du = vt.ReactCurrentOwner, or = vt.ReactCurrentBatchConfig, St = 0, Qn = null, Fn = null, sr = 0, ma = 0, Eo = ka(0), _n = 0, Ns = null, ki = 0, Co = 0, rf = 0, zs = null, ta = null, Vd = 0, Ro = 1 / 0, ya = null, To = !1, ku = null, Al = null, af = !1, Zi = null, Us = 0, jl = 0, wo = null, As = -1, wr = 0;
  function Hn() {
    return St & 6 ? qe() : As !== -1 ? As : As = qe();
  }
  function Oi(n) {
    return n.mode & 1 ? St & 2 && sr !== 0 ? sr & -sr : ly.transition !== null ? (wr === 0 && (wr = qu()), wr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : no(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < jl) throw jl = 0, wo = null, Error(A(185));
    Hi(n, l, o), (!(St & 2) || n !== Qn) && (n === Qn && (!(St & 2) && (Co |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && St === 0 && !(r.mode & 1) && (Ro = qe() + 500, vo && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    ru(n, r);
    var o = Ka(n, n === Qn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? bl(Bd.bind(null, n)) : wc(Bd.bind(null, n)), so(function() {
        !(St & 6) && Ri();
      }), l = null;
      else {
        switch (Ku(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = tu;
            break;
          case 16:
            l = nu;
            break;
          case 536870912:
            l = $u;
            break;
          default:
            l = nu;
        }
        l = sh(l, lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function lf(n, r) {
    if (As = -1, wr = 0, St & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l) return null;
    var o = Ka(n, n === Qn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = uf(n, o);
    else {
      r = o;
      var c = St;
      St |= 2;
      var d = th();
      (Qn !== n || sr !== r) && (ya = null, Ro = qe() + 500, Ji(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      gd(), Ul.current = d, St = c, Fn !== null ? r = 0 : (Qn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = Ns, Ji(n, 0), ii(n, o), na(n, qe()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = uf(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = Ns, Ji(n, 0), ii(n, o), na(n, qe()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Vd + 500 - qe(), 10 < r)) {
              if (Ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(Mu.bind(null, n, ta, ya), r);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return na(n, qe()), n.callbackNode === l ? lf.bind(null, n) : null;
  }
  function js(n, r) {
    var l = zs;
    return n.current.memoizedState.isDehydrated && (Ji(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = ta, ta = l, r !== null && Ou(r)), n;
  }
  function Ou(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~rf, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (St & 6) throw Error(A(327));
    xo();
    var r = Ka(n, 0);
    if (!(r & 1)) return na(n, qe()), null;
    var l = uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = Ns, Ji(n, 0), ii(n, r), na(n, qe()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, qe()), null;
  }
  function Yd(n, r) {
    var l = St;
    St |= 1;
    try {
      return n(r);
    } finally {
      St = l, St === 0 && (Ro = qe() + 500, vo && Ri());
    }
  }
  function Lu(n) {
    Zi !== null && Zi.tag === 0 && !(St & 6) && xo();
    var r = St;
    St |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, St = r, !(St & 6) && Ri();
    }
  }
  function Id() {
    ma = Eo.current, rn(Eo);
  }
  function Ji(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && po();
          break;
        case 3:
          Su(), rn(Wn), rn(En), De();
          break;
        case 5:
          Oc(o);
          break;
        case 4:
          Su();
          break;
        case 13:
          rn(gn);
          break;
        case 19:
          rn(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      l = l.return;
    }
    if (Qn = n, Fn = n = Fl(n.current, null), sr = ma = r, _n = 0, Ns = null, rf = Co = ki = 0, ta = zs = null, yu !== null) {
      for (r = 0; r < yu.length; r++) if (l = yu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      yu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Fn;
      try {
        if (gd(), lt.current = xu, Mc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Mc = !1;
        }
        if (Gt = 0, Zn = Un = Nt = null, vs = !1, Eu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, Ns = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, W = E, Q = W.tag;
            if (!(W.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var I = W.alternate;
              I ? (W.updateQueue = I.updateQueue, W.memoizedState = I.memoizedState, W.lanes = I.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var se = Vv(m);
            if (se !== null) {
              se.flags &= -257, zl(se, m, E, d, r), se.mode & 1 && Md(d, z, r), r = se, T = z;
              var me = r.updateQueue;
              if (me === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(T), r.updateQueue = Se;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, z, r), Wd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (dn && E.mode & 1) {
            var Dn = Vv(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), zl(Dn, m, E, d, r), Gi(bu(T, E));
              break e;
            }
          }
          d = T = bu(T, E), _n !== 4 && (_n = 2), zs === null ? zs = [d] : zs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Pv(d, T, r);
                Uv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Al === null || !Al.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var $ = Ld(d, E, r);
                  Uv(d, $);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ye) {
        r = ye, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Ul.current;
    return Ul.current = xu, n === null ? xu : n;
  }
  function Wd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Qn === null || !(ki & 268435455) && !(Co & 268435455) || ii(Qn, sr);
  }
  function uf(n, r) {
    var l = St;
    St |= 2;
    var o = th();
    (Qn !== n || sr !== r) && (ya = null, Ji(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (gd(), St = l, Ul.current = o, Fn !== null) throw Error(A(261));
    return Qn = null, sr = 0, _n;
  }
  function fy() {
    for (; Fn !== null; ) rh(Fn);
  }
  function nh() {
    for (; Fn !== null && !Qa(); ) rh(Fn);
  }
  function rh(n) {
    var r = oh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Fn = r, Du.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ef(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      } else if (l = Gv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function Mu(n, r, l) {
    var o = Lt, c = or.transition;
    try {
      or.transition = null, Lt = 1, dy(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      xo();
    while (Zi !== null);
    if (St & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($f(n, d), n === Qn && (Fn = Qn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || af || (af = !0, sh(nu, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = St;
      St |= 4, Du.current = null, Xv(n, l), Fd(l, n), io(du), ba = !!as, du = as = null, n.current = l, oy(l), Ga(), St = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (af && (af = !1, Zi = n, Us = c), d = n.pendingLanes, d === 0 && (Al = null), Io(l.stateNode), na(n, qe()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (To) throw To = !1, n = ku, ku = null, n;
    return Us & 1 && n.tag !== 0 && xo(), d = n.pendingLanes, d & 1 ? n === wo ? jl++ : (jl = 0, wo = n) : jl = 0, Ri(), null;
  }
  function xo() {
    if (Zi !== null) {
      var n = Ku(Us), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, Us = 0, St & 6) throw Error(A(331));
          var c = St;
          for (St |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (pe = z; pe !== null; ) {
                    var W = pe;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ks(8, W, d);
                    }
                    var Q = W.child;
                    if (Q !== null) Q.return = W, pe = Q;
                    else for (; pe !== null; ) {
                      W = pe;
                      var I = W.sibling, se = W.return;
                      if (nf(W), W === z) {
                        pe = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = se, pe = I;
                        break;
                      }
                      pe = se;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Se = me.child;
                  if (Se !== null) {
                    me.child = null;
                    do {
                      var Dn = Se.sibling;
                      Se.sibling = null, Se = Dn;
                    } while (Se !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, pe = m;
            else e: for (; pe !== null; ) {
              if (d = pe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ks(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, pe = D;
                break e;
              }
              pe = d.return;
            }
          }
          var x = n.current;
          for (pe = x; pe !== null; ) {
            m = pe;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, pe = L;
            else e: for (m = x; pe !== null; ) {
              if (E = pe, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Os(9, E);
                }
              } catch (ye) {
                pn(E, E.return, ye);
              }
              if (E === m) {
                pe = null;
                break e;
              }
              var $ = E.sibling;
              if ($ !== null) {
                $.return = E.return, pe = $;
                break e;
              }
              pe = E.return;
            }
          }
          if (St = c, Ri(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, or.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = bu(l, r), r = Pv(n, r, 1), n = Ll(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Al === null || !Al.has(o))) {
          n = bu(l, n), n = Ld(r, n, 1), r = Ll(r, n, 1), n = Hn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > qe() - Vd ? Ji(n, 0) : rf |= l), na(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function uh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Wn.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, bs(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, dn && r.flags & 1048576 && Lv(r, Qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Na(n, r), n = r.pendingProps;
        var c = Gr(r, En.current);
        yn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = qc, r.stateNode = c, c._reactInternals = r, Cs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && xc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Na(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = ri(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = Yv(null, r, o, n, l);
              break e;
            case 11:
              r = Jr(null, r, o, n, l);
              break e;
            case 14:
              r = _u(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Yv(n, r, o, c, l);
      case 3:
        e: {
          if (go(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), ss(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bu(Error(A(423)), r), r = Iv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bu(Error(A(424)), r), r = Iv(n, r, o, l, c);
            break e;
          } else for (Xr = Si(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, La = null, l = ie(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ol(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Ec(o, c) ? m = null : d !== null && Ec(o, d) && (r.flags |= 32), Nd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Jc(n, r, l);
      case 4:
        return xd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = wn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Jr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, xe(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !Wn.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = qi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var W = z.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yn(r, l), c = Ma(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), _u(n, r, o, c, l);
      case 15:
        return Xe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Nn(o) ? (n = !0, Kn(r)) : n = !1, yn(r, l), Xc(r, o, c), Cs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return bi(n, r, l);
      case 22:
        return Ts(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function sh(n, r) {
    return on(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === bt) return 11;
      if (n === _t) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Fs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") $d(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Fe:
        return el(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = Aa(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case ke:
        return n = Aa(13, l, r, c), n.elementType = ke, n.lanes = d, n;
      case jt:
        return n = Aa(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Ee:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case bt:
            m = 11;
            break e;
          case _t:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function of(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function sf(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ot, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Ge(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return us(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = sf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = qi(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function cf(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), kc(n, c, m)), m;
  }
  function ff(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function df(n, r) {
    qd(n, r), (n = n.alternate) && qd(n, r);
  }
  function dh() {
    return null;
  }
  var Nu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  pf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    cf(n, r, null, null);
  }, pf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        cf(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function pf(n) {
    this._internalRoot = n;
  }
  pf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Be();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && Qo(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = ff(m);
          d.call(z);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Wi] = m.current, uo(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = ff(T);
        E.call(z);
      };
    }
    var T = sf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Wi] = T.current, uo(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      cf(r, T, l, o);
    }), T;
  }
  function Hs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = ff(m);
          E.call(T);
        };
      }
      cf(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return ff(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Pi(r, l | 1), na(r, qe()), !(St & 6) && (Ro = qe() + 500, Ri()));
        }
        break;
      case 13:
        Lu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), df(n, 1);
    }
  }, Wo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      df(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      df(n, r);
    }
  }, Be = function() {
    return Lt;
  }, Zu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(A(90));
              xr(o), Ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ia(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, Jl = Yd, dl = Lu;
  var Sy = { usingClientEntryPoint: !1, Events: [_e, ti, mn, Fi, Zl, Yd] }, Ps = { findFiberByHostInstance: pu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Ps.bundleType, version: Ps.version, rendererPackageName: Ps.rendererPackageName, rendererConfig: Ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ps.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      hl = Pl.inject(vh), Wr = Pl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(A(200));
    return yy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(A(299));
    var l = !1, o = "", c = Nu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = sf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, uo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Lu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!vf(r)) throw Error(A(200));
    return Hs(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Nu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, uo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new pf(r);
  }, Ba.render = function(n, r, l) {
    if (!vf(r)) throw Error(A(200));
    return Hs(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!vf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Lu(function() {
      Hs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Yd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!vf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return Hs(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function nD() {
  return nT || (nT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Z = Wf, X = uT(), A = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dt = !1;
    function Tt(e) {
      dt = e;
    }
    function je(e) {
      if (!dt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        kt("warn", e, a);
      }
    }
    function S(e) {
      if (!dt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        kt("error", e, a);
      }
    }
    function kt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var de = 0, ve = 1, ut = 2, ee = 3, Ce = 4, ue = 5, We = 6, yt = 7, pt = 8, fn = 9, ft = 10, $e = 11, vt = 12, be = 13, ot = 14, Fe = 15, an = 16, Ht = 17, Zt = 18, ln = 19, bt = 21, ke = 22, jt = 23, _t = 24, Ot = 25, Ee = !0, K = !1, Re = !1, ne = !1, _ = !1, P = !0, He = !0, Ue = !0, rt = !0, Je = /* @__PURE__ */ new Set(), Ke = {}, et = {};
    function at(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      Ke[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ke[e] = t;
      {
        var a = e.toLowerCase();
        et[a] = e, e === "onDoubleClick" && (et.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Je.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xr = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function Ir(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function si(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Vn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Vn(e);
    }
    var Yn = 0, gr = 1, Ia = 2, Ln = 3, Sr = 4, sa = 5, Wa = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Te = new RegExp("^[" + ci + "][" + J + "]*$"), tt = {}, Ft = {};
    function Jt(e) {
      return xr.call(Ft, e) ? !0 : xr.call(tt, e) ? !1 : Te.test(e) ? (Ft[e] = !0, !0) : (tt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === Yn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === Yn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Ln:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case Wa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var It = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      It[e] = new Yt(
        e,
        Yn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new Yt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      It[e] = new Yt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Ln,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Yt(
        e,
        Wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      It[e] = new Yt(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      It[t] = new Yt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new Yt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fi = "xlinkHref";
    It[Fi] = new Yt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new Yt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Jl = !1;
    function dl(e) {
      !Jl && Zl.test(e) && (Jl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && dl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function eu(e, t, a, i) {
      {
        if (!Jt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function br(e, t, a, i) {
      var u = en(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (Jt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Bn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Ln ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === Ln || b === Sr && a === !0 ? w = "" : (Bn(a, y), w = "" + a, u.sanitizeURL && dl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), $a = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Ge = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), it = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Qa = Symbol.iterator, Ga = "@@iterator";
    function qe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qa && e[Qa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var Ze = Object.assign, qa = 0, tu, nu, vl, $u, hl, Wr, Io;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function ic() {
      {
        if (qa === 0) {
          tu = console.log, nu = console.info, vl = console.warn, $u = console.error, hl = console.group, Wr = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dr,
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
        qa++;
      }
    }
    function lc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, e, {
              value: tu
            }),
            info: Ze({}, e, {
              value: nu
            }),
            warn: Ze({}, e, {
              value: vl
            }),
            error: Ze({}, e, {
              value: $u
            }),
            group: Ze({}, e, {
              value: hl
            }),
            groupCollapsed: Ze({}, e, {
              value: Wr
            }),
            groupEnd: Ze({}, e, {
              value: Io
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qu = A.ReactCurrentDispatcher, ml;
    function fa(e, t, a) {
      {
        if (ml === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ml = i && i[1] || "";
          }
        return `
` + ml + e;
      }
    }
    var Xa = !1, Ka;
    {
      var Gu = typeof WeakMap == "function" ? WeakMap : Map;
      Ka = new Gu();
    }
    function ru(e, t) {
      if (!e || Xa)
        return "";
      {
        var a = Ka.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Qu.current, Qu.current = null, ic();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ka.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xa = !1, Qu.current = s, lc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? fa(w) : "";
      return typeof e == "function" && Ka.set(e, M), M;
    }
    function yl(e, t, a) {
      return ru(e, !0);
    }
    function qu(e, t, a) {
      return ru(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ru(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ae:
          return fa("Suspense");
        case he:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return qu(e.render);
          case Ge:
            return Hi(e.type, t, a);
          case Ye: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $f(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case be:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case de:
        case ut:
        case Fe:
          return qu(e.type);
        case $e:
          return qu(e.type.render);
        case ve:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Pi(e) {
      try {
        var t = "", a = e;
        do
          t += $f(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Lt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ku(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case rr:
          return "Portal";
        case di:
          return "Profiler";
        case $a:
          return "StrictMode";
        case ae:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ku(t) + ".Consumer";
          case pi:
            var a = e;
            return Ku(a._context) + ".Provider";
          case B:
            return Lt(e, e.render, "ForwardRef");
          case Ge:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Be(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case fn:
          var i = a;
          return vi(i) + ".Consumer";
        case ft:
          var u = a;
          return vi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case $e:
          return Wo(a, a.render, "ForwardRef");
        case yt:
          return "Fragment";
        case ue:
          return a;
        case Ce:
          return "Portal";
        case ee:
          return "Root";
        case We:
          return "Text";
        case an:
          return wt(a);
        case pt:
          return a === $a ? "StrictMode" : "Mode";
        case ke:
          return "Offscreen";
        case vt:
          return "Profiler";
        case bt:
          return "Scope";
        case be:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case ve:
        case de:
        case Ht:
        case ut:
        case ot:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = A.ReactDebugCurrentFrame, ir = null, hi = !1;
    function kr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Be(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Pi(ir);
    }
    function sn() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function Wt(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function gl() {
      return ir;
    }
    function In(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var au = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $o(e, t) {
      au[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function iu(e) {
      e._valueTracker = null;
    }
    function Qf(e) {
      var t = "";
      return e && (Qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xa(e) {
      var t = Qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            iu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      Sl(e) || (e._valueTracker = xa(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ba(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ju = !1, eo = !1, El = !1, lu = !1;
    function to(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function no(e, t) {
      var a = e, i = t.checked, u = Ze({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ja(e, t) {
      $o("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ju && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Ju = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: to(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && br(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = to(t);
        !a._wrapperState.controlled && i && !lu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0), a._wrapperState.controlled && !i && !El && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), q(a, t);
    }
    function q(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Bn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), C(f, p);
          }
        }
      }
    }
    function Oe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ba(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var re = !1, Ne = !1, ct = !1;
    function xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ne || (Ne = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ct || (ct = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !re && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), re = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(wa(t.value)));
    }
    var $t = Array.isArray;
    function nt(e) {
      return $t(e);
    }
    var Qt;
    Qt = !1;
    function hn() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cl = ["value", "defaultValue"];
    function Go(e) {
      {
        $o("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = nt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(wa(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function qo(e, t) {
      return Ze({}, t, {
        value: void 0
      });
    }
    function uu(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function uc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ze({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kf(e, t) {
      var a = e;
      $o("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (nt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function nv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      nv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Zf;
        default:
          return Bi;
      }
    }
    function td(e, t) {
      return e == null || e === Bi ? ed(t) : e === Jf && t === "foreignObject" ? Bi : e;
    }
    var av = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, oc, iv = av(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        oc = oc || document.createElement("div"), oc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = oc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $r = 1, Yi = 3, Mn = 8, Ii = 9, nd = 11, ro = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ko = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ko).forEach(function(e) {
      uv.forEach(function(t) {
        Ko[lv(t, e)] = Ko[e];
      });
    });
    function sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ko.hasOwnProperty(e) && Ko[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function ao(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, Xm = /^-ms-/, fv = /-(.)/g, rd = /;\s*$/, gi = {}, ou = {}, dv = !1, Zo = !1, Km = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Km(e.replace(Xm, "ms-"))
        ));
      }, ad = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        ou.hasOwnProperty(t) && ou[t] || (ou[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : qm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var mv = cv;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ao(i)) + ":", t += sc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || mv(i, t[i]);
          var s = sc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Jm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ey(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Jm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Jo = Ze({
      menuitem: !0
    }, ei), Sv = "__html";
    function cc(e, t) {
      if (t) {
        if (Jo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var es = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, fc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, io = {}, ty = new RegExp("^(aria)-[" + J + "]*$"), lo = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function ld(e, t) {
      {
        if (xr.call(io, t) && io[t])
          return !0;
        if (lo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = fc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), io[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), io[t] = !0, !0;
        }
        if (ty.test(t)) {
          var u = t.toLowerCase(), s = fc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return io[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), io[t] = !0, !0;
        }
      }
      return !0;
    }
    function ts(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Rl(e, t) || ts(e, t);
    }
    var od = !1;
    function dc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var su = function() {
    };
    {
      var lr = {}, sd = /^on./, pc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + J + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + J + "]*$");
      su = function(e, t, a, i) {
        if (xr.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (sd.test(t))
          return pc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = en(t), y = v !== null && v.type === Yn;
        if (es.hasOwnProperty(u)) {
          var g = es[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = su(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Rl(e, t) || Rv(e, t, a);
    }
    var cd = 1, vc = 2, _a = 4, fd = cd | vc | _a, cu = null;
    function ny(e) {
      cu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cu = e;
    }
    function ry() {
      cu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cu = null;
    }
    function ns(e) {
      return e === cu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var hc = null, fu = null, Pt = null;
    function mc(e) {
      var t = Do(e);
      if (t) {
        if (typeof hc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          hc(t.stateNode, t.type, i);
        }
      }
    }
    function yc(e) {
      hc = e;
    }
    function uo(e) {
      fu ? Pt ? Pt.push(e) : Pt = [e] : fu = e;
    }
    function wv() {
      return fu !== null || Pt !== null;
    }
    function gc() {
      if (fu) {
        var e = fu, t = Pt;
        if (fu = null, Pt = null, mc(e), t)
          for (var a = 0; a < t.length; a++)
            mc(t[a]);
      }
    }
    var oo = function(e, t) {
      return e(t);
    }, rs = function() {
    }, Tl = !1;
    function xv() {
      var e = wv();
      e && (rs(), gc());
    }
    function bv(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return oo(e, t, a);
      } finally {
        Tl = !1, xv();
      }
    }
    function ay(e, t, a) {
      oo = e, rs = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Sc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Sc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var as = !1;
    if (On)
      try {
        var du = {};
        Object.defineProperty(du, "passive", {
          get: function() {
            as = !0;
          }
        }), window.addEventListener("test", du, du), window.removeEventListener("test", du, du);
      } catch {
        as = !1;
      }
    function Ec(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Cc = Ec;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Cc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          pd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, F(), a.apply(i, le), w = !1;
        }
        var we, Ct = !1, ht = !1;
        function k(O) {
          if (we = O.error, Ct = !0, we === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), pd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Ct ? ht && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", k), !b)
          return F(), Ec.apply(this, arguments);
      };
    }
    var Dv = Cc, so = !1, Rc = null, co = !1, Si = null, kv = {
      onError: function(e) {
        so = !0, Rc = e;
      }
    };
    function xl(e, t, a, i, u, s, f, p, v) {
      so = !1, Rc = null, Dv.apply(kv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (xl.apply(this, arguments), so) {
        var y = ls();
        co || (co = !0, Si = y);
      }
    }
    function is() {
      if (co) {
        var e = Si;
        throw co = !1, Si = null, e;
      }
    }
    function Wi() {
      return so;
    }
    function ls() {
      if (so) {
        var e = Rc;
        return so = !1, Rc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fo(e) {
      return e._reactInternals;
    }
    function iy(e) {
      return e._reactInternals !== void 0;
    }
    function pu(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), ka = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), xe = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Qr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Nn = (
      /*                   */
      8192
    ), po = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), us = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), Tc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), vo = (
      /*                    */
      2097152
    ), $i = (
      /*                 */
      4194304
    ), wc = (
      /*                */
      8388608
    ), bl = (
      /*               */
      16777216
    ), Ri = (
      /*              */
      33554432
    ), _l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      gt | Wn | 0
    ), Dl = mn | gt | Da | ka | En | Gr | Nn, kl = gt | rn | En | Nn, Qi = Qr | Da, zn = $i | wc | vo, Oa = A.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Gr)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ee ? a : null;
    }
    function Ti(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === ee ? e.stateNode.containerInfo : null;
    }
    function vu(e) {
      return da(e) === e;
    }
    function Lv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === ve) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Be(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = fo(e);
      return u ? da(u) === u : !1;
    }
    function xc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function bc(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return xc(s), e;
            if (v === u)
              return xc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ee)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = bc(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === ue || e.tag === We)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = bc(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === ue || e.tag === We)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ce) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = X.unstable_scheduleCallback, Mv = X.unstable_cancelCallback, hd = X.unstable_shouldYield, md = X.unstable_requestPaint, $n = X.unstable_now, _c = X.unstable_getCurrentPriorityLevel, os = X.unstable_ImmediatePriority, Ol = X.unstable_UserBlockingPriority, Gi = X.unstable_NormalPriority, ly = X.unstable_LowPriority, hu = X.unstable_IdlePriority, Dc = X.unstable_yieldValue, Nv = X.unstable_setDisableYieldValue, mu = null, wn = null, ie = null, pa = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ho(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = Ze({}, e, {
          getLaneLabelMap: yu,
          injectProfilingHooks: Ma
        })), mu = t.inject(e), wn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (wn && typeof wn.onScheduleFiberRoot == "function")
        try {
          wn.onScheduleFiberRoot(mu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & xe) === xe;
          if (Ue) {
            var i;
            switch (t) {
              case Lr:
                i = os;
                break;
              case bi:
                i = Ol;
                break;
              case Na:
                i = Gi;
                break;
              case za:
                i = hu;
                break;
              default:
                i = Gi;
                break;
            }
            wn.onCommitFiberRoot(mu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (wn && typeof wn.onPostCommitFiberRoot == "function")
        try {
          wn.onPostCommitFiberRoot(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
          wn.onCommitFiberUnmount(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Dc == "function" && (Nv(e), Tt(e)), wn && typeof wn.setStrictMode == "function")
        try {
          wn.setStrictMode(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      ie = e;
    }
    function yu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Eu; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(e);
    }
    function Rd() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function va(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function ha() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function Td(e) {
      ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped();
    }
    function kc(e) {
      ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped();
    }
    function ss(e) {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped();
    }
    function cs(e, t, a) {
      ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(e, t, a);
    }
    function xi(e, t, a) {
      ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(e, t, a);
    }
    function fs(e) {
      ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(e);
    }
    function ds() {
      ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
    }
    function gu(e) {
      ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(e);
    }
    function xd() {
      ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped();
    }
    function Su(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function Av() {
      ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded();
    }
    function Oc() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function gn(e) {
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(e);
    }
    function Lc(e, t) {
      ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, t);
    }
    function ps(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Gt = (
      /*               */
      8
    ), Nt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : vs, Zn = Math.log, Mc = Math.LN2;
    function vs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Mc | 0) | 0;
    }
    var Eu = 31, Y = (
      /*                        */
      0
    ), Dt = (
      /*                          */
      0
    ), Ae = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), xn = (
      /*                     */
      16
    ), Xi = (
      /*                */
      32
    ), Nl = (
      /*                       */
      4194240
    ), Cu = (
      /*                        */
      64
    ), Nc = (
      /*                        */
      128
    ), zc = (
      /*                        */
      256
    ), Uc = (
      /*                        */
      512
    ), Ac = (
      /*                        */
      1024
    ), jc = (
      /*                        */
      2048
    ), Fc = (
      /*                        */
      4096
    ), Hc = (
      /*                        */
      8192
    ), Pc = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Vc = (
      /*                       */
      65536
    ), mo = (
      /*                       */
      131072
    ), yo = (
      /*                       */
      262144
    ), Bc = (
      /*                       */
      524288
    ), hs = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), ms = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Ic = (
      /*                             */
      8388608
    ), ys = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), $c = (
      /*                             */
      67108864
    ), bd = Tu, gs = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Ss = (
      /*               */
      268435456
    ), wu = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & Ae)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & xn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & ms)
          return "Retry";
        if (e & gs)
          return "SelectiveHydration";
        if (e & Ss)
          return "IdleHydration";
        if (e & wu)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var Kt = -1, xu = Cu, Qc = Tu;
    function Es(e) {
      switch (zl(e)) {
        case Ae:
          return Ae;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case xn:
          return xn;
        case Xi:
          return Xi;
        case Cu:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Ru:
        case Vc:
        case mo:
        case yo:
        case Bc:
        case hs:
        case Yc:
          return e & Nl;
        case Tu:
        case Ic:
        case ys:
        case Wc:
        case $c:
          return e & ms;
        case gs:
          return gs;
        case Ss:
          return Ss;
        case wu:
          return wu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Gc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Es(p);
        else {
          var v = f & s;
          v !== Y && (i = Es(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Es(y) : s !== Y && (i = Es(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = zl(i), b = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === xn && (b & Nl) !== Y
        )
          return t;
      }
      (i & ni) !== Y && (i |= a & xn);
      var w = e.entangledLanes;
      if (w !== Y)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var F = An(U), le = 1 << F;
          i |= M[F], U &= ~le;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Dd(e, t) {
      switch (e) {
        case Ae:
        case Ml:
        case ni:
          return t + 250;
        case Rr:
        case xn:
        case Xi:
        case Cu:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Ru:
        case Vc:
        case mo:
        case yo:
        case Bc:
        case hs:
        case Yc:
          return t + 5e3;
        case Tu:
        case Ic:
        case ys:
        case Wc:
        case $c:
          return Kt;
        case gs:
        case Ss:
        case wu:
        case Zr:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function qc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Es(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Y ? t : t & Zr ? Zr : Y;
    }
    function Hv(e) {
      return (e & Ae) !== Y;
    }
    function Cs(e) {
      return (e & _d) !== Y;
    }
    function bu(e) {
      return (e & ms) === e;
    }
    function kd(e) {
      var t = Ae | ni | xn;
      return (e & t) === Y;
    }
    function Od(e) {
      return (e & Nl) === e;
    }
    function Kc(e, t) {
      var a = Ml | ni | Rr | xn;
      return (t & a) !== Y;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & Nl) !== Y;
    }
    function Md() {
      var e = xu;
      return xu <<= 1, (xu & Nl) === Y && (xu = Cu), e;
    }
    function Vv() {
      var e = Qc;
      return Qc <<= 1, (Qc & ms) === Y && (Qc = Tu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Rs(e) {
      return zl(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Jr(e, t) {
      return (e & t) !== Y;
    }
    function _u(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function Ts(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function Yv(e, t) {
      return e !== Dt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Eu; a++)
        t.push(e);
      return t;
    }
    function go(e, t, a) {
      e.pendingLanes |= t, t !== wu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Y, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function Jc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = An(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ni:
          i = Ml;
          break;
        case xn:
          i = Rr;
          break;
        case Cu:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Ru:
        case Vc:
        case mo:
        case yo:
        case Bc:
        case hs:
        case Yc:
        case Tu:
        case Ic:
        case ys:
        case Wc:
        case $c:
          i = Xi;
          break;
        case wu:
          i = Ss;
          break;
        default:
          i = Dt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dt ? Dt : i;
    }
    function xs(e, t, a) {
      if (Kr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Wv(e, t) {
      if (Kr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Lr = Ae, bi = ni, Na = xn, za = wu, bs = Dt;
    function Ua() {
      return bs;
    }
    function jn(e) {
      bs = e;
    }
    function $v(e, t) {
      var a = bs;
      try {
        return bs = e, t();
      } finally {
        bs = a;
      }
    }
    function Qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _s(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = zl(e);
      return Jn(Lr, t) ? Jn(bi, t) ? Cs(t) ? Na : za : bi : Lr;
    }
    function ef(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function Tr(e) {
      Ds = e;
    }
    function uy(e) {
      Ds(e);
    }
    var pe;
    function So(e) {
      pe = e;
    }
    var tf;
    function qv(e) {
      tf = e;
    }
    var Xv;
    function ks(e) {
      Xv = e;
    }
    var Os;
    function jd(e) {
      Os = e;
    }
    var nf = !1, Ls = [], Ki = null, _i = null, Di = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Kv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Zv(e) {
      return Kv.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ki = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && pe(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function oy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ki = ea(Ki, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = ea(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ea(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return Mr.set(b, ea(Mr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Os(e.priority, function() {
                tf(a);
              });
              return;
            }
          } else if (i === ee) {
            var s = a.stateNode;
            if (ef(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Jv(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Jn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ms(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Co(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), ry();
        } else {
          var f = Do(i);
          return f !== null && pe(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ms(e) && a.delete(t);
    }
    function sy() {
      nf = !1, Ki !== null && Ms(Ki) && (Ki = null), _i !== null && Ms(_i) && (_i = null), Di !== null && Ms(Di) && (Di = null), bn.forEach(Pd), Mr.forEach(Pd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nf || (nf = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, sy)));
    }
    function Du(e) {
      if (Ls.length > 0) {
        Ul(Ls[0], e);
        for (var t = 1; t < Ls.length; t++) {
          var a = Ls[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ki !== null && Ul(Ki, e), _i !== null && Ul(_i, e), Di !== null && Ul(Di, e);
      var i = function(p) {
        return Ul(p, e);
      };
      bn.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Nr.length; u++) {
        var s = Nr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Nr.length > 0; ) {
        var f = Nr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Nr.shift();
      }
    }
    var or = A.ReactCurrentBatchConfig, St = !0;
    function Qn(e) {
      St = !!e;
    }
    function Fn() {
      return St;
    }
    function sr(e, t, a) {
      var i = rf(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case bi:
          u = Eo;
          break;
        case Na:
        default:
          u = _n;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(Lr), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function Eo(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(bi), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      St && Ns(e, t, a, i);
    }
    function Ns(e, t, a, i) {
      var u = Co(e, t, a, i);
      if (u === null) {
        by(e, t, i, ki, a), Fd(e, i);
        return;
      }
      if (oy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & _a && Zv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && uy(s);
          var f = Co(e, t, a, i);
          if (f === null && by(e, t, i, ki, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var ki = null;
    function Co(e, t, a, i) {
      ki = null;
      var u = dd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ee) {
            var y = f.stateNode;
            if (ef(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return ki = s, null;
    }
    function rf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return bi;
        case "message": {
          var t = _c();
          switch (t) {
            case os:
              return Lr;
            case Ol:
              return bi;
            case Gi:
            case ly:
              return Na;
            case hu:
              return za;
            default:
              return Na;
          }
        }
        default:
          return Na;
      }
    }
    function zs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ro(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, To = null, ku = null;
    function Al(e) {
      return ya = e, To = Us(), !0;
    }
    function af() {
      ya = null, To = null, ku = null;
    }
    function Zi() {
      if (ku)
        return ku;
      var e, t = To, a = t.length, i, u = Us(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ku = u.slice(e, p), ku;
    }
    function Us() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function As() {
      return !1;
    }
    function wr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = wo : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = wr(Hn), zr = Ze({}, Hn, {
      view: 0,
      detail: 0
    }), na = wr(zr), lf, js, Ou;
    function cy(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (lf = e.screenX - Ou.screenX, js = e.screenY - Ou.screenY) : (lf = 0, js = 0), Ou = e);
    }
    var ii = Ze({}, zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cy(e), lf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), Bd = wr(ii), Yd = Ze({}, ii, {
      dataTransfer: 0
    }), Lu = wr(Yd), Id = Ze({}, zr, {
      relatedTarget: 0
    }), Ji = wr(Id), eh = Ze({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = wr(eh), Wd = Ze({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uf = wr(Wd), fy = Ze({}, Hn, {
      data: 0
    }), nh = wr(fy), rh = nh, ah = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Mu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function dy(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mu[e.keyCode] || "Unidentified" : "";
    }
    var xo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = xo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return ih;
    }
    var py = Ze({}, zr, {
      key: dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = wr(py), vy = Ze({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), uh = wr(vy), oh = Ze({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), sh = wr(oh), hy = Ze({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = wr(hy), $d = Ze({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), my = wr($d), Fl = [9, 13, 27, 32], Fs = 229, el = On && "CompositionEvent" in window, Hl = null;
    On && "documentMode" in document && (Hl = document.documentMode);
    var Qd = On && "TextEvent" in window && !Hl, of = On && (!el || Hl && Hl > 8 && Hl <= 11), ch = 32, sf = String.fromCharCode(ch);
    function yy() {
      at("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), at("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), at("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), at("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function cf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ff(e, t) {
      return e === "keydown" && t.keyCode === Fs;
    }
    function qd(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var Nu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (el ? s = cf(t) : Nu ? qd(t, i) && (s = "onCompositionEnd") : ff(t, i) && (s = "onCompositionStart"), !s)
        return null;
      of && !dh(i) && (!Nu && s === "onCompositionStart" ? Nu = Al(u) : s === "onCompositionEnd" && Nu && (f = Zi()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = df(i);
          y !== null && (v.data = y);
        }
      }
    }
    function pf(e, t) {
      switch (e) {
        case "compositionend":
          return df(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (Gd = !0, sf);
        case "textInput":
          var i = t.data;
          return i === sf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Kd(e, t) {
      if (Nu) {
        if (e === "compositionend" || !el && qd(e, t)) {
          var a = Zi();
          return af(), Nu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return of && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vf(e, t, a, i, u) {
      var s;
      if (Qd ? s = pf(t, i) : s = Kd(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ph(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), vf(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Hs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!On)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ps() {
      at("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      uo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Pl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, dd(e)), bv(o, t);
    }
    function o(e) {
      _E(e, 0);
    }
    function c(e) {
      var t = Ef(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Pl = e, n = t, Pl.attachEvent("onpropertychange", z);
    }
    function T() {
      Pl && (Pl.detachEvent("onpropertychange", z), Pl = null, n = null);
    }
    function z(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function Q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function I(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function se(e, t) {
      if (e === "click")
        return c(t);
    }
    function me(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Se(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function Dn(e, t, a, i, u, s, f) {
      var p = a ? Ef(a) : window, v, y;
      if (r(p) ? v = d : Hs(p) ? m ? v = me : (v = Q, y = W) : I(p) && (v = se), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Se(p);
    }
    function D() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function x(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ns(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, M = U ? Ys(U) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== ue && M.tag !== We) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var le = Bd, Le = "onMouseLeave", we = "onMouseEnter", Ct = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = uh, Le = "onPointerLeave", we = "onPointerEnter", Ct = "pointer");
          var ht = w == null ? g : Ef(w), k = M == null ? g : Ef(M), H = new le(Le, Ct + "leave", w, i, u);
          H.target = ht, H.relatedTarget = k;
          var O = null, G = Ys(u);
          if (G === a) {
            var fe = new le(we, Ct + "enter", M, i, u);
            fe.target = k, fe.relatedTarget = ht, O = fe;
          }
          _T(e, H, O, w, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $ = typeof Object.is == "function" ? Object.is : L;
    function ye(e, t) {
      if ($(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!xr.call(t, s) || !$(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ve(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(ze(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zt(e, u, s, f, p);
    }
    function zt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          b = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Vl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ve(e, f), g = Ve(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === Yi;
    }
    function mE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? mE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sT(e) {
      return e && e.ownerDocument && mE(e.ownerDocument.documentElement, e);
    }
    function cT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function yE() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = ba(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fT() {
      var e = yE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? pT(e) : null
      };
    }
    function dT(e) {
      var t = yE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sT(a)) {
        i !== null && Ey(a) && vT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === $r && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function pT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function vT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Vl(e, t);
    }
    var hT = On && "documentMode" in document && document.documentMode <= 11;
    function mT() {
      at("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var hf = null, Cy = null, Zd = null, Ry = !1;
    function yT(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function gT(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function gE(e, t, a) {
      var i = gT(a);
      if (!(Ry || hf == null || hf !== ba(i))) {
        var u = yT(hf);
        if (!Zd || !ye(Zd, u)) {
          Zd = u;
          var s = Sh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = hf;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? Ef(a) : window;
      switch (t) {
        case "focusin":
          (Hs(p) || p.contentEditable === "true") && (hf = p, Cy = a, Zd = null);
          break;
        case "focusout":
          hf = null, Cy = null, Zd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, gE(e, i, u);
          break;
        case "selectionchange":
          if (hT)
            break;
        case "keydown":
        case "keyup":
          gE(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var mf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, Ty = {}, SE = {};
    On && (SE = document.createElement("div").style, "AnimationEvent" in window || (delete mf.animationend.animation, delete mf.animationiteration.animation, delete mf.animationstart.animation), "TransitionEvent" in window || delete mf.transitionend.transition);
    function yh(e) {
      if (Ty[e])
        return Ty[e];
      if (!mf[e])
        return e;
      var t = mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in SE)
          return Ty[e] = t[a];
      return e;
    }
    var EE = yh("animationend"), CE = yh("animationiteration"), RE = yh("animationstart"), TE = yh("transitionend"), wE = /* @__PURE__ */ new Map(), xE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function bo(e, t) {
      wE.set(e, t), at(t, [e]);
    }
    function ET() {
      for (var e = 0; e < xE.length; e++) {
        var t = xE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        bo(a, "on" + i);
      }
      bo(EE, "onAnimationEnd"), bo(CE, "onAnimationIteration"), bo(RE, "onAnimationStart"), bo("dblclick", "onDoubleClick"), bo("focusin", "onFocus"), bo("focusout", "onBlur"), bo(TE, "onTransitionEnd");
    }
    function CT(e, t, a, i, u, s, f) {
      var p = wE.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = Ji;
            break;
          case "focusout":
            y = "blur", v = Ji;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ji;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case EE:
          case CE:
          case RE:
            v = th;
            break;
          case TE:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = my;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & _a) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = xT(a, p, i.type, g, b);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    ET(), D(), Ps(), mT(), yy();
    function RT(e, t, a, i, u, s, f) {
      CT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (x(e, t, a, i, u), Dn(e, t, a, i, u), ST(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function bE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function TT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          bE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          bE(e, M, w), i = b;
        }
    }
    function _E(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        TT(s, f, a);
      }
      is();
    }
    function wT(e, t, a, i, u) {
      var s = dd(a), f = [];
      RT(f, e, i, a, s, t), _E(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ex(t), u = DT(e);
      i.has(u) || (DE(t, e, vc, a), i.add(u));
    }
    function xy(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), DE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[gh]) {
        e[gh] = !0, Je.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function DE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      as && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? Ro(e, t, s, f) : zs(e, t, s);
    }
    function kE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & vc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ee || v === Ce) {
              var y = p.stateNode.containerInfo;
              if (kE(y, f))
                break;
              if (v === Ce)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === ee || b === Ce) {
                    var w = g.stateNode.containerInfo;
                    if (kE(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === ue || U === We) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return wT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === ue && w !== null && (g = w, p !== null)) {
          var U = wl(y, p);
          U != null && v.push(tp(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = wl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = yf(s))
        u++;
      for (var f = 0, p = i; p; p = yf(p))
        f++;
      for (; u - f > 0; )
        a = yf(a), u--;
      for (; f - u > 0; )
        i = yf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = yf(a), i = yf(i);
      }
      return null;
    }
    function OE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var M = wl(p, s);
            M != null && f.unshift(tp(p, M, w));
          } else if (!u) {
            var U = wl(p, s);
            U != null && f.push(tp(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function _T(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && OE(e, t, i, s, !1), u !== null && a !== null && OE(e, a, u, s, !0);
    }
    function DT(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", LE = "autoFocus", Vs = "children", Bs = "style", Ch = "__html", _y, Rh, rp, ME, Th, NE, zE;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      ud(e, t), dc(e, t), Tv(e, t, {
        registrationNameDependencies: Ke,
        possibleRegistrationNames: et
      });
    }, NE = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = wh(a), u = wh(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, ME = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, zE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var kT = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function wh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kT, `
`).replace(OT, "");
    }
    function xh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function UE(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function LT() {
    }
    function bh(e) {
      e.onclick = LT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), yv(t, f);
          else if (s === np) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ro(t, f);
            } else typeof f == "number" && ro(t, "" + f);
          else s === Eh || s === _o || s === LE || (Ke.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? yv(e, f) : s === np ? iv(e, f) : s === Vs ? ro(e, f) : br(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = UE(a), f, p = i;
      if (p === Bi && (p = ed(e)), p === Bi) {
        if (u = Rl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !xr.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return UE(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
      var u = Rl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            Sn(Jd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Ja(e, a), s = no(e, a), Sn("invalid", e);
          break;
        case "option":
          xt(e, a), s = a;
          break;
        case "select":
          uu(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), s = Xf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (cc(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Za(e), N(e, a, !1);
          break;
        case "textarea":
          Za(e), rv(e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function jT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = no(e, a), p = no(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      cc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Vs || v === Eh || v === _o || v === LE || (Ke.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === Bs)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === np) {
            var U = w ? w[Ch] : void 0, F = M ? M[Ch] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else v === Vs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === _o || (Ke.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && Sn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ey(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (NT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          uc(e, u);
          break;
      }
    }
    function HT(e) {
      {
        var t = e.toLowerCase();
        return es.hasOwnProperty(t) && es[t] || null;
      }
    }
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Rl(t, a), Rh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            Sn(Jd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Ja(e, a), Sn("invalid", e);
          break;
        case "option":
          xt(e, a);
          break;
        case "select":
          uu(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), Sn("invalid", e);
          break;
      }
      cc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var F = a[U];
          if (U === Vs)
            typeof F == "string" ? e.textContent !== F && (a[_o] !== !0 && xh(e.textContent, F, s, f), M = [Vs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[_o] !== !0 && xh(e.textContent, F, s, f), M = [Vs, "" + F]);
          else if (Ke.hasOwnProperty(U))
            F != null && (typeof F != "function" && Th(U, F), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Le = en(U);
            if (a[_o] !== !0) {
              if (!(U === Eh || U === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === np) {
                  var we = e.innerHTML, Ct = F ? F[Ch] : void 0;
                  if (Ct != null) {
                    var ht = zE(e, Ct);
                    ht !== we && rp(U, we, ht);
                  }
                } else if (U === Bs) {
                  if (v.delete(U), NE) {
                    var k = Zm(F);
                    le = e.getAttribute("style"), k !== le && rp(U, le, k);
                  }
                } else if (p && !_)
                  v.delete(U.toLowerCase()), le = eu(e, U, F), F !== le && rp(U, le, F);
                else if (!vn(U, Le, p) && !Xn(U, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), le = pl(e, U, F, Le);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(U.toLowerCase());
                    else {
                      var G = HT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    le = eu(e, U, F);
                  }
                  var fe = _;
                  !fe && F !== le && !H && rp(U, le, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && ME(v), t) {
        case "input":
          Za(e), N(e, a, !0);
          break;
        case "textarea":
          Za(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return M;
    }
    function VT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function BT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          qf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], AE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], IT = AE.concat(["button"]), WT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], jE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = Ze({}, e || jE), i = {
          tag: t
        };
        return AE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var $T = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return WT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, QT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, FE = {};
      ap = function(e, t, a) {
        a = a || jE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = $T(e, u) ? null : i, f = s ? null : QT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", Dh = "$", kh = "/$", lp = "$?", up = "$!", GT = "style", My = null, Ny = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case nd: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function uD(e) {
      return e;
    }
    function KT(e) {
      My = Fn(), Ny = fT();
      var t = null;
      return Qn(!1), t;
    }
    function ZT(e) {
      dT(Ny), Qn(My), My = null, Ny = null;
    }
    function JT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = zT(e, t, a, s);
      return cp(u, y), Vy(y, t), y;
    }
    function ew(e, t) {
      e.appendChild(t);
    }
    function tw(e, t, a, i, u) {
      switch (AT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function nw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return jT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function rw(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return cp(i, s), s;
    }
    function aw() {
      var e = window.event;
      return e === void 0 ? Na : rf(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, iw = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, HE = typeof Promise == "function" ? Promise : void 0, lw = typeof queueMicrotask == "function" ? queueMicrotask : typeof HE < "u" ? function(e) {
      return HE.resolve(null).then(e).catch(uw);
    } : Uy;
    function uw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ow(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function sw(e, t, a, i, u, s) {
      FT(e, t, a, i, u), Vy(e, u);
    }
    function PE(e) {
      ro(e, "");
    }
    function cw(e, t, a) {
      e.nodeValue = a;
    }
    function fw(e, t) {
      e.appendChild(t);
    }
    function dw(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function pw(e, t, a) {
      e.insertBefore(t, a);
    }
    function vw(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function hw(e, t) {
      e.removeChild(t);
    }
    function mw(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === kh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === Dh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function yw(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === $r && jy(e, t), Du(e);
    }
    function gw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Sw(e) {
      e.nodeValue = "";
    }
    function Ew(e, t) {
      e = e;
      var a = t[GT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = sc("display", i);
    }
    function Cw(e, t) {
      e.nodeValue = t;
    }
    function Rw(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function Tw(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ww(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function xw(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function VE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function bw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function _w(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $r || t === Yi)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === Dh || a === up || a === lp)
            break;
          if (a === kh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Oh(e.nextSibling);
    }
    function Dw(e) {
      return Oh(e.firstChild);
    }
    function kw(e) {
      return Oh(e.firstChild);
    }
    function Ow(e) {
      return Oh(e.nextSibling);
    }
    function Lw(e, t, a, i, u, s, f) {
      cp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & lt) !== De;
      return PT(e, t, a, p, i, y, f);
    }
    function Mw(e, t, a, i) {
      return cp(a, e), a.mode & lt, VT(e, t);
    }
    function Nw(e, t) {
      cp(t, e);
    }
    function zw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === kh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === Dh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function BE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Dh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Uw(e) {
      Du(e);
    }
    function Aw(e) {
      Du(e);
    }
    function jw(e) {
      return e !== "head" && e !== "body";
    }
    function Fw(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function Hw(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function Pw(e, t) {
      t.nodeType === $r ? Dy(e, t) : t.nodeType === Mn || ky(e, t);
    }
    function Vw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? Dy(a, t) : t.nodeType === Mn || ky(a, t));
      }
    }
    function Bw(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === $r ? Dy(a, i) : i.nodeType === Mn || ky(a, i));
    }
    function Yw(e, t, a) {
      Oy(e, t);
    }
    function Iw(e, t) {
      Ly(e, t);
    }
    function Ww(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function $w(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function Qw(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Oy(a, i);
    }
    function Gw(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function qw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Xw(e) {
      ep(e);
    }
    var gf = Math.random().toString(36).slice(2), Sf = "__reactFiber$" + gf, Hy = "__reactProps$" + gf, sp = "__reactContainer$" + gf, Py = "__reactEvents$" + gf, Kw = "__reactListeners$" + gf, Zw = "__reactHandles$" + gf;
    function Jw(e) {
      delete e[Sf], delete e[Hy], delete e[Py], delete e[Kw], delete e[Zw];
    }
    function cp(e, t) {
      t[Sf] = e;
    }
    function Lh(e, t) {
      t[sp] = e;
    }
    function YE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Ys(e) {
      var t = e[Sf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Sf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = BE(e); u !== null; ) {
              var s = u[Sf];
              if (s)
                return s;
              u = BE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Sf] || e[sp];
      return t && (t.tag === ue || t.tag === We || t.tag === be || t.tag === ee) ? t : null;
    }
    function Ef(e) {
      if (e.tag === ue || e.tag === We)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function ex(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, WE = A.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        WE.setExtraStackFrame(a);
      } else
        WE.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(xr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in IE) && (IE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var By = [], zh;
    zh = [];
    var zu = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (zu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[zu] && S("Unexpected Fiber popped."), e.current = By[zu], By[zu] = null, zh[zu] = null, zu--;
    }
    function aa(e, t, a) {
      zu++, By[zu] = e.current, zh[zu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Uu = ko(li), Bl = ko(!1), Iy = li;
    function Cf(e, t, a) {
      return a && Yl(t) ? Iy : Uu.current;
    }
    function $E(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Rf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Be(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && $E(e, t, s), s;
      }
    }
    function Uh() {
      return Bl.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function Wy(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function QE(e, t, a) {
      {
        if (Uu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Uu, t, e), aa(Bl, a, e);
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Be(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Be(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Be(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return Ze({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Iy = Uu.current, aa(Uu, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = GE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Uu, e), aa(Uu, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function tx(e) {
      {
        if (!vu(e) || e.tag !== ve)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ee:
              return t.stateNode.context;
            case ve: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Oo = 0, Fh = 1, Au = null, $y = !1, Qy = !1;
    function XE(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function nx(e) {
      $y = !0, XE(e);
    }
    function KE() {
      $y && Lo();
    }
    function Lo() {
      if (!Qy && Au !== null) {
        Qy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Au;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, $y = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), vd(os, Lo), s;
        } finally {
          jn(t), Qy = !1;
        }
      }
      return null;
    }
    var Tf = [], wf = 0, Hh = null, Ph = 0, Li = [], Mi = 0, Is = null, ju = 1, Fu = "";
    function rx(e) {
      return $s(), (e.flags & Ci) !== _e;
    }
    function ax(e) {
      return $s(), Ph;
    }
    function ix() {
      var e = Fu, t = ju, a = t & ~lx(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      $s(), Tf[wf++] = Ph, Tf[wf++] = Hh, Hh = e, Ph = t;
    }
    function ZE(e, t, a) {
      $s(), Li[Mi++] = ju, Li[Mi++] = Fu, Li[Mi++] = Is, Is = e;
      var i = ju, u = Fu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, U = Vh(t) + M, F = p << M, le = F | w, Le = b + u;
        ju = 1 << U | le, Fu = Le;
      } else {
        var we = p << s, Ct = we | f, ht = u;
        ju = 1 << v | Ct, Fu = ht;
      }
    }
    function Gy(e) {
      $s();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), ZE(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Un(e);
    }
    function lx(e) {
      return 1 << Vh(e) - 1;
    }
    function qy(e) {
      for (; e === Hh; )
        Hh = Tf[--wf], Tf[wf] = null, Ph = Tf[--wf], Tf[wf] = null;
      for (; e === Is; )
        Is = Li[--Mi], Li[Mi] = null, Fu = Li[--Mi], Li[Mi] = null, ju = Li[--Mi], Li[Mi] = null;
    }
    function ux() {
      return $s(), Is !== null ? {
        id: ju,
        overflow: Fu
      } : null;
    }
    function ox(e, t) {
      $s(), Li[Mi++] = ju, Li[Mi++] = Fu, Li[Mi++] = Is, ju = t.id, Fu = t.overflow, Is = e;
    }
    function $s() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Qs = !1, Mo = null;
    function sx() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Qs = !0;
    }
    function cx() {
      return Qs;
    }
    function fx(e) {
      var t = e.stateNode.containerInfo;
      return Ni = kw(t), Ur = e, nl = !0, Mo = null, Qs = !1, !0;
    }
    function dx(e, t, a) {
      return Ni = Ow(t), Ur = e, nl = !0, Mo = null, Qs = !1, a !== null && ox(e, a), !0;
    }
    function eC(e, t) {
      switch (e.tag) {
        case ee: {
          Pw(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & lt) !== De;
          Bw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && Vw(i.dehydrated, t);
          break;
        }
      }
    }
    function tC(e, t) {
      eC(e, t);
      var a = m_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case ee: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, Yw(a, i);
                break;
              case We:
                var u = t.pendingProps;
                Iw(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & lt) !== De;
                Qw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case We: {
                var b = t.pendingProps, w = (e.mode & lt) !== De;
                Gw(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case be: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case ue:
                var F = t.type;
                t.pendingProps, Ww(U, F);
                break;
              case We:
                var le = t.pendingProps;
                $w(U, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function nC(e, t) {
      t.flags = t.flags & ~Gr | mn, Xy(e, t);
    }
    function rC(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = Tw(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = Dw(i), !0) : !1;
        }
        case We: {
          var u = e.pendingProps, s = ww(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case be: {
          var f = xw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ux(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = y_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & lt) !== De && (e.flags & xe) === _e;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          Ky(e) && (Xy(Ur, e), Zy()), nC(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!rC(e, t)) {
          Ky(e) && (Xy(Ur, e), Zy()), t = op(a);
          var i = Ur;
          if (!t || !rC(e, t)) {
            nC(Ur, e), nl = !1, Ur = e;
            return;
          }
          tC(i, a);
        }
      }
    }
    function px(e, t, a) {
      var i = e.stateNode, u = !Qs, s = Lw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function vx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Mw(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case ee: {
              var s = u.stateNode.containerInfo, f = (u.mode & lt) !== De;
              Fw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & lt) !== De;
              Hw(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function hx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Nw(a, e);
    }
    function mx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zw(a);
    }
    function aC(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== ee && t.tag !== be; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return aC(e), nl = !0, !1;
      if (e.tag !== ee && (e.tag !== ue || jw(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Ky(e))
            iC(e), Zy();
          else
            for (; t; )
              tC(e, t), t = op(t);
      }
      return aC(e), e.tag === be ? Ni = mx(e) : Ni = Ur ? op(e.stateNode) : null, !0;
    }
    function yx() {
      return nl && Ni !== null;
    }
    function iC(e) {
      for (var t = Ni; t; )
        eC(e, t), t = op(t);
    }
    function xf() {
      Ur = null, Ni = null, nl = !1, Qs = !1;
    }
    function lC() {
      Mo !== null && (J0(Mo), Mo = null);
    }
    function Ar() {
      return nl;
    }
    function eg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var gx = A.ReactCurrentBatchConfig, Sx = null;
    function Ex() {
      return gx.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Cx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          e.add(Be(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          t.add(Be(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          a.add(Be(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          i.add(Be(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          u.add(Be(w) || "Component"), qs.add(w.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(w) {
          s.add(Be(w) || "Component"), qs.add(w.type);
        }), yp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          je(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          je(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Gs(u);
          je(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), uC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = Cx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uC.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Be(s) || "Component"), uC.add(s.type);
            });
            var u = Gs(i);
            try {
              Wt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              sn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, oC = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, oC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Be(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Rx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ve) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Rx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Be(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ve)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Be(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cC(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Da) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = ac(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= Ci, H;
        var G = k.alternate;
        if (G !== null) {
          var fe = G.index;
          return fe < H ? (k.flags |= mn, H) : fe;
        } else
          return k.flags |= mn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= mn), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== We) {
          var fe = eE(O, k.mode, G);
          return fe.return = k, fe;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, G) {
        var fe = O.type;
        if (fe === fi)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === fe || // Keep this check inline so it only runs on the false path:
        hR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof fe == "object" && fe !== null && fe.$$typeof === Ye && sC(fe) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = gp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Pe = JS(O, k.mode, G);
        return Pe.ref = gp(k, H, O), Pe.return = k, Pe;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== Ce || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var fe = tE(O, k.mode, G);
          return fe.return = k, fe;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, G, fe) {
        if (H === null || H.tag !== yt) {
          var oe = Yo(O, k.mode, G, fe);
          return oe.return = k, oe;
        } else {
          var Pe = u(H, O);
          return Pe.return = k, Pe;
        }
      }
      function b(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = eE("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case _r: {
              var fe = JS(H, k.mode, O);
              return fe.ref = gp(k, null, H), fe.return = k, fe;
            }
            case rr: {
              var oe = tE(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Ye: {
              var Pe = H._payload, Qe = H._init;
              return b(k, Qe(Pe), O);
            }
          }
          if (nt(H) || qe(H)) {
            var Xt = Yo(H, k.mode, O, null);
            return Xt.return = k, Xt;
          }
          Ih(k, H);
        }
        return typeof H == "function" && Wh(k), null;
      }
      function w(k, H, O, G) {
        var fe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return fe !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return O.key === fe ? v(k, H, O, G) : null;
            case rr:
              return O.key === fe ? y(k, H, O, G) : null;
            case Ye: {
              var oe = O._payload, Pe = O._init;
              return w(k, H, Pe(oe), G);
            }
          }
          if (nt(O) || qe(O))
            return fe !== null ? null : g(k, H, O, G, null);
          Ih(k, O);
        }
        return typeof O == "function" && Wh(k), null;
      }
      function M(k, H, O, G, fe) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + G, fe);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case _r: {
              var Pe = k.get(G.key === null ? O : G.key) || null;
              return v(H, Pe, G, fe);
            }
            case rr: {
              var Qe = k.get(G.key === null ? O : G.key) || null;
              return y(H, Qe, G, fe);
            }
            case Ye:
              var Xt = G._payload, Ut = G._init;
              return M(k, H, O, Ut(Xt), fe);
          }
          if (nt(G) || qe(G)) {
            var Gn = k.get(O) || null;
            return g(H, Gn, G, fe, null);
          }
          Ih(H, G);
        }
        return typeof G == "function" && Wh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case _r:
            case rr:
              oC(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Ye:
              var fe = k._payload, oe = k._init;
              U(oe(fe), H, O);
              break;
          }
        }
        return H;
      }
      function F(k, H, O, G) {
        for (var fe = null, oe = 0; oe < O.length; oe++) {
          var Pe = O[oe];
          fe = U(Pe, fe, k);
        }
        for (var Qe = null, Xt = null, Ut = H, Gn = 0, At = 0, Pn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Pn = Ut, Ut = null) : Pn = Ut.sibling;
          var la = w(k, Ut, O[At], G);
          if (la === null) {
            Ut === null && (Ut = Pn);
            break;
          }
          e && Ut && la.alternate === null && t(k, Ut), Gn = s(la, Gn, At), Xt === null ? Qe = la : Xt.sibling = la, Xt = la, Ut = Pn;
        }
        if (At === O.length) {
          if (a(k, Ut), Ar()) {
            var Yr = At;
            Ws(k, Yr);
          }
          return Qe;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var oi = b(k, O[At], G);
            oi !== null && (Gn = s(oi, Gn, At), Xt === null ? Qe = oi : Xt.sibling = oi, Xt = oi);
          }
          if (Ar()) {
            var Ca = At;
            Ws(k, Ca);
          }
          return Qe;
        }
        for (var Ra = i(k, Ut); At < O.length; At++) {
          var ua = M(Ra, k, At, O[At], G);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? At : ua.key), Gn = s(ua, Gn, At), Xt === null ? Qe = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && Ra.forEach(function(If) {
          return t(k, If);
        }), Ar()) {
          var Wu = At;
          Ws(k, Wu);
        }
        return Qe;
      }
      function le(k, H, O, G) {
        var fe = qe(O);
        if (typeof fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === fe && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var oe = fe.call(O);
          if (oe)
            for (var Pe = null, Qe = oe.next(); !Qe.done; Qe = oe.next()) {
              var Xt = Qe.value;
              Pe = U(Xt, Pe, k);
            }
        }
        var Ut = fe.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Pn = H, la = 0, Yr = 0, oi = null, Ca = Ut.next(); Pn !== null && !Ca.done; Yr++, Ca = Ut.next()) {
          Pn.index > Yr ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var Ra = w(k, Pn, Ca.value, G);
          if (Ra === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && Ra.alternate === null && t(k, Pn), la = s(Ra, la, Yr), At === null ? Gn = Ra : At.sibling = Ra, At = Ra, Pn = oi;
        }
        if (Ca.done) {
          if (a(k, Pn), Ar()) {
            var ua = Yr;
            Ws(k, ua);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ca.done; Yr++, Ca = Ut.next()) {
            var Wu = b(k, Ca.value, G);
            Wu !== null && (la = s(Wu, la, Yr), At === null ? Gn = Wu : At.sibling = Wu, At = Wu);
          }
          if (Ar()) {
            var If = Yr;
            Ws(k, If);
          }
          return Gn;
        }
        for (var Xp = i(k, Pn); !Ca.done; Yr++, Ca = Ut.next()) {
          var Kl = M(Xp, k, Yr, Ca.value, G);
          Kl !== null && (e && Kl.alternate !== null && Xp.delete(Kl.key === null ? Yr : Kl.key), la = s(Kl, la, Yr), At === null ? Gn = Kl : At.sibling = Kl, At = Kl);
        }
        if (e && Xp.forEach(function(G_) {
          return t(k, G_);
        }), Ar()) {
          var Q_ = Yr;
          Ws(k, Q_);
        }
        return Gn;
      }
      function Le(k, H, O, G) {
        if (H !== null && H.tag === We) {
          a(k, H.sibling);
          var fe = u(H, O);
          return fe.return = k, fe;
        }
        a(k, H);
        var oe = eE(O, k.mode, G);
        return oe.return = k, oe;
      }
      function we(k, H, O, G) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe) {
            var Pe = O.type;
            if (Pe === fi) {
              if (oe.tag === yt) {
                a(k, oe.sibling);
                var Qe = u(oe, O.props.children);
                return Qe.return = k, Qe._debugSource = O._source, Qe._debugOwner = O._owner, Qe;
              }
            } else if (oe.elementType === Pe || // Keep this check inline so it only runs on the false path:
            hR(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ye && sC(Pe) === oe.type) {
              a(k, oe.sibling);
              var Xt = u(oe, O.props);
              return Xt.ref = gp(k, oe, O), Xt.return = k, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === fi) {
          var Ut = Yo(O.props.children, k.mode, G, O.key);
          return Ut.return = k, Ut;
        } else {
          var Gn = JS(O, k.mode, G);
          return Gn.ref = gp(k, H, O), Gn.return = k, Gn;
        }
      }
      function Ct(k, H, O, G) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe)
            if (oe.tag === Ce && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Pe = u(oe, O.children || []);
              return Pe.return = k, Pe;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var Qe = tE(O, k.mode, G);
        return Qe.return = k, Qe;
      }
      function ht(k, H, O, G) {
        var fe = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (fe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return f(we(k, H, O, G));
            case rr:
              return f(Ct(k, H, O, G));
            case Ye:
              var oe = O._payload, Pe = O._init;
              return ht(k, H, Pe(oe), G);
          }
          if (nt(O))
            return F(k, H, O, G);
          if (qe(O))
            return le(k, H, O, G);
          Ih(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, G)) : (typeof O == "function" && Wh(k), a(k, H));
      }
      return ht;
    }
    var bf = cC(!0), fC = cC(!1);
    function Tx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function wx(e, t) {
      for (var a = e.child; a !== null; )
        f_(a, t), a = a.sibling;
    }
    var lg = ko(null), ug;
    ug = {};
    var $h = null, _f = null, og = null, Qh = !1;
    function Gh() {
      $h = null, _f = null, og = null, Qh = !1;
    }
    function dC() {
      Qh = !0;
    }
    function pC() {
      Qh = !1;
    }
    function vC(e, t, a) {
      aa(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      ra(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (_u(i.childLanes, t) ? u !== null && !_u(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xx(e, t, a) {
      bx(e, t, a);
    }
    function bx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ve) {
                var p = Rs(a), v = Hu(Kt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Xe(w.lanes, a)), cg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ft)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Xe(U.lanes, a)), cg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      $h = e, _f = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function tr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (_f === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          _f = a, $h.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          _f = _f.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function _x() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function hC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Dx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function kx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Fa(e, t) {
      return qh(e, t);
    }
    var Ox = qh;
    function qh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== _e && fR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (mn | Gr)) !== _e && fR(e), i = u, u = u.return;
      if (i.tag === ee) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mC = 0, yC = 1, Xh = 2, dg = 3, Kh = !1, pg, Zh;
    pg = !1, Zh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Hu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Db()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Ox(e, a);
      } else
        return kx(e, u, t, a);
    }
    function Jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, Jc(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Lx(e, t, a, i, u, s) {
      switch (a.tag) {
        case yC: {
          var f = a.payload;
          if (typeof f == "function") {
            dC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pC();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Kn | xe;
        case mC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dC(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              pC();
            }
          } else
            y = v;
          return y == null ? i : Ze({}, i, y);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, Zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = Y, F = null, le = null, Le = null, we = s;
        do {
          var Ct = we.lane, ht = we.eventTime;
          if (_u(i, Ct)) {
            if (Le !== null) {
              var H = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = Lx(e, u, we, M, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== Dt) {
              e.flags |= rn;
              var G = u.effects;
              G === null ? u.effects = [we] : G.push(we);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: Ct,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Le === null ? (le = Le = k, F = M) : Le = Le.next = k, U = Xe(U, Ct);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var fe = p, oe = fe.next;
            fe.next = null, we = oe, u.lastBaseUpdate = fe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Le;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var Qe = Pe;
          do
            U = Xe(U, Qe.lane), Qe = Qe.next;
          while (Qe !== Pe);
        } else s === null && (u.shared.lanes = Y);
        Wp(U), e.lanes = U, e.memoizedState = M;
      }
      Zh = null;
    }
    function Mx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SC() {
      Kh = !1;
    }
    function tm() {
      return Kh;
    }
    function EC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Mx(f, a));
        }
    }
    var Sp = {}, zo = ko(Sp), Ep = ko(Sp), nm = ko(Sp);
    function rm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CC() {
      var e = rm(nm.current);
      return e;
    }
    function mg(e, t) {
      aa(nm, t, e), aa(Ep, e, e), aa(zo, Sp, e);
      var a = qT(t);
      ra(zo, e), aa(zo, a, e);
    }
    function kf(e) {
      ra(zo, e), ra(Ep, e), ra(nm, e);
    }
    function yg() {
      var e = rm(zo.current);
      return e;
    }
    function RC(e) {
      rm(nm.current);
      var t = rm(zo.current), a = XT(t, e.type);
      t !== a && (aa(Ep, e, e), aa(zo, a, e));
    }
    function gg(e) {
      Ep.current === e && (ra(zo, e), ra(Ep, e));
    }
    var Nx = 0, TC = 1, wC = 1, Cp = 2, al = ko(Nx);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Of(e) {
      return e & TC;
    }
    function Eg(e, t) {
      return e & TC | t;
    }
    function zx(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      aa(al, t, e);
    }
    function Lf(e) {
      ra(al, e);
    }
    function Ux(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || VE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & xe) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function Ax(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = A.ReactCurrentDispatcher, Rp = A.ReactCurrentBatchConfig, Tg, Mf;
    Tg = /* @__PURE__ */ new Set();
    var Ks = Y, qt = null, dr = null, pr = null, im = !1, Tp = !1, wp = 0, jx = 0, Fx = 25, V = null, zi = null, Ao = -1, wg = !1;
    function Vt() {
      {
        var e = V;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function te() {
      {
        var e = V;
        zi !== null && (Ao++, zi[Ao] !== e && Hx(e));
      }
    }
    function Nf(e) {
      e != null && !nt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Hx(e) {
      {
        var t = Be(qt);
        if (!Tg.has(t) && (Tg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = zi[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function xg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!$(e[a], t[a]))
          return !1;
      return !0;
    }
    function zf(e, t, a, i, u, s) {
      Ks = s, qt = t, zi = e !== null ? e._debugHookTypes : null, Ao = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? ce.current = $C : zi !== null ? ce.current = WC : ce.current = IC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, wp = 0, p >= Fx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, dr = null, pr = null, t.updateQueue = null, Ao = -1, ce.current = QC, f = a(i, u);
        } while (Tp);
      }
      ce.current = gm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Ks = Y, qt = null, dr = null, pr = null, V = null, zi = null, Ao = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Uf() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function xC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ts(e.lanes, a);
    }
    function bC() {
      if (ce.current = gm, im) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Ks = Y, qt = null, dr = null, pr = null, zi = null, Ao = -1, V = null, HC = !1, Tp = !1, wp = 0;
    }
    function Wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function _C() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Wl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yx.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, M = null, U = null, F = g;
        do {
          var le = F.lane;
          if (_u(Ks, le)) {
            if (U !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = we;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Ct = F.action;
              b = e(b, Ct);
            }
          } else {
            var Le = {
              lane: le,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Le, w = b) : U = U.next = Le, qt.lanes = Xe(qt.lanes, le), Wp(le);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? w = b : U.next = M, $(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var H = k.lane;
          qt.lanes = Xe(qt.lanes, H), Wp(H), k = k.next;
        } while (k !== ht);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function kg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        $(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function oD(e, t, a) {
    }
    function sD(e, t, a) {
    }
    function Og(e, t, a) {
      var i = qt, u = Wl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          $(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Kc(v, Ks) || DC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(OC.bind(null, i, y, e), [e]), i.flags |= Qr, xp(cr | jr, kC.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = qt, u = Ui(), s = t();
      if (!Mf) {
        var f = t();
        $(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !$(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(OC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Qr, xp(cr | jr, kC.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Kc(g, Ks) || DC(i, t, s);
      }
      return s;
    }
    function DC(e, t, a) {
      e.flags |= po;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = _C(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LC(t) && MC(e);
    }
    function OC(e, t, a) {
      var i = function() {
        LC(t) && MC(e);
      };
      return a(i);
    }
    function LC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !$(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Fa(e, Ae);
      t !== null && yr(t, e, Ae, Kt);
    }
    function um(e) {
      var t = Wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ix.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return Dg(bg);
    }
    function Mg(e) {
      return kg(bg);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = _C(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ng(e) {
      var t = Wl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Wl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = xp(cr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (xg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = xp(cr | t, a, f, s);
    }
    function cm(e, t) {
      return (qt.mode & Nt) !== De ? bp(Ri | Qr | wc, jr, e, t) : bp(Qr | wc, jr, e, t);
    }
    function _p(e, t) {
      return sm(Qr, jr, e, t);
    }
    function zg(e, t) {
      return bp(gt, Il, e, t);
    }
    function fm(e, t) {
      return sm(gt, Il, e, t);
    }
    function Ug(e, t) {
      var a = gt;
      return a |= $i, (qt.mode & Nt) !== De && (a |= bl), bp(a, fr, e, t);
    }
    function dm(e, t) {
      return sm(gt, fr, e, t);
    }
    function NC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = gt;
      return u |= $i, (qt.mode & Nt) !== De && (u |= bl), bp(u, fr, NC.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(gt, fr, NC.bind(null, t, e), i);
    }
    function Px(e, t) {
    }
    var vm = Px;
    function jg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Wl();
      return t.memoizedState = e, e;
    }
    function zC(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return AC(t, i, e);
    }
    function UC(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return AC(t, a, e);
    }
    function AC(e, t, a) {
      var i = !kd(Ks);
      if (i) {
        if (!$(a, t)) {
          var u = Md();
          qt.lanes = Xe(qt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Vx(e, t, a) {
      var i = Ua();
      jn(Qv(i, bi)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = um(!1), t = e[0], a = e[1], i = Vx.bind(null, a), u = Wl();
      return u.memoizedState = i, [t, i];
    }
    function jC() {
      var e = Lg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Mg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var HC = !1;
    function Bx() {
      return HC;
    }
    function Vg() {
      var e = Wl(), t = jm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = ix();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = jx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function Yx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PC(e))
        VC(t, u);
      else {
        var s = hC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), BC(s, t, i);
        }
      }
      YC(e, i);
    }
    function Ix(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PC(e))
        VC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, $(y, v)) {
                Dx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = hC(e, t, u, i);
        if (g !== null) {
          var b = Ea();
          yr(g, e, i, b), BC(g, t, i);
        }
      }
      YC(e, i);
    }
    function PC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function VC(e, t) {
      Tp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, Jc(e, u);
      }
    }
    function YC(e, t, a) {
      ps(e, t);
    }
    var gm = {
      readContext: tr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: K
    }, IC = null, WC = null, $C = null, QC = null, $l = null, il = null, Sm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), Nf(t), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), Nf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), Nf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), Nf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), Nf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), Nf(t);
          var a = ce.current;
          ce.current = $l;
          try {
            return Fg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = ce.current;
          ce.current = $l;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = ce.current;
          ce.current = $l;
          try {
            return um(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Vg();
        },
        unstable_isNewReconciler: K
      }, WC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ce.current;
          ce.current = $l;
          try {
            return Fg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ce.current;
          ce.current = $l;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), Ng(e);
        },
        useState: function(e) {
          V = "useState", te();
          var t = ce.current;
          ce.current = $l;
          try {
            return um(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", te(), Vg();
        },
        unstable_isNewReconciler: K
      }, $C = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ce.current;
          ce.current = il;
          try {
            return mm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ce.current;
          ce.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), om();
        },
        useState: function(e) {
          V = "useState", te();
          var t = ce.current;
          ce.current = il;
          try {
            return Lg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), jC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", te(), ym();
        },
        unstable_isNewReconciler: K
      }, QC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ce.current;
          ce.current = Sm;
          try {
            return mm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ce.current;
          ce.current = Sm;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), om();
        },
        useState: function(e) {
          V = "useState", te();
          var t = ce.current;
          ce.current = Sm;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), UC(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", te(), ym();
        },
        unstable_isNewReconciler: K
      }, $l = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), Vt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), Vt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), Vt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), Vt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), Vt();
          var a = ce.current;
          ce.current = $l;
          try {
            return Fg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), Vt();
          var i = ce.current;
          ce.current = $l;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), Vt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Ie(), Vt();
          var t = ce.current;
          ce.current = $l;
          try {
            return um(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), Vt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), Vt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Ie(), Vt(), Vg();
        },
        unstable_isNewReconciler: K
      }, il = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), te();
          var a = ce.current;
          ce.current = il;
          try {
            return mm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), te();
          var i = ce.current;
          ce.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), te(), om();
        },
        useState: function(e) {
          V = "useState", Ie(), te();
          var t = ce.current;
          ce.current = il;
          try {
            return Lg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), te(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), te(), jC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), te(), ym();
        },
        unstable_isNewReconciler: K
      }, Sm = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), te(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), te();
          var a = ce.current;
          ce.current = il;
          try {
            return mm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), te();
          var i = ce.current;
          ce.current = il;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), te(), om();
        },
        useState: function(e) {
          V = "useState", Ie(), te();
          var t = ce.current;
          ce.current = il;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), te(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), te(), UC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), te(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), te(), lm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), te(), ym();
        },
        unstable_isNewReconciler: K
      };
    }
    var jo = X.unstable_now, GC = 0, Em = -1, Dp = -1, Cm = -1, Yg = !1, Rm = !1;
    function qC() {
      return Yg;
    }
    function Wx() {
      Rm = !0;
    }
    function $x() {
      Yg = !1, Rm = !1;
    }
    function Qx() {
      Yg = Rm, Rm = !1;
    }
    function XC() {
      return GC;
    }
    function KC() {
      GC = jo();
    }
    function Ig(e) {
      Dp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function ZC(e) {
      Dp = -1;
    }
    function Tm(e, t) {
      if (Dp >= 0) {
        var a = jo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Ql(e) {
      if (Em >= 0) {
        var t = jo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case vt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Wg(e) {
      if (Cm >= 0) {
        var t = jo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case vt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      Em = jo();
    }
    function $g() {
      Cm = jo();
    }
    function Qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = Ze({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Xg, Kg, Zg, Jg, JC, wm, eS, tS, nS, kp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var e0 = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          e0.has(a) || (e0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          Jg.has(a) || (Jg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Gt) {
          yn(!0);
          try {
            s = a(i, u);
          } finally {
            yn(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : Ze({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = fo(e), u = Ea(), s = Vo(i), f = Hu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (yr(p, i, s, u), Jh(p, i, s)), ps(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = fo(e), u = Ea(), s = Vo(i), f = Hu(u, s);
        f.tag = yC, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (yr(p, i, s, u), Jh(p, i, s)), ps(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fo(e), i = Ea(), u = Vo(a), s = Hu(i, u);
        s.tag = Xh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (yr(f, a, u, i), Jh(f, a, u)), Lc(a, u);
      }
    };
    function t0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Gt) {
            yn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              yn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ye(a, i) || !ye(u, s) : !0;
    }
    function Gx(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || nt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function n0(e, t) {
      t.updater = aS, e.stateNode = t, pu(t, e), t._reactInternalInstance = Gg;
    }
    function r0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Cf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Rf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & Gt) {
        yn(!0);
        try {
          g = new t(a, s);
        } finally {
          yn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      n0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = wt(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var le = wt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(le) || (Zg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && $E(e, u, s), g;
    }
    function qx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Be(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function a0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Be(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Gx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Cf(e, t, !0);
        u.context = Rf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qx(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = gt;
        y |= $i, (e.mode & Nt) !== De && (y |= bl), e.flags |= y;
      }
    }
    function Xx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Cf(e, t, !0);
        v = Rf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && a0(e, u, a, v), SC();
      var w = e.memoizedState, M = u.state = w;
      if (em(e, a, u, i), M = e.memoizedState, s === a && w === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = gt;
          U |= $i, (e.mode & Nt) !== De && (U |= bl), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var F = tm() || t0(e, t, s, a, w, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = gt;
          le |= $i, (e.mode & Nt) !== De && (le |= bl), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = gt;
          Le |= $i, (e.mode & Nt) !== De && (Le |= bl), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function Kx(e, t, a, i, u) {
      var s = t.stateNode;
      gC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var w = Cf(t, a, !0);
        b = Rf(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && a0(t, s, i, b), SC();
      var F = t.memoizedState, le = s.state = F;
      if (em(t, i, s, u), le = t.memoizedState, f === v && F === le && !Uh() && !tm() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof M == "function" && (rS(t, a, M, i), le = t.memoizedState);
      var Le = tm() || t0(t, a, p, i, F, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Le;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Pi(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Zx(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = Zx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ve)
            return;
          console.error(i);
        }
        var p = u ? Be(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ee)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Be(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var Jx = typeof WeakMap == "function" ? WeakMap : Map;
    function i0(e, t, a) {
      var i = Hu(Kt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Wb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Hu(Kt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mR(e), uS(e, t), typeof u != "function" && Yb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Be(e) || "Unknown"));
      }), i;
    }
    function l0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Jx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = $b.bind(null, e, t, a);
        Kr && $p(e, a), t.then(s, s);
      }
    }
    function e1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function t1(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === De && (a === de || a === $e || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u0(e) {
      var t = e;
      do {
        if (t.tag === be && Ux(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function o0(e, t, a, i, u) {
      if ((e.mode & lt) === De) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= xe, a.flags |= Tc, a.flags &= -52805, a.tag === ve) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Hu(Kt, Ae);
              f.tag = Xh, No(a, f, Ae);
            }
          }
          a.lanes = Xe(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function n1(e, t, a, i, u) {
      if (a.flags |= us, Kr && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        t1(a), Ar() && a.mode & lt && JE();
        var f = u0(t);
        if (f !== null) {
          f.flags &= ~Cr, o0(f, t, a, e, u), f.mode & lt && l0(e, s, u), e1(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            l0(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & lt) {
        JE();
        var v = u0(t);
        if (v !== null) {
          (v.flags & Kn) === _e && (v.flags |= Cr), o0(v, t, a, e, u), eg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ub(i);
      var y = t;
      do {
        switch (y.tag) {
          case ee: {
            var g = i;
            y.flags |= Kn;
            var b = Rs(u);
            y.lanes = Xe(y.lanes, b);
            var w = i0(y, g, b);
            hg(y, w);
            return;
          }
          case ve:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & xe) === _e && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !uR(F))) {
              y.flags |= Kn;
              var le = Rs(u);
              y.lanes = Xe(y.lanes, le);
              var Le = oS(y, M, le);
              hg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function r1() {
      return null;
    }
    var Op = A.ReactCurrentOwner, ul = !1, sS, Lp, cS, fS, dS, Js, pS, xm, Mp;
    sS = {}, Lp = {}, cS = {}, fS = {}, dS = {}, Js = !1, pS = {}, xm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = fC(t, null, a, i) : t.child = bf(t, e.child, a, i);
    }
    function a1(e, t, a, i) {
      t.child = bf(t, e.child, null, i), t.child = bf(t, null, a, i);
    }
    function s0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, In(!0), v = zf(e, t, f, i, p, u), y = Uf(), t.mode & Gt) {
          yn(!0);
          try {
            v = zf(e, t, f, i, p, u), y = Uf();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ul ? (xC(e, t, u), Pu(e, t, u)) : (Ar() && y && Gy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function c0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (s_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Fe, t.type = f, mS(t, s), f0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Mp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Mp[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && tl(
          b,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var w = e.child, M = RS(e, u);
      if (!M) {
        var U = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ye, F(U, i) && e.ref === t.ref)
          return Pu(e, t, u);
      }
      t.flags |= ti;
      var le = ac(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function f0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && tl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ye(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & Tc) !== _e && (ul = !0);
          else return t.lanes = e.lanes, Pu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function d0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & lt) === De) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (Jr(a, Zr)) {
          var b = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Fm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, Fm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function i1(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function l1(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function u1(e, t, a) {
      {
        t.flags |= gt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function p0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= vo);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Cf(t, a, !0);
        f = Rf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, In(!0), v = zf(e, t, a, i, f, u), y = Uf(), t.mode & Gt) {
          yn(!0);
          try {
            v = zf(e, t, a, i, f, u), y = Uf();
          } finally {
            yn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ul ? (xC(e, t, u), Pu(e, t, u)) : (Ar() && y && Gy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function v0(e, t, a, i, u) {
      {
        switch (w_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= xe, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = Rs(u);
            t.lanes = Xe(t.lanes, g);
            var b = oS(t, Zs(y, t), g);
            hg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && tl(
            w,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      Yl(a) ? (M = !0, jh(t)) : M = !1, Df(t, u);
      var U = t.stateNode, F;
      U === null ? (_m(e, t), r0(t, a, i), iS(t, a, i, u), F = !0) : e === null ? F = Xx(t, a, i, u) : F = Kx(e, t, a, i, u);
      var le = hS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Be(t) || "a component"), Js = !0);
      }
      return le;
    }
    function hS(e, t, a, i, u, s) {
      p0(e, t);
      var f = (t.flags & xe) !== _e;
      if (!i && !f)
        return u && qE(t, a, !1), Pu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZC();
      else {
        va(t);
        {
          if (In(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          In(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? a1(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && qE(t, a, !0), t.child;
    }
    function h0(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function o1(e, t, a) {
      if (h0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gC(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m0(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m0(e, t, p, a, b);
        } else {
          fx(t);
          var w = fC(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (xf(), p === s)
          return Pu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function m0(e, t, a, i, u) {
      return xf(), eg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function s1(e, t, a) {
      RC(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= ka), p0(e, t), ga(e, t, f, a), t.child;
    }
    function c1(e, t) {
      return e === null && Jy(t), null;
    }
    function f1(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = c_(v), g = ll(v, u), b;
      switch (y) {
        case de:
          return mS(t, v), t.type = v = Yf(v), b = vS(null, t, v, g, i), b;
        case ve:
          return t.type = v = $S(v), b = v0(null, t, v, g, i), b;
        case $e:
          return t.type = v = QS(v), b = s0(null, t, v, g, i), b;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && tl(
              w,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = c0(
            null,
            t,
            v,
            ll(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function d1(e, t, a, i, u) {
      _m(e, t), t.tag = ve;
      var s;
      return Yl(a) ? (s = !0, jh(t)) : s = !1, Df(t, u), r0(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function p1(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Cf(t, a, !1);
        s = Rf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Gt && rl.recordLegacyContextWarning(t, null), In(!0), Op.current = t, p = zf(null, t, a, u, s, i), v = Uf(), In(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = wt(a) || "Unknown";
          Lp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Lp[b] = !0);
        }
        t.tag = ve, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Yl(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), n0(t, p), iS(t, a, u, i), hS(null, t, a, !0, w, i);
      } else {
        if (t.tag = de, t.mode & Gt) {
          yn(!0);
          try {
            p = zf(null, t, a, u, s, i), v = Uf();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && Gy(t), ga(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dt
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: r1(),
        transitions: null
      };
    }
    function v1(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function h1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function m1(e, t) {
      return Ts(e.childLanes, t);
    }
    function y0(e, t, a) {
      var i = t.pendingProps;
      x_(t) && (t.flags |= xe);
      var u = al.current, s = !1, f = (t.flags & xe) !== _e;
      if (f || h1(u, e) ? (s = !0, t.flags &= ~xe) : (e === null || e.memoizedState !== null) && (u = zx(u, wC)), u = Of(u), Uo(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return C1(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = y1(t, y, g, a), w = t.child;
          return w.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return R1(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, le = i.children, Le = S1(e, t, le, F, a), we = t.child, Ct = e.child.memoizedState;
          return we.memoizedState = Ct === null ? gS(a) : v1(Ct, a), we.childLanes = m1(e, a), t.memoizedState = yS, Le;
        } else {
          var ht = i.children, k = g1(e, t, ht, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function y1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & lt) === De && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = ES(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return gR(e, t, Y, null);
    }
    function g0(e, t) {
      return ac(e, t);
    }
    function g1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = g0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function S1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & lt) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = g0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ac(p, i) : (b = Yo(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && eg(i), bf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function E1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & lt) !== De && bf(t, e.child, null, u), v;
    }
    function C1(e, t, a) {
      return (e.mode & lt) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Fy(t) ? e.lanes = Rr : e.lanes = Zr, null;
    }
    function R1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var k = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= xe, null;
          var H = i.children, O = i.fallback, G = E1(e, t, H, O, f), fe = t.child;
          return fe.memoizedState = gS(f), t.memoizedState = yS, G;
        }
      else {
        if (sx(), (t.mode & lt) === De)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = bw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = lS(b, p, y);
          return bm(e, t, f, w);
        }
        var M = Jr(f, e.childLanes);
        if (ul || M) {
          var U = jm();
          if (U !== null) {
            var F = Ud(U, f);
            if (F !== Dt && F !== s.retryLane) {
              s.retryLane = F;
              var le = Kt;
              Fa(e, F), yr(U, e, F, le);
            }
          }
          VS();
          var Le = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Le);
        } else if (VE(u)) {
          t.flags |= xe, t.child = e.child;
          var we = Qb.bind(null, e);
          return _w(u, we), null;
        } else {
          dx(t, u, s.treeContext);
          var Ct = i.children, ht = SS(t, Ct);
          return ht.flags |= Gr, ht;
        }
      }
    }
    function S0(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), cg(e.return, t, a);
    }
    function T1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && S0(i, a, e);
        } else if (i.tag === ln)
          S0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function w1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function x1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function b1(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function E0(e, t) {
      {
        var a = nt(e), i = !a && typeof qe(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function _1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!E0(e[a], a))
              return;
        } else {
          var i = qe(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!E0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function C0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      x1(u), b1(s, u), _1(f, u), ga(e, t, f, a);
      var p = al.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= xe;
      else {
        var y = e !== null && (e.flags & xe) !== _e;
        y && T1(t, t.child, a), p = Of(p);
      }
      if (Uo(t, p), (t.mode & lt) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = w1(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && am(U) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = w, w = M, M = F;
            }
            CS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            CS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function D1(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = bf(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var R0 = !1;
    function k1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || R0 || (R0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (vC(t, u, p), f !== null) {
        var y = f.value;
        if ($(y, p)) {
          if (f.children === s.children && !Uh())
            return Pu(e, t, a);
        } else
          xx(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var T0 = !1;
    function O1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (T0 || (T0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Op.current = t, In(!0), p = s(f), In(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Np() {
      ul = !0;
    }
    function _m(e, t) {
      (t.mode & lt) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Pu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZC(), Wp(t.lanes), Jr(a, t.childLanes) ? (Tx(e, t), t.child) : null;
    }
    function L1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Da) : s.push(e), a.flags |= mn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function M1(e, t, a) {
      switch (t.tag) {
        case ee:
          h0(t), t.stateNode, xf();
          break;
        case ue:
          RC(t);
          break;
        case ve: {
          var i = t.type;
          Yl(i) && jh(t);
          break;
        }
        case Ce:
          mg(t, t.stateNode.containerInfo);
          break;
        case ft: {
          var u = t.memoizedProps.value, s = t.type._context;
          vC(t, s, u);
          break;
        }
        case vt:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= gt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, Of(al.current)), t.flags |= xe, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return y0(e, t, a);
            Uo(t, Of(al.current));
            var b = Pu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Uo(t, Of(al.current));
          break;
        }
        case ln: {
          var w = (e.flags & xe) !== _e, M = Jr(a, t.childLanes);
          if (w) {
            if (M)
              return C0(e, t, a);
            t.flags |= xe;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Uo(t, al.current), M)
            break;
          return null;
        }
        case ke:
        case jt:
          return t.lanes = Y, d0(e, t, a);
      }
      return Pu(e, t, a);
    }
    function w0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return L1(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & xe) === _e)
            return ul = !1, M1(e, t, a);
          (e.flags & Tc) !== _e ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && rx(t)) {
        var f = t.index, p = ax();
        ZE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case ut:
          return p1(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return f1(e, t, v, a);
        }
        case de: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ll(y, g);
          return vS(e, t, y, b, a);
        }
        case ve: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : ll(w, M);
          return v0(e, t, w, U, a);
        }
        case ee:
          return o1(e, t, a);
        case ue:
          return s1(e, t, a);
        case We:
          return c1(e, t);
        case be:
          return y0(e, t, a);
        case Ce:
          return D1(e, t, a);
        case $e: {
          var F = t.type, le = t.pendingProps, Le = t.elementType === F ? le : ll(F, le);
          return s0(e, t, F, Le, a);
        }
        case yt:
          return i1(e, t, a);
        case pt:
          return l1(e, t, a);
        case vt:
          return u1(e, t, a);
        case ft:
          return k1(e, t, a);
        case fn:
          return O1(e, t, a);
        case ot: {
          var we = t.type, Ct = t.pendingProps, ht = ll(we, Ct);
          if (t.type !== t.elementType) {
            var k = we.propTypes;
            k && tl(
              k,
              ht,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return ht = ll(we.type, ht), c0(e, t, we, ht, a);
        }
        case Fe:
          return f0(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : ll(H, O);
          return d1(e, t, H, G, a);
        }
        case ln:
          return C0(e, t, a);
        case bt:
          break;
        case ke:
          return d0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Af(e) {
      e.flags |= gt;
    }
    function x0(e) {
      e.flags |= En, e.flags |= vo;
    }
    var b0, TS, _0, D0;
    b0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === We)
          ew(e, u.stateNode);
        else if (u.tag !== Ce) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, _0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = nw(f, a, s, i, u, p);
        t.updateQueue = v, v && Af(t);
      }
    }, D0 = function(e, t, a, i) {
      a !== i && Af(t);
    };
    function zp(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = _e;
      if (t) {
        if ((e.mode & Mt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function N1(e, t, a) {
      if (yx() && (t.mode & lt) !== De && (t.flags & xe) === _e)
        return iC(t), xf(), t.flags |= Cr | us | Kn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (hx(t), Fr(t), (t.mode & Mt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (xf(), (t.flags & xe) === _e && (t.memoizedState = null), t.flags |= gt, Fr(t), (t.mode & Mt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lC(), !0;
    }
    function k0(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case ut:
        case an:
        case Fe:
        case de:
        case $e:
        case yt:
        case pt:
        case vt:
        case fn:
        case ot:
          return Fr(t), null;
        case ve: {
          var u = t.type;
          return Yl(u) && Ah(t), Fr(t), null;
        }
        case ee: {
          var s = t.stateNode;
          if (kf(t), Wy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Af(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== _e) && (t.flags |= Wn, lC());
            }
          }
          return TS(e, t), Fr(t), null;
        }
        case ue: {
          gg(t);
          var v = CC(), y = t.type;
          if (e !== null && t.stateNode != null)
            _0(e, t, y, i, v), e.ref !== t.ref && x0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = yg(), b = Bh(t);
            if (b)
              px(t, v, g) && Af(t);
            else {
              var w = JT(y, i, v, g, t);
              b0(w, t, !1, !1), t.stateNode = w, tw(w, y, i, v) && Af(t);
            }
            t.ref !== null && x0(t);
          }
          return Fr(t), null;
        }
        case We: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            D0(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = CC(), le = yg(), Le = Bh(t);
            Le ? vx(t) && Af(t) : t.stateNode = rw(M, F, le, t);
          }
          return Fr(t), null;
        }
        case be: {
          Lf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ct = N1(e, t, we);
            if (!Ct)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & xe) !== _e)
            return t.lanes = a, (t.mode & Mt) !== De && Qg(t), t;
          var ht = we !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & lt) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Sg(al.current, wC) ? zb() : VS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= gt), Fr(t), (t.mode & Mt) !== De && ht) {
            var fe = t.child;
            fe !== null && (t.treeBaseDuration -= fe.treeBaseDuration);
          }
          return null;
        }
        case Ce:
          return kf(t), TS(e, t), e === null && Xw(t.stateNode.containerInfo), Fr(t), null;
        case ft:
          var oe = t.type._context;
          return sg(oe, t), Fr(t), null;
        case Ht: {
          var Pe = t.type;
          return Yl(Pe) && Ah(t), Fr(t), null;
        }
        case ln: {
          Lf(t);
          var Qe = t.memoizedState;
          if (Qe === null)
            return Fr(t), null;
          var Xt = (t.flags & xe) !== _e, Ut = Qe.rendering;
          if (Ut === null)
            if (Xt)
              zp(Qe, !1);
            else {
              var Gn = Ab() && (e === null || (e.flags & xe) === _e);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Pn = am(At);
                  if (Pn !== null) {
                    Xt = !0, t.flags |= xe, zp(Qe, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= gt), t.subtreeFlags = _e, wx(t, a), Uo(t, Eg(al.current, Cp)), t.child;
                  }
                  At = At.sibling;
                }
              Qe.tail !== null && $n() > X0() && (t.flags |= xe, Xt = !0, zp(Qe, !1), t.lanes = bd);
            }
          else {
            if (!Xt) {
              var Yr = am(Ut);
              if (Yr !== null) {
                t.flags |= xe, Xt = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= gt), zp(Qe, !0), Qe.tail === null && Qe.tailMode === "hidden" && !Ut.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              $n() * 2 - Qe.renderingStartTime > X0() && a !== Zr && (t.flags |= xe, Xt = !0, zp(Qe, !1), t.lanes = bd);
            }
            if (Qe.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ca = Qe.last;
              Ca !== null ? Ca.sibling = Ut : t.child = Ut, Qe.last = Ut;
            }
          }
          if (Qe.tail !== null) {
            var Ra = Qe.tail;
            Qe.rendering = Ra, Qe.tail = Ra.sibling, Qe.renderingStartTime = $n(), Ra.sibling = null;
            var ua = al.current;
            return Xt ? ua = Eg(ua, Cp) : ua = Of(ua), Uo(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case bt:
          break;
        case ke:
        case jt: {
          PS(t);
          var Wu = t.memoizedState, If = Wu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Kl = Xp !== null;
            Kl !== If && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= Nn);
          }
          return !If || (t.mode & lt) === De ? Fr(t) : Jr(Xl, Zr) && (Fr(t), t.subtreeFlags & (mn | gt) && (t.flags |= Nn)), null;
        }
        case _t:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function z1(e, t, a) {
      switch (qy(t), t.tag) {
        case ve: {
          var i = t.type;
          Yl(i) && Ah(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | xe, (t.mode & Mt) !== De && Qg(t), t) : null;
        }
        case ee: {
          t.stateNode, kf(t), Wy(t), Rg();
          var s = t.flags;
          return (s & Kn) !== _e && (s & xe) === _e ? (t.flags = s & ~Kn | xe, t) : null;
        }
        case ue:
          return gg(t), null;
        case be: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            xf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | xe, (t.mode & Mt) !== De && Qg(t), t) : null;
        }
        case ln:
          return Lf(t), null;
        case Ce:
          return kf(t), null;
        case ft:
          var v = t.type._context;
          return sg(v, t), null;
        case ke:
        case jt:
          return PS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function O0(e, t, a) {
      switch (qy(t), t.tag) {
        case ve: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case ee: {
          t.stateNode, kf(t), Wy(t), Rg();
          break;
        }
        case ue: {
          gg(t);
          break;
        }
        case Ce:
          kf(t);
          break;
        case be:
          Lf(t);
          break;
        case ln:
          Lf(t);
          break;
        case ft:
          var u = t.type._context;
          sg(u, t);
          break;
        case ke:
        case jt:
          PS(t);
          break;
      }
    }
    var L0 = null;
    L0 = /* @__PURE__ */ new Set();
    var Dm = !1, Hr = !1, U1 = typeof WeakSet == "function" ? WeakSet : Set, ge = null, jf = null, Ff = null;
    function A1(e) {
      xl(null, function() {
        throw e;
      }), ls();
    }
    var j1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function M0(e, t) {
      try {
        Fo(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        j1(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function F1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function N0(e, t) {
      try {
        U0(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Hf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && rt && e.mode & Mt)
              try {
                Gl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          a.current = null;
    }
    function km(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var z0 = !1;
    function H1(e, t) {
      KT(e.containerInfo), ge = t, P1();
      var a = z0;
      return z0 = !1, a;
    }
    function P1() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & _l) !== _e && t !== null ? (t.return = e, ge = t) : V1();
      }
    }
    function V1() {
      for (; ge !== null; ) {
        var e = ge;
        Wt(e);
        try {
          B1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function B1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== _e) {
        switch (Wt(e), e.tag) {
          case de:
          case $e:
          case Fe:
            break;
          case ve: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = L0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Be(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ee: {
            {
              var v = e.stateNode;
              Rw(v.containerInfo);
            }
            break;
          }
          case ue:
          case We:
          case Ce:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? qi(t) : (e & fr) !== Ha && ss(t), (e & Il) !== Ha && Qp(!0), km(t, a, p), (e & Il) !== Ha && Qp(!1), (e & jr) !== Ha ? Ll() : (e & fr) !== Ha && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? Td(t) : (e & fr) !== Ha && kc(t);
            var f = s.create;
            (e & Il) !== Ha && Qp(!0), s.destroy = f(), (e & Il) !== Ha && Qp(!1), (e & jr) !== Ha ? zv() : (e & fr) !== Ha && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== _e ? v = "useLayoutEffect" : (s.tag & Il) !== _e ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Y1(e, t) {
      if ((t.flags & gt) !== _e)
        switch (t.tag) {
          case vt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XC(), p = t.alternate === null ? "mount" : "update";
            qC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ee:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case vt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function I1(e, t, a, i) {
      if ((a.flags & kl) !== _e)
        switch (a.tag) {
          case de:
          case $e:
          case Fe: {
            if (!Hr)
              if (a.mode & Mt)
                try {
                  Gl(), Fo(fr | cr, a);
                } finally {
                  Ql(a);
                }
              else
                Fo(fr | cr, a);
            break;
          }
          case ve: {
            var u = a.stateNode;
            if (a.flags & gt && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Mt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Mt)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), EC(a, p, u));
            break;
          }
          case ee: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case ve:
                    y = a.child.stateNode;
                    break;
                }
              EC(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & gt) {
              var b = a.type, w = a.memoizedProps;
              ow(g, b, w);
            }
            break;
          }
          case We:
            break;
          case Ce:
            break;
          case vt: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, le = a.stateNode.effectDuration, Le = XC(), we = t === null ? "mount" : "update";
              qC() && (we = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, we, le, Le), Vb(a);
                var Ct = a.return;
                e: for (; Ct !== null; ) {
                  switch (Ct.tag) {
                    case ee:
                      var ht = Ct.stateNode;
                      ht.effectDuration += le;
                      break e;
                    case vt:
                      var k = Ct.stateNode;
                      k.effectDuration += le;
                      break e;
                  }
                  Ct = Ct.return;
                }
              }
            }
            break;
          }
          case be: {
            Z1(e, a);
            break;
          }
          case ln:
          case Ht:
          case bt:
          case ke:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && U0(a);
    }
    function W1(e) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe: {
          if (e.mode & Mt)
            try {
              Gl(), M0(e, e.return);
            } finally {
              Ql(e);
            }
          else
            M0(e, e.return);
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && F1(e, e.return, t), N0(e, e.return);
          break;
        }
        case ue: {
          N0(e, e.return);
          break;
        }
      }
    }
    function $1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gw(u) : Ew(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === We) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Sw(s) : Cw(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === ke || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function U0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              Gl(), u = t(i);
            } finally {
              Ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Be(e)), t.current = i;
      }
    }
    function Q1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function A0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, A0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && Jw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function G1(e) {
      for (var t = e.return; t !== null; ) {
        if (j0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function j0(e) {
      return e.tag === ue || e.tag === ee || e.tag === Ce;
    }
    function F0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || j0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== We && t.tag !== Zt; ) {
          if (t.flags & mn || t.child === null || t.tag === Ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function q1(e) {
      var t = G1(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & ka && (PE(a), t.flags &= ~ka);
          var i = F0(e);
          bS(e, i, a);
          break;
        }
        case ee:
        case Ce: {
          var u = t.stateNode.containerInfo, s = F0(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ue || i === We;
      if (u) {
        var s = e.stateNode;
        t ? vw(a, s, t) : dw(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ue || i === We;
      if (u) {
        var s = e.stateNode;
        t ? pw(a, s, t) : fw(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, sl = !1;
    function X1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Pr = i.stateNode, sl = !1;
              break e;
            }
            case ee: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case Ce: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        H0(e, t, a), Pr = null, sl = !1;
      }
      Q1(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        H0(e, t, i), i = i.sibling;
    }
    function H0(e, t, a) {
      switch (Ed(a), a.tag) {
        case ue:
          Hr || Hf(a, t);
        case We: {
          {
            var i = Pr, u = sl;
            Pr = null, Ho(e, t, a), Pr = i, sl = u, Pr !== null && (sl ? mw(Pr, a.stateNode) : hw(Pr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Pr !== null && (sl ? yw(Pr, a.stateNode) : jy(Pr, a.stateNode));
          return;
        }
        case Ce: {
          {
            var s = Pr, f = sl;
            Pr = a.stateNode.containerInfo, sl = !0, Ho(e, t, a), Pr = s, sl = f;
          }
          return;
        }
        case de:
        case $e:
        case ot:
        case Fe: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & Il) !== Ha ? km(a, t, w) : (M & fr) !== Ha && (ss(a), a.mode & Mt ? (Gl(), km(a, t, w), Ql(a)) : km(a, t, w), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ho(e, t, a);
          return;
        }
        case ve: {
          if (!Hr) {
            Hf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && wS(a, t, U);
          }
          Ho(e, t, a);
          return;
        }
        case bt: {
          Ho(e, t, a);
          return;
        }
        case ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Ho(e, t, a), Hr = F;
          } else
            Ho(e, t, a);
          break;
        }
        default: {
          Ho(e, t, a);
          return;
        }
      }
    }
    function K1(e) {
      e.memoizedState;
    }
    function Z1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Aw(s);
          }
        }
      }
    }
    function P0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new U1()), t.forEach(function(i) {
          var u = Gb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (jf !== null && Ff !== null)
                $p(Ff, jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function J1(e, t, a) {
      jf = a, Ff = e, Wt(t), V0(t, e), Wt(t), jf = null, Ff = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            X1(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Wt(p), V0(p, e), p = p.sibling;
      Wt(f);
    }
    function V0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case de:
        case $e:
        case ot:
        case Fe: {
          if (cl(t, e), ql(e), u & gt) {
            try {
              ol(Il | cr, e, e.return), Fo(Il | cr, e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            if (e.mode & Mt) {
              try {
                Gl(), ol(fr | cr, e, e.return);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
              Ql(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
          }
          return;
        }
        case ve: {
          cl(t, e), ql(e), u & En && i !== null && Hf(i, i.return);
          return;
        }
        case ue: {
          cl(t, e), ql(e), u & En && i !== null && Hf(i, i.return);
          {
            if (e.flags & ka) {
              var s = e.stateNode;
              try {
                PE(s);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
            }
            if (u & gt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    sw(f, g, y, v, p, e);
                  } catch (Pe) {
                    cn(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case We: {
          if (cl(t, e), ql(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              cw(b, M, w);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
          }
          return;
        }
        case ee: {
          if (cl(t, e), ql(e), u & gt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                Uw(t.containerInfo);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
          }
          return;
        }
        case Ce: {
          cl(t, e), ql(e);
          return;
        }
        case be: {
          cl(t, e), ql(e);
          var F = e.child;
          if (F.flags & Nn) {
            var le = F.stateNode, Le = F.memoizedState, we = Le !== null;
            if (le.isHidden = we, we) {
              var Ct = F.alternate !== null && F.alternate.memoizedState !== null;
              Ct || Nb();
            }
          }
          if (u & gt) {
            try {
              K1(e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            P0(e);
          }
          return;
        }
        case ke: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var k = Hr;
            Hr = k || ht, cl(t, e), Hr = k;
          } else
            cl(t, e);
          if (ql(e), u & Nn) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, fe = e;
            if (H.isHidden = G, G && !ht && (fe.mode & lt) !== De) {
              ge = fe;
              for (var oe = fe.child; oe !== null; )
                ge = oe, tb(oe), oe = oe.sibling;
            }
            $1(fe, G);
          }
          return;
        }
        case ln: {
          cl(t, e), ql(e), u & gt && P0(e);
          return;
        }
        case bt:
          return;
        default: {
          cl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          q1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function eb(e, t, a) {
      jf = a, Ff = t, ge = e, B0(e, t, a), jf = null, Ff = null;
    }
    function B0(e, t, a) {
      for (var i = (e.mode & lt) !== De; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === ke && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = Dm, w = Hr;
            Dm = p, Hr = g, Hr && !w && (ge = u, nb(u));
            for (var M = s; M !== null; )
              ge = M, B0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            ge = u, Dm = b, Hr = w, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & kl) !== _e && s !== null ? (s.return = u, ge = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & kl) !== _e) {
          var u = i.alternate;
          Wt(i);
          try {
            I1(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function tb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case de:
          case $e:
          case ot:
          case Fe: {
            if (t.mode & Mt)
              try {
                Gl(), ol(fr, t, t.return);
              } finally {
                Ql(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case ve: {
            Hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ue: {
            Hf(t, t.return);
            break;
          }
          case ke: {
            var u = t.memoizedState !== null;
            if (u) {
              Y0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : Y0(e);
      }
    }
    function Y0(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function nb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === ke) {
          var i = t.memoizedState !== null;
          if (i) {
            I0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : I0(e);
      }
    }
    function I0(e) {
      for (; ge !== null; ) {
        var t = ge;
        Wt(t);
        try {
          W1(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function rb(e, t, a, i) {
      ge = t, ab(t, e, a, i);
    }
    function ab(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Qi) !== _e && s !== null ? (s.return = u, ge = s) : ib(e, t, a, i);
      }
    }
    function ib(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Qr) !== _e) {
          Wt(u);
          try {
            lb(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function lb(e, t, a, i) {
      switch (t.tag) {
        case de:
        case $e:
        case Fe: {
          if (t.mode & Mt) {
            $g();
            try {
              Fo(jr | cr, t);
            } finally {
              Wg(t);
            }
          } else
            Fo(jr | cr, t);
          break;
        }
      }
    }
    function ub(e) {
      ge = e, ob();
    }
    function ob() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Da) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, fb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ge = e;
          }
        }
        (e.subtreeFlags & Qi) !== _e && t !== null ? (t.return = e, ge = t) : sb();
      }
    }
    function sb() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Qr) !== _e && (Wt(e), cb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function cb(e) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe: {
          e.mode & Mt ? ($g(), ol(jr | cr, e, e.return), Wg(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function fb(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        Wt(a), pb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : db(e);
      }
    }
    function db(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (A0(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function pb(e, t) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe: {
          e.mode & Mt ? ($g(), ol(jr, e, t), Wg(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function vb(e) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe: {
          try {
            Fo(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe: {
          try {
            Fo(jr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case de:
        case $e:
        case Fe:
          try {
            ol(jr | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var gb = [];
    function Sb() {
      gb.forEach(function(e) {
        return e();
      });
    }
    var Eb = A.ReactCurrentActQueue;
    function Cb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function W0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Eb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Rb = Math.ceil, DS = A.ReactCurrentDispatcher, kS = A.ReactCurrentOwner, Vr = A.ReactCurrentBatchConfig, fl = A.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), $0 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Vu = 0, Ap = 1, ec = 2, Om = 3, jp = 4, Q0 = 5, OS = 6, Et = vr, Sa = null, kn = null, hr = Y, Xl = Y, LS = ko(Y), mr = Vu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Pp = null, Pa = null, MS = 0, G0 = 500, q0 = 1 / 0, Tb = 500, Bu = null;
    function Vp() {
      q0 = $n() + Tb;
    }
    function X0() {
      return q0;
    }
    var Nm = !1, NS = null, Pf = null, tc = !1, Po = null, Bp = Y, zS = [], US = null, wb = 50, Yp = 0, AS = null, jS = !1, zm = !1, xb = 50, Vf = 0, Um = null, Ip = Kt, Am = Y, K0 = !1;
    function jm() {
      return Sa;
    }
    function Ea() {
      return (Et & (Br | Ai)) !== vr ? $n() : (Ip !== Kt || (Ip = $n()), Ip);
    }
    function Vo(e) {
      var t = e.mode;
      if ((t & lt) === De)
        return Ae;
      if ((Et & Br) !== vr && hr !== Y)
        return Rs(hr);
      var a = Ex() !== Sx;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === Dt && (Am = Md()), Am;
      }
      var u = Ua();
      if (u !== Dt)
        return u;
      var s = aw();
      return s;
    }
    function bb(e) {
      var t = e.mode;
      return (t & lt) === De ? Ae : Vv();
    }
    function yr(e, t, a, i) {
      Xb(), K0 && S("useInsertionEffect must not schedule updates."), jS && (zm = !0), go(e, a, i), (Et & Br) !== Y && e === Sa ? Jb(t) : (Kr && xs(e, t, a), e_(t), e === Sa && ((Et & Br) === vr && (Hp = Xe(Hp, a)), mr === jp && Bo(e, hr)), Va(e, i), a === Ae && Et === vr && (t.mode & lt) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Vp(), KE()));
    }
    function _b(e, t, a) {
      var i = e.current;
      i.lanes = t, go(e, t, a), Va(e, a);
    }
    function Db(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Et & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      qc(e, t);
      var i = Gc(e, e === Sa ? hr : Y);
      if (i === Y) {
        a !== null && pR(a), e.callbackNode = null, e.callbackPriority = Dt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== IS)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pR(a);
      var f;
      if (u === Ae)
        e.tag === Oo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), nx(eR.bind(null, e))) : XE(eR.bind(null, e)), fl.current !== null ? fl.current.push(Lo) : lw(function() {
          (Et & (Br | Ai)) === vr && Lo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Lr:
            p = os;
            break;
          case bi:
            p = Ol;
            break;
          case Na:
            p = Gi;
            break;
          case za:
            p = hu;
            break;
          default:
            p = Gi;
            break;
        }
        f = WS(p, Z0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z0(e, t) {
      if ($x(), Ip = Kt, Am = Y, (Et & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Iu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Gc(e, e === Sa ? hr : Y);
      if (u === Y)
        return null;
      var s = !Kc(e, u) && !Pv(e, u) && !t, f = s ? Fb(e, u) : Hm(e, u);
      if (f !== Vu) {
        if (f === ec) {
          var p = Xc(e);
          p !== Y && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw nc(e, Y), Bo(e, u), Va(e, $n()), v;
        }
        if (f === OS)
          Bo(e, u);
        else {
          var y = !Kc(e, u), g = e.current.alternate;
          if (y && !Ob(g)) {
            if (f = Hm(e, u), f === ec) {
              var b = Xc(e);
              b !== Y && (u = b, f = FS(e, b));
            }
            if (f === Ap) {
              var w = Fp;
              throw nc(e, Y), Bo(e, u), Va(e, $n()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, kb(e, f, u);
        }
      }
      return Va(e, $n()), e.callbackNode === a ? Z0.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Pp;
      if (ef(e)) {
        var i = nc(e, t);
        i.flags |= Cr, qw(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== ec) {
        var s = Pa;
        Pa = a, s !== null && J0(s);
      }
      return u;
    }
    function J0(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function kb(e, t, a) {
      switch (t) {
        case Vu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Pa, Bu);
          break;
        }
        case Om: {
          if (Bo(e, a), bu(a) && // do not delay if we're inside an act() scope
          !vR()) {
            var i = MS + G0 - $n();
            if (i > 10) {
              var u = Gc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!_u(s, a)) {
                Ea(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Uy(rc.bind(null, e, Pa, Bu), i);
              break;
            }
          }
          rc(e, Pa, Bu);
          break;
        }
        case jp: {
          if (Bo(e, a), Od(a))
            break;
          if (!vR()) {
            var f = ri(e, a), p = f, v = $n() - p, y = qb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(rc.bind(null, e, Pa, Bu), y);
              break;
            }
          }
          rc(e, Pa, Bu);
          break;
        }
        case Q0: {
          rc(e, Pa, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ob(e) {
      for (var t = e; ; ) {
        if (t.flags & po) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!$(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & po && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = Ts(t, Mm), t = Ts(t, Hp), Iv(e, t);
    }
    function eR(e) {
      if (Qx(), (Et & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Iu();
      var t = Gc(e, Y);
      if (!Jr(t, Ae))
        return Va(e, $n()), null;
      var a = Hm(e, t);
      if (e.tag !== Oo && a === ec) {
        var i = Xc(e);
        i !== Y && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw nc(e, Y), Bo(e, t), Va(e, $n()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Pa, Bu), Va(e, $n()), null;
    }
    function Lb(e, t) {
      t !== Y && (Jc(e, Xe(t, Ae)), Va(e, $n()), (Et & (Br | Ai)) === vr && (Vp(), Lo()));
    }
    function HS(e, t) {
      var a = Et;
      Et |= $0;
      try {
        return e(t);
      } finally {
        Et = a, Et === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Vp(), KE());
      }
    }
    function Mb(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Vr.transition = f, Et === vr && Vp();
      }
    }
    function Yu(e) {
      Po !== null && Po.tag === Oo && (Et & (Br | Ai)) === vr && Iu();
      var t = Et;
      Et |= $0;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Vr.transition = a, Et = t, (Et & (Br | Ai)) === vr && Lo();
      }
    }
    function tR() {
      return (Et & (Br | Ai)) !== vr;
    }
    function Fm(e, t) {
      aa(LS, Xl, e), Xl = Xe(Xl, t);
    }
    function PS(e) {
      Xl = LS.current, ra(LS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, iw(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          O0(u, i), i = i.return;
        }
      Sa = e;
      var s = ac(e.current, null);
      return kn = s, hr = Xl = t, mr = Vu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Pp = null, Pa = null, _x(), rl.discardPendingWarnings(), s;
    }
    function nR(e, t) {
      do {
        var a = kn;
        try {
          if (Gh(), bC(), sn(), kS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, kn = null;
            return;
          }
          if (Ue && a.mode & Mt && Tm(a, !0), He)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              xi(a, i, hr);
            } else
              cs(a, t, hr);
          n1(e, a.return, a, t, hr), lR(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function rR() {
      var e = DS.current;
      return DS.current = gm, e === null ? gm : e;
    }
    function aR(e) {
      DS.current = e;
    }
    function Nb() {
      MS = $n();
    }
    function Wp(e) {
      Lm = Xe(e, Lm);
    }
    function zb() {
      mr === Vu && (mr = Om);
    }
    function VS() {
      (mr === Vu || mr === Om || mr === ec) && (mr = jp), Sa !== null && (Cs(Lm) || Cs(Hp)) && Bo(Sa, hr);
    }
    function Ub(e) {
      mr !== jp && (mr = ec), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Ab() {
      return mr === Vu;
    }
    function Hm(e, t) {
      var a = Et;
      Et |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), Wv(e, t);
        }
        Bu = Ad(), nc(e, t);
      }
      Su(t);
      do
        try {
          jb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      if (Gh(), Et = a, aR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Oc(), Sa = null, hr = Y, mr;
    }
    function jb() {
      for (; kn !== null; )
        iR(kn);
    }
    function Fb(e, t) {
      var a = Et;
      Et |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), Wv(e, t);
        }
        Bu = Ad(), Vp(), nc(e, t);
      }
      Su(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      return Gh(), aR(i), Et = a, kn !== null ? (Av(), Vu) : (Oc(), Sa = null, hr = Y, mr);
    }
    function Hb() {
      for (; kn !== null && !hd(); )
        iR(kn);
    }
    function iR(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & Mt) !== De ? (Ig(e), a = BS(t, e, Xl), Tm(e, !0)) : a = BS(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? lR(e) : kn = a, kS.current = null;
    }
    function lR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & us) === _e) {
          Wt(t);
          var u = void 0;
          if ((t.mode & Mt) === De ? u = k0(a, t, Xl) : (Ig(t), u = k0(a, t, Xl), Tm(t, !1)), sn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = z1(a, t);
          if (s !== null) {
            s.flags &= Ov, kn = s;
            return;
          }
          if ((t.mode & Mt) !== De) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= us, i.subtreeFlags = _e, i.deletions = null;
          else {
            mr = OS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      mr === Vu && (mr = Q0);
    }
    function rc(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, jn(Lr), Pb(e, t, a, i);
      } finally {
        Vr.transition = u, jn(i);
      }
      return null;
    }
    function Pb(e, t, a, i) {
      do
        Iu();
      while (Po !== null);
      if (Kb(), (Et & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dt;
      var f = Xe(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, kn = null, hr = Y), ((u.subtreeFlags & Qi) !== _e || (u.flags & Qi) !== _e) && (tc || (tc = !0, US = a, WS(Gi, function() {
        return Iu(), null;
      })));
      var p = (u.subtreeFlags & (_l | Dl | kl | Qi)) !== _e, v = (u.flags & (_l | Dl | kl | Qi)) !== _e;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Et;
        Et |= Ai, kS.current = null, H1(e, u), KC(), J1(e, u, s), ZT(e.containerInfo), e.current = u, fs(s), eb(u, e, s), ds(), md(), Et = b, jn(g), Vr.transition = y;
      } else
        e.current = u, KC();
      var w = tc;
      if (tc ? (tc = !1, Po = e, Bp = s) : (Vf = 0, Um = null), f = e.pendingLanes, f === Y && (Pf = null), w || cR(e.current, !1), gd(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), Sb(), Va(e, $n()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], le = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: le,
            digest: Le
          });
        }
      if (Nm) {
        Nm = !1;
        var we = NS;
        throw NS = null, we;
      }
      return Jr(Bp, Ae) && e.tag !== Oo && Iu(), f = e.pendingLanes, Jr(f, Ae) ? (Wx(), e === AS ? Yp++ : (Yp = 0, AS = e)) : Yp = 0, Lo(), Rd(), null;
    }
    function Iu() {
      if (Po !== null) {
        var e = Gv(Bp), t = _s(Na, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, jn(t), Bb();
        } finally {
          jn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Vb(e) {
      zS.push(e), tc || (tc = !0, WS(Gi, function() {
        return Iu(), null;
      }));
    }
    function Bb() {
      if (Po === null)
        return !1;
      var e = US;
      US = null;
      var t = Po, a = Bp;
      if (Po = null, Bp = Y, (Et & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, zm = !1, gu(a);
      var i = Et;
      Et |= Ai, ub(t.current), rb(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Y1(t, f);
        }
      }
      xd(), cR(t.current, !0), Et = i, Lo(), zm ? t === Um ? Vf++ : (Vf = 0, Um = t) : Vf = 0, jS = !1, zm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uR(e) {
      return Pf !== null && Pf.has(e);
    }
    function Yb(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function Ib(e) {
      Nm || (Nm = !0, NS = e);
    }
    var Wb = Ib;
    function oR(e, t, a) {
      var i = Zs(a, t), u = i0(e, i, Ae), s = No(e, u, Ae), f = Ea();
      s !== null && (go(s, Ae, f), Va(s, f));
    }
    function cn(e, t, a) {
      if (A1(a), Qp(!1), e.tag === ee) {
        oR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ee) {
          oR(i, e, a);
          return;
        } else if (i.tag === ve) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uR(s)) {
            var f = Zs(a, e), p = oS(i, f, Ae), v = No(i, p, Ae), y = Ea();
            v !== null && (go(v, Ae, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function $b(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Zc(e, a), t_(e), Sa === e && _u(hr, a) && (mr === jp || mr === Om && bu(hr) && $n() - MS < G0 ? nc(e, Y) : Mm = Xe(Mm, a)), Va(e, u);
    }
    function sR(e, t) {
      t === Dt && (t = bb(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (go(i, t, a), Va(i, a));
    }
    function Qb(e) {
      var t = e.memoizedState, a = Dt;
      t !== null && (a = t.retryLane), sR(e, a);
    }
    function Gb(e, t) {
      var a = Dt, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ln:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sR(e, a);
    }
    function qb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Rb(e / 1960) * 1960;
    }
    function Xb() {
      if (Yp > wb)
        throw Yp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Vf > xb && (Vf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Kb() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function cR(e, t) {
      Wt(e), Pm(e, bl, mb), t && Pm(e, Ri, yb), Pm(e, bl, vb), t && Pm(e, Ri, hb), sn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function fR(e) {
      {
        if ((Et & Br) !== vr || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== ut && t !== ee && t !== ve && t !== de && t !== $e && t !== ot && t !== Fe)
          return;
        var a = Be(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Wt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : sn();
        }
      }
    }
    var BS;
    {
      var Zb = null;
      BS = function(e, t, a) {
        var i = SR(Zb, t);
        try {
          return w0(e, t, a);
        } catch (s) {
          if (cx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), bC(), O0(e, t), SR(t, i), t.mode & Mt && Ig(t), xl(null, w0, null, e, t, a), Wi()) {
            var u = ls();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function Jb(e) {
      if (hi && !Bx())
        switch (e.tag) {
          case de:
          case $e:
          case Fe: {
            var t = kn && Be(kn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Be(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ve: {
            dR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dR = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          xs(e, i, t);
        });
      }
    }
    var IS = {};
    function WS(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), IS) : vd(e, t);
      }
    }
    function pR(e) {
      if (e !== IS)
        return Mv(e);
    }
    function vR() {
      return fl.current !== null;
    }
    function e_(e) {
      {
        if (e.mode & lt) {
          if (!W0())
            return;
        } else if (!Cb() || Et !== vr || e.tag !== de && e.tag !== $e && e.tag !== Fe)
          return;
        if (fl.current === null) {
          var t = ir;
          try {
            Wt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Be(e));
          } finally {
            t ? Wt(e) : sn();
          }
        }
      }
    }
    function t_(e) {
      e.tag !== Oo && W0() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      K0 = e;
    }
    var ji = null, Bf = null, n_ = function(e) {
      ji = e;
    };
    function Yf(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return Yf(e);
    }
    function QS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: B,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function hR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ve: {
            typeof i == "function" && (u = !0);
            break;
          }
          case de: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case $e: {
            (s === B || s === Ye) && (u = !0);
            break;
          }
          case ot:
          case Fe: {
            (s === Ge || s === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function mR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        Bf === null && (Bf = /* @__PURE__ */ new WeakSet()), Bf.add(e);
      }
    }
    var r_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Iu(), Yu(function() {
          GS(e.current, i, a);
        });
      }
    }, a_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Iu(), Yu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case de:
          case Fe:
          case ve:
            v = p;
            break;
          case $e:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ji(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === ve ? g = !0 : y = !0));
        }
        if (Bf !== null && (Bf.has(e) || i !== null && Bf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Fa(e, Ae);
          w !== null && yr(w, e, Ae, Kt);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var i_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case de:
          case Fe:
          case ve:
            p = f;
            break;
          case $e:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? l_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function l_(e, t) {
      {
        var a = u_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case Ce:
              t.add(i.stateNode.containerInfo);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function u_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var yR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function o_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new o_(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function s_(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function c_(e) {
      if (typeof e == "function")
        return KS(e) ? ve : de;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return $e;
        if (t === Ge)
          return ot;
      }
      return ut;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ut:
        case de:
        case Fe:
          a.type = Yf(e.type);
          break;
        case ve:
          a.type = $S(e.type);
          break;
        case $e:
          a.type = QS(e.type);
          break;
      }
      return a;
    }
    function f_(e, t) {
      e.flags &= zn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function d_(e, t, a) {
      var i;
      return e === Fh ? (i = lt, t === !0 && (i |= Gt, i |= Nt)) : i = De, Kr && (i |= Mt), ui(ee, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = ut, p = e;
      if (typeof e == "function")
        KS(e) ? (f = ve, p = $S(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case fi:
            return Yo(a.children, u, s, t);
          case $a:
            f = pt, u |= Gt, (u & lt) !== De && (u |= Nt);
            break;
          case di:
            return p_(a, u, s, t);
          case ae:
            return v_(a, u, s, t);
          case he:
            return h_(a, u, s, t);
          case Tn:
            return gR(a, u, s, t);
          case tn:
          case st:
          case on:
          case ar:
          case it:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = ft;
                  break e;
                case R:
                  f = fn;
                  break e;
                case B:
                  f = $e, p = QS(p);
                  break e;
                case Ge:
                  f = ot;
                  break e;
                case Ye:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Be(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ui(yt, e, i, t);
      return u.lanes = a, u;
    }
    function p_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(vt, e, i, t | Mt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function v_(e, t, a, i) {
      var u = ui(be, e, i, t);
      return u.elementType = ae, u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function gR(e, t, a, i) {
      var u = ui(ke, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = ui(We, e, null, t);
      return i.lanes = a, i;
    }
    function m_() {
      var e = ui(ue, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function y_(e) {
      var t = ui(Zt, null, null, De);
      return t.stateNode = e, t;
    }
    function tE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function SR(e, t) {
      return e === null && (e = ui(ut, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function g_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dt, this.eventTimes = ws(Y), this.expirationTimes = ws(Kt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = ws(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Eu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ER(e, t, a, i, u, s, f, p, v, y) {
      var g = new g_(e, t, a, p, v), b = d_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return vg(b), g;
    }
    var nE = "18.3.1";
    function S_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var rE, aE;
    rE = !1, aE = {};
    function CR(e) {
      if (!e)
        return li;
      var t = fo(e), a = tx(t);
      if (t.tag === ve) {
        var i = t.type;
        if (Yl(i))
          return GE(t, i, a);
      }
      return a;
    }
    function E_(e, t) {
      {
        var a = fo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Gt) {
          var s = Be(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = ir;
            try {
              Wt(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function RR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return ER(e, t, v, y, a, i, u, s, f);
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = ER(a, i, g, e, u, s, f, p, v);
      b.context = CR(null);
      var w = b.current, M = Ea(), U = Vo(w), F = Hu(M, U);
      return F.callback = t ?? null, No(w, F, U), _b(b, U, M), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ea(), f = Vo(u);
      gn(f);
      var p = CR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Be(ir) || "Unknown"));
      var v = Hu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (yr(y, u, f, s), Jh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function C_(e) {
      switch (e.tag) {
        case ee: {
          var t = e.stateNode;
          if (ef(t)) {
            var a = Fv(t);
            Lb(t, a);
          }
          break;
        }
        case be: {
          Yu(function() {
            var u = Fa(e, Ae);
            if (u !== null) {
              var s = Ea();
              yr(u, e, Ae, s);
            }
          });
          var i = Ae;
          iE(e, i);
          break;
        }
      }
    }
    function wR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function iE(e, t) {
      wR(e, t);
      var a = e.alternate;
      a && wR(a, t);
    }
    function R_(e) {
      if (e.tag === be) {
        var t = gs, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function T_(e) {
      if (e.tag === be) {
        var t = Vo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function xR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function w_(e) {
      return bR(e);
    }
    var _R = function(e) {
      return !1;
    };
    function x_(e) {
      return _R(e);
    }
    var DR = null, kR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null;
    {
      var jR = function(e, t, a) {
        var i = t[a], u = nt(e) ? e.slice() : Ze({}, e);
        return a + 1 === t.length ? (nt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return jR(e, t, 0);
      }, HR = function(e, t, a, i) {
        var u = t[i], s = nt(e) ? e.slice() : Ze({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], nt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = HR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, PR = function(e, t, a) {
        if (t.length !== a.length) {
          je("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              je("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return HR(e, t, a, 0);
      }, VR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = nt(e) ? e.slice() : Ze({}, e);
        return s[u] = VR(e[u], t, a + 1, i), s;
      }, BR = function(e, t, a) {
        return VR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Fa(e, Ae);
          f !== null && yr(f, e, Ae, Kt);
        }
      }, kR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ze({}, e.memoizedProps);
          var s = Fa(e, Ae);
          s !== null && yr(s, e, Ae, Kt);
        }
      }, OR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = PR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ze({}, e.memoizedProps);
          var f = Fa(e, Ae);
          f !== null && yr(f, e, Ae, Kt);
        }
      }, LR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Ae);
        i !== null && yr(i, e, Ae, Kt);
      }, MR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Ae);
        a !== null && yr(a, e, Ae, Kt);
      }, NR = function(e, t, a) {
        e.pendingProps = PR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Ae);
        i !== null && yr(i, e, Ae, Kt);
      }, zR = function(e) {
        var t = Fa(e, Ae);
        t !== null && yr(t, e, Ae, Kt);
      }, UR = function(e) {
        bR = e;
      }, AR = function(e) {
        _R = e;
      };
    }
    function b_(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function __(e) {
      return null;
    }
    function D_() {
      return ir;
    }
    function k_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return ho({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DR,
        overrideHookStateDeletePath: kR,
        overrideHookStateRenamePath: OR,
        overrideProps: LR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: NR,
        setErrorHandler: UR,
        setSuspenseHandler: AR,
        scheduleUpdate: zR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: b_,
        findFiberByHostInstance: t || __,
        // React Refresh
        findHostInstancesForRefresh: i_,
        scheduleRefresh: r_,
        scheduleRoot: a_,
        setRefreshHandler: n_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: D_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nE
      });
    }
    var YR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uE(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = uE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = xR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Ym.prototype.unmount = uE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          Gp(null, e, null, null);
        }), YE(t);
      }
    };
    function O_(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IR(e);
      var a = !1, i = !1, u = "", s = YR;
      t != null && (t.hydrate ? je("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = RR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new uE(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function L_(e) {
      e && Jv(e);
    }
    Ym.prototype.unstable_scheduleHydration = L_;
    function M_(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = YR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = TR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Ax(y, b);
        }
      return new Ym(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Ii || e.nodeType === nd));
    }
    function qp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Ii || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function IR(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var N_ = A.ReactCurrentOwner, WR;
    WR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = xR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function $R() {
    }
    function z_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = TR(
          t,
          i,
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $R
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = RR(
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $R
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ep(b), Yu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function U_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      WR(a), U_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = z_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Bm(f);
    }
    var QR = !1;
    function A_(e) {
      {
        QR || (QR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = N_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : E_(e, "findDOMNode");
    }
    function j_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function F_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function H_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var GR = !1;
    function P_(e) {
      if (GR || (GR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, YE(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && Do(u)), f = e.nodeType === $r && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(C_), So(R_), qv(T_), ks(Ua), jd($v), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yc(BT), ay(HS, Mb, Yu);
    function V_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return S_(e, t, null, a);
    }
    function B_(e, t, a, i) {
      return H_(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Ef, Mh, uo, gc, HS]
    };
    function Y_(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), O_(e, t);
    }
    function I_(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t, a);
    }
    function W_(e) {
      return tR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var $_ = k_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!$_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, Ya.createPortal = V_, Ya.createRoot = Y_, Ya.findDOMNode = A_, Ya.flushSync = W_, Ya.hydrate = j_, Ya.hydrateRoot = I_, Ya.render = F_, Ya.unmountComponentAtNode = P_, Ya.unstable_batchedUpdates = HS, Ya.unstable_renderSubtreeIntoContainer = B_, Ya.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
function oT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oT);
    } catch (Z) {
      console.error(Z);
    }
  }
}
process.env.NODE_ENV === "production" ? (oT(), pE.exports = tD()) : pE.exports = nD();
var rD = pE.exports, vE, Qm = rD;
if (process.env.NODE_ENV === "production")
  vE = Qm.createRoot, Qm.hydrateRoot;
else {
  var rT = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  vE = function(Z, X) {
    rT.usingClientEntryPoint = !0;
    try {
      return Qm.createRoot(Z, X);
    } finally {
      rT.usingClientEntryPoint = !1;
    }
  };
}
var hE = { exports: {} }, Kp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function aD() {
  if (aT) return Kp;
  aT = 1;
  var Z = Wf, X = Symbol.for("react.element"), A = Symbol.for("react.fragment"), dt = Object.prototype.hasOwnProperty, Tt = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(kt, de, ve) {
    var ut, ee = {}, Ce = null, ue = null;
    ve !== void 0 && (Ce = "" + ve), de.key !== void 0 && (Ce = "" + de.key), de.ref !== void 0 && (ue = de.ref);
    for (ut in de) dt.call(de, ut) && !je.hasOwnProperty(ut) && (ee[ut] = de[ut]);
    if (kt && kt.defaultProps) for (ut in de = kt.defaultProps, de) ee[ut] === void 0 && (ee[ut] = de[ut]);
    return { $$typeof: X, type: kt, key: Ce, ref: ue, props: ee, _owner: Tt.current };
  }
  return Kp.Fragment = A, Kp.jsx = S, Kp.jsxs = S, Kp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function iD() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    var Z = Wf, X = Symbol.for("react.element"), A = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Tt = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), kt = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), We = Symbol.iterator, yt = "@@iterator";
    function pt(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = We && R[We] || R[yt];
      return typeof B == "function" ? B : null;
    }
    var fn = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ft(R) {
      {
        for (var B = arguments.length, ae = new Array(B > 1 ? B - 1 : 0), he = 1; he < B; he++)
          ae[he - 1] = arguments[he];
        $e("error", R, ae);
      }
    }
    function $e(R, B, ae) {
      {
        var he = fn.ReactDebugCurrentFrame, Ge = he.getStackAddendum();
        Ge !== "" && (B += "%s", ae = ae.concat([Ge]));
        var Ye = ae.map(function(st) {
          return String(st);
        });
        Ye.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var vt = !1, be = !1, ot = !1, Fe = !1, an = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Zt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === dt || R === je || an || R === Tt || R === ve || R === ut || Fe || R === ue || vt || be || ot || typeof R == "object" && R !== null && (R.$$typeof === Ce || R.$$typeof === ee || R.$$typeof === S || R.$$typeof === kt || R.$$typeof === de || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function ln(R, B, ae) {
      var he = R.displayName;
      if (he)
        return he;
      var Ge = B.displayName || B.name || "";
      return Ge !== "" ? ae + "(" + Ge + ")" : ae;
    }
    function bt(R) {
      return R.displayName || "Context";
    }
    function ke(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ft("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case dt:
          return "Fragment";
        case A:
          return "Portal";
        case je:
          return "Profiler";
        case Tt:
          return "StrictMode";
        case ve:
          return "Suspense";
        case ut:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case kt:
            var B = R;
            return bt(B) + ".Consumer";
          case S:
            var ae = R;
            return bt(ae._context) + ".Provider";
          case de:
            return ln(R, R.render, "ForwardRef");
          case ee:
            var he = R.displayName || null;
            return he !== null ? he : ke(R.type) || "Memo";
          case Ce: {
            var Ge = R, Ye = Ge._payload, st = Ge._init;
            try {
              return ke(st(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, _t = 0, Ot, Ee, K, Re, ne, _, P;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Ue() {
      {
        if (_t === 0) {
          Ot = console.log, Ee = console.info, K = console.warn, Re = console.error, ne = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        _t++;
      }
    }
    function rt() {
      {
        if (_t--, _t === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: Ot
            }),
            info: jt({}, R, {
              value: Ee
            }),
            warn: jt({}, R, {
              value: K
            }),
            error: jt({}, R, {
              value: Re
            }),
            group: jt({}, R, {
              value: ne
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        _t < 0 && ft("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = fn.ReactCurrentDispatcher, Ke;
    function et(R, B, ae) {
      {
        if (Ke === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var he = Ge.stack.trim().match(/\n( *(at )?)/);
            Ke = he && he[1] || "";
          }
        return `
` + Ke + R;
      }
    }
    var at = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function xr(R, B) {
      if (!R || at)
        return "";
      {
        var ae = Bt.get(R);
        if (ae !== void 0)
          return ae;
      }
      var he;
      at = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = Je.current, Je.current = null, Ue();
      try {
        if (B) {
          var st = function() {
            throw Error();
          };
          if (Object.defineProperty(st.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(st, []);
            } catch (qe) {
              he = qe;
            }
            Reflect.construct(R, [], st);
          } else {
            try {
              st.call();
            } catch (qe) {
              he = qe;
            }
            R.call(st.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            he = qe;
          }
          R();
        }
      } catch (qe) {
        if (qe && he && typeof qe.stack == "string") {
          for (var it = qe.stack.split(`
`), Tn = he.stack.split(`
`), tn = it.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && it[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (it[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || it[tn] !== Tn[on]) {
                    var ar = `
` + it[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        at = !1, Je.current = Ye, rt(), Error.prepareStackTrace = Ge;
      }
      var Qa = R ? R.displayName || R.name : "", Ga = Qa ? et(Qa) : "";
      return typeof R == "function" && Bt.set(R, Ga), Ga;
    }
    function Cn(R, B, ae) {
      return xr(R, !1);
    }
    function nr(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function Vn(R, B, ae) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return xr(R, nr(R));
      if (typeof R == "string")
        return et(R);
      switch (R) {
        case ve:
          return et("Suspense");
        case ut:
          return et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case de:
            return Cn(R.render);
          case ee:
            return Vn(R.type, B, ae);
          case Ce: {
            var he = R, Ge = he._payload, Ye = he._init;
            try {
              return Vn(Ye(Ge), B, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Ir = {}, si = fn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var B = R._owner, ae = Vn(R.type, R._source, B ? B.type : null);
        si.setExtraStackFrame(ae);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(R, B, ae, he, Ge) {
      {
        var Ye = Function.call.bind(Bn);
        for (var st in R)
          if (Ye(R, st)) {
            var it = void 0;
            try {
              if (typeof R[st] != "function") {
                var Tn = Error((he || "React class") + ": " + ae + " type `" + st + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[st] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              it = R[st](B, st, he, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              it = tn;
            }
            it && !(it instanceof Error) && (oa(Ge), ft("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ae, st, typeof it), oa(null)), it instanceof Error && !(it.message in Ir) && (Ir[it.message] = !0, oa(Ge), ft("Failed %s type: %s", ae, it.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function Yn(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ae = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ae;
      }
    }
    function Ia(R) {
      try {
        return Ln(R), !1;
      } catch {
        return !0;
      }
    }
    function Ln(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ia(R))
        return ft("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = fn.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, J;
    function Te(R) {
      if (Bn.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (Bn.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, B) {
      typeof R.ref == "string" && sa.current;
    }
    function Jt(R, B) {
      {
        var ae = function() {
          ci || (ci = !0, ft("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function vn(R, B) {
      {
        var ae = function() {
          J || (J = !0, ft("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var un = function(R, B, ae, he, Ge, Ye, st) {
      var it = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: X,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: ae,
        props: st,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return it._store = {}, Object.defineProperty(it._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(it, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(it, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
    };
    function Xn(R, B, ae, he, Ge) {
      {
        var Ye, st = {}, it = null, Tn = null;
        ae !== void 0 && (Sr(ae), it = "" + ae), tt(B) && (Sr(B.key), it = "" + B.key), Te(B) && (Tn = B.ref, Ft(B, Ge));
        for (Ye in B)
          Bn.call(B, Ye) && !Wa.hasOwnProperty(Ye) && (st[Ye] = B[Ye]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for (Ye in tn)
            st[Ye] === void 0 && (st[Ye] = tn[Ye]);
        }
        if (it || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          it && Jt(st, on), Tn && vn(st, on);
        }
        return un(R, it, Tn, Ge, he, sa.current, st);
      }
    }
    var en = fn.ReactCurrentOwner, Yt = fn.ReactDebugCurrentFrame;
    function It(R) {
      if (R) {
        var B = R._owner, ae = Vn(R.type, R._source, B ? B.type : null);
        Yt.setExtraStackFrame(ae);
      } else
        Yt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === X;
    }
    function Ta() {
      {
        if (en.current) {
          var R = ke(en.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Fi(R) {
      return "";
    }
    var Zl = {};
    function Jl(R) {
      {
        var B = Ta();
        if (!B) {
          var ae = typeof R == "string" ? R : R.displayName || R.name;
          ae && (B = `

Check the top-level render call using <` + ae + ">.");
        }
        return B;
      }
    }
    function dl(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ae = Jl(B);
        if (Zl[ae])
          return;
        Zl[ae] = !0;
        var he = "";
        R && R._owner && R._owner !== en.current && (he = " It was passed a child from " + ke(R._owner.type) + "."), It(R), ft('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, he), It(null);
      }
    }
    function pl(R, B) {
      {
        if (typeof R != "object")
          return;
        if (Yn(R))
          for (var ae = 0; ae < R.length; ae++) {
            var he = R[ae];
            Er(he) && dl(he, B);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ge = pt(R);
          if (typeof Ge == "function" && Ge !== R.entries)
            for (var Ye = Ge.call(R), st; !(st = Ye.next()).done; )
              Er(st.value) && dl(st.value, B);
        }
      }
    }
    function eu(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var ae;
        if (typeof B == "function")
          ae = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === de || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === ee))
          ae = B.propTypes;
        else
          return;
        if (ae) {
          var he = ke(B);
          qn(ae, R.props, "prop", he, R);
        } else if (B.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Ge = ke(B);
          ft("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && ft("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var B = Object.keys(R.props), ae = 0; ae < B.length; ae++) {
          var he = B[ae];
          if (he !== "children" && he !== "key") {
            It(R), ft("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), It(null);
            break;
          }
        }
        R.ref !== null && (It(R), ft("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var _r = {};
    function rr(R, B, ae, he, Ge, Ye) {
      {
        var st = Zt(R);
        if (!st) {
          var it = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (it += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? it += Tn : it += Ta();
          var tn;
          R === null ? tn = "null" : Yn(R) ? tn = "array" : R !== void 0 && R.$$typeof === X ? (tn = "<" + (ke(R.type) || "Unknown") + " />", it = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, ft("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, it);
        }
        var on = Xn(R, B, ae, Ge, Ye);
        if (on == null)
          return on;
        if (st) {
          var ar = B.children;
          if (ar !== void 0)
            if (he)
              if (Yn(ar)) {
                for (var Qa = 0; Qa < ar.length; Qa++)
                  pl(ar[Qa], R);
                Object.freeze && Object.freeze(ar);
              } else
                ft("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(ar, R);
        }
        if (Bn.call(B, "key")) {
          var Ga = ke(R), qe = Object.keys(B).filter(function(tu) {
            return tu !== "key";
          }), Ze = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + Ze]) {
            var qa = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            ft(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, Ga, qa, Ga), _r[Ga + Ze] = !0;
          }
        }
        return R === dt ? br(on) : eu(on), on;
      }
    }
    function fi(R, B, ae) {
      return rr(R, B, ae, !0);
    }
    function $a(R, B, ae) {
      return rr(R, B, ae, !1);
    }
    var di = $a, pi = fi;
    Zp.Fragment = dt, Zp.jsx = di, Zp.jsxs = pi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? hE.exports = aD() : hE.exports = iD();
var Rt = hE.exports;
const lT = {
  "San Francisco, CA": {
    current: {
      location: "San Francisco, CA",
      temperature: 72,
      condition: "Partly Cloudy",
      icon: "⛅",
      humidity: 65,
      windSpeed: 12,
      feelsLike: 70,
      description: "Partly cloudy with a chance of afternoon showers"
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 72,
        low: 58,
        condition: "Partly Cloudy",
        icon: "⛅"
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 68,
        low: 55,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 65,
        low: 52,
        condition: "Rainy",
        icon: "🌧️"
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 70,
        low: 56,
        condition: "Cloudy",
        icon: "☁️"
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 73,
        low: 59,
        condition: "Sunny",
        icon: "☀️"
      }
    ]
  },
  "New York, NY": {
    current: {
      location: "New York, NY",
      temperature: 45,
      condition: "Cloudy",
      icon: "☁️",
      humidity: 78,
      windSpeed: 15,
      feelsLike: 42,
      description: "Cloudy skies with light winds"
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 45,
        low: 32,
        condition: "Cloudy",
        icon: "☁️"
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 42,
        low: 30,
        condition: "Snow",
        icon: "❄️"
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 38,
        low: 28,
        condition: "Snow",
        icon: "❄️"
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 40,
        low: 30,
        condition: "Cloudy",
        icon: "☁️"
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 43,
        low: 32,
        condition: "Partly Cloudy",
        icon: "⛅"
      }
    ]
  },
  "Los Angeles, CA": {
    current: {
      location: "Los Angeles, CA",
      temperature: 78,
      condition: "Sunny",
      icon: "☀️",
      humidity: 45,
      windSpeed: 8,
      feelsLike: 76,
      description: "Clear skies and sunny throughout the day"
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 78,
        low: 62,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 80,
        low: 64,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 75,
        low: 60,
        condition: "Partly Cloudy",
        icon: "⛅"
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 77,
        low: 61,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 79,
        low: 63,
        condition: "Sunny",
        icon: "☀️"
      }
    ]
  },
  "Chicago, IL": {
    current: {
      location: "Chicago, IL",
      temperature: 35,
      condition: "Snow",
      icon: "❄️",
      humidity: 85,
      windSpeed: 20,
      feelsLike: 25,
      description: "Heavy snow with strong winds"
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 35,
        low: 22,
        condition: "Snow",
        icon: "❄️"
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 28,
        low: 18,
        condition: "Snow",
        icon: "❄️"
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 32,
        low: 20,
        condition: "Cloudy",
        icon: "☁️"
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 30,
        low: 19,
        condition: "Snow",
        icon: "❄️"
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 33,
        low: 21,
        condition: "Partly Cloudy",
        icon: "⛅"
      }
    ]
  },
  "Miami, FL": {
    current: {
      location: "Miami, FL",
      temperature: 82,
      condition: "Sunny",
      icon: "☀️",
      humidity: 70,
      windSpeed: 10,
      feelsLike: 85,
      description: "Hot and humid with clear skies"
    },
    forecast: [
      {
        day: "Today",
        date: "Dec 15",
        high: 82,
        low: 72,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Tomorrow",
        date: "Dec 16",
        high: 84,
        low: 74,
        condition: "Partly Cloudy",
        icon: "⛅"
      },
      {
        day: "Monday",
        date: "Dec 17",
        high: 83,
        low: 73,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Tuesday",
        date: "Dec 18",
        high: 85,
        low: 75,
        condition: "Sunny",
        icon: "☀️"
      },
      {
        day: "Wednesday",
        date: "Dec 19",
        high: 84,
        low: 74,
        condition: "Partly Cloudy",
        icon: "⛅"
      }
    ]
  }
};
function lD() {
  const Z = Object.keys(lT), [X, A] = Wf.useState(Z[0]), dt = lT[X], Tt = (je) => {
    A(je);
  };
  return /* @__PURE__ */ Rt.jsxs(
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
        /* @__PURE__ */ Rt.jsx(
          "div",
          {
            style: {
              borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
              padding: "16px"
            },
            children: /* @__PURE__ */ Rt.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  flexWrap: "wrap"
                },
                children: [
                  /* @__PURE__ */ Rt.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#111827"
                      },
                      children: "Location:"
                    }
                  ),
                  Z.map((je) => /* @__PURE__ */ Rt.jsx(
                    "button",
                    {
                      onClick: () => Tt(je),
                      style: {
                        padding: "6px 12px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: X === je ? "#ffffff" : "#3b82f6",
                        backgroundColor: X === je ? "#3b82f6" : "transparent",
                        border: "1px solid #3b82f6",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      },
                      onMouseEnter: (S) => {
                        X !== je && (S.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)");
                      },
                      onMouseLeave: (S) => {
                        X !== je && (S.currentTarget.style.backgroundColor = "transparent");
                      },
                      children: je.split(",")[0]
                    },
                    je
                  ))
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ Rt.jsxs(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              padding: "16px"
            },
            children: [
              /* @__PURE__ */ Rt.jsx(
                "div",
                {
                  style: {
                    borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
                    paddingBottom: "16px",
                    marginBottom: "16px"
                  },
                  children: /* @__PURE__ */ Rt.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "16px",
                        flexWrap: "wrap"
                      },
                      children: [
                        /* @__PURE__ */ Rt.jsxs("div", { style: { flex: 1, minWidth: "200px" }, children: [
                          /* @__PURE__ */ Rt.jsx(
                            "h2",
                            {
                              style: {
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#111827",
                                margin: "0 0 8px 0"
                              },
                              children: dt.current.location
                            }
                          ),
                          /* @__PURE__ */ Rt.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "8px"
                              },
                              children: [
                                /* @__PURE__ */ Rt.jsx("span", { style: { fontSize: "48px" }, children: dt.current.icon }),
                                /* @__PURE__ */ Rt.jsxs("div", { children: [
                                  /* @__PURE__ */ Rt.jsxs(
                                    "div",
                                    {
                                      style: {
                                        fontSize: "48px",
                                        fontWeight: "600",
                                        color: "#111827",
                                        lineHeight: 1
                                      },
                                      children: [
                                        dt.current.temperature,
                                        "°"
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ Rt.jsx(
                                    "div",
                                    {
                                      style: {
                                        fontSize: "16px",
                                        color: "#6b7280"
                                      },
                                      children: dt.current.condition
                                    }
                                  )
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ Rt.jsx(
                            "p",
                            {
                              style: {
                                fontSize: "14px",
                                color: "#6b7280",
                                margin: "8px 0 0 0"
                              },
                              children: dt.current.description
                            }
                          )
                        ] }),
                        /* @__PURE__ */ Rt.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "12px",
                              minWidth: "150px"
                            },
                            children: [
                              /* @__PURE__ */ Rt.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0",
                                    borderBottom: "1px solid rgba(17, 24, 39, 0.1)"
                                  },
                                  children: [
                                    /* @__PURE__ */ Rt.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Feels like" }),
                                    /* @__PURE__ */ Rt.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                      dt.current.feelsLike,
                                      "°"
                                    ] })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ Rt.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0",
                                    borderBottom: "1px solid rgba(17, 24, 39, 0.1)"
                                  },
                                  children: [
                                    /* @__PURE__ */ Rt.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Humidity" }),
                                    /* @__PURE__ */ Rt.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                      dt.current.humidity,
                                      "%"
                                    ] })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ Rt.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0"
                                  },
                                  children: [
                                    /* @__PURE__ */ Rt.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Wind" }),
                                    /* @__PURE__ */ Rt.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                      dt.current.windSpeed,
                                      " mph"
                                    ] })
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ Rt.jsxs("div", { children: [
                /* @__PURE__ */ Rt.jsx(
                  "h3",
                  {
                    style: {
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#111827",
                      margin: "0 0 12px 0"
                    },
                    children: "5-Day Forecast"
                  }
                ),
                /* @__PURE__ */ Rt.jsx(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    },
                    children: dt.forecast.map((je, S) => /* @__PURE__ */ Rt.jsxs(
                      "div",
                      {
                        style: {
                          padding: "12px",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          transition: "background-color 0.2s",
                          cursor: "pointer"
                        },
                        onMouseEnter: (kt) => {
                          kt.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                        },
                        onMouseLeave: (kt) => {
                          kt.currentTarget.style.backgroundColor = "transparent";
                        },
                        children: [
                          /* @__PURE__ */ Rt.jsx(
                            "div",
                            {
                              style: {
                                minWidth: "100px",
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#111827"
                              },
                              children: je.day
                            }
                          ),
                          /* @__PURE__ */ Rt.jsx(
                            "div",
                            {
                              style: {
                                minWidth: "60px",
                                fontSize: "12px",
                                color: "#6b7280"
                              },
                              children: je.date
                            }
                          ),
                          /* @__PURE__ */ Rt.jsx(
                            "div",
                            {
                              style: {
                                fontSize: "24px",
                                minWidth: "40px",
                                textAlign: "center"
                              },
                              children: je.icon
                            }
                          ),
                          /* @__PURE__ */ Rt.jsx(
                            "div",
                            {
                              style: {
                                flex: 1,
                                fontSize: "14px",
                                color: "#6b7280"
                              },
                              children: je.condition
                            }
                          ),
                          /* @__PURE__ */ Rt.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                gap: "8px",
                                alignItems: "center",
                                fontSize: "14px",
                                fontWeight: "500"
                              },
                              children: [
                                /* @__PURE__ */ Rt.jsxs("span", { style: { color: "#111827" }, children: [
                                  je.high,
                                  "°"
                                ] }),
                                /* @__PURE__ */ Rt.jsxs("span", { style: { color: "#9ca3af" }, children: [
                                  je.low,
                                  "°"
                                ] })
                              ]
                            }
                          )
                        ]
                      },
                      S
                    ))
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
let ev = null;
function cD(Z) {
  ev = vE(Z), ev.render(Z_.createElement(lD));
}
function fD() {
  ev && (ev.unmount(), ev = null);
}
export {
  cD as mount,
  fD as unmount
};
