import ca, { useMemo as ze, useRef as Ve, useReducer as At, useEffect as Je, useCallback as xe, forwardRef as Pt, useImperativeHandle as Nt, Fragment as It, useState as he } from "react";
function ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qe = { exports: {} }, Ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Lt() {
  if (Fa) return Ue;
  Fa = 1;
  var e = ca, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, h, E) {
    var g, b = {}, O = null, z = null;
    E !== void 0 && (O = "" + E), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (g in h) i.call(h, g) && !o.hasOwnProperty(g) && (b[g] = h[g]);
    if (l && l.defaultProps) for (g in h = l.defaultProps, h) b[g] === void 0 && (b[g] = h[g]);
    return { $$typeof: a, type: l, key: O, ref: z, props: b, _owner: r.current };
  }
  return Ue.Fragment = n, Ue.jsx = d, Ue.jsxs = d, Ue;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Ft() {
  return za || (za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ca, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Z = Symbol.iterator, P = "@@iterator";
    function $(t) {
      if (t === null || typeof t != "object")
        return null;
      var p = Z && t[Z] || t[P];
      return typeof p == "function" ? p : null;
    }
    var X = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(t) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), T = 1; T < p; T++)
          v[T - 1] = arguments[T];
        Y("error", t, v);
      }
    }
    function Y(t, p, v) {
      {
        var T = X.ReactDebugCurrentFrame, G = T.getStackAddendum();
        G !== "" && (p += "%s", v = v.concat([G]));
        var V = v.map(function(F) {
          return String(F);
        });
        V.unshift("Warning: " + p), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var M = !1, s = !1, U = !1, L = !1, H = !1, D;
    D = Symbol.for("react.module.reference");
    function ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === o || H || t === r || t === E || t === g || L || t === z || M || s || U || typeof t == "object" && t !== null && (t.$$typeof === O || t.$$typeof === b || t.$$typeof === d || t.$$typeof === l || t.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === D || t.getModuleId !== void 0));
    }
    function me(t, p, v) {
      var T = t.displayName;
      if (T)
        return T;
      var G = p.displayName || p.name || "";
      return G !== "" ? v + "(" + G + ")" : v;
    }
    function Ee(t) {
      return t.displayName || "Context";
    }
    function pe(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case E:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var p = t;
            return Ee(p) + ".Consumer";
          case d:
            var v = t;
            return Ee(v._context) + ".Provider";
          case h:
            return me(t, t.render, "ForwardRef");
          case b:
            var T = t.displayName || null;
            return T !== null ? T : pe(t.type) || "Memo";
          case O: {
            var G = t, V = G._payload, F = G._init;
            try {
              return pe(F(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, ae = 0, le, ve, be, re, c, m, k;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function w() {
      {
        if (ae === 0) {
          le = console.log, ve = console.info, be = console.warn, re = console.error, c = console.group, m = console.groupCollapsed, k = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        ae++;
      }
    }
    function A() {
      {
        if (ae--, ae === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: le
            }),
            info: W({}, t, {
              value: ve
            }),
            warn: W({}, t, {
              value: be
            }),
            error: W({}, t, {
              value: re
            }),
            group: W({}, t, {
              value: c
            }),
            groupCollapsed: W({}, t, {
              value: m
            }),
            groupEnd: W({}, t, {
              value: k
            })
          });
        }
        ae < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = X.ReactCurrentDispatcher, j;
    function C(t, p, v) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (G) {
            var T = G.stack.trim().match(/\n( *(at )?)/);
            j = T && T[1] || "";
          }
        return `
` + j + t;
      }
    }
    var N = !1, R;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      R = new te();
    }
    function u(t, p) {
      if (!t || N)
        return "";
      {
        var v = R.get(t);
        if (v !== void 0)
          return v;
      }
      var T;
      N = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = _.current, _.current = null, w();
      try {
        if (p) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (fe) {
              T = fe;
            }
            Reflect.construct(t, [], F);
          } else {
            try {
              F.call();
            } catch (fe) {
              T = fe;
            }
            t.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            T = fe;
          }
          t();
        }
      } catch (fe) {
        if (fe && T && typeof fe.stack == "string") {
          for (var I = fe.stack.split(`
`), ue = T.stack.split(`
`), ie = I.length - 1, oe = ue.length - 1; ie >= 1 && oe >= 0 && I[ie] !== ue[oe]; )
            oe--;
          for (; ie >= 1 && oe >= 0; ie--, oe--)
            if (I[ie] !== ue[oe]) {
              if (ie !== 1 || oe !== 1)
                do
                  if (ie--, oe--, oe < 0 || I[ie] !== ue[oe]) {
                    var ge = `
` + I[ie].replace(" at new ", " at ");
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && R.set(t, ge), ge;
                  }
                while (ie >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        N = !1, _.current = V, A(), Error.prepareStackTrace = G;
      }
      var Fe = t ? t.displayName || t.name : "", Oe = Fe ? C(Fe) : "";
      return typeof t == "function" && R.set(t, Oe), Oe;
    }
    function se(t, p, v) {
      return u(t, !1);
    }
    function _e(t) {
      var p = t.prototype;
      return !!(p && p.isReactComponent);
    }
    function ye(t, p, v) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return u(t, _e(t));
      if (typeof t == "string")
        return C(t);
      switch (t) {
        case E:
          return C("Suspense");
        case g:
          return C("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            return se(t.render);
          case b:
            return ye(t.type, p, v);
          case O: {
            var T = t, G = T._payload, V = T._init;
            try {
              return ye(V(G), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Te = {}, Pe = X.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var p = t._owner, v = ye(t.type, t._source, p ? p.type : null);
        Pe.setExtraStackFrame(v);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Ne(t, p, v, T, G) {
      {
        var V = Function.call.bind(Se);
        for (var F in t)
          if (V(t, F)) {
            var I = void 0;
            try {
              if (typeof t[F] != "function") {
                var ue = Error((T || "React class") + ": " + v + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              I = t[F](p, F, T, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              I = ie;
            }
            I && !(I instanceof Error) && (ke(G), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", v, F, typeof I), ke(null)), I instanceof Error && !(I.message in Te) && (Te[I.message] = !0, ke(G), K("Failed %s type: %s", v, I.message), ke(null));
          }
      }
    }
    var la = Array.isArray;
    function He(t) {
      return la(t);
    }
    function sa(t) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v;
      }
    }
    function f(t) {
      try {
        return y(t), !1;
      } catch {
        return !0;
      }
    }
    function y(t) {
      return "" + t;
    }
    function Q(t) {
      if (f(t))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sa(t)), y(t);
    }
    var ne = X.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, je;
    function We(t) {
      if (Se.call(t, "ref")) {
        var p = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ge(t) {
      if (Se.call(t, "key")) {
        var p = Object.getOwnPropertyDescriptor(t, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function qe(t, p) {
      typeof t.ref == "string" && ne.current;
    }
    function Ie(t, p) {
      {
        var v = function() {
          Re || (Re = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Be(t, p) {
      {
        var v = function() {
          je || (je = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var $e = function(t, p, v, T, G, V, F) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: p,
        ref: v,
        props: F,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Ke(t, p, v, T, G) {
      {
        var V, F = {}, I = null, ue = null;
        v !== void 0 && (Q(v), I = "" + v), Ge(p) && (Q(p.key), I = "" + p.key), We(p) && (ue = p.ref, qe(p, G));
        for (V in p)
          Se.call(p, V) && !de.hasOwnProperty(V) && (F[V] = p[V]);
        if (t && t.defaultProps) {
          var ie = t.defaultProps;
          for (V in ie)
            F[V] === void 0 && (F[V] = ie[V]);
        }
        if (I || ue) {
          var oe = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          I && Ie(F, oe), ue && Be(F, oe);
        }
        return $e(t, I, ue, G, T, ne.current, F);
      }
    }
    var Ce = X.ReactCurrentOwner, Xe = X.ReactDebugCurrentFrame;
    function Le(t) {
      if (t) {
        var p = t._owner, v = ye(t.type, t._source, p ? p.type : null);
        Xe.setExtraStackFrame(v);
      } else
        Xe.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function ua(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function Da() {
      {
        if (Ce.current) {
          var t = pe(Ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function wt(t) {
      return "";
    }
    var Aa = {};
    function _t(t) {
      {
        var p = Da();
        if (!p) {
          var v = typeof t == "string" ? t : t.displayName || t.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function Pa(t, p) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var v = _t(p);
        if (Aa[v])
          return;
        Aa[v] = !0;
        var T = "";
        t && t._owner && t._owner !== Ce.current && (T = " It was passed a child from " + pe(t._owner.type) + "."), Le(t), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, T), Le(null);
      }
    }
    function Na(t, p) {
      {
        if (typeof t != "object")
          return;
        if (He(t))
          for (var v = 0; v < t.length; v++) {
            var T = t[v];
            ua(T) && Pa(T, p);
          }
        else if (ua(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var G = $(t);
          if (typeof G == "function" && G !== t.entries)
            for (var V = G.call(t), F; !(F = V.next()).done; )
              ua(F.value) && Pa(F.value, p);
        }
      }
    }
    function Tt(t) {
      {
        var p = t.type;
        if (p == null || typeof p == "string")
          return;
        var v;
        if (typeof p == "function")
          v = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === b))
          v = p.propTypes;
        else
          return;
        if (v) {
          var T = pe(p);
          Ne(v, t.props, "prop", T, t);
        } else if (p.PropTypes !== void 0 && !da) {
          da = !0;
          var G = pe(p);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(t) {
      {
        for (var p = Object.keys(t.props), v = 0; v < p.length; v++) {
          var T = p[v];
          if (T !== "children" && T !== "key") {
            Le(t), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Le(null);
            break;
          }
        }
        t.ref !== null && (Le(t), K("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    var Ia = {};
    function La(t, p, v, T, G, V) {
      {
        var F = ce(t);
        if (!F) {
          var I = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = wt();
          ue ? I += ue : I += Da();
          var ie;
          t === null ? ie = "null" : He(t) ? ie = "array" : t !== void 0 && t.$$typeof === a ? (ie = "<" + (pe(t.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof t, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, I);
        }
        var oe = Ke(t, p, v, G, V);
        if (oe == null)
          return oe;
        if (F) {
          var ge = p.children;
          if (ge !== void 0)
            if (T)
              if (He(ge)) {
                for (var Fe = 0; Fe < ge.length; Fe++)
                  Na(ge[Fe], t);
                Object.freeze && Object.freeze(ge);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Na(ge, t);
        }
        if (Se.call(p, "key")) {
          var Oe = pe(t), fe = Object.keys(p).filter(function(Dt) {
            return Dt !== "key";
          }), fa = fe.length > 0 ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ia[Oe + fa]) {
            var Ot = fe.length > 0 ? "{" + fe.join(": ..., ") + ": ...}" : "{}";
            K(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fa, Oe, Ot, Oe), Ia[Oe + fa] = !0;
          }
        }
        return t === i ? kt(oe) : Tt(oe), oe;
      }
    }
    function jt(t, p, v) {
      return La(t, p, v, !0);
    }
    function St(t, p, v) {
      return La(t, p, v, !1);
    }
    var Rt = St, Ct = jt;
    Ye.Fragment = i, Ye.jsx = Rt, Ye.jsxs = Ct;
  }()), Ye;
}
var Ma;
function zt() {
  return Ma || (Ma = 1, process.env.NODE_ENV === "production" ? Qe.exports = Lt() : Qe.exports = Ft()), Qe.exports;
}
var x = zt();
const Ra = {
  BLITZE: ["DONNER_UMGEBUNG", "BLITZE_EINZELNE", "BLITZE_HAEUFIG", "BLITZE_EXTREM"],
  WIND: ["WIND_SCHWACH", "WIND_STARK", "WIND_STUERMISCH", "WIND_STURM", "WIND_ORKAN"],
  HAGEL: ["HAGEL_UNTER_1CM", "HAGEL_1CM", "HAGEL_2CM", "HAGEL_3CM", "HAGEL_5CM", "HAGEL_UEBER_7CM"],
  REGEN: ["REGEN_LEICHT", "REGEN_MITTEL", "REGEN_KRAEFTIG", "REGEN_STARK", "REGEN_EXTREM"],
  GLAETTE: ["GLAETTE_REIF", "GLAETTE_SCHNEE", "GLAETTE_UEBERFRIERENDE_NAESSE", "GLAETTE_GEFRIERENDER_REGEN"],
  SCHNEEFALL: ["SCHNEEFALL_WENIGE_FLOCKEN", "SCHNEEFALL_LEICHT", "SCHNEEFALL_MITTEL", "SCHNEEFALL_STARK"],
  SCHNEEDECKE: [
    "SCHNEEDECKE_SCHNEEMATSCH",
    "SCHNEEDECKE_BIS_1CM",
    "SCHNEEDECKE_BIS_3CM",
    "SCHNEEDECKE_BIS_10CM",
    "SCHNEEDECKE_BIS_20CM",
    "SCHNEEDECKE_BIS_50CM",
    "SCHNEEDECKE_UEBER_50CM"
  ],
  BEWOELKUNG: ["BEWOELKUNG_WOLKENLOS", "BEWOELKUNG_LEICHT_BEWOELKT", "BEWOELKUNG_WOLKIG", "BEWOELKUNG_BEDECKT"],
  NEBEL: ["NEBEL_LEICHT", "NEBEL_DICHT", "NEBEL_EXTREM"],
  TORNADO: ["TORNADO_NO_VISIBLE_DAMAGE", "TORNADO_F0", "TORNADO_F1", "TORNADO_F2", "TORNADO_F3", "TORNADO_F4"]
};
Object.entries(Ra).map(([e, a]) => ({
  category: e,
  auspraegungen: a
}));
const Mt = () => Object.entries(Ra).map(([e]) => e), Ht = (e) => Ra[e], Wt = {
  // Blitze, Blitz-Intensität
  BLITZE: "Blitze",
  DONNER_UMGEBUNG: "Donner in der Umgebung",
  BLITZE_EINZELNE: "schwach",
  // > 1min zwischen Blitzen
  BLITZE_HAEUFIG: "stark",
  // < 1min zwischen Blitzen
  BLITZE_EXTREM: "extrem",
  // <10sec zwischen Blitzen
  // Wind
  WIND: "Wind",
  WIND_SCHWACH: "schwach",
  // 'Schwacher Wind', // Dünne Zweige schwanken
  WIND_STARK: "stark",
  // 'Starker Wind ', // Starke Äste schwanken
  WIND_STUERMISCH: "stürmisch",
  // 'Stürmischer Wind',// Dnne Zweige brechen, Möbel umgeweht
  WIND_STURM: "Sturm",
  // Starke Äste brechen, Schäden an Häusern
  WIND_ORKAN: "Orkan",
  // Große Bäume entwurzelt, Dächer abgedeckt
  // Hagel
  HAGEL: "Hagel",
  HAGEL_UNTER_1CM: "unter 1 cm",
  // Linse
  HAGEL_1CM: "1 cm",
  // Erbse
  HAGEL_2CM: "2 cm",
  // 10 cent Münze
  HAGEL_3CM: "3 cm",
  // Kronkorken
  HAGEL_5CM: "5 cm",
  // Golfball
  HAGEL_UEBER_7CM: "über 7 cm",
  // Tennisball
  // zusatzatributen hagel
  HAGEL_GESCHLOSSENE_HAGELDECKE: "geschlossene Hageldecke",
  HAGEL_SCHADEN_PFLANZEN: "Schäden an Pflenzen",
  HAGEL_SCHADEN_DACHFENSTER: "Bruch von Dachfenstern und Gewächshäusern",
  HAGEL_SCHADEN_VEREINZELT: "vereinzelte Schäden an Dachziegel, Fensterscheiben und Fassaden",
  HAGEL_SCHADEN_ZERSTOERERISCH: "zerstörische Schäden an Dächern, Fenstern und Fahrzeugen",
  // Regen, Intensität des Regens
  REGEN: "Regen",
  REGEN_LEICHT: "leicht",
  // (Niesel- oder Landregen)', 
  REGEN_MITTEL: "mittel",
  // (Pfützenbildung in Senken)
  REGEN_KRAEFTIG: "kräftig",
  // (Wasserschicht auf Straßen)
  REGEN_STARK: "stark",
  // Überschwemmungen
  REGEN_EXTREM: "extrem",
  // Sturzbäche
  // Glätte, Ursache der Glätte
  GLAETTE: "Glätte",
  GLAETTE_REIF: "Reifglätte",
  //
  GLAETTE_SCHNEE: "Schneeglätte",
  //
  GLAETTE_UEBERFRIERENDE_NAESSE: "überfrierende Nässe",
  //
  GLAETTE_GEFRIERENDER_REGEN: "gefrierender Regen",
  //
  GLAETTE_GESCHLOSSENE_SCHICHT: "geschlossene Schicht",
  GLAETTE_DICKE_ICE_UEBER_1CM: "über 1 cm (Fingerdick",
  GLAETTE_DICKE_ICE_BIS_1CM: "unter 1 cm (Wellpappe)",
  GLAETTE_DICKE_SNOW_BIS_5CM: "unter 5 cm",
  GLAETTE_DICKE_SNOW_BIS_20CM: "unter 20 cm",
  GLAETTE_DICKE_SNOW_BIS_50CM: "unter 50 cm",
  GLAETTE_DICKE_SNOW_UEBER_50CM: "über 50 cm",
  // Schneefall
  SCHNEEFALL: "Schneefall",
  SCHNEEFALL_WENIGE_FLOCKEN: "wenige Flocken",
  //
  SCHNEEFALL_LEICHT: "leicht",
  // kaum Sicheinschränkungen
  SCHNEEFALL_MITTEL: "mittel",
  // Sich durch Schnee eingeschränkt
  SCHNEEFALL_STARK: "stark",
  // keine Sicht mehr
  // Schneedecke
  SCHNEEDECKE: "Schneedecke",
  SCHNEEDECKE_SCHNEEMATSCH: "Schneematsch",
  //
  SCHNEEDECKE_BIS_1CM: "bis 1 cm",
  //
  SCHNEEDECKE_BIS_3CM: "bis zu 3 cm",
  //
  SCHNEEDECKE_BIS_5CM: "bis zu 5 cm",
  //
  SCHNEEDECKE_BIS_10CM: "bis zu 10 cm",
  //
  SCHNEEDECKE_BIS_20CM: "bis zu 20 cm",
  //
  SCHNEEDECKE_BIS_50CM: "bis zu 50 cm",
  //
  SCHNEEDECKE_UEBER_50CM: "über 50 cm",
  //
  SCHNEEDECKE_FLECKWEISE: "Schneeflecken",
  SCHNEEDECKE_GESCHLOSSENE_SCHNEEDECKE: "geschlossene Schneedecke",
  // Bewölkung
  BEWOELKUNG: "Bewölkung",
  BEWOELKUNG_WOLKENLOS: "wolkenlos",
  BEWOELKUNG_LEICHT_BEWOELKT: "leicht bewölkt",
  BEWOELKUNG_WOLKIG: "wolkig",
  BEWOELKUNG_BEDECKT: "bedeckt",
  // Nebel, Sichtweite
  NEBEL: "Nebel",
  NEBEL_LEICHT: "unter 1000 m",
  // leichter Nebel
  NEBEL_DICHT: "unter 200 m",
  // dichter Nebel
  NEBEL_EXTREM: "unter 50 m",
  // extrem dichter Nebel
  // Tornado
  TORNADO: "Tornado",
  TORNADO_NO_VISIBLE_DAMAGE: "keine Schäden sichtbar",
  TORNADO_F0: "leicht",
  //F0: Schäden an Dächern und Bäumen
  TORNADO_F1: "moderat",
  //F1: Dächer abgedeckt, Bäume umgeworfen
  TORNADO_F2: "signifikant",
  //F2: Große Bäume entwurzelt
  TORNADO_F3: "schwer",
  //F3: Wände zerstört, Autos bewegt
  TORNADO_F4: "verheerend"
  //F4: Häuser zerstört, große Gegenstände aufgewirbelt
}, wa = (e) => Wt[e] || e, Gt = ({
  onSelectCategory: e,
  params: a = []
}) => /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ x.jsx("div", { className: "categories-header", children: "Kategorien" }),
  Mt().filter((n) => a === null || a.includes(n.toLowerCase()) || a.length === 0).map((n) => /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        e(n);
      },
      children: wa(n)
    },
    n
  ))
] }), qt = ({ category: e, onSelectAuspraegung: a }) => /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ x.jsx("div", { className: "categories-header", children: e ? wa(e) : "" }),
  e && Ht(e).map((n) => /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(n);
      },
      children: wa(n)
    },
    n
  ))
] }), Bt = ({ locations: e, onSelectLocation: a }) => /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ x.jsx("div", { className: "categories-header", children: "Standort" }),
  e.map((n) => /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(n);
      },
      children: n.place
    },
    n.place
  ))
] });
function $t(e, a) {
  const n = typeof e == "number" ? new Date(e) : e;
  return a.map(({ label: i, minutes: r }) => ({
    label: i,
    value: Math.floor(new Date(n.getTime() - r * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const Kt = ({ onSelectTimestamp: e }) => {
  const a = Date.now(), i = $t(a, [
    { label: "jetzt", minutes: 0 },
    { label: "vor 10 Minuten", minutes: 10 },
    { label: "vor 20 Minuten", minutes: 20 },
    { label: "vor 30 Minuten", minutes: 30 },
    { label: "vor eine Stunde", minutes: 60 }
  ]);
  return /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ x.jsx("div", { className: "categories-header", children: "Zeit" }),
    i.map((r) => /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "category-item",
        onClick: () => {
          e(r.value);
        },
        children: r.label
      },
      r.value
    ))
  ] });
}, Ut = "http://localhost:3001/data", Yt = (e, a, n, i) => (console.log(a), fetch(`${Ut}/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    token: String(e)
  },
  body: JSON.stringify({
    category: a.category,
    auspraegung: a.auspraegung,
    lat: a.lat,
    lon: a.lon,
    place: a.place,
    timestamp: a.timestamp * 1e3,
    source: a.source,
    imageUrl: a.imageUrl
  })
}).then(async (r) => {
  r.ok ? n() : i();
}).catch(() => {
  i();
}));
var ea = { exports: {} }, aa = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function Vt() {
  if (Ha) return q;
  Ha = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, Z = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, X = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
  function Y(s) {
    if (typeof s == "object" && s !== null) {
      var U = s.$$typeof;
      switch (U) {
        case a:
          switch (s = s.type, s) {
            case h:
            case E:
            case i:
            case o:
            case r:
            case b:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case g:
                case Z:
                case z:
                case d:
                  return s;
                default:
                  return U;
              }
          }
        case n:
          return U;
      }
    }
  }
  function M(s) {
    return Y(s) === E;
  }
  return q.AsyncMode = h, q.ConcurrentMode = E, q.ContextConsumer = l, q.ContextProvider = d, q.Element = a, q.ForwardRef = g, q.Fragment = i, q.Lazy = Z, q.Memo = z, q.Portal = n, q.Profiler = o, q.StrictMode = r, q.Suspense = b, q.isAsyncMode = function(s) {
    return M(s) || Y(s) === h;
  }, q.isConcurrentMode = M, q.isContextConsumer = function(s) {
    return Y(s) === l;
  }, q.isContextProvider = function(s) {
    return Y(s) === d;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === a;
  }, q.isForwardRef = function(s) {
    return Y(s) === g;
  }, q.isFragment = function(s) {
    return Y(s) === i;
  }, q.isLazy = function(s) {
    return Y(s) === Z;
  }, q.isMemo = function(s) {
    return Y(s) === z;
  }, q.isPortal = function(s) {
    return Y(s) === n;
  }, q.isProfiler = function(s) {
    return Y(s) === o;
  }, q.isStrictMode = function(s) {
    return Y(s) === r;
  }, q.isSuspense = function(s) {
    return Y(s) === b;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === i || s === E || s === o || s === r || s === b || s === O || typeof s == "object" && s !== null && (s.$$typeof === Z || s.$$typeof === z || s.$$typeof === d || s.$$typeof === l || s.$$typeof === g || s.$$typeof === $ || s.$$typeof === X || s.$$typeof === K || s.$$typeof === P);
  }, q.typeOf = Y, q;
}
var B = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function Jt() {
  return Wa || (Wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, Z = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, X = e ? Symbol.for("react.responder") : 60118, K = e ? Symbol.for("react.scope") : 60119;
    function Y(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === i || u === E || u === o || u === r || u === b || u === O || typeof u == "object" && u !== null && (u.$$typeof === Z || u.$$typeof === z || u.$$typeof === d || u.$$typeof === l || u.$$typeof === g || u.$$typeof === $ || u.$$typeof === X || u.$$typeof === K || u.$$typeof === P);
    }
    function M(u) {
      if (typeof u == "object" && u !== null) {
        var se = u.$$typeof;
        switch (se) {
          case a:
            var _e = u.type;
            switch (_e) {
              case h:
              case E:
              case i:
              case o:
              case r:
              case b:
                return _e;
              default:
                var ye = _e && _e.$$typeof;
                switch (ye) {
                  case l:
                  case g:
                  case Z:
                  case z:
                  case d:
                    return ye;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var s = h, U = E, L = l, H = d, D = a, ce = g, me = i, Ee = Z, pe = z, W = n, ae = o, le = r, ve = b, be = !1;
    function re(u) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(u) || M(u) === h;
    }
    function c(u) {
      return M(u) === E;
    }
    function m(u) {
      return M(u) === l;
    }
    function k(u) {
      return M(u) === d;
    }
    function S(u) {
      return typeof u == "object" && u !== null && u.$$typeof === a;
    }
    function w(u) {
      return M(u) === g;
    }
    function A(u) {
      return M(u) === i;
    }
    function _(u) {
      return M(u) === Z;
    }
    function j(u) {
      return M(u) === z;
    }
    function C(u) {
      return M(u) === n;
    }
    function N(u) {
      return M(u) === o;
    }
    function R(u) {
      return M(u) === r;
    }
    function te(u) {
      return M(u) === b;
    }
    B.AsyncMode = s, B.ConcurrentMode = U, B.ContextConsumer = L, B.ContextProvider = H, B.Element = D, B.ForwardRef = ce, B.Fragment = me, B.Lazy = Ee, B.Memo = pe, B.Portal = W, B.Profiler = ae, B.StrictMode = le, B.Suspense = ve, B.isAsyncMode = re, B.isConcurrentMode = c, B.isContextConsumer = m, B.isContextProvider = k, B.isElement = S, B.isForwardRef = w, B.isFragment = A, B.isLazy = _, B.isMemo = j, B.isPortal = C, B.isProfiler = N, B.isStrictMode = R, B.isSuspense = te, B.isValidElementType = Y, B.typeOf = M;
  }()), B;
}
var Ga;
function lt() {
  return Ga || (Ga = 1, process.env.NODE_ENV === "production" ? aa.exports = Vt() : aa.exports = Jt()), aa.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ma, qa;
function Zt() {
  if (qa) return ma;
  qa = 1;
  var e = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function i(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var d = {}, l = 0; l < 10; l++)
        d["_" + String.fromCharCode(l)] = l;
      var h = Object.getOwnPropertyNames(d).map(function(g) {
        return d[g];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        E[g] = g;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ma = r() ? Object.assign : function(o, d) {
    for (var l, h = i(o), E, g = 1; g < arguments.length; g++) {
      l = Object(arguments[g]);
      for (var b in l)
        a.call(l, b) && (h[b] = l[b]);
      if (e) {
        E = e(l);
        for (var O = 0; O < E.length; O++)
          n.call(l, E[O]) && (h[E[O]] = l[E[O]]);
      }
    }
    return h;
  }, ma;
}
var va, Ba;
function Ca() {
  if (Ba) return va;
  Ba = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return va = e, va;
}
var xa, $a;
function st() {
  return $a || ($a = 1, xa = Function.call.bind(Object.prototype.hasOwnProperty)), xa;
}
var ga, Ka;
function Xt() {
  if (Ka) return ga;
  Ka = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = /* @__PURE__ */ Ca(), n = {}, i = /* @__PURE__ */ st();
    e = function(o) {
      var d = "Warning: " + o;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function r(o, d, l, h, E) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in o)
        if (i(o, g)) {
          var b;
          try {
            if (typeof o[g] != "function") {
              var O = Error(
                (h || "React class") + ": " + l + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            b = o[g](d, g, h, l, null, a);
          } catch (Z) {
            b = Z;
          }
          if (b && !(b instanceof Error) && e(
            (h || "React class") + ": type specification of " + l + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in n)) {
            n[b.message] = !0;
            var z = E ? E() : "";
            e(
              "Failed " + l + " type: " + b.message + (z ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ga = r, ga;
}
var ha, Ua;
function Qt() {
  if (Ua) return ha;
  Ua = 1;
  var e = lt(), a = Zt(), n = /* @__PURE__ */ Ca(), i = /* @__PURE__ */ st(), r = /* @__PURE__ */ Xt(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var h = "Warning: " + l;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return ha = function(l, h) {
    var E = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function b(c) {
      var m = c && (E && c[E] || c[g]);
      if (typeof m == "function")
        return m;
    }
    var O = "<<anonymous>>", z = {
      array: X("array"),
      bigint: X("bigint"),
      bool: X("boolean"),
      func: X("function"),
      number: X("number"),
      object: X("object"),
      string: X("string"),
      symbol: X("symbol"),
      any: K(),
      arrayOf: Y,
      element: M(),
      elementType: s(),
      instanceOf: U,
      node: ce(),
      objectOf: H,
      oneOf: L,
      oneOfType: D,
      shape: Ee,
      exact: pe
    };
    function Z(c, m) {
      return c === m ? c !== 0 || 1 / c === 1 / m : c !== c && m !== m;
    }
    function P(c, m) {
      this.message = c, this.data = m && typeof m == "object" ? m : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function $(c) {
      if (process.env.NODE_ENV !== "production")
        var m = {}, k = 0;
      function S(A, _, j, C, N, R, te) {
        if (C = C || O, R = R || j, te !== n) {
          if (h) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = C + ":" + j;
            !m[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), m[se] = !0, k++);
          }
        }
        return _[j] == null ? A ? _[j] === null ? new P("The " + N + " `" + R + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new P("The " + N + " `" + R + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : c(_, j, C, N, R);
      }
      var w = S.bind(null, !1);
      return w.isRequired = S.bind(null, !0), w;
    }
    function X(c) {
      function m(k, S, w, A, _, j) {
        var C = k[S], N = le(C);
        if (N !== c) {
          var R = ve(C);
          return new P(
            "Invalid " + A + " `" + _ + "` of type " + ("`" + R + "` supplied to `" + w + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return $(m);
    }
    function K() {
      return $(d);
    }
    function Y(c) {
      function m(k, S, w, A, _) {
        if (typeof c != "function")
          return new P("Property `" + _ + "` of component `" + w + "` has invalid PropType notation inside arrayOf.");
        var j = k[S];
        if (!Array.isArray(j)) {
          var C = le(j);
          return new P("Invalid " + A + " `" + _ + "` of type " + ("`" + C + "` supplied to `" + w + "`, expected an array."));
        }
        for (var N = 0; N < j.length; N++) {
          var R = c(j, N, w, A, _ + "[" + N + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return $(m);
    }
    function M() {
      function c(m, k, S, w, A) {
        var _ = m[k];
        if (!l(_)) {
          var j = le(_);
          return new P("Invalid " + w + " `" + A + "` of type " + ("`" + j + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(c);
    }
    function s() {
      function c(m, k, S, w, A) {
        var _ = m[k];
        if (!e.isValidElementType(_)) {
          var j = le(_);
          return new P("Invalid " + w + " `" + A + "` of type " + ("`" + j + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(c);
    }
    function U(c) {
      function m(k, S, w, A, _) {
        if (!(k[S] instanceof c)) {
          var j = c.name || O, C = re(k[S]);
          return new P("Invalid " + A + " `" + _ + "` of type " + ("`" + C + "` supplied to `" + w + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return $(m);
    }
    function L(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), d;
      function m(k, S, w, A, _) {
        for (var j = k[S], C = 0; C < c.length; C++)
          if (Z(j, c[C]))
            return null;
        var N = JSON.stringify(c, function(te, u) {
          var se = ve(u);
          return se === "symbol" ? String(u) : u;
        });
        return new P("Invalid " + A + " `" + _ + "` of value `" + String(j) + "` " + ("supplied to `" + w + "`, expected one of " + N + "."));
      }
      return $(m);
    }
    function H(c) {
      function m(k, S, w, A, _) {
        if (typeof c != "function")
          return new P("Property `" + _ + "` of component `" + w + "` has invalid PropType notation inside objectOf.");
        var j = k[S], C = le(j);
        if (C !== "object")
          return new P("Invalid " + A + " `" + _ + "` of type " + ("`" + C + "` supplied to `" + w + "`, expected an object."));
        for (var N in j)
          if (i(j, N)) {
            var R = c(j, N, w, A, _ + "." + N, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return $(m);
    }
    function D(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var m = 0; m < c.length; m++) {
        var k = c[m];
        if (typeof k != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(k) + " at index " + m + "."
          ), d;
      }
      function S(w, A, _, j, C) {
        for (var N = [], R = 0; R < c.length; R++) {
          var te = c[R], u = te(w, A, _, j, C, n);
          if (u == null)
            return null;
          u.data && i(u.data, "expectedType") && N.push(u.data.expectedType);
        }
        var se = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new P("Invalid " + j + " `" + C + "` supplied to " + ("`" + _ + "`" + se + "."));
      }
      return $(S);
    }
    function ce() {
      function c(m, k, S, w, A) {
        return W(m[k]) ? null : new P("Invalid " + w + " `" + A + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return $(c);
    }
    function me(c, m, k, S, w) {
      return new P(
        (c || "React class") + ": " + m + " type `" + k + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + w + "`."
      );
    }
    function Ee(c) {
      function m(k, S, w, A, _) {
        var j = k[S], C = le(j);
        if (C !== "object")
          return new P("Invalid " + A + " `" + _ + "` of type `" + C + "` " + ("supplied to `" + w + "`, expected `object`."));
        for (var N in c) {
          var R = c[N];
          if (typeof R != "function")
            return me(w, A, _, N, ve(R));
          var te = R(j, N, w, A, _ + "." + N, n);
          if (te)
            return te;
        }
        return null;
      }
      return $(m);
    }
    function pe(c) {
      function m(k, S, w, A, _) {
        var j = k[S], C = le(j);
        if (C !== "object")
          return new P("Invalid " + A + " `" + _ + "` of type `" + C + "` " + ("supplied to `" + w + "`, expected `object`."));
        var N = a({}, k[S], c);
        for (var R in N) {
          var te = c[R];
          if (i(c, R) && typeof te != "function")
            return me(w, A, _, R, ve(te));
          if (!te)
            return new P(
              "Invalid " + A + " `" + _ + "` key `" + R + "` supplied to `" + w + "`.\nBad object: " + JSON.stringify(k[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var u = te(j, R, w, A, _ + "." + R, n);
          if (u)
            return u;
        }
        return null;
      }
      return $(m);
    }
    function W(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(W);
          if (c === null || l(c))
            return !0;
          var m = b(c);
          if (m) {
            var k = m.call(c), S;
            if (m !== c.entries) {
              for (; !(S = k.next()).done; )
                if (!W(S.value))
                  return !1;
            } else
              for (; !(S = k.next()).done; ) {
                var w = S.value;
                if (w && !W(w[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(c, m) {
      return c === "symbol" ? !0 : m ? m["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && m instanceof Symbol : !1;
    }
    function le(c) {
      var m = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : ae(m, c) ? "symbol" : m;
    }
    function ve(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var m = le(c);
      if (m === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return m;
    }
    function be(c) {
      var m = ve(c);
      switch (m) {
        case "array":
        case "object":
          return "an " + m;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + m;
        default:
          return m;
      }
    }
    function re(c) {
      return !c.constructor || !c.constructor.name ? O : c.constructor.name;
    }
    return z.checkPropTypes = r, z.resetWarningCache = r.resetWarningCache, z.PropTypes = z, z;
  }, ha;
}
var ba, Ya;
function en() {
  if (Ya) return ba;
  Ya = 1;
  var e = /* @__PURE__ */ Ca();
  function a() {
  }
  function n() {
  }
  return n.resetWarningCache = a, ba = function() {
    function i(d, l, h, E, g, b) {
      if (b !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    i.isRequired = i;
    function r() {
      return i;
    }
    var o = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: r,
      element: i,
      elementType: i,
      instanceOf: r,
      node: i,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: n,
      resetWarningCache: a
    };
    return o.PropTypes = o, o;
  }, ba;
}
var Va;
function an() {
  if (Va) return ea.exports;
  if (Va = 1, process.env.NODE_ENV !== "production") {
    var e = lt(), a = !0;
    ea.exports = /* @__PURE__ */ Qt()(e.isElement, a);
  } else
    ea.exports = /* @__PURE__ */ en()();
  return ea.exports;
}
var tn = /* @__PURE__ */ an();
const J = /* @__PURE__ */ ct(tn);
function Ae(e, a, n, i) {
  function r(o) {
    return o instanceof n ? o : new n(function(d) {
      d(o);
    });
  }
  return new (n || (n = Promise))(function(o, d) {
    function l(g) {
      try {
        E(i.next(g));
      } catch (b) {
        d(b);
      }
    }
    function h(g) {
      try {
        E(i.throw(g));
      } catch (b) {
        d(b);
      }
    }
    function E(g) {
      g.done ? o(g.value) : r(g.value).then(l, h);
    }
    E((i = i.apply(e, a || [])).next());
  });
}
const nn = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function Me(e, a, n) {
  const i = rn(e), { webkitRelativePath: r } = e, o = typeof a == "string" ? a : typeof r == "string" && r.length > 0 ? r : `./${e.name}`;
  return typeof i.path != "string" && Ja(i, "path", o), Ja(i, "relativePath", o), i;
}
function rn(e) {
  const { name: a } = e;
  if (a && a.lastIndexOf(".") !== -1 && !e.type) {
    const i = a.split(".").pop().toLowerCase(), r = nn.get(i);
    r && Object.defineProperty(e, "type", {
      value: r,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Ja(e, a, n) {
  Object.defineProperty(e, a, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const on = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function pn(e) {
  return Ae(this, void 0, void 0, function* () {
    return ra(e) && cn(e.dataTransfer) ? un(e.dataTransfer, e.type) : ln(e) ? sn(e) : Array.isArray(e) && e.every((a) => "getFile" in a && typeof a.getFile == "function") ? dn(e) : [];
  });
}
function cn(e) {
  return ra(e);
}
function ln(e) {
  return ra(e) && ra(e.target);
}
function ra(e) {
  return typeof e == "object" && e !== null;
}
function sn(e) {
  return _a(e.target.files).map((a) => Me(a));
}
function dn(e) {
  return Ae(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => Me(n));
  });
}
function un(e, a) {
  return Ae(this, void 0, void 0, function* () {
    if (e.items) {
      const n = _a(e.items).filter((r) => r.kind === "file");
      if (a !== "drop")
        return n;
      const i = yield Promise.all(n.map(fn));
      return Za(dt(i));
    }
    return Za(_a(e.files).map((n) => Me(n)));
  });
}
function Za(e) {
  return e.filter((a) => on.indexOf(a.name) === -1);
}
function _a(e) {
  if (e === null)
    return [];
  const a = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    a.push(i);
  }
  return a;
}
function fn(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Xa(e);
  const a = e.webkitGetAsEntry();
  return a && a.isDirectory ? ut(a) : Xa(e, a);
}
function dt(e) {
  return e.reduce((a, n) => [
    ...a,
    ...Array.isArray(n) ? dt(n) : [n]
  ], []);
}
function Xa(e, a) {
  return Ae(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const o = yield e.getAsFileSystemHandle();
      if (o === null)
        throw new Error(`${e} is not a File`);
      if (o !== void 0) {
        const d = yield o.getFile();
        return d.handle = o, Me(d);
      }
    }
    const i = e.getAsFile();
    if (!i)
      throw new Error(`${e} is not a File`);
    return Me(i, (n = a == null ? void 0 : a.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function mn(e) {
  return Ae(this, void 0, void 0, function* () {
    return e.isDirectory ? ut(e) : vn(e);
  });
}
function ut(e) {
  const a = e.createReader();
  return new Promise((n, i) => {
    const r = [];
    function o() {
      a.readEntries((d) => Ae(this, void 0, void 0, function* () {
        if (d.length) {
          const l = Promise.all(d.map(mn));
          r.push(l), o();
        } else
          try {
            const l = yield Promise.all(r);
            n(l);
          } catch (l) {
            i(l);
          }
      }), (d) => {
        i(d);
      });
    }
    o();
  });
}
function vn(e) {
  return Ae(this, void 0, void 0, function* () {
    return new Promise((a, n) => {
      e.file((i) => {
        const r = Me(i, e.fullPath);
        a(r);
      }, (i) => {
        n(i);
      });
    });
  });
}
var ta = {}, Qa;
function xn() {
  return Qa || (Qa = 1, ta.__esModule = !0, ta.default = function(e, a) {
    if (e && a) {
      var n = Array.isArray(a) ? a : a.split(",");
      if (n.length === 0)
        return !0;
      var i = e.name || "", r = (e.type || "").toLowerCase(), o = r.replace(/\/.*$/, "");
      return n.some(function(d) {
        var l = d.trim().toLowerCase();
        return l.charAt(0) === "." ? i.toLowerCase().endsWith(l) : l.endsWith("/*") ? o === l.replace(/\/.*$/, "") : r === l;
      });
    }
    return !0;
  }), ta;
}
var gn = xn();
const Ea = /* @__PURE__ */ ct(gn);
function et(e) {
  return En(e) || bn(e) || mt(e) || hn();
}
function hn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function En(e) {
  if (Array.isArray(e)) return Ta(e);
}
function at(e, a) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    a && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function tt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? at(Object(n), !0).forEach(function(i) {
      ft(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function ft(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
function Ze(e, a) {
  return _n(e) || wn(e, a) || mt(e, a) || yn();
}
function yn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mt(e, a) {
  if (e) {
    if (typeof e == "string") return Ta(e, a);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ta(e, a);
  }
}
function Ta(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var n = 0, i = new Array(a); n < a; n++)
    i[n] = e[n];
  return i;
}
function wn(e, a) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i = [], r = !0, o = !1, d, l;
    try {
      for (n = n.call(e); !(r = (d = n.next()).done) && (i.push(d.value), !(a && i.length === a)); r = !0)
        ;
    } catch (h) {
      o = !0, l = h;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (o) throw l;
      }
    }
    return i;
  }
}
function _n(e) {
  if (Array.isArray(e)) return e;
}
var Tn = typeof Ea == "function" ? Ea : Ea.default, kn = "file-invalid-type", jn = "file-too-large", Sn = "file-too-small", Rn = "too-many-files", Cn = function() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = a.split(","), i = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: kn,
    message: "File type must be ".concat(i)
  };
}, nt = function(a) {
  return {
    code: jn,
    message: "File is larger than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, it = function(a) {
  return {
    code: Sn,
    message: "File is smaller than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, On = {
  code: Rn,
  message: "Too many files"
};
function vt(e, a) {
  var n = e.type === "application/x-moz-file" || Tn(e, a);
  return [n, n ? null : Cn(a)];
}
function xt(e, a, n) {
  if (De(e.size))
    if (De(a) && De(n)) {
      if (e.size > n) return [!1, nt(n)];
      if (e.size < a) return [!1, it(a)];
    } else {
      if (De(a) && e.size < a) return [!1, it(a)];
      if (De(n) && e.size > n) return [!1, nt(n)];
    }
  return [!0, null];
}
function De(e) {
  return e != null;
}
function Dn(e) {
  var a = e.files, n = e.accept, i = e.minSize, r = e.maxSize, o = e.multiple, d = e.maxFiles, l = e.validator;
  return !o && a.length > 1 || o && d >= 1 && a.length > d ? !1 : a.every(function(h) {
    var E = vt(h, n), g = Ze(E, 1), b = g[0], O = xt(h, i, r), z = Ze(O, 1), Z = z[0], P = l ? l(h) : null;
    return b && Z && !P;
  });
}
function oa(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function na(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(a) {
    return a === "Files" || a === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function rt(e) {
  e.preventDefault();
}
function An(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Pn(e) {
  return e.indexOf("Edge/") !== -1;
}
function Nn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return An(e) || Pn(e);
}
function we() {
  for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++)
    a[n] = arguments[n];
  return function(i) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), d = 1; d < r; d++)
      o[d - 1] = arguments[d];
    return a.some(function(l) {
      return !oa(i) && l && l.apply(void 0, [i].concat(o)), oa(i);
    });
  };
}
function In() {
  return "showOpenFilePicker" in window;
}
function Ln(e) {
  if (De(e)) {
    var a = Object.entries(e).filter(function(n) {
      var i = Ze(n, 2), r = i[0], o = i[1], d = !0;
      return gt(r) || (console.warn('Skipped "'.concat(r, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), d = !1), (!Array.isArray(o) || !o.every(ht)) && (console.warn('Skipped "'.concat(r, '" because an invalid file extension was provided.')), d = !1), d;
    }).reduce(function(n, i) {
      var r = Ze(i, 2), o = r[0], d = r[1];
      return tt(tt({}, n), {}, ft({}, o, d));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: a
    }];
  }
  return e;
}
function Fn(e) {
  if (De(e))
    return Object.entries(e).reduce(function(a, n) {
      var i = Ze(n, 2), r = i[0], o = i[1];
      return [].concat(et(a), [r], et(o));
    }, []).filter(function(a) {
      return gt(a) || ht(a);
    }).join(",");
}
function zn(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Mn(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function gt(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ht(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Hn = ["children"], Wn = ["open"], Gn = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], qn = ["refKey", "onChange", "onClick"];
function Bn(e) {
  return Un(e) || Kn(e) || bt(e) || $n();
}
function $n() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Un(e) {
  if (Array.isArray(e)) return ka(e);
}
function ya(e, a) {
  return Jn(e) || Vn(e, a) || bt(e, a) || Yn();
}
function Yn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bt(e, a) {
  if (e) {
    if (typeof e == "string") return ka(e, a);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ka(e, a);
  }
}
function ka(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var n = 0, i = new Array(a); n < a; n++)
    i[n] = e[n];
  return i;
}
function Vn(e, a) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i = [], r = !0, o = !1, d, l;
    try {
      for (n = n.call(e); !(r = (d = n.next()).done) && (i.push(d.value), !(a && i.length === a)); r = !0)
        ;
    } catch (h) {
      o = !0, l = h;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (o) throw l;
      }
    }
    return i;
  }
}
function Jn(e) {
  if (Array.isArray(e)) return e;
}
function ot(e, a) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    a && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function ee(e) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ot(Object(n), !0).forEach(function(i) {
      ja(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function ja(e, a, n) {
  return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e;
}
function pa(e, a) {
  if (e == null) return {};
  var n = Zn(e, a), i, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      i = o[r], !(a.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
function Zn(e, a) {
  if (e == null) return {};
  var n = {}, i = Object.keys(e), r, o;
  for (o = 0; o < i.length; o++)
    r = i[o], !(a.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Oa = /* @__PURE__ */ Pt(function(e, a) {
  var n = e.children, i = pa(e, Hn), r = yt(i), o = r.open, d = pa(r, Wn);
  return Nt(a, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ ca.createElement(It, null, n(ee(ee({}, d), {}, {
    open: o
  })));
});
Oa.displayName = "Dropzone";
var Et = {
  disabled: !1,
  getFilesFromEvent: pn,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1
};
Oa.defaultProps = Et;
Oa.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: J.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: J.objectOf(J.arrayOf(J.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: J.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: J.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: J.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: J.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: J.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: J.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: J.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: J.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: J.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: J.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: J.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: J.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: J.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: J.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: J.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: J.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: J.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: J.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: J.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: J.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: J.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: J.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: J.func
};
var Sa = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function yt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = ee(ee({}, Et), e), n = a.accept, i = a.disabled, r = a.getFilesFromEvent, o = a.maxSize, d = a.minSize, l = a.multiple, h = a.maxFiles, E = a.onDragEnter, g = a.onDragLeave, b = a.onDragOver, O = a.onDrop, z = a.onDropAccepted, Z = a.onDropRejected, P = a.onFileDialogCancel, $ = a.onFileDialogOpen, X = a.useFsAccessApi, K = a.autoFocus, Y = a.preventDropOnDocument, M = a.noClick, s = a.noKeyboard, U = a.noDrag, L = a.noDragEventsBubbling, H = a.onError, D = a.validator, ce = ze(function() {
    return Fn(n);
  }, [n]), me = ze(function() {
    return Ln(n);
  }, [n]), Ee = ze(function() {
    return typeof $ == "function" ? $ : pt;
  }, [$]), pe = ze(function() {
    return typeof P == "function" ? P : pt;
  }, [P]), W = Ve(null), ae = Ve(null), le = At(Xn, Sa), ve = ya(le, 2), be = ve[0], re = ve[1], c = be.isFocused, m = be.isFileDialogActive, k = Ve(typeof window < "u" && window.isSecureContext && X && In()), S = function() {
    !k.current && m && setTimeout(function() {
      if (ae.current) {
        var y = ae.current.files;
        y.length || (re({
          type: "closeDialog"
        }), pe());
      }
    }, 300);
  };
  Je(function() {
    return window.addEventListener("focus", S, !1), function() {
      window.removeEventListener("focus", S, !1);
    };
  }, [ae, m, pe, k]);
  var w = Ve([]), A = function(y) {
    W.current && W.current.contains(y.target) || (y.preventDefault(), w.current = []);
  };
  Je(function() {
    return Y && (document.addEventListener("dragover", rt, !1), document.addEventListener("drop", A, !1)), function() {
      Y && (document.removeEventListener("dragover", rt), document.removeEventListener("drop", A));
    };
  }, [W, Y]), Je(function() {
    return !i && K && W.current && W.current.focus(), function() {
    };
  }, [W, K, i]);
  var _ = xe(function(f) {
    H ? H(f) : console.error(f);
  }, [H]), j = xe(function(f) {
    f.preventDefault(), f.persist(), Ne(f), w.current = [].concat(Bn(w.current), [f.target]), na(f) && Promise.resolve(r(f)).then(function(y) {
      if (!(oa(f) && !L)) {
        var Q = y.length, ne = Q > 0 && Dn({
          files: y,
          accept: ce,
          minSize: d,
          maxSize: o,
          multiple: l,
          maxFiles: h,
          validator: D
        }), de = Q > 0 && !ne;
        re({
          isDragAccept: ne,
          isDragReject: de,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), E && E(f);
      }
    }).catch(function(y) {
      return _(y);
    });
  }, [r, E, _, L, ce, d, o, l, h, D]), C = xe(function(f) {
    f.preventDefault(), f.persist(), Ne(f);
    var y = na(f);
    if (y && f.dataTransfer)
      try {
        f.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return y && b && b(f), !1;
  }, [b, L]), N = xe(function(f) {
    f.preventDefault(), f.persist(), Ne(f);
    var y = w.current.filter(function(ne) {
      return W.current && W.current.contains(ne);
    }), Q = y.indexOf(f.target);
    Q !== -1 && y.splice(Q, 1), w.current = y, !(y.length > 0) && (re({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), na(f) && g && g(f));
  }, [W, g, L]), R = xe(function(f, y) {
    var Q = [], ne = [];
    f.forEach(function(de) {
      var Re = vt(de, ce), je = ya(Re, 2), We = je[0], Ge = je[1], qe = xt(de, d, o), Ie = ya(qe, 2), Be = Ie[0], $e = Ie[1], Ke = D ? D(de) : null;
      if (We && Be && !Ke)
        Q.push(de);
      else {
        var Ce = [Ge, $e];
        Ke && (Ce = Ce.concat(Ke)), ne.push({
          file: de,
          errors: Ce.filter(function(Xe) {
            return Xe;
          })
        });
      }
    }), (!l && Q.length > 1 || l && h >= 1 && Q.length > h) && (Q.forEach(function(de) {
      ne.push({
        file: de,
        errors: [On]
      });
    }), Q.splice(0)), re({
      acceptedFiles: Q,
      fileRejections: ne,
      isDragReject: ne.length > 0,
      type: "setFiles"
    }), O && O(Q, ne, y), ne.length > 0 && Z && Z(ne, y), Q.length > 0 && z && z(Q, y);
  }, [re, l, ce, d, o, h, O, z, Z, D]), te = xe(function(f) {
    f.preventDefault(), f.persist(), Ne(f), w.current = [], na(f) && Promise.resolve(r(f)).then(function(y) {
      oa(f) && !L || R(y, f);
    }).catch(function(y) {
      return _(y);
    }), re({
      type: "reset"
    });
  }, [r, R, _, L]), u = xe(function() {
    if (k.current) {
      re({
        type: "openDialog"
      }), Ee();
      var f = {
        multiple: l,
        types: me
      };
      window.showOpenFilePicker(f).then(function(y) {
        return r(y);
      }).then(function(y) {
        R(y, null), re({
          type: "closeDialog"
        });
      }).catch(function(y) {
        zn(y) ? (pe(y), re({
          type: "closeDialog"
        })) : Mn(y) ? (k.current = !1, ae.current ? (ae.current.value = null, ae.current.click()) : _(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : _(y);
      });
      return;
    }
    ae.current && (re({
      type: "openDialog"
    }), Ee(), ae.current.value = null, ae.current.click());
  }, [re, Ee, pe, X, R, _, me, l]), se = xe(function(f) {
    !W.current || !W.current.isEqualNode(f.target) || (f.key === " " || f.key === "Enter" || f.keyCode === 32 || f.keyCode === 13) && (f.preventDefault(), u());
  }, [W, u]), _e = xe(function() {
    re({
      type: "focus"
    });
  }, []), ye = xe(function() {
    re({
      type: "blur"
    });
  }, []), Se = xe(function() {
    M || (Nn() ? setTimeout(u, 0) : u());
  }, [M, u]), Te = function(y) {
    return i ? null : y;
  }, Pe = function(y) {
    return s ? null : Te(y);
  }, ke = function(y) {
    return U ? null : Te(y);
  }, Ne = function(y) {
    L && y.stopPropagation();
  }, la = ze(function() {
    return function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = f.refKey, Q = y === void 0 ? "ref" : y, ne = f.role, de = f.onKeyDown, Re = f.onFocus, je = f.onBlur, We = f.onClick, Ge = f.onDragEnter, qe = f.onDragOver, Ie = f.onDragLeave, Be = f.onDrop, $e = pa(f, Gn);
      return ee(ee(ja({
        onKeyDown: Pe(we(de, se)),
        onFocus: Pe(we(Re, _e)),
        onBlur: Pe(we(je, ye)),
        onClick: Te(we(We, Se)),
        onDragEnter: ke(we(Ge, j)),
        onDragOver: ke(we(qe, C)),
        onDragLeave: ke(we(Ie, N)),
        onDrop: ke(we(Be, te)),
        role: typeof ne == "string" && ne !== "" ? ne : "presentation"
      }, Q, W), !i && !s ? {
        tabIndex: 0
      } : {}), $e);
    };
  }, [W, se, _e, ye, Se, j, C, N, te, s, U, i]), He = xe(function(f) {
    f.stopPropagation();
  }, []), sa = ze(function() {
    return function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = f.refKey, Q = y === void 0 ? "ref" : y, ne = f.onChange, de = f.onClick, Re = pa(f, qn), je = ja({
        accept: ce,
        multiple: l,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: Te(we(ne, te)),
        onClick: Te(we(de, He)),
        tabIndex: -1
      }, Q, ae);
      return ee(ee({}, je), Re);
    };
  }, [ae, n, l, te, i]);
  return ee(ee({}, be), {}, {
    isFocused: c && !i,
    getRootProps: la,
    getInputProps: sa,
    rootRef: W,
    inputRef: ae,
    open: Te(u)
  });
}
function Xn(e, a) {
  switch (a.type) {
    case "focus":
      return ee(ee({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ee(ee({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ee(ee({}, Sa), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ee(ee({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ee(ee({}, e), {}, {
        isDragActive: a.isDragActive,
        isDragAccept: a.isDragAccept,
        isDragReject: a.isDragReject
      });
    case "setFiles":
      return ee(ee({}, e), {}, {
        acceptedFiles: a.acceptedFiles,
        fileRejections: a.fileRejections,
        isDragReject: a.isDragReject
      });
    case "reset":
      return ee({}, Sa);
    default:
      return e;
  }
}
function pt() {
}
const Qn = ({ onImageUploaded: e, onUploadError: a, className: n, triggerUploadRef: i }) => {
  const [r, o] = he(null), [d, l] = he("idle"), [h, E] = he(0), [g, b] = he(""), O = xe((M, s) => {
    var U, L;
    if (s.length > 0) {
      const H = s[0];
      ((U = H.errors[0]) == null ? void 0 : U.code) === "file-too-large" ? b("Datei ist zu groß. Maximale Größe: 10MB") : ((L = H.errors[0]) == null ? void 0 : L.code) === "file-invalid-type" ? b("Nur Bilddateien sind erlaubt (JPG, PNG, GIF, WEBP)") : b("Fehler beim Hochladen der Datei");
      return;
    }
    if (M.length > 0) {
      const H = M[0];
      o(H), b(""), l("idle"), E(0);
    }
  }, []), z = async (M) => {
    l("uploading"), E(0);
    const s = new FormData();
    s.append("photo", M);
    try {
      const U = new XMLHttpRequest();
      U.upload.addEventListener("progress", (H) => {
        if (H.lengthComputable) {
          const D = Math.round(H.loaded / H.total * 100);
          E(D);
        }
      });
      const L = await new Promise((H, D) => {
        U.addEventListener("load", () => H(U)), U.addEventListener("error", () => D(new Error("Upload failed"))), U.addEventListener("abort", () => D(new Error("Upload aborted"))), U.open("POST", "http://localhost:3001/upload/photo"), U.send(s);
      });
      if (L.status >= 200 && L.status < 300) {
        l("success"), E(100);
        try {
          const H = JSON.parse(L.responseText);
          console.log("Upload erfolgreich:", H), e && e(H);
        } catch {
          console.log("Upload erfolgreich, aber keine JSON-Antwort"), e && e({ fileName: "unknown", size: 0, type: "unknown" });
        }
      } else {
        const H = `Fehler beim Hochladen: ${L.status} ${L.statusText}`;
        throw l("error"), b(H), a && a(H), new Error(H);
      }
    } catch (U) {
      const L = "Netzwerkfehler beim Hochladen";
      throw l("error"), b(L), console.error("Upload error:", U), a && a(L), U;
    }
  }, { getRootProps: Z, getInputProps: P, isDragActive: $, isDragReject: X } = yt({
    onDrop: O,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"]
    },
    maxSize: 10 * 1024 * 1024,
    // 10MB
    multiple: !1
  }), K = () => {
    o(null), l("idle"), E(0), b("");
  }, Y = async () => {
    if (r)
      try {
        return await z(r), !0;
      } catch {
        return !1;
      }
    return !0;
  };
  return ca.useEffect(() => {
    i && (i.current = Y);
  }, [r, i]), /* @__PURE__ */ x.jsxs("div", { className: `image-upload-container ${n || ""}`, children: [
    /* @__PURE__ */ x.jsx("h2", { children: "Bild hochladen" }),
    /* @__PURE__ */ x.jsx("p", { className: "upload-description", children: "Laden Sie ein Bild hoch (max. 10MB). Unterstützte Formate: JPG, PNG, GIF, WEBP" }),
    g && /* @__PURE__ */ x.jsxs("div", { className: "error-message", children: [
      "⚠️ ",
      g
    ] }),
    d === "success" && /* @__PURE__ */ x.jsx("div", { className: "success-message", children: "✅ Bild erfolgreich hochgeladen!" }),
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        ...Z(),
        className: `dropzone ${$ ? "drag-active" : ""} ${X ? "drag-reject" : ""} ${r ? "has-file" : ""}`,
        children: [
          /* @__PURE__ */ x.jsx("input", { ...P() }),
          r ? /* @__PURE__ */ x.jsxs("div", { className: "file-info", children: [
            /* @__PURE__ */ x.jsx("div", { className: "file-preview", children: /* @__PURE__ */ x.jsx(
              "img",
              {
                src: URL.createObjectURL(r),
                alt: "Vorschau",
                className: "preview-image"
              }
            ) }),
            d === "uploading" && /* @__PURE__ */ x.jsxs("div", { className: "upload-progress", children: [
              /* @__PURE__ */ x.jsx("div", { className: "progress-bar", children: /* @__PURE__ */ x.jsx(
                "div",
                {
                  className: "progress-fill",
                  style: { width: `${h}%` }
                }
              ) }),
              /* @__PURE__ */ x.jsxs("p", { children: [
                "Hochladen... ",
                h,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "button-group", children: /* @__PURE__ */ x.jsx(
              "button",
              {
                type: "button",
                onClick: (M) => {
                  M.stopPropagation(), K();
                },
                className: "remove-button",
                children: "Bild entfernen"
              }
            ) })
          ] }) : /* @__PURE__ */ x.jsx("div", { className: "dropzone-content", children: $ ? /* @__PURE__ */ x.jsxs("div", { className: "drag-message", children: [
            /* @__PURE__ */ x.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ x.jsx("p", { children: "Datei hier ablegen..." })
          ] }) : /* @__PURE__ */ x.jsxs("div", { className: "upload-message", children: [
            /* @__PURE__ */ x.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ x.jsxs("p", { children: [
              /* @__PURE__ */ x.jsx("strong", { children: "Bild auswählen" }),
              " oder hier hineinziehen"
            ] }),
            /* @__PURE__ */ x.jsx("p", { className: "upload-hint", children: "Klicken Sie, um eine Datei auszuwählen, oder ziehen Sie eine Datei hierher" })
          ] }) })
        ]
      }
    )
  ] });
};
function ai({
  token: e,
  locations: a,
  params: n = [],
  source: i
}) {
  const [o, d] = he(0), [l, h] = he(null), [E, g] = he(null), [b, O] = he(null), [z, Z] = he(Date.now()), [P, $] = he(null), [X, K] = he(null), [Y, M] = he(!1), s = Ve(null);
  Je(() => {
    const D = localStorage.getItem("lastWeatherReportTime");
    if (D) {
      const ce = Date.now() - parseInt(D), me = 10 * 60 * 1e3;
      ce < me && M(!0);
    }
  }, []);
  function U(D) {
    d(D);
  }
  async function L() {
    if (o === 4 && s.current) {
      const D = await s.current();
      console.log("uploadSuccess", D);
    }
    o < 5 && d(o + 1);
  }
  function H() {
    o > 0 && d(o - 1);
  }
  return Je(() => {
    if (e && l && E && b && o === 5 && P === null) {
      const { lat: D, lon: ce, place: me } = b;
      Yt(e, {
        category: l,
        auspraegung: E,
        lat: D,
        lon: ce,
        place: me,
        timestamp: z,
        source: i,
        imageUrl: X || ""
      }, () => {
        localStorage.setItem("lastWeatherReportTime", Date.now().toString()), U(5), $("success");
      }, () => {
        $("error");
      });
    }
  }, [o]), /* @__PURE__ */ x.jsxs("div", { className: "slider-container", children: [
    Y && /* @__PURE__ */ x.jsx("div", { className: "rate-limit-warning", children: "⚠️ Sie können nur einmal innerhalb von 10 Minuten eine Wettermeldung absetzen." }),
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: "slider-inner",
        style: {
          transform: `translateX(-${o * 16.666666666666664}%)`,
          width: "600%"
        },
        children: [
          /* @__PURE__ */ x.jsx("div", { className: "panel panel1", children: /* @__PURE__ */ x.jsx(
            Gt,
            {
              params: n || [],
              onSelectCategory: async (D) => {
                h(D), await L();
              }
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel2", children: /* @__PURE__ */ x.jsx(
            ia,
            {
              component: /* @__PURE__ */ x.jsx(
                qt,
                {
                  category: l,
                  onSelectAuspraegung: async (D) => {
                    g(D), await L();
                  }
                }
              ),
              onNext: L,
              onPrev: H,
              showPrev: !0,
              showNext: !1
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel3", children: /* @__PURE__ */ x.jsx(
            ia,
            {
              component: /* @__PURE__ */ x.jsx(Bt, { locations: a, onSelectLocation: async (D) => {
                O(D), await L();
              } }),
              onNext: L,
              onPrev: H,
              showPrev: !0,
              showNext: !1
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel4", children: /* @__PURE__ */ x.jsx(
            ia,
            {
              component: /* @__PURE__ */ x.jsx(Kt, { onSelectTimestamp: async (D) => {
                Z(D), await L();
              } }),
              onNext: L,
              onPrev: H,
              showPrev: !0,
              showNext: !1
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel5", children: /* @__PURE__ */ x.jsx(
            ia,
            {
              component: /* @__PURE__ */ x.jsx(
                Qn,
                {
                  triggerUploadRef: s,
                  onImageUploaded: (D) => {
                    console.log("image uploaded", D), K(D.s3Key);
                  }
                }
              ),
              onNext: L,
              onPrev: H,
              showPrev: !0,
              showNext: !0
            }
          ) }),
          /* @__PURE__ */ x.jsxs("div", { className: "panel panel6 status-panel", children: [
            P === "success" && /* @__PURE__ */ x.jsx("div", { className: "message success-message", children: "Wettermeldung erfolgreich gesendet!" }),
            P === "error" && /* @__PURE__ */ x.jsx("div", { className: "message error-message", children: "Fehler beim Senden der Wettermeldung!" })
          ] })
        ]
      }
    )
  ] });
}
function ia({ component: e, onNext: a, onPrev: n, showPrev: i, showNext: r }) {
  return /* @__PURE__ */ x.jsxs("div", { className: "panel-content", children: [
    e && e,
    /* @__PURE__ */ x.jsxs("div", { className: "panel-buttons", children: [
      i && /* @__PURE__ */ x.jsxs("a", { href: "#", onClick: (o) => {
        o.preventDefault(), n();
      }, className: "text-link", children: [
        /* @__PURE__ */ x.jsx("svg", { className: "arrow-left", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ x.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 5H1m0 0l4 4M1 5l4-4" }) }),
        "Zurück"
      ] }),
      r && /* @__PURE__ */ x.jsxs("a", { href: "#", onClick: async (o) => {
        o.preventDefault(), await a();
      }, className: "text-link", children: [
        "Weiter",
        /* @__PURE__ */ x.jsx("svg", { className: "arrow-right", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ x.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 5h12m0 0L9 1m4 4L9 9" }) })
      ] })
    ] })
  ] });
}
function ti(e) {
  return `My Hello ${e}!`;
}
export {
  ai as CrowdWxEditor,
  ti as helloDebug
};
