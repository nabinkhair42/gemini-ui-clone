import {a as n} from "../../chunk-P56TXV5W-min.js";
import {a as t} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function o({partial: e}) {
    return t("div", {
        "data-section": (e == null ? void 0 : e.sectionId) || !1,
        className: "bard glue-grid"
    }, t("div", {
        className: "bard__content u-flex-center"
    }, t("p", {
        className: "glue-headline t-h2"
    }, e.title), t("div", {
        className: "bard__content__meta"
    }, e.paragraph && t("p", {
        className: "t-paragraph",
        dangerouslySetInnerHTML: {
            __html: e.paragraph
        }
    }), e.button && t(n, {
        ...e.button
    }), e.buttonSecondary && t(n, {
        ...e.buttonSecondary
    }))))
}
export {o as default};
