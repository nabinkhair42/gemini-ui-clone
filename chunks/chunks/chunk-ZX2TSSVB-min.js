import {a as e, b as s} from "./chunk-PVKMAFVQ-min.js";
var c = ({row: t, isLast: r})=>{
    var n, i;
    let a = (n = t.values) == null ? void 0 : n[0]
      , l = (i = t.values) == null ? void 0 : i[1];
    return e("tr", {
        className: `graph-table-row ${r ? "gtr-is_last_row" : ""}`
    }, e("th", {
        className: `gtr-cell gtr-group-title ${(t == null ? void 0 : t.groupTitle) ? "gtr-show" : ""}`
    }, e("div", {
        className: "gtr-col"
    }, (t == null ? void 0 : t.groupTitle) || "")), e("td", {
        className: `gtr-mobile-spacer ${(t == null ? void 0 : t.groupTitle) ? "gtr-show" : ""}`
    }, e("div", {
        className: "gtr-mobile-bg"
    })), e("td", {
        className: `gtr-mobile-spacer ${(t == null ? void 0 : t.groupTitle) ? "gtr-show" : ""}`
    }), e("td", {
        className: "gtr-cell gtr-header",
        scope: "row"
    }, e("div", {
        className: "gtr-col"
    }, t.title, e("span", {
        className: "gtr-mobile-description",
        dangerouslySetInnerHTML: {
            __html: t.description
        }
    }, t.description))), e("td", {
        className: "gtr-description gtr-cell"
    }, e("div", {
        className: "gtr-col",
        dangerouslySetInnerHTML: {
            __html: t.description
        }
    }, t.description)), e("td", {
        className: "gtr-cell gtr-gemini"
    }, e("div", {
        className: "gtr-col"
    }, a ? e(s, null, e("span", {
        className: `gtr-value js-animate ${a.highlight || typeof a.highlight == "undefined" && a.value >= (l == null ? void 0 : l.value) ? "gtr-highlight" : ""}`,
        "data-no-percent": a.noPercent ? "true" : "false"
    }, a.value, a.noPercent ? "" : "%"), e("span", {
        className: "gtr-caption",
        dangerouslySetInnerHTML: {
            __html: a.caption
        }
    }, a.caption)) : "")), e("td", {
        className: "gtr-cell gtr-sota"
    }, e("div", {
        className: "gtr-col"
    }, l ? e(s, null, e("span", {
        className: `gtr-value js-animate ${l.highlight || typeof l.highlight == "undefined" && l.value > (a == null ? void 0 : a.value) ? "gtr-highlight" : ""}`,
        "data-no-percent": a.noPercent ? "true" : "false"
    }, l.value, l.noPercent ? "" : "%"), e("span", {
        className: "gtr-caption",
        dangerouslySetInnerHTML: {
            __html: l.caption
        }
    }, l.caption)) : "")))
}
  , p = c;
export {p as a};
