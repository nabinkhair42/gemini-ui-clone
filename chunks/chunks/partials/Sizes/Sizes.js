import {a as l} from "../../chunk-WEZX6APY-min.js";
import {a as e} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function d({id: r, width: a, height: i, colors: s=["#086FFF", "#FFDDB7"], timingAnimation: o=3, children: h}) {
    return e("div", {
        class: "gradient-border --shape"
    }, e("div", {
        class: "gradient-border__shape"
    }, e("svg", {
        viewBox: `0 0 ${a} ${i}`,
        width: "100%",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e(l, {
        colors: s,
        id: r,
        timingAnimation: o
    }), e("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: `url(#gradient-${r})`,
        mask: `url(#shape-${r})`
    }), e("mask", {
        id: `shape-${r}`
    }, h))))
}
var n = 2
  , t = 12
  , $ = {
    Circle: e("g", {
        transform: `translate(${50}, ${50})`
    }, e("rect", {
        fill: "black",
        stroke: "white",
        "stroke-width": n,
        x: `${-45}`,
        y: `${-45}`,
        rx: 50,
        ry: 50,
        width: `${90}`,
        height: `${90}`,
        "data-rotation": 0,
        "data-radius-enter": t,
        "data-radius-leave": 50,
        "data-x-enter": `${-35}`,
        "data-x-leave": `${-45}`,
        "data-y-enter": `${-35}`,
        "data-y-leave": `${-45}`,
        "data-width-enter": `${70}`,
        "data-width-leave": `${90}`,
        "data-height-enter": `${70}`,
        "data-height-leave": `${90}`,
        className: "js-rect"
    })),
    Rect: e("g", {
        transform: `translate(${50}, ${50})`
    }, e("rect", {
        fill: "black",
        stroke: "white",
        "stroke-width": n,
        x: `${-35}`,
        y: `${-35}`,
        rx: t,
        ry: t,
        width: `${70}`,
        height: `${70}`,
        "data-rotation": 0,
        "data-radius-enter": t * 2,
        "data-radius-leave": t,
        "data-x-enter": `${-30}`,
        "data-x-leave": `${-35}`,
        "data-y-enter": `${-30}`,
        "data-y-leave": `${-35}`,
        "data-width-enter": `${60}`,
        "data-width-leave": `${70}`,
        "data-height-enter": `${60}`,
        "data-height-leave": `${70}`,
        className: "js-rect"
    })),
    Polygon: e("g", {
        transform: `translate(${50}, ${50})`
    }, e("rect", {
        fill: "black",
        stroke: "white",
        "stroke-width": n,
        x: `${-25}`,
        y: `${-25}`,
        rx: t,
        ry: t,
        width: `${50}`,
        height: `${50}`,
        "data-rotation": 45,
        "data-radius-enter": t * 2,
        "data-radius-leave": t,
        "data-x-enter": `${-25}`,
        "data-x-leave": `${-25}`,
        "data-y-enter": `${-25}`,
        "data-y-leave": `${-25}`,
        "data-width-enter": `${50}`,
        "data-width-leave": `${50}`,
        "data-height-enter": `${50}`,
        "data-height-leave": `${50}`,
        className: "js-rect"
    }))
};
function c({partial: r}) {
    return e("section", {
        class: "gem-sizes gemini-grid"
    }, e("h2", {
        className: "gem-sizes__title t-h2-alt glue-headline css-in-view",
        "data-in-view": !0
    }, r.title), e("div", {
        class: "gem-sizes__list"
    }, r.items.map((a,i)=>e("size-custom", {
        class: "gem-sizes-item css-in-view",
        "data-in-view": !0,
        key: i
    }, e("div", {
        class: "js-hover"
    }, e(d, {
        id: `sizes-${i}`,
        width: 100,
        height: 100,
        timingAnimation: 2 + i * 1.5
    }, $[a.shape]), e("div", {
        className: "content"
    }, e("p", {
        class: "gem-sizes__name"
    }, a.name), a.label && e("p", {
        class: "gem-sizes__label"
    }, a.label))), a.tags && e("div", {
        className: "gem-sizes__tags"
    }, a.tags.map(s=>e("span", {
        className: "t-pill"
    }, s))), e("p", {
        class: "gem-sizes__text t-paragraph"
    }, " ", a.text, " ")))))
}
var u = c;
export {u as default};
