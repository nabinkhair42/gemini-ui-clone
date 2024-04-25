import {a as h} from "../../chunk-P56TXV5W-min.js";
import {a as g} from "../../chunk-ZX2TSSVB-min.js";
import {a, b as i} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
var d = e=>e === "classic" ? "gt-classic" : e === "gemini" ? "gt-heading-gemini" : e === "gpt" ? "gt-heading-gpt" : ""
  , u = e=>({
    ...e,
    rows: e.rows.map((t,r)=>r === 0 ? {
        ...t,
        groupTitle: e.title
    } : t)
})
  , m = e=>e.map(u)
  , _ = ({table: e})=>{
    let t = m(e.groups)
      , r = e.groups.reduce((s,n)=>s + n.rows.length, 0)
      , p = 0;
    return a("table-wrapper", {
        className: "gt-container"
    }, a("div", {
        className: "gt-collapsable",
        "data-collapsable": !0
    }, a("div", {
        className: "gt-size-helper",
        "data-size-indicator": !0
    }, e.heading ? a("p", {
        className: "gt-heading"
    }, e.heading) : "", a("table", {
        className: "graph-table"
    }, a("thead", {
        className: "gt-head"
    }, a("tr", {
        className: "gt-head-row"
    }, a("th", {
        className: "gt-head-cell gt-mobile-heading"
    }, e.heading), e.columns.map(s=>a("th", {
        className: `gt-head-cell ${d(s.style)}`
    }, a("div", {
        className: "gt-heading-wrapper"
    }, s.subTitle ? a(i, null, a("span", {
        className: "gt-heading-title"
    }, s.title), a("span", {
        className: "gt-heading-subheading",
        dangerouslySetInnerHTML: {
            __html: s.subTitle
        }
    })) : a("span", {
        className: "gt-heading-subheading",
        dangerouslySetInnerHTML: {
            __html: s.subTitle
        }
    })))))), a("tbody", {
        className: "gt-body"
    }, t.map(s=>s.rows.map((n,c)=>(p++,
    a(i, null, a(g, {
        row: n,
        isLast: c === s.rows.length - 1
    }), p === 2 ? a("tr", {
        className: "gt-wrapper-indicator",
        "aria-hidden": !0,
        "data-wrapper-indicator": !0
    }) : "")))))), a("p", {
        className: "gt-caption",
        dangerouslySetInnerHTML: {
            __html: e.caption
        }
    }))), a("div", {
        "data-button-wrapper": !0,
        className: "gt-collapse-button-wrapper"
    }, a("button", {
        "data-collapse-button": !0,
        className: "gt-collapse-button gt-collapse-button-style",
        "aria-label": `Show all (${r})`
    }, `Show all (${r})`)))
}
  , l = _;
var o = ({subHeading: e, url: t, className: r})=>t ? a("a", {
    href: t,
    target: "_blank",
    className: `graph-section__graph__sub-heading sub-heading-link ${r || ""}`,
    dangerouslySetInnerHTML: {
        __html: e
    }
}) : a("p", {
    className: `graph-section__graph__sub-heading ${r || ""}`,
    dangerouslySetInnerHTML: {
        __html: e
    }
})
  , v = ({partial: e})=>{
    var t, r;
    return a("section-graph", {
        className: "graph-section"
    }, e.heading && a("h3", {
        className: "graph-section__heading"
    }, e.heading), a("div", {
        className: "graph-section__graph-container"
    }, a("graph-wrapper", {
        "data-top-elem": "#graph-gemini-wrapper",
        "data-bottom-elem": "#sota-heading",
        "data-line-elem": "#chart",
        "data-line-mobile-elem": "#chart-mobile",
        "data-line-wrapper-elem": "#chart_wrapper",
        "data-chart-animation": "#chart-animation",
        className: "graph-section__graph"
    }, a("div", {
        className: "point",
        id: "top"
    }), a("div", {
        className: "point",
        id: "bottom"
    }), a("div", {
        className: "graph-section__graph__gemini-value",
        id: "graph-gemini-wrapper"
    }, a(o, {
        subHeading: e.graph.values.gemini.subHeading,
        className: "gemini-top-heading"
    }), a("div", {
        className: "graph-section__graph__gemini-value__value-wrapper"
    }, a("p", {
        className: "graph-section__graph__gemini-value__animated-value js-animate",
        "data-to-fixed": "1"
    }, e.graph.values.gemini.value), a("p", {
        "aria-hidden": !0,
        className: "graph-section__graph__gemini-value__value"
    }, e.graph.values.gemini.value)), e.graph.values.gemini.caption && a("p", {
        className: "graph-section__graph__sub-heading graph-section__graph__gemini-value__caption"
    }, e.graph.values.gemini.caption)), a("div", {
        className: "graph-section__graph__scale-value"
    }, a("p", {
        className: "graph-section__graph__scale-value__value"
    }, e.graph.values.middle.value), a(o, {
        subHeading: e.graph.values.middle.subHeading,
        url: e.graph.values.middle.url
    })), a("div", {
        className: "graph-section__graph__sota-value"
    }, a("div", {
        className: "graph-section__graph__sota-value__value-wrapper"
    }, a("p", {
        className: "graph-section__graph__sota-value__value",
        "data-to-fixed": "1",
        "aria-hidden": !0
    }, e.graph.values.sota.value), a("p", {
        id: "sota-heading",
        className: "graph-section__graph__sota-value__animated-value js-animate",
        "data-to-fixed": "1"
    }, e.graph.values.sota.value)), a(o, {
        subHeading: e.graph.values.sota.subHeading
    }), e.graph.values.sota.caption && a("p", {
        className: "graph-section__graph__sota-value__paragraph",
        dangerouslySetInnerHTML: {
            __html: e.graph.values.sota.caption
        }
    })), a("div", {
        className: "chart-animation",
        id: "chart-animation",
        "data-in-view": !0,
        "data-in-view-once": !0
    }, a("div", {
        className: "chart-animation-inner"
    }, a("div", {
        id: "chart_wrapper",
        className: "chart-wrapper"
    }, a("svg", {
        id: "chart-mobile",
        width: "442",
        height: "30",
        viewBox: "0 0 442 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, a("path", {
        d: "M1.86391 26.361L19.6592 10.343L34.2663 6.45284L43.2323 9.59318L55.0296 13.7252L78.9116 3.01777L87.8775 6.15811L98.046 13.4281L114.471 4.34714L127.258 16.2426L140.897 13.6029L152.036 9.02766L167.397 7.52094L177.733 3.72422L188.68 11.7967L203.831 3.32894L219.028 2.2941L242.081 4.54093L250.457 4.82597L260.839 8.46215L268.485 4.78282L290.192 12.3857C296.32 11.5298 309.24 9.73305 311.902 9.39386C314.563 9.05467 331.18 6.78684 339.156 5.69533L355.201 11.3149L403.029 16.9416L428.866 23.342L441.135 27.6393",
        stroke: "url(#paint0_linear_844_5220)",
        "stroke-width": "3"
    }), a("defs", null, a("linearGradient", {
        id: "paint0_linear_844_5220",
        x1: "179.485",
        y1: "-420.1",
        x2: "507.493",
        y2: "-305.214",
        gradientUnits: "userSpaceOnUse"
    }, a("stop", {
        "stop-color": "white"
    }), a("stop", {
        offset: "1",
        "stop-color": "#4FABFF"
    })))), a("svg", {
        id: "chart",
        width: "442",
        height: "30",
        viewBox: "0 0 442 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, a("path", {
        d: "M1.86391 26.361L19.6592 10.343L34.2663 6.45284L43.2323 9.59318L55.0296 13.7252L78.9116 3.01777L87.8775 6.15811L98.046 13.4281L114.471 4.34714L127.258 16.2426L140.897 13.6029L152.036 9.02766L167.397 7.52094L177.733 3.72422L188.68 11.7967L203.831 3.32894L219.028 2.2941L242.081 4.54093L250.457 4.82597L260.839 8.46215L268.485 4.78282L290.192 12.3857C296.32 11.5298 309.24 9.73305 311.902 9.39386C314.563 9.05467 331.18 6.78684 339.156 5.69533L355.201 11.3149L403.029 16.9416L428.866 23.342L441.135 27.6393",
        stroke: "url(#paint0_linear_844_5219)",
        "stroke-width": "3"
    }), a("defs", null, a("linearGradient", {
        id: "paint0_linear_844_5219",
        x1: "179.485",
        y1: "-420.1",
        x2: "507.493",
        y2: "-305.214",
        gradientUnits: "userSpaceOnUse"
    }, a("stop", {
        "stop-color": "white"
    }), a("stop", {
        offset: "1",
        "stop-color": "#4FABFF"
    })))))))), a("p", {
        className: "graph-section__graph-paragraph"
    }, e.graph.paragraph)), a("div", {
        className: "graph-paragraph-wrapper"
    }, a("p", {
        className: "graph-paragraph"
    }, e.preParagraph)), a(l, {
        table: (t = e.tables) === null || t === void 0 ? void 0 : t[0]
    }), a("div", {
        className: "graph-paragraph-wrapper"
    }, a("p", {
        className: "graph-paragraph"
    }, e.paragraph)), a(l, {
        table: (r = e.tables) === null || r === void 0 ? void 0 : r[1]
    }), a(h, {
        label: e.button.label,
        url: e.button.url,
        target: e.button.target,
        arrow: !0,
        className: "graph-button"
    }))
}
  , I = v;
export {I as default};
