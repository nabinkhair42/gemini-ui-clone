import {a as n} from "../../chunk-KKXVTNPV-min.js";
import {b as a} from "../../chunk-IPI3O67L-min.js";
import {a as o} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function s({partial: e}) {
    return o("hero-component", {
        className: "hero",
        id: "content",
        "data-section": (e == null ? void 0 : e.sectionId) || !1
    }, o("div", {
        className: "hero__overflow"
    }, o("gradient-radial", {
        className: "hero__overflow__gradient radial-gradient js-gradient"
    })), o("div", {
        className: "hero__main"
    }, o("h1", {
        "data-in-view": !0,
        className: "hero__main__title glue-hidden",
        role: "heading"
    }, o("span", {
        className: "word"
    }, "Welcome"), "\xA0", o("span", {
        className: "word"
    }, "to"), "\xA0", o("br", null), o("span", {
        className: "word"
    }, "the"), "\xA0", o("span", {
        className: "hero__main__inline-logo word"
    }, o("span", {
        className: "hero__main__inline-logo__text"
    }, "Gemini"), o("div", {
        className: "hero__main__inline-logo__logo-wrapper"
    }, o(n, {
        id: "1"
    }), o("div", {
        className: "hero__main__inline-logo__logo-blur js-blur"
    }, o(n, {
        id: "1-blur"
    })))), " ", o("span", {
        className: "word"
    }, "era")), (e == null ? void 0 : e.button) && o(a, {
        ...e == null ? void 0 : e.button,
        className: "js-button",
        "data-in-view": !0
    })))
}
var t = s;
export {t as default};
