import {a as g} from "../../chunk-PEATFMNR-min.js";
import "../../chunk-P56TXV5W-min.js";
import {a as r} from "../../chunk-AYOFRO2D-min.js";
import "../../chunk-WEZX6APY-min.js";
import {a as d, b as c} from "../../chunk-PDMJRETB-min.js";
import {b as n} from "../../chunk-ODSL2YY7-min.js";
import {a} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function o({image: t, label: e, title: l, content: s, sectionId: m, videoId: i}) {
    return a("floating-card", {
        id: `floating-${i}`,
        "data-section": m || !1,
        "data-videoId": i
    }, a("div", {
        role: "button",
        title: l,
        className: "floating-card"
    }, i && a(c, {
        className: "fallback-button",
        videoId: i
    }), a("div", {
        className: "floating-card__modal-bg"
    }), a("div", {
        class: "floating-card__image-wrap css-in-view",
        "data-in-view": !0
    }, a("scale-custom", {
        className: "u-abs"
    }, a("div", {
        className: "u-abs js-scale"
    }, a("div", {
        className: "u-abs js-scale-inner"
    }, a(r, {
        id: `floating-gradient-${i}`,
        width: 100,
        height: 100,
        borderRadius: "7px"
    }), a("div", {
        className: "floating-card__image"
    }, a("button", {
        "aria-hidden": "true",
        className: "play-button",
        "aria-label": `Watch video ${l}`
    }, a("svg", {
        width: "84",
        height: "84",
        viewBox: "0 0 84 84",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, a("circle", {
        class: "js-circle",
        cx: "42",
        cy: "42",
        r: "36",
        fill: "white"
    }), a("path", {
        d: "M35 57.75V26.25L56 42L35 57.75Z",
        fill: "black"
    }))), a("div", {
        className: "floating-card__image-back"
    }, a(n, {
        ...t
    }))))))), a("div", {
        className: "floating-card__info css-in-view",
        "data-in-view": !0
    }, a("p", {
        className: "t-light glue-label"
    }, e), a("p", {
        className: "floating-card__info-title"
    }, l))), a("div", {
        className: "floating-card__modal",
        "data-modal": !0,
        "aria-modal": "true",
        role: "dialog",
        "aria-hidden": "true"
    }, a("div", {
        "data-content": !0,
        className: "floating-card__content"
    }, a("div", {
        className: "floating-card__image-video-wrap"
    }, a("div", null, a("div", {
        className: "floating-card__image-video",
        "data-player": !0
    }))), s && a("div", {
        className: "floating-card__content-text"
    }, a("p", {
        class: "content-label t-light glue-label"
    }, s.label), a("p", {
        class: "content-title"
    }, s.title), a("p", {
        class: "content-text"
    }, s.text)), a(d, {
        className: "floating-card__close"
    })), a("div", {
        class: "floating-card__backdrop",
        "data-backdrop": !0
    })))
}
function v({partial: t}) {
    return a("div", {
        "data-section": (t == null ? void 0 : t.sectionId) || !1,
        className: "floatingcards gemini-grid"
    }, a(g, {
        ...t.header
    }), a("div", {
        className: "floatingcards__grid"
    }, a("div", {
        className: "floatingcards__grid__content"
    }, t.cards && t.cards.map((e,l)=>a(o, {
        key: e.title,
        ...e
    })))), a("div", {
        className: "floatingcards__gradient"
    }, a("gradient-radial", {
        className: "radial-gradient"
    })))
}
export {v as default};
