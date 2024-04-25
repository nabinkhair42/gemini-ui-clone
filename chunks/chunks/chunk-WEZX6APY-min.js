import {a as t} from "./chunk-PVKMAFVQ-min.js";
function s({id: n, colors: o=["#086FFF", "#FFDDB7"], timingAnimation: r=3}) {
    let e = o[0]
      , a = o[1];
    return t("defs", null, t("linearGradient", {
        id: `gradient-${n}`
    }, t("stop", {
        offset: "0",
        "stop-color": e
    }, t("animate", {
        attributeName: "stop-color",
        values: `${e};${a};${e}`,
        dur: `${r}s`,
        repeatCount: "indefinite"
    })), t("stop", {
        offset: "50%",
        "stop-color": a
    }, t("animate", {
        attributeName: "offset",
        values: ".5;.2;.5",
        dur: `${r * 1.05}s`,
        repeatCount: "indefinite"
    })), t("stop", {
        offset: "100%",
        "stop-color": a
    }, t("animate", {
        attributeName: "offset",
        values: "1;.9;1",
        dur: `${r * 1.05}s`,
        repeatCount: "indefinite"
    }), t("animate", {
        attributeName: "stop-color",
        values: `${a};${e};${a}`,
        dur: `${r * 1.05}s`,
        repeatCount: "indefinite"
    })), t("animateTransform", {
        attributeName: "gradientTransform",
        type: "rotate",
        from: "0 .5 .5",
        to: "360 .5 .5",
        dur: `${r * 1.8}s`,
        repeatCount: "indefinite"
    })), t("linearGradient", {
        id: "gradient"
    }, t("stop", {
        offset: "0%",
        "stop-color": a,
        "stop-opacity": "0"
    }, t("animate", {
        attributeName: "stop-color",
        values: `${a};${e}`,
        dur: "10s",
        repeatCount: "indefinite"
    })), t("stop", {
        offset: "50",
        "stop-color": e
    }, t("animate", {
        attributeName: "stop-color",
        values: `${e};${a};${e}`,
        dur: "10s",
        repeatCount: "indefinite"
    })), t("animateTransform", {
        attributeName: "gradientTransform",
        type: "rotate",
        from: "0 .5 .5",
        to: "360 .5 .5",
        dur: `${r * 1.4}s`,
        repeatCount: "indefinite"
    })))
}
export {s as a};
