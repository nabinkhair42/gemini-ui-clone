import {a as o} from "./chunk-P56TXV5W-min.js";
import {a as t, b as l} from "./chunk-PVKMAFVQ-min.js";
function p({title: i, gradient: n, subtitle: s, paragraph: a, buttons: e, small: r}) {
    return t("div", {
        className: "section-title"
    }, i && t("h2", {
        className: `section-title__title ${r ? "t-h2-alt" : "t-h2"} glue-headline css-in-view`,
        "data-in-view": !0
    }, t("span", {
        dangerouslySetInnerHTML: {
            __html: i
        }
    }), n && t(l, null, t("br", null), t("span", {
        dangerouslySetInnerHTML: {
            __html: n
        },
        className: "t-gradient"
    }))), t("div", null, s && t("h3", {
        className: "section-title__subtitle t-h3",
        "data-in-view": !0,
        dangerouslySetInnerHTML: {
            __html: s
        }
    }), a && t("p", {
        className: "section-title__text t-paragraph glue-card__description css-in-view",
        "data-in-view": !0,
        dangerouslySetInnerHTML: {
            __html: a
        }
    })), e && t("div", {
        class: "section-title__buttons"
    }, e && e.map(c=>t(o, {
        ...c,
        "data-in-view": !0,
        className: "css-in-view"
    }))))
}
export {p as a};
