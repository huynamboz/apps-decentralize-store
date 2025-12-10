function G_(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
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
var qR;
function K_() {
  if (qR) return mt;
  qR = 1;
  var X = Symbol.for("react.element"), Z = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), jt = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), yt = Symbol.for("react.provider"), S = Symbol.for("react.context"), xt = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ye = Object.assign, vt = {};
  function ct(_, V, Ve) {
    this.props = _, this.context = V, this.refs = vt, this.updater = Ve || le;
  }
  ct.prototype.isReactComponent = {}, ct.prototype.setState = function(_, V) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, V, "setState");
  }, ct.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Xt() {
  }
  Xt.prototype = ct.prototype;
  function it(_, V, Ve) {
    this.props = _, this.context = V, this.refs = vt, this.updater = Ve || le;
  }
  var ee = it.prototype = new Xt();
  ee.constructor = it, Ye(ee, ct.prototype), ee.isPureReactComponent = !0;
  var he = Array.isArray, ke = Object.prototype.hasOwnProperty, ft = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(_, V, Ve) {
    var je, lt = {}, tt = null, Ze = null;
    if (V != null) for (je in V.ref !== void 0 && (Ze = V.ref), V.key !== void 0 && (tt = "" + V.key), V) ke.call(V, je) && !He.hasOwnProperty(je) && (lt[je] = V[je]);
    var nt = arguments.length - 2;
    if (nt === 1) lt.children = Ve;
    else if (1 < nt) {
      for (var ut = Array(nt), Pt = 0; Pt < nt; Pt++) ut[Pt] = arguments[Pt + 2];
      lt.children = ut;
    }
    if (_ && _.defaultProps) for (je in nt = _.defaultProps, nt) lt[je] === void 0 && (lt[je] = nt[je]);
    return { $$typeof: X, type: _, key: tt, ref: Ze, props: lt, _owner: ft.current };
  }
  function Ft(_, V) {
    return { $$typeof: X, type: _.type, key: V, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Zt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === X;
  }
  function ln(_) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Ve) {
      return V[Ve];
    });
  }
  var wt = /\/+/g;
  function Le(_, V) {
    return typeof _ == "object" && _ !== null && _.key != null ? ln("" + _.key) : V.toString(36);
  }
  function Ut(_, V, Ve, je, lt) {
    var tt = typeof _;
    (tt === "undefined" || tt === "boolean") && (_ = null);
    var Ze = !1;
    if (_ === null) Ze = !0;
    else switch (tt) {
      case "string":
      case "number":
        Ze = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case X:
          case Z:
            Ze = !0;
        }
    }
    if (Ze) return Ze = _, lt = lt(Ze), _ = je === "" ? "." + Le(Ze, 0) : je, he(lt) ? (Ve = "", _ != null && (Ve = _.replace(wt, "$&/") + "/"), Ut(lt, V, Ve, "", function(Pt) {
      return Pt;
    })) : lt != null && (Zt(lt) && (lt = Ft(lt, Ve + (!lt.key || Ze && Ze.key === lt.key ? "" : ("" + lt.key).replace(wt, "$&/") + "/") + _)), V.push(lt)), 1;
    if (Ze = 0, je = je === "" ? "." : je + ":", he(_)) for (var nt = 0; nt < _.length; nt++) {
      tt = _[nt];
      var ut = je + Le(tt, nt);
      Ze += Ut(tt, V, Ve, ut, lt);
    }
    else if (ut = Ce(_), typeof ut == "function") for (_ = ut.call(_), nt = 0; !(tt = _.next()).done; ) tt = tt.value, ut = je + Le(tt, nt++), Ze += Ut(tt, V, Ve, ut, lt);
    else if (tt === "object") throw V = String(_), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return Ze;
  }
  function bt(_, V, Ve) {
    if (_ == null) return _;
    var je = [], lt = 0;
    return Ut(_, je, "", "", function(tt) {
      return V.call(Ve, tt, lt++);
    }), je;
  }
  function kt(_) {
    if (_._status === -1) {
      var V = _._result;
      V = V(), V.then(function(Ve) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Ve);
      }, function(Ve) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Ve);
      }), _._status === -1 && (_._status = 0, _._result = V);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Te = { current: null }, q = { transition: null }, xe = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: q, ReactCurrentOwner: ft };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return mt.Children = { map: bt, forEach: function(_, V, Ve) {
    bt(_, function() {
      V.apply(this, arguments);
    }, Ve);
  }, count: function(_) {
    var V = 0;
    return bt(_, function() {
      V++;
    }), V;
  }, toArray: function(_) {
    return bt(_, function(V) {
      return V;
    }) || [];
  }, only: function(_) {
    if (!Zt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, mt.Component = ct, mt.Fragment = A, mt.Profiler = et, mt.PureComponent = it, mt.StrictMode = jt, mt.Suspense = fe, mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, mt.act = re, mt.cloneElement = function(_, V, Ve) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var je = Ye({}, _.props), lt = _.key, tt = _.ref, Ze = _._owner;
    if (V != null) {
      if (V.ref !== void 0 && (tt = V.ref, Ze = ft.current), V.key !== void 0 && (lt = "" + V.key), _.type && _.type.defaultProps) var nt = _.type.defaultProps;
      for (ut in V) ke.call(V, ut) && !He.hasOwnProperty(ut) && (je[ut] = V[ut] === void 0 && nt !== void 0 ? nt[ut] : V[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1) je.children = Ve;
    else if (1 < ut) {
      nt = Array(ut);
      for (var Pt = 0; Pt < ut; Pt++) nt[Pt] = arguments[Pt + 2];
      je.children = nt;
    }
    return { $$typeof: X, type: _.type, key: lt, ref: tt, props: je, _owner: Ze };
  }, mt.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: yt, _context: _ }, _.Consumer = _;
  }, mt.createElement = an, mt.createFactory = function(_) {
    var V = an.bind(null, _);
    return V.type = _, V;
  }, mt.createRef = function() {
    return { current: null };
  }, mt.forwardRef = function(_) {
    return { $$typeof: xt, render: _ };
  }, mt.isValidElement = Zt, mt.lazy = function(_) {
    return { $$typeof: Xe, _payload: { _status: -1, _result: _ }, _init: kt };
  }, mt.memo = function(_, V) {
    return { $$typeof: se, type: _, compare: V === void 0 ? null : V };
  }, mt.startTransition = function(_) {
    var V = q.transition;
    q.transition = {};
    try {
      _();
    } finally {
      q.transition = V;
    }
  }, mt.unstable_act = re, mt.useCallback = function(_, V) {
    return Te.current.useCallback(_, V);
  }, mt.useContext = function(_) {
    return Te.current.useContext(_);
  }, mt.useDebugValue = function() {
  }, mt.useDeferredValue = function(_) {
    return Te.current.useDeferredValue(_);
  }, mt.useEffect = function(_, V) {
    return Te.current.useEffect(_, V);
  }, mt.useId = function() {
    return Te.current.useId();
  }, mt.useImperativeHandle = function(_, V, Ve) {
    return Te.current.useImperativeHandle(_, V, Ve);
  }, mt.useInsertionEffect = function(_, V) {
    return Te.current.useInsertionEffect(_, V);
  }, mt.useLayoutEffect = function(_, V) {
    return Te.current.useLayoutEffect(_, V);
  }, mt.useMemo = function(_, V) {
    return Te.current.useMemo(_, V);
  }, mt.useReducer = function(_, V, Ve) {
    return Te.current.useReducer(_, V, Ve);
  }, mt.useRef = function(_) {
    return Te.current.useRef(_);
  }, mt.useState = function(_) {
    return Te.current.useState(_);
  }, mt.useSyncExternalStore = function(_, V, Ve) {
    return Te.current.useSyncExternalStore(_, V, Ve);
  }, mt.useTransition = function() {
    return Te.current.useTransition();
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
var XR;
function q_() {
  return XR || (XR = 1, function(X, Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", jt = Symbol.for("react.element"), et = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), se = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), ct = Symbol.iterator, Xt = "@@iterator";
      function it(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ct && h[ct] || h[Xt];
        return typeof C == "function" ? C : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, he = {
        transition: null
      }, ke = {
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
      }, He = {}, an = null;
      function Ft(h) {
        an = h;
      }
      He.setExtraStackFrame = function(h) {
        an = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Zt = !1, ln = !1, wt = !1, Le = !1, Ut = !1, bt = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: he,
        ReactCurrentOwner: ft
      };
      bt.ReactDebugCurrentFrame = He, bt.ReactCurrentActQueue = ke;
      function kt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          q("warn", h, N);
        }
      }
      function Te(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          q("error", h, N);
        }
      }
      function q(h, C, N) {
        {
          var j = bt.ReactDebugCurrentFrame, K = j.getStackAddendum();
          K !== "" && (C += "%s", N = N.concat([K]));
          var Me = N.map(function(ae) {
            return String(ae);
          });
          Me.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Me);
        }
      }
      var xe = {};
      function re(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", K = j + "." + C;
          if (xe[K])
            return;
          Te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), xe[K] = !0;
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
        enqueueReplaceState: function(h, C, N, j) {
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
        enqueueSetState: function(h, C, N, j) {
          re(h, "setState");
        }
      }, V = Object.assign, Ve = {};
      Object.freeze(Ve);
      function je(h, C, N) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = N || _;
      }
      je.prototype.isReactComponent = {}, je.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, je.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var lt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(h, C) {
          Object.defineProperty(je.prototype, h, {
            get: function() {
              kt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ze in lt)
          lt.hasOwnProperty(Ze) && tt(Ze, lt[Ze]);
      }
      function nt() {
      }
      nt.prototype = je.prototype;
      function ut(h, C, N) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = N || _;
      }
      var Pt = ut.prototype = new nt();
      Pt.constructor = ut, V(Pt, je.prototype), Pt.isPureReactComponent = !0;
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
      function Ir(h) {
        if (Pn(h))
          return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Bn(h);
      }
      function si(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var K = C.displayName || C.name || "";
        return K !== "" ? N + "(" + K + ")" : N;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function Kn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case yt:
            return "Fragment";
          case et:
            return "Portal";
          case xt:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              var C = h;
              return oa(C) + ".Consumer";
            case fe:
              var N = h;
              return oa(N._context) + ".Provider";
            case Xe:
              return si(h, h.render, "ForwardRef");
            case le:
              var j = h.displayName || null;
              return j !== null ? j : Kn(h.type) || "Memo";
            case Ye: {
              var K = h, Me = K._payload, ae = K._init;
              try {
                return Kn(ae(Me));
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
      function $a(h, C) {
        var N = function() {
          gr || (gr = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, C) {
        var N = function() {
          Ia || (Ia = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function te(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = Kn(ft.current.type);
          Ln[C] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Ln[C] = !0);
        }
      }
      var we = function(h, C, N, j, K, Me, ae) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: jt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Me
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function rt(h, C, N) {
        var j, K = {}, Me = null, ae = null, Ue = null, pt = null;
        if (C != null) {
          Sr(C) && (ae = C.ref, te(C)), sa(C) && (Ir(C.key), Me = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Rn.call(C, j) && !Yn.hasOwnProperty(j) && (K[j] = C[j]);
        }
        var Tt = arguments.length - 2;
        if (Tt === 1)
          K.children = N;
        else if (Tt > 1) {
          for (var nn = Array(Tt), $t = 0; $t < Tt; $t++)
            nn[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(nn), K.children = nn;
        }
        if (h && h.defaultProps) {
          var at = h.defaultProps;
          for (j in at)
            K[j] === void 0 && (K[j] = at[j]);
        }
        if (Me || ae) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Me && $a(K, Qt), ae && ci(K, Qt);
        }
        return we(h, Me, ae, Ue, pt, ft.current, K);
      }
      function At(h, C) {
        var N = we(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Jt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, K = V({}, h.props), Me = h.key, ae = h.ref, Ue = h._self, pt = h._source, Tt = h._owner;
        if (C != null) {
          Sr(C) && (ae = C.ref, Tt = ft.current), sa(C) && (Ir(C.key), Me = "" + C.key);
          var nn;
          h.type && h.type.defaultProps && (nn = h.type.defaultProps);
          for (j in C)
            Rn.call(C, j) && !Yn.hasOwnProperty(j) && (C[j] === void 0 && nn !== void 0 ? K[j] = nn[j] : K[j] = C[j]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          K.children = N;
        else if ($t > 1) {
          for (var at = Array($t), Qt = 0; Qt < $t; Qt++)
            at[Qt] = arguments[Qt + 2];
          K.children = at;
        }
        return we(h.type, Me, ae, Ue, pt, Tt, K);
      }
      function pn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === jt;
      }
      var un = ".", qn = ":";
      function en(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(K) {
          return N[K];
        });
        return "$" + j;
      }
      var Bt = !1, Yt = /\/+/g;
      function ca(h) {
        return h.replace(Yt, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), en("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, N, j, K) {
        var Me = typeof h;
        (Me === "undefined" || Me === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Me) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case jt:
                case et:
                  ae = !0;
              }
          }
        if (ae) {
          var Ue = h, pt = K(Ue), Tt = j === "" ? un + Er(Ue, 0) : j;
          if (Cn(pt)) {
            var nn = "";
            Tt != null && (nn = ca(Tt) + "/"), Ta(pt, C, nn, "", function(Kf) {
              return Kf;
            });
          } else pt != null && (pn(pt) && (pt.key && (!Ue || Ue.key !== pt.key) && Ir(pt.key), pt = At(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Ue || Ue.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + pt.key) + "/"
            ) : "") + Tt
          )), C.push(pt));
          return 1;
        }
        var $t, at, Qt = 0, vn = j === "" ? un : j + qn;
        if (Cn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            $t = h[Rl], at = vn + Er($t, Rl), Qt += Ta($t, C, N, at, K);
        else {
          var Ko = it(h);
          if (typeof Ko == "function") {
            var Pi = h;
            Ko === Pi.entries && (Bt || kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var qo = Ko.call(Pi), ou, Gf = 0; !(ou = qo.next()).done; )
              $t = ou.value, at = vn + Er($t, Gf++), Qt += Ta($t, C, N, at, K);
          } else if (Me === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function Fi(h, C, N) {
        if (h == null)
          return h;
        var j = [], K = 0;
        return Ta(h, j, "", "", function(Me) {
          return C.call(N, Me, K++);
        }), j;
      }
      function Jl(h) {
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
        if (!pn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: se,
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
          $$typeof: fe,
          _context: C
        };
        var N = !1, j = !1, K = !1;
        {
          var Me = {
            $$typeof: se,
            _context: C
          };
          Object.defineProperties(Me, {
            Provider: {
              get: function() {
                return j || (j = !0, Te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
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
                return N || (N = !0, Te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                K || (kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), K = !0);
              }
            }
          }), C.Consumer = Me;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var br = -1, _r = 0, rr = 1, fi = 2;
      function Qa(h) {
        if (h._status === br) {
          var C = h._result, N = C();
          if (N.then(function(Me) {
            if (h._status === _r || h._status === br) {
              var ae = h;
              ae._status = rr, ae._result = Me;
            }
          }, function(Me) {
            if (h._status === _r || h._status === br) {
              var ae = h;
              ae._status = fi, ae._result = Me;
            }
          }), h._status === br) {
            var j = h;
            j._status = _r, j._result = N;
          }
        }
        if (h._status === rr) {
          var K = h._result;
          return K === void 0 && Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
        }, N = {
          $$typeof: Ye,
          _payload: C,
          _init: Qa
        };
        {
          var j, K;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Me) {
                Te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Me, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Me) {
                Te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Me, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function pi(h) {
        h != null && h.$$typeof === le ? Te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Te("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Te("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
        return !!(typeof h == "string" || typeof h == "function" || h === yt || h === xt || Ut || h === S || h === J || h === Ce || Le || h === vt || Zt || ln || wt || typeof h == "object" && h !== null && (h.$$typeof === Ye || h.$$typeof === le || h.$$typeof === fe || h.$$typeof === se || h.$$typeof === Xe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        B(h) || Te("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: le,
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
            set: function(K) {
              j = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return N;
      }
      function ye() {
        var h = ee.current;
        return h === null && Te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = ye();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function $e(h) {
        var C = ye();
        return C.useState(h);
      }
      function dt(h, C, N) {
        var j = ye();
        return j.useReducer(h, C, N);
      }
      function ot(h) {
        var C = ye();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var N = ye();
        return N.useEffect(h, C);
      }
      function tn(h, C) {
        var N = ye();
        return N.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var N = ye();
        return N.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var N = ye();
        return N.useCallback(h, C);
      }
      function Wa(h, C) {
        var N = ye();
        return N.useMemo(h, C);
      }
      function Ga(h, C, N) {
        var j = ye();
        return j.useImperativeHandle(h, C, N);
      }
      function Ke(h, C) {
        {
          var N = ye();
          return N.useDebugValue(h, C);
        }
      }
      function Je() {
        var h = ye();
        return h.useTransition();
      }
      function Ka(h) {
        var C = ye();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = ye();
        return h.useId();
      }
      function ru(h, C, N) {
        var j = ye();
        return j.useSyncExternalStore(h, C, N);
      }
      var hl = 0, Wu, ml, $r, $o, kr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Wu = console.log, ml = console.info, $r = console.warn, $o = console.error, kr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
              log: V({}, h, {
                value: Wu
              }),
              info: V({}, h, {
                value: ml
              }),
              warn: V({}, h, {
                value: $r
              }),
              error: V({}, h, {
                value: $o
              }),
              group: V({}, h, {
                value: kr
              }),
              groupCollapsed: V({}, h, {
                value: lc
              }),
              groupEnd: V({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qa = bt.ReactCurrentDispatcher, Xa;
      function Ku(h, C, N) {
        {
          if (Xa === void 0)
            try {
              throw Error();
            } catch (K) {
              var j = K.stack.trim().match(/\n( *(at )?)/);
              Xa = j && j[1] || "";
            }
          return `
` + Xa + h;
        }
      }
      var au = !1, gl;
      {
        var qu = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new qu();
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
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Me;
        Me = qa.current, qa.current = null, yl();
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
              } catch (vn) {
                j = vn;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (vn) {
                j = vn;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vn) {
              j = vn;
            }
            h();
          }
        } catch (vn) {
          if (vn && j && typeof vn.stack == "string") {
            for (var Ue = vn.stack.split(`
`), pt = j.stack.split(`
`), Tt = Ue.length - 1, nn = pt.length - 1; Tt >= 1 && nn >= 0 && Ue[Tt] !== pt[nn]; )
              nn--;
            for (; Tt >= 1 && nn >= 0; Tt--, nn--)
              if (Ue[Tt] !== pt[nn]) {
                if (Tt !== 1 || nn !== 1)
                  do
                    if (Tt--, nn--, nn < 0 || Ue[Tt] !== pt[nn]) {
                      var $t = `
` + Ue[Tt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, $t), $t;
                    }
                  while (Tt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          au = !1, qa.current = Me, fa(), Error.prepareStackTrace = K;
        }
        var at = h ? h.displayName || h.name : "", Qt = at ? Ku(at) : "";
        return typeof h == "function" && gl.set(h, Qt), Qt;
      }
      function Hi(h, C, N) {
        return Xu(h, !1);
      }
      function Qf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Qf(h));
        if (typeof h == "string")
          return Ku(h);
        switch (h) {
          case J:
            return Ku("Suspense");
          case Ce:
            return Ku("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Xe:
              return Hi(h.render);
            case le:
              return Vi(h.type, C, N);
            case Ye: {
              var j = h, K = j._payload, Me = j._init;
              try {
                return Vi(Me(K), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, Zu = bt.ReactDebugCurrentFrame;
      function Rt(h) {
        if (h) {
          var C = h._owner, N = Vi(h.type, h._source, C ? C.type : null);
          Zu.setExtraStackFrame(N);
        } else
          Zu.setExtraStackFrame(null);
      }
      function Qo(h, C, N, j, K) {
        {
          var Me = Function.call.bind(Rn);
          for (var ae in h)
            if (Me(h, ae)) {
              var Ue = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var pt = Error((j || "React class") + ": " + N + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ue = h[ae](C, ae, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Tt) {
                Ue = Tt;
              }
              Ue && !(Ue instanceof Error) && (Rt(K), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, ae, typeof Ue), Rt(null)), Ue instanceof Error && !(Ue.message in Dt) && (Dt[Ue.message] = !0, Rt(K), Te("Failed %s type: %s", N, Ue.message), Rt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, N = Vi(h.type, h._source, C ? C.type : null);
          Ft(N);
        } else
          Ft(null);
      }
      var Ie;
      Ie = !1;
      function Ju() {
        if (ft.current) {
          var h = Kn(ft.current.type);
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
      var Dr = {};
      function mi(h) {
        var C = Ju();
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
          if (!Dr[N]) {
            Dr[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ft.current && (j = " It was passed a child from " + Kn(h._owner.type) + "."), vi(h), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), vi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              pn(j) && sn(j, C);
            }
          else if (pn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = it(h);
            if (typeof K == "function" && K !== h.entries)
              for (var Me = K.call(h), ae; !(ae = Me.next()).done; )
                pn(ae.value) && sn(ae.value, C);
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
          C.$$typeof === le))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Kn(C);
            Qo(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ie) {
            Ie = !0;
            var K = Kn(C);
            Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function In(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              vi(h), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Te("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, N) {
        var j = B(h);
        if (!j) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = hi(C);
          Me ? K += Me : K += Ju();
          var ae;
          h === null ? ae = "null" : Cn(h) ? ae = "array" : h !== void 0 && h.$$typeof === jt ? (ae = "<" + (Kn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, Te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, K);
        }
        var Ue = rt.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (j)
          for (var pt = 2; pt < arguments.length; pt++)
            It(arguments[pt], h);
        return h === yt ? In(Ue) : Sl(Ue), Ue;
      }
      var xa = !1;
      function iu(h) {
        var C = Or.bind(null, h);
        return C.type = h, xa || (xa = !0, kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, N) {
        for (var j = Jt.apply(this, arguments), K = 2; K < arguments.length; K++)
          It(arguments[K], j.type);
        return Sl(j), j;
      }
      function Go(h, C) {
        var N = he.transition;
        he.transition = {};
        var j = he.transition;
        he.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (he.transition = N, N === null && j._updatedFibers) {
            var K = j._updatedFibers.size;
            K > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Wf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = X && X[C];
            lu = N.call(X, "timers").setImmediate;
          } catch {
            lu = function(K) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Me = new MessageChannel();
              Me.port1.onmessage = K, Me.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var wa = 0, Za = !1;
      function yi(h) {
        {
          var C = wa;
          wa++, ke.current === null && (ke.current = []);
          var N = ke.isBatchingLegacy, j;
          try {
            if (ke.isBatchingLegacy = !0, j = h(), !N && ke.didScheduleLegacyUpdate) {
              var K = ke.current;
              K !== null && (ke.didScheduleLegacyUpdate = !1, Cl(K));
            }
          } catch (at) {
            throw ba(C), at;
          } finally {
            ke.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Me = j, ae = !1, Ue = {
              then: function(at, Qt) {
                ae = !0, Me.then(function(vn) {
                  ba(C), wa === 0 ? eo(vn, at, Qt) : at(vn);
                }, function(vn) {
                  ba(C), Qt(vn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (Za = !0, Te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var pt = j;
            if (ba(C), wa === 0) {
              var Tt = ke.current;
              Tt !== null && (Cl(Tt), ke.current = null);
              var nn = {
                then: function(at, Qt) {
                  ke.current === null ? (ke.current = [], eo(pt, at, Qt)) : at(pt);
                }
              };
              return nn;
            } else {
              var $t = {
                then: function(at, Qt) {
                  at(pt);
                }
              };
              return $t;
            }
          }
        }
      }
      function ba(h) {
        h !== wa - 1 && Te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function eo(h, C, N) {
        {
          var j = ke.current;
          if (j !== null)
            try {
              Cl(j), Wf(function() {
                j.length === 0 ? (ke.current = null, C(h)) : eo(h, C, N);
              });
            } catch (K) {
              N(K);
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
      var uu = Or, no = Wo, ro = iu, Ja = {
        map: Fi,
        forEach: eu,
        count: Jl,
        toArray: pl,
        only: vl
      };
      Z.Children = Ja, Z.Component = je, Z.Fragment = yt, Z.Profiler = xt, Z.PureComponent = ut, Z.StrictMode = S, Z.Suspense = J, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bt, Z.act = yi, Z.cloneElement = no, Z.createContext = tu, Z.createElement = uu, Z.createFactory = ro, Z.createRef = On, Z.forwardRef = pi, Z.isValidElement = pn, Z.lazy = di, Z.memo = ie, Z.startTransition = Go, Z.unstable_act = yi, Z.useCallback = ar, Z.useContext = Ge, Z.useDebugValue = Ke, Z.useDeferredValue = Ka, Z.useEffect = Tn, Z.useId = nu, Z.useImperativeHandle = Ga, Z.useInsertionEffect = tn, Z.useLayoutEffect = on, Z.useMemo = Wa, Z.useReducer = dt, Z.useRef = ot, Z.useState = $e, Z.useSyncExternalStore = ru, Z.useTransition = Je, Z.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
process.env.NODE_ENV === "production" ? dE.exports = K_() : dE.exports = q_();
var dl = dE.exports;
const X_ = /* @__PURE__ */ G_(dl);
var pE = { exports: {} }, Ba = {}, Qm = { exports: {} }, cE = {};
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
function Z_() {
  return ZR || (ZR = 1, function(X) {
    function Z(q, xe) {
      var re = q.length;
      q.push(xe);
      e: for (; 0 < re; ) {
        var _ = re - 1 >>> 1, V = q[_];
        if (0 < et(V, xe)) q[_] = xe, q[re] = V, re = _;
        else break e;
      }
    }
    function A(q) {
      return q.length === 0 ? null : q[0];
    }
    function jt(q) {
      if (q.length === 0) return null;
      var xe = q[0], re = q.pop();
      if (re !== xe) {
        q[0] = re;
        e: for (var _ = 0, V = q.length, Ve = V >>> 1; _ < Ve; ) {
          var je = 2 * (_ + 1) - 1, lt = q[je], tt = je + 1, Ze = q[tt];
          if (0 > et(lt, re)) tt < V && 0 > et(Ze, lt) ? (q[_] = Ze, q[tt] = re, _ = tt) : (q[_] = lt, q[je] = re, _ = je);
          else if (tt < V && 0 > et(Ze, re)) q[_] = Ze, q[tt] = re, _ = tt;
          else break e;
        }
      }
      return xe;
    }
    function et(q, xe) {
      var re = q.sortIndex - xe.sortIndex;
      return re !== 0 ? re : q.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var yt = performance;
      X.unstable_now = function() {
        return yt.now();
      };
    } else {
      var S = Date, xt = S.now();
      X.unstable_now = function() {
        return S.now() - xt;
      };
    }
    var fe = [], se = [], Xe = 1, J = null, Ce = 3, le = !1, Ye = !1, vt = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Xt = typeof clearTimeout == "function" ? clearTimeout : null, it = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ee(q) {
      for (var xe = A(se); xe !== null; ) {
        if (xe.callback === null) jt(se);
        else if (xe.startTime <= q) jt(se), xe.sortIndex = xe.expirationTime, Z(fe, xe);
        else break;
        xe = A(se);
      }
    }
    function he(q) {
      if (vt = !1, ee(q), !Ye) if (A(fe) !== null) Ye = !0, kt(ke);
      else {
        var xe = A(se);
        xe !== null && Te(he, xe.startTime - q);
      }
    }
    function ke(q, xe) {
      Ye = !1, vt && (vt = !1, Xt(an), an = -1), le = !0;
      var re = Ce;
      try {
        for (ee(xe), J = A(fe); J !== null && (!(J.expirationTime > xe) || q && !ln()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, Ce = J.priorityLevel;
            var V = _(J.expirationTime <= xe);
            xe = X.unstable_now(), typeof V == "function" ? J.callback = V : J === A(fe) && jt(fe), ee(xe);
          } else jt(fe);
          J = A(fe);
        }
        if (J !== null) var Ve = !0;
        else {
          var je = A(se);
          je !== null && Te(he, je.startTime - xe), Ve = !1;
        }
        return Ve;
      } finally {
        J = null, Ce = re, le = !1;
      }
    }
    var ft = !1, He = null, an = -1, Ft = 5, Zt = -1;
    function ln() {
      return !(X.unstable_now() - Zt < Ft);
    }
    function wt() {
      if (He !== null) {
        var q = X.unstable_now();
        Zt = q;
        var xe = !0;
        try {
          xe = He(!0, q);
        } finally {
          xe ? Le() : (ft = !1, He = null);
        }
      } else ft = !1;
    }
    var Le;
    if (typeof it == "function") Le = function() {
      it(wt);
    };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel(), bt = Ut.port2;
      Ut.port1.onmessage = wt, Le = function() {
        bt.postMessage(null);
      };
    } else Le = function() {
      ct(wt, 0);
    };
    function kt(q) {
      He = q, ft || (ft = !0, Le());
    }
    function Te(q, xe) {
      an = ct(function() {
        q(X.unstable_now());
      }, xe);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, X.unstable_continueExecution = function() {
      Ye || le || (Ye = !0, kt(ke));
    }, X.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ft = 0 < q ? Math.floor(1e3 / q) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, X.unstable_getFirstCallbackNode = function() {
      return A(fe);
    }, X.unstable_next = function(q) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = Ce;
      }
      var re = Ce;
      Ce = xe;
      try {
        return q();
      } finally {
        Ce = re;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function(q, xe) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var re = Ce;
      Ce = q;
      try {
        return xe();
      } finally {
        Ce = re;
      }
    }, X.unstable_scheduleCallback = function(q, xe, re) {
      var _ = X.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? _ + re : _) : re = _, q) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = re + V, q = { id: Xe++, callback: xe, priorityLevel: q, startTime: re, expirationTime: V, sortIndex: -1 }, re > _ ? (q.sortIndex = re, Z(se, q), A(fe) === null && q === A(se) && (vt ? (Xt(an), an = -1) : vt = !0, Te(he, re - _))) : (q.sortIndex = V, Z(fe, q), Ye || le || (Ye = !0, kt(ke))), q;
    }, X.unstable_shouldYield = ln, X.unstable_wrapCallback = function(q) {
      var xe = Ce;
      return function() {
        var re = Ce;
        Ce = xe;
        try {
          return q.apply(this, arguments);
        } finally {
          Ce = re;
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
function J_() {
  return JR || (JR = 1, function(X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Z = !1, A = 5;
      function jt(te, we) {
        var rt = te.length;
        te.push(we), S(te, we, rt);
      }
      function et(te) {
        return te.length === 0 ? null : te[0];
      }
      function yt(te) {
        if (te.length === 0)
          return null;
        var we = te[0], rt = te.pop();
        return rt !== we && (te[0] = rt, xt(te, rt, 0)), we;
      }
      function S(te, we, rt) {
        for (var At = rt; At > 0; ) {
          var Jt = At - 1 >>> 1, pn = te[Jt];
          if (fe(pn, we) > 0)
            te[Jt] = we, te[At] = pn, At = Jt;
          else
            return;
        }
      }
      function xt(te, we, rt) {
        for (var At = rt, Jt = te.length, pn = Jt >>> 1; At < pn; ) {
          var un = (At + 1) * 2 - 1, qn = te[un], en = un + 1, Bt = te[en];
          if (fe(qn, we) < 0)
            en < Jt && fe(Bt, qn) < 0 ? (te[At] = Bt, te[en] = we, At = en) : (te[At] = qn, te[un] = we, At = un);
          else if (en < Jt && fe(Bt, we) < 0)
            te[At] = Bt, te[en] = we, At = en;
          else
            return;
        }
      }
      function fe(te, we) {
        var rt = te.sortIndex - we.sortIndex;
        return rt !== 0 ? rt : te.id - we.id;
      }
      var se = 1, Xe = 2, J = 3, Ce = 4, le = 5;
      function Ye(te, we) {
      }
      var vt = typeof performance == "object" && typeof performance.now == "function";
      if (vt) {
        var ct = performance;
        X.unstable_now = function() {
          return ct.now();
        };
      } else {
        var Xt = Date, it = Xt.now();
        X.unstable_now = function() {
          return Xt.now() - it;
        };
      }
      var ee = 1073741823, he = -1, ke = 250, ft = 5e3, He = 1e4, an = ee, Ft = [], Zt = [], ln = 1, wt = null, Le = J, Ut = !1, bt = !1, kt = !1, Te = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function re(te) {
        for (var we = et(Zt); we !== null; ) {
          if (we.callback === null)
            yt(Zt);
          else if (we.startTime <= te)
            yt(Zt), we.sortIndex = we.expirationTime, jt(Ft, we);
          else
            return;
          we = et(Zt);
        }
      }
      function _(te) {
        if (kt = !1, re(te), !bt)
          if (et(Ft) !== null)
            bt = !0, Ln(V);
          else {
            var we = et(Zt);
            we !== null && Sr(_, we.startTime - te);
          }
      }
      function V(te, we) {
        bt = !1, kt && (kt = !1, sa()), Ut = !0;
        var rt = Le;
        try {
          var At;
          if (!Z) return Ve(te, we);
        } finally {
          wt = null, Le = rt, Ut = !1;
        }
      }
      function Ve(te, we) {
        var rt = we;
        for (re(rt), wt = et(Ft); wt !== null && !(wt.expirationTime > rt && (!te || si())); ) {
          var At = wt.callback;
          if (typeof At == "function") {
            wt.callback = null, Le = wt.priorityLevel;
            var Jt = wt.expirationTime <= rt, pn = At(Jt);
            rt = X.unstable_now(), typeof pn == "function" ? wt.callback = pn : wt === et(Ft) && yt(Ft), re(rt);
          } else
            yt(Ft);
          wt = et(Ft);
        }
        if (wt !== null)
          return !0;
        var un = et(Zt);
        return un !== null && Sr(_, un.startTime - rt), !1;
      }
      function je(te, we) {
        switch (te) {
          case se:
          case Xe:
          case J:
          case Ce:
          case le:
            break;
          default:
            te = J;
        }
        var rt = Le;
        Le = te;
        try {
          return we();
        } finally {
          Le = rt;
        }
      }
      function lt(te) {
        var we;
        switch (Le) {
          case se:
          case Xe:
          case J:
            we = J;
            break;
          default:
            we = Le;
            break;
        }
        var rt = Le;
        Le = we;
        try {
          return te();
        } finally {
          Le = rt;
        }
      }
      function tt(te) {
        var we = Le;
        return function() {
          var rt = Le;
          Le = we;
          try {
            return te.apply(this, arguments);
          } finally {
            Le = rt;
          }
        };
      }
      function Ze(te, we, rt) {
        var At = X.unstable_now(), Jt;
        if (typeof rt == "object" && rt !== null) {
          var pn = rt.delay;
          typeof pn == "number" && pn > 0 ? Jt = At + pn : Jt = At;
        } else
          Jt = At;
        var un;
        switch (te) {
          case se:
            un = he;
            break;
          case Xe:
            un = ke;
            break;
          case le:
            un = an;
            break;
          case Ce:
            un = He;
            break;
          case J:
          default:
            un = ft;
            break;
        }
        var qn = Jt + un, en = {
          id: ln++,
          callback: we,
          priorityLevel: te,
          startTime: Jt,
          expirationTime: qn,
          sortIndex: -1
        };
        return Jt > At ? (en.sortIndex = Jt, jt(Zt, en), et(Ft) === null && en === et(Zt) && (kt ? sa() : kt = !0, Sr(_, Jt - At))) : (en.sortIndex = qn, jt(Ft, en), !bt && !Ut && (bt = !0, Ln(V))), en;
      }
      function nt() {
      }
      function ut() {
        !bt && !Ut && (bt = !0, Ln(V));
      }
      function Pt() {
        return et(Ft);
      }
      function On(te) {
        te.callback = null;
      }
      function wr() {
        return Le;
      }
      var Cn = !1, nr = null, Pn = -1, Bn = A, Ir = -1;
      function si() {
        var te = X.unstable_now() - Ir;
        return !(te < Bn);
      }
      function oa() {
      }
      function Kn(te) {
        if (te < 0 || te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        te > 0 ? Bn = Math.floor(1e3 / te) : Bn = A;
      }
      var Rn = function() {
        if (nr !== null) {
          var te = X.unstable_now();
          Ir = te;
          var we = !0, rt = !0;
          try {
            rt = nr(we, te);
          } finally {
            rt ? Yn() : (Cn = !1, nr = null);
          }
        } else
          Cn = !1;
      }, Yn;
      if (typeof xe == "function")
        Yn = function() {
          xe(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Ia = gr.port2;
        gr.port1.onmessage = Rn, Yn = function() {
          Ia.postMessage(null);
        };
      } else
        Yn = function() {
          Te(Rn, 0);
        };
      function Ln(te) {
        nr = te, Cn || (Cn = !0, Yn());
      }
      function Sr(te, we) {
        Pn = Te(function() {
          te(X.unstable_now());
        }, we);
      }
      function sa() {
        q(Pn), Pn = -1;
      }
      var $a = oa, ci = null;
      X.unstable_IdlePriority = le, X.unstable_ImmediatePriority = se, X.unstable_LowPriority = Ce, X.unstable_NormalPriority = J, X.unstable_Profiling = ci, X.unstable_UserBlockingPriority = Xe, X.unstable_cancelCallback = On, X.unstable_continueExecution = ut, X.unstable_forceFrameRate = Kn, X.unstable_getCurrentPriorityLevel = wr, X.unstable_getFirstCallbackNode = Pt, X.unstable_next = lt, X.unstable_pauseExecution = nt, X.unstable_requestPaint = $a, X.unstable_runWithPriority = je, X.unstable_scheduleCallback = Ze, X.unstable_shouldYield = si, X.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var eT;
function lT() {
  return eT || (eT = 1, process.env.NODE_ENV === "production" ? Qm.exports = Z_() : Qm.exports = J_()), Qm.exports;
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
function ek() {
  if (tT) return Ba;
  tT = 1;
  var X = dl, Z = lT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var jt = /* @__PURE__ */ new Set(), et = {};
  function yt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (et[n] = r, n = 0; n < r.length; n++) jt.add(r[n]);
  }
  var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fe = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xe = {}, J = {};
  function Ce(n) {
    return fe.call(J, n) ? !0 : fe.call(Xe, n) ? !1 : se.test(n) ? J[n] = !0 : (Xe[n] = !0, !1);
  }
  function le(n, r, l, o) {
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
  function Ye(n, r, l, o) {
    if (r === null || typeof r > "u" || le(n, r, l, o)) return !0;
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
  function vt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ct[n] = new vt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ct[r] = new vt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ct[n] = new vt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ct[n] = new vt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ct[n] = new vt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ct[n] = new vt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ct[n] = new vt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ct[n] = new vt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ct[n] = new vt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Xt = /[\-:]([a-z])/g;
  function it(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Xt,
      it
    );
    ct[r] = new vt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Xt, it);
    ct[r] = new vt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Xt, it);
    ct[r] = new vt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ct[n] = new vt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ct.xlinkHref = new vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ct[n] = new vt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ee(n, r, l, o) {
    var c = ct.hasOwnProperty(r) ? ct[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ye(r, l, c, o) && (l = null), o || c === null ? Ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var he = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = Symbol.for("react.element"), ft = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Ft = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), q = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = q && n[q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, _;
  function V(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Ve = !1;
  function je(n, r) {
    if (!n || Ve) return "";
    Ve = !0;
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
      Ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function lt(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = je(n.type, !1), n;
      case 11:
        return n = je(n.type.render, !1), n;
      case 1:
        return n = je(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case ft:
        return "Portal";
      case Ft:
        return "Profiler";
      case an:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ut:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Zt:
        return (n._context.displayName || "Context") + ".Provider";
      case wt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case bt:
        return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
      case kt:
        r = n._payload, n = n._init;
        try {
          return tt(n(r));
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
        return tt(r);
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
  function nt(n) {
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
  function Pt(n) {
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
    n._valueTracker || (n._valueTracker = Pt(n));
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
    l = nt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && ee(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Bn(n, r);
    var l = nt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, nt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
  var Kn = Array.isArray;
  function Rn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + nt(l), r = null, c = 0; c < n.length; c++) {
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
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Kn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: nt(l) };
  }
  function Ia(n, r) {
    var l = nt(r.value), o = nt(r.defaultValue);
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
  var $a, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($a = $a || document.createElement("div"), $a.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $a.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function te(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var we = {
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
  }, rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(n) {
    rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), we[r] = we[n];
    });
  });
  function At(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || we.hasOwnProperty(n) && we[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = At(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var pn = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (pn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function qn(n, r) {
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
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, ca = null, Er = null;
  function Ta(n) {
    if (n = De(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = hn(r), Yt(n.stateNode, n.type, r));
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
      vl = !1, (ca !== null || Er !== null) && (pl(), Jl());
    }
  }
  function br(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = hn(l);
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
  if (xt) try {
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
  var Qa = !1, di = null, pi = !1, R = null, B = { onError: function(n) {
    Qa = !0, di = n;
  } };
  function ie(n, r, l, o, c, d, m, E, T) {
    Qa = !1, di = null, fi.apply(B, arguments);
  }
  function ye(n, r, l, o, c, d, m, E, T) {
    if (ie.apply(this, arguments), Qa) {
      if (Qa) {
        var z = di;
        Qa = !1, di = null;
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
  function $e(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function dt(n) {
    if (Ge(n) !== n) throw Error(A(188));
  }
  function ot(n) {
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
    return n = ot(n), n !== null ? tn(n) : null;
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
  var on = Z.unstable_scheduleCallback, ar = Z.unstable_cancelCallback, Wa = Z.unstable_shouldYield, Ga = Z.unstable_requestPaint, Ke = Z.unstable_now, Je = Z.unstable_getCurrentPriorityLevel, Ka = Z.unstable_ImmediatePriority, nu = Z.unstable_UserBlockingPriority, ru = Z.unstable_NormalPriority, hl = Z.unstable_LowPriority, Wu = Z.unstable_IdlePriority, ml = null, $r = null;
  function $o(n) {
    if ($r && typeof $r.onCommitFiberRoot == "function") try {
      $r.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, fa = 4194304;
  function qa(n) {
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
      E !== 0 ? o = qa(E) : (d &= m, d !== 0 && (o = qa(d)));
    } else m = l & ~c, m !== 0 ? o = qa(m) : d !== 0 && (o = qa(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ku(n, r) {
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
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Ku(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Qf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Rt, Qo, vi, Ie, Ju, ir = !1, hi = [], Dr = null, mi = null, sn = null, It = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), In = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
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
        It.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = De(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = iu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = iu(mi, n, r, l, o, c), !0;
      case "mouseover":
        return sn = iu(sn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return It.set(d, iu(It.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = $e(l), r !== null) {
            n.blockedOn = r, Ju(n.priority, function() {
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
      } else return r = De(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Wf() {
    ir = !1, Dr !== null && El(Dr) && (Dr = null), mi !== null && El(mi) && (mi = null), sn !== null && El(sn) && (sn = null), It.forEach(lu), Sl.forEach(lu);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, Wf)));
  }
  function Za(n) {
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
    for (Dr !== null && wa(Dr, n), mi !== null && wa(mi, n), sn !== null && wa(sn, n), It.forEach(r), Sl.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && In.shift();
  }
  var yi = he.ReactCurrentBatchConfig, ba = !0;
  function eo(n, r, l, o) {
    var c = Dt, d = yi.transition;
    yi.transition = null;
    try {
      Dt = 1, Cl(n, r, l, o);
    } finally {
      Dt = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Dt, d = yi.transition;
    yi.transition = null;
    try {
      Dt = 4, Cl(n, r, l, o);
    } finally {
      Dt = c, yi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (ba) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), xa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (xa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = De(c);
          if (d !== null && Rt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Bt(o), n = vu(n), n !== null) if (r = Ge(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = $e(r), n !== null) return n;
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
        switch (Je()) {
          case Ka:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Wu:
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
  function K() {
    return !0;
  }
  function Me() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : Me, this.isPropagationStopped = Me, this;
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
  var Ue = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pt = ae(Ue), Tt = re({}, Ue, { view: 0, detail: 0 }), nn = ae(Tt), $t, at, Qt, vn = re({}, Tt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? ($t = n.screenX - Qt.screenX, at = n.screenY - Qt.screenY) : at = $t = 0, Qt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : at;
  } }), Rl = ae(vn), Ko = re({}, vn, { dataTransfer: 0 }), Pi = ae(Ko), qo = re({}, Tt, { relatedTarget: 0 }), ou = ae(qo), Gf = re({}, Ue, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ae(Gf), Kf = re({}, Ue, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = ae(Kf), qf = re({}, Ue, { data: 0 }), Xf = ae(qf), nv = {
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
  var Jf = re({}, Tt, { key: function(n) {
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
  } }), ed = ae(Jf), td = re({}, vn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = ae(td), sc = re({}, Tt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), iv = ae(sc), Qr = re({}, Ue, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = ae(Qr), Mn = re({}, vn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = ae(Mn), nd = [9, 13, 27, 32], ao = xt && "CompositionEvent" in window, Xo = null;
  xt && "documentMode" in document && (Xo = document.documentMode);
  var Zo = xt && "TextEvent" in window && !Xo, lv = xt && (!ao || Xo && 8 < Xo && 11 >= Xo), uv = " ", cc = !1;
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
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = N(), C = h = Ja = null, io = !1, n) : null;
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
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Fi(o), r = as(r, "onChange"), 0 < r.length && (l = new pt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, su = null;
  function dv(n) {
    du(n, 0);
  }
  function Jo(n) {
    var r = ti(n);
    if (wr(r)) return n;
  }
  function Xm(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (xt) {
    var ad;
    if (xt) {
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
    if (n.propertyName === "value" && Jo(su)) {
      var r = [];
      rd(r, su, n, Bt(n)), tu(dv, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (hv(), gi = r, su = l, gi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(su);
  }
  function Jm(n, r) {
    if (n === "click") return Jo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ey;
  function es(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!fe.call(r, c) || !ei(n[c], r[c])) return !1;
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
  var ty = xt && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== Cn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new pt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, sd = {};
  xt && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return lr[n] = r[l];
    return n;
  }
  var Ev = vc("animationend"), Cv = vc("animationiteration"), Rv = vc("animationstart"), Tv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    cd.set(n, r), yt(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], ny = fu.toLowerCase(), ry = fu[0].toUpperCase() + fu.slice(1);
    _a(ny, "on" + ry);
  }
  _a(Ev, "onAnimationEnd"), _a(Cv, "onAnimationIteration"), _a(Rv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ye(o, r, void 0, n), n.currentTarget = null;
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
  function Ht(n, r) {
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
      n[gc] = !0, jt.forEach(function(l) {
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
      var z = d, $ = Bt(l), W = [];
      e: {
        var I = cd.get(n);
        if (I !== void 0) {
          var de = pt, ge = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              de = ed;
              break;
            case "focusin":
              ge = "focus", de = ou;
              break;
            case "focusout":
              ge = "blur", de = ou;
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
              de = Pi;
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
              de = Yi;
              break;
            case "scroll":
              de = nn;
              break;
            case "wheel":
              de = Ii;
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
          var Re = (r & 4) !== 0, kn = !Re && n === "scroll", k = Re ? I !== null ? I + "Capture" : null : I;
          Re = [];
          for (var w = z, L; w !== null; ) {
            L = w;
            var Q = L.stateNode;
            if (L.tag === 5 && Q !== null && (L = Q, k !== null && (Q = br(w, k), Q != null && Re.push(so(w, Q, L)))), kn) break;
            w = w.return;
          }
          0 < Re.length && (I = new de(I, ge, null, l, $), W.push({ event: I, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", I && l !== en && (ge = l.relatedTarget || l.fromElement) && (vu(ge) || ge[$i])) break e;
          if ((de || I) && (I = $.window === $ ? $ : (I = $.ownerDocument) ? I.defaultView || I.parentWindow : window, de ? (ge = l.relatedTarget || l.toElement, de = z, ge = ge ? vu(ge) : null, ge !== null && (kn = Ge(ge), ge !== kn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (de = null, ge = z), de !== ge)) {
            if (Re = Rl, Q = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Re = av, Q = "onPointerLeave", k = "onPointerEnter", w = "pointer"), kn = de == null ? I : ti(de), L = ge == null ? I : ti(ge), I = new Re(Q, w + "leave", de, l, $), I.target = kn, I.relatedTarget = L, Q = null, vu($) === z && (Re = new Re(k, w + "enter", ge, l, $), Re.target = L, Re.relatedTarget = kn, Q = Re), kn = Q, de && ge) t: {
              for (Re = de, k = ge, w = 0, L = Re; L; L = xl(L)) w++;
              for (L = 0, Q = k; Q; Q = xl(Q)) L++;
              for (; 0 < w - L; ) Re = xl(Re), w--;
              for (; 0 < L - w; ) k = xl(k), L--;
              for (; w--; ) {
                if (Re === k || k !== null && Re === k.alternate) break t;
                Re = xl(Re), k = xl(k);
              }
              Re = null;
            }
            else Re = null;
            de !== null && wv(W, I, de, Re, !1), ge !== null && kn !== null && wv(W, kn, ge, Re, !0);
          }
        }
        e: {
          if (I = z ? ti(z) : window, de = I.nodeName && I.nodeName.toLowerCase(), de === "select" || de === "input" && I.type === "file") var Se = Xm;
          else if (fv(I)) if (pv) Se = gv;
          else {
            Se = yv;
            var ze = Zm;
          }
          else (de = I.nodeName) && de.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (Se = Jm);
          if (Se && (Se = Se(n, z))) {
            rd(W, Se, l, $);
            break e;
          }
          ze && ze(n, I, z), n === "focusout" && (ze = I._wrapperState) && ze.controlled && I.type === "number" && oa(I, "number", I.value);
        }
        switch (ze = z ? ti(z) : window, n) {
          case "focusin":
            (fv(ze) || ze.contentEditable === "true") && (uo = ze, ld = z, ns = null);
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
            ud = !1, od(W, l, $);
            break;
          case "selectionchange":
            if (ty) break;
          case "keydown":
          case "keyup":
            od(W, l, $);
        }
        var Ae;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Be = "onCompositionStart";
              break e;
            case "compositionend":
              Be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Be = "onCompositionUpdate";
              break e;
          }
          Be = void 0;
        }
        else io ? ov(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && (lv && l.locale !== "ko" && (io || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && io && (Ae = N()) : (Ja = $, h = "value" in Ja ? Ja.value : Ja.textContent, io = !0)), ze = as(z, Be), 0 < ze.length && (Be = new Xf(Be, n, null, l, $), W.push({ event: Be, listeners: ze }), Ae ? Be.data = Ae : (Ae = sv(l), Ae !== null && (Be.data = Ae)))), (Ae = Zo ? cv(n, l) : Km(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && ($ = new Xf("onBeforeInput", "beforeinput", null, l, $), W.push({ event: $, listeners: z }), $.data = Ae));
      }
      du(W, r);
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
  var bv = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(ay, "");
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
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv < "u" ? function(n) {
    return kv.resolve(null).then(n).catch(Tc);
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
  function Dv(n) {
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
  var bl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + bl, ls = "__reactProps$" + bl, $i = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, iy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Dv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = Dv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function De(n) {
    return n = n[Ei] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function hn(n) {
    return n[ls] || null;
  }
  var gt = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function rn(n) {
    0 > ka || (n.current = gt[ka], gt[ka] = null, ka--);
  }
  function _e(n, r) {
    ka++, gt[ka] = n.current, n.current = r;
  }
  var Cr = {}, En = Da(Cr), $n = Da(!1), Wr = Cr;
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
    rn($n), rn(En);
  }
  function Ov(n, r, l) {
    if (En.current !== Cr) throw Error(A(168));
    _e(En, r), _e($n, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Ze(n) || "Unknown", c));
    return re({}, l, o);
  }
  function Xn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Wr = En.current, _e(En, n), _e($n, $n.current), !0;
  }
  function xc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = os(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, rn($n), rn(En), _e(En, n)) : rn($n), _e($n, l);
  }
  var Ci = null, ho = !1, Qi = !1;
  function wc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function _l(n) {
    ho = !0, wc(n);
  }
  function Ri() {
    if (!Qi && Ci !== null) {
      Qi = !0;
      var n = 0, r = Dt;
      try {
        var l = Ci;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), on(Ka, Ri), c;
      } finally {
        Dt = r, Qi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Wi = 0, zn = [], Oa = 0, da = null, Ti = 1, xi = "";
  function hu(n, r) {
    kl[Dl++] = Wi, kl[Dl++] = Ol, Ol = n, Wi = r;
  }
  function Lv(n, r, l) {
    zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, da = n;
    var o = Ti;
    n = xi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - kr(r) + c | l << c | o, xi = d + n;
    } else Ti = 1 << d | l << c | o, xi = n;
  }
  function bc(n) {
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Wi = kl[--Dl], kl[Dl] = null;
    for (; n === da; ) da = zn[--Oa], zn[Oa] = null, xi = zn[--Oa], zn[Oa] = null, Ti = zn[--Oa], zn[Oa] = null;
  }
  var Kr = null, qr = null, fn = !1, La = null;
  function vd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, qr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, qr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, qr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (fn) {
      var r = qr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = Si(l.nextSibling);
          var o = Kr;
          r && Mv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, Kr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Kr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function kc(n) {
    if (n !== Kr) return !1;
    if (!fn) return Qn(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = qr)) {
      if (hd(n)) throw ss(), Error(A(418));
      for (; r; ) vd(n, r), r = Si(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                qr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        qr = null;
      }
    } else qr = Kr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = qr; n; ) n = Si(n.nextSibling);
  }
  function Ll() {
    qr = Kr = null, fn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var ly = he.ReactCurrentBatchConfig;
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
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, w) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [w], k.flags |= 16) : L.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Hl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < w ? (k.flags |= 2, w) : L) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, L, Q) {
      return w === null || w.tag !== 6 ? (w = Wd(L, k.mode, Q), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function T(k, w, L, Q) {
      var Se = L.type;
      return Se === He ? $(k, w, L.props.children, Q, L.key) : w !== null && (w.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === kt && Nv(Se) === w.type) ? (Q = c(w, L.props), Q.ref = mu(k, w, L), Q.return = k, Q) : (Q = Hs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = mu(k, w, L), Q.return = k, Q);
    }
    function z(k, w, L, Q) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = sf(L, k.mode, Q), w.return = k, w) : (w = c(w, L.children || []), w.return = k, w);
    }
    function $(k, w, L, Q, Se) {
      return w === null || w.tag !== 7 ? (w = el(L, k.mode, Q, Se), w.return = k, w) : (w = c(w, L), w.return = k, w);
    }
    function W(k, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Wd("" + w, k.mode, L), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ke:
            return L = Hs(w.type, w.key, w.props, null, k.mode, L), L.ref = mu(k, null, w), L.return = k, L;
          case ft:
            return w = sf(w, k.mode, L), w.return = k, w;
          case kt:
            var Q = w._init;
            return W(k, Q(w._payload), L);
        }
        if (Kn(w) || xe(w)) return w = el(w, k.mode, L, null), w.return = k, w;
        Dc(k, w);
      }
      return null;
    }
    function I(k, w, L, Q) {
      var Se = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Se !== null ? null : E(k, w, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ke:
            return L.key === Se ? T(k, w, L, Q) : null;
          case ft:
            return L.key === Se ? z(k, w, L, Q) : null;
          case kt:
            return Se = L._init, I(
              k,
              w,
              Se(L._payload),
              Q
            );
        }
        if (Kn(L) || xe(L)) return Se !== null ? null : $(k, w, L, Q, null);
        Dc(k, L);
      }
      return null;
    }
    function de(k, w, L, Q, Se) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number") return k = k.get(L) || null, E(w, k, "" + Q, Se);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case ke:
            return k = k.get(Q.key === null ? L : Q.key) || null, T(w, k, Q, Se);
          case ft:
            return k = k.get(Q.key === null ? L : Q.key) || null, z(w, k, Q, Se);
          case kt:
            var ze = Q._init;
            return de(k, w, L, ze(Q._payload), Se);
        }
        if (Kn(Q) || xe(Q)) return k = k.get(L) || null, $(w, k, Q, Se, null);
        Dc(w, Q);
      }
      return null;
    }
    function ge(k, w, L, Q) {
      for (var Se = null, ze = null, Ae = w, Be = w = 0, er = null; Ae !== null && Be < L.length; Be++) {
        Ae.index > Be ? (er = Ae, Ae = null) : er = Ae.sibling;
        var Mt = I(k, Ae, L[Be], Q);
        if (Mt === null) {
          Ae === null && (Ae = er);
          break;
        }
        n && Ae && Mt.alternate === null && r(k, Ae), w = d(Mt, w, Be), ze === null ? Se = Mt : ze.sibling = Mt, ze = Mt, Ae = er;
      }
      if (Be === L.length) return l(k, Ae), fn && hu(k, Be), Se;
      if (Ae === null) {
        for (; Be < L.length; Be++) Ae = W(k, L[Be], Q), Ae !== null && (w = d(Ae, w, Be), ze === null ? Se = Ae : ze.sibling = Ae, ze = Ae);
        return fn && hu(k, Be), Se;
      }
      for (Ae = o(k, Ae); Be < L.length; Be++) er = de(Ae, k, Be, L[Be], Q), er !== null && (n && er.alternate !== null && Ae.delete(er.key === null ? Be : er.key), w = d(er, w, Be), ze === null ? Se = er : ze.sibling = er, ze = er);
      return n && Ae.forEach(function(Bl) {
        return r(k, Bl);
      }), fn && hu(k, Be), Se;
    }
    function Re(k, w, L, Q) {
      var Se = xe(L);
      if (typeof Se != "function") throw Error(A(150));
      if (L = Se.call(L), L == null) throw Error(A(151));
      for (var ze = Se = null, Ae = w, Be = w = 0, er = null, Mt = L.next(); Ae !== null && !Mt.done; Be++, Mt = L.next()) {
        Ae.index > Be ? (er = Ae, Ae = null) : er = Ae.sibling;
        var Bl = I(k, Ae, Mt.value, Q);
        if (Bl === null) {
          Ae === null && (Ae = er);
          break;
        }
        n && Ae && Bl.alternate === null && r(k, Ae), w = d(Bl, w, Be), ze === null ? Se = Bl : ze.sibling = Bl, ze = Bl, Ae = er;
      }
      if (Mt.done) return l(
        k,
        Ae
      ), fn && hu(k, Be), Se;
      if (Ae === null) {
        for (; !Mt.done; Be++, Mt = L.next()) Mt = W(k, Mt.value, Q), Mt !== null && (w = d(Mt, w, Be), ze === null ? Se = Mt : ze.sibling = Mt, ze = Mt);
        return fn && hu(k, Be), Se;
      }
      for (Ae = o(k, Ae); !Mt.done; Be++, Mt = L.next()) Mt = de(Ae, k, Be, Mt.value, Q), Mt !== null && (n && Mt.alternate !== null && Ae.delete(Mt.key === null ? Be : Mt.key), w = d(Mt, w, Be), ze === null ? Se = Mt : ze.sibling = Mt, ze = Mt);
      return n && Ae.forEach(function(hh) {
        return r(k, hh);
      }), fn && hu(k, Be), Se;
    }
    function kn(k, w, L, Q) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ke:
            e: {
              for (var Se = L.key, ze = w; ze !== null; ) {
                if (ze.key === Se) {
                  if (Se = L.type, Se === He) {
                    if (ze.tag === 7) {
                      l(k, ze.sibling), w = c(ze, L.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (ze.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === kt && Nv(Se) === ze.type) {
                    l(k, ze.sibling), w = c(ze, L.props), w.ref = mu(k, ze, L), w.return = k, k = w;
                    break e;
                  }
                  l(k, ze);
                  break;
                } else r(k, ze);
                ze = ze.sibling;
              }
              L.type === He ? (w = el(L.props.children, k.mode, Q, L.key), w.return = k, k = w) : (Q = Hs(L.type, L.key, L.props, null, k.mode, Q), Q.ref = mu(k, w, L), Q.return = k, k = Q);
            }
            return m(k);
          case ft:
            e: {
              for (ze = L.key; w !== null; ) {
                if (w.key === ze) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(k, w.sibling), w = c(w, L.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = sf(L, k.mode, Q), w.return = k, k = w;
            }
            return m(k);
          case kt:
            return ze = L._init, kn(k, w, ze(L._payload), Q);
        }
        if (Kn(L)) return ge(k, w, L, Q);
        if (xe(L)) return Re(k, w, L, Q);
        Dc(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, L), w.return = k, k = w) : (l(k, w), w = Wd(L, k.mode, Q), w.return = k, k = w), m(k)) : l(k, w);
    }
    return kn;
  }
  var xn = yu(!0), ue = yu(!1), pa = Da(null), Xr = null, mo = null, yd = null;
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
  function mn(n, r) {
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
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, St & 2) {
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
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, E = $.lastBaseUpdate, E !== m && (E === null ? $.firstBaseUpdate = z : E.next = z, $.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, $ = z = T = null, E = d;
      do {
        var I = E.lane, de = E.eventTime;
        if ((o & I) === I) {
          $ !== null && ($ = $.next = {
            eventTime: de,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Re = E;
            switch (I = r, de = l, Re.tag) {
              case 1:
                if (ge = Re.payload, typeof ge == "function") {
                  W = ge.call(de, W, I);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Re.payload, I = typeof ge == "function" ? ge.call(de, W, I) : ge, I == null) break e;
                W = re({}, W, I);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else de = { eventTime: de, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, $ === null ? (z = $ = de, T = W) : $ = $.next = de, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = W;
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
  var fs = {}, wi = Da(fs), ds = Da(fs), ps = Da(fs);
  function Su(n) {
    if (n === fs) throw Error(A(174));
    return n;
  }
  function wd(n, r) {
    switch (_e(ps, r), _e(ds, n), _e(wi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    rn(wi), _e(wi, r);
  }
  function Eu() {
    rn(wi), rn(ds), rn(ps);
  }
  function Av(n) {
    Su(ps.current);
    var r = Su(wi.current), l = sa(r, n.type);
    r !== l && (_e(ds, n), _e(wi, l));
  }
  function Lc(n) {
    ds.current === n && (rn(wi), rn(ds));
  }
  var yn = Da(0);
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
  function Oe() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var st = he.ReactCurrentDispatcher, Ot = he.ReactCurrentBatchConfig, Wt = 0, Lt = null, Un = null, Zn = null, Nc = !1, hs = !1, Cu = 0, Y = 0;
  function _t() {
    throw Error(A(321));
  }
  function Fe(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Wt = d, Lt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, st.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(A(301));
        d += 1, Zn = Un = null, r.updateQueue = null, st.current = Kc, n = l(o, c);
      } while (hs);
    }
    if (st.current = bu, r = Un !== null && Un.next !== null, Wt = 0, Zn = Un = Lt = null, Nc = !1, r) throw Error(A(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? Lt.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function wn() {
    if (Un === null) {
      var n = Lt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Un.next;
    var r = Zn === null ? Lt.memoizedState : Zn.next;
    if (r !== null) Zn = r, Un = n;
    else {
      if (n === null) throw Error(A(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Zn === null ? Lt.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function qi(n, r) {
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
        if ((Wt & $) === $) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: $,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, Lt.lanes |= $, Di |= $;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (An = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Lt.lanes |= d, Di |= d, c = c.next;
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
    var l = Lt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, An = !0), o = o.queue, ms(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, jc.bind(null, l, o, c, r), void 0, null), Wn === null) throw Error(A(349));
      Wt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: n }, r.queue = n, n = n.dispatch = wu.bind(null, Lt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Lt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Lt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Un !== null) {
      var m = Un.memoizedState;
      if (d = m.destroy, o !== null && Fe(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Lt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Ic(n, r) {
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
  function $c(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, xu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fe(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return Wt & 21 ? (ei(l, r) || (l = qu(), Lt.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, An = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ot.transition;
    Ot.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, Ot.transition = o;
    }
  }
  function _d() {
    return wn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) jv(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Hn();
      zr(l, n, o, c), qt(l, r, o);
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
      l = Rd(n, r, c, o), l !== null && (c = Hn(), zr(l, n, o, c), qt(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === Lt || r !== null && r === Lt;
  }
  function jv(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function qt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Ma, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, Gc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: Yc, useImperativeHandle: function(n, r, l) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Lt, n), [o.memoizedState, n];
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
    var o = Lt, c = Rr();
    if (fn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(A(349));
      Wt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, jc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Wn.identifierPrefix;
    if (fn) {
      var l = xi, o = Ti;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Y++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Ma,
    useCallback: Qc,
    useContext: Ma,
    useEffect: ms,
    useImperativeHandle: $c,
    useInsertionEffect: Ic,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(qi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = wn();
      return bd(r, Un.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(qi)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Ma, useCallback: Qc, useContext: Ma, useEffect: ms, useImperativeHandle: $c, useInsertionEffect: Ic, useLayoutEffect: ys, useMemo: Wc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(qi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = wn();
    return Un === null ? r.memoizedState = n : bd(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(qi)[0], r = wn().memoizedState;
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
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Oi(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Oi(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Nn(r) ? Wr : En.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Nn(r) ? Wr : En.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && qc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
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
  function Dd(n, r, l) {
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
  var Zc = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xo || (xo = !0, Ou = o), Od(n, r);
    }, l;
  }
  function Ld(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
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
      o = n.pingCache = new Zc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Pv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = he.ReactCurrentOwner, An = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? ue(r, null, l, o) : xn(r, n.child, l, o);
  }
  function Jr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return mn(r, c), o = Nl(n, r, l, o, d, c), l = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (fn && l && bc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, qe(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
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
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, _e(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, _e(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, _e(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Nn(l) ? Wr : En.current;
    return d = Gr(r, d), mn(r, c), l = Nl(n, r, l, o, d, c), o = ni(), n !== null && !An ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (fn && o && bc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function Yv(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      Xn(r);
    } else d = !1;
    if (mn(r, c), r.stateNode === null) Na(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ma(z) : (z = Nn(l) ? Wr : En.current, z = Gr(r, z));
      var $ = l.getDerivedStateFromProps, W = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Hv(r, m, o, z), ha = !1;
      var I = r.memoizedState;
      m.state = I, cs(r, o, m, c), T = r.memoizedState, E !== o || I !== T || $n.current || ha ? (typeof $ == "function" && (kd(r, l, $, o), T = r.memoizedState), (E = ha || Fv(r, l, E, o, I, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ri(r.type, E), m.props = z, W = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Nn(l) ? Wr : En.current, T = Gr(r, T));
      var de = l.getDerivedStateFromProps;
      ($ = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== T) && Hv(r, m, o, T), ha = !1, I = r.memoizedState, m.state = I, cs(r, o, m, c);
      var ge = r.memoizedState;
      E !== W || I !== ge || $n.current || ha ? (typeof de == "function" && (kd(r, l, de, o), ge = r.memoizedState), (z = ha || Fv(r, l, z, o, I, ge, T) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
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
  function Iv(n, r, l, o, c) {
    return Ll(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Jc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = yn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), _e(yn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Vl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Jc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return $v(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Jc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Vl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && Gi(o), xn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function $v(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(A(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Vl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && xn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Jc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Dd(d, o, void 0), bs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, An || E) {
      if (o = Wn, o !== null) {
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
      return $d(), o = Dd(Error(A(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qr = Si(c.nextSibling), Kr = r, fn = !0, La = null, n !== null && (zn[Oa++] = Ti, zn[Oa++] = xi, zn[Oa++] = da, Ti = n.id, xi = n.overflow, da = r), r = Ud(r, o.children), r.flags |= 4096, r);
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
    if (ur(n, r, o.children, l), o = yn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (_e(yn, o), !(r.mode & 1)) r.memoizedState = null;
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
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes)) return null;
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
        _e(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (_e(yn, yn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (_e(yn, yn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        _e(yn, yn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), _e(yn, yn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, xs(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, jn, Qv, Wv;
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
  }, Qv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
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
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (et.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (et.hasOwnProperty(z) ? (T != null && z === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!fn) switch (n.tailMode) {
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
        return Jn(r), null;
      case 1:
        return Nn(r.type) && vo(), Jn(r), null;
      case 3:
        return o = r.stateNode, Eu(), rn($n), rn(En), Oe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Lu(La), La = null))), jn(n, r), Jn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Qv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Jn(r), null;
          }
          if (n = Su(wi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Ht(rs[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Pn(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                gr(o, d), Ht("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : et.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
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
              switch (m = qn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Ht(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = nr(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = Yn(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && te(n, T) : typeof T == "number" && te(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (et.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && ee(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), si(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ln(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + nt(o.value));
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
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = Su(ps.current), Su(wi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (rn(yn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && qr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ll(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ei] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || yn.current & 1 ? _n === 0 && (_n = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Eu(), jn(n, r), n === null && oo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return Sd(r.type._context), Jn(r), null;
      case 17:
        return Nn(r.type) && vo(), Jn(r), null;
      case 19:
        if (rn(yn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (_n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return _e(yn, yn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ke() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn) return Jn(r), null;
          } else 2 * Ke() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ke(), r.sibling = null, l = yn.current, _e(yn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
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
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Nn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), rn($n), rn(En), Oe(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (rn(yn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(yn), null;
      case 4:
        return Eu(), null;
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
  var Ds = !1, Tr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      dn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      dn(n, r, o);
    }
  }
  var Kv = !1;
  function qv(n, r) {
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
          var m = 0, E = -1, T = -1, z = 0, $ = 0, W = n, I = null;
          t: for (; ; ) {
            for (var de; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (de = W.firstChild) !== null; )
              I = W, W = de;
            for (; ; ) {
              if (W === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++$ === o && (T = m), (de = W.nextSibling) !== null) break;
              W = I, I = W.parentNode;
            }
            W = de;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, ba = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
    else for (; me !== null; ) {
      r = me;
      try {
        var ge = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ge !== null) {
              var Re = ge.memoizedProps, kn = ge.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Re : ri(r.type, Re), kn);
              k.__reactInternalSnapshotBeforeUpdate = w;
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
        dn(r, r.return, Q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
    }
    return ge = Kv, Kv = !1, ge;
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
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[ls], delete r[us], delete r[po], delete r[iy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var bn = null, Mr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) Xv(n, r, l), l = l.sibling;
  }
  function Xv(n, r, l) {
    if ($r && typeof $r.onCommitFiberUnmount == "function") try {
      $r.onCommitFiberUnmount(ml, l);
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
        bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Za(n)) : fo(bn, l.stateNode));
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
          dn(l, r, E);
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
        Xv(d, m, c), bn = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        dn(c, r, z);
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
          } catch (Re) {
            dn(n, n.return, Re);
          }
          try {
            Os(5, n, n.return);
          } catch (Re) {
            dn(n, n.return, Re);
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
            te(c, "");
          } catch (Re) {
            dn(n, n.return, Re);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), qn(E, m);
            var z = qn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var $ = T[m], W = T[m + 1];
              $ === "style" ? Jt(c, W) : $ === "dangerouslySetInnerHTML" ? ci(c, W) : $ === "children" ? te(c, W) : ee(c, $, W, z);
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
                var de = d.value;
                de != null ? Rn(c, !!d.multiple, de, !1) : I !== !!d.multiple && (d.defaultValue != null ? Rn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Rn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Re) {
            dn(n, n.return, Re);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Re) {
            dn(n, n.return, Re);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Re) {
          dn(n, n.return, Re);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Ke())), o & 4 && Zv(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (z = Tr) || $, ai(r, n), Tr = z) : ai(r, n), ea(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !$ && n.mode & 1) for (me = n, $ = n.child; $ !== null; ) {
            for (W = me = $; me !== null; ) {
              switch (I = me, de = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, I, I.return);
                  break;
                case 1:
                  Eo(I, I.return);
                  var ge = I.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                    } catch (Re) {
                      dn(o, l, Re);
                    }
                  }
                  break;
                case 5:
                  Eo(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Ns(W);
                    continue;
                  }
              }
              de !== null ? (de.return = I, me = de) : Ns(W);
            }
            $ = $.sibling;
          }
          e: for ($ = null, W = n; ; ) {
            if (W.tag === 5) {
              if ($ === null) {
                $ = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = At("display", m));
                } catch (Re) {
                  dn(n, n.return, Re);
                }
              }
            } else if (W.tag === 6) {
              if ($ === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Re) {
                dn(n, n.return, Re);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              $ === W && ($ = null), W = W.return;
            }
            $ === W && ($ = null), W.sibling.return = W.return, W = W.sibling;
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
            o.flags & 32 && (te(c, ""), o.flags &= -33);
            var d = Xi(n);
            ki(n, d, c);
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
        dn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    me = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = Ds;
          var z = Tr;
          if (Ds = m, (Tr = T) && !z) for (me = c; me !== null; ) m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, me = T) : Vd(c);
          for (; d !== null; ) me = d, Hd(d), d = d.sibling;
          me = c, Ds = E, Tr = z;
        }
        Jv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Jv(n);
    }
  }
  function Jv(n) {
    for (; me !== null; ) {
      var r = me;
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
                    var W = $.dehydrated;
                    W !== null && Za(W);
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
          dn(r, r.return, I);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Ns(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Vd(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              dn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                dn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              dn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              dn(r, m, T);
            }
        }
      } catch (T) {
        dn(r, r.return, T);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var sy = Math.ceil, Al = he.ReactCurrentDispatcher, Du = he.ReactCurrentOwner, or = he.ReactCurrentBatchConfig, St = 0, Wn = null, Fn = null, sr = 0, ma = 0, Co = Da(0), _n = 0, zs = null, Di = 0, Ro = 0, af = 0, Us = null, ta = null, Pd = 0, To = 1 / 0, ya = null, xo = !1, Ou = null, jl = null, lf = !1, Zi = null, As = 0, Fl = 0, wo = null, js = -1, xr = 0;
  function Hn() {
    return St & 6 ? Ke() : js !== -1 ? js : js = Ke();
  }
  function Oi(n) {
    return n.mode & 1 ? St & 2 && sr !== 0 ? sr & -sr : ly.transition !== null ? (xr === 0 && (xr = qu()), xr) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, wo = null, Error(A(185));
    Hi(n, l, o), (!(St & 2) || n !== Wn) && (n === Wn && (!(St & 2) && (Ro |= l), _n === 4 && ii(n, sr)), na(n, o), l === 1 && St === 0 && !(r.mode & 1) && (To = Ke() + 500, ho && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Xa(n, n === Wn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : wc(Bd.bind(null, n)), co(function() {
        !(St & 6) && Ri();
      }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = Ka;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
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
    if (js = -1, xr = 0, St & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Xa(n, n === Wn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = St;
      St |= 2;
      var d = th();
      (Wn !== n || sr !== r) && (ya = null, To = Ke() + 500, Ji(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      gd(), Al.current = d, St = c, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Fs(n, c))), r === 1) throw l = zs, Ji(n, 0), ii(n, o), na(n, Ke()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Fs(n, d))), r === 1)) throw l = zs, Ji(n, 0), ii(n, o), na(n, Ke()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Nu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Pd + 500 - Ke(), 10 < r)) {
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
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ke() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
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
    return n.current.memoizedState.isDehydrated && (Ji(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
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
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (St & 6) throw Error(A(327));
    bo();
    var r = Xa(n, 0);
    if (!(r & 1)) return na(n, Ke()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Fs(n, o));
    }
    if (l === 1) throw l = zs, Ji(n, 0), ii(n, r), na(n, Ke()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, ta, ya), na(n, Ke()), null;
  }
  function Yd(n, r) {
    var l = St;
    St |= 1;
    try {
      return n(r);
    } finally {
      St = l, St === 0 && (To = Ke() + 500, ho && Ri());
    }
  }
  function Mu(n) {
    Zi !== null && Zi.tag === 0 && !(St & 6) && bo();
    var r = St;
    St |= 1;
    var l = or.transition, o = Dt;
    try {
      if (or.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, or.transition = l, St = r, !(St & 6) && Ri();
    }
  }
  function Id() {
    ma = Co.current, rn(Co);
  }
  function Ji(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), rn($n), rn(En), Oe();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          rn(yn);
          break;
        case 19:
          rn(yn);
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
    if (Wn = n, Fn = n = Hl(n.current, null), sr = ma = r, _n = 0, zs = null, af = Ro = Di = 0, ta = Us = null, gu !== null) {
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
        if (gd(), st.current = bu, Nc) {
          for (var o = Lt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Wt = 0, Zn = Un = Lt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          _n = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, $ = E, W = $.tag;
            if (!($.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var I = $.alternate;
              I ? ($.updateQueue = I.updateQueue, $.memoizedState = I.memoizedState, $.lanes = I.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var de = Pv(m);
            if (de !== null) {
              de.flags &= -257, Ul(de, m, E, d, r), de.mode & 1 && Md(d, z, r), r = de, T = z;
              var ge = r.updateQueue;
              if (ge === null) {
                var Re = /* @__PURE__ */ new Set();
                Re.add(T), r.updateQueue = Re;
              } else ge.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Md(d, z, r), $d();
                break e;
              }
              T = Error(A(426));
            }
          } else if (fn && E.mode & 1) {
            var kn = Pv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Ul(kn, m, E, d, r), Gi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), _n !== 4 && (_n = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Vv(d, T, r);
                Uv(d, k);
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
      } catch (Se) {
        r = Se, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function $d() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || !(Di & 268435455) && !(Ro & 268435455) || ii(Wn, sr);
  }
  function of(n, r) {
    var l = St;
    St |= 2;
    var o = th();
    (Wn !== n || sr !== r) && (ya = null, Ji(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (gd(), St = l, Al.current = o, Fn !== null) throw Error(A(261));
    return Wn = null, sr = 0, _n;
  }
  function fy() {
    for (; Fn !== null; ) rh(Fn);
  }
  function nh() {
    for (; Fn !== null && !Wa(); ) rh(Fn);
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
  function Nu(n, r, l) {
    var o = Dt, c = or.transition;
    try {
      or.transition = null, Dt = 1, dy(n, r, l, o);
    } finally {
      or.transition = c, Dt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      bo();
    while (Zi !== null);
    if (St & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qf(n, d), n === Wn && (Fn = Wn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, sh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Dt;
      Dt = 1;
      var E = St;
      St |= 4, Du.current = null, qv(n, l), Fd(l, n), lo(pu), ba = !!is, pu = is = null, n.current = l, oy(l), Ga(), St = E, Dt = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Zi = n, As = c), d = n.pendingLanes, d === 0 && (jl = null), $o(l.stateNode), na(n, Ke()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xo) throw xo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === wo ? Fl++ : (Fl = 0, wo = n) : Fl = 0, Ri(), null;
  }
  function bo() {
    if (Zi !== null) {
      var n = Zu(As), r = or.transition, l = Dt;
      try {
        if (or.transition = null, Dt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, As = 0, St & 6) throw Error(A(331));
          var c = St;
          for (St |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (me = z; me !== null; ) {
                    var $ = me;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, $, d);
                    }
                    var W = $.child;
                    if (W !== null) W.return = $, me = W;
                    else for (; me !== null; ) {
                      $ = me;
                      var I = $.sibling, de = $.return;
                      if (rf($), $ === z) {
                        me = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = de, me = I;
                        break;
                      }
                      me = de;
                    }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Re = ge.child;
                  if (Re !== null) {
                    ge.child = null;
                    do {
                      var kn = Re.sibling;
                      Re.sibling = null, Re = kn;
                    } while (Re !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, me = m;
            else e: for (; me !== null; ) {
              if (d = me, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, me = k;
                break e;
              }
              me = d.return;
            }
          }
          var w = n.current;
          for (me = w; me !== null; ) {
            m = me;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, me = L;
            else e: for (m = w; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (Se) {
                dn(E, E.return, Se);
              }
              if (E === m) {
                me = null;
                break e;
              }
              var Q = E.sibling;
              if (Q !== null) {
                Q.return = E.return, me = Q;
                break e;
              }
              me = E.return;
            }
          }
          if (St = c, Ri(), $r && typeof $r.onPostCommitFiberRoot == "function") try {
            $r.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, or.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = _u(l, r), r = Vv(n, r, 1), n = Ml(n, r, 1), r = Hn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function dn(n, r, l) {
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
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > Ke() - Pd ? Ji(n, 0) : af |= l), na(n, r);
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || $n.current) An = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return An = !1, _s(n, r, l);
      An = !!(n.flags & 131072);
    }
    else An = !1, fn && r.flags & 1048576 && Lv(r, Wi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Na(n, r), n = r.pendingProps;
        var c = Gr(r, En.current);
        mn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, Xn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = qc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = ws(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && bc(r), ur(null, r, c, l), r = r.child), r;
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
              r = ku(null, r, o, ri(o.type, n), l);
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
          if (So(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(A(423)), r), r = Iv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(A(424)), r), r = Iv(n, r, o, l, c);
            break e;
          } else for (qr = Si(r.stateNode.containerInfo.firstChild), Kr = r, fn = !0, La = null, l = ue(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Jr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, _e(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !$n.current) {
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
                    T = Ki(-1, l & -l), T.tag = 2;
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
        return c = r.type, o = r.pendingProps.children, mn(r, l), c = Ma(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), ku(n, r, o, c, l);
      case 15:
        return qe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Nn(o) ? (n = !0, Xn(r)) : n = !1, mn(r, l), Xc(r, o, c), Rs(r, o, c, l), ws(null, r, o, !0, n, l);
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
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wt) return 11;
      if (n === bt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return el(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Ft:
        return n = Aa(12, l, r, c | 2), n.elementType = Ft, n.lanes = d, n;
      case Le:
        return n = Aa(13, l, r, c), n.elementType = Le, n.lanes = d, n;
      case Ut:
        return n = Aa(19, l, r, c), n.elementType = Ut, n.lanes = d, n;
      case Te:
        return Vl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Zt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case wt:
            m = 11;
            break e;
          case bt:
            m = 14;
            break e;
          case kt:
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
  function Vl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Te, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wd(n, r, l) {
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
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ft, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
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
      if (Nn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = Gd(null), l = n.current, o = Hn(), c = Oi(l), d = Ki(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Hn(), m = Oi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
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
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function dh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function qd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = qd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = qd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        ff(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ie();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && Go(n);
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
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = df(m);
          d.call(z);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[$i] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
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
    return n._reactRootContainer = T, n[$i] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
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
    } else m = gy(l, r, n, c, o);
    return df(m);
  }
  Rt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qa(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), na(r, Ke()), !(St & 6) && (To = Ke() + 500, Ri()));
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
  }, Qo = function(n) {
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
    return Dt;
  }, Ju = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = hn(o);
              if (!c) throw Error(A(90));
              wr(o), Ir(o, c);
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
  }, eu = Yd, pl = Mu;
  var Sy = { usingClientEntryPoint: !1, Events: [De, ti, hn, Fi, Jl, Yd] }, Ps = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Ps.bundleType, version: Ps.version, rendererPackageName: Ps.rendererPackageName, rendererConfig: Ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ps.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      ml = Pl.inject(vh), $r = Pl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(A(200));
    return yy(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(A(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new qd(r);
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
    return Vs(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l ?? null, c, !1, d, m), n[$i] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return Vs(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Mu(function() {
      Vs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Yd, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return Vs(n, r, l, !1, o);
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
function tk() {
  return nT || (nT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var X = dl, Z = lT(), A = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, jt = !1;
    function et(e) {
      jt = e;
    }
    function yt(e) {
      if (!jt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xt("warn", e, a);
      }
    }
    function S(e) {
      if (!jt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xt("error", e, a);
      }
    }
    function xt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var fe = 0, se = 1, Xe = 2, J = 3, Ce = 4, le = 5, Ye = 6, vt = 7, ct = 8, Xt = 9, it = 10, ee = 11, he = 12, ke = 13, ft = 14, He = 15, an = 16, Ft = 17, Zt = 18, ln = 19, wt = 21, Le = 22, Ut = 23, bt = 24, kt = 25, Te = !0, q = !1, xe = !1, re = !1, _ = !1, V = !0, Ve = !0, je = !0, lt = !0, tt = /* @__PURE__ */ new Set(), Ze = {}, nt = {};
    function ut(e, t) {
      Pt(e, t), Pt(e + "Capture", t);
    }
    function Pt(e, t) {
      Ze[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ze[e] = t;
      {
        var a = e.toLowerCase();
        nt[a] = e, e === "onDoubleClick" && (nt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
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
    function Ir(e) {
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
    function Kn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    function Rn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cn(e)), Pn(e);
    }
    var Yn = 0, gr = 1, Ia = 2, Ln = 3, Sr = 4, sa = 5, $a = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", te = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", we = new RegExp("^[" + ci + "][" + te + "]*$"), rt = {}, At = {};
    function Jt(e) {
      return wr.call(At, e) ? !0 : wr.call(rt, e) ? !1 : we.test(e) ? (At[e] = !0, !0) : (rt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
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
    function qn(e, t, a, i) {
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
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function en(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function Bt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === Ln || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
      Yt[e] = new Bt(
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
      Yt[t] = new Bt(
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
      Yt[e] = new Bt(
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
      Yt[e] = new Bt(
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
      Yt[e] = new Bt(
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
      Yt[e] = new Bt(
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
      Yt[e] = new Bt(
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
      Yt[e] = new Bt(
        e,
        $a,
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
      Yt[e] = new Bt(
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
      Yt[t] = new Bt(
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
      Yt[t] = new Bt(
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
      Yt[t] = new Bt(
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
      Yt[e] = new Bt(
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
    Yt[Fi] = new Bt(
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
      Yt[e] = new Bt(
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
    var Jl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Jl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
            return p === "" ? !0 : qn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (qn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ln)
            return a;
          f = e.getAttribute(s);
        }
        return qn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
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
      if (!pn(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
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
          var b = u.type, x;
          b === Ln || b === Sr && a === !0 ? x = "" : (Bn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), Ge = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), tn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Wa = Symbol.iterator, Ga = "@@iterator";
    function Ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wa && e[Wa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var Je = Object.assign, Ka = 0, nu, ru, hl, Wu, ml, $r, $o;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function lc() {
      {
        if (Ka === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Wu = console.error, ml = console.group, $r = console.groupCollapsed, $o = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
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
        Ka++;
      }
    }
    function uc() {
      {
        if (Ka--, Ka === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, e, {
              value: nu
            }),
            info: Je({}, e, {
              value: ru
            }),
            warn: Je({}, e, {
              value: hl
            }),
            error: Je({}, e, {
              value: Wu
            }),
            group: Je({}, e, {
              value: ml
            }),
            groupCollapsed: Je({}, e, {
              value: $r
            }),
            groupEnd: Je({}, e, {
              value: $o
            })
          });
        }
        Ka < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var qa = !1, Xa;
    {
      var Ku = typeof WeakMap == "function" ? WeakMap : Map;
      Xa = new Ku();
    }
    function au(e, t) {
      if (!e || qa)
        return "";
      {
        var a = Xa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      qa = !0;
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
        qa = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? fa(x) : "";
      return typeof e == "function" && Xa.set(e, M), M;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function qu(e, t, a) {
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
        case ie:
          return fa("Suspense");
        case ye:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return qu(e.render);
          case Ge:
            return Hi(e.type, t, a);
          case $e: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return fa(e.type);
        case an:
          return fa("Lazy");
        case ke:
          return fa("Suspense");
        case ln:
          return fa("SuspenseList");
        case fe:
        case Xe:
        case He:
          return qu(e.type);
        case ee:
          return qu(e.type.render);
        case se:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Qf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Dt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zu(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
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
        case Qa:
          return "StrictMode";
        case ie:
          return "Suspense";
        case ye:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Zu(t) + ".Consumer";
          case pi:
            var a = e;
            return Zu(a._context) + ".Provider";
          case B:
            return Dt(e, e.render, "ForwardRef");
          case Ge:
            var i = e.displayName || null;
            return i !== null ? i : Rt(e.type) || "Memo";
          case $e: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Rt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case bt:
          return "Cache";
        case Xt:
          var i = a;
          return vi(i) + ".Consumer";
        case it:
          var u = a;
          return vi(u._context) + ".Provider";
        case Zt:
          return "DehydratedFragment";
        case ee:
          return Qo(a, a.render, "ForwardRef");
        case vt:
          return "Fragment";
        case le:
          return a;
        case Ce:
          return "Portal";
        case J:
          return "Root";
        case Ye:
          return "Text";
        case an:
          return Rt(a);
        case ct:
          return a === Qa ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case he:
          return "Profiler";
        case wt:
          return "Scope";
        case ke:
          return "Suspense";
        case ln:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case se:
        case fe:
        case Ft:
        case Xe:
        case ft:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ju = A.ReactDebugCurrentFrame, ir = null, hi = !1;
    function Dr() {
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
    function sn() {
      Ju.getCurrentStack = null, ir = null, hi = !1;
    }
    function It(e) {
      Ju.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function Sl() {
      return ir;
    }
    function In(e) {
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
    function Wo(e, t) {
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
    function Wf(e) {
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
    function Za(e) {
      El(e) || (e._valueTracker = wa(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wf(e);
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
      var a = e, i = t.checked, u = Je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ja(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0);
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
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ba(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var ae = !1, Ue = !1, pt = !1;
    function Tt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? X.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ue || (Ue = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ae && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ae = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", Or(xa(t.value)));
    }
    var $t = Array.isArray;
    function at(e) {
      return $t(e);
    }
    var Qt;
    Qt = !1;
    function vn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function Ko(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = at(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, vn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, vn());
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
    function qo(e, t) {
      return Je({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
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
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (at(u)) {
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
    }, sc, iv = av(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Yi = 3, Mn = 8, Ii = 9, nd = 11, ao = function(e, t) {
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
    }, Zo = {
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
    Object.keys(Zo).forEach(function(e) {
      uv.forEach(function(t) {
        Zo[lv(t, e)] = Zo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function io(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var Km = /^(?:webkit|moz|o)[A-Z]/, qm = /^-ms-/, fv = /-(.)/g, rd = /;\s*$/, gi = {}, su = {}, dv = !1, Jo = !1, Xm = function(e) {
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
          Xm(e.replace(qm, "ms-"))
        ));
      }, ad = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Jo || (Jo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
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
    }, es = Je({
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
    }, lo = {}, ty = new RegExp("^(aria)-[" + te + "]*$"), uo = new RegExp("^(aria)[A-Z][" + te + "]*$");
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
        if (ty.test(t)) {
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
      var lr = {}, sd = /^on./, vc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + te + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + te + "]*$");
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
        var v = en(t), y = v !== null && v.type === Yn;
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
    function ny(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ry() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var mc = null, du = null, Ht = null;
    function yc(e) {
      var t = Do(e);
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
      du ? Ht ? Ht.push(e) : Ht = [e] : du = e;
    }
    function xv() {
      return du !== null || Ht !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Ht;
        if (du = null, Ht = null, yc(e), t)
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
    function ay(e, t, a) {
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
          pd.removeEventListener(H, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var oe = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          b = !0, F(), a.apply(i, oe), x = !1;
        }
        var be, Ct = !1, ht = !1;
        function D(O) {
          if (be = O.error, Ct = !0, be === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(H, Ne, !1), g.initEvent(H, !1, !1), pd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && x && (Ct ? ht && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", D), !b)
          return F(), Cc.apply(this, arguments);
      };
    }
    var kv = Rc, co = !1, Tc = null, fo = !1, Si = null, Dv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, kv.apply(Dv, arguments);
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
    function $i() {
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
    function iy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var De = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), hn = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), _e = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), $n = (
      /*                     */
      1024
    ), Wr = (
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
    ), Qi = (
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
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      gt | $n | 0
    ), Dl = hn | gt | ka | Da | En | Gr | Nn, Ol = gt | rn | En | Nn, Wi = Wr | ka, zn = Qi | wc | ho, Oa = A.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (hn | Gr)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function Ti(e) {
      if (e.tag === ke) {
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
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function Lv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === se) {
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
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = _c(e);
      return t !== null ? qr(t) : null;
    }
    function qr(e) {
      if (e.tag === le || e.tag === Ye)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = qr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function fn(e) {
      var t = _c(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === le || e.tag === Ye)
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
    var vd = Z.unstable_scheduleCallback, Mv = Z.unstable_cancelCallback, hd = Z.unstable_shouldYield, md = Z.unstable_requestPaint, Qn = Z.unstable_now, kc = Z.unstable_getCurrentPriorityLevel, ss = Z.unstable_ImmediatePriority, Ll = Z.unstable_UserBlockingPriority, Gi = Z.unstable_NormalPriority, ly = Z.unstable_LowPriority, mu = Z.unstable_IdlePriority, Dc = Z.unstable_yieldValue, Nv = Z.unstable_setDisableYieldValue, yu = null, xn = null, ue = null, pa = !1, Xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = Je({}, e, {
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
          var a = (e.current.flags & _e) === _e;
          if (je) {
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
    function mn(e) {
      if (typeof Dc == "function" && (Nv(e), et(e)), xn && typeof xn.setStrictMode == "function")
        try {
          xn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      ue = e;
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
    function Ki(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
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
    function Su(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function wd() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function Eu(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function Av() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Lc() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function yn(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Mc(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var Oe = (
      /*                         */
      0
    ), st = (
      /*                 */
      1
    ), Ot = (
      /*                    */
      2
    ), Wt = (
      /*               */
      8
    ), Lt = (
      /*              */
      16
    ), Un = Math.clz32 ? Math.clz32 : hs, Zn = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Nc | 0) | 0;
    }
    var Cu = 31, Y = (
      /*                        */
      0
    ), _t = (
      /*                          */
      0
    ), Fe = (
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
    ), qi = (
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
    ), Vc = (
      /*                        */
      8192
    ), Pc = (
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
    ), Yc = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), xu = (
      /*                             */
      4194304
    ), $c = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
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
    ), Zr = (
      /*                   */
      1073741824
    );
    function jv(e) {
      {
        if (e & Fe)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & qi)
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
        if (e & Zr)
          return "Offscreen";
      }
    }
    var qt = -1, bu = Ru, Gc = xu;
    function Cs(e) {
      switch (Ul(e)) {
        case Fe:
          return Fe;
        case Nl:
          return Nl;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case qi:
          return qi;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Yc:
        case ms:
        case Ic:
          return e & zl;
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case wu:
          return wu;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Kc(e, t) {
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
          var F = An(U), oe = 1 << F;
          i |= M[F], U &= ~oe;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var u = An(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case Fe:
        case Nl:
        case ni:
          return t + 250;
        case Rr:
        case wn:
        case qi:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case jc:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Yc:
        case ms:
        case Ic:
          return t + 5e3;
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          return qt;
        case Ss:
        case Es:
        case wu:
        case Zr:
          return qt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function qc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p, y = s[p];
        y === qt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== Y ? t : t & Zr ? Zr : Y;
    }
    function Hv(e) {
      return (e & Fe) !== Y;
    }
    function Rs(e) {
      return (e & _d) !== Y;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Dd(e) {
      var t = Fe | ni | wn;
      return (e & t) === Y;
    }
    function Od(e) {
      return (e & zl) === e;
    }
    function Zc(e, t) {
      var a = Nl | ni | Rr | wn;
      return (t & a) !== Y;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & zl) !== Y;
    }
    function Md() {
      var e = bu;
      return bu <<= 1, (bu & zl) === Y && (bu = Ru), e;
    }
    function Pv() {
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
    function Jr(e, t) {
      return (e & t) !== Y;
    }
    function ku(e, t) {
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
    function Yv(e, t) {
      return e !== _t && e < t ? e : t;
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
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = An(i), s = 1 << u;
        a[u] = qt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = An(f), v = 1 << p;
        i[p] = Y, u[p] = qt, s[p] = qt, f &= ~v;
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
        case Vc:
        case Pc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case Yc:
        case ms:
        case Ic:
        case xu:
        case $c:
        case gs:
        case Qc:
        case Wc:
          i = qi;
          break;
        case wu:
          i = Es;
          break;
        default:
          i = _t;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== _t ? _t : i;
    }
    function bs(e, t, a) {
      if (Xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function $v(e, t) {
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
    var Lr = Fe, bi = ni, Na = wn, za = wu, _s = _t;
    function Ua() {
      return _s;
    }
    function jn(e) {
      _s = e;
    }
    function Qv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Wv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = Ul(e);
      return Jn(Lr, t) ? Jn(bi, t) ? Rs(t) ? Na : za : bi : Lr;
    }
    function tf(e) {
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
    var me;
    function Eo(e) {
      me = e;
    }
    var nf;
    function Kv(e) {
      nf = e;
    }
    var qv;
    function Os(e) {
      qv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Xi = null, _i = null, ki = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Xv = [
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
          ki = null;
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
          p !== null && me(p);
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
          return Xi = ea(Xi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
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
      var t = Is(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ke) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === J) {
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
    function Jv(e) {
      for (var t = qv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Jn(t, Nr[i].priority); i++)
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
          ny(s), u.target.dispatchEvent(s), ry();
        } else {
          var f = Do(i);
          return f !== null && me(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function sy() {
      rf = !1, Xi !== null && Ns(Xi) && (Xi = null), _i !== null && Ns(_i) && (_i = null), ki !== null && Ns(ki) && (ki = null), bn.forEach(Vd), Mr.forEach(Vd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, sy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Al(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && Al(Xi, e), _i !== null && Al(_i, e), ki !== null && Al(ki, e);
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
    var or = A.ReactCurrentBatchConfig, St = !0;
    function Wn(e) {
      St = !!e;
    }
    function Fn() {
      return St;
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
      St && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        by(e, t, i, Di, a), Fd(e, i);
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
          var f = Ro(e, t, a, i);
          if (f === null && by(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Di = null;
    function Ro(e, t, a, i) {
      Di = null;
      var u = dd(i), s = Is(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ke) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (tf(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
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
          var t = kc();
          switch (t) {
            case ss:
              return Lr;
            case Ll:
              return bi;
            case Gi:
            case ly:
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
    var ya = null, xo = null, Ou = null;
    function jl(e) {
      return ya = e, xo = As(), !0;
    }
    function lf() {
      ya = null, xo = null, Ou = null;
    }
    function Zi() {
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
      return Je(t.prototype, {
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
    }, Oi = xr(Hn), zr = Je({}, Hn, {
      view: 0,
      detail: 0
    }), na = xr(zr), uf, Fs, Lu;
    function cy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, Fs = e.screenY - Lu.screenY) : (uf = 0, Fs = 0), Lu = e);
    }
    var ii = Je({}, zr, {
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
      getModifierState: dn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), Bd = xr(ii), Yd = Je({}, ii, {
      dataTransfer: 0
    }), Mu = xr(Yd), Id = Je({}, zr, {
      relatedTarget: 0
    }), Ji = xr(Id), eh = Je({}, Hn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = xr(eh), $d = Je({}, Hn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = xr($d), fy = Je({}, Hn, {
      data: 0
    }), nh = xr(fy), rh = nh, ah = {
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
    function dy(e) {
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
    function dn(e) {
      return ih;
    }
    var py = Je({}, zr, {
      key: dy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dn,
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
    }), lh = xr(py), vy = Je({}, ii, {
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
    }), uh = xr(vy), oh = Je({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dn
    }), sh = xr(oh), hy = Je({}, Hn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = xr(hy), Qd = Je({}, ii, {
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
    }), my = xr(Qd), Hl = [9, 13, 27, 32], Hs = 229, el = On && "CompositionEvent" in window, Vl = null;
    On && "documentMode" in document && (Vl = document.documentMode);
    var Wd = On && "TextEvent" in window && !Vl, sf = On && (!el || Vl && Vl > 8 && Vl <= 11), ch = 32, cf = String.fromCharCode(ch);
    function yy() {
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
    function Kd(e, t) {
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
    function qd(e, t, a, i, u) {
      var s, f;
      if (el ? s = ff(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !dh(i) && (!zu && s === "onCompositionStart" ? zu = jl(u) : s === "onCompositionEnd" && zu && (f = Zi()));
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
        if (e === "compositionend" || !el && Kd(e, t)) {
          var a = Zi();
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
      if (Wd ? s = vf(t, i) : s = Xd(t, i), !s)
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
      qd(e, t, a, i, u), hf(e, t, a, i, u);
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
    function Vs(e) {
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
      var t = Cf(e);
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
    function $(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function W(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function I(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function de(e, t) {
      if (e === "click")
        return c(t);
    }
    function ge(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Re(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Vs(p) ? m ? v = ge : (v = W, y = $) : I(p) && (v = de), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Re(p);
    }
    function k() {
      Pt("onMouseEnter", ["mouseout", "mouseover"]), Pt("onMouseLeave", ["mouseout", "mouseover"]), Pt("onPointerEnter", ["pointerout", "pointerover"]), Pt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function w(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || fp(y)))
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
          if (x = a, M = U ? Is(U) : null, M !== null) {
            var F = da(M);
            (M !== F || M.tag !== le && M.tag !== Ye) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var oe = Bd, Ne = "onMouseLeave", be = "onMouseEnter", Ct = "mouse";
          (t === "pointerout" || t === "pointerover") && (oe = uh, Ne = "onPointerLeave", be = "onPointerEnter", Ct = "pointer");
          var ht = x == null ? g : Cf(x), D = M == null ? g : Cf(M), H = new oe(Ne, Ct + "leave", x, i, u);
          H.target = ht, H.relatedTarget = D;
          var O = null, G = Is(u);
          if (G === a) {
            var ve = new oe(be, Ct + "enter", M, i, u);
            ve.target = D, ve.relatedTarget = ht, O = ve;
          }
          bT(e, H, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Q = typeof Object.is == "function" ? Object.is : L;
    function Se(e, t) {
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
    function ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ae(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Be(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze(Ae(a));
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
      return Mt(e, u, s, f, p);
    }
    function Mt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
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
        var y = Be(e, f), g = Be(e, p);
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
    function oT(e) {
      return e && e.ownerDocument && mE(e.ownerDocument.documentElement, e);
    }
    function sT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function yE() {
      for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
        if (sT(t))
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
    function cT() {
      var e = yE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? dT(e) : null
      };
    }
    function fT(e) {
      var t = yE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && oT(a)) {
        i !== null && Ey(a) && pT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
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
    function dT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function pT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var vT = On && "documentMode" in document && document.documentMode <= 11;
    function hT() {
      ut("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Cy = null, Zd = null, Ry = !1;
    function mT(e) {
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
    function yT(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function gE(e, t, a) {
      var i = yT(a);
      if (!(Ry || mf == null || mf !== ba(i))) {
        var u = mT(mf);
        if (!Zd || !Se(Zd, u)) {
          Zd = u;
          var s = Sh(Cy, "onSelect");
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
    function gT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Vs(p) || p.contentEditable === "true") && (mf = p, Cy = a, Zd = null);
          break;
        case "focusout":
          mf = null, Cy = null, Zd = null;
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
          if (vT)
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
    var yf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, Ty = {}, SE = {};
    On && (SE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function yh(e) {
      if (Ty[e])
        return Ty[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in SE)
          return Ty[e] = t[a];
      return e;
    }
    var EE = yh("animationend"), CE = yh("animationiteration"), RE = yh("animationstart"), TE = yh("transitionend"), xE = /* @__PURE__ */ new Map(), wE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      xE.set(e, t), ut(t, [e]);
    }
    function ST() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(EE, "onAnimationEnd"), _o(CE, "onAnimationIteration"), _o(RE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(TE, "onTransitionEnd");
    }
    function ET(e, t, a, i, u, s, f) {
      var p = xE.get(t);
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
            v = Mu;
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
          t === "scroll", x = xT(a, p, i.type, g, b);
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
    ST(), k(), Ps(), hT(), yy();
    function CT(e, t, a, i, u, s, f) {
      ET(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (w(e, t, a, i, u), kn(e, t, a, i, u), gT(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function bE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function RT(e, t, a) {
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
          var g = t[y], b = g.instance, x = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          bE(e, M, x), i = b;
        }
    }
    function _E(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      ls();
    }
    function TT(e, t, a, i, u) {
      var s = dd(a), f = [];
      CT(f, e, i, a, s, t), _E(f, t);
    }
    function gn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Jx(t), u = _T(e);
      i.has(u) || (kE(t, e, hc, a), i.add(u));
    }
    function wy(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), kE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[gh]) {
        e[gh] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function kE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Pd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === Ce) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === Ce)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === J || b === Ce) {
                    var x = g.stateNode.containerInfo;
                    if (DE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Is(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === le || U === Ye) {
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
        return TT(e, t, a, s);
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
        var b = y, x = b.stateNode, M = b.tag;
        if (M === le && x !== null && (g = x, p !== null)) {
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
        if (p === le && f !== null) {
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
      while (e && e.tag !== le);
      return e || null;
    }
    function wT(e, t) {
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
    function OE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === le && g !== null) {
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
    function bT(e, t, a, i, u) {
      var s = i && u ? wT(i, u) : null;
      i !== null && OE(e, t, i, s, !1), u !== null && a !== null && OE(e, a, u, s, !0);
    }
    function _T(e, t) {
      return e + "__bubble";
    }
    var ja = !1, np = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", LE = "autoFocus", Bs = "children", Ys = "style", Ch = "__html", _y, Rh, rp, ME, Th, NE, zE;
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
      ud(e, t), pc(e, t), Tv(e, t, {
        registrationNameDependencies: Ze,
        possibleRegistrationNames: nt
      });
    }, NE = On && !document.documentMode, rp = function(e, t, a) {
      if (!ja) {
        var i = xh(a), u = xh(t);
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
    var kT = /\r\n?/g, DT = /\u0000|\uFFFD/g;
    function xh(e) {
      Kn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kT, `
`).replace(DT, "");
    }
    function wh(e, t, a, i) {
      var u = xh(t), s = xh(e);
      if (s !== u && (i && (ja || (ja = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Te))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function UE(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function OT() {
    }
    function bh(e) {
      e.onclick = OT;
    }
    function LT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ys)
            f && Object.freeze(f), yv(t, f);
          else if (s === np) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Eh || s === ko || s === LE || (Ze.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && gn("scroll", t)) : f != null && br(t, s, f, u));
        }
    }
    function MT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ys ? yv(e, f) : s === np ? iv(e, f) : s === Bs ? ao(e, f) : br(e, s, f, i);
      }
    }
    function NT(e, t, a, i) {
      var u, s = UE(a), f, p = i;
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
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zT(e, t) {
      return UE(t).createTextNode(e);
    }
    function UT(e, t, a, i) {
      var u = Tl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gn("cancel", e), gn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            gn(Jd[f], e);
          s = a;
          break;
        case "source":
          gn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e), s = a;
          break;
        case "details":
          gn("toggle", e), s = a;
          break;
        case "input":
          Ja(e, a), s = ro(e, a), gn("invalid", e);
          break;
        case "option":
          Tt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = qo(e, a), gn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), s = qf(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), LT(t, e, i, s, u), t) {
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
    function AT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), p = qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ys) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Bs || v === Eh || v === ko || v === LE || (Ze.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Ys)
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
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Eh || v === ko || (Ze.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Th(v, x), v === "onScroll" && gn("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (ey(g, p[Ys]), (s = s || []).push(Ys, g)), s;
    }
    function jT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (MT(e, t, s, f), a) {
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
    function FT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function HT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Rh(t, a), t) {
        case "dialog":
          gn("cancel", e), gn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            gn(Jd[y], e);
          break;
        case "source":
          gn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e);
          break;
        case "details":
          gn("toggle", e);
          break;
        case "input":
          Ja(e, a), gn("invalid", e);
          break;
        case "option":
          Tt(e, a);
          break;
        case "select":
          ou(e, a), gn("invalid", e);
          break;
        case "textarea":
          Xf(e, a), gn("invalid", e);
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
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && wh(e.textContent, F, s, f), M = [Bs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && wh(e.textContent, F, s, f), M = [Bs, "" + F]);
          else if (Ze.hasOwnProperty(U))
            F != null && (typeof F != "function" && Th(U, F), U === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var oe = void 0, Ne = en(U);
            if (a[ko] !== !0) {
              if (!(U === Eh || U === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === np) {
                  var be = e.innerHTML, Ct = F ? F[Ch] : void 0;
                  if (Ct != null) {
                    var ht = zE(e, Ct);
                    ht !== be && rp(U, be, ht);
                  }
                } else if (U === Ys) {
                  if (v.delete(U), NE) {
                    var D = Zm(F);
                    oe = e.getAttribute("style"), D !== oe && rp(U, oe, D);
                  }
                } else if (p && !_)
                  v.delete(U.toLowerCase()), oe = tu(e, U, F), F !== oe && rp(U, oe, F);
                else if (!pn(U, Ne, p) && !qn(U, F, Ne, p)) {
                  var H = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), oe = vl(e, U, F, Ne);
                  else {
                    var O = i;
                    if (O === Bi && (O = ed(t)), O === Bi)
                      v.delete(U.toLowerCase());
                    else {
                      var G = FT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    oe = tu(e, U, F);
                  }
                  var ve = _;
                  !ve && F !== oe && !H && rp(U, oe, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && ME(v), t) {
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
    function ky(e, t) {
      {
        if (ja)
          return;
        ja = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
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
    function PT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var BT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], AE = [
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
      ], YT = AE.concat(["button"]), IT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], jE = {
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
        var a = Je({}, e || jE), i = {
          tag: t
        };
        return AE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), YT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), BT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
            return IT.indexOf(t) === -1;
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
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", lp = "$?", up = "$!", WT = "style", My = null, Ny = null;
    function GT(e) {
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
    function KT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function lk(e) {
      return e;
    }
    function qT(e) {
      My = Fn(), Ny = cT();
      var t = null;
      return Wn(!1), t;
    }
    function XT(e) {
      fT(Ny), Wn(My), My = null, Ny = null;
    }
    function ZT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = NT(e, t, a, s);
      return cp(u, y), Py(y, t), y;
    }
    function JT(e, t) {
      e.appendChild(t);
    }
    function ex(e, t, a, i, u) {
      switch (UT(e, t, a, i), t) {
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
    function tx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return AT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function nx(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = zT(e, t);
      return cp(i, s), s;
    }
    function rx() {
      var e = window.event;
      return e === void 0 ? Na : af(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, ax = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, HE = typeof Promise == "function" ? Promise : void 0, ix = typeof queueMicrotask == "function" ? queueMicrotask : typeof HE < "u" ? function(e) {
      return HE.resolve(null).then(e).catch(lx);
    } : Uy;
    function lx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ux(e, t, a, i) {
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
    function ox(e, t, a, i, u, s) {
      jT(e, t, a, i, u), Py(e, u);
    }
    function VE(e) {
      ao(e, "");
    }
    function sx(e, t, a) {
      e.nodeValue = a;
    }
    function cx(e, t) {
      e.appendChild(t);
    }
    function fx(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function dx(e, t, a) {
      e.insertBefore(t, a);
    }
    function px(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function vx(e, t) {
      e.removeChild(t);
    }
    function hx(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === kh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function mx(e, t) {
      e.nodeType === Mn ? jy(e.parentNode, t) : e.nodeType === Qr && jy(e, t), Du(e);
    }
    function yx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function gx(e) {
      e.nodeValue = "";
    }
    function Sx(e, t) {
      e = e;
      var a = t[WT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Ex(e, t) {
      e.nodeValue = t;
    }
    function Cx(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function Rx(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Tx(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function xx(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function PE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function wx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function bx(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Yi)
          break;
        if (t === Mn) {
          var a = e.data;
          if (a === kh || a === up || a === lp)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Oh(e.nextSibling);
    }
    function _x(e) {
      return Oh(e.firstChild);
    }
    function kx(e) {
      return Oh(e.firstChild);
    }
    function Dx(e) {
      return Oh(e.nextSibling);
    }
    function Ox(e, t, a, i, u, s, f) {
      cp(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & st) !== Oe;
      return HT(e, t, a, p, i, y, f);
    }
    function Lx(e, t, a, i) {
      return cp(a, e), a.mode & st, VT(e, t);
    }
    function Mx(e, t) {
      cp(t, e);
    }
    function Nx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === kh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function BE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
          var i = t.data;
          if (i === kh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function zx(e) {
      Du(e);
    }
    function Ux(e) {
      Du(e);
    }
    function Ax(e) {
      return e !== "head" && e !== "body";
    }
    function jx(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function Fx(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function Hx(e, t) {
      t.nodeType === Qr ? ky(e, t) : t.nodeType === Mn || Dy(e, t);
    }
    function Vx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? ky(a, t) : t.nodeType === Mn || Dy(a, t));
      }
    }
    function Px(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Qr ? ky(a, i) : i.nodeType === Mn || Dy(a, i));
    }
    function Bx(e, t, a) {
      Oy(e, t);
    }
    function Yx(e, t) {
      Ly(e, t);
    }
    function Ix(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function $x(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function Qx(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Oy(a, i);
    }
    function Wx(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function Gx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Kx(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Hy = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Vy = "__reactEvents$" + Sf, qx = "__reactListeners$" + Sf, Xx = "__reactHandles$" + Sf;
    function Zx(e) {
      delete e[Ef], delete e[Hy], delete e[Vy], delete e[qx], delete e[Xx];
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
    function Is(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = BE(e); u !== null; ) {
              var s = u[Ef];
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
      var t = e[Ef] || e[sp];
      return t && (t.tag === le || t.tag === Ye || t.tag === ke || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === le || e.tag === Ye)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[Hy] || null;
    }
    function Py(e, t) {
      e[Hy] = t;
    }
    function Jx(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, $E = A.ReactDebugCurrentFrame;
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
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in IE) && (IE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var By = [], zh;
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
      t !== zh[Uu] && S("Unexpected Fiber popped."), e.current = By[Uu], By[Uu] = null, zh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, By[Uu] = e.current, zh[Uu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var Au = Oo(li), Yl = Oo(!1), Iy = li;
    function Rf(e, t, a) {
      return a && Il(t) ? Iy : Au.current;
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
      return Yl.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ra(Yl, e), ra(Au, e);
    }
    function $y(e) {
      ra(Yl, e), ra(Au, e);
    }
    function WE(e, t, a) {
      {
        if (Au.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Au, t, e), aa(Yl, a, e);
      }
    }
    function GE(e, t, a) {
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
        return Je({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Iy = Au.current, aa(Au, a, e), aa(Yl, Yl.current, e), !0;
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = GE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Yl, e), ra(Au, e), aa(Au, u, e), aa(Yl, a, e);
        } else
          ra(Yl, e), aa(Yl, a, e);
      }
    }
    function ew(e) {
      {
        if (!hu(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case se: {
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
    var Lo = 0, Fh = 1, ju = null, Qy = !1, Wy = !1;
    function qE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function tw(e) {
      Qy = !0, qE(e);
    }
    function XE() {
      Qy && Mo();
    }
    function Mo() {
      if (!Wy && ju !== null) {
        Wy = !0;
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
          jn(t), Wy = !1;
        }
      }
      return null;
    }
    var xf = [], wf = 0, Hh = null, Vh = 0, Li = [], Mi = 0, $s = null, Fu = 1, Hu = "";
    function nw(e) {
      return Ws(), (e.flags & Ci) !== De;
    }
    function rw(e) {
      return Ws(), Vh;
    }
    function aw() {
      var e = Hu, t = Fu, a = t & ~iw(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), xf[wf++] = Vh, xf[wf++] = Hh, Hh = e, Vh = t;
    }
    function ZE(e, t, a) {
      Ws(), Li[Mi++] = Fu, Li[Mi++] = Hu, Li[Mi++] = $s, $s = e;
      var i = Fu, u = Hu, s = Ph(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ph(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), x = f >> y, M = s - y, U = Ph(t) + M, F = p << M, oe = F | x, Ne = b + u;
        Fu = 1 << U | oe, Hu = Ne;
      } else {
        var be = p << s, Ct = be | f, ht = u;
        Fu = 1 << v | Ct, Hu = ht;
      }
    }
    function Gy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), ZE(e, a, i);
      }
    }
    function Ph(e) {
      return 32 - Un(e);
    }
    function iw(e) {
      return 1 << Ph(e) - 1;
    }
    function Ky(e) {
      for (; e === Hh; )
        Hh = xf[--wf], xf[wf] = null, Vh = xf[--wf], xf[wf] = null;
      for (; e === $s; )
        $s = Li[--Mi], Li[Mi] = null, Hu = Li[--Mi], Li[Mi] = null, Fu = Li[--Mi], Li[Mi] = null;
    }
    function lw() {
      return Ws(), $s !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function uw(e, t) {
      Ws(), Li[Mi++] = Fu, Li[Mi++] = Hu, Li[Mi++] = $s, Fu = t.id, Hu = t.overflow, $s = e;
    }
    function Ws() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Gs = !1, No = null;
    function ow() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Gs = !0;
    }
    function sw() {
      return Gs;
    }
    function cw(e) {
      var t = e.stateNode.containerInfo;
      return Ni = kx(t), Ur = e, nl = !0, No = null, Gs = !1, !0;
    }
    function fw(e, t, a) {
      return Ni = Dx(t), Ur = e, nl = !0, No = null, Gs = !1, a !== null && uw(e, a), !0;
    }
    function eC(e, t) {
      switch (e.tag) {
        case J: {
          Hx(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & st) !== Oe;
          Px(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ke: {
          var i = e.memoizedState;
          i.dehydrated !== null && Vx(i.dehydrated, t);
          break;
        }
      }
    }
    function tC(e, t) {
      eC(e, t);
      var a = h_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function qy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, Bx(a, i);
                break;
              case Ye:
                var u = t.pendingProps;
                Yx(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & st) !== Oe;
                Qx(
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
              case Ye: {
                var b = t.pendingProps, x = (e.mode & st) !== Oe;
                Wx(
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
          case ke: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case le:
                var F = t.type;
                t.pendingProps, Ix(U, F);
                break;
              case Ye:
                var oe = t.pendingProps;
                $x(U, oe);
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
      t.flags = t.flags & ~Gr | hn, qy(e, t);
    }
    function rC(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = Rx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = _x(i), !0) : !1;
        }
        case Ye: {
          var u = e.pendingProps, s = Tx(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case ke: {
          var f = xx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: lw(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = m_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & st) !== Oe && (e.flags & _e) === De;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          Xy(e) && (qy(Ur, e), Zy()), nC(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!rC(e, t)) {
          Xy(e) && (qy(Ur, e), Zy()), t = op(a);
          var i = Ur;
          if (!t || !rC(e, t)) {
            nC(Ur, e), nl = !1, Ur = e;
            return;
          }
          tC(i, a);
        }
      }
    }
    function dw(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Ox(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function pw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Lx(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & st) !== Oe;
              jx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & st) !== Oe;
              Fx(
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
    function vw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Mx(a, e);
    }
    function hw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Nx(a);
    }
    function aC(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== J && t.tag !== ke; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return aC(e), nl = !0, !1;
      if (e.tag !== J && (e.tag !== le || Ax(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Xy(e))
            iC(e), Zy();
          else
            for (; t; )
              tC(e, t), t = op(t);
      }
      return aC(e), e.tag === ke ? Ni = hw(e) : Ni = Ur ? op(e.stateNode) : null, !0;
    }
    function mw() {
      return nl && Ni !== null;
    }
    function iC(e) {
      for (var t = Ni; t; )
        eC(e, t), t = op(t);
    }
    function bf() {
      Ur = null, Ni = null, nl = !1, Gs = !1;
    }
    function lC() {
      No !== null && (J0(No), No = null);
    }
    function Ar() {
      return nl;
    }
    function eg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var yw = A.ReactCurrentBatchConfig, gw = null;
    function Sw() {
      return yw.transition;
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
      var Ew = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Wt && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], qs = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(Ie(x) || "Component"), qs.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(Ie(x) || "Component"), qs.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(Ie(x) || "Component"), qs.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(Ie(x) || "Component"), qs.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(Ie(x) || "Component"), qs.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(Ie(x) || "Component"), qs.add(x.type);
        }), yp = []), t.size > 0) {
          var f = Ks(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ks(e);
          yt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ks(a);
          yt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ks(u);
          yt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), uC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = Ew(e);
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
              i.add(Ie(s) || "Component"), uC.add(s.type);
            });
            var u = Ks(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

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
        var a = Ie(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Cw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Wt || V) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== se) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Cw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ie(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== se)
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
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Ie(e) || "Component";
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
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= ka) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(D, H) {
        var O = ic(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= Ci, H;
        var G = D.alternate;
        if (G !== null) {
          var ve = G.index;
          return ve < H ? (D.flags |= hn, H) : ve;
        } else
          return D.flags |= hn, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= hn), D;
      }
      function p(D, H, O, G) {
        if (H === null || H.tag !== Ye) {
          var ve = eE(O, D.mode, G);
          return ve.return = D, ve;
        } else {
          var ce = u(H, O);
          return ce.return = D, ce;
        }
      }
      function v(D, H, O, G) {
        var ve = O.type;
        if (ve === fi)
          return g(D, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        hR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === $e && sC(ve) === H.type)) {
          var ce = u(H, O.props);
          return ce.ref = gp(D, H, O), ce.return = D, ce._debugSource = O._source, ce._debugOwner = O._owner, ce;
        }
        var Pe = JS(O, D.mode, G);
        return Pe.ref = gp(D, H, O), Pe.return = D, Pe;
      }
      function y(D, H, O, G) {
        if (H === null || H.tag !== Ce || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ve = tE(O, D.mode, G);
          return ve.return = D, ve;
        } else {
          var ce = u(H, O.children || []);
          return ce.return = D, ce;
        }
      }
      function g(D, H, O, G, ve) {
        if (H === null || H.tag !== vt) {
          var ce = Io(O, D.mode, G, ve);
          return ce.return = D, ce;
        } else {
          var Pe = u(H, O);
          return Pe.return = D, Pe;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = eE("" + H, D.mode, O);
          return G.return = D, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case _r: {
              var ve = JS(H, D.mode, O);
              return ve.ref = gp(D, null, H), ve.return = D, ve;
            }
            case rr: {
              var ce = tE(H, D.mode, O);
              return ce.return = D, ce;
            }
            case $e: {
              var Pe = H._payload, We = H._init;
              return b(D, We(Pe), O);
            }
          }
          if (at(H) || Ke(H)) {
            var Kt = Io(H, D.mode, O, null);
            return Kt.return = D, Kt;
          }
          Ih(D, H);
        }
        return typeof H == "function" && $h(D), null;
      }
      function x(D, H, O, G) {
        var ve = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(D, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return O.key === ve ? v(D, H, O, G) : null;
            case rr:
              return O.key === ve ? y(D, H, O, G) : null;
            case $e: {
              var ce = O._payload, Pe = O._init;
              return x(D, H, Pe(ce), G);
            }
          }
          if (at(O) || Ke(O))
            return ve !== null ? null : g(D, H, O, G, null);
          Ih(D, O);
        }
        return typeof O == "function" && $h(D), null;
      }
      function M(D, H, O, G, ve) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ce = D.get(O) || null;
          return p(H, ce, "" + G, ve);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case _r: {
              var Pe = D.get(G.key === null ? O : G.key) || null;
              return v(H, Pe, G, ve);
            }
            case rr: {
              var We = D.get(G.key === null ? O : G.key) || null;
              return y(H, We, G, ve);
            }
            case $e:
              var Kt = G._payload, Nt = G._init;
              return M(D, H, O, Nt(Kt), ve);
          }
          if (at(G) || Ke(G)) {
            var Gn = D.get(O) || null;
            return g(H, Gn, G, ve, null);
          }
          Ih(H, G);
        }
        return typeof G == "function" && $h(H), null;
      }
      function U(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case _r:
            case rr:
              oC(D, O);
              var G = D.key;
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
            case $e:
              var ve = D._payload, ce = D._init;
              U(ce(ve), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, G) {
        for (var ve = null, ce = 0; ce < O.length; ce++) {
          var Pe = O[ce];
          ve = U(Pe, ve, D);
        }
        for (var We = null, Kt = null, Nt = H, Gn = 0, zt = 0, Vn = null; Nt !== null && zt < O.length; zt++) {
          Nt.index > zt ? (Vn = Nt, Nt = null) : Vn = Nt.sibling;
          var la = x(D, Nt, O[zt], G);
          if (la === null) {
            Nt === null && (Nt = Vn);
            break;
          }
          e && Nt && la.alternate === null && t(D, Nt), Gn = s(la, Gn, zt), Kt === null ? We = la : Kt.sibling = la, Kt = la, Nt = Vn;
        }
        if (zt === O.length) {
          if (a(D, Nt), Ar()) {
            var Yr = zt;
            Qs(D, Yr);
          }
          return We;
        }
        if (Nt === null) {
          for (; zt < O.length; zt++) {
            var oi = b(D, O[zt], G);
            oi !== null && (Gn = s(oi, Gn, zt), Kt === null ? We = oi : Kt.sibling = oi, Kt = oi);
          }
          if (Ar()) {
            var Ca = zt;
            Qs(D, Ca);
          }
          return We;
        }
        for (var Ra = i(D, Nt); zt < O.length; zt++) {
          var ua = M(Ra, D, zt, O[zt], G);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? zt : ua.key), Gn = s(ua, Gn, zt), Kt === null ? We = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && Ra.forEach(function($f) {
          return t(D, $f);
        }), Ar()) {
          var Qu = zt;
          Qs(D, Qu);
        }
        return We;
      }
      function oe(D, H, O, G) {
        var ve = Ke(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === ve && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var ce = ve.call(O);
          if (ce)
            for (var Pe = null, We = ce.next(); !We.done; We = ce.next()) {
              var Kt = We.value;
              Pe = U(Kt, Pe, D);
            }
        }
        var Nt = ve.call(O);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, zt = null, Vn = H, la = 0, Yr = 0, oi = null, Ca = Nt.next(); Vn !== null && !Ca.done; Yr++, Ca = Nt.next()) {
          Vn.index > Yr ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var Ra = x(D, Vn, Ca.value, G);
          if (Ra === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && Ra.alternate === null && t(D, Vn), la = s(Ra, la, Yr), zt === null ? Gn = Ra : zt.sibling = Ra, zt = Ra, Vn = oi;
        }
        if (Ca.done) {
          if (a(D, Vn), Ar()) {
            var ua = Yr;
            Qs(D, ua);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ca.done; Yr++, Ca = Nt.next()) {
            var Qu = b(D, Ca.value, G);
            Qu !== null && (la = s(Qu, la, Yr), zt === null ? Gn = Qu : zt.sibling = Qu, zt = Qu);
          }
          if (Ar()) {
            var $f = Yr;
            Qs(D, $f);
          }
          return Gn;
        }
        for (var qp = i(D, Vn); !Ca.done; Yr++, Ca = Nt.next()) {
          var Zl = M(qp, D, Yr, Ca.value, G);
          Zl !== null && (e && Zl.alternate !== null && qp.delete(Zl.key === null ? Yr : Zl.key), la = s(Zl, la, Yr), zt === null ? Gn = Zl : zt.sibling = Zl, zt = Zl);
        }
        if (e && qp.forEach(function(W_) {
          return t(D, W_);
        }), Ar()) {
          var Q_ = Yr;
          Qs(D, Q_);
        }
        return Gn;
      }
      function Ne(D, H, O, G) {
        if (H !== null && H.tag === Ye) {
          a(D, H.sibling);
          var ve = u(H, O);
          return ve.return = D, ve;
        }
        a(D, H);
        var ce = eE(O, D.mode, G);
        return ce.return = D, ce;
      }
      function be(D, H, O, G) {
        for (var ve = O.key, ce = H; ce !== null; ) {
          if (ce.key === ve) {
            var Pe = O.type;
            if (Pe === fi) {
              if (ce.tag === vt) {
                a(D, ce.sibling);
                var We = u(ce, O.props.children);
                return We.return = D, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (ce.elementType === Pe || // Keep this check inline so it only runs on the false path:
            hR(ce, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === $e && sC(Pe) === ce.type) {
              a(D, ce.sibling);
              var Kt = u(ce, O.props);
              return Kt.ref = gp(D, ce, O), Kt.return = D, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(D, ce);
            break;
          } else
            t(D, ce);
          ce = ce.sibling;
        }
        if (O.type === fi) {
          var Nt = Io(O.props.children, D.mode, G, O.key);
          return Nt.return = D, Nt;
        } else {
          var Gn = JS(O, D.mode, G);
          return Gn.ref = gp(D, H, O), Gn.return = D, Gn;
        }
      }
      function Ct(D, H, O, G) {
        for (var ve = O.key, ce = H; ce !== null; ) {
          if (ce.key === ve)
            if (ce.tag === Ce && ce.stateNode.containerInfo === O.containerInfo && ce.stateNode.implementation === O.implementation) {
              a(D, ce.sibling);
              var Pe = u(ce, O.children || []);
              return Pe.return = D, Pe;
            } else {
              a(D, ce);
              break;
            }
          else
            t(D, ce);
          ce = ce.sibling;
        }
        var We = tE(O, D.mode, G);
        return We.return = D, We;
      }
      function ht(D, H, O, G) {
        var ve = typeof O == "object" && O !== null && O.type === fi && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _r:
              return f(be(D, H, O, G));
            case rr:
              return f(Ct(D, H, O, G));
            case $e:
              var ce = O._payload, Pe = O._init;
              return ht(D, H, Pe(ce), G);
          }
          if (at(O))
            return F(D, H, O, G);
          if (Ke(O))
            return oe(D, H, O, G);
          Ih(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ne(D, H, "" + O, G)) : (typeof O == "function" && $h(D), a(D, H));
      }
      return ht;
    }
    var _f = cC(!0), fC = cC(!1);
    function Rw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Tw(e, t) {
      for (var a = e.child; a !== null; )
        c_(a, t), a = a.sibling;
    }
    var lg = Oo(null), ug;
    ug = {};
    var Qh = null, kf = null, og = null, Wh = !1;
    function Gh() {
      Qh = null, kf = null, og = null, Wh = !1;
    }
    function dC() {
      Wh = !0;
    }
    function pC() {
      Wh = !1;
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
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = qe(u.childLanes, t)) : (i.childLanes = qe(i.childLanes, t), u !== null && (u.childLanes = qe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      ww(e, t, a);
    }
    function ww(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === se) {
                var p = Ts(a), v = Vu(qt, p);
                v.tag = qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = qe(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = qe(x.lanes, a)), cg(i.return, a, e), s.lanes = qe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === it)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Zt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = qe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = qe(U.lanes, a)), cg(M, a, e), u = i.sibling;
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
      Qh = e, kf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function tr(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Qh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function bw() {
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
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function _w(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function kw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Kh(e, i);
    }
    function Fa(e, t) {
      return Kh(e, t);
    }
    var Dw = Kh;
    function Kh(e, t) {
      e.lanes = qe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = qe(a.lanes, t)), a === null && (e.flags & (hn | Gr)) !== De && fR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = qe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = qe(a.childLanes, t) : (u.flags & (hn | Gr)) !== De && fR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mC = 0, yC = 1, qh = 2, dg = 3, Xh = !1, pg, Zh;
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
    function Vu(e, t) {
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
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), _b()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Dw(e, a);
      } else
        return kw(e, u, t, a);
    }
    function Jh(e, t, a) {
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
    function Ow(e, t, a, i, u, s) {
      switch (a.tag) {
        case yC: {
          var f = a.payload;
          if (typeof f == "function") {
            dC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Wt) {
                mn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  mn(!1);
                }
              }
              pC();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Xn | _e;
        case mC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dC(), y = v.call(s, i, u);
            {
              if (e.mode & Wt) {
                mn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  mn(!1);
                }
              }
              pC();
            }
          } else
            y = v;
          return y == null ? i : Je({}, i, y);
        }
        case qh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Zh = u.shared;
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
        var M = u.baseState, U = Y, F = null, oe = null, Ne = null, be = s;
        do {
          var Ct = be.lane, ht = be.eventTime;
          if (ku(i, Ct)) {
            if (Ne !== null) {
              var H = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: _t,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Ne = Ne.next = H;
            }
            M = Ow(e, u, be, M, t, a);
            var O = be.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== _t) {
              e.flags |= rn;
              var G = u.effects;
              G === null ? u.effects = [be] : G.push(be);
            }
          } else {
            var D = {
              eventTime: ht,
              lane: Ct,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ne === null ? (oe = Ne = D, F = M) : Ne = Ne.next = D, U = qe(U, Ct);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, ce = ve.next;
            ve.next = null, be = ce, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (F = M), u.baseState = F, u.firstBaseUpdate = oe, u.lastBaseUpdate = Ne;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var We = Pe;
          do
            U = qe(U, We.lane), We = We.next;
          while (We !== Pe);
        } else s === null && (u.shared.lanes = Y);
        $p(U), e.lanes = U, e.memoizedState = M;
      }
      Zh = null;
    }
    function Lw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SC() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function EC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Lw(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), nm = Oo(Sp);
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
      aa(nm, t, e), aa(Ep, e, e), aa(Uo, Sp, e);
      var a = GT(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Of(e) {
      ra(Uo, e), ra(Ep, e), ra(nm, e);
    }
    function yg() {
      var e = rm(Uo.current);
      return e;
    }
    function RC(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = KT(t, e.type);
      t !== a && (aa(Ep, e, e), aa(Uo, a, e));
    }
    function gg(e) {
      Ep.current === e && (ra(Uo, e), ra(Ep, e));
    }
    var Mw = 0, TC = 1, xC = 1, Cp = 2, al = Oo(Mw);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & TC;
    }
    function Eg(e, t) {
      return e & TC | t;
    }
    function Nw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(al, t, e);
    }
    function Mf(e) {
      ra(al, e);
    }
    function zw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ke) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === ln && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & _e) !== De;
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
    ), $l = (
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
    function Uw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = A.ReactCurrentDispatcher, Rp = A.ReactCurrentBatchConfig, Tg, Nf;
    Tg = /* @__PURE__ */ new Set();
    var Zs = Y, Gt = null, dr = null, pr = null, im = !1, Tp = !1, xp = 0, Aw = 0, jw = 25, P = null, zi = null, jo = -1, xg = !1;
    function Vt() {
      {
        var e = P;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function ne() {
      {
        var e = P;
        zi !== null && (jo++, zi[jo] !== e && Fw(e));
      }
    }
    function zf(e) {
      e != null && !at(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Fw(e) {
      {
        var t = Ie(Gt);
        if (!Tg.has(t) && (Tg.add(t), zi !== null)) {
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
    function wg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Q(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Zs = s, Gt = t, zi = e !== null ? e._debugHookTypes : null, jo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? pe.current = QC : zi !== null ? pe.current = $C : pe.current = IC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, xp = 0, p >= jw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, dr = null, pr = null, t.updateQueue = null, jo = -1, pe.current = WC, f = a(i, u);
        } while (Tp);
      }
      pe.current = gm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Zs = Y, Gt = null, dr = null, pr = null, P = null, zi = null, jo = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & st) !== Oe && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Lt) !== Oe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function bC() {
      if (pe.current = gm, im) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Zs = Y, Gt = null, dr = null, pr = null, zi = null, jo = -1, P = null, HC = !1, Tp = !1, xp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Gt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Gt.memoizedState : a = pr.next, a !== null)
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
        pr === null ? Gt.memoizedState = pr = i : pr = pr.next = i;
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
      var i = Ql(), u;
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
      var f = s.dispatch = Bw.bind(null, Gt, s);
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
          var oe = F.lane;
          if (ku(Zs, oe)) {
            if (U !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: _t,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = be;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Ct = F.action;
              b = e(b, Ct);
            }
          } else {
            var Ne = {
              lane: oe,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Ne, x = b) : U = U.next = Ne, Gt.lanes = qe(Gt.lanes, oe), $p(oe);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? x = b : U.next = M, Q(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = x, i.baseQueue = U, u.lastRenderedState = b;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var D = ht;
        do {
          var H = D.lane;
          Gt.lanes = qe(Gt.lanes, H), $p(H), D = D.next;
        } while (D !== ht);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Dg(e, t, a) {
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
    function uk(e, t, a) {
    }
    function ok(e, t, a) {
    }
    function Og(e, t, a) {
      var i = Gt, u = Ql(), s, f = Ar();
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
        Zc(v, Zs) || kC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(OC.bind(null, i, y, e), [e]), i.flags |= Wr, wp(cr | jr, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Gt, u = Ui(), s = t();
      if (!Nf) {
        var f = t();
        Q(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !Q(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(OC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, wp(cr | jr, DC.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(g, Zs) || kC(i, t, s);
      }
      return s;
    }
    function kC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = _C(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
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
        return !Q(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Fa(e, Fe);
      t !== null && yr(t, e, Fe, qt);
    }
    function um(e) {
      var t = Ql();
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
      var i = a.dispatch = Yw.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(bg);
    }
    function Mg(e) {
      return Dg(bg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = _C(), Gt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = Ql();
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
      var u = Ql(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = wp(cr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (wg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = wp(cr | t, a, f, s);
    }
    function cm(e, t) {
      return (Gt.mode & Lt) !== Oe ? bp(Ri | Wr | wc, jr, e, t) : bp(Wr | wc, jr, e, t);
    }
    function _p(e, t) {
      return sm(Wr, jr, e, t);
    }
    function zg(e, t) {
      return bp(gt, $l, e, t);
    }
    function fm(e, t) {
      return sm(gt, $l, e, t);
    }
    function Ug(e, t) {
      var a = gt;
      return a |= Qi, (Gt.mode & Lt) !== Oe && (a |= _l), bp(a, fr, e, t);
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
      return u |= Qi, (Gt.mode & Lt) !== Oe && (u |= _l), bp(u, fr, NC.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(gt, fr, NC.bind(null, t, e), i);
    }
    function Hw(e, t) {
    }
    var vm = Hw;
    function jg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Ql();
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
      var i = !Dd(Zs);
      if (i) {
        if (!Q(a, t)) {
          var u = Md();
          Gt.lanes = qe(Gt.lanes, u), $p(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Vw(e, t, a) {
      var i = Ua();
      jn(Wv(i, bi)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && yt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = um(!1), t = e[0], a = e[1], i = Vw.bind(null, a), u = Ql();
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
    function Pw() {
      return HC;
    }
    function Pg() {
      var e = Ql(), t = jm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = aw();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Aw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function Bw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        PC(t, u);
      else {
        var s = hC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), BC(s, t, i);
        }
      }
      YC(e, i);
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        PC(t, u);
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
                _w(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              pe.current = p;
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
    function VC(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function PC(e, t) {
      Tp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = qe(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function YC(e, t, a) {
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
      unstable_isNewReconciler: q
    }, IC = null, $C = null, QC = null, WC = null, Wl = null, il = null, Sm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Vt(), zf(t), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Vt(), zf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Vt(), zf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Vt(), zf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Vt(), zf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Vt(), zf(t);
          var a = pe.current;
          pe.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Vt(), Ng(e);
        },
        useState: function(e) {
          P = "useState", Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Vt(), Hg(e);
        },
        useTransition: function() {
          return P = "useTransition", Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Vt(), Og(e, t, a);
        },
        useId: function() {
          return P = "useId", Vt(), Pg();
        },
        unstable_isNewReconciler: q
      }, $C = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), Ug(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = pe.current;
          pe.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), Ng(e);
        },
        useState: function(e) {
          P = "useState", ne();
          var t = pe.current;
          pe.current = Wl;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), Hg(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Og(e, t, a);
        },
        useId: function() {
          return P = "useId", ne(), Pg();
        },
        unstable_isNewReconciler: q
      }, QC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), hm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = pe.current;
          pe.current = il;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = pe.current;
          pe.current = il;
          try {
            return kg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), om();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = pe.current;
          pe.current = il;
          try {
            return Lg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), vm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), zC(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), lm(e, t);
        },
        useId: function() {
          return P = "useId", ne(), ym();
        },
        unstable_isNewReconciler: q
      }, WC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), hm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = pe.current;
          pe.current = Sm;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = pe.current;
          pe.current = Sm;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), om();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = pe.current;
          pe.current = Sm;
          try {
            return Mg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), vm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), UC(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), FC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), lm(e, t);
        },
        useId: function() {
          return P = "useId", ne(), ym();
        },
        unstable_isNewReconciler: q
      }, Wl = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), Vt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), Vt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), Vt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), Vt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), Vt();
          var a = pe.current;
          pe.current = Wl;
          try {
            return Fg(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), Vt();
          var i = pe.current;
          pe.current = Wl;
          try {
            return _g(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), Vt(), Ng(e);
        },
        useState: function(e) {
          P = "useState", Qe(), Vt();
          var t = pe.current;
          pe.current = Wl;
          try {
            return um(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), Vt(), Hg(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), Vt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), Vt(), Og(e, t, a);
        },
        useId: function() {
          return P = "useId", Qe(), Vt(), Pg();
        },
        unstable_isNewReconciler: q
      }, il = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), ne(), hm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), ne();
          var a = pe.current;
          pe.current = il;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), ne();
          var i = pe.current;
          pe.current = il;
          try {
            return kg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), ne(), om();
        },
        useState: function(e) {
          P = "useState", Qe(), ne();
          var t = pe.current;
          pe.current = il;
          try {
            return Lg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), ne(), vm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), ne(), zC(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), ne(), jC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), ne(), lm(e, t);
        },
        useId: function() {
          return P = "useId", Qe(), ne(), ym();
        },
        unstable_isNewReconciler: q
      }, Sm = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), ne(), hm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), ne(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), ne(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), ne(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), ne(), dm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), ne();
          var a = pe.current;
          pe.current = il;
          try {
            return mm(e, t);
          } finally {
            pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), ne();
          var i = pe.current;
          pe.current = il;
          try {
            return Dg(e, t, a);
          } finally {
            pe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), ne(), om();
        },
        useState: function(e) {
          P = "useState", Qe(), ne();
          var t = pe.current;
          pe.current = il;
          try {
            return Mg(e);
          } finally {
            pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), ne(), vm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), ne(), UC(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), ne(), FC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), ne(), lm(e, t);
        },
        useId: function() {
          return P = "useId", Qe(), ne(), ym();
        },
        unstable_isNewReconciler: q
      };
    }
    var Fo = Z.unstable_now, GC = 0, Em = -1, kp = -1, Cm = -1, Yg = !1, Rm = !1;
    function KC() {
      return Yg;
    }
    function Iw() {
      Rm = !0;
    }
    function $w() {
      Yg = !1, Rm = !1;
    }
    function Qw() {
      Yg = Rm, Rm = !1;
    }
    function qC() {
      return GC;
    }
    function XC() {
      GC = Fo();
    }
    function Ig(e) {
      kp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function ZC(e) {
      kp = -1;
    }
    function Tm(e, t) {
      if (kp >= 0) {
        var a = Fo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Gl(e) {
      if (Em >= 0) {
        var t = Fo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case he:
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
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case he:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      Em = Fo();
    }
    function Qg() {
      Cm = Fo();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = Je({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, Kg, qg, Xg, Zg, Jg, JC, xm, eS, tS, nS, Dp;
    {
      Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var e0 = /* @__PURE__ */ new Set();
      xm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          e0.has(a) || (e0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = Rt(e) || "Component";
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
        if (e.mode & Wt) {
          mn(!0);
          try {
            s = a(i, u);
          } finally {
            mn(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : Je({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Vu(u, s);
        f.payload = t, a != null && (xm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Jh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Vu(u, s);
        f.tag = yC, f.payload = t, a != null && (xm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Jh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Vu(i, u);
        s.tag = qh, t != null && (xm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), Jh(f, a, u)), Mc(a, u);
      }
    };
    function t0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Wt) {
            mn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              mn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Se(a, i) || !Se(u, s) : !0;
    }
    function Ww(e, t, a) {
      var i = e.stateNode;
      {
        var u = Rt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === Oe && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === Oe && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || at(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function n0(e, t) {
      t.updater = aS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Gg;
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
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", v);
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
      if (e.mode & Wt) {
        mn(!0);
        try {
          g = new t(a, s);
        } finally {
          mn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      n0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var x = Rt(t) || "Component";
          qg.has(x) || (qg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var oe = Rt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(oe) || (Zg.add(oe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, oe, Ne, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && QE(e, u, s), g;
    }
    function Gw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function a0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Ww(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = Rt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Wt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Gw(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = gt;
        y |= Qi, (e.mode & Lt) !== Oe && (y |= _l), e.flags |= y;
      }
    }
    function Kw(e, t, a, i) {
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
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && a0(e, u, a, v), SC();
      var x = e.memoizedState, M = u.state = x;
      if (em(e, a, u, i), M = e.memoizedState, s === a && x === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = gt;
          U |= Qi, (e.mode & Lt) !== Oe && (U |= _l), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var F = tm() || t0(e, t, s, a, x, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var oe = gt;
          oe |= Qi, (e.mode & Lt) !== Oe && (oe |= _l), e.flags |= oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = gt;
          Ne |= Qi, (e.mode & Lt) !== Oe && (Ne |= _l), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function qw(e, t, a, i, u) {
      var s = t.stateNode;
      gC(e, t);
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
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && a0(t, s, i, b), SC();
      var F = t.memoizedState, oe = s.state = F;
      if (em(t, i, s, u), oe = t.memoizedState, f === v && F === oe && !Uh() && !tm() && !xe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), !1;
      typeof M == "function" && (rS(t, a, M, i), oe = t.memoizedState);
      var Ne = tm() || t0(t, a, p, i, F, oe, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      xe;
      return Ne ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, oe, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, oe, b)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= $n)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= $n), t.memoizedProps = i, t.memoizedState = oe), s.props = i, s.state = oe, s.context = b, Ne;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
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
    function Xw(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = Xw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
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
    var Zw = typeof WeakMap == "function" ? WeakMap : Map;
    function i0(e, t, a) {
      var i = Vu(qt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Ib(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Vu(qt, a);
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
        mR(e), uS(e, t), typeof u != "function" && Bb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, Fe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function l0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Zw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = $b.bind(null, e, t, a);
        Xr && Qp(e, a), t.then(s, s);
      }
    }
    function Jw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function e1(e, t) {
      var a = e.tag;
      if ((e.mode & st) === Oe && (a === fe || a === ee || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u0(e) {
      var t = e;
      do {
        if (t.tag === ke && zw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function o0(e, t, a, i, u) {
      if ((e.mode & st) === Oe) {
        if (e === t)
          e.flags |= Xn;
        else {
          if (e.flags |= _e, a.flags |= xc, a.flags &= -52805, a.tag === se) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ft;
            else {
              var f = Vu(qt, Fe);
              f.tag = qh, zo(a, f, Fe);
            }
          }
          a.lanes = qe(a.lanes, Fe);
        }
        return e;
      }
      return e.flags |= Xn, e.lanes = u, e;
    }
    function t1(e, t, a, i, u) {
      if (a.flags |= os, Xr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        e1(a), Ar() && a.mode & st && JE();
        var f = u0(t);
        if (f !== null) {
          f.flags &= ~Cr, o0(f, t, a, e, u), f.mode & st && l0(e, s, u), Jw(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            l0(e, s, u), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & st) {
        JE();
        var v = u0(t);
        if (v !== null) {
          (v.flags & Xn) === De && (v.flags |= Cr), o0(v, t, a, e, u), eg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), zb(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Xn;
            var b = Ts(u);
            y.lanes = qe(y.lanes, b);
            var x = i0(y, g, b);
            hg(y, x);
            return;
          }
          case se:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & _e) === De && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !uR(F))) {
              y.flags |= Xn;
              var oe = Ts(u);
              y.lanes = qe(y.lanes, oe);
              var Ne = oS(y, M, oe);
              hg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function n1() {
      return null;
    }
    var Op = A.ReactCurrentOwner, ul = !1, sS, Lp, cS, fS, dS, ec, pS, wm, Mp;
    sS = {}, Lp = {}, cS = {}, fS = {}, dS = {}, ec = !1, pS = {}, wm = {}, Mp = {};
    function ga(e, t, a, i) {
      e === null ? t.child = fC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function r1(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function s0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, In(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Wt) {
          mn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            mn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ul ? (wC(e, t, u), Pu(e, t, u)) : (Ar() && y && Gy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function c0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (o_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = He, t.type = f, mS(t, s), f0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            Rt(s)
          ), a.defaultProps !== void 0) {
            var v = Rt(s) || "Unknown";
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
          Rt(g)
        );
      }
      var x = e.child, M = RS(e, u);
      if (!M) {
        var U = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Se, F(U, i) && e.ref === t.ref)
          return Pu(e, t, u);
      }
      t.flags |= ti;
      var oe = ic(x, i);
      return oe.ref = t.ref, oe.return = t, t.child = oe, oe;
    }
    function f0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === $e) {
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
            Rt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Se(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & xc) !== De && (ul = !0);
          else return t.lanes = e.lanes, Pu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function d0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || re)
        if ((t.mode & st) === Oe) {
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
          var x = s !== null ? s.baseLanes : a;
          Fm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = qe(y, a);
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
        s !== null ? (M = qe(s.baseLanes, a), t.memoizedState = null) : M = a, Fm(t, M);
      }
      return ga(e, t, u, a), t.child;
    }
    function a1(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function i1(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function l1(e, t, a) {
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= ho);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Op.current = t, In(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Wt) {
          mn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            mn(!1);
          }
        }
        In(!1);
      }
      return ha(), e !== null && !ul ? (wC(e, t, u), Pu(e, t, u)) : (Ar() && y && Gy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function v0(e, t, a, i, u) {
      {
        switch (T_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= _e, t.flags |= Xn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = qe(t.lanes, g);
            var b = oS(t, Js(y, t), g);
            hg(t, b);
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
            Rt(a)
          );
        }
      }
      var M;
      Il(a) ? (M = !0, jh(t)) : M = !1, Df(t, u);
      var U = t.stateNode, F;
      U === null ? (_m(e, t), r0(t, a, i), iS(t, a, i, u), F = !0) : e === null ? F = Kw(t, a, i, u) : F = qw(e, t, a, i, u);
      var oe = hS(e, t, a, F, M, u);
      {
        var Ne = t.stateNode;
        F && Ne.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), ec = !0);
      }
      return oe;
    }
    function hS(e, t, a, i, u, s) {
      p0(e, t);
      var f = (t.flags & _e) !== De;
      if (!i && !f)
        return u && KE(t, a, !1), Pu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZC();
      else {
        va(t);
        {
          if (In(!0), v = p.render(), t.mode & Wt) {
            mn(!0);
            try {
              p.render();
            } finally {
              mn(!1);
            }
          }
          In(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? r1(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && KE(t, a, !0), t.child;
    }
    function h0(e) {
      var t = e.stateNode;
      t.pendingContext ? WE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && WE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function u1(e, t, a) {
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
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m0(e, t, p, a, g);
        } else if (p !== s) {
          var b = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m0(e, t, p, a, b);
        } else {
          cw(t);
          var x = fC(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~hn | Gr, M = M.sibling;
        }
      } else {
        if (bf(), p === s)
          return Pu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function m0(e, t, a, i, u) {
      return bf(), eg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function o1(e, t, a) {
      RC(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Da), p0(e, t), ga(e, t, f, a), t.child;
    }
    function s1(e, t) {
      return e === null && Jy(t), null;
    }
    function c1(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = s_(v), g = ll(v, u), b;
      switch (y) {
        case fe:
          return mS(t, v), t.type = v = If(v), b = vS(null, t, v, g, i), b;
        case se:
          return t.type = v = QS(v), b = v0(null, t, v, g, i), b;
        case ee:
          return t.type = v = WS(v), b = s0(null, t, v, g, i), b;
        case ft: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && tl(
              x,
              g,
              // Resolved for outer only
              "prop",
              Rt(v)
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
      throw v !== null && typeof v == "object" && v.$$typeof === $e && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function f1(e, t, a, i, u) {
      _m(e, t), t.tag = se;
      var s;
      return Il(a) ? (s = !0, jh(t)) : s = !1, Df(t, u), r0(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function d1(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Rt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & Wt && rl.recordLegacyContextWarning(t, null), In(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), In(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Rt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = Rt(a) || "Unknown";
          Lp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Lp[b] = !0);
        }
        t.tag = se, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Il(a) ? (x = !0, jh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), n0(t, p), iS(t, a, u, i), hS(null, t, a, !0, x, i);
      } else {
        if (t.tag = fe, t.mode & Wt) {
          mn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            mn(!1);
          }
        }
        return Ar() && v && Gy(t), ga(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Rt(t) || "Unknown";
          Mp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Mp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Rt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Rt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: _t
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: n1(),
        transitions: null
      };
    }
    function p1(e, t) {
      var a = null;
      return {
        baseLanes: qe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function v1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function h1(e, t) {
      return xs(e.childLanes, t);
    }
    function y0(e, t, a) {
      var i = t.pendingProps;
      x_(t) && (t.flags |= _e);
      var u = al.current, s = !1, f = (t.flags & _e) !== De;
      if (f || v1(u, e) ? (s = !0, t.flags &= ~_e) : (e === null || e.memoizedState !== null) && (u = Nw(u, xC)), u = Lf(u), Ao(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return E1(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = m1(t, y, g, a), x = t.child;
          return x.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return C1(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, oe = i.children, Ne = g1(e, t, oe, F, a), be = t.child, Ct = e.child.memoizedState;
          return be.memoizedState = Ct === null ? gS(a) : p1(Ct, a), be.childLanes = h1(e, a), t.memoizedState = yS, Ne;
        } else {
          var ht = i.children, D = y1(e, t, ht, a);
          return t.memoizedState = null, D;
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
    function m1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & st) === Oe && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Ot && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = ES(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return gR(e, t, Y, null);
    }
    function g0(e, t) {
      return ic(e, t);
    }
    function y1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = g0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & st) === Oe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function g1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & st) === Oe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Ot && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = g0(f, v), y.subtreeFlags = f.subtreeFlags & zn;
      var b;
      return p !== null ? b = ic(p, i) : (b = Io(i, s, u, null), b.flags |= hn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function bm(e, t, a, i) {
      i !== null && eg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= hn, t.memoizedState = null, f;
    }
    function S1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Io(i, s, u, null);
      return v.flags |= hn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & st) !== Oe && _f(t, e.child, null, u), v;
    }
    function E1(e, t, a) {
      return (e.mode & st) === Oe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Fe) : Fy(t) ? e.lanes = Rr : e.lanes = Zr, null;
    }
    function C1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= _e, null;
          var H = i.children, O = i.fallback, G = S1(e, t, H, O, f), ve = t.child;
          return ve.memoizedState = gS(f), t.memoizedState = yS, G;
        }
      else {
        if (ow(), (t.mode & st) === Oe)
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
            var g = wx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = lS(b, p, y);
          return bm(e, t, f, x);
        }
        var M = Jr(f, e.childLanes);
        if (ul || M) {
          var U = jm();
          if (U !== null) {
            var F = Ud(U, f);
            if (F !== _t && F !== s.retryLane) {
              s.retryLane = F;
              var oe = qt;
              Fa(e, F), yr(U, e, F, oe);
            }
          }
          PS();
          var Ne = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Ne);
        } else if (PE(u)) {
          t.flags |= _e, t.child = e.child;
          var be = Qb.bind(null, e);
          return bx(u, be), null;
        } else {
          fw(t, u, s.treeContext);
          var Ct = i.children, ht = SS(t, Ct);
          return ht.flags |= Gr, ht;
        }
      }
    }
    function S0(e, t, a) {
      e.lanes = qe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = qe(i.lanes, t)), cg(e.return, t, a);
    }
    function R1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ke) {
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
    function T1(e) {
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
    function w1(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function E0(e, t) {
      {
        var a = at(e), i = !a && typeof Ke(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function b1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var a = 0; a < e.length; a++)
            if (!E0(e[a], a))
              return;
        } else {
          var i = Ke(e);
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
      x1(u), w1(s, u), b1(f, u), ga(e, t, f, a);
      var p = al.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= _e;
      else {
        var y = e !== null && (e.flags & _e) !== De;
        y && R1(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & st) === Oe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = T1(t.child), b;
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
            CS(
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
    function _1(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : ga(e, t, i, a), t.child;
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
        if (Q(y, p)) {
          if (f.children === s.children && !Uh())
            return Pu(e, t, a);
        } else
          xw(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var T0 = !1;
    function D1(e, t, a) {
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
      (t.mode & st) === Oe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= hn);
    }
    function Pu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZC(), $p(t.lanes), Jr(a, t.childLanes) ? (Rw(e, t), t.child) : null;
    }
    function O1(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= hn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function L1(e, t, a) {
      switch (t.tag) {
        case J:
          h0(t), t.stateNode, bf();
          break;
        case le:
          RC(t);
          break;
        case se: {
          var i = t.type;
          Il(i) && jh(t);
          break;
        }
        case Ce:
          mg(t, t.stateNode.containerInfo);
          break;
        case it: {
          var u = t.memoizedProps.value, s = t.type._context;
          vC(t, s, u);
          break;
        }
        case he:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= gt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ke: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(al.current)), t.flags |= _e, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return y0(e, t, a);
            Ao(t, Lf(al.current));
            var b = Pu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, Lf(al.current));
          break;
        }
        case ln: {
          var x = (e.flags & _e) !== De, M = Jr(a, t.childLanes);
          if (x) {
            if (M)
              return C0(e, t, a);
            t.flags |= _e;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ao(t, al.current), M)
            break;
          return null;
        }
        case Le:
        case Ut:
          return t.lanes = Y, d0(e, t, a);
      }
      return Pu(e, t, a);
    }
    function x0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return O1(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & _e) === De)
            return ul = !1, L1(e, t, a);
          (e.flags & xc) !== De ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && nw(t)) {
        var f = t.index, p = rw();
        ZE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Xe:
          return d1(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return c1(e, t, v, a);
        }
        case fe: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : ll(y, g);
          return vS(e, t, y, b, a);
        }
        case se: {
          var x = t.type, M = t.pendingProps, U = t.elementType === x ? M : ll(x, M);
          return v0(e, t, x, U, a);
        }
        case J:
          return u1(e, t, a);
        case le:
          return o1(e, t, a);
        case Ye:
          return s1(e, t);
        case ke:
          return y0(e, t, a);
        case Ce:
          return _1(e, t, a);
        case ee: {
          var F = t.type, oe = t.pendingProps, Ne = t.elementType === F ? oe : ll(F, oe);
          return s0(e, t, F, Ne, a);
        }
        case vt:
          return a1(e, t, a);
        case ct:
          return i1(e, t, a);
        case he:
          return l1(e, t, a);
        case it:
          return k1(e, t, a);
        case Xt:
          return D1(e, t, a);
        case ft: {
          var be = t.type, Ct = t.pendingProps, ht = ll(be, Ct);
          if (t.type !== t.elementType) {
            var D = be.propTypes;
            D && tl(
              D,
              ht,
              // Resolved for outer only
              "prop",
              Rt(be)
            );
          }
          return ht = ll(be.type, ht), c0(e, t, be, ht, a);
        }
        case He:
          return f0(e, t, t.type, t.pendingProps, a);
        case Ft: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : ll(H, O);
          return f1(e, t, H, G, a);
        }
        case ln:
          return C0(e, t, a);
        case wt:
          break;
        case Le:
          return d0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= gt;
    }
    function w0(e) {
      e.flags |= En, e.flags |= ho;
    }
    var b0, TS, _0, k0;
    b0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === Ye)
          JT(e, u.stateNode);
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
        var f = t.stateNode, p = yg(), v = tx(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, k0 = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = De;
      if (t) {
        if ((e.mode & Ot) !== Oe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = qe(a, qe(y.lanes, y.childLanes)), i |= y.subtreeFlags & zn, i |= y.flags & zn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = qe(a, qe(g.lanes, g.childLanes)), i |= g.subtreeFlags & zn, i |= g.flags & zn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ot) !== Oe) {
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
    function M1(e, t, a) {
      if (mw() && (t.mode & st) !== Oe && (t.flags & _e) === De)
        return iC(t), bf(), t.flags |= Cr | os | Xn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (vw(t), Fr(t), (t.mode & Ot) !== Oe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & _e) === De && (t.memoizedState = null), t.flags |= gt, Fr(t), (t.mode & Ot) !== Oe) {
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
    function D0(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Xe:
        case an:
        case He:
        case fe:
        case ee:
        case vt:
        case ct:
        case he:
        case Xt:
        case ft:
          return Fr(t), null;
        case se: {
          var u = t.type;
          return Il(u) && Ah(t), Fr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Of(t), $y(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== De) && (t.flags |= $n, lC());
            }
          }
          return TS(e, t), Fr(t), null;
        }
        case le: {
          gg(t);
          var v = CC(), y = t.type;
          if (e !== null && t.stateNode != null)
            _0(e, t, y, i, v), e.ref !== t.ref && w0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = yg(), b = Bh(t);
            if (b)
              dw(t, v, g) && jf(t);
            else {
              var x = ZT(y, i, v, g, t);
              b0(x, t, !1, !1), t.stateNode = x, ex(x, y, i, v) && jf(t);
            }
            t.ref !== null && w0(t);
          }
          return Fr(t), null;
        }
        case Ye: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            k0(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = CC(), oe = yg(), Ne = Bh(t);
            Ne ? pw(t) && jf(t) : t.stateNode = nx(M, F, oe, t);
          }
          return Fr(t), null;
        }
        case ke: {
          Mf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ct = M1(e, t, be);
            if (!Ct)
              return t.flags & Xn ? t : null;
          }
          if ((t.flags & _e) !== De)
            return t.lanes = a, (t.mode & Ot) !== Oe && Wg(t), t;
          var ht = be !== null, D = e !== null && e.memoizedState !== null;
          if (ht !== D && ht) {
            var H = t.child;
            if (H.flags |= Nn, (t.mode & st) !== Oe) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Sg(al.current, xC) ? Nb() : PS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= gt), Fr(t), (t.mode & Ot) !== Oe && ht) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case Ce:
          return Of(t), TS(e, t), e === null && Kx(t.stateNode.containerInfo), Fr(t), null;
        case it:
          var ce = t.type._context;
          return sg(ce, t), Fr(t), null;
        case Ft: {
          var Pe = t.type;
          return Il(Pe) && Ah(t), Fr(t), null;
        }
        case ln: {
          Mf(t);
          var We = t.memoizedState;
          if (We === null)
            return Fr(t), null;
          var Kt = (t.flags & _e) !== De, Nt = We.rendering;
          if (Nt === null)
            if (Kt)
              zp(We, !1);
            else {
              var Gn = Ub() && (e === null || (e.flags & _e) === De);
              if (!Gn)
                for (var zt = t.child; zt !== null; ) {
                  var Vn = am(zt);
                  if (Vn !== null) {
                    Kt = !0, t.flags |= _e, zp(We, !1);
                    var la = Vn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= gt), t.subtreeFlags = De, Tw(t, a), Ao(t, Eg(al.current, Cp)), t.child;
                  }
                  zt = zt.sibling;
                }
              We.tail !== null && Qn() > q0() && (t.flags |= _e, Kt = !0, zp(We, !1), t.lanes = bd);
            }
          else {
            if (!Kt) {
              var Yr = am(Nt);
              if (Yr !== null) {
                t.flags |= _e, Kt = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= gt), zp(We, !0), We.tail === null && We.tailMode === "hidden" && !Nt.alternate && !Ar())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - We.renderingStartTime > q0() && a !== Zr && (t.flags |= _e, Kt = !0, zp(We, !1), t.lanes = bd);
            }
            if (We.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var Ca = We.last;
              Ca !== null ? Ca.sibling = Nt : t.child = Nt, We.last = Nt;
            }
          }
          if (We.tail !== null) {
            var Ra = We.tail;
            We.rendering = Ra, We.tail = Ra.sibling, We.renderingStartTime = Qn(), Ra.sibling = null;
            var ua = al.current;
            return Kt ? ua = Eg(ua, Cp) : ua = Lf(ua), Ao(t, ua), Ra;
          }
          return Fr(t), null;
        }
        case wt:
          break;
        case Le:
        case Ut: {
          VS(t);
          var Qu = t.memoizedState, $f = Qu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Zl = qp !== null;
            Zl !== $f && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !re && (t.flags |= Nn);
          }
          return !$f || (t.mode & st) === Oe ? Fr(t) : Jr(Xl, Zr) && (Fr(t), t.subtreeFlags & (hn | gt) && (t.flags |= Nn)), null;
        }
        case bt:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function N1(e, t, a) {
      switch (Ky(t), t.tag) {
        case se: {
          var i = t.type;
          Il(i) && Ah(t);
          var u = t.flags;
          return u & Xn ? (t.flags = u & ~Xn | _e, (t.mode & Ot) !== Oe && Wg(t), t) : null;
        }
        case J: {
          t.stateNode, Of(t), $y(t), Rg();
          var s = t.flags;
          return (s & Xn) !== De && (s & _e) === De ? (t.flags = s & ~Xn | _e, t) : null;
        }
        case le:
          return gg(t), null;
        case ke: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Xn ? (t.flags = p & ~Xn | _e, (t.mode & Ot) !== Oe && Wg(t), t) : null;
        }
        case ln:
          return Mf(t), null;
        case Ce:
          return Of(t), null;
        case it:
          var v = t.type._context;
          return sg(v, t), null;
        case Le:
        case Ut:
          return VS(t), null;
        case bt:
          return null;
        default:
          return null;
      }
    }
    function O0(e, t, a) {
      switch (Ky(t), t.tag) {
        case se: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case J: {
          t.stateNode, Of(t), $y(t), Rg();
          break;
        }
        case le: {
          gg(t);
          break;
        }
        case Ce:
          Of(t);
          break;
        case ke:
          Mf(t);
          break;
        case ln:
          Mf(t);
          break;
        case it:
          var u = t.type._context;
          sg(u, t);
          break;
        case Le:
        case Ut:
          VS(t);
          break;
      }
    }
    var L0 = null;
    L0 = /* @__PURE__ */ new Set();
    var km = !1, Hr = !1, z1 = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Ff = null, Hf = null;
    function U1(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var A1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ot)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function M0(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        A1(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function j1(e, t, a) {
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
    function Vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (je && lt && e.mode & Ot)
              try {
                Kl(), i = a(null);
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
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var z0 = !1;
    function F1(e, t) {
      qT(e.containerInfo), Ee = t, H1();
      var a = z0;
      return z0 = !1, a;
    }
    function H1() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & kl) !== De && t !== null ? (t.return = e, Ee = t) : V1();
      }
    }
    function V1() {
      for (; Ee !== null; ) {
        var e = Ee;
        It(e);
        try {
          P1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function P1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & $n) !== De) {
        switch (It(e), e.tag) {
          case fe:
          case ee:
          case He:
            break;
          case se: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = L0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              Cx(v.containerInfo);
            }
            break;
          }
          case le:
          case Ye:
          case Ce:
          case Ft:
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
            f.destroy = void 0, p !== void 0 && ((e & jr) !== Ha ? Ki(t) : (e & fr) !== Ha && cs(t), (e & $l) !== Ha && Wp(!0), Dm(t, a, p), (e & $l) !== Ha && Wp(!1), (e & jr) !== Ha ? Ml() : (e & fr) !== Ha && xd());
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
            (e & $l) !== Ha && Wp(!0), s.destroy = f(), (e & $l) !== Ha && Wp(!1), (e & jr) !== Ha ? zv() : (e & fr) !== Ha && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== De ? v = "useLayoutEffect" : (s.tag & $l) !== De ? v = "useInsertionEffect" : v = "useEffect";
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
    function B1(e, t) {
      if ((t.flags & gt) !== De)
        switch (t.tag) {
          case he: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            KC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case he:
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
    function Y1(e, t, a, i) {
      if ((a.flags & Ol) !== De)
        switch (a.tag) {
          case fe:
          case ee:
          case He: {
            if (!Hr)
              if (a.mode & Ot)
                try {
                  Kl(), Ho(fr | cr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case se: {
            var u = a.stateNode;
            if (a.flags & gt && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Ot)
                  try {
                    Kl(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Ot)
                  try {
                    Kl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), EC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case se:
                    y = a.child.stateNode;
                    break;
                }
              EC(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & gt) {
              var b = a.type, x = a.memoizedProps;
              ux(g, b, x);
            }
            break;
          }
          case Ye:
            break;
          case Ce:
            break;
          case he: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, oe = a.stateNode.effectDuration, Ne = qC(), be = t === null ? "mount" : "update";
              KC() && (be = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof U == "function" && U(a.memoizedProps.id, be, oe, Ne), Vb(a);
                var Ct = a.return;
                e: for (; Ct !== null; ) {
                  switch (Ct.tag) {
                    case J:
                      var ht = Ct.stateNode;
                      ht.effectDuration += oe;
                      break e;
                    case he:
                      var D = Ct.stateNode;
                      D.effectDuration += oe;
                      break e;
                  }
                  Ct = Ct.return;
                }
              }
            }
            break;
          }
          case ke: {
            X1(e, a);
            break;
          }
          case ln:
          case Ft:
          case wt:
          case Le:
          case Ut:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && U0(a);
    }
    function I1(e) {
      switch (e.tag) {
        case fe:
        case ee:
        case He: {
          if (e.mode & Ot)
            try {
              Kl(), M0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            M0(e, e.return);
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && j1(e, e.return, t), N0(e, e.return);
          break;
        }
        case le: {
          N0(e, e.return);
          break;
        }
      }
    }
    function $1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? yx(u) : Sx(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === Ye) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? gx(s) : Ex(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === Ut) && i.memoizedState !== null && i !== e)) {
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
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ot)
            try {
              Kl(), u = t(i);
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
    function Q1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function A0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, A0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && Zx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function W1(e) {
      for (var t = e.return; t !== null; ) {
        if (j0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function j0(e) {
      return e.tag === le || e.tag === J || e.tag === Ce;
    }
    function F0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || j0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== Ye && t.tag !== Zt; ) {
          if (t.flags & hn || t.child === null || t.tag === Ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & hn))
          return t.stateNode;
      }
    }
    function G1(e) {
      var t = W1(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Da && (VE(a), t.flags &= ~Da);
          var i = F0(e);
          bS(e, i, a);
          break;
        }
        case J:
        case Ce: {
          var u = t.stateNode.containerInfo, s = F0(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === le || i === Ye;
      if (u) {
        var s = e.stateNode;
        t ? px(a, s, t) : fx(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === le || i === Ye;
      if (u) {
        var s = e.stateNode;
        t ? dx(a, s, t) : cx(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, sl = !1;
    function K1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Vr = i.stateNode, sl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case Ce: {
              Vr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        H0(e, t, a), Vr = null, sl = !1;
      }
      Q1(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        H0(e, t, i), i = i.sibling;
    }
    function H0(e, t, a) {
      switch (Ed(a), a.tag) {
        case le:
          Hr || Vf(a, t);
        case Ye: {
          {
            var i = Vr, u = sl;
            Vr = null, Vo(e, t, a), Vr = i, sl = u, Vr !== null && (sl ? hx(Vr, a.stateNode) : vx(Vr, a.stateNode));
          }
          return;
        }
        case Zt: {
          Vr !== null && (sl ? mx(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case Ce: {
          {
            var s = Vr, f = sl;
            Vr = a.stateNode.containerInfo, sl = !0, Vo(e, t, a), Vr = s, sl = f;
          }
          return;
        }
        case fe:
        case ee:
        case ft:
        case He: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, x = b.destroy, M = b.tag;
                  x !== void 0 && ((M & $l) !== Ha ? Dm(a, t, x) : (M & fr) !== Ha && (cs(a), a.mode & Ot ? (Kl(), Dm(a, t, x), Gl(a)) : Dm(a, t, x), xd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case se: {
          if (!Hr) {
            Vf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && xS(a, t, U);
          }
          Vo(e, t, a);
          return;
        }
        case wt: {
          Vo(e, t, a);
          return;
        }
        case Le: {
          if (
            // TODO: Remove this dead flag
            a.mode & st
          ) {
            var F = Hr;
            Hr = F || a.memoizedState !== null, Vo(e, t, a), Hr = F;
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
    function q1(e) {
      e.memoizedState;
    }
    function X1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Ux(s);
          }
        }
      }
    }
    function V0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new z1()), t.forEach(function(i) {
          var u = Wb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xr)
              if (Ff !== null && Hf !== null)
                Qp(Hf, Ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Z1(e, t, a) {
      Ff = a, Hf = e, It(t), P0(t, e), It(t), Ff = null, Hf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            K1(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          It(p), P0(p, e), p = p.sibling;
      It(f);
    }
    function P0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case fe:
        case ee:
        case ft:
        case He: {
          if (cl(t, e), ql(e), u & gt) {
            try {
              ol($l | cr, e, e.return), Ho($l | cr, e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            if (e.mode & Ot) {
              try {
                Kl(), ol(fr | cr, e, e.return);
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
        case se: {
          cl(t, e), ql(e), u & En && i !== null && Vf(i, i.return);
          return;
        }
        case le: {
          cl(t, e), ql(e), u & En && i !== null && Vf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                VE(s);
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
                    ox(f, g, y, v, p, e);
                  } catch (Pe) {
                    cn(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case Ye: {
          if (cl(t, e), ql(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              sx(b, M, x);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
          }
          return;
        }
        case J: {
          if (cl(t, e), ql(e), u & gt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                zx(t.containerInfo);
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
        case ke: {
          cl(t, e), ql(e);
          var F = e.child;
          if (F.flags & Nn) {
            var oe = F.stateNode, Ne = F.memoizedState, be = Ne !== null;
            if (oe.isHidden = be, be) {
              var Ct = F.alternate !== null && F.alternate.memoizedState !== null;
              Ct || Mb();
            }
          }
          if (u & gt) {
            try {
              q1(e);
            } catch (Pe) {
              cn(e, e.return, Pe);
            }
            V0(e);
          }
          return;
        }
        case Le: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & st
          ) {
            var D = Hr;
            Hr = D || ht, cl(t, e), Hr = D;
          } else
            cl(t, e);
          if (ql(e), u & Nn) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, ve = e;
            if (H.isHidden = G, G && !ht && (ve.mode & st) !== Oe) {
              Ee = ve;
              for (var ce = ve.child; ce !== null; )
                Ee = ce, eb(ce), ce = ce.sibling;
            }
            $1(ve, G);
          }
          return;
        }
        case ln: {
          cl(t, e), ql(e), u & gt && V0(e);
          return;
        }
        case wt:
          return;
        default: {
          cl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & hn) {
        try {
          G1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~hn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function J1(e, t, a) {
      Ff = a, Hf = t, Ee = e, B0(e, t, a), Ff = null, Hf = null;
    }
    function B0(e, t, a) {
      for (var i = (e.mode & st) !== Oe; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, b = km, x = Hr;
            km = p, Hr = g, Hr && !x && (Ee = u, tb(u));
            for (var M = s; M !== null; )
              Ee = M, B0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Ee = u, km = b, Hr = x, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== De && s !== null ? (s.return = u, Ee = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & Ol) !== De) {
          var u = i.alternate;
          It(i);
          try {
            Y1(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          sn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function eb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case fe:
          case ee:
          case ft:
          case He: {
            if (t.mode & Ot)
              try {
                Kl(), ol(fr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case se: {
            Vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case le: {
            Vf(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              Y0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : Y0(e);
      }
    }
    function Y0(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function tb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            I0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : I0(e);
      }
    }
    function I0(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        It(t);
        try {
          I1(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function nb(e, t, a, i) {
      Ee = t, rb(t, e, a, i);
    }
    function rb(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Wi) !== De && s !== null ? (s.return = u, Ee = s) : ab(e, t, a, i);
      }
    }
    function ab(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & Wr) !== De) {
          It(u);
          try {
            ib(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          sn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function ib(e, t, a, i) {
      switch (t.tag) {
        case fe:
        case ee:
        case He: {
          if (t.mode & Ot) {
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
    function lb(e) {
      Ee = e, ub();
    }
    function ub() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & ka) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, cb(u, e);
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
            Ee = e;
          }
        }
        (e.subtreeFlags & Wi) !== De && t !== null ? (t.return = e, Ee = t) : ob();
      }
    }
    function ob() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Wr) !== De && (It(e), sb(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function sb(e) {
      switch (e.tag) {
        case fe:
        case ee:
        case He: {
          e.mode & Ot ? (Qg(), ol(jr | cr, e, e.return), $g(e)) : ol(jr | cr, e, e.return);
          break;
        }
      }
    }
    function cb(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        It(a), db(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : fb(e);
      }
    }
    function fb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (A0(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function db(e, t) {
      switch (e.tag) {
        case fe:
        case ee:
        case He: {
          e.mode & Ot ? (Qg(), ol(jr, e, t), $g(e)) : ol(jr, e, t);
          break;
        }
      }
    }
    function pb(e) {
      switch (e.tag) {
        case fe:
        case ee:
        case He: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case se: {
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
    function vb(e) {
      switch (e.tag) {
        case fe:
        case ee:
        case He: {
          try {
            Ho(jr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case fe:
        case ee:
        case He: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case fe:
        case ee:
        case He:
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
    var yb = [];
    function gb() {
      yb.forEach(function(e) {
        return e();
      });
    }
    var Sb = A.ReactCurrentActQueue;
    function Eb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Sb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Cb = Math.ceil, kS = A.ReactCurrentDispatcher, DS = A.ReactCurrentOwner, Pr = A.ReactCurrentBatchConfig, fl = A.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), Q0 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Om = 3, jp = 4, W0 = 5, OS = 6, Et = vr, Sa = null, Dn = null, hr = Y, Xl = Y, LS = Oo(Y), mr = Bu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Vp = null, Va = null, MS = 0, G0 = 500, K0 = 1 / 0, Rb = 500, Yu = null;
    function Pp() {
      K0 = Qn() + Rb;
    }
    function q0() {
      return K0;
    }
    var Nm = !1, NS = null, Pf = null, nc = !1, Po = null, Bp = Y, zS = [], US = null, Tb = 50, Yp = 0, AS = null, jS = !1, zm = !1, xb = 50, Bf = 0, Um = null, Ip = qt, Am = Y, X0 = !1;
    function jm() {
      return Sa;
    }
    function Ea() {
      return (Et & (Br | Ai)) !== vr ? Qn() : (Ip !== qt || (Ip = Qn()), Ip);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & st) === Oe)
        return Fe;
      if ((Et & Br) !== vr && hr !== Y)
        return Ts(hr);
      var a = Sw() !== gw;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === _t && (Am = Md()), Am;
      }
      var u = Ua();
      if (u !== _t)
        return u;
      var s = rx();
      return s;
    }
    function wb(e) {
      var t = e.mode;
      return (t & st) === Oe ? Fe : Pv();
    }
    function yr(e, t, a, i) {
      Kb(), X0 && S("useInsertionEffect must not schedule updates."), jS && (zm = !0), So(e, a, i), (Et & Br) !== Y && e === Sa ? Zb(t) : (Xr && bs(e, t, a), Jb(t), e === Sa && ((Et & Br) === vr && (Hp = qe(Hp, a)), mr === jp && Yo(e, hr)), Pa(e, i), a === Fe && Et === vr && (t.mode & st) === Oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Pp(), XE()));
    }
    function bb(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Pa(e, a);
    }
    function _b(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Et & Br) !== vr
      );
    }
    function Pa(e, t) {
      var a = e.callbackNode;
      qc(e, t);
      var i = Kc(e, e === Sa ? hr : Y);
      if (i === Y) {
        a !== null && pR(a), e.callbackNode = null, e.callbackPriority = _t;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== IS)) {
        a == null && s !== Fe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pR(a);
      var f;
      if (u === Fe)
        e.tag === Lo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), tw(eR.bind(null, e))) : qE(eR.bind(null, e)), fl.current !== null ? fl.current.push(Mo) : ix(function() {
          (Et & (Br | Ai)) === vr && Mo();
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
        f = $S(p, Z0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z0(e, t) {
      if ($w(), Ip = qt, Am = Y, (Et & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = Kc(e, e === Sa ? hr : Y);
      if (u === Y)
        return null;
      var s = !Zc(e, u) && !Vv(e, u) && !t, f = s ? jb(e, u) : Hm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== Y && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw rc(e, Y), Yo(e, u), Pa(e, Qn()), v;
        }
        if (f === OS)
          Yo(e, u);
        else {
          var y = !Zc(e, u), g = e.current.alternate;
          if (y && !Db(g)) {
            if (f = Hm(e, u), f === tc) {
              var b = Xc(e);
              b !== Y && (u = b, f = FS(e, b));
            }
            if (f === Ap) {
              var x = Fp;
              throw rc(e, Y), Yo(e, u), Pa(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, kb(e, f, u);
        }
      }
      return Pa(e, Qn()), e.callbackNode === a ? Z0.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Vp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, Gx(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Va;
        Va = a, s !== null && J0(s);
      }
      return u;
    }
    function J0(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function kb(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Va, Yu);
          break;
        }
        case Om: {
          if (Yo(e, a), _u(a) && // do not delay if we're inside an act() scope
          !vR()) {
            var i = MS + G0 - Qn();
            if (i > 10) {
              var u = Kc(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Uy(ac.bind(null, e, Va, Yu), i);
              break;
            }
          }
          ac(e, Va, Yu);
          break;
        }
        case jp: {
          if (Yo(e, a), Od(a))
            break;
          if (!vR()) {
            var f = ri(e, a), p = f, v = Qn() - p, y = Gb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(ac.bind(null, e, Va, Yu), y);
              break;
            }
          }
          ac(e, Va, Yu);
          break;
        }
        case W0: {
          ac(e, Va, Yu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Db(e) {
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
    function Yo(e, t) {
      t = xs(t, Mm), t = xs(t, Hp), Iv(e, t);
    }
    function eR(e) {
      if (Qw(), (Et & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      $u();
      var t = Kc(e, Y);
      if (!Jr(t, Fe))
        return Pa(e, Qn()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== Y && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw rc(e, Y), Yo(e, t), Pa(e, Qn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Va, Yu), Pa(e, Qn()), null;
    }
    function Ob(e, t) {
      t !== Y && (ef(e, qe(t, Fe)), Pa(e, Qn()), (Et & (Br | Ai)) === vr && (Pp(), Mo()));
    }
    function HS(e, t) {
      var a = Et;
      Et |= Q0;
      try {
        return e(t);
      } finally {
        Et = a, Et === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Pp(), XE());
      }
    }
    function Lb(e, t, a, i, u) {
      var s = Ua(), f = Pr.transition;
      try {
        return Pr.transition = null, jn(Lr), e(t, a, i, u);
      } finally {
        jn(s), Pr.transition = f, Et === vr && Pp();
      }
    }
    function Iu(e) {
      Po !== null && Po.tag === Lo && (Et & (Br | Ai)) === vr && $u();
      var t = Et;
      Et |= Q0;
      var a = Pr.transition, i = Ua();
      try {
        return Pr.transition = null, jn(Lr), e ? e() : void 0;
      } finally {
        jn(i), Pr.transition = a, Et = t, (Et & (Br | Ai)) === vr && Mo();
      }
    }
    function tR() {
      return (Et & (Br | Ai)) !== vr;
    }
    function Fm(e, t) {
      aa(LS, Xl, e), Xl = qe(Xl, t);
    }
    function VS(e) {
      Xl = LS.current, ra(LS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, ax(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          O0(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return Dn = s, hr = Xl = t, mr = Bu, Fp = null, Lm = Y, Hp = Y, Mm = Y, Vp = null, Va = null, bw(), rl.discardPendingWarnings(), s;
    }
    function nR(e, t) {
      do {
        var a = Dn;
        try {
          if (Gh(), bC(), sn(), DS.current = null, a === null || a.return === null) {
            mr = Ap, Fp = t, Dn = null;
            return;
          }
          if (je && a.mode & Ot && Tm(a, !0), Ve)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, hr);
            } else
              fs(a, t, hr);
          t1(e, a.return, a, t, hr), lR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function rR() {
      var e = kS.current;
      return kS.current = gm, e === null ? gm : e;
    }
    function aR(e) {
      kS.current = e;
    }
    function Mb() {
      MS = Qn();
    }
    function $p(e) {
      Lm = qe(e, Lm);
    }
    function Nb() {
      mr === Bu && (mr = Om);
    }
    function PS() {
      (mr === Bu || mr === Om || mr === tc) && (mr = jp), Sa !== null && (Rs(Lm) || Rs(Hp)) && Yo(Sa, hr);
    }
    function zb(e) {
      mr !== jp && (mr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Ub() {
      return mr === Bu;
    }
    function Hm(e, t) {
      var a = Et;
      Et |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), $v(e, t);
        }
        Yu = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Ab();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      if (Gh(), Et = a, aR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = Y, mr;
    }
    function Ab() {
      for (; Dn !== null; )
        iR(Dn);
    }
    function jb(e, t) {
      var a = Et;
      Et |= Br;
      var i = rR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, hr), u.clear()), $v(e, t);
        }
        Yu = Ad(), Pp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          nR(e, s);
        }
      while (!0);
      return Gh(), aR(i), Et = a, Dn !== null ? (Av(), Bu) : (Lc(), Sa = null, hr = Y, mr);
    }
    function Fb() {
      for (; Dn !== null && !hd(); )
        iR(Dn);
    }
    function iR(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Ot) !== Oe ? (Ig(e), a = BS(t, e, Xl), Tm(e, !0)) : a = BS(t, e, Xl), sn(), e.memoizedProps = e.pendingProps, a === null ? lR(e) : Dn = a, DS.current = null;
    }
    function lR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === De) {
          It(t);
          var u = void 0;
          if ((t.mode & Ot) === Oe ? u = D0(a, t, Xl) : (Ig(t), u = D0(a, t, Xl), Tm(t, !1)), sn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = N1(a, t);
          if (s !== null) {
            s.flags &= Ov, Dn = s;
            return;
          }
          if ((t.mode & Ot) !== Oe) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = De, i.deletions = null;
          else {
            mr = OS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      mr === Bu && (mr = W0);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Pr.transition;
      try {
        Pr.transition = null, jn(Lr), Hb(e, t, a, i);
      } finally {
        Pr.transition = u, jn(i);
      }
      return null;
    }
    function Hb(e, t, a, i) {
      do
        $u();
      while (Po !== null);
      if (qb(), (Et & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = _t;
      var f = qe(u.lanes, u.childLanes);
      zd(e, f), e === Sa && (Sa = null, Dn = null, hr = Y), ((u.subtreeFlags & Wi) !== De || (u.flags & Wi) !== De) && (nc || (nc = !0, US = a, $S(Gi, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Wi)) !== De, v = (u.flags & (kl | Dl | Ol | Wi)) !== De;
      if (p || v) {
        var y = Pr.transition;
        Pr.transition = null;
        var g = Ua();
        jn(Lr);
        var b = Et;
        Et |= Ai, DS.current = null, F1(e, u), XC(), Z1(e, u, s), XT(e.containerInfo), e.current = u, ds(s), J1(u, e, s), ps(), md(), Et = b, jn(g), Pr.transition = y;
      } else
        e.current = u, XC();
      var x = nc;
      if (nc ? (nc = !1, Po = e, Bp = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === Y && (Pf = null), x || cR(e.current, !1), gd(u.stateNode, i), Xr && e.memoizedUpdaters.clear(), gb(), Pa(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], oe = F.stack, Ne = F.digest;
          M(F.value, {
            componentStack: oe,
            digest: Ne
          });
        }
      if (Nm) {
        Nm = !1;
        var be = NS;
        throw NS = null, be;
      }
      return Jr(Bp, Fe) && e.tag !== Lo && $u(), f = e.pendingLanes, Jr(f, Fe) ? (Iw(), e === AS ? Yp++ : (Yp = 0, AS = e)) : Yp = 0, Mo(), Rd(), null;
    }
    function $u() {
      if (Po !== null) {
        var e = Gv(Bp), t = ks(Na, e), a = Pr.transition, i = Ua();
        try {
          return Pr.transition = null, jn(t), Pb();
        } finally {
          jn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function Vb(e) {
      zS.push(e), nc || (nc = !0, $S(Gi, function() {
        return $u(), null;
      }));
    }
    function Pb() {
      if (Po === null)
        return !1;
      var e = US;
      US = null;
      var t = Po, a = Bp;
      if (Po = null, Bp = Y, (Et & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, zm = !1, Su(a);
      var i = Et;
      Et |= Ai, lb(t.current), nb(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          B1(t, f);
        }
      }
      wd(), cR(t.current, !0), Et = i, Mo(), zm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, jS = !1, zm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uR(e) {
      return Pf !== null && Pf.has(e);
    }
    function Bb(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function Yb(e) {
      Nm || (Nm = !0, NS = e);
    }
    var Ib = Yb;
    function oR(e, t, a) {
      var i = Js(a, t), u = i0(e, i, Fe), s = zo(e, u, Fe), f = Ea();
      s !== null && (So(s, Fe, f), Pa(s, f));
    }
    function cn(e, t, a) {
      if (U1(a), Wp(!1), e.tag === J) {
        oR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          oR(i, e, a);
          return;
        } else if (i.tag === se) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uR(s)) {
            var f = Js(a, e), p = oS(i, f, Fe), v = zo(i, p, Fe), y = Ea();
            v !== null && (So(v, Fe, y), Pa(v, y));
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
      Jc(e, a), e_(e), Sa === e && ku(hr, a) && (mr === jp || mr === Om && _u(hr) && Qn() - MS < G0 ? rc(e, Y) : Mm = qe(Mm, a)), Pa(e, u);
    }
    function sR(e, t) {
      t === _t && (t = wb(e));
      var a = Ea(), i = Fa(e, t);
      i !== null && (So(i, t, a), Pa(i, a));
    }
    function Qb(e) {
      var t = e.memoizedState, a = _t;
      t !== null && (a = t.retryLane), sR(e, a);
    }
    function Wb(e, t) {
      var a = _t, i;
      switch (e.tag) {
        case ke:
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
    function Gb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Cb(e / 1960) * 1960;
    }
    function Kb() {
      if (Yp > Tb)
        throw Yp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > xb && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function qb() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function cR(e, t) {
      It(e), Vm(e, _l, hb), t && Vm(e, Ri, mb), Vm(e, _l, pb), t && Vm(e, Ri, vb), sn();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Pm = null;
    function fR(e) {
      {
        if ((Et & Br) !== vr || !(e.mode & st))
          return;
        var t = e.tag;
        if (t !== Xe && t !== J && t !== se && t !== fe && t !== ee && t !== ft && t !== He)
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
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : sn();
        }
      }
    }
    var BS;
    {
      var Xb = null;
      BS = function(e, t, a) {
        var i = SR(Xb, t);
        try {
          return x0(e, t, a);
        } catch (s) {
          if (sw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), bC(), O0(e, t), SR(t, i), t.mode & Ot && Ig(t), bl(null, x0, null, e, t, a), $i()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function Zb(e) {
      if (hi && !Pw())
        switch (e.tag) {
          case fe:
          case ee:
          case He: {
            var t = Dn && Ie(Dn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case se: {
            dR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (Xr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var IS = {};
    function $S(e, t) {
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
    function Jb(e) {
      {
        if (e.mode & st) {
          if (!$0())
            return;
        } else if (!Eb() || Et !== vr || e.tag !== fe && e.tag !== ee && e.tag !== He)
          return;
        if (fl.current === null) {
          var t = ir;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? It(e) : sn();
          }
        }
      }
    }
    function e_(e) {
      e.tag !== Lo && $0() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      X0 = e;
    }
    var ji = null, Yf = null, t_ = function(e) {
      ji = e;
    };
    function If(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return If(e);
    }
    function WS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
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
          case se: {
            typeof i == "function" && (u = !0);
            break;
          }
          case fe: {
            (typeof i == "function" || s === $e) && (u = !0);
            break;
          }
          case ee: {
            (s === B || s === $e) && (u = !0);
            break;
          }
          case ft:
          case He: {
            (s === Ge || s === $e) && (u = !0);
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
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var n_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Iu(function() {
          GS(e.current, i, a);
        });
      }
    }, r_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        $u(), Iu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case fe:
          case He:
          case se:
            v = p;
            break;
          case ee:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ji(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === se ? g = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Fa(e, Fe);
          x !== null && yr(x, e, Fe, qt);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var a_ = function(e, t) {
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
          case fe:
          case He:
          case se:
            p = f;
            break;
          case ee:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? i_(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function i_(e, t) {
      {
        var a = l_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case Ce:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function l_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
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
    var qS;
    {
      qS = !1;
      try {
        var yR = Object.preventExtensions({});
      } catch {
        qS = !0;
      }
    }
    function u_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new u_(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function o_(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function s_(e) {
      if (typeof e == "function")
        return XS(e) ? se : fe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === B)
          return ee;
        if (t === Ge)
          return ft;
      }
      return Xe;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Xe:
        case fe:
        case He:
          a.type = If(e.type);
          break;
        case se:
          a.type = QS(e.type);
          break;
        case ee:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function c_(e, t) {
      e.flags &= zn | hn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function f_(e, t, a) {
      var i;
      return e === Fh ? (i = st, t === !0 && (i |= Wt, i |= Lt)) : i = Oe, Xr && (i |= Ot), ui(J, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Xe, p = e;
      if (typeof e == "function")
        XS(e) ? (f = se, p = QS(p)) : p = If(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case fi:
            return Io(a.children, u, s, t);
          case Qa:
            f = ct, u |= Wt, (u & st) !== Oe && (u |= Lt);
            break;
          case di:
            return d_(a, u, s, t);
          case ie:
            return p_(a, u, s, t);
          case ye:
            return v_(a, u, s, t);
          case Tn:
            return gR(a, u, s, t);
          case tn:
          case dt:
          case on:
          case ar:
          case ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = it;
                  break e;
                case R:
                  f = Xt;
                  break e;
                case B:
                  f = ee, p = WS(p);
                  break e;
                case Ge:
                  f = ft;
                  break e;
                case $e:
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
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = ui(vt, e, i, t);
      return u.lanes = a, u;
    }
    function d_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(he, e, i, t | Ot);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function p_(e, t, a, i) {
      var u = ui(ke, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      var u = ui(ln, e, i, t);
      return u.elementType = ye, u.lanes = a, u;
    }
    function gR(e, t, a, i) {
      var u = ui(Le, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = ui(Ye, e, null, t);
      return i.lanes = a, i;
    }
    function h_() {
      var e = ui(le, null, null, Oe);
      return e.elementType = "DELETED", e;
    }
    function m_(e) {
      var t = ui(Zt, null, null, Oe);
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
      return e === null && (e = ui(Xe, null, null, Oe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function y_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = _t, this.eventTimes = ws(Y), this.expirationTimes = ws(qt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = ws(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
    function ER(e, t, a, i, u, s, f, p, v, y) {
      var g = new y_(e, t, a, p, v), b = f_(t, s);
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
      return vg(b), g;
    }
    var nE = "18.3.1";
    function g_(e, t, a) {
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
      var t = po(e), a = ew(t);
      if (t.tag === se) {
        var i = t.type;
        if (Il(i))
          return GE(t, i, a);
      }
      return a;
    }
    function S_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & Wt) {
          var s = Ie(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = ir;
            try {
              It(u), a.mode & Wt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : sn();
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
      var x = b.current, M = Ea(), U = Bo(x), F = Vu(M, U);
      return F.callback = t ?? null, zo(x, F, U), bb(b, U, M), b;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      yn(f);
      var p = CR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(ir) || "Unknown"));
      var v = Vu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), Jh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function E_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fv(t);
            Ob(t, a);
          }
          break;
        }
        case ke: {
          Iu(function() {
            var u = Fa(e, Fe);
            if (u !== null) {
              var s = Ea();
              yr(u, e, Fe, s);
            }
          });
          var i = Fe;
          iE(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function iE(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function C_(e) {
      if (e.tag === ke) {
        var t = Ss, a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function R_(e) {
      if (e.tag === ke) {
        var t = Bo(e), a = Fa(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function wR(e) {
      var t = fn(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function T_(e) {
      return bR(e);
    }
    var _R = function(e) {
      return !1;
    };
    function x_(e) {
      return _R(e);
    }
    var kR = null, DR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null;
    {
      var jR = function(e, t, a) {
        var i = t[a], u = at(e) ? e.slice() : Je({}, e);
        return a + 1 === t.length ? (at(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return jR(e, t, 0);
      }, HR = function(e, t, a, i) {
        var u = t[i], s = at(e) ? e.slice() : Je({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], at(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = HR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          yt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              yt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return HR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = at(e) ? e.slice() : Je({}, e);
        return s[u] = PR(e[u], t, a + 1, i), s;
      }, BR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = Fa(e, Fe);
          f !== null && yr(f, e, Fe, qt);
        }
      }, DR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Je({}, e.memoizedProps);
          var s = Fa(e, Fe);
          s !== null && yr(s, e, Fe, qt);
        }
      }, OR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = Fa(e, Fe);
          f !== null && yr(f, e, Fe, qt);
        }
      }, LR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Fe);
        i !== null && yr(i, e, Fe, qt);
      }, MR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Fa(e, Fe);
        a !== null && yr(a, e, Fe, qt);
      }, NR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Fa(e, Fe);
        i !== null && yr(i, e, Fe, qt);
      }, zR = function(e) {
        var t = Fa(e, Fe);
        t !== null && yr(t, e, Fe, qt);
      }, UR = function(e) {
        bR = e;
      }, AR = function(e) {
        _R = e;
      };
    }
    function w_(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function b_(e) {
      return null;
    }
    function __() {
      return ir;
    }
    function k_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: DR,
        overrideHookStateRenamePath: OR,
        overrideProps: LR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: NR,
        setErrorHandler: UR,
        setSuspenseHandler: AR,
        scheduleUpdate: zR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: w_,
        findFiberByHostInstance: t || b_,
        // React Refresh
        findHostInstancesForRefresh: a_,
        scheduleRefresh: n_,
        scheduleRoot: r_,
        setRefreshHandler: t_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: __,
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
          var i = wR(t.current);
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
        tR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Gp(null, e, null, null);
        }), YE(t);
      }
    };
    function D_(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IR(e);
      var a = !1, i = !1, u = "", s = YR;
      t != null && (t.hydrate ? yt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

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
    function O_(e) {
      e && Jv(e);
    }
    Ym.prototype.unstable_scheduleHydration = O_;
    function L_(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = YR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = TR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Uw(y, b);
        }
      return new Ym(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ii || e.nodeType === nd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ii || e.nodeType === nd || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function IR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var M_ = A.ReactCurrentOwner, $R;
    $R = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = wR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function QR() {
    }
    function N_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Bm(f);
            s.call(x);
          };
        }
        var f = TR(
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
        var g = RR(
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
        return ep(b), Iu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function z_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      $R(a), z_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = N_(a, t, e, u, i);
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
    var WR = !1;
    function U_(e) {
      {
        WR || (WR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = M_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : S_(e, "findDOMNode");
    }
    function A_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function j_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function F_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iy(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var GR = !1;
    function H_(e) {
      if (GR || (GR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
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
        return Iu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, YE(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && Do(u)), f = e.nodeType === Qr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(E_), Eo(C_), Kv(R_), Os(Ua), jd(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(PT), ay(HS, Lb, Iu);
    function V_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return g_(e, t, null, a);
    }
    function P_(e, t, a, i) {
      return F_(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Mh, oo, Sc, HS]
    };
    function B_(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), D_(e, t);
    }
    function Y_(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t, a);
    }
    function I_(e) {
      return tR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var $_ = k_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!$_ && On && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, Ya.createPortal = V_, Ya.createRoot = B_, Ya.findDOMNode = U_, Ya.flushSync = I_, Ya.hydrate = A_, Ya.hydrateRoot = Y_, Ya.render = j_, Ya.unmountComponentAtNode = H_, Ya.unstable_batchedUpdates = HS, Ya.unstable_renderSubtreeIntoContainer = P_, Ya.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ya;
}
function uT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uT);
    } catch (X) {
      console.error(X);
    }
  }
}
process.env.NODE_ENV === "production" ? (uT(), pE.exports = ek()) : pE.exports = tk();
var nk = pE.exports, vE, Wm = nk;
if (process.env.NODE_ENV === "production")
  vE = Wm.createRoot, Wm.hydrateRoot;
else {
  var rT = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  vE = function(X, Z) {
    rT.usingClientEntryPoint = !0;
    try {
      return Wm.createRoot(X, Z);
    } finally {
      rT.usingClientEntryPoint = !1;
    }
  };
}
var hE = { exports: {} }, Xp = {};
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
function rk() {
  if (aT) return Xp;
  aT = 1;
  var X = dl, Z = Symbol.for("react.element"), A = Symbol.for("react.fragment"), jt = Object.prototype.hasOwnProperty, et = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(xt, fe, se) {
    var Xe, J = {}, Ce = null, le = null;
    se !== void 0 && (Ce = "" + se), fe.key !== void 0 && (Ce = "" + fe.key), fe.ref !== void 0 && (le = fe.ref);
    for (Xe in fe) jt.call(fe, Xe) && !yt.hasOwnProperty(Xe) && (J[Xe] = fe[Xe]);
    if (xt && xt.defaultProps) for (Xe in fe = xt.defaultProps, fe) J[Xe] === void 0 && (J[Xe] = fe[Xe]);
    return { $$typeof: Z, type: xt, key: Ce, ref: le, props: J, _owner: et.current };
  }
  return Xp.Fragment = A, Xp.jsx = S, Xp.jsxs = S, Xp;
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
function ak() {
  return iT || (iT = 1, process.env.NODE_ENV !== "production" && function() {
    var X = dl, Z = Symbol.for("react.element"), A = Symbol.for("react.portal"), jt = Symbol.for("react.fragment"), et = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), xt = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Ye = Symbol.iterator, vt = "@@iterator";
    function ct(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = Ye && R[Ye] || R[vt];
      return typeof B == "function" ? B : null;
    }
    var Xt = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function it(R) {
      {
        for (var B = arguments.length, ie = new Array(B > 1 ? B - 1 : 0), ye = 1; ye < B; ye++)
          ie[ye - 1] = arguments[ye];
        ee("error", R, ie);
      }
    }
    function ee(R, B, ie) {
      {
        var ye = Xt.ReactDebugCurrentFrame, Ge = ye.getStackAddendum();
        Ge !== "" && (B += "%s", ie = ie.concat([Ge]));
        var $e = ie.map(function(dt) {
          return String(dt);
        });
        $e.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, $e);
      }
    }
    var he = !1, ke = !1, ft = !1, He = !1, an = !1, Ft;
    Ft = Symbol.for("react.module.reference");
    function Zt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === jt || R === yt || an || R === et || R === se || R === Xe || He || R === le || he || ke || ft || typeof R == "object" && R !== null && (R.$$typeof === Ce || R.$$typeof === J || R.$$typeof === S || R.$$typeof === xt || R.$$typeof === fe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ft || R.getModuleId !== void 0));
    }
    function ln(R, B, ie) {
      var ye = R.displayName;
      if (ye)
        return ye;
      var Ge = B.displayName || B.name || "";
      return Ge !== "" ? ie + "(" + Ge + ")" : ie;
    }
    function wt(R) {
      return R.displayName || "Context";
    }
    function Le(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && it("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case jt:
          return "Fragment";
        case A:
          return "Portal";
        case yt:
          return "Profiler";
        case et:
          return "StrictMode";
        case se:
          return "Suspense";
        case Xe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case xt:
            var B = R;
            return wt(B) + ".Consumer";
          case S:
            var ie = R;
            return wt(ie._context) + ".Provider";
          case fe:
            return ln(R, R.render, "ForwardRef");
          case J:
            var ye = R.displayName || null;
            return ye !== null ? ye : Le(R.type) || "Memo";
          case Ce: {
            var Ge = R, $e = Ge._payload, dt = Ge._init;
            try {
              return Le(dt($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ut = Object.assign, bt = 0, kt, Te, q, xe, re, _, V;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function je() {
      {
        if (bt === 0) {
          kt = console.log, Te = console.info, q = console.warn, xe = console.error, re = console.group, _ = console.groupCollapsed, V = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
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
        bt++;
      }
    }
    function lt() {
      {
        if (bt--, bt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, R, {
              value: kt
            }),
            info: Ut({}, R, {
              value: Te
            }),
            warn: Ut({}, R, {
              value: q
            }),
            error: Ut({}, R, {
              value: xe
            }),
            group: Ut({}, R, {
              value: re
            }),
            groupCollapsed: Ut({}, R, {
              value: _
            }),
            groupEnd: Ut({}, R, {
              value: V
            })
          });
        }
        bt < 0 && it("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = Xt.ReactCurrentDispatcher, Ze;
    function nt(R, B, ie) {
      {
        if (Ze === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var ye = Ge.stack.trim().match(/\n( *(at )?)/);
            Ze = ye && ye[1] || "";
          }
        return `
` + Ze + R;
      }
    }
    var ut = !1, Pt;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      Pt = new On();
    }
    function wr(R, B) {
      if (!R || ut)
        return "";
      {
        var ie = Pt.get(R);
        if (ie !== void 0)
          return ie;
      }
      var ye;
      ut = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = tt.current, tt.current = null, je();
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
              ye = Ke;
            }
            Reflect.construct(R, [], dt);
          } else {
            try {
              dt.call();
            } catch (Ke) {
              ye = Ke;
            }
            R.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            ye = Ke;
          }
          R();
        }
      } catch (Ke) {
        if (Ke && ye && typeof Ke.stack == "string") {
          for (var ot = Ke.stack.split(`
`), Tn = ye.stack.split(`
`), tn = ot.length - 1, on = Tn.length - 1; tn >= 1 && on >= 0 && ot[tn] !== Tn[on]; )
            on--;
          for (; tn >= 1 && on >= 0; tn--, on--)
            if (ot[tn] !== Tn[on]) {
              if (tn !== 1 || on !== 1)
                do
                  if (tn--, on--, on < 0 || ot[tn] !== Tn[on]) {
                    var ar = `
` + ot[tn].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Pt.set(R, ar), ar;
                  }
                while (tn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        ut = !1, tt.current = $e, lt(), Error.prepareStackTrace = Ge;
      }
      var Wa = R ? R.displayName || R.name : "", Ga = Wa ? nt(Wa) : "";
      return typeof R == "function" && Pt.set(R, Ga), Ga;
    }
    function Cn(R, B, ie) {
      return wr(R, !1);
    }
    function nr(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function Pn(R, B, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, nr(R));
      if (typeof R == "string")
        return nt(R);
      switch (R) {
        case se:
          return nt("Suspense");
        case Xe:
          return nt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case fe:
            return Cn(R.render);
          case J:
            return Pn(R.type, B, ie);
          case Ce: {
            var ye = R, Ge = ye._payload, $e = ye._init;
            try {
              return Pn($e(Ge), B, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Ir = {}, si = Xt.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var B = R._owner, ie = Pn(R.type, R._source, B ? B.type : null);
        si.setExtraStackFrame(ie);
      } else
        si.setExtraStackFrame(null);
    }
    function Kn(R, B, ie, ye, Ge) {
      {
        var $e = Function.call.bind(Bn);
        for (var dt in R)
          if ($e(R, dt)) {
            var ot = void 0;
            try {
              if (typeof R[dt] != "function") {
                var Tn = Error((ye || "React class") + ": " + ie + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              ot = R[dt](B, dt, ye, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              ot = tn;
            }
            ot && !(ot instanceof Error) && (oa(Ge), it("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", ie, dt, typeof ot), oa(null)), ot instanceof Error && !(ot.message in Ir) && (Ir[ot.message] = !0, oa(Ge), it("Failed %s type: %s", ie, ot.message), oa(null));
          }
      }
    }
    var Rn = Array.isArray;
    function Yn(R) {
      return Rn(R);
    }
    function gr(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ie = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
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
        return it("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), Ln(R);
    }
    var sa = Xt.ReactCurrentOwner, $a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, te;
    function we(R) {
      if (Bn.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (Bn.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, B) {
      typeof R.ref == "string" && sa.current;
    }
    function Jt(R, B) {
      {
        var ie = function() {
          ci || (ci = !0, it("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function pn(R, B) {
      {
        var ie = function() {
          te || (te = !0, it("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var un = function(R, B, ie, ye, Ge, $e, dt) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Z,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: ie,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: $e
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
        value: ye
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function qn(R, B, ie, ye, Ge) {
      {
        var $e, dt = {}, ot = null, Tn = null;
        ie !== void 0 && (Sr(ie), ot = "" + ie), rt(B) && (Sr(B.key), ot = "" + B.key), we(B) && (Tn = B.ref, At(B, Ge));
        for ($e in B)
          Bn.call(B, $e) && !$a.hasOwnProperty($e) && (dt[$e] = B[$e]);
        if (R && R.defaultProps) {
          var tn = R.defaultProps;
          for ($e in tn)
            dt[$e] === void 0 && (dt[$e] = tn[$e]);
        }
        if (ot || Tn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ot && Jt(dt, on), Tn && pn(dt, on);
        }
        return un(R, ot, Tn, Ge, ye, sa.current, dt);
      }
    }
    var en = Xt.ReactCurrentOwner, Bt = Xt.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var B = R._owner, ie = Pn(R.type, R._source, B ? B.type : null);
        Bt.setExtraStackFrame(ie);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === Z;
    }
    function Ta() {
      {
        if (en.current) {
          var R = Le(en.current.type);
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
    function eu(R) {
      {
        var B = Ta();
        if (!B) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (B = `

Check the top-level render call using <` + ie + ">.");
        }
        return B;
      }
    }
    function pl(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = eu(B);
        if (Jl[ie])
          return;
        Jl[ie] = !0;
        var ye = "";
        R && R._owner && R._owner !== en.current && (ye = " It was passed a child from " + Le(R._owner.type) + "."), Yt(R), it('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, ye), Yt(null);
      }
    }
    function vl(R, B) {
      {
        if (typeof R != "object")
          return;
        if (Yn(R))
          for (var ie = 0; ie < R.length; ie++) {
            var ye = R[ie];
            Er(ye) && pl(ye, B);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ge = ct(R);
          if (typeof Ge == "function" && Ge !== R.entries)
            for (var $e = Ge.call(R), dt; !(dt = $e.next()).done; )
              Er(dt.value) && pl(dt.value, B);
        }
      }
    }
    function tu(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var ie;
        if (typeof B == "function")
          ie = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === fe || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === J))
          ie = B.propTypes;
        else
          return;
        if (ie) {
          var ye = Le(B);
          Kn(ie, R.props, "prop", ye, R);
        } else if (B.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Ge = Le(B);
          it("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && it("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(R) {
      {
        for (var B = Object.keys(R.props), ie = 0; ie < B.length; ie++) {
          var ye = B[ie];
          if (ye !== "children" && ye !== "key") {
            Yt(R), it("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), it("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var _r = {};
    function rr(R, B, ie, ye, Ge, $e) {
      {
        var dt = Zt(R);
        if (!dt) {
          var ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Fi();
          Tn ? ot += Tn : ot += Ta();
          var tn;
          R === null ? tn = "null" : Yn(R) ? tn = "array" : R !== void 0 && R.$$typeof === Z ? (tn = "<" + (Le(R.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof R, it("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, ot);
        }
        var on = qn(R, B, ie, Ge, $e);
        if (on == null)
          return on;
        if (dt) {
          var ar = B.children;
          if (ar !== void 0)
            if (ye)
              if (Yn(ar)) {
                for (var Wa = 0; Wa < ar.length; Wa++)
                  vl(ar[Wa], R);
                Object.freeze && Object.freeze(ar);
              } else
                it("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ar, R);
        }
        if (Bn.call(B, "key")) {
          var Ga = Le(R), Ke = Object.keys(B).filter(function(nu) {
            return nu !== "key";
          }), Je = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + Je]) {
            var Ka = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
            it(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, Ga, Ka, Ga), _r[Ga + Je] = !0;
          }
        }
        return R === jt ? br(on) : tu(on), on;
      }
    }
    function fi(R, B, ie) {
      return rr(R, B, ie, !0);
    }
    function Qa(R, B, ie) {
      return rr(R, B, ie, !1);
    }
    var di = Qa, pi = fi;
    Zp.Fragment = jt, Zp.jsx = di, Zp.jsxs = pi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? hE.exports = rk() : hE.exports = ak();
var Sn = hE.exports;
function ik() {
  const [X, Z] = dl.useState([]), [A, jt] = dl.useState(""), [et, yt] = dl.useState(""), [S, xt] = dl.useState(null), [fe, se] = dl.useState(""), [Xe, J] = dl.useState(""), Ce = () => {
    if (A.trim() === "" && et.trim() === "") return;
    const ee = {
      id: Date.now(),
      title: A.trim() || "Untitled",
      content: et.trim(),
      createdAt: Date.now()
    };
    Z([ee, ...X]), jt(""), yt("");
  }, le = (ee) => {
    Z(X.filter((he) => he.id !== ee)), S === ee && xt(null);
  }, Ye = (ee) => {
    xt(ee.id), se(ee.title), J(ee.content);
  }, vt = () => {
    S !== null && (Z(
      X.map(
        (ee) => ee.id === S ? {
          ...ee,
          title: fe.trim() || "Untitled",
          content: Xe.trim()
        } : ee
      )
    ), xt(null), se(""), J(""));
  }, ct = () => {
    xt(null), se(""), J("");
  }, Xt = (ee) => {
    ee.key === "Enter" && (ee.metaKey || ee.ctrlKey) && Ce();
  }, it = (ee) => new Date(ee).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ Sn.jsxs(
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
        /* @__PURE__ */ Sn.jsx(
          "div",
          {
            style: {
              borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
              padding: "16px"
            },
            children: /* @__PURE__ */ Sn.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                },
                children: [
                  /* @__PURE__ */ Sn.jsx(
                    "input",
                    {
                      type: "text",
                      value: A,
                      onChange: (ee) => jt(ee.target.value),
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
                  /* @__PURE__ */ Sn.jsx(
                    "textarea",
                    {
                      value: et,
                      onChange: (ee) => yt(ee.target.value),
                      onKeyDown: Xt,
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
                  /* @__PURE__ */ Sn.jsx(
                    "button",
                    {
                      onClick: Ce,
                      disabled: A.trim() === "" && et.trim() === "",
                      style: {
                        padding: "8px 16px",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#ffffff",
                        backgroundColor: "#3b82f6",
                        border: "none",
                        borderRadius: "8px",
                        cursor: A.trim() === "" && et.trim() === "" ? "not-allowed" : "pointer",
                        opacity: A.trim() === "" && et.trim() === "" ? 0.5 : 1,
                        transition: "background-color 0.2s",
                        alignSelf: "flex-start"
                      },
                      onMouseEnter: (ee) => {
                        (A.trim() !== "" || et.trim() !== "") && (ee.currentTarget.style.backgroundColor = "#2563eb");
                      },
                      onMouseLeave: (ee) => {
                        (A.trim() !== "" || et.trim() !== "") && (ee.currentTarget.style.backgroundColor = "#3b82f6");
                      },
                      children: "Add Note"
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ Sn.jsx(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden"
            },
            children: X.length === 0 ? /* @__PURE__ */ Sn.jsx(
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
            ) : /* @__PURE__ */ Sn.jsx("div", { children: X.map((ee) => /* @__PURE__ */ Sn.jsx(
              "div",
              {
                style: {
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s"
                },
                onMouseEnter: (he) => {
                  S !== ee.id && (he.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)");
                },
                onMouseLeave: (he) => {
                  S !== ee.id && (he.currentTarget.style.backgroundColor = "transparent");
                },
                children: S === ee.id ? /* @__PURE__ */ Sn.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    },
                    children: [
                      /* @__PURE__ */ Sn.jsx(
                        "input",
                        {
                          type: "text",
                          value: fe,
                          onChange: (he) => se(he.target.value),
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
                      /* @__PURE__ */ Sn.jsx(
                        "textarea",
                        {
                          value: Xe,
                          onChange: (he) => J(he.target.value),
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
                      /* @__PURE__ */ Sn.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            gap: "8px"
                          },
                          children: [
                            /* @__PURE__ */ Sn.jsx(
                              "button",
                              {
                                onClick: vt,
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
                                onMouseEnter: (he) => {
                                  he.currentTarget.style.backgroundColor = "#2563eb";
                                },
                                onMouseLeave: (he) => {
                                  he.currentTarget.style.backgroundColor = "#3b82f6";
                                },
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ Sn.jsx(
                              "button",
                              {
                                onClick: ct,
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
                                onMouseEnter: (he) => {
                                  he.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                                },
                                onMouseLeave: (he) => {
                                  he.currentTarget.style.backgroundColor = "transparent";
                                },
                                children: "Cancel"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ Sn.jsx("div", { children: /* @__PURE__ */ Sn.jsxs(
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
                      /* @__PURE__ */ Sn.jsxs("div", { style: { flex: 1 }, children: [
                        /* @__PURE__ */ Sn.jsx(
                          "h3",
                          {
                            style: {
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "#111827",
                              margin: "0 0 4px 0"
                            },
                            children: ee.title
                          }
                        ),
                        /* @__PURE__ */ Sn.jsx(
                          "p",
                          {
                            style: {
                              fontSize: "14px",
                              color: "#6b7280",
                              margin: "0 0 8px 0"
                            },
                            children: it(ee.createdAt)
                          }
                        ),
                        ee.content && /* @__PURE__ */ Sn.jsx(
                          "p",
                          {
                            style: {
                              fontSize: "16px",
                              color: "#111827",
                              margin: "0",
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word"
                            },
                            children: ee.content
                          }
                        )
                      ] }),
                      /* @__PURE__ */ Sn.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            gap: "8px"
                          },
                          children: [
                            /* @__PURE__ */ Sn.jsx(
                              "button",
                              {
                                onClick: () => Ye(ee),
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
                                onMouseEnter: (he) => {
                                  he.currentTarget.style.backgroundColor = "#3b82f6", he.currentTarget.style.color = "#ffffff";
                                },
                                onMouseLeave: (he) => {
                                  he.currentTarget.style.backgroundColor = "transparent", he.currentTarget.style.color = "#3b82f6";
                                },
                                children: "Edit"
                              }
                            ),
                            /* @__PURE__ */ Sn.jsx(
                              "button",
                              {
                                onClick: () => le(ee.id),
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
                                onMouseEnter: (he) => {
                                  he.currentTarget.style.backgroundColor = "#ef4444", he.currentTarget.style.color = "#ffffff";
                                },
                                onMouseLeave: (he) => {
                                  he.currentTarget.style.backgroundColor = "transparent", he.currentTarget.style.color = "#ef4444";
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
              ee.id
            )) })
          }
        )
      ]
    }
  );
}
let ev = null;
function sk(X) {
  ev = vE(X), ev.render(X_.createElement(ik));
}
function ck() {
  ev && (ev.unmount(), ev = null);
}
export {
  sk as mount,
  ck as unmount
};
