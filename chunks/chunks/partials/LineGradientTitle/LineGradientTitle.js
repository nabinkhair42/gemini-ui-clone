import {a as n} from "../../chunk-P56TXV5W-min.js";
import {a as i} from "../../chunk-ODSL2YY7-min.js";
import {a as t} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function s({partial: e}) {
    return t("line-gradient-title", {
        "data-section": (e == null ? void 0 : e.sectionId) || !1,
        className: "line-gradient-title"
    }, t("div", {
        className: "line-gradient-title__sticky js-sticky"
    }, t("div", {
        className: "line-gradient-title__lottie js-animation"
    }, t("img", {
        src: i("/static/images/StartBuilding_001_BG.png"),
        width: "1500",
        height: "500",
        loading: "lazy",
        alt: "Line background"
    })), t("div", {
        className: "line-gradient-title__sticky__content js-content"
    }, t("div", {
        className: "line-gradient-title__sticky__content__head "
    }, t("h2", {
        className: "section-title__title t-h2 glue-headline css-in-view",
        "data-in-view": !0
    }, e.title), t("p", {
        className: "section-title__text t-paragraph css-in-view",
        "data-in-view": !0
    }, e.text)), e.button && t(n, {
        ...e.button,
        className: "custom-button--white css-in-view",
        "data-in-view": !0
    }))))
}
var c = s;
export {c as default};
