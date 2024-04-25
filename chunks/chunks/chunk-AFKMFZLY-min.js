var s = (t,e)=>{
    let o = {
        ...t
    };
    for (let n in o)
        o[n] = (e == null ? void 0 : e[n]) === void 0 ? o[n] : e[n];
    return o
}
;
var r = t=>e=>t.test(e);
export {s as a, r as b};
