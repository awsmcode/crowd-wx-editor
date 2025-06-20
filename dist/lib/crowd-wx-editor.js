import Ge, { useState as w, useEffect as vr } from "react";
var Y = { exports: {} }, M = {};
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
  var a = Ge, l = Symbol.for("react.element"), E = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, C = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(g, m, L) {
    var R, S = {}, O = null, y = null;
    L !== void 0 && (O = "" + L), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (y = m.ref);
    for (R in m) d.call(m, R) && !N.hasOwnProperty(R) && (S[R] = m[R]);
    if (g && g.defaultProps) for (R in m = g.defaultProps, m) S[R] === void 0 && (S[R] = m[R]);
    return { $$typeof: l, type: g, key: O, ref: y, props: S, _owner: C.current };
  }
  return M.Fragment = E, M.jsx = I, M.jsxs = I, M;
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
    var a = Ge, l = Symbol.for("react.element"), E = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), g = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), F = Symbol.iterator, V = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[V];
      return typeof r == "function" ? r : null;
    }
    var b = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        He("error", e, n);
      }
    }
    function He(e, r, n) {
      {
        var t = b.ReactDebugCurrentFrame, c = t.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var u = n.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, we = !1, Fe = !1, Pe = !1, ke = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === N || ke || e === C || e === L || e === R || Pe || e === y || je || we || Fe || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === S || e.$$typeof === I || e.$$typeof === g || e.$$typeof === m || // This needs to include all possible module reference object
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
    function oe(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case E:
          return "Portal";
        case N:
          return "Profiler";
        case C:
          return "StrictMode";
        case L:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return oe(r) + ".Consumer";
          case I:
            var n = e;
            return oe(n._context) + ".Provider";
          case m:
            return Be(e, e.render, "ForwardRef");
          case S:
            var t = e.displayName || null;
            return t !== null ? t : D(e.type) || "Memo";
          case O: {
            var c = e, u = c._payload, o = c._init;
            try {
              return D(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, P = 0, se, ce, le, ue, Ee, fe, de;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Ke() {
      {
        if (P === 0) {
          se = console.log, ce = console.info, le = console.warn, ue = console.error, Ee = console.group, fe = console.groupCollapsed, de = console.groupEnd;
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
              value: se
            }),
            info: x({}, e, {
              value: ce
            }),
            warn: x({}, e, {
              value: le
            }),
            error: x({}, e, {
              value: ue
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
        P < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = b.ReactCurrentDispatcher, Z;
    function K(e, r, n) {
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
    var J = !1, W;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ue();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var n = W.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      J = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Ke();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              t = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              t = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            t = T;
          }
          e();
        }
      } catch (T) {
        if (T && t && typeof T.stack == "string") {
          for (var i = T.stack.split(`
`), h = t.stack.split(`
`), _ = i.length - 1, v = h.length - 1; _ >= 1 && v >= 0 && i[_] !== h[v]; )
            v--;
          for (; _ >= 1 && v >= 0; _--, v--)
            if (i[_] !== h[v]) {
              if (_ !== 1 || v !== 1)
                do
                  if (_--, v--, v < 0 || i[_] !== h[v]) {
                    var p = `
` + i[_].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, p), p;
                  }
                while (_ >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        J = !1, z.current = u, We(), Error.prepareStackTrace = c;
      }
      var j = e ? e.displayName || e.name : "", G = j ? K(j) : "";
      return typeof e == "function" && W.set(e, G), G;
    }
    function $e(e, r, n) {
      return ve(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ye(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case L:
          return K("Suspense");
        case R:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return $e(e.render);
          case S:
            return U(e.type, r, n);
          case O: {
            var t = e, c = t._payload, u = t._init;
            try {
              return U(u(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, Ce = {}, me = b.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Ve(e, r, n, t, c) {
      {
        var u = Function.call.bind(k);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((t || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              i = e[o](r, o, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              i = _;
            }
            i && !(i instanceof Error) && ($(c), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, o, typeof i), $(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, $(c), f("Failed %s type: %s", n, i.message), $(null));
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
    function he(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Re(e);
    }
    var Te = b.ReactCurrentOwner, Xe = {
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
      typeof e.ref == "string" && Te.current;
    }
    function rr(e, r) {
      {
        var n = function() {
          pe || (pe = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Se || (Se = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, n, t, c, u, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
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
        var u, o = {}, i = null, h = null;
        n !== void 0 && (he(n), i = "" + n), Qe(r) && (he(r.key), i = "" + r.key), qe(r) && (h = r.ref, er(r, c));
        for (u in r)
          k.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (u in _)
            o[u] === void 0 && (o[u] = _[u]);
        }
        if (i || h) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(o, v), h && nr(o, v);
        }
        return tr(e, i, h, c, t, Te.current, o);
      }
    }
    var q = b.ReactCurrentOwner, Ne = b.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(n);
      } else
        Ne.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
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
    function or(e) {
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
        var n = or(r);
        if (be[n])
          return;
        be[n] = !0;
        var t = "";
        e && e._owner && e._owner !== q.current && (t = " It was passed a child from " + D(e._owner.type) + "."), H(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), H(null);
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
          var c = A(e);
          if (typeof c == "function" && c !== e.entries)
            for (var u = c.call(e), o; !(o = u.next()).done; )
              ee(o.value) && Le(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = D(r);
          Ve(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = D(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            H(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var Ae = {};
    function ye(e, r, n, t, c, u) {
      {
        var o = Me(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = ir();
          h ? i += h : i += ge();
          var _;
          e === null ? _ = "null" : X(e) ? _ = "array" : e !== void 0 && e.$$typeof === l ? (_ = "<" + (D(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, i);
        }
        var v = ar(e, r, n, c, u);
        if (v == null)
          return v;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (t)
              if (X(p)) {
                for (var j = 0; j < p.length; j++)
                  Oe(p[j], e);
                Object.freeze && Object.freeze(p);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(p, e);
        }
        if (k.call(r, "key")) {
          var G = D(e), T = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), re = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[G + re]) {
            var dr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, G, dr, G), Ae[G + re] = !0;
          }
        }
        return e === d ? cr(v) : sr(v), v;
      }
    }
    function lr(e, r, n) {
      return ye(e, r, n, !0);
    }
    function ur(e, r, n) {
      return ye(e, r, n, !1);
    }
    var Er = ur, fr = lr;
    B.Fragment = d, B.jsx = Er, B.jsxs = fr;
  }()), B;
}
var xe;
function Rr() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? Y.exports = Cr() : Y.exports = mr()), Y.exports;
}
var s = Rr();
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
Object.entries(ae).map(([a, l]) => ({
  category: a,
  auspraegungen: l
}));
const hr = () => Object.entries(ae).map(([a]) => a), Tr = (a) => ae[a], pr = {
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
}, te = (a) => pr[a] || a, Sr = ({
  onSelectCategory: a,
  params: l = []
}) => /* @__PURE__ */ s.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ s.jsx("div", { className: "categories-header", children: "Kategorien" }),
  hr().filter((E) => l === null || l.includes(E.toLowerCase()) || l.length === 0).map((E) => /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(E);
      },
      children: te(E)
    },
    E
  ))
] }), Nr = ({ category: a, onSelectAuspraegung: l }) => /* @__PURE__ */ s.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ s.jsx("div", { className: "categories-header", children: a ? te(a) : "" }),
  a && Tr(a).map((E) => /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        l(E);
      },
      children: te(E)
    },
    E
  ))
] }), gr = ({ locations: a, onSelectLocation: l }) => /* @__PURE__ */ s.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ s.jsx("div", { className: "categories-header", children: "Standort" }),
  a.map((E) => /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        l(E);
      },
      children: E.place
    },
    E.place
  ))
] });
function br(a, l) {
  const E = typeof a == "number" ? new Date(a) : a;
  return l.map(({ label: d, minutes: C }) => ({
    label: d,
    value: Math.floor(new Date(E.getTime() - C * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const Lr = ({ onSelectTimestamp: a }) => {
  const l = Date.now(), d = br(l, [
    { label: "jetzt", minutes: 0 },
    { label: "vor 10 Minuten", minutes: 10 },
    { label: "vor 20 Minuten", minutes: 20 },
    { label: "vor 30 Minuten", minutes: 30 },
    { label: "vor eine Stunde", minutes: 60 }
  ]);
  return /* @__PURE__ */ s.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ s.jsx("div", { className: "categories-header", children: "Zeit" }),
    d.map((C) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "category-item",
        onClick: () => {
          a(C.value);
        },
        children: C.label
      },
      C.value
    ))
  ] });
}, Or = "http://localhost:3001/data", Ar = (a, l, E, d) => fetch(`${Or}/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    token: String(a)
  },
  body: JSON.stringify({
    category: l.category,
    auspraegung: l.auspraegung,
    location: l.location,
    timestamp: l.timestamp * 1e3
  })
}).then(async (C) => {
  if (C.ok)
    E();
  else {
    const N = await C.json();
    console.log(N);
  }
}).catch(() => {
  d();
});
function Dr({
  token: a,
  locations: l,
  params: E = []
}) {
  const [d, C] = w(0), [N, I] = w(null), [g, m] = w(null), [L, R] = w(null), [S, O] = w(Date.now()), [y, F] = w(null);
  function V(f) {
    C(f);
  }
  function A() {
    d < 4 && C(d + 1);
  }
  function b() {
    d > 0 && C(d - 1);
  }
  return vr(() => {
    a && N && g && L && d === 4 && y === null && Ar(a, {
      category: N,
      auspraegung: g,
      location: L,
      timestamp: S
    }, () => {
      V(4), F("success");
    }, () => {
      F("error");
    });
  }, [d]), /* @__PURE__ */ s.jsx("div", { className: "slider-container", children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "slider-inner",
      style: {
        transform: `translateX(-${d * 20}%)`,
        width: "500%"
      },
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "panel panel1", children: /* @__PURE__ */ s.jsx(
          Sr,
          {
            params: E || [],
            onSelectCategory: (f) => {
              I(f), A();
            }
          }
        ) }),
        /* @__PURE__ */ s.jsx("div", { className: "panel panel2", children: /* @__PURE__ */ s.jsx(
          ne,
          {
            component: /* @__PURE__ */ s.jsx(
              Nr,
              {
                category: N,
                onSelectAuspraegung: (f) => {
                  m(f), A();
                }
              }
            ),
            onNext: A,
            onPrev: b,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ s.jsx("div", { className: "panel panel3", children: /* @__PURE__ */ s.jsx(
          ne,
          {
            component: /* @__PURE__ */ s.jsx(gr, { locations: l, onSelectLocation: (f) => {
              R(f), A();
            } }),
            onNext: A,
            onPrev: b,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ s.jsx("div", { className: "panel panel4", children: /* @__PURE__ */ s.jsx(
          ne,
          {
            component: /* @__PURE__ */ s.jsx(Lr, { onSelectTimestamp: (f) => {
              O(f), A();
            } }),
            onNext: A,
            onPrev: b,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ s.jsxs("div", { className: "panel panel5 status-panel", children: [
          y === "success" && /* @__PURE__ */ s.jsx("div", { className: "message success-message", children: "Wettermeldung erfolgreich gesendet!" }),
          y === "error" && /* @__PURE__ */ s.jsx("div", { className: "message error-message", children: "Fehler beim Senden der Wettermeldung!" })
        ] })
      ]
    }
  ) });
}
function ne({ component: a, onNext: l, onPrev: E, showPrev: d, showNext: C }) {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    a && a,
    /* @__PURE__ */ s.jsxs("div", { className: "panel-buttons", children: [
      d && /* @__PURE__ */ s.jsx("button", { onClick: E, children: "Zurück" }),
      C && /* @__PURE__ */ s.jsx("button", { onClick: l, children: "Weiter" })
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
