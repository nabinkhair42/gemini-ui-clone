import {a as d} from "../../chunk-PEATFMNR-min.js";
import "../../chunk-P56TXV5W-min.js";
import {b as a} from "../../chunk-AFKMFZLY-min.js";
import {a as i, b as l} from "../../chunk-PDMJRETB-min.js";
import {a as t} from "../../chunk-ODSL2YY7-min.js";
import {a as e} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
var c = /\.(mp4|webm|ogg|avi|mov|wmv)/i
  , n = a(c)
  , r = ({partial: o})=>{
    let {poster: s} = o
      , m = n(t(s.url));
    return e("div", {
        class: "mi__wrap",
        "data-section": (o == null ? void 0 : o.sectionId) || !1
    }, o.header && e(d, {
        ...o.header
    }), e("mask-asset", {
        className: "mi_container"
    }, e("div", {
        className: "mi_modal",
        "data-modal": !0,
        "aria-hidden": "true",
        "aria-modal": "true"
    }, e("div", {
        className: "mi_modal__content"
    }, e(i, {
        className: "mi_modal__close"
    }), e("div", null, e("div", {
        className: "mi_mask__iframe",
        "data-player": !0,
        "data-videoid": o.videoId
    }))), e("div", {
        className: "mi_modal__blurry-background",
        "data-background": !0,
        role: "button",
        "aria-label": "close modal"
    })), e("scale-custom", {
        className: "mi_mask"
    }, e("div", {
        className: "mi_asset js-scale"
    }, e("div", {
        className: "u-abs js-scale-inner"
    }, o.videoId && e(l, {
        className: "mi_button-fallback",
        videoId: o.videoId
    }), o.videoId && e("button", {
        role: "button",
        tabIndex: 0,
        className: "mi_button",
        "aria-hidden": !0,
        "aria-label": `Watch Video ${o.assetText}`
    }, e("svg", {
        width: "84",
        height: "84",
        viewBox: "0 0 84 84",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("circle", {
        class: "js-circle",
        cx: "42",
        cy: "42",
        r: "36",
        fill: "white"
    }), e("path", {
        d: "M35 57.75V26.25L56 42L35 57.75Z",
        fill: "black"
    }))), m ? e("video", {
        src: t(s.url),
        autoPlay: !0,
        playsInline: !0,
        "data-video-preview": !0,
        muted: !0,
        loop: !0
    }) : e("img", {
        src: t(s.url),
        loading: "lazy",
        alt: (s == null ? void 0 : s.altText) || "",
        width: s.width,
        height: s.height
    }))))), e("div", {
        class: "mi_info css-in-view",
        "data-in-view": !0
    }, e("p", {
        class: "mi_label"
    }, o.assetLabel), e("p", {
        class: "mi_text"
    }, o.assetText)))
}
  , w = r;
export {w as default};
