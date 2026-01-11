function K_(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var vE = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function J_() {
  if (JR) return St;
  JR = 1;
  var L = Symbol.for("react.element"), X = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), gt = Symbol.for("react.strict_mode"), ct = Symbol.for("react.profiler"), ht = Symbol.for("react.provider"), S = Symbol.for("react.context"), vt = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ce = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function Se(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Z && _[Z] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Be = Object.assign, mt = {};
  function at(_, P, Fe) {
    this.props = _, this.context = P, this.refs = mt, this.updater = Fe || ie;
  }
  at.prototype.isReactComponent = {}, at.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, at.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Kt() {
  }
  Kt.prototype = at.prototype;
  function Ze(_, P, Fe) {
    this.props = _, this.context = P, this.refs = mt, this.updater = Fe || ie;
  }
  var Ve = Ze.prototype = new Kt();
  Ve.constructor = Ze, Be(Ve, at.prototype), Ve.isPureReactComponent = !0;
  var it = Array.isArray, Re = Object.prototype.hasOwnProperty, ft = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ln(_, P, Fe) {
    var Ue, lt = {}, et = null, Xe = null;
    if (P != null) for (Ue in P.ref !== void 0 && (Xe = P.ref), P.key !== void 0 && (et = "" + P.key), P) Re.call(P, Ue) && !je.hasOwnProperty(Ue) && (lt[Ue] = P[Ue]);
    var tt = arguments.length - 2;
    if (tt === 1) lt.children = Fe;
    else if (1 < tt) {
      for (var ut = Array(tt), Bt = 0; Bt < tt; Bt++) ut[Bt] = arguments[Bt + 2];
      lt.children = ut;
    }
    if (_ && _.defaultProps) for (Ue in tt = _.defaultProps, tt) lt[Ue] === void 0 && (lt[Ue] = tt[Ue]);
    return { $$typeof: L, type: _, key: et, ref: Xe, props: lt, _owner: ft.current };
  }
  function Ht(_, P) {
    return { $$typeof: L, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Zt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === L;
  }
  function un(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Fe) {
      return P[Fe];
    });
  }
  var _t = /\/+/g;
  function ke(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? un("" + _.key) : P.toString(36);
  }
  function jt(_, P, Fe, Ue, lt) {
    var et = typeof _;
    (et === "undefined" || et === "boolean") && (_ = null);
    var Xe = !1;
    if (_ === null) Xe = !0;
    else switch (et) {
      case "string":
      case "number":
        Xe = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case L:
          case X:
            Xe = !0;
        }
    }
    if (Xe) return Xe = _, lt = lt(Xe), _ = Ue === "" ? "." + ke(Xe, 0) : Ue, it(lt) ? (Fe = "", _ != null && (Fe = _.replace(_t, "$&/") + "/"), jt(lt, P, Fe, "", function(Bt) {
      return Bt;
    })) : lt != null && (Zt(lt) && (lt = Ht(lt, Fe + (!lt.key || Xe && Xe.key === lt.key ? "" : ("" + lt.key).replace(_t, "$&/") + "/") + _)), P.push(lt)), 1;
    if (Xe = 0, Ue = Ue === "" ? "." : Ue + ":", it(_)) for (var tt = 0; tt < _.length; tt++) {
      et = _[tt];
      var ut = Ue + ke(et, tt);
      Xe += jt(et, P, Fe, ut, lt);
    }
    else if (ut = Se(_), typeof ut == "function") for (_ = ut.call(_), tt = 0; !(et = _.next()).done; ) et = et.value, ut = Ue + ke(et, tt++), Xe += jt(et, P, Fe, ut, lt);
    else if (et === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Xe;
  }
  function Dt(_, P, Fe) {
    if (_ == null) return _;
    var Ue = [], lt = 0;
    return jt(_, Ue, "", "", function(et) {
      return P.call(Fe, et, lt++);
    }), Ue;
  }
  function Ot(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(Fe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Fe);
      }, function(Fe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Fe);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ce = { current: null }, J = { transition: null }, Te = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: J, ReactCurrentOwner: ft };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: Dt, forEach: function(_, P, Fe) {
    Dt(_, function() {
      P.apply(this, arguments);
    }, Fe);
  }, count: function(_) {
    var P = 0;
    return Dt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return Dt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Zt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, St.Component = at, St.Fragment = j, St.Profiler = ct, St.PureComponent = Ze, St.StrictMode = gt, St.Suspense = ne, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, St.act = re, St.cloneElement = function(_, P, Fe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ue = Be({}, _.props), lt = _.key, et = _.ref, Xe = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (et = P.ref, Xe = ft.current), P.key !== void 0 && (lt = "" + P.key), _.type && _.type.defaultProps) var tt = _.type.defaultProps;
      for (ut in P) Re.call(P, ut) && !je.hasOwnProperty(ut) && (Ue[ut] = P[ut] === void 0 && tt !== void 0 ? tt[ut] : P[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1) Ue.children = Fe;
    else if (1 < ut) {
      tt = Array(ut);
      for (var Bt = 0; Bt < ut; Bt++) tt[Bt] = arguments[Bt + 2];
      Ue.children = tt;
    }
    return { $$typeof: L, type: _.type, key: lt, ref: et, props: Ue, _owner: Xe };
  }, St.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: ht, _context: _ }, _.Consumer = _;
  }, St.createElement = ln, St.createFactory = function(_) {
    var P = ln.bind(null, _);
    return P.type = _, P;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(_) {
    return { $$typeof: vt, render: _ };
  }, St.isValidElement = Zt, St.lazy = function(_) {
    return { $$typeof: Je, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, St.memo = function(_, P) {
    return { $$typeof: ce, type: _, compare: P === void 0 ? null : P };
  }, St.startTransition = function(_) {
    var P = J.transition;
    J.transition = {};
    try {
      _();
    } finally {
      J.transition = P;
    }
  }, St.unstable_act = re, St.useCallback = function(_, P) {
    return Ce.current.useCallback(_, P);
  }, St.useContext = function(_) {
    return Ce.current.useContext(_);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(_) {
    return Ce.current.useDeferredValue(_);
  }, St.useEffect = function(_, P) {
    return Ce.current.useEffect(_, P);
  }, St.useId = function() {
    return Ce.current.useId();
  }, St.useImperativeHandle = function(_, P, Fe) {
    return Ce.current.useImperativeHandle(_, P, Fe);
  }, St.useInsertionEffect = function(_, P) {
    return Ce.current.useInsertionEffect(_, P);
  }, St.useLayoutEffect = function(_, P) {
    return Ce.current.useLayoutEffect(_, P);
  }, St.useMemo = function(_, P) {
    return Ce.current.useMemo(_, P);
  }, St.useReducer = function(_, P, Fe) {
    return Ce.current.useReducer(_, P, Fe);
  }, St.useRef = function(_) {
    return Ce.current.useRef(_);
  }, St.useState = function(_) {
    return Ce.current.useState(_);
  }, St.useSyncExternalStore = function(_, P, Fe) {
    return Ce.current.useSyncExternalStore(_, P, Fe);
  }, St.useTransition = function() {
    return Ce.current.useTransition();
  }, St.version = "18.3.1", St;
}
var Zp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Zp.exports;
var ZR;
function Z_() {
  return ZR || (ZR = 1, function(L, X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var j = "18.3.1", gt = Symbol.for("react.element"), ct = Symbol.for("react.portal"), ht = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), vt = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), ce = Symbol.for("react.context"), Je = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), mt = Symbol.for("react.offscreen"), at = Symbol.iterator, Kt = "@@iterator";
      function Ze(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = at && h[at] || h[Kt];
        return typeof C == "function" ? C : null;
      }
      var Ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, it = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, ln = null;
      function Ht(h) {
        ln = h;
      }
      je.setExtraStackFrame = function(h) {
        ln = h;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var h = "";
        ln && (h += ln);
        var C = je.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Zt = !1, un = !1, _t = !1, ke = !1, jt = !1, Dt = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: it,
        ReactCurrentOwner: ft
      };
      Dt.ReactDebugCurrentFrame = je, Dt.ReactCurrentActQueue = Re;
      function Ot(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          J("warn", h, z);
        }
      }
      function Ce(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          J("error", h, z);
        }
      }
      function J(h, C, z) {
        {
          var F = Dt.ReactDebugCurrentFrame, K = F.getStackAddendum();
          K !== "" && (C += "%s", z = z.concat([K]));
          var Oe = z.map(function(ae) {
            return String(ae);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var Te = {};
      function re(h, C) {
        {
          var z = h.constructor, F = z && (z.displayName || z.name) || "ReactClass", K = F + "." + C;
          if (Te[K])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), Te[K] = !0;
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
        enqueueForceUpdate: function(h, C, z) {
          re(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, z, F) {
          re(h, "replaceState");
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
        enqueueSetState: function(h, C, z, F) {
          re(h, "setState");
        }
      }, P = Object.assign, Fe = {};
      Object.freeze(Fe);
      function Ue(h, C, z) {
        this.props = h, this.context = C, this.refs = Fe, this.updater = z || _;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ue.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var lt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, et = function(h, C) {
          Object.defineProperty(Ue.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Xe in lt)
          lt.hasOwnProperty(Xe) && et(Xe, lt[Xe]);
      }
      function tt() {
      }
      tt.prototype = Ue.prototype;
      function ut(h, C, z) {
        this.props = h, this.context = C, this.refs = Fe, this.updater = z || _;
      }
      var Bt = ut.prototype = new tt();
      Bt.constructor = ut, P(Bt, Ue.prototype), Bt.isPureReactComponent = !0;
      function On() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function Cn(h) {
        return wr(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Pn(h) {
        try {
          return Bn(h), !1;
        } catch {
          return !0;
        }
      }
      function Bn(h) {
        return "" + h;
      }
      function Yr(h) {
        if (Pn(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, z) {
        var F = h.displayName;
        if (F)
          return F;
        var K = C.displayName || C.name || "";
        return K !== "" ? z + "(" + K + ")" : z;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ht:
            return "Fragment";
          case ct:
            return "Portal";
          case vt:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ce:
              var C = h;
              return oa(C) + ".Consumer";
            case ne:
              var z = h;
              return oa(z._context) + ".Provider";
            case Je:
              return si(h, h.render, "ForwardRef");
            case ie:
              var F = h.displayName || null;
              return F !== null ? F : qn(h.type) || "Memo";
            case Be: {
              var K = h, Oe = K._payload, ae = K._init;
              try {
                return qn(ae(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ya, Ln;
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
        var z = function() {
          gr || (gr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function ci(h, C) {
        var z = function() {
          Ya || (Ya = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = qn(ft.current.type);
          Ln[C] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var xe = function(h, C, z, F, K, Oe, ae) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: gt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ae,
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
          value: F
        }), Object.defineProperty(Ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function nt(h, C, z) {
        var F, K = {}, Oe = null, ae = null, Ne = null, pt = null;
        if (C != null) {
          Sr(C) && (ae = C.ref, ee(C)), sa(C) && (Yr(C.key), Oe = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Rn.call(C, F) && !In.hasOwnProperty(F) && (K[F] = C[F]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          K.children = z;
        else if (bt > 1) {
          for (var rn = Array(bt), $t = 0; $t < bt; $t++)
            rn[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(rn), K.children = rn;
        }
        if (h && h.defaultProps) {
          var rt = h.defaultProps;
          for (F in rt)
            K[F] === void 0 && (K[F] = rt[F]);
        }
        if (Oe || ae) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Wa(K, Qt), ae && ci(K, Qt);
        }
        return xe(h, Oe, ae, Ne, pt, ft.current, K);
      }
      function Ft(h, C) {
        var z = xe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function en(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, K = P({}, h.props), Oe = h.key, ae = h.ref, Ne = h._self, pt = h._source, bt = h._owner;
        if (C != null) {
          Sr(C) && (ae = C.ref, bt = ft.current), sa(C) && (Yr(C.key), Oe = "" + C.key);
          var rn;
          h.type && h.type.defaultProps && (rn = h.type.defaultProps);
          for (F in C)
            Rn.call(C, F) && !In.hasOwnProperty(F) && (C[F] === void 0 && rn !== void 0 ? K[F] = rn[F] : K[F] = C[F]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          K.children = z;
        else if ($t > 1) {
          for (var rt = Array($t), Qt = 0; Qt < $t; Qt++)
            rt[Qt] = arguments[Qt + 2];
          K.children = rt;
        }
        return xe(h.type, Oe, ae, Ne, pt, bt, K);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === gt;
      }
      var on = ".", Xn = ":";
      function tn(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(K) {
          return z[K];
        });
        return "$" + F;
      }
      var It = !1, Yt = /\/+/g;
      function ca(h) {
        return h.replace(Yt, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), tn("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, z, F, K) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case gt:
                case ct:
                  ae = !0;
              }
          }
        if (ae) {
          var Ne = h, pt = K(Ne), bt = F === "" ? on + Er(Ne, 0) : F;
          if (Cn(pt)) {
            var rn = "";
            bt != null && (rn = ca(bt) + "/"), Ta(pt, C, rn, "", function(qf) {
              return qf;
            });
          } else pt != null && (vn(pt) && (pt.key && (!Ne || Ne.key !== pt.key) && Yr(pt.key), pt = Ft(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Ne || Ne.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + pt.key) + "/"
            ) : "") + bt
          )), C.push(pt));
          return 1;
        }
        var $t, rt, Qt = 0, hn = F === "" ? on : F + Xn;
        if (Cn(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            $t = h[Cl], rt = hn + Er($t, Cl), Qt += Ta($t, C, z, rt, K);
        else {
          var qo = Ze(h);
          if (typeof qo == "function") {
            var Pi = h;
            qo === Pi.entries && (It || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Xo = qo.call(Pi), uu, Gf = 0; !(uu = Xo.next()).done; )
              $t = uu.value, rt = hn + Er($t, Gf++), Qt += Ta($t, C, z, rt, K);
          } else if (Oe === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, C, z) {
        if (h == null)
          return h;
        var F = [], K = 0;
        return Ta(h, F, "", "", function(Oe) {
          return C.call(z, Oe, K++);
        }), F;
      }
      function Jl(h) {
        var C = 0;
        return Fi(h, function() {
          C++;
        }), C;
      }
      function Zl(h, C, z) {
        Fi(h, function() {
          C.apply(this, arguments);
        }, z);
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
          $$typeof: ce,
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
          $$typeof: ne,
          _context: C
        };
        var z = !1, F = !1, K = !1;
        {
          var Oe = {
            $$typeof: ce,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return F || (F = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                K || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), K = !0);
              }
            }
          }), C.Consumer = Oe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var br = -1, _r = 0, rr = 1, fi = 2;
      function $a(h) {
        if (h._status === br) {
          var C = h._result, z = C();
          if (z.then(function(Oe) {
            if (h._status === _r || h._status === br) {
              var ae = h;
              ae._status = rr, ae._result = Oe;
            }
          }, function(Oe) {
            if (h._status === _r || h._status === br) {
              var ae = h;
              ae._status = fi, ae._result = Oe;
            }
          }), h._status === br) {
            var F = h;
            F._status = _r, F._result = z;
          }
        }
        if (h._status === rr) {
          var K = h._result;
          return K === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: br,
          _result: h
        }, z = {
          $$typeof: Be,
          _payload: C,
          _init: $a
        };
        {
          var F, K;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Oe, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Oe, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function pi(h) {
        h != null && h.$$typeof === ie ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Je,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(F) {
              z = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ht || h === vt || jt || h === S || h === Z || h === Se || ke || h === mt || Zt || un || _t || typeof h == "object" && h !== null && (h.$$typeof === Be || h.$$typeof === ie || h.$$typeof === ne || h.$$typeof === ce || h.$$typeof === Je || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function le(h, C) {
        I(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(K) {
              F = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return z;
      }
      function he() {
        var h = Ve.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Qe(h) {
        var C = he();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = he();
        return C.useState(h);
      }
      function dt(h, C, z) {
        var F = he();
        return F.useReducer(h, C, z);
      }
      function ot(h) {
        var C = he();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = he();
        return z.useEffect(h, C);
      }
      function nn(h, C) {
        var z = he();
        return z.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var z = he();
        return z.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var z = he();
        return z.useCallback(h, C);
      }
      function Qa(h, C) {
        var z = he();
        return z.useMemo(h, C);
      }
      function Ga(h, C, z) {
        var F = he();
        return F.useImperativeHandle(h, C, z);
      }
      function Ge(h, C) {
        {
          var z = he();
          return z.useDebugValue(h, C);
        }
      }
      function Ke() {
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
      function nu(h, C, z) {
        var F = he();
        return F.useSyncExternalStore(h, C, z);
      }
      var vl = 0, Qu, hl, Wr, Wo, Dr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            Qu = console.log, hl = console.info, Wr = console.warn, Wo = console.error, Dr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
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
                value: Qu
              }),
              info: P({}, h, {
                value: hl
              }),
              warn: P({}, h, {
                value: Wr
              }),
              error: P({}, h, {
                value: Wo
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: lc
              }),
              groupEnd: P({}, h, {
                value: uc
              })
            });
          }
          vl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = Dt.ReactCurrentDispatcher, Ka;
      function qu(h, C, z) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (K) {
              var F = K.stack.trim().match(/\n( *(at )?)/);
              Ka = F && F[1] || "";
            }
          return `
` + Ka + h;
        }
      }
      var ru = !1, yl;
      {
        var Xu = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new Xu();
      }
      function Ku(h, C) {
        if (!h || ru)
          return "";
        {
          var z = yl.get(h);
          if (z !== void 0)
            return z;
        }
        var F;
        ru = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Xa.current, Xa.current = null, ml();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (hn) {
                F = hn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (hn) {
                F = hn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              F = hn;
            }
            h();
          }
        } catch (hn) {
          if (hn && F && typeof hn.stack == "string") {
            for (var Ne = hn.stack.split(`
`), pt = F.stack.split(`
`), bt = Ne.length - 1, rn = pt.length - 1; bt >= 1 && rn >= 0 && Ne[bt] !== pt[rn]; )
              rn--;
            for (; bt >= 1 && rn >= 0; bt--, rn--)
              if (Ne[bt] !== pt[rn]) {
                if (bt !== 1 || rn !== 1)
                  do
                    if (bt--, rn--, rn < 0 || Ne[bt] !== pt[rn]) {
                      var $t = `
` + Ne[bt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, $t), $t;
                    }
                  while (bt >= 1 && rn >= 0);
                break;
              }
          }
        } finally {
          ru = !1, Xa.current = Oe, fa(), Error.prepareStackTrace = K;
        }
        var rt = h ? h.displayName || h.name : "", Qt = rt ? qu(rt) : "";
        return typeof h == "function" && yl.set(h, Qt), Qt;
      }
      function Hi(h, C, z) {
        return Ku(h, !1);
      }
      function $f(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ku(h, $f(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case Z:
            return qu("Suspense");
          case Se:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Je:
              return Hi(h.render);
            case ie:
              return Vi(h.type, C, z);
            case Be: {
              var F = h, K = F._payload, Oe = F._init;
              try {
                return Vi(Oe(K), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ju = Dt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(z);
        } else
          Ju.setExtraStackFrame(null);
      }
      function $o(h, C, z, F, K) {
        {
          var Oe = Function.call.bind(Rn);
          for (var ae in h)
            if (Oe(h, ae)) {
              var Ne = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var pt = Error((F || "React class") + ": " + z + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ne = h[ae](C, ae, F, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Ne = bt;
              }
              Ne && !(Ne instanceof Error) && (wt(K), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, ae, typeof Ne), wt(null)), Ne instanceof Error && !(Ne.message in Lt) && (Lt[Ne.message] = !0, wt(K), Ce("Failed %s type: %s", z, Ne.message), wt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Ht(z);
        } else
          Ht(null);
      }
      var Ie;
      Ie = !1;
      function Zu() {
        if (ft.current) {
          var h = qn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
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
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = mi(C);
          if (!kr[z]) {
            kr[z] = !0;
            var F = "";
            h && h._owner && h._owner !== ft.current && (F = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, F), vi(null);
          }
        }
      }
      function Wt(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var z = 0; z < h.length; z++) {
              var F = h[z];
              vn(F) && cn(F, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = Ze(h);
            if (typeof K == "function" && K !== h.entries)
              for (var Oe = K.call(h), ae; !(ae = Oe.next()).done; )
                vn(ae.value) && cn(ae.value, C);
          }
        }
      }
      function gl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Je || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            z = C.propTypes;
          else
            return;
          if (z) {
            var F = qn(C);
            $o(z, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Ie) {
            Ie = !0;
            var K = qn(C);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var F = C[z];
            if (F !== "children" && F !== "key") {
              vi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, z) {
        var F = I(h);
        if (!F) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = hi(C);
          Oe ? K += Oe : K += Zu();
          var ae;
          h === null ? ae = "null" : Cn(h) ? ae = "array" : h !== void 0 && h.$$typeof === gt ? (ae = "<" + (qn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, K);
        }
        var Ne = nt.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (F)
          for (var pt = 2; pt < arguments.length; pt++)
            Wt(arguments[pt], h);
        return h === ht ? Yn(Ne) : gl(Ne), Ne;
      }
      var xa = !1;
      function au(h) {
        var C = Or.bind(null, h);
        return C.type = h, xa || (xa = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Qo(h, C, z) {
        for (var F = en.apply(this, arguments), K = 2; K < arguments.length; K++)
          Wt(arguments[K], F.type);
        return gl(F), F;
      }
      function Go(h, C) {
        var z = it.transition;
        it.transition = {};
        var F = it.transition;
        it.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (it.transition = z, z === null && F._updatedFibers) {
            var K = F._updatedFibers.size;
            K > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, iu = null;
      function Qf(h) {
        if (iu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = L && L[C];
            iu = z.call(L, "timers").setImmediate;
          } catch {
            iu = function(K) {
              Sl === !1 && (Sl = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = K, Oe.port2.postMessage(void 0);
            };
          }
        return iu(h);
      }
      var wa = 0, Ja = !1;
      function yi(h) {
        {
          var C = wa;
          wa++, Re.current === null && (Re.current = []);
          var z = Re.isBatchingLegacy, F;
          try {
            if (Re.isBatchingLegacy = !0, F = h(), !z && Re.didScheduleLegacyUpdate) {
              var K = Re.current;
              K !== null && (Re.didScheduleLegacyUpdate = !1, El(K));
            }
          } catch (rt) {
            throw ba(C), rt;
          } finally {
            Re.isBatchingLegacy = z;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Oe = F, ae = !1, Ne = {
              then: function(rt, Qt) {
                ae = !0, Oe.then(function(hn) {
                  ba(C), wa === 0 ? eo(hn, rt, Qt) : rt(hn);
                }, function(hn) {
                  ba(C), Qt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Ja = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var pt = F;
            if (ba(C), wa === 0) {
              var bt = Re.current;
              bt !== null && (El(bt), Re.current = null);
              var rn = {
                then: function(rt, Qt) {
                  Re.current === null ? (Re.current = [], eo(pt, rt, Qt)) : rt(pt);
                }
              };
              return rn;
            } else {
              var $t = {
                then: function(rt, Qt) {
                  rt(pt);
                }
              };
              return $t;
            }
          }
        }
      }
      function ba(h) {
        h !== wa - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function eo(h, C, z) {
        {
          var F = Re.current;
          if (F !== null)
            try {
              El(F), Qf(function() {
                F.length === 0 ? (Re.current = null, C(h)) : eo(h, C, z);
              });
            } catch (K) {
              z(K);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function El(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            to = !1;
          }
        }
      }
      var lu = Or, no = Qo, ro = au, Za = {
        map: Fi,
        forEach: Zl,
        count: Jl,
        toArray: dl,
        only: pl
      };
      X.Children = Za, X.Component = Ue, X.Fragment = ht, X.Profiler = vt, X.PureComponent = ut, X.StrictMode = S, X.Suspense = Z, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, X.act = yi, X.cloneElement = no, X.createContext = eu, X.createElement = lu, X.createFactory = ro, X.createRef = On, X.forwardRef = pi, X.isValidElement = vn, X.lazy = di, X.memo = le, X.startTransition = Go, X.unstable_act = yi, X.useCallback = ar, X.useContext = Qe, X.useDebugValue = Ge, X.useDeferredValue = qa, X.useEffect = Tn, X.useId = tu, X.useImperativeHandle = Ga, X.useInsertionEffect = nn, X.useLayoutEffect = sn, X.useMemo = Qa, X.useReducer = dt, X.useRef = ot, X.useState = Ye, X.useSyncExternalStore = nu, X.useTransition = Ke, X.version = j, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
process.env.NODE_ENV === "production" ? vE.exports = J_() : vE.exports = Z_();
var $u = vE.exports;
const eD = /* @__PURE__ */ K_($u);
var hE = { exports: {} }, Ba = {}, $m = { exports: {} }, fE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function tD() {
  return eT || (eT = 1, function(L) {
    function X(J, Te) {
      var re = J.length;
      J.push(Te);
      e: for (; 0 < re; ) {
        var _ = re - 1 >>> 1, P = J[_];
        if (0 < ct(P, Te)) J[_] = Te, J[re] = P, re = _;
        else break e;
      }
    }
    function j(J) {
      return J.length === 0 ? null : J[0];
    }
    function gt(J) {
      if (J.length === 0) return null;
      var Te = J[0], re = J.pop();
      if (re !== Te) {
        J[0] = re;
        e: for (var _ = 0, P = J.length, Fe = P >>> 1; _ < Fe; ) {
          var Ue = 2 * (_ + 1) - 1, lt = J[Ue], et = Ue + 1, Xe = J[et];
          if (0 > ct(lt, re)) et < P && 0 > ct(Xe, lt) ? (J[_] = Xe, J[et] = re, _ = et) : (J[_] = lt, J[Ue] = re, _ = Ue);
          else if (et < P && 0 > ct(Xe, re)) J[_] = Xe, J[et] = re, _ = et;
          else break e;
        }
      }
      return Te;
    }
    function ct(J, Te) {
      var re = J.sortIndex - Te.sortIndex;
      return re !== 0 ? re : J.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ht = performance;
      L.unstable_now = function() {
        return ht.now();
      };
    } else {
      var S = Date, vt = S.now();
      L.unstable_now = function() {
        return S.now() - vt;
      };
    }
    var ne = [], ce = [], Je = 1, Z = null, Se = 3, ie = !1, Be = !1, mt = !1, at = typeof setTimeout == "function" ? setTimeout : null, Kt = typeof clearTimeout == "function" ? clearTimeout : null, Ze = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ve(J) {
      for (var Te = j(ce); Te !== null; ) {
        if (Te.callback === null) gt(ce);
        else if (Te.startTime <= J) gt(ce), Te.sortIndex = Te.expirationTime, X(ne, Te);
        else break;
        Te = j(ce);
      }
    }
    function it(J) {
      if (mt = !1, Ve(J), !Be) if (j(ne) !== null) Be = !0, Ot(Re);
      else {
        var Te = j(ce);
        Te !== null && Ce(it, Te.startTime - J);
      }
    }
    function Re(J, Te) {
      Be = !1, mt && (mt = !1, Kt(ln), ln = -1), ie = !0;
      var re = Se;
      try {
        for (Ve(Te), Z = j(ne); Z !== null && (!(Z.expirationTime > Te) || J && !un()); ) {
          var _ = Z.callback;
          if (typeof _ == "function") {
            Z.callback = null, Se = Z.priorityLevel;
            var P = _(Z.expirationTime <= Te);
            Te = L.unstable_now(), typeof P == "function" ? Z.callback = P : Z === j(ne) && gt(ne), Ve(Te);
          } else gt(ne);
          Z = j(ne);
        }
        if (Z !== null) var Fe = !0;
        else {
          var Ue = j(ce);
          Ue !== null && Ce(it, Ue.startTime - Te), Fe = !1;
        }
        return Fe;
      } finally {
        Z = null, Se = re, ie = !1;
      }
    }
    var ft = !1, je = null, ln = -1, Ht = 5, Zt = -1;
    function un() {
      return !(L.unstable_now() - Zt < Ht);
    }
    function _t() {
      if (je !== null) {
        var J = L.unstable_now();
        Zt = J;
        var Te = !0;
        try {
          Te = je(!0, J);
        } finally {
          Te ? ke() : (ft = !1, je = null);
        }
      } else ft = !1;
    }
    var ke;
    if (typeof Ze == "function") ke = function() {
      Ze(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), Dt = jt.port2;
      jt.port1.onmessage = _t, ke = function() {
        Dt.postMessage(null);
      };
    } else ke = function() {
      at(_t, 0);
    };
    function Ot(J) {
      je = J, ft || (ft = !0, ke());
    }
    function Ce(J, Te) {
      ln = at(function() {
        J(L.unstable_now());
      }, Te);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, L.unstable_continueExecution = function() {
      Be || ie || (Be = !0, Ot(Re));
    }, L.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < J ? Math.floor(1e3 / J) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return Se;
    }, L.unstable_getFirstCallbackNode = function() {
      return j(ne);
    }, L.unstable_next = function(J) {
      switch (Se) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = Se;
      }
      var re = Se;
      Se = Te;
      try {
        return J();
      } finally {
        Se = re;
      }
    }, L.unstable_pauseExecution = function() {
    }, L.unstable_requestPaint = function() {
    }, L.unstable_runWithPriority = function(J, Te) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var re = Se;
      Se = J;
      try {
        return Te();
      } finally {
        Se = re;
      }
    }, L.unstable_scheduleCallback = function(J, Te, re) {
      var _ = L.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? _ + re : _) : re = _, J) {
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
      return P = re + P, J = { id: Je++, callback: Te, priorityLevel: J, startTime: re, expirationTime: P, sortIndex: -1 }, re > _ ? (J.sortIndex = re, X(ce, J), j(ne) === null && J === j(ce) && (mt ? (Kt(ln), ln = -1) : mt = !0, Ce(it, re - _))) : (J.sortIndex = P, X(ne, J), Be || ie || (Be = !0, Ot(Re))), J;
    }, L.unstable_shouldYield = un, L.unstable_wrapCallback = function(J) {
      var Te = Se;
      return function() {
        var re = Se;
        Se = Te;
        try {
          return J.apply(this, arguments);
        } finally {
          Se = re;
        }
      };
    };
  }(fE)), fE;
}
var dE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function nD() {
  return tT || (tT = 1, function(L) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var X = !1, j = 5;
      function gt(ee, xe) {
        var nt = ee.length;
        ee.push(xe), S(ee, xe, nt);
      }
      function ct(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function ht(ee) {
        if (ee.length === 0)
          return null;
        var xe = ee[0], nt = ee.pop();
        return nt !== xe && (ee[0] = nt, vt(ee, nt, 0)), xe;
      }
      function S(ee, xe, nt) {
        for (var Ft = nt; Ft > 0; ) {
          var en = Ft - 1 >>> 1, vn = ee[en];
          if (ne(vn, xe) > 0)
            ee[en] = xe, ee[Ft] = vn, Ft = en;
          else
            return;
        }
      }
      function vt(ee, xe, nt) {
        for (var Ft = nt, en = ee.length, vn = en >>> 1; Ft < vn; ) {
          var on = (Ft + 1) * 2 - 1, Xn = ee[on], tn = on + 1, It = ee[tn];
          if (ne(Xn, xe) < 0)
            tn < en && ne(It, Xn) < 0 ? (ee[Ft] = It, ee[tn] = xe, Ft = tn) : (ee[Ft] = Xn, ee[on] = xe, Ft = on);
          else if (tn < en && ne(It, xe) < 0)
            ee[Ft] = It, ee[tn] = xe, Ft = tn;
          else
            return;
        }
      }
      function ne(ee, xe) {
        var nt = ee.sortIndex - xe.sortIndex;
        return nt !== 0 ? nt : ee.id - xe.id;
      }
      var ce = 1, Je = 2, Z = 3, Se = 4, ie = 5;
      function Be(ee, xe) {
      }
      var mt = typeof performance == "object" && typeof performance.now == "function";
      if (mt) {
        var at = performance;
        L.unstable_now = function() {
          return at.now();
        };
      } else {
        var Kt = Date, Ze = Kt.now();
        L.unstable_now = function() {
          return Kt.now() - Ze;
        };
      }
      var Ve = 1073741823, it = -1, Re = 250, ft = 5e3, je = 1e4, ln = Ve, Ht = [], Zt = [], un = 1, _t = null, ke = Z, jt = !1, Dt = !1, Ot = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(ee) {
        for (var xe = ct(Zt); xe !== null; ) {
          if (xe.callback === null)
            ht(Zt);
          else if (xe.startTime <= ee)
            ht(Zt), xe.sortIndex = xe.expirationTime, gt(Ht, xe);
          else
            return;
          xe = ct(Zt);
        }
      }
      function _(ee) {
        if (Ot = !1, re(ee), !Dt)
          if (ct(Ht) !== null)
            Dt = !0, Ln(P);
          else {
            var xe = ct(Zt);
            xe !== null && Sr(_, xe.startTime - ee);
          }
      }
      function P(ee, xe) {
        Dt = !1, Ot && (Ot = !1, sa()), jt = !0;
        var nt = ke;
        try {
          var Ft;
          if (!X) return Fe(ee, xe);
        } finally {
          _t = null, ke = nt, jt = !1;
        }
      }
      function Fe(ee, xe) {
        var nt = xe;
        for (re(nt), _t = ct(Ht); _t !== null && !(_t.expirationTime > nt && (!ee || si())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, ke = _t.priorityLevel;
            var en = _t.expirationTime <= nt, vn = Ft(en);
            nt = L.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === ct(Ht) && ht(Ht), re(nt);
          } else
            ht(Ht);
          _t = ct(Ht);
        }
        if (_t !== null)
          return !0;
        var on = ct(Zt);
        return on !== null && Sr(_, on.startTime - nt), !1;
      }
      function Ue(ee, xe) {
        switch (ee) {
          case ce:
          case Je:
          case Z:
          case Se:
          case ie:
            break;
          default:
            ee = Z;
        }
        var nt = ke;
        ke = ee;
        try {
          return xe();
        } finally {
          ke = nt;
        }
      }
      function lt(ee) {
        var xe;
        switch (ke) {
          case ce:
          case Je:
          case Z:
            xe = Z;
            break;
          default:
            xe = ke;
            break;
        }
        var nt = ke;
        ke = xe;
        try {
          return ee();
        } finally {
          ke = nt;
        }
      }
      function et(ee) {
        var xe = ke;
        return function() {
          var nt = ke;
          ke = xe;
          try {
            return ee.apply(this, arguments);
          } finally {
            ke = nt;
          }
        };
      }
      function Xe(ee, xe, nt) {
        var Ft = L.unstable_now(), en;
        if (typeof nt == "object" && nt !== null) {
          var vn = nt.delay;
          typeof vn == "number" && vn > 0 ? en = Ft + vn : en = Ft;
        } else
          en = Ft;
        var on;
        switch (ee) {
          case ce:
            on = it;
            break;
          case Je:
            on = Re;
            break;
          case ie:
            on = ln;
            break;
          case Se:
            on = je;
            break;
          case Z:
          default:
            on = ft;
            break;
        }
        var Xn = en + on, tn = {
          id: un++,
          callback: xe,
          priorityLevel: ee,
          startTime: en,
          expirationTime: Xn,
          sortIndex: -1
        };
        return en > Ft ? (tn.sortIndex = en, gt(Zt, tn), ct(Ht) === null && tn === ct(Zt) && (Ot ? sa() : Ot = !0, Sr(_, en - Ft))) : (tn.sortIndex = Xn, gt(Ht, tn), !Dt && !jt && (Dt = !0, Ln(P))), tn;
      }
      function tt() {
      }
      function ut() {
        !Dt && !jt && (Dt = !0, Ln(P));
      }
      function Bt() {
        return ct(Ht);
      }
      function On(ee) {
        ee.callback = null;
      }
      function wr() {
        return ke;
      }
      var Cn = !1, nr = null, Pn = -1, Bn = j, Yr = -1;
      function si() {
        var ee = L.unstable_now() - Yr;
        return !(ee < Bn);
      }
      function oa() {
      }
      function qn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = j;
      }
      var Rn = function() {
        if (nr !== null) {
          var ee = L.unstable_now();
          Yr = ee;
          var xe = !0, nt = !0;
          try {
            nt = nr(xe, ee);
          } finally {
            nt ? In() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, In;
      if (typeof Te == "function")
        In = function() {
          Te(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ya = gr.port2;
        gr.port1.onmessage = Rn, In = function() {
          Ya.postMessage(null);
        };
      } else
        In = function() {
          Ce(Rn, 0);
        };
      function Ln(ee) {
        nr = ee, Cn || (Cn = !0, In());
      }
      function Sr(ee, xe) {
        Pn = Ce(function() {
          ee(L.unstable_now());
        }, xe);
      }
      function sa() {
        J(Pn), Pn = -1;
      }
      var Wa = oa, ci = null;
      L.unstable_IdlePriority = ie, L.unstable_ImmediatePriority = ce, L.unstable_LowPriority = Se, L.unstable_NormalPriority = Z, L.unstable_Profiling = ci, L.unstable_UserBlockingPriority = Je, L.unstable_cancelCallback = On, L.unstable_continueExecution = ut, L.unstable_forceFrameRate = qn, L.unstable_getCurrentPriorityLevel = wr, L.unstable_getFirstCallbackNode = Bt, L.unstable_next = lt, L.unstable_pauseExecution = tt, L.unstable_requestPaint = Wa, L.unstable_runWithPriority = Ue, L.unstable_scheduleCallback = Xe, L.unstable_shouldYield = si, L.unstable_wrapCallback = et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dE)), dE;
}
var nT;
function sT() {
  return nT || (nT = 1, process.env.NODE_ENV === "production" ? $m.exports = tD() : $m.exports = nD()), $m.exports;
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
var rT;
function rD() {
  if (rT) return Ba;
  rT = 1;
  var L = $u, X = sT();
  function j(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var gt = /* @__PURE__ */ new Set(), ct = {};
  function ht(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (ct[n] = r, n = 0; n < r.length; n++) gt.add(r[n]);
  }
  var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ne = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Je = {}, Z = {};
  function Se(n) {
    return ne.call(Z, n) ? !0 : ne.call(Je, n) ? !1 : ce.test(n) ? Z[n] = !0 : (Je[n] = !0, !1);
  }
  function ie(n, r, l, o) {
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
  function Be(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o)) return !0;
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
  function mt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var at = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    at[n] = new mt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    at[r] = new mt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    at[n] = new mt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    at[n] = new mt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    at[n] = new mt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    at[n] = new mt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    at[n] = new mt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    at[n] = new mt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    at[n] = new mt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Kt = /[\-:]([a-z])/g;
  function Ze(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Kt,
      Ze
    );
    at[r] = new mt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Kt, Ze);
    at[r] = new mt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Kt, Ze);
    at[r] = new mt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    at[n] = new mt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), at.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    at[n] = new mt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ve(n, r, l, o) {
    var c = at.hasOwnProperty(r) ? at[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Be(r, l, c, o) && (l = null), o || c === null ? Se(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var it = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), ft = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), un = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, _;
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
  var Fe = !1;
  function Ue(n, r) {
    if (!n || Fe) return "";
    Fe = !0;
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
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
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
      Fe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function lt(n) {
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
  function et(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case je:
        return "Fragment";
      case ft:
        return "Portal";
      case Ht:
        return "Profiler";
      case ln:
        return "StrictMode";
      case ke:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Dt:
        return r = n.displayName || null, r !== null ? r : et(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return et(n(r));
        } catch {
        }
    }
    return null;
  }
  function Xe(n) {
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
        return et(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
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
  function tt(n) {
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
  function ut(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ut(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ut(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = tt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Ve(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = tt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, tt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + tt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(j(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(j(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(j(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: tt(l) };
  }
  function Ya(n, r) {
    var l = tt(r.value), o = tt(r.defaultValue);
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
  function ee(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
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
  }, nt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    nt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function en(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(j(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(j(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(j(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(j(62));
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
  var tn = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, ca = null, Er = null;
  function Ta(n) {
    if (n = _e(n)) {
      if (typeof Yt != "function") throw Error(j(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Fi(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Jl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function Zl(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function eu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return Zl(n, r, l);
    } finally {
      pl = !1, (ca !== null || Er !== null) && (dl(), Jl());
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
    if (l && typeof l != "function") throw Error(j(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (vt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function fi(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch ($) {
      this.onError($);
    }
  }
  var $a = !1, di = null, pi = !1, R = null, I = { onError: function(n) {
    $a = !0, di = n;
  } };
  function le(n, r, l, o, c, d, m, E, T) {
    $a = !1, di = null, fi.apply(I, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (le.apply(this, arguments), $a) {
      if ($a) {
        var U = di;
        $a = !1, di = null;
      } else throw Error(j(198));
      pi || (pi = !0, R = U);
    }
  }
  function Qe(n) {
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
  function dt(n) {
    if (Qe(n) !== n) throw Error(j(188));
  }
  function ot(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Qe(n), r === null) throw Error(j(188));
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
          if (d === l) return dt(c), n;
          if (d === o) return dt(c), r;
          d = d.sibling;
        }
        throw Error(j(188));
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
          if (!m) throw Error(j(189));
        }
      }
      if (l.alternate !== o) throw Error(j(190));
    }
    if (l.tag !== 3) throw Error(j(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = ot(n), n !== null ? nn(n) : null;
  }
  function nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = X.unstable_scheduleCallback, ar = X.unstable_cancelCallback, Qa = X.unstable_shouldYield, Ga = X.unstable_requestPaint, Ge = X.unstable_now, Ke = X.unstable_getCurrentPriorityLevel, qa = X.unstable_ImmediatePriority, tu = X.unstable_UserBlockingPriority, nu = X.unstable_NormalPriority, vl = X.unstable_LowPriority, Qu = X.unstable_IdlePriority, hl = null, Wr = null;
  function Wo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
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
  function qu(n, r) {
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
      T === -1 ? (!(E & l) || E & o) && (c[m] = qu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Xu() {
    var n = ml;
    return ml <<= 1, !(ml & 4194240) && (ml = 64), n;
  }
  function Ku(n) {
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
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, $o, vi, Ie, Zu, ir = !1, hi = [], kr = null, mi = null, cn = null, Wt = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), Yn = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
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
        cn = null;
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
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _e(r), r !== null && $o(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return kr = au(kr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = au(mi, n, r, l, o, c), !0;
      case "mouseover":
        return cn = au(cn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Wt.set(d, au(Wt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, au(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = pu(n.target);
    if (r !== null) {
      var l = Qe(r);
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
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        tn = o, l.target.dispatchEvent(o), tn = null;
      } else return r = _e(l), r !== null && $o(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function iu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Qf() {
    ir = !1, kr !== null && Sl(kr) && (kr = null), mi !== null && Sl(mi) && (mi = null), cn !== null && Sl(cn) && (cn = null), Wt.forEach(iu), gl.forEach(iu);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Qf)));
  }
  function Ja(n) {
    function r(c) {
      return wa(c, n);
    }
    if (0 < hi.length) {
      wa(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (kr !== null && wa(kr, n), mi !== null && wa(mi, n), cn !== null && wa(cn, n), Wt.forEach(r), gl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var yi = it.ReactCurrentBatchConfig, ba = !0;
  function eo(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 1, El(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
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
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, lu, l), xa(n, o);
      else if (Qo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = _e(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, lu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var lu = null;
  function no(n, r, l, o) {
    if (lu = null, n = It(o), n = pu(n), n !== null) if (r = Qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ye(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return lu = n, null;
  }
  function ro(n) {
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
        switch (Ke()) {
          case qa:
            return 1;
          case tu:
            return 4;
          case nu:
          case vl:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : Oe, this.isPropagationStopped = Oe, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var Ne = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pt = ae(Ne), bt = re({}, Ne, { view: 0, detail: 0 }), rn = ae(bt), $t, rt, Qt, hn = re({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? ($t = n.screenX - Qt.screenX, rt = n.screenY - Qt.screenY) : rt = $t = 0, Qt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : rt;
  } }), Cl = ae(hn), qo = re({}, hn, { dataTransfer: 0 }), Pi = ae(qo), Xo = re({}, bt, { relatedTarget: 0 }), uu = ae(Xo), Gf = re({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ae(Gf), qf = re({}, Ne, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = ae(qf), Xf = re({}, Ne, { data: 0 }), Kf = ae(Xf), nv = {
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
  }, qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qm[n]) ? !!r[n] : !1;
  }
  function Jf() {
    return Bi;
  }
  var Zf = re({}, bt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = ae(Zf), td = re({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = ae(td), sc = re({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), iv = ae(sc), $r = re({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = ae($r), Mn = re({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ae(Mn), nd = [9, 13, 27, 32], ao = vt && "CompositionEvent" in window, Ko = null;
  vt && "documentMode" in document && (Ko = document.documentMode);
  var Jo = vt && "TextEvent" in window && !Ko, lv = vt && (!ao || Ko && 8 < Ko && 11 >= Ko), uv = " ", cc = !1;
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
  var io = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && cc ? null : n;
      default:
        return null;
    }
  }
  function Xm(n, r) {
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = z(), C = h = Za = null, io = !1, n) : null;
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
  var Km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Fi(o), r = as(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, ou = null;
  function dv(n) {
    fu(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function Jm(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (vt) {
    var ad;
    if (vt) {
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
      rd(r, ou, n, It(n)), eu(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (hv(), gi = r, ou = l, gi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(ou);
  }
  function ey(n, r) {
    if (n === "click") return Zo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ty(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ty;
  function es(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ne.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
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
  function ts() {
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
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
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
  var ny = vt && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var su = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  vt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete su.animationend.animation, delete su.animationiteration.animation, delete su.animationstart.animation), "TransitionEvent" in window || delete su.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!su[n]) return n;
    var r = su[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Ev = vc("animationend"), Cv = vc("animationiteration"), Rv = vc("animationstart"), Tv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    cd.set(n, r), ht(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var cu = hc[fd], ry = cu.toLowerCase(), ay = cu[0].toUpperCase() + cu.slice(1);
    _a(ry, "on" + ay);
  }
  _a(Ev, "onAnimationEnd"), _a(Cv, "onAnimationIteration"), _a(Rv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
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
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Vt(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (xv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), xv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, gt.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function xv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
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
      var U = d, $ = It(l), G = [];
      e: {
        var W = cd.get(n);
        if (W !== void 0) {
          var fe = pt, me = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = ed;
              break;
            case "focusin":
              me = "focus", fe = uu;
              break;
            case "focusout":
              me = "blur", fe = uu;
              break;
            case "beforeblur":
            case "afterblur":
              fe = uu;
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
              fe = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Pi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              fe = oc;
              break;
            case Tv:
              fe = Ii;
              break;
            case "scroll":
              fe = rn;
              break;
            case "wheel":
              fe = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = av;
          }
          var Ee = (r & 4) !== 0, Dn = !Ee && n === "scroll", D = Ee ? W !== null ? W + "Capture" : null : W;
          Ee = [];
          for (var w = U, M; w !== null; ) {
            M = w;
            var Q = M.stateNode;
            if (M.tag === 5 && Q !== null && (M = Q, D !== null && (Q = br(w, D), Q != null && Ee.push(so(w, Q, M)))), Dn) break;
            w = w.return;
          }
          0 < Ee.length && (W = new fe(W, me, null, l, $), G.push({ event: W, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", W && l !== tn && (me = l.relatedTarget || l.fromElement) && (pu(me) || me[Wi])) break e;
          if ((fe || W) && (W = $.window === $ ? $ : (W = $.ownerDocument) ? W.defaultView || W.parentWindow : window, fe ? (me = l.relatedTarget || l.toElement, fe = U, me = me ? pu(me) : null, me !== null && (Dn = Qe(me), me !== Dn || me.tag !== 5 && me.tag !== 6) && (me = null)) : (fe = null, me = U), fe !== me)) {
            if (Ee = Cl, Q = "onMouseLeave", D = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = av, Q = "onPointerLeave", D = "onPointerEnter", w = "pointer"), Dn = fe == null ? W : ti(fe), M = me == null ? W : ti(me), W = new Ee(Q, w + "leave", fe, l, $), W.target = Dn, W.relatedTarget = M, Q = null, pu($) === U && (Ee = new Ee(D, w + "enter", me, l, $), Ee.target = M, Ee.relatedTarget = Dn, Q = Ee), Dn = Q, fe && me) t: {
              for (Ee = fe, D = me, w = 0, M = Ee; M; M = Tl(M)) w++;
              for (M = 0, Q = D; Q; Q = Tl(Q)) M++;
              for (; 0 < w - M; ) Ee = Tl(Ee), w--;
              for (; 0 < M - w; ) D = Tl(D), M--;
              for (; w--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = Tl(Ee), D = Tl(D);
              }
              Ee = null;
            }
            else Ee = null;
            fe !== null && wv(G, W, fe, Ee, !1), me !== null && Dn !== null && wv(G, Dn, me, Ee, !0);
          }
        }
        e: {
          if (W = U ? ti(U) : window, fe = W.nodeName && W.nodeName.toLowerCase(), fe === "select" || fe === "input" && W.type === "file") var ye = Jm;
          else if (fv(W)) if (pv) ye = gv;
          else {
            ye = yv;
            var Me = Zm;
          }
          else (fe = W.nodeName) && fe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ye = ey);
          if (ye && (ye = ye(n, U))) {
            rd(G, ye, l, $);
            break e;
          }
          Me && Me(n, W, U), n === "focusout" && (Me = W._wrapperState) && Me.controlled && W.type === "number" && oa(W, "number", W.value);
        }
        switch (Me = U ? ti(U) : window, n) {
          case "focusin":
            (fv(Me) || Me.contentEditable === "true") && (uo = Me, ld = U, ns = null);
            break;
          case "focusout":
            ns = ld = uo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(G, l, $);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            od(G, l, $);
        }
        var ze;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else io ? ov(n, l) && (Pe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (lv && l.locale !== "ko" && (io || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && io && (ze = z()) : (Za = $, h = "value" in Za ? Za.value : Za.textContent, io = !0)), Me = as(U, Pe), 0 < Me.length && (Pe = new Kf(Pe, n, null, l, $), G.push({ event: Pe, listeners: Me }), ze ? Pe.data = ze : (ze = sv(l), ze !== null && (Pe.data = ze)))), (ze = Jo ? cv(n, l) : Xm(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && ($ = new Kf("onBeforeInput", "beforeinput", null, l, $), G.push({ event: $, listeners: U }), $.data = ze));
      }
      fu(G, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = br(n, l), d != null && o.unshift(so(n, d, c)), d = br(n, r), d != null && o.push(so(n, d, c))), n = n.return;
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
  function wv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = br(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = br(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(iy, "");
  }
  function Ec(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(j(425));
  }
  function xl() {
  }
  var is = null, du = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, Dv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dv < "u" ? function(n) {
    return Dv.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
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
  var wl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + wl, ls = "__reactProps$" + wl, Wi = "__reactContainer$" + wl, us = "__reactEvents$" + wl, po = "__reactListeners$" + wl, ly = "__reactHandles$" + wl;
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
    throw Error(j(33));
  }
  function mn(n) {
    return n[ls] || null;
  }
  var Et = [], Da = -1;
  function ka(n) {
    return { current: n };
  }
  function an(n) {
    0 > Da || (n.current = Et[Da], Et[Da] = null, Da--);
  }
  function be(n, r) {
    Da++, Et[Da] = n.current, n.current = r;
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
  function vo() {
    an(Wn), an(En);
  }
  function Ov(n, r, l) {
    if (En.current !== Cr) throw Error(j(168));
    be(En, r), be(Wn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(j(108, Xe(n) || "Unknown", c));
    return re({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Qr = En.current, be(En, n), be(Wn, Wn.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(j(169));
    l ? (n = os(n, r, Qr), o.__reactInternalMemoizedMergedChildContext = n, an(Wn), an(En), be(En, n)) : an(Wn), be(Wn, l);
  }
  var Ci = null, ho = !1, $i = !1;
  function wc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function bl(n) {
    ho = !0, wc(n);
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
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), sn(qa, Ri), c;
      } finally {
        Lt = r, $i = !1;
      }
    }
    return null;
  }
  var _l = [], Dl = 0, kl = null, Qi = 0, zn = [], Oa = 0, da = null, Ti = 1, xi = "";
  function vu(n, r) {
    _l[Dl++] = Qi, _l[Dl++] = kl, kl = n, Qi = r;
  }
  function Lv(n, r, l) {
    zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, da = n;
    var o = Ti;
    n = xi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - Dr(r) + c | l << c | o, xi = d + n;
    } else Ti = 1 << d | l << c | o, xi = n;
  }
  function bc(n) {
    n.return !== null && (vu(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === kl; ) kl = _l[--Dl], _l[Dl] = null, Qi = _l[--Dl], _l[Dl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Xr = null, !0) : !1;
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
          if (hd(n)) throw Error(j(418));
          r = Si(l.nextSibling);
          var o = qr;
          r && Mv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, dn = !1, qr = n);
        }
      } else {
        if (hd(n)) throw Error(j(418));
        n.flags = n.flags & -4097 | 2, dn = !1, qr = n;
      }
    }
  }
  function $n(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function Dc(n) {
    if (n !== qr) return !1;
    if (!dn) return $n(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Xr)) {
      if (hd(n)) throw ss(), Error(j(418));
      for (; r; ) vd(n, r), r = Si(r.nextSibling);
    }
    if ($n(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(j(317));
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
  function ss() {
    for (var n = Xr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    Xr = qr = null, dn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var uy = it.ReactCurrentBatchConfig;
  function hu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(j(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(j(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(j(284));
      if (!l._owner) throw Error(j(290, n));
    }
    return n;
  }
  function kc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(j(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function mu(n) {
    function r(D, w) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [w], D.flags |= 16) : M.push(w);
      }
    }
    function l(D, w) {
      if (!n) return null;
      for (; w !== null; ) r(D, w), w = w.sibling;
      return null;
    }
    function o(D, w) {
      for (D = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? D.set(w.key, w) : D.set(w.index, w), w = w.sibling;
      return D;
    }
    function c(D, w) {
      return D = Fl(D, w), D.index = 0, D.sibling = null, D;
    }
    function d(D, w, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < w ? (D.flags |= 2, w) : M) : (D.flags |= 2, w)) : (D.flags |= 1048576, w);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, w, M, Q) {
      return w === null || w.tag !== 6 ? (w = Qd(M, D.mode, Q), w.return = D, w) : (w = c(w, M), w.return = D, w);
    }
    function T(D, w, M, Q) {
      var ye = M.type;
      return ye === je ? $(D, w, M.props.children, Q, M.key) : w !== null && (w.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Ot && Nv(ye) === w.type) ? (Q = c(w, M.props), Q.ref = hu(D, w, M), Q.return = D, Q) : (Q = Hs(M.type, M.key, M.props, null, D.mode, Q), Q.ref = hu(D, w, M), Q.return = D, Q);
    }
    function U(D, w, M, Q) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = sf(M, D.mode, Q), w.return = D, w) : (w = c(w, M.children || []), w.return = D, w);
    }
    function $(D, w, M, Q, ye) {
      return w === null || w.tag !== 7 ? (w = el(M, D.mode, Q, ye), w.return = D, w) : (w = c(w, M), w.return = D, w);
    }
    function G(D, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Qd("" + w, D.mode, M), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Re:
            return M = Hs(w.type, w.key, w.props, null, D.mode, M), M.ref = hu(D, null, w), M.return = D, M;
          case ft:
            return w = sf(w, D.mode, M), w.return = D, w;
          case Ot:
            var Q = w._init;
            return G(D, Q(w._payload), M);
        }
        if (qn(w) || Te(w)) return w = el(w, D.mode, M, null), w.return = D, w;
        kc(D, w);
      }
      return null;
    }
    function W(D, w, M, Q) {
      var ye = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return ye !== null ? null : E(D, w, "" + M, Q);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Re:
            return M.key === ye ? T(D, w, M, Q) : null;
          case ft:
            return M.key === ye ? U(D, w, M, Q) : null;
          case Ot:
            return ye = M._init, W(
              D,
              w,
              ye(M._payload),
              Q
            );
        }
        if (qn(M) || Te(M)) return ye !== null ? null : $(D, w, M, Q, null);
        kc(D, M);
      }
      return null;
    }
    function fe(D, w, M, Q, ye) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return D = D.get(M) || null, E(w, D, "" + Q, ye);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case Re:
            return D = D.get(Q.key === null ? M : Q.key) || null, T(w, D, Q, ye);
          case ft:
            return D = D.get(Q.key === null ? M : Q.key) || null, U(w, D, Q, ye);
          case Ot:
            var Me = Q._init;
            return fe(D, w, M, Me(Q._payload), ye);
        }
        if (qn(Q) || Te(Q)) return D = D.get(M) || null, $(w, D, Q, ye, null);
        kc(w, Q);
      }
      return null;
    }
    function me(D, w, M, Q) {
      for (var ye = null, Me = null, ze = w, Pe = w = 0, er = null; ze !== null && Pe < M.length; Pe++) {
        ze.index > Pe ? (er = ze, ze = null) : er = ze.sibling;
        var zt = W(D, ze, M[Pe], Q);
        if (zt === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && zt.alternate === null && r(D, ze), w = d(zt, w, Pe), Me === null ? ye = zt : Me.sibling = zt, Me = zt, ze = er;
      }
      if (Pe === M.length) return l(D, ze), dn && vu(D, Pe), ye;
      if (ze === null) {
        for (; Pe < M.length; Pe++) ze = G(D, M[Pe], Q), ze !== null && (w = d(ze, w, Pe), Me === null ? ye = ze : Me.sibling = ze, Me = ze);
        return dn && vu(D, Pe), ye;
      }
      for (ze = o(D, ze); Pe < M.length; Pe++) er = fe(ze, D, Pe, M[Pe], Q), er !== null && (n && er.alternate !== null && ze.delete(er.key === null ? Pe : er.key), w = d(er, w, Pe), Me === null ? ye = er : Me.sibling = er, Me = er);
      return n && ze.forEach(function(Pl) {
        return r(D, Pl);
      }), dn && vu(D, Pe), ye;
    }
    function Ee(D, w, M, Q) {
      var ye = Te(M);
      if (typeof ye != "function") throw Error(j(150));
      if (M = ye.call(M), M == null) throw Error(j(151));
      for (var Me = ye = null, ze = w, Pe = w = 0, er = null, zt = M.next(); ze !== null && !zt.done; Pe++, zt = M.next()) {
        ze.index > Pe ? (er = ze, ze = null) : er = ze.sibling;
        var Pl = W(D, ze, zt.value, Q);
        if (Pl === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Pl.alternate === null && r(D, ze), w = d(Pl, w, Pe), Me === null ? ye = Pl : Me.sibling = Pl, Me = Pl, ze = er;
      }
      if (zt.done) return l(
        D,
        ze
      ), dn && vu(D, Pe), ye;
      if (ze === null) {
        for (; !zt.done; Pe++, zt = M.next()) zt = G(D, zt.value, Q), zt !== null && (w = d(zt, w, Pe), Me === null ? ye = zt : Me.sibling = zt, Me = zt);
        return dn && vu(D, Pe), ye;
      }
      for (ze = o(D, ze); !zt.done; Pe++, zt = M.next()) zt = fe(ze, D, Pe, zt.value, Q), zt !== null && (n && zt.alternate !== null && ze.delete(zt.key === null ? Pe : zt.key), w = d(zt, w, Pe), Me === null ? ye = zt : Me.sibling = zt, Me = zt);
      return n && ze.forEach(function(hh) {
        return r(D, hh);
      }), dn && vu(D, Pe), ye;
    }
    function Dn(D, w, M, Q) {
      if (typeof M == "object" && M !== null && M.type === je && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Re:
            e: {
              for (var ye = M.key, Me = w; Me !== null; ) {
                if (Me.key === ye) {
                  if (ye = M.type, ye === je) {
                    if (Me.tag === 7) {
                      l(D, Me.sibling), w = c(Me, M.props.children), w.return = D, D = w;
                      break e;
                    }
                  } else if (Me.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Ot && Nv(ye) === Me.type) {
                    l(D, Me.sibling), w = c(Me, M.props), w.ref = hu(D, Me, M), w.return = D, D = w;
                    break e;
                  }
                  l(D, Me);
                  break;
                } else r(D, Me);
                Me = Me.sibling;
              }
              M.type === je ? (w = el(M.props.children, D.mode, Q, M.key), w.return = D, D = w) : (Q = Hs(M.type, M.key, M.props, null, D.mode, Q), Q.ref = hu(D, w, M), Q.return = D, D = Q);
            }
            return m(D);
          case ft:
            e: {
              for (Me = M.key; w !== null; ) {
                if (w.key === Me) if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                  l(D, w.sibling), w = c(w, M.children || []), w.return = D, D = w;
                  break e;
                } else {
                  l(D, w);
                  break;
                }
                else r(D, w);
                w = w.sibling;
              }
              w = sf(M, D.mode, Q), w.return = D, D = w;
            }
            return m(D);
          case Ot:
            return Me = M._init, Dn(D, w, Me(M._payload), Q);
        }
        if (qn(M)) return me(D, w, M, Q);
        if (Te(M)) return Ee(D, w, M, Q);
        kc(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (l(D, w.sibling), w = c(w, M), w.return = D, D = w) : (l(D, w), w = Qd(M, D.mode, Q), w.return = D, D = w), m(D)) : l(D, w);
    }
    return Dn;
  }
  var xn = mu(!0), ue = mu(!1), pa = ka(null), Kr = null, mo = null, yd = null;
  function gd() {
    yd = mo = Kr = null;
  }
  function Sd(n) {
    var r = pa.current;
    an(pa), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Kr = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Kr === null) throw Error(j(308));
      mo = n, Kr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
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
    if (o = o.shared, Ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
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
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, E = $.lastBaseUpdate, E !== m && (E === null ? $.firstBaseUpdate = U : E.next = U, $.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, $ = U = T = null, E = d;
      do {
        var W = E.lane, fe = E.eventTime;
        if ((o & W) === W) {
          $ !== null && ($ = $.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Ee = E;
            switch (W = r, fe = l, Ee.tag) {
              case 1:
                if (me = Ee.payload, typeof me == "function") {
                  G = me.call(fe, G, W);
                  break e;
                }
                G = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Ee.payload, W = typeof me == "function" ? me.call(fe, G, W) : me, W == null) break e;
                G = re({}, G, W);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else fe = { eventTime: fe, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, $ === null ? (U = $ = fe, T = G) : $ = $.next = fe, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (T = G), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      ki |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function xd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(j(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, wi = ka(fs), ds = ka(fs), ps = ka(fs);
  function gu(n) {
    if (n === fs) throw Error(j(174));
    return n;
  }
  function wd(n, r) {
    switch (be(ps, r), be(ds, n), be(wi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    an(wi), be(wi, r);
  }
  function Su() {
    an(wi), an(ds), an(ps);
  }
  function Av(n) {
    gu(ps.current);
    var r = gu(wi.current), l = sa(r, n.type);
    r !== l && (be(ds, n), be(wi, l));
  }
  function Lc(n) {
    ds.current === n && (an(wi), an(ds));
  }
  var gn = ka(0);
  function Mc(n) {
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
  var vs = [];
  function De() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var st = it.ReactCurrentDispatcher, Mt = it.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Jn = null, Nc = !1, hs = !1, Eu = 0, Y = 0;
  function kt() {
    throw Error(j(321));
  }
  function Ae(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, st.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Eu = 0, 25 <= d) throw Error(j(301));
        d += 1, Jn = Un = null, r.updateQueue = null, st.current = qc, n = l(o, c);
      } while (hs);
    }
    if (st.current = wu, r = Un !== null && Un.next !== null, Gt = 0, Jn = Un = Nt = null, Nc = !1, r) throw Error(j(300));
    return n;
  }
  function ni() {
    var n = Eu !== 0;
    return Eu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function wn() {
    if (Un === null) {
      var n = Nt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Jn === null ? Nt.memoizedState : Jn.next;
    if (r !== null) Jn = r, Un = n;
    else {
      if (n === null) throw Error(j(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Nl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(j(311));
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
      var E = m = null, T = null, U = d;
      do {
        var $ = U.lane;
        if ((Gt & $) === $) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var G = {
            lane: $,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, Nt.lanes |= $, ki |= $;
        }
        U = U.next;
      } while (U !== null && U !== d);
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
    var r = wn(), l = r.queue;
    if (l === null) throw Error(j(311));
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
  function zc() {
  }
  function Uc(n, r) {
    var l = Nt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, jc.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(j(349));
      Gt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Vc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Vc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Vc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Nt.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
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
  function Ic(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Yc(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function Tu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, Tu.bind(null, r, n), l);
  }
  function gs() {
  }
  function $c(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ae(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = Xu(), Nt.lanes |= l, ki |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
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
    return wn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) jv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), Jt(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) jv(r, c);
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
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Jt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Nt || r !== null && r === Nt;
  }
  function jv(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Jt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var wu = { readContext: Ma, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Gc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      Tu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Nt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: gs, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(j(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(j(349));
      Gt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Qn.identifierPrefix;
    if (dn) {
      var l = xi, o = Ti;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Eu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Ma,
    useCallback: $c,
    useContext: Ma,
    useEffect: ms,
    useImperativeHandle: Wc,
    useInsertionEffect: Yc,
    useLayoutEffect: ys,
    useMemo: Qc,
    useReducer: Nl,
    useRef: Bc,
    useState: function() {
      return Nl(Xi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = wn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = Nl(Xi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Ma, useCallback: $c, useContext: Ma, useEffect: ms, useImperativeHandle: Wc, useInsertionEffect: Yc, useLayoutEffect: ys, useMemo: Qc, useReducer: Cu, useRef: Bc, useState: function() {
    return Cu(Xi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Cu(Xi)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Kc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Nn(r) ? Qr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Xc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Nn(r) ? Qr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bu(n, r) {
    try {
      var l = "", o = r;
      do
        l += lt(o), o = o.return;
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
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, ku = o), Od(n, r);
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
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function Pv(n) {
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
  var Ts = it.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? ue(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && bc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function _u(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, qe(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Fl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function qe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function xs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, be(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, be(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, be(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, be(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Nn(l) ? Qr : En.current;
    return d = Gr(r, d), yn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && bc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Iv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Na(n, r), Kc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ma(U) : (U = Nn(l) ? Qr : En.current, U = Gr(r, U));
      var $ = l.getDerivedStateFromProps, G = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Hv(r, m, o, U), ha = !1;
      var W = r.memoizedState;
      m.state = W, cs(r, o, m, c), T = r.memoizedState, E !== o || W !== T || Wn.current || ha ? (typeof $ == "function" && (Dd(r, l, $, o), T = r.memoizedState), (E = ha || Fv(r, l, E, o, W, T, U)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ri(r.type, E), m.props = U, G = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Nn(l) ? Qr : En.current, T = Gr(r, T));
      var fe = l.getDerivedStateFromProps;
      ($ = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || W !== T) && Hv(r, m, o, T), ha = !1, W = r.memoizedState, m.state = W, cs(r, o, m, c);
      var me = r.memoizedState;
      E !== G || W !== me || Wn.current || ha ? (typeof fe == "function" && (Dd(r, l, fe, o), me = r.memoizedState), (U = ha || Fv(r, l, U, o, W, me, T) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ws(n, r, l, o, d, c);
  }
  function ws(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xc(r, l, !1), za(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = xn(r, n.child, null, d), r.child = xn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && xc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), wd(n, r.containerInfo);
  }
  function Yv(n, r, l, o, c) {
    return Ol(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), be(gn, c & 1), n === null)
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
  function bs(n, r, l, o) {
    return o !== null && Gi(o), xn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = kd(Error(j(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(j(419)), o = kd(d, o, void 0), bs(n, r, m, o);
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
      return Wd(), o = kd(Error(j(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = hy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xr = Si(c.nextSibling), qr = r, dn = !0, La = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, Ti = n.id, xi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
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
    if (be(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Mc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Mc(n) === null) {
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
    if (n !== null && r.child !== n.child) throw Error(j(153));
    if (r.child !== null) {
      for (n = r.child, l = Fl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Fl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ol();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Nn(r.type) && Kn(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        be(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (be(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (be(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        be(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), be(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, l);
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
      n = r.stateNode, gu(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xl);
      }
      on(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (ct.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (ct.hasOwnProperty(U) ? (T != null && U === "onScroll" && Vt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
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
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return Zn(r), null;
      case 1:
        return Nn(r.type) && vo(), Zn(r), null;
      case 3:
        return o = r.stateNode, Su(), an(Wn), an(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Ou(La), La = null))), jn(n, r), Zn(r), null;
      case 5:
        Lc(r);
        var c = gu(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) $v(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(j(166));
            return Zn(r), null;
          }
          if (n = gu(wi.current), Dc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Vt("cancel", o), Vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Vt(rs[c], o);
                break;
              case "source":
                Vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Vt(
                  "error",
                  o
                ), Vt("load", o);
                break;
              case "details":
                Vt("toggle", o);
                break;
              case "input":
                Pn(o, d), Vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Vt("invalid", o);
                break;
              case "textarea":
                gr(o, d), Vt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : ct.hasOwnProperty(m) && E != null && m === "onScroll" && Vt("scroll", o);
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
                typeof d.onClick == "function" && (o.onclick = xl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[ls] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Xn(l, o), l) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Vt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Vt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt(
                    "error",
                    n
                  ), Vt("load", n), c = o;
                  break;
                case "details":
                  Vt("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = nr(n, o), Vt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = In(n, o), Vt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? en(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ct.hasOwnProperty(d) ? T != null && d === "onScroll" && Vt("scroll", n) : T != null && Ve(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + tt(o.value));
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
                  typeof c.onClick == "function" && (n.onclick = xl);
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
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(j(166));
          if (l = gu(ps.current), gu(wi.current), Dc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Zn(r), null;
      case 13:
        if (an(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Xr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ol(), r.flags |= 98560, d = !1;
          else if (d = Dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(j(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(j(317));
              d[Ei] = r;
            } else Ol(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else La !== null && (Ou(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Su(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return Sd(r.type._context), Zn(r), null;
      case 17:
        return Nn(r.type) && vo(), Zn(r), null;
      case 19:
        if (an(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return be(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ge() > To && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * Ge() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ge(), r.sibling = null, l = gn.current, be(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(j(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Nn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Su(), an(Wn), an(En), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (an(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(j(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return an(gn), null;
      case 4:
        return Su(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ks = !1, Tr = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      pn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      pn(n, r, o);
    }
  }
  var qv = !1;
  function Xv(n, r) {
    if (is = ba, n = ts(), dc(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, $ = 0, G = n, W = null;
          t: for (; ; ) {
            for (var fe; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (fe = G.firstChild) !== null; )
              W = G, G = fe;
            for (; ; ) {
              if (G === n) break t;
              if (W === l && ++U === c && (E = m), W === d && ++$ === o && (T = m), (fe = G.nextSibling) !== null) break;
              G = W, W = G.parentNode;
            }
            G = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (du = { focusedElem: n, selectionRange: l }, ba = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Ee = me.memoizedProps, Dn = me.memoizedState, D = r.stateNode, w = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ri(r.type, Ee), Dn);
              D.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(j(163));
        }
      } catch (Q) {
        pn(r, r.return, Q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return me = qv, qv = !1, me;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
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
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[ls], delete r[us], delete r[po], delete r[ly])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ki(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
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
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xl));
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
        Tr || Eo(l, r);
      case 6:
        var o = bn, c = Mr;
        bn = null, Nr(n, r, l), bn = o, Mr = c, bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(bn, l.stateNode));
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
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!Tr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
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
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new oy()), r.forEach(function(o) {
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
        if (bn === null) throw Error(j(160));
        Kv(d, m, c), bn = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        pn(c, r, U);
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
            Os(3, n, n.return), Ls(3, n);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
          try {
            Os(5, n, n.return);
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ee(c, "");
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Xn(E, m);
            var U = Xn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var $ = T[m], G = T[m + 1];
              $ === "style" ? en(c, G) : $ === "dangerouslySetInnerHTML" ? ci(c, G) : $ === "children" ? ee(c, G) : Ve(c, $, G, U);
            }
            switch (E) {
              case "input":
                Yr(c, d);
                break;
              case "textarea":
                Ya(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Rn(c, !!d.multiple, fe, !1) : W !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(j(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            pn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Ee) {
          pn(n, n.return, Ee);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Ge())), o & 4 && Jv(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (U = Tr) || $, ai(r, n), Tr = U) : ai(r, n), ea(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !$ && n.mode & 1) for (ve = n, $ = n.child; $ !== null; ) {
            for (G = ve = $; ve !== null; ) {
              switch (W = ve, fe = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, W, W.return);
                  break;
                case 1:
                  Eo(W, W.return);
                  var me = W.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Ee) {
                      pn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  Eo(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ns(G);
                    continue;
                  }
              }
              fe !== null ? (fe.return = W, ve = fe) : Ns(G);
            }
            $ = $.sibling;
          }
          e: for ($ = null, G = n; ; ) {
            if (G.tag === 5) {
              if ($ === null) {
                $ = G;
                try {
                  c = G.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Ee) {
                  pn(n, n.return, Ee);
                }
              }
            } else if (G.tag === 6) {
              if ($ === null) try {
                G.stateNode.nodeValue = U ? "" : G.memoizedProps;
              } catch (Ee) {
                pn(n, n.return, Ee);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              $ === G && ($ = null), G = G.return;
            }
            $ === G && ($ = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Jv(n);
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
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(j(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Ki(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ki(n);
            _i(n, E, m);
            break;
          default:
            throw Error(j(161));
        }
      } catch (T) {
        pn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    ve = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ks;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = ks;
          var U = Tr;
          if (ks = m, (Tr = T) && !U) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, ve = T) : Vd(c);
          for (; d !== null; ) ve = d, Hd(d), d = d.sibling;
          ve = c, ks = E, Tr = U;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && xd(r, d, o);
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
                xd(r, m, l);
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
                var U = r.alternate;
                if (U !== null) {
                  var $ = U.memoizedState;
                  if ($ !== null) {
                    var G = $.dehydrated;
                    G !== null && Ja(G);
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
              throw Error(j(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ns(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Vd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
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
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var cy = Math.ceil, Ul = it.ReactCurrentDispatcher, Du = it.ReactCurrentOwner, or = it.ReactCurrentBatchConfig, Ct = 0, Qn = null, Fn = null, sr = 0, ma = 0, Co = ka(0), _n = 0, zs = null, ki = 0, Ro = 0, af = 0, Us = null, ta = null, Pd = 0, To = 1 / 0, ya = null, xo = !1, ku = null, Al = null, lf = !1, Ji = null, As = 0, jl = 0, wo = null, js = -1, xr = 0;
  function Hn() {
    return Ct & 6 ? Ge() : js !== -1 ? js : js = Ge();
  }
  function Oi(n) {
    return n.mode & 1 ? Ct & 2 && sr !== 0 ? sr & -sr : uy.transition !== null ? (xr === 0 && (xr = Xu()), xr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < jl) throw jl = 0, wo = null, Error(j(185));
    Hi(n, l, o), (!(Ct & 2) || n !== Qn) && (n === Qn && (!(Ct & 2) && (Ro |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && Ct === 0 && !(r.mode & 1) && (To = Ge() + 500, ho && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    ru(n, r);
    var o = Ka(n, n === Qn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? bl(Bd.bind(null, n)) : wc(Bd.bind(null, n)), co(function() {
        !(Ct & 6) && Ri();
      }), l = null;
      else {
        switch (Ju(o)) {
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
            l = Qu;
            break;
          default:
            l = nu;
        }
        l = sh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, xr = 0, Ct & 6) throw Error(j(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Ka(n, n === Qn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = th();
      (Qn !== n || sr !== r) && (ya = null, To = Ge() + 500, Zi(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      gd(), Ul.current = d, Ct = c, Fn !== null ? r = 0 : (Qn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, Zi(n, 0), ii(n, o), na(n, Ge()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !fy(c) && (r = of(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, Zi(n, 0), ii(n, o), na(n, Ge()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(j(345));
          case 2:
            Mu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Pd + 500 - Ge(), 10 < r)) {
              if (Ka(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Mu.bind(null, n, ta, ya), r);
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
            if (o = c, o = Ge() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Mu.bind(null, n, ta, ya), o);
              break;
            }
            Mu(n, ta, ya);
            break;
          case 5:
            Mu(n, ta, ya);
            break;
          default:
            throw Error(j(329));
        }
      }
    }
    return na(n, Ge()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (Zi(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Ou(r)), n;
  }
  function Ou(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function fy(n) {
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
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Ct & 6) throw Error(j(327));
    bo();
    var r = Ka(n, 0);
    if (!(r & 1)) return na(n, Ge()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, Zi(n, 0), ii(n, r), na(n, Ge()), l;
    if (l === 6) throw Error(j(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, ta, ya), na(n, Ge()), null;
  }
  function Id(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (To = Ge() + 500, ho && Ri());
    }
  }
  function Lu(n) {
    Ji !== null && Ji.tag === 0 && !(Ct & 6) && bo();
    var r = Ct;
    Ct |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Ct = r, !(Ct & 6) && Ri();
    }
  }
  function Yd() {
    ma = Co.current, an(Co);
  }
  function Zi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Su(), an(Wn), an(En), De();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Su();
          break;
        case 13:
          an(gn);
          break;
        case 19:
          an(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      l = l.return;
    }
    if (Qn = n, Fn = n = Fl(n.current, null), sr = ma = r, _n = 0, zs = null, af = Ro = ki = 0, ta = Us = null, yu !== null) {
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
        if (gd(), st.current = wu, Nc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Gt = 0, Jn = Un = Nt = null, hs = !1, Eu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, $ = E, G = $.tag;
            if (!($.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var W = $.alternate;
              W ? ($.updateQueue = W.updateQueue, $.memoizedState = W.memoizedState, $.lanes = W.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var fe = Pv(m);
            if (fe !== null) {
              fe.flags &= -257, zl(fe, m, E, d, r), fe.mode & 1 && Md(d, U, r), r = fe, T = U;
              var me = r.updateQueue;
              if (me === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, U, r), Wd();
                break e;
              }
              T = Error(j(426));
            }
          } else if (dn && E.mode & 1) {
            var Dn = Pv(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), zl(Dn, m, E, d, r), Gi(bu(T, E));
              break e;
            }
          }
          d = T = bu(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Vv(d, T, r);
                Uv(d, D);
                break e;
              case 1:
                E = T;
                var w = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Al === null || !Al.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Q = Ld(d, E, r);
                  Uv(d, Q);
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
    return Ul.current = wu, n === null ? wu : n;
  }
  function Wd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Qn === null || !(ki & 268435455) && !(Ro & 268435455) || ii(Qn, sr);
  }
  function of(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = th();
    (Qn !== n || sr !== r) && (ya = null, Zi(n, r));
    do
      try {
        dy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (gd(), Ct = l, Ul.current = o, Fn !== null) throw Error(j(261));
    return Qn = null, sr = 0, _n;
  }
  function dy() {
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
        if (l = tf(l, r), l !== null) {
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
      or.transition = null, Lt = 1, py(n, r, l, o);
    } finally {
      or.transition = c, Lt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      bo();
    while (Ji !== null);
    if (Ct & 6) throw Error(j(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(j(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($f(n, d), n === Qn && (Fn = Qn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, sh(nu, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Ct;
      Ct |= 4, Du.current = null, Xv(n, l), Fd(l, n), lo(du), ba = !!is, du = is = null, n.current = l, sy(l), Ga(), Ct = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (Al = null), Wo(l.stateNode), na(n, Ge()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = ku, ku = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === wo ? jl++ : (jl = 0, wo = n) : jl = 0, Ri(), null;
  }
  function bo() {
    if (Ji !== null) {
      var n = Ju(As), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Ct & 6) throw Error(j(331));
          var c = Ct;
          for (Ct |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ve = U; ve !== null; ) {
                    var $ = ve;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, $, d);
                    }
                    var G = $.child;
                    if (G !== null) G.return = $, ve = G;
                    else for (; ve !== null; ) {
                      $ = ve;
                      var W = $.sibling, fe = $.return;
                      if (rf($), $ === U) {
                        ve = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = fe, ve = W;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Ee = me.child;
                  if (Ee !== null) {
                    me.child = null;
                    do {
                      var Dn = Ee.sibling;
                      Ee.sibling = null, Ee = Dn;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ve = D;
                break e;
              }
              ve = d.return;
            }
          }
          var w = n.current;
          for (ve = w; ve !== null; ) {
            m = ve;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, ve = M;
            else e: for (m = w; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ye) {
                pn(E, E.return, ye);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var Q = E.sibling;
              if (Q !== null) {
                Q.return = E.return, ve = Q;
                break e;
              }
              ve = E.return;
            }
          }
          if (Ct = c, Ri(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
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
    r = bu(l, r), r = Vv(n, r, 1), n = Ll(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
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
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Ge() - Pd ? Zi(n, 0) : af |= l), na(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = Hn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function hy(n) {
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
        throw Error(j(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Wn.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, _s(n, r, l);
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
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = Xc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && bc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Na(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = ri(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = Iv(null, r, o, n, l);
              break e;
            case 11:
              r = Zr(null, r, o, n, l);
              break e;
            case 14:
              r = _u(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(j(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Iv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(j(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bu(Error(j(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bu(Error(j(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (Xr = Si(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, La = null, l = ue(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return Av(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Nd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return wd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = xn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Zr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, be(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
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
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var $ = U.pending;
                      $ === null ? T.next = T : (T.next = $.next, $.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(j(341));
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
        return qe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Nn(o) ? (n = !0, Kn(r)) : n = !1, yn(r, l), Kc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return bi(n, r, l);
      case 22:
        return xs(n, r, l);
    }
    throw Error(j(156, r.tag));
  };
  function sh(n, r) {
    return sn(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === Dt) return 14;
    }
    return 2;
  }
  function Fl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") $d(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case je:
        return el(l.children, c, d, r);
      case ln:
        m = 8, c |= 8;
        break;
      case Ht:
        return n = Aa(12, l, r, c | 2), n.elementType = Ht, n.lanes = d, n;
      case ke:
        return n = Aa(13, l, r, c), n.elementType = ke, n.lanes = d, n;
      case jt:
        return n = Aa(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case Ce:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case _t:
            m = 11;
            break e;
          case Dt:
            m = 14;
            break e;
          case Ot:
            m = 16, o = null;
            break e;
        }
        throw Error(j(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ku(0), this.expirationTimes = Ku(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ku(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function gy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ft, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Qe(n) !== n || n.tag !== 1) throw Error(j(170));
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
      throw Error(j(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = qi(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
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
  function pf(n, r) {
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
  vf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(j(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        ff(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ie();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Wi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = df(T);
        E.call(U);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Wi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Vs(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = Sy(l, r, n, c, o);
    return df(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, Ge()), !(Ct & 6) && (To = Ge() + 500, Ri()));
        }
        break;
      case 13:
        Lu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = Hn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, $o = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = Hn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = Hn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, Ie = function() {
    return Lt;
  }, Zu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Yr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = mn(o);
              if (!c) throw Error(j(90));
              wr(o), Yr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Rn(n, !!l.multiple, r, !1);
    }
  }, Zl = Id, dl = Lu;
  var Ey = { usingClientEntryPoint: !1, Events: [_e, ti, mn, Fi, Jl, Id] }, Ps = { findFiberByHostInstance: pu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Ps.bundleType, version: Ps.version, rendererPackageName: Ps.rendererPackageName, rendererConfig: Ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ps.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      hl = Vl.inject(vh), Wr = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(j(200));
    return gy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(j(299));
    var l = !1, o = "", c = Nu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(j(188)) : (n = Object.keys(n).join(","), Error(j(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Lu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(j(200));
    return Vs(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(j(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Nu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(j(200));
    return Vs(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(j(40));
    return n._reactRootContainer ? (Lu(function() {
      Vs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Id, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(j(200));
    if (n == null || n._reactInternals === void 0) throw Error(j(38));
    return Vs(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function aD() {
  return aT || (aT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var L = $u, X = sT(), j = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gt = !1;
    function ct(e) {
      gt = e;
    }
    function ht(e) {
      if (!gt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("warn", e, a);
      }
    }
    function S(e) {
      if (!gt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("error", e, a);
      }
    }
    function vt(e, t, a) {
      {
        var i = j.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ne = 0, ce = 1, Je = 2, Z = 3, Se = 4, ie = 5, Be = 6, mt = 7, at = 8, Kt = 9, Ze = 10, Ve = 11, it = 12, Re = 13, ft = 14, je = 15, ln = 16, Ht = 17, Zt = 18, un = 19, _t = 21, ke = 22, jt = 23, Dt = 24, Ot = 25, Ce = !0, J = !1, Te = !1, re = !1, _ = !1, P = !0, Fe = !0, Ue = !0, lt = !0, et = /* @__PURE__ */ new Set(), Xe = {}, tt = {};
    function ut(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      Xe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Xe[e] = t;
      {
        var a = e.toLowerCase();
        tt[a] = e, e === "onDoubleClick" && (tt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
    }
    var On = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function Cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Bn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function Yr(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function si(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cn(e)), Pn(e);
    }
    function qn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    var In = 0, gr = 1, Ya = 2, Ln = 3, Sr = 4, sa = 5, Wa = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xe = new RegExp("^[" + ci + "][" + ee + "]*$"), nt = {}, Ft = {};
    function en(e) {
      return wr.call(Ft, e) ? !0 : wr.call(nt, e) ? !1 : xe.test(e) ? (Ft[e] = !0, !0) : (nt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === In)
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
      if (t === null || typeof t > "u" || on(e, t, a, i))
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
    function tn(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function It(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ya || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, ca = [
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
      Yt[e] = new It(
        e,
        In,
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
      Yt[t] = new It(
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
      Yt[e] = new It(
        e,
        Ya,
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
      Yt[e] = new It(
        e,
        Ya,
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
      Yt[e] = new It(
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
      Yt[e] = new It(
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
      Yt[e] = new It(
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
      Yt[e] = new It(
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
      Yt[e] = new It(
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
      Yt[t] = new It(
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
      Yt[t] = new It(
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
      Yt[t] = new It(
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
      Yt[e] = new It(
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
    Yt[Fi] = new It(
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
      Yt[e] = new It(
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
    var Jl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Zl = !1;
    function dl(e) {
      !Zl && Jl.test(e) && (Zl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
        if (!en(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Bn(a, t), u === "" + a ? a : u;
      }
    }
    function br(e, t, a, i) {
      var u = tn(t);
      if (!vn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (en(t)) {
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
          var b = u.type, x;
          b === Ln || b === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && dl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), $a = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Qe = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Qa = Symbol.iterator, Ga = "@@iterator";
    function Ge(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qa && e[Qa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var Ke = Object.assign, qa = 0, tu, nu, vl, Qu, hl, Wr, Wo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          tu = console.log, nu = console.info, vl = console.warn, Qu = console.error, hl = console.group, Wr = console.groupCollapsed, Wo = console.groupEnd;
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
    function uc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, e, {
              value: tu
            }),
            info: Ke({}, e, {
              value: nu
            }),
            warn: Ke({}, e, {
              value: vl
            }),
            error: Ke({}, e, {
              value: Qu
            }),
            group: Ke({}, e, {
              value: hl
            }),
            groupCollapsed: Ke({}, e, {
              value: Wr
            }),
            groupEnd: Ke({}, e, {
              value: Wo
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = j.ReactCurrentDispatcher, ml;
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
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Ka = new qu();
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
      s = Gu.current, Gu.current = null, lc();
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
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
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
        Xa = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", N = x ? fa(x) : "";
      return typeof e == "function" && Ka.set(e, N), N;
    }
    function yl(e, t, a) {
      return ru(e, !0);
    }
    function Xu(e, t, a) {
      return ru(e, !1);
    }
    function Ku(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ru(e, Ku(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case le:
          return fa("Suspense");
        case he:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Xu(e.render);
          case Qe:
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
        case ie:
          return fa(e.type);
        case ln:
          return fa("Lazy");
        case Re:
          return fa("Suspense");
        case un:
          return fa("SuspenseList");
        case ne:
        case Je:
        case je:
          return Xu(e.type);
        case Ve:
          return Xu(e.type.render);
        case ce:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
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
    function Ju(e) {
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
        case le:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case pi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case I:
            return Lt(e, e.render, "ForwardRef");
          case Qe:
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
    function $o(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case Kt:
          var i = a;
          return vi(i) + ".Consumer";
        case Ze:
          var u = a;
          return vi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case Ve:
          return $o(a, a.render, "ForwardRef");
        case mt:
          return "Fragment";
        case ie:
          return a;
        case Se:
          return "Portal";
        case Z:
          return "Root";
        case Be:
          return "Text";
        case ln:
          return wt(a);
        case at:
          return a === $a ? "StrictMode" : "Mode";
        case ke:
          return "Offscreen";
        case it:
          return "Profiler";
        case _t:
          return "Scope";
        case Re:
          return "Suspense";
        case un:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case ce:
        case ne:
        case Ht:
        case Je:
        case ft:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = j.ReactDebugCurrentFrame, ir = null, hi = !1;
    function kr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return Ie(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Vi(ir);
    }
    function cn() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function Wt(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function gl() {
      return ir;
    }
    function Yn(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function xa(e) {
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
    function Qo(e, t) {
      au[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
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
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wa(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
    function Ja(e) {
      Sl(e) || (e._valueTracker = wa(e));
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
    var eo = !1, to = !1, El = !1, lu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = Ke({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      Qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && br(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !lu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0), a._wrapperState.controlled && !i && !El && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
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
    function F(e, t) {
      var a = e;
      C(a, t), K(a, t);
    }
    function K(e, t) {
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
    var ae = !1, Ne = !1, pt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? L.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ne || (Ne = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var $t = Array.isArray;
    function rt(e) {
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
    function qo(e) {
      {
        Qo("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = rt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(xa(a)), b = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          b === null && !u[x].disabled && (b = u[x]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Xo(e, t) {
      return Ke({}, t, {
        value: void 0
      });
    }
    function uu(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ke({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Kf(e, t) {
      var a = e;
      Qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (rt(u)) {
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
        initialValue: xa(i)
      };
    }
    function nv(e, t) {
      var a = e, i = xa(t.value), u = xa(t.defaultValue);
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
    function qm(e, t) {
      nv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Jf = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Jf;
        default:
          return Bi;
      }
    }
    function td(e, t) {
      return e == null || e === Bi ? ed(t) : e === Zf && t === "foreignObject" ? Bi : e;
    }
    var av = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, iv = av(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $r = 1, Ii = 3, Mn = 8, Yi = 9, nd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ko = {
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
    }, Jo = {
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
    Object.keys(Jo).forEach(function(e) {
      uv.forEach(function(t) {
        Jo[lv(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function io(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var Xm = /^(?:webkit|moz|o)[A-Z]/, Km = /^-ms-/, fv = /-(.)/g, rd = /;\s*$/, gi = {}, ou = {}, dv = !1, Zo = !1, Jm = function(e) {
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
          Jm(e.replace(Km, "ms-"))
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
        e.indexOf("-") > -1 ? pv(e) : Xm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
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
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
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
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Ko[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ty(e, t) {
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
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ey(e[f]) ? "Removing" : "Updating", f, p);
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
    }, es = Ke({
      menuitem: !0
    }, ei), Sv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    var ts = {
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
    }, dc = {
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
    }, lo = {}, ny = new RegExp("^(aria)-[" + ee + "]*$"), uo = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function ld(e, t) {
      {
        if (wr.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ny.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
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
      Rl(e, t) || ns(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var su = function() {
    };
    {
      var lr = {}, sd = /^on./, vc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ee + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      su = function(e, t, a, i) {
        if (wr.call(lr, t) && lr[t])
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
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
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
        var v = tn(t), y = v !== null && v.type === In;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ln && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
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
    var cd = 1, hc = 2, _a = 4, fd = cd | hc | _a, cu = null;
    function ry(e) {
      cu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cu = e;
    }
    function ay() {
      cu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cu = null;
    }
    function rs(e) {
      return e === cu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var mc = null, fu = null, Vt = null;
    function yc(e) {
      var t = ko(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      fu ? Vt ? Vt.push(e) : Vt = [e] : fu = e;
    }
    function xv() {
      return fu !== null || Vt !== null;
    }
    function Sc() {
      if (fu) {
        var e = fu, t = Vt;
        if (fu = null, Vt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, Tl = !1;
    function wv() {
      var e = xv();
      e && (as(), Sc());
    }
    function bv(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return so(e, t, a);
      } finally {
        Tl = !1, wv();
      }
    }
    function iy(e, t, a) {
      so = e, as = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
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
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (On)
      try {
        var du = {};
        Object.defineProperty(du, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", du, du), window.removeEventListener("test", du, du);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, x = !0, N = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          pd.removeEventListener(V, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var oe = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, H(), a.apply(i, oe), x = !1;
        }
        var we, Tt = !1, yt = !1;
        function k(O) {
          if (we = O.error, Tt = !0, we === null && O.colno === 0 && O.lineno === 0 && (yt = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), pd.addEventListener(V, Le, !1), g.initEvent(V, !1, !1), pd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && x && (Tt ? yt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", k), !b)
          return H(), Cc.apply(this, arguments);
      };
    }
    var Dv = Rc, co = !1, Tc = null, fo = !1, Si = null, kv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function wl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, Dv.apply(kv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (wl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Si = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Si;
        throw fo = !1, Si = null, e;
      }
    }
    function Wi() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function ly(e) {
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
    ), Et = (
      /*                       */
      4
    ), Da = (
      /*                */
      16
    ), ka = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), be = (
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
    ), vo = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), xc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), ho = (
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
      Et | Wn | 0
    ), Dl = mn | Et | Da | ka | En | Gr | Nn, kl = Et | an | En | Nn, Qi = Qr | Da, zn = $i | wc | ho, Oa = j.ReactCurrentOwner;
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
      return t.tag === Z ? a : null;
    }
    function Ti(e) {
      if (e.tag === Re) {
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
    function xi(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function vu(e) {
      return da(e) === e;
    }
    function Lv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === ce) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ie(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function bc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
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
              return bc(s), e;
            if (v === u)
              return bc(s), t;
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
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = _c(e);
      return t !== null ? Xr(t) : null;
    }
    function Xr(e) {
      if (e.tag === ie || e.tag === Be)
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
      var t = _c(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === ie || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Se) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = X.unstable_scheduleCallback, Mv = X.unstable_cancelCallback, hd = X.unstable_shouldYield, md = X.unstable_requestPaint, $n = X.unstable_now, Dc = X.unstable_getCurrentPriorityLevel, ss = X.unstable_ImmediatePriority, Ol = X.unstable_UserBlockingPriority, Gi = X.unstable_NormalPriority, uy = X.unstable_LowPriority, hu = X.unstable_IdlePriority, kc = X.unstable_yieldValue, Nv = X.unstable_setDisableYieldValue, mu = null, xn = null, ue = null, pa = !1, Kr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Fe && (e = Ke({}, e, {
          getLaneLabelMap: yu,
          injectProfilingHooks: Ma
        })), mu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(mu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & be) === be;
          if (Ue) {
            var i;
            switch (t) {
              case Lr:
                i = ss;
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
            xn.onCommitFiberRoot(mu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof kc == "function" && (Nv(e), ct(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(mu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      ue = e;
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
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function Rd() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function va(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function ha() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function Td(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function xd() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function wi(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function ps() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function gu(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function wd() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function Su(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function Av() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Lc() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function gn(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Mc(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), st = (
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
    ), Un = Math.clz32 ? Math.clz32 : hs, Jn = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Nc | 0) | 0;
    }
    var Eu = 31, Y = (
      /*                        */
      0
    ), kt = (
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
    ), wn = (
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
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), jc = (
      /*                        */
      1024
    ), Fc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Vc = (
      /*                        */
      8192
    ), Pc = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), Ic = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), $c = (
      /*                             */
      33554432
    ), Qc = (
      /*                             */
      67108864
    ), bd = Tu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), xu = (
      /*                        */
      536870912
    ), Jr = (
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
        if (e & wn)
          return "Default";
        if (e & Xi)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Jt = -1, wu = Cu, Gc = Tu;
    function Cs(e) {
      switch (zl(e)) {
        case Ae:
          return Ae;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Xi:
          return Xi;
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return e & Nl;
        case Tu:
        case Wc:
        case gs:
        case $c:
        case Qc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case xu:
          return xu;
        case Jr:
          return Jr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qc(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = Cs(p);
        else {
          var v = f & s;
          v !== Y && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = Cs(y) : s !== Y && (i = Cs(s));
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
          g === wn && (b & Nl) !== Y
        )
          return t;
      }
      (i & ni) !== Y && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var N = e.entanglements, A = i & x; A > 0; ) {
          var H = An(A), oe = 1 << H;
          i |= N[H], A &= ~oe;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Jt; t > 0; ) {
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
        case wn:
        case Xi:
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return t + 5e3;
        case Tu:
        case Wc:
        case gs:
        case $c:
        case Qc:
          return Jt;
        case Ss:
        case Es:
        case xu:
        case Jr:
          return Jt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Jt;
      }
    }
    function Xc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Jt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function Kc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== Y ? t : t & Jr ? Jr : Y;
    }
    function Hv(e) {
      return (e & Ae) !== Y;
    }
    function Rs(e) {
      return (e & _d) !== Y;
    }
    function bu(e) {
      return (e & ys) === e;
    }
    function kd(e) {
      var t = Ae | ni | wn;
      return (e & t) === Y;
    }
    function Od(e) {
      return (e & Nl) === e;
    }
    function Jc(e, t) {
      var a = Ml | ni | Rr | wn;
      return (t & a) !== Y;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & Nl) !== Y;
    }
    function Md() {
      var e = wu;
      return wu <<= 1, (wu & Nl) === Y && (wu = Cu), e;
    }
    function Pv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === Y && (Gc = Tu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Ts(e) {
      return zl(e);
    }
    function An(e) {
      return 31 - Un(e);
    }
    function ur(e) {
      return An(e);
    }
    function Zr(e, t) {
      return (e & t) !== Y;
    }
    function _u(e, t) {
      return (e & t) === t;
    }
    function qe(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function Iv(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function ws(e) {
      for (var t = [], a = 0; a < Eu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Jt, i &= ~s;
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
        i[p] = Y, u[p] = Jt, s[p] = Jt, f &= ~v;
      }
    }
    function ef(e, t) {
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
        case wn:
          i = Rr;
          break;
        case Cu:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
        case Tu:
        case Wc:
        case gs:
        case $c:
        case Qc:
          i = Xi;
          break;
        case xu:
          i = Es;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function bs(e, t, a) {
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
    var Lr = Ae, bi = ni, Na = wn, za = xu, _s = kt;
    function Ua() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function $v(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ds(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = zl(e);
      return Zn(Lr, t) ? Zn(bi, t) ? Rs(t) ? Na : za : bi : Lr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ks;
    function Tr(e) {
      ks = e;
    }
    function oy(e) {
      ks(e);
    }
    var ve;
    function Eo(e) {
      ve = e;
    }
    var nf;
    function qv(e) {
      nf = e;
    }
    var Xv;
    function Os(e) {
      Xv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Ki = null, _i = null, Di = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Kv = [
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
    function Jv(e) {
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
          var p = ko(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function sy(e, t, a, i, u) {
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
          if (i === Re) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Zn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), ay();
        } else {
          var f = ko(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function cy() {
      rf = !1, Ki !== null && Ns(Ki) && (Ki = null), _i !== null && Ns(_i) && (_i = null), Di !== null && Ns(Di) && (Di = null), bn.forEach(Vd), Mr.forEach(Vd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, cy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Ul(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
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
    var or = j.ReactCurrentBatchConfig, Ct = !0;
    function Qn(e) {
      Ct = !!e;
    }
    function Fn() {
      return Ct;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case bi:
          u = Co;
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
    function Co(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        jn(bi), _n(e, t, a, i);
      } finally {
        jn(u), or.transition = s;
      }
    }
    function _n(e, t, a, i) {
      Ct && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        _y(e, t, i, ki, a), Fd(e, i);
        return;
      }
      if (sy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Fd(e, i), t & _a && Jv(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && oy(s);
          var f = Ro(e, t, a, i);
          if (f === null && _y(e, t, i, ki, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var ki = null;
    function Ro(e, t, a, i) {
      ki = null;
      var u = dd(i), s = Ys(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (tf(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return ki = s, null;
    }
    function af(e) {
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
          var t = Dc();
          switch (t) {
            case ss:
              return Lr;
            case Ol:
              return bi;
            case Gi:
            case uy:
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
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Pd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, xo = null, ku = null;
    function Al(e) {
      return ya = e, xo = As(), !0;
    }
    function lf() {
      ya = null, xo = null, ku = null;
    }
    function Ji() {
      if (ku)
        return ku;
      var e, t = xo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ku = u.slice(e, p), ku;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function js() {
      return !1;
    }
    function xr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = wo : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return Ke(t.prototype, {
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
    }, Oi = xr(Hn), zr = Ke({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), uf, Fs, Ou;
    function fy(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (uf = e.screenX - Ou.screenX, Fs = e.screenY - Ou.screenY) : (uf = 0, Fs = 0), Ou = e);
    }
    var ii = Ke({}, zr, {
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
        return "movementX" in e ? e.movementX : (fy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Bd = xr(ii), Id = Ke({}, ii, {
      dataTransfer: 0
    }), Lu = xr(Id), Yd = Ke({}, zr, {
      relatedTarget: 0
    }), Zi = xr(Yd), eh = Ke({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = xr(eh), Wd = Ke({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr(Wd), dy = Ke({}, Hn, {
      data: 0
    }), nh = xr(dy), rh = nh, ah = {
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
    function py(e) {
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
    var bo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return ih;
    }
    var vy = Ke({}, zr, {
      key: py,
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
    }), lh = xr(vy), hy = Ke({}, ii, {
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
    }), uh = xr(hy), oh = Ke({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), sh = xr(oh), my = Ke({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(my), $d = Ke({}, ii, {
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
    }), yy = xr($d), Fl = [9, 13, 27, 32], Hs = 229, el = On && "CompositionEvent" in window, Hl = null;
    On && "documentMode" in document && (Hl = document.documentMode);
    var Qd = On && "TextEvent" in window && !Hl, sf = On && (!el || Hl && Hl > 8 && Hl <= 11), ch = 32, cf = String.fromCharCode(ch);
    function gy() {
      ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ut("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ut("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function qd(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var Nu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (el ? s = ff(t) : Nu ? qd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !dh(i) && (!Nu && s === "onCompositionStart" ? Nu = Al(u) : s === "onCompositionEnd" && Nu && (f = Ji()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function Kd(e, t) {
      if (Nu) {
        if (e === "compositionend" || !el && qd(e, t)) {
          var a = Ji();
          return lf(), Nu = !1, a;
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
          return sf && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Qd ? s = vf(t, i) : s = Kd(t, i), !s)
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
      Xd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var Sy = {
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
    function Vs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sy[e.type] : t === "textarea";
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
    function Ey(e) {
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
      ut("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      oo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, dd(e)), bv(o, t);
    }
    function o(e) {
      kE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    On && (m = Ey("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function $(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function G(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function me(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function Dn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Vs(p) ? m ? v = me : (v = G, y = $) : W(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Ee(p);
    }
    function D() {
      Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
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
        var x, N;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, N = A ? Ys(A) : null, N !== null) {
            var H = da(N);
            (N !== H || N.tag !== ie && N.tag !== Be) && (N = null);
          }
        } else
          x = null, N = a;
        if (x !== N) {
          var oe = Bd, Le = "onMouseLeave", we = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (oe = uh, Le = "onPointerLeave", we = "onPointerEnter", Tt = "pointer");
          var yt = x == null ? g : Cf(x), k = N == null ? g : Cf(N), V = new oe(Le, Tt + "leave", x, i, u);
          V.target = yt, V.relatedTarget = k;
          var O = null, q = Ys(u);
          if (q === a) {
            var pe = new oe(we, Tt + "enter", N, i, u);
            pe.target = k, pe.relatedTarget = yt, O = pe;
          }
          kT(e, V, O, x, N);
        }
      }
    }
    function M(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Q = typeof Object.is == "function" ? Object.is : M;
    function ye(e, t) {
      if (Q(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !Q(e[s], t[s]))
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
    function Pe(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
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
        for (var x = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          b = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Pl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Pe(e, f), g = Pe(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === Ii;
    }
    function gE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? gE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fT(e) {
      return e && e.ownerDocument && gE(e.ownerDocument.documentElement, e);
    }
    function dT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function SE() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (dT(t))
          e = t.contentWindow;
        else
          return t;
        t = ba(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function pT() {
      var e = SE();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? hT(e) : null
      };
    }
    function vT(e) {
      var t = SE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fT(a)) {
        i !== null && Cy(a) && mT(a, i);
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
    function hT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function mT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Pl(e, t);
    }
    var yT = On && "documentMode" in document && document.documentMode <= 11;
    function gT() {
      ut("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ry = null, Jd = null, Ty = !1;
    function ST(e) {
      if ("selectionStart" in e && Cy(e))
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
    function ET(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function EE(e, t, a) {
      var i = ET(a);
      if (!(Ty || mf == null || mf !== ba(i))) {
        var u = ST(mf);
        if (!Jd || !ye(Jd, u)) {
          Jd = u;
          var s = Sh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function CT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Vs(p) || p.contentEditable === "true") && (mf = p, Ry = a, Jd = null);
          break;
        case "focusout":
          mf = null, Ry = null, Jd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, EE(e, i, u);
          break;
        case "selectionchange":
          if (yT)
            break;
        case "keydown":
        case "keyup":
          EE(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, xy = {}, CE = {};
    On && (CE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function yh(e) {
      if (xy[e])
        return xy[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in CE)
          return xy[e] = t[a];
      return e;
    }
    var RE = yh("animationend"), TE = yh("animationiteration"), xE = yh("animationstart"), wE = yh("transitionend"), bE = /* @__PURE__ */ new Map(), _E = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      bE.set(e, t), ut(t, [e]);
    }
    function RT() {
      for (var e = 0; e < _E.length; e++) {
        var t = _E[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(RE, "onAnimationEnd"), _o(TE, "onAnimationIteration"), _o(xE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(wE, "onTransitionEnd");
    }
    function TT(e, t, a, i, u, s, f) {
      var p = bE.get(t);
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
            y = "focus", v = Zi;
            break;
          case "focusout":
            y = "blur", v = Zi;
            break;
          case "beforeblur":
          case "afterblur":
            v = Zi;
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
          case RE:
          case TE:
          case xE:
            v = th;
            break;
          case wE:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = yy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
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
          t === "scroll", x = _T(a, p, i.type, g, b);
          if (x.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: x
            });
          }
        }
      }
    }
    RT(), D(), Ps(), gT(), gy();
    function xT(e, t, a, i, u, s, f) {
      TT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (w(e, t, a, i, u), Dn(e, t, a, i, u), CT(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function DE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function wT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, N = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          DE(e, N, x), i = b;
        }
    }
    function kE(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        wT(s, f, a);
      }
      ls();
    }
    function bT(e, t, a, i, u) {
      var s = dd(a), f = [];
      xT(f, e, i, a, s, t), kE(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = n1(t), u = OT(e);
      i.has(u) || (OE(t, e, hc, a), i.add(u));
    }
    function by(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), OE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[gh]) {
        e[gh] = !0, et.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, by("selectionchange", !1, t)));
      }
    }
    function OE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Pd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function LE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === Se) {
              var y = p.stateNode.containerInfo;
              if (LE(y, f))
                break;
              if (v === Se)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === Z || b === Se) {
                    var x = g.stateNode.containerInfo;
                    if (LE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Ys(y);
                if (N === null)
                  return;
                var A = N.tag;
                if (A === ie || A === Be) {
                  p = s = N;
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
        return bT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, N = b.tag;
        if (N === ie && x !== null && (g = x, p !== null)) {
          var A = xl(y, p);
          A != null && v.push(tp(y, A, g));
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
        if (p === ie && f !== null) {
          var v = f, y = xl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = xl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function ME(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ie && g !== null) {
          var x = g;
          if (u) {
            var N = xl(p, s);
            N != null && f.unshift(tp(p, N, x));
          } else if (!u) {
            var A = xl(p, s);
            A != null && f.push(tp(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && ME(e, t, i, s, !1), u !== null && a !== null && ME(e, a, u, s, !0);
    }
    function OT(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", Do = "suppressHydrationWarning", NE = "autoFocus", Bs = "children", Is = "style", Ch = "__html", Dy, Rh, rp, zE, Th, UE, AE;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      ud(e, t), pc(e, t), Tv(e, t, {
        registrationNameDependencies: Xe,
        possibleRegistrationNames: tt
      });
    }, UE = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = xh(a), u = xh(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, zE = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, AE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function xh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LT, `
`).replace(MT, "");
    }
    function wh(e, t, a, i) {
      var u = xh(t), s = xh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function jE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function NT() {
    }
    function bh(e) {
      e.onclick = NT;
    }
    function zT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), yv(t, f);
          else if (s === np) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Eh || s === Do || s === NE || (Xe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function UT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? yv(e, f) : s === np ? iv(e, f) : s === Bs ? ao(e, f) : br(e, s, f, i);
      }
    }
    function AT(e, t, a, i) {
      var u, s = jE(a), f, p = i;
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
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function jT(e, t) {
      return jE(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
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
          for (var f = 0; f < Zd.length; f++)
            Sn(Zd[f], e);
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
          Za(e, a), s = ro(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          uu(e, a), s = Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), s = Xf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), zT(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Bs || v === Eh || v === Do || v === NE || (Xe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === N || x == null && N == null))
          if (v === Is)
            if (x && Object.freeze(x), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && N[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === np) {
            var A = x ? x[Ch] : void 0, H = N ? N[Ch] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Eh || v === Do || (Xe.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Th(v, x), v === "onScroll" && Sn("scroll", e)), !s && N !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ty(g, p[Is]), (s = s || []).push(Is, g)), s;
    }
    function VT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (UT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function PT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
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
          for (var y = 0; y < Zd.length; y++)
            Sn(Zd[y], e);
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
          Za(e, a), Sn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          uu(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Kf(e, a), Sn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var x = g[b].name.toLowerCase();
          switch (x) {
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
      var N = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var H = a[A];
          if (A === Bs)
            typeof H == "string" ? e.textContent !== H && (a[Do] !== !0 && wh(e.textContent, H, s, f), N = [Bs, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Do] !== !0 && wh(e.textContent, H, s, f), N = [Bs, "" + H]);
          else if (Xe.hasOwnProperty(A))
            H != null && (typeof H != "function" && Th(A, H), A === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var oe = void 0, Le = tn(A);
            if (a[Do] !== !0) {
              if (!(A === Eh || A === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var we = e.innerHTML, Tt = H ? H[Ch] : void 0;
                  if (Tt != null) {
                    var yt = AE(e, Tt);
                    yt !== we && rp(A, we, yt);
                  }
                } else if (A === Is) {
                  if (v.delete(A), UE) {
                    var k = Zm(H);
                    oe = e.getAttribute("style"), k !== oe && rp(A, oe, k);
                  }
                } else if (p && !_)
                  v.delete(A.toLowerCase()), oe = eu(e, A, H), H !== oe && rp(A, oe, H);
                else if (!vn(A, Le, p) && !Xn(A, H, Le, p)) {
                  var V = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), oe = pl(e, A, H, Le);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var q = PT(A);
                      q !== null && q !== A && (V = !0, v.delete(q)), v.delete(A);
                    }
                    oe = eu(e, A, H);
                  }
                  var pe = _;
                  !pe && H !== oe && !V && rp(A, oe, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && zE(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return N;
    }
    function IT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (ja)
          return;
        ja = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (ja)
          return;
        ja = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || ja)
          return;
        ja = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YT(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          qm(e, a);
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
      var WT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], FE = [
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
      ], $T = FE.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], HE = {
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
        var a = Ke({}, e || HE), i = {
          tag: t
        };
        return FE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), WT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var GT = function(e, t) {
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
            return QT.indexOf(t) === -1;
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
      }, qT = function(e, t) {
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
      }, VE = {};
      ap = function(e, t, a) {
        a = a || HE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = GT(e, u) ? null : i, f = s ? null : qT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!VE[y]) {
            VE[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", Dh = "$", kh = "/$", lp = "$?", up = "$!", XT = "style", Ny = null, zy = null;
    function KT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Yi:
        case nd: {
          t = i === Yi ? "#document" : "#fragment";
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
    function JT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function vD(e) {
      return e;
    }
    function ZT(e) {
      Ny = Fn(), zy = pT();
      var t = null;
      return Qn(!1), t;
    }
    function ex(e) {
      vT(zy), Qn(Ny), Ny = null, zy = null;
    }
    function tx(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = AT(e, t, a, s);
      return cp(u, y), By(y, t), y;
    }
    function nx(e, t) {
      e.appendChild(t);
    }
    function rx(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
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
    function ax(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ix(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = jT(e, t);
      return cp(i, s), s;
    }
    function lx() {
      var e = window.event;
      return e === void 0 ? Na : af(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, ux = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, PE = typeof Promise == "function" ? Promise : void 0, ox = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(sx);
    } : Ay;
    function sx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cx(e, t, a, i) {
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
    function fx(e, t, a, i, u, s) {
      VT(e, t, a, i, u), By(e, u);
    }
    function BE(e) {
      ao(e, "");
    }
    function dx(e, t, a) {
      e.nodeValue = a;
    }
    function px(e, t) {
      e.appendChild(t);
    }
    function vx(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function hx(e, t, a) {
      e.insertBefore(t, a);
    }
    function mx(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yx(e, t) {
      e.removeChild(t);
    }
    function gx(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
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
    function Sx(e, t) {
      e.nodeType === Mn ? Fy(e.parentNode, t) : e.nodeType === $r && Fy(e, t), Du(e);
    }
    function Ex(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Cx(e) {
      e.nodeValue = "";
    }
    function Rx(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Tx(e, t) {
      e.nodeValue = t;
    }
    function xx(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function wx(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bx(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function _x(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function IE(e) {
      return e.data === lp;
    }
    function Hy(e) {
      return e.data === up;
    }
    function Dx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kx(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $r || t === Ii)
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
    function Ox(e) {
      return Oh(e.firstChild);
    }
    function Lx(e) {
      return Oh(e.firstChild);
    }
    function Mx(e) {
      return Oh(e.nextSibling);
    }
    function Nx(e, t, a, i, u, s, f) {
      cp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & st) !== De;
      return BT(e, t, a, p, i, y, f);
    }
    function zx(e, t, a, i) {
      return cp(a, e), a.mode & st, IT(e, t);
    }
    function Ux(e, t) {
      cp(t, e);
    }
    function Ax(e) {
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
    function YE(e) {
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
    function jx(e) {
      Du(e);
    }
    function Fx(e) {
      Du(e);
    }
    function Hx(e) {
      return e !== "head" && e !== "body";
    }
    function Vx(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function Px(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function Bx(e, t) {
      t.nodeType === $r ? ky(e, t) : t.nodeType === Mn || Oy(e, t);
    }
    function Ix(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? ky(a, t) : t.nodeType === Mn || Oy(a, t));
      }
    }
    function Yx(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === $r ? ky(a, i) : i.nodeType === Mn || Oy(a, i));
    }
    function Wx(e, t, a) {
      Ly(e, t);
    }
    function $x(e, t) {
      My(e, t);
    }
    function Qx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function Gx(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function qx(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ly(a, i);
    }
    function Xx(e, t, a, i, u) {
      (u || t[_h] !== !0) && My(a, i);
    }
    function Kx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Jx(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Vy = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Py = "__reactEvents$" + Sf, Zx = "__reactListeners$" + Sf, e1 = "__reactHandles$" + Sf;
    function t1(e) {
      delete e[Ef], delete e[Vy], delete e[Py], delete e[Zx], delete e[e1];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Lh(e, t) {
      t[sp] = e;
    }
    function WE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Ys(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = YE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = YE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === ie || t.tag === Be || t.tag === Re || t.tag === Z) ? t : null;
    }
    function Cf(e) {
      if (e.tag === ie || e.tag === Be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function n1(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, QE = j.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        QE.setExtraStackFrame(a);
      } else
        QE.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
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
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var Iy = [], zh;
    zh = [];
    var zu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (zu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[zu] && S("Unexpected Fiber popped."), e.current = Iy[zu], Iy[zu] = null, zh[zu] = null, zu--;
    }
    function aa(e, t, a) {
      zu++, Iy[zu] = e.current, zh[zu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Uu = Oo(li), Bl = Oo(!1), Wy = li;
    function Rf(e, t, a) {
      return a && Il(t) ? Wy : Uu.current;
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
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
          var p = Ie(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && GE(e, t, s), s;
      }
    }
    function Uh() {
      return Bl.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function $y(e) {
      ra(Bl, e), ra(Uu, e);
    }
    function qE(e, t, a) {
      {
        if (Uu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Uu, t, e), aa(Bl, a, e);
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ie(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ie(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return Ke({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Wy = Uu.current, aa(Uu, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = XE(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Uu, e), aa(Uu, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function r1(e) {
      {
        if (!vu(e) || e.tag !== ce)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case ce: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Fh = 1, Au = null, Qy = !1, Gy = !1;
    function JE(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function a1(e) {
      Qy = !0, JE(e);
    }
    function ZE() {
      Qy && Mo();
    }
    function Mo() {
      if (!Gy && Au !== null) {
        Gy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Au;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, Qy = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), vd(ss, Mo), s;
        } finally {
          jn(t), Gy = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Hh = null, Vh = 0, Li = [], Mi = 0, Ws = null, ju = 1, Fu = "";
    function i1(e) {
      return Qs(), (e.flags & Ci) !== _e;
    }
    function l1(e) {
      return Qs(), Vh;
    }
    function u1() {
      var e = Fu, t = ju, a = t & ~o1(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), xf[wf++] = Vh, xf[wf++] = Hh, Hh = e, Vh = t;
    }
    function e0(e, t, a) {
      Qs(), Li[Mi++] = ju, Li[Mi++] = Fu, Li[Mi++] = Ws, Ws = e;
      var i = ju, u = Fu, s = Ph(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ph(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, N = s - y, A = Ph(t) + N, H = p << N, oe = H | x, Le = b + u;
        ju = 1 << A | oe, Fu = Le;
      } else {
        var we = p << s, Tt = we | f, yt = u;
        ju = 1 << v | Tt, Fu = yt;
      }
    }
    function qy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), e0(e, a, i);
      }
    }
    function Ph(e) {
      return 32 - Un(e);
    }
    function o1(e) {
      return 1 << Ph(e) - 1;
    }
    function Xy(e) {
      for (; e === Hh; )
        Hh = xf[--wf], xf[wf] = null, Vh = xf[--wf], xf[wf] = null;
      for (; e === Ws; )
        Ws = Li[--Mi], Li[Mi] = null, Fu = Li[--Mi], Li[Mi] = null, ju = Li[--Mi], Li[Mi] = null;
    }
    function s1() {
      return Qs(), Ws !== null ? {
        id: ju,
        overflow: Fu
      } : null;
    }
    function c1(e, t) {
      Qs(), Li[Mi++] = ju, Li[Mi++] = Fu, Li[Mi++] = Ws, ju = t.id, Fu = t.overflow, Ws = e;
    }
    function Qs() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Gs = !1, No = null;
    function f1() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function t0() {
      Gs = !0;
    }
    function d1() {
      return Gs;
    }
    function p1(e) {
      var t = e.stateNode.containerInfo;
      return Ni = Lx(t), Ur = e, nl = !0, No = null, Gs = !1, !0;
    }
    function v1(e, t, a) {
      return Ni = Mx(t), Ur = e, nl = !0, No = null, Gs = !1, a !== null && c1(e, a), !0;
    }
    function n0(e, t) {
      switch (e.tag) {
        case Z: {
          Bx(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & st) !== De;
          Yx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && Ix(i.dehydrated, t);
          break;
        }
      }
    }
    function r0(e, t) {
      n0(e, t);
      var a = g_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, Wx(a, i);
                break;
              case Be:
                var u = t.pendingProps;
                $x(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & st) !== De;
                qx(
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
              case Be: {
                var b = t.pendingProps, x = (e.mode & st) !== De;
                Xx(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var N = e.memoizedState, A = N.dehydrated;
            if (A !== null) switch (t.tag) {
              case ie:
                var H = t.type;
                t.pendingProps, Qx(A, H);
                break;
              case Be:
                var oe = t.pendingProps;
                Gx(A, oe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function a0(e, t) {
      t.flags = t.flags & ~Gr | mn, Ky(e, t);
    }
    function i0(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = wx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = Ox(i), !0) : !1;
        }
        case Be: {
          var u = e.pendingProps, s = bx(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case Re: {
          var f = _x(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: s1(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = S_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & st) !== De && (e.flags & be) === _e;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          Jy(e) && (Ky(Ur, e), Zy()), a0(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!i0(e, t)) {
          Jy(e) && (Ky(Ur, e), Zy()), t = op(a);
          var i = Ur;
          if (!t || !i0(e, t)) {
            a0(Ur, e), nl = !1, Ur = e;
            return;
          }
          r0(i, a);
        }
      }
    }
    function h1(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Nx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function m1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & st) !== De;
              Vx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & st) !== De;
              Px(
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
    function y1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Ux(a, e);
    }
    function g1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ax(a);
    }
    function l0(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== Z && t.tag !== Re; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return l0(e), nl = !0, !1;
      if (e.tag !== Z && (e.tag !== ie || Hx(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Jy(e))
            u0(e), Zy();
          else
            for (; t; )
              r0(e, t), t = op(t);
      }
      return l0(e), e.tag === Re ? Ni = g1(e) : Ni = Ur ? op(e.stateNode) : null, !0;
    }
    function S1() {
      return nl && Ni !== null;
    }
    function u0(e) {
      for (var t = Ni; t; )
        n0(e, t), t = op(t);
    }
    function bf() {
      Ur = null, Ni = null, nl = !1, Gs = !1;
    }
    function o0() {
      No !== null && (tR(No), No = null);
    }
    function Ar() {
      return nl;
    }
    function tg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var E1 = j.ReactCurrentBatchConfig, C1 = null;
    function R1() {
      return E1.transition;
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
      var T1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Xs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(Ie(x) || "Component"), Xs.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(Ie(x) || "Component"), Xs.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(Ie(x) || "Component"), Xs.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(Ie(x) || "Component"), Xs.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(Ie(x) || "Component"), Xs.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(Ie(x) || "Component"), Xs.add(x.type);
        }), yp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          ht(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          ht(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = qs(u);
          ht(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), s0 = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = T1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!s0.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), s0.add(s.type);
            });
            var u = qs(i);
            try {
              Wt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              cn();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, c0 = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, c0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function x1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Gt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ce) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !x1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ie(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ce)
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
            var x = v.refs;
            b === null ? delete x[y] : x[y] = b;
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
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Ie(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function f0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function d0(e) {
      function t(k, V) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [V], k.flags |= Da) : O.push(V);
        }
      }
      function a(k, V) {
        if (!e)
          return null;
        for (var O = V; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, V) {
        for (var O = /* @__PURE__ */ new Map(), q = V; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, V) {
        var O = ic(k, V);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, V, O) {
        if (k.index = O, !e)
          return k.flags |= Ci, V;
        var q = k.alternate;
        if (q !== null) {
          var pe = q.index;
          return pe < V ? (k.flags |= mn, V) : pe;
        } else
          return k.flags |= mn, V;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= mn), k;
      }
      function p(k, V, O, q) {
        if (V === null || V.tag !== Be) {
          var pe = tE(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var se = u(V, O);
          return se.return = k, se;
        }
      }
      function v(k, V, O, q) {
        var pe = O.type;
        if (pe === fi)
          return g(k, V, O.props.children, q, O.key);
        if (V !== null && (V.elementType === pe || // Keep this check inline so it only runs on the false path:
        yR(V, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Ye && f0(pe) === V.type)) {
          var se = u(V, O.props);
          return se.ref = gp(k, V, O), se.return = k, se._debugSource = O._source, se._debugOwner = O._owner, se;
        }
        var He = eE(O, k.mode, q);
        return He.ref = gp(k, V, O), He.return = k, He;
      }
      function y(k, V, O, q) {
        if (V === null || V.tag !== Se || V.stateNode.containerInfo !== O.containerInfo || V.stateNode.implementation !== O.implementation) {
          var pe = nE(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var se = u(V, O.children || []);
          return se.return = k, se;
        }
      }
      function g(k, V, O, q, pe) {
        if (V === null || V.tag !== mt) {
          var se = Yo(O, k.mode, q, pe);
          return se.return = k, se;
        } else {
          var He = u(V, O);
          return He.return = k, He;
        }
      }
      function b(k, V, O) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var q = tE("" + V, k.mode, O);
          return q.return = k, q;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case _r: {
              var pe = eE(V, k.mode, O);
              return pe.ref = gp(k, null, V), pe.return = k, pe;
            }
            case rr: {
              var se = nE(V, k.mode, O);
              return se.return = k, se;
            }
            case Ye: {
              var He = V._payload, $e = V._init;
              return b(k, $e(He), O);
            }
          }
          if (rt(V) || Ge(V)) {
            var Xt = Yo(V, k.mode, O, null);
            return Xt.return = k, Xt;
          }
          Yh(k, V);
        }
        return typeof V == "function" && Wh(k), null;
      }
      function x(k, V, O, q) {
        var pe = V !== null ? V.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(k, V, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return O.key === pe ? v(k, V, O, q) : null;
            case rr:
              return O.key === pe ? y(k, V, O, q) : null;
            case Ye: {
              var se = O._payload, He = O._init;
              return x(k, V, He(se), q);
            }
          }
          if (rt(O) || Ge(O))
            return pe !== null ? null : g(k, V, O, q, null);
          Yh(k, O);
        }
        return typeof O == "function" && Wh(k), null;
      }
      function N(k, V, O, q, pe) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var se = k.get(O) || null;
          return p(V, se, "" + q, pe);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case _r: {
              var He = k.get(q.key === null ? O : q.key) || null;
              return v(V, He, q, pe);
            }
            case rr: {
              var $e = k.get(q.key === null ? O : q.key) || null;
              return y(V, $e, q, pe);
            }
            case Ye:
              var Xt = q._payload, Ut = q._init;
              return N(k, V, O, Ut(Xt), pe);
          }
          if (rt(q) || Ge(q)) {
            var Gn = k.get(O) || null;
            return g(V, Gn, q, pe, null);
          }
          Yh(V, q);
        }
        return typeof q == "function" && Wh(V), null;
      }
      function A(k, V, O) {
        {
          if (typeof k != "object" || k === null)
            return V;
          switch (k.$$typeof) {
            case _r:
            case rr:
              c0(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(q);
                break;
              }
              if (!V.has(q)) {
                V.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Ye:
              var pe = k._payload, se = k._init;
              A(se(pe), V, O);
              break;
          }
        }
        return V;
      }
      function H(k, V, O, q) {
        for (var pe = null, se = 0; se < O.length; se++) {
          var He = O[se];
          pe = A(He, pe, k);
        }
        for (var $e = null, Xt = null, Ut = V, Gn = 0, At = 0, Vn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Vn = Ut, Ut = null) : Vn = Ut.sibling;
          var la = x(k, Ut, O[At], q);
          if (la === null) {
            Ut === null && (Ut = Vn);
            break;
          }
          e && Ut && la.alternate === null && t(k, Ut), Gn = s(la, Gn, At), Xt === null ? $e = la : Xt.sibling = la, Xt = la, Ut = Vn;
        }
        if (At === O.length) {
          if (a(k, Ut), Ar()) {
            var Ir = At;
            $s(k, Ir);
          }
          return $e;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var oi = b(k, O[At], q);
            oi !== null && (Gn = s(oi, Gn, At), Xt === null ? $e = oi : Xt.sibling = oi, Xt = oi);
          }
          if (Ar()) {
            var Ca = At;
            $s(k, Ca);
          }
          return $e;
        }
        for (var Ra = i(k, Ut); At < O.length; At++) {
          var ua = N(Ra, k, At, O[At], q);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? At : ua.key), Gn = s(ua, Gn, At), Xt === null ? $e = ua : Xt.sibling = ua, Xt = ua);
        }
        if (e && Ra.forEach(function(Wf) {
          return t(k, Wf);
        }), Ar()) {
          var Wu = At;
          $s(k, Wu);
        }
        return $e;
      }
      function oe(k, V, O, q) {
        var pe = Ge(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === pe && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var se = pe.call(O);
          if (se)
            for (var He = null, $e = se.next(); !$e.done; $e = se.next()) {
              var Xt = $e.value;
              He = A(Xt, He, k);
            }
        }
        var Ut = pe.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Vn = V, la = 0, Ir = 0, oi = null, Ca = Ut.next(); Vn !== null && !Ca.done; Ir++, Ca = Ut.next()) {
          Vn.index > Ir ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var Ra = x(k, Vn, Ca.value, q);
          if (Ra === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && Ra.alternate === null && t(k, Vn), la = s(Ra, la, Ir), At === null ? Gn = Ra : At.sibling = Ra, At = Ra, Vn = oi;
        }
        if (Ca.done) {
          if (a(k, Vn), Ar()) {
            var ua = Ir;
            $s(k, ua);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ca.done; Ir++, Ca = Ut.next()) {
            var Wu = b(k, Ca.value, q);
            Wu !== null && (la = s(Wu, la, Ir), At === null ? Gn = Wu : At.sibling = Wu, At = Wu);
          }
          if (Ar()) {
            var Wf = Ir;
            $s(k, Wf);
          }
          return Gn;
        }
        for (var Xp = i(k, Vn); !Ca.done; Ir++, Ca = Ut.next()) {
          var Kl = N(Xp, k, Ir, Ca.value, q);
          Kl !== null && (e && Kl.alternate !== null && Xp.delete(Kl.key === null ? Ir : Kl.key), la = s(Kl, la, Ir), At === null ? Gn = Kl : At.sibling = Kl, At = Kl);
        }
        if (e && Xp.forEach(function(X_) {
          return t(k, X_);
        }), Ar()) {
          var q_ = Ir;
          $s(k, q_);
        }
        return Gn;
      }
      function Le(k, V, O, q) {
        if (V !== null && V.tag === Be) {
          a(k, V.sibling);
          var pe = u(V, O);
          return pe.return = k, pe;
        }
        a(k, V);
        var se = tE(O, k.mode, q);
        return se.return = k, se;
      }
      function we(k, V, O, q) {
        for (var pe = O.key, se = V; se !== null; ) {
          if (se.key === pe) {
            var He = O.type;
            if (He === fi) {
              if (se.tag === mt) {
                a(k, se.sibling);
                var $e = u(se, O.props.children);
                return $e.return = k, $e._debugSource = O._source, $e._debugOwner = O._owner, $e;
              }
            } else if (se.elementType === He || // Keep this check inline so it only runs on the false path:
            yR(se, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof He == "object" && He !== null && He.$$typeof === Ye && f0(He) === se.type) {
              a(k, se.sibling);
              var Xt = u(se, O.props);
              return Xt.ref = gp(k, se, O), Xt.return = k, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(k, se);
            break;
          } else
            t(k, se);
          se = se.sibling;
        }
        if (O.type === fi) {
          var Ut = Yo(O.props.children, k.mode, q, O.key);
          return Ut.return = k, Ut;
        } else {
          var Gn = eE(O, k.mode, q);
          return Gn.ref = gp(k, V, O), Gn.return = k, Gn;
        }
      }
      function Tt(k, V, O, q) {
        for (var pe = O.key, se = V; se !== null; ) {
          if (se.key === pe)
            if (se.tag === Se && se.stateNode.containerInfo === O.containerInfo && se.stateNode.implementation === O.implementation) {
              a(k, se.sibling);
              var He = u(se, O.children || []);
              return He.return = k, He;
            } else {
              a(k, se);
              break;
            }
          else
            t(k, se);
          se = se.sibling;
        }
        var $e = nE(O, k.mode, q);
        return $e.return = k, $e;
      }
      function yt(k, V, O, q) {
        var pe = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return f(we(k, V, O, q));
            case rr:
              return f(Tt(k, V, O, q));
            case Ye:
              var se = O._payload, He = O._init;
              return yt(k, V, He(se), q);
          }
          if (rt(O))
            return H(k, V, O, q);
          if (Ge(O))
            return oe(k, V, O, q);
          Yh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, V, "" + O, q)) : (typeof O == "function" && Wh(k), a(k, V));
      }
      return yt;
    }
    var _f = d0(!0), p0 = d0(!1);
    function w1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function b1(e, t) {
      for (var a = e.child; a !== null; )
        p_(a, t), a = a.sibling;
    }
    var ug = Oo(null), og;
    og = {};
    var $h = null, Df = null, sg = null, Qh = !1;
    function Gh() {
      $h = null, Df = null, sg = null, Qh = !1;
    }
    function v0() {
      Qh = !0;
    }
    function h0() {
      Qh = !1;
    }
    function m0(e, t, a) {
      aa(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ra(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (_u(i.childLanes, t) ? u !== null && !_u(u.childLanes, t) && (u.childLanes = qe(u.childLanes, t)) : (i.childLanes = qe(i.childLanes, t), u !== null && (u.childLanes = qe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _1(e, t, a) {
      D1(e, t, a);
    }
    function D1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ce) {
                var p = Ts(a), v = Hu(Jt, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = qe(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = qe(x.lanes, a)), fg(i.return, a, e), s.lanes = qe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ze)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = qe(N.lanes, a);
          var A = N.alternate;
          A !== null && (A.lanes = qe(A.lanes, a)), fg(N, a, e), u = i.sibling;
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
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function kf(e, t) {
      $h = e, Df = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function tr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Df === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Df = a, $h.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Df = Df.next = a;
      }
      return t;
    }
    var Ks = null;
    function dg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function k1() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
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
        Ks = null;
      }
    }
    function y0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function O1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function L1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Fa(e, t) {
      return qh(e, t);
    }
    var M1 = qh;
    function qh(e, t) {
      e.lanes = qe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = qe(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== _e && pR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = qe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = qe(a.childLanes, t) : (u.flags & (mn | Gr)) !== _e && pR(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var g0 = 0, S0 = 1, Xh = 2, pg = 3, Kh = !1, vg, Jh;
    vg = !1, Jh = null;
    function hg(e) {
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
    function E0(e, t) {
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
        tag: g0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), Ob()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, M1(e, a);
      } else
        return L1(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = qe(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function mg(e, t) {
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
    function N1(e, t, a, i, u, s) {
      switch (a.tag) {
        case S0: {
          var f = a.payload;
          if (typeof f == "function") {
            v0();
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
              h0();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~Kn | be;
        case g0: {
          var v = a.payload, y;
          if (typeof v == "function") {
            v0(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              h0();
            }
          } else
            y = v;
          return y == null ? i : Ke({}, i, y);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, x = b.lastBaseUpdate;
          x !== f && (x === null ? b.firstBaseUpdate = y : x.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, A = Y, H = null, oe = null, Le = null, we = s;
        do {
          var Tt = we.lane, yt = we.eventTime;
          if (_u(i, Tt)) {
            if (Le !== null) {
              var V = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Le = Le.next = V;
            }
            N = N1(e, u, we, N, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== kt) {
              e.flags |= an;
              var q = u.effects;
              q === null ? u.effects = [we] : q.push(we);
            }
          } else {
            var k = {
              eventTime: yt,
              lane: Tt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Le === null ? (oe = Le = k, H = N) : Le = Le.next = k, A = qe(A, Tt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, se = pe.next;
            pe.next = null, we = se, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (H = N), u.baseState = H, u.firstBaseUpdate = oe, u.lastBaseUpdate = Le;
        var He = u.shared.interleaved;
        if (He !== null) {
          var $e = He;
          do
            A = qe(A, $e.lane), $e = $e.next;
          while ($e !== He);
        } else s === null && (u.shared.lanes = Y);
        Wp(A), e.lanes = A, e.memoizedState = N;
      }
      Jh = null;
    }
    function z1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function C0() {
      Kh = !1;
    }
    function tm() {
      return Kh;
    }
    function R0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, z1(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), nm = Oo(Sp);
    function rm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function T0() {
      var e = rm(nm.current);
      return e;
    }
    function yg(e, t) {
      aa(nm, t, e), aa(Ep, e, e), aa(Uo, Sp, e);
      var a = KT(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Of(e) {
      ra(Uo, e), ra(Ep, e), ra(nm, e);
    }
    function gg() {
      var e = rm(Uo.current);
      return e;
    }
    function x0(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = JT(t, e.type);
      t !== a && (aa(Ep, e, e), aa(Uo, a, e));
    }
    function Sg(e) {
      Ep.current === e && (ra(Uo, e), ra(Ep, e));
    }
    var U1 = 0, w0 = 1, b0 = 1, Cp = 2, al = Oo(U1);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & w0;
    }
    function Cg(e, t) {
      return e & w0 | t;
    }
    function A1(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(al, t, e);
    }
    function Mf(e) {
      ra(al, e);
    }
    function j1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || IE(i) || Hy(i))
              return t;
          }
        } else if (t.tag === un && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & be) !== _e;
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
    ), Yl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function F1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = j.ReactCurrentDispatcher, Rp = j.ReactCurrentBatchConfig, xg, Nf;
    xg = /* @__PURE__ */ new Set();
    var Js = Y, qt = null, dr = null, pr = null, im = !1, Tp = !1, xp = 0, H1 = 0, V1 = 25, B = null, zi = null, jo = -1, wg = !1;
    function Pt() {
      {
        var e = B;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function te() {
      {
        var e = B;
        zi !== null && (jo++, zi[jo] !== e && P1(e));
      }
    }
    function zf(e) {
      e != null && !rt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function P1(e) {
      {
        var t = Ie(qt);
        if (!xg.has(t) && (xg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = zi[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function bg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, qt = t, zi = e !== null ? e._debugHookTypes : null, jo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? de.current = G0 : zi !== null ? de.current = Q0 : de.current = $0;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, xp = 0, p >= V1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, de.current = q0, f = a(i, u);
        } while (Tp);
      }
      de.current = gm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Js = Y, qt = null, dr = null, pr = null, B = null, zi = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & st) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function _0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function D0() {
      if (de.current = gm, im) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Js = Y, qt = null, dr = null, pr = null, zi = null, jo = -1, B = null, P0 = !1, Tp = !1, xp = 0;
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
    function k0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
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
      var f = s.dispatch = W1.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
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
        var g = f.next, b = s.baseState, x = null, N = null, A = null, H = g;
        do {
          var oe = H.lane;
          if (_u(Js, oe)) {
            if (A !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = we;
            }
            if (H.hasEagerState)
              b = H.eagerState;
            else {
              var Tt = H.action;
              b = e(b, Tt);
            }
          } else {
            var Le = {
              lane: oe,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (N = A = Le, x = b) : A = A.next = Le, qt.lanes = qe(qt.lanes, oe), Wp(oe);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? x = b : A.next = N, Q(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = x, i.baseQueue = A, u.lastRenderedState = b;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var k = yt;
        do {
          var V = k.lane;
          qt.lanes = qe(qt.lanes, V), Wp(V), k = k.next;
        } while (k !== yt);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
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
        Q(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function hD(e, t, a) {
    }
    function mD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = qt, u = Wl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          Q(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || O0(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(M0.bind(null, i, y, e), [e]), i.flags |= Qr, wp(cr | jr, L0.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = qt, u = Ui(), s = t();
      if (!Nf) {
        var f = t();
        Q(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !Q(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(M0.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Qr, wp(cr | jr, L0.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || O0(i, t, s);
      }
      return s;
    }
    function O0(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = k0(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function L0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, N0(t) && z0(e);
    }
    function M0(e, t, a) {
      var i = function() {
        N0(t) && z0(e);
      };
      return a(i);
    }
    function N0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Q(a, i);
      } catch {
        return !0;
      }
    }
    function z0(e) {
      var t = Fa(e, Ae);
      t !== null && yr(t, e, Ae, Jt);
    }
    function um(e) {
      var t = Wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $1.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return kg(_g);
    }
    function Ng(e) {
      return Og(_g);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = k0(), qt.updateQueue = s, s.lastEffect = u.next = u;
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
    function zg(e) {
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
      qt.flags |= e, u.memoizedState = wp(cr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = wp(cr | t, a, f, s);
    }
    function cm(e, t) {
      return (qt.mode & Nt) !== De ? bp(Ri | Qr | wc, jr, e, t) : bp(Qr | wc, jr, e, t);
    }
    function _p(e, t) {
      return sm(Qr, jr, e, t);
    }
    function Ug(e, t) {
      return bp(Et, Yl, e, t);
    }
    function fm(e, t) {
      return sm(Et, Yl, e, t);
    }
    function Ag(e, t) {
      var a = Et;
      return a |= $i, (qt.mode & Nt) !== De && (a |= bl), bp(a, fr, e, t);
    }
    function dm(e, t) {
      return sm(Et, fr, e, t);
    }
    function U0(e, t) {
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
    function jg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= $i, (qt.mode & Nt) !== De && (u |= bl), bp(u, fr, U0.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(Et, fr, U0.bind(null, t, e), i);
    }
    function B1(e, t) {
    }
    var vm = B1;
    function Fg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = Wl();
      return t.memoizedState = e, e;
    }
    function A0(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return F0(t, i, e);
    }
    function j0(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return F0(t, a, e);
    }
    function F0(e, t, a) {
      var i = !kd(Js);
      if (i) {
        if (!Q(a, t)) {
          var u = Md();
          qt.lanes = qe(qt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function I1(e, t, a) {
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
          f > 10 && ht("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = um(!1), t = e[0], a = e[1], i = I1.bind(null, a), u = Wl();
      return u.memoizedState = i, [t, i];
    }
    function H0() {
      var e = Mg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function V0() {
      var e = Ng(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var P0 = !1;
    function Y1() {
      return P0;
    }
    function Bg() {
      var e = Wl(), t = jm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = u1();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = H1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function W1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (B0(e))
        I0(t, u);
      else {
        var s = y0(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), Y0(s, t, i);
        }
      }
      W0(e, i);
    }
    function $1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (B0(e))
        I0(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Q(y, v)) {
                O1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = y0(e, t, u, i);
        if (g !== null) {
          var b = Ea();
          yr(g, e, i, b), Y0(g, t, i);
        }
      }
      W0(e, i);
    }
    function B0(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function I0(e, t) {
      Tp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Y0(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = qe(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function W0(e, t, a) {
      vs(e, t);
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
      unstable_isNewReconciler: J
    }, $0 = null, Q0 = null, G0 = null, q0 = null, $l = null, il = null, Sm = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Pt(), zf(t), Fg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Pt(), zf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Pt(), zf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Pt(), zf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Pt(), zf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Pt(), zf(t);
          var a = de.current;
          de.current = $l;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Pt();
          var i = de.current;
          de.current = $l;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Pt(), zg(e);
        },
        useState: function(e) {
          B = "useState", Pt();
          var t = de.current;
          de.current = $l;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Pt(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", Pt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Pt(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", Pt(), Bg();
        },
        unstable_isNewReconciler: J
      }, Q0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), Fg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = $l;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = $l;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), zg(e);
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = $l;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", te(), Bg();
        },
        unstable_isNewReconciler: J
      }, G0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = il;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), om();
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = il;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), A0(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), H0();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", te(), ym();
        },
        unstable_isNewReconciler: J
      }, q0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = Sm;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), om();
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = Sm;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), j0(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), V0();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", te(), ym();
        },
        unstable_isNewReconciler: J
      }, $l = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), Pt(), Fg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), Pt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), Pt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), Pt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), Pt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), Pt();
          var a = de.current;
          de.current = $l;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), Pt();
          var i = de.current;
          de.current = $l;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), Pt(), zg(e);
        },
        useState: function(e) {
          B = "useState", We(), Pt();
          var t = de.current;
          de.current = $l;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), Pt(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), Pt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), Pt(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", We(), Pt(), Bg();
        },
        unstable_isNewReconciler: J
      }, il = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), te();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), te();
          var i = de.current;
          de.current = il;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), te(), om();
        },
        useState: function(e) {
          B = "useState", We(), te();
          var t = de.current;
          de.current = il;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), te(), A0(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), te(), H0();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", We(), te(), ym();
        },
        unstable_isNewReconciler: J
      }, Sm = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), te(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), te();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), te();
          var i = de.current;
          de.current = il;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), te(), om();
        },
        useState: function(e) {
          B = "useState", We(), te();
          var t = de.current;
          de.current = il;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), te(), j0(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), te(), V0();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", We(), te(), ym();
        },
        unstable_isNewReconciler: J
      };
    }
    var Fo = X.unstable_now, X0 = 0, Em = -1, Dp = -1, Cm = -1, Yg = !1, Rm = !1;
    function K0() {
      return Yg;
    }
    function Q1() {
      Rm = !0;
    }
    function G1() {
      Yg = !1, Rm = !1;
    }
    function q1() {
      Yg = Rm, Rm = !1;
    }
    function J0() {
      return X0;
    }
    function Z0() {
      X0 = Fo();
    }
    function Wg(e) {
      Dp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function eC(e) {
      Dp = -1;
    }
    function Tm(e, t) {
      if (Dp >= 0) {
        var a = Fo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Ql(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case it:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (Cm >= 0) {
        var t = Fo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case it:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      Em = Fo();
    }
    function Qg() {
      Cm = Fo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = Ke({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Jg, Zg, eS, tC, xm, tS, nS, rS, kp;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var nC = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          nC.has(a) || (nC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, tC = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
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
        tC(t, s);
      }
      var f = s == null ? u : Ke({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Hu(u, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Hu(u, s);
        f.tag = S0, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Hu(i, u);
        s.tag = Xh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), Zh(f, a, u)), Mc(a, u);
      }
    };
    function rC(e, t, a, i, u, s, f) {
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
    function X1(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Gt) === De && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || rt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function aC(e, t) {
      t.updater = iS, e.stateNode = t, pu(t, e), t._reactInternalInstance = qg;
    }
    function iC(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : li;
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
      aC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          Kg.has(x) || (Kg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), N !== null || A !== null || H !== null) {
            var oe = wt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(oe) || (Zg.add(oe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, oe, Le, N !== null ? `
  ` + N : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && GE(e, u, s), g;
    }
    function K1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function lC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      X1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Gt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (K1(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= $i, (e.mode & Nt) !== De && (y |= bl), e.flags |= y;
      }
    }
    function J1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && lC(e, u, a, v), C0();
      var x = e.memoizedState, N = u.state = x;
      if (em(e, a, u, i), N = e.memoizedState, s === a && x === N && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var A = Et;
          A |= $i, (e.mode & Nt) !== De && (A |= bl), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), N = e.memoizedState);
      var H = tm() || rC(e, t, s, a, x, N, v);
      if (H) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var oe = Et;
          oe |= $i, (e.mode & Nt) !== De && (oe |= bl), e.flags |= oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Et;
          Le |= $i, (e.mode & Nt) !== De && (Le |= bl), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, H;
    }
    function Z1(e, t, a, i, u) {
      var s = t.stateNode;
      E0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var x = Rf(t, a, !0);
        b = Tf(t, x);
      }
      var N = a.getDerivedStateFromProps, A = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && lC(t, s, i, b), C0();
      var H = t.memoizedState, oe = s.state = H;
      if (em(t, i, s, u), oe = t.memoizedState, f === v && H === oe && !Uh() && !tm() && !Te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof N == "function" && (aS(t, a, N, i), oe = t.memoizedState);
      var Le = tm() || rC(t, a, p, i, H, oe, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return Le ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, oe, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, oe, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = oe), s.props = i, s.state = oe, s.context = b, Le;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ew(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = ew(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ce)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ie(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var tw = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i = Hu(Jt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qb(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Hu(Jt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          gR(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gR(e), oS(e, t), typeof u != "function" && Wb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Gb.bind(null, e, t, a);
        Kr && $p(e, a), t.then(s, s);
      }
    }
    function nw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rw(e, t) {
      var a = e.tag;
      if ((e.mode & st) === De && (a === ne || a === Ve || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === Re && j1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & st) === De) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= be, a.flags |= xc, a.flags &= -52805, a.tag === ce) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Hu(Jt, Ae);
              f.tag = Xh, zo(a, f, Ae);
            }
          }
          a.lanes = qe(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function aw(e, t, a, i, u) {
      if (a.flags |= os, Kr && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rw(a), Ar() && a.mode & st && t0();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~Cr, cC(f, t, a, e, u), f.mode & st && oC(e, s, u), nw(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            oC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & st) {
        t0();
        var v = sC(t);
        if (v !== null) {
          (v.flags & Kn) === _e && (v.flags |= Cr), cC(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), jb(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= Kn;
            var b = Ts(u);
            y.lanes = qe(y.lanes, b);
            var x = uC(y, g, b);
            mg(y, x);
            return;
          }
          case ce:
            var N = i, A = y.type, H = y.stateNode;
            if ((y.flags & be) === _e && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !sR(H))) {
              y.flags |= Kn;
              var oe = Ts(u);
              y.lanes = qe(y.lanes, oe);
              var Le = sS(y, N, oe);
              mg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function iw() {
      return null;
    }
    var Op = j.ReactCurrentOwner, ul = !1, cS, Lp, fS, dS, pS, ec, vS, wm, Mp;
    cS = {}, Lp = {}, fS = {}, dS = {}, pS = {}, ec = !1, vS = {}, wm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = p0(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function lw(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
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
      kf(t, u), va(t);
      {
        if (Op.current = t, Yn(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ul ? (_0(e, t, u), Vu(e, t, u)) : (Ar() && y && qy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (f_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = je, t.type = f, yS(t, s), pC(e, t, f, i, u);
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
      var x = e.child, N = TS(e, u);
      if (!N) {
        var A = x.memoizedProps, H = a.compare;
        if (H = H !== null ? H : ye, H(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var oe = ic(x, i);
      return oe.ref = t.ref, oe.return = t, t.child = oe, oe;
    }
    function pC(e, t, a, i, u) {
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
          if (ul = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & xc) !== _e && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || re)
        if ((t.mode & st) === De) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (Zr(a, Jr)) {
          var b = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var x = s !== null ? s.baseLanes : a;
          Fm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = qe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = qe(s.baseLanes, a), t.memoizedState = null) : N = a, Fm(t, N);
      }
      return ga(e, t, u, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function sw(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function hS(e, t, a, i, u) {
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
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      kf(t, u), va(t);
      {
        if (Op.current = t, Yn(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Gt) {
          yn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            yn(!1);
          }
        }
        Yn(!1);
      }
      return ha(), e !== null && !ul ? (_0(e, t, u), Vu(e, t, u)) : (Ar() && y && qy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (b_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= be, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = qe(t.lanes, g);
            var b = sS(t, Zs(y, t), g);
            mg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && tl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var N;
      Il(a) ? (N = !0, jh(t)) : N = !1, kf(t, u);
      var A = t.stateNode, H;
      A === null ? (_m(e, t), iC(t, a, i), lS(t, a, i, u), H = !0) : e === null ? H = J1(t, a, i, u) : H = Z1(e, t, a, i, u);
      var oe = mS(e, t, a, H, N, u);
      {
        var Le = t.stateNode;
        H && Le.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), ec = !0);
      }
      return oe;
    }
    function mS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & be) !== _e;
      if (!i && !f)
        return u && KE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, eC();
      else {
        va(t);
        {
          if (Yn(!0), v = p.render(), t.mode & Gt) {
            yn(!0);
            try {
              p.render();
            } finally {
              yn(!1);
            }
          }
          Yn(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? lw(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && KE(t, a, !0), t.child;
    }
    function yC(e) {
      var t = e.stateNode;
      t.pendingContext ? qE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qE(e, t.context, !1), yg(e, t.containerInfo);
    }
    function cw(e, t, a) {
      if (yC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      E0(e, t), em(t, i, null, a);
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
          return gC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, b);
        } else {
          p1(t);
          var x = p0(t, null, p, a);
          t.child = x;
          for (var N = x; N; )
            N.flags = N.flags & ~mn | Gr, N = N.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return bf(), tg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function fw(e, t, a) {
      x0(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= ka), hC(e, t), ga(e, t, f, a), t.child;
    }
    function dw(e, t) {
      return e === null && eg(t), null;
    }
    function pw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = d_(v), g = ll(v, u), b;
      switch (y) {
        case ne:
          return yS(t, v), t.type = v = Yf(v), b = hS(null, t, v, g, i), b;
        case ce:
          return t.type = v = QS(v), b = mC(null, t, v, g, i), b;
        case Ve:
          return t.type = v = GS(v), b = fC(null, t, v, g, i), b;
        case ft: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && tl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return b = dC(
            null,
            t,
            v,
            ll(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function vw(e, t, a, i, u) {
      _m(e, t), t.tag = ce;
      var s;
      return Il(a) ? (s = !0, jh(t)) : s = !1, kf(t, u), iC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function hw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      kf(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Gt && rl.recordLegacyContextWarning(t, null), Yn(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), Yn(!1);
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
        t.tag = ce, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Il(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), aC(t, p), lS(t, a, u, i), mS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ne, t.mode & Gt) {
          yn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            yn(!1);
          }
        }
        return Ar() && v && qy(t), ga(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: iw(),
        transitions: null
      };
    }
    function mw(e, t) {
      var a = null;
      return {
        baseLanes: qe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Cp);
    }
    function gw(e, t) {
      return xs(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      __(t) && (t.flags |= be);
      var u = al.current, s = !1, f = (t.flags & be) !== _e;
      if (f || yw(u, e) ? (s = !0, t.flags &= ~be) : (e === null || e.memoizedState !== null) && (u = A1(u, b0)), u = Lf(u), Ao(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Sw(t, y, g, a), x = t.child;
          return x.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return ES(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var A = N.dehydrated;
          if (A !== null)
            return xw(e, t, f, i, A, N, a);
        }
        if (s) {
          var H = i.fallback, oe = i.children, Le = Cw(e, t, oe, H, a), we = t.child, Tt = e.child.memoizedState;
          return we.memoizedState = Tt === null ? SS(a) : mw(Tt, a), we.childLanes = gw(e, a), t.memoizedState = gS, Le;
        } else {
          var yt = i.children, k = Ew(e, t, yt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Sw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & st) === De && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = CS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return ER(e, t, Y, null);
    }
    function EC(e, t) {
      return ic(e, t);
    }
    function Ew(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & st) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & st) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        y = EC(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Yo(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && tg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Rw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & st) !== De && _f(t, e.child, null, u), v;
    }
    function Tw(e, t, a) {
      return (e.mode & st) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Hy(t) ? e.lanes = Rr : e.lanes = Jr, null;
    }
    function xw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= be, null;
          var V = i.children, O = i.fallback, q = Rw(e, t, V, O, f), pe = t.child;
          return pe.memoizedState = SS(f), t.memoizedState = gS, q;
        }
      else {
        if (f1(), (t.mode & st) === De)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = Dx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = uS(b, p, y);
          return bm(e, t, f, x);
        }
        var N = Zr(f, e.childLanes);
        if (ul || N) {
          var A = jm();
          if (A !== null) {
            var H = Ud(A, f);
            if (H !== kt && H !== s.retryLane) {
              s.retryLane = H;
              var oe = Jt;
              Fa(e, H), yr(A, e, H, oe);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Le);
        } else if (IE(u)) {
          t.flags |= be, t.child = e.child;
          var we = qb.bind(null, e);
          return kx(u, we), null;
        } else {
          v1(t, u, s.treeContext);
          var Tt = i.children, yt = ES(t, Tt);
          return yt.flags |= Gr, yt;
        }
      }
    }
    function CC(e, t, a) {
      e.lanes = qe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = qe(i.lanes, t)), fg(e.return, t, a);
    }
    function ww(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && CC(i, a, e);
        } else if (i.tag === un)
          CC(i, a, e);
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
    function bw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _w(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
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
    function Dw(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RC(e, t) {
      {
        var a = rt(e), i = !a && typeof Ge(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (rt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!RC(e[a], a))
              return;
        } else {
          var i = Ge(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!RC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
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
    function TC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _w(u), Dw(s, u), kw(f, u), ga(e, t, f, a);
      var p = al.current, v = Eg(p, Cp);
      if (v)
        p = Cg(p, Cp), t.flags |= be;
      else {
        var y = e !== null && (e.flags & be) !== _e;
        y && ww(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & st) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = bw(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), RS(
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
            var x = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var A = N.alternate;
              if (A !== null && am(A) === null) {
                t.child = N;
                break;
              }
              var H = N.sibling;
              N.sibling = x, x = N, N = H;
            }
            RS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
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
    function Ow(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var xC = !1;
    function Lw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || xC || (xC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (m0(t, u, p), f !== null) {
        var y = f.value;
        if (Q(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          _1(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var wC = !1;
    function Mw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), kf(t, a);
      var f = tr(i);
      va(t);
      var p;
      return Op.current = t, Yn(!0), p = s(f), Yn(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function Np() {
      ul = !0;
    }
    function _m(e, t) {
      (t.mode & st) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), Wp(t.lanes), Zr(a, t.childLanes) ? (w1(e, t), t.child) : null;
    }
    function Nw(e, t, a) {
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
    function TS(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function zw(e, t, a) {
      switch (t.tag) {
        case Z:
          yC(t), t.stateNode, bf();
          break;
        case ie:
          x0(t);
          break;
        case ce: {
          var i = t.type;
          Il(i) && jh(t);
          break;
        }
        case Se:
          yg(t, t.stateNode.containerInfo);
          break;
        case Ze: {
          var u = t.memoizedProps.value, s = t.type._context;
          m0(t, s, u);
          break;
        }
        case it:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(al.current)), t.flags |= be, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return SC(e, t, a);
            Ao(t, Lf(al.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(al.current));
          break;
        }
        case un: {
          var x = (e.flags & be) !== _e, N = Zr(a, t.childLanes);
          if (x) {
            if (N)
              return TC(e, t, a);
            t.flags |= be;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, al.current), N)
            break;
          return null;
        }
        case ke:
        case jt:
          return t.lanes = Y, vC(e, t, a);
      }
      return Vu(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nw(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & be) === _e)
            return ul = !1, zw(e, t, a);
          (e.flags & xc) !== _e ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && i1(t)) {
        var f = t.index, p = l1();
        e0(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Je:
          return hw(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return pw(e, t, v, a);
        }
        case ne: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ll(y, g);
          return hS(e, t, y, b, a);
        }
        case ce: {
          var x = t.type, N = t.pendingProps, A = t.elementType === x ? N : ll(x, N);
          return mC(e, t, x, A, a);
        }
        case Z:
          return cw(e, t, a);
        case ie:
          return fw(e, t, a);
        case Be:
          return dw(e, t);
        case Re:
          return SC(e, t, a);
        case Se:
          return Ow(e, t, a);
        case Ve: {
          var H = t.type, oe = t.pendingProps, Le = t.elementType === H ? oe : ll(H, oe);
          return fC(e, t, H, Le, a);
        }
        case mt:
          return uw(e, t, a);
        case at:
          return ow(e, t, a);
        case it:
          return sw(e, t, a);
        case Ze:
          return Lw(e, t, a);
        case Kt:
          return Mw(e, t, a);
        case ft: {
          var we = t.type, Tt = t.pendingProps, yt = ll(we, Tt);
          if (t.type !== t.elementType) {
            var k = we.propTypes;
            k && tl(
              k,
              yt,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return yt = ll(we.type, yt), dC(e, t, we, yt, a);
        }
        case je:
          return pC(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var V = t.type, O = t.pendingProps, q = t.elementType === V ? O : ll(V, O);
          return vw(e, t, V, q, a);
        }
        case un:
          return TC(e, t, a);
        case _t:
          break;
        case ke:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Et;
    }
    function _C(e) {
      e.flags |= En, e.flags |= ho;
    }
    var DC, xS, kC, OC;
    DC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === Be)
          nx(e, u.stateNode);
        else if (u.tag !== Se) {
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
    }, xS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = ax(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && jf(t);
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
            a = qe(a, qe(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = qe(a, qe(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = qe(a, qe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = qe(a, qe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Uw(e, t, a) {
      if (S1() && (t.mode & st) !== De && (t.flags & be) === _e)
        return u0(t), bf(), t.flags |= Cr | os | Kn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (y1(t), Fr(t), (t.mode & Mt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & be) === _e && (t.memoizedState = null), t.flags |= Et, Fr(t), (t.mode & Mt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return o0(), !0;
    }
    function LC(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case Je:
        case ln:
        case je:
        case ne:
        case Ve:
        case mt:
        case at:
        case it:
        case Kt:
        case ft:
          return Fr(t), null;
        case ce: {
          var u = t.type;
          return Il(u) && Ah(t), Fr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Of(t), $y(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== _e) && (t.flags |= Wn, o0());
            }
          }
          return xS(e, t), Fr(t), null;
        }
        case ie: {
          Sg(t);
          var v = T0(), y = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, y, i, v), e.ref !== t.ref && _C(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = gg(), b = Bh(t);
            if (b)
              h1(t, v, g) && jf(t);
            else {
              var x = tx(y, i, v, g, t);
              DC(x, t, !1, !1), t.stateNode = x, rx(x, y, i, v) && jf(t);
            }
            t.ref !== null && _C(t);
          }
          return Fr(t), null;
        }
        case Be: {
          var N = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            OC(e, t, A, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = T0(), oe = gg(), Le = Bh(t);
            Le ? m1(t) && jf(t) : t.stateNode = ix(N, H, oe, t);
          }
          return Fr(t), null;
        }
        case Re: {
          Mf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Uw(e, t, we);
            if (!Tt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & be) !== _e)
            return t.lanes = a, (t.mode & Mt) !== De && Gg(t), t;
          var yt = we !== null, k = e !== null && e.memoizedState !== null;
          if (yt !== k && yt) {
            var V = t.child;
            if (V.flags |= Nn, (t.mode & st) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(al.current, b0) ? Ab() : BS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= Et), Fr(t), (t.mode & Mt) !== De && yt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return Of(t), xS(e, t), e === null && Jx(t.stateNode.containerInfo), Fr(t), null;
        case Ze:
          var se = t.type._context;
          return cg(se, t), Fr(t), null;
        case Ht: {
          var He = t.type;
          return Il(He) && Ah(t), Fr(t), null;
        }
        case un: {
          Mf(t);
          var $e = t.memoizedState;
          if ($e === null)
            return Fr(t), null;
          var Xt = (t.flags & be) !== _e, Ut = $e.rendering;
          if (Ut === null)
            if (Xt)
              zp($e, !1);
            else {
              var Gn = Fb() && (e === null || (e.flags & be) === _e);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Vn = am(At);
                  if (Vn !== null) {
                    Xt = !0, t.flags |= be, zp($e, !1);
                    var la = Vn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Et), t.subtreeFlags = _e, b1(t, a), Ao(t, Cg(al.current, Cp)), t.child;
                  }
                  At = At.sibling;
                }
              $e.tail !== null && $n() > JC() && (t.flags |= be, Xt = !0, zp($e, !1), t.lanes = bd);
            }
          else {
            if (!Xt) {
              var Ir = am(Ut);
              if (Ir !== null) {
                t.flags |= be, Xt = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Et), zp($e, !0), $e.tail === null && $e.tailMode === "hidden" && !Ut.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              $n() * 2 - $e.renderingStartTime > JC() && a !== Jr && (t.flags |= be, Xt = !0, zp($e, !1), t.lanes = bd);
            }
            if ($e.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ca = $e.last;
              Ca !== null ? Ca.sibling = Ut : t.child = Ut, $e.last = Ut;
            }
          }
          if ($e.tail !== null) {
            var Ra = $e.tail;
            $e.rendering = Ra, $e.tail = Ra.sibling, $e.renderingStartTime = $n(), Ra.sibling = null;
            var ua = al.current;
            return Xt ? ua = Cg(ua, Cp) : ua = Lf(ua), Ao(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case ke:
        case jt: {
          PS(t);
          var Wu = t.memoizedState, Wf = Wu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Kl = Xp !== null;
            Kl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !re && (t.flags |= Nn);
          }
          return !Wf || (t.mode & st) === De ? Fr(t) : Zr(Xl, Jr) && (Fr(t), t.subtreeFlags & (mn | Et) && (t.flags |= Nn)), null;
        }
        case Dt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Aw(e, t, a) {
      switch (Xy(t), t.tag) {
        case ce: {
          var i = t.type;
          Il(i) && Ah(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | be, (t.mode & Mt) !== De && Gg(t), t) : null;
        }
        case Z: {
          t.stateNode, Of(t), $y(t), Tg();
          var s = t.flags;
          return (s & Kn) !== _e && (s & be) === _e ? (t.flags = s & ~Kn | be, t) : null;
        }
        case ie:
          return Sg(t), null;
        case Re: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | be, (t.mode & Mt) !== De && Gg(t), t) : null;
        }
        case un:
          return Mf(t), null;
        case Se:
          return Of(t), null;
        case Ze:
          var v = t.type._context;
          return cg(v, t), null;
        case ke:
        case jt:
          return PS(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function MC(e, t, a) {
      switch (Xy(t), t.tag) {
        case ce: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case Z: {
          t.stateNode, Of(t), $y(t), Tg();
          break;
        }
        case ie: {
          Sg(t);
          break;
        }
        case Se:
          Of(t);
          break;
        case Re:
          Mf(t);
          break;
        case un:
          Mf(t);
          break;
        case Ze:
          var u = t.type._context;
          cg(u, t);
          break;
        case ke:
        case jt:
          PS(t);
          break;
      }
    }
    var NC = null;
    NC = /* @__PURE__ */ new Set();
    var Dm = !1, Hr = !1, jw = typeof WeakSet == "function" ? WeakSet : Set, ge = null, Ff = null, Hf = null;
    function Fw(e) {
      wl(null, function() {
        throw e;
      }), us();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function zC(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function Vw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function UC(e, t) {
      try {
        jC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && lt && e.mode & Mt)
              try {
                Gl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function km(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var AC = !1;
    function Pw(e, t) {
      ZT(e.containerInfo), ge = t, Bw();
      var a = AC;
      return AC = !1, a;
    }
    function Bw() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & _l) !== _e && t !== null ? (t.return = e, ge = t) : Iw();
      }
    }
    function Iw() {
      for (; ge !== null; ) {
        var e = ge;
        Wt(e);
        try {
          Yw(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Yw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== _e) {
        switch (Wt(e), e.tag) {
          case ne:
          case Ve:
          case je:
            break;
          case ce: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = NC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              xx(v.containerInfo);
            }
            break;
          }
          case ie:
          case Be:
          case Se:
          case Ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? qi(t) : (e & fr) !== Ha && cs(t), (e & Yl) !== Ha && Qp(!0), km(t, a, p), (e & Yl) !== Ha && Qp(!1), (e & jr) !== Ha ? Ll() : (e & fr) !== Ha && xd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Ha ? Td(t) : (e & fr) !== Ha && Oc(t);
            var f = s.create;
            (e & Yl) !== Ha && Qp(!0), s.destroy = f(), (e & Yl) !== Ha && Qp(!1), (e & jr) !== Ha ? zv() : (e & fr) !== Ha && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== _e ? v = "useLayoutEffect" : (s.tag & Yl) !== _e ? v = "useInsertionEffect" : v = "useEffect";
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
    function Ww(e, t) {
      if ((t.flags & Et) !== _e)
        switch (t.tag) {
          case it: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = J0(), p = t.alternate === null ? "mount" : "update";
            K0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case it:
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
    function $w(e, t, a, i) {
      if ((a.flags & kl) !== _e)
        switch (a.tag) {
          case ne:
          case Ve:
          case je: {
            if (!Hr)
              if (a.mode & Mt)
                try {
                  Gl(), Ho(fr | cr, a);
                } finally {
                  Ql(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case ce: {
            var u = a.stateNode;
            if (a.flags & Et && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Mt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Mt)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), R0(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case ce:
                    y = a.child.stateNode;
                    break;
                }
              R0(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var b = a.type, x = a.memoizedProps;
              cx(g, b, x);
            }
            break;
          }
          case Be:
            break;
          case Se:
            break;
          case it: {
            {
              var N = a.memoizedProps, A = N.onCommit, H = N.onRender, oe = a.stateNode.effectDuration, Le = J0(), we = t === null ? "mount" : "update";
              K0() && (we = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof A == "function" && A(a.memoizedProps.id, we, oe, Le), Ib(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case Z:
                      var yt = Tt.stateNode;
                      yt.effectDuration += oe;
                      break e;
                    case it:
                      var k = Tt.stateNode;
                      k.effectDuration += oe;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Re: {
            eb(e, a);
            break;
          }
          case un:
          case Ht:
          case _t:
          case ke:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && jC(a);
    }
    function Qw(e) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je: {
          if (e.mode & Mt)
            try {
              Gl(), zC(e, e.return);
            } finally {
              Ql(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vw(e, e.return, t), UC(e, e.return);
          break;
        }
        case ie: {
          UC(e, e.return);
          break;
        }
      }
    }
    function Gw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ex(u) : Rx(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === Be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Cx(s) : Tx(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
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
    function jC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
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
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
      }
    }
    function qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && t1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xw(e) {
      for (var t = e.return; t !== null; ) {
        if (HC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HC(e) {
      return e.tag === ie || e.tag === Z || e.tag === Se;
    }
    function VC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || HC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== Be && t.tag !== Zt; ) {
          if (t.flags & mn || t.child === null || t.tag === Se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function Kw(e) {
      var t = Xw(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & ka && (BE(a), t.flags &= ~ka);
          var i = VC(e);
          _S(e, i, a);
          break;
        }
        case Z:
        case Se: {
          var u = t.stateNode.containerInfo, s = VC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ie || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? mx(a, s, t) : vx(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ie || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? hx(a, s, t) : px(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, sl = !1;
    function Jw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ie: {
              Vr = i.stateNode, sl = !1;
              break e;
            }
            case Z: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case Se: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Vr = null, sl = !1;
      }
      qw(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (Ed(a), a.tag) {
        case ie:
          Hr || Vf(a, t);
        case Be: {
          {
            var i = Vr, u = sl;
            Vr = null, Vo(e, t, a), Vr = i, sl = u, Vr !== null && (sl ? gx(Vr, a.stateNode) : yx(Vr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Vr !== null && (sl ? Sx(Vr, a.stateNode) : Fy(Vr, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = Vr, f = sl;
            Vr = a.stateNode.containerInfo, sl = !0, Vo(e, t, a), Vr = s, sl = f;
          }
          return;
        }
        case ne:
        case Ve:
        case ft:
        case je: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, N = b.tag;
                  x !== void 0 && ((N & Yl) !== Ha ? km(a, t, x) : (N & fr) !== Ha && (cs(a), a.mode & Mt ? (Gl(), km(a, t, x), Ql(a)) : km(a, t, x), xd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case ce: {
          if (!Hr) {
            Vf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && wS(a, t, A);
          }
          Vo(e, t, a);
          return;
        }
        case _t: {
          Vo(e, t, a);
          return;
        }
        case ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & st
          ) {
            var H = Hr;
            Hr = H || a.memoizedState !== null, Vo(e, t, a), Hr = H;
          } else
            Vo(e, t, a);
          break;
        }
        default: {
          Vo(e, t, a);
          return;
        }
      }
    }
    function Zw(e) {
      e.memoizedState;
    }
    function eb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Fx(s);
          }
        }
      }
    }
    function BC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new jw()), t.forEach(function(i) {
          var u = Xb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kr)
              if (Ff !== null && Hf !== null)
                $p(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function tb(e, t, a) {
      Ff = a, Hf = e, Wt(t), IC(t, e), Wt(t), Ff = null, Hf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Jw(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          Wt(p), IC(p, e), p = p.sibling;
      Wt(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ne:
        case Ve:
        case ft:
        case je: {
          if (cl(t, e), ql(e), u & Et) {
            try {
              ol(Yl | cr, e, e.return), Ho(Yl | cr, e);
            } catch (He) {
              fn(e, e.return, He);
            }
            if (e.mode & Mt) {
              try {
                Gl(), ol(fr | cr, e, e.return);
              } catch (He) {
                fn(e, e.return, He);
              }
              Ql(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (He) {
                fn(e, e.return, He);
              }
          }
          return;
        }
        case ce: {
          cl(t, e), ql(e), u & En && i !== null && Vf(i, i.return);
          return;
        }
        case ie: {
          cl(t, e), ql(e), u & En && i !== null && Vf(i, i.return);
          {
            if (e.flags & ka) {
              var s = e.stateNode;
              try {
                BE(s);
              } catch (He) {
                fn(e, e.return, He);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fx(f, g, y, v, p, e);
                  } catch (He) {
                    fn(e, e.return, He);
                  }
              }
            }
          }
          return;
        }
        case Be: {
          if (cl(t, e), ql(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, N = i !== null ? i.memoizedProps : x;
            try {
              dx(b, N, x);
            } catch (He) {
              fn(e, e.return, He);
            }
          }
          return;
        }
        case Z: {
          if (cl(t, e), ql(e), u & Et && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                jx(t.containerInfo);
              } catch (He) {
                fn(e, e.return, He);
              }
          }
          return;
        }
        case Se: {
          cl(t, e), ql(e);
          return;
        }
        case Re: {
          cl(t, e), ql(e);
          var H = e.child;
          if (H.flags & Nn) {
            var oe = H.stateNode, Le = H.memoizedState, we = Le !== null;
            if (oe.isHidden = we, we) {
              var Tt = H.alternate !== null && H.alternate.memoizedState !== null;
              Tt || Ub();
            }
          }
          if (u & Et) {
            try {
              Zw(e);
            } catch (He) {
              fn(e, e.return, He);
            }
            BC(e);
          }
          return;
        }
        case ke: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & st
          ) {
            var k = Hr;
            Hr = k || yt, cl(t, e), Hr = k;
          } else
            cl(t, e);
          if (ql(e), u & Nn) {
            var V = e.stateNode, O = e.memoizedState, q = O !== null, pe = e;
            if (V.isHidden = q, q && !yt && (pe.mode & st) !== De) {
              ge = pe;
              for (var se = pe.child; se !== null; )
                ge = se, rb(se), se = se.sibling;
            }
            Gw(pe, q);
          }
          return;
        }
        case un: {
          cl(t, e), ql(e), u & Et && BC(e);
          return;
        }
        case _t:
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
          Kw(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function nb(e, t, a) {
      Ff = a, Hf = t, ge = e, YC(e, t, a), Ff = null, Hf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & st) !== De; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === ke && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = Dm, x = Hr;
            Dm = p, Hr = g, Hr && !x && (ge = u, ab(u));
            for (var N = s; N !== null; )
              ge = N, YC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            ge = u, Dm = b, Hr = x, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & kl) !== _e && s !== null ? (s.return = u, ge = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & kl) !== _e) {
          var u = i.alternate;
          Wt(i);
          try {
            $w(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          cn();
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
    function rb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case ne:
          case Ve:
          case ft:
          case je: {
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
          case ce: {
            Vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ie: {
            Vf(t, t.return);
            break;
          }
          case ke: {
            var u = t.memoizedState !== null;
            if (u) {
              WC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : WC(e);
      }
    }
    function WC(e) {
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
    function ab(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === ke) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : $C(e);
      }
    }
    function $C(e) {
      for (; ge !== null; ) {
        var t = ge;
        Wt(t);
        try {
          Qw(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (cn(), t === e) {
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
    function ib(e, t, a, i) {
      ge = t, lb(t, e, a, i);
    }
    function lb(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Qi) !== _e && s !== null ? (s.return = u, ge = s) : ub(e, t, a, i);
      }
    }
    function ub(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Qr) !== _e) {
          Wt(u);
          try {
            ob(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          cn();
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
    function ob(e, t, a, i) {
      switch (t.tag) {
        case ne:
        case Ve:
        case je: {
          if (t.mode & Mt) {
            Qg();
            try {
              Ho(jr | cr, t);
            } finally {
              $g(t);
            }
          } else
            Ho(jr | cr, t);
          break;
        }
      }
    }
    function sb(e) {
      ge = e, cb();
    }
    function cb() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & Da) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, pb(u, e);
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
        (e.subtreeFlags & Qi) !== _e && t !== null ? (t.return = e, ge = t) : fb();
      }
    }
    function fb() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Qr) !== _e && (Wt(e), db(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function db(e) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je: {
          e.mode & Mt ? (Qg(), ol(jr | cr, e, e.return), $g(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function pb(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        Wt(a), hb(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : vb(e);
      }
    }
    function vb(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (FC(t), t === e) {
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
    function hb(e, t) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je: {
          e.mode & Mt ? (Qg(), ol(jr, e, t), $g(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je: {
          try {
            Ho(jr | cr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case ne:
        case Ve:
        case je:
          try {
            ol(jr | cr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var Eb = [];
    function Cb() {
      Eb.forEach(function(e) {
        return e();
      });
    }
    var Rb = j.ReactCurrentActQueue;
    function Tb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Rb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xb = Math.ceil, kS = j.ReactCurrentDispatcher, OS = j.ReactCurrentOwner, Pr = j.ReactCurrentBatchConfig, fl = j.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), GC = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Pu = 0, Ap = 1, tc = 2, Om = 3, jp = 4, qC = 5, LS = 6, Rt = vr, Sa = null, kn = null, hr = Y, Xl = Y, MS = Oo(Y), mr = Pu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Vp = null, Va = null, NS = 0, XC = 500, KC = 1 / 0, wb = 500, Bu = null;
    function Pp() {
      KC = $n() + wb;
    }
    function JC() {
      return KC;
    }
    var Nm = !1, zS = null, Pf = null, nc = !1, Po = null, Bp = Y, US = [], AS = null, bb = 50, Ip = 0, jS = null, FS = !1, zm = !1, _b = 50, Bf = 0, Um = null, Yp = Jt, Am = Y, ZC = !1;
    function jm() {
      return Sa;
    }
    function Ea() {
      return (Rt & (Br | Ai)) !== vr ? $n() : (Yp !== Jt || (Yp = $n()), Yp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & st) === De)
        return Ae;
      if ((Rt & Br) !== vr && hr !== Y)
        return Ts(hr);
      var a = R1() !== C1;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === kt && (Am = Md()), Am;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = lx();
      return s;
    }
    function Db(e) {
      var t = e.mode;
      return (t & st) === De ? Ae : Pv();
    }
    function yr(e, t, a, i) {
      Jb(), ZC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), So(e, a, i), (Rt & Br) !== Y && e === Sa ? t_(t) : (Kr && bs(e, t, a), n_(t), e === Sa && ((Rt & Br) === vr && (Hp = qe(Hp, a)), mr === jp && Io(e, hr)), Pa(e, i), a === Ae && Rt === vr && (t.mode & st) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Pp(), ZE()));
    }
    function kb(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Pa(e, a);
    }
    function Ob(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Br) !== vr
      );
    }
    function Pa(e, t) {
      var a = e.callbackNode;
      Xc(e, t);
      var i = qc(e, e === Sa ? hr : Y);
      if (i === Y) {
        a !== null && hR(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== WS)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hR(a);
      var f;
      if (u === Ae)
        e.tag === Lo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), a1(nR.bind(null, e))) : JE(nR.bind(null, e)), fl.current !== null ? fl.current.push(Mo) : ox(function() {
          (Rt & (Br | Ai)) === vr && Mo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Lr:
            p = ss;
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
        f = $S(p, eR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function eR(e, t) {
      if (G1(), Yp = Jt, Am = Y, (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Sa ? hr : Y);
      if (u === Y)
        return null;
      var s = !Jc(e, u) && !Vv(e, u) && !t, f = s ? Vb(e, u) : Hm(e, u);
      if (f !== Pu) {
        if (f === tc) {
          var p = Kc(e);
          p !== Y && (u = p, f = HS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, Y), Io(e, u), Pa(e, $n()), v;
        }
        if (f === LS)
          Io(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Mb(g)) {
            if (f = Hm(e, u), f === tc) {
              var b = Kc(e);
              b !== Y && (u = b, f = HS(e, b));
            }
            if (f === Ap) {
              var x = Fp;
              throw rc(e, Y), Io(e, u), Pa(e, $n()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Lb(e, f, u);
        }
      }
      return Pa(e, $n()), e.callbackNode === a ? eR.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Vp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, Kx(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Va;
        Va = a, s !== null && tR(s);
      }
      return u;
    }
    function tR(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Lb(e, t, a) {
      switch (t) {
        case Pu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Va, Bu);
          break;
        }
        case Om: {
          if (Io(e, a), bu(a) && // do not delay if we're inside an act() scope
          !mR()) {
            var i = NS + XC - $n();
            if (i > 10) {
              var u = qc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!_u(s, a)) {
                Ea(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(ac.bind(null, e, Va, Bu), i);
              break;
            }
          }
          ac(e, Va, Bu);
          break;
        }
        case jp: {
          if (Io(e, a), Od(a))
            break;
          if (!mR()) {
            var f = ri(e, a), p = f, v = $n() - p, y = Kb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(ac.bind(null, e, Va, Bu), y);
              break;
            }
          }
          ac(e, Va, Bu);
          break;
        }
        case qC: {
          ac(e, Va, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Mb(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Q(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
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
    function Io(e, t) {
      t = xs(t, Mm), t = xs(t, Hp), Yv(e, t);
    }
    function nR(e) {
      if (q1(), (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Yu();
      var t = qc(e, Y);
      if (!Zr(t, Ae))
        return Pa(e, $n()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Kc(e);
        i !== Y && (t = i, a = HS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, Y), Io(e, t), Pa(e, $n()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Va, Bu), Pa(e, $n()), null;
    }
    function Nb(e, t) {
      t !== Y && (ef(e, qe(t, Ae)), Pa(e, $n()), (Rt & (Br | Ai)) === vr && (Pp(), Mo()));
    }
    function VS(e, t) {
      var a = Rt;
      Rt |= GC;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Pp(), ZE());
      }
    }
    function zb(e, t, a, i, u) {
      var s = Ua(), f = Pr.transition;
      try {
        return Pr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Pr.transition = f, Rt === vr && Pp();
      }
    }
    function Iu(e) {
      Po !== null && Po.tag === Lo && (Rt & (Br | Ai)) === vr && Yu();
      var t = Rt;
      Rt |= GC;
      var a = Pr.transition, i = Ua();
      try {
        return Pr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Pr.transition = a, Rt = t, (Rt & (Br | Ai)) === vr && Mo();
      }
    }
    function rR() {
      return (Rt & (Br | Ai)) !== vr;
    }
    function Fm(e, t) {
      aa(MS, Xl, e), Xl = qe(Xl, t);
    }
    function PS(e) {
      Xl = MS.current, ra(MS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, ux(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          MC(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return kn = s, hr = Xl = t, mr = Pu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Vp = null, Va = null, k1(), rl.discardPendingWarnings(), s;
    }
    function aR(e, t) {
      do {
        var a = kn;
        try {
          if (Gh(), D0(), cn(), OS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, kn = null;
            return;
          }
          if (Ue && a.mode & Mt && Tm(a, !0), Fe)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, hr);
            } else
              fs(a, t, hr);
          aw(e, a.return, a, t, hr), oR(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function iR() {
      var e = kS.current;
      return kS.current = gm, e === null ? gm : e;
    }
    function lR(e) {
      kS.current = e;
    }
    function Ub() {
      NS = $n();
    }
    function Wp(e) {
      Lm = qe(e, Lm);
    }
    function Ab() {
      mr === Pu && (mr = Om);
    }
    function BS() {
      (mr === Pu || mr === Om || mr === tc) && (mr = jp), Sa !== null && (Rs(Lm) || Rs(Hp)) && Io(Sa, hr);
    }
    function jb(e) {
      mr !== jp && (mr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Fb() {
      return mr === Pu;
    }
    function Hm(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = iR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), Wv(e, t);
        }
        Bu = Ad(), rc(e, t);
      }
      Su(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          aR(e, s);
        }
      while (!0);
      if (Gh(), Rt = a, lR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = Y, mr;
    }
    function Hb() {
      for (; kn !== null; )
        uR(kn);
    }
    function Vb(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = iR();
      if (Sa !== e || hr !== t) {
        if (Kr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), Wv(e, t);
        }
        Bu = Ad(), Pp(), rc(e, t);
      }
      Su(t);
      do
        try {
          Pb();
          break;
        } catch (s) {
          aR(e, s);
        }
      while (!0);
      return Gh(), lR(i), Rt = a, kn !== null ? (Av(), Pu) : (Lc(), Sa = null, hr = Y, mr);
    }
    function Pb() {
      for (; kn !== null && !hd(); )
        uR(kn);
    }
    function uR(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & Mt) !== De ? (Wg(e), a = IS(t, e, Xl), Tm(e, !0)) : a = IS(t, e, Xl), cn(), e.memoizedProps = e.pendingProps, a === null ? oR(e) : kn = a, OS.current = null;
    }
    function oR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === _e) {
          Wt(t);
          var u = void 0;
          if ((t.mode & Mt) === De ? u = LC(a, t, Xl) : (Wg(t), u = LC(a, t, Xl), Tm(t, !1)), cn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = Aw(a, t);
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
            i.flags |= os, i.subtreeFlags = _e, i.deletions = null;
          else {
            mr = LS, kn = null;
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
      mr === Pu && (mr = qC);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Pr.transition;
      try {
        Pr.transition = null, jn(Lr), Bb(e, t, a, i);
      } finally {
        Pr.transition = u, jn(i);
      }
      return null;
    }
    function Bb(e, t, a, i) {
      do
        Yu();
      while (Po !== null);
      if (Zb(), (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = qe(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, kn = null, hr = Y), ((u.subtreeFlags & Qi) !== _e || (u.flags & Qi) !== _e) && (nc || (nc = !0, AS = a, $S(Gi, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (_l | Dl | kl | Qi)) !== _e, v = (u.flags & (_l | Dl | kl | Qi)) !== _e;
      if (p || v) {
        var y = Pr.transition;
        Pr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Rt;
        Rt |= Ai, OS.current = null, Pw(e, u), Z0(), tb(e, u, s), ex(e.containerInfo), e.current = u, ds(s), nb(u, e, s), ps(), md(), Rt = b, jn(g), Pr.transition = y;
      } else
        e.current = u, Z0();
      var x = nc;
      if (nc ? (nc = !1, Po = e, Bp = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === Y && (Pf = null), x || dR(e.current, !1), gd(u.stateNode, i), Kr && e.memoizedUpdaters.clear(), Cb(), Pa(e, $n()), t !== null)
        for (var N = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], oe = H.stack, Le = H.digest;
          N(H.value, {
            componentStack: oe,
            digest: Le
          });
        }
      if (Nm) {
        Nm = !1;
        var we = zS;
        throw zS = null, we;
      }
      return Zr(Bp, Ae) && e.tag !== Lo && Yu(), f = e.pendingLanes, Zr(f, Ae) ? (Q1(), e === jS ? Ip++ : (Ip = 0, jS = e)) : Ip = 0, Mo(), Rd(), null;
    }
    function Yu() {
      if (Po !== null) {
        var e = Gv(Bp), t = Ds(Na, e), a = Pr.transition, i = Ua();
        try {
          return Pr.transition = null, jn(t), Yb();
        } finally {
          jn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function Ib(e) {
      US.push(e), nc || (nc = !0, $S(Gi, function() {
        return Yu(), null;
      }));
    }
    function Yb() {
      if (Po === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Po, a = Bp;
      if (Po = null, Bp = Y, (Rt & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, gu(a);
      var i = Rt;
      Rt |= Ai, sb(t.current), ib(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Ww(t, f);
        }
      }
      wd(), dR(t.current, !0), Rt = i, Mo(), zm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, FS = !1, zm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sR(e) {
      return Pf !== null && Pf.has(e);
    }
    function Wb(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function $b(e) {
      Nm || (Nm = !0, zS = e);
    }
    var Qb = $b;
    function cR(e, t, a) {
      var i = Zs(a, t), u = uC(e, i, Ae), s = zo(e, u, Ae), f = Ea();
      s !== null && (So(s, Ae, f), Pa(s, f));
    }
    function fn(e, t, a) {
      if (Fw(a), Qp(!1), e.tag === Z) {
        cR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          cR(i, e, a);
          return;
        } else if (i.tag === ce) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sR(s)) {
            var f = Zs(a, e), p = sS(i, f, Ae), v = zo(i, p, Ae), y = Ea();
            v !== null && (So(v, Ae, y), Pa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Gb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Zc(e, a), r_(e), Sa === e && _u(hr, a) && (mr === jp || mr === Om && bu(hr) && $n() - NS < XC ? rc(e, Y) : Mm = qe(Mm, a)), Pa(e, u);
    }
    function fR(e, t) {
      t === kt && (t = Db(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (So(i, t, a), Pa(i, a));
    }
    function qb(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), fR(e, a);
    }
    function Xb(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case un:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fR(e, a);
    }
    function Kb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xb(e / 1960) * 1960;
    }
    function Jb() {
      if (Ip > bb)
        throw Ip = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > _b && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zb() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function dR(e, t) {
      Wt(e), Vm(e, bl, gb), t && Vm(e, Ri, Sb), Vm(e, bl, mb), t && Vm(e, Ri, yb), cn();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Pm = null;
    function pR(e) {
      {
        if ((Rt & Br) !== vr || !(e.mode & st))
          return;
        var t = e.tag;
        if (t !== Je && t !== Z && t !== ce && t !== ne && t !== Ve && t !== ft && t !== je)
          return;
        var a = Ie(e) || "ReactComponent";
        if (Pm !== null) {
          if (Pm.has(a))
            return;
          Pm.add(a);
        } else
          Pm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Wt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : cn();
        }
      }
    }
    var IS;
    {
      var e_ = null;
      IS = function(e, t, a) {
        var i = CR(e_, t);
        try {
          return bC(e, t, a);
        } catch (s) {
          if (d1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), D0(), MC(e, t), CR(t, i), t.mode & Mt && Wg(t), wl(null, bC, null, e, t, a), Wi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function t_(e) {
      if (hi && !Y1())
        switch (e.tag) {
          case ne:
          case Ve:
          case je: {
            var t = kn && Ie(kn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ce: {
            vR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vR = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Kr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var WS = {};
    function $S(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), WS) : vd(e, t);
      }
    }
    function hR(e) {
      if (e !== WS)
        return Mv(e);
    }
    function mR() {
      return fl.current !== null;
    }
    function n_(e) {
      {
        if (e.mode & st) {
          if (!QC())
            return;
        } else if (!Tb() || Rt !== vr || e.tag !== ne && e.tag !== Ve && e.tag !== je)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? Wt(e) : cn();
          }
        }
      }
    }
    function r_(e) {
      e.tag !== Lo && QC() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      ZC = e;
    }
    var ji = null, If = null, a_ = function(e) {
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
    function QS(e) {
      return Yf(e);
    }
    function GS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
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
    function yR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ce: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ne: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Ve: {
            (s === I || s === Ye) && (u = !0);
            break;
          }
          case ft:
          case je: {
            (s === Qe || s === Ye) && (u = !0);
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
    function gR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var i_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          qS(e.current, i, a);
        });
      }
    }, l_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Yu(), Iu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ne:
          case je:
          case ce:
            v = p;
            break;
          case Ve:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ji(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === ce ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Fa(e, Ae);
          x !== null && yr(x, e, Ae, Jt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var u_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ne:
          case je:
          case ce:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? o_(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function o_(e, t) {
      {
        var a = s_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case Se:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function s_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
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
    var KS;
    {
      KS = !1;
      try {
        var SR = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function c_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new c_(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function f_(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function d_(e) {
      if (typeof e == "function")
        return JS(e) ? ce : ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Ve;
        if (t === Qe)
          return ft;
      }
      return Je;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Je:
        case ne:
        case je:
          a.type = Yf(e.type);
          break;
        case ce:
          a.type = QS(e.type);
          break;
        case Ve:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function p_(e, t) {
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
    function v_(e, t, a) {
      var i;
      return e === Fh ? (i = st, t === !0 && (i |= Gt, i |= Nt)) : i = De, Kr && (i |= Mt), ui(Z, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Je, p = e;
      if (typeof e == "function")
        JS(e) ? (f = ce, p = QS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = ie;
      else
        e: switch (e) {
          case fi:
            return Yo(a.children, u, s, t);
          case $a:
            f = at, u |= Gt, (u & st) !== De && (u |= Nt);
            break;
          case di:
            return h_(a, u, s, t);
          case le:
            return m_(a, u, s, t);
          case he:
            return y_(a, u, s, t);
          case Tn:
            return ER(a, u, s, t);
          case nn:
          case dt:
          case sn:
          case ar:
          case ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = Ze;
                  break e;
                case R:
                  f = Kt;
                  break e;
                case I:
                  f = Ve, p = GS(p);
                  break e;
                case Qe:
                  f = ft;
                  break e;
                case Ye:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ie(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function eE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ui(mt, e, i, t);
      return u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(it, e, i, t | Mt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function m_(e, t, a, i) {
      var u = ui(Re, e, i, t);
      return u.elementType = le, u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      var u = ui(un, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function ER(e, t, a, i) {
      var u = ui(ke, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function tE(e, t, a) {
      var i = ui(Be, e, null, t);
      return i.lanes = a, i;
    }
    function g_() {
      var e = ui(ie, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function S_(e) {
      var t = ui(Zt, null, null, De);
      return t.stateNode = e, t;
    }
    function nE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Se, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function CR(e, t) {
      return e === null && (e = ui(Je, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function E_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = ws(Y), this.expirationTimes = ws(Jt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = ws(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Eu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = new E_(e, t, a, p, v), b = v_(t, s);
      g.current = b, b.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = x;
      }
      return hg(b), g;
    }
    var rE = "18.3.1";
    function C_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var aE, iE;
    aE = !1, iE = {};
    function TR(e) {
      if (!e)
        return li;
      var t = po(e), a = r1(t);
      if (t.tag === ce) {
        var i = t.type;
        if (Il(i))
          return XE(t, i, a);
      }
      return a;
    }
    function R_(e, t) {
      {
        var a = po(e);
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
          var s = Ie(a) || "Component";
          if (!iE[s]) {
            iE[s] = !0;
            var f = ir;
            try {
              Wt(u), a.mode & Gt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function xR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return RR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = RR(a, i, g, e, u, s, f, p, v);
      b.context = TR(null);
      var x = b.current, N = Ea(), A = Bo(x), H = Hu(N, A);
      return H.callback = t ?? null, zo(x, H, A), kb(b, A, N), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      gn(f);
      var p = TR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !aE && (aE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(ir) || "Unknown"));
      var v = Hu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function T_(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fv(t);
            Nb(t, a);
          }
          break;
        }
        case Re: {
          Iu(function() {
            var u = Fa(e, Ae);
            if (u !== null) {
              var s = Ea();
              yr(u, e, Ae, s);
            }
          });
          var i = Ae;
          lE(e, i);
          break;
        }
      }
    }
    function bR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Iv(a.retryLane, t));
    }
    function lE(e, t) {
      bR(e, t);
      var a = e.alternate;
      a && bR(a, t);
    }
    function x_(e) {
      if (e.tag === Re) {
        var t = Ss, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function w_(e) {
      if (e.tag === Re) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function _R(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var DR = function(e) {
      return null;
    };
    function b_(e) {
      return DR(e);
    }
    var kR = function(e) {
      return !1;
    };
    function __(e) {
      return kR(e);
    }
    var OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null, jR = null, FR = null;
    {
      var HR = function(e, t, a) {
        var i = t[a], u = rt(e) ? e.slice() : Ke({}, e);
        return a + 1 === t.length ? (rt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = HR(e[i], t, a + 1), u);
      }, VR = function(e, t) {
        return HR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = rt(e) ? e.slice() : Ke({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], rt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, BR = function(e, t, a) {
        if (t.length !== a.length) {
          ht("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ht("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = rt(e) ? e.slice() : Ke({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, uE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      OR = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Fa(e, Ae);
          f !== null && yr(f, e, Ae, Jt);
        }
      }, LR = function(e, t, a) {
        var i = uE(e, t);
        if (i !== null) {
          var u = VR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ke({}, e.memoizedProps);
          var s = Fa(e, Ae);
          s !== null && yr(s, e, Ae, Jt);
        }
      }, MR = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Fa(e, Ae);
          f !== null && yr(f, e, Ae, Jt);
        }
      }, NR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Ae);
        i !== null && yr(i, e, Ae, Jt);
      }, zR = function(e, t) {
        e.pendingProps = VR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Ae);
        a !== null && yr(a, e, Ae, Jt);
      }, UR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Ae);
        i !== null && yr(i, e, Ae, Jt);
      }, AR = function(e) {
        var t = Fa(e, Ae);
        t !== null && yr(t, e, Ae, Jt);
      }, jR = function(e) {
        DR = e;
      }, FR = function(e) {
        kR = e;
      };
    }
    function D_(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function k_(e) {
      return null;
    }
    function O_() {
      return ir;
    }
    function L_(e) {
      var t = e.findFiberByHostInstance, a = j.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: OR,
        overrideHookStateDeletePath: LR,
        overrideHookStateRenamePath: MR,
        overrideProps: NR,
        overridePropsDeletePath: zR,
        overridePropsRenamePath: UR,
        setErrorHandler: jR,
        setSuspenseHandler: FR,
        scheduleUpdate: AR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: D_,
        findFiberByHostInstance: t || k_,
        // React Refresh
        findHostInstancesForRefresh: u_,
        scheduleRefresh: i_,
        scheduleRoot: l_,
        setRefreshHandler: a_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: O_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: rE
      });
    }
    var WR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function oE(e) {
      this._internalRoot = e;
    }
    Im.prototype.render = oE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = _R(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Im.prototype.unmount = oE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Gp(null, e, null, null);
        }), WE(t);
      }
    };
    function M_(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = WR;
      t != null && (t.hydrate ? ht("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = xR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new oE(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function N_(e) {
      e && Zv(e);
    }
    Im.prototype.unstable_scheduleHydration = N_;
    function z_(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = WR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          F1(y, b);
        }
      return new Im(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Yi || e.nodeType === nd));
    }
    function qp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var U_ = j.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = _R(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = sE(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function sE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function GR() {
    }
    function A_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Bm(f);
            s.call(x);
          };
        }
        var f = wR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Mn ? e.parentNode : e;
        return ep(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Bm(g);
            y.call(x);
          };
        }
        var g = xR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ep(b), Iu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function j_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      QR(a), j_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = A_(a, t, e, u, i);
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
    var qR = !1;
    function F_(e) {
      {
        qR || (qR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = U_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : R_(e, "findDOMNode");
    }
    function H_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function V_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function P_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ly(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var XR = !1;
    function B_(e) {
      if (XR || (XR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = sE(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, WE(e);
          });
        }), !0;
      } else {
        {
          var u = sE(e), s = !!(u && ko(u)), f = e.nodeType === $r && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(T_), Eo(x_), qv(w_), Os(Ua), jd($v), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(YT), iy(VS, zb, Iu);
    function I_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return C_(e, t, null, a);
    }
    function Y_(e, t, a, i) {
      return P_(e, t, a, i);
    }
    var cE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, Cf, Mh, oo, Sc, VS]
    };
    function W_(e, t) {
      return cE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t);
    }
    function $_(e, t, a) {
      return cE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), z_(e, t, a);
    }
    function Q_(e) {
      return rR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var G_ = L_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: rE,
      rendererPackageName: "react-dom"
    });
    if (!G_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cE, Ia.createPortal = I_, Ia.createRoot = W_, Ia.findDOMNode = F_, Ia.flushSync = Q_, Ia.hydrate = H_, Ia.hydrateRoot = $_, Ia.render = V_, Ia.unmountComponentAtNode = B_, Ia.unstable_batchedUpdates = VS, Ia.unstable_renderSubtreeIntoContainer = Y_, Ia.version = rE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch (L) {
      console.error(L);
    }
  }
}
process.env.NODE_ENV === "production" ? (cT(), hE.exports = rD()) : hE.exports = aD();
var iD = hE.exports, mE, Qm = iD;
if (process.env.NODE_ENV === "production")
  mE = Qm.createRoot, Qm.hydrateRoot;
else {
  var iT = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  mE = function(L, X) {
    iT.usingClientEntryPoint = !0;
    try {
      return Qm.createRoot(L, X);
    } finally {
      iT.usingClientEntryPoint = !1;
    }
  };
}
var yE = { exports: {} }, Kp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function lD() {
  if (lT) return Kp;
  lT = 1;
  var L = $u, X = Symbol.for("react.element"), j = Symbol.for("react.fragment"), gt = Object.prototype.hasOwnProperty, ct = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ht = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(vt, ne, ce) {
    var Je, Z = {}, Se = null, ie = null;
    ce !== void 0 && (Se = "" + ce), ne.key !== void 0 && (Se = "" + ne.key), ne.ref !== void 0 && (ie = ne.ref);
    for (Je in ne) gt.call(ne, Je) && !ht.hasOwnProperty(Je) && (Z[Je] = ne[Je]);
    if (vt && vt.defaultProps) for (Je in ne = vt.defaultProps, ne) Z[Je] === void 0 && (Z[Je] = ne[Je]);
    return { $$typeof: X, type: vt, key: Se, ref: ie, props: Z, _owner: ct.current };
  }
  return Kp.Fragment = j, Kp.jsx = S, Kp.jsxs = S, Kp;
}
var Jp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function uD() {
  return uT || (uT = 1, process.env.NODE_ENV !== "production" && function() {
    var L = $u, X = Symbol.for("react.element"), j = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), ht = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), vt = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), Je = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Be = Symbol.iterator, mt = "@@iterator";
    function at(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Be && R[Be] || R[mt];
      return typeof I == "function" ? I : null;
    }
    var Kt = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ze(R) {
      {
        for (var I = arguments.length, le = new Array(I > 1 ? I - 1 : 0), he = 1; he < I; he++)
          le[he - 1] = arguments[he];
        Ve("error", R, le);
      }
    }
    function Ve(R, I, le) {
      {
        var he = Kt.ReactDebugCurrentFrame, Qe = he.getStackAddendum();
        Qe !== "" && (I += "%s", le = le.concat([Qe]));
        var Ye = le.map(function(dt) {
          return String(dt);
        });
        Ye.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var it = !1, Re = !1, ft = !1, je = !1, ln = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Zt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === gt || R === ht || ln || R === ct || R === ce || R === Je || je || R === ie || it || Re || ft || typeof R == "object" && R !== null && (R.$$typeof === Se || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === vt || R.$$typeof === ne || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function un(R, I, le) {
      var he = R.displayName;
      if (he)
        return he;
      var Qe = I.displayName || I.name || "";
      return Qe !== "" ? le + "(" + Qe + ")" : le;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function ke(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case gt:
          return "Fragment";
        case j:
          return "Portal";
        case ht:
          return "Profiler";
        case ct:
          return "StrictMode";
        case ce:
          return "Suspense";
        case Je:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case vt:
            var I = R;
            return _t(I) + ".Consumer";
          case S:
            var le = R;
            return _t(le._context) + ".Provider";
          case ne:
            return un(R, R.render, "ForwardRef");
          case Z:
            var he = R.displayName || null;
            return he !== null ? he : ke(R.type) || "Memo";
          case Se: {
            var Qe = R, Ye = Qe._payload, dt = Qe._init;
            try {
              return ke(dt(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, Dt = 0, Ot, Ce, J, Te, re, _, P;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function Ue() {
      {
        if (Dt === 0) {
          Ot = console.log, Ce = console.info, J = console.warn, Te = console.error, re = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
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
        Dt++;
      }
    }
    function lt() {
      {
        if (Dt--, Dt === 0) {
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
              value: Ce
            }),
            warn: jt({}, R, {
              value: J
            }),
            error: jt({}, R, {
              value: Te
            }),
            group: jt({}, R, {
              value: re
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        Dt < 0 && Ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var et = Kt.ReactCurrentDispatcher, Xe;
    function tt(R, I, le) {
      {
        if (Xe === void 0)
          try {
            throw Error();
          } catch (Qe) {
            var he = Qe.stack.trim().match(/\n( *(at )?)/);
            Xe = he && he[1] || "";
          }
        return `
` + Xe + R;
      }
    }
    var ut = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function wr(R, I) {
      if (!R || ut)
        return "";
      {
        var le = Bt.get(R);
        if (le !== void 0)
          return le;
      }
      var he;
      ut = !0;
      var Qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = et.current, et.current = null, Ue();
      try {
        if (I) {
          var dt = function() {
            throw Error();
          };
          if (Object.defineProperty(dt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(dt, []);
            } catch (Ge) {
              he = Ge;
            }
            Reflect.construct(R, [], dt);
          } else {
            try {
              dt.call();
            } catch (Ge) {
              he = Ge;
            }
            R.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            he = Ge;
          }
          R();
        }
      } catch (Ge) {
        if (Ge && he && typeof Ge.stack == "string") {
          for (var ot = Ge.stack.split(`
`), Tn = he.stack.split(`
`), nn = ot.length - 1, sn = Tn.length - 1; nn >= 1 && sn >= 0 && ot[nn] !== Tn[sn]; )
            sn--;
          for (; nn >= 1 && sn >= 0; nn--, sn--)
            if (ot[nn] !== Tn[sn]) {
              if (nn !== 1 || sn !== 1)
                do
                  if (nn--, sn--, sn < 0 || ot[nn] !== Tn[sn]) {
                    var ar = `
` + ot[nn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (nn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        ut = !1, et.current = Ye, lt(), Error.prepareStackTrace = Qe;
      }
      var Qa = R ? R.displayName || R.name : "", Ga = Qa ? tt(Qa) : "";
      return typeof R == "function" && Bt.set(R, Ga), Ga;
    }
    function Cn(R, I, le) {
      return wr(R, !1);
    }
    function nr(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Pn(R, I, le) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, nr(R));
      if (typeof R == "string")
        return tt(R);
      switch (R) {
        case ce:
          return tt("Suspense");
        case Je:
          return tt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ne:
            return Cn(R.render);
          case Z:
            return Pn(R.type, I, le);
          case Se: {
            var he = R, Qe = he._payload, Ye = he._init;
            try {
              return Pn(Ye(Qe), I, le);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, si = Kt.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var I = R._owner, le = Pn(R.type, R._source, I ? I.type : null);
        si.setExtraStackFrame(le);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(R, I, le, he, Qe) {
      {
        var Ye = Function.call.bind(Bn);
        for (var dt in R)
          if (Ye(R, dt)) {
            var ot = void 0;
            try {
              if (typeof R[dt] != "function") {
                var Tn = Error((he || "React class") + ": " + le + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              ot = R[dt](I, dt, he, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              ot = nn;
            }
            ot && !(ot instanceof Error) && (oa(Qe), Ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", le, dt, typeof ot), oa(null)), ot instanceof Error && !(ot.message in Yr) && (Yr[ot.message] = !0, oa(Qe), Ze("Failed %s type: %s", le, ot.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function In(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, le = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return le;
      }
    }
    function Ya(R) {
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
      if (Ya(R))
        return Ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = Kt.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, ee;
    function xe(R) {
      if (Bn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function nt(R) {
      if (Bn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, I) {
      typeof R.ref == "string" && sa.current;
    }
    function en(R, I) {
      {
        var le = function() {
          ci || (ci = !0, Ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        le.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function vn(R, I) {
      {
        var le = function() {
          ee || (ee = !0, Ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        le.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var on = function(R, I, le, he, Qe, Ye, dt) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: X,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: le,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return ot._store = {}, Object.defineProperty(ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Qe
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function Xn(R, I, le, he, Qe) {
      {
        var Ye, dt = {}, ot = null, Tn = null;
        le !== void 0 && (Sr(le), ot = "" + le), nt(I) && (Sr(I.key), ot = "" + I.key), xe(I) && (Tn = I.ref, Ft(I, Qe));
        for (Ye in I)
          Bn.call(I, Ye) && !Wa.hasOwnProperty(Ye) && (dt[Ye] = I[Ye]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ye in nn)
            dt[Ye] === void 0 && (dt[Ye] = nn[Ye]);
        }
        if (ot || Tn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ot && en(dt, sn), Tn && vn(dt, sn);
        }
        return on(R, ot, Tn, Qe, he, sa.current, dt);
      }
    }
    var tn = Kt.ReactCurrentOwner, It = Kt.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var I = R._owner, le = Pn(R.type, R._source, I ? I.type : null);
        It.setExtraStackFrame(le);
      } else
        It.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === X;
    }
    function Ta() {
      {
        if (tn.current) {
          var R = ke(tn.current.type);
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
    var Jl = {};
    function Zl(R) {
      {
        var I = Ta();
        if (!I) {
          var le = typeof R == "string" ? R : R.displayName || R.name;
          le && (I = `

Check the top-level render call using <` + le + ">.");
        }
        return I;
      }
    }
    function dl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var le = Zl(I);
        if (Jl[le])
          return;
        Jl[le] = !0;
        var he = "";
        R && R._owner && R._owner !== tn.current && (he = " It was passed a child from " + ke(R._owner.type) + "."), Yt(R), Ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, he), Yt(null);
      }
    }
    function pl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var le = 0; le < R.length; le++) {
            var he = R[le];
            Er(he) && dl(he, I);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Qe = at(R);
          if (typeof Qe == "function" && Qe !== R.entries)
            for (var Ye = Qe.call(R), dt; !(dt = Ye.next()).done; )
              Er(dt.value) && dl(dt.value, I);
        }
      }
    }
    function eu(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var le;
        if (typeof I == "function")
          le = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ne || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === Z))
          le = I.propTypes;
        else
          return;
        if (le) {
          var he = ke(I);
          qn(le, R.props, "prop", he, R);
        } else if (I.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Qe = ke(I);
          Ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Qe || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && Ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var I = Object.keys(R.props), le = 0; le < I.length; le++) {
          var he = I[le];
          if (he !== "children" && he !== "key") {
            Yt(R), Ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), Ze("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var _r = {};
    function rr(R, I, le, he, Qe, Ye) {
      {
        var dt = Zt(R);
        if (!dt) {
          var ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? ot += Tn : ot += Ta();
          var nn;
          R === null ? nn = "null" : In(R) ? nn = "array" : R !== void 0 && R.$$typeof === X ? (nn = "<" + (ke(R.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, Ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, ot);
        }
        var sn = Xn(R, I, le, Qe, Ye);
        if (sn == null)
          return sn;
        if (dt) {
          var ar = I.children;
          if (ar !== void 0)
            if (he)
              if (In(ar)) {
                for (var Qa = 0; Qa < ar.length; Qa++)
                  pl(ar[Qa], R);
                Object.freeze && Object.freeze(ar);
              } else
                Ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(ar, R);
        }
        if (Bn.call(I, "key")) {
          var Ga = ke(R), Ge = Object.keys(I).filter(function(tu) {
            return tu !== "key";
          }), Ke = Ge.length > 0 ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + Ke]) {
            var qa = Ge.length > 0 ? "{" + Ge.join(": ..., ") + ": ...}" : "{}";
            Ze(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, Ga, qa, Ga), _r[Ga + Ke] = !0;
          }
        }
        return R === gt ? br(sn) : eu(sn), sn;
      }
    }
    function fi(R, I, le) {
      return rr(R, I, le, !0);
    }
    function $a(R, I, le) {
      return rr(R, I, le, !1);
    }
    var di = $a, pi = fi;
    Jp.Fragment = gt, Jp.jsx = di, Jp.jsxs = pi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? yE.exports = lD() : yE.exports = uD();
var xt = yE.exports;
const oD = "https://api.open-meteo.com/v1/forecast";
function pE(L) {
  return L === 0 ? "Clear sky" : L === 1 || L === 2 || L === 3 ? "Partly cloudy" : L === 45 || L === 48 ? "Foggy" : L === 51 || L === 53 || L === 55 ? "Drizzle" : L === 56 || L === 57 ? "Freezing drizzle" : L === 61 || L === 63 || L === 65 ? "Rain" : L === 66 || L === 67 ? "Freezing rain" : L === 71 || L === 73 || L === 75 ? "Snow" : L === 77 ? "Snow grains" : L === 80 || L === 81 || L === 82 ? "Rain showers" : L === 85 || L === 86 ? "Snow showers" : L === 95 ? "Thunderstorm" : L === 96 || L === 99 ? "Thunderstorm with hail" : "Unknown";
}
function oT(L) {
  return L === 0 ? "☀️" : L === 1 || L === 2 || L === 3 ? "⛅" : L === 45 || L === 48 ? "🌫️" : L >= 51 && L <= 57 ? "🌦️" : L >= 61 && L <= 67 ? "🌧️" : L >= 71 && L <= 77 ? "❄️" : L >= 80 && L <= 82 ? "🌦️" : L >= 85 && L <= 86 ? "❄️" : L >= 95 && L <= 99 ? "⛈️" : "☀️";
}
function Gm(L) {
  return Math.round(L * 9 / 5 + 32);
}
async function sD() {
  const j = `${oD}?latitude=${52.52}&longitude=${13.41}&hourly=temperature_2m,relativehumidity_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`, gt = await fetch(j);
  if (!gt.ok)
    throw new Error(`Failed to fetch weather data: ${gt.statusText}`);
  return gt.json();
}
function cD(L) {
  return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][L.getMonth()]} ${L.getDate()}`;
}
function fD(L, X) {
  return X === 0 ? "Today" : X === 1 ? "Tomorrow" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][L.getDay()];
}
function dD(L) {
  var vt, ne, ce;
  const j = L.hourly.temperature_2m[0], gt = ((vt = L.hourly.relativehumidity_2m) == null ? void 0 : vt[0]) || 0, ct = ((ne = L.hourly.weathercode) == null ? void 0 : ne[0]) || 0, ht = {
    location: `Berlin, Germany (${L.latitude.toFixed(2)}, ${L.longitude.toFixed(2)})`,
    temperature: Gm(j),
    condition: pE(ct),
    icon: oT(ct),
    humidity: gt,
    feelsLike: Gm(j),
    // Open-Meteo doesn't provide feels_like, using same temp
    description: pE(ct).toLowerCase()
  }, S = (((ce = L.daily) == null ? void 0 : ce.time) || []).slice(0, 5).map((Je, Z) => {
    var at, Kt, Ze, Ve, it, Re;
    const Se = new Date(Je), ie = ((Kt = (at = L.daily) == null ? void 0 : at.weathercode) == null ? void 0 : Kt[Z]) || 0, Be = ((Ve = (Ze = L.daily) == null ? void 0 : Ze.temperature_2m_max) == null ? void 0 : Ve[Z]) || 0, mt = ((Re = (it = L.daily) == null ? void 0 : it.temperature_2m_min) == null ? void 0 : Re[Z]) || 0;
    return {
      day: fD(Se, Z),
      date: cD(Se),
      high: Gm(Be),
      low: Gm(mt),
      condition: pE(ie),
      icon: oT(ie)
    };
  });
  return {
    current: ht,
    forecast: S
  };
}
function pD() {
  const [L, X] = $u.useState(null), [j, gt] = $u.useState(!0), [ct, ht] = $u.useState(null);
  return $u.useEffect(() => {
    (async () => {
      gt(!0), ht(null);
      try {
        const vt = await sD(), ne = dD(vt);
        X(ne);
      } catch (vt) {
        ht(vt instanceof Error ? vt.message : "Failed to fetch weather data"), X(null);
      } finally {
        gt(!1);
      }
    })();
  }, []), j ? /* @__PURE__ */ xt.jsx(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "0 0 1rem 1rem"
      },
      children: /* @__PURE__ */ xt.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ xt.jsx("div", { style: { fontSize: "24px", marginBottom: "8px" }, children: "⏳" }),
        /* @__PURE__ */ xt.jsx("div", { style: { fontSize: "16px", color: "#6b7280" }, children: "Loading weather data..." })
      ] })
    }
  ) : ct ? /* @__PURE__ */ xt.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "0 0 1rem 1rem",
        padding: "24px"
      },
      children: [
        /* @__PURE__ */ xt.jsx("div", { style: { fontSize: "24px", marginBottom: "8px" }, children: "⚠️" }),
        /* @__PURE__ */ xt.jsx("div", { style: { fontSize: "16px", color: "#dc2626", textAlign: "center" }, children: ct })
      ]
    }
  ) : L ? /* @__PURE__ */ xt.jsx(
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
      children: /* @__PURE__ */ xt.jsxs(
        "div",
        {
          style: {
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "16px"
          },
          children: [
            /* @__PURE__ */ xt.jsx(
              "div",
              {
                style: {
                  borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
                  paddingBottom: "16px",
                  marginBottom: "16px"
                },
                children: /* @__PURE__ */ xt.jsxs(
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
                      /* @__PURE__ */ xt.jsxs("div", { style: { flex: 1, minWidth: "200px" }, children: [
                        /* @__PURE__ */ xt.jsx(
                          "h2",
                          {
                            style: {
                              fontSize: "24px",
                              fontWeight: "600",
                              color: "#111827",
                              margin: "0 0 8px 0"
                            },
                            children: L.current.location
                          }
                        ),
                        /* @__PURE__ */ xt.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              marginBottom: "8px"
                            },
                            children: [
                              /* @__PURE__ */ xt.jsx("span", { style: { fontSize: "48px" }, children: L.current.icon }),
                              /* @__PURE__ */ xt.jsxs("div", { children: [
                                /* @__PURE__ */ xt.jsxs(
                                  "div",
                                  {
                                    style: {
                                      fontSize: "48px",
                                      fontWeight: "600",
                                      color: "#111827",
                                      lineHeight: 1
                                    },
                                    children: [
                                      L.current.temperature,
                                      "°"
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ xt.jsx(
                                  "div",
                                  {
                                    style: {
                                      fontSize: "16px",
                                      color: "#6b7280"
                                    },
                                    children: L.current.condition
                                  }
                                )
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ xt.jsx(
                          "p",
                          {
                            style: {
                              fontSize: "14px",
                              color: "#6b7280",
                              margin: "8px 0 0 0",
                              textTransform: "capitalize"
                            },
                            children: L.current.description
                          }
                        )
                      ] }),
                      /* @__PURE__ */ xt.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            minWidth: "150px"
                          },
                          children: [
                            /* @__PURE__ */ xt.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "8px 0",
                                  borderBottom: "1px solid rgba(17, 24, 39, 0.1)"
                                },
                                children: [
                                  /* @__PURE__ */ xt.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Feels like" }),
                                  /* @__PURE__ */ xt.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                    L.current.feelsLike,
                                    "°"
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ xt.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "8px 0",
                                  borderBottom: "1px solid rgba(17, 24, 39, 0.1)"
                                },
                                children: [
                                  /* @__PURE__ */ xt.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Humidity" }),
                                  /* @__PURE__ */ xt.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                    L.current.humidity,
                                    "%"
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
            /* @__PURE__ */ xt.jsxs("div", { children: [
              /* @__PURE__ */ xt.jsx(
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
              /* @__PURE__ */ xt.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  },
                  children: L.forecast.map((S, vt) => /* @__PURE__ */ xt.jsxs(
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
                      onMouseEnter: (ne) => {
                        ne.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                      },
                      onMouseLeave: (ne) => {
                        ne.currentTarget.style.backgroundColor = "transparent";
                      },
                      children: [
                        /* @__PURE__ */ xt.jsx(
                          "div",
                          {
                            style: {
                              minWidth: "100px",
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "#111827"
                            },
                            children: S.day
                          }
                        ),
                        /* @__PURE__ */ xt.jsx(
                          "div",
                          {
                            style: {
                              minWidth: "60px",
                              fontSize: "12px",
                              color: "#6b7280"
                            },
                            children: S.date
                          }
                        ),
                        /* @__PURE__ */ xt.jsx(
                          "div",
                          {
                            style: {
                              fontSize: "24px",
                              minWidth: "40px",
                              textAlign: "center"
                            },
                            children: S.icon
                          }
                        ),
                        /* @__PURE__ */ xt.jsx(
                          "div",
                          {
                            style: {
                              flex: 1,
                              fontSize: "14px",
                              color: "#6b7280"
                            },
                            children: S.condition
                          }
                        ),
                        /* @__PURE__ */ xt.jsxs(
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
                              /* @__PURE__ */ xt.jsxs("span", { style: { color: "#111827" }, children: [
                                S.high,
                                "°"
                              ] }),
                              /* @__PURE__ */ xt.jsxs("span", { style: { color: "#9ca3af" }, children: [
                                S.low,
                                "°"
                              ] })
                            ]
                          }
                        )
                      ]
                    },
                    vt
                  ))
                }
              )
            ] })
          ]
        }
      )
    }
  ) : null;
}
let ev = null;
function yD(L) {
  ev = mE(L), ev.render(eD.createElement(pD));
}
function gD() {
  ev && (ev.unmount(), ev = null);
}
export {
  yD as mount,
  gD as unmount
};
