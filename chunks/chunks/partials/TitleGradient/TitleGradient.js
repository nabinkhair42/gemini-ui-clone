import {a as o} from "../../chunk-P56TXV5W-min.js";
import {a as t} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function s({partial: e}) {
    return t("section", {
        "data-section": (e == null ? void 0 : e.sectionId) || !1,
        className: `title-gradient title-gradient--${e.size}`
    }, t("div", {
        className: "title-gradient__sticky js-sticky"
    }, (e == null ? void 0 : e.paragraphs) && (e == null ? void 0 : e.paragraphs.map((n,d)=>t("h2", {
        className: "title-gradient__title t-h2-alt glue-headline"
    }, t("span", {
        dangerouslySetInnerHTML: {
            __html: n.text
        }
    }), t("span", {
        class: "title-gradient__gradient"
    }, " ", n.gradientText), t("span", {
        className: "js-stagger",
        dangerouslySetInnerHTML: {
            __html: n.textAfter
        }
    })))), (e == null ? void 0 : e.button) && t(o, {
        ...e == null ? void 0 : e.button
    })))
}
var l = s;
export {l as default};
