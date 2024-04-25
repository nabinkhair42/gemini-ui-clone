import {a as i} from "./chunk-WEZX6APY-min.js";
import {a as e} from "./chunk-PVKMAFVQ-min.js";
function c({id: r, width: n, height: o, colors: s=["#086FFF", "#FFDDB7"], timingAnimation: a=3, borderRadius: t="30px"}) {
    return e("div", {
        class: "gradient-border"
    }, e("div", {
        class: "gradient-border__shape"
    }, e("svg", {
        viewBox: `0 0 ${n} ${o}`,
        width: "100%",
        height: "100%",
        fill: "none",
        preserveAspectRatio: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e(i, {
        colors: s,
        id: r,
        timingAnimation: a
    }), e("rect", {
        x: "0",
        y: "0",
        rx: t,
        ry: t,
        width: "100%",
        height: "100%",
        fill: `url(#gradient-${r})`,
        mask: `url(#shape-${r})`,
        preserveAspectRatio: "none",
        "vector-effect": "non-scaling-stroke"
    }), e("mask", {
        id: `shape-${r}`
    }, e("rect", {
        x: "0",
        y: "0",
        rx: t,
        ry: t,
        "vector-effect": "non-scaling-stroke",
        width: "100%",
        height: "100%",
        fill: "black",
        stroke: "white",
        preserveAspectRatio: "none",
        "stroke-width": "10"
    })))))
}
export {c as a};
