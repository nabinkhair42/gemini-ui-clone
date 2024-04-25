import {a as e} from "./chunk-PVKMAFVQ-min.js";
function n(t, i) {
    var r;
    return ((r = t == null ? void 0 : t.url) == null ? void 0 : r.path) ? `.${t.url.path}` : `.${t}`
}
function c({url: t, altText: i, width: r, height: s, className: p, context: a}) {
    return e("picture", null, e("source", {
        type: "image/webp",
        srcset: n(t, a) ? n(t, a).replace(/\.(jpg|png)/g, ".webp") : ""
    }), e("img", {
        src: n(t, a),
        loading: "lazy",
        alt: i,
        width: r,
        height: s,
        className: p
    }))
}
var o = c;
export {n as a, o as b};
