import {
    a as _,
    i as f
} from "./chunk-NZ4QNFB2.mjs";
var u = "default" in f ? _ : f,
    o = {},
    y = u,
    i = Symbol.for("react.element"),
    c = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    m = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function p(t, r, n) {
    var e, a = {},
        s = null,
        l = null;
    n !== void 0 && (s = "" + n), r.key !== void 0 && (s = "" + r.key), r.ref !== void 0 && (l = r.ref);
    for (e in r) d.call(r, e) && !v.hasOwnProperty(e) && (a[e] = r[e]);
    if (t && t.defaultProps)
        for (e in r = t.defaultProps, r) a[e] === void 0 && (a[e] = r[e]);
    return {
        $$typeof: i,
        type: t,
        key: s,
        ref: l,
        props: a,
        _owner: m.current
    }
}
o.Fragment = c;
o.jsx = p;
o.jsxs = p;
var E = o.Fragment,
    R = o.jsx,
    S = o.jsxs;
export {
    R as a, S as b
};
//# sourceMappingURL=chunk-IBXLZGAD.mjs.map