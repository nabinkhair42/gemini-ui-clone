import {a as t} from "./chunk-PVKMAFVQ-min.js";
function o({className: e, theme: l="light"}) {
    return t("button", {
        "data-close": "true",
        "aria-label": "Close",
        className: `modal-close-button --${l} ${e}`
    }, t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none"
    }, t("path", {
        d: "M17.6822 6.27004L16.3843 4.97682L11.2573 10.1222L6.11194 4.99524L4.81873 6.29309L9.96413 11.4201L4.83714 16.5655L6.135 17.8587L11.262 12.7133L16.4074 17.8403L17.7006 16.5424L12.5552 11.4154L17.6822 6.27004Z",
        fill: "currentColor",
        "fill-opacity": "0.8"
    })))
}
var i = o;
function a({videoId: e, className: l=""}) {
    return t("a", {
        className: `${l} button-fallback`,
        rel: "noopener noreferrer",
        target: "_blank",
        href: `https://www.youtube.com/watch?v=${e}`
    }, t("svg", {
        width: "71",
        height: "71",
        viewBox: "0 0 71 71",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        title: "Play"
    }, t("path", {
        id: "ic_play_circle_filled_24px",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.8518 35.6269C0.817169 16.3069 16.469 0.598847 35.789 0.564215C55.109 0.529584 70.8171 16.1815 70.8517 35.5014C70.8863 54.8214 55.2345 70.5295 35.9145 70.5641C16.5945 70.5987 0.886431 54.9469 0.8518 35.6269ZM49.8517 35.5391L28.8235 19.8267L28.88 51.3267L49.8517 35.5391Z",
        fill: "white"
    })))
}
export {i as a, a as b};
