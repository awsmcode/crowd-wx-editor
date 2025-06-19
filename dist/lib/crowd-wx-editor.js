import Ge, { useState as w, useEffect as vr } from "react";
var V = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Cr() {
  if (De) return M;
  De = 1;
  var a = Ge, u = Symbol.for("react.element"), E = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(b, C, y) {
    var R, N = {}, g = null, I = null;
    y !== void 0 && (g = "" + y), C.key !== void 0 && (g = "" + C.key), C.ref !== void 0 && (I = C.ref);
    for (R in C) v.call(C, R) && !O.hasOwnProperty(R) && (N[R] = C[R]);
    if (b && b.defaultProps) for (R in C = b.defaultProps, C) N[R] === void 0 && (N[R] = C[R]);
    return { $$typeof: u, type: b, key: g, ref: I, props: N, _owner: _.current };
  }
  return M.Fragment = E, M.jsx = A, M.jsxs = A, M;
}
var B = {};
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
function mr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ge, u = Symbol.for("react.element"), E = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), b = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), K = Symbol.iterator, L = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = K && e[K] || e[L];
      return typeof r == "function" ? r : null;
    }
    var m = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        He("error", e, n);
      }
    }
    function He(e, r, n) {
      {
        var t = m.ReactDebugCurrentFrame, c = t.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var l = n.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var je = !1, we = !1, Fe = !1, Pe = !1, ke = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === O || ke || e === _ || e === y || e === R || Pe || e === I || je || we || Fe || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === N || e.$$typeof === A || e.$$typeof === b || e.$$typeof === C || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Be(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case E:
          return "Portal";
        case O:
          return "Profiler";
        case _:
          return "StrictMode";
        case y:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return se(r) + ".Consumer";
          case A:
            var n = e;
            return se(n._context) + ".Provider";
          case C:
            return Be(e, e.render, "ForwardRef");
          case N:
            var t = e.displayName || null;
            return t !== null ? t : D(e.type) || "Memo";
          case g: {
            var c = e, l = c._payload, s = c._init;
            try {
              return D(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, P = 0, oe, ce, ue, le, Ee, fe, de;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Ke() {
      {
        if (P === 0) {
          oe = console.log, ce = console.info, ue = console.warn, le = console.error, Ee = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        P++;
      }
    }
    function We() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: oe
            }),
            info: x({}, e, {
              value: ce
            }),
            warn: x({}, e, {
              value: ue
            }),
            error: x({}, e, {
              value: le
            }),
            group: x({}, e, {
              value: Ee
            }),
            groupCollapsed: x({}, e, {
              value: fe
            }),
            groupEnd: x({}, e, {
              value: de
            })
          });
        }
        P < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = m.ReactCurrentDispatcher, Z;
    function W(e, r, n) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (c) {
            var t = c.stack.trim().match(/\n( *(at )?)/);
            Z = t && t[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var J = !1, U;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ue();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var n = U.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      J = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = z.current, z.current = null, Ke();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (p) {
              t = p;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (p) {
              t = p;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            t = p;
          }
          e();
        }
      } catch (p) {
        if (p && t && typeof p.stack == "string") {
          for (var i = p.stack.split(`
`), h = t.stack.split(`
`), f = i.length - 1, d = h.length - 1; f >= 1 && d >= 0 && i[f] !== h[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (i[f] !== h[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || i[f] !== h[d]) {
                    var S = `
` + i[f].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, S), S;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        J = !1, z.current = l, We(), Error.prepareStackTrace = c;
      }
      var j = e ? e.displayName || e.name : "", G = j ? W(j) : "";
      return typeof e == "function" && U.set(e, G), G;
    }
    function $e(e, r, n) {
      return ve(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ye(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case y:
          return W("Suspense");
        case R:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            return $e(e.render);
          case N:
            return $(e.type, r, n);
          case g: {
            var t = e, c = t._payload, l = t._init;
            try {
              return $(l(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, Ce = {}, me = m.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, n = $(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Ve(e, r, n, t, c) {
      {
        var l = Function.call.bind(k);
        for (var s in e)
          if (l(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var h = Error((t || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              i = e[s](r, s, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              i = f;
            }
            i && !(i instanceof Error) && (Y(c), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, s, typeof i), Y(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, Y(c), T("Failed %s type: %s", n, i.message), Y(null));
          }
      }
    }
    var ze = Array.isArray;
    function X(e) {
      return ze(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Je(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Te(e) {
      if (Je(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Re(e);
    }
    var he = m.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, Se;
    function qe(e) {
      if (k.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (k.call(e, "key")) {
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
        var n = function() {
          pe || (pe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var n = function() {
          Se || (Se = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, n, t, c, l, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ar(e, r, n, t, c) {
      {
        var l, s = {}, i = null, h = null;
        n !== void 0 && (Te(n), i = "" + n), Qe(r) && (Te(r.key), i = "" + r.key), qe(r) && (h = r.ref, er(r, c));
        for (l in r)
          k.call(r, l) && !Xe.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (l in f)
            s[l] === void 0 && (s[l] = f[l]);
        }
        if (i || h) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(s, d), h && nr(s, d);
        }
        return tr(e, i, h, c, t, he.current, s);
      }
    }
    var q = m.ReactCurrentOwner, Ne = m.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, n = $(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(n);
      } else
        Ne.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function ge() {
      {
        if (q.current) {
          var e = D(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var be = {};
    function sr(e) {
      {
        var r = ge();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = sr(r);
        if (be[n])
          return;
        be[n] = !0;
        var t = "";
        e && e._owner && e._owner !== q.current && (t = " It was passed a child from " + D(e._owner.type) + "."), H(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), H(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            ee(t) && Le(t, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = F(e);
          if (typeof c == "function" && c !== e.entries)
            for (var l = c.call(e), s; !(s = l.next()).done; )
              ee(s.value) && Le(s.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === C || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === N))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = D(r);
          Ve(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = D(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            H(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var Ae = {};
    function ye(e, r, n, t, c, l) {
      {
        var s = Me(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = ir();
          h ? i += h : i += ge();
          var f;
          e === null ? f = "null" : X(e) ? f = "array" : e !== void 0 && e.$$typeof === u ? (f = "<" + (D(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, i);
        }
        var d = ar(e, r, n, c, l);
        if (d == null)
          return d;
        if (s) {
          var S = r.children;
          if (S !== void 0)
            if (t)
              if (X(S)) {
                for (var j = 0; j < S.length; j++)
                  Oe(S[j], e);
                Object.freeze && Object.freeze(S);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(S, e);
        }
        if (k.call(r, "key")) {
          var G = D(e), p = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), re = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[G + re]) {
            var dr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, G, dr, G), Ae[G + re] = !0;
          }
        }
        return e === v ? cr(d) : or(d), d;
      }
    }
    function ur(e, r, n) {
      return ye(e, r, n, !0);
    }
    function lr(e, r, n) {
      return ye(e, r, n, !1);
    }
    var Er = lr, fr = ur;
    B.Fragment = v, B.jsx = Er, B.jsxs = fr;
  }()), B;
}
var xe;
function Rr() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? V.exports = Cr() : V.exports = mr()), V.exports;
}
var o = Rr();
const ae = {
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
Object.entries(ae).map(([a, u]) => ({
  category: a,
  auspraegungen: u
}));
const Tr = () => Object.entries(ae).map(([a]) => a), hr = (a) => ae[a], pr = {
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
}, te = (a) => pr[a] || a, Sr = ({ onSelectCategory: a }) => /* @__PURE__ */ o.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ o.jsx("div", { className: "categories-header", children: "Kategorien" }),
  Tr().map((u) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(u);
      },
      children: te(u)
    },
    u
  ))
] }), Nr = ({ category: a, onSelectAuspraegung: u }) => /* @__PURE__ */ o.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ o.jsx("div", { className: "categories-header", children: a ? te(a) : "" }),
  a && hr(a).map((E) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        u(E);
      },
      children: te(E)
    },
    E
  ))
] }), gr = ({ locations: a, onSelectLocation: u }) => /* @__PURE__ */ o.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ o.jsx("div", { className: "categories-header", children: "Standort" }),
  a.map((E) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        u(E);
      },
      children: E.place
    },
    E.place
  ))
] });
function br(a, u) {
  const E = typeof a == "number" ? new Date(a) : a;
  return u.map(({ label: v, minutes: _ }) => ({
    label: v,
    value: Math.floor(new Date(E.getTime() - _ * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const Lr = ({ onSelectTimestamp: a }) => {
  const u = Date.now(), v = br(u, [
    { label: "jetzt", minutes: 0 },
    { label: "vor 10 Minuten", minutes: 10 },
    { label: "vor 20 Minuten", minutes: 20 },
    { label: "vor 30 Minuten", minutes: 30 },
    { label: "vor eine Stunde", minutes: 60 }
  ]);
  return /* @__PURE__ */ o.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ o.jsx("div", { className: "categories-header", children: "Zeit" }),
    v.map((_) => /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "category-item",
        onClick: () => {
          a(_.value);
        },
        children: _.label
      },
      _.value
    ))
  ] });
}, Or = "http://localhost:3001/data", Ar = (a, u, E, v) => fetch(`${Or}/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    token: String(a)
  },
  body: JSON.stringify({
    category: u.category,
    auspraegung: u.auspraegung,
    location: u.location,
    timestamp: u.timestamp * 1e3
  })
}).then(async (_) => {
  if (_.ok)
    E();
  else {
    const O = await _.json();
    console.log(O);
  }
}).catch(() => {
  v();
});
function Dr({
  token: a,
  locations: u
}) {
  const [E, v] = w(0), [_, O] = w(null), [A, b] = w(null), [C, y] = w(null), [R, N] = w(Date.now()), [g, I] = w(null);
  function K(m) {
    v(m);
  }
  function L() {
    E < 4 && v(E + 1);
  }
  function F() {
    E > 0 && v(E - 1);
  }
  return vr(() => {
    a && _ && A && C && E === 4 && g === null && Ar(a, {
      category: _,
      auspraegung: A,
      location: C,
      timestamp: R
    }, () => {
      K(4), I("success");
    }, () => {
      I("error");
    });
  }, [E]), /* @__PURE__ */ o.jsx("div", { className: "slider-container", children: /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "slider-inner",
      style: {
        transform: `translateX(-${E * 20}%)`,
        width: "500%"
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "panel panel1", children: /* @__PURE__ */ o.jsx(
          Sr,
          {
            onSelectCategory: (m) => {
              O(m), L();
            }
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: "panel panel2", children: /* @__PURE__ */ o.jsx(
          ne,
          {
            component: /* @__PURE__ */ o.jsx(
              Nr,
              {
                category: _,
                onSelectAuspraegung: (m) => {
                  b(m), L();
                }
              }
            ),
            onNext: L,
            onPrev: F,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: "panel panel3", children: /* @__PURE__ */ o.jsx(
          ne,
          {
            component: /* @__PURE__ */ o.jsx(gr, { locations: u, onSelectLocation: (m) => {
              y(m), L();
            } }),
            onNext: L,
            onPrev: F,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ o.jsx("div", { className: "panel panel4", children: /* @__PURE__ */ o.jsx(
          ne,
          {
            component: /* @__PURE__ */ o.jsx(Lr, { onSelectTimestamp: (m) => {
              N(m), L();
            } }),
            onNext: L,
            onPrev: F,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "panel panel5 status-panel", children: [
          g === "success" && /* @__PURE__ */ o.jsx("div", { className: "message success-message", children: "Wettermeldung erfolgreich gesendet!" }),
          g === "error" && /* @__PURE__ */ o.jsx("div", { className: "message error-message", children: "Fehler beim Senden der Wettermeldung!" })
        ] })
      ]
    }
  ) });
}
function ne({ component: a, onNext: u, onPrev: E, showPrev: v, showNext: _ }) {
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    a && a,
    /* @__PURE__ */ o.jsxs("div", { className: "panel-buttons", children: [
      v && /* @__PURE__ */ o.jsx("button", { onClick: E, children: "Zurück" }),
      _ && /* @__PURE__ */ o.jsx("button", { onClick: u, children: "Weiter" })
    ] })
  ] });
}
function Ir(a) {
  return `My Hello ${a}!`;
}
export {
  Dr as CrowdWxEditor,
  Ir as helloDebug
};
