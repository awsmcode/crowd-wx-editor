import aa, { useMemo as Ne, useRef as Qe, useReducer as Ut, useEffect as ke, useCallback as ge, forwardRef as zt, useImperativeHandle as Bt, Fragment as Wt, useState as be } from "react";
function vt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ia = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua;
function Kt() {
  if (Ua) return Ze;
  Ua = 1;
  var e = aa, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, m, _) {
    var v, h = {}, R = null, j = null;
    _ !== void 0 && (R = "" + _), m.key !== void 0 && (R = "" + m.key), m.ref !== void 0 && (j = m.ref);
    for (v in m) n.call(m, v) && !r.hasOwnProperty(v) && (h[v] = m[v]);
    if (s && s.defaultProps) for (v in m = s.defaultProps, m) h[v] === void 0 && (h[v] = m[v]);
    return { $$typeof: a, type: s, key: R, ref: j, props: h, _owner: o.current };
  }
  return Ze.Fragment = i, Ze.jsx = l, Ze.jsxs = l, Ze;
}
var Xe = {};
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
    var e = aa, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.iterator, N = "@@iterator";
    function F(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = $ && t[$] || t[N];
      return typeof c == "function" ? c : null;
    }
    var Y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(t) {
      {
        for (var c = arguments.length, x = new Array(c > 1 ? c - 1 : 0), S = 1; S < c; S++)
          x[S - 1] = arguments[S];
        V("error", t, x);
      }
    }
    function V(t, c, x) {
      {
        var S = Y.ReactDebugCurrentFrame, B = S.getStackAddendum();
        B !== "" && (c += "%s", x = x.concat([B]));
        var X = x.map(function(M) {
          return String(M);
        });
        X.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, X);
      }
    }
    var Z = !1, d = !1, ce = !1, G = !1, H = !1, P;
    P = Symbol.for("react.module.reference");
    function de(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === r || H || t === o || t === _ || t === v || G || t === j || Z || d || ce || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === h || t.$$typeof === l || t.$$typeof === s || t.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === P || t.getModuleId !== void 0));
    }
    function Q(t, c, x) {
      var S = t.displayName;
      if (S)
        return S;
      var B = c.displayName || c.name || "";
      return B !== "" ? x + "(" + B + ")" : x;
    }
    function te(t) {
      return t.displayName || "Context";
    }
    function se(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case _:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case s:
            var c = t;
            return te(c) + ".Consumer";
          case l:
            var x = t;
            return te(x._context) + ".Provider";
          case m:
            return Q(t, t.render, "ForwardRef");
          case h:
            var S = t.displayName || null;
            return S !== null ? S : se(t.type) || "Memo";
          case R: {
            var B = t, X = B._payload, M = B._init;
            try {
              return se(M(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, ie = 0, ue, xe, he, pe, p, E, C;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function y() {
      {
        if (ie === 0) {
          ue = console.log, xe = console.info, he = console.warn, pe = console.error, p = console.group, E = console.groupCollapsed, C = console.groupEnd;
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
        ie++;
      }
    }
    function L() {
      {
        if (ie--, ie === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, t, {
              value: ue
            }),
            info: z({}, t, {
              value: xe
            }),
            warn: z({}, t, {
              value: he
            }),
            error: z({}, t, {
              value: pe
            }),
            group: z({}, t, {
              value: p
            }),
            groupCollapsed: z({}, t, {
              value: E
            }),
            groupEnd: z({}, t, {
              value: C
            })
          });
        }
        ie < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var T = Y.ReactCurrentDispatcher, A;
    function I(t, c, x) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (B) {
            var S = B.stack.trim().match(/\n( *(at )?)/);
            A = S && S[1] || "";
          }
        return `
` + A + t;
      }
    }
    var D = !1, O;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      O = new ne();
    }
    function u(t, c) {
      if (!t || D)
        return "";
      {
        var x = O.get(t);
        if (x !== void 0)
          return x;
      }
      var S;
      D = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = T.current, T.current = null, y();
      try {
        if (c) {
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
            } catch (Ee) {
              S = Ee;
            }
            Reflect.construct(t, [], M);
          } else {
            try {
              M.call();
            } catch (Ee) {
              S = Ee;
            }
            t.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            S = Ee;
          }
          t();
        }
      } catch (Ee) {
        if (Ee && S && typeof Ee.stack == "string") {
          for (var k = Ee.stack.split(`
`), ve = S.stack.split(`
`), oe = k.length - 1, le = ve.length - 1; oe >= 1 && le >= 0 && k[oe] !== ve[le]; )
            le--;
          for (; oe >= 1 && le >= 0; oe--, le--)
            if (k[oe] !== ve[le]) {
              if (oe !== 1 || le !== 1)
                do
                  if (oe--, le--, le < 0 || k[oe] !== ve[le]) {
                    var _e = `
` + k[oe].replace(" at new ", " at ");
                    return t.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", t.displayName)), typeof t == "function" && O.set(t, _e), _e;
                  }
                while (oe >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        D = !1, T.current = X, L(), Error.prepareStackTrace = B;
      }
      var He = t ? t.displayName || t.name : "", Le = He ? I(He) : "";
      return typeof t == "function" && O.set(t, Le), Le;
    }
    function me(t, c, x) {
      return u(t, !1);
    }
    function Se(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function ye(t, c, x) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return u(t, Se(t));
      if (typeof t == "string")
        return I(t);
      switch (t) {
        case _:
          return I("Suspense");
        case v:
          return I("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            return me(t.render);
          case h:
            return ye(t.type, c, x);
          case R: {
            var S = t, B = S._payload, X = S._init;
            try {
              return ye(X(B), c, x);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Re = {}, Pe = Y.ReactDebugCurrentFrame;
    function Ce(t) {
      if (t) {
        var c = t._owner, x = ye(t.type, t._source, c ? c.type : null);
        Pe.setExtraStackFrame(x);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Me(t, c, x, S, B) {
      {
        var X = Function.call.bind(we);
        for (var M in t)
          if (X(t, M)) {
            var k = void 0;
            try {
              if (typeof t[M] != "function") {
                var ve = Error((S || "React class") + ": " + x + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              k = t[M](c, M, S, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              k = oe;
            }
            k && !(k instanceof Error) && (Ce(B), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", x, M, typeof k), Ce(null)), k instanceof Error && !(k.message in Re) && (Re[k.message] = !0, Ce(B), q("Failed %s type: %s", x, k.message), Ce(null));
          }
      }
    }
    var ua = Array.isArray;
    function Be(t) {
      return ua(t);
    }
    function ma(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, x = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return x;
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
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ma(t)), b(t);
    }
    var re = Y.ReactCurrentOwner, fe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ae;
    function We(t) {
      if (we.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ke(t) {
      if (we.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function $e(t, c) {
      typeof t.ref == "string" && re.current;
    }
    function Ge(t, c) {
      {
        var x = function() {
          Oe || (Oe = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        x.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function qe(t, c) {
      {
        var x = function() {
          Ae || (Ae = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        x.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Ye = function(t, c, x, S, B, X, M) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: x,
        props: M,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Ve(t, c, x, S, B) {
      {
        var X, M = {}, k = null, ve = null;
        x !== void 0 && (ee(x), k = "" + x), Ke(c) && (ee(c.key), k = "" + c.key), We(c) && (ve = c.ref, $e(c, B));
        for (X in c)
          we.call(c, X) && !fe.hasOwnProperty(X) && (M[X] = c[X]);
        if (t && t.defaultProps) {
          var oe = t.defaultProps;
          for (X in oe)
            M[X] === void 0 && (M[X] = oe[X]);
        }
        if (k || ve) {
          var le = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          k && Ge(M, le), ve && qe(M, le);
        }
        return Ye(t, k, ve, B, S, re.current, M);
      }
    }
    var Ie = Y.ReactCurrentOwner, ta = Y.ReactDebugCurrentFrame;
    function Fe(t) {
      if (t) {
        var c = t._owner, x = ye(t.type, t._source, c ? c.type : null);
        ta.setExtraStackFrame(x);
      } else
        ta.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function va(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function ja() {
      {
        if (Ie.current) {
          var t = se(Ie.current.type);
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
    var Pa = {};
    function Nt(t) {
      {
        var c = ja();
        if (!c) {
          var x = typeof t == "string" ? t : t.displayName || t.name;
          x && (c = `

Check the top-level render call using <` + x + ">.");
        }
        return c;
      }
    }
    function Ma(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var x = Nt(c);
        if (Pa[x])
          return;
        Pa[x] = !0;
        var S = "";
        t && t._owner && t._owner !== Ie.current && (S = " It was passed a child from " + se(t._owner.type) + "."), Fe(t), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, S), Fe(null);
      }
    }
    function Ga(t, c) {
      {
        if (typeof t != "object")
          return;
        if (Be(t))
          for (var x = 0; x < t.length; x++) {
            var S = t[x];
            va(S) && Ma(S, c);
          }
        else if (va(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var B = F(t);
          if (typeof B == "function" && B !== t.entries)
            for (var X = B.call(t), M; !(M = X.next()).done; )
              va(M.value) && Ma(M.value, c);
        }
      }
    }
    function Dt(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var x;
        if (typeof c == "function")
          x = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === h))
          x = c.propTypes;
        else
          return;
        if (x) {
          var S = se(c);
          Me(x, t.props, "prop", S, t);
        } else if (c.PropTypes !== void 0 && !fa) {
          fa = !0;
          var B = se(c);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(t) {
      {
        for (var c = Object.keys(t.props), x = 0; x < c.length; x++) {
          var S = c[x];
          if (S !== "children" && S !== "key") {
            Fe(t), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Fe(null);
            break;
          }
        }
        t.ref !== null && (Fe(t), q("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    var Fa = {};
    function Ha(t, c, x, S, B, X) {
      {
        var M = de(t);
        if (!M) {
          var k = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Lt();
          ve ? k += ve : k += ja();
          var oe;
          t === null ? oe = "null" : Be(t) ? oe = "array" : t !== void 0 && t.$$typeof === a ? (oe = "<" + (se(t.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof t, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, k);
        }
        var le = Ve(t, c, x, B, X);
        if (le == null)
          return le;
        if (M) {
          var _e = c.children;
          if (_e !== void 0)
            if (S)
              if (Be(_e)) {
                for (var He = 0; He < _e.length; He++)
                  Ga(_e[He], t);
                Object.freeze && Object.freeze(_e);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ga(_e, t);
        }
        if (we.call(c, "key")) {
          var Le = se(t), Ee = Object.keys(c).filter(function(Ht) {
            return Ht !== "key";
          }), Ea = Ee.length > 0 ? "{key: someKey, " + Ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fa[Le + Ea]) {
            var Ft = Ee.length > 0 ? "{" + Ee.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ea, Le, Ft, Le), Fa[Le + Ea] = !0;
          }
        }
        return t === n ? kt(le) : Dt(le), le;
      }
    }
    function jt(t, c, x) {
      return Ha(t, c, x, !0);
    }
    function Pt(t, c, x) {
      return Ha(t, c, x, !1);
    }
    var Mt = Pt, Gt = jt;
    Xe.Fragment = n, Xe.jsx = Mt, Xe.jsxs = Gt;
  }()), Xe;
}
var Ba;
function qt() {
  return Ba || (Ba = 1, process.env.NODE_ENV === "production" ? ia.exports = Kt() : ia.exports = $t()), ia.exports;
}
var g = qt();
const Yt = {
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
  TORNADO_F4: "verheerend",
  STATUS_TITLE: "Zusammenfassung"
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
  STATUS_TITLE: "Summary"
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
  STATUS_TITLE: "Rezumat"
}, Wa = "de", xa = {
  de: Yt,
  en: Vt,
  ro: Zt
}, U = (e, a) => {
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
const Et = () => Object.entries(da).map(([e]) => e), Xt = () => Object.entries(da).map(([e, a]) => a).flat(), Jt = (e) => da[e];
Array.from(/* @__PURE__ */ new Set([...Et(), ...Xt()]));
const Aa = (e, a = "de") => U(a, e), Qt = ({
  onSelectCategory: e,
  params: a = [],
  lang: i
}) => /* @__PURE__ */ g.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ g.jsx("div", { className: "panel-title", children: U(i, "CATEGORIES_TITLE") }),
  Et().filter((n) => a === null || a.includes(n.toLowerCase()) || a.length === 0).map((n) => /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        e(n);
      },
      children: Aa(n, i)
    },
    n
  ))
] }), ei = ({ category: e, onSelectAuspraegung: a, lang: i }) => /* @__PURE__ */ g.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ g.jsx("div", { className: "panel-title", children: e ? Aa(e, i) : U(i, "CATEGORIES_TITLE") }),
  e && Jt(e).map((n) => /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(n);
      },
      children: Aa(n, i)
    },
    n
  ))
] }), ai = ({ locations: e, onSelectLocation: a, lang: i }) => /* @__PURE__ */ g.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ g.jsx("div", { className: "panel-title", children: U(i, "LOCATION_TITLE") }),
  e.map((n) => /* @__PURE__ */ g.jsx(
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
  return a.map(({ label: n, minutes: o }) => ({
    label: n,
    value: Math.floor(new Date(i.getTime() - o * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const ii = ({ onSelectTimestamp: e, lang: a }) => {
  const i = Date.now(), n = [
    { label: U(a, "TIME_NOW"), minutes: 0 },
    { label: U(a, "TIME_10_MINUTES"), minutes: 10 },
    { label: U(a, "TIME_20_MINUTES"), minutes: 20 },
    { label: U(a, "TIME_30_MINUTES"), minutes: 30 },
    { label: U(a, "TIME_60_MINUTES"), minutes: 60 }
  ], o = ti(i, n);
  return /* @__PURE__ */ g.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ g.jsx("div", { className: "panel-title", children: U(a, "TIME_TITLE") }),
    o.map((r) => /* @__PURE__ */ g.jsx(
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
};
var na = { exports: {} }, ra = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function ni() {
  if (Ka) return W;
  Ka = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function V(d) {
    if (typeof d == "object" && d !== null) {
      var ce = d.$$typeof;
      switch (ce) {
        case a:
          switch (d = d.type, d) {
            case m:
            case _:
            case n:
            case r:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case v:
                case $:
                case j:
                case l:
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
  function Z(d) {
    return V(d) === _;
  }
  return W.AsyncMode = m, W.ConcurrentMode = _, W.ContextConsumer = s, W.ContextProvider = l, W.Element = a, W.ForwardRef = v, W.Fragment = n, W.Lazy = $, W.Memo = j, W.Portal = i, W.Profiler = r, W.StrictMode = o, W.Suspense = h, W.isAsyncMode = function(d) {
    return Z(d) || V(d) === m;
  }, W.isConcurrentMode = Z, W.isContextConsumer = function(d) {
    return V(d) === s;
  }, W.isContextProvider = function(d) {
    return V(d) === l;
  }, W.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === a;
  }, W.isForwardRef = function(d) {
    return V(d) === v;
  }, W.isFragment = function(d) {
    return V(d) === n;
  }, W.isLazy = function(d) {
    return V(d) === $;
  }, W.isMemo = function(d) {
    return V(d) === j;
  }, W.isPortal = function(d) {
    return V(d) === i;
  }, W.isProfiler = function(d) {
    return V(d) === r;
  }, W.isStrictMode = function(d) {
    return V(d) === o;
  }, W.isSuspense = function(d) {
    return V(d) === h;
  }, W.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === _ || d === r || d === o || d === h || d === R || typeof d == "object" && d !== null && (d.$$typeof === $ || d.$$typeof === j || d.$$typeof === l || d.$$typeof === s || d.$$typeof === v || d.$$typeof === F || d.$$typeof === Y || d.$$typeof === q || d.$$typeof === N);
  }, W.typeOf = V, W;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function ri() {
  return $a || ($a = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
    function V(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === _ || u === r || u === o || u === h || u === R || typeof u == "object" && u !== null && (u.$$typeof === $ || u.$$typeof === j || u.$$typeof === l || u.$$typeof === s || u.$$typeof === v || u.$$typeof === F || u.$$typeof === Y || u.$$typeof === q || u.$$typeof === N);
    }
    function Z(u) {
      if (typeof u == "object" && u !== null) {
        var me = u.$$typeof;
        switch (me) {
          case a:
            var Se = u.type;
            switch (Se) {
              case m:
              case _:
              case n:
              case r:
              case o:
              case h:
                return Se;
              default:
                var ye = Se && Se.$$typeof;
                switch (ye) {
                  case s:
                  case v:
                  case $:
                  case j:
                  case l:
                    return ye;
                  default:
                    return me;
                }
            }
          case i:
            return me;
        }
      }
    }
    var d = m, ce = _, G = s, H = l, P = a, de = v, Q = n, te = $, se = j, z = i, ie = r, ue = o, xe = h, he = !1;
    function pe(u) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(u) || Z(u) === m;
    }
    function p(u) {
      return Z(u) === _;
    }
    function E(u) {
      return Z(u) === s;
    }
    function C(u) {
      return Z(u) === l;
    }
    function w(u) {
      return typeof u == "object" && u !== null && u.$$typeof === a;
    }
    function y(u) {
      return Z(u) === v;
    }
    function L(u) {
      return Z(u) === n;
    }
    function T(u) {
      return Z(u) === $;
    }
    function A(u) {
      return Z(u) === j;
    }
    function I(u) {
      return Z(u) === i;
    }
    function D(u) {
      return Z(u) === r;
    }
    function O(u) {
      return Z(u) === o;
    }
    function ne(u) {
      return Z(u) === h;
    }
    K.AsyncMode = d, K.ConcurrentMode = ce, K.ContextConsumer = G, K.ContextProvider = H, K.Element = P, K.ForwardRef = de, K.Fragment = Q, K.Lazy = te, K.Memo = se, K.Portal = z, K.Profiler = ie, K.StrictMode = ue, K.Suspense = xe, K.isAsyncMode = pe, K.isConcurrentMode = p, K.isContextConsumer = E, K.isContextProvider = C, K.isElement = w, K.isForwardRef = y, K.isFragment = L, K.isLazy = T, K.isMemo = A, K.isPortal = I, K.isProfiler = D, K.isStrictMode = O, K.isSuspense = ne, K.isValidElementType = V, K.typeOf = Z;
  }()), K;
}
var qa;
function xt() {
  return qa || (qa = 1, process.env.NODE_ENV === "production" ? ra.exports = ni() : ra.exports = ri()), ra.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ga, Ya;
function oi() {
  if (Ya) return ga;
  Ya = 1;
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
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var m = Object.getOwnPropertyNames(l).map(function(v) {
        return l[v];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        _[v] = v;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ga = o() ? Object.assign : function(r, l) {
    for (var s, m = n(r), _, v = 1; v < arguments.length; v++) {
      s = Object(arguments[v]);
      for (var h in s)
        a.call(s, h) && (m[h] = s[h]);
      if (e) {
        _ = e(s);
        for (var R = 0; R < _.length; R++)
          i.call(s, _[R]) && (m[_[R]] = s[_[R]]);
      }
    }
    return m;
  }, ga;
}
var _a, Va;
function Da() {
  if (Va) return _a;
  Va = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _a = e, _a;
}
var ha, Za;
function gt() {
  return Za || (Za = 1, ha = Function.call.bind(Object.prototype.hasOwnProperty)), ha;
}
var ba, Xa;
function ci() {
  if (Xa) return ba;
  Xa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = /* @__PURE__ */ Da(), i = {}, n = /* @__PURE__ */ gt();
    e = function(r) {
      var l = "Warning: " + r;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(r, l, s, m, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in r)
        if (n(r, v)) {
          var h;
          try {
            if (typeof r[v] != "function") {
              var R = Error(
                (m || "React class") + ": " + s + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw R.name = "Invariant Violation", R;
            }
            h = r[v](l, v, m, s, null, a);
          } catch ($) {
            h = $;
          }
          if (h && !(h instanceof Error) && e(
            (m || "React class") + ": type specification of " + s + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in i)) {
            i[h.message] = !0;
            var j = _ ? _() : "";
            e(
              "Failed " + s + " type: " + h.message + (j ?? "")
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
function pi() {
  if (Ja) return ya;
  Ja = 1;
  var e = xt(), a = oi(), i = /* @__PURE__ */ Da(), n = /* @__PURE__ */ gt(), o = /* @__PURE__ */ ci(), r = function() {
  };
  process.env.NODE_ENV !== "production" && (r = function(s) {
    var m = "Warning: " + s;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return ya = function(s, m) {
    var _ = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function h(p) {
      var E = p && (_ && p[_] || p[v]);
      if (typeof E == "function")
        return E;
    }
    var R = "<<anonymous>>", j = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: q(),
      arrayOf: V,
      element: Z(),
      elementType: d(),
      instanceOf: ce,
      node: de(),
      objectOf: H,
      oneOf: G,
      oneOfType: P,
      shape: te,
      exact: se
    };
    function $(p, E) {
      return p === E ? p !== 0 || 1 / p === 1 / E : p !== p && E !== E;
    }
    function N(p, E) {
      this.message = p, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    N.prototype = Error.prototype;
    function F(p) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, C = 0;
      function w(L, T, A, I, D, O, ne) {
        if (I = I || R, O = O || A, ne !== i) {
          if (m) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = I + ":" + A;
            !E[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (r(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[me] = !0, C++);
          }
        }
        return T[A] == null ? L ? T[A] === null ? new N("The " + D + " `" + O + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new N("The " + D + " `" + O + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : p(T, A, I, D, O);
      }
      var y = w.bind(null, !1);
      return y.isRequired = w.bind(null, !0), y;
    }
    function Y(p) {
      function E(C, w, y, L, T, A) {
        var I = C[w], D = ue(I);
        if (D !== p) {
          var O = xe(I);
          return new N(
            "Invalid " + L + " `" + T + "` of type " + ("`" + O + "` supplied to `" + y + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return F(E);
    }
    function q() {
      return F(l);
    }
    function V(p) {
      function E(C, w, y, L, T) {
        if (typeof p != "function")
          return new N("Property `" + T + "` of component `" + y + "` has invalid PropType notation inside arrayOf.");
        var A = C[w];
        if (!Array.isArray(A)) {
          var I = ue(A);
          return new N("Invalid " + L + " `" + T + "` of type " + ("`" + I + "` supplied to `" + y + "`, expected an array."));
        }
        for (var D = 0; D < A.length; D++) {
          var O = p(A, D, y, L, T + "[" + D + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return F(E);
    }
    function Z() {
      function p(E, C, w, y, L) {
        var T = E[C];
        if (!s(T)) {
          var A = ue(T);
          return new N("Invalid " + y + " `" + L + "` of type " + ("`" + A + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return F(p);
    }
    function d() {
      function p(E, C, w, y, L) {
        var T = E[C];
        if (!e.isValidElementType(T)) {
          var A = ue(T);
          return new N("Invalid " + y + " `" + L + "` of type " + ("`" + A + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return F(p);
    }
    function ce(p) {
      function E(C, w, y, L, T) {
        if (!(C[w] instanceof p)) {
          var A = p.name || R, I = pe(C[w]);
          return new N("Invalid " + L + " `" + T + "` of type " + ("`" + I + "` supplied to `" + y + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return F(E);
    }
    function G(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? r(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : r("Invalid argument supplied to oneOf, expected an array.")), l;
      function E(C, w, y, L, T) {
        for (var A = C[w], I = 0; I < p.length; I++)
          if ($(A, p[I]))
            return null;
        var D = JSON.stringify(p, function(ne, u) {
          var me = xe(u);
          return me === "symbol" ? String(u) : u;
        });
        return new N("Invalid " + L + " `" + T + "` of value `" + String(A) + "` " + ("supplied to `" + y + "`, expected one of " + D + "."));
      }
      return F(E);
    }
    function H(p) {
      function E(C, w, y, L, T) {
        if (typeof p != "function")
          return new N("Property `" + T + "` of component `" + y + "` has invalid PropType notation inside objectOf.");
        var A = C[w], I = ue(A);
        if (I !== "object")
          return new N("Invalid " + L + " `" + T + "` of type " + ("`" + I + "` supplied to `" + y + "`, expected an object."));
        for (var D in A)
          if (n(A, D)) {
            var O = p(A, D, y, L, T + "." + D, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return F(E);
    }
    function P(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && r("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var E = 0; E < p.length; E++) {
        var C = p[E];
        if (typeof C != "function")
          return r(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + he(C) + " at index " + E + "."
          ), l;
      }
      function w(y, L, T, A, I) {
        for (var D = [], O = 0; O < p.length; O++) {
          var ne = p[O], u = ne(y, L, T, A, I, i);
          if (u == null)
            return null;
          u.data && n(u.data, "expectedType") && D.push(u.data.expectedType);
        }
        var me = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new N("Invalid " + A + " `" + I + "` supplied to " + ("`" + T + "`" + me + "."));
      }
      return F(w);
    }
    function de() {
      function p(E, C, w, y, L) {
        return z(E[C]) ? null : new N("Invalid " + y + " `" + L + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return F(p);
    }
    function Q(p, E, C, w, y) {
      return new N(
        (p || "React class") + ": " + E + " type `" + C + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + y + "`."
      );
    }
    function te(p) {
      function E(C, w, y, L, T) {
        var A = C[w], I = ue(A);
        if (I !== "object")
          return new N("Invalid " + L + " `" + T + "` of type `" + I + "` " + ("supplied to `" + y + "`, expected `object`."));
        for (var D in p) {
          var O = p[D];
          if (typeof O != "function")
            return Q(y, L, T, D, xe(O));
          var ne = O(A, D, y, L, T + "." + D, i);
          if (ne)
            return ne;
        }
        return null;
      }
      return F(E);
    }
    function se(p) {
      function E(C, w, y, L, T) {
        var A = C[w], I = ue(A);
        if (I !== "object")
          return new N("Invalid " + L + " `" + T + "` of type `" + I + "` " + ("supplied to `" + y + "`, expected `object`."));
        var D = a({}, C[w], p);
        for (var O in D) {
          var ne = p[O];
          if (n(p, O) && typeof ne != "function")
            return Q(y, L, T, O, xe(ne));
          if (!ne)
            return new N(
              "Invalid " + L + " `" + T + "` key `" + O + "` supplied to `" + y + "`.\nBad object: " + JSON.stringify(C[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var u = ne(A, O, y, L, T + "." + O, i);
          if (u)
            return u;
        }
        return null;
      }
      return F(E);
    }
    function z(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(z);
          if (p === null || s(p))
            return !0;
          var E = h(p);
          if (E) {
            var C = E.call(p), w;
            if (E !== p.entries) {
              for (; !(w = C.next()).done; )
                if (!z(w.value))
                  return !1;
            } else
              for (; !(w = C.next()).done; ) {
                var y = w.value;
                if (y && !z(y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(p, E) {
      return p === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function ue(p) {
      var E = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : ie(E, p) ? "symbol" : E;
    }
    function xe(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var E = ue(p);
      if (E === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function he(p) {
      var E = xe(p);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function pe(p) {
      return !p.constructor || !p.constructor.name ? R : p.constructor.name;
    }
    return j.checkPropTypes = o, j.resetWarningCache = o.resetWarningCache, j.PropTypes = j, j;
  }, ya;
}
var Ta, Qa;
function li() {
  if (Qa) return Ta;
  Qa = 1;
  var e = /* @__PURE__ */ Da();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, Ta = function() {
    function n(l, s, m, _, v, h) {
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
  }, Ta;
}
var et;
function si() {
  if (et) return na.exports;
  if (et = 1, process.env.NODE_ENV !== "production") {
    var e = xt(), a = !0;
    na.exports = /* @__PURE__ */ pi()(e.isElement, a);
  } else
    na.exports = /* @__PURE__ */ li()();
  return na.exports;
}
var di = /* @__PURE__ */ si();
const J = /* @__PURE__ */ vt(di);
function je(e, a, i, n) {
  function o(r) {
    return r instanceof i ? r : new i(function(l) {
      l(r);
    });
  }
  return new (i || (i = Promise))(function(r, l) {
    function s(v) {
      try {
        _(n.next(v));
      } catch (h) {
        l(h);
      }
    }
    function m(v) {
      try {
        _(n.throw(v));
      } catch (h) {
        l(h);
      }
    }
    function _(v) {
      v.done ? r(v.value) : o(v.value).then(s, m);
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
  const n = mi(e), { webkitRelativePath: o } = e, r = typeof a == "string" ? a : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof n.path != "string" && at(n, "path", r), at(n, "relativePath", r), n;
}
function mi(e) {
  const { name: a } = e;
  if (a && a.lastIndexOf(".") !== -1 && !e.type) {
    const n = a.split(".").pop().toLowerCase(), o = ui.get(n);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function at(e, a, i) {
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
  return wa(e.target.files).map((a) => ze(a));
}
function _i(e) {
  return je(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((i) => i.getFile()))).map((i) => ze(i));
  });
}
function hi(e, a) {
  return je(this, void 0, void 0, function* () {
    if (e.items) {
      const i = wa(e.items).filter((o) => o.kind === "file");
      if (a !== "drop")
        return i;
      const n = yield Promise.all(i.map(bi));
      return tt(_t(n));
    }
    return tt(wa(e.files).map((i) => ze(i)));
  });
}
function tt(e) {
  return e.filter((a) => fi.indexOf(a.name) === -1);
}
function wa(e) {
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
    return it(e);
  const a = e.webkitGetAsEntry();
  return a && a.isDirectory ? ht(a) : it(e, a);
}
function _t(e) {
  return e.reduce((a, i) => [
    ...a,
    ...Array.isArray(i) ? _t(i) : [i]
  ], []);
}
function it(e, a) {
  return je(this, void 0, void 0, function* () {
    var i;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const r = yield e.getAsFileSystemHandle();
      if (r === null)
        throw new Error(`${e} is not a File`);
      if (r !== void 0) {
        const l = yield r.getFile();
        return l.handle = r, ze(l);
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
    return e.isDirectory ? ht(e) : Ti(e);
  });
}
function ht(e) {
  const a = e.createReader();
  return new Promise((i, n) => {
    const o = [];
    function r() {
      a.readEntries((l) => je(this, void 0, void 0, function* () {
        if (l.length) {
          const s = Promise.all(l.map(yi));
          o.push(s), r();
        } else
          try {
            const s = yield Promise.all(o);
            i(s);
          } catch (s) {
            n(s);
          }
      }), (l) => {
        n(l);
      });
    }
    r();
  });
}
function Ti(e) {
  return je(this, void 0, void 0, function* () {
    return new Promise((a, i) => {
      e.file((n) => {
        const o = ze(n, e.fullPath);
        a(o);
      }, (n) => {
        i(n);
      });
    });
  });
}
var oa = {}, nt;
function Si() {
  return nt || (nt = 1, oa.__esModule = !0, oa.default = function(e, a) {
    if (e && a) {
      var i = Array.isArray(a) ? a : a.split(",");
      if (i.length === 0)
        return !0;
      var n = e.name || "", o = (e.type || "").toLowerCase(), r = o.replace(/\/.*$/, "");
      return i.some(function(l) {
        var s = l.trim().toLowerCase();
        return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? r === s.replace(/\/.*$/, "") : o === s;
      });
    }
    return !0;
  }), oa;
}
var Ri = Si();
const Sa = /* @__PURE__ */ vt(Ri);
function rt(e) {
  return wi(e) || Ai(e) || yt(e) || Ci();
}
function Ci() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ai(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wi(e) {
  if (Array.isArray(e)) return Oa(e);
}
function ot(e, a) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    a && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function ct(e) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ot(Object(i), !0).forEach(function(n) {
      bt(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ot(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function bt(e, a, i) {
  return a in e ? Object.defineProperty(e, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = i, e;
}
function ea(e, a) {
  return Li(e) || Ii(e, a) || yt(e, a) || Oi();
}
function Oi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yt(e, a) {
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
function Ii(e, a) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n = [], o = !0, r = !1, l, s;
    try {
      for (i = i.call(e); !(o = (l = i.next()).done) && (n.push(l.value), !(a && n.length === a)); o = !0)
        ;
    } catch (m) {
      r = !0, s = m;
    } finally {
      try {
        !o && i.return != null && i.return();
      } finally {
        if (r) throw s;
      }
    }
    return n;
  }
}
function Li(e) {
  if (Array.isArray(e)) return e;
}
var Ni = typeof Sa == "function" ? Sa : Sa.default, Di = "file-invalid-type", ki = "file-too-large", ji = "file-too-small", Pi = "too-many-files", Mi = function() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", i = a.split(","), n = i.length > 1 ? "one of ".concat(i.join(", ")) : i[0];
  return {
    code: Di,
    message: "File type must be ".concat(n)
  };
}, pt = function(a) {
  return {
    code: ki,
    message: "File is larger than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, lt = function(a) {
  return {
    code: ji,
    message: "File is smaller than ".concat(a, " ").concat(a === 1 ? "byte" : "bytes")
  };
}, Gi = {
  code: Pi,
  message: "Too many files"
};
function Tt(e, a) {
  var i = e.type === "application/x-moz-file" || Ni(e, a);
  return [i, i ? null : Mi(a)];
}
function St(e, a, i) {
  if (De(e.size))
    if (De(a) && De(i)) {
      if (e.size > i) return [!1, pt(i)];
      if (e.size < a) return [!1, lt(a)];
    } else {
      if (De(a) && e.size < a) return [!1, lt(a)];
      if (De(i) && e.size > i) return [!1, pt(i)];
    }
  return [!0, null];
}
function De(e) {
  return e != null;
}
function Fi(e) {
  var a = e.files, i = e.accept, n = e.minSize, o = e.maxSize, r = e.multiple, l = e.maxFiles, s = e.validator;
  return !r && a.length > 1 || r && l >= 1 && a.length > l ? !1 : a.every(function(m) {
    var _ = Tt(m, i), v = ea(_, 1), h = v[0], R = St(m, n, o), j = ea(R, 1), $ = j[0], N = s ? s(m) : null;
    return h && $ && !N;
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
function st(e) {
  e.preventDefault();
}
function Hi(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Ui(e) {
  return e.indexOf("Edge/") !== -1;
}
function zi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Hi(e) || Ui(e);
}
function Te() {
  for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
    a[i] = arguments[i];
  return function(n) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      r[l - 1] = arguments[l];
    return a.some(function(s) {
      return !la(n) && s && s.apply(void 0, [n].concat(r)), la(n);
    });
  };
}
function Bi() {
  return "showOpenFilePicker" in window;
}
function Wi(e) {
  if (De(e)) {
    var a = Object.entries(e).filter(function(i) {
      var n = ea(i, 2), o = n[0], r = n[1], l = !0;
      return Rt(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), l = !1), (!Array.isArray(r) || !r.every(Ct)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), l = !1), l;
    }).reduce(function(i, n) {
      var o = ea(n, 2), r = o[0], l = o[1];
      return ct(ct({}, i), {}, bt({}, r, l));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: a
    }];
  }
  return e;
}
function Ki(e) {
  if (De(e))
    return Object.entries(e).reduce(function(a, i) {
      var n = ea(i, 2), o = n[0], r = n[1];
      return [].concat(rt(a), [o], rt(r));
    }, []).filter(function(a) {
      return Rt(a) || Ct(a);
    }).join(",");
}
function $i(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function qi(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Rt(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Ct(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Yi = ["children"], Vi = ["open"], Zi = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Xi = ["refKey", "onChange", "onClick"];
function Ji(e) {
  return an(e) || en(e) || At(e) || Qi();
}
function Qi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function en(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function an(e) {
  if (Array.isArray(e)) return Ia(e);
}
function Ra(e, a) {
  return rn(e) || nn(e, a) || At(e, a) || tn();
}
function tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function At(e, a) {
  if (e) {
    if (typeof e == "string") return Ia(e, a);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Ia(e, a);
  }
}
function Ia(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var i = 0, n = new Array(a); i < a; i++)
    n[i] = e[i];
  return n;
}
function nn(e, a) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n = [], o = !0, r = !1, l, s;
    try {
      for (i = i.call(e); !(o = (l = i.next()).done) && (n.push(l.value), !(a && n.length === a)); o = !0)
        ;
    } catch (m) {
      r = !0, s = m;
    } finally {
      try {
        !o && i.return != null && i.return();
      } finally {
        if (r) throw s;
      }
    }
    return n;
  }
}
function rn(e) {
  if (Array.isArray(e)) return e;
}
function dt(e, a) {
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
    a % 2 ? dt(Object(i), !0).forEach(function(n) {
      La(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : dt(Object(i)).forEach(function(n) {
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
  var i = on(e, a), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      n = r[o], !(a.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function on(e, a) {
  if (e == null) return {};
  var i = {}, n = Object.keys(e), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(a.indexOf(o) >= 0) && (i[o] = e[o]);
  return i;
}
var ka = /* @__PURE__ */ zt(function(e, a) {
  var i = e.children, n = sa(e, Yi), o = Ot(n), r = o.open, l = sa(o, Vi);
  return Bt(a, function() {
    return {
      open: r
    };
  }, [r]), /* @__PURE__ */ aa.createElement(Wt, null, i(ae(ae({}, l), {}, {
    open: r
  })));
});
ka.displayName = "Dropzone";
var wt = {
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
ka.defaultProps = wt;
ka.propTypes = {
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
function Ot() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = ae(ae({}, wt), e), i = a.accept, n = a.disabled, o = a.getFilesFromEvent, r = a.maxSize, l = a.minSize, s = a.multiple, m = a.maxFiles, _ = a.onDragEnter, v = a.onDragLeave, h = a.onDragOver, R = a.onDrop, j = a.onDropAccepted, $ = a.onDropRejected, N = a.onFileDialogCancel, F = a.onFileDialogOpen, Y = a.useFsAccessApi, q = a.autoFocus, V = a.preventDropOnDocument, Z = a.noClick, d = a.noKeyboard, ce = a.noDrag, G = a.noDragEventsBubbling, H = a.onError, P = a.validator, de = Ne(function() {
    return Ki(i);
  }, [i]), Q = Ne(function() {
    return Wi(i);
  }, [i]), te = Ne(function() {
    return typeof F == "function" ? F : ut;
  }, [F]), se = Ne(function() {
    return typeof N == "function" ? N : ut;
  }, [N]), z = Qe(null), ie = Qe(null), ue = Ut(cn, Na), xe = Ra(ue, 2), he = xe[0], pe = xe[1], p = he.isFocused, E = he.isFileDialogActive, C = Qe(typeof window < "u" && window.isSecureContext && Y && Bi()), w = function() {
    !C.current && E && setTimeout(function() {
      if (ie.current) {
        var b = ie.current.files;
        b.length || (pe({
          type: "closeDialog"
        }), se());
      }
    }, 300);
  };
  ke(function() {
    return window.addEventListener("focus", w, !1), function() {
      window.removeEventListener("focus", w, !1);
    };
  }, [ie, E, se, C]);
  var y = Qe([]), L = function(b) {
    z.current && z.current.contains(b.target) || (b.preventDefault(), y.current = []);
  };
  ke(function() {
    return V && (document.addEventListener("dragover", st, !1), document.addEventListener("drop", L, !1)), function() {
      V && (document.removeEventListener("dragover", st), document.removeEventListener("drop", L));
    };
  }, [z, V]), ke(function() {
    return !n && q && z.current && z.current.focus(), function() {
    };
  }, [z, q, n]);
  var T = ge(function(f) {
    H ? H(f) : console.error(f);
  }, [H]), A = ge(function(f) {
    f.preventDefault(), f.persist(), Me(f), y.current = [].concat(Ji(y.current), [f.target]), ca(f) && Promise.resolve(o(f)).then(function(b) {
      if (!(la(f) && !G)) {
        var ee = b.length, re = ee > 0 && Fi({
          files: b,
          accept: de,
          minSize: l,
          maxSize: r,
          multiple: s,
          maxFiles: m,
          validator: P
        }), fe = ee > 0 && !re;
        pe({
          isDragAccept: re,
          isDragReject: fe,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), _ && _(f);
      }
    }).catch(function(b) {
      return T(b);
    });
  }, [o, _, T, G, de, l, r, s, m, P]), I = ge(function(f) {
    f.preventDefault(), f.persist(), Me(f);
    var b = ca(f);
    if (b && f.dataTransfer)
      try {
        f.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return b && h && h(f), !1;
  }, [h, G]), D = ge(function(f) {
    f.preventDefault(), f.persist(), Me(f);
    var b = y.current.filter(function(re) {
      return z.current && z.current.contains(re);
    }), ee = b.indexOf(f.target);
    ee !== -1 && b.splice(ee, 1), y.current = b, !(b.length > 0) && (pe({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), ca(f) && v && v(f));
  }, [z, v, G]), O = ge(function(f, b) {
    var ee = [], re = [];
    f.forEach(function(fe) {
      var Oe = Tt(fe, de), Ae = Ra(Oe, 2), We = Ae[0], Ke = Ae[1], $e = St(fe, l, r), Ge = Ra($e, 2), qe = Ge[0], Ye = Ge[1], Ve = P ? P(fe) : null;
      if (We && qe && !Ve)
        ee.push(fe);
      else {
        var Ie = [Ke, Ye];
        Ve && (Ie = Ie.concat(Ve)), re.push({
          file: fe,
          errors: Ie.filter(function(ta) {
            return ta;
          })
        });
      }
    }), (!s && ee.length > 1 || s && m >= 1 && ee.length > m) && (ee.forEach(function(fe) {
      re.push({
        file: fe,
        errors: [Gi]
      });
    }), ee.splice(0)), pe({
      acceptedFiles: ee,
      fileRejections: re,
      isDragReject: re.length > 0,
      type: "setFiles"
    }), R && R(ee, re, b), re.length > 0 && $ && $(re, b), ee.length > 0 && j && j(ee, b);
  }, [pe, s, de, l, r, m, R, j, $, P]), ne = ge(function(f) {
    f.preventDefault(), f.persist(), Me(f), y.current = [], ca(f) && Promise.resolve(o(f)).then(function(b) {
      la(f) && !G || O(b, f);
    }).catch(function(b) {
      return T(b);
    }), pe({
      type: "reset"
    });
  }, [o, O, T, G]), u = ge(function() {
    if (C.current) {
      pe({
        type: "openDialog"
      }), te();
      var f = {
        multiple: s,
        types: Q
      };
      window.showOpenFilePicker(f).then(function(b) {
        return o(b);
      }).then(function(b) {
        O(b, null), pe({
          type: "closeDialog"
        });
      }).catch(function(b) {
        $i(b) ? (se(b), pe({
          type: "closeDialog"
        })) : qi(b) ? (C.current = !1, ie.current ? (ie.current.value = null, ie.current.click()) : T(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : T(b);
      });
      return;
    }
    ie.current && (pe({
      type: "openDialog"
    }), te(), ie.current.value = null, ie.current.click());
  }, [pe, te, se, Y, O, T, Q, s]), me = ge(function(f) {
    !z.current || !z.current.isEqualNode(f.target) || (f.key === " " || f.key === "Enter" || f.keyCode === 32 || f.keyCode === 13) && (f.preventDefault(), u());
  }, [z, u]), Se = ge(function() {
    pe({
      type: "focus"
    });
  }, []), ye = ge(function() {
    pe({
      type: "blur"
    });
  }, []), we = ge(function() {
    Z || (zi() ? setTimeout(u, 0) : u());
  }, [Z, u]), Re = function(b) {
    return n ? null : b;
  }, Pe = function(b) {
    return d ? null : Re(b);
  }, Ce = function(b) {
    return ce ? null : Re(b);
  }, Me = function(b) {
    G && b.stopPropagation();
  }, ua = Ne(function() {
    return function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = f.refKey, ee = b === void 0 ? "ref" : b, re = f.role, fe = f.onKeyDown, Oe = f.onFocus, Ae = f.onBlur, We = f.onClick, Ke = f.onDragEnter, $e = f.onDragOver, Ge = f.onDragLeave, qe = f.onDrop, Ye = sa(f, Zi);
      return ae(ae(La({
        onKeyDown: Pe(Te(fe, me)),
        onFocus: Pe(Te(Oe, Se)),
        onBlur: Pe(Te(Ae, ye)),
        onClick: Re(Te(We, we)),
        onDragEnter: Ce(Te(Ke, A)),
        onDragOver: Ce(Te($e, I)),
        onDragLeave: Ce(Te(Ge, D)),
        onDrop: Ce(Te(qe, ne)),
        role: typeof re == "string" && re !== "" ? re : "presentation"
      }, ee, z), !n && !d ? {
        tabIndex: 0
      } : {}), Ye);
    };
  }, [z, me, Se, ye, we, A, I, D, ne, d, ce, n]), Be = ge(function(f) {
    f.stopPropagation();
  }, []), ma = Ne(function() {
    return function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = f.refKey, ee = b === void 0 ? "ref" : b, re = f.onChange, fe = f.onClick, Oe = sa(f, Xi), Ae = La({
        accept: de,
        multiple: s,
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
        onChange: Re(Te(re, ne)),
        onClick: Re(Te(fe, Be)),
        tabIndex: -1
      }, ee, ie);
      return ae(ae({}, Ae), Oe);
    };
  }, [ie, i, s, ne, n]);
  return ae(ae({}, he), {}, {
    isFocused: p && !n,
    getRootProps: ua,
    getInputProps: ma,
    rootRef: z,
    inputRef: ie,
    open: Re(u)
  });
}
function cn(e, a) {
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
      return ae(ae({}, Na), {}, {
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
      return ae({}, Na);
    default:
      return e;
  }
}
function ut() {
}
const It = "https://api.wettersoftware.de/crowd", pn = ({
  /* onImageUploaded, */
  onUploadError: e,
  className: a,
  triggerUploadRef: i,
  lang: n = "de",
  token: o
}) => {
  const [r, l] = be(null), [s, m] = be("idle"), [_, v] = be(0), [h, R] = be(""), j = ge((d, ce) => {
    var G, H;
    if (ce.length > 0) {
      const P = ce[0];
      ((G = P.errors[0]) == null ? void 0 : G.code) === "file-too-large" ? R(U(n, "ERROR_FILE_TOO_LARGE")) : ((H = P.errors[0]) == null ? void 0 : H.code) === "file-invalid-type" ? R(U(n, "ERROR_INVALID_FILE_TYPE")) : R(U(n, "ERROR_GENERIC_UPLOAD"));
      return;
    }
    if (d.length > 0) {
      const P = d[0];
      l(P), R(""), m("idle"), v(0);
    }
  }, [n]), $ = async (d) => {
    m("uploading"), v(0);
    const ce = new FormData();
    ce.append("photo", d);
    try {
      const G = new XMLHttpRequest();
      G.upload.addEventListener("progress", (P) => {
        if (P.lengthComputable) {
          const de = Math.round(P.loaded / P.total * 100);
          v(de);
        }
      });
      const H = await new Promise((P, de) => {
        G.addEventListener("load", () => P(G)), G.addEventListener("error", () => de(new Error("Upload failed"))), G.addEventListener("abort", () => de(new Error("Upload aborted"))), G.open("POST", `${It}/upload/photo`), o && (G.setRequestHeader("token", String(o)), G.setRequestHeader("X-API-Key", String(o))), G.send(ce);
      });
      if (H.status >= 200 && H.status < 300) {
        m("success"), v(100);
        try {
          return JSON.parse(H.responseText).s3Key;
        } catch {
          return "";
        }
      } else {
        const P = `${U(n, "ERROR_UPLOAD_WITH_STATUS")} ${H.status} ${H.statusText}`;
        throw m("error"), R(P), e && e(P), new Error(P);
      }
    } catch (G) {
      const H = U(n, "ERROR_NETWORK_UPLOAD");
      throw m("error"), R(H), console.error("Upload error:", G), e && e(H), G;
    }
    return "";
  }, { getRootProps: N, getInputProps: F, isDragActive: Y, isDragReject: q } = Ot({
    onDrop: j,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"]
    },
    maxSize: 10 * 1024 * 1024,
    // 10MB
    multiple: !1
  }), V = () => {
    l(null), m("idle"), v(0), R("");
  }, Z = async () => {
    if (r)
      try {
        return await $(r);
      } catch {
        return "";
      }
    return "";
  };
  return aa.useEffect(() => {
    i && (i.current = Z);
  }, [r, i]), /* @__PURE__ */ g.jsxs("div", { className: `image-upload-container ${a || ""}`, children: [
    /* @__PURE__ */ g.jsx("div", { className: "panel-title", children: U(n, "IMAGE_UPLOAD_TITLE") }),
    /* @__PURE__ */ g.jsx("p", { className: "upload-description", children: U(n, "IMAGE_UPLOAD_DESCRIPTION") }),
    h && /* @__PURE__ */ g.jsxs("div", { className: "error-message", children: [
      "⚠️ ",
      h
    ] }),
    s === "success" && /* @__PURE__ */ g.jsx("div", { className: "success-message", children: U(n, "IMAGE_UPLOAD_SUCCESS") }),
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        ...N(),
        className: `dropzone ${Y ? "drag-active" : ""} ${q ? "drag-reject" : ""} ${r ? "has-file" : ""}`,
        children: [
          /* @__PURE__ */ g.jsx("input", { ...F() }),
          r ? /* @__PURE__ */ g.jsxs("div", { className: "file-info", children: [
            /* @__PURE__ */ g.jsx("div", { className: "file-preview", children: /* @__PURE__ */ g.jsx(
              "img",
              {
                src: URL.createObjectURL(r),
                alt: U(n, "IMAGE_UPLOAD_PREVIEW_ALT"),
                className: "preview-image"
              }
            ) }),
            s === "uploading" && /* @__PURE__ */ g.jsxs("div", { className: "upload-progress", children: [
              /* @__PURE__ */ g.jsx("div", { className: "progress-bar", children: /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: "progress-fill",
                  style: { width: `${_}%` }
                }
              ) }),
              /* @__PURE__ */ g.jsxs("p", { children: [
                U(n, "IMAGE_UPLOAD_PROGRESS"),
                " ",
                _,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ g.jsx("div", { className: "button-group", children: /* @__PURE__ */ g.jsx(
              "button",
              {
                type: "button",
                onClick: (d) => {
                  d.stopPropagation(), V();
                },
                className: "remove-button",
                children: U(n, "IMAGE_UPLOAD_REMOVE")
              }
            ) })
          ] }) : /* @__PURE__ */ g.jsx("div", { className: "dropzone-content", children: Y ? /* @__PURE__ */ g.jsxs("div", { className: "drag-message", children: [
            /* @__PURE__ */ g.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ g.jsx("p", { children: U(n, "IMAGE_UPLOAD_DROP_FILE") })
          ] }) : /* @__PURE__ */ g.jsxs("div", { className: "upload-message", children: [
            /* @__PURE__ */ g.jsx("svg", { className: "upload-icon", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ g.jsxs("p", { children: [
              /* @__PURE__ */ g.jsx("strong", { children: U(n, "IMAGE_UPLOAD_SELECT") }),
              " ",
              U(n, "IMAGE_UPLOAD_DRAG_INSTRUCTION")
            ] }),
            /* @__PURE__ */ g.jsx("p", { className: "upload-hint", children: U(n, "IMAGE_UPLOAD_HINT") })
          ] }) })
        ]
      }
    )
  ] });
}, ln = (e, a, i, n) => fetch(`${It}/reports/add`, {
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
}), Ue = document.getElementById("cw-root"), Ca = (Ue == null ? void 0 : Ue.getAttribute("data-callback")) || (Ue == null ? void 0 : Ue.dataset.callback), mt = (e, a) => {
  if (typeof a == "function") {
    a(e);
    return;
  }
  if (!Ca)
    return;
  const i = window[Ca];
  if (typeof i != "function") {
    console.warn("Host callback nicht gefunden:", Ca);
    return;
  }
  i(e);
}, sn = ({
  lang: e,
  data: a,
  onReport: i
}) => {
  const [n, o] = aa.useState(null);
  return ke(() => {
    const { token: r, category: l, auspraegung: s, location: m, timestamp: _, source: v, imageUrl: h, isPublic: R } = a;
    if (r && l && s && m && h !== null && n === null) {
      const { lat: j, lon: $, place: N } = m, F = {
        category: l,
        auspraegung: s,
        lat: j,
        lon: $,
        place: N,
        timestamp: _,
        source: v,
        imageUrl: h || "",
        isPublic: R
      };
      ln(r, {
        ...F
      }, () => {
        localStorage.setItem("lastWeatherReportTime", Date.now().toString()), o("success"), mt({ status: "success", report: F }, i);
      }, () => {
        o("error"), mt({ status: "error", report: F }, i);
      });
    }
  }, [a, i]), /* @__PURE__ */ g.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ g.jsx("div", { className: "panel-title", children: U(e, "STATUS_TITLE") }),
    /* @__PURE__ */ g.jsxs("div", { className: "panel6 status-panel", children: [
      n === "success" && /* @__PURE__ */ g.jsx("div", { className: "message success-message", children: U(e, "REPORT_SUCCESS") }),
      n === "error" && /* @__PURE__ */ g.jsx("div", { className: "message error-message", children: U(e, "REPORT_ERROR") })
    ] })
  ] });
}, ft = ["categories", "auspraegungen", "locations", "time", "upload", "status"];
function un({
  token: e,
  locations: a,
  params: i = [],
  source: n,
  isPublic: o,
  lang: r,
  onReport: l
}) {
  const m = Ne(() => a.length === 1 ? ft.filter((Q) => Q !== "locations") : [...ft], [a.length]), [_, v] = be(0), [h, R] = be(null), [j, $] = be(null), [N, F] = be(null), [Y, q] = be(Date.now()), [V, Z] = be(null), [d, ce] = be(!1), G = Qe(null);
  ke(() => {
    const Q = localStorage.getItem("lastWeatherReportTime");
    if (Q) {
      const te = Date.now() - parseInt(Q), se = 10 * 60 * 1e3;
      te < se && ce(!0);
    }
  }, []), ke(() => {
    a.length === 1 && F((Q) => Q ?? a[0]);
  }, [a]), ke(() => {
    _ >= m.length && v(Math.max(m.length - 1, 0));
  }, [_, m.length]);
  async function H() {
    const Q = m.indexOf("upload");
    if (Q !== -1 && _ === Q && G.current) {
      const te = await G.current();
      Z(te);
    }
    _ < m.length - 1 && v(_ + 1);
  }
  function P() {
    _ > 0 && v(_ - 1);
  }
  function de(Q) {
    switch (Q) {
      case "categories":
        return /* @__PURE__ */ g.jsx(
          Qt,
          {
            params: i || [],
            lang: r,
            onSelectCategory: async (te) => {
              R(te), await H();
            }
          }
        );
      case "auspraegungen":
        return /* @__PURE__ */ g.jsx(
          Je,
          {
            component: /* @__PURE__ */ g.jsx(
              ei,
              {
                category: h,
                lang: r,
                onSelectAuspraegung: async (te) => {
                  $(te), await H();
                }
              }
            ),
            onNext: H,
            onPrev: P,
            showPrev: !0,
            showNext: !1,
            lang: r
          }
        );
      case "locations":
        return /* @__PURE__ */ g.jsx(
          Je,
          {
            component: /* @__PURE__ */ g.jsx(
              ai,
              {
                locations: a,
                lang: r,
                onSelectLocation: async (te) => {
                  F(te), await H();
                }
              }
            ),
            onNext: H,
            onPrev: P,
            showPrev: !0,
            showNext: !1,
            lang: r
          }
        );
      case "time":
        return /* @__PURE__ */ g.jsx(
          Je,
          {
            component: /* @__PURE__ */ g.jsx(
              ii,
              {
                lang: r,
                onSelectTimestamp: async (te) => {
                  q(te), await H();
                }
              }
            ),
            onNext: H,
            onPrev: P,
            showPrev: !0,
            showNext: !1,
            lang: r
          }
        );
      case "upload":
        return /* @__PURE__ */ g.jsx(
          Je,
          {
            component: /* @__PURE__ */ g.jsx(
              pn,
              {
                lang: r,
                token: e,
                triggerUploadRef: G
              }
            ),
            onNext: H,
            onPrev: P,
            showPrev: !0,
            showNext: !0,
            lang: r
          }
        );
      case "status":
        return /* @__PURE__ */ g.jsx(
          Je,
          {
            component: /* @__PURE__ */ g.jsx(
              sn,
              {
                lang: r,
                data: {
                  token: e,
                  category: h,
                  auspraegung: j,
                  location: N,
                  timestamp: Y,
                  source: n,
                  imageUrl: V,
                  isPublic: o
                },
                onReport: l
              }
            ),
            onNext: H,
            onPrev: P,
            showPrev: !1,
            showNext: !1,
            lang: r
          }
        );
      default:
        return null;
    }
  }
  return /* @__PURE__ */ g.jsxs("div", { className: "slider-container", children: [
    d && /* @__PURE__ */ g.jsx("div", { className: "rate-limit-warning", children: U(r, "RATE_LIMIT_WARNING") }),
    /* @__PURE__ */ g.jsx(
      "div",
      {
        className: "slider-inner",
        style: {
          transform: `translateX(-${_ * (100 / m.length)}%)`,
          width: `${m.length * 100}%`
        },
        children: m.map((Q) => /* @__PURE__ */ g.jsx("div", { className: `panel-container panel-${Q}`, children: de(Q) }, Q))
      }
    )
  ] });
}
function Je({ component: e, onNext: a, onPrev: i, showPrev: n, showNext: o, lang: r }) {
  return /* @__PURE__ */ g.jsxs("div", { className: "panel-content", children: [
    e && e,
    /* @__PURE__ */ g.jsxs("div", { className: "panel-buttons", children: [
      n && /* @__PURE__ */ g.jsxs("a", { href: "#", onClick: (l) => {
        l.preventDefault(), i();
      }, className: "text-link", children: [
        /* @__PURE__ */ g.jsx("svg", { className: "arrow-left", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ g.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 5H1m0 0l4 4M1 5l4-4" }) }),
        U(r, "BACK")
      ] }),
      o && /* @__PURE__ */ g.jsxs("a", { href: "#", onClick: async (l) => {
        l.preventDefault(), await a();
      }, className: "text-link", children: [
        U(r, "NEXT"),
        /* @__PURE__ */ g.jsx("svg", { className: "arrow-right", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10", children: /* @__PURE__ */ g.jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 5h12m0 0L9 1m4 4L9 9" }) })
      ] })
    ] })
  ] });
}
function mn(e) {
  return `My Hello ${e}!`;
}
export {
  un as CrowdWxEditor,
  mn as helloDebug
};
