import ae, { useState as R, useEffect as se } from "react";
var b = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function oe() {
  if (z) return h;
  z = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function E(c, s, u) {
    var m = null;
    if (u !== void 0 && (m = "" + u), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      u = {};
      for (var S in s)
        S !== "key" && (u[S] = s[S]);
    } else u = s;
    return s = u.ref, {
      $$typeof: r,
      type: c,
      key: m,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return h.Fragment = a, h.jsx = E, h.jsxs = E, h;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ce() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case N:
          return "Profiler";
        case L:
          return "StrictMode";
        case q:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case F:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function E(e) {
      try {
        a(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), a(e);
      }
    }
    function c(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === F)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = G.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (K.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function S(e, t) {
      function o() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function I() {
      var e = r(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, t, o, l, C, T, x, j) {
      return o = T.ref, e = {
        $$typeof: A,
        type: e,
        key: t,
        props: T,
        _owner: C
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: I
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, t, o, l, C, T, x, j) {
      var i = t.children;
      if (i !== void 0)
        if (l)
          if (ne(i)) {
            for (l = 0; l < i.length; l++)
              v(i[l]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(i);
      if (K.call(t, "key")) {
        i = r(e);
        var f = Object.keys(t).filter(function(Ee) {
          return Ee !== "key";
        });
        l = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", Y[i + l] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          i,
          f,
          i
        ), Y[i + l] = !0);
      }
      if (i = null, o !== void 0 && (E(o), i = "" + o), m(t) && (E(t.key), i = "" + t.key), "key" in t) {
        o = {};
        for (var k in t)
          k !== "key" && (o[k] = t[k]);
      } else o = t;
      return i && S(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        i,
        T,
        C,
        s(),
        o,
        x,
        j
      );
    }
    function v(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var d = ae, A = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), V = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), G = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, ne = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var P, W = {}, U = d["react-stack-bottom-frame"].bind(
      d,
      u
    )(), y = H(c(u)), Y = {};
    O.Fragment = _, O.jsx = function(e, t, o, l, C) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return g(
        e,
        t,
        o,
        !1,
        l,
        C,
        T ? Error("react-stack-top-frame") : U,
        T ? H(c(e)) : y
      );
    }, O.jsxs = function(e, t, o, l, C) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return g(
        e,
        t,
        o,
        !0,
        l,
        C,
        T ? Error("react-stack-top-frame") : U,
        T ? H(c(e)) : y
      );
    };
  }()), O;
}
var Z;
function le() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? b.exports = oe() : b.exports = ce()), b.exports;
}
var n = le();
const w = {
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
Object.entries(w).map(([r, a]) => ({
  category: r,
  auspraegungen: a
}));
const ie = () => Object.entries(w).map(([r]) => r), ue = (r) => w[r], _e = {
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
}, B = (r) => _e[r] || r, Ne = ({ onSelectCategory: r }) => /* @__PURE__ */ n.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ n.jsx("div", { className: "categories-header", children: "Kategorien" }),
  ie().map((a) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        r(a);
      },
      children: B(a)
    },
    a
  ))
] }), Te = ({ category: r, onSelectAuspraegung: a }) => /* @__PURE__ */ n.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ n.jsx("div", { className: "categories-header", children: r ? B(r) : "" }),
  r && ue(r).map((E) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(E);
      },
      children: B(E)
    },
    E
  ))
] }), me = ({ locations: r, onSelectLocation: a }) => /* @__PURE__ */ n.jsxs("div", { className: "categories-container", children: [
  /* @__PURE__ */ n.jsx("div", { className: "categories-header", children: "Standort" }),
  r.map((E) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "category-item",
      onClick: () => {
        a(E);
      },
      children: E.place
    },
    E.place
  ))
] });
function de(r, a) {
  const E = typeof r == "number" ? new Date(r) : r;
  return a.map(({ label: c, minutes: s }) => ({
    label: c,
    value: Math.floor(new Date(E.getTime() - s * 60 * 1e3).getTime() / 1e3)
    // Unix-Timestamp in Sekunden
  }));
}
const Ce = ({ onSelectTimestamp: r }) => {
  const a = Date.now(), c = de(a, [
    { label: "jetzt", minutes: 0 },
    { label: "vor 10 Minuten", minutes: 10 },
    { label: "vor 20 Minuten", minutes: 20 },
    { label: "vor 30 Minuten", minutes: 30 },
    { label: "vor eine Stunde", minutes: 60 }
  ]);
  return /* @__PURE__ */ n.jsxs("div", { className: "categories-container", children: [
    /* @__PURE__ */ n.jsx("div", { className: "categories-header", children: "Zeit" }),
    c.map((s) => /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "category-item",
        onClick: () => {
          r(s.value);
        },
        children: s.label
      },
      s.value
    ))
  ] });
}, Se = "http://localhost:3001/data", fe = (r, a, E, c) => fetch(`${Se}/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    token: String(r)
  },
  body: JSON.stringify({
    category: a.category,
    auspraegung: a.auspraegung,
    location: a.location,
    timestamp: a.timestamp * 1e3
  })
}).then(async (s) => {
  if (s.ok)
    E();
  else {
    const u = await s.json();
    console.log(u);
  }
}).catch(() => {
  c();
});
function Ae({
  token: r,
  locations: a
}) {
  const [E, c] = R(0), [s, u] = R(null), [m, S] = R(null), [I, p] = R(null), [g, v] = R(Date.now()), [d, A] = R(null);
  function D(N) {
    c(N);
  }
  function _() {
    E < 4 && c(E + 1);
  }
  function L() {
    E > 0 && c(E - 1);
  }
  return se(() => {
    r && s && m && I && E === 4 && d === null && fe(r, {
      category: s,
      auspraegung: m,
      location: I,
      timestamp: g
    }, () => {
      D(4), A("success");
    }, () => {
      A("error");
    });
  }, [E]), /* @__PURE__ */ n.jsx("div", { className: "slider-container", children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "slider-inner",
      style: {
        transform: `translateX(-${E * 20}%)`,
        width: "500%"
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "panel panel1", children: /* @__PURE__ */ n.jsx(
          Ne,
          {
            onSelectCategory: (N) => {
              u(N), _();
            }
          }
        ) }),
        /* @__PURE__ */ n.jsx("div", { className: "panel panel2", children: /* @__PURE__ */ n.jsx(
          M,
          {
            component: /* @__PURE__ */ n.jsx(
              Te,
              {
                category: s,
                onSelectAuspraegung: (N) => {
                  S(N), _();
                }
              }
            ),
            onNext: _,
            onPrev: L,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ n.jsx("div", { className: "panel panel3", children: /* @__PURE__ */ n.jsx(
          M,
          {
            component: /* @__PURE__ */ n.jsx(me, { locations: a, onSelectLocation: (N) => {
              p(N), _();
            } }),
            onNext: _,
            onPrev: L,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ n.jsx("div", { className: "panel panel4", children: /* @__PURE__ */ n.jsx(
          M,
          {
            component: /* @__PURE__ */ n.jsx(Ce, { onSelectTimestamp: (N) => {
              v(N), _();
            } }),
            onNext: _,
            onPrev: L,
            showPrev: !0,
            showNext: !1
          }
        ) }),
        /* @__PURE__ */ n.jsxs("div", { className: "panel panel5 status-panel", children: [
          d === "success" && /* @__PURE__ */ n.jsx("div", { className: "message success-message", children: "Wettermeldung erfolgreich gesendet!" }),
          d === "error" && /* @__PURE__ */ n.jsx("div", { className: "message error-message", children: "Fehler beim Senden der Wettermeldung!" })
        ] })
      ]
    }
  ) });
}
function M({ component: r, onNext: a, onPrev: E, showPrev: c, showNext: s }) {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    r && r,
    /* @__PURE__ */ n.jsxs("div", { className: "panel-buttons", children: [
      c && /* @__PURE__ */ n.jsx("button", { onClick: E, children: "Zurück" }),
      s && /* @__PURE__ */ n.jsx("button", { onClick: a, children: "Weiter" })
    ] })
  ] });
}
function Le(r) {
  return `My Hello ${r}!`;
}
export {
  Ae as CrowdWxEditor,
  Le as helloDebug
};
