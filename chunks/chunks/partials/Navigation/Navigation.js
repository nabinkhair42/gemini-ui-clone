import {a} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function t({partial: n}) {
    return a("div", {
        className: "navigation_container"
    }, a("navigation-sticky-wrapper", {
        "data-stop-section-id": `#${n.navigationStopId}`,
        "data-navigation": "#navigation",
        className: "navigation_sticky-wrapper"
    }, a("nav", {
        className: "navigation",
        id: "navigation"
    }, a("navigation-manager", {
        className: "navigation_manager"
    }, a("ul", {
        className: "navigation_link-wrapper",
        id: "navigation_link_wrapper"
    }, a("li", {
        "aria-hidden": !0,
        className: "navigation_mobile-spacer-wrapper"
    }, a("navigation-spacer", {
        className: "navigation_mobile-spacer",
        "data-sibling": 0
    })), n.items.map((i,e)=>a("li", {
        key: `${i.label}-${e}`,
        id: `navigation_item-${e}`,
        className: "navigation_link",
        "data-navigation-id": i.id
    }, a("a", {
        href: `#${i.id}`
    }, a("span", null, i.label)))), a("li", {
        "aria-hidden": !0,
        className: "navigation_mobile-spacer-wrapper"
    }, a("navigation-spacer", {
        className: "navigation_mobile-spacer",
        "data-sibling": n.items.length - 1
    }, "\xA0"))), a("div", {
        className: "indicator_wrapper",
        id: "indicator_wrapper"
    }, a("div", {
        className: "mobile_indicator",
        id: "mobile_indicator"
    }))))))
}
var r = t;
export {r as default};
