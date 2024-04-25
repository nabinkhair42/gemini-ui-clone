import {a as e} from "./chunk-PVKMAFVQ-min.js";
var i;
(function(a) {
    a.HighEmphasis = "high-emphasis",
    a.MediumEmphasis = "medium-emphasis",
    a.LowEmphasis = "low-emphasis"
}
)(i || (i = {}));
function u({label: l, url: t, ariaLabel: o, onClick: a, className: g, arrow: r, target: m, style: s, ...n}) {
    return e("a", {
        className: `custom-button glue-button ${r ? "glue-button--icon-right" : ""} ${g} ${s ? `custom-button--${s}` : ""}`,
        href: t,
        "aria-label": o,
        onClick: a,
        target: m || "_self",
        ...n
    }, e("span", {
        className: "button__label"
    }, l), r && e("svg", {
        role: "presentation",
        "aria-hidden": "true",
        class: "glue-icon glue-icon--arrow-forward"
    }, e("use", {
        href: "./static/icons/glue-icons.svg#arrow-forward"
    })))
}
var p = u;
export {p as a};
