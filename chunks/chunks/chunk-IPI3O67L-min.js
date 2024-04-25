import {a as e} from "./chunk-PVKMAFVQ-min.js";
var o;
(function(a) {
    a.HighEmphasis = "high-emphasis",
    a.MediumEmphasis = "medium-emphasis",
    a.LowEmphasis = "low-emphasis"
}
)(o || (o = {}));
function m({label: a, url: i, ariaLabel: r, onClick: u, className: n, arrow: s, target: l, style: t, ...c}) {
    return e("a", {
        className: `custom-button glue-button ${s ? "glue-button--icon-right" : ""} ${n} ${t ? `custom-button--${t}` : ""}`,
        href: i,
        "aria-label": r,
        onClick: u,
        target: l || "_self",
        ...c
    }, e("span", {
        className: "button__label"
    }, a), s && e("svg", {
        role: "presentation",
        "aria-hidden": "true",
        class: "glue-icon glue-icon--arrow-forward"
    }, e("use", {
        href: "./static/icons/glue-icons.svg#arrow-forward"
    })))
}
var g = m;
export {o as a, g as b};
