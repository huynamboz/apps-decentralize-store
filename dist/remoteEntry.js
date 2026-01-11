function K_(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I;
}
var pE = { exports: {} }, Et = {};
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
  if (XR) return Et;
  XR = 1;
  var I = Symbol.for("react.element"), K = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), St = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), tt = Symbol.for("react.provider"), S = Symbol.for("react.context"), lt = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ce = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function te(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Z && _[Z] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ue = Object.assign, ht = {};
  function mt(_, P, He) {
    this.props = _, this.context = P, this.refs = ht, this.updater = He || ne;
  }
  mt.prototype.isReactComponent = {}, mt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, mt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = mt.prototype;
  function vt(_, P, He) {
    this.props = _, this.context = P, this.refs = ht, this.updater = He || ne;
  }
  var Qe = vt.prototype = new fn();
  Qe.constructor = vt, Ue(Qe, mt.prototype), Qe.isPureReactComponent = !0;
  var yt = Array.isArray, be = Object.prototype.hasOwnProperty, ft = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(_, P, He) {
    var Ae, ut = {}, nt = null, Ze = null;
    if (P != null) for (Ae in P.ref !== void 0 && (Ze = P.ref), P.key !== void 0 && (nt = "" + P.key), P) be.call(P, Ae) && !Fe.hasOwnProperty(Ae) && (ut[Ae] = P[Ae]);
    var rt = arguments.length - 2;
    if (rt === 1) ut.children = He;
    else if (1 < rt) {
      for (var ot = Array(rt), Bt = 0; Bt < rt; Bt++) ot[Bt] = arguments[Bt + 2];
      ut.children = ot;
    }
    if (_ && _.defaultProps) for (Ae in rt = _.defaultProps, rt) ut[Ae] === void 0 && (ut[Ae] = rt[Ae]);
    return { $$typeof: I, type: _, key: nt, ref: Ze, props: ut, _owner: ft.current };
  }
  function Ht(_, P) {
    return { $$typeof: I, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Jt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === I;
  }
  function ln(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(He) {
      return P[He];
    });
  }
  var _t = /\/+/g;
  function ke(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? ln("" + _.key) : P.toString(36);
  }
  function jt(_, P, He, Ae, ut) {
    var nt = typeof _;
    (nt === "undefined" || nt === "boolean") && (_ = null);
    var Ze = !1;
    if (_ === null) Ze = !0;
    else switch (nt) {
      case "string":
      case "number":
        Ze = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case I:
          case K:
            Ze = !0;
        }
    }
    if (Ze) return Ze = _, ut = ut(Ze), _ = Ae === "" ? "." + ke(Ze, 0) : Ae, yt(ut) ? (He = "", _ != null && (He = _.replace(_t, "$&/") + "/"), jt(ut, P, He, "", function(Bt) {
      return Bt;
    })) : ut != null && (Jt(ut) && (ut = Ht(ut, He + (!ut.key || Ze && Ze.key === ut.key ? "" : ("" + ut.key).replace(_t, "$&/") + "/") + _)), P.push(ut)), 1;
    if (Ze = 0, Ae = Ae === "" ? "." : Ae + ":", yt(_)) for (var rt = 0; rt < _.length; rt++) {
      nt = _[rt];
      var ot = Ae + ke(nt, rt);
      Ze += jt(nt, P, He, ot, ut);
    }
    else if (ot = te(_), typeof ot == "function") for (_ = ot.call(_), rt = 0; !(nt = _.next()).done; ) nt = nt.value, ot = Ae + ke(nt, rt++), Ze += jt(nt, P, He, ot, ut);
    else if (nt === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Ze;
  }
  function Dt(_, P, He) {
    if (_ == null) return _;
    var Ae = [], ut = 0;
    return jt(_, Ae, "", "", function(nt) {
      return P.call(He, nt, ut++);
    }), Ae;
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
  var Ce = { current: null }, J = { transition: null }, Re = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: J, ReactCurrentOwner: ft };
  function ae() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: Dt, forEach: function(_, P, He) {
    Dt(_, function() {
      P.apply(this, arguments);
    }, He);
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
    if (!Jt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = mt, Et.Fragment = A, Et.Profiler = Be, Et.PureComponent = vt, Et.StrictMode = St, Et.Suspense = le, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, Et.act = ae, Et.cloneElement = function(_, P, He) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ae = Ue({}, _.props), ut = _.key, nt = _.ref, Ze = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (nt = P.ref, Ze = ft.current), P.key !== void 0 && (ut = "" + P.key), _.type && _.type.defaultProps) var rt = _.type.defaultProps;
      for (ot in P) be.call(P, ot) && !Fe.hasOwnProperty(ot) && (Ae[ot] = P[ot] === void 0 && rt !== void 0 ? rt[ot] : P[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1) Ae.children = He;
    else if (1 < ot) {
      rt = Array(ot);
      for (var Bt = 0; Bt < ot; Bt++) rt[Bt] = arguments[Bt + 2];
      Ae.children = rt;
    }
    return { $$typeof: I, type: _.type, key: ut, ref: nt, props: Ae, _owner: Ze };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: tt, _context: _ }, _.Consumer = _;
  }, Et.createElement = an, Et.createFactory = function(_) {
    var P = an.bind(null, _);
    return P.type = _, P;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: lt, render: _ };
  }, Et.isValidElement = Jt, Et.lazy = function(_) {
    return { $$typeof: Xe, _payload: { _status: -1, _result: _ }, _init: Ot };
  }, Et.memo = function(_, P) {
    return { $$typeof: ce, type: _, compare: P === void 0 ? null : P };
  }, Et.startTransition = function(_) {
    var P = J.transition;
    J.transition = {};
    try {
      _();
    } finally {
      J.transition = P;
    }
  }, Et.unstable_act = ae, Et.useCallback = function(_, P) {
    return Ce.current.useCallback(_, P);
  }, Et.useContext = function(_) {
    return Ce.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return Ce.current.useDeferredValue(_);
  }, Et.useEffect = function(_, P) {
    return Ce.current.useEffect(_, P);
  }, Et.useId = function() {
    return Ce.current.useId();
  }, Et.useImperativeHandle = function(_, P, He) {
    return Ce.current.useImperativeHandle(_, P, He);
  }, Et.useInsertionEffect = function(_, P) {
    return Ce.current.useInsertionEffect(_, P);
  }, Et.useLayoutEffect = function(_, P) {
    return Ce.current.useLayoutEffect(_, P);
  }, Et.useMemo = function(_, P) {
    return Ce.current.useMemo(_, P);
  }, Et.useReducer = function(_, P, He) {
    return Ce.current.useReducer(_, P, He);
  }, Et.useRef = function(_) {
    return Ce.current.useRef(_);
  }, Et.useState = function(_) {
    return Ce.current.useState(_);
  }, Et.useSyncExternalStore = function(_, P, He) {
    return Ce.current.useSyncExternalStore(_, P, He);
  }, Et.useTransition = function() {
    return Ce.current.useTransition();
  }, Et.version = "18.3.1", Et;
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
var JR;
function J_() {
  return JR || (JR = 1, function(I, K) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", St = Symbol.for("react.element"), Be = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), ce = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ht = Symbol.for("react.offscreen"), mt = Symbol.iterator, fn = "@@iterator";
      function vt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = mt && h[mt] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
        transition: null
      }, be = {
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
      var Jt = !1, ln = !1, _t = !1, ke = !1, jt = !1, Dt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: ft
      };
      Dt.ReactDebugCurrentFrame = Fe, Dt.ReactCurrentActQueue = be;
      function Ot(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          J("warn", h, N);
        }
      }
      function Ce(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          J("error", h, N);
        }
      }
      function J(h, C, N) {
        {
          var j = Dt.ReactDebugCurrentFrame, X = j.getStackAddendum();
          X !== "" && (C += "%s", N = N.concat([X]));
          var Oe = N.map(function(ie) {
            return String(ie);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var Re = {};
      function ae(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", X = j + "." + C;
          if (Re[X])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Re[X] = !0;
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
          ae(h, "forceUpdate");
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
          ae(h, "replaceState");
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
          ae(h, "setState");
        }
      }, P = Object.assign, He = {};
      Object.freeze(He);
      function Ae(h, C, N) {
        this.props = h, this.context = C, this.refs = He, this.updater = N || _;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ae.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, nt = function(h, C) {
          Object.defineProperty(Ae.prototype, h, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ze in ut)
          ut.hasOwnProperty(Ze) && nt(Ze, ut[Ze]);
      }
      function rt() {
      }
      rt.prototype = Ae.prototype;
      function ot(h, C, N) {
        this.props = h, this.context = C, this.refs = He, this.updater = N || _;
      }
      var Bt = ot.prototype = new rt();
      Bt.constructor = ot, P(Bt, Ae.prototype), Bt.isPureReactComponent = !0;
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
      function Yr(h) {
        if (Vn(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var X = C.displayName || C.name || "";
        return X !== "" ? N + "(" + X + ")" : N;
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
          case tt:
            return "Fragment";
          case Be:
            return "Portal";
          case lt:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ce:
              var C = h;
              return oa(C) + ".Consumer";
            case le:
              var N = h;
              return oa(N._context) + ".Provider";
            case Xe:
              return si(h, h.render, "ForwardRef");
            case ne:
              var j = h.displayName || null;
              return j !== null ? j : qn(h.type) || "Memo";
            case Ue: {
              var X = h, Oe = X._payload, ie = X._init;
              try {
                return qn(ie(Oe));
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
        var N = function() {
          gr || (gr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, C) {
        var N = function() {
          Ya || (Ya = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ee(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = qn(ft.current.type);
          Ln[C] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var Te = function(h, C, N, j, X, Oe, ie) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: St,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ie,
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
          value: X
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function at(h, C, N) {
        var j, X = {}, Oe = null, ie = null, Ne = null, pt = null;
        if (C != null) {
          Sr(C) && (ie = C.ref, ee(C)), sa(C) && (Yr(C.key), Oe = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !In.hasOwnProperty(j) && (X[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          X.children = N;
        else if (bt > 1) {
          for (var nn = Array(bt), $t = 0; $t < bt; $t++)
            nn[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(nn), X.children = nn;
        }
        if (h && h.defaultProps) {
          var it = h.defaultProps;
          for (j in it)
            X[j] === void 0 && (X[j] = it[j]);
        }
        if (Oe || ie) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Wa(X, Qt), ie && ci(X, Qt);
        }
        return Te(h, Oe, ie, Ne, pt, ft.current, X);
      }
      function Ft(h, C) {
        var N = Te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Zt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, X = P({}, h.props), Oe = h.key, ie = h.ref, Ne = h._self, pt = h._source, bt = h._owner;
        if (C != null) {
          Sr(C) && (ie = C.ref, bt = ft.current), sa(C) && (Yr(C.key), Oe = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !In.hasOwnProperty(j) && (C[j] === void 0 && nn !== void 0 ? X[j] = nn[j] : X[j] = C[j]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          X.children = N;
        else if ($t > 1) {
          for (var it = Array($t), Qt = 0; Qt < $t; Qt++)
            it[Qt] = arguments[Qt + 2];
          X.children = it;
        }
        return Te(h.type, Oe, ie, Ne, pt, bt, X);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === St;
      }
      var un = ".", Kn = ":";
      function en(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(X) {
          return N[X];
        });
        return "$" + j;
      }
      var It = !1, Yt = /\/+/g;
      function ca(h) {
        return h.replace(Yt, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Yr(h.key), en("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, N, j, X) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ie = !1;
        if (h === null)
          ie = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ie = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case St:
                case Be:
                  ie = !0;
              }
          }
        if (ie) {
          var Ne = h, pt = X(Ne), bt = j === "" ? un + Er(Ne, 0) : j;
          if (Cn(pt)) {
            var nn = "";
            bt != null && (nn = ca(bt) + "/"), Ta(pt, C, nn, "", function(qf) {
              return qf;
            });
          } else pt != null && (vn(pt) && (pt.key && (!Ne || Ne.key !== pt.key) && Yr(pt.key), pt = Ft(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Ne || Ne.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + pt.key) + "/"
            ) : "") + bt
          )), C.push(pt));
          return 1;
        }
        var $t, it, Qt = 0, hn = j === "" ? un : j + Kn;
        if (Cn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            $t = h[Rl], it = hn + Er($t, Rl), Qt += Ta($t, C, N, it, X);
        else {
          var qo = vt(h);
          if (typeof qo == "function") {
            var Vi = h;
            qo === Vi.entries && (It || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Ko = qo.call(Vi), ou, Gf = 0; !(ou = Ko.next()).done; )
              $t = ou.value, it = hn + Er($t, Gf++), Qt += Ta($t, C, N, it, X);
          } else if (Oe === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, C, N) {
        if (h == null)
          return h;
        var j = [], X = 0;
        return Ta(h, j, "", "", function(Oe) {
          return C.call(N, Oe, X++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return Fi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, N) {
        Fi(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function pl(h) {
        return Fi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
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
          $$typeof: le,
          _context: C
        };
        var N = !1, j = !1, X = !1;
        {
          var Oe = {
            $$typeof: ce,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return j || (j = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ie) {
                C.Provider = ie;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ie) {
                C._currentValue = ie;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ie) {
                C._currentValue2 = ie;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ie) {
                C._threadCount = ie;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ie) {
                X || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ie), X = !0);
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
              var ie = h;
              ie._status = rr, ie._result = Oe;
            }
          }, function(Oe) {
            if (h._status === _r || h._status === br) {
              var ie = h;
              ie._status = fi, ie._result = Oe;
            }
          }), h._status === br) {
            var j = h;
            j._status = _r, j._result = N;
          }
        }
        if (h._status === rr) {
          var X = h._result;
          return X === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: br,
          _result: h
        }, N = {
          $$typeof: Ue,
          _payload: C,
          _init: $a
        };
        {
          var j, X;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Oe, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Oe) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Oe, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function pi(h) {
        h != null && h.$$typeof === ne ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Xe,
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
        return !!(typeof h == "string" || typeof h == "function" || h === tt || h === lt || jt || h === S || h === Z || h === te || ke || h === ht || Jt || ln || _t || typeof h == "object" && h !== null && (h.$$typeof === Ue || h.$$typeof === ne || h.$$typeof === le || h.$$typeof === ce || h.$$typeof === Xe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        B(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ne,
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
            set: function(X) {
              j = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return N;
      }
      function me() {
        var h = Qe.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function qe(h) {
        var C = me();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = me();
        return C.useState(h);
      }
      function dt(h, C, N) {
        var j = me();
        return j.useReducer(h, C, N);
      }
      function st(h) {
        var C = me();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var N = me();
        return N.useEffect(h, C);
      }
      function tn(h, C) {
        var N = me();
        return N.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var N = me();
        return N.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var N = me();
        return N.useCallback(h, C);
      }
      function Qa(h, C) {
        var N = me();
        return N.useMemo(h, C);
      }
      function Ga(h, C, N) {
        var j = me();
        return j.useImperativeHandle(h, C, N);
      }
      function Ke(h, C) {
        {
          var N = me();
          return N.useDebugValue(h, C);
        }
      }
      function et() {
        var h = me();
        return h.useTransition();
      }
      function qa(h) {
        var C = me();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = me();
        return h.useId();
      }
      function ru(h, C, N) {
        var j = me();
        return j.useSyncExternalStore(h, C, N);
      }
      var hl = 0, Qu, ml, Wr, Wo, Dr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Qu = console.log, ml = console.info, Wr = console.warn, Wo = console.error, Dr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
          hl++;
        }
      }
      function fa() {
        {
          if (hl--, hl === 0) {
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
                value: ml
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
          hl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = Dt.ReactCurrentDispatcher, Xa;
      function qu(h, C, N) {
        {
          if (Xa === void 0)
            try {
              throw Error();
            } catch (X) {
              var j = X.stack.trim().match(/\n( *(at )?)/);
              Xa = j && j[1] || "";
            }
          return `
` + Xa + h;
        }
      }
      var au = !1, gl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Ku();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var N = gl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        au = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Ka.current, Ka.current = null, yl();
        try {
          if (C) {
            var ie = function() {
              throw Error();
            };
            if (Object.defineProperty(ie.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ie, []);
              } catch (hn) {
                j = hn;
              }
              Reflect.construct(h, [], ie);
            } else {
              try {
                ie.call();
              } catch (hn) {
                j = hn;
              }
              h.call(ie.prototype);
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
`), pt = j.stack.split(`
`), bt = Ne.length - 1, nn = pt.length - 1; bt >= 1 && nn >= 0 && Ne[bt] !== pt[nn]; )
              nn--;
            for (; bt >= 1 && nn >= 0; bt--, nn--)
              if (Ne[bt] !== pt[nn]) {
                if (bt !== 1 || nn !== 1)
                  do
                    if (bt--, nn--, nn < 0 || Ne[bt] !== pt[nn]) {
                      var $t = `
` + Ne[bt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, $t), $t;
                    }
                  while (bt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ka.current = Oe, fa(), Error.prepareStackTrace = X;
        }
        var it = h ? h.displayName || h.name : "", Qt = it ? qu(it) : "";
        return typeof h == "function" && gl.set(h, Qt), Qt;
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
          return qu(h);
        switch (h) {
          case Z:
            return qu("Suspense");
          case te:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Xe:
              return Hi(h.render);
            case ne:
              return Pi(h.type, C, N);
            case Ue: {
              var j = h, X = j._payload, Oe = j._init;
              try {
                return Pi(Oe(X), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Ju = Dt.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, N = Pi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(N);
        } else
          Ju.setExtraStackFrame(null);
      }
      function $o(h, C, N, j, X) {
        {
          var Oe = Function.call.bind(Rn);
          for (var ie in h)
            if (Oe(h, ie)) {
              var Ne = void 0;
              try {
                if (typeof h[ie] != "function") {
                  var pt = Error((j || "React class") + ": " + N + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ne = h[ie](C, ie, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Ne = bt;
              }
              Ne && !(Ne instanceof Error) && (wt(X), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, ie, typeof Ne), wt(null)), Ne instanceof Error && !(Ne.message in Lt) && (Lt[Ne.message] = !0, wt(X), Ce("Failed %s type: %s", N, Ne.message), wt(null));
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
            h && h._owner && h._owner !== ft.current && (j = " It was passed a child from " + qn(h._owner.type) + "."), vi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), vi(null);
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
            var X = vt(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Oe = X.call(h), ie; !(ie = Oe.next()).done; )
                vn(ie.value) && sn(ie.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Xe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ne))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = qn(C);
            $o(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ie) {
            Ie = !0;
            var X = qn(C);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Yn(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              vi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, N) {
        var j = B(h);
        if (!j) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = hi(C);
          Oe ? X += Oe : X += Zu();
          var ie;
          h === null ? ie = "null" : Cn(h) ? ie = "array" : h !== void 0 && h.$$typeof === St ? (ie = "<" + (qn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, X);
        }
        var Ne = at.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (j)
          for (var pt = 2; pt < arguments.length; pt++)
            Wt(arguments[pt], h);
        return h === tt ? Yn(Ne) : Sl(Ne), Ne;
      }
      var xa = !1;
      function iu(h) {
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
      function Qo(h, C, N) {
        for (var j = Zt.apply(this, arguments), X = 2; X < arguments.length; X++)
          Wt(arguments[X], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var N = yt.transition;
        yt.transition = {};
        var j = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (yt.transition = N, N === null && j._updatedFibers) {
            var X = j._updatedFibers.size;
            X > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Qf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = I && I[C];
            lu = N.call(I, "timers").setImmediate;
          } catch {
            lu = function(X) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = X, Oe.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var wa = 0, Ja = !1;
      function yi(h) {
        {
          var C = wa;
          wa++, be.current === null && (be.current = []);
          var N = be.isBatchingLegacy, j;
          try {
            if (be.isBatchingLegacy = !0, j = h(), !N && be.didScheduleLegacyUpdate) {
              var X = be.current;
              X !== null && (be.didScheduleLegacyUpdate = !1, Cl(X));
            }
          } catch (it) {
            throw ba(C), it;
          } finally {
            be.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Oe = j, ie = !1, Ne = {
              then: function(it, Qt) {
                ie = !0, Oe.then(function(hn) {
                  ba(C), wa === 0 ? eo(hn, it, Qt) : it(hn);
                }, function(hn) {
                  ba(C), Qt(hn);
                });
              }
            };
            return !Ja && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ie || (Ja = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var pt = j;
            if (ba(C), wa === 0) {
              var bt = be.current;
              bt !== null && (Cl(bt), be.current = null);
              var nn = {
                then: function(it, Qt) {
                  be.current === null ? (be.current = [], eo(pt, it, Qt)) : it(pt);
                }
              };
              return nn;
            } else {
              var $t = {
                then: function(it, Qt) {
                  it(pt);
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
      function eo(h, C, N) {
        {
          var j = be.current;
          if (j !== null)
            try {
              Cl(j), Qf(function() {
                j.length === 0 ? (be.current = null, C(h)) : eo(h, C, N);
              });
            } catch (X) {
              N(X);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
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
            to = !1;
          }
        }
      }
      var uu = Or, no = Qo, ro = iu, Za = {
        map: Fi,
        forEach: eu,
        count: Zl,
        toArray: pl,
        only: vl
      };
      K.Children = Za, K.Component = Ae, K.Fragment = tt, K.Profiler = lt, K.PureComponent = ot, K.StrictMode = S, K.Suspense = Z, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, K.act = yi, K.cloneElement = no, K.createContext = tu, K.createElement = uu, K.createFactory = ro, K.createRef = On, K.forwardRef = pi, K.isValidElement = vn, K.lazy = di, K.memo = ue, K.startTransition = Go, K.unstable_act = yi, K.useCallback = ar, K.useContext = qe, K.useDebugValue = Ke, K.useDeferredValue = qa, K.useEffect = Tn, K.useId = nu, K.useImperativeHandle = Ga, K.useInsertionEffect = tn, K.useLayoutEffect = on, K.useMemo = Qa, K.useReducer = dt, K.useRef = st, K.useState = Ye, K.useSyncExternalStore = ru, K.useTransition = et, K.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
process.env.NODE_ENV === "production" ? pE.exports = X_() : pE.exports = J_();
var dl = pE.exports;
const Z_ = /* @__PURE__ */ K_(dl);
var vE = { exports: {} }, Ba = {}, $m = { exports: {} }, fE = {};
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
function eD() {
  return ZR || (ZR = 1, function(I) {
    function K(J, Re) {
      var ae = J.length;
      J.push(Re);
      e: for (; 0 < ae; ) {
        var _ = ae - 1 >>> 1, P = J[_];
        if (0 < Be(P, Re)) J[_] = Re, J[ae] = P, ae = _;
        else break e;
      }
    }
    function A(J) {
      return J.length === 0 ? null : J[0];
    }
    function St(J) {
      if (J.length === 0) return null;
      var Re = J[0], ae = J.pop();
      if (ae !== Re) {
        J[0] = ae;
        e: for (var _ = 0, P = J.length, He = P >>> 1; _ < He; ) {
          var Ae = 2 * (_ + 1) - 1, ut = J[Ae], nt = Ae + 1, Ze = J[nt];
          if (0 > Be(ut, ae)) nt < P && 0 > Be(Ze, ut) ? (J[_] = Ze, J[nt] = ae, _ = nt) : (J[_] = ut, J[Ae] = ae, _ = Ae);
          else if (nt < P && 0 > Be(Ze, ae)) J[_] = Ze, J[nt] = ae, _ = nt;
          else break e;
        }
      }
      return Re;
    }
    function Be(J, Re) {
      var ae = J.sortIndex - Re.sortIndex;
      return ae !== 0 ? ae : J.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var tt = performance;
      I.unstable_now = function() {
        return tt.now();
      };
    } else {
      var S = Date, lt = S.now();
      I.unstable_now = function() {
        return S.now() - lt;
      };
    }
    var le = [], ce = [], Xe = 1, Z = null, te = 3, ne = !1, Ue = !1, ht = !1, mt = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, vt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(J) {
      for (var Re = A(ce); Re !== null; ) {
        if (Re.callback === null) St(ce);
        else if (Re.startTime <= J) St(ce), Re.sortIndex = Re.expirationTime, K(le, Re);
        else break;
        Re = A(ce);
      }
    }
    function yt(J) {
      if (ht = !1, Qe(J), !Ue) if (A(le) !== null) Ue = !0, Ot(be);
      else {
        var Re = A(ce);
        Re !== null && Ce(yt, Re.startTime - J);
      }
    }
    function be(J, Re) {
      Ue = !1, ht && (ht = !1, fn(an), an = -1), ne = !0;
      var ae = te;
      try {
        for (Qe(Re), Z = A(le); Z !== null && (!(Z.expirationTime > Re) || J && !ln()); ) {
          var _ = Z.callback;
          if (typeof _ == "function") {
            Z.callback = null, te = Z.priorityLevel;
            var P = _(Z.expirationTime <= Re);
            Re = I.unstable_now(), typeof P == "function" ? Z.callback = P : Z === A(le) && St(le), Qe(Re);
          } else St(le);
          Z = A(le);
        }
        if (Z !== null) var He = !0;
        else {
          var Ae = A(ce);
          Ae !== null && Ce(yt, Ae.startTime - Re), He = !1;
        }
        return He;
      } finally {
        Z = null, te = ae, ne = !1;
      }
    }
    var ft = !1, Fe = null, an = -1, Ht = 5, Jt = -1;
    function ln() {
      return !(I.unstable_now() - Jt < Ht);
    }
    function _t() {
      if (Fe !== null) {
        var J = I.unstable_now();
        Jt = J;
        var Re = !0;
        try {
          Re = Fe(!0, J);
        } finally {
          Re ? ke() : (ft = !1, Fe = null);
        }
      } else ft = !1;
    }
    var ke;
    if (typeof vt == "function") ke = function() {
      vt(_t);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), Dt = jt.port2;
      jt.port1.onmessage = _t, ke = function() {
        Dt.postMessage(null);
      };
    } else ke = function() {
      mt(_t, 0);
    };
    function Ot(J) {
      Fe = J, ft || (ft = !0, ke());
    }
    function Ce(J, Re) {
      an = mt(function() {
        J(I.unstable_now());
      }, Re);
    }
    I.unstable_IdlePriority = 5, I.unstable_ImmediatePriority = 1, I.unstable_LowPriority = 4, I.unstable_NormalPriority = 3, I.unstable_Profiling = null, I.unstable_UserBlockingPriority = 2, I.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, I.unstable_continueExecution = function() {
      Ue || ne || (Ue = !0, Ot(be));
    }, I.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ht = 0 < J ? Math.floor(1e3 / J) : 5;
    }, I.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, I.unstable_getFirstCallbackNode = function() {
      return A(le);
    }, I.unstable_next = function(J) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = te;
      }
      var ae = te;
      te = Re;
      try {
        return J();
      } finally {
        te = ae;
      }
    }, I.unstable_pauseExecution = function() {
    }, I.unstable_requestPaint = function() {
    }, I.unstable_runWithPriority = function(J, Re) {
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
      var ae = te;
      te = J;
      try {
        return Re();
      } finally {
        te = ae;
      }
    }, I.unstable_scheduleCallback = function(J, Re, ae) {
      var _ = I.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? _ + ae : _) : ae = _, J) {
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
      return P = ae + P, J = { id: Xe++, callback: Re, priorityLevel: J, startTime: ae, expirationTime: P, sortIndex: -1 }, ae > _ ? (J.sortIndex = ae, K(ce, J), A(le) === null && J === A(ce) && (ht ? (fn(an), an = -1) : ht = !0, Ce(yt, ae - _))) : (J.sortIndex = P, K(le, J), Ue || ne || (Ue = !0, Ot(be))), J;
    }, I.unstable_shouldYield = ln, I.unstable_wrapCallback = function(J) {
      var Re = te;
      return function() {
        var ae = te;
        te = Re;
        try {
          return J.apply(this, arguments);
        } finally {
          te = ae;
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
var eT;
function tD() {
  return eT || (eT = 1, function(I) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, A = 5;
      function St(ee, Te) {
        var at = ee.length;
        ee.push(Te), S(ee, Te, at);
      }
      function Be(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function tt(ee) {
        if (ee.length === 0)
          return null;
        var Te = ee[0], at = ee.pop();
        return at !== Te && (ee[0] = at, lt(ee, at, 0)), Te;
      }
      function S(ee, Te, at) {
        for (var Ft = at; Ft > 0; ) {
          var Zt = Ft - 1 >>> 1, vn = ee[Zt];
          if (le(vn, Te) > 0)
            ee[Zt] = Te, ee[Ft] = vn, Ft = Zt;
          else
            return;
        }
      }
      function lt(ee, Te, at) {
        for (var Ft = at, Zt = ee.length, vn = Zt >>> 1; Ft < vn; ) {
          var un = (Ft + 1) * 2 - 1, Kn = ee[un], en = un + 1, It = ee[en];
          if (le(Kn, Te) < 0)
            en < Zt && le(It, Kn) < 0 ? (ee[Ft] = It, ee[en] = Te, Ft = en) : (ee[Ft] = Kn, ee[un] = Te, Ft = un);
          else if (en < Zt && le(It, Te) < 0)
            ee[Ft] = It, ee[en] = Te, Ft = en;
          else
            return;
        }
      }
      function le(ee, Te) {
        var at = ee.sortIndex - Te.sortIndex;
        return at !== 0 ? at : ee.id - Te.id;
      }
      var ce = 1, Xe = 2, Z = 3, te = 4, ne = 5;
      function Ue(ee, Te) {
      }
      var ht = typeof performance == "object" && typeof performance.now == "function";
      if (ht) {
        var mt = performance;
        I.unstable_now = function() {
          return mt.now();
        };
      } else {
        var fn = Date, vt = fn.now();
        I.unstable_now = function() {
          return fn.now() - vt;
        };
      }
      var Qe = 1073741823, yt = -1, be = 250, ft = 5e3, Fe = 1e4, an = Qe, Ht = [], Jt = [], ln = 1, _t = null, ke = Z, jt = !1, Dt = !1, Ot = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ae(ee) {
        for (var Te = Be(Jt); Te !== null; ) {
          if (Te.callback === null)
            tt(Jt);
          else if (Te.startTime <= ee)
            tt(Jt), Te.sortIndex = Te.expirationTime, St(Ht, Te);
          else
            return;
          Te = Be(Jt);
        }
      }
      function _(ee) {
        if (Ot = !1, ae(ee), !Dt)
          if (Be(Ht) !== null)
            Dt = !0, Ln(P);
          else {
            var Te = Be(Jt);
            Te !== null && Sr(_, Te.startTime - ee);
          }
      }
      function P(ee, Te) {
        Dt = !1, Ot && (Ot = !1, sa()), jt = !0;
        var at = ke;
        try {
          var Ft;
          if (!K) return He(ee, Te);
        } finally {
          _t = null, ke = at, jt = !1;
        }
      }
      function He(ee, Te) {
        var at = Te;
        for (ae(at), _t = Be(Ht); _t !== null && !(_t.expirationTime > at && (!ee || si())); ) {
          var Ft = _t.callback;
          if (typeof Ft == "function") {
            _t.callback = null, ke = _t.priorityLevel;
            var Zt = _t.expirationTime <= at, vn = Ft(Zt);
            at = I.unstable_now(), typeof vn == "function" ? _t.callback = vn : _t === Be(Ht) && tt(Ht), ae(at);
          } else
            tt(Ht);
          _t = Be(Ht);
        }
        if (_t !== null)
          return !0;
        var un = Be(Jt);
        return un !== null && Sr(_, un.startTime - at), !1;
      }
      function Ae(ee, Te) {
        switch (ee) {
          case ce:
          case Xe:
          case Z:
          case te:
          case ne:
            break;
          default:
            ee = Z;
        }
        var at = ke;
        ke = ee;
        try {
          return Te();
        } finally {
          ke = at;
        }
      }
      function ut(ee) {
        var Te;
        switch (ke) {
          case ce:
          case Xe:
          case Z:
            Te = Z;
            break;
          default:
            Te = ke;
            break;
        }
        var at = ke;
        ke = Te;
        try {
          return ee();
        } finally {
          ke = at;
        }
      }
      function nt(ee) {
        var Te = ke;
        return function() {
          var at = ke;
          ke = Te;
          try {
            return ee.apply(this, arguments);
          } finally {
            ke = at;
          }
        };
      }
      function Ze(ee, Te, at) {
        var Ft = I.unstable_now(), Zt;
        if (typeof at == "object" && at !== null) {
          var vn = at.delay;
          typeof vn == "number" && vn > 0 ? Zt = Ft + vn : Zt = Ft;
        } else
          Zt = Ft;
        var un;
        switch (ee) {
          case ce:
            un = yt;
            break;
          case Xe:
            un = be;
            break;
          case ne:
            un = an;
            break;
          case te:
            un = Fe;
            break;
          case Z:
          default:
            un = ft;
            break;
        }
        var Kn = Zt + un, en = {
          id: ln++,
          callback: Te,
          priorityLevel: ee,
          startTime: Zt,
          expirationTime: Kn,
          sortIndex: -1
        };
        return Zt > Ft ? (en.sortIndex = Zt, St(Jt, en), Be(Ht) === null && en === Be(Jt) && (Ot ? sa() : Ot = !0, Sr(_, Zt - Ft))) : (en.sortIndex = Kn, St(Ht, en), !Dt && !jt && (Dt = !0, Ln(P))), en;
      }
      function rt() {
      }
      function ot() {
        !Dt && !jt && (Dt = !0, Ln(P));
      }
      function Bt() {
        return Be(Ht);
      }
      function On(ee) {
        ee.callback = null;
      }
      function wr() {
        return ke;
      }
      var Cn = !1, nr = null, Vn = -1, Bn = A, Yr = -1;
      function si() {
        var ee = I.unstable_now() - Yr;
        return !(ee < Bn);
      }
      function oa() {
      }
      function qn(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? Bn = Math.floor(1e3 / ee) : Bn = A;
      }
      var Rn = function() {
        if (nr !== null) {
          var ee = I.unstable_now();
          Yr = ee;
          var Te = !0, at = !0;
          try {
            at = nr(Te, ee);
          } finally {
            at ? In() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, In;
      if (typeof Re == "function")
        In = function() {
          Re(Rn);
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
      function Sr(ee, Te) {
        Vn = Ce(function() {
          ee(I.unstable_now());
        }, Te);
      }
      function sa() {
        J(Vn), Vn = -1;
      }
      var Wa = oa, ci = null;
      I.unstable_IdlePriority = ne, I.unstable_ImmediatePriority = ce, I.unstable_LowPriority = te, I.unstable_NormalPriority = Z, I.unstable_Profiling = ci, I.unstable_UserBlockingPriority = Xe, I.unstable_cancelCallback = On, I.unstable_continueExecution = ot, I.unstable_forceFrameRate = qn, I.unstable_getCurrentPriorityLevel = wr, I.unstable_getFirstCallbackNode = Bt, I.unstable_next = ut, I.unstable_pauseExecution = rt, I.unstable_requestPaint = Wa, I.unstable_runWithPriority = Ae, I.unstable_scheduleCallback = Ze, I.unstable_shouldYield = si, I.unstable_wrapCallback = nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dE)), dE;
}
var tT;
function oT() {
  return tT || (tT = 1, process.env.NODE_ENV === "production" ? $m.exports = eD() : $m.exports = tD()), $m.exports;
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
var nT;
function nD() {
  if (nT) return Ba;
  nT = 1;
  var I = dl, K = oT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var St = /* @__PURE__ */ new Set(), Be = {};
  function tt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Be[n] = r, n = 0; n < r.length; n++) St.add(r[n]);
  }
  var lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), le = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xe = {}, Z = {};
  function te(n) {
    return le.call(Z, n) ? !0 : le.call(Xe, n) ? !1 : ce.test(n) ? Z[n] = !0 : (Xe[n] = !0, !1);
  }
  function ne(n, r, l, o) {
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
  function Ue(n, r, l, o) {
    if (r === null || typeof r > "u" || ne(n, r, l, o)) return !0;
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
  function ht(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var mt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    mt[n] = new ht(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    mt[r] = new ht(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    mt[n] = new ht(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    mt[n] = new ht(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    mt[n] = new ht(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    mt[n] = new ht(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    mt[n] = new ht(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    mt[n] = new ht(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    mt[n] = new ht(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function vt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      vt
    );
    mt[r] = new ht(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, vt);
    mt[r] = new ht(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, vt);
    mt[r] = new ht(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    mt[n] = new ht(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), mt.xlinkHref = new ht("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    mt[n] = new ht(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = mt.hasOwnProperty(r) ? mt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ue(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var yt = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ft = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), Jt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, _;
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
  function Ae(n, r) {
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
  function ut(n) {
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
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case ft:
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
      case Jt:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Dt:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ze(n) {
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
        return nt(r);
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
  function rt(n) {
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
  function ot(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = ot(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    return n && (o = ot(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = rt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function Yr(n, r) {
    Bn(n, r);
    var l = rt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, rt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + rt(l), r = null, c = 0; c < n.length; c++) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: rt(l) };
  }
  function Ya(n, r) {
    var l = rt(r.value), o = rt(r.defaultValue);
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
  }, at = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    at.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function Zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var vn = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function Kn(n, r) {
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
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, ca = null, Er = null;
  function Ta(n) {
    if (n = _e(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = mn(r), Yt(n.stateNode, n.type, r));
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
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (ca !== null || Er !== null) && (pl(), Zl());
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
  if (lt) try {
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
    } catch ($) {
      this.onError($);
    }
  }
  var $a = !1, di = null, pi = !1, R = null, B = { onError: function(n) {
    $a = !0, di = n;
  } };
  function ue(n, r, l, o, c, d, m, E, T) {
    $a = !1, di = null, fi.apply(B, arguments);
  }
  function me(n, r, l, o, c, d, m, E, T) {
    if (ue.apply(this, arguments), $a) {
      if ($a) {
        var z = di;
        $a = !1, di = null;
      } else throw Error(A(198));
      pi || (pi = !0, R = z);
    }
  }
  function qe(n) {
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
    if (qe(n) !== n) throw Error(A(188));
  }
  function st(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null) throw Error(A(188));
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
    return n = st(n), n !== null ? tn(n) : null;
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
  var on = K.unstable_scheduleCallback, ar = K.unstable_cancelCallback, Qa = K.unstable_shouldYield, Ga = K.unstable_requestPaint, Ke = K.unstable_now, et = K.unstable_getCurrentPriorityLevel, qa = K.unstable_ImmediatePriority, nu = K.unstable_UserBlockingPriority, ru = K.unstable_NormalPriority, hl = K.unstable_LowPriority, Qu = K.unstable_IdlePriority, ml = null, Wr = null;
  function Wo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, fa = 4194304;
  function Ka(n) {
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
  function Xa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ka(E) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
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
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = qu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
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
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, $o, vi, Ie, Zu, ir = !1, hi = [], kr = null, mi = null, sn = null, Wt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), Yn = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        Wt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _e(r), r !== null && $o(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return kr = iu(kr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = iu(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = iu(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Wt.set(d, iu(Wt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = qe(r);
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
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        en = o, l.target.dispatchEvent(o), en = null;
      } else return r = _e(l), r !== null && $o(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Qf() {
    ir = !1, kr !== null && El(kr) && (kr = null), mi !== null && El(mi) && (mi = null), sn !== null && El(sn) && (sn = null), Wt.forEach(lu), Sl.forEach(lu);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Qf)));
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
    for (kr !== null && wa(kr, n), mi !== null && wa(mi, n), sn !== null && wa(sn, n), Wt.forEach(r), Sl.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && Yn.shift();
  }
  var yi = yt.ReactCurrentBatchConfig, ba = !0;
  function eo(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 1, Cl(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Lt, d = yi.transition;
    yi.transition = null;
    try {
      Lt = 4, Cl(n, r, l, o);
    } finally {
      Lt = c, yi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (ba) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), xa(n, o);
      else if (Qo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = _e(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = It(o), n = vu(n), n !== null) if (r = qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ye(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
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
        switch (et()) {
          case qa:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
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
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ie(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Oe, this.isPropagationStopped = Oe, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var Ne = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pt = ie(Ne), bt = ae({}, Ne, { view: 0, detail: 0 }), nn = ie(bt), $t, it, Qt, hn = ae({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? ($t = n.screenX - Qt.screenX, it = n.screenY - Qt.screenY) : it = $t = 0, Qt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : it;
  } }), Rl = ie(hn), qo = ae({}, hn, { dataTransfer: 0 }), Vi = ie(qo), Ko = ae({}, bt, { relatedTarget: 0 }), ou = ie(Ko), Gf = ae({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ie(Gf), qf = ae({}, Ne, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = ie(qf), Kf = ae({}, Ne, { data: 0 }), Xf = ie(Kf), nv = {
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
  var Zf = ae({}, bt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = ie(Zf), td = ae({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = ie(td), sc = ae({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jf }), iv = ie(sc), $r = ae({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = ie($r), Mn = ae({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ie(Mn), nd = [9, 13, 27, 32], ao = lt && "CompositionEvent" in window, Xo = null;
  lt && "documentMode" in document && (Xo = document.documentMode);
  var Jo = lt && "TextEvent" in window && !Xo, lv = lt && (!ao || Xo && 8 < Xo && 11 >= Xo), uv = " ", cc = !1;
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
  function Km(n, r) {
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = N(), C = h = Za = null, io = !1, n) : null;
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
    Fi(o), r = as(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, su = null;
  function dv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function Jm(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (lt) {
    var ad;
    if (lt) {
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
    gi && (gi.detachEvent("onpropertychange", mv), su = gi = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      rd(r, su, n, It(n)), tu(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (hv(), gi = r, su = l, gi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
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
      if (!le.call(r, c) || !ei(n[c], r[c])) return !1;
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
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
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
  var ny = lt && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  lt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Ev = vc("animationend"), Cv = vc("animationiteration"), Rv = vc("animationstart"), Tv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    cd.set(n, r), tt(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], ry = fu.toLowerCase(), ay = fu[0].toUpperCase() + fu.slice(1);
    _a(ry, "on" + ay);
  }
  _a(Ev, "onAnimationEnd"), _a(Cv, "onAnimationIteration"), _a(Rv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, me(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Pt(n, r) {
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
      n[gc] = !0, St.forEach(function(l) {
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
        c = Cl;
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
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var z = d, $ = It(l), G = [];
      e: {
        var W = cd.get(n);
        if (W !== void 0) {
          var de = pt, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              de = ed;
              break;
            case "focusin":
              ye = "focus", de = ou;
              break;
            case "focusout":
              ye = "blur", de = ou;
              break;
            case "beforeblur":
            case "afterblur":
              de = ou;
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
              de = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Vi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              de = oc;
              break;
            case Tv:
              de = Ii;
              break;
            case "scroll":
              de = nn;
              break;
            case "wheel":
              de = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = av;
          }
          var Ee = (r & 4) !== 0, Dn = !Ee && n === "scroll", D = Ee ? W !== null ? W + "Capture" : null : W;
          Ee = [];
          for (var w = z, L; w !== null; ) {
            L = w;
            var Q = L.stateNode;
            if (L.tag === 5 && Q !== null && (L = Q, D !== null && (Q = br(w, D), Q != null && Ee.push(so(w, Q, L)))), Dn) break;
            w = w.return;
          }
          0 < Ee.length && (W = new de(W, ye, null, l, $), G.push({ event: W, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", W && l !== en && (ye = l.relatedTarget || l.fromElement) && (vu(ye) || ye[Wi])) break e;
          if ((de || W) && (W = $.window === $ ? $ : (W = $.ownerDocument) ? W.defaultView || W.parentWindow : window, de ? (ye = l.relatedTarget || l.toElement, de = z, ye = ye ? vu(ye) : null, ye !== null && (Dn = qe(ye), ye !== Dn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (de = null, ye = z), de !== ye)) {
            if (Ee = Rl, Q = "onMouseLeave", D = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = av, Q = "onPointerLeave", D = "onPointerEnter", w = "pointer"), Dn = de == null ? W : ti(de), L = ye == null ? W : ti(ye), W = new Ee(Q, w + "leave", de, l, $), W.target = Dn, W.relatedTarget = L, Q = null, vu($) === z && (Ee = new Ee(D, w + "enter", ye, l, $), Ee.target = L, Ee.relatedTarget = Dn, Q = Ee), Dn = Q, de && ye) t: {
              for (Ee = de, D = ye, w = 0, L = Ee; L; L = xl(L)) w++;
              for (L = 0, Q = D; Q; Q = xl(Q)) L++;
              for (; 0 < w - L; ) Ee = xl(Ee), w--;
              for (; 0 < L - w; ) D = xl(D), L--;
              for (; w--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = xl(Ee), D = xl(D);
              }
              Ee = null;
            }
            else Ee = null;
            de !== null && wv(G, W, de, Ee, !1), ye !== null && Dn !== null && wv(G, Dn, ye, Ee, !0);
          }
        }
        e: {
          if (W = z ? ti(z) : window, de = W.nodeName && W.nodeName.toLowerCase(), de === "select" || de === "input" && W.type === "file") var ge = Jm;
          else if (fv(W)) if (pv) ge = gv;
          else {
            ge = yv;
            var Me = Zm;
          }
          else (de = W.nodeName) && de.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ge = ey);
          if (ge && (ge = ge(n, z))) {
            rd(G, ge, l, $);
            break e;
          }
          Me && Me(n, W, z), n === "focusout" && (Me = W._wrapperState) && Me.controlled && W.type === "number" && oa(W, "number", W.value);
        }
        switch (Me = z ? ti(z) : window, n) {
          case "focusin":
            (fv(Me) || Me.contentEditable === "true") && (uo = Me, ld = z, ns = null);
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
        else io ? ov(n, l) && (Ve = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ve = "onCompositionStart");
        Ve && (lv && l.locale !== "ko" && (io || Ve !== "onCompositionStart" ? Ve === "onCompositionEnd" && io && (ze = N()) : (Za = $, h = "value" in Za ? Za.value : Za.textContent, io = !0)), Me = as(z, Ve), 0 < Me.length && (Ve = new Xf(Ve, n, null, l, $), G.push({ event: Ve, listeners: Me }), ze ? Ve.data = ze : (ze = sv(l), ze !== null && (Ve.data = ze)))), (ze = Jo ? cv(n, l) : Km(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && ($ = new Xf("onBeforeInput", "beforeinput", null, l, $), G.push({ event: $, listeners: z }), $.data = ze));
      }
      du(G, r);
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
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = br(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = br(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(iy, "");
  }
  function Ec(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(A(425));
  }
  function wl() {
  }
  var is = null, pu = null;
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
  var bl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Wi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, ly = "__reactHandles$" + bl;
  function vu(n) {
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
    return n[ls] || null;
  }
  var Ct = [], Da = -1;
  function ka(n) {
    return { current: n };
  }
  function rn(n) {
    0 > Da || (n.current = Ct[Da], Ct[Da] = null, Da--);
  }
  function we(n, r) {
    Da++, Ct[Da] = n.current, n.current = r;
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
    rn(Wn), rn(En);
  }
  function Ov(n, r, l) {
    if (En.current !== Cr) throw Error(A(168));
    we(En, r), we(Wn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Ze(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Qr = En.current, we(En, n), we(Wn, Wn.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = os(n, r, Qr), o.__reactInternalMemoizedMergedChildContext = n, rn(Wn), rn(En), we(En, n)) : rn(Wn), we(Wn, l);
  }
  var Ci = null, ho = !1, $i = !1;
  function wc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function _l(n) {
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
        throw Ci !== null && (Ci = Ci.slice(n + 1)), on(qa, Ri), c;
      } finally {
        Lt = r, $i = !1;
      }
    }
    return null;
  }
  var Dl = [], kl = 0, Ol = null, Qi = 0, zn = [], Oa = 0, da = null, Ti = 1, xi = "";
  function hu(n, r) {
    Dl[kl++] = Qi, Dl[kl++] = Ol, Ol = n, Qi = r;
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
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = Dl[--kl], Dl[kl] = null, Qi = Dl[--kl], Dl[kl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
  }
  var qr = null, Kr = null, dn = !1, La = null;
  function vd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Kr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (dn) {
      var r = Kr;
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
  function Dc(n) {
    if (n !== qr) return !1;
    if (!dn) return $n(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (hd(n)) throw ss(), Error(A(418));
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
                Kr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = qr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Kr; n; ) n = Si(n.nextSibling);
  }
  function Ll() {
    Kr = qr = null, dn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var uy = yt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
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
  function kc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(D, w) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [w], D.flags |= 16) : L.push(w);
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
      return D = Hl(D, w), D.index = 0, D.sibling = null, D;
    }
    function d(D, w, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < w ? (D.flags |= 2, w) : L) : (D.flags |= 2, w)) : (D.flags |= 1048576, w);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, w, L, Q) {
      return w === null || w.tag !== 6 ? (w = Qd(L, D.mode, Q), w.return = D, w) : (w = c(w, L), w.return = D, w);
    }
    function T(D, w, L, Q) {
      var ge = L.type;
      return ge === Fe ? $(D, w, L.props.children, Q, L.key) : w !== null && (w.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Nv(ge) === w.type) ? (Q = c(w, L.props), Q.ref = mu(D, w, L), Q.return = D, Q) : (Q = Hs(L.type, L.key, L.props, null, D.mode, Q), Q.ref = mu(D, w, L), Q.return = D, Q);
    }
    function z(D, w, L, Q) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = sf(L, D.mode, Q), w.return = D, w) : (w = c(w, L.children || []), w.return = D, w);
    }
    function $(D, w, L, Q, ge) {
      return w === null || w.tag !== 7 ? (w = el(L, D.mode, Q, ge), w.return = D, w) : (w = c(w, L), w.return = D, w);
    }
    function G(D, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Qd("" + w, D.mode, L), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return L = Hs(w.type, w.key, w.props, null, D.mode, L), L.ref = mu(D, null, w), L.return = D, L;
          case ft:
            return w = sf(w, D.mode, L), w.return = D, w;
          case Ot:
            var Q = w._init;
            return G(D, Q(w._payload), L);
        }
        if (qn(w) || Re(w)) return w = el(w, D.mode, L, null), w.return = D, w;
        kc(D, w);
      }
      return null;
    }
    function W(D, w, L, Q) {
      var ge = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ge !== null ? null : E(D, w, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            return L.key === ge ? T(D, w, L, Q) : null;
          case ft:
            return L.key === ge ? z(D, w, L, Q) : null;
          case Ot:
            return ge = L._init, W(
              D,
              w,
              ge(L._payload),
              Q
            );
        }
        if (qn(L) || Re(L)) return ge !== null ? null : $(D, w, L, Q, null);
        kc(D, L);
      }
      return null;
    }
    function de(D, w, L, Q, ge) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return D = D.get(L) || null, E(w, D, "" + Q, ge);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case be:
            return D = D.get(Q.key === null ? L : Q.key) || null, T(w, D, Q, ge);
          case ft:
            return D = D.get(Q.key === null ? L : Q.key) || null, z(w, D, Q, ge);
          case Ot:
            var Me = Q._init;
            return de(D, w, L, Me(Q._payload), ge);
        }
        if (qn(Q) || Re(Q)) return D = D.get(L) || null, $(w, D, Q, ge, null);
        kc(w, Q);
      }
      return null;
    }
    function ye(D, w, L, Q) {
      for (var ge = null, Me = null, ze = w, Ve = w = 0, er = null; ze !== null && Ve < L.length; Ve++) {
        ze.index > Ve ? (er = ze, ze = null) : er = ze.sibling;
        var zt = W(D, ze, L[Ve], Q);
        if (zt === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && zt.alternate === null && r(D, ze), w = d(zt, w, Ve), Me === null ? ge = zt : Me.sibling = zt, Me = zt, ze = er;
      }
      if (Ve === L.length) return l(D, ze), dn && hu(D, Ve), ge;
      if (ze === null) {
        for (; Ve < L.length; Ve++) ze = G(D, L[Ve], Q), ze !== null && (w = d(ze, w, Ve), Me === null ? ge = ze : Me.sibling = ze, Me = ze);
        return dn && hu(D, Ve), ge;
      }
      for (ze = o(D, ze); Ve < L.length; Ve++) er = de(ze, D, Ve, L[Ve], Q), er !== null && (n && er.alternate !== null && ze.delete(er.key === null ? Ve : er.key), w = d(er, w, Ve), Me === null ? ge = er : Me.sibling = er, Me = er);
      return n && ze.forEach(function(Bl) {
        return r(D, Bl);
      }), dn && hu(D, Ve), ge;
    }
    function Ee(D, w, L, Q) {
      var ge = Re(L);
      if (typeof ge != "function") throw Error(A(150));
      if (L = ge.call(L), L == null) throw Error(A(151));
      for (var Me = ge = null, ze = w, Ve = w = 0, er = null, zt = L.next(); ze !== null && !zt.done; Ve++, zt = L.next()) {
        ze.index > Ve ? (er = ze, ze = null) : er = ze.sibling;
        var Bl = W(D, ze, zt.value, Q);
        if (Bl === null) {
          ze === null && (ze = er);
          break;
        }
        n && ze && Bl.alternate === null && r(D, ze), w = d(Bl, w, Ve), Me === null ? ge = Bl : Me.sibling = Bl, Me = Bl, ze = er;
      }
      if (zt.done) return l(
        D,
        ze
      ), dn && hu(D, Ve), ge;
      if (ze === null) {
        for (; !zt.done; Ve++, zt = L.next()) zt = G(D, zt.value, Q), zt !== null && (w = d(zt, w, Ve), Me === null ? ge = zt : Me.sibling = zt, Me = zt);
        return dn && hu(D, Ve), ge;
      }
      for (ze = o(D, ze); !zt.done; Ve++, zt = L.next()) zt = de(ze, D, Ve, zt.value, Q), zt !== null && (n && zt.alternate !== null && ze.delete(zt.key === null ? Ve : zt.key), w = d(zt, w, Ve), Me === null ? ge = zt : Me.sibling = zt, Me = zt);
      return n && ze.forEach(function(hh) {
        return r(D, hh);
      }), dn && hu(D, Ve), ge;
    }
    function Dn(D, w, L, Q) {
      if (typeof L == "object" && L !== null && L.type === Fe && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            e: {
              for (var ge = L.key, Me = w; Me !== null; ) {
                if (Me.key === ge) {
                  if (ge = L.type, ge === Fe) {
                    if (Me.tag === 7) {
                      l(D, Me.sibling), w = c(Me, L.props.children), w.return = D, D = w;
                      break e;
                    }
                  } else if (Me.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === Ot && Nv(ge) === Me.type) {
                    l(D, Me.sibling), w = c(Me, L.props), w.ref = mu(D, Me, L), w.return = D, D = w;
                    break e;
                  }
                  l(D, Me);
                  break;
                } else r(D, Me);
                Me = Me.sibling;
              }
              L.type === Fe ? (w = el(L.props.children, D.mode, Q, L.key), w.return = D, D = w) : (Q = Hs(L.type, L.key, L.props, null, D.mode, Q), Q.ref = mu(D, w, L), Q.return = D, D = Q);
            }
            return m(D);
          case ft:
            e: {
              for (Me = L.key; w !== null; ) {
                if (w.key === Me) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(D, w.sibling), w = c(w, L.children || []), w.return = D, D = w;
                  break e;
                } else {
                  l(D, w);
                  break;
                }
                else r(D, w);
                w = w.sibling;
              }
              w = sf(L, D.mode, Q), w.return = D, D = w;
            }
            return m(D);
          case Ot:
            return Me = L._init, Dn(D, w, Me(L._payload), Q);
        }
        if (qn(L)) return ye(D, w, L, Q);
        if (Re(L)) return Ee(D, w, L, Q);
        kc(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(D, w.sibling), w = c(w, L), w.return = D, D = w) : (l(D, w), w = Qd(L, D.mode, Q), w.return = D, D = w), m(D)) : l(D, w);
    }
    return Dn;
  }
  var xn = yu(!0), oe = yu(!1), pa = ka(null), Xr = null, mo = null, yd = null;
  function gd() {
    yd = mo = Xr = null;
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
    Xr = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (An = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Xr === null) throw Error(A(308));
      mo = n, Xr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
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
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
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
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, E = $.lastBaseUpdate, E !== m && (E === null ? $.firstBaseUpdate = z : E.next = z, $.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, $ = z = T = null, E = d;
      do {
        var W = E.lane, de = E.eventTime;
        if ((o & W) === W) {
          $ !== null && ($ = $.next = {
            eventTime: de,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (W = r, de = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  G = ye.call(de, G, W);
                  break e;
                }
                G = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, W = typeof ye == "function" ? ye.call(de, G, W) : ye, W == null) break e;
                G = ae({}, G, W);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else de = { eventTime: de, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, $ === null ? (z = $ = de, T = G) : $ = $.next = de, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (T = G), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
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
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, wi = ka(fs), ds = ka(fs), ps = ka(fs);
  function Su(n) {
    if (n === fs) throw Error(A(174));
    return n;
  }
  function wd(n, r) {
    switch (we(ps, r), we(ds, n), we(wi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(wi), we(wi, r);
  }
  function Eu() {
    rn(wi), rn(ds), rn(ps);
  }
  function Av(n) {
    Su(ps.current);
    var r = Su(wi.current), l = sa(r, n.type);
    r !== l && (we(ds, n), we(wi, l));
  }
  function Lc(n) {
    ds.current === n && (rn(wi), rn(ds));
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
  var ct = yt.ReactCurrentDispatcher, Mt = yt.ReactCurrentBatchConfig, Gt = 0, Nt = null, Un = null, Jn = null, Nc = !1, hs = !1, Cu = 0, Y = 0;
  function kt() {
    throw Error(A(321));
  }
  function je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Gt = d, Nt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ct.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(A(301));
        d += 1, Jn = Un = null, r.updateQueue = null, ct.current = qc, n = l(o, c);
      } while (hs);
    }
    if (ct.current = bu, r = Un !== null && Un.next !== null, Gt = 0, Jn = Un = Nt = null, Nc = !1, r) throw Error(A(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
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
      if (n === null) throw Error(A(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Jn === null ? Nt.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = wn(), l = r.queue;
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
        var $ = z.lane;
        if ((Gt & $) === $) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var G = {
            lane: $,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, Nt.lanes |= $, ki |= $;
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
  function Ru(n) {
    var r = wn(), l = r.queue;
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
  function zc() {
  }
  function Uc(n, r) {
    var l = Nt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(A(349));
      Gt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function jc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
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
  function Pc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = wu.bind(null, Nt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Nt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Nt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && je(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Nt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
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
  function xu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, xu.bind(null, r, n), l);
  }
  function gs() {
  }
  function $c(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Gt & 21 ? (ei(l, r) || (l = Ku(), Nt.lanes |= l, ki |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
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
      zr(l, n, o, c), Xt(l, r, o);
    }
  }
  function wu(n, r, l) {
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
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), Xt(l, r, o));
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
  function Xt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  var bu = { readContext: Ma, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Gc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: Ic, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      xu.bind(null, r, n),
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
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Nt, c = Rr();
    if (dn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(A(349));
      Gt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ic(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Qn.identifierPrefix;
    if (dn) {
      var l = xi, o = Ti;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
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
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(Ki);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = wn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Ki)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Ma, useCallback: $c, useContext: Ma, useEffect: ms, useImperativeHandle: Wc, useInsertionEffect: Yc, useLayoutEffect: ys, useMemo: Qc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(Ki);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Ki)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Kc = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Nn(r) ? Qr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Kc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Kc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Nn(r) ? Qr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Kc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += ut(o), o = o.return;
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
  function Pv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Ou = o), Od(n, r);
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
      Od(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
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
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = yt.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? oe(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yn(r, c), o = Nl(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && l && bc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function Du(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Je(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Je(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (An = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (An = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function xs(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, we(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, we(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, we(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Nn(l) ? Qr : En.current;
    return d = Gr(r, d), yn(r, c), l = Nl(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (dn && o && bc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Iv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (yn(r, c), r.stateNode === null) Na(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ma(z) : (z = Nn(l) ? Qr : En.current, z = Gr(r, z));
      var $ = l.getDerivedStateFromProps, G = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Hv(r, m, o, z), ha = !1;
      var W = r.memoizedState;
      m.state = W, cs(r, o, m, c), T = r.memoizedState, E !== o || W !== T || Wn.current || ha ? (typeof $ == "function" && (Dd(r, l, $, o), T = r.memoizedState), (E = ha || Fv(r, l, E, o, W, T, z)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ri(r.type, E), m.props = z, G = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Nn(l) ? Qr : En.current, T = Gr(r, T));
      var de = l.getDerivedStateFromProps;
      ($ = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || W !== T) && Hv(r, m, o, T), ha = !1, W = r.memoizedState, m.state = W, cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== G || W !== ye || Wn.current || ha ? (typeof de == "function" && (Dd(r, l, de, o), ye = r.memoizedState), (z = ha || Fv(r, l, z, o, W, ye, T) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
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
    return Ll(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), we(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Zc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Wv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && Gi(o), xn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = kd(Error(A(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = kd(d, o, void 0), bs(n, r, m, o);
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
      return Wd(), o = kd(Error(A(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = hy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Si(c.nextSibling), qr = r, dn = !0, La = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, Ti = n.id, xi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
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
    if (we(gn, o), !(r.mode & 1)) r.memoizedState = null;
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
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ll();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Nn(r.type) && Xn(r);
        break;
      case 4:
        wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        we(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (we(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (we(gn, gn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        we(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), we(gn, gn.current), o) break;
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
      n = r.stateNode, Su(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
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
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Be.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Be.hasOwnProperty(z) ? (T != null && z === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
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
        return o = r.stateNode, Eu(), rn(Wn), rn(En), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Lu(La), La = null))), jn(n, r), Zn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) $v(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Zn(r), null;
          }
          if (n = Su(wi.current), Dc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < rs.length; c++) Pt(rs[c], o);
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
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Be.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
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
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[ls] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
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
                  for (c = 0; c < rs.length; c++) Pt(rs[c], n);
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = In(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Zt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ee(n, T) : typeof T == "number" && ee(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Be.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && Qe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + rt(o.value));
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
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = Su(ps.current), Su(wi.current), Dc(r)) {
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
        if (rn(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Kr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = Dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ei] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Zn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? _n === 0 && (_n = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return Sd(r.type._context), Zn(r), null;
      case 17:
        return Nn(r.type) && vo(), Zn(r), null;
      case 19:
        if (rn(gn), d = r.memoizedState, d === null) return Zn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return we(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ke() > To && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !dn) return Zn(r), null;
          } else 2 * Ke() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ke(), r.sibling = null, l = gn.current, we(gn, o ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Nn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), rn(Wn), rn(En), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (rn(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(gn), null;
      case 4:
        return Eu(), null;
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
  var ks = !1, Tr = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
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
  function Kv(n, r) {
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
          var m = 0, E = -1, T = -1, z = 0, $ = 0, G = n, W = null;
          t: for (; ; ) {
            for (var de; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (de = G.firstChild) !== null; )
              W = G, G = de;
            for (; ; ) {
              if (G === n) break t;
              if (W === l && ++z === c && (E = m), W === d && ++$ === o && (T = m), (de = G.nextSibling) !== null) break;
              G = W, W = G.parentNode;
            }
            G = de;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, ba = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, Dn = ye.memoizedState, D = r.stateNode, w = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ri(r.type, Ee), Dn);
              D.__reactInternalSnapshotBeforeUpdate = w;
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
      } catch (Q) {
        pn(r, r.return, Q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ye = qv, qv = !1, ye;
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
  function Xi(n) {
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
    for (l = l.child; l !== null; ) Xv(n, r, l), l = l.sibling;
  }
  function Xv(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ml, l);
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
        if (bn === null) throw Error(A(160));
        Xv(d, m, c), bn = null, Mr = !1;
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
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), Kn(E, m);
            var z = Kn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var $ = T[m], G = T[m + 1];
              $ === "style" ? Zt(c, G) : $ === "dangerouslySetInnerHTML" ? ci(c, G) : $ === "children" ? ee(c, G) : Qe(c, $, G, z);
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
                var de = d.value;
                de != null ? Rn(c, !!d.multiple, de, !1) : W !== !!d.multiple && (d.defaultValue != null ? Rn(
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
          if (n.stateNode === null) throw Error(A(162));
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
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Ke())), o & 4 && Jv(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (z = Tr) || $, ai(r, n), Tr = z) : ai(r, n), ea(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !$ && n.mode & 1) for (he = n, $ = n.child; $ !== null; ) {
            for (G = he = $; he !== null; ) {
              switch (W = he, de = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, W, W.return);
                  break;
                case 1:
                  Eo(W, W.return);
                  var ye = W.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
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
              de !== null ? (de.return = W, he = de) : Ns(G);
            }
            $ = $.sibling;
          }
          e: for ($ = null, G = n; ; ) {
            if (G.tag === 5) {
              if ($ === null) {
                $ = G;
                try {
                  c = G.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Ee) {
                  pn(n, n.return, Ee);
                }
              }
            } else if (G.tag === 6) {
              if ($ === null) try {
                G.stateNode.nodeValue = z ? "" : G.memoizedProps;
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
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ee(c, ""), o.flags &= -33);
            var d = Xi(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Xi(n);
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
  function sy(n, r, l) {
    he = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ks;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = ks;
          var z = Tr;
          if (ks = m, (Tr = T) && !z) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : T !== null ? (T.return = m, he = T) : Pd(c);
          for (; d !== null; ) he = d, Hd(d), d = d.sibling;
          he = c, ks = E, Tr = z;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; he !== null; ) {
      var r = he;
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
                var z = r.alternate;
                if (z !== null) {
                  var $ = z.memoizedState;
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
              throw Error(A(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (W) {
          pn(r, r.return, W);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Ns(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Pd(n) {
    for (; he !== null; ) {
      var r = he;
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
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var cy = Math.ceil, Al = yt.ReactCurrentDispatcher, ku = yt.ReactCurrentOwner, or = yt.ReactCurrentBatchConfig, Rt = 0, Qn = null, Fn = null, sr = 0, ma = 0, Co = ka(0), _n = 0, zs = null, ki = 0, Ro = 0, af = 0, Us = null, ta = null, Vd = 0, To = 1 / 0, ya = null, xo = !1, Ou = null, jl = null, lf = !1, Ji = null, As = 0, Fl = 0, wo = null, js = -1, xr = 0;
  function Hn() {
    return Rt & 6 ? Ke() : js !== -1 ? js : js = Ke();
  }
  function Oi(n) {
    return n.mode & 1 ? Rt & 2 && sr !== 0 ? sr & -sr : uy.transition !== null ? (xr === 0 && (xr = Ku()), xr) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, wo = null, Error(A(185));
    Hi(n, l, o), (!(Rt & 2) || n !== Qn) && (n === Qn && (!(Rt & 2) && (Ro |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (To = Ke() + 500, ho && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Xa(n, n === Qn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : wc(Bd.bind(null, n)), co(function() {
        !(Rt & 6) && Ri();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Qu;
            break;
          default:
            l = ru;
        }
        l = sh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (js = -1, xr = 0, Rt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Xa(n, n === Qn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = th();
      (Qn !== n || sr !== r) && (ya = null, To = Ke() + 500, Zi(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      gd(), Al.current = d, Rt = c, Fn !== null ? r = 0 : (Qn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, Zi(n, 0), ii(n, o), na(n, Ke()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !fy(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, Zi(n, 0), ii(n, o), na(n, Ke()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Nu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Vd + 500 - Ke(), 10 < r)) {
              if (Xa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Nu.bind(null, n, ta, ya), r);
              break;
            }
            Nu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ke() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Nu.bind(null, n, ta, ya), o);
              break;
            }
            Nu(n, ta, ya);
            break;
          case 5:
            Nu(n, ta, ya);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return na(n, Ke()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function Fs(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (Zi(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
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
    if (Rt & 6) throw Error(A(327));
    bo();
    var r = Xa(n, 0);
    if (!(r & 1)) return na(n, Ke()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, Zi(n, 0), ii(n, r), na(n, Ke()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, ta, ya), na(n, Ke()), null;
  }
  function Id(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (To = Ke() + 500, ho && Ri());
    }
  }
  function Mu(n) {
    Ji !== null && Ji.tag === 0 && !(Rt & 6) && bo();
    var r = Rt;
    Rt |= 1;
    var l = or.transition, o = Lt;
    try {
      if (or.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, or.transition = l, Rt = r, !(Rt & 6) && Ri();
    }
  }
  function Yd() {
    ma = Co.current, rn(Co);
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
          Eu(), rn(Wn), rn(En), De();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
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
          Yd();
      }
      l = l.return;
    }
    if (Qn = n, Fn = n = Hl(n.current, null), sr = ma = r, _n = 0, zs = null, af = Ro = ki = 0, ta = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Fn;
      try {
        if (gd(), ct.current = bu, Nc) {
          for (var o = Nt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Gt = 0, Jn = Un = Nt = null, hs = !1, Cu = 0, ku.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, $ = E, G = $.tag;
            if (!($.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var W = $.alternate;
              W ? ($.updateQueue = W.updateQueue, $.memoizedState = W.memoizedState, $.lanes = W.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var de = Vv(m);
            if (de !== null) {
              de.flags &= -257, Ul(de, m, E, d, r), de.mode & 1 && Md(d, z, r), r = de, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
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
              !(Dn.flags & 65536) && (Dn.flags |= 256), Ul(Dn, m, E, d, r), Gi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Pv(d, T, r);
                Uv(d, D);
                break e;
              case 1:
                E = T;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (jl === null || !jl.has(L)))) {
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
      } catch (ge) {
        r = ge, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Wd() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Qn === null || !(ki & 268435455) && !(Ro & 268435455) || ii(Qn, sr);
  }
  function of(n, r) {
    var l = Rt;
    Rt |= 2;
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
    if (gd(), Rt = l, Al.current = o, Fn !== null) throw Error(A(261));
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
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Fn = r, ku.current = null;
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
  function Nu(n, r, l) {
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
    if (Rt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($f(n, d), n === Qn && (Fn = Qn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, sh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Lt;
      Lt = 1;
      var E = Rt;
      Rt |= 4, ku.current = null, Kv(n, l), Fd(l, n), lo(pu), ba = !!is, pu = is = null, n.current = l, sy(l), Ga(), Rt = E, Lt = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), Wo(l.stateNode), na(n, Ke()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === wo ? Fl++ : (Fl = 0, wo = n) : Fl = 0, Ri(), null;
  }
  function bo() {
    if (Ji !== null) {
      var n = Ju(As), r = or.transition, l = Lt;
      try {
        if (or.transition = null, Lt = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Rt & 6) throw Error(A(331));
          var c = Rt;
          for (Rt |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (he = z; he !== null; ) {
                    var $ = he;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, $, d);
                    }
                    var G = $.child;
                    if (G !== null) G.return = $, he = G;
                    else for (; he !== null; ) {
                      $ = he;
                      var W = $.sibling, de = $.return;
                      if (rf($), $ === z) {
                        he = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = de, he = W;
                        break;
                      }
                      he = de;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var Dn = Ee.sibling;
                      Ee.sibling = null, Ee = Dn;
                    } while (Ee !== null);
                  }
                }
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, he = D;
                break e;
              }
              he = d.return;
            }
          }
          var w = n.current;
          for (he = w; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = w; he !== null; ) {
              if (E = he, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ge) {
                pn(E, E.return, ge);
              }
              if (E === m) {
                he = null;
                break e;
              }
              var Q = E.sibling;
              if (Q !== null) {
                Q.return = E.return, he = Q;
                break e;
              }
              he = E.return;
            }
          }
          if (Rt = c, Ri(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ml, n);
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
    r = _u(l, r), r = Pv(n, r, 1), n = Ml(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = _u(l, n), n = Ld(r, n, 1), r = Ml(r, n, 1), n = Hn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Ke() - Vd ? Zi(n, 0) : af |= l), na(n, r);
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
        throw Error(A(314));
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
        yn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = Kc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, dn && d && bc(r), ur(null, r, c, l), r = r.child), r;
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
              r = Du(null, r, o, ri(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Iv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(A(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(A(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (Kr = Si(r.stateNode.containerInfo.firstChild), qr = r, dn = !0, La = null, l = oe(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, we(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
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
                      var $ = z.pending;
                      $ === null ? T.next = T : (T.next = $.next, $.next = T), z.pending = T;
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
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), Du(n, r, o, c, l);
      case 15:
        return Je(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Nn(o) ? (n = !0, Xn(r)) : n = !1, yn(r, l), Xc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
      case 19:
        return bi(n, r, l);
      case 22:
        return xs(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function sh(n, r) {
    return on(n, r);
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
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
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
      case Ce:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Jt:
            m = 10;
            break e;
          case ln:
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
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
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
      if (qe(n) !== n || n.tag !== 1) throw Error(A(170));
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
      if (Nn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = qi(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
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
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Kd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Kd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Kd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
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
  function Xd(n) {
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
          var z = df(m);
          d.call(z);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Wi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = df(T);
        E.call(z);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Wi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
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
          var l = Ka(r.pendingLanes);
          l !== 0 && (Pi(r, l | 1), na(r, Ke()), !(Rt & 6) && (To = Ke() + 500, Ri()));
        }
        break;
      case 13:
        Mu(function() {
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
              if (!c) throw Error(A(90));
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
  }, eu = Id, pl = Mu;
  var Ey = { usingClientEntryPoint: !1, Events: [_e, ti, mn, Fi, Zl, Id] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(vh), Wr = Vl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(A(200));
    return gy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(A(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Kd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Mu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return Ps(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return Ps(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Mu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Id, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return Ps(n, r, l, !1, o);
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
var rT;
function rD() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var I = dl, K = oT(), A = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, St = !1;
    function Be(e) {
      St = e;
    }
    function tt(e) {
      if (!St) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        lt("warn", e, a);
      }
    }
    function S(e) {
      if (!St) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        lt("error", e, a);
      }
    }
    function lt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var le = 0, ce = 1, Xe = 2, Z = 3, te = 4, ne = 5, Ue = 6, ht = 7, mt = 8, fn = 9, vt = 10, Qe = 11, yt = 12, be = 13, ft = 14, Fe = 15, an = 16, Ht = 17, Jt = 18, ln = 19, _t = 21, ke = 22, jt = 23, Dt = 24, Ot = 25, Ce = !0, J = !1, Re = !1, ae = !1, _ = !1, P = !0, He = !0, Ae = !0, ut = !0, nt = /* @__PURE__ */ new Set(), Ze = {}, rt = {};
    function ot(e, t) {
      Bt(e, t), Bt(e + "Capture", t);
    }
    function Bt(e, t) {
      Ze[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ze[e] = t;
      {
        var a = e.toLowerCase();
        rt[a] = e, e === "onDoubleClick" && (rt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
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
    function Yr(e) {
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
    var In = 0, gr = 1, Ya = 2, Ln = 3, Sr = 4, sa = 5, Wa = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Te = new RegExp("^[" + ci + "][" + ee + "]*$"), at = {}, Ft = {};
    function Zt(e) {
      return wr.call(Ft, e) ? !0 : wr.call(at, e) ? !1 : Te.test(e) ? (Ft[e] = !0, !0) : (at[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
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
    function Kn(e, t, a, i) {
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
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Bn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Zt(t))
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
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (Zt(t)) {
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
          b === Ln || b === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), $a = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), st = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Qa = Symbol.iterator, Ga = "@@iterator";
    function Ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qa && e[Qa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, qa = 0, nu, ru, hl, Qu, ml, Wr, Wo;
    function Dr() {
    }
    Dr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Qu = console.error, ml = console.group, Wr = console.groupCollapsed, Wo = console.groupEnd;
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
            log: et({}, e, {
              value: nu
            }),
            info: et({}, e, {
              value: ru
            }),
            warn: et({}, e, {
              value: hl
            }),
            error: et({}, e, {
              value: Qu
            }),
            group: et({}, e, {
              value: ml
            }),
            groupCollapsed: et({}, e, {
              value: Wr
            }),
            groupEnd: et({}, e, {
              value: Wo
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = A.ReactCurrentDispatcher, yl;
    function fa(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Ka = !1, Xa;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Xa = new qu();
    }
    function au(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Xa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
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
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Xa.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? fa(x) : "";
      return typeof e == "function" && Xa.set(e, M), M;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Ku(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ue:
          return fa("Suspense");
        case me:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return Ku(e.render);
          case qe:
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
        case ne:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case be:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case le:
        case Xe:
        case Fe:
          return Ku(e.type);
        case Qe:
          return Ku(e.type.render);
        case ce:
          return gl(e.type);
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
        case ue:
          return "Suspense";
        case me:
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
          case B:
            return Lt(e, e.render, "ForwardRef");
          case qe:
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
        case fn:
          var i = a;
          return vi(i) + ".Consumer";
        case vt:
          var u = a;
          return vi(u._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Qe:
          return $o(a, a.render, "ForwardRef");
        case ht:
          return "Fragment";
        case ne:
          return a;
        case te:
          return "Portal";
        case Z:
          return "Root";
        case Ue:
          return "Text";
        case an:
          return wt(a);
        case mt:
          return a === $a ? "StrictMode" : "Mode";
        case ke:
          return "Offscreen";
        case yt:
          return "Profiler";
        case _t:
          return "Scope";
        case be:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        case ce:
        case le:
        case Ht:
        case Xe:
        case ft:
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
          return Ie(e);
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
    function Sl() {
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
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
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
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      El(e) || (e._valueTracker = wa(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = El(e);
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
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = et({}, t, {
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
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
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
      C(a, t), X(a, t);
    }
    function X(e, t) {
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
    var ie = !1, Ne = !1, pt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? I.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ne || (Ne = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ie && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ie = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var $t = Array.isArray;
    function it(e) {
      return $t(e);
    }
    var Qt;
    Qt = !1;
    function hn() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function qo(e) {
      {
        Qo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = it(e[a]);
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
    function Ko(e, t) {
      return et({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
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
    function Kf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xf(e, t) {
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
            if (it(u)) {
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
      var Km = /^(?:webkit|moz|o)[A-Z]/, Xm = /^-ms-/, fv = /-(.)/g, rd = /;\s*$/, gi = {}, su = {}, dv = !1, Zo = !1, Jm = function(e) {
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
          Jm(e.replace(Xm, "ms-"))
        ));
      }, ad = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : Km.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
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
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
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
    }, es = et({
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
    function Tl(e, t) {
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
      Tl(e, t) || ns(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, sd = /^on./, vc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + ee + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      cu = function(e, t, a, i) {
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
        var v = en(t), y = v !== null && v.type === In;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
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
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Tl(e, t) || Rv(e, t, a);
    }
    var cd = 1, hc = 2, _a = 4, fd = cd | hc | _a, fu = null;
    function ry(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ay() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var mc = null, du = null, Pt = null;
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
      du ? Pt ? Pt.push(e) : Pt = [e] : du = e;
    }
    function xv() {
      return du !== null || Pt !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Pt;
        if (du = null, Pt = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, xl = !1;
    function wv() {
      var e = xv();
      e && (as(), Sc());
    }
    function bv(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return so(e, t, a);
      } finally {
        xl = !1, wv();
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
    function wl(e, t) {
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
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
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
        var g = document.createEvent("Event"), b = !1, x = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          pd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, F(), a.apply(i, se), x = !1;
        }
        var xe, xt = !1, gt = !1;
        function k(O) {
          if (xe = O.error, xt = !0, xe === null && O.colno === 0 && O.lineno === 0 && (gt = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), pd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && x && (xt ? gt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", k), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var Dv = Rc, co = !1, Tc = null, fo = !1, Si = null, kv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, Dv.apply(kv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
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
    function vu(e, t) {
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
    ), Ct = (
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
    ), we = (
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
    ), Xn = (
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
    ), _l = (
      /*               */
      16777216
    ), Ri = (
      /*              */
      33554432
    ), Dl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | Wn | 0
    ), kl = mn | Ct | Da | ka | En | Gr | Nn, Ol = Ct | rn | En | Nn, Qi = Qr | Da, zn = $i | wc | ho, Oa = A.ReactCurrentOwner;
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
    function xi(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
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
      return t !== null ? Kr(t) : null;
    }
    function Kr(e) {
      if (e.tag === ne || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kr(t);
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
      if (e.tag === ne || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== te) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = K.unstable_scheduleCallback, Mv = K.unstable_cancelCallback, hd = K.unstable_shouldYield, md = K.unstable_requestPaint, $n = K.unstable_now, Dc = K.unstable_getCurrentPriorityLevel, ss = K.unstable_ImmediatePriority, Ll = K.unstable_UserBlockingPriority, Gi = K.unstable_NormalPriority, uy = K.unstable_LowPriority, mu = K.unstable_IdlePriority, kc = K.unstable_yieldValue, Nv = K.unstable_setDisableYieldValue, yu = null, xn = null, oe = null, pa = !1, Xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = et({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Ma
        })), yu = t.inject(e), xn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (xn && typeof xn.onScheduleFiberRoot == "function")
        try {
          xn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & we) === we;
          if (Ae) {
            var i;
            switch (t) {
              case Lr:
                i = ss;
                break;
              case bi:
                i = Ll;
                break;
              case Na:
                i = Gi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = Gi;
                break;
            }
            xn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (xn && typeof xn.onPostCommitFiberRoot == "function")
        try {
          xn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
          xn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof kc == "function" && (Nv(e), Be(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      oe = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = jv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Rd() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function va(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function ha() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function xd() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function wi(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function ps() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Su(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function wd() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function Eu(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function Av() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function Lc() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function gn(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function Mc(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), ct = (
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
    var Cu = 31, Y = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), Nl = (
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
    ), Ki = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Ru = (
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
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
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
    ), xu = (
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
    ), bd = xu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), wu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & je)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & wu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Xt = -1, bu = Ru, Gc = xu;
    function Cs(e) {
      switch (Ul(e)) {
        case je:
          return je;
        case Nl:
          return Nl;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Ki:
          return Ki;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return e & zl;
        case xu:
        case Wc:
        case gs:
        case $c:
        case Qc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case wu:
          return wu;
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
        var g = Ul(i), b = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (b & zl) !== Y
        )
          return t;
      }
      (i & ni) !== Y && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var M = e.entanglements, U = i & x; U > 0; ) {
          var F = An(U), se = 1 << F;
          i |= M[F], U &= ~se;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Dd(e, t) {
      switch (e) {
        case je:
        case Nl:
        case ni:
          return t + 250;
        case Rr:
        case wn:
        case Ki:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
          return t + 5e3;
        case xu:
        case Wc:
        case gs:
        case $c:
        case Qc:
          return Xt;
        case Ss:
        case Es:
        case wu:
        case Jr:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Kc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== Y ? t : t & Jr ? Jr : Y;
    }
    function Hv(e) {
      return (e & je) !== Y;
    }
    function Rs(e) {
      return (e & _d) !== Y;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function kd(e) {
      var t = je | ni | wn;
      return (e & t) === Y;
    }
    function Od(e) {
      return (e & zl) === e;
    }
    function Jc(e, t) {
      var a = Nl | ni | Rr | wn;
      return (t & a) !== Y;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & zl) !== Y;
    }
    function Md() {
      var e = bu;
      return bu <<= 1, (bu & zl) === Y && (bu = Ru), e;
    }
    function Vv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === Y && (Gc = xu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
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
    function Du(e, t) {
      return (e & t) === t;
    }
    function Je(e, t) {
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
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== wu && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
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
        i[p] = Y, u[p] = Xt, s[p] = Xt, f &= ~v;
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
      var a = Ul(t), i;
      switch (a) {
        case ni:
          i = Nl;
          break;
        case wn:
          i = Rr;
          break;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Ic:
        case ms:
        case Yc:
        case xu:
        case Wc:
        case gs:
        case $c:
        case Qc:
          i = Ki;
          break;
        case wu:
          i = Es;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function bs(e, t, a) {
      if (Xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Wv(e, t) {
      if (Xr)
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
    var Lr = je, bi = ni, Na = wn, za = wu, _s = kt;
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
      var t = Ul(e);
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
    var he;
    function Eo(e) {
      he = e;
    }
    var nf;
    function qv(e) {
      nf = e;
    }
    var Kv;
    function Os(e) {
      Kv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Xi = null, _i = null, Di = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Xv = [
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
      return Xv.indexOf(e) > -1;
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
          Xi = null;
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
          p !== null && he(p);
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
          return Xi = ea(Xi, e, t, a, i, s), !0;
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
      for (var t = Kv(), a = {
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
          return f !== null && he(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function cy() {
      rf = !1, Xi !== null && Ns(Xi) && (Xi = null), _i !== null && Ns(_i) && (_i = null), Di !== null && Ns(Di) && (Di = null), bn.forEach(Pd), Mr.forEach(Pd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, cy)));
    }
    function ku(e) {
      if (Ms.length > 0) {
        Al(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && Al(Xi, e), _i !== null && Al(_i, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
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
    var or = A.ReactCurrentBatchConfig, Rt = !0;
    function Qn(e) {
      Rt = !!e;
    }
    function Fn() {
      return Rt;
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
      Rt && zs(e, t, a, i);
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
          if (p === be) {
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
            case Ll:
              return bi;
            case Gi:
            case uy:
              return Na;
            case mu:
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
    function Vd(e, t, a, i) {
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
    var ya = null, xo = null, Ou = null;
    function jl(e) {
      return ya = e, xo = As(), !0;
    }
    function lf() {
      ya = null, xo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = xo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Fl(e) {
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
      return et(t.prototype, {
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
    }, Oi = xr(Hn), zr = et({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), uf, Fs, Lu;
    function fy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var ii = et({}, zr, {
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
    }), Bd = xr(ii), Id = et({}, ii, {
      dataTransfer: 0
    }), Mu = xr(Id), Yd = et({}, zr, {
      relatedTarget: 0
    }), Zi = xr(Yd), eh = et({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = xr(eh), Wd = et({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr(Wd), dy = et({}, Hn, {
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
    }, Nu = {
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
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nu[e.keyCode] || "Unidentified" : "";
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
    var vy = et({}, zr, {
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
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = xr(vy), hy = et({}, ii, {
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
    }), uh = xr(hy), oh = et({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), sh = xr(oh), my = et({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(my), $d = et({}, ii, {
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
    }), yy = xr($d), Hl = [9, 13, 27, 32], Hs = 229, el = On && "CompositionEvent" in window, Pl = null;
    On && "documentMode" in document && (Pl = document.documentMode);
    var Qd = On && "TextEvent" in window && !Pl, sf = On && (!el || Pl && Pl > 8 && Pl <= 11), ch = 32, cf = String.fromCharCode(ch);
    function gy() {
      ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ot("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ot("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ot("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
          return Hl.indexOf(t.keyCode) !== -1;
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
    var zu = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (el ? s = ff(t) : zu ? qd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !dh(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Ji()));
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
    function Xd(e, t) {
      if (zu) {
        if (e === "compositionend" || !el && qd(e, t)) {
          var a = Ji();
          return lf(), zu = !1, a;
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
      if (Qd ? s = vf(t, i) : s = Xd(t, i), !s)
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
      Kd(e, t, a, i, u), hf(e, t, a, i, u);
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
    function Ps(e) {
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
    function Vs() {
      ot("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
      DE(e, 0);
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
      Vl = e, n = t, Vl.attachEvent("onpropertychange", z);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", z), Vl = null, n = null);
    }
    function z(e) {
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
    function de(e, t) {
      if (e === "click")
        return c(t);
    }
    function ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ee(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function Dn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = ye : (v = G, y = $) : W(p) && (v = de), v) {
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
        var x, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (x = a, M = U ? Ys(U) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== ne && M.tag !== Ue) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var se = Bd, Le = "onMouseLeave", xe = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = uh, Le = "onPointerLeave", xe = "onPointerEnter", xt = "pointer");
          var gt = x == null ? g : Cf(x), k = M == null ? g : Cf(M), H = new se(Le, xt + "leave", x, i, u);
          H.target = gt, H.relatedTarget = k;
          var O = null, q = Ys(u);
          if (q === a) {
            var ve = new se(xe, xt + "enter", M, i, u);
            ve.target = k, ve.relatedTarget = gt, O = ve;
          }
          DT(e, H, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Q = typeof Object.is == "function" ? Object.is : L;
    function ge(e, t) {
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
    function Ve(e, t) {
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
    function Bl(e, t) {
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
      return e && e.nodeType === Ii;
    }
    function yE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? yE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && yE(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function gE() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
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
    function dT() {
      var e = gE();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = gE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Cy(a) && hT(a, i);
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var mT = On && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      ot("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ry = null, Jd = null, Ty = !1;
    function gT(e) {
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Yi ? e : e.ownerDocument;
    }
    function SE(e, t, a) {
      var i = ST(a);
      if (!(Ty || mf == null || mf !== ba(i))) {
        var u = gT(mf);
        if (!Jd || !ge(Jd, u)) {
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
    function ET(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, Ry = a, Jd = null);
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
          Ty = !1, SE(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          SE(e, i, u);
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
    }, xy = {}, EE = {};
    On && (EE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function yh(e) {
      if (xy[e])
        return xy[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in EE)
          return xy[e] = t[a];
      return e;
    }
    var CE = yh("animationend"), RE = yh("animationiteration"), TE = yh("animationstart"), xE = yh("transitionend"), wE = /* @__PURE__ */ new Map(), bE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      wE.set(e, t), ot(t, [e]);
    }
    function CT() {
      for (var e = 0; e < bE.length; e++) {
        var t = bE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(CE, "onAnimationEnd"), _o(RE, "onAnimationIteration"), _o(TE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(xE, "onTransitionEnd");
    }
    function RT(e, t, a, i, u, s, f) {
      var p = wE.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
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
            v = Mu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case CE:
          case RE:
          case TE:
            v = th;
            break;
          case xE:
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
          t === "scroll", x = bT(a, p, i.type, g, b);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    CT(), D(), Vs(), yT(), gy();
    function TT(e, t, a, i, u, s, f) {
      RT(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (w(e, t, a, i, u), Dn(e, t, a, i, u), ET(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function _E(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function xT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _E(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _E(e, M, x), i = b;
        }
    }
    function DE(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xT(s, f, a);
      }
      ls();
    }
    function wT(e, t, a, i, u) {
      var s = dd(a), f = [];
      TT(f, e, i, a, s, t), DE(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = t1(t), u = kT(e);
      i.has(u) || (kE(t, e, hc, a), i.add(u));
    }
    function by(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), kE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[gh]) {
        e[gh] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Yi ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, by("selectionchange", !1, t)));
      }
    }
    function kE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function OE(e, t) {
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
            if (v === Z || v === te) {
              var y = p.stateNode.containerInfo;
              if (OE(y, f))
                break;
              if (v === te)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === Z || b === te) {
                    var x = g.stateNode.containerInfo;
                    if (OE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === ne || U === Ue) {
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
    function bT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, x = b.stateNode, M = b.tag;
        if (M === ne && x !== null && (g = x, p !== null)) {
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
        if (p === ne && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = wl(u, t);
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
      while (e && e.tag !== ne);
      return e || null;
    }
    function _T(e, t) {
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
    function LE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ne && g !== null) {
          var x = g;
          if (u) {
            var M = wl(p, s);
            M != null && f.unshift(tp(p, M, x));
          } else if (!u) {
            var U = wl(p, s);
            U != null && f.push(tp(p, U, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function DT(e, t, a, i, u) {
      var s = i && u ? _T(i, u) : null;
      i !== null && LE(e, t, i, s, !1), u !== null && a !== null && LE(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", Do = "suppressHydrationWarning", ME = "autoFocus", Bs = "children", Is = "style", Ch = "__html", Dy, Rh, rp, NE, Th, zE, UE;
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
        registrationNameDependencies: Ze,
        possibleRegistrationNames: rt
      });
    }, zE = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = xh(a), u = xh(t);
        u !== i && (ja = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, NE = function(e) {
      if (!ja) {
        ja = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, UE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function xh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function wh(e, t, a, i) {
      var u = xh(t), s = xh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function AE(e) {
      return e.nodeType === Yi ? e : e.ownerDocument;
    }
    function MT() {
    }
    function bh(e) {
      e.onclick = MT;
    }
    function NT(e, t, a, i, u) {
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
          else s === Eh || s === Do || s === ME || (Ze.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? yv(e, f) : s === np ? iv(e, f) : s === Bs ? ao(e, f) : br(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = AE(a), f, p = i;
      if (p === Bi && (p = ed(e)), p === Bi) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
    function AT(e, t) {
      return AE(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = Tl(t, a);
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
          ou(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), s = Kf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), NT(t, e, i, s, u), t) {
        case "input":
          Ja(e), N(e, a, !1);
          break;
        case "textarea":
          Ja(e), rv(e);
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
    function FT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Kf(e, a), p = Kf(e, i), s = [];
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
          } else v === np || v === Bs || v === Eh || v === Do || v === ME || (Ze.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Is)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === np) {
            var U = x ? x[Ch] : void 0, F = M ? M[Ch] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Eh || v === Do || (Ze.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Th(v, x), v === "onScroll" && Sn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ty(g, p[Is]), (s = s || []).push(Is, g)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (zT(e, t, s, f), a) {
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
    function VT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Rh(t, a), t) {
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
          ou(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), Sn("invalid", e);
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
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var F = a[U];
          if (U === Bs)
            typeof F == "string" ? e.textContent !== F && (a[Do] !== !0 && wh(e.textContent, F, s, f), M = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[Do] !== !0 && wh(e.textContent, F, s, f), M = [Bs, "" + F]);
          else if (Ze.hasOwnProperty(U))
            F != null && (typeof F != "function" && Th(U, F), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Le = en(U);
            if (a[Do] !== !0) {
              if (!(U === Eh || U === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === np) {
                  var xe = e.innerHTML, xt = F ? F[Ch] : void 0;
                  if (xt != null) {
                    var gt = UE(e, xt);
                    gt !== xe && rp(U, xe, gt);
                  }
                } else if (U === Is) {
                  if (v.delete(U), zE) {
                    var k = Zm(F);
                    se = e.getAttribute("style"), k !== se && rp(U, se, k);
                  }
                } else if (p && !_)
                  v.delete(U.toLowerCase()), se = tu(e, U, F), F !== se && rp(U, se, F);
                else if (!vn(U, Le, p) && !Kn(U, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), se = vl(e, U, F, Le);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = PT(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    se = tu(e, U, F);
                  }
                  var ve = _;
                  !ve && F !== se && !H && rp(U, se, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && NE(v), t) {
        case "input":
          Ja(e), N(e, a, !0);
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
      return M;
    }
    function BT(e, t, a) {
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
    function IT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
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
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jE = [
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
      ], WT = jE.concat(["button"]), $T = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FE = {
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
        var a = et({}, e || FE), i = {
          tag: t
        };
        return jE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), WT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var QT = function(e, t) {
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
            return $T.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      }, HE = {};
      ap = function(e, t, a) {
        a = a || FE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = QT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!HE[y]) {
            HE[y] = !0;
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
    var _h = "suppressHydrationWarning", Dh = "$", kh = "/$", lp = "$?", up = "$!", qT = "style", Ny = null, zy = null;
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
    function XT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function pD(e) {
      return e;
    }
    function JT(e) {
      Ny = Fn(), zy = dT();
      var t = null;
      return Qn(!1), t;
    }
    function ZT(e) {
      pT(zy), Qn(Ny), Ny = null, zy = null;
    }
    function ex(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = UT(e, t, a, s);
      return cp(u, y), By(y, t), y;
    }
    function tx(e, t) {
      e.appendChild(t);
    }
    function nx(e, t, a, i, u) {
      switch (jT(e, t, a, i), t) {
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
    function rx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return FT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ax(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return cp(i, s), s;
    }
    function ix() {
      var e = window.event;
      return e === void 0 ? Na : af(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, lx = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, PE = typeof Promise == "function" ? Promise : void 0, ux = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(ox);
    } : Ay;
    function ox(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sx(e, t, a, i) {
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
    function cx(e, t, a, i, u, s) {
      HT(e, t, a, i, u), By(e, u);
    }
    function VE(e) {
      ao(e, "");
    }
    function fx(e, t, a) {
      e.nodeValue = a;
    }
    function dx(e, t) {
      e.appendChild(t);
    }
    function px(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function vx(e, t, a) {
      e.insertBefore(t, a);
    }
    function hx(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mx(e, t) {
      e.removeChild(t);
    }
    function yx(e, t) {
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
              e.removeChild(u), ku(t);
              return;
            } else
              i--;
          else (s === Dh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      ku(t);
    }
    function gx(e, t) {
      e.nodeType === Mn ? Fy(e.parentNode, t) : e.nodeType === $r && Fy(e, t), ku(e);
    }
    function Sx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Ex(e) {
      e.nodeValue = "";
    }
    function Cx(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Rx(e, t) {
      e.nodeValue = t;
    }
    function Tx(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === Yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function xx(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wx(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function bx(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function BE(e) {
      return e.data === lp;
    }
    function Hy(e) {
      return e.data === up;
    }
    function _x(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Dx(e, t) {
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
    function kx(e) {
      return Oh(e.firstChild);
    }
    function Ox(e) {
      return Oh(e.firstChild);
    }
    function Lx(e) {
      return Oh(e.nextSibling);
    }
    function Mx(e, t, a, i, u, s, f) {
      cp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ct) !== De;
      return VT(e, t, a, p, i, y, f);
    }
    function Nx(e, t, a, i) {
      return cp(a, e), a.mode & ct, BT(e, t);
    }
    function zx(e, t) {
      cp(t, e);
    }
    function Ux(e) {
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
    function IE(e) {
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
    function Ax(e) {
      ku(e);
    }
    function jx(e) {
      ku(e);
    }
    function Fx(e) {
      return e !== "head" && e !== "body";
    }
    function Hx(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function Px(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function Vx(e, t) {
      t.nodeType === $r ? ky(e, t) : t.nodeType === Mn || Oy(e, t);
    }
    function Bx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? ky(a, t) : t.nodeType === Mn || Oy(a, t));
      }
    }
    function Ix(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === $r ? ky(a, i) : i.nodeType === Mn || Oy(a, i));
    }
    function Yx(e, t, a) {
      Ly(e, t);
    }
    function Wx(e, t) {
      My(e, t);
    }
    function $x(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function Qx(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function Gx(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ly(a, i);
    }
    function qx(e, t, a, i, u) {
      (u || t[_h] !== !0) && My(a, i);
    }
    function Kx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Xx(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Py = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Vy = "__reactEvents$" + Sf, Jx = "__reactListeners$" + Sf, Zx = "__reactHandles$" + Sf;
    function e1(e) {
      delete e[Ef], delete e[Py], delete e[Vy], delete e[Jx], delete e[Zx];
    }
    function cp(e, t) {
      t[Ef] = e;
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
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = IE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = IE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === ne || t.tag === Ue || t.tag === be || t.tag === Z) ? t : null;
    }
    function Cf(e) {
      if (e.tag === ne || e.tag === Ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function t1(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var WE = {}, $E = A.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        $E.setExtraStackFrame(a);
      } else
        $E.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in WE) && (WE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var Iy = [], zh;
    zh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[Uu] && S("Unexpected Fiber popped."), e.current = Iy[Uu], Iy[Uu] = null, zh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, Iy[Uu] = e.current, zh[Uu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Au = Oo(li), Il = Oo(!1), Wy = li;
    function Rf(e, t, a) {
      return a && Yl(t) ? Wy : Au.current;
    }
    function QE(e, t, a) {
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
        return u && QE(e, t, s), s;
      }
    }
    function Uh() {
      return Il.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ra(Il, e), ra(Au, e);
    }
    function $y(e) {
      ra(Il, e), ra(Au, e);
    }
    function GE(e, t, a) {
      {
        if (Au.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Au, t, e), aa(Il, a, e);
      }
    }
    function qE(e, t, a) {
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
        return et({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Wy = Au.current, aa(Au, a, e), aa(Il, Il.current, e), !0;
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = qE(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Il, e), ra(Au, e), aa(Au, u, e), aa(Il, a, e);
        } else
          ra(Il, e), aa(Il, a, e);
      }
    }
    function n1(e) {
      {
        if (!hu(e) || e.tag !== ce)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case ce: {
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
    var Lo = 0, Fh = 1, ju = null, Qy = !1, Gy = !1;
    function XE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function r1(e) {
      Qy = !0, XE(e);
    }
    function JE() {
      Qy && Mo();
    }
    function Mo() {
      if (!Gy && ju !== null) {
        Gy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = ju;
          for (jn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Qy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), vd(ss, Mo), s;
        } finally {
          jn(t), Gy = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Hh = null, Ph = 0, Li = [], Mi = 0, Ws = null, Fu = 1, Hu = "";
    function a1(e) {
      return Qs(), (e.flags & Ci) !== _e;
    }
    function i1(e) {
      return Qs(), Ph;
    }
    function l1() {
      var e = Hu, t = Fu, a = t & ~u1(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), xf[wf++] = Ph, xf[wf++] = Hh, Hh = e, Ph = t;
    }
    function ZE(e, t, a) {
      Qs(), Li[Mi++] = Fu, Li[Mi++] = Hu, Li[Mi++] = Ws, Ws = e;
      var i = Fu, u = Hu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, U = Vh(t) + M, F = p << M, se = F | x, Le = b + u;
        Fu = 1 << U | se, Hu = Le;
      } else {
        var xe = p << s, xt = xe | f, gt = u;
        Fu = 1 << v | xt, Hu = gt;
      }
    }
    function qy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), ZE(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Un(e);
    }
    function u1(e) {
      return 1 << Vh(e) - 1;
    }
    function Ky(e) {
      for (; e === Hh; )
        Hh = xf[--wf], xf[wf] = null, Ph = xf[--wf], xf[wf] = null;
      for (; e === Ws; )
        Ws = Li[--Mi], Li[Mi] = null, Hu = Li[--Mi], Li[Mi] = null, Fu = Li[--Mi], Li[Mi] = null;
    }
    function o1() {
      return Qs(), Ws !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function s1(e, t) {
      Qs(), Li[Mi++] = Fu, Li[Mi++] = Hu, Li[Mi++] = Ws, Fu = t.id, Hu = t.overflow, Ws = e;
    }
    function Qs() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Gs = !1, No = null;
    function c1() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function e0() {
      Gs = !0;
    }
    function f1() {
      return Gs;
    }
    function d1(e) {
      var t = e.stateNode.containerInfo;
      return Ni = Ox(t), Ur = e, nl = !0, No = null, Gs = !1, !0;
    }
    function p1(e, t, a) {
      return Ni = Lx(t), Ur = e, nl = !0, No = null, Gs = !1, a !== null && s1(e, a), !0;
    }
    function t0(e, t) {
      switch (e.tag) {
        case Z: {
          Vx(e.stateNode.containerInfo, t);
          break;
        }
        case ne: {
          var a = (e.mode & ct) !== De;
          Ix(
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
          i.dehydrated !== null && Bx(i.dehydrated, t);
          break;
        }
      }
    }
    function n0(e, t) {
      t0(e, t);
      var a = y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Da) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ne:
                var i = t.type;
                t.pendingProps, Yx(a, i);
                break;
              case Ue:
                var u = t.pendingProps;
                Wx(a, u);
                break;
            }
            break;
          }
          case ne: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ne: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ct) !== De;
                Gx(
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
              case Ue: {
                var b = t.pendingProps, x = (e.mode & ct) !== De;
                qx(
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
          case be: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case ne:
                var F = t.type;
                t.pendingProps, $x(U, F);
                break;
              case Ue:
                var se = t.pendingProps;
                Qx(U, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function r0(e, t) {
      t.flags = t.flags & ~Gr | mn, Xy(e, t);
    }
    function a0(e, t) {
      switch (e.tag) {
        case ne: {
          var a = e.type;
          e.pendingProps;
          var i = xx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = kx(i), !0) : !1;
        }
        case Ue: {
          var u = e.pendingProps, s = wx(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case be: {
          var f = bx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: o1(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = g_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & ct) !== De && (e.flags & we) === _e;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          Jy(e) && (Xy(Ur, e), Zy()), r0(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!a0(e, t)) {
          Jy(e) && (Xy(Ur, e), Zy()), t = op(a);
          var i = Ur;
          if (!t || !a0(e, t)) {
            r0(Ur, e), nl = !1, Ur = e;
            return;
          }
          n0(i, a);
        }
      }
    }
    function v1(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Mx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function h1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Nx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== De;
              Hx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ne: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ct) !== De;
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
    function m1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zx(a, e);
    }
    function y1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ux(a);
    }
    function i0(e) {
      for (var t = e.return; t !== null && t.tag !== ne && t.tag !== Z && t.tag !== be; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return i0(e), nl = !0, !1;
      if (e.tag !== Z && (e.tag !== ne || Fx(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Jy(e))
            l0(e), Zy();
          else
            for (; t; )
              n0(e, t), t = op(t);
      }
      return i0(e), e.tag === be ? Ni = y1(e) : Ni = Ur ? op(e.stateNode) : null, !0;
    }
    function g1() {
      return nl && Ni !== null;
    }
    function l0(e) {
      for (var t = Ni; t; )
        t0(e, t), t = op(t);
    }
    function bf() {
      Ur = null, Ni = null, nl = !1, Gs = !1;
    }
    function u0() {
      No !== null && (eR(No), No = null);
    }
    function Ar() {
      return nl;
    }
    function tg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var S1 = A.ReactCurrentBatchConfig, E1 = null;
    function C1() {
      return S1.transition;
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
      var R1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ks = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Gt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(Ie(x) || "Component"), Ks.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(Ie(x) || "Component"), Ks.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(Ie(x) || "Component"), Ks.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(Ie(x) || "Component"), Ks.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(Ie(x) || "Component"), Ks.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(Ie(x) || "Component"), Ks.add(x.type);
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
          tt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          tt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = qs(u);
          tt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), o0 = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = R1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!o0.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), o0.add(s.type);
            });
            var u = qs(i);
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
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, s0 = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, s0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function T1(e) {
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
        !(typeof a.type == "function" && !T1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
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
    function c0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function f0(e) {
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
        for (var O = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, H) {
        var O = ic(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= Ci, H;
        var q = k.alternate;
        if (q !== null) {
          var ve = q.index;
          return ve < H ? (k.flags |= mn, H) : ve;
        } else
          return k.flags |= mn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= mn), k;
      }
      function p(k, H, O, q) {
        if (H === null || H.tag !== Ue) {
          var ve = tE(O, k.mode, q);
          return ve.return = k, ve;
        } else {
          var fe = u(H, O);
          return fe.return = k, fe;
        }
      }
      function v(k, H, O, q) {
        var ve = O.type;
        if (ve === fi)
          return g(k, H, O.props.children, q, O.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        mR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ye && c0(ve) === H.type)) {
          var fe = u(H, O.props);
          return fe.ref = gp(k, H, O), fe.return = k, fe._debugSource = O._source, fe._debugOwner = O._owner, fe;
        }
        var Pe = eE(O, k.mode, q);
        return Pe.ref = gp(k, H, O), Pe.return = k, Pe;
      }
      function y(k, H, O, q) {
        if (H === null || H.tag !== te || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ve = nE(O, k.mode, q);
          return ve.return = k, ve;
        } else {
          var fe = u(H, O.children || []);
          return fe.return = k, fe;
        }
      }
      function g(k, H, O, q, ve) {
        if (H === null || H.tag !== ht) {
          var fe = Yo(O, k.mode, q, ve);
          return fe.return = k, fe;
        } else {
          var Pe = u(H, O);
          return Pe.return = k, Pe;
        }
      }
      function b(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = tE("" + H, k.mode, O);
          return q.return = k, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case _r: {
              var ve = eE(H, k.mode, O);
              return ve.ref = gp(k, null, H), ve.return = k, ve;
            }
            case rr: {
              var fe = nE(H, k.mode, O);
              return fe.return = k, fe;
            }
            case Ye: {
              var Pe = H._payload, Ge = H._init;
              return b(k, Ge(Pe), O);
            }
          }
          if (it(H) || Ke(H)) {
            var Kt = Yo(H, k.mode, O, null);
            return Kt.return = k, Kt;
          }
          Yh(k, H);
        }
        return typeof H == "function" && Wh(k), null;
      }
      function x(k, H, O, q) {
        var ve = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(k, H, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return O.key === ve ? v(k, H, O, q) : null;
            case rr:
              return O.key === ve ? y(k, H, O, q) : null;
            case Ye: {
              var fe = O._payload, Pe = O._init;
              return x(k, H, Pe(fe), q);
            }
          }
          if (it(O) || Ke(O))
            return ve !== null ? null : g(k, H, O, q, null);
          Yh(k, O);
        }
        return typeof O == "function" && Wh(k), null;
      }
      function M(k, H, O, q, ve) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var fe = k.get(O) || null;
          return p(H, fe, "" + q, ve);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case _r: {
              var Pe = k.get(q.key === null ? O : q.key) || null;
              return v(H, Pe, q, ve);
            }
            case rr: {
              var Ge = k.get(q.key === null ? O : q.key) || null;
              return y(H, Ge, q, ve);
            }
            case Ye:
              var Kt = q._payload, Ut = q._init;
              return M(k, H, O, Ut(Kt), ve);
          }
          if (it(q) || Ke(q)) {
            var Gn = k.get(O) || null;
            return g(H, Gn, q, ve, null);
          }
          Yh(H, q);
        }
        return typeof q == "function" && Wh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case _r:
            case rr:
              s0(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Ye:
              var ve = k._payload, fe = k._init;
              U(fe(ve), H, O);
              break;
          }
        }
        return H;
      }
      function F(k, H, O, q) {
        for (var ve = null, fe = 0; fe < O.length; fe++) {
          var Pe = O[fe];
          ve = U(Pe, ve, k);
        }
        for (var Ge = null, Kt = null, Ut = H, Gn = 0, At = 0, Pn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Pn = Ut, Ut = null) : Pn = Ut.sibling;
          var la = x(k, Ut, O[At], q);
          if (la === null) {
            Ut === null && (Ut = Pn);
            break;
          }
          e && Ut && la.alternate === null && t(k, Ut), Gn = s(la, Gn, At), Kt === null ? Ge = la : Kt.sibling = la, Kt = la, Ut = Pn;
        }
        if (At === O.length) {
          if (a(k, Ut), Ar()) {
            var Ir = At;
            $s(k, Ir);
          }
          return Ge;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var oi = b(k, O[At], q);
            oi !== null && (Gn = s(oi, Gn, At), Kt === null ? Ge = oi : Kt.sibling = oi, Kt = oi);
          }
          if (Ar()) {
            var Ca = At;
            $s(k, Ca);
          }
          return Ge;
        }
        for (var Ra = i(k, Ut); At < O.length; At++) {
          var ua = M(Ra, k, At, O[At], q);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? At : ua.key), Gn = s(ua, Gn, At), Kt === null ? Ge = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && Ra.forEach(function(Wf) {
          return t(k, Wf);
        }), Ar()) {
          var $u = At;
          $s(k, $u);
        }
        return Ge;
      }
      function se(k, H, O, q) {
        var ve = Ke(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === ve && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var fe = ve.call(O);
          if (fe)
            for (var Pe = null, Ge = fe.next(); !Ge.done; Ge = fe.next()) {
              var Kt = Ge.value;
              Pe = U(Kt, Pe, k);
            }
        }
        var Ut = ve.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Pn = H, la = 0, Ir = 0, oi = null, Ca = Ut.next(); Pn !== null && !Ca.done; Ir++, Ca = Ut.next()) {
          Pn.index > Ir ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var Ra = x(k, Pn, Ca.value, q);
          if (Ra === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && Ra.alternate === null && t(k, Pn), la = s(Ra, la, Ir), At === null ? Gn = Ra : At.sibling = Ra, At = Ra, Pn = oi;
        }
        if (Ca.done) {
          if (a(k, Pn), Ar()) {
            var ua = Ir;
            $s(k, ua);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Ca.done; Ir++, Ca = Ut.next()) {
            var $u = b(k, Ca.value, q);
            $u !== null && (la = s($u, la, Ir), At === null ? Gn = $u : At.sibling = $u, At = $u);
          }
          if (Ar()) {
            var Wf = Ir;
            $s(k, Wf);
          }
          return Gn;
        }
        for (var Kp = i(k, Pn); !Ca.done; Ir++, Ca = Ut.next()) {
          var Jl = M(Kp, k, Ir, Ca.value, q);
          Jl !== null && (e && Jl.alternate !== null && Kp.delete(Jl.key === null ? Ir : Jl.key), la = s(Jl, la, Ir), At === null ? Gn = Jl : At.sibling = Jl, At = Jl);
        }
        if (e && Kp.forEach(function(q_) {
          return t(k, q_);
        }), Ar()) {
          var G_ = Ir;
          $s(k, G_);
        }
        return Gn;
      }
      function Le(k, H, O, q) {
        if (H !== null && H.tag === Ue) {
          a(k, H.sibling);
          var ve = u(H, O);
          return ve.return = k, ve;
        }
        a(k, H);
        var fe = tE(O, k.mode, q);
        return fe.return = k, fe;
      }
      function xe(k, H, O, q) {
        for (var ve = O.key, fe = H; fe !== null; ) {
          if (fe.key === ve) {
            var Pe = O.type;
            if (Pe === fi) {
              if (fe.tag === ht) {
                a(k, fe.sibling);
                var Ge = u(fe, O.props.children);
                return Ge.return = k, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (fe.elementType === Pe || // Keep this check inline so it only runs on the false path:
            mR(fe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ye && c0(Pe) === fe.type) {
              a(k, fe.sibling);
              var Kt = u(fe, O.props);
              return Kt.ref = gp(k, fe, O), Kt.return = k, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(k, fe);
            break;
          } else
            t(k, fe);
          fe = fe.sibling;
        }
        if (O.type === fi) {
          var Ut = Yo(O.props.children, k.mode, q, O.key);
          return Ut.return = k, Ut;
        } else {
          var Gn = eE(O, k.mode, q);
          return Gn.ref = gp(k, H, O), Gn.return = k, Gn;
        }
      }
      function xt(k, H, O, q) {
        for (var ve = O.key, fe = H; fe !== null; ) {
          if (fe.key === ve)
            if (fe.tag === te && fe.stateNode.containerInfo === O.containerInfo && fe.stateNode.implementation === O.implementation) {
              a(k, fe.sibling);
              var Pe = u(fe, O.children || []);
              return Pe.return = k, Pe;
            } else {
              a(k, fe);
              break;
            }
          else
            t(k, fe);
          fe = fe.sibling;
        }
        var Ge = nE(O, k.mode, q);
        return Ge.return = k, Ge;
      }
      function gt(k, H, O, q) {
        var ve = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return f(xe(k, H, O, q));
            case rr:
              return f(xt(k, H, O, q));
            case Ye:
              var fe = O._payload, Pe = O._init;
              return gt(k, H, Pe(fe), q);
          }
          if (it(O))
            return F(k, H, O, q);
          if (Ke(O))
            return se(k, H, O, q);
          Yh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, q)) : (typeof O == "function" && Wh(k), a(k, H));
      }
      return gt;
    }
    var _f = f0(!0), d0 = f0(!1);
    function x1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function w1(e, t) {
      for (var a = e.child; a !== null; )
        d_(a, t), a = a.sibling;
    }
    var ug = Oo(null), og;
    og = {};
    var $h = null, Df = null, sg = null, Qh = !1;
    function Gh() {
      $h = null, Df = null, sg = null, Qh = !1;
    }
    function p0() {
      Qh = !0;
    }
    function v0() {
      Qh = !1;
    }
    function h0(e, t, a) {
      aa(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ra(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Du(i.childLanes, t) ? u !== null && !Du(u.childLanes, t) && (u.childLanes = Je(u.childLanes, t)) : (i.childLanes = Je(i.childLanes, t), u !== null && (u.childLanes = Je(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function b1(e, t, a) {
      _1(e, t, a);
    }
    function _1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ce) {
                var p = Ts(a), v = Pu(Xt, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Je(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Je(x.lanes, a)), fg(i.return, a, e), s.lanes = Je(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === vt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Je(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Je(U.lanes, a)), fg(M, a, e), u = i.sibling;
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
    var Xs = null;
    function dg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function D1() {
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
    function m0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function k1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function O1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Fa(e, t) {
      return qh(e, t);
    }
    var L1 = qh;
    function qh(e, t) {
      e.lanes = Je(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Je(a.lanes, t)), a === null && (e.flags & (mn | Gr)) !== _e && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Je(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Je(a.childLanes, t) : (u.flags & (mn | Gr)) !== _e && dR(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var y0 = 0, g0 = 1, Kh = 2, pg = 3, Xh = !1, vg, Jh;
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
    function S0(e, t) {
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
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: y0,
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
      if (Jh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, L1(e, a);
      } else
        return O1(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = Je(s, a);
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
    function M1(e, t, a, i, u, s) {
      switch (a.tag) {
        case g0: {
          var f = a.payload;
          if (typeof f == "function") {
            p0();
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
              v0();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~Xn | we;
        case y0: {
          var v = a.payload, y;
          if (typeof v == "function") {
            p0(), y = v.call(s, i, u);
            {
              if (e.mode & Gt) {
                yn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  yn(!1);
                }
              }
              v0();
            }
          } else
            y = v;
          return y == null ? i : et({}, i, y);
        }
        case Kh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Jh = u.shared;
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
        var M = u.baseState, U = Y, F = null, se = null, Le = null, xe = s;
        do {
          var xt = xe.lane, gt = xe.eventTime;
          if (Du(i, xt)) {
            if (Le !== null) {
              var H = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = M1(e, u, xe, M, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== kt) {
              e.flags |= rn;
              var q = u.effects;
              q === null ? u.effects = [xe] : q.push(xe);
            }
          } else {
            var k = {
              eventTime: gt,
              lane: xt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Le === null ? (se = Le = k, F = M) : Le = Le.next = k, U = Je(U, xt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, fe = ve.next;
            ve.next = null, xe = fe, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = se, u.lastBaseUpdate = Le;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var Ge = Pe;
          do
            U = Je(U, Ge.lane), Ge = Ge.next;
          while (Ge !== Pe);
        } else s === null && (u.shared.lanes = Y);
        Wp(U), e.lanes = U, e.memoizedState = M;
      }
      Jh = null;
    }
    function N1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function E0() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function C0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, N1(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), nm = Oo(Sp);
    function rm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function R0() {
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
    function T0(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = XT(t, e.type);
      t !== a && (aa(Ep, e, e), aa(Uo, a, e));
    }
    function Sg(e) {
      Ep.current === e && (ra(Uo, e), ra(Ep, e));
    }
    var z1 = 0, x0 = 1, w0 = 1, Cp = 2, al = Oo(z1);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & x0;
    }
    function Cg(e, t) {
      return e & x0 | t;
    }
    function U1(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(al, t, e);
    }
    function Mf(e) {
      ra(al, e);
    }
    function A1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || BE(i) || Hy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & we) !== _e;
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
    ), Wl = (
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
    function j1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = A.ReactCurrentDispatcher, Rp = A.ReactCurrentBatchConfig, xg, Nf;
    xg = /* @__PURE__ */ new Set();
    var Js = Y, qt = null, dr = null, pr = null, im = !1, Tp = !1, xp = 0, F1 = 0, H1 = 25, V = null, zi = null, jo = -1, wg = !1;
    function Vt() {
      {
        var e = V;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function re() {
      {
        var e = V;
        zi !== null && (jo++, zi[jo] !== e && P1(e));
      }
    }
    function zf(e) {
      e != null && !it(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, qt = t, zi = e !== null ? e._debugHookTypes : null, jo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? pe.current = Q0 : zi !== null ? pe.current = $0 : pe.current = W0;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, xp = 0, p >= H1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, pe.current = G0, f = a(i, u);
        } while (Tp);
      }
      pe.current = gm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Js = Y, qt = null, dr = null, pr = null, V = null, zi = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function b0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function _0() {
      if (pe.current = gm, im) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Js = Y, qt = null, dr = null, pr = null, zi = null, jo = -1, V = null, P0 = !1, Tp = !1, xp = 0;
    }
    function $l() {
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
    function D0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
      var i = $l(), u;
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
      var f = s.dispatch = Y1.bind(null, qt, s);
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
        var g = f.next, b = s.baseState, x = null, M = null, U = null, F = g;
        do {
          var se = F.lane;
          if (Du(Js, se)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var xt = F.action;
              b = e(b, xt);
            }
          } else {
            var Le = {
              lane: se,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Le, x = b) : U = U.next = Le, qt.lanes = Je(qt.lanes, se), Wp(se);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? x = b : U.next = M, Q(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = x, i.baseQueue = U, u.lastRenderedState = b;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var k = gt;
        do {
          var H = k.lane;
          qt.lanes = Je(qt.lanes, H), Wp(H), k = k.next;
        } while (k !== gt);
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
    function vD(e, t, a) {
    }
    function hD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = qt, u = $l(), s, f = Ar();
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
        Jc(v, Js) || k0(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(L0.bind(null, i, y, e), [e]), i.flags |= Qr, wp(cr | jr, O0.bind(null, i, y, s, t), void 0, null), s;
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
      if (_p(L0.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Qr, wp(cr | jr, O0.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || k0(i, t, s);
      }
      return s;
    }
    function k0(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = D0(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function O0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, M0(t) && N0(e);
    }
    function L0(e, t, a) {
      var i = function() {
        M0(t) && N0(e);
      };
      return a(i);
    }
    function M0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Q(a, i);
      } catch {
        return !0;
      }
    }
    function N0(e) {
      var t = Fa(e, je);
      t !== null && yr(t, e, je, Xt);
    }
    function um(e) {
      var t = $l();
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
      var i = a.dispatch = W1.bind(null, qt, a);
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
        s = D0(), qt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = $l();
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
      var u = $l(), s = i === void 0 ? null : i;
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
      return bp(Ct, Wl, e, t);
    }
    function fm(e, t) {
      return sm(Ct, Wl, e, t);
    }
    function Ag(e, t) {
      var a = Ct;
      return a |= $i, (qt.mode & Nt) !== De && (a |= _l), bp(a, fr, e, t);
    }
    function dm(e, t) {
      return sm(Ct, fr, e, t);
    }
    function z0(e, t) {
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
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= $i, (qt.mode & Nt) !== De && (u |= _l), bp(u, fr, z0.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(Ct, fr, z0.bind(null, t, e), i);
    }
    function V1(e, t) {
    }
    var vm = V1;
    function Fg(e, t) {
      var a = $l(), i = t === void 0 ? null : t;
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
      var a = $l(), i = t === void 0 ? null : t, u = e();
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
    function Pg(e) {
      var t = $l();
      return t.memoizedState = e, e;
    }
    function U0(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return j0(t, i, e);
    }
    function A0(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return j0(t, a, e);
    }
    function j0(e, t, a) {
      var i = !kd(Js);
      if (i) {
        if (!Q(a, t)) {
          var u = Md();
          qt.lanes = Je(qt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function B1(e, t, a) {
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
          f > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = um(!1), t = e[0], a = e[1], i = B1.bind(null, a), u = $l();
      return u.memoizedState = i, [t, i];
    }
    function F0() {
      var e = Mg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function H0() {
      var e = Ng(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var P0 = !1;
    function I1() {
      return P0;
    }
    function Bg() {
      var e = $l(), t = jm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = l1();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = F1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function Y1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (V0(e))
        B0(t, u);
      else {
        var s = m0(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), I0(s, t, i);
        }
      }
      Y0(e, i);
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
      if (V0(e))
        B0(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = pe.current, pe.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Q(y, v)) {
                k1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              pe.current = p;
            }
          }
        }
        var g = m0(e, t, u, i);
        if (g !== null) {
          var b = Ea();
          yr(g, e, i, b), I0(g, t, i);
        }
      }
      Y0(e, i);
    }
    function V0(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function B0(e, t) {
      Tp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function I0(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = Je(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function Y0(e, t, a) {
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
    }, W0 = null, $0 = null, Q0 = null, G0 = null, Ql = null, il = null, Sm = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      W0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Vt(), zf(t), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Vt(), zf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Vt(), zf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Vt(), zf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Vt(), zf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Vt(), zf(t);
          var a = pe.current;
          pe.current = Ql;
          try {
            return Hg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Vt();
          var i = pe.current;
          pe.current = Ql;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Vt(), zg(e);
        },
        useState: function(e) {
          V = "useState", Vt();
          var t = pe.current;
          pe.current = Ql;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Vt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Vt(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", Vt(), Bg();
        },
        unstable_isNewReconciler: J
      }, $0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = pe.current;
          pe.current = Ql;
          try {
            return Hg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = pe.current;
          pe.current = Ql;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), zg(e);
        },
        useState: function(e) {
          V = "useState", re();
          var t = pe.current;
          pe.current = Ql;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", re(), Bg();
        },
        unstable_isNewReconciler: J
      }, Q0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = pe.current;
          pe.current = il;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = pe.current;
          pe.current = il;
          try {
            return kg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), om();
        },
        useState: function(e) {
          V = "useState", re();
          var t = pe.current;
          pe.current = il;
          try {
            return Mg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), U0(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), F0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", re(), ym();
        },
        unstable_isNewReconciler: J
      }, G0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = pe.current;
          pe.current = Sm;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = pe.current;
          pe.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), om();
        },
        useState: function(e) {
          V = "useState", re();
          var t = pe.current;
          pe.current = Sm;
          try {
            return Ng(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), A0(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), H0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", re(), ym();
        },
        unstable_isNewReconciler: J
      }, Ql = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", We(), Vt(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", We(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", We(), Vt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", We(), Vt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", We(), Vt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", We(), Vt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", We(), Vt();
          var a = pe.current;
          pe.current = Ql;
          try {
            return Hg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", We(), Vt();
          var i = pe.current;
          pe.current = Ql;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", We(), Vt(), zg(e);
        },
        useState: function(e) {
          V = "useState", We(), Vt();
          var t = pe.current;
          pe.current = Ql;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", We(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", We(), Vt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", We(), Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", We(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", We(), Vt(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", We(), Vt(), Bg();
        },
        unstable_isNewReconciler: J
      }, il = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", We(), re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", We(), re(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", We(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", We(), re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", We(), re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", We(), re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", We(), re();
          var a = pe.current;
          pe.current = il;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", We(), re();
          var i = pe.current;
          pe.current = il;
          try {
            return kg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", We(), re(), om();
        },
        useState: function(e) {
          V = "useState", We(), re();
          var t = pe.current;
          pe.current = il;
          try {
            return Mg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", We(), re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", We(), re(), U0(e);
        },
        useTransition: function() {
          return V = "useTransition", We(), re(), F0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", We(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", We(), re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", We(), re(), ym();
        },
        unstable_isNewReconciler: J
      }, Sm = {
        readContext: function(e) {
          return Ig(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", We(), re(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", We(), re(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", We(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", We(), re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", We(), re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", We(), re(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", We(), re();
          var a = pe.current;
          pe.current = il;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", We(), re();
          var i = pe.current;
          pe.current = il;
          try {
            return Og(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", We(), re(), om();
        },
        useState: function(e) {
          V = "useState", We(), re();
          var t = pe.current;
          pe.current = il;
          try {
            return Ng(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", We(), re(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", We(), re(), A0(e);
        },
        useTransition: function() {
          return V = "useTransition", We(), re(), H0();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", We(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", We(), re(), lm(e, t);
        },
        useId: function() {
          return V = "useId", We(), re(), ym();
        },
        unstable_isNewReconciler: J
      };
    }
    var Fo = K.unstable_now, q0 = 0, Em = -1, Dp = -1, Cm = -1, Yg = !1, Rm = !1;
    function K0() {
      return Yg;
    }
    function $1() {
      Rm = !0;
    }
    function Q1() {
      Yg = !1, Rm = !1;
    }
    function G1() {
      Yg = Rm, Rm = !1;
    }
    function X0() {
      return q0;
    }
    function J0() {
      q0 = Fo();
    }
    function Wg(e) {
      Dp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function Z0(e) {
      Dp = -1;
    }
    function Tm(e, t) {
      if (Dp >= 0) {
        var a = Fo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Gl(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case yt:
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
            case yt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
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
        var a = et({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Kg, Xg, Jg, Zg, eS, eC, xm, tS, nS, rS, kp;
    {
      Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
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
        eC(t, s);
      }
      var f = s == null ? u : et({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.tag = g0, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Pu(i, u);
        s.tag = Kh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), Zh(f, a, u)), Mc(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
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
      return t.prototype && t.prototype.isPureReactComponent ? !ge(a, i) || !ge(u, s) : !0;
    }
    function q1(e, t, a) {
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
        p && (typeof p != "object" || it(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = iS, e.stateNode = t, vu(t, e), t._reactInternalInstance = qg;
    }
    function aC(e, t, a) {
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
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = wt(t) || "Component";
          Xg.has(x) || (Xg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var se = wt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(se) || (Zg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && QE(e, u, s), g;
    }
    function K1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      q1(e, t, a);
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
        var y = Ct;
        y |= $i, (e.mode & Nt) !== De && (y |= _l), e.flags |= y;
      }
    }
    function X1(e, t, a, i) {
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
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), E0();
      var x = e.memoizedState, M = u.state = x;
      if (em(e, a, u, i), M = e.memoizedState, s === a && x === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ct;
          U |= $i, (e.mode & Nt) !== De && (U |= _l), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), M = e.memoizedState);
      var F = tm() || nC(e, t, s, a, x, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Ct;
          se |= $i, (e.mode & Nt) !== De && (se |= _l), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Ct;
          Le |= $i, (e.mode & Nt) !== De && (Le |= _l), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function J1(e, t, a, i, u) {
      var s = t.stateNode;
      S0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var x = Rf(t, a, !0);
        b = Tf(t, x);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && iC(t, s, i, b), E0();
      var F = t.memoizedState, se = s.state = F;
      if (em(t, i, s, u), se = t.memoizedState, f === v && F === se && !Uh() && !tm() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof M == "function" && (aS(t, a, M, i), se = t.memoizedState);
      var Le = tm() || nC(t, a, p, i, F, se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = b, Le;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Pi(t),
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
    function Z1(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Z1(e, t);
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
    var ew = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        $b(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Pu(Xt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yR(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yR(e), oS(e, t), typeof u != "function" && Yb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ew(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Qb.bind(null, e, t, a);
        Xr && $p(e, a), t.then(s, s);
      }
    }
    function tw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nw(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === De && (a === le || a === Qe || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === be && A1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & ct) === De) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= we, a.flags |= xc, a.flags &= -52805, a.tag === ce) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ht;
            else {
              var f = Pu(Xt, je);
              f.tag = Kh, zo(a, f, je);
            }
          }
          a.lanes = Je(a.lanes, je);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function rw(e, t, a, i, u) {
      if (a.flags |= os, Xr && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), Ar() && a.mode & ct && e0();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~Cr, sC(f, t, a, e, u), f.mode & ct && uC(e, s, u), tw(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ct) {
        e0();
        var v = oC(t);
        if (v !== null) {
          (v.flags & Xn) === _e && (v.flags |= Cr), sC(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ab(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= Xn;
            var b = Ts(u);
            y.lanes = Je(y.lanes, b);
            var x = lC(y, g, b);
            mg(y, x);
            return;
          }
          case ce:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & we) === _e && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !oR(F))) {
              y.flags |= Xn;
              var se = Ts(u);
              y.lanes = Je(y.lanes, se);
              var Le = sS(y, M, se);
              mg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function aw() {
      return null;
    }
    var Op = A.ReactCurrentOwner, ul = !1, cS, Lp, fS, dS, pS, ec, vS, wm, Mp;
    cS = {}, Lp = {}, fS = {}, dS = {}, pS = {}, ec = !1, vS = {}, wm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = d0(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
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
      return ha(), e !== null && !ul ? (b0(e, t, u), Vu(e, t, u)) : (Ar() && y && qy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Fe, t.type = f, yS(t, s), dC(e, t, f, i, u);
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
      var x = e.child, M = TS(e, u);
      if (!M) {
        var U = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : ge, F(U, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var se = ic(x, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function dC(e, t, a, i, u) {
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
        if (ge(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & xc) !== _e && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & ct) === De) {
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
            v = Je(y, a);
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
        var M;
        s !== null ? (M = Je(s.baseLanes, a), t.memoizedState = null) : M = a, Fm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function vC(e, t) {
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
      return ha(), e !== null && !ul ? (b0(e, t, u), Vu(e, t, u)) : (Ar() && y && qy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (w_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= we, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = Je(t.lanes, g);
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
      var M;
      Yl(a) ? (M = !0, jh(t)) : M = !1, kf(t, u);
      var U = t.stateNode, F;
      U === null ? (_m(e, t), aC(t, a, i), lS(t, a, i, u), F = !0) : e === null ? F = X1(t, a, i, u) : F = J1(e, t, a, i, u);
      var se = mS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), ec = !0);
      }
      return se;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & we) !== _e;
      if (!i && !f)
        return u && KE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, Z0();
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
      return t.flags |= ti, e !== null && f ? iw(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && KE(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? GE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && GE(e, t.context, !1), yg(e, t.containerInfo);
    }
    function sw(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      S0(e, t), em(t, i, null, a);
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
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, b);
        } else {
          d1(t);
          var x = d0(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~mn | Gr, M = M.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return bf(), tg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      T0(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= ka), vC(e, t), ga(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && eg(t), null;
    }
    function dw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f_(v), g = ll(v, u), b;
      switch (y) {
        case le:
          return yS(t, v), t.type = v = Yf(v), b = hS(null, t, v, g, i), b;
        case ce:
          return t.type = v = QS(v), b = hC(null, t, v, g, i), b;
        case Qe:
          return t.type = v = GS(v), b = cC(null, t, v, g, i), b;
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
          return b = fC(
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
    function pw(e, t, a, i, u) {
      _m(e, t), t.tag = ce;
      var s;
      return Yl(a) ? (s = !0, jh(t)) : s = !1, kf(t, u), aC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function vw(e, t, a, i) {
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
        return Yl(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, x, i);
      } else {
        if (t.tag = le, t.mode & Gt) {
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
        cachePool: aw(),
        transitions: null
      };
    }
    function hw(e, t) {
      var a = null;
      return {
        baseLanes: Je(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Cp);
    }
    function yw(e, t) {
      return xs(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      b_(t) && (t.flags |= we);
      var u = al.current, s = !1, f = (t.flags & we) !== _e;
      if (f || mw(u, e) ? (s = !0, t.flags &= ~we) : (e === null || e.memoizedState !== null) && (u = U1(u, w0)), u = Lf(u), Ao(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = gw(t, y, g, a), x = t.child;
          return x.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return ES(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return Tw(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, se = i.children, Le = Ew(e, t, se, F, a), xe = t.child, xt = e.child.memoizedState;
          return xe.memoizedState = xt === null ? SS(a) : hw(xt, a), xe.childLanes = yw(e, a), t.memoizedState = gS, Le;
        } else {
          var gt = i.children, k = Sw(e, t, gt, a);
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
    function gw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ct) === De && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = CS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return SR(e, t, Y, null);
    }
    function SC(e, t) {
      return ic(e, t);
    }
    function Sw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Da) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Yo(i, s, u, null), b.flags |= mn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && tg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= mn, t.memoizedState = null, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Yo(i, s, u, null);
      return v.flags |= mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ct) !== De && _f(t, e.child, null, u), v;
    }
    function Rw(e, t, a) {
      return (e.mode & ct) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Hy(t) ? e.lanes = Rr : e.lanes = Jr, null;
    }
    function Tw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= we, null;
          var H = i.children, O = i.fallback, q = Cw(e, t, H, O, f), ve = t.child;
          return ve.memoizedState = SS(f), t.memoizedState = gS, q;
        }
      else {
        if (c1(), (t.mode & ct) === De)
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
            var g = _x(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = uS(b, p, y);
          return bm(e, t, f, x);
        }
        var M = Zr(f, e.childLanes);
        if (ul || M) {
          var U = jm();
          if (U !== null) {
            var F = Ud(U, f);
            if (F !== kt && F !== s.retryLane) {
              s.retryLane = F;
              var se = Xt;
              Fa(e, F), yr(U, e, F, se);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Le);
        } else if (BE(u)) {
          t.flags |= we, t.child = e.child;
          var xe = Gb.bind(null, e);
          return Dx(u, xe), null;
        } else {
          p1(t, u, s.treeContext);
          var xt = i.children, gt = ES(t, xt);
          return gt.flags |= Gr, gt;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = Je(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Je(i.lanes, t)), fg(e.return, t, a);
    }
    function xw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === ln)
          EC(i, a, e);
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
    function ww(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bw(e) {
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
    function _w(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = it(e), i = !a && typeof Ke(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (it(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = Ke(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
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
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      bw(u), _w(s, u), Dw(f, u), ga(e, t, f, a);
      var p = al.current, v = Eg(p, Cp);
      if (v)
        p = Cg(p, Cp), t.flags |= we;
      else {
        var y = e !== null && (e.flags & we) !== _e;
        y && xw(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & ct) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = ww(t.child), b;
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
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && am(U) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
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
    function kw(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var TC = !1;
    function Ow(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (h0(t, u, p), f !== null) {
        var y = f.value;
        if (Q(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          b1(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var xC = !1;
    function Lw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (xC || (xC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
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
      (t.mode & ct) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Z0(), Wp(t.lanes), Zr(a, t.childLanes) ? (x1(e, t), t.child) : null;
    }
    function Mw(e, t, a) {
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
    function Nw(e, t, a) {
      switch (t.tag) {
        case Z:
          mC(t), t.stateNode, bf();
          break;
        case ne:
          T0(t);
          break;
        case ce: {
          var i = t.type;
          Yl(i) && jh(t);
          break;
        }
        case te:
          yg(t, t.stateNode.containerInfo);
          break;
        case vt: {
          var u = t.memoizedProps.value, s = t.type._context;
          h0(t, s, u);
          break;
        }
        case yt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= Ct);
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
              return Ao(t, Lf(al.current)), t.flags |= we, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return gC(e, t, a);
            Ao(t, Lf(al.current));
            var b = Vu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(al.current));
          break;
        }
        case ln: {
          var x = (e.flags & we) !== _e, M = Zr(a, t.childLanes);
          if (x) {
            if (M)
              return RC(e, t, a);
            t.flags |= we;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ao(t, al.current), M)
            break;
          return null;
        }
        case ke:
        case jt:
          return t.lanes = Y, pC(e, t, a);
      }
      return Vu(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mw(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & we) === _e)
            return ul = !1, Nw(e, t, a);
          (e.flags & xc) !== _e ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && a1(t)) {
        var f = t.index, p = i1();
        ZE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Xe:
          return vw(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case le: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ll(y, g);
          return hS(e, t, y, b, a);
        }
        case ce: {
          var x = t.type, M = t.pendingProps, U = t.elementType === x ? M : ll(x, M);
          return hC(e, t, x, U, a);
        }
        case Z:
          return sw(e, t, a);
        case ne:
          return cw(e, t, a);
        case Ue:
          return fw(e, t);
        case be:
          return gC(e, t, a);
        case te:
          return kw(e, t, a);
        case Qe: {
          var F = t.type, se = t.pendingProps, Le = t.elementType === F ? se : ll(F, se);
          return cC(e, t, F, Le, a);
        }
        case ht:
          return lw(e, t, a);
        case mt:
          return uw(e, t, a);
        case yt:
          return ow(e, t, a);
        case vt:
          return Ow(e, t, a);
        case fn:
          return Lw(e, t, a);
        case ft: {
          var xe = t.type, xt = t.pendingProps, gt = ll(xe, xt);
          if (t.type !== t.elementType) {
            var k = xe.propTypes;
            k && tl(
              k,
              gt,
              // Resolved for outer only
              "prop",
              wt(xe)
            );
          }
          return gt = ll(xe.type, gt), fC(e, t, xe, gt, a);
        }
        case Fe:
          return dC(e, t, t.type, t.pendingProps, a);
        case Ht: {
          var H = t.type, O = t.pendingProps, q = t.elementType === H ? O : ll(H, O);
          return pw(e, t, H, q, a);
        }
        case ln:
          return RC(e, t, a);
        case _t:
          break;
        case ke:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Ct;
    }
    function bC(e) {
      e.flags |= En, e.flags |= ho;
    }
    var _C, xS, DC, kC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ne || u.tag === Ue)
          tx(e, u.stateNode);
        else if (u.tag !== te) {
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
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = rx(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, kC = function(e, t, a, i) {
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
            a = Je(a, Je(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Je(a, Je(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Je(a, Je(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Je(a, Je(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zw(e, t, a) {
      if (g1() && (t.mode & ct) !== De && (t.flags & we) === _e)
        return l0(t), bf(), t.flags |= Cr | os | Xn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (m1(t), Fr(t), (t.mode & Mt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & we) === _e && (t.memoizedState = null), t.flags |= Ct, Fr(t), (t.mode & Mt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return u0(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Xe:
        case an:
        case Fe:
        case le:
        case Qe:
        case ht:
        case mt:
        case yt:
        case fn:
        case ft:
          return Fr(t), null;
        case ce: {
          var u = t.type;
          return Yl(u) && Ah(t), Fr(t), null;
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
              (t.flags & Cr) !== _e) && (t.flags |= Wn, u0());
            }
          }
          return xS(e, t), Fr(t), null;
        }
        case ne: {
          Sg(t);
          var v = R0(), y = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = gg(), b = Bh(t);
            if (b)
              v1(t, v, g) && jf(t);
            else {
              var x = ex(y, i, v, g, t);
              _C(x, t, !1, !1), t.stateNode = x, nx(x, y, i, v) && jf(t);
            }
            t.ref !== null && bC(t);
          }
          return Fr(t), null;
        }
        case Ue: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            kC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = R0(), se = gg(), Le = Bh(t);
            Le ? h1(t) && jf(t) : t.stateNode = ax(M, F, se, t);
          }
          return Fr(t), null;
        }
        case be: {
          Mf(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = zw(e, t, xe);
            if (!xt)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & we) !== _e)
            return t.lanes = a, (t.mode & Mt) !== De && Gg(t), t;
          var gt = xe !== null, k = e !== null && e.memoizedState !== null;
          if (gt !== k && gt) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & ct) !== De) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(al.current, w0) ? Ub() : BS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= Ct), Fr(t), (t.mode & Mt) !== De && gt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case te:
          return Of(t), xS(e, t), e === null && Xx(t.stateNode.containerInfo), Fr(t), null;
        case vt:
          var fe = t.type._context;
          return cg(fe, t), Fr(t), null;
        case Ht: {
          var Pe = t.type;
          return Yl(Pe) && Ah(t), Fr(t), null;
        }
        case ln: {
          Mf(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Fr(t), null;
          var Kt = (t.flags & we) !== _e, Ut = Ge.rendering;
          if (Ut === null)
            if (Kt)
              zp(Ge, !1);
            else {
              var Gn = jb() && (e === null || (e.flags & we) === _e);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Pn = am(At);
                  if (Pn !== null) {
                    Kt = !0, t.flags |= we, zp(Ge, !1);
                    var la = Pn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Ct), t.subtreeFlags = _e, w1(t, a), Ao(t, Cg(al.current, Cp)), t.child;
                  }
                  At = At.sibling;
                }
              Ge.tail !== null && $n() > XC() && (t.flags |= we, Kt = !0, zp(Ge, !1), t.lanes = bd);
            }
          else {
            if (!Kt) {
              var Ir = am(Ut);
              if (Ir !== null) {
                t.flags |= we, Kt = !0;
                var oi = Ir.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Ct), zp(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !Ut.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              $n() * 2 - Ge.renderingStartTime > XC() && a !== Jr && (t.flags |= we, Kt = !0, zp(Ge, !1), t.lanes = bd);
            }
            if (Ge.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var Ca = Ge.last;
              Ca !== null ? Ca.sibling = Ut : t.child = Ut, Ge.last = Ut;
            }
          }
          if (Ge.tail !== null) {
            var Ra = Ge.tail;
            Ge.rendering = Ra, Ge.tail = Ra.sibling, Ge.renderingStartTime = $n(), Ra.sibling = null;
            var ua = al.current;
            return Kt ? ua = Cg(ua, Cp) : ua = Lf(ua), Ao(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case _t:
          break;
        case ke:
        case jt: {
          VS(t);
          var $u = t.memoizedState, Wf = $u !== null;
          if (e !== null) {
            var Kp = e.memoizedState, Jl = Kp !== null;
            Jl !== Wf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= Nn);
          }
          return !Wf || (t.mode & ct) === De ? Fr(t) : Zr(Xl, Jr) && (Fr(t), t.subtreeFlags & (mn | Ct) && (t.flags |= Nn)), null;
        }
        case Dt:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      switch (Ky(t), t.tag) {
        case ce: {
          var i = t.type;
          Yl(i) && Ah(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | we, (t.mode & Mt) !== De && Gg(t), t) : null;
        }
        case Z: {
          t.stateNode, Of(t), $y(t), Tg();
          var s = t.flags;
          return (s & Xn) !== _e && (s & we) === _e ? (t.flags = s & ~Xn | we, t) : null;
        }
        case ne:
          return Sg(t), null;
        case be: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | we, (t.mode & Mt) !== De && Gg(t), t) : null;
        }
        case ln:
          return Mf(t), null;
        case te:
          return Of(t), null;
        case vt:
          var v = t.type._context;
          return cg(v, t), null;
        case ke:
        case jt:
          return VS(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (Ky(t), t.tag) {
        case ce: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case Z: {
          t.stateNode, Of(t), $y(t), Tg();
          break;
        }
        case ne: {
          Sg(t);
          break;
        }
        case te:
          Of(t);
          break;
        case be:
          Mf(t);
          break;
        case ln:
          Mf(t);
          break;
        case vt:
          var u = t.type._context;
          cg(u, t);
          break;
        case ke:
        case jt:
          VS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var Dm = !1, Hr = !1, Aw = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Ff = null, Hf = null;
    function jw(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var Fw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Fw(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ae && ut && e.mode & Mt)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
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
    var UC = !1;
    function Pw(e, t) {
      JT(e.containerInfo), Se = t, Vw();
      var a = UC;
      return UC = !1, a;
    }
    function Vw() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & Dl) !== _e && t !== null ? (t.return = e, Se = t) : Bw();
      }
    }
    function Bw() {
      for (; Se !== null; ) {
        var e = Se;
        Wt(e);
        try {
          Iw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Iw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== _e) {
        switch (Wt(e), e.tag) {
          case le:
          case Qe:
          case Fe:
            break;
          case ce: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              Tx(v.containerInfo);
            }
            break;
          }
          case ne:
          case Ue:
          case te:
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
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? qi(t) : (e & fr) !== Ha && cs(t), (e & Wl) !== Ha && Qp(!0), km(t, a, p), (e & Wl) !== Ha && Qp(!1), (e & jr) !== Ha ? Ml() : (e & fr) !== Ha && xd());
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
            (e & Wl) !== Ha && Qp(!0), s.destroy = f(), (e & Wl) !== Ha && Qp(!1), (e & jr) !== Ha ? zv() : (e & fr) !== Ha && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== _e ? v = "useLayoutEffect" : (s.tag & Wl) !== _e ? v = "useInsertionEffect" : v = "useEffect";
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
    function Yw(e, t) {
      if ((t.flags & Ct) !== _e)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = X0(), p = t.alternate === null ? "mount" : "update";
            K0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case yt:
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
    function Ww(e, t, a, i) {
      if ((a.flags & Ol) !== _e)
        switch (a.tag) {
          case le:
          case Qe:
          case Fe: {
            if (!Hr)
              if (a.mode & Mt)
                try {
                  ql(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case ce: {
            var u = a.stateNode;
            if (a.flags & Ct && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Mt)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), C0(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ne:
                    y = a.child.stateNode;
                    break;
                  case ce:
                    y = a.child.stateNode;
                    break;
                }
              C0(a, v, y);
            }
            break;
          }
          case ne: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var b = a.type, x = a.memoizedProps;
              sx(g, b, x);
            }
            break;
          }
          case Ue:
            break;
          case te:
            break;
          case yt: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, se = a.stateNode.effectDuration, Le = X0(), xe = t === null ? "mount" : "update";
              K0() && (xe = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, se, Le), Bb(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case Z:
                      var gt = xt.stateNode;
                      gt.effectDuration += se;
                      break e;
                    case yt:
                      var k = xt.stateNode;
                      k.effectDuration += se;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case be: {
            Zw(e, a);
            break;
          }
          case ln:
          case Ht:
          case _t:
          case ke:
          case jt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && AC(a);
    }
    function $w(e) {
      switch (e.tag) {
        case le:
        case Qe:
        case Fe: {
          if (e.mode & Mt)
            try {
              ql(), NC(e, e.return);
            } finally {
              Gl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hw(e, e.return, t), zC(e, e.return);
          break;
        }
        case ne: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Qw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ne) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Sx(u) : Cx(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === Ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Ex(s) : Rx(s, i.memoizedProps);
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
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ne:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
      }
    }
    function Gw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ne) {
          var a = e.stateNode;
          a !== null && e1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qw(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ne || e.tag === Z || e.tag === te;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ne && t.tag !== Ue && t.tag !== Jt; ) {
          if (t.flags & mn || t.child === null || t.tag === te)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function Kw(e) {
      var t = qw(e);
      switch (t.tag) {
        case ne: {
          var a = t.stateNode;
          t.flags & ka && (VE(a), t.flags &= ~ka);
          var i = HC(e);
          _S(e, i, a);
          break;
        }
        case Z:
        case te: {
          var u = t.stateNode.containerInfo, s = HC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ne || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? hx(a, s, t) : px(a, s);
      } else if (i !== te) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ne || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? vx(a, s, t) : dx(a, s);
      } else if (i !== te) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, sl = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ne: {
              Pr = i.stateNode, sl = !1;
              break e;
            }
            case Z: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case te: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Pr = null, sl = !1;
      }
      Gw(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (Ed(a), a.tag) {
        case ne:
          Hr || Pf(a, t);
        case Ue: {
          {
            var i = Pr, u = sl;
            Pr = null, Po(e, t, a), Pr = i, sl = u, Pr !== null && (sl ? yx(Pr, a.stateNode) : mx(Pr, a.stateNode));
          }
          return;
        }
        case Jt: {
          Pr !== null && (sl ? gx(Pr, a.stateNode) : Fy(Pr, a.stateNode));
          return;
        }
        case te: {
          {
            var s = Pr, f = sl;
            Pr = a.stateNode.containerInfo, sl = !0, Po(e, t, a), Pr = s, sl = f;
          }
          return;
        }
        case le:
        case Qe:
        case ft:
        case Fe: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & Wl) !== Ha ? km(a, t, x) : (M & fr) !== Ha && (cs(a), a.mode & Mt ? (ql(), km(a, t, x), Gl(a)) : km(a, t, x), xd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case ce: {
          if (!Hr) {
            Pf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && wS(a, t, U);
          }
          Po(e, t, a);
          return;
        }
        case _t: {
          Po(e, t, a);
          return;
        }
        case ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Po(e, t, a), Hr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Jw(e) {
      e.memoizedState;
    }
    function Zw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jx(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Aw()), t.forEach(function(i) {
          var u = qb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xr)
              if (Ff !== null && Hf !== null)
                $p(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eb(e, t, a) {
      Ff = a, Hf = e, Wt(t), BC(t, e), Wt(t), Ff = null, Hf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xw(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          Wt(p), BC(p, e), p = p.sibling;
      Wt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case le:
        case Qe:
        case ft:
        case Fe: {
          if (cl(t, e), Kl(e), u & Ct) {
            try {
              ol(Wl | cr, e, e.return), Ho(Wl | cr, e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            if (e.mode & Mt) {
              try {
                ql(), ol(fr | cr, e, e.return);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
              Gl(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
          }
          return;
        }
        case ce: {
          cl(t, e), Kl(e), u & En && i !== null && Pf(i, i.return);
          return;
        }
        case ne: {
          cl(t, e), Kl(e), u & En && i !== null && Pf(i, i.return);
          {
            if (e.flags & ka) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    cx(f, g, y, v, p, e);
                  } catch (Pe) {
                    cn(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case Ue: {
          if (cl(t, e), Kl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              fx(b, M, x);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
          }
          return;
        }
        case Z: {
          if (cl(t, e), Kl(e), u & Ct && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                Ax(t.containerInfo);
              } catch (Pe) {
                cn(e, e.return, Pe);
              }
          }
          return;
        }
        case te: {
          cl(t, e), Kl(e);
          return;
        }
        case be: {
          cl(t, e), Kl(e);
          var F = e.child;
          if (F.flags & Nn) {
            var se = F.stateNode, Le = F.memoizedState, xe = Le !== null;
            if (se.isHidden = xe, xe) {
              var xt = F.alternate !== null && F.alternate.memoizedState !== null;
              xt || zb();
            }
          }
          if (u & Ct) {
            try {
              Jw(e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            VC(e);
          }
          return;
        }
        case ke: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var k = Hr;
            Hr = k || gt, cl(t, e), Hr = k;
          } else
            cl(t, e);
          if (Kl(e), u & Nn) {
            var H = e.stateNode, O = e.memoizedState, q = O !== null, ve = e;
            if (H.isHidden = q, q && !gt && (ve.mode & ct) !== De) {
              Se = ve;
              for (var fe = ve.child; fe !== null; )
                Se = fe, nb(fe), fe = fe.sibling;
            }
            Qw(ve, q);
          }
          return;
        }
        case ln: {
          cl(t, e), Kl(e), u & Ct && VC(e);
          return;
        }
        case _t:
          return;
        default: {
          cl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          Kw(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function tb(e, t, a) {
      Ff = a, Hf = t, Se = e, IC(e, t, a), Ff = null, Hf = null;
    }
    function IC(e, t, a) {
      for (var i = (e.mode & ct) !== De; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === ke && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = Dm, x = Hr;
            Dm = p, Hr = g, Hr && !x && (Se = u, rb(u));
            for (var M = s; M !== null; )
              Se = M, IC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, Dm = b, Hr = x, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== _e && s !== null ? (s.return = u, Se = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Ol) !== _e) {
          var u = i.alternate;
          Wt(i);
          try {
            Ww(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function nb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case le:
          case Qe:
          case ft:
          case Fe: {
            if (t.mode & Mt)
              try {
                ql(), ol(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case ce: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ne: {
            Pf(t, t.return);
            break;
          }
          case ke: {
            var u = t.memoizedState !== null;
            if (u) {
              YC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function rb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === ke) {
          var i = t.memoizedState !== null;
          if (i) {
            WC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : WC(e);
      }
    }
    function WC(e) {
      for (; Se !== null; ) {
        var t = Se;
        Wt(t);
        try {
          $w(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ab(e, t, a, i) {
      Se = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Qi) !== _e && s !== null ? (s.return = u, Se = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Qr) !== _e) {
          Wt(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case le:
        case Qe:
        case Fe: {
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
    function ob(e) {
      Se = e, sb();
    }
    function sb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Da) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, db(u, e);
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
            Se = e;
          }
        }
        (e.subtreeFlags & Qi) !== _e && t !== null ? (t.return = e, Se = t) : cb();
      }
    }
    function cb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Qr) !== _e && (Wt(e), fb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case le:
        case Qe:
        case Fe: {
          e.mode & Mt ? (Qg(), ol(jr | cr, e, e.return), $g(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Wt(a), vb(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : pb(e);
      }
    }
    function pb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case le:
        case Qe:
        case Fe: {
          e.mode & Mt ? (Qg(), ol(jr, e, t), $g(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case le:
        case Qe:
        case Fe: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ce: {
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
    function mb(e) {
      switch (e.tag) {
        case le:
        case Qe:
        case Fe: {
          try {
            Ho(jr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case le:
        case Qe:
        case Fe: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
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
    function gb(e) {
      switch (e.tag) {
        case le:
        case Qe:
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
    var Sb = [];
    function Eb() {
      Sb.forEach(function(e) {
        return e();
      });
    }
    var Cb = A.ReactCurrentActQueue;
    function Rb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $C() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Cb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tb = Math.ceil, kS = A.ReactCurrentDispatcher, OS = A.ReactCurrentOwner, Vr = A.ReactCurrentBatchConfig, fl = A.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Om = 3, jp = 4, GC = 5, LS = 6, Tt = vr, Sa = null, kn = null, hr = Y, Xl = Y, MS = Oo(Y), mr = Bu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Pp = null, Pa = null, NS = 0, qC = 500, KC = 1 / 0, xb = 500, Iu = null;
    function Vp() {
      KC = $n() + xb;
    }
    function XC() {
      return KC;
    }
    var Nm = !1, zS = null, Vf = null, nc = !1, Vo = null, Bp = Y, US = [], AS = null, wb = 50, Ip = 0, jS = null, FS = !1, zm = !1, bb = 50, Bf = 0, Um = null, Yp = Xt, Am = Y, JC = !1;
    function jm() {
      return Sa;
    }
    function Ea() {
      return (Tt & (Br | Ai)) !== vr ? $n() : (Yp !== Xt || (Yp = $n()), Yp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ct) === De)
        return je;
      if ((Tt & Br) !== vr && hr !== Y)
        return Ts(hr);
      var a = C1() !== E1;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === kt && (Am = Md()), Am;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = ix();
      return s;
    }
    function _b(e) {
      var t = e.mode;
      return (t & ct) === De ? je : Vv();
    }
    function yr(e, t, a, i) {
      Xb(), JC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), So(e, a, i), (Tt & Br) !== Y && e === Sa ? e_(t) : (Xr && bs(e, t, a), t_(t), e === Sa && ((Tt & Br) === vr && (Hp = Je(Hp, a)), mr === jp && Io(e, hr)), Va(e, i), a === je && Tt === vr && (t.mode & ct) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Vp(), JE()));
    }
    function Db(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      Kc(e, t);
      var i = qc(e, e === Sa ? hr : Y);
      if (i === Y) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== WS)) {
        a == null && s !== je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === je)
        e.tag === Lo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), r1(tR.bind(null, e))) : XE(tR.bind(null, e)), fl.current !== null ? fl.current.push(Mo) : ux(function() {
          (Tt & (Br | Ai)) === vr && Mo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Lr:
            p = ss;
            break;
          case bi:
            p = Ll;
            break;
          case Na:
            p = Gi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = Gi;
            break;
        }
        f = $S(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (Q1(), Yp = Xt, Am = Y, (Tt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wu();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Sa ? hr : Y);
      if (u === Y)
        return null;
      var s = !Jc(e, u) && !Pv(e, u) && !t, f = s ? Hb(e, u) : Hm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== Y && (u = p, f = HS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, Y), Io(e, u), Va(e, $n()), v;
        }
        if (f === LS)
          Io(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Lb(g)) {
            if (f = Hm(e, u), f === tc) {
              var b = Xc(e);
              b !== Y && (u = b, f = HS(e, b));
            }
            if (f === Ap) {
              var x = Fp;
              throw rc(e, Y), Io(e, u), Va(e, $n()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return Va(e, $n()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, Kx(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Pa;
        Pa = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Pa, Iu);
          break;
        }
        case Om: {
          if (Io(e, a), _u(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = NS + qC - $n();
            if (i > 10) {
              var u = qc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Du(s, a)) {
                Ea(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(ac.bind(null, e, Pa, Iu), i);
              break;
            }
          }
          ac(e, Pa, Iu);
          break;
        }
        case jp: {
          if (Io(e, a), Od(a))
            break;
          if (!hR()) {
            var f = ri(e, a), p = f, v = $n() - p, y = Kb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(ac.bind(null, e, Pa, Iu), y);
              break;
            }
          }
          ac(e, Pa, Iu);
          break;
        }
        case GC: {
          ac(e, Pa, Iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lb(e) {
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
    function tR(e) {
      if (G1(), (Tt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Wu();
      var t = qc(e, Y);
      if (!Zr(t, je))
        return Va(e, $n()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== Y && (t = i, a = HS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, Y), Io(e, t), Va(e, $n()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Pa, Iu), Va(e, $n()), null;
    }
    function Mb(e, t) {
      t !== Y && (ef(e, Je(t, je)), Va(e, $n()), (Tt & (Br | Ai)) === vr && (Vp(), Mo()));
    }
    function PS(e, t) {
      var a = Tt;
      Tt |= QC;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Vp(), JE());
      }
    }
    function Nb(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Vr.transition = f, Tt === vr && Vp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Lo && (Tt & (Br | Ai)) === vr && Wu();
      var t = Tt;
      Tt |= QC;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Vr.transition = a, Tt = t, (Tt & (Br | Ai)) === vr && Mo();
      }
    }
    function nR() {
      return (Tt & (Br | Ai)) !== vr;
    }
    function Fm(e, t) {
      aa(MS, Xl, e), Xl = Je(Xl, t);
    }
    function VS(e) {
      Xl = MS.current, ra(MS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, lx(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return kn = s, hr = Xl = t, mr = Bu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Pp = null, Pa = null, D1(), rl.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = kn;
        try {
          if (Gh(), _0(), sn(), OS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, kn = null;
            return;
          }
          if (Ae && a.mode & Mt && Tm(a, !0), He)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, hr);
            } else
              fs(a, t, hr);
          rw(e, a.return, a, t, hr), uR(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = kS.current;
      return kS.current = gm, e === null ? gm : e;
    }
    function iR(e) {
      kS.current = e;
    }
    function zb() {
      NS = $n();
    }
    function Wp(e) {
      Lm = Je(e, Lm);
    }
    function Ub() {
      mr === Bu && (mr = Om);
    }
    function BS() {
      (mr === Bu || mr === Om || mr === tc) && (mr = jp), Sa !== null && (Rs(Lm) || Rs(Hp)) && Io(Sa, hr);
    }
    function Ab(e) {
      mr !== jp && (mr = tc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function jb() {
      return mr === Bu;
    }
    function Hm(e, t) {
      var a = Tt;
      Tt |= Br;
      var i = aR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), Wv(e, t);
        }
        Iu = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Gh(), Tt = a, iR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = Y, mr;
    }
    function Fb() {
      for (; kn !== null; )
        lR(kn);
    }
    function Hb(e, t) {
      var a = Tt;
      Tt |= Br;
      var i = aR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, hr), u.clear()), Wv(e, t);
        }
        Iu = Ad(), Vp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Pb();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Gh(), iR(i), Tt = a, kn !== null ? (Av(), Bu) : (Lc(), Sa = null, hr = Y, mr);
    }
    function Pb() {
      for (; kn !== null && !hd(); )
        lR(kn);
    }
    function lR(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & Mt) !== De ? (Wg(e), a = IS(t, e, Xl), Tm(e, !0)) : a = IS(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : kn = a, OS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === _e) {
          Wt(t);
          var u = void 0;
          if ((t.mode & Mt) === De ? u = OC(a, t, Xl) : (Wg(t), u = OC(a, t, Xl), Tm(t, !1)), sn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = Uw(a, t);
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
      mr === Bu && (mr = GC);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, jn(Lr), Vb(e, t, a, i);
      } finally {
        Vr.transition = u, jn(i);
      }
      return null;
    }
    function Vb(e, t, a, i) {
      do
        Wu();
      while (Vo !== null);
      if (Jb(), (Tt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = Je(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, kn = null, hr = Y), ((u.subtreeFlags & Qi) !== _e || (u.flags & Qi) !== _e) && (nc || (nc = !0, AS = a, $S(Gi, function() {
        return Wu(), null;
      })));
      var p = (u.subtreeFlags & (Dl | kl | Ol | Qi)) !== _e, v = (u.flags & (Dl | kl | Ol | Qi)) !== _e;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Tt;
        Tt |= Ai, OS.current = null, Pw(e, u), J0(), eb(e, u, s), ZT(e.containerInfo), e.current = u, ds(s), tb(u, e, s), ps(), md(), Tt = b, jn(g), Vr.transition = y;
      } else
        e.current = u, J0();
      var x = nc;
      if (nc ? (nc = !1, Vo = e, Bp = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === Y && (Vf = null), x || fR(e.current, !1), gd(u.stateNode, i), Xr && e.memoizedUpdaters.clear(), Eb(), Va(e, $n()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], se = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: se,
            digest: Le
          });
        }
      if (Nm) {
        Nm = !1;
        var xe = zS;
        throw zS = null, xe;
      }
      return Zr(Bp, je) && e.tag !== Lo && Wu(), f = e.pendingLanes, Zr(f, je) ? ($1(), e === jS ? Ip++ : (Ip = 0, jS = e)) : Ip = 0, Mo(), Rd(), null;
    }
    function Wu() {
      if (Vo !== null) {
        var e = Gv(Bp), t = Ds(Na, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, jn(t), Ib();
        } finally {
          jn(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Bb(e) {
      US.push(e), nc || (nc = !0, $S(Gi, function() {
        return Wu(), null;
      }));
    }
    function Ib() {
      if (Vo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = Y, (Tt & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, Su(a);
      var i = Tt;
      Tt |= Ai, ob(t.current), ab(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yw(t, f);
        }
      }
      wd(), fR(t.current, !0), Tt = i, Mo(), zm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, FS = !1, zm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Yb(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function Wb(e) {
      Nm || (Nm = !0, zS = e);
    }
    var $b = Wb;
    function sR(e, t, a) {
      var i = Zs(a, t), u = lC(e, i, je), s = zo(e, u, je), f = Ea();
      s !== null && (So(s, je, f), Va(s, f));
    }
    function cn(e, t, a) {
      if (jw(a), Qp(!1), e.tag === Z) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          sR(i, e, a);
          return;
        } else if (i.tag === ce) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Zs(a, e), p = sS(i, f, je), v = zo(i, p, je), y = Ea();
            v !== null && (So(v, je, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Qb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Zc(e, a), n_(e), Sa === e && Du(hr, a) && (mr === jp || mr === Om && _u(hr) && $n() - NS < qC ? rc(e, Y) : Mm = Je(Mm, a)), Va(e, u);
    }
    function cR(e, t) {
      t === kt && (t = _b(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function qb(e, t) {
      var a = kt, i;
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
      i !== null && i.delete(t), cR(e, a);
    }
    function Kb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tb(e / 1960) * 1960;
    }
    function Xb() {
      if (Ip > wb)
        throw Ip = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > bb && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jb() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Wt(e), Pm(e, _l, yb), t && Pm(e, Ri, gb), Pm(e, _l, hb), t && Pm(e, Ri, mb), sn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function dR(e) {
      {
        if ((Tt & Br) !== vr || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== Xe && t !== Z && t !== ce && t !== le && t !== Qe && t !== ft && t !== Fe)
          return;
        var a = Ie(e) || "ReactComponent";
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
    var IS;
    {
      var Zb = null;
      IS = function(e, t, a) {
        var i = ER(Zb, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (f1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), _0(), LC(e, t), ER(t, i), t.mode & Mt && Wg(t), bl(null, wC, null, e, t, a), Wi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function e_(e) {
      if (hi && !I1())
        switch (e.tag) {
          case le:
          case Qe:
          case Fe: {
            var t = kn && Ie(kn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ce: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Xr) {
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
    function vR(e) {
      if (e !== WS)
        return Mv(e);
    }
    function hR() {
      return fl.current !== null;
    }
    function t_(e) {
      {
        if (e.mode & ct) {
          if (!$C())
            return;
        } else if (!Rb() || Tt !== vr || e.tag !== le && e.tag !== Qe && e.tag !== Fe)
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
            t ? Wt(e) : sn();
          }
        }
      }
    }
    function n_(e) {
      e.tag !== Lo && $C() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      JC = e;
    }
    var ji = null, If = null, r_ = function(e) {
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
    function mR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ce: {
            typeof i == "function" && (u = !0);
            break;
          }
          case le: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Qe: {
            (s === B || s === Ye) && (u = !0);
            break;
          }
          case ft:
          case Fe: {
            (s === qe || s === Ye) && (u = !0);
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
    function yR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var a_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wu(), Yu(function() {
          qS(e.current, i, a);
        });
      }
    }, i_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Wu(), Yu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case le:
          case Fe:
          case ce:
            v = p;
            break;
          case Qe:
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
          var x = Fa(e, je);
          x !== null && yr(x, e, je, Xt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var l_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case le:
          case Fe:
          case ce:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u_(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function u_(e, t) {
      {
        var a = o_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ne:
              t.add(i.stateNode);
              return;
            case te:
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
    function o_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ne)
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
        var gR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function s_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new s_(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c_(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function f_(e) {
      if (typeof e == "function")
        return JS(e) ? ce : le;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return Qe;
        if (t === qe)
          return ft;
      }
      return Xe;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Xe:
        case le:
        case Fe:
          a.type = Yf(e.type);
          break;
        case ce:
          a.type = QS(e.type);
          break;
        case Qe:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function d_(e, t) {
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
    function p_(e, t, a) {
      var i;
      return e === Fh ? (i = ct, t === !0 && (i |= Gt, i |= Nt)) : i = De, Xr && (i |= Mt), ui(Z, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Xe, p = e;
      if (typeof e == "function")
        JS(e) ? (f = ce, p = QS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = ne;
      else
        e: switch (e) {
          case fi:
            return Yo(a.children, u, s, t);
          case $a:
            f = mt, u |= Gt, (u & ct) !== De && (u |= Nt);
            break;
          case di:
            return v_(a, u, s, t);
          case ue:
            return h_(a, u, s, t);
          case me:
            return m_(a, u, s, t);
          case Tn:
            return SR(a, u, s, t);
          case tn:
          case dt:
          case on:
          case ar:
          case st:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = vt;
                  break e;
                case R:
                  f = fn;
                  break e;
                case B:
                  f = Qe, p = GS(p);
                  break e;
                case qe:
                  f = ft;
                  break e;
                case Ye:
                  f = an, p = null;
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
      var u = ui(ht, e, i, t);
      return u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(yt, e, i, t | Mt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h_(e, t, a, i) {
      var u = ui(be, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = me, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = ui(ke, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function tE(e, t, a) {
      var i = ui(Ue, e, null, t);
      return i.lanes = a, i;
    }
    function y_() {
      var e = ui(ne, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function g_(e) {
      var t = ui(Jt, null, null, De);
      return t.stateNode = e, t;
    }
    function nE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(te, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = ui(Xe, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = ws(Y), this.expirationTimes = ws(Xt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = ws(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
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
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new S_(e, t, a, p, v), b = p_(t, s);
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
    function E_(e, t, a) {
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
    function RR(e) {
      if (!e)
        return li;
      var t = po(e), a = n1(t);
      if (t.tag === ce) {
        var i = t.type;
        if (Yl(i))
          return qE(t, i, a);
      }
      return a;
    }
    function C_(e, t) {
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
              f ? Wt(f) : sn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return CR(e, t, v, y, a, i, u, s, f);
    }
    function xR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = CR(a, i, g, e, u, s, f, p, v);
      b.context = RR(null);
      var x = b.current, M = Ea(), U = Bo(x), F = Pu(M, U);
      return F.callback = t ?? null, zo(x, F, U), Db(b, U, M), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      gn(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !aE && (aE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(ir) || "Unknown"));
      var v = Pu(s, f);
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
        case ne:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R_(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fv(t);
            Mb(t, a);
          }
          break;
        }
        case be: {
          Yu(function() {
            var u = Fa(e, je);
            if (u !== null) {
              var s = Ea();
              yr(u, e, je, s);
            }
          });
          var i = je;
          lE(e, i);
          break;
        }
      }
    }
    function wR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Iv(a.retryLane, t));
    }
    function lE(e, t) {
      wR(e, t);
      var a = e.alternate;
      a && wR(a, t);
    }
    function T_(e) {
      if (e.tag === be) {
        var t = Ss, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function x_(e) {
      if (e.tag === be) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function bR(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function w_(e) {
      return _R(e);
    }
    var DR = function(e) {
      return !1;
    };
    function b_(e) {
      return DR(e);
    }
    var kR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = it(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (it(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = it(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], it(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          tt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              tt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = it(e) ? e.slice() : et({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, IR = function(e, t, a) {
        return BR(e, t, 0, a);
      }, uE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = IR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, Xt);
        }
      }, OR = function(e, t, a) {
        var i = uE(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = et({}, e.memoizedProps);
          var s = Fa(e, je);
          s !== null && yr(s, e, je, Xt);
        }
      }, LR = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = Fa(e, je);
          f !== null && yr(f, e, je, Xt);
        }
      }, MR = function(e, t, a) {
        e.pendingProps = IR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, Xt);
      }, NR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, je);
        a !== null && yr(a, e, je, Xt);
      }, zR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, je);
        i !== null && yr(i, e, je, Xt);
      }, UR = function(e) {
        var t = Fa(e, je);
        t !== null && yr(t, e, je, Xt);
      }, AR = function(e) {
        _R = e;
      }, jR = function(e) {
        DR = e;
      };
    }
    function __(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function D_(e) {
      return null;
    }
    function k_() {
      return ir;
    }
    function O_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: LR,
        overrideProps: MR,
        overridePropsDeletePath: NR,
        overridePropsRenamePath: zR,
        setErrorHandler: AR,
        setSuspenseHandler: jR,
        scheduleUpdate: UR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: __,
        findFiberByHostInstance: t || D_,
        // React Refresh
        findHostInstancesForRefresh: l_,
        scheduleRefresh: a_,
        scheduleRoot: i_,
        setRefreshHandler: r_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: k_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: rE
      });
    }
    var YR = typeof reportError == "function" ? (
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
          var i = bR(t.current);
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
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          Gp(null, e, null, null);
        }), YE(t);
      }
    };
    function L_(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WR(e);
      var a = !1, i = !1, u = "", s = YR;
      t != null && (t.hydrate ? tt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return ep(p), new oE(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function M_(e) {
      e && Zv(e);
    }
    Im.prototype.unstable_scheduleHydration = M_;
    function N_(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = YR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = xR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          j1(y, b);
        }
      return new Im(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Yi || e.nodeType === nd));
    }
    function qp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === Yi || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function WR(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var z_ = A.ReactCurrentOwner, $R;
    $R = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = bR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = sE(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function sE(e) {
      return e ? e.nodeType === Yi ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function U_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Bm(f);
            s.call(x);
          };
        }
        var f = xR(
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
          QR
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
            var x = Bm(g);
            y.call(x);
          };
        }
        var g = TR(
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
          QR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var b = e.nodeType === Mn ? e.parentNode : e;
        return ep(b), Yu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function A_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      $R(a), A_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U_(a, t, e, u, i);
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
    var GR = !1;
    function j_(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = z_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : C_(e, "findDOMNode");
    }
    function F_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function H_(e, t, a) {
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
    var qR = !1;
    function V_(e) {
      if (qR || (qR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
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
        return Yu(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, YE(e);
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
    Tr(R_), Eo(T_), qv(x_), Os(Ua), jd($v), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(IT), iy(PS, Nb, Yu);
    function B_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return E_(e, t, null, a);
    }
    function I_(e, t, a, i) {
      return P_(e, t, a, i);
    }
    var cE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, Cf, Mh, oo, Sc, PS]
    };
    function Y_(e, t) {
      return cE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function W_(e, t, a) {
      return cE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N_(e, t, a);
    }
    function $_(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var Q_ = O_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: rE,
      rendererPackageName: "react-dom"
    });
    if (!Q_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cE, Ia.createPortal = B_, Ia.createRoot = Y_, Ia.findDOMNode = j_, Ia.flushSync = $_, Ia.hydrate = F_, Ia.hydrateRoot = W_, Ia.render = H_, Ia.unmountComponentAtNode = V_, Ia.unstable_batchedUpdates = PS, Ia.unstable_renderSubtreeIntoContainer = I_, Ia.version = rE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (I) {
      console.error(I);
    }
  }
}
process.env.NODE_ENV === "production" ? (sT(), vE.exports = nD()) : vE.exports = rD();
var aD = vE.exports, hE, Qm = aD;
if (process.env.NODE_ENV === "production")
  hE = Qm.createRoot, Qm.hydrateRoot;
else {
  var aT = Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hE = function(I, K) {
    aT.usingClientEntryPoint = !0;
    try {
      return Qm.createRoot(I, K);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
var mE = { exports: {} }, Xp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function iD() {
  if (iT) return Xp;
  iT = 1;
  var I = dl, K = Symbol.for("react.element"), A = Symbol.for("react.fragment"), St = Object.prototype.hasOwnProperty, Be = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, tt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(lt, le, ce) {
    var Xe, Z = {}, te = null, ne = null;
    ce !== void 0 && (te = "" + ce), le.key !== void 0 && (te = "" + le.key), le.ref !== void 0 && (ne = le.ref);
    for (Xe in le) St.call(le, Xe) && !tt.hasOwnProperty(Xe) && (Z[Xe] = le[Xe]);
    if (lt && lt.defaultProps) for (Xe in le = lt.defaultProps, le) Z[Xe] === void 0 && (Z[Xe] = le[Xe]);
    return { $$typeof: K, type: lt, key: te, ref: ne, props: Z, _owner: Be.current };
  }
  return Xp.Fragment = A, Xp.jsx = S, Xp.jsxs = S, Xp;
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
var lT;
function lD() {
  return lT || (lT = 1, process.env.NODE_ENV !== "production" && function() {
    var I = dl, K = Symbol.for("react.element"), A = Symbol.for("react.portal"), St = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), lt = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), Ue = Symbol.iterator, ht = "@@iterator";
    function mt(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = Ue && R[Ue] || R[ht];
      return typeof B == "function" ? B : null;
    }
    var fn = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function vt(R) {
      {
        for (var B = arguments.length, ue = new Array(B > 1 ? B - 1 : 0), me = 1; me < B; me++)
          ue[me - 1] = arguments[me];
        Qe("error", R, ue);
      }
    }
    function Qe(R, B, ue) {
      {
        var me = fn.ReactDebugCurrentFrame, qe = me.getStackAddendum();
        qe !== "" && (B += "%s", ue = ue.concat([qe]));
        var Ye = ue.map(function(dt) {
          return String(dt);
        });
        Ye.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var yt = !1, be = !1, ft = !1, Fe = !1, an = !1, Ht;
    Ht = Symbol.for("react.module.reference");
    function Jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === St || R === tt || an || R === Be || R === ce || R === Xe || Fe || R === ne || yt || be || ft || typeof R == "object" && R !== null && (R.$$typeof === te || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === lt || R.$$typeof === le || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ht || R.getModuleId !== void 0));
    }
    function ln(R, B, ue) {
      var me = R.displayName;
      if (me)
        return me;
      var qe = B.displayName || B.name || "";
      return qe !== "" ? ue + "(" + qe + ")" : ue;
    }
    function _t(R) {
      return R.displayName || "Context";
    }
    function ke(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && vt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case St:
          return "Fragment";
        case A:
          return "Portal";
        case tt:
          return "Profiler";
        case Be:
          return "StrictMode";
        case ce:
          return "Suspense";
        case Xe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case lt:
            var B = R;
            return _t(B) + ".Consumer";
          case S:
            var ue = R;
            return _t(ue._context) + ".Provider";
          case le:
            return ln(R, R.render, "ForwardRef");
          case Z:
            var me = R.displayName || null;
            return me !== null ? me : ke(R.type) || "Memo";
          case te: {
            var qe = R, Ye = qe._payload, dt = qe._init;
            try {
              return ke(dt(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, Dt = 0, Ot, Ce, J, Re, ae, _, P;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Ae() {
      {
        if (Dt === 0) {
          Ot = console.log, Ce = console.info, J = console.warn, Re = console.error, ae = console.group, _ = console.groupCollapsed, P = console.groupEnd;
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
        Dt++;
      }
    }
    function ut() {
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
              value: Re
            }),
            group: jt({}, R, {
              value: ae
            }),
            groupCollapsed: jt({}, R, {
              value: _
            }),
            groupEnd: jt({}, R, {
              value: P
            })
          });
        }
        Dt < 0 && vt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nt = fn.ReactCurrentDispatcher, Ze;
    function rt(R, B, ue) {
      {
        if (Ze === void 0)
          try {
            throw Error();
          } catch (qe) {
            var me = qe.stack.trim().match(/\n( *(at )?)/);
            Ze = me && me[1] || "";
          }
        return `
` + Ze + R;
      }
    }
    var ot = !1, Bt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new On();
    }
    function wr(R, B) {
      if (!R || ot)
        return "";
      {
        var ue = Bt.get(R);
        if (ue !== void 0)
          return ue;
      }
      var me;
      ot = !0;
      var qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = nt.current, nt.current = null, Ae();
      try {
        if (B) {
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
            } catch (Ke) {
              me = Ke;
            }
            Reflect.construct(R, [], dt);
          } else {
            try {
              dt.call();
            } catch (Ke) {
              me = Ke;
            }
            R.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            me = Ke;
          }
          R();
        }
      } catch (Ke) {
        if (Ke && me && typeof Ke.stack == "string") {
          for (var st = Ke.stack.split(`
`), Tn = me.stack.split(`
`), tn = st.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && st[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (st[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || st[tn] !== Tn[on]) {
                    var ar = `
` + st[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Bt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        ot = !1, nt.current = Ye, ut(), Error.prepareStackTrace = qe;
      }
      var Qa = R ? R.displayName || R.name : "", Ga = Qa ? rt(Qa) : "";
      return typeof R == "function" && Bt.set(R, Ga), Ga;
    }
    function Cn(R, B, ue) {
      return wr(R, !1);
    }
    function nr(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function Vn(R, B, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, nr(R));
      if (typeof R == "string")
        return rt(R);
      switch (R) {
        case ce:
          return rt("Suspense");
        case Xe:
          return rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case le:
            return Cn(R.render);
          case Z:
            return Vn(R.type, B, ue);
          case te: {
            var me = R, qe = me._payload, Ye = me._init;
            try {
              return Vn(Ye(qe), B, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Yr = {}, si = fn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var B = R._owner, ue = Vn(R.type, R._source, B ? B.type : null);
        si.setExtraStackFrame(ue);
      } else
        si.setExtraStackFrame(null);
    }
    function qn(R, B, ue, me, qe) {
      {
        var Ye = Function.call.bind(Bn);
        for (var dt in R)
          if (Ye(R, dt)) {
            var st = void 0;
            try {
              if (typeof R[dt] != "function") {
                var Tn = Error((me || "React class") + ": " + ue + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              st = R[dt](B, dt, me, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              st = tn;
            }
            st && !(st instanceof Error) && (oa(qe), vt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ue, dt, typeof st), oa(null)), st instanceof Error && !(st.message in Yr) && (Yr[st.message] = !0, oa(qe), vt("Failed %s type: %s", ue, st.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function In(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ue = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
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
        return vt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = fn.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, ee;
    function Te(R) {
      if (Bn.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function at(R) {
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
    function Zt(R, B) {
      {
        var ue = function() {
          ci || (ci = !0, vt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function vn(R, B) {
      {
        var ue = function() {
          ee || (ee = !0, vt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var un = function(R, B, ue, me, qe, Ye, dt) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: K,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: ue,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function Kn(R, B, ue, me, qe) {
      {
        var Ye, dt = {}, st = null, Tn = null;
        ue !== void 0 && (Sr(ue), st = "" + ue), at(B) && (Sr(B.key), st = "" + B.key), Te(B) && (Tn = B.ref, Ft(B, qe));
        for (Ye in B)
          Bn.call(B, Ye) && !Wa.hasOwnProperty(Ye) && (dt[Ye] = B[Ye]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for (Ye in tn)
            dt[Ye] === void 0 && (dt[Ye] = tn[Ye]);
        }
        if (st || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Zt(dt, on), Tn && vn(dt, on);
        }
        return un(R, st, Tn, qe, me, sa.current, dt);
      }
    }
    var en = fn.ReactCurrentOwner, It = fn.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var B = R._owner, ue = Vn(R.type, R._source, B ? B.type : null);
        It.setExtraStackFrame(ue);
      } else
        It.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === K;
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
    function eu(R) {
      {
        var B = Ta();
        if (!B) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && (B = `

Check the top-level render call using <` + ue + ">.");
        }
        return B;
      }
    }
    function pl(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = eu(B);
        if (Zl[ue])
          return;
        Zl[ue] = !0;
        var me = "";
        R && R._owner && R._owner !== en.current && (me = " It was passed a child from " + ke(R._owner.type) + "."), Yt(R), vt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, me), Yt(null);
      }
    }
    function vl(R, B) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var ue = 0; ue < R.length; ue++) {
            var me = R[ue];
            Er(me) && pl(me, B);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var qe = mt(R);
          if (typeof qe == "function" && qe !== R.entries)
            for (var Ye = qe.call(R), dt; !(dt = Ye.next()).done; )
              Er(dt.value) && pl(dt.value, B);
        }
      }
    }
    function tu(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var ue;
        if (typeof B == "function")
          ue = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === le || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === Z))
          ue = B.propTypes;
        else
          return;
        if (ue) {
          var me = ke(B);
          qn(ue, R.props, "prop", me, R);
        } else if (B.PropTypes !== void 0 && !ca) {
          ca = !0;
          var qe = ke(B);
          vt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", qe || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && vt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var B = Object.keys(R.props), ue = 0; ue < B.length; ue++) {
          var me = B[ue];
          if (me !== "children" && me !== "key") {
            Yt(R), vt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), vt("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var _r = {};
    function rr(R, B, ue, me, qe, Ye) {
      {
        var dt = Jt(R);
        if (!dt) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? st += Tn : st += Ta();
          var tn;
          R === null ? tn = "null" : In(R) ? tn = "array" : R !== void 0 && R.$$typeof === K ? (tn = "<" + (ke(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, vt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, st);
        }
        var on = Kn(R, B, ue, qe, Ye);
        if (on == null)
          return on;
        if (dt) {
          var ar = B.children;
          if (ar !== void 0)
            if (me)
              if (In(ar)) {
                for (var Qa = 0; Qa < ar.length; Qa++)
                  vl(ar[Qa], R);
                Object.freeze && Object.freeze(ar);
              } else
                vt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, R);
        }
        if (Bn.call(B, "key")) {
          var Ga = ke(R), Ke = Object.keys(B).filter(function(nu) {
            return nu !== "key";
          }), et = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + et]) {
            var qa = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
            vt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, Ga, qa, Ga), _r[Ga + et] = !0;
          }
        }
        return R === St ? br(on) : tu(on), on;
      }
    }
    function fi(R, B, ue) {
      return rr(R, B, ue, !0);
    }
    function $a(R, B, ue) {
      return rr(R, B, ue, !1);
    }
    var di = $a, pi = fi;
    Jp.Fragment = St, Jp.jsx = di, Jp.jsxs = pi;
  }()), Jp;
}
process.env.NODE_ENV === "production" ? mE.exports = iD() : mE.exports = lD();
var $e = mE.exports;
function uT(I) {
  return {
    "01d": "☀️",
    // clear sky day
    "01n": "🌙",
    // clear sky night
    "02d": "⛅",
    // few clouds day
    "02n": "☁️",
    // few clouds night
    "03d": "☁️",
    // scattered clouds
    "03n": "☁️",
    "04d": "☁️",
    // broken clouds
    "04n": "☁️",
    "09d": "🌧️",
    // shower rain
    "09n": "🌧️",
    "10d": "🌦️",
    // rain day
    "10n": "🌧️",
    // rain night
    "11d": "⛈️",
    // thunderstorm
    "11n": "⛈️",
    "13d": "❄️",
    // snow
    "13n": "❄️",
    "50d": "🌫️",
    // mist
    "50n": "🌫️"
  }[I] || "☀️";
}
function Gm(I) {
  return Math.round((I - 273.15) * 9 / 5 + 32);
}
async function uD(I) {
  throw new Error("API key not configured. Please set VITE_WEATHER_API_KEY in your .env file or get a free API key from https://openweathermap.org/api");
}
async function oD(I) {
  throw new Error("API key not configured. Please set VITE_WEATHER_API_KEY in your .env file or get a free API key from https://openweathermap.org/api");
}
function sD(I) {
  return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][I.getMonth()]} ${I.getDate()}`;
}
function cD(I, K) {
  return K === 0 ? "Today" : K === 1 ? "Tomorrow" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][I.getDay()];
}
function fD(I, K) {
  const A = {
    location: `${I.name}, ${I.sys.country}`,
    temperature: Gm(I.main.temp),
    condition: I.weather[0].main,
    icon: uT(I.weather[0].icon),
    humidity: I.main.humidity,
    windSpeed: Math.round(I.wind.speed * 2.237),
    // Convert m/s to mph
    feelsLike: Gm(I.main.feels_like),
    description: I.weather[0].description
  }, St = {};
  K.list.forEach((tt) => {
    const lt = new Date(tt.dt * 1e3).toDateString();
    St[lt] || (St[lt] = []), St[lt].push(tt);
  });
  const Be = Object.keys(St).slice(0, 5).map((tt, S) => {
    const lt = St[tt], le = new Date(tt), ce = Math.max(...lt.map((te) => Gm(te.main.temp_max))), Xe = Math.min(...lt.map((te) => Gm(te.main.temp_min))), Z = lt[Math.floor(lt.length / 2)].weather[0];
    return {
      day: cD(le, S),
      date: sD(le),
      high: ce,
      low: Xe,
      condition: Z.main,
      icon: uT(Z.icon)
    };
  });
  return {
    current: A,
    forecast: Be
  };
}
function dD() {
  const [I, K] = dl.useState("San Francisco"), [A, St] = dl.useState("San Francisco"), [Be, tt] = dl.useState(null), [S, lt] = dl.useState(!1), [le, ce] = dl.useState(null), Xe = async (te) => {
    lt(!0), ce(null);
    try {
      const [ne, Ue] = await Promise.all([
        uD(te),
        oD(te)
      ]), ht = fD(ne, Ue);
      tt(ht);
    } catch (ne) {
      ce(ne instanceof Error ? ne.message : "Failed to fetch weather data"), tt(null);
    } finally {
      lt(!1);
    }
  };
  dl.useEffect(() => {
    Xe(I);
  }, [I]);
  const Z = (te) => {
    te.preventDefault(), A.trim() && K(A.trim());
  };
  return S && !Be ? /* @__PURE__ */ $e.jsx(
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
      children: /* @__PURE__ */ $e.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ $e.jsx("div", { style: { fontSize: "24px", marginBottom: "8px" }, children: "⏳" }),
        /* @__PURE__ */ $e.jsx("div", { style: { fontSize: "16px", color: "#6b7280" }, children: "Loading weather data..." })
      ] })
    }
  ) : le && !Be ? /* @__PURE__ */ $e.jsxs(
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
        /* @__PURE__ */ $e.jsx("div", { style: { fontSize: "24px", marginBottom: "8px" }, children: "⚠️" }),
        /* @__PURE__ */ $e.jsx("div", { style: { fontSize: "16px", color: "#dc2626", marginBottom: "16px", textAlign: "center" }, children: le }),
        /* @__PURE__ */ $e.jsxs("form", { onSubmit: Z, style: { display: "flex", gap: "8px", width: "100%", maxWidth: "400px" }, children: [
          /* @__PURE__ */ $e.jsx(
            "input",
            {
              type: "text",
              value: A,
              onChange: (te) => St(te.target.value),
              placeholder: "Enter city name...",
              style: {
                flex: 1,
                padding: "8px 12px",
                fontSize: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px"
              }
            }
          ),
          /* @__PURE__ */ $e.jsx(
            "button",
            {
              type: "submit",
              style: {
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#ffffff",
                backgroundColor: "#3b82f6",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              },
              children: "Search"
            }
          )
        ] })
      ]
    }
  ) : Be ? /* @__PURE__ */ $e.jsxs(
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
        /* @__PURE__ */ $e.jsxs(
          "div",
          {
            style: {
              borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
              padding: "16px"
            },
            children: [
              /* @__PURE__ */ $e.jsxs("form", { onSubmit: Z, style: { display: "flex", gap: "8px", marginBottom: "12px" }, children: [
                /* @__PURE__ */ $e.jsx(
                  "input",
                  {
                    type: "text",
                    value: A,
                    onChange: (te) => St(te.target.value),
                    placeholder: "Search for a city...",
                    style: {
                      flex: 1,
                      padding: "8px 12px",
                      fontSize: "14px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px"
                    }
                  }
                ),
                /* @__PURE__ */ $e.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: S,
                    style: {
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#ffffff",
                      backgroundColor: S ? "#9ca3af" : "#3b82f6",
                      border: "none",
                      borderRadius: "6px",
                      cursor: S ? "not-allowed" : "pointer"
                    },
                    children: S ? "Loading..." : "Search"
                  }
                )
              ] }),
              le && /* @__PURE__ */ $e.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: "6px",
                    color: "#dc2626",
                    fontSize: "14px",
                    marginTop: "8px"
                  },
                  children: le
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ $e.jsxs(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              padding: "16px"
            },
            children: [
              /* @__PURE__ */ $e.jsx(
                "div",
                {
                  style: {
                    borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
                    paddingBottom: "16px",
                    marginBottom: "16px"
                  },
                  children: /* @__PURE__ */ $e.jsxs(
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
                        /* @__PURE__ */ $e.jsxs("div", { style: { flex: 1, minWidth: "200px" }, children: [
                          /* @__PURE__ */ $e.jsx(
                            "h2",
                            {
                              style: {
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#111827",
                                margin: "0 0 8px 0"
                              },
                              children: Be.current.location
                            }
                          ),
                          /* @__PURE__ */ $e.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "8px"
                              },
                              children: [
                                /* @__PURE__ */ $e.jsx("span", { style: { fontSize: "48px" }, children: Be.current.icon }),
                                /* @__PURE__ */ $e.jsxs("div", { children: [
                                  /* @__PURE__ */ $e.jsxs(
                                    "div",
                                    {
                                      style: {
                                        fontSize: "48px",
                                        fontWeight: "600",
                                        color: "#111827",
                                        lineHeight: 1
                                      },
                                      children: [
                                        Be.current.temperature,
                                        "°"
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ $e.jsx(
                                    "div",
                                    {
                                      style: {
                                        fontSize: "16px",
                                        color: "#6b7280",
                                        textTransform: "capitalize"
                                      },
                                      children: Be.current.condition
                                    }
                                  )
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ $e.jsx(
                            "p",
                            {
                              style: {
                                fontSize: "14px",
                                color: "#6b7280",
                                margin: "8px 0 0 0",
                                textTransform: "capitalize"
                              },
                              children: Be.current.description
                            }
                          )
                        ] }),
                        /* @__PURE__ */ $e.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "12px",
                              minWidth: "150px"
                            },
                            children: [
                              /* @__PURE__ */ $e.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0",
                                    borderBottom: "1px solid rgba(17, 24, 39, 0.1)"
                                  },
                                  children: [
                                    /* @__PURE__ */ $e.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Feels like" }),
                                    /* @__PURE__ */ $e.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                      Be.current.feelsLike,
                                      "°"
                                    ] })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ $e.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0",
                                    borderBottom: "1px solid rgba(17, 24, 39, 0.1)"
                                  },
                                  children: [
                                    /* @__PURE__ */ $e.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Humidity" }),
                                    /* @__PURE__ */ $e.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                      Be.current.humidity,
                                      "%"
                                    ] })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ $e.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "8px 0"
                                  },
                                  children: [
                                    /* @__PURE__ */ $e.jsx("span", { style: { fontSize: "14px", color: "#6b7280" }, children: "Wind" }),
                                    /* @__PURE__ */ $e.jsxs("span", { style: { fontSize: "14px", fontWeight: "500", color: "#111827" }, children: [
                                      Be.current.windSpeed,
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
              /* @__PURE__ */ $e.jsxs("div", { children: [
                /* @__PURE__ */ $e.jsx(
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
                /* @__PURE__ */ $e.jsx(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    },
                    children: Be.forecast.map((te, ne) => /* @__PURE__ */ $e.jsxs(
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
                        onMouseEnter: (Ue) => {
                          Ue.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                        },
                        onMouseLeave: (Ue) => {
                          Ue.currentTarget.style.backgroundColor = "transparent";
                        },
                        children: [
                          /* @__PURE__ */ $e.jsx(
                            "div",
                            {
                              style: {
                                minWidth: "100px",
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#111827"
                              },
                              children: te.day
                            }
                          ),
                          /* @__PURE__ */ $e.jsx(
                            "div",
                            {
                              style: {
                                minWidth: "60px",
                                fontSize: "12px",
                                color: "#6b7280"
                              },
                              children: te.date
                            }
                          ),
                          /* @__PURE__ */ $e.jsx(
                            "div",
                            {
                              style: {
                                fontSize: "24px",
                                minWidth: "40px",
                                textAlign: "center"
                              },
                              children: te.icon
                            }
                          ),
                          /* @__PURE__ */ $e.jsx(
                            "div",
                            {
                              style: {
                                flex: 1,
                                fontSize: "14px",
                                color: "#6b7280",
                                textTransform: "capitalize"
                              },
                              children: te.condition
                            }
                          ),
                          /* @__PURE__ */ $e.jsxs(
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
                                /* @__PURE__ */ $e.jsxs("span", { style: { color: "#111827" }, children: [
                                  te.high,
                                  "°"
                                ] }),
                                /* @__PURE__ */ $e.jsxs("span", { style: { color: "#9ca3af" }, children: [
                                  te.low,
                                  "°"
                                ] })
                              ]
                            }
                          )
                        ]
                      },
                      ne
                    ))
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  ) : null;
}
let ev = null;
function mD(I) {
  ev = hE(I), ev.render(Z_.createElement(dD));
}
function yD() {
  ev && (ev.unmount(), ev = null);
}
export {
  mD as mount,
  yD as unmount
};
