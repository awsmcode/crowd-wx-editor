import aa, { useMemo as De, useRef as Qe, useReducer as Ut, useEffect as we, useCallback as _e, forwardRef as Bt, useImperativeHandle as zt, Fragment as Kt, useState as me } from "react";
function Et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ia = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Wt() {
  if (Ba) return Xe;
  Ba = 1;
  var e = aa, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(d, f, _) {
    var x, h = {}, S = null, C = null;
    _ !== void 0 && (S = "" + _), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (x in f) n.call(f, x) && !o.hasOwnProperty(x) && (h[x] = f[x]);
    if (d && d.defaultProps) for (x in f = d.defaultProps, f) h[x] === void 0 && (h[x] = f[x]);
    return { $$typeof: a, type: d, key: S, ref: C, props: h, _owner: r.current };
  }
  return Xe.Fragment = i, Xe.jsx = s, Xe.jsxs = s, Xe;
}
var Je = {};
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
function $t() {
  return za || (za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = aa, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), $ = Symbol.iterator, D = "@@iterator";
    function q(t) {
      if (t === null || typeof t != "object")
        return null;
      var p = $ && t[$] || t[D];
      return typeof p == "function" ? p : null;
    }
    var Y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(t) {
      {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), R = 1; R < p; R++)
          g[R - 1] = arguments[R];
        F("error", t, g);
      }
    }
    function F(t, p, g) {
      {
        var R = Y.ReactDebugCurrentFrame, z = R.getStackAddendum();
        z !== "" && (p += "%s", g = g.concat([z]));
        var X = g.map(function(G) {
          return String(G);
        });
        X.unshift("Warning: " + p), Function.prototype.apply.call(console[t], console, X);
      }
    }
    var V = !1, m = !1, te = !1, re = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function B(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === o || Z || t === r || t === _ || t === x || re || t === C || V || m || te || typeof t == "object" && t !== null && (t.$$typeof === S || t.$$typeof === h || t.$$typeof === s || t.$$typeof === d || t.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Q || t.getModuleId !== void 0));
    }
    function ue(t, p, g) {
      var R = t.displayName;
      if (R)
        return R;
      var z = p.displayName || p.name || "";
      return z !== "" ? g + "(" + z + ")" : g;
    }
    function he(t) {
      return t.displayName || "Context";
    }
    function le(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case _:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            var p = t;
            return he(p) + ".Consumer";
          case s:
            var g = t;
            return he(g._context) + ".Provider";
          case f:
            return ue(t, t.render, "ForwardRef");
          case h:
            var R = t.displayName || null;
            return R !== null ? R : le(t.type) || "Memo";
          case S: {
            var z = t, X = z._payload, G = z._init;
            try {
              return le(G(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ee = 0, ae, se, ge, j, c, v, O;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function y() {
      {
        if (ee === 0) {
          ae = console.log, se = console.info, ge = console.warn, j = console.error, c = console.group, v = console.groupCollapsed, O = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: w,
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
        ee++;
      }
    }
    function P() {
      {
        if (ee--, ee === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, t, {
              value: ae
            }),
            info: H({}, t, {
              value: se
            }),
            warn: H({}, t, {
              value: ge
            }),
            error: H({}, t, {
              value: j
            }),
            group: H({}, t, {
              value: c
            }),
            groupCollapsed: H({}, t, {
              value: v
            }),
            groupEnd: H({}, t, {
              value: O
            })
          });
        }
        ee < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var T = Y.ReactCurrentDispatcher, I;
    function N(t, p, g) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (z) {
            var R = z.stack.trim().match(/\n( *(at )?)/);
            I = R && R[1] || "";
          }
        return `
` + I + t;
      }
    }
    var k = !1, L;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      L = new oe();
    }
    function u(t, p) {
      if (!t || k)
        return "";
      {
        var g = L.get(t);
        if (g !== void 0)
          return g;
      }
      var R;
      k = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = T.current, T.current = null, y();
      try {
        if (p) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (xe) {
              R = xe;
            }
            Reflect.construct(t, [], G);
          } else {
            try {
              G.call();
            } catch (xe) {
              R = xe;
            }
            t.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            R = xe;
          }
          t();
        }
      } catch (xe) {
        if (xe && R && typeof xe.stack == "string") {
          for (var M = xe.stack.split(`
`), Ee = R.stack.split(`
`), pe = M.length - 1, de = Ee.length - 1; pe >= 1 && de >= 0 && M[pe] !== Ee[de]; )
            de--;
          for (; pe >= 1 && de >= 0; pe--, de--)
            if (M[pe] !== Ee[de]) {
              if (pe !== 1 || de !== 1)
                do
                  if (pe--, de--, de < 0 || M[pe] !== Ee[de]) {
                    var be = `
` + M[pe].replace(" at new ", " at ");
                    return t.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", t.displayName)), typeof t == "function" && L.set(t, be), be;
                  }
                while (pe >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        k = !1, T.current = X, P(), Error.prepareStackTrace = z;
      }
      var He = t ? t.displayName || t.name : "", Ne = He ? N(He) : "";
      return typeof t == "function" && L.set(t, Ne), Ne;
    }
    function fe(t, p, g) {
      return u(t, !1);
    }
    function Re(t) {
      var p = t.prototype;
      return !!(p && p.isReactComponent);
    }
    function ye(t, p, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return u(t, Re(t));
      if (typeof t == "string")
        return N(t);
      switch (t) {
        case _:
          return N("Suspense");
        case x:
          return N("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return fe(t.render);
          case h:
            return ye(t.type, p, g);
          case S: {
            var R = t, z = R._payload, X = R._init;
            try {
              return ye(X(z), p, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Se = {}, ke = Y.ReactDebugCurrentFrame;
    function Ae(t) {
      if (t) {
        var p = t._owner, g = ye(t.type, t._source, p ? p.type : null);
        ke.setExtraStackFrame(g);
      } else
        ke.setExtraStackFrame(null);
    }
    function Me(t, p, g, R, z) {
      {
        var X = Function.call.bind(Ie);
        for (var G in t)
          if (X(t, G)) {
            var M = void 0;
            try {
              if (typeof t[G] != "function") {
                var Ee = Error((R || "React class") + ": " + g + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              M = t[G](p, G, R, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              M = pe;
            }
            M && !(M instanceof Error) && (Ae(z), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", g, G, typeof M), Ae(null)), M instanceof Error && !(M.message in Se) && (Se[M.message] = !0, Ae(z), U("Failed %s type: %s", g, M.message), Ae(null));
          }
      }
    }
    var ua = Array.isArray;
    function Ke(t) {
      return ua(t);
    }
    function ma(t) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, g = p && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function E(t) {
      try {
        return b(t), !1;
      } catch {
        return !0;
      }
    }
    function b(t) {
      return "" + t;
    }
    function ie(t) {
      if (E(t))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ma(t)), b(t);
    }
    var ce = Y.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Oe;
    function We(t) {
      if (Ie.call(t, "ref")) {
        var p = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $e(t) {
      if (Ie.call(t, "key")) {
        var p = Object.getOwnPropertyDescriptor(t, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function qe(t, p) {
      typeof t.ref == "string" && ce.current;
    }
    function Ge(t, p) {
      {
        var g = function() {
          Ce || (Ce = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Ye(t, p) {
      {
        var g = function() {
          Oe || (Oe = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Ve = function(t, p, g, R, z, X, G) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: p,
        ref: g,
        props: G,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Ze(t, p, g, R, z) {
      {
        var X, G = {}, M = null, Ee = null;
        g !== void 0 && (ie(g), M = "" + g), $e(p) && (ie(p.key), M = "" + p.key), We(p) && (Ee = p.ref, qe(p, z));
        for (X in p)
          Ie.call(p, X) && !ve.hasOwnProperty(X) && (G[X] = p[X]);
        if (t && t.defaultProps) {
          var pe = t.defaultProps;
          for (X in pe)
            G[X] === void 0 && (G[X] = pe[X]);
        }
        if (M || Ee) {
          var de = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          M && Ge(G, de), Ee && Ye(G, de);
        }
        return Ve(t, M, Ee, z, R, ce.current, G);
      }
    }
    var Le = Y.ReactCurrentOwner, ta = Y.ReactDebugCurrentFrame;
    function Fe(t) {
      if (t) {
        var p = t._owner, g = ye(t.type, t._source, p ? p.type : null);
        ta.setExtraStackFrame(g);
      } else
        ta.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function va(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function ka() {
      {
        if (Le.current) {
          var t = le(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Lt(t) {
      return "";
    }
    var Ma = {};
    function Nt(t) {
      {
        var p = ka();
        if (!p) {
          var g = typeof t == "string" ? t : t.displayName || t.name;
          g && (p = `

Check the top-level render call using <` + g + ">.");
        }
        return p;
      }
    }
    function Ga(t, p) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = Nt(p);
        if (Ma[g])
          return;
        Ma[g] = !0;
        var R = "";
        t && t._owner && t._owner !== Le.current && (R = " It was passed a child from " + le(t._owner.type) + "."), Fe(t), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, R), Fe(null);
      }
    }
    function Fa(t, p) {
      {
        if (typeof t != "object")
          return;
        if (Ke(t))
          for (var g = 0; g < t.length; g++) {
            var R = t[g];
            va(R) && Ga(R, p);
          }
        else if (va(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var z = q(t);
          if (typeof z == "function" && z !== t.entries)
            for (var X = z.call(t), G; !(G = X.next()).done; )
              va(G.value) && Ga(G.value, p);
        }
      }
    }
    function Dt(t) {
      {
        var p = t.type;
        if (p == null || typeof p == "string")
          return;
        var g;
        if (typeof p == "function")
          g = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          g = p.propTypes;
        else
          return;
        if (g) {
          var R = le(p);
          Me(g, t.props, "prop", R, t);
        } else if (p.PropTypes !== void 0 && !fa) {
          fa = !0;
          var z = le(p);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(t) {
      {
        for (var p = Object.keys(t.props), g = 0; g < p.length; g++) {
          var R = p[g];
          if (R !== "children" && R !== "key") {
            Fe(t), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Fe(null);
            break;
          }
        }
        t.ref !== null && (Fe(t), U("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    var Ha = {};
    function Ua(t, p, g, R, z, X) {
      {
        var G = B(t);
        if (!G) {
          var M = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = Lt();
          Ee ? M += Ee : M += ka();
          var pe;
          t === null ? pe = "null" : Ke(t) ? pe = "array" : t !== void 0 && t.$$typeof === a ? (pe = "<" + (le(t.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof t, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, M);
        }
        var de = Ze(t, p, g, z, X);
        if (de == null)
          return de;
        if (G) {
          var be = p.children;
          if (be !== void 0)
            if (R)
              if (Ke(be)) {
                for (var He = 0; He < be.length; He++)
                  Fa(be[He], t);
                Object.freeze && Object.freeze(be);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fa(be, t);
        }
        if (Ie.call(p, "key")) {
          var Ne = le(t), xe = Object.keys(p).filter(function(Ht) {
            return Ht !== "key";
          }), Ea = xe.length > 0 ? "{key: someKey, " + xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ha[Ne + Ea]) {
            var Ft = xe.length > 0 ? "{" + xe.join(": ..., ") + ": ...}" : "{}";
            U(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ea, Ne, Ft, Ne), Ha[Ne + Ea] = !0;
          }
        }
        return t === n ? Pt(de) : Dt(de), de;
      }
    }
    function jt(t, p, g) {
      return Ua(t, p, g, !0);
    }
    function kt(t, p, g) {
      return Ua(t, p, g, !1);
    }
    var Mt = kt, Gt = jt;
    Je.Fragment = n, Je.jsx = Mt, Je.jsxs = Gt;
  }()), Je;
}
var Ka;
function qt() {
  return Ka || (Ka = 1, process.env.NODE_ENV === "production" ? ia.exports = Wt() : ia.exports = $t()), ia.exports;
}
var l = qt();
const Yt = {
  RATE_LIMIT_WARNING: "⚠️ Sie können nur einmal innerhalb von 10 Minuten eine Wettermeldung absetzen.",
  REPORT_SUCCESS: "Wettermeldung erfolgreich gesendet!",
  REPORT_ERROR: "Fehler beim Senden der Wettermeldung!",
  BACK: "Zurück",
  NEXT: "Weiter",
  CATEGORIES_TITLE: "Melde-Kategorie",
  LOCATION_TITLE: "Standort",
  TIME_TITLE: "Zeit",
  TIME_NOW: "jetzt",
  TIME_10_MINUTES: "vor 10 Minuten",
  TIME_20_MINUTES: "vor 20 Minuten",
  TIME_30_MINUTES: "vor 30 Minuten",
  TIME_60_MINUTES: "vor eine Stunde",
  IMAGE_UPLOAD_TITLE: "Bild hochladen",
  IMAGE_UPLOAD_DESCRIPTION: "Laden Sie optional ein Wetterfoto hoch (max. 10MB). Unterstützte Formate: JPG, PNG, GIF, WEBP",
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
  TORNADO_F4: "verheerend",
  SUMMARY_PAGE_TITLE: "Kurzüberblick",
  SUMMARY_FIELD_CATEGORY: "Kategorie",
  SUMMARY_FIELD_AUSPRAEGUNG: "Ausprägung",
  SUMMARY_FIELD_IMAGE: "Bild",
  SUMMARY_NO_IMAGE: "Kein Bild",
  STATUS_TITLE: "Zusammenfassung",
  REPORTER_DETAILS_TITLE: "Zusatzeingaben",
  REPORTER_DETAILS_LINK: "Name und Beschreibung eingeben?",
  REPORTER_NAME_LABEL: "Name (optional)",
  REPORTER_NAME_PLACEHOLDER: "Ihr Name",
  REPORTER_DESCRIPTION_LABEL: "Beschreibung (optional)",
  REPORTER_DESCRIPTION_PLACEHOLDER: "Kleine Beschreibung eingeben"
}, Vt = {
  RATE_LIMIT_WARNING: "⚠️ You can only submit a weather report once every 10 minutes.",
  REPORT_SUCCESS: "Weather report sent successfully!",
  REPORT_ERROR: "Error sending weather report!",
  BACK: "Back",
  NEXT: "Next",
  CATEGORIES_TITLE: "Categories",
  LOCATION_TITLE: "Location",
  TIME_TITLE: "Time",
  TIME_NOW: "now",
  TIME_10_MINUTES: "10 minutes ago",
  TIME_20_MINUTES: "20 minutes ago",
  TIME_30_MINUTES: "30 minutes ago",
  TIME_60_MINUTES: "1 hour ago",
  IMAGE_UPLOAD_TITLE: "Upload Image",
  IMAGE_UPLOAD_DESCRIPTION: "Upload an image (max. 10MB). Supported formats: JPG, PNG, GIF, WEBP",
  IMAGE_UPLOAD_SUCCESS: "✅ Image uploaded successfully!",
  IMAGE_UPLOAD_REMOVE: "Remove image",
  IMAGE_UPLOAD_PROGRESS: "Uploading...",
  IMAGE_UPLOAD_DROP_FILE: "Drop file here...",
  IMAGE_UPLOAD_SELECT: "Select image",
  IMAGE_UPLOAD_HINT: "Click to select a file or drag a file here",
  IMAGE_UPLOAD_DRAG_INSTRUCTION: "or drag in here",
  IMAGE_UPLOAD_PREVIEW_ALT: "Preview",
  ERROR_FILE_TOO_LARGE: "File is too large. Maximum size: 10MB",
  ERROR_INVALID_FILE_TYPE: "Only image files are allowed (JPG, PNG, GIF, WEBP)",
  ERROR_GENERIC_UPLOAD: "Error uploading file",
  ERROR_NETWORK_UPLOAD: "Network error during upload",
  ERROR_UPLOAD_WITH_STATUS: "Error uploading:",
  BLITZE: "Lightning",
  DONNER_UMGEBUNG: "Thunder in the vicinity",
  BLITZE_EINZELNE: "weak",
  BLITZE_HAEUFIG: "strong",
  BLITZE_EXTREM: "extreme",
  WIND: "Wind",
  WIND_SCHWACH: "weak",
  WIND_STARK: "strong",
  WIND_STUERMISCH: "stormy",
  WIND_STURM: "Storm",
  WIND_ORKAN: "Hurricane",
  HAGEL: "Hail",
  HAGEL_UNTER_1CM: "less than 1 cm",
  HAGEL_1CM: "1 cm",
  HAGEL_2CM: "2 cm",
  HAGEL_3CM: "3 cm",
  HAGEL_5CM: "5 cm",
  HAGEL_UEBER_7CM: "over 7 cm",
  HAGEL_GESCHLOSSENE_HAGELDECKE: "closed hail cover",
  HAGEL_SCHADEN_PFLANZEN: "Damage to plants",
  HAGEL_SCHADEN_DACHFENSTER: "Breakage of skylights and greenhouses",
  HAGEL_SCHADEN_VEREINZELT: "isolated damage to roof tiles, window panes and facades",
  HAGEL_SCHADEN_ZERSTOERERISCH: "destructive damage to roofs, windows and vehicles",
  REGEN: "Rain",
  REGEN_LEICHT: "light",
  REGEN_MITTEL: "moderate",
  REGEN_KRAEFTIG: "heavy",
  REGEN_STARK: "strong",
  REGEN_EXTREM: "extreme",
  GLAETTE: "Ice",
  GLAETTE_REIF: "Hoar frost",
  GLAETTE_SCHNEE: "Snow slickness",
  GLAETTE_UEBERFRIERENDE_NAESSE: "freezing wetness",
  GLAETTE_GEFRIERENDER_REGEN: "freezing rain",
  GLAETTE_GESCHLOSSENE_SCHICHT: "closed layer",
  GLAETTE_DICKE_ICE_UEBER_1CM: "over 1 cm (finger thick)",
  GLAETTE_DICKE_ICE_BIS_1CM: "under 1 cm (corrugated cardboard)",
  GLAETTE_DICKE_SNOW_BIS_5CM: "under 5 cm",
  GLAETTE_DICKE_SNOW_BIS_20CM: "under 20 cm",
  GLAETTE_DICKE_SNOW_BIS_50CM: "under 50 cm",
  GLAETTE_DICKE_SNOW_UEBER_50CM: "over 50 cm",
  SCHNEEFALL: "Snowfall",
  SCHNEEFALL_WENIGE_FLOCKEN: "few flakes",
  SCHNEEFALL_LEICHT: "light",
  SCHNEEFALL_MITTEL: "moderate",
  SCHNEEFALL_STARK: "heavy",
  SCHNEEDECKE: "Snow cover",
  SCHNEEDECKE_SCHNEEMATSCH: "Slush",
  SCHNEEDECKE_BIS_1CM: "up to 1 cm",
  SCHNEEDECKE_BIS_3CM: "up to 3 cm",
  SCHNEEDECKE_BIS_5CM: "up to 5 cm",
  SCHNEEDECKE_BIS_10CM: "up to 10 cm",
  SCHNEEDECKE_BIS_20CM: "up to 20 cm",
  SCHNEEDECKE_BIS_50CM: "up to 50 cm",
  SCHNEEDECKE_UEBER_50CM: "over 50 cm",
  SCHNEEDECKE_FLECKWEISE: "Snow patches",
  SCHNEEDECKE_GESCHLOSSENE_SCHNEEDECKE: "closed snow cover",
  BEWOELKUNG: "Cloudiness",
  BEWOELKUNG_WOLKENLOS: "clear",
  BEWOELKUNG_LEICHT_BEWOELKT: "slightly cloudy",
  BEWOELKUNG_WOLKIG: "cloudy",
  BEWOELKUNG_BEDECKT: "overcast",
  NEBEL: "Fog",
  NEBEL_LEICHT: "under 1000 m",
  NEBEL_DICHT: "under 200 m",
  NEBEL_EXTREM: "under 50 m",
  TORNADO: "Tornado",
  TORNADO_NO_VISIBLE_DAMAGE: "no visible damage",
  TORNADO_F0: "light",
  TORNADO_F1: "moderate",
  TORNADO_F2: "significant",
  TORNADO_F3: "severe",
  TORNADO_F4: "devastating",
  SUMMARY_PAGE_TITLE: "Review",
  SUMMARY_FIELD_CATEGORY: "Category",
  SUMMARY_FIELD_AUSPRAEGUNG: "Details",
  SUMMARY_FIELD_IMAGE: "Image",
  SUMMARY_NO_IMAGE: "No image yet",
  STATUS_TITLE: "Summary",
  REPORTER_DETAILS_TITLE: "Additional data",
  REPORTER_DETAILS_LINK: "Add your name and description?",
  REPORTER_NAME_LABEL: "Name (optional)",
  REPORTER_NAME_PLACEHOLDER: "Your name",
  REPORTER_DESCRIPTION_LABEL: "Description (optional)",
  REPORTER_DESCRIPTION_PLACEHOLDER: "Enter a short description"
}, Zt = {
  RATE_LIMIT_WARNING: "⚠️ Puteți trimite un raport meteo doar o dată la 10 minute.",
  REPORT_SUCCESS: "Raport meteo trimis cu succes!",
  REPORT_ERROR: "Eroare la trimiterea raportului meteo!",
  BACK: "Înapoi",
  NEXT: "Înainte",
  CATEGORIES_TITLE: "Categorii",
  LOCATION_TITLE: "Locație",
  TIME_TITLE: "Timp",
  TIME_NOW: "acum",
  TIME_10_MINUTES: "acum 10 minute",
  TIME_20_MINUTES: "acum 20 minute",
  TIME_30_MINUTES: "acum 30 minute",
  TIME_60_MINUTES: "acum o oră",
  IMAGE_UPLOAD_TITLE: "Încărcare imagine",
  IMAGE_UPLOAD_DESCRIPTION: "Încărcați o imagine (max. 10MB). Formate acceptate: JPG, PNG, GIF, WEBP",
  IMAGE_UPLOAD_SUCCESS: "✅ Imagine încărcată cu succes!",
  IMAGE_UPLOAD_REMOVE: "Șterge imaginea",
  IMAGE_UPLOAD_PROGRESS: "Se încarcă...",
  IMAGE_UPLOAD_DROP_FILE: "Plasați fișierul aici...",
  IMAGE_UPLOAD_SELECT: "Selectați imaginea",
  IMAGE_UPLOAD_HINT: "Faceți clic pentru a selecta un fișier sau trageți un fișier aici",
  IMAGE_UPLOAD_DRAG_INSTRUCTION: "sau trageți aici",
  IMAGE_UPLOAD_PREVIEW_ALT: "Previzualizare",
  ERROR_FILE_TOO_LARGE: "Fișierul este prea mare. Dimensiune maximă: 10MB",
  ERROR_INVALID_FILE_TYPE: "Sunt permise doar fișiere imagine (JPG, PNG, GIF, WEBP)",
  ERROR_GENERIC_UPLOAD: "Eroare la încărcarea fișierului",
  ERROR_NETWORK_UPLOAD: "Eroare de rețea la încărcare",
  ERROR_UPLOAD_WITH_STATUS: "Eroare la încărcare:",
  BLITZE: "Fulgere",
  DONNER_UMGEBUNG: "Tunete în apropiere",
  BLITZE_EINZELNE: "slabe",
  BLITZE_HAEUFIG: "puternice",
  BLITZE_EXTREM: "extreme",
  WIND: "Vânt",
  WIND_SCHWACH: "slab",
  WIND_STARK: "puternic",
  WIND_STUERMISCH: "furtunos",
  WIND_STURM: "Furtună",
  WIND_ORKAN: "Uragan",
  HAGEL: "Grindină",
  HAGEL_UNTER_1CM: "sub 1 cm",
  HAGEL_1CM: "1 cm",
  HAGEL_2CM: "2 cm",
  HAGEL_3CM: "3 cm",
  HAGEL_5CM: "5 cm",
  HAGEL_UEBER_7CM: "peste 7 cm",
  HAGEL_GESCHLOSSENE_HAGELDECKE: "strat de grindină compact",
  HAGEL_SCHADEN_PFLANZEN: "Daune la plante",
  HAGEL_SCHADEN_DACHFENSTER: "Spargerea luminatoarelor și a serelor",
  HAGEL_SCHADEN_VEREINZELT: "daune izolate la țigle, geamuri și fațade",
  HAGEL_SCHADEN_ZERSTOERERISCH: "daune distructive la acoperișuri, ferestre și vehicule",
  REGEN: "Ploaie",
  REGEN_LEICHT: "ușoară",
  REGEN_MITTEL: "moderată",
  REGEN_KRAEFTIG: "torențială",
  REGEN_STARK: "puternică",
  REGEN_EXTREM: "extremă",
  GLAETTE: "Polei",
  GLAETTE_REIF: "Chiciură",
  GLAETTE_SCHNEE: "Zăpadă alunecoasă",
  GLAETTE_UEBERFRIERENDE_NAESSE: "umezeală care îngheață",
  GLAETTE_GEFRIERENDER_REGEN: "ploaie înghețată",
  GLAETTE_GESCHLOSSENE_SCHICHT: "strat compact",
  GLAETTE_DICKE_ICE_UEBER_1CM: "peste 1 cm (grosimea degetului)",
  GLAETTE_DICKE_ICE_BIS_1CM: "sub 1 cm (carton ondulat)",
  GLAETTE_DICKE_SNOW_BIS_5CM: "sub 5 cm",
  GLAETTE_DICKE_SNOW_BIS_20CM: "sub 20 cm",
  GLAETTE_DICKE_SNOW_BIS_50CM: "sub 50 cm",
  GLAETTE_DICKE_SNOW_UEBER_50CM: "peste 50 cm",
  SCHNEEFALL: "Ninsoare",
  SCHNEEFALL_WENIGE_FLOCKEN: "câțiva fulgi",
  SCHNEEFALL_LEICHT: "ușoară",
  SCHNEEFALL_MITTEL: "moderată",
  SCHNEEFALL_STARK: "puternică",
  SCHNEEDECKE: "Strat de zăpadă",
  SCHNEEDECKE_SCHNEEMATSCH: "Lapoviță",
  SCHNEEDECKE_BIS_1CM: "până la 1 cm",
  SCHNEEDECKE_BIS_3CM: "până la 3 cm",
  SCHNEEDECKE_BIS_5CM: "până la 5 cm",
  SCHNEEDECKE_BIS_10CM: "până la 10 cm",
  SCHNEEDECKE_BIS_20CM: "până la 20 cm",
  SCHNEEDECKE_BIS_50CM: "până la 50 cm",
  SCHNEEDECKE_UEBER_50CM: "peste 50 cm",
  SCHNEEDECKE_FLECKWEISE: "Pete de zăpadă",
  SCHNEEDECKE_GESCHLOSSENE_SCHNEEDECKE: "strat de zăpadă compact",
  BEWOELKUNG: "Înnorare",
  BEWOELKUNG_WOLKENLOS: "senin",
  BEWOELKUNG_LEICHT_BEWOELKT: "parțial noros",
  BEWOELKUNG_WOLKIG: "noros",
  BEWOELKUNG_BEDECKT: "înnorat",
  NEBEL: "Ceață",
  NEBEL_LEICHT: "sub 1000 m",
  NEBEL_DICHT: "sub 200 m",
  NEBEL_EXTREM: "sub 50 m",
  TORNADO: "Tornadă",
  TORNADO_NO_VISIBLE_DAMAGE: "fără daune vizibile",
  TORNADO_F0: "ușoară",
  TORNADO_F1: "moderată",
  TORNADO_F2: "semnificativă",
  TORNADO_F3: "severă",
  TORNADO_F4: "devastatoare",
  SUMMARY_PAGE_TITLE: "Verificare",
  SUMMARY_FIELD_CATEGORY: "Categorie",
  SUMMARY_FIELD_AUSPRAEGUNG: "Intensitate",
  SUMMARY_FIELD_IMAGE: "Imagine",
  SUMMARY_NO_IMAGE: "Fără imagine",
  STATUS_TITLE: "Rezumat",
  REPORTER_DETAILS_TITLE: "Informații suplimentare",
  REPORTER_DETAILS_LINK: "Adăugați informații suplimentare?",
  REPORTER_NAME_LABEL: "Nume (opțional)",
  REPORTER_NAME_PLACEHOLDER: "Numele dvs.",
  REPORTER_DESCRIPTION_LABEL: "Descriere (opțional)",
  REPORTER_DESCRIPTION_PLACEHOLDER: "Introduceți o scurtă descriere"
}, Wa = "de", xa = {
  de: Yt,
  en: Vt,
  ro: Zt
}, A = (e, a) => {
  const i = e in xa ? e : Wa;
  return xa[i][a] ?? xa[Wa][a] ?? a;
}, da = {
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
Object.entries(da).map(([e, a]) => ({
  category: e,
  auspraegungen: a
}));
const xt = () => Object.entries(da).map(([e]) => e), Xt = () => Object.entries(da).map(([e, a]) => a).flat(), Jt = (e) => da[e];
Array.from(/* @__PURE__ */ new Set([...xt(), ...Xt()]));
const Oa = (e, a = "de") => A(a, e), Qt = ({
  onSelectCategory: e,
  params: a = [],
  lang: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(i, "CATEGORIES_TITLE") }),
  xt().filter((n) => a === null || a.includes(n.toLowerCase()) || a.length === 0).map((n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        e(n);
      },
      children: Oa(n, i)
    },
    n
  ))
] }), ei = ({ category: e, onSelectAuspraegung: a, lang: i }) => /* @__PURE__ */ l.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: e ? Oa(e, i) : A(i, "CATEGORIES_TITLE") }),
  e && Jt(e).map((n) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(n);
      },
      children: Oa(n, i)
    },
    n
  ))
] }), ai = ({ locations: e, onSelectLocation: a, lang: i }) => /* @__PURE__ */ l.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(i, "LOCATION_TITLE") }),
  e.map((n) => /* @__PURE__ */ l.jsx(
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
function ti(e, a) {
  const i = typeof e == "number" ? new Date(e) : e;
  return a.map(({ label: n, minutes: r }) => ({
    label: n,
    value: Math.floor(new Date(i.getTime() - r * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const ii = ({ onSelectTimestamp: e, lang: a }) => {
  const i = Date.now(), n = [
    { label: A(a, "TIME_NOW"), minutes: 0 },
    { label: A(a, "TIME_10_MINUTES"), minutes: 10 },
    { label: A(a, "TIME_20_MINUTES"), minutes: 20 },
    { label: A(a, "TIME_30_MINUTES"), minutes: 30 },
    { label: A(a, "TIME_60_MINUTES"), minutes: 60 }
  ], r = ti(i, n);
  return /* @__PURE__ */ l.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(a, "TIME_TITLE") }),
    r.map((o) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "category-item",
        onClick: () => {
          e(o.value);
        },
        children: o.label
      },
      o.value
    ))
  ] });
};
var na = { exports: {} }, ra = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function ni() {
  if ($a) return K;
  $a = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, q = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function F(m) {
    if (typeof m == "object" && m !== null) {
      var te = m.$$typeof;
      switch (te) {
        case a:
          switch (m = m.type, m) {
            case f:
            case _:
            case n:
            case o:
            case r:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case d:
                case x:
                case $:
                case C:
                case s:
                  return m;
                default:
                  return te;
              }
          }
        case i:
          return te;
      }
    }
  }
  function V(m) {
    return F(m) === _;
  }
  return K.AsyncMode = f, K.ConcurrentMode = _, K.ContextConsumer = d, K.ContextProvider = s, K.Element = a, K.ForwardRef = x, K.Fragment = n, K.Lazy = $, K.Memo = C, K.Portal = i, K.Profiler = o, K.StrictMode = r, K.Suspense = h, K.isAsyncMode = function(m) {
    return V(m) || F(m) === f;
  }, K.isConcurrentMode = V, K.isContextConsumer = function(m) {
    return F(m) === d;
  }, K.isContextProvider = function(m) {
    return F(m) === s;
  }, K.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === a;
  }, K.isForwardRef = function(m) {
    return F(m) === x;
  }, K.isFragment = function(m) {
    return F(m) === n;
  }, K.isLazy = function(m) {
    return F(m) === $;
  }, K.isMemo = function(m) {
    return F(m) === C;
  }, K.isPortal = function(m) {
    return F(m) === i;
  }, K.isProfiler = function(m) {
    return F(m) === o;
  }, K.isStrictMode = function(m) {
    return F(m) === r;
  }, K.isSuspense = function(m) {
    return F(m) === h;
  }, K.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === _ || m === o || m === r || m === h || m === S || typeof m == "object" && m !== null && (m.$$typeof === $ || m.$$typeof === C || m.$$typeof === s || m.$$typeof === d || m.$$typeof === x || m.$$typeof === q || m.$$typeof === Y || m.$$typeof === U || m.$$typeof === D);
  }, K.typeOf = F, K;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function ri() {
  return qa || (qa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, q = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function F(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === _ || u === o || u === r || u === h || u === S || typeof u == "object" && u !== null && (u.$$typeof === $ || u.$$typeof === C || u.$$typeof === s || u.$$typeof === d || u.$$typeof === x || u.$$typeof === q || u.$$typeof === Y || u.$$typeof === U || u.$$typeof === D);
    }
    function V(u) {
      if (typeof u == "object" && u !== null) {
        var fe = u.$$typeof;
        switch (fe) {
          case a:
            var Re = u.type;
            switch (Re) {
              case f:
              case _:
              case n:
              case o:
              case r:
              case h:
                return Re;
              default:
                var ye = Re && Re.$$typeof;
                switch (ye) {
                  case d:
                  case x:
                  case $:
                  case C:
                  case s:
                    return ye;
                  default:
                    return fe;
                }
            }
          case i:
            return fe;
        }
      }
    }
    var m = f, te = _, re = d, Z = s, Q = a, B = x, ue = n, he = $, le = C, H = i, ee = o, ae = r, se = h, ge = !1;
    function j(u) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(u) || V(u) === f;
    }
    function c(u) {
      return V(u) === _;
    }
    function v(u) {
      return V(u) === d;
    }
    function O(u) {
      return V(u) === s;
    }
    function w(u) {
      return typeof u == "object" && u !== null && u.$$typeof === a;
    }
    function y(u) {
      return V(u) === x;
    }
    function P(u) {
      return V(u) === n;
    }
    function T(u) {
      return V(u) === $;
    }
    function I(u) {
      return V(u) === C;
    }
    function N(u) {
      return V(u) === i;
    }
    function k(u) {
      return V(u) === o;
    }
    function L(u) {
      return V(u) === r;
    }
    function oe(u) {
      return V(u) === h;
    }
    W.AsyncMode = m, W.ConcurrentMode = te, W.ContextConsumer = re, W.ContextProvider = Z, W.Element = Q, W.ForwardRef = B, W.Fragment = ue, W.Lazy = he, W.Memo = le, W.Portal = H, W.Profiler = ee, W.StrictMode = ae, W.Suspense = se, W.isAsyncMode = j, W.isConcurrentMode = c, W.isContextConsumer = v, W.isContextProvider = O, W.isElement = w, W.isForwardRef = y, W.isFragment = P, W.isLazy = T, W.isMemo = I, W.isPortal = N, W.isProfiler = k, W.isStrictMode = L, W.isSuspense = oe, W.isValidElementType = F, W.typeOf = V;
  }()), W;
}
var Ya;
function gt() {
  return Ya || (Ya = 1, process.env.NODE_ENV === "production" ? ra.exports = ni() : ra.exports = ri()), ra.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ga, Va;
function oi() {
  if (Va) return ga;
  Va = 1;
  var e = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function n(o) {
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
      for (var s = {}, d = 0; d < 10; d++)
        s["_" + String.fromCharCode(d)] = d;
      var f = Object.getOwnPropertyNames(s).map(function(x) {
        return s[x];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(x) {
        _[x] = x;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ga = r() ? Object.assign : function(o, s) {
    for (var d, f = n(o), _, x = 1; x < arguments.length; x++) {
      d = Object(arguments[x]);
      for (var h in d)
        a.call(d, h) && (f[h] = d[h]);
      if (e) {
        _ = e(d);
        for (var S = 0; S < _.length; S++)
          i.call(d, _[S]) && (f[_[S]] = d[_[S]]);
      }
    }
    return f;
  }, ga;
}
var _a, Za;
function Da() {
  if (Za) return _a;
  Za = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _a = e, _a;
}
var ha, Xa;
function _t() {
  return Xa || (Xa = 1, ha = Function.call.bind(Object.prototype.hasOwnProperty)), ha;
}
var ba, Ja;
function ci() {
  if (Ja) return ba;
  Ja = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = /* @__PURE__ */ Da(), i = {}, n = /* @__PURE__ */ _t();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function r(o, s, d, f, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var x in o)
        if (n(o, x)) {
          var h;
          try {
            if (typeof o[x] != "function") {
              var S = Error(
                (f || "React class") + ": " + d + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            h = o[x](s, x, f, d, null, a);
          } catch ($) {
            h = $;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + d + " `" + x + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in i)) {
            i[h.message] = !0;
            var C = _ ? _() : "";
            e(
              "Failed " + d + " type: " + h.message + (C ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, ba = r, ba;
}
var ya, Qa;
function pi() {
  if (Qa) return ya;
  Qa = 1;
  var e = gt(), a = oi(), i = /* @__PURE__ */ Da(), n = /* @__PURE__ */ _t(), r = /* @__PURE__ */ ci(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(d) {
    var f = "Warning: " + d;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ya = function(d, f) {
    var _ = typeof Symbol == "function" && Symbol.iterator, x = "@@iterator";
    function h(c) {
      var v = c && (_ && c[_] || c[x]);
      if (typeof v == "function")
        return v;
    }
    var S = "<<anonymous>>", C = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: U(),
      arrayOf: F,
      element: V(),
      elementType: m(),
      instanceOf: te,
      node: B(),
      objectOf: Z,
      oneOf: re,
      oneOfType: Q,
      shape: he,
      exact: le
    };
    function $(c, v) {
      return c === v ? c !== 0 || 1 / c === 1 / v : c !== c && v !== v;
    }
    function D(c, v) {
      this.message = c, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    D.prototype = Error.prototype;
    function q(c) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, O = 0;
      function w(P, T, I, N, k, L, oe) {
        if (N = N || S, L = L || I, oe !== i) {
          if (f) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = N + ":" + I;
            !v[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[fe] = !0, O++);
          }
        }
        return T[I] == null ? P ? T[I] === null ? new D("The " + k + " `" + L + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new D("The " + k + " `" + L + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : c(T, I, N, k, L);
      }
      var y = w.bind(null, !1);
      return y.isRequired = w.bind(null, !0), y;
    }
    function Y(c) {
      function v(O, w, y, P, T, I) {
        var N = O[w], k = ae(N);
        if (k !== c) {
          var L = se(N);
          return new D(
            "Invalid " + P + " `" + T + "` of type " + ("`" + L + "` supplied to `" + y + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return q(v);
    }
    function U() {
      return q(s);
    }
    function F(c) {
      function v(O, w, y, P, T) {
        if (typeof c != "function")
          return new D("Property `" + T + "` of component `" + y + "` has invalid PropType notation inside arrayOf.");
        var I = O[w];
        if (!Array.isArray(I)) {
          var N = ae(I);
          return new D("Invalid " + P + " `" + T + "` of type " + ("`" + N + "` supplied to `" + y + "`, expected an array."));
        }
        for (var k = 0; k < I.length; k++) {
          var L = c(I, k, y, P, T + "[" + k + "]", i);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return q(v);
    }
    function V() {
      function c(v, O, w, y, P) {
        var T = v[O];
        if (!d(T)) {
          var I = ae(T);
          return new D("Invalid " + y + " `" + P + "` of type " + ("`" + I + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return q(c);
    }
    function m() {
      function c(v, O, w, y, P) {
        var T = v[O];
        if (!e.isValidElementType(T)) {
          var I = ae(T);
          return new D("Invalid " + y + " `" + P + "` of type " + ("`" + I + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return q(c);
    }
    function te(c) {
      function v(O, w, y, P, T) {
        if (!(O[w] instanceof c)) {
          var I = c.name || S, N = j(O[w]);
          return new D("Invalid " + P + " `" + T + "` of type " + ("`" + N + "` supplied to `" + y + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return q(v);
    }
    function re(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function v(O, w, y, P, T) {
        for (var I = O[w], N = 0; N < c.length; N++)
          if ($(I, c[N]))
            return null;
        var k = JSON.stringify(c, function(oe, u) {
          var fe = se(u);
          return fe === "symbol" ? String(u) : u;
        });
        return new D("Invalid " + P + " `" + T + "` of value `" + String(I) + "` " + ("supplied to `" + y + "`, expected one of " + k + "."));
      }
      return q(v);
    }
    function Z(c) {
      function v(O, w, y, P, T) {
        if (typeof c != "function")
          return new D("Property `" + T + "` of component `" + y + "` has invalid PropType notation inside objectOf.");
        var I = O[w], N = ae(I);
        if (N !== "object")
          return new D("Invalid " + P + " `" + T + "` of type " + ("`" + N + "` supplied to `" + y + "`, expected an object."));
        for (var k in I)
          if (n(I, k)) {
            var L = c(I, k, y, P, T + "." + k, i);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return q(v);
    }
    function Q(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var v = 0; v < c.length; v++) {
        var O = c[v];
        if (typeof O != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(O) + " at index " + v + "."
          ), s;
      }
      function w(y, P, T, I, N) {
        for (var k = [], L = 0; L < c.length; L++) {
          var oe = c[L], u = oe(y, P, T, I, N, i);
          if (u == null)
            return null;
          u.data && n(u.data, "expectedType") && k.push(u.data.expectedType);
        }
        var fe = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new D("Invalid " + I + " `" + N + "` supplied to " + ("`" + T + "`" + fe + "."));
      }
      return q(w);
    }
    function B() {
      function c(v, O, w, y, P) {
        return H(v[O]) ? null : new D("Invalid " + y + " `" + P + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return q(c);
    }
    function ue(c, v, O, w, y) {
      return new D(
        (c || "React class") + ": " + v + " type `" + O + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + y + "`."
      );
    }
    function he(c) {
      function v(O, w, y, P, T) {
        var I = O[w], N = ae(I);
        if (N !== "object")
          return new D("Invalid " + P + " `" + T + "` of type `" + N + "` " + ("supplied to `" + y + "`, expected `object`."));
        for (var k in c) {
          var L = c[k];
          if (typeof L != "function")
            return ue(y, P, T, k, se(L));
          var oe = L(I, k, y, P, T + "." + k, i);
          if (oe)
            return oe;
        }
        return null;
      }
      return q(v);
    }
    function le(c) {
      function v(O, w, y, P, T) {
        var I = O[w], N = ae(I);
        if (N !== "object")
          return new D("Invalid " + P + " `" + T + "` of type `" + N + "` " + ("supplied to `" + y + "`, expected `object`."));
        var k = a({}, O[w], c);
        for (var L in k) {
          var oe = c[L];
          if (n(c, L) && typeof oe != "function")
            return ue(y, P, T, L, se(oe));
          if (!oe)
            return new D(
              "Invalid " + P + " `" + T + "` key `" + L + "` supplied to `" + y + "`.\nBad object: " + JSON.stringify(O[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var u = oe(I, L, y, P, T + "." + L, i);
          if (u)
            return u;
        }
        return null;
      }
      return q(v);
    }
    function H(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(H);
          if (c === null || d(c))
            return !0;
          var v = h(c);
          if (v) {
            var O = v.call(c), w;
            if (v !== c.entries) {
              for (; !(w = O.next()).done; )
                if (!H(w.value))
                  return !1;
            } else
              for (; !(w = O.next()).done; ) {
                var y = w.value;
                if (y && !H(y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(c, v) {
      return c === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function ae(c) {
      var v = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : ee(v, c) ? "symbol" : v;
    }
    function se(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var v = ae(c);
      if (v === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function ge(c) {
      var v = se(c);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function j(c) {
      return !c.constructor || !c.constructor.name ? S : c.constructor.name;
    }
    return C.checkPropTypes = r, C.resetWarningCache = r.resetWarningCache, C.PropTypes = C, C;
  }, ya;
}
var Ta, et;
function li() {
  if (et) return Ta;
  et = 1;
  var e = /* @__PURE__ */ Da();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, Ta = function() {
    function n(s, d, f, _, x, h) {
      if (h !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    n.isRequired = n;
    function r() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: r,
      element: n,
      elementType: n,
      instanceOf: r,
      node: n,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: i,
      resetWarningCache: a
    };
    return o.PropTypes = o, o;
  }, Ta;
}
var at;
function si() {
  if (at) return na.exports;
  if (at = 1, process.env.NODE_ENV !== "production") {
    var e = gt(), a = !0;
    na.exports = /* @__PURE__ */ pi()(e.isElement, a);
  } else
    na.exports = /* @__PURE__ */ li()();
  return na.exports;
}
var di = /* @__PURE__ */ si();
const J = /* @__PURE__ */ Et(di);
function je(e, a, i, n) {
  function r(o) {
    return o instanceof i ? o : new i(function(s) {
      s(o);
    });
  }
  return new (i || (i = Promise))(function(o, s) {
    function d(x) {
      try {
        _(n.next(x));
      } catch (h) {
        s(h);
      }
    }
    function f(x) {
      try {
        _(n.throw(x));
      } catch (h) {
        s(h);
      }
    }
    function _(x) {
      x.done ? o(x.value) : r(x.value).then(d, f);
    }
    _((n = n.apply(e, a || [])).next());
  });
}
const ui = /* @__PURE__ */ new Map([
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
function ze(e, a, i) {
  const n = mi(e), { webkitRelativePath: r } = e, o = typeof a == "string" ? a : typeof r == "string" && r.length > 0 ? r : `./${e.name}`;
  return typeof n.path != "string" && tt(n, "path", o), tt(n, "relativePath", o), n;
}
function mi(e) {
  const { name: a } = e;
  if (a && a.lastIndexOf(".") !== -1 && !e.type) {
    const n = a.split(".").pop().toLowerCase(), r = ui.get(n);
    r && Object.defineProperty(e, "type", {
      value: r,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function tt(e, a, i) {
  Object.defineProperty(e, a, {
    value: i,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const fi = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function vi(e) {
  return je(this, void 0, void 0, function* () {
    return pa(e) && Ei(e.dataTransfer) ? hi(e.dataTransfer, e.type) : xi(e) ? gi(e) : Array.isArray(e) && e.every((a) => "getFile" in a && typeof a.getFile == "function") ? _i(e) : [];
  });
}
function Ei(e) {
  return pa(e);
}
function xi(e) {
  return pa(e) && pa(e.target);
}
function pa(e) {
  return typeof e == "object" && e !== null;
}
function gi(e) {
  return Ia(e.target.files).map((a) => ze(a));
}
function _i(e) {
  return je(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((i) => i.getFile()))).map((i) => ze(i));
  });
}
function hi(e, a) {
  return je(this, void 0, void 0, function* () {
    if (e.items) {
      const i = Ia(e.items).filter((r) => r.kind === "file");
      if (a !== "drop")
        return i;
      const n = yield Promise.all(i.map(bi));
      return it(ht(n));
    }
    return it(Ia(e.files).map((i) => ze(i)));
  });
}
function it(e) {
  return e.filter((a) => fi.indexOf(a.name) === -1);
}
function Ia(e) {
  if (e === null)
    return [];
  const a = [];
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    a.push(n);
  }
  return a;
}
function bi(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return nt(e);
  const a = e.webkitGetAsEntry();
  return a && a.isDirectory ? bt(a) : nt(e, a);
}
function ht(e) {
  return e.reduce((a, i) => [
    ...a,
    ...Array.isArray(i) ? ht(i) : [i]
  ], []);
}
function nt(e, a) {
  return je(this, void 0, void 0, function* () {
    var i;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const o = yield e.getAsFileSystemHandle();
      if (o === null)
        throw new Error(`${e} is not a File`);
      if (o !== void 0) {
        const s = yield o.getFile();
        return s.handle = o, ze(s);
      }
    }
    const n = e.getAsFile();
    if (!n)
      throw new Error(`${e} is not a File`);
    return ze(n, (i = a == null ? void 0 : a.fullPath) !== null && i !== void 0 ? i : void 0);
  });
}
function yi(e) {
  return je(this, void 0, void 0, function* () {
    return e.isDirectory ? bt(e) : Ti(e);
  });
}
function bt(e) {
  const a = e.createReader();
  return new Promise((i, n) => {
    const r = [];
    function o() {
      a.readEntries((s) => je(this, void 0, void 0, function* () {
        if (s.length) {
          const d = Promise.all(s.map(yi));
          r.push(d), o();
        } else
          try {
            const d = yield Promise.all(r);
            i(d);
          } catch (d) {
            n(d);
          }
      }), (s) => {
        n(s);
      });
    }
    o();
  });
}
function Ti(e) {
  return je(this, void 0, void 0, function* () {
    return new Promise((a, i) => {
      e.file((n) => {
        const r = ze(n, e.fullPath);
        a(r);
      }, (n) => {
        i(n);
      });
    });
  });
}
var oa = {}, rt;
function Ri() {
  return rt || (rt = 1, oa.__esModule = !0, oa.default = function(e, a) {
    if (e && a) {
      var i = Array.isArray(a) ? a : a.split(",");
      if (i.length === 0)
        return !0;
      var n = e.name || "", r = (e.type || "").toLowerCase(), o = r.replace(/\/.*$/, "");
      return i.some(function(s) {
        var d = s.trim().toLowerCase();
        return d.charAt(0) === "." ? n.toLowerCase().endsWith(d) : d.endsWith("/*") ? o === d.replace(/\/.*$/, "") : r === d;
      });
    }
    return !0;
  }), oa;
}
var Si = Ri();
const Ra = /* @__PURE__ */ Et(Si);
function ot(e) {
  return Ii(e) || Oi(e) || Tt(e) || Ai();
}
function Ai() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ii(e) {
  if (Array.isArray(e)) return Ca(e);
}
function ct(e, a) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    a && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function pt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ct(Object(i), !0).forEach(function(n) {
      yt(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ct(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function yt(e, a, i) {
  return a in e ? Object.defineProperty(e, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = i, e;
}
function ea(e, a) {
  return Li(e) || wi(e, a) || Tt(e, a) || Ci();
}
function Ci() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt(e, a) {
  if (e) {
    if (typeof e == "string") return Ca(e, a);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Ca(e, a);
  }
}
function Ca(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var i = 0, n = new Array(a); i < a; i++)
    n[i] = e[i];
  return n;
}
function wi(e, a) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n = [], r = !0, o = !1, s, d;
    try {
      for (i = i.call(e); !(r = (s = i.next()).done) && (n.push(s.value), !(a && n.length === a)); r = !0)
        ;
    } catch (f) {
      o = !0, d = f;
    } finally {
      try {
        !r && i.return != null && i.return();
      } finally {
        if (o) throw d;
      }
    }
    return n;
  }
}
function Li(e) {
  if (Array.isArray(e)) return e;
}
var Ni = typeof Ra == "function" ? Ra : Ra.default, Di = "file-invalid-type", Pi = "file-too-large", ji = "file-too-small", ki = "too-many-files", Mi = function() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = a.split(","), n = i.length > 1 ? "one of ".concat(i.join(", ")) : i[0];
  return {
    code: Di,
    message: "File type must be ".concat(n)
  };
}, lt = function(a) {
  return {
    code: Pi,
    message: "File is larger than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, st = function(a) {
  return {
    code: ji,
    message: "File is smaller than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, Gi = {
  code: ki,
  message: "Too many files"
};
function Rt(e, a) {
  var i = e.type === "application/x-moz-file" || Ni(e, a);
  return [i, i ? null : Mi(a)];
}
function St(e, a, i) {
  if (Pe(e.size))
    if (Pe(a) && Pe(i)) {
      if (e.size > i) return [!1, lt(i)];
      if (e.size < a) return [!1, st(a)];
    } else {
      if (Pe(a) && e.size < a) return [!1, st(a)];
      if (Pe(i) && e.size > i) return [!1, lt(i)];
    }
  return [!0, null];
}
function Pe(e) {
  return e != null;
}
function Fi(e) {
  var a = e.files, i = e.accept, n = e.minSize, r = e.maxSize, o = e.multiple, s = e.maxFiles, d = e.validator;
  return !o && a.length > 1 || o && s >= 1 && a.length > s ? !1 : a.every(function(f) {
    var _ = Rt(f, i), x = ea(_, 1), h = x[0], S = St(f, n, r), C = ea(S, 1), $ = C[0], D = d ? d(f) : null;
    return h && $ && !D;
  });
}
function la(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function ca(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(a) {
    return a === "Files" || a === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function dt(e) {
  e.preventDefault();
}
function Hi(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Ui(e) {
  return e.indexOf("Edge/") !== -1;
}
function Bi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Hi(e) || Ui(e);
}
function Te() {
  for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
    a[i] = arguments[i];
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return a.some(function(d) {
      return !la(n) && d && d.apply(void 0, [n].concat(o)), la(n);
    });
  };
}
function zi() {
  return "showOpenFilePicker" in window;
}
function Ki(e) {
  if (Pe(e)) {
    var a = Object.entries(e).filter(function(i) {
      var n = ea(i, 2), r = n[0], o = n[1], s = !0;
      return At(r) || (console.warn('Skipped "'.concat(r, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), s = !1), (!Array.isArray(o) || !o.every(Ot)) && (console.warn('Skipped "'.concat(r, '" because an invalid file extension was provided.')), s = !1), s;
    }).reduce(function(i, n) {
      var r = ea(n, 2), o = r[0], s = r[1];
      return pt(pt({}, i), {}, yt({}, o, s));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: a
    }];
  }
  return e;
}
function Wi(e) {
  if (Pe(e))
    return Object.entries(e).reduce(function(a, i) {
      var n = ea(i, 2), r = n[0], o = n[1];
      return [].concat(ot(a), [r], ot(o));
    }, []).filter(function(a) {
      return At(a) || Ot(a);
    }).join(",");
}
function $i(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function qi(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function At(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Ot(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Yi = ["children"], Vi = ["open"], Zi = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Xi = ["refKey", "onChange", "onClick"];
function Ji(e) {
  return an(e) || en(e) || It(e) || Qi();
}
function Qi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function en(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function an(e) {
  if (Array.isArray(e)) return wa(e);
}
function Sa(e, a) {
  return rn(e) || nn(e, a) || It(e, a) || tn();
}
function tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function It(e, a) {
  if (e) {
    if (typeof e == "string") return wa(e, a);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return wa(e, a);
  }
}
function wa(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var i = 0, n = new Array(a); i < a; i++)
    n[i] = e[i];
  return n;
}
function nn(e, a) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n = [], r = !0, o = !1, s, d;
    try {
      for (i = i.call(e); !(r = (s = i.next()).done) && (n.push(s.value), !(a && n.length === a)); r = !0)
        ;
    } catch (f) {
      o = !0, d = f;
    } finally {
      try {
        !r && i.return != null && i.return();
      } finally {
        if (o) throw d;
      }
    }
    return n;
  }
}
function rn(e) {
  if (Array.isArray(e)) return e;
}
function ut(e, a) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    a && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function ne(e) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ut(Object(i), !0).forEach(function(n) {
      La(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ut(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function La(e, a, i) {
  return a in e ? Object.defineProperty(e, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = i, e;
}
function sa(e, a) {
  if (e == null) return {};
  var i = on(e, a), n, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      n = o[r], !(a.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function on(e, a) {
  if (e == null) return {};
  var i = {}, n = Object.keys(e), r, o;
  for (o = 0; o < n.length; o++)
    r = n[o], !(a.indexOf(r) >= 0) && (i[r] = e[r]);
  return i;
}
var Pa = /* @__PURE__ */ Bt(function(e, a) {
  var i = e.children, n = sa(e, Yi), r = wt(n), o = r.open, s = sa(r, Vi);
  return zt(a, function() {
    return {
      open: o
    };
  }, [o]), /* @__PURE__ */ aa.createElement(Kt, null, i(ne(ne({}, s), {}, {
    open: o
  })));
});
Pa.displayName = "Dropzone";
var Ct = {
  disabled: !1,
  getFilesFromEvent: vi,
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
Pa.defaultProps = Ct;
Pa.propTypes = {
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
var Na = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function wt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = ne(ne({}, Ct), e), i = a.accept, n = a.disabled, r = a.getFilesFromEvent, o = a.maxSize, s = a.minSize, d = a.multiple, f = a.maxFiles, _ = a.onDragEnter, x = a.onDragLeave, h = a.onDragOver, S = a.onDrop, C = a.onDropAccepted, $ = a.onDropRejected, D = a.onFileDialogCancel, q = a.onFileDialogOpen, Y = a.useFsAccessApi, U = a.autoFocus, F = a.preventDropOnDocument, V = a.noClick, m = a.noKeyboard, te = a.noDrag, re = a.noDragEventsBubbling, Z = a.onError, Q = a.validator, B = De(function() {
    return Wi(i);
  }, [i]), ue = De(function() {
    return Ki(i);
  }, [i]), he = De(function() {
    return typeof q == "function" ? q : mt;
  }, [q]), le = De(function() {
    return typeof D == "function" ? D : mt;
  }, [D]), H = Qe(null), ee = Qe(null), ae = Ut(cn, Na), se = Sa(ae, 2), ge = se[0], j = se[1], c = ge.isFocused, v = ge.isFileDialogActive, O = Qe(typeof window < "u" && window.isSecureContext && Y && zi()), w = function() {
    !O.current && v && setTimeout(function() {
      if (ee.current) {
        var b = ee.current.files;
        b.length || (j({
          type: "closeDialog"
        }), le());
      }
    }, 300);
  };
  we(function() {
    return window.addEventListener("focus", w, !1), function() {
      window.removeEventListener("focus", w, !1);
    };
  }, [ee, v, le, O]);
  var y = Qe([]), P = function(b) {
    H.current && H.current.contains(b.target) || (b.preventDefault(), y.current = []);
  };
  we(function() {
    return F && (document.addEventListener("dragover", dt, !1), document.addEventListener("drop", P, !1)), function() {
      F && (document.removeEventListener("dragover", dt), document.removeEventListener("drop", P));
    };
  }, [H, F]), we(function() {
    return !n && U && H.current && H.current.focus(), function() {
    };
  }, [H, U, n]);
  var T = _e(function(E) {
    Z ? Z(E) : console.error(E);
  }, [Z]), I = _e(function(E) {
    E.preventDefault(), E.persist(), Me(E), y.current = [].concat(Ji(y.current), [E.target]), ca(E) && Promise.resolve(r(E)).then(function(b) {
      if (!(la(E) && !re)) {
        var ie = b.length, ce = ie > 0 && Fi({
          files: b,
          accept: B,
          minSize: s,
          maxSize: o,
          multiple: d,
          maxFiles: f,
          validator: Q
        }), ve = ie > 0 && !ce;
        j({
          isDragAccept: ce,
          isDragReject: ve,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), _ && _(E);
      }
    }).catch(function(b) {
      return T(b);
    });
  }, [r, _, T, re, B, s, o, d, f, Q]), N = _e(function(E) {
    E.preventDefault(), E.persist(), Me(E);
    var b = ca(E);
    if (b && E.dataTransfer)
      try {
        E.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return b && h && h(E), !1;
  }, [h, re]), k = _e(function(E) {
    E.preventDefault(), E.persist(), Me(E);
    var b = y.current.filter(function(ce) {
      return H.current && H.current.contains(ce);
    }), ie = b.indexOf(E.target);
    ie !== -1 && b.splice(ie, 1), y.current = b, !(b.length > 0) && (j({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ca(E) && x && x(E));
  }, [H, x, re]), L = _e(function(E, b) {
    var ie = [], ce = [];
    E.forEach(function(ve) {
      var Ce = Rt(ve, B), Oe = Sa(Ce, 2), We = Oe[0], $e = Oe[1], qe = St(ve, s, o), Ge = Sa(qe, 2), Ye = Ge[0], Ve = Ge[1], Ze = Q ? Q(ve) : null;
      if (We && Ye && !Ze)
        ie.push(ve);
      else {
        var Le = [$e, Ve];
        Ze && (Le = Le.concat(Ze)), ce.push({
          file: ve,
          errors: Le.filter(function(ta) {
            return ta;
          })
        });
      }
    }), (!d && ie.length > 1 || d && f >= 1 && ie.length > f) && (ie.forEach(function(ve) {
      ce.push({
        file: ve,
        errors: [Gi]
      });
    }), ie.splice(0)), j({
      acceptedFiles: ie,
      fileRejections: ce,
      isDragReject: ce.length > 0,
      type: "setFiles"
    }), S && S(ie, ce, b), ce.length > 0 && $ && $(ce, b), ie.length > 0 && C && C(ie, b);
  }, [j, d, B, s, o, f, S, C, $, Q]), oe = _e(function(E) {
    E.preventDefault(), E.persist(), Me(E), y.current = [], ca(E) && Promise.resolve(r(E)).then(function(b) {
      la(E) && !re || L(b, E);
    }).catch(function(b) {
      return T(b);
    }), j({
      type: "reset"
    });
  }, [r, L, T, re]), u = _e(function() {
    if (O.current) {
      j({
        type: "openDialog"
      }), he();
      var E = {
        multiple: d,
        types: ue
      };
      window.showOpenFilePicker(E).then(function(b) {
        return r(b);
      }).then(function(b) {
        L(b, null), j({
          type: "closeDialog"
        });
      }).catch(function(b) {
        $i(b) ? (le(b), j({
          type: "closeDialog"
        })) : qi(b) ? (O.current = !1, ee.current ? (ee.current.value = null, ee.current.click()) : T(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : T(b);
      });
      return;
    }
    ee.current && (j({
      type: "openDialog"
    }), he(), ee.current.value = null, ee.current.click());
  }, [j, he, le, Y, L, T, ue, d]), fe = _e(function(E) {
    !H.current || !H.current.isEqualNode(E.target) || (E.key === " " || E.key === "Enter" || E.keyCode === 32 || E.keyCode === 13) && (E.preventDefault(), u());
  }, [H, u]), Re = _e(function() {
    j({
      type: "focus"
    });
  }, []), ye = _e(function() {
    j({
      type: "blur"
    });
  }, []), Ie = _e(function() {
    V || (Bi() ? setTimeout(u, 0) : u());
  }, [V, u]), Se = function(b) {
    return n ? null : b;
  }, ke = function(b) {
    return m ? null : Se(b);
  }, Ae = function(b) {
    return te ? null : Se(b);
  }, Me = function(b) {
    re && b.stopPropagation();
  }, ua = De(function() {
    return function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = E.refKey, ie = b === void 0 ? "ref" : b, ce = E.role, ve = E.onKeyDown, Ce = E.onFocus, Oe = E.onBlur, We = E.onClick, $e = E.onDragEnter, qe = E.onDragOver, Ge = E.onDragLeave, Ye = E.onDrop, Ve = sa(E, Zi);
      return ne(ne(La({
        onKeyDown: ke(Te(ve, fe)),
        onFocus: ke(Te(Ce, Re)),
        onBlur: ke(Te(Oe, ye)),
        onClick: Se(Te(We, Ie)),
        onDragEnter: Ae(Te($e, I)),
        onDragOver: Ae(Te(qe, N)),
        onDragLeave: Ae(Te(Ge, k)),
        onDrop: Ae(Te(Ye, oe)),
        role: typeof ce == "string" && ce !== "" ? ce : "presentation"
      }, ie, H), !n && !m ? {
        tabIndex: 0
      } : {}), Ve);
    };
  }, [H, fe, Re, ye, Ie, I, N, k, oe, m, te, n]), Ke = _e(function(E) {
    E.stopPropagation();
  }, []), ma = De(function() {
    return function() {
      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = E.refKey, ie = b === void 0 ? "ref" : b, ce = E.onChange, ve = E.onClick, Ce = sa(E, Xi), Oe = La({
        accept: B,
        multiple: d,
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
        onChange: Se(Te(ce, oe)),
        onClick: Se(Te(ve, Ke)),
        tabIndex: -1
      }, ie, ee);
      return ne(ne({}, Oe), Ce);
    };
  }, [ee, i, d, oe, n]);
  return ne(ne({}, ge), {}, {
    isFocused: c && !n,
    getRootProps: ua,
    getInputProps: ma,
    rootRef: H,
    inputRef: ee,
    open: Se(u)
  });
}
function cn(e, a) {
  switch (a.type) {
    case "focus":
      return ne(ne({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ne(ne({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ne(ne({}, Na), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ne(ne({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ne(ne({}, e), {}, {
        isDragActive: a.isDragActive,
        isDragAccept: a.isDragAccept,
        isDragReject: a.isDragReject
      });
    case "setFiles":
      return ne(ne({}, e), {}, {
        acceptedFiles: a.acceptedFiles,
        fileRejections: a.fileRejections,
        isDragReject: a.isDragReject
      });
    case "reset":
      return ne({}, Na);
    default:
      return e;
  }
}
function mt() {
}
const ja = "http://localhost:3003", pn = ({
  /* onImageUploaded, */
  onUploadError: e,
  onImageFileChange: a,
  className: i,
  triggerUploadRef: n,
  lang: r = "de",
  token: o
}) => {
  const [s, d] = me(null), [f, _] = me("idle"), [x, h] = me(0), [S, C] = me(""), $ = _e((te, re) => {
    var Z, Q;
    if (re.length > 0) {
      const B = re[0];
      ((Z = B.errors[0]) == null ? void 0 : Z.code) === "file-too-large" ? C(A(r, "ERROR_FILE_TOO_LARGE")) : ((Q = B.errors[0]) == null ? void 0 : Q.code) === "file-invalid-type" ? C(A(r, "ERROR_INVALID_FILE_TYPE")) : C(A(r, "ERROR_GENERIC_UPLOAD"));
      return;
    }
    if (te.length > 0) {
      const B = te[0];
      d(B), a == null || a(B), C(""), _("idle"), h(0);
    }
  }, [r, a]), D = async (te) => {
    _("uploading"), h(0);
    const re = new FormData();
    re.append("photo", te);
    try {
      const Z = new XMLHttpRequest();
      Z.upload.addEventListener("progress", (B) => {
        if (B.lengthComputable) {
          const ue = Math.round(B.loaded / B.total * 100);
          h(ue);
        }
      });
      const Q = await new Promise((B, ue) => {
        Z.addEventListener("load", () => B(Z)), Z.addEventListener("error", () => ue(new Error("Upload failed"))), Z.addEventListener("abort", () => ue(new Error("Upload aborted"))), Z.open("POST", `${ja}/upload/photo`), o && (Z.setRequestHeader("token", String(o)), Z.setRequestHeader("X-API-Key", String(o))), Z.send(re);
      });
      if (Q.status >= 200 && Q.status < 300) {
        _("success"), h(100);
        try {
          return JSON.parse(Q.responseText).s3Key;
        } catch {
          return "";
        }
      } else {
        const B = `${A(r, "ERROR_UPLOAD_WITH_STATUS")} ${Q.status} ${Q.statusText}`;
        throw _("error"), C(B), e && e(B), new Error(B);
      }
    } catch (Z) {
      const Q = A(r, "ERROR_NETWORK_UPLOAD");
      throw _("error"), C(Q), console.error("Upload error:", Z), e && e(Q), Z;
    }
    return "";
  }, { getRootProps: q, getInputProps: Y, isDragActive: U, isDragReject: F } = wt({
    onDrop: $,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"]
    },
    maxSize: 10 * 1024 * 1024,
    // 10MB
    multiple: !1
  }), V = () => {
    d(null), a == null || a(null), _("idle"), h(0), C("");
  }, m = async () => {
    if (s)
      try {
        return await D(s);
      } catch {
        return "";
      }
    return "";
  };
  return aa.useEffect(() => {
    n && (n.current = m);
  }, [s, n]), /* @__PURE__ */ l.jsxs("div", { className: `image-upload-container ${i || ""}`, children: [
    /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(r, "IMAGE_UPLOAD_TITLE") }),
    /* @__PURE__ */ l.jsx("p", { className: "upload-description", children: A(r, "IMAGE_UPLOAD_DESCRIPTION") }),
    S && /* @__PURE__ */ l.jsxs("div", { className: "error-message", children: [
      "⚠️ ",
      S
    ] }),
    f === "success" && /* @__PURE__ */ l.jsx("div", { className: "success-message", children: A(r, "IMAGE_UPLOAD_SUCCESS") }),
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ...q(),
        className: `dropzone ${U ? "drag-active" : ""} ${F ? "drag-reject" : ""} ${s ? "has-file" : ""}`,
        children: [
          /* @__PURE__ */ l.jsx("input", { ...Y() }),
          s ? /* @__PURE__ */ l.jsxs("div", { className: "file-info", children: [
            /* @__PURE__ */ l.jsx("div", { className: "file-preview", children: /* @__PURE__ */ l.jsx(
              "img",
              {
                src: URL.createObjectURL(s),
                alt: A(r, "IMAGE_UPLOAD_PREVIEW_ALT"),
                className: "preview-image"
              }
            ) }),
            f === "uploading" && /* @__PURE__ */ l.jsxs("div", { className: "upload-progress", children: [
              /* @__PURE__ */ l.jsx("div", { className: "progress-bar", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: "progress-fill",
                  style: { width: `${x}%` }
                }
              ) }),
              /* @__PURE__ */ l.jsxs("p", { children: [
                A(r, "IMAGE_UPLOAD_PROGRESS"),
                " ",
                x,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "button-group", children: /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: (te) => {
                  te.stopPropagation(), V();
                },
                className: "remove-button",
                children: A(r, "IMAGE_UPLOAD_REMOVE")
              }
            ) })
          ] }) : /* @__PURE__ */ l.jsx("div", { className: "dropzone-content", children: U ? /* @__PURE__ */ l.jsxs("div", { className: "drag-message", children: [
            /* @__PURE__ */ l.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ l.jsx("p", { children: A(r, "IMAGE_UPLOAD_DROP_FILE") })
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "upload-message", children: [
            /* @__PURE__ */ l.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ l.jsxs("p", { children: [
              /* @__PURE__ */ l.jsx("strong", { children: A(r, "IMAGE_UPLOAD_SELECT") }),
              " ",
              A(r, "IMAGE_UPLOAD_DRAG_INSTRUCTION")
            ] }),
            /* @__PURE__ */ l.jsx("p", { className: "upload-hint", children: A(r, "IMAGE_UPLOAD_HINT") })
          ] }) })
        ]
      }
    )
  ] });
}, ln = (e, a, i, n) => fetch(`${ja}/reports/add`, {
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
    isPublic: a.isPublic,
    ...a.name ? { name: a.name } : {},
    ...a.description ? { description: a.description } : {}
  })
}).then(async (r) => {
  r.ok ? i() : n();
}).catch(() => {
  n();
}), Ue = document.getElementById("cw-root"), Aa = (Ue == null ? void 0 : Ue.getAttribute("data-callback")) || (Ue == null ? void 0 : Ue.dataset.callback), ft = (e, a) => {
  if (typeof a == "function") {
    a(e);
    return;
  }
  if (!Aa)
    return;
  const i = window[Aa];
  if (typeof i != "function") {
    console.warn("Host callback nicht gefunden:", Aa);
    return;
  }
  i(e);
}, sn = ({
  lang: e,
  data: a,
  onReport: i,
  /** Nur true, wenn der Nutzer wirklich auf dem Status-Schritt ist (Slider rendert alle Panels gleichzeitig). */
  active: n
}) => {
  const [r, o] = aa.useState(null);
  return we(() => {
    if (!n) return;
    const { token: s, category: d, auspraegung: f, location: _, timestamp: x, source: h, imageUrl: S, isPublic: C, name: $, description: D } = a;
    if (s && d && f && _ && S !== null && r === null) {
      const { lat: q, lon: Y, place: U } = _, F = {
        category: d,
        auspraegung: f,
        lat: q,
        lon: Y,
        place: U,
        timestamp: x,
        source: h,
        imageUrl: S || "",
        isPublic: C,
        ...$ ? { name: $ } : {},
        ...D ? { description: D } : {}
      };
      ln(s, {
        ...F
      }, () => {
        localStorage.setItem("lastWeatherReportTime", Date.now().toString()), o("success"), ft({ status: "success", report: F }, i);
      }, () => {
        o("error"), ft({ status: "error", report: F }, i);
      });
    }
  }, [a, i, n, r]), /* @__PURE__ */ l.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(e, "STATUS_TITLE") }),
    /* @__PURE__ */ l.jsxs("div", { className: "panel6 status-panel", children: [
      r === "success" && /* @__PURE__ */ l.jsx("div", { className: "message success-message", children: A(e, "REPORT_SUCCESS") }),
      r === "error" && /* @__PURE__ */ l.jsx("div", { className: "message error-message", children: A(e, "REPORT_ERROR") })
    ] })
  ] });
};
function dn(e) {
  const a = e.trim();
  if (!a) return "";
  if (/^(https?:|blob:|data:)/i.test(a)) return a;
  const i = ja.replace(/\/$/, ""), n = a.replace(/^\//, "");
  return `${i}/${n}`;
}
function un({ lang: e, category: a, auspraegung: i, imageUrl: n, imageFile: r }) {
  const [o, s] = me(null);
  we(() => {
    if (!r) {
      s(null);
      return;
    }
    const S = URL.createObjectURL(r);
    return s(S), () => {
      URL.revokeObjectURL(S);
    };
  }, [r]);
  const d = a ? A(e, a) : "—", f = i ? A(e, i) : "—", _ = n && n.length > 0 ? dn(n) : "", x = o || _, h = !!x;
  return /* @__PURE__ */ l.jsxs("div", { className: "categories-container summary-panel", children: [
    /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(e, "SUMMARY_PAGE_TITLE") }),
    /* @__PURE__ */ l.jsxs("dl", { className: "summary-list", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "summary-row", children: [
        /* @__PURE__ */ l.jsx("dt", { children: A(e, "SUMMARY_FIELD_CATEGORY") }),
        /* @__PURE__ */ l.jsx("dd", { children: d })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "summary-row", children: [
        /* @__PURE__ */ l.jsx("dt", { children: A(e, "SUMMARY_FIELD_AUSPRAEGUNG") }),
        /* @__PURE__ */ l.jsx("dd", { children: f })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "summary-row summary-row--image", children: [
        /* @__PURE__ */ l.jsx("dt", { children: A(e, "SUMMARY_FIELD_IMAGE") }),
        /* @__PURE__ */ l.jsx("dd", { children: h ? /* @__PURE__ */ l.jsx(
          "img",
          {
            className: "summary-image",
            src: x,
            alt: A(e, "IMAGE_UPLOAD_PREVIEW_ALT")
          }
        ) : /* @__PURE__ */ l.jsx("span", { className: "summary-no-image", children: A(e, "SUMMARY_NO_IMAGE") }) })
      ] })
    ] })
  ] });
}
const mn = ({
  lang: e,
  name: a,
  description: i,
  onNameChange: n,
  onDescriptionChange: r
}) => /* @__PURE__ */ l.jsxs("div", { className: "reporter-details-container", children: [
  /* @__PURE__ */ l.jsx("div", { className: "panel-title", children: A(e, "REPORTER_DETAILS_TITLE") }),
  /* @__PURE__ */ l.jsx("label", { htmlFor: "reporter-name", className: "reporter-details-label", children: A(e, "REPORTER_NAME_LABEL") }),
  /* @__PURE__ */ l.jsx(
    "input",
    {
      id: "reporter-name",
      type: "text",
      value: a,
      onChange: (o) => n(o.target.value),
      className: "reporter-details-input",
      placeholder: A(e, "REPORTER_NAME_PLACEHOLDER")
    }
  ),
  /* @__PURE__ */ l.jsx("label", { htmlFor: "reporter-description", className: "reporter-details-label", children: A(e, "REPORTER_DESCRIPTION_LABEL") }),
  /* @__PURE__ */ l.jsx(
    "textarea",
    {
      id: "reporter-description",
      value: i,
      onChange: (o) => r(o.target.value),
      className: "reporter-details-textarea",
      rows: 4,
      placeholder: A(e, "REPORTER_DESCRIPTION_PLACEHOLDER")
    }
  )
] }), vt = ["categories", "auspraegungen", "locations", "time", "upload", "summary", "status"];
function vn({
  token: e,
  locations: a,
  params: i = [],
  source: n,
  isPublic: r,
  lang: o,
  onReport: s
}) {
  const f = De(() => a.length === 1 ? vt.filter((j) => j !== "locations") : [...vt], [a.length]), [_, x] = me(0), [h, S] = me(null), [C, $] = me(null), [D, q] = me(null), [Y, U] = me(Date.now()), [F, V] = me(null), [m, te] = me(null), [re, Z] = me(!1), [Q, B] = me(!1), [ue, he] = me(""), [le, H] = me(""), ee = Qe(null);
  we(() => {
    const j = localStorage.getItem("lastWeatherReportTime");
    if (j) {
      const c = Date.now() - parseInt(j), v = 10 * 60 * 1e3;
      c < v && Z(!0);
    }
  }, []), we(() => {
    a.length === 1 && q((j) => j ?? a[0]);
  }, [a]), we(() => {
    _ >= f.length && x(Math.max(f.length - 1, 0));
  }, [_, f.length]);
  async function ae() {
    const j = f.indexOf("upload");
    if (j !== -1 && _ === j && ee.current) {
      const c = await ee.current();
      V(c);
    }
    _ < f.length - 1 && x(_ + 1);
  }
  function se() {
    _ > 0 && x(_ - 1);
  }
  function ge(j) {
    switch (j) {
      case "categories":
        return /* @__PURE__ */ l.jsx(
          Qt,
          {
            params: i || [],
            lang: o,
            onSelectCategory: async (c) => {
              S(c), await ae();
            }
          }
        );
      case "auspraegungen":
        return /* @__PURE__ */ l.jsx(
          Be,
          {
            component: /* @__PURE__ */ l.jsx(
              ei,
              {
                category: h,
                lang: o,
                onSelectAuspraegung: async (c) => {
                  $(c), await ae();
                }
              }
            ),
            onNext: ae,
            onPrev: se,
            showPrev: !0,
            showNext: !1,
            lang: o
          }
        );
      case "locations":
        return /* @__PURE__ */ l.jsx(
          Be,
          {
            component: /* @__PURE__ */ l.jsx(
              ai,
              {
                locations: a,
                lang: o,
                onSelectLocation: async (c) => {
                  q(c), await ae();
                }
              }
            ),
            onNext: ae,
            onPrev: se,
            showPrev: !0,
            showNext: !1,
            lang: o
          }
        );
      case "time":
        return /* @__PURE__ */ l.jsx(
          Be,
          {
            component: /* @__PURE__ */ l.jsx(
              ii,
              {
                lang: o,
                onSelectTimestamp: async (c) => {
                  U(c), await ae();
                }
              }
            ),
            onNext: ae,
            onPrev: se,
            showPrev: !0,
            showNext: !1,
            lang: o
          }
        );
      case "upload":
        return /* @__PURE__ */ l.jsx(
          Be,
          {
            component: /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
              pn,
              {
                lang: o,
                token: e,
                triggerUploadRef: ee,
                onImageFileChange: te
              }
            ) }),
            onNext: ae,
            onPrev: se,
            showPrev: !0,
            showNext: !0,
            lang: o
          }
        );
      case "summary":
        return /* @__PURE__ */ l.jsx(
          Be,
          {
            component: /* @__PURE__ */ l.jsx(l.Fragment, { children: Q ? /* @__PURE__ */ l.jsx(
              mn,
              {
                lang: o,
                name: ue,
                description: le,
                onNameChange: he,
                onDescriptionChange: H
              }
            ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              /* @__PURE__ */ l.jsx(
                un,
                {
                  lang: o,
                  category: h,
                  auspraegung: C,
                  imageUrl: F,
                  imageFile: m
                }
              ),
              /* @__PURE__ */ l.jsx(
                "a",
                {
                  href: "#",
                  onClick: (c) => {
                    c.preventDefault(), B((v) => !v);
                  },
                  className: "text-link",
                  children: A(o, "REPORTER_DETAILS_LINK")
                }
              )
            ] }) }),
            onNext: ae,
            onPrev: se,
            showPrev: !0,
            showNext: !0,
            lang: o
          }
        );
      case "status":
        return /* @__PURE__ */ l.jsx(
          Be,
          {
            component: /* @__PURE__ */ l.jsx(
              sn,
              {
                lang: o,
                active: f[_] === "status",
                data: {
                  token: e,
                  category: h,
                  auspraegung: C,
                  location: D,
                  timestamp: Y,
                  source: n,
                  imageUrl: F,
                  isPublic: r,
                  name: ue.trim() || void 0,
                  description: le.trim() || void 0
                },
                onReport: s
              }
            ),
            onNext: ae,
            onPrev: se,
            showPrev: !1,
            showNext: !1,
            lang: o
          }
        );
      default:
        return null;
    }
  }
  return /* @__PURE__ */ l.jsxs("div", { className: "slider-container", children: [
    re && /* @__PURE__ */ l.jsx("div", { className: "rate-limit-warning", children: A(o, "RATE_LIMIT_WARNING") }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "slider-inner",
        style: {
          transform: `translateX(-${_ * (100 / f.length)}%)`,
          width: `${f.length * 100}%`
        },
        children: f.map((j) => /* @__PURE__ */ l.jsx("div", { className: `panel-container panel-${j}`, children: ge(j) }, j))
      }
    )
  ] });
}
function Be({ component: e, onNext: a, onPrev: i, showPrev: n, showNext: r, lang: o }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "panel-content", children: [
    e && e,
    /* @__PURE__ */ l.jsx("div", { className: "panel-buttons", children: r && /* @__PURE__ */ l.jsxs("a", { href: "#", onClick: async (s) => {
      s.preventDefault(), await a();
    }, className: "text-link", children: [
      A(o, "NEXT"),
      /* @__PURE__ */ l.jsx("svg", { className: "arrow-right", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ l.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 5h12m0 0L9 1m4 4L9 9" }) })
    ] }) })
  ] });
}
function En(e) {
  return `My Hello ${e}!`;
}
export {
  vn as CrowdWxEditor,
  En as helloDebug
};
