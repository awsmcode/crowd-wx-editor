import la, { useMemo as ze, useRef as Je, useReducer as Mt, useEffect as Xe, useCallback as Ee, forwardRef as Ft, useImperativeHandle as zt, Fragment as Gt, useState as be } from "react";
function dt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ea = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Ut() {
  if (za) return Ye;
  za = 1;
  var e = la, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, g, y) {
    var E, h = {}, R = null, L = null;
    y !== void 0 && (R = "" + y), g.key !== void 0 && (R = "" + g.key), g.ref !== void 0 && (L = g.ref);
    for (E in g) n.call(g, E) && !r.hasOwnProperty(E) && (h[E] = g[E]);
    if (l && l.defaultProps) for (E in g = l.defaultProps, g) h[E] === void 0 && (h[E] = g[E]);
    return { $$typeof: a, type: l, key: R, ref: L, props: h, _owner: o.current };
  }
  return Ye.Fragment = i, Ye.jsx = s, Ye.jsxs = s, Ye;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Ht() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = la, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), X = Symbol.iterator, N = "@@iterator";
    function Z(t) {
      if (t === null || typeof t != "object")
        return null;
      var p = X && t[X] || t[N];
      return typeof p == "function" ? p : null;
    }
    var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), T = 1; T < p; T++)
          v[T - 1] = arguments[T];
        K("error", t, v);
      }
    }
    function K(t, p, v) {
      {
        var T = B.ReactDebugCurrentFrame, G = T.getStackAddendum();
        G !== "" && (p += "%s", v = v.concat([G]));
        var V = v.map(function(M) {
          return String(M);
        });
        V.unshift("Warning: " + p), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var Y = !1, d = !1, ce = !1, F = !1, Q = !1, A;
    A = Symbol.for("react.module.reference");
    function ie(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === r || Q || t === o || t === y || t === E || F || t === L || Y || d || ce || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === h || t.$$typeof === s || t.$$typeof === l || t.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === A || t.getModuleId !== void 0));
    }
    function q(t, p, v) {
      var T = t.displayName;
      if (T)
        return T;
      var G = p.displayName || p.name || "";
      return G !== "" ? v + "(" + G + ")" : v;
    }
    function ve(t) {
      return t.displayName || "Context";
    }
    function ne(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case r:
          return "Profiler";
        case o:
          return "StrictMode";
        case y:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var p = t;
            return ve(p) + ".Consumer";
          case s:
            var v = t;
            return ve(v._context) + ".Provider";
          case g:
            return q(t, t.render, "ForwardRef");
          case h:
            var T = t.displayName || null;
            return T !== null ? T : ne(t.type) || "Memo";
          case R: {
            var G = t, V = G._payload, M = G._init;
            try {
              return ne(M(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, te = 0, de, ge, ye, le, c, m, S;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function _() {
      {
        if (te === 0) {
          de = console.log, ge = console.info, ye = console.warn, le = console.error, c = console.group, m = console.groupCollapsed, S = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: k,
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
        te++;
      }
    }
    function D() {
      {
        if (te--, te === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, t, {
              value: de
            }),
            info: z({}, t, {
              value: ge
            }),
            warn: z({}, t, {
              value: ye
            }),
            error: z({}, t, {
              value: le
            }),
            group: z({}, t, {
              value: c
            }),
            groupCollapsed: z({}, t, {
              value: m
            }),
            groupEnd: z({}, t, {
              value: S
            })
          });
        }
        te < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = B.ReactCurrentDispatcher, O;
    function C(t, p, v) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (G) {
            var T = G.stack.trim().match(/\n( *(at )?)/);
            O = T && T[1] || "";
          }
        return `
` + O + t;
      }
    }
    var I = !1, j;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      j = new re();
    }
    function u(t, p) {
      if (!t || I)
        return "";
      {
        var v = j.get(t);
        if (v !== void 0)
          return v;
      }
      var T;
      I = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = w.current, w.current = null, _();
      try {
        if (p) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (xe) {
              T = xe;
            }
            Reflect.construct(t, [], M);
          } else {
            try {
              M.call();
            } catch (xe) {
              T = xe;
            }
            t.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            T = xe;
          }
          t();
        }
      } catch (xe) {
        if (xe && T && typeof xe.stack == "string") {
          for (var P = xe.stack.split(`
`), me = T.stack.split(`
`), pe = P.length - 1, se = me.length - 1; pe >= 1 && se >= 0 && P[pe] !== me[se]; )
            se--;
          for (; pe >= 1 && se >= 0; pe--, se--)
            if (P[pe] !== me[se]) {
              if (pe !== 1 || se !== 1)
                do
                  if (pe--, se--, se < 0 || P[pe] !== me[se]) {
                    var he = `
` + P[pe].replace(" at new ", " at ");
                    return t.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", t.displayName)), typeof t == "function" && j.set(t, he), he;
                  }
                while (pe >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        I = !1, w.current = V, D(), Error.prepareStackTrace = G;
      }
      var Fe = t ? t.displayName || t.name : "", Ce = Fe ? C(Fe) : "";
      return typeof t == "function" && j.set(t, Ce), Ce;
    }
    function ue(t, p, v) {
      return u(t, !1);
    }
    function Te(t) {
      var p = t.prototype;
      return !!(p && p.isReactComponent);
    }
    function _e(t, p, v) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return u(t, Te(t));
      if (typeof t == "string")
        return C(t);
      switch (t) {
        case y:
          return C("Suspense");
        case E:
          return C("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case g:
            return ue(t.render);
          case h:
            return _e(t.type, p, v);
          case R: {
            var T = t, G = T._payload, V = T._init;
            try {
              return _e(V(G), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Re = {}, Pe = B.ReactDebugCurrentFrame;
    function Se(t) {
      if (t) {
        var p = t._owner, v = _e(t.type, t._source, p ? p.type : null);
        Pe.setExtraStackFrame(v);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Le(t, p, v, T, G) {
      {
        var V = Function.call.bind(ke);
        for (var M in t)
          if (V(t, M)) {
            var P = void 0;
            try {
              if (typeof t[M] != "function") {
                var me = Error((T || "React class") + ": " + v + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              P = t[M](p, M, T, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              P = pe;
            }
            P && !(P instanceof Error) && (Se(G), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", v, M, typeof P), Se(null)), P instanceof Error && !(P.message in Re) && (Re[P.message] = !0, Se(G), $("Failed %s type: %s", v, P.message), Se(null));
          }
      }
    }
    var da = Array.isArray;
    function Ue(t) {
      return da(t);
    }
    function ua(t) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v;
      }
    }
    function f(t) {
      try {
        return b(t), !1;
      } catch {
        return !0;
      }
    }
    function b(t) {
      return "" + t;
    }
    function ee(t) {
      if (f(t))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ua(t)), b(t);
    }
    var oe = B.ReactCurrentOwner, fe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe;
    function He(t) {
      if (ke.call(t, "ref")) {
        var p = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function We(t) {
      if (ke.call(t, "key")) {
        var p = Object.getOwnPropertyDescriptor(t, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Be(t, p) {
      typeof t.ref == "string" && oe.current;
    }
    function Ne(t, p) {
      {
        var v = function() {
          je || (je = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function $e(t, p) {
      {
        var v = function() {
          Oe || (Oe = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var qe = function(t, p, v, T, G, V, M) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: p,
        ref: v,
        props: M,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Ke(t, p, v, T, G) {
      {
        var V, M = {}, P = null, me = null;
        v !== void 0 && (ee(v), P = "" + v), We(p) && (ee(p.key), P = "" + p.key), He(p) && (me = p.ref, Be(p, G));
        for (V in p)
          ke.call(p, V) && !fe.hasOwnProperty(V) && (M[V] = p[V]);
        if (t && t.defaultProps) {
          var pe = t.defaultProps;
          for (V in pe)
            M[V] === void 0 && (M[V] = pe[V]);
        }
        if (P || me) {
          var se = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          P && Ne(M, se), me && $e(M, se);
        }
        return qe(t, P, me, G, T, oe.current, M);
      }
    }
    var Ae = B.ReactCurrentOwner, Qe = B.ReactDebugCurrentFrame;
    function Me(t) {
      if (t) {
        var p = t._owner, v = _e(t.type, t._source, p ? p.type : null);
        Qe.setExtraStackFrame(v);
      } else
        Qe.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function ma(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function Ia() {
      {
        if (Ae.current) {
          var t = ne(Ae.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ot(t) {
      return "";
    }
    var Pa = {};
    function kt(t) {
      {
        var p = Ia();
        if (!p) {
          var v = typeof t == "string" ? t : t.displayName || t.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function La(t, p) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var v = kt(p);
        if (Pa[v])
          return;
        Pa[v] = !0;
        var T = "";
        t && t._owner && t._owner !== Ae.current && (T = " It was passed a child from " + ne(t._owner.type) + "."), Me(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, T), Me(null);
      }
    }
    function Na(t, p) {
      {
        if (typeof t != "object")
          return;
        if (Ue(t))
          for (var v = 0; v < t.length; v++) {
            var T = t[v];
            ma(T) && La(T, p);
          }
        else if (ma(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var G = Z(t);
          if (typeof G == "function" && G !== t.entries)
            for (var V = G.call(t), M; !(M = V.next()).done; )
              ma(M.value) && La(M.value, p);
        }
      }
    }
    function jt(t) {
      {
        var p = t.type;
        if (p == null || typeof p == "string")
          return;
        var v;
        if (typeof p == "function")
          v = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          v = p.propTypes;
        else
          return;
        if (v) {
          var T = ne(p);
          Le(v, t.props, "prop", T, t);
        } else if (p.PropTypes !== void 0 && !fa) {
          fa = !0;
          var G = ne(p);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(t) {
      {
        for (var p = Object.keys(t.props), v = 0; v < p.length; v++) {
          var T = p[v];
          if (T !== "children" && T !== "key") {
            Me(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Me(null);
            break;
          }
        }
        t.ref !== null && (Me(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var Ma = {};
    function Fa(t, p, v, T, G, V) {
      {
        var M = ie(t);
        if (!M) {
          var P = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = Ot();
          me ? P += me : P += Ia();
          var pe;
          t === null ? pe = "null" : Ue(t) ? pe = "array" : t !== void 0 && t.$$typeof === a ? (pe = "<" + (ne(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, P);
        }
        var se = Ke(t, p, v, G, V);
        if (se == null)
          return se;
        if (M) {
          var he = p.children;
          if (he !== void 0)
            if (T)
              if (Ue(he)) {
                for (var Fe = 0; Fe < he.length; Fe++)
                  Na(he[Fe], t);
                Object.freeze && Object.freeze(he);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Na(he, t);
        }
        if (ke.call(p, "key")) {
          var Ce = ne(t), xe = Object.keys(p).filter(function(Nt) {
            return Nt !== "key";
          }), va = xe.length > 0 ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ma[Ce + va]) {
            var Lt = xe.length > 0 ? "{" + xe.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, va, Ce, Lt, Ce), Ma[Ce + va] = !0;
          }
        }
        return t === n ? At(se) : jt(se), se;
      }
    }
    function Ct(t, p, v) {
      return Fa(t, p, v, !0);
    }
    function Dt(t, p, v) {
      return Fa(t, p, v, !1);
    }
    var It = Dt, Pt = Ct;
    Ve.Fragment = n, Ve.jsx = It, Ve.jsxs = Pt;
  }()), Ve;
}
var Ua;
function Wt() {
  return Ua || (Ua = 1, process.env.NODE_ENV === "production" ? ea.exports = Ut() : ea.exports = Ht()), ea.exports;
}
var x = Wt();
const Ha = "de", xa = {
  de: {
    RATE_LIMIT_WARNING: "⚠️ Sie können nur einmal innerhalb von 10 Minuten eine Wettermeldung absetzen.",
    REPORT_SUCCESS: "Wettermeldung erfolgreich gesendet!",
    REPORT_ERROR: "Fehler beim Senden der Wettermeldung!",
    BACK: "Zurück",
    NEXT: "Weiter",
    CATEGORIES_TITLE: "Kategorien",
    LOCATION_TITLE: "Standort",
    TIME_TITLE: "Zeit",
    TIME_NOW: "jetzt",
    TIME_10_MINUTES: "vor 10 Minuten",
    TIME_20_MINUTES: "vor 20 Minuten",
    TIME_30_MINUTES: "vor 30 Minuten",
    TIME_60_MINUTES: "vor eine Stunde",
    IMAGE_UPLOAD_TITLE: "Bild hochladen",
    IMAGE_UPLOAD_DESCRIPTION: "Laden Sie ein Bild hoch (max. 10MB). Unterstützte Formate: JPG, PNG, GIF, WEBP",
    IMAGE_UPLOAD_SUCCESS: "✅ Bild erfolgreich hochgeladen!",
    IMAGE_UPLOAD_REMOVE: "Bild entfernen",
    IMAGE_UPLOAD_PROGRESS: "Hochladen...",
    IMAGE_UPLOAD_DROP_FILE: "Datei hier ablegen...",
    IMAGE_UPLOAD_SELECT: "Bild auswählen",
    IMAGE_UPLOAD_HINT: "Klicken Sie, um eine Datei auszuwählen, oder ziehen Sie eine Datei hierher",
    IMAGE_UPLOAD_DRAG_INSTRUCTION: "oder hier hineinziehen",
    IMAGE_UPLOAD_PREVIEW_ALT: "Vorschau",
    ERROR_FILE_TOO_LARGE: "Datei ist zu groß. Maximale Größe: 10MB",
    ERROR_INVALID_FILE_TYPE: "Nur Bilddateien sind erlaubt (JPG, PNG, GIF, WEBP)",
    ERROR_GENERIC_UPLOAD: "Fehler beim Hochladen der Datei",
    ERROR_NETWORK_UPLOAD: "Netzwerkfehler beim Hochladen",
    ERROR_UPLOAD_WITH_STATUS: "Fehler beim Hochladen:",
    BLITZE: "Blitze",
    DONNER_UMGEBUNG: "Donner in der Umgebung",
    BLITZE_EINZELNE: "schwach",
    BLITZE_HAEUFIG: "stark",
    BLITZE_EXTREM: "extrem",
    WIND: "Wind",
    WIND_SCHWACH: "schwach",
    WIND_STARK: "stark",
    WIND_STUERMISCH: "stürmisch",
    WIND_STURM: "Sturm",
    WIND_ORKAN: "Orkan",
    HAGEL: "Hagel",
    HAGEL_UNTER_1CM: "unter 1 cm",
    HAGEL_1CM: "1 cm",
    HAGEL_2CM: "2 cm",
    HAGEL_3CM: "3 cm",
    HAGEL_5CM: "5 cm",
    HAGEL_UEBER_7CM: "über 7 cm",
    HAGEL_GESCHLOSSENE_HAGELDECKE: "geschlossene Hageldecke",
    HAGEL_SCHADEN_PFLANZEN: "Schäden an Pflenzen",
    HAGEL_SCHADEN_DACHFENSTER: "Bruch von Dachfenstern und Gewächshäusern",
    HAGEL_SCHADEN_VEREINZELT: "vereinzelte Schäden an Dachziegel, Fensterscheiben und Fassaden",
    HAGEL_SCHADEN_ZERSTOERERISCH: "zerstörische Schäden an Dächern, Fenstern und Fahrzeugen",
    REGEN: "Regen",
    REGEN_LEICHT: "leicht",
    REGEN_MITTEL: "mittel",
    REGEN_KRAEFTIG: "kräftig",
    REGEN_STARK: "stark",
    REGEN_EXTREM: "extrem",
    GLAETTE: "Glätte",
    GLAETTE_REIF: "Reifglätte",
    GLAETTE_SCHNEE: "Schneeglätte",
    GLAETTE_UEBERFRIERENDE_NAESSE: "überfrierende Nässe",
    GLAETTE_GEFRIERENDER_REGEN: "gefrierender Regen",
    GLAETTE_GESCHLOSSENE_SCHICHT: "geschlossene Schicht",
    GLAETTE_DICKE_ICE_UEBER_1CM: "über 1 cm (Fingerdick",
    GLAETTE_DICKE_ICE_BIS_1CM: "unter 1 cm (Wellpappe)",
    GLAETTE_DICKE_SNOW_BIS_5CM: "unter 5 cm",
    GLAETTE_DICKE_SNOW_BIS_20CM: "unter 20 cm",
    GLAETTE_DICKE_SNOW_BIS_50CM: "unter 50 cm",
    GLAETTE_DICKE_SNOW_UEBER_50CM: "über 50 cm",
    SCHNEEFALL: "Schneefall",
    SCHNEEFALL_WENIGE_FLOCKEN: "wenige Flocken",
    SCHNEEFALL_LEICHT: "leicht",
    SCHNEEFALL_MITTEL: "mittel",
    SCHNEEFALL_STARK: "stark",
    SCHNEEDECKE: "Schneedecke",
    SCHNEEDECKE_SCHNEEMATSCH: "Schneematsch",
    SCHNEEDECKE_BIS_1CM: "bis 1 cm",
    SCHNEEDECKE_BIS_3CM: "bis zu 3 cm",
    SCHNEEDECKE_BIS_5CM: "bis zu 5 cm",
    SCHNEEDECKE_BIS_10CM: "bis zu 10 cm",
    SCHNEEDECKE_BIS_20CM: "bis zu 20 cm",
    SCHNEEDECKE_BIS_50CM: "bis zu 50 cm",
    SCHNEEDECKE_UEBER_50CM: "über 50 cm",
    SCHNEEDECKE_FLECKWEISE: "Schneeflecken",
    SCHNEEDECKE_GESCHLOSSENE_SCHNEEDECKE: "geschlossene Schneedecke",
    BEWOELKUNG: "Bewölkung",
    BEWOELKUNG_WOLKENLOS: "wolkenlos",
    BEWOELKUNG_LEICHT_BEWOELKT: "leicht bewölkt",
    BEWOELKUNG_WOLKIG: "wolkig",
    BEWOELKUNG_BEDECKT: "bedeckt",
    NEBEL: "Nebel",
    NEBEL_LEICHT: "unter 1000 m",
    NEBEL_DICHT: "unter 200 m",
    NEBEL_EXTREM: "unter 50 m",
    TORNADO: "Tornado",
    TORNADO_NO_VISIBLE_DAMAGE: "keine Schäden sichtbar",
    TORNADO_F0: "leicht",
    TORNADO_F1: "moderat",
    TORNADO_F2: "signifikant",
    TORNADO_F3: "schwer",
    TORNADO_F4: "verheerend"
  }
}, W = (e, a) => {
  const i = e in xa ? e : Ha;
  return xa[i][a] ?? xa[Ha][a] ?? a;
}, sa = {
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
Object.entries(sa).map(([e, a]) => ({
  category: e,
  auspraegungen: a
}));
const ut = () => Object.entries(sa).map(([e]) => e), Bt = () => Object.entries(sa).map(([e, a]) => a).flat(), $t = (e) => sa[e];
Array.from(/* @__PURE__ */ new Set([...ut(), ...Bt()]));
const Ra = (e, a = "de") => W(a, e), qt = ({
  onSelectCategory: e,
  params: a = [],
  lang: i
}) => /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ x.jsx("div", { className: "panel-title", children: W(i, "CATEGORIES_TITLE") }),
  ut().filter((n) => a === null || a.includes(n.toLowerCase()) || a.length === 0).map((n) => /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        e(n);
      },
      children: Ra(n, i)
    },
    n
  ))
] }), Kt = ({ category: e, onSelectAuspraegung: a, lang: i }) => /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ x.jsx("div", { className: "panel-title", children: e ? Ra(e, i) : W(i, "CATEGORIES_TITLE") }),
  e && $t(e).map((n) => /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(n);
      },
      children: Ra(n, i)
    },
    n
  ))
] }), Yt = ({ locations: e, onSelectLocation: a, lang: i }) => /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ x.jsx("div", { className: "panel-title", children: W(i, "LOCATION_TITLE") }),
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
function Vt(e, a) {
  const i = typeof e == "number" ? new Date(e) : e;
  return a.map(({ label: n, minutes: o }) => ({
    label: n,
    value: Math.floor(new Date(i.getTime() - o * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const Jt = ({ onSelectTimestamp: e, lang: a }) => {
  const i = Date.now(), n = [
    { label: W(a, "TIME_NOW"), minutes: 0 },
    { label: W(a, "TIME_10_MINUTES"), minutes: 10 },
    { label: W(a, "TIME_20_MINUTES"), minutes: 20 },
    { label: W(a, "TIME_30_MINUTES"), minutes: 30 },
    { label: W(a, "TIME_60_MINUTES"), minutes: 60 }
  ], o = Vt(i, n);
  return /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ x.jsx("div", { className: "panel-title", children: W(a, "TIME_TITLE") }),
    o.map((r) => /* @__PURE__ */ x.jsx(
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
}, ft = "https://api.wettersoftware.de/crowd", Xt = (e, a, i, n) => fetch(`${ft}/data/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    token: String(e),
    "X-API-Key": String(e)
  },
  body: JSON.stringify({
    category: a.category,
    auspraegung: a.auspraegung,
    lat: a.lat,
    lon: a.lon,
    place: a.place,
    timestamp: a.timestamp * 1e3,
    source: a.source,
    imageUrl: a.imageUrl,
    isPublic: a.isPublic
  })
}).then(async (o) => {
  o.ok ? i() : n();
}).catch(() => {
  n();
});
var aa = { exports: {} }, ta = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function Zt() {
  if (Wa) return U;
  Wa = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, X = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, Z = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function K(d) {
    if (typeof d == "object" && d !== null) {
      var ce = d.$$typeof;
      switch (ce) {
        case a:
          switch (d = d.type, d) {
            case g:
            case y:
            case n:
            case r:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case l:
                case E:
                case X:
                case L:
                case s:
                  return d;
                default:
                  return ce;
              }
          }
        case i:
          return ce;
      }
    }
  }
  function Y(d) {
    return K(d) === y;
  }
  return U.AsyncMode = g, U.ConcurrentMode = y, U.ContextConsumer = l, U.ContextProvider = s, U.Element = a, U.ForwardRef = E, U.Fragment = n, U.Lazy = X, U.Memo = L, U.Portal = i, U.Profiler = r, U.StrictMode = o, U.Suspense = h, U.isAsyncMode = function(d) {
    return Y(d) || K(d) === g;
  }, U.isConcurrentMode = Y, U.isContextConsumer = function(d) {
    return K(d) === l;
  }, U.isContextProvider = function(d) {
    return K(d) === s;
  }, U.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === a;
  }, U.isForwardRef = function(d) {
    return K(d) === E;
  }, U.isFragment = function(d) {
    return K(d) === n;
  }, U.isLazy = function(d) {
    return K(d) === X;
  }, U.isMemo = function(d) {
    return K(d) === L;
  }, U.isPortal = function(d) {
    return K(d) === i;
  }, U.isProfiler = function(d) {
    return K(d) === r;
  }, U.isStrictMode = function(d) {
    return K(d) === o;
  }, U.isSuspense = function(d) {
    return K(d) === h;
  }, U.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === y || d === r || d === o || d === h || d === R || typeof d == "object" && d !== null && (d.$$typeof === X || d.$$typeof === L || d.$$typeof === s || d.$$typeof === l || d.$$typeof === E || d.$$typeof === Z || d.$$typeof === B || d.$$typeof === $ || d.$$typeof === N);
  }, U.typeOf = K, U;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Qt() {
  return Ba || (Ba = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, X = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, Z = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function K(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === y || u === r || u === o || u === h || u === R || typeof u == "object" && u !== null && (u.$$typeof === X || u.$$typeof === L || u.$$typeof === s || u.$$typeof === l || u.$$typeof === E || u.$$typeof === Z || u.$$typeof === B || u.$$typeof === $ || u.$$typeof === N);
    }
    function Y(u) {
      if (typeof u == "object" && u !== null) {
        var ue = u.$$typeof;
        switch (ue) {
          case a:
            var Te = u.type;
            switch (Te) {
              case g:
              case y:
              case n:
              case r:
              case o:
              case h:
                return Te;
              default:
                var _e = Te && Te.$$typeof;
                switch (_e) {
                  case l:
                  case E:
                  case X:
                  case L:
                  case s:
                    return _e;
                  default:
                    return ue;
                }
            }
          case i:
            return ue;
        }
      }
    }
    var d = g, ce = y, F = l, Q = s, A = a, ie = E, q = n, ve = X, ne = L, z = i, te = r, de = o, ge = h, ye = !1;
    function le(u) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(u) || Y(u) === g;
    }
    function c(u) {
      return Y(u) === y;
    }
    function m(u) {
      return Y(u) === l;
    }
    function S(u) {
      return Y(u) === s;
    }
    function k(u) {
      return typeof u == "object" && u !== null && u.$$typeof === a;
    }
    function _(u) {
      return Y(u) === E;
    }
    function D(u) {
      return Y(u) === n;
    }
    function w(u) {
      return Y(u) === X;
    }
    function O(u) {
      return Y(u) === L;
    }
    function C(u) {
      return Y(u) === i;
    }
    function I(u) {
      return Y(u) === r;
    }
    function j(u) {
      return Y(u) === o;
    }
    function re(u) {
      return Y(u) === h;
    }
    H.AsyncMode = d, H.ConcurrentMode = ce, H.ContextConsumer = F, H.ContextProvider = Q, H.Element = A, H.ForwardRef = ie, H.Fragment = q, H.Lazy = ve, H.Memo = ne, H.Portal = z, H.Profiler = te, H.StrictMode = de, H.Suspense = ge, H.isAsyncMode = le, H.isConcurrentMode = c, H.isContextConsumer = m, H.isContextProvider = S, H.isElement = k, H.isForwardRef = _, H.isFragment = D, H.isLazy = w, H.isMemo = O, H.isPortal = C, H.isProfiler = I, H.isStrictMode = j, H.isSuspense = re, H.isValidElementType = K, H.typeOf = Y;
  }()), H;
}
var $a;
function mt() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? ta.exports = Zt() : ta.exports = Qt()), ta.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ga, qa;
function ei() {
  if (qa) return ga;
  qa = 1;
  var e = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function n(r) {
    if (r == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(r);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var r = new String("abc");
      if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var g = Object.getOwnPropertyNames(s).map(function(E) {
        return s[E];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        y[E] = E;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ga = o() ? Object.assign : function(r, s) {
    for (var l, g = n(r), y, E = 1; E < arguments.length; E++) {
      l = Object(arguments[E]);
      for (var h in l)
        a.call(l, h) && (g[h] = l[h]);
      if (e) {
        y = e(l);
        for (var R = 0; R < y.length; R++)
          i.call(l, y[R]) && (g[y[R]] = l[y[R]]);
      }
    }
    return g;
  }, ga;
}
var Ea, Ka;
function Ca() {
  if (Ka) return Ea;
  Ka = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ea = e, Ea;
}
var ha, Ya;
function vt() {
  return Ya || (Ya = 1, ha = Function.call.bind(Object.prototype.hasOwnProperty)), ha;
}
var ba, Va;
function ai() {
  if (Va) return ba;
  Va = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = /* @__PURE__ */ Ca(), i = {}, n = /* @__PURE__ */ vt();
    e = function(r) {
      var s = "Warning: " + r;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(r, s, l, g, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in r)
        if (n(r, E)) {
          var h;
          try {
            if (typeof r[E] != "function") {
              var R = Error(
                (g || "React class") + ": " + l + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw R.name = "Invariant Violation", R;
            }
            h = r[E](s, E, g, l, null, a);
          } catch (X) {
            h = X;
          }
          if (h && !(h instanceof Error) && e(
            (g || "React class") + ": type specification of " + l + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in i)) {
            i[h.message] = !0;
            var L = y ? y() : "";
            e(
              "Failed " + l + " type: " + h.message + (L ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, ba = o, ba;
}
var ya, Ja;
function ti() {
  if (Ja) return ya;
  Ja = 1;
  var e = mt(), a = ei(), i = /* @__PURE__ */ Ca(), n = /* @__PURE__ */ vt(), o = /* @__PURE__ */ ai(), r = function() {
  };
  process.env.NODE_ENV !== "production" && (r = function(l) {
    var g = "Warning: " + l;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ya = function(l, g) {
    var y = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function h(c) {
      var m = c && (y && c[y] || c[E]);
      if (typeof m == "function")
        return m;
    }
    var R = "<<anonymous>>", L = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: $(),
      arrayOf: K,
      element: Y(),
      elementType: d(),
      instanceOf: ce,
      node: ie(),
      objectOf: Q,
      oneOf: F,
      oneOfType: A,
      shape: ve,
      exact: ne
    };
    function X(c, m) {
      return c === m ? c !== 0 || 1 / c === 1 / m : c !== c && m !== m;
    }
    function N(c, m) {
      this.message = c, this.data = m && typeof m == "object" ? m : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function Z(c) {
      if (process.env.NODE_ENV !== "production")
        var m = {}, S = 0;
      function k(D, w, O, C, I, j, re) {
        if (C = C || R, j = j || O, re !== i) {
          if (g) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = C + ":" + O;
            !m[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (r(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), m[ue] = !0, S++);
          }
        }
        return w[O] == null ? D ? w[O] === null ? new N("The " + I + " `" + j + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new N("The " + I + " `" + j + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : c(w, O, C, I, j);
      }
      var _ = k.bind(null, !1);
      return _.isRequired = k.bind(null, !0), _;
    }
    function B(c) {
      function m(S, k, _, D, w, O) {
        var C = S[k], I = de(C);
        if (I !== c) {
          var j = ge(C);
          return new N(
            "Invalid " + D + " `" + w + "` of type " + ("`" + j + "` supplied to `" + _ + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return Z(m);
    }
    function $() {
      return Z(s);
    }
    function K(c) {
      function m(S, k, _, D, w) {
        if (typeof c != "function")
          return new N("Property `" + w + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var O = S[k];
        if (!Array.isArray(O)) {
          var C = de(O);
          return new N("Invalid " + D + " `" + w + "` of type " + ("`" + C + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var I = 0; I < O.length; I++) {
          var j = c(O, I, _, D, w + "[" + I + "]", i);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return Z(m);
    }
    function Y() {
      function c(m, S, k, _, D) {
        var w = m[S];
        if (!l(w)) {
          var O = de(w);
          return new N("Invalid " + _ + " `" + D + "` of type " + ("`" + O + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Z(c);
    }
    function d() {
      function c(m, S, k, _, D) {
        var w = m[S];
        if (!e.isValidElementType(w)) {
          var O = de(w);
          return new N("Invalid " + _ + " `" + D + "` of type " + ("`" + O + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Z(c);
    }
    function ce(c) {
      function m(S, k, _, D, w) {
        if (!(S[k] instanceof c)) {
          var O = c.name || R, C = le(S[k]);
          return new N("Invalid " + D + " `" + w + "` of type " + ("`" + C + "` supplied to `" + _ + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return Z(m);
    }
    function F(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? r(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : r("Invalid argument supplied to oneOf, expected an array.")), s;
      function m(S, k, _, D, w) {
        for (var O = S[k], C = 0; C < c.length; C++)
          if (X(O, c[C]))
            return null;
        var I = JSON.stringify(c, function(re, u) {
          var ue = ge(u);
          return ue === "symbol" ? String(u) : u;
        });
        return new N("Invalid " + D + " `" + w + "` of value `" + String(O) + "` " + ("supplied to `" + _ + "`, expected one of " + I + "."));
      }
      return Z(m);
    }
    function Q(c) {
      function m(S, k, _, D, w) {
        if (typeof c != "function")
          return new N("Property `" + w + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var O = S[k], C = de(O);
        if (C !== "object")
          return new N("Invalid " + D + " `" + w + "` of type " + ("`" + C + "` supplied to `" + _ + "`, expected an object."));
        for (var I in O)
          if (n(O, I)) {
            var j = c(O, I, _, D, w + "." + I, i);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return Z(m);
    }
    function A(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && r("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var m = 0; m < c.length; m++) {
        var S = c[m];
        if (typeof S != "function")
          return r(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(S) + " at index " + m + "."
          ), s;
      }
      function k(_, D, w, O, C) {
        for (var I = [], j = 0; j < c.length; j++) {
          var re = c[j], u = re(_, D, w, O, C, i);
          if (u == null)
            return null;
          u.data && n(u.data, "expectedType") && I.push(u.data.expectedType);
        }
        var ue = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new N("Invalid " + O + " `" + C + "` supplied to " + ("`" + w + "`" + ue + "."));
      }
      return Z(k);
    }
    function ie() {
      function c(m, S, k, _, D) {
        return z(m[S]) ? null : new N("Invalid " + _ + " `" + D + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return Z(c);
    }
    function q(c, m, S, k, _) {
      return new N(
        (c || "React class") + ": " + m + " type `" + S + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function ve(c) {
      function m(S, k, _, D, w) {
        var O = S[k], C = de(O);
        if (C !== "object")
          return new N("Invalid " + D + " `" + w + "` of type `" + C + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var I in c) {
          var j = c[I];
          if (typeof j != "function")
            return q(_, D, w, I, ge(j));
          var re = j(O, I, _, D, w + "." + I, i);
          if (re)
            return re;
        }
        return null;
      }
      return Z(m);
    }
    function ne(c) {
      function m(S, k, _, D, w) {
        var O = S[k], C = de(O);
        if (C !== "object")
          return new N("Invalid " + D + " `" + w + "` of type `" + C + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var I = a({}, S[k], c);
        for (var j in I) {
          var re = c[j];
          if (n(c, j) && typeof re != "function")
            return q(_, D, w, j, ge(re));
          if (!re)
            return new N(
              "Invalid " + D + " `" + w + "` key `" + j + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(S[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var u = re(O, j, _, D, w + "." + j, i);
          if (u)
            return u;
        }
        return null;
      }
      return Z(m);
    }
    function z(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(z);
          if (c === null || l(c))
            return !0;
          var m = h(c);
          if (m) {
            var S = m.call(c), k;
            if (m !== c.entries) {
              for (; !(k = S.next()).done; )
                if (!z(k.value))
                  return !1;
            } else
              for (; !(k = S.next()).done; ) {
                var _ = k.value;
                if (_ && !z(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(c, m) {
      return c === "symbol" ? !0 : m ? m["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && m instanceof Symbol : !1;
    }
    function de(c) {
      var m = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : te(m, c) ? "symbol" : m;
    }
    function ge(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var m = de(c);
      if (m === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return m;
    }
    function ye(c) {
      var m = ge(c);
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
    function le(c) {
      return !c.constructor || !c.constructor.name ? R : c.constructor.name;
    }
    return L.checkPropTypes = o, L.resetWarningCache = o.resetWarningCache, L.PropTypes = L, L;
  }, ya;
}
var _a, Xa;
function ii() {
  if (Xa) return _a;
  Xa = 1;
  var e = /* @__PURE__ */ Ca();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, _a = function() {
    function n(s, l, g, y, E, h) {
      if (h !== e) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var r = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: i,
      resetWarningCache: a
    };
    return r.PropTypes = r, r;
  }, _a;
}
var Za;
function ni() {
  if (Za) return aa.exports;
  if (Za = 1, process.env.NODE_ENV !== "production") {
    var e = mt(), a = !0;
    aa.exports = /* @__PURE__ */ ti()(e.isElement, a);
  } else
    aa.exports = /* @__PURE__ */ ii()();
  return aa.exports;
}
var ri = /* @__PURE__ */ ni();
const J = /* @__PURE__ */ dt(ri);
function Ie(e, a, i, n) {
  function o(r) {
    return r instanceof i ? r : new i(function(s) {
      s(r);
    });
  }
  return new (i || (i = Promise))(function(r, s) {
    function l(E) {
      try {
        y(n.next(E));
      } catch (h) {
        s(h);
      }
    }
    function g(E) {
      try {
        y(n.throw(E));
      } catch (h) {
        s(h);
      }
    }
    function y(E) {
      E.done ? r(E.value) : o(E.value).then(l, g);
    }
    y((n = n.apply(e, a || [])).next());
  });
}
const oi = /* @__PURE__ */ new Map([
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
function Ge(e, a, i) {
  const n = pi(e), { webkitRelativePath: o } = e, r = typeof a == "string" ? a : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof n.path != "string" && Qa(n, "path", r), Qa(n, "relativePath", r), n;
}
function pi(e) {
  const { name: a } = e;
  if (a && a.lastIndexOf(".") !== -1 && !e.type) {
    const n = a.split(".").pop().toLowerCase(), o = oi.get(n);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Qa(e, a, i) {
  Object.defineProperty(e, a, {
    value: i,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const ci = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function li(e) {
  return Ie(this, void 0, void 0, function* () {
    return oa(e) && si(e.dataTransfer) ? mi(e.dataTransfer, e.type) : di(e) ? ui(e) : Array.isArray(e) && e.every((a) => "getFile" in a && typeof a.getFile == "function") ? fi(e) : [];
  });
}
function si(e) {
  return oa(e);
}
function di(e) {
  return oa(e) && oa(e.target);
}
function oa(e) {
  return typeof e == "object" && e !== null;
}
function ui(e) {
  return Sa(e.target.files).map((a) => Ge(a));
}
function fi(e) {
  return Ie(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((i) => i.getFile()))).map((i) => Ge(i));
  });
}
function mi(e, a) {
  return Ie(this, void 0, void 0, function* () {
    if (e.items) {
      const i = Sa(e.items).filter((o) => o.kind === "file");
      if (a !== "drop")
        return i;
      const n = yield Promise.all(i.map(vi));
      return et(xt(n));
    }
    return et(Sa(e.files).map((i) => Ge(i)));
  });
}
function et(e) {
  return e.filter((a) => ci.indexOf(a.name) === -1);
}
function Sa(e) {
  if (e === null)
    return [];
  const a = [];
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    a.push(n);
  }
  return a;
}
function vi(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return at(e);
  const a = e.webkitGetAsEntry();
  return a && a.isDirectory ? gt(a) : at(e, a);
}
function xt(e) {
  return e.reduce((a, i) => [
    ...a,
    ...Array.isArray(i) ? xt(i) : [i]
  ], []);
}
function at(e, a) {
  return Ie(this, void 0, void 0, function* () {
    var i;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const r = yield e.getAsFileSystemHandle();
      if (r === null)
        throw new Error(`${e} is not a File`);
      if (r !== void 0) {
        const s = yield r.getFile();
        return s.handle = r, Ge(s);
      }
    }
    const n = e.getAsFile();
    if (!n)
      throw new Error(`${e} is not a File`);
    return Ge(n, (i = a == null ? void 0 : a.fullPath) !== null && i !== void 0 ? i : void 0);
  });
}
function xi(e) {
  return Ie(this, void 0, void 0, function* () {
    return e.isDirectory ? gt(e) : gi(e);
  });
}
function gt(e) {
  const a = e.createReader();
  return new Promise((i, n) => {
    const o = [];
    function r() {
      a.readEntries((s) => Ie(this, void 0, void 0, function* () {
        if (s.length) {
          const l = Promise.all(s.map(xi));
          o.push(l), r();
        } else
          try {
            const l = yield Promise.all(o);
            i(l);
          } catch (l) {
            n(l);
          }
      }), (s) => {
        n(s);
      });
    }
    r();
  });
}
function gi(e) {
  return Ie(this, void 0, void 0, function* () {
    return new Promise((a, i) => {
      e.file((n) => {
        const o = Ge(n, e.fullPath);
        a(o);
      }, (n) => {
        i(n);
      });
    });
  });
}
var ia = {}, tt;
function Ei() {
  return tt || (tt = 1, ia.__esModule = !0, ia.default = function(e, a) {
    if (e && a) {
      var i = Array.isArray(a) ? a : a.split(",");
      if (i.length === 0)
        return !0;
      var n = e.name || "", o = (e.type || "").toLowerCase(), r = o.replace(/\/.*$/, "");
      return i.some(function(s) {
        var l = s.trim().toLowerCase();
        return l.charAt(0) === "." ? n.toLowerCase().endsWith(l) : l.endsWith("/*") ? r === l.replace(/\/.*$/, "") : o === l;
      });
    }
    return !0;
  }), ia;
}
var hi = Ei();
const wa = /* @__PURE__ */ dt(hi);
function it(e) {
  return _i(e) || yi(e) || ht(e) || bi();
}
function bi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _i(e) {
  if (Array.isArray(e)) return Oa(e);
}
function nt(e, a) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    a && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function rt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? nt(Object(i), !0).forEach(function(n) {
      Et(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nt(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Et(e, a, i) {
  return a in e ? Object.defineProperty(e, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = i, e;
}
function Ze(e, a) {
  return Ri(e) || Ti(e, a) || ht(e, a) || wi();
}
function wi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ht(e, a) {
  if (e) {
    if (typeof e == "string") return Oa(e, a);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Oa(e, a);
  }
}
function Oa(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var i = 0, n = new Array(a); i < a; i++)
    n[i] = e[i];
  return n;
}
function Ti(e, a) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n = [], o = !0, r = !1, s, l;
    try {
      for (i = i.call(e); !(o = (s = i.next()).done) && (n.push(s.value), !(a && n.length === a)); o = !0)
        ;
    } catch (g) {
      r = !0, l = g;
    } finally {
      try {
        !o && i.return != null && i.return();
      } finally {
        if (r) throw l;
      }
    }
    return n;
  }
}
function Ri(e) {
  if (Array.isArray(e)) return e;
}
var Si = typeof wa == "function" ? wa : wa.default, Oi = "file-invalid-type", ki = "file-too-large", ji = "file-too-small", Ai = "too-many-files", Ci = function() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = a.split(","), n = i.length > 1 ? "one of ".concat(i.join(", ")) : i[0];
  return {
    code: Oi,
    message: "File type must be ".concat(n)
  };
}, ot = function(a) {
  return {
    code: ki,
    message: "File is larger than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, pt = function(a) {
  return {
    code: ji,
    message: "File is smaller than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, Di = {
  code: Ai,
  message: "Too many files"
};
function bt(e, a) {
  var i = e.type === "application/x-moz-file" || Si(e, a);
  return [i, i ? null : Ci(a)];
}
function yt(e, a, i) {
  if (De(e.size))
    if (De(a) && De(i)) {
      if (e.size > i) return [!1, ot(i)];
      if (e.size < a) return [!1, pt(a)];
    } else {
      if (De(a) && e.size < a) return [!1, pt(a)];
      if (De(i) && e.size > i) return [!1, ot(i)];
    }
  return [!0, null];
}
function De(e) {
  return e != null;
}
function Ii(e) {
  var a = e.files, i = e.accept, n = e.minSize, o = e.maxSize, r = e.multiple, s = e.maxFiles, l = e.validator;
  return !r && a.length > 1 || r && s >= 1 && a.length > s ? !1 : a.every(function(g) {
    var y = bt(g, i), E = Ze(y, 1), h = E[0], R = yt(g, n, o), L = Ze(R, 1), X = L[0], N = l ? l(g) : null;
    return h && X && !N;
  });
}
function pa(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function na(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(a) {
    return a === "Files" || a === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function ct(e) {
  e.preventDefault();
}
function Pi(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Li(e) {
  return e.indexOf("Edge/") !== -1;
}
function Ni() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Pi(e) || Li(e);
}
function we() {
  for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
    a[i] = arguments[i];
  return function(n) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      r[s - 1] = arguments[s];
    return a.some(function(l) {
      return !pa(n) && l && l.apply(void 0, [n].concat(r)), pa(n);
    });
  };
}
function Mi() {
  return "showOpenFilePicker" in window;
}
function Fi(e) {
  if (De(e)) {
    var a = Object.entries(e).filter(function(i) {
      var n = Ze(i, 2), o = n[0], r = n[1], s = !0;
      return _t(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), s = !1), (!Array.isArray(r) || !r.every(wt)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), s = !1), s;
    }).reduce(function(i, n) {
      var o = Ze(n, 2), r = o[0], s = o[1];
      return rt(rt({}, i), {}, Et({}, r, s));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: a
    }];
  }
  return e;
}
function zi(e) {
  if (De(e))
    return Object.entries(e).reduce(function(a, i) {
      var n = Ze(i, 2), o = n[0], r = n[1];
      return [].concat(it(a), [o], it(r));
    }, []).filter(function(a) {
      return _t(a) || wt(a);
    }).join(",");
}
function Gi(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Ui(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function _t(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function wt(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Hi = ["children"], Wi = ["open"], Bi = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], $i = ["refKey", "onChange", "onClick"];
function qi(e) {
  return Vi(e) || Yi(e) || Tt(e) || Ki();
}
function Ki() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vi(e) {
  if (Array.isArray(e)) return ka(e);
}
function Ta(e, a) {
  return Zi(e) || Xi(e, a) || Tt(e, a) || Ji();
}
function Ji() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt(e, a) {
  if (e) {
    if (typeof e == "string") return ka(e, a);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ka(e, a);
  }
}
function ka(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var i = 0, n = new Array(a); i < a; i++)
    n[i] = e[i];
  return n;
}
function Xi(e, a) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n = [], o = !0, r = !1, s, l;
    try {
      for (i = i.call(e); !(o = (s = i.next()).done) && (n.push(s.value), !(a && n.length === a)); o = !0)
        ;
    } catch (g) {
      r = !0, l = g;
    } finally {
      try {
        !o && i.return != null && i.return();
      } finally {
        if (r) throw l;
      }
    }
    return n;
  }
}
function Zi(e) {
  if (Array.isArray(e)) return e;
}
function lt(e, a) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    a && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function ae(e) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? lt(Object(i), !0).forEach(function(n) {
      ja(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : lt(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function ja(e, a, i) {
  return a in e ? Object.defineProperty(e, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = i, e;
}
function ca(e, a) {
  if (e == null) return {};
  var i = Qi(e, a), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      n = r[o], !(a.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function Qi(e, a) {
  if (e == null) return {};
  var i = {}, n = Object.keys(e), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(a.indexOf(o) >= 0) && (i[o] = e[o]);
  return i;
}
var Da = /* @__PURE__ */ Ft(function(e, a) {
  var i = e.children, n = ca(e, Hi), o = St(n), r = o.open, s = ca(o, Wi);
  return zt(a, function() {
    return {
      open: r
    };
  }, [r]), /* @__PURE__ */ la.createElement(Gt, null, i(ae(ae({}, s), {}, {
    open: r
  })));
});
Da.displayName = "Dropzone";
var Rt = {
  disabled: !1,
  getFilesFromEvent: li,
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
Da.defaultProps = Rt;
Da.propTypes = {
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
var Aa = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function St() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = ae(ae({}, Rt), e), i = a.accept, n = a.disabled, o = a.getFilesFromEvent, r = a.maxSize, s = a.minSize, l = a.multiple, g = a.maxFiles, y = a.onDragEnter, E = a.onDragLeave, h = a.onDragOver, R = a.onDrop, L = a.onDropAccepted, X = a.onDropRejected, N = a.onFileDialogCancel, Z = a.onFileDialogOpen, B = a.useFsAccessApi, $ = a.autoFocus, K = a.preventDropOnDocument, Y = a.noClick, d = a.noKeyboard, ce = a.noDrag, F = a.noDragEventsBubbling, Q = a.onError, A = a.validator, ie = ze(function() {
    return zi(i);
  }, [i]), q = ze(function() {
    return Fi(i);
  }, [i]), ve = ze(function() {
    return typeof Z == "function" ? Z : st;
  }, [Z]), ne = ze(function() {
    return typeof N == "function" ? N : st;
  }, [N]), z = Je(null), te = Je(null), de = Mt(en, Aa), ge = Ta(de, 2), ye = ge[0], le = ge[1], c = ye.isFocused, m = ye.isFileDialogActive, S = Je(typeof window < "u" && window.isSecureContext && B && Mi()), k = function() {
    !S.current && m && setTimeout(function() {
      if (te.current) {
        var b = te.current.files;
        b.length || (le({
          type: "closeDialog"
        }), ne());
      }
    }, 300);
  };
  Xe(function() {
    return window.addEventListener("focus", k, !1), function() {
      window.removeEventListener("focus", k, !1);
    };
  }, [te, m, ne, S]);
  var _ = Je([]), D = function(b) {
    z.current && z.current.contains(b.target) || (b.preventDefault(), _.current = []);
  };
  Xe(function() {
    return K && (document.addEventListener("dragover", ct, !1), document.addEventListener("drop", D, !1)), function() {
      K && (document.removeEventListener("dragover", ct), document.removeEventListener("drop", D));
    };
  }, [z, K]), Xe(function() {
    return !n && $ && z.current && z.current.focus(), function() {
    };
  }, [z, $, n]);
  var w = Ee(function(f) {
    Q ? Q(f) : console.error(f);
  }, [Q]), O = Ee(function(f) {
    f.preventDefault(), f.persist(), Le(f), _.current = [].concat(qi(_.current), [f.target]), na(f) && Promise.resolve(o(f)).then(function(b) {
      if (!(pa(f) && !F)) {
        var ee = b.length, oe = ee > 0 && Ii({
          files: b,
          accept: ie,
          minSize: s,
          maxSize: r,
          multiple: l,
          maxFiles: g,
          validator: A
        }), fe = ee > 0 && !oe;
        le({
          isDragAccept: oe,
          isDragReject: fe,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), y && y(f);
      }
    }).catch(function(b) {
      return w(b);
    });
  }, [o, y, w, F, ie, s, r, l, g, A]), C = Ee(function(f) {
    f.preventDefault(), f.persist(), Le(f);
    var b = na(f);
    if (b && f.dataTransfer)
      try {
        f.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return b && h && h(f), !1;
  }, [h, F]), I = Ee(function(f) {
    f.preventDefault(), f.persist(), Le(f);
    var b = _.current.filter(function(oe) {
      return z.current && z.current.contains(oe);
    }), ee = b.indexOf(f.target);
    ee !== -1 && b.splice(ee, 1), _.current = b, !(b.length > 0) && (le({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), na(f) && E && E(f));
  }, [z, E, F]), j = Ee(function(f, b) {
    var ee = [], oe = [];
    f.forEach(function(fe) {
      var je = bt(fe, ie), Oe = Ta(je, 2), He = Oe[0], We = Oe[1], Be = yt(fe, s, r), Ne = Ta(Be, 2), $e = Ne[0], qe = Ne[1], Ke = A ? A(fe) : null;
      if (He && $e && !Ke)
        ee.push(fe);
      else {
        var Ae = [We, qe];
        Ke && (Ae = Ae.concat(Ke)), oe.push({
          file: fe,
          errors: Ae.filter(function(Qe) {
            return Qe;
          })
        });
      }
    }), (!l && ee.length > 1 || l && g >= 1 && ee.length > g) && (ee.forEach(function(fe) {
      oe.push({
        file: fe,
        errors: [Di]
      });
    }), ee.splice(0)), le({
      acceptedFiles: ee,
      fileRejections: oe,
      isDragReject: oe.length > 0,
      type: "setFiles"
    }), R && R(ee, oe, b), oe.length > 0 && X && X(oe, b), ee.length > 0 && L && L(ee, b);
  }, [le, l, ie, s, r, g, R, L, X, A]), re = Ee(function(f) {
    f.preventDefault(), f.persist(), Le(f), _.current = [], na(f) && Promise.resolve(o(f)).then(function(b) {
      pa(f) && !F || j(b, f);
    }).catch(function(b) {
      return w(b);
    }), le({
      type: "reset"
    });
  }, [o, j, w, F]), u = Ee(function() {
    if (S.current) {
      le({
        type: "openDialog"
      }), ve();
      var f = {
        multiple: l,
        types: q
      };
      window.showOpenFilePicker(f).then(function(b) {
        return o(b);
      }).then(function(b) {
        j(b, null), le({
          type: "closeDialog"
        });
      }).catch(function(b) {
        Gi(b) ? (ne(b), le({
          type: "closeDialog"
        })) : Ui(b) ? (S.current = !1, te.current ? (te.current.value = null, te.current.click()) : w(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : w(b);
      });
      return;
    }
    te.current && (le({
      type: "openDialog"
    }), ve(), te.current.value = null, te.current.click());
  }, [le, ve, ne, B, j, w, q, l]), ue = Ee(function(f) {
    !z.current || !z.current.isEqualNode(f.target) || (f.key === " " || f.key === "Enter" || f.keyCode === 32 || f.keyCode === 13) && (f.preventDefault(), u());
  }, [z, u]), Te = Ee(function() {
    le({
      type: "focus"
    });
  }, []), _e = Ee(function() {
    le({
      type: "blur"
    });
  }, []), ke = Ee(function() {
    Y || (Ni() ? setTimeout(u, 0) : u());
  }, [Y, u]), Re = function(b) {
    return n ? null : b;
  }, Pe = function(b) {
    return d ? null : Re(b);
  }, Se = function(b) {
    return ce ? null : Re(b);
  }, Le = function(b) {
    F && b.stopPropagation();
  }, da = ze(function() {
    return function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = f.refKey, ee = b === void 0 ? "ref" : b, oe = f.role, fe = f.onKeyDown, je = f.onFocus, Oe = f.onBlur, He = f.onClick, We = f.onDragEnter, Be = f.onDragOver, Ne = f.onDragLeave, $e = f.onDrop, qe = ca(f, Bi);
      return ae(ae(ja({
        onKeyDown: Pe(we(fe, ue)),
        onFocus: Pe(we(je, Te)),
        onBlur: Pe(we(Oe, _e)),
        onClick: Re(we(He, ke)),
        onDragEnter: Se(we(We, O)),
        onDragOver: Se(we(Be, C)),
        onDragLeave: Se(we(Ne, I)),
        onDrop: Se(we($e, re)),
        role: typeof oe == "string" && oe !== "" ? oe : "presentation"
      }, ee, z), !n && !d ? {
        tabIndex: 0
      } : {}), qe);
    };
  }, [z, ue, Te, _e, ke, O, C, I, re, d, ce, n]), Ue = Ee(function(f) {
    f.stopPropagation();
  }, []), ua = ze(function() {
    return function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = f.refKey, ee = b === void 0 ? "ref" : b, oe = f.onChange, fe = f.onClick, je = ca(f, $i), Oe = ja({
        accept: ie,
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
        onChange: Re(we(oe, re)),
        onClick: Re(we(fe, Ue)),
        tabIndex: -1
      }, ee, te);
      return ae(ae({}, Oe), je);
    };
  }, [te, i, l, re, n]);
  return ae(ae({}, ye), {}, {
    isFocused: c && !n,
    getRootProps: da,
    getInputProps: ua,
    rootRef: z,
    inputRef: te,
    open: Re(u)
  });
}
function en(e, a) {
  switch (a.type) {
    case "focus":
      return ae(ae({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ae(ae({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ae(ae({}, Aa), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ae(ae({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ae(ae({}, e), {}, {
        isDragActive: a.isDragActive,
        isDragAccept: a.isDragAccept,
        isDragReject: a.isDragReject
      });
    case "setFiles":
      return ae(ae({}, e), {}, {
        acceptedFiles: a.acceptedFiles,
        fileRejections: a.fileRejections,
        isDragReject: a.isDragReject
      });
    case "reset":
      return ae({}, Aa);
    default:
      return e;
  }
}
function st() {
}
const an = ({ onImageUploaded: e, onUploadError: a, className: i, triggerUploadRef: n, lang: o = "de" }) => {
  const [r, s] = be(null), [l, g] = be("idle"), [y, E] = be(0), [h, R] = be(""), L = Ee((d, ce) => {
    var F, Q;
    if (ce.length > 0) {
      const A = ce[0];
      ((F = A.errors[0]) == null ? void 0 : F.code) === "file-too-large" ? R(W(o, "ERROR_FILE_TOO_LARGE")) : ((Q = A.errors[0]) == null ? void 0 : Q.code) === "file-invalid-type" ? R(W(o, "ERROR_INVALID_FILE_TYPE")) : R(W(o, "ERROR_GENERIC_UPLOAD"));
      return;
    }
    if (d.length > 0) {
      const A = d[0];
      s(A), R(""), g("idle"), E(0);
    }
  }, [o]), X = async (d) => {
    g("uploading"), E(0);
    const ce = new FormData();
    ce.append("photo", d);
    try {
      const F = new XMLHttpRequest();
      F.upload.addEventListener("progress", (A) => {
        if (A.lengthComputable) {
          const ie = Math.round(A.loaded / A.total * 100);
          E(ie);
        }
      });
      const Q = await new Promise((A, ie) => {
        F.addEventListener("load", () => A(F)), F.addEventListener("error", () => ie(new Error("Upload failed"))), F.addEventListener("abort", () => ie(new Error("Upload aborted"))), F.open("POST", `${ft}/upload/photo`), F.send(ce);
      });
      if (Q.status >= 200 && Q.status < 300) {
        g("success"), E(100);
        try {
          const A = JSON.parse(Q.responseText);
          console.log("Upload erfolgreich:", A), e && e(A);
        } catch {
          console.log("Upload erfolgreich, aber keine JSON-Antwort"), e && e({ fileName: "unknown", size: 0, type: "unknown" });
        }
      } else {
        const A = `${W(o, "ERROR_UPLOAD_WITH_STATUS")} ${Q.status} ${Q.statusText}`;
        throw g("error"), R(A), a && a(A), new Error(A);
      }
    } catch (F) {
      const Q = W(o, "ERROR_NETWORK_UPLOAD");
      throw g("error"), R(Q), console.error("Upload error:", F), a && a(Q), F;
    }
  }, { getRootProps: N, getInputProps: Z, isDragActive: B, isDragReject: $ } = St({
    onDrop: L,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"]
    },
    maxSize: 10 * 1024 * 1024,
    // 10MB
    multiple: !1
  }), K = () => {
    s(null), g("idle"), E(0), R("");
  }, Y = async () => {
    if (r)
      try {
        return await X(r), !0;
      } catch {
        return !1;
      }
    return !0;
  };
  return la.useEffect(() => {
    n && (n.current = Y);
  }, [r, n]), /* @__PURE__ */ x.jsxs("div", { className: `image-upload-container ${i || ""}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "panel-title", children: W(o, "IMAGE_UPLOAD_TITLE") }),
    /* @__PURE__ */ x.jsx("p", { className: "upload-description", children: W(o, "IMAGE_UPLOAD_DESCRIPTION") }),
    h && /* @__PURE__ */ x.jsxs("div", { className: "error-message", children: [
      "⚠️ ",
      h
    ] }),
    l === "success" && /* @__PURE__ */ x.jsx("div", { className: "success-message", children: W(o, "IMAGE_UPLOAD_SUCCESS") }),
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        ...N(),
        className: `dropzone ${B ? "drag-active" : ""} ${$ ? "drag-reject" : ""} ${r ? "has-file" : ""}`,
        children: [
          /* @__PURE__ */ x.jsx("input", { ...Z() }),
          r ? /* @__PURE__ */ x.jsxs("div", { className: "file-info", children: [
            /* @__PURE__ */ x.jsx("div", { className: "file-preview", children: /* @__PURE__ */ x.jsx(
              "img",
              {
                src: URL.createObjectURL(r),
                alt: W(o, "IMAGE_UPLOAD_PREVIEW_ALT"),
                className: "preview-image"
              }
            ) }),
            l === "uploading" && /* @__PURE__ */ x.jsxs("div", { className: "upload-progress", children: [
              /* @__PURE__ */ x.jsx("div", { className: "progress-bar", children: /* @__PURE__ */ x.jsx(
                "div",
                {
                  className: "progress-fill",
                  style: { width: `${y}%` }
                }
              ) }),
              /* @__PURE__ */ x.jsxs("p", { children: [
                W(o, "IMAGE_UPLOAD_PROGRESS"),
                " ",
                y,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "button-group", children: /* @__PURE__ */ x.jsx(
              "button",
              {
                type: "button",
                onClick: (d) => {
                  d.stopPropagation(), K();
                },
                className: "remove-button",
                children: W(o, "IMAGE_UPLOAD_REMOVE")
              }
            ) })
          ] }) : /* @__PURE__ */ x.jsx("div", { className: "dropzone-content", children: B ? /* @__PURE__ */ x.jsxs("div", { className: "drag-message", children: [
            /* @__PURE__ */ x.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ x.jsx("p", { children: W(o, "IMAGE_UPLOAD_DROP_FILE") })
          ] }) : /* @__PURE__ */ x.jsxs("div", { className: "upload-message", children: [
            /* @__PURE__ */ x.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ x.jsxs("p", { children: [
              /* @__PURE__ */ x.jsx("strong", { children: W(o, "IMAGE_UPLOAD_SELECT") }),
              " ",
              W(o, "IMAGE_UPLOAD_DRAG_INSTRUCTION")
            ] }),
            /* @__PURE__ */ x.jsx("p", { className: "upload-hint", children: W(o, "IMAGE_UPLOAD_HINT") })
          ] }) })
        ]
      }
    )
  ] });
};
function nn({
  token: e,
  locations: a,
  params: i = [],
  source: n,
  isPublic: o,
  lang: r
}) {
  const [l, g] = be(0), [y, E] = be(null), [h, R] = be(null), [L, X] = be(null), [N, Z] = be(Date.now()), [B, $] = be(null), [K, Y] = be(null), [d, ce] = be(!1), F = Je(null);
  Xe(() => {
    const q = localStorage.getItem("lastWeatherReportTime");
    if (q) {
      const ve = Date.now() - parseInt(q), ne = 10 * 60 * 1e3;
      ve < ne && ce(!0);
    }
  }, []);
  function Q(q) {
    g(q);
  }
  async function A() {
    if (l === 4 && F.current) {
      const q = await F.current();
      console.log("uploadSuccess", q);
    }
    l < 5 && g(l + 1);
  }
  function ie() {
    l > 0 && g(l - 1);
  }
  return Xe(() => {
    if (e && y && h && L && l === 5 && B === null) {
      const { lat: q, lon: ve, place: ne } = L;
      Xt(e, {
        category: y,
        auspraegung: h,
        lat: q,
        lon: ve,
        place: ne,
        timestamp: N,
        source: n,
        imageUrl: K || "",
        isPublic: o
      }, () => {
        localStorage.setItem("lastWeatherReportTime", Date.now().toString()), Q(5), $("success");
      }, () => {
        $("error");
      });
    }
  }, [l]), /* @__PURE__ */ x.jsxs("div", { className: "slider-container", children: [
    d && /* @__PURE__ */ x.jsx("div", { className: "rate-limit-warning", children: W(r, "RATE_LIMIT_WARNING") }),
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: "slider-inner",
        style: {
          transform: `translateX(-${l * 16.666666666666664}%)`,
          width: "600%"
        },
        children: [
          /* @__PURE__ */ x.jsx("div", { className: "panel panel1", children: /* @__PURE__ */ x.jsx(
            qt,
            {
              params: i || [],
              lang: r,
              onSelectCategory: async (q) => {
                E(q), await A();
              }
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel2", children: /* @__PURE__ */ x.jsx(
            ra,
            {
              component: /* @__PURE__ */ x.jsx(
                Kt,
                {
                  category: y,
                  lang: r,
                  onSelectAuspraegung: async (q) => {
                    R(q), await A();
                  }
                }
              ),
              onNext: A,
              onPrev: ie,
              showPrev: !0,
              showNext: !1,
              lang: r
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel3", children: /* @__PURE__ */ x.jsx(
            ra,
            {
              component: /* @__PURE__ */ x.jsx(Yt, { locations: a, lang: r, onSelectLocation: async (q) => {
                X(q), await A();
              } }),
              onNext: A,
              onPrev: ie,
              showPrev: !0,
              showNext: !1,
              lang: r
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel4", children: /* @__PURE__ */ x.jsx(
            ra,
            {
              component: /* @__PURE__ */ x.jsx(Jt, { lang: r, onSelectTimestamp: async (q) => {
                Z(q), await A();
              } }),
              onNext: A,
              onPrev: ie,
              showPrev: !0,
              showNext: !1,
              lang: r
            }
          ) }),
          /* @__PURE__ */ x.jsx("div", { className: "panel panel5", children: /* @__PURE__ */ x.jsx(
            ra,
            {
              component: /* @__PURE__ */ x.jsx(
                an,
                {
                  lang: r,
                  triggerUploadRef: F,
                  onImageUploaded: (q) => {
                    console.log("image uploaded", q), Y(q.s3Key);
                  }
                }
              ),
              onNext: A,
              onPrev: ie,
              showPrev: !0,
              showNext: !0,
              lang: r
            }
          ) }),
          /* @__PURE__ */ x.jsxs("div", { className: "panel panel6 status-panel", children: [
            B === "success" && /* @__PURE__ */ x.jsx("div", { className: "message success-message", children: W(r, "REPORT_SUCCESS") }),
            B === "error" && /* @__PURE__ */ x.jsx("div", { className: "message error-message", children: W(r, "REPORT_ERROR") })
          ] })
        ]
      }
    )
  ] });
}
function ra({ component: e, onNext: a, onPrev: i, showPrev: n, showNext: o, lang: r }) {
  return /* @__PURE__ */ x.jsxs("div", { className: "panel-content", children: [
    e && e,
    /* @__PURE__ */ x.jsxs("div", { className: "panel-buttons", children: [
      n && /* @__PURE__ */ x.jsxs("a", { href: "#", onClick: (s) => {
        s.preventDefault(), i();
      }, className: "text-link", children: [
        /* @__PURE__ */ x.jsx("svg", { className: "arrow-left", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ x.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 5H1m0 0l4 4M1 5l4-4" }) }),
        W(r, "BACK")
      ] }),
      o && /* @__PURE__ */ x.jsxs("a", { href: "#", onClick: async (s) => {
        s.preventDefault(), await a();
      }, className: "text-link", children: [
        W(r, "NEXT"),
        /* @__PURE__ */ x.jsx("svg", { className: "arrow-right", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ x.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 5h12m0 0L9 1m4 4L9 9" }) })
      ] })
    ] })
  ] });
}
function rn(e) {
  return `My Hello ${e}!`;
}
export {
  nn as CrowdWxEditor,
  rn as helloDebug
};
