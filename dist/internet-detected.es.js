import ce, { useRef as pn, useDebugValue as Xt, createElement as hn, useContext as mn, useState as gn, useCallback as yn, useEffect as vn } from "react";
import bn from "react-dom";
var Et = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function wn() {
  if (Jt) return De;
  Jt = 1;
  var e = ce, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, h) {
    var p, m = {}, b = null, S = null;
    h !== void 0 && (b = "" + h), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (p in l) o.call(l, p) && !s.hasOwnProperty(p) && (m[p] = l[p]);
    if (f && f.defaultProps) for (p in l = f.defaultProps, l) m[p] === void 0 && (m[p] = l[p]);
    return { $$typeof: t, type: f, key: b, ref: S, props: m, _owner: a.current };
  }
  return De.Fragment = r, De.jsx = c, De.jsxs = c, De;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function En() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, N = "@@iterator";
    function L(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = O && n[O] || n[N];
      return typeof i == "function" ? i : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
          u[d - 1] = arguments[d];
        x("error", n, u);
      }
    }
    function x(n, i, u) {
      {
        var d = C.ReactDebugCurrentFrame, _ = d.getStackAddendum();
        _ !== "" && (i += "%s", u = u.concat([_]));
        var P = u.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var T = !1, I = !1, E = !1, g = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function ut(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || Z || n === a || n === h || n === p || g || n === S || T || I || E || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Q || n.getModuleId !== void 0));
    }
    function lt(n, i, u) {
      var d = n.displayName;
      if (d)
        return d;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function ze(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var i = n;
            return ze(i) + ".Consumer";
          case c:
            var u = n;
            return ze(u._context) + ".Provider";
          case l:
            return lt(n, n.render, "ForwardRef");
          case m:
            var d = n.displayName || null;
            return d !== null ? d : Y(n.type) || "Memo";
          case b: {
            var _ = n, P = _._payload, R = _._init;
            try {
              return Y(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ue = 0, We, ge, Ae, B, ne, oe, M;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ie() {
      {
        if (ue === 0) {
          We = console.log, ge = console.info, Ae = console.warn, B = console.error, ne = console.group, oe = console.groupCollapsed, M = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ue++;
      }
    }
    function ve() {
      {
        if (ue--, ue === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, n, {
              value: We
            }),
            info: ee({}, n, {
              value: ge
            }),
            warn: ee({}, n, {
              value: Ae
            }),
            error: ee({}, n, {
              value: B
            }),
            group: ee({}, n, {
              value: ne
            }),
            groupCollapsed: ee({}, n, {
              value: oe
            }),
            groupEnd: ee({}, n, {
              value: M
            })
          });
        }
        ue < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = C.ReactCurrentDispatcher, ae;
    function H(n, i, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (_) {
            var d = _.stack.trim().match(/\n( *(at )?)/);
            ae = d && d[1] || "";
          }
        return `
` + ae + n;
      }
    }
    var q = !1, ie;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new be();
    }
    function K(n, i) {
      if (!n || q)
        return "";
      {
        var u = ie.get(n);
        if (u !== void 0)
          return u;
      }
      var d;
      q = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = te.current, te.current = null, Ie();
      try {
        if (i) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (z) {
              d = z;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (z) {
              d = z;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            d = z;
          }
          n();
        }
      } catch (z) {
        if (z && d && typeof z.stack == "string") {
          for (var w = z.stack.split(`
`), V = d.stack.split(`
`), j = w.length - 1, D = V.length - 1; j >= 1 && D >= 0 && w[j] !== V[D]; )
            D--;
          for (; j >= 1 && D >= 0; j--, D--)
            if (w[j] !== V[D]) {
              if (j !== 1 || D !== 1)
                do
                  if (j--, D--, D < 0 || w[j] !== V[D]) {
                    var U = `
` + w[j].replace(" at new ", " at ");
                    return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), typeof n == "function" && ie.set(n, U), U;
                  }
                while (j >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        q = !1, te.current = P, ve(), Error.prepareStackTrace = _;
      }
      var Ee = n ? n.displayName || n.name : "", le = Ee ? H(Ee) : "";
      return typeof n == "function" && ie.set(n, le), le;
    }
    function Wr(n, i, u) {
      return K(n, !1);
    }
    function Yr(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ye(n, i, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return K(n, Yr(n));
      if (typeof n == "string")
        return H(n);
      switch (n) {
        case h:
          return H("Suspense");
        case p:
          return H("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Wr(n.render);
          case m:
            return Ye(n.type, i, u);
          case b: {
            var d = n, _ = d._payload, P = d._init;
            try {
              return Ye(P(_), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, Ft = {}, Lt = C.ReactDebugCurrentFrame;
    function Be(n) {
      if (n) {
        var i = n._owner, u = Ye(n.type, n._source, i ? i.type : null);
        Lt.setExtraStackFrame(u);
      } else
        Lt.setExtraStackFrame(null);
    }
    function Br(n, i, u, d, _) {
      {
        var P = Function.call.bind(Ne);
        for (var R in n)
          if (P(n, R)) {
            var w = void 0;
            try {
              if (typeof n[R] != "function") {
                var V = Error((d || "React class") + ": " + u + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              w = n[R](i, R, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              w = j;
            }
            w && !(w instanceof Error) && (Be(_), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, R, typeof w), Be(null)), w instanceof Error && !(w.message in Ft) && (Ft[w.message] = !0, Be(_), v("Failed %s type: %s", u, w.message), Be(null));
          }
      }
    }
    var Ur = Array.isArray;
    function ft(n) {
      return Ur(n);
    }
    function Gr(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Hr(n) {
      try {
        return Mt(n), !1;
      } catch {
        return !0;
      }
    }
    function Mt(n) {
      return "" + n;
    }
    function Vt(n) {
      if (Hr(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gr(n)), Mt(n);
    }
    var je = C.ReactCurrentOwner, qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zt, Wt, dt;
    dt = {};
    function Kr(n) {
      if (Ne.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Xr(n) {
      if (Ne.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Jr(n, i) {
      if (typeof n.ref == "string" && je.current && i && je.current.stateNode !== i) {
        var u = Y(je.current.type);
        dt[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(je.current.type), n.ref), dt[u] = !0);
      }
    }
    function Zr(n, i) {
      {
        var u = function() {
          zt || (zt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Qr(n, i) {
      {
        var u = function() {
          Wt || (Wt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var en = function(n, i, u, d, _, P, R) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: i,
        ref: u,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function tn(n, i, u, d, _) {
      {
        var P, R = {}, w = null, V = null;
        u !== void 0 && (Vt(u), w = "" + u), Xr(i) && (Vt(i.key), w = "" + i.key), Kr(i) && (V = i.ref, Jr(i, _));
        for (P in i)
          Ne.call(i, P) && !qr.hasOwnProperty(P) && (R[P] = i[P]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (P in j)
            R[P] === void 0 && (R[P] = j[P]);
        }
        if (w || V) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Zr(R, D), V && Qr(R, D);
        }
        return en(n, w, V, _, d, je.current, R);
      }
    }
    var pt = C.ReactCurrentOwner, Yt = C.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var i = n._owner, u = Ye(n.type, n._source, i ? i.type : null);
        Yt.setExtraStackFrame(u);
      } else
        Yt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function mt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Bt() {
      {
        if (pt.current) {
          var n = Y(pt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function rn(n) {
      return "";
    }
    var Ut = {};
    function nn(n) {
      {
        var i = Bt();
        if (!i) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Gt(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = nn(i);
        if (Ut[u])
          return;
        Ut[u] = !0;
        var d = "";
        n && n._owner && n._owner !== pt.current && (d = " It was passed a child from " + Y(n._owner.type) + "."), we(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), we(null);
      }
    }
    function Ht(n, i) {
      {
        if (typeof n != "object")
          return;
        if (ft(n))
          for (var u = 0; u < n.length; u++) {
            var d = n[u];
            mt(d) && Gt(d, i);
          }
        else if (mt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = L(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var P = _.call(n), R; !(R = P.next()).done; )
              mt(R.value) && Gt(R.value, i);
        }
      }
    }
    function on(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === m))
          u = i.propTypes;
        else
          return;
        if (u) {
          var d = Y(i);
          Br(u, n.props, "prop", d, n);
        } else if (i.PropTypes !== void 0 && !ht) {
          ht = !0;
          var _ = Y(i);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function an(n) {
      {
        for (var i = Object.keys(n.props), u = 0; u < i.length; u++) {
          var d = i[u];
          if (d !== "children" && d !== "key") {
            we(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var qt = {};
    function Kt(n, i, u, d, _, P) {
      {
        var R = ut(n);
        if (!R) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = rn();
          V ? w += V : w += Bt();
          var j;
          n === null ? j = "null" : ft(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (Y(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, w);
        }
        var D = tn(n, i, u, _, P);
        if (D == null)
          return D;
        if (R) {
          var U = i.children;
          if (U !== void 0)
            if (d)
              if (ft(U)) {
                for (var Ee = 0; Ee < U.length; Ee++)
                  Ht(U[Ee], n);
                Object.freeze && Object.freeze(U);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ht(U, n);
        }
        if (Ne.call(i, "key")) {
          var le = Y(n), z = Object.keys(i).filter(function(dn) {
            return dn !== "key";
          }), gt = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qt[le + gt]) {
            var fn = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gt, le, fn, le), qt[le + gt] = !0;
          }
        }
        return n === o ? an(D) : on(D), D;
      }
    }
    function sn(n, i, u) {
      return Kt(n, i, u, !0);
    }
    function cn(n, i, u) {
      return Kt(n, i, u, !1);
    }
    var un = cn, ln = sn;
    $e.Fragment = o, $e.jsx = un, $e.jsxs = ln;
  }()), $e;
}
process.env.NODE_ENV === "production" ? Et.exports = wn() : Et.exports = En();
var St = Et.exports, Le = {}, Fe = bn;
if (process.env.NODE_ENV === "production")
  Le.createRoot = Fe.createRoot, Le.hydrateRoot = Fe.hydrateRoot;
else {
  var Ue = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Le.createRoot = function(e, t) {
    Ue.usingClientEntryPoint = !0;
    try {
      return Fe.createRoot(e, t);
    } finally {
      Ue.usingClientEntryPoint = !1;
    }
  }, Le.hydrateRoot = function(e, t, r) {
    Ue.usingClientEntryPoint = !0;
    try {
      return Fe.hydrateRoot(e, t, r);
    } finally {
      Ue.usingClientEntryPoint = !1;
    }
  };
}
var W = function() {
  return W = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, W.apply(this, arguments);
};
function Re(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, a = t.length, s; o < a; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Sn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Rn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _n = /* @__PURE__ */ Sn(
  function(e) {
    return Rn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Ve = "-moz-", k = "-webkit-", gr = "comm", nt = "rule", At = "decl", kn = "@import", yr = "@keyframes", Cn = "@layer", vr = Math.abs, It = String.fromCharCode, Rt = Object.assign;
function xn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function br(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function Xe(e, t, r) {
  return e.indexOf(t, r);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function J(e) {
  return e.length;
}
function wr(e) {
  return e.length;
}
function Me(e, t) {
  return t.push(e), e;
}
function Pn(e, t) {
  return e.map(t).join("");
}
function Qt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var ot = 1, ke = 1, Er = 0, G = 0, $ = 0, Oe = "";
function at(e, t, r, o, a, s, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: s, line: ot, column: ke, length: c, return: "", siblings: f };
}
function se(e, t) {
  return Rt(at("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Me(e, e.siblings);
}
function On() {
  return $;
}
function Tn() {
  return $ = G > 0 ? F(Oe, --G) : 0, ke--, $ === 10 && (ke = 1, ot--), $;
}
function X() {
  return $ = G < Er ? F(Oe, G++) : 0, ke++, $ === 10 && (ke = 1, ot++), $;
}
function pe() {
  return F(Oe, G);
}
function Je() {
  return G;
}
function it(e, t) {
  return _e(Oe, e, t);
}
function _t(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function An(e) {
  return ot = ke = 1, Er = J(Oe = e), G = 0, [];
}
function In(e) {
  return Oe = "", e;
}
function yt(e) {
  return br(it(G - 1, kt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Nn(e) {
  for (; ($ = pe()) && $ < 33; )
    X();
  return _t(e) > 2 || _t($) > 3 ? "" : " ";
}
function jn(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return it(e, Je() + (t < 6 && pe() == 32 && X() == 32));
}
function kt(e) {
  for (; X(); )
    switch ($) {
      case e:
        return G;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kt($);
        break;
      case 40:
        e === 41 && kt(e);
        break;
      case 92:
        X();
        break;
    }
  return G;
}
function Dn(e, t) {
  for (; X() && e + $ !== 57; )
    if (e + $ === 84 && pe() === 47)
      break;
  return "/*" + it(t, G - 1) + "*" + It(e === 47 ? e : X());
}
function $n(e) {
  for (; !_t(pe()); )
    X();
  return it(e, G);
}
function Fn(e) {
  return In(Ze("", null, null, null, [""], e = An(e), 0, [0], e));
}
function Ze(e, t, r, o, a, s, c, f, l) {
  for (var h = 0, p = 0, m = c, b = 0, S = 0, O = 0, N = 1, L = 1, C = 1, v = 0, x = "", T = a, I = s, E = o, g = x; L; )
    switch (O = v, v = X()) {
      case 40:
        if (O != 108 && F(g, m - 1) == 58) {
          Xe(g += y(yt(v), "&", "&\f"), "&\f", vr(h ? f[h - 1] : 0)) != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += yt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Nn(O);
        break;
      case 92:
        g += jn(Je() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            Me(Ln(Dn(X(), Je()), t, r, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * N:
        f[h++] = J(g) * C;
      case 125 * N:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            L = 0;
          case 59 + p:
            C == -1 && (g = y(g, /\f/g, "")), S > 0 && J(g) - m && Me(S > 32 ? tr(g + ";", o, r, m - 1, l) : tr(y(g, " ", "") + ";", o, r, m - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (Me(E = er(g, t, r, h, p, a, f, x, T = [], I = [], m, s), s), v === 123)
              if (p === 0)
                Ze(g, t, E, E, T, s, m, f, I);
              else
                switch (b === 99 && F(g, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ze(e, E, E, o && Me(er(e, E, E, 0, 0, a, f, x, a, T = [], m, I), I), a, I, m, f, o ? T : I);
                    break;
                  default:
                    Ze(g, E, E, E, [""], I, 0, f, I);
                }
        }
        h = p = S = 0, N = C = 1, x = g = "", m = c;
        break;
      case 58:
        m = 1 + J(g), S = O;
      default:
        if (N < 1) {
          if (v == 123)
            --N;
          else if (v == 125 && N++ == 0 && Tn() == 125)
            continue;
        }
        switch (g += It(v), v * N) {
          case 38:
            C = p > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            f[h++] = (J(g) - 1) * C, C = 1;
            break;
          case 64:
            pe() === 45 && (g += yt(X())), b = pe(), p = m = J(x = g += $n(Je())), v++;
            break;
          case 45:
            O === 45 && J(g) == 2 && (N = 0);
        }
    }
  return s;
}
function er(e, t, r, o, a, s, c, f, l, h, p, m) {
  for (var b = a - 1, S = a === 0 ? s : [""], O = wr(S), N = 0, L = 0, C = 0; N < o; ++N)
    for (var v = 0, x = _e(e, b + 1, b = vr(L = c[N])), T = e; v < O; ++v)
      (T = br(L > 0 ? S[v] + " " + x : y(x, /&\f/g, S[v]))) && (l[C++] = T);
  return at(e, t, r, a === 0 ? nt : f, l, h, p, m);
}
function Ln(e, t, r, o) {
  return at(e, t, r, gr, It(On()), _e(e, 2, -2), 0, o);
}
function tr(e, t, r, o, a) {
  return at(e, t, r, At, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function Sr(e, t, r) {
  switch (xn(e, t)) {
    case 5103:
      return k + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    case 4789:
      return Ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Ve + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + A + e + e;
    case 6165:
      return k + e + A + "flex-" + e + e;
    case 5187:
      return k + e + y(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return k + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return k + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + y(e, "-grow", "") + k + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return k + y(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/)) return A + "grid-column-align" + _e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~Xe(e + (r = r[t].value), "span", 0) ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~Xe(r, "span", 0) ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, k + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (J(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Ve + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xe(e, "stretch", 0) ? Sr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, f, l, h) {
        return A + a + ":" + s + h + (c ? A + a + "-span:" + (f ? l : +l - +s) + h : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tt(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Mn(e, t, r, o) {
  switch (e.type) {
    case Cn:
      if (e.children.length) break;
    case kn:
    case At:
      return e.return = e.return || e.value;
    case gr:
      return "";
    case yr:
      return e.return = e.value + "{" + tt(e.children, o) + "}";
    case nt:
      if (!J(e.value = e.props.join(","))) return "";
  }
  return J(r = tt(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Vn(e) {
  var t = wr(e);
  return function(r, o, a, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, s) || "";
    return c;
  };
}
function zn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Wn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case At:
        e.return = Sr(e.value, e.length, r);
        return;
      case yr:
        return tt([se(e, { value: y(e.value, "@", "@" + k) })], o);
      case nt:
        if (e.length)
          return Pn(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Se(se(e, { props: [y(a, /:(read-\w+)/, ":" + Ve + "$1")] })), Se(se(e, { props: [a] })), Rt(e, { props: Qt(r, o) });
                break;
              case "::placeholder":
                Se(se(e, { props: [y(a, /:(plac\w+)/, ":" + k + "input-$1")] })), Se(se(e, { props: [y(a, /:(plac\w+)/, ":" + Ve + "$1")] })), Se(se(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), Se(se(e, { props: [a] })), Rt(e, { props: Qt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Yn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Rr = "active", _r = "data-styled-version", st = "6.1.11", Nt = `/*!sc*/
`, jt = typeof window < "u" && "HTMLElement" in window, Bn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), rr = /invalid hook call/i, Ge = /* @__PURE__ */ new Set(), Un = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++) f[l - 1] = arguments[l];
        rr.test(c) ? (s = !1, Ge.delete(o)) : a.apply(void 0, Re([c], f, !1));
      }, pn(), s && !Ge.has(o) && (console.warn(o), Ge.add(o));
    } catch (c) {
      rr.test(c.message) && Ge.delete(o);
    } finally {
      console.error = a;
    }
  }
}, ct = Object.freeze([]), Ce = Object.freeze({});
function Gn(e, t, r) {
  return r === void 0 && (r = Ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var Ct = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Hn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qn = /(^-|-$)/g;
function nr(e) {
  return e.replace(Hn, "-").replace(qn, "");
}
var Kn = /(a)(d)/gi, He = 52, or = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > He; t = t / He | 0) r = or(t % He) + r;
  return (or(t % He) + r).replace(Kn, "$1-$2");
}
var vt, kr = 5381, fe = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Cr = function(e) {
  return fe(kr, e);
};
function Xn(e) {
  return xt(Cr(e) >>> 0);
}
function xr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function bt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pr = typeof Symbol == "function" && Symbol.for, Or = Pr ? Symbol.for("react.memo") : 60115, Jn = Pr ? Symbol.for("react.forward_ref") : 60112, Zn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Qn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Tr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, eo = ((vt = {})[Jn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, vt[Or] = Tr, vt);
function ar(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Or ? Tr : "$$typeof" in e ? eo[e.$$typeof] : Zn;
  var t;
}
var to = Object.defineProperty, ro = Object.getOwnPropertyNames, ir = Object.getOwnPropertySymbols, no = Object.getOwnPropertyDescriptor, oo = Object.getPrototypeOf, sr = Object.prototype;
function Ar(e, t, r) {
  if (typeof t != "string") {
    if (sr) {
      var o = oo(t);
      o && o !== sr && Ar(e, o, r);
    }
    var a = ro(t);
    ir && (a = a.concat(ir(t)));
    for (var s = ar(e), c = ar(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Qn || r && r[l] || c && l in c || s && l in s)) {
        var h = no(t, l);
        try {
          to(e, l, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function xe(e) {
  return typeof e == "function";
}
function Dt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function cr(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], o = 1; o < e.length; o++) r += e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Pt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = Pt(e[o], t[o]);
  else if (Pe(t)) for (var o in t) e[o] = Pt(e[o], t[o]);
  return e;
}
function $t(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ao = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function io() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, s = e.length; a < s; a += 1) o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(io.apply(void 0, Re([ao[e]], t, !1)).trim());
}
var so = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++) r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; t >= s; ) if ((s <<= 1) < 0) throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++) this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < a; s++) this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), s = a + o, c = a; c < s; c++) r += "".concat(this.tag.getRule(c)).concat(Nt);
    return r;
  }, e;
}(), co = 1 << 30, Qe = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), et = 1, qe = function(e) {
  if (Qe.has(e)) return Qe.get(e);
  for (; rt.has(et); ) et++;
  var t = et++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > co)) throw Te(16, "".concat(t));
  return Qe.set(e, t), rt.set(t, e), t;
}, uo = function(e, t) {
  et = t + 1, Qe.set(e, t), rt.set(t, e);
}, lo = "style[".concat(me, "][").concat(_r, '="').concat(st, '"]'), fo = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), po = function(e, t, r) {
  for (var o, a = r.split(","), s = 0, c = a.length; s < c; s++) (o = a[s]) && e.registerName(t, o);
}, ho = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Nt), a = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var l = f.match(fo);
      if (l) {
        var h = 0 | parseInt(l[1], 10), p = l[2];
        h !== 0 && (uo(p, h), po(e, p, l[3]), e.getTag().insertRules(h, a)), a.length = 0;
      } else a.push(f);
    }
  }
};
function mo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ir = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, Rr), o.setAttribute(_r, st);
  var c = mo();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, go = function() {
  function e(t) {
    this.element = Ir(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === r) return c;
      }
      throw Te(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), yo = function() {
  function e(t) {
    this.element = Ir(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), vo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ur = jt, bo = { isServer: !jt, useCSSOMInjection: !Bn }, Nr = function() {
  function e(t, r, o) {
    t === void 0 && (t = Ce), r === void 0 && (r = {});
    var a = this;
    this.options = W(W({}, bo), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && jt && ur && (ur = !1, function(s) {
      for (var c = document.querySelectorAll(lo), f = 0, l = c.length; f < l; f++) {
        var h = c[f];
        h && h.getAttribute(me) !== Rr && (ho(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this)), $t(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", h = function(m) {
          var b = function(C) {
            return rt.get(C);
          }(m);
          if (b === void 0) return "continue";
          var S = s.names.get(b), O = c.getGroup(m);
          if (S === void 0 || O.length === 0) return "continue";
          var N = "".concat(me, ".g").concat(m, '[id="').concat(b, '"]'), L = "";
          S !== void 0 && S.forEach(function(C) {
            C.length > 0 && (L += "".concat(C, ","));
          }), l += "".concat(O).concat(N, '{content:"').concat(L, '"}').concat(Nt);
        }, p = 0; p < f; p++) h(p);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return qe(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(W(W({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new vo(a) : o ? new go(a) : new yo(a);
    }(this.options), new so(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (qe(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(qe(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(qe(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), wo = /&/g, Eo = /^\s*\/\/.*$/gm;
function jr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = jr(r.children, t)), r;
  });
}
function So(e) {
  var t, r, o, a = Ce, s = a.options, c = s === void 0 ? Ce : s, f = a.plugins, l = f === void 0 ? ct : f, h = function(b, S, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, p = l.slice();
  p.push(function(b) {
    b.type === nt && b.value.includes("&") && (b.props[0] = b.props[0].replace(wo, r).replace(o, h));
  }), c.prefix && p.push(Wn), p.push(Mn);
  var m = function(b, S, O, N) {
    S === void 0 && (S = ""), O === void 0 && (O = ""), N === void 0 && (N = "&"), t = N, r = S, o = new RegExp("\\".concat(r, "\\b"), "g");
    var L = b.replace(Eo, ""), C = Fn(O || S ? "".concat(O, " ").concat(S, " { ").concat(L, " }") : L);
    c.namespace && (C = jr(C, c.namespace));
    var v = [];
    return tt(C, Vn(p.concat(zn(function(x) {
      return v.push(x);
    })))), v;
  };
  return m.hash = l.length ? l.reduce(function(b, S) {
    return S.name || Te(15), fe(b, S.name);
  }, kr).toString() : "", m;
}
var Ro = new Nr(), Ot = So(), Dr = ce.createContext({ shouldForwardProp: void 0, styleSheet: Ro, stylis: Ot });
Dr.Consumer;
ce.createContext(void 0);
function lr() {
  return mn(Dr);
}
var fr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = Ot);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, $t(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ot), this.name + t.hash;
  }, e;
}(), _o = function(e) {
  return e >= "A" && e <= "Z";
};
function dr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-") return e;
    _o(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var $r = function(e) {
  return e == null || e === !1 || e === "";
}, Fr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !$r(s) && (Array.isArray(s) && s.isCss || xe(s) ? o.push("".concat(dr(a), ":"), s, ";") : Pe(s) ? o.push.apply(o, Re(Re(["".concat(a, " {")], Fr(s), !1), ["}"], !1)) : o.push("".concat(dr(a), ": ").concat((t = a, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Yn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function he(e, t, r, o) {
  if ($r(e)) return [];
  if (Dt(e)) return [".".concat(e.styledComponentId)];
  if (xe(e)) {
    if (!xe(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof fr || Pe(a) || a === null || console.error("".concat(xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(a, t, r, o);
  }
  var s;
  return e instanceof fr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? Fr(e) : Array.isArray(e) ? Array.prototype.concat.apply(ct, e.map(function(c) {
    return he(c, t, r, o);
  })) : [e.toString()];
}
function ko(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (xe(r) && !Dt(r)) return !1;
  }
  return !0;
}
var Co = Cr(st), xo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && ko(t), this.componentId = r, this.baseHash = fe(Co, r), this.baseStyle = o, Nr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) a = de(a, this.staticRulesId);
    else {
      var s = cr(he(this.rules, t, r, o)), c = xt(fe(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(this.componentId, c)) {
        var f = o(s, ".".concat(c), void 0, this.componentId);
        r.insertRules(this.componentId, c, f);
      }
      a = de(a, c), this.staticRulesId = c;
    }
    else {
      for (var l = fe(this.baseHash, o.hash), h = "", p = 0; p < this.rules.length; p++) {
        var m = this.rules[p];
        if (typeof m == "string") h += m, process.env.NODE_ENV !== "production" && (l = fe(l, m));
        else if (m) {
          var b = cr(he(m, t, r, o));
          l = fe(l, b + p), h += b;
        }
      }
      if (h) {
        var S = xt(l >>> 0);
        r.hasNameForId(this.componentId, S) || r.insertRules(this.componentId, S, o(h, ".".concat(S), void 0, this.componentId)), a = de(a, S);
      }
    }
    return a;
  }, e;
}(), Lr = ce.createContext(void 0);
Lr.Consumer;
var wt = {}, pr = /* @__PURE__ */ new Set();
function Po(e, t, r) {
  var o = Dt(e), a = e, s = !bt(e), c = t.attrs, f = c === void 0 ? ct : c, l = t.componentId, h = l === void 0 ? function(T, I) {
    var E = typeof T != "string" ? "sc" : nr(T);
    wt[E] = (wt[E] || 0) + 1;
    var g = "".concat(E, "-").concat(Xn(st + E + wt[E]));
    return I ? "".concat(I, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : l, p = t.displayName, m = p === void 0 ? function(T) {
    return bt(T) ? "styled.".concat(T) : "Styled(".concat(xr(T), ")");
  }(e) : p, b = t.displayName && t.componentId ? "".concat(nr(t.displayName), "-").concat(t.componentId) : t.componentId || h, S = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var L = t.shouldForwardProp;
      O = function(T, I) {
        return N(T, I) && L(T, I);
      };
    } else O = N;
  }
  var C = new xo(r, b, o ? a.componentStyle : void 0);
  function v(T, I) {
    return function(E, g, Z) {
      var Q = E.attrs, ut = E.componentStyle, lt = E.defaultProps, ze = E.foldedComponentIds, Y = E.styledComponentId, ee = E.target, ue = ce.useContext(Lr), We = lr(), ge = E.shouldForwardProp || We.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Xt(Y);
      var Ae = Gn(g, ue, lt) || Ce, B = function(ve, te, ae) {
        for (var H, q = W(W({}, te), { className: void 0, theme: ae }), ie = 0; ie < ve.length; ie += 1) {
          var be = xe(H = ve[ie]) ? H(q) : H;
          for (var K in be) q[K] = K === "className" ? de(q[K], be[K]) : K === "style" ? W(W({}, q[K]), be[K]) : be[K];
        }
        return te.className && (q.className = de(q.className, te.className)), q;
      }(Q, g, Ae), ne = B.as || ee, oe = {};
      for (var M in B) B[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" && B.theme === Ae || (M === "forwardedAs" ? oe.as = B.forwardedAs : ge && !ge(M, ne) || (oe[M] = B[M], ge || process.env.NODE_ENV !== "development" || _n(M) || pr.has(M) || !Ct.has(ne) || (pr.add(M), console.warn('styled-components: it looks like an unknown prop "'.concat(M, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(ve, te) {
        var ae = lr(), H = ve.generateAndInjectStyles(te, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Xt(H), H;
      }(ut, B);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(ye);
      var Ie = de(ze, Y);
      return ye && (Ie += " " + ye), B.className && (Ie += " " + B.className), oe[bt(ne) && !Ct.has(ne) ? "class" : "className"] = Ie, oe.ref = Z, hn(ne, oe);
    }(x, T, I);
  }
  v.displayName = m;
  var x = ce.forwardRef(v);
  return x.attrs = S, x.componentStyle = C, x.displayName = m, x.shouldForwardProp = O, x.foldedComponentIds = o ? de(a.foldedComponentIds, a.styledComponentId) : "", x.styledComponentId = b, x.target = o ? a.target : e, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(I) {
      for (var E = [], g = 1; g < arguments.length; g++) E[g - 1] = arguments[g];
      for (var Z = 0, Q = E; Z < Q.length; Z++) Pt(I, Q[Z], !0);
      return I;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Un(m, b), x.warnTooManyClasses = /* @__PURE__ */ function(T, I) {
    var E = {}, g = !1;
    return function(Z) {
      if (!g && (E[Z] = !0, Object.keys(E).length >= 200)) {
        var Q = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, E = {};
      }
    };
  }(m, b)), $t(x, function() {
    return ".".concat(x.styledComponentId);
  }), s && Ar(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function hr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1) r.push(t[o], e[o + 1]);
  return r;
}
var mr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Mr(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (xe(e) || Pe(e)) return mr(he(hr(ct, Re([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? he(o) : mr(he(hr(o, t)));
}
function Tt(e, t, r) {
  if (r === void 0 && (r = Ce), !t) throw Te(1, t);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
    return e(t, r, Mr.apply(void 0, Re([a], s, !1)));
  };
  return o.attrs = function(a) {
    return Tt(e, t, W(W({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Tt(e, t, W(W({}, r), a));
  }, o;
}
var Vr = function(e) {
  return Tt(Po, e);
}, zr = Vr;
Ct.forEach(function(e) {
  zr[e] = Vr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ke = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ke] || (window[Ke] = 0), window[Ke] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ke] += 1);
const Oo = zr.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  height: 30px;
  min-height: 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  text-align: center;
  ${({ type: e }) => e === "error" && Mr`
      background-color: #ba000d;
    `}
`, To = () => {
  const [e, t] = gn(!0), r = yn(() => {
    t(navigator.onLine);
  }, []);
  return vn(() => (window.addEventListener("offline", () => r()), window.addEventListener("online", () => r()), () => {
    window.removeEventListener("offline", () => r()), window.removeEventListener("online", () => r());
  }), [r]), e ? null : /* @__PURE__ */ St.jsx(Oo, { type: !e && "error", children: "Erro! Problema de conexão com a internet!" });
};
Le.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ St.jsx(ce.StrictMode, { children: /* @__PURE__ */ St.jsx(To, {}) })
);
