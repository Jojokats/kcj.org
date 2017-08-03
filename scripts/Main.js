var myscript = document.getElementById("jsFastForms");
var baseUrl = "https://fastforms.visualantidote.com/FormEngine/";
var CDNResourceRoot = "https://formsprod.azureedge.net/cdncontainer/";
var currentScriptSRC = myscript.src;
if (currentScriptSRC != undefined) {
  baseUrl = currentScriptSRC.substring(0, currentScriptSRC.indexOf("Scripts/"));
  if (currentScriptSRC.toLowerCase().indexOf("ffqa.visualantidote.com/") > 0 && currentScriptSRC.toLowerCase().indexOf(".azurewebsites.net/") > 0) {
    CDNResourceRoot = "https://formsdev.azureedge.net/cdncontainer/"
  }
}
var parentElem = myscript.parentElement;
if (myscript.parentElement.nodeName == "HEAD") {
  parentElem = myscript.parentElement.parentElement;
  if (parentElem.getElementsByTagName("body").length == 0) {
    var bodyElem = document.createElement("body");
    parentElem.appendChild(bodyElem);
    parentElem = parentElem.getElementsByTagName("body")[0]
  }
}
var loadCssLink = document.createElement("link");
loadCssLink.rel = "stylesheet";
loadCssLink.type = "text/css";
loadCssLink.href = CDNResourceRoot + "styles/load.css";
parentElem.appendChild(loadCssLink);
var dvFastForms = document.createElement("div");
dvFastForms.id = "dvFastForms";
dvFastForms.setAttribute("style", "display:none");
parentElem.appendChild(dvFastForms);
var dvLoading = document.createElement("div");
dvLoading.id = "dvLoading";
dvLoading.setAttribute("class", "ff-load-img");
parentElem.appendChild(dvLoading);
(function(e, t) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = e.document ? t(e, true) : function(e) {
      if (!e.document) {
        throw new Error("jQuery requires a window with a document")
      }
      return t(e)
    }
  } else {
    t(e)
  }
})(typeof window !== "undefined" ? window : this, function(e, t) {
  function y(e) {
    var t = e.length,
      n = p.type(e);
    if (n === "function" || p.isWindow(e)) {
      return false
    }
    if (e.nodeType === 1 && t) {
      return true
    }
    return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
  }

  function x(e, t, n) {
    if (p.isFunction(t)) {
      return p.grep(e, function(e, r) {
        return !!t.call(e, r, e) !== n
      })
    }
    if (t.nodeType) {
      return p.grep(e, function(e) {
        return e === t !== n
      })
    }
    if (typeof t === "string") {
      if (S.test(t)) {
        return p.filter(t, e, n)
      }
      t = p.filter(t, e)
    }
    return p.grep(e, function(e) {
      return p.inArray(e, t) >= 0 !== n
    })
  }

  function O(e, t) {
    do {
      e = e[t]
    } while (e && e.nodeType !== 1);
    return e
  }

  function D(e) {
    var t = _[e] = {};
    p.each(e.match(M) || [], function(e, n) {
      t[n] = true
    });
    return t
  }

  function H() {
    if (N.addEventListener) {
      N.removeEventListener("DOMContentLoaded", B, false);
      e.removeEventListener("load", B, false)
    } else {
      N.detachEvent("onreadystatechange", B);
      e.detachEvent("onload", B)
    }
  }

  function B() {
    if (N.addEventListener || event.type === "load" || N.readyState === "complete") {
      H();
      p.ready()
    }
  }

  function R(e, t, n) {
    if (n === undefined && e.nodeType === 1) {
      var r = "data-" + t.replace(q, "-$1").toLowerCase();
      n = e.getAttribute(r);
      if (typeof n === "string") {
        try {
          n = n === "true" ? true : n === "false" ? false : n === "null" ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
        } catch (i) {}
        p.data(e, t, n)
      } else {
        n = undefined
      }
    }
    return n
  }

  function U(e) {
    var t;
    for (t in e) {
      if (t === "data" && p.isEmptyObject(e[t])) {
        continue
      }
      if (t !== "toJSON") {
        return false
      }
    }
    return true
  }

  function z(e, t, r, i) {
    if (!p.acceptData(e)) {
      return
    }
    var s, o, u = p.expando,
      a = e.nodeType,
      f = a ? p.cache : e,
      l = a ? e[u] : e[u] && u;
    if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t === "string") {
      return
    }
    if (!l) {
      if (a) {
        l = e[u] = n.pop() || p.guid++
      } else {
        l = u
      }
    }
    if (!f[l]) {
      f[l] = a ? {} : {
        toJSON: p.noop
      }
    }
    if (typeof t === "object" || typeof t === "function") {
      if (i) {
        f[l] = p.extend(f[l], t)
      } else {
        f[l].data = p.extend(f[l].data, t)
      }
    }
    o = f[l];
    if (!i) {
      if (!o.data) {
        o.data = {}
      }
      o = o.data
    }
    if (r !== undefined) {
      o[p.camelCase(t)] = r
    }
    if (typeof t === "string") {
      s = o[t];
      if (s == null) {
        s = o[p.camelCase(t)]
      }
    } else {
      s = o
    }
    return s
  }

  function W(e, t, n) {
    if (!p.acceptData(e)) {
      return
    }
    var r, i, s = e.nodeType,
      o = s ? p.cache : e,
      u = s ? e[p.expando] : p.expando;
    if (!o[u]) {
      return
    }
    if (t) {
      r = n ? o[u] : o[u].data;
      if (r) {
        if (!p.isArray(t)) {
          if (t in r) {
            t = [t]
          } else {
            t = p.camelCase(t);
            if (t in r) {
              t = [t]
            } else {
              t = t.split(" ")
            }
          }
        } else {
          t = t.concat(p.map(t, p.camelCase))
        }
        i = t.length;
        while (i--) {
          delete r[t[i]]
        }
        if (n ? !U(r) : !p.isEmptyObject(r)) {
          return
        }
      }
    }
    if (!n) {
      delete o[u].data;
      if (!U(o[u])) {
        return
      }
    }
    if (s) {
      p.cleanData([e], true)
    } else {
      if (c.deleteExpando || o != o.window) {
        delete o[u]
      } else {
        o[u] = null
      }
    }
  }

  function tt() {
    return true
  }

  function nt() {
    return false
  }

  function rt() {
    try {
      return N.activeElement
    } catch (e) {}
  }

  function it(e) {
    var t = st.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) {
      while (t.length) {
        n.createElement(t.pop())
      }
    }
    return n
  }

  function Et(e, t) {
    var n, r, i = 0,
      s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : undefined;
    if (!s) {
      for (s = [], n = e.childNodes || e;
        (r = n[i]) != null; i++) {
        if (!t || p.nodeName(r, t)) {
          s.push(r)
        } else {
          p.merge(s, Et(r, t))
        }
      }
    }
    return t === undefined || t && p.nodeName(e, t) ? p.merge([e], s) : s
  }

  function St(e) {
    if (K.test(e.type)) {
      e.defaultChecked = e.checked
    }
  }

  function xt(e, t) {
    return p.nodeName(e, "table") && p.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function Tt(e) {
    e.type = (p.find.attr(e, "type") !== null) + "/" + e.type;
    return e
  }

  function Nt(e) {
    var t = mt.exec(e.type);
    if (t) {
      e.type = t[1]
    } else {
      e.removeAttribute("type")
    }
    return e
  }

  function Ct(e, t) {
    var n, r = 0;
    for (;
      (n = e[r]) != null; r++) {
      p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }
  }

  function kt(e, t) {
    if (t.nodeType !== 1 || !p.hasData(e)) {
      return
    }
    var n, r, i, s = p._data(e),
      o = p._data(t, s),
      u = s.events;
    if (u) {
      delete o.handle;
      o.events = {};
      for (n in u) {
        for (r = 0, i = u[n].length; r < i; r++) {
          p.event.add(t, n, u[n][r])
        }
      }
    }
    if (o.data) {
      o.data = p.extend({}, o.data)
    }
  }

  function Lt(e, t) {
    var n, r, i;
    if (t.nodeType !== 1) {
      return
    }
    n = t.nodeName.toLowerCase();
    if (!c.noCloneEvent && t[p.expando]) {
      i = p._data(t);
      for (r in i.events) {
        p.removeEvent(t, r, i.handle)
      }
      t.removeAttribute(p.expando)
    }
    if (n === "script" && t.text !== e.text) {
      Tt(t).text = e.text;
      Nt(t)
    } else {
      if (n === "object") {
        if (t.parentNode) {
          t.outerHTML = e.outerHTML
        }
        if (c.html5Clone && e.innerHTML && !p.trim(t.innerHTML)) {
          t.innerHTML = e.innerHTML
        }
      } else {
        if (n === "input" && K.test(e.type)) {
          t.defaultChecked = t.checked = e.checked;
          if (t.value !== e.value) {
            t.value = e.value
          }
        } else {
          if (n === "option") {
            t.defaultSelected = t.selected = e.defaultSelected
          } else {
            if (n === "input" || n === "textarea") {
              t.defaultValue = e.defaultValue
            }
          }
        }
      }
    }
  }

  function Mt(t, n) {
    var r = p(n.createElement(t)).appendTo(n.body),
      i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
    r.detach();
    return i
  }

  function _t(e) {
    var t = N,
      n = Ot[e];
    if (!n) {
      n = Mt(e, t);
      if (n === "none" || !n) {
        At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
        t = (At[0].contentWindow || At[0].contentDocument).document;
        t.write();
        t.close();
        n = Mt(e, t);
        At.detach()
      }
      Ot[e] = n
    }
    return n
  }

  function Ft(e, t) {
    return {
      get: function() {
        var n = e();
        if (n == null) {
          return
        }
        if (n) {
          delete this.get;
          return
        }
        return (this.get = t).apply(this, arguments)
      }
    }
  }

  function $t(e, t) {
    if (t in e) {
      return t
    }
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = Vt.length;
    while (i--) {
      t = Vt[i] + n;
      if (t in e) {
        return t
      }
    }
    return r
  }

  function Jt(e, t) {
    var n, r, i, s = [],
      o = 0,
      u = e.length;
    for (; o < u; o++) {
      r = e[o];
      if (!r.style) {
        continue
      }
      s[o] = p._data(r, "olddisplay");
      n = r.style.display;
      if (t) {
        if (!s[o] && n === "none") {
          r.style.display = ""
        }
        if (r.style.display === "" && $(r)) {
          s[o] = p._data(r, "olddisplay", _t(r.nodeName))
        }
      } else {
        if (!s[o]) {
          i = $(r);
          if (n && n !== "none" || !i) {
            p._data(r, "olddisplay", i ? n : p.css(r, "display"))
          }
        }
      }
    }
    for (o = 0; o < u; o++) {
      r = e[o];
      if (!r.style) {
        continue
      }
      if (!t || r.style.display === "none" || r.style.display === "") {
        r.style.display = t ? s[o] || "" : "none"
      }
    }
    return e
  }

  function Kt(e, t, n) {
    var r = Ut.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function Qt(e, t, n, r, i) {
    var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
      o = 0;
    for (; s < 4; s += 2) {
      if (n === "margin") {
        o += p.css(e, n + V[s], true, i)
      }
      if (r) {
        if (n === "content") {
          o -= p.css(e, "padding" + V[s], true, i)
        }
        if (n !== "margin") {
          o -= p.css(e, "border" + V[s] + "Width", true, i)
        }
      } else {
        o += p.css(e, "padding" + V[s], true, i);
        if (n !== "padding") {
          o += p.css(e, "border" + V[s] + "Width", true, i)
        }
      }
    }
    return o
  }

  function Gt(e, t, n) {
    var r = true,
      i = t === "width" ? e.offsetWidth : e.offsetHeight,
      s = Ht(e),
      o = c.boxSizing() && p.css(e, "boxSizing", false, s) === "border-box";
    if (i <= 0 || i == null) {
      i = Bt(e, t, s);
      if (i < 0 || i == null) {
        i = e.style[t]
      }
      if (Pt.test(i)) {
        return i
      }
      r = o && (c.boxSizingReliable() || i === e.style[t]);
      i = parseFloat(i) || 0
    }
    return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
  }

  function Yt(e, t, n, r, i) {
    return new Yt.prototype.init(e, t, n, r, i)
  }

  function un() {
    setTimeout(function() {
      Zt = undefined
    });
    return Zt = p.now()
  }

  function an(e, t) {
    var n, r = {
        height: e
      },
      i = 0;
    t = t ? 1 : 0;
    for (; i < 4; i += 2 - t) {
      n = V[i];
      r["margin" + n] = r["padding" + n] = e
    }
    if (t) {
      r.opacity = r.width = e
    }
    return r
  }

  function fn(e, t, n) {
    var r, i = (on[t] || []).concat(on["*"]),
      s = 0,
      o = i.length;
    for (; s < o; s++) {
      if (r = i[s].call(n, t, e)) {
        return r
      }
    }
  }

  function ln(e, t, n) {
    var r, i, s, o, u, a, f, l, h = this,
      d = {},
      v = e.style,
      m = e.nodeType && $(e),
      g = p._data(e, "fxshow");
    if (!n.queue) {
      u = p._queueHooks(e, "fx");
      if (u.unqueued == null) {
        u.unqueued = 0;
        a = u.empty.fire;
        u.empty.fire = function() {
          if (!u.unqueued) {
            a()
          }
        }
      }
      u.unqueued++;
      h.always(function() {
        h.always(function() {
          u.unqueued--;
          if (!p.queue(e, "fx").length) {
            u.empty.fire()
          }
        })
      })
    }
    if (e.nodeType === 1 && ("height" in t || "width" in t)) {
      n.overflow = [v.overflow, v.overflowX, v.overflowY];
      f = p.css(e, "display");
      l = _t(e.nodeName);
      if (f === "none") {
        f = l
      }
      if (f === "inline" && p.css(e, "float") === "none") {
        if (!c.inlineBlockNeedsLayout || l === "inline") {
          v.display = "inline-block"
        } else {
          v.zoom = 1
        }
      }
    }
    if (n.overflow) {
      v.overflow = "hidden";
      if (!c.shrinkWrapBlocks()) {
        h.always(function() {
          v.overflow = n.overflow[0];
          v.overflowX = n.overflow[1];
          v.overflowY = n.overflow[2]
        })
      }
    }
    for (r in t) {
      i = t[r];
      if (tn.exec(i)) {
        delete t[r];
        s = s || i === "toggle";
        if (i === (m ? "hide" : "show")) {
          if (i === "show" && g && g[r] !== undefined) {
            m = true
          } else {
            continue
          }
        }
        d[r] = g && g[r] || p.style(e, r)
      }
    }
    if (!p.isEmptyObject(d)) {
      if (g) {
        if ("hidden" in g) {
          m = g.hidden
        }
      } else {
        g = p._data(e, "fxshow", {})
      }
      if (s) {
        g.hidden = !m
      }
      if (m) {
        p(e).show()
      } else {
        h.done(function() {
          p(e).hide()
        })
      }
      h.done(function() {
        var t;
        p._removeData(e, "fxshow");
        for (t in d) {
          p.style(e, t, d[t])
        }
      });
      for (r in d) {
        o = fn(m ? g[r] : 0, r, h);
        if (!(r in g)) {
          g[r] = o.start;
          if (m) {
            o.end = o.start;
            o.start = r === "width" || r === "height" ? 1 : 0
          }
        }
      }
    }
  }

  function cn(e, t) {
    var n, r, i, s, o;
    for (n in e) {
      r = p.camelCase(n);
      i = t[r];
      s = e[n];
      if (p.isArray(s)) {
        i = s[1];
        s = e[n] = s[0]
      }
      if (n !== r) {
        e[r] = s;
        delete e[n]
      }
      o = p.cssHooks[r];
      if (o && "expand" in o) {
        s = o.expand(s);
        delete e[r];
        for (n in s) {
          if (!(n in e)) {
            e[n] = s[n];
            t[n] = i
          }
        }
      } else {
        t[r] = i
      }
    }
  }

  function hn(e, t, n) {
    var r, i, s = 0,
      o = sn.length,
      u = p.Deferred().always(function() {
        delete a.elem
      }),
      a = function() {
        if (i) {
          return false
        }
        var t = Zt || un(),
          n = Math.max(0, f.startTime + f.duration - t),
          r = n / f.duration || 0,
          s = 1 - r,
          o = 0,
          a = f.tweens.length;
        for (; o < a; o++) {
          f.tweens[o].run(s)
        }
        u.notifyWith(e, [f, s, n]);
        if (s < 1 && a) {
          return n
        } else {
          u.resolveWith(e, [f]);
          return false
        }
      },
      f = u.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(true, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Zt || un(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
          f.tweens.push(r);
          return r
        },
        stop: function(t) {
          var n = 0,
            r = t ? f.tweens.length : 0;
          if (i) {
            return this
          }
          i = true;
          for (; n < r; n++) {
            f.tweens[n].run(1)
          }
          if (t) {
            u.resolveWith(e, [f, t])
          } else {
            u.rejectWith(e, [f, t])
          }
          return this
        }
      }),
      l = f.props;
    cn(l, f.opts.specialEasing);
    for (; s < o; s++) {
      r = sn[s].call(f, e, l, f.opts);
      if (r) {
        return r
      }
    }
    p.map(l, fn, f);
    if (p.isFunction(f.opts.start)) {
      f.opts.start.call(e, f)
    }
    p.fx.timer(p.extend(a, {
      elem: e,
      anim: f,
      queue: f.opts.queue
    }));
    return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
  }

  function In(e) {
    return function(t, n) {
      if (typeof t !== "string") {
        n = t;
        t = "*"
      }
      var r, i = 0,
        s = t.toLowerCase().match(M) || [];
      if (p.isFunction(n)) {
        while (r = s[i++]) {
          if (r.charAt(0) === "+") {
            r = r.slice(1) || "*";
            (e[r] = e[r] || []).unshift(n)
          } else {
            (e[r] = e[r] || []).push(n)
          }
        }
      }
    }
  }

  function qn(e, t, n, r) {
    function o(u) {
      var a;
      i[u] = true;
      p.each(e[u] || [], function(e, u) {
        var f = u(t, n, r);
        if (typeof f === "string" && !s && !i[f]) {
          t.dataTypes.unshift(f);
          o(f);
          return false
        } else {
          if (s) {
            return !(a = f)
          }
        }
      });
      return a
    }
    var i = {},
      s = e === Bn;
    return o(t.dataTypes[0]) || !i["*"] && o("*")
  }

  function Rn(e, t) {
    var n, r, i = p.ajaxSettings.flatOptions || {};
    for (r in t) {
      if (t[r] !== undefined) {
        (i[r] ? e : n || (n = {}))[r] = t[r]
      }
    }
    if (n) {
      p.extend(true, e, n)
    }
    return e
  }

  function Un(e, t, n) {
    var r, i, s, o, u = e.contents,
      a = e.dataTypes;
    while (a[0] === "*") {
      a.shift();
      if (i === undefined) {
        i = e.mimeType || t.getResponseHeader("Content-Type")
      }
    }
    if (i) {
      for (o in u) {
        if (u[o] && u[o].test(i)) {
          a.unshift(o);
          break
        }
      }
    }
    if (a[0] in n) {
      s = a[0]
    } else {
      for (o in n) {
        if (!a[0] || e.converters[o + " " + a[0]]) {
          s = o;
          break
        }
        if (!r) {
          r = o
        }
      }
      s = s || r
    }
    if (s) {
      if (s !== a[0]) {
        a.unshift(s)
      }
      return n[s]
    }
  }

  function zn(e, t, n, r) {
    var i, s, o, u, a, f = {},
      l = e.dataTypes.slice();
    if (l[1]) {
      for (o in e.converters) {
        f[o.toLowerCase()] = e.converters[o]
      }
    }
    s = l.shift();
    while (s) {
      if (e.responseFields[s]) {
        n[e.responseFields[s]] = t
      }
      if (!a && r && e.dataFilter) {
        t = e.dataFilter(t, e.dataType)
      }
      a = s;
      s = l.shift();
      if (s) {
        if (s === "*") {
          s = a
        } else {
          if (a !== "*" && a !== s) {
            o = f[a + " " + s] || f["* " + s];
            if (!o) {
              for (i in f) {
                u = i.split(" ");
                if (u[1] === s) {
                  o = f[a + " " + u[0]] || f["* " + u[0]];
                  if (o) {
                    if (o === true) {
                      o = f[i]
                    } else {
                      if (f[i] !== true) {
                        s = u[0];
                        l.unshift(u[1])
                      }
                    }
                    break
                  }
                }
              }
            }
            if (o !== true) {
              if (o && e["throws"]) {
                t = o(t)
              } else {
                try {
                  t = o(t)
                } catch (c) {
                  return {
                    state: "parsererror",
                    error: o ? c : "No conversion from " + a + " to " + s
                  }
                }
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: t
    }
  }

  function Kn(e, t, n, r) {
    var i;
    if (p.isArray(t)) {
      p.each(t, function(t, i) {
        if (n || Xn.test(e)) {
          r(e, i)
        } else {
          Kn(e + "[" + (typeof i === "object" ? t : "") + "]", i, n, r)
        }
      })
    } else {
      if (!n && p.type(t) === "object") {
        for (i in t) {
          Kn(e + "[" + i + "]", t[i], n, r)
        }
      } else {
        r(e, t)
      }
    }
  }

  function Zn() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function er() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function sr(e) {
    return p.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
  }
  var n = [];
  var r = n.slice;
  var i = n.concat;
  var s = n.push;
  var o = n.indexOf;
  var u = {};
  var a = u.toString;
  var f = u.hasOwnProperty;
  var l = "".trim;
  var c = {};
  var h = "1.11.0",
    p = function(e, t) {
      return new p.fn.init(e, t)
    },
    d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    v = /^-ms-/,
    m = /-([\da-z])/gi,
    g = function(e, t) {
      return t.toUpperCase()
    };
  p.fn = p.prototype = {
    jquery: h,
    constructor: p,
    selector: "",
    length: 0,
    toArray: function() {
      return r.call(this)
    },
    get: function(e) {
      return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
    },
    pushStack: function(e) {
      var t = p.merge(this.constructor(), e);
      t.prevObject = this;
      t.context = this.context;
      return t
    },
    each: function(e, t) {
      return p.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(p.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(r.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  };
  p.extend = p.fn.extend = function() {
    var e, t, n, r, i, s, o = arguments[0] || {},
      u = 1,
      a = arguments.length,
      f = false;
    if (typeof o === "boolean") {
      f = o;
      o = arguments[u] || {};
      u++
    }
    if (typeof o !== "object" && !p.isFunction(o)) {
      o = {}
    }
    if (u === a) {
      o = this;
      u--
    }
    for (; u < a; u++) {
      if ((i = arguments[u]) != null) {
        for (r in i) {
          e = o[r];
          n = i[r];
          if (o === n) {
            continue
          }
          if (f && n && (p.isPlainObject(n) || (t = p.isArray(n)))) {
            if (t) {
              t = false;
              s = e && p.isArray(e) ? e : []
            } else {
              s = e && p.isPlainObject(e) ? e : {}
            }
            o[r] = p.extend(f, s, n)
          } else {
            if (n !== undefined) {
              o[r] = n
            }
          }
        }
      }
    }
    return o
  };
  p.extend({
    expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return p.type(e) === "function"
    },
    isArray: Array.isArray || function(e) {
      return p.type(e) === "array"
    },
    isWindow: function(e) {
      return e != null && e == e.window
    },
    isNumeric: function(e) {
      return e - parseFloat(e) >= 0
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) {
        return false
      }
      return true
    },
    isPlainObject: function(e) {
      var t;
      if (!e || p.type(e) !== "object" || e.nodeType || p.isWindow(e)) {
        return false
      }
      try {
        if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) {
          return false
        }
      } catch (n) {
        return false
      }
      if (c.ownLast) {
        for (t in e) {
          return f.call(e, t)
        }
      }
      for (t in e) {}
      return t === undefined || f.call(e, t)
    },
    type: function(e) {
      if (e == null) {
        return e + ""
      }
      return typeof e === "object" || typeof e === "function" ? u[a.call(e)] || "object" : typeof e
    },
    globalEval: function(t) {
      if (t && p.trim(t)) {
        (e.execScript || function(t) {
          e["eval"].call(e, t)
        })(t)
      }
    },
    camelCase: function(e) {
      return e.replace(v, "ms-").replace(m, g)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, n) {
      var r, i = 0,
        s = e.length,
        o = y(e);
      if (n) {
        if (o) {
          for (; i < s; i++) {
            r = t.apply(e[i], n);
            if (r === false) {
              break
            }
          }
        } else {
          for (i in e) {
            r = t.apply(e[i], n);
            if (r === false) {
              break
            }
          }
        }
      } else {
        if (o) {
          for (; i < s; i++) {
            r = t.call(e[i], i, e[i]);
            if (r === false) {
              break
            }
          }
        } else {
          for (i in e) {
            r = t.call(e[i], i, e[i]);
            if (r === false) {
              break
            }
          }
        }
      }
      return e
    },
    trim: l && !l.call("? ") ? function(e) {
      return e == null ? "" : l.call(e)
    } : function(e) {
      return e == null ? "" : (e + "").replace(d, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      if (e != null) {
        if (y(Object(e))) {
          p.merge(n, typeof e === "string" ? [e] : e)
        } else {
          s.call(n, e)
        }
      }
      return n
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (o) {
          return o.call(t, e, n)
        }
        r = t.length;
        n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
        for (; n < r; n++) {
          if (n in t && t[n] === e) {
            return n
          }
        }
      }
      return -1
    },
    merge: function(e, t) {
      var n = +t.length,
        r = 0,
        i = e.length;
      while (r < n) {
        e[i++] = t[r++]
      }
      if (n !== n) {
        while (t[r] !== undefined) {
          e[i++] = t[r++]
        }
      }
      e.length = i;
      return e
    },
    grep: function(e, t, n) {
      var r, i = [],
        s = 0,
        o = e.length,
        u = !n;
      for (; s < o; s++) {
        r = !t(e[s], s);
        if (r !== u) {
          i.push(e[s])
        }
      }
      return i
    },
    map: function(e, t, n) {
      var r, s = 0,
        o = e.length,
        u = y(e),
        a = [];
      if (u) {
        for (; s < o; s++) {
          r = t(e[s], s, n);
          if (r != null) {
            a.push(r)
          }
        }
      } else {
        for (s in e) {
          r = t(e[s], s, n);
          if (r != null) {
            a.push(r)
          }
        }
      }
      return i.apply([], a)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, i, s;
      if (typeof t === "string") {
        s = e[t];
        t = e;
        e = s
      }
      if (!p.isFunction(e)) {
        return undefined
      }
      n = r.call(arguments, 2);
      i = function() {
        return e.apply(t || this, n.concat(r.call(arguments)))
      };
      i.guid = e.guid = e.guid || p.guid++;
      return i
    },
    now: function() {
      return +(new Date)
    },
    support: c
  });
  p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    u["[object " + t + "]"] = t.toLowerCase()
  });
  var b = function(e) {
    function rt(e, t, r, i) {
      var s, o, u, a, f, h, v, m, w, E;
      if ((t ? t.ownerDocument || t : b) !== c) {
        l(t)
      }
      t = t || c;
      r = r || [];
      if (!e || typeof e !== "string") {
        return r
      }
      if ((a = t.nodeType) !== 1 && a !== 9) {
        return []
      }
      if (p && !i) {
        if (s = G.exec(e)) {
          if (u = s[1]) {
            if (a === 9) {
              o = t.getElementById(u);
              if (o && o.parentNode) {
                if (o.id === u) {
                  r.push(o);
                  return r
                }
              } else {
                return r
              }
            } else {
              if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) {
                r.push(o);
                return r
              }
            }
          } else {
            if (s[2]) {
              _.apply(r, t.getElementsByTagName(e));
              return r
            } else {
              if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) {
                _.apply(r, t.getElementsByClassName(u));
                return r
              }
            }
          }
        }
        if (n.qsa && (!d || !d.test(e))) {
          m = v = y;
          w = t;
          E = a === 9 && e;
          if (a === 1 && t.nodeName.toLowerCase() !== "object") {
            h = dt(e);
            if (v = t.getAttribute("id")) {
              m = v.replace(Z, "\\$&")
            } else {
              t.setAttribute("id", m)
            }
            m = "[id='" + m + "'] ";
            f = h.length;
            while (f--) {
              h[f] = m + vt(h[f])
            }
            w = Y.test(e) && ht(t.parentNode) || t;
            E = h.join(",")
          }
          if (E) {
            try {
              _.apply(r, w.querySelectorAll(E));
              return r
            } catch (S) {} finally {
              if (!v) {
                t.removeAttribute("id")
              }
            }
          }
        }
      }
      return xt(e.replace(R, "$1"), t, r, i)
    }

    function it() {
      function t(n, i) {
        if (e.push(n + " ") > r.cacheLength) {
          delete t[e.shift()]
        }
        return t[n + " "] = i
      }
      var e = [];
      return t
    }

    function st(e) {
      e[y] = true;
      return e
    }

    function ot(e) {
      var t = c.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return false
      } finally {
        if (t.parentNode) {
          t.parentNode.removeChild(t)
        }
        t = null
      }
    }

    function ut(e, t) {
      var n = e.split("|"),
        i = e.length;
      while (i--) {
        r.attrHandle[n[i]] = t
      }
    }

    function at(e, t) {
      var n = t && e,
        r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
      if (r) {
        return r
      }
      if (n) {
        while (n = n.nextSibling) {
          if (n === t) {
            return -1
          }
        }
      }
      return e ? 1 : -1
    }

    function ft(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return n === "input" && t.type === e
      }
    }

    function lt(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return (n === "input" || n === "button") && t.type === e
      }
    }

    function ct(e) {
      return st(function(t) {
        t = +t;
        return st(function(n, r) {
          var i, s = e([], n.length, t),
            o = s.length;
          while (o--) {
            if (n[i = s[o]]) {
              n[i] = !(r[i] = n[i])
            }
          }
        })
      })
    }

    function ht(e) {
      return e && typeof e.getElementsByTagName !== C && e
    }

    function pt() {}

    function dt(e, t) {
      var n, i, s, o, u, a, f, l = x[e + " "];
      if (l) {
        return t ? 0 : l.slice(0)
      }
      u = e;
      a = [];
      f = r.preFilter;
      while (u) {
        if (!n || (i = U.exec(u))) {
          if (i) {
            u = u.slice(i[0].length) || u
          }
          a.push(s = [])
        }
        n = false;
        if (i = z.exec(u)) {
          n = i.shift();
          s.push({
            value: n,
            type: i[0].replace(R, " ")
          });
          u = u.slice(n.length)
        }
        for (o in r.filter) {
          if ((i = $[o].exec(u)) && (!f[o] || (i = f[o](i)))) {
            n = i.shift();
            s.push({
              value: n,
              type: o,
              matches: i
            });
            u = u.slice(n.length)
          }
        }
        if (!n) {
          break
        }
      }
      return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
    }

    function vt(e) {
      var t = 0,
        n = e.length,
        r = "";
      for (; t < n; t++) {
        r += e[t].value
      }
      return r
    }

    function mt(e, t, n) {
      var r = t.dir,
        i = n && r === "parentNode",
        s = E++;
      return t.first ? function(t, n, s) {
        while (t = t[r]) {
          if (t.nodeType === 1 || i) {
            return e(t, n, s)
          }
        }
      } : function(t, n, o) {
        var u, a, f = [w, s];
        if (o) {
          while (t = t[r]) {
            if (t.nodeType === 1 || i) {
              if (e(t, n, o)) {
                return true
              }
            }
          }
        } else {
          while (t = t[r]) {
            if (t.nodeType === 1 || i) {
              a = t[y] || (t[y] = {});
              if ((u = a[r]) && u[0] === w && u[1] === s) {
                return f[2] = u[2]
              } else {
                a[r] = f;
                if (f[2] = e(t, n, o)) {
                  return true
                }
              }
            }
          }
        }
      }
    }

    function gt(e) {
      return e.length > 1 ? function(t, n, r) {
        var i = e.length;
        while (i--) {
          if (!e[i](t, n, r)) {
            return false
          }
        }
        return true
      } : e[0]
    }

    function yt(e, t, n, r, i) {
      var s, o = [],
        u = 0,
        a = e.length,
        f = t != null;
      for (; u < a; u++) {
        if (s = e[u]) {
          if (!n || n(s, r, i)) {
            o.push(s);
            if (f) {
              t.push(u)
            }
          }
        }
      }
      return o
    }

    function bt(e, t, n, r, i, s) {
      if (r && !r[y]) {
        r = bt(r)
      }
      if (i && !i[y]) {
        i = bt(i, s)
      }
      return st(function(s, o, u, a) {
        var f, l, c, h = [],
          p = [],
          d = o.length,
          v = s || St(t || "*", u.nodeType ? [u] : u, []),
          m = e && (s || !t) ? yt(v, h, e, u, a) : v,
          g = n ? i || (s ? e : d || r) ? [] : o : m;
        if (n) {
          n(m, g, u, a)
        }
        if (r) {
          f = yt(g, p);
          r(f, [], u, a);
          l = f.length;
          while (l--) {
            if (c = f[l]) {
              g[p[l]] = !(m[p[l]] = c)
            }
          }
        }
        if (s) {
          if (i || e) {
            if (i) {
              f = [];
              l = g.length;
              while (l--) {
                if (c = g[l]) {
                  f.push(m[l] = c)
                }
              }
              i(null, g = [], f, a)
            }
            l = g.length;
            while (l--) {
              if ((c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1) {
                s[f] = !(o[f] = c)
              }
            }
          }
        } else {
          g = yt(g === o ? g.splice(d, g.length) : g);
          if (i) {
            i(null, o, g, a)
          } else {
            _.apply(o, g)
          }
        }
      })
    }

    function wt(e) {
      var t, n, i, s = e.length,
        o = r.relative[e[0].type],
        a = o || r.relative[" "],
        f = o ? 1 : 0,
        l = mt(function(e) {
          return e === t
        }, a, true),
        c = mt(function(e) {
          return P.call(t, e) > -1
        }, a, true),
        h = [function(e, n, r) {
          return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
        }];
      for (; f < s; f++) {
        if (n = r.relative[e[f].type]) {
          h = [mt(gt(h), n)]
        } else {
          n = r.filter[e[f].type].apply(null, e[f].matches);
          if (n[y]) {
            i = ++f;
            for (; i < s; i++) {
              if (r.relative[e[i].type]) {
                break
              }
            }
            return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
              value: e[f - 2].type === " " ? "*" : ""
            })).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt(e = e.slice(i)), i < s && vt(e))
          }
          h.push(n)
        }
      }
      return gt(h)
    }

    function Et(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        s = function(s, o, a, f, l) {
          var h, p, d, v = 0,
            m = "0",
            g = s && [],
            y = [],
            b = u,
            E = s || i && r.find.TAG("*", l),
            S = w += b == null ? 1 : Math.random() || 0.1,
            x = E.length;
          if (l) {
            u = o !== c && o
          }
          for (; m !== x && (h = E[m]) != null; m++) {
            if (i && h) {
              p = 0;
              while (d = e[p++]) {
                if (d(h, o, a)) {
                  f.push(h);
                  break
                }
              }
              if (l) {
                w = S
              }
            }
            if (n) {
              if (h = !d && h) {
                v--
              }
              if (s) {
                g.push(h)
              }
            }
          }
          v += m;
          if (n && m !== v) {
            p = 0;
            while (d = t[p++]) {
              d(g, y, o, a)
            }
            if (s) {
              if (v > 0) {
                while (m--) {
                  if (!(g[m] || y[m])) {
                    y[m] = O.call(f)
                  }
                }
              }
              y = yt(y)
            }
            _.apply(f, y);
            if (l && !s && y.length > 0 && v + t.length > 1) {
              rt.uniqueSort(f)
            }
          }
          if (l) {
            w = S;
            u = b
          }
          return g
        };
      return n ? st(s) : s
    }

    function St(e, t, n) {
      var r = 0,
        i = t.length;
      for (; r < i; r++) {
        rt(e, t[r], n)
      }
      return n
    }

    function xt(e, t, i, s) {
      var u, a, f, l, c, h = dt(e);
      if (!s) {
        if (h.length === 1) {
          a = h[0] = h[0].slice(0);
          if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
            t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0];
            if (!t) {
              return i
            }
            e = e.slice(a.shift().value.length)
          }
          u = $.needsContext.test(e) ? 0 : a.length;
          while (u--) {
            f = a[u];
            if (r.relative[l = f.type]) {
              break
            }
            if (c = r.find[l]) {
              if (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t)) {
                a.splice(u, 1);
                e = s.length && vt(a);
                if (!e) {
                  _.apply(i, s);
                  return i
                }
                break
              }
            }
          }
        }
      }
      o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t);
      return i
    }
    var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
      b = e.document,
      w = 0,
      E = 0,
      S = it(),
      x = it(),
      T = it(),
      N = function(e, t) {
        if (e === t) {
          f = true
        }
        return 0
      },
      C = typeof undefined,
      k = 1 << 31,
      L = {}.hasOwnProperty,
      A = [],
      O = A.pop,
      M = A.push,
      _ = A.push,
      D = A.slice,
      P = A.indexOf || function(e) {
        var t = 0,
          n = this.length;
        for (; t < n; t++) {
          if (this[t] === e) {
            return t
          }
        }
        return -1
      },
      H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      B = "[\\x20\\t\\r\\n\\f]",
      j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      F = j.replace("w", "w#"),
      I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
      q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
      R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
      U = new RegExp("^" + B + "*," + B + "*"),
      z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
      W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
      X = new RegExp(q),
      V = new RegExp("^" + F + "$"),
      $ = {
        ID: new RegExp("^#(" + j + ")"),
        CLASS: new RegExp("^\\.(" + j + ")"),
        TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
      },
      J = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Y = /[+~]/,
      Z = /'|\\/g,
      et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
      tt = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
      };
    try {
      _.apply(A = D.call(b.childNodes), b.childNodes);
      A[b.childNodes.length].nodeType
    } catch (nt) {
      _ = {
        apply: A.length ? function(e, t) {
          M.apply(e, D.call(t))
        } : function(e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]) {}
          e.length = n - 1
        }
      }
    }
    n = rt.support = {};
    s = rt.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? t.nodeName !== "HTML" : false
    };
    l = rt.setDocument = function(e) {
      var t, i = e ? e.ownerDocument || e : b,
        o = i.defaultView;
      if (i === c || i.nodeType !== 9 || !i.documentElement) {
        return c
      }
      c = i;
      h = i.documentElement;
      p = !s(i);
      if (o && o !== o.top) {
        if (o.addEventListener) {
          o.addEventListener("unload", function() {
            l()
          }, false)
        } else {
          if (o.attachEvent) {
            o.attachEvent("onunload", function() {
              l()
            })
          }
        }
      }
      n.attributes = ot(function(e) {
        e.className = "i";
        return !e.getAttribute("className")
      });
      n.getElementsByTagName = ot(function(e) {
        e.appendChild(i.createComment(""));
        return !e.getElementsByTagName("*").length
      });
      n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
        e.innerHTML = "<div class='a'></div><div class='a i'></div>";
        e.firstChild.className = "i";
        return e.getElementsByClassName("i").length === 2
      });
      n.getById = ot(function(e) {
        h.appendChild(e).id = y;
        return !i.getElementsByName || !i.getElementsByName(y).length
      });
      if (n.getById) {
        r.find.ID = function(e, t) {
          if (typeof t.getElementById !== C && p) {
            var n = t.getElementById(e);
            return n && n.parentNode ? [n] : []
          }
        };
        r.filter.ID = function(e) {
          var t = e.replace(et, tt);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }
      } else {
        delete r.find.ID;
        r.filter.ID = function(e) {
          var t = e.replace(et, tt);
          return function(e) {
            var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
            return n && n.value === t
          }
        }
      }
      r.find.TAG = n.getElementsByTagName ? function(e, t) {
        if (typeof t.getElementsByTagName !== C) {
          return t.getElementsByTagName(e)
        }
      } : function(e, t) {
        var n, r = [],
          i = 0,
          s = t.getElementsByTagName(e);
        if (e === "*") {
          while (n = s[i++]) {
            if (n.nodeType === 1) {
              r.push(n)
            }
          }
          return r
        }
        return s
      };
      r.find.CLASS = n.getElementsByClassName && function(e, t) {
        if (typeof t.getElementsByClassName !== C && p) {
          return t.getElementsByClassName(e)
        }
      };
      v = [];
      d = [];
      if (n.qsa = Q.test(i.querySelectorAll)) {
        ot(function(e) {
          e.innerHTML = "<select t=''><option selected=''></option></select>";
          if (e.querySelectorAll("[t^='']").length) {
            d.push("[*^$]=" + B + "*(?:''|\"\")")
          }
          if (!e.querySelectorAll("[selected]").length) {
            d.push("\\[" + B + "*(?:value|" + H + ")")
          }
          if (!e.querySelectorAll(":checked").length) {
            d.push(":checked")
          }
        });
        ot(function(e) {
          var t = i.createElement("input");
          t.setAttribute("type", "hidden");
          e.appendChild(t).setAttribute("name", "D");
          if (e.querySelectorAll("[name=d]").length) {
            d.push("name" + B + "*[*^$|!~]?=")
          }
          if (!e.querySelectorAll(":enabled").length) {
            d.push(":enabled", ":disabled")
          }
          e.querySelectorAll("*,:x");
          d.push(",.*:")
        })
      }
      if (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) {
        ot(function(e) {
          n.disconnectedMatch = m.call(e, "div");
          m.call(e, "[s!='']:x");
          v.push("!=", q)
        })
      }
      d = d.length && new RegExp(d.join("|"));
      v = v.length && new RegExp(v.join("|"));
      t = Q.test(h.compareDocumentPosition);
      g = t || Q.test(h.contains) ? function(e, t) {
        var n = e.nodeType === 9 ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
      } : function(e, t) {
        if (t) {
          while (t = t.parentNode) {
            if (t === e) {
              return true
            }
          }
        }
        return false
      };
      N = t ? function(e, t) {
        if (e === t) {
          f = true;
          return 0
        }
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        if (r) {
          return r
        }
        r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
        if (r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r) {
          if (e === i || e.ownerDocument === b && g(b, e)) {
            return -1
          }
          if (t === i || t.ownerDocument === b && g(b, t)) {
            return 1
          }
          return a ? P.call(a, e) - P.call(a, t) : 0
        }
        return r & 4 ? -1 : 1
      } : function(e, t) {
        if (e === t) {
          f = true;
          return 0
        }
        var n, r = 0,
          s = e.parentNode,
          o = t.parentNode,
          u = [e],
          l = [t];
        if (!s || !o) {
          return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0
        } else {
          if (s === o) {
            return at(e, t)
          }
        }
        n = e;
        while (n = n.parentNode) {
          u.unshift(n)
        }
        n = t;
        while (n = n.parentNode) {
          l.unshift(n)
        }
        while (u[r] === l[r]) {
          r++
        }
        return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
      };
      return i
    };
    rt.matches = function(e, t) {
      return rt(e, null, null, t)
    };
    rt.matchesSelector = function(e, t) {
      if ((e.ownerDocument || e) !== c) {
        l(e)
      }
      t = t.replace(W, "='$1']");
      if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t))) {
        try {
          var r = m.call(e, t);
          if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
            return r
          }
        } catch (i) {}
      }
      return rt(t, c, null, [e]).length > 0
    };
    rt.contains = function(e, t) {
      if ((e.ownerDocument || e) !== c) {
        l(e)
      }
      return g(e, t)
    };
    rt.attr = function(e, t) {
      if ((e.ownerDocument || e) !== c) {
        l(e)
      }
      var i = r.attrHandle[t.toLowerCase()],
        s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
      return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
    };
    rt.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    };
    rt.uniqueSort = function(e) {
      var t, r = [],
        i = 0,
        s = 0;
      f = !n.detectDuplicates;
      a = !n.sortStable && e.slice(0);
      e.sort(N);
      if (f) {
        while (t = e[s++]) {
          if (t === e[s]) {
            i = r.push(s)
          }
        }
        while (i--) {
          e.splice(r[i], 1)
        }
      }
      a = null;
      return e
    };
    i = rt.getText = function(e) {
      var t, n = "",
        r = 0,
        s = e.nodeType;
      if (!s) {
        while (t = e[r++]) {
          n += i(t)
        }
      } else {
        if (s === 1 || s === 9 || s === 11) {
          if (typeof e.textContent === "string") {
            return e.textContent
          } else {
            for (e = e.firstChild; e; e = e.nextSibling) {
              n += i(e)
            }
          }
        } else {
          if (s === 3 || s === 4) {
            return e.nodeValue
          }
        }
      }
      return n
    };
    r = rt.selectors = {
      cacheLength: 50,
      createPseudo: st,
      match: $,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          e[1] = e[1].replace(et, tt);
          e[3] = (e[4] || e[5] || "").replace(et, tt);
          if (e[2] === "~=") {
            e[3] = " " + e[3] + " "
          }
          return e.slice(0, 4)
        },
        CHILD: function(e) {
          e[1] = e[1].toLowerCase();
          if (e[1].slice(0, 3) === "nth") {
            if (!e[3]) {
              rt.error(e[0])
            }
            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
            e[5] = +(e[7] + e[8] || e[3] === "odd")
          } else {
            if (e[3]) {
              rt.error(e[0])
            }
          }
          return e
        },
        PSEUDO: function(e) {
          var t, n = !e[5] && e[2];
          if ($.CHILD.test(e[0])) {
            return null
          }
          if (e[3] && e[4] !== undefined) {
            e[2] = e[4]
          } else {
            if (n && X.test(n) && (t = dt(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
              e[0] = e[0].slice(0, t);
              e[2] = n.slice(0, t)
            }
          }
          return e.slice(0, 3)
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(et, tt).toLowerCase();
          return e === "*" ? function() {
            return true
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = S[e + " "];
          return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, t, n) {
          return function(r) {
            var i = rt.attr(r, e);
            if (i == null) {
              return t === "!="
            }
            if (!t) {
              return true
            }
            i += "";
            return t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : false
          }
        },
        CHILD: function(e, t, n, r, i) {
          var s = e.slice(0, 3) !== "nth",
            o = e.slice(-4) !== "last",
            u = t === "of-type";
          return r === 1 && i === 0 ? function(e) {
            return !!e.parentNode
          } : function(t, n, a) {
            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              g = u && t.nodeName.toLowerCase(),
              b = !a && !u;
            if (m) {
              if (s) {
                while (v) {
                  c = t;
                  while (c = c[v]) {
                    if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) {
                      return false
                    }
                  }
                  d = v = e === "only" && !d && "nextSibling"
                }
                return true
              }
              d = [o ? m.firstChild : m.lastChild];
              if (o && b) {
                l = m[y] || (m[y] = {});
                f = l[e] || [];
                p = f[0] === w && f[1];
                h = f[0] === w && f[2];
                c = p && m.childNodes[p];
                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) {
                  if (c.nodeType === 1 && ++h && c === t) {
                    l[e] = [w, p, h];
                    break
                  }
                }
              } else {
                if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) {
                  h = f[1]
                } else {
                  while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) {
                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                      if (b) {
                        (c[y] || (c[y] = {}))[e] = [w, h]
                      }
                      if (c === t) {
                        break
                      }
                    }
                  }
                }
              }
              h -= i;
              return h === r || h % r === 0 && h / r >= 0
            }
          }
        },
        PSEUDO: function(e, t) {
          var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
          if (i[y]) {
            return i(t)
          }
          if (i.length > 1) {
            n = [e, e, "", t];
            return r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
              var r, s = i(e, t),
                o = s.length;
              while (o--) {
                r = P.call(e, s[o]);
                e[r] = !(n[r] = s[o])
              }
            }) : function(e) {
              return i(e, 0, n)
            }
          }
          return i
        }
      },
      pseudos: {
        not: st(function(e) {
          var t = [],
            n = [],
            r = o(e.replace(R, "$1"));
          return r[y] ? st(function(e, t, n, i) {
            var s, o = r(e, null, i, []),
              u = e.length;
            while (u--) {
              if (s = o[u]) {
                e[u] = !(t[u] = s)
              }
            }
          }) : function(e, i, s) {
            t[0] = e;
            r(t, null, s, n);
            return !n.pop()
          }
        }),
        has: st(function(e) {
          return function(t) {
            return rt(e, t).length > 0
          }
        }),
        contains: st(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
          }
        }),
        lang: st(function(e) {
          if (!V.test(e || "")) {
            rt.error("unsupported lang: " + e)
          }
          e = e.replace(et, tt).toLowerCase();
          return function(t) {
            var n;
            do {
              if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                n = n.toLowerCase();
                return n === e || n.indexOf(e + "-") === 0
              }
            } while ((t = t.parentNode) && t.nodeType === 1);
            return false
          }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === h
        },
        focus: function(e) {
          return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === false
        },
        disabled: function(e) {
          return e.disabled === true
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && !!e.checked || t === "option" && !!e.selected
        },
        selected: function(e) {
          if (e.parentNode) {
            e.parentNode.selectedIndex
          }
          return e.selected === true
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) {
              return false
            }
          }
          return true
        },
        parent: function(e) {
          return !r.pseudos.empty(e)
        },
        header: function(e) {
          return K.test(e.nodeName)
        },
        input: function(e) {
          return J.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && e.type === "button" || t === "button"
        },
        text: function(e) {
          var t;
          return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
        },
        first: ct(function() {
          return [0]
        }),
        last: ct(function(e, t) {
          return [t - 1]
        }),
        eq: ct(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: ct(function(e, t) {
          var n = 0;
          for (; n < t; n += 2) {
            e.push(n)
          }
          return e
        }),
        odd: ct(function(e, t) {
          var n = 1;
          for (; n < t; n += 2) {
            e.push(n)
          }
          return e
        }),
        lt: ct(function(e, t, n) {
          var r = n < 0 ? n + t : n;
          for (; --r >= 0;) {
            e.push(r)
          }
          return e
        }),
        gt: ct(function(e, t, n) {
          var r = n < 0 ? n + t : n;
          for (; ++r < t;) {
            e.push(r)
          }
          return e
        })
      }
    };
    r.pseudos.nth = r.pseudos.eq;
    for (t in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) {
      r.pseudos[t] = ft(t)
    }
    for (t in {
        submit: true,
        reset: true
      }) {
      r.pseudos[t] = lt(t)
    }
    pt.prototype = r.filters = r.pseudos;
    r.setFilters = new pt;
    o = rt.compile = function(e, t) {
      var n, r = [],
        i = [],
        s = T[e + " "];
      if (!s) {
        if (!t) {
          t = dt(e)
        }
        n = t.length;
        while (n--) {
          s = wt(t[n]);
          if (s[y]) {
            r.push(s)
          } else {
            i.push(s)
          }
        }
        s = T(e, Et(i, r))
      }
      return s
    };
    n.sortStable = y.split("").sort(N).join("") === y;
    n.detectDuplicates = !!f;
    l();
    n.sortDetached = ot(function(e) {
      return e.compareDocumentPosition(c.createElement("div")) & 1
    });
    if (!ot(function(e) {
        e.innerHTML = "<a href='#'></a>";
        return e.firstChild.getAttribute("href") === "#"
      })) {
      ut("type|href|height|width", function(e, t, n) {
        if (!n) {
          return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }
      })
    }
    if (!n.attributes || !ot(function(e) {
        e.innerHTML = "<input/>";
        e.firstChild.setAttribute("value", "");
        return e.firstChild.getAttribute("value") === ""
      })) {
      ut("value", function(e, t, n) {
        if (!n && e.nodeName.toLowerCase() === "input") {
          return e.defaultValue
        }
      })
    }
    if (!ot(function(e) {
        return e.getAttribute("disabled") == null
      })) {
      ut(H, function(e, t, n) {
        var r;
        if (!n) {
          return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
      })
    }
    return rt
  }(e);
  p.find = b;
  p.expr = b.selectors;
  p.expr[":"] = p.expr.pseudos;
  p.unique = b.uniqueSort;
  p.text = b.getText;
  p.isXMLDoc = b.isXML;
  p.contains = b.contains;
  var w = p.expr.match.needsContext;
  var E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var S = /^.[^:#\[\.,]*$/;
  p.filter = function(e, t, n) {
    var r = t[0];
    if (n) {
      e = ":not(" + e + ")"
    }
    return t.length === 1 && r.nodeType === 1 ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
      return e.nodeType === 1
    }))
  };
  p.fn.extend({
    find: function(e) {
      var t, n = [],
        r = this,
        i = r.length;
      if (typeof e !== "string") {
        return this.pushStack(p(e).filter(function() {
          for (t = 0; t < i; t++) {
            if (p.contains(r[t], this)) {
              return true
            }
          }
        }))
      }
      for (t = 0; t < i; t++) {
        p.find(e, r[t], n)
      }
      n = this.pushStack(i > 1 ? p.unique(n) : n);
      n.selector = this.selector ? this.selector + " " + e : e;
      return n
    },
    filter: function(e) {
      return this.pushStack(x(this, e || [], false))
    },
    not: function(e) {
      return this.pushStack(x(this, e || [], true))
    },
    is: function(e) {
      return !!x(this, typeof e === "string" && w.test(e) ? p(e) : e || [], false).length
    }
  });
  var T, N = e.document,
    C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    k = p.fn.init = function(e, t) {
      var n, r;
      if (!e) {
        return this
      }
      if (typeof e === "string") {
        if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
          n = [null, e, null]
        } else {
          n = C.exec(e)
        }
        if (n && (n[1] || !t)) {
          if (n[1]) {
            t = t instanceof p ? t[0] : t;
            p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, true));
            if (E.test(n[1]) && p.isPlainObject(t)) {
              for (n in t) {
                if (p.isFunction(this[n])) {
                  this[n](t[n])
                } else {
                  this.attr(n, t[n])
                }
              }
            }
            return this
          } else {
            r = N.getElementById(n[2]);
            if (r && r.parentNode) {
              if (r.id !== n[2]) {
                return T.find(e)
              }
              this.length = 1;
              this[0] = r
            }
            this.context = N;
            this.selector = e;
            return this
          }
        } else {
          if (!t || t.jquery) {
            return (t || T).find(e)
          } else {
            return this.constructor(t).find(e)
          }
        }
      } else {
        if (e.nodeType) {
          this.context = this[0] = e;
          this.length = 1;
          return this
        } else {
          if (p.isFunction(e)) {
            return typeof T.ready !== "undefined" ? T.ready(e) : e(p)
          }
        }
      }
      if (e.selector !== undefined) {
        this.selector = e.selector;
        this.context = e.context
      }
      return p.makeArray(e, this)
    };
  k.prototype = p.fn;
  T = p(N);
  var L = /^(?:parents|prev(?:Until|All))/,
    A = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
  p.extend({
    dir: function(e, t, n) {
      var r = [],
        i = e[t];
      while (i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !p(i).is(n))) {
        if (i.nodeType === 1) {
          r.push(i)
        }
        i = i[t]
      }
      return r
    },
    sibling: function(e, t) {
      var n = [];
      for (; e; e = e.nextSibling) {
        if (e.nodeType === 1 && e !== t) {
          n.push(e)
        }
      }
      return n
    }
  });
  p.fn.extend({
    has: function(e) {
      var t, n = p(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; t < r; t++) {
          if (p.contains(this, n[t])) {
            return true
          }
        }
      })
    },
    closest: function(e, t) {
      var n, r = 0,
        i = this.length,
        s = [],
        o = w.test(e) || typeof e !== "string" ? p(e, t || this.context) : 0;
      for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && p.find.matchesSelector(n, e))) {
            s.push(n);
            break
          }
        }
      }
      return this.pushStack(s.length > 1 ? p.unique(s) : s)
    },
    index: function(e) {
      if (!e) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }
      if (typeof e === "string") {
        return p.inArray(this[0], p(e))
      }
      return p.inArray(e.jquery ? e[0] : e, this)
    },
    add: function(e, t) {
      return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
    },
    addBack: function(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
  });
  p.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && t.nodeType !== 11 ? t : null
    },
    parents: function(e) {
      return p.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return p.dir(e, "parentNode", n)
    },
    next: function(e) {
      return O(e, "nextSibling")
    },
    prev: function(e) {
      return O(e, "previousSibling")
    },
    nextAll: function(e) {
      return p.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return p.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return p.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return p.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return p.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return p.sibling(e.firstChild)
    },
    contents: function(e) {
      return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
    }
  }, function(e, t) {
    p.fn[e] = function(n, r) {
      var i = p.map(this, t, n);
      if (e.slice(-5) !== "Until") {
        r = n
      }
      if (r && typeof r === "string") {
        i = p.filter(r, i)
      }
      if (this.length > 1) {
        if (!A[e]) {
          i = p.unique(i)
        }
        if (L.test(e)) {
          i = i.reverse()
        }
      }
      return this.pushStack(i)
    }
  });
  var M = /\S+/g;
  var _ = {};
  p.Callbacks = function(e) {
    e = typeof e === "string" ? _[e] || D(e) : p.extend({}, e);
    var t, n, r, i, s, o, u = [],
      a = !e.once && [],
      f = function(c) {
        n = e.memory && c;
        r = true;
        s = o || 0;
        o = 0;
        i = u.length;
        t = true;
        for (; u && s < i; s++) {
          if (u[s].apply(c[0], c[1]) === false && e.stopOnFalse) {
            n = false;
            break
          }
        }
        t = false;
        if (u) {
          if (a) {
            if (a.length) {
              f(a.shift())
            }
          } else {
            if (n) {
              u = []
            } else {
              l.disable()
            }
          }
        }
      },
      l = {
        add: function() {
          if (u) {
            var r = u.length;
            (function s(t) {
              p.each(t, function(t, n) {
                var r = p.type(n);
                if (r === "function") {
                  if (!e.unique || !l.has(n)) {
                    u.push(n)
                  }
                } else {
                  if (n && n.length && r !== "string") {
                    s(n)
                  }
                }
              })
            })(arguments);
            if (t) {
              i = u.length
            } else {
              if (n) {
                o = r;
                f(n)
              }
            }
          }
          return this
        },
        remove: function() {
          if (u) {
            p.each(arguments, function(e, n) {
              var r;
              while ((r = p.inArray(n, u, r)) > -1) {
                u.splice(r, 1);
                if (t) {
                  if (r <= i) {
                    i--
                  }
                  if (r <= s) {
                    s--
                  }
                }
              }
            })
          }
          return this
        },
        has: function(e) {
          return e ? p.inArray(e, u) > -1 : !!(u && u.length)
        },
        empty: function() {
          u = [];
          i = 0;
          return this
        },
        disable: function() {
          u = a = n = undefined;
          return this
        },
        disabled: function() {
          return !u
        },
        lock: function() {
          a = undefined;
          if (!n) {
            l.disable()
          }
          return this
        },
        locked: function() {
          return !a
        },
        fireWith: function(e, n) {
          if (u && (!r || a)) {
            n = n || [];
            n = [e, n.slice ? n.slice() : n];
            if (t) {
              a.push(n)
            } else {
              f(n)
            }
          }
          return this
        },
        fire: function() {
          l.fireWith(this, arguments);
          return this
        },
        fired: function() {
          return !!r
        }
      };
    return l
  };
  p.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", p.Callbacks("once memory"), "resolved"],
          ["reject", "fail", p.Callbacks("once memory"), "rejected"],
          ["notify", "progress", p.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            i.done(arguments).fail(arguments);
            return this
          },
          then: function() {
            var e = arguments;
            return p.Deferred(function(n) {
              p.each(t, function(t, s) {
                var o = p.isFunction(e[t]) && e[t];
                i[s[1]](function() {
                  var e = o && o.apply(this, arguments);
                  if (e && p.isFunction(e.promise)) {
                    e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                  } else {
                    n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                  }
                })
              });
              e = null
            }).promise()
          },
          promise: function(e) {
            return e != null ? p.extend(e, r) : r
          }
        },
        i = {};
      r.pipe = r.then;
      p.each(t, function(e, s) {
        var o = s[2],
          u = s[3];
        r[s[1]] = o.add;
        if (u) {
          o.add(function() {
            n = u
          }, t[e ^ 1][2].disable, t[2][2].lock)
        }
        i[s[0]] = function() {
          i[s[0] + "With"](this === i ? r : this, arguments);
          return this
        };
        i[s[0] + "With"] = o.fireWith
      });
      r.promise(i);
      if (e) {
        e.call(i, i)
      }
      return i
    },
    when: function(e) {
      var t = 0,
        n = r.call(arguments),
        i = n.length,
        s = i !== 1 || e && p.isFunction(e.promise) ? i : 0,
        o = s === 1 ? e : p.Deferred(),
        u = function(e, t, n) {
          return function(i) {
            t[e] = this;
            n[e] = arguments.length > 1 ? r.call(arguments) : i;
            if (n === a) {
              o.notifyWith(t, n)
            } else {
              if (!--s) {
                o.resolveWith(t, n)
              }
            }
          }
        },
        a, f, l;
      if (i > 1) {
        a = new Array(i);
        f = new Array(i);
        l = new Array(i);
        for (; t < i; t++) {
          if (n[t] && p.isFunction(n[t].promise)) {
            n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a))
          } else {
            --s
          }
        }
      }
      if (!s) {
        o.resolveWith(l, n)
      }
      return o.promise()
    }
  });
  var P;
  p.fn.ready = function(e) {
    p.ready.promise().done(e);
    return this
  };
  p.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(e) {
      if (e) {
        p.readyWait++
      } else {
        p.ready(true)
      }
    },
    ready: function(e) {
      if (e === true ? --p.readyWait : p.isReady) {
        return
      }
      if (!N.body) {
        return setTimeout(p.ready)
      }
      p.isReady = true;
      if (e !== true && --p.readyWait > 0) {
        return
      }
      P.resolveWith(N, [p]);
      if (p.fn.trigger) {
        p(N).trigger("ready").off("ready")
      }
    }
  });
  p.ready.promise = function(t) {
    if (!P) {
      P = p.Deferred();
      if (N.readyState === "complete") {
        setTimeout(p.ready)
      } else {
        if (N.addEventListener) {
          N.addEventListener("DOMContentLoaded", B, false);
          e.addEventListener("load", B, false)
        } else {
          N.attachEvent("onreadystatechange", B);
          e.attachEvent("onload", B);
          var n = false;
          try {
            n = e.frameElement == null && N.documentElement
          } catch (r) {}
          if (n && n.doScroll) {
            (function i() {
              if (!p.isReady) {
                try {
                  n.doScroll("left")
                } catch (e) {
                  return setTimeout(i, 50)
                }
                H();
                p.ready()
              }
            })()
          }
        }
      }
    }
    return P.promise(t)
  };
  var j = typeof undefined;
  var F;
  for (F in p(c)) {
    break
  }
  c.ownLast = F !== "0";
  c.inlineBlockNeedsLayout = false;
  p(function() {
    var e, t, n = N.getElementsByTagName("body")[0];
    if (!n) {
      return
    }
    e = N.createElement("div");
    e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
    t = N.createElement("div");
    n.appendChild(e).appendChild(t);
    if (typeof t.style.zoom !== j) {
      t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1";
      if (c.inlineBlockNeedsLayout = t.offsetWidth === 3) {
        n.style.zoom = 1
      }
    }
    n.removeChild(e);
    e = t = null
  });
  (function() {
    var e = N.createElement("div");
    if (c.deleteExpando == null) {
      c.deleteExpando = true;
      try {
        delete e.test
      } catch (t) {
        c.deleteExpando = false
      }
    }
    e = null
  })();
  p.acceptData = function(e) {
    var t = p.noData[(e.nodeName + " ").toLowerCase()],
      n = +e.nodeType || 1;
    return n !== 1 && n !== 9 ? false : !t || t !== true && e.getAttribute("classid") === t
  };
  var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    q = /([A-Z])/g;
  p.extend({
    cache: {},
    noData: {
      "applet ": true,
      "embed ": true,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando];
      return !!e && !U(e)
    },
    data: function(e, t, n) {
      return z(e, t, n)
    },
    removeData: function(e, t) {
      return W(e, t)
    },
    _data: function(e, t, n) {
      return z(e, t, n, true)
    },
    _removeData: function(e, t) {
      return W(e, t, true)
    }
  });
  p.fn.extend({
    data: function(e, t) {
      var n, r, i, s = this[0],
        o = s && s.attributes;
      if (e === undefined) {
        if (this.length) {
          i = p.data(s);
          if (s.nodeType === 1 && !p._data(s, "parsedAttrs")) {
            n = o.length;
            while (n--) {
              r = o[n].name;
              if (r.indexOf("data-") === 0) {
                r = p.camelCase(r.slice(5));
                R(s, r, i[r])
              }
            }
            p._data(s, "parsedAttrs", true)
          }
        }
        return i
      }
      if (typeof e === "object") {
        return this.each(function() {
          p.data(this, e)
        })
      }
      return arguments.length > 1 ? this.each(function() {
        p.data(this, e, t)
      }) : s ? R(s, e, p.data(s, e)) : undefined
    },
    removeData: function(e) {
      return this.each(function() {
        p.removeData(this, e)
      })
    }
  });
  p.extend({
    queue: function(e, t, n) {
      var r;
      if (e) {
        t = (t || "fx") + "queue";
        r = p._data(e, t);
        if (n) {
          if (!r || p.isArray(n)) {
            r = p._data(e, t, p.makeArray(n))
          } else {
            r.push(n)
          }
        }
        return r || []
      }
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = p.queue(e, t),
        r = n.length,
        i = n.shift(),
        s = p._queueHooks(e, t),
        o = function() {
          p.dequeue(e, t)
        };
      if (i === "inprogress") {
        i = n.shift();
        r--
      }
      if (i) {
        if (t === "fx") {
          n.unshift("inprogress")
        }
        delete s.stop;
        i.call(e, o, s)
      }
      if (!r && s) {
        s.empty.fire()
      }
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return p._data(e, n) || p._data(e, n, {
        empty: p.Callbacks("once memory").add(function() {
          p._removeData(e, t + "queue");
          p._removeData(e, n)
        })
      })
    }
  });
  p.fn.extend({
    queue: function(e, t) {
      var n = 2;
      if (typeof e !== "string") {
        t = e;
        e = "fx";
        n--
      }
      if (arguments.length < n) {
        return p.queue(this[0], e)
      }
      return t === undefined ? this : this.each(function() {
        var n = p.queue(this, e, t);
        p._queueHooks(this, e);
        if (e === "fx" && n[0] !== "inprogress") {
          p.dequeue(this, e)
        }
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        p.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = p.Deferred(),
        s = this,
        o = this.length,
        u = function() {
          if (!--r) {
            i.resolveWith(s, [s])
          }
        };
      if (typeof e !== "string") {
        t = e;
        e = undefined
      }
      e = e || "fx";
      while (o--) {
        n = p._data(s[o], e + "queueHooks");
        if (n && n.empty) {
          r++;
          n.empty.add(u)
        }
      }
      u();
      return i.promise(t)
    }
  });
  var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var V = ["Top", "Right", "Bottom", "Left"];
  var $ = function(e, t) {
    e = t || e;
    return p.css(e, "display") === "none" || !p.contains(e.ownerDocument, e)
  };
  var J = p.access = function(e, t, n, r, i, s, o) {
    var u = 0,
      a = e.length,
      f = n == null;
    if (p.type(n) === "object") {
      i = true;
      for (u in n) {
        p.access(e, t, u, n[u], true, s, o)
      }
    } else {
      if (r !== undefined) {
        i = true;
        if (!p.isFunction(r)) {
          o = true
        }
        if (f) {
          if (o) {
            t.call(e, r);
            t = null
          } else {
            f = t;
            t = function(e, t, n) {
              return f.call(p(e), n)
            }
          }
        }
        if (t) {
          for (; u < a; u++) {
            t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
          }
        }
      }
    }
    return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
  };
  var K = /^(?:checkbox|radio)$/i;
  (function() {
    var e = N.createDocumentFragment(),
      t = N.createElement("div"),
      n = N.createElement("input");
    t.setAttribute("className", "t");
    t.innerHTML = "  <link/><table></table><a href='/a'>a</a>";
    c.leadingWhitespace = t.firstChild.nodeType === 3;
    c.tbody = !t.getElementsByTagName("tbody").length;
    c.htmlSerialize = !!t.getElementsByTagName("link").length;
    c.html5Clone = N.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
    n.type = "checkbox";
    n.checked = true;
    e.appendChild(n);
    c.appendChecked = n.checked;
    t.innerHTML = "<textarea>x</textarea>";
    c.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
    e.appendChild(t);
    t.innerHTML = "<input type='radio' checked='checked' name='t'/>";
    c.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
    c.noCloneEvent = true;
    if (t.attachEvent) {
      t.attachEvent("onclick", function() {
        c.noCloneEvent = false
      });
      t.cloneNode(true).click()
    }
    if (c.deleteExpando == null) {
      c.deleteExpando = true;
      try {
        delete t.test
      } catch (r) {
        c.deleteExpando = false
      }
    }
    e = t = n = null
  })();
  (function() {
    var t, n, r = N.createElement("div");
    for (t in {
        submit: true,
        change: true,
        focusin: true
      }) {
      n = "on" + t;
      if (!(c[t + "Bubbles"] = n in e)) {
        r.setAttribute(n, "t");
        c[t + "Bubbles"] = r.attributes[n].expando === false
      }
    }
    r = null
  })();
  var Q = /^(?:input|select|textarea)$/i,
    G = /^key/,
    Y = /^(?:mouse|contextmenu)|click/,
    Z = /^(?:focusinfocus|focusoutblur)$/,
    et = /^([^.]*)(?:\.(.+)|)$/;
  p.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
      if (!g) {
        return
      }
      if (n.handler) {
        a = n;
        n = a.handler;
        i = a.selector
      }
      if (!n.guid) {
        n.guid = p.guid++
      }
      if (!(o = g.events)) {
        o = g.events = {}
      }
      if (!(l = g.handle)) {
        l = g.handle = function(e) {
          return typeof p !== j && (!e || p.event.triggered !== e.type) ? p.event.dispatch.apply(l.elem, arguments) : undefined
        };
        l.elem = e
      }
      t = (t || "").match(M) || [""];
      u = t.length;
      while (u--) {
        s = et.exec(t[u]) || [];
        d = m = s[1];
        v = (s[2] || "").split(".").sort();
        if (!d) {
          continue
        }
        f = p.event.special[d] || {};
        d = (i ? f.delegateType : f.bindType) || d;
        f = p.event.special[d] || {};
        c = p.extend({
          type: d,
          origType: m,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && p.expr.match.needsContext.test(i),
          namespace: v.join(".")
        }, a);
        if (!(h = o[d])) {
          h = o[d] = [];
          h.delegateCount = 0;
          if (!f.setup || f.setup.call(e, r, v, l) === false) {
            if (e.addEventListener) {
              e.addEventListener(d, l, false)
            } else {
              if (e.attachEvent) {
                e.attachEvent("on" + d, l)
              }
            }
          }
        }
        if (f.add) {
          f.add.call(e, c);
          if (!c.handler.guid) {
            c.handler.guid = n.guid
          }
        }
        if (i) {
          h.splice(h.delegateCount++, 0, c)
        } else {
          h.push(c)
        }
        p.event.global[d] = true
      }
      e = null
    },
    remove: function(e, t, n, r, i) {
      var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
      if (!g || !(l = g.events)) {
        return
      }
      t = (t || "").match(M) || [""];
      f = t.length;
      while (f--) {
        u = et.exec(t[f]) || [];
        d = m = u[1];
        v = (u[2] || "").split(".").sort();
        if (!d) {
          for (d in l) {
            p.event.remove(e, d + t[f], n, r, true)
          }
          continue
        }
        c = p.event.special[d] || {};
        d = (r ? c.delegateType : c.bindType) || d;
        h = l[d] || [];
        u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)");
        a = s = h.length;
        while (s--) {
          o = h[s];
          if ((i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector)) {
            h.splice(s, 1);
            if (o.selector) {
              h.delegateCount--
            }
            if (c.remove) {
              c.remove.call(e, o)
            }
          }
        }
        if (a && !h.length) {
          if (!c.teardown || c.teardown.call(e, v, g.handle) === false) {
            p.removeEvent(e, d, g.handle)
          }
          delete l[d]
        }
      }
      if (p.isEmptyObject(l)) {
        delete g.handle;
        p._removeData(e, "events")
      }
    },
    trigger: function(t, n, r, i) {
      var s, o, u, a, l, c, h, d = [r || N],
        v = f.call(t, "type") ? t.type : t,
        m = f.call(t, "namespace") ? t.namespace.split(".") : [];
      u = c = r = r || N;
      if (r.nodeType === 3 || r.nodeType === 8) {
        return
      }
      if (Z.test(v + p.event.triggered)) {
        return
      }
      if (v.indexOf(".") >= 0) {
        m = v.split(".");
        v = m.shift();
        m.sort()
      }
      o = v.indexOf(":") < 0 && "on" + v;
      t = t[p.expando] ? t : new p.Event(v, typeof t === "object" && t);
      t.isTrigger = i ? 2 : 3;
      t.namespace = m.join(".");
      t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      t.result = undefined;
      if (!t.target) {
        t.target = r
      }
      n = n == null ? [t] : p.makeArray(n, [t]);
      l = p.event.special[v] || {};
      if (!i && l.trigger && l.trigger.apply(r, n) === false) {
        return
      }
      if (!i && !l.noBubble && !p.isWindow(r)) {
        a = l.delegateType || v;
        if (!Z.test(a + v)) {
          u = u.parentNode
        }
        for (; u; u = u.parentNode) {
          d.push(u);
          c = u
        }
        if (c === (r.ownerDocument || N)) {
          d.push(c.defaultView || c.parentWindow || e)
        }
      }
      h = 0;
      while ((u = d[h++]) && !t.isPropagationStopped()) {
        t.type = h > 1 ? a : l.bindType || v;
        s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle");
        if (s) {
          s.apply(u, n)
        }
        s = o && u[o];
        if (s && s.apply && p.acceptData(u)) {
          t.result = s.apply(u, n);
          if (t.result === false) {
            t.preventDefault()
          }
        }
      }
      t.type = v;
      if (!i && !t.isDefaultPrevented()) {
        if ((!l._default || l._default.apply(d.pop(), n) === false) && p.acceptData(r)) {
          if (o && r[v] && !p.isWindow(r)) {
            c = r[o];
            if (c) {
              r[o] = null
            }
            p.event.triggered = v;
            try {
              r[v]()
            } catch (g) {}
            p.event.triggered = undefined;
            if (c) {
              r[o] = c
            }
          }
        }
      }
      return t.result
    },
    dispatch: function(e) {
      e = p.event.fix(e);
      var t, n, i, s, o, u = [],
        a = r.call(arguments),
        f = (p._data(this, "events") || {})[e.type] || [],
        l = p.event.special[e.type] || {};
      a[0] = e;
      e.delegateTarget = this;
      if (l.preDispatch && l.preDispatch.call(this, e) === false) {
        return
      }
      u = p.event.handlers.call(this, e, f);
      t = 0;
      while ((s = u[t++]) && !e.isPropagationStopped()) {
        e.currentTarget = s.elem;
        o = 0;
        while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) {
          if (!e.namespace_re || e.namespace_re.test(i.namespace)) {
            e.handleObj = i;
            e.data = i.data;
            n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a);
            if (n !== undefined) {
              if ((e.result = n) === false) {
                e.preventDefault();
                e.stopPropagation()
              }
            }
          }
        }
      }
      if (l.postDispatch) {
        l.postDispatch.call(this, e)
      }
      return e.result
    },
    handlers: function(e, t) {
      var n, r, i, s, o = [],
        u = t.delegateCount,
        a = e.target;
      if (u && a.nodeType && (!e.button || e.type !== "click")) {
        for (; a != this; a = a.parentNode || this) {
          if (a.nodeType === 1 && (a.disabled !== true || e.type !== "click")) {
            i = [];
            for (s = 0; s < u; s++) {
              r = t[s];
              n = r.selector + " ";
              if (i[n] === undefined) {
                i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length
              }
              if (i[n]) {
                i.push(r)
              }
            }
            if (i.length) {
              o.push({
                elem: a,
                handlers: i
              })
            }
          }
        }
      }
      if (u < t.length) {
        o.push({
          elem: this,
          handlers: t.slice(u)
        })
      }
      return o
    },
    fix: function(e) {
      if (e[p.expando]) {
        return e
      }
      var t, n, r, i = e.type,
        s = e,
        o = this.fixHooks[i];
      if (!o) {
        this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}
      }
      r = o.props ? this.props.concat(o.props) : this.props;
      e = new p.Event(s);
      t = r.length;
      while (t--) {
        n = r[t];
        e[n] = s[n]
      }
      if (!e.target) {
        e.target = s.srcElement || N
      }
      if (e.target.nodeType === 3) {
        e.target = e.target.parentNode
      }
      e.metaKey = !!e.metaKey;
      return o.filter ? o.filter(e, s) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        if (e.which == null) {
          e.which = t.charCode != null ? t.charCode : t.keyCode
        }
        return e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, r, i, s = t.button,
          o = t.fromElement;
        if (e.pageX == null && t.clientX != null) {
          r = e.target.ownerDocument || N;
          i = r.documentElement;
          n = r.body;
          e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0);
          e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)
        }
        if (!e.relatedTarget && o) {
          e.relatedTarget = o === e.target ? t.toElement : o
        }
        if (!e.which && s !== undefined) {
          e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0
        }
        return e
      }
    },
    special: {
      load: {
        noBubble: true
      },
      focus: {
        trigger: function() {
          if (this !== rt() && this.focus) {
            try {
              this.focus();
              return false
            } catch (e) {}
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === rt() && this.blur) {
            this.blur();
            return false
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (p.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false
          }
        },
        _default: function(e) {
          return p.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          if (e.result !== undefined) {
            e.originalEvent.returnValue = e.result
          }
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = p.extend(new p.Event, n, {
        type: e,
        isSimulated: true,
        originalEvent: {}
      });
      if (r) {
        p.event.trigger(i, null, t)
      } else {
        p.event.dispatch.call(t, i)
      }
      if (i.isDefaultPrevented()) {
        n.preventDefault()
      }
    }
  };
  p.removeEvent = N.removeEventListener ? function(e, t, n) {
    if (e.removeEventListener) {
      e.removeEventListener(t, n, false)
    }
  } : function(e, t, n) {
    var r = "on" + t;
    if (e.detachEvent) {
      if (typeof e[r] === j) {
        e[r] = null
      }
      e.detachEvent(r, n)
    }
  };
  p.Event = function(e, t) {
    if (!(this instanceof p.Event)) {
      return new p.Event(e, t)
    }
    if (e && e.type) {
      this.originalEvent = e;
      this.type = e.type;
      this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && (e.returnValue === false || e.getPreventDefault && e.getPreventDefault()) ? tt : nt
    } else {
      this.type = e
    }
    if (t) {
      p.extend(this, t)
    }
    this.timeStamp = e && e.timeStamp || p.now();
    this[p.expando] = true
  };
  p.Event.prototype = {
    isDefaultPrevented: nt,
    isPropagationStopped: nt,
    isImmediatePropagationStopped: nt,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = tt;
      if (!e) {
        return
      }
      if (e.preventDefault) {
        e.preventDefault()
      } else {
        e.returnValue = false
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = tt;
      if (!e) {
        return
      }
      if (e.stopPropagation) {
        e.stopPropagation()
      }
      e.cancelBubble = true
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = tt;
      this.stopPropagation()
    }
  };
  p.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    p.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          s = e.handleObj;
        if (!i || i !== r && !p.contains(r, i)) {
          e.type = s.origType;
          n = s.handler.apply(this, arguments);
          e.type = t
        }
        return n
      }
    }
  });
  if (!c.submitBubbles) {
    p.event.special.submit = {
      setup: function() {
        if (p.nodeName(this, "form")) {
          return false
        }
        p.event.add(this, "click._submit keypress._submit", function(e) {
          var t = e.target,
            n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : undefined;
          if (n && !p._data(n, "submitBubbles")) {
            p.event.add(n, "submit._submit", function(e) {
              e._submit_bubble = true
            });
            p._data(n, "submitBubbles", true)
          }
        })
      },
      postDispatch: function(e) {
        if (e._submit_bubble) {
          delete e._submit_bubble;
          if (this.parentNode && !e.isTrigger) {
            p.event.simulate("submit", this.parentNode, e, true)
          }
        }
      },
      teardown: function() {
        if (p.nodeName(this, "form")) {
          return false
        }
        p.event.remove(this, "._submit")
      }
    }
  }
  if (!c.changeBubbles) {
    p.event.special.change = {
      setup: function() {
        if (Q.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            p.event.add(this, "propertychange._change", function(e) {
              if (e.originalEvent.propertyName === "checked") {
                this._just_changed = true
              }
            });
            p.event.add(this, "click._change", function(e) {
              if (this._just_changed && !e.isTrigger) {
                this._just_changed = false
              }
              p.event.simulate("change", this, e, true)
            })
          }
          return false
        }
        p.event.add(this, "beforeactivate._change", function(e) {
          var t = e.target;
          if (Q.test(t.nodeName) && !p._data(t, "changeBubbles")) {
            p.event.add(t, "change._change", function(e) {
              if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                p.event.simulate("change", this.parentNode, e, true)
              }
            });
            p._data(t, "changeBubbles", true)
          }
        })
      },
      handle: function(e) {
        var t = e.target;
        if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") {
          return e.handleObj.handler.apply(this, arguments)
        }
      },
      teardown: function() {
        p.event.remove(this, "._change");
        return !Q.test(this.nodeName)
      }
    }
  }
  if (!c.focusinBubbles) {
    p.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        p.event.simulate(t, e.target, p.event.fix(e), true)
      };
      p.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this,
            i = p._data(r, t);
          if (!i) {
            r.addEventListener(e, n, true)
          }
          p._data(r, t, (i || 0) + 1)
        },
        teardown: function() {
          var r = this.ownerDocument || this,
            i = p._data(r, t) - 1;
          if (!i) {
            r.removeEventListener(e, n, true);
            p._removeData(r, t)
          } else {
            p._data(r, t, i)
          }
        }
      }
    })
  }
  p.fn.extend({
    on: function(e, t, n, r, i) {
      var s, o;
      if (typeof e === "object") {
        if (typeof t !== "string") {
          n = n || t;
          t = undefined
        }
        for (s in e) {
          this.on(s, t, n, e[s], i)
        }
        return this
      }
      if (n == null && r == null) {
        r = t;
        n = t = undefined
      } else {
        if (r == null) {
          if (typeof t === "string") {
            r = n;
            n = undefined
          } else {
            r = n;
            n = t;
            t = undefined
          }
        }
      }
      if (r === false) {
        r = nt
      } else {
        if (!r) {
          return this
        }
      }
      if (i === 1) {
        o = r;
        r = function(e) {
          p().off(e);
          return o.apply(this, arguments)
        };
        r.guid = o.guid || (o.guid = p.guid++)
      }
      return this.each(function() {
        p.event.add(this, e, r, n, t)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) {
        r = e.handleObj;
        p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
        return this
      }
      if (typeof e === "object") {
        for (i in e) {
          this.off(i, t, e[i])
        }
        return this
      }
      if (t === false || typeof t === "function") {
        n = t;
        t = undefined
      }
      if (n === false) {
        n = nt
      }
      return this.each(function() {
        p.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        p.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) {
        return p.event.trigger(e, t, n, true)
      }
    }
  });
  var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ot = / jQuery\d+="(?:null|\d+)"/g,
    ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
    at = /^\s+/,
    ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    lt = /<([\w:]+)/,
    ct = /<tbody/i,
    ht = /<|&#?\w+;/,
    pt = /<(?:script|style|link)/i,
    dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    vt = /^$|\/(?:java|ecma)script/i,
    mt = /^true\/(.*)/,
    gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    yt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    bt = it(N),
    wt = bt.appendChild(N.createElement("div"));
  yt.optgroup = yt.option;
  yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead;
  yt.th = yt.td;
  p.extend({
    clone: function(e, t, n) {
      var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
      if (c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">")) {
        s = e.cloneNode(true)
      } else {
        wt.innerHTML = e.outerHTML;
        wt.removeChild(s = wt.firstChild)
      }
      if ((!c.noCloneEvent || !c.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !p.isXMLDoc(e)) {
        r = Et(s);
        u = Et(e);
        for (o = 0;
          (i = u[o]) != null; ++o) {
          if (r[o]) {
            Lt(i, r[o])
          }
        }
      }
      if (t) {
        if (n) {
          u = u || Et(e);
          r = r || Et(s);
          for (o = 0;
            (i = u[o]) != null; o++) {
            kt(i, r[o])
          }
        } else {
          kt(e, s)
        }
      }
      r = Et(s, "script");
      if (r.length > 0) {
        Ct(r, !a && Et(e, "script"))
      }
      r = u = i = null;
      return s
    },
    buildFragment: function(e, t, n, r) {
      var i, s, o, u, a, f, l, h = e.length,
        d = it(t),
        v = [],
        m = 0;
      for (; m < h; m++) {
        s = e[m];
        if (s || s === 0) {
          if (p.type(s) === "object") {
            p.merge(v, s.nodeType ? [s] : s)
          } else {
            if (!ht.test(s)) {
              v.push(t.createTextNode(s))
            } else {
              u = u || d.appendChild(t.createElement("div"));
              a = (lt.exec(s) || ["", ""])[1].toLowerCase();
              l = yt[a] || yt._default;
              u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2];
              i = l[0];
              while (i--) {
                u = u.lastChild
              }
              if (!c.leadingWhitespace && at.test(s)) {
                v.push(t.createTextNode(at.exec(s)[0]))
              }
              if (!c.tbody) {
                s = a === "table" && !ct.test(s) ? u.firstChild : l[1] === "<table>" && !ct.test(s) ? u : 0;
                i = s && s.childNodes.length;
                while (i--) {
                  if (p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length) {
                    s.removeChild(f)
                  }
                }
              }
              p.merge(v, u.childNodes);
              u.textContent = "";
              while (u.firstChild) {
                u.removeChild(u.firstChild)
              }
              u = d.lastChild
            }
          }
        }
      }
      if (u) {
        d.removeChild(u)
      }
      if (!c.appendChecked) {
        p.grep(Et(v, "input"), St)
      }
      m = 0;
      while (s = v[m++]) {
        if (r && p.inArray(s, r) !== -1) {
          continue
        }
        o = p.contains(s.ownerDocument, s);
        u = Et(d.appendChild(s), "script");
        if (o) {
          Ct(u)
        }
        if (n) {
          i = 0;
          while (s = u[i++]) {
            if (vt.test(s.type || "")) {
              n.push(s)
            }
          }
        }
      }
      u = null;
      return d
    },
    cleanData: function(e, t) {
      var r, i, s, o, u = 0,
        a = p.expando,
        f = p.cache,
        l = c.deleteExpando,
        h = p.event.special;
      for (;
        (r = e[u]) != null; u++) {
        if (t || p.acceptData(r)) {
          s = r[a];
          o = s && f[s];
          if (o) {
            if (o.events) {
              for (i in o.events) {
                if (h[i]) {
                  p.event.remove(r, i)
                } else {
                  p.removeEvent(r, i, o.handle)
                }
              }
            }
            if (f[s]) {
              delete f[s];
              if (l) {
                delete r[a]
              } else {
                if (typeof r.removeAttribute !== j) {
                  r.removeAttribute(a)
                } else {
                  r[a] = null
                }
              }
              n.push(s)
            }
          }
        }
      }
    }
  });
  p.fn.extend({
    text: function(e) {
      return J(this, function(e) {
        return e === undefined ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var t = xt(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var t = xt(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        if (this.parentNode) {
          this.parentNode.insertBefore(e, this)
        }
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        if (this.parentNode) {
          this.parentNode.insertBefore(e, this.nextSibling)
        }
      })
    },
    remove: function(e, t) {
      var n, r = e ? p.filter(e, this) : this,
        i = 0;
      for (;
        (n = r[i]) != null; i++) {
        if (!t && n.nodeType === 1) {
          p.cleanData(Et(n))
        }
        if (n.parentNode) {
          if (t && p.contains(n.ownerDocument, n)) {
            Ct(Et(n, "script"))
          }
          n.parentNode.removeChild(n)
        }
      }
      return this
    },
    empty: function() {
      var e, t = 0;
      for (;
        (e = this[t]) != null; t++) {
        if (e.nodeType === 1) {
          p.cleanData(Et(e, false))
        }
        while (e.firstChild) {
          e.removeChild(e.firstChild)
        }
        if (e.options && p.nodeName(e, "select")) {
          e.options.length = 0
        }
      }
      return this
    },
    clone: function(e, t) {
      e = e == null ? false : e;
      t = t == null ? e : t;
      return this.map(function() {
        return p.clone(this, e, t)
      })
    },
    html: function(e) {
      return J(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (e === undefined) {
          return t.nodeType === 1 ? t.innerHTML.replace(ot, "") : undefined
        }
        if (typeof e === "string" && !pt.test(e) && (c.htmlSerialize || !ut.test(e)) && (c.leadingWhitespace || !at.test(e)) && !yt[(lt.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(ft, "<$1></$2>");
          try {
            for (; n < r; n++) {
              t = this[n] || {};
              if (t.nodeType === 1) {
                p.cleanData(Et(t, false));
                t.innerHTML = e
              }
            }
            t = 0
          } catch (i) {}
        }
        if (t) {
          this.empty().append(e)
        }
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      this.domManip(arguments, function(t) {
        e = this.parentNode;
        p.cleanData(Et(this));
        if (e) {
          e.replaceChild(t, this)
        }
      });
      return e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, true)
    },
    domManip: function(e, t) {
      e = i.apply([], e);
      var n, r, s, o, u, a, f = 0,
        l = this.length,
        h = this,
        d = l - 1,
        v = e[0],
        m = p.isFunction(v);
      if (m || l > 1 && typeof v === "string" && !c.checkClone && dt.test(v)) {
        return this.each(function(n) {
          var r = h.eq(n);
          if (m) {
            e[0] = v.call(this, n, r.html())
          }
          r.domManip(e, t)
        })
      }
      if (l) {
        a = p.buildFragment(e, this[0].ownerDocument, false, this);
        n = a.firstChild;
        if (a.childNodes.length === 1) {
          a = n
        }
        if (n) {
          o = p.map(Et(a, "script"), Tt);
          s = o.length;
          for (; f < l; f++) {
            r = a;
            if (f !== d) {
              r = p.clone(r, true, true);
              if (s) {
                p.merge(o, Et(r, "script"))
              }
            }
            t.call(this[f], r, f)
          }
          if (s) {
            u = o[o.length - 1].ownerDocument;
            p.map(o, Nt);
            for (f = 0; f < s; f++) {
              r = o[f];
              if (vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r)) {
                if (r.src) {
                  if (p._evalUrl) {
                    p._evalUrl(r.src)
                  }
                } else {
                  p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, ""))
                }
              }
            }
          }
          a = n = null
        }
      }
      return this
    }
  });
  p.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    p.fn[e] = function(e) {
      var n, r = 0,
        i = [],
        o = p(e),
        u = o.length - 1;
      for (; r <= u; r++) {
        n = r === u ? this : this.clone(true);
        p(o[r])[t](n);
        s.apply(i, n.get())
      }
      return this.pushStack(i)
    }
  });
  var At, Ot = {};
  (function() {
    var e, t, n = N.createElement("div"),
      r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    e = n.getElementsByTagName("a")[0];
    e.style.cssText = "float:left;opacity:.5";
    c.opacity = /^0.5/.test(e.style.opacity);
    c.cssFloat = !!e.style.cssFloat;
    n.style.backgroundClip = "content-box";
    n.cloneNode(true).style.backgroundClip = "";
    c.clearCloneStyle = n.style.backgroundClip === "content-box";
    e = n = null;
    c.shrinkWrapBlocks = function() {
      var e, n, i, s;
      if (t == null) {
        e = N.getElementsByTagName("body")[0];
        if (!e) {
          return
        }
        s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
        n = N.createElement("div");
        i = N.createElement("div");
        e.appendChild(n).appendChild(i);
        t = false;
        if (typeof i.style.zoom !== j) {
          i.style.cssText = r + ";width:1px;padding:1px;zoom:1";
          i.innerHTML = "<div></div>";
          i.firstChild.style.width = "5px";
          t = i.offsetWidth !== 3
        }
        e.removeChild(n);
        e = n = i = null
      }
      return t
    }
  })();
  var Dt = /^margin/;
  var Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i");
  var Ht, Bt, jt = /^(top|right|bottom|left)$/;
  if (e.getComputedStyle) {
    Ht = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    Bt = function(e, t, n) {
      var r, i, s, o, u = e.style;
      n = n || Ht(e);
      o = n ? n.getPropertyValue(t) || n[t] : undefined;
      if (n) {
        if (o === "" && !p.contains(e.ownerDocument, e)) {
          o = p.style(e, t)
        }
        if (Pt.test(o) && Dt.test(t)) {
          r = u.width;
          i = u.minWidth;
          s = u.maxWidth;
          u.minWidth = u.maxWidth = u.width = o;
          o = n.width;
          u.width = r;
          u.minWidth = i;
          u.maxWidth = s
        }
      }
      return o === undefined ? o : o + ""
    }
  } else {
    if (N.documentElement.currentStyle) {
      Ht = function(e) {
        return e.currentStyle
      };
      Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        n = n || Ht(e);
        o = n ? n[t] : undefined;
        if (o == null && u && u[t]) {
          o = u[t]
        }
        if (Pt.test(o) && !jt.test(t)) {
          r = u.left;
          i = e.runtimeStyle;
          s = i && i.left;
          if (s) {
            i.left = e.currentStyle.left
          }
          u.left = t === "fontSize" ? "1em" : o;
          o = u.pixelLeft + "px";
          u.left = r;
          if (s) {
            i.left = s
          }
        }
        return o === undefined ? o : o + "" || "auto"
      }
    }
  }(function() {
    function l() {
      var t, n, u = N.getElementsByTagName("body")[0];
      if (!u) {
        return
      }
      t = N.createElement("div");
      n = N.createElement("div");
      t.style.cssText = a;
      u.appendChild(t).appendChild(n);
      n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%";
      p.swap(u, u.style.zoom != null ? {
        zoom: 1
      } : {}, function() {
        r = n.offsetWidth === 4
      });
      i = true;
      s = false;
      o = true;
      if (e.getComputedStyle) {
        s = (e.getComputedStyle(n, null) || {}).top !== "1%";
        i = (e.getComputedStyle(n, null) || {
          width: "4px"
        }).width === "4px"
      }
      u.removeChild(t);
      n = u = null
    }
    var t, n, r, i, s, o, u = N.createElement("div"),
      a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
      f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    t = u.getElementsByTagName("a")[0];
    t.style.cssText = "float:left;opacity:.5";
    c.opacity = /^0.5/.test(t.style.opacity);
    c.cssFloat = !!t.style.cssFloat;
    u.style.backgroundClip = "content-box";
    u.cloneNode(true).style.backgroundClip = "";
    c.clearCloneStyle = u.style.backgroundClip === "content-box";
    t = u = null;
    p.extend(c, {
      reliableHiddenOffsets: function() {
        if (n != null) {
          return n
        }
        var e, t, r, i = N.createElement("div"),
          s = N.getElementsByTagName("body")[0];
        if (!s) {
          return
        }
        i.setAttribute("className", "t");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        e = N.createElement("div");
        e.style.cssText = a;
        s.appendChild(e).appendChild(i);
        i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
        t = i.getElementsByTagName("td");
        t[0].style.cssText = "padding:0;margin:0;border:0;display:none";
        r = t[0].offsetHeight === 0;
        t[0].style.display = "";
        t[1].style.display = "none";
        n = r && t[0].offsetHeight === 0;
        s.removeChild(e);
        i = s = null;
        return n
      },
      boxSizing: function() {
        if (r == null) {
          l()
        }
        return r
      },
      boxSizingReliable: function() {
        if (i == null) {
          l()
        }
        return i
      },
      pixelPosition: function() {
        if (s == null) {
          l()
        }
        return s
      },
      reliableMarginRight: function() {
        var t, n, r, i;
        if (o == null && e.getComputedStyle) {
          t = N.getElementsByTagName("body")[0];
          if (!t) {
            return
          }
          n = N.createElement("div");
          r = N.createElement("div");
          n.style.cssText = a;
          t.appendChild(n).appendChild(r);
          i = r.appendChild(N.createElement("div"));
          i.style.cssText = r.style.cssText = f;
          i.style.marginRight = i.style.width = "0";
          r.style.width = "1px";
          o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight);
          t.removeChild(n)
        }
        return o
      }
    })
  })();
  p.swap = function(e, t, n, r) {
    var i, s, o = {};
    for (s in t) {
      o[s] = e.style[s];
      e.style[s] = t[s]
    }
    i = n.apply(e, r || []);
    for (s in t) {
      e.style[s] = o[s]
    }
    return i
  };
  var It = /alpha\([^)]*\)/i,
    qt = /opacity\s*=\s*([^)]*)/,
    Rt = /^(none|table(?!-c[ea]).+)/,
    Ut = new RegExp("^(" + X + ")(.*)$", "i"),
    zt = new RegExp("^([+-])=(" + X + ")", "i"),
    Wt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Xt = {
      letterSpacing: 0,
      fontWeight: 400
    },
    Vt = ["Webkit", "O", "Moz", "ms"];
  p.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Bt(e, "opacity");
            return n === "" ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: true,
      fillOpacity: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {
      "float": c.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, r) {
      if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
        return
      }
      var i, s, o, u = p.camelCase(t),
        a = e.style;
      t = p.cssProps[u] || (p.cssProps[u] = $t(a, u));
      o = p.cssHooks[t] || p.cssHooks[u];
      if (n !== undefined) {
        s = typeof n;
        if (s === "string" && (i = zt.exec(n))) {
          n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t));
          s = "number"
        }
        if (n == null || n !== n) {
          return
        }
        if (s === "number" && !p.cssNumber[u]) {
          n += "px"
        }
        if (!c.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
          a[t] = "inherit"
        }
        if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) {
          try {
            a[t] = "";
            a[t] = n
          } catch (f) {}
        }
      } else {
        if (o && "get" in o && (i = o.get(e, false, r)) !== undefined) {
          return i
        }
        return a[t]
      }
    },
    css: function(e, t, n, r) {
      var i, s, o, u = p.camelCase(t);
      t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u));
      o = p.cssHooks[t] || p.cssHooks[u];
      if (o && "get" in o) {
        s = o.get(e, true, n)
      }
      if (s === undefined) {
        s = Bt(e, t, r)
      }
      if (s === "normal" && t in Xt) {
        s = Xt[t]
      }
      if (n === "" || n) {
        i = parseFloat(s);
        return n === true || p.isNumeric(i) ? i || 0 : s
      }
      return s
    }
  });
  p.each(["height", "width"], function(e, t) {
    p.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) {
          return e.offsetWidth === 0 && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
            return Gt(e, t, r)
          }) : Gt(e, t, r)
        }
      },
      set: function(e, n, r) {
        var i = r && Ht(e);
        return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && p.css(e, "boxSizing", false, i) === "border-box", i) : 0)
      }
    }
  });
  if (!c.opacity) {
    p.cssHooks.opacity = {
      get: function(e, t) {
        return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
        var n = e.style,
          r = e.currentStyle,
          i = p.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
          s = r && r.filter || n.filter || "";
        n.zoom = 1;
        if ((t >= 1 || t === "") && p.trim(s.replace(It, "")) === "" && n.removeAttribute) {
          n.removeAttribute("filter");
          if (t === "" || r && !r.filter) {
            return
          }
        }
        n.filter = It.test(s) ? s.replace(It, i) : s + " " + i
      }
    }
  }
  p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
    if (t) {
      return p.swap(e, {
        display: "inline-block"
      }, Bt, [e, "marginRight"])
    }
  });
  p.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    p.cssHooks[e + t] = {
      expand: function(n) {
        var r = 0,
          i = {},
          s = typeof n === "string" ? n.split(" ") : [n];
        for (; r < 4; r++) {
          i[e + V[r] + t] = s[r] || s[r - 2] || s[0]
        }
        return i
      }
    };
    if (!Dt.test(e)) {
      p.cssHooks[e + t].set = Kt
    }
  });
  p.fn.extend({
    css: function(e, t) {
      return J(this, function(e, t, n) {
        var r, i, s = {},
          o = 0;
        if (p.isArray(t)) {
          r = Ht(e);
          i = t.length;
          for (; o < i; o++) {
            s[t[o]] = p.css(e, t[o], false, r)
          }
          return s
        }
        return n !== undefined ? p.style(e, t, n) : p.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return Jt(this, true)
    },
    hide: function() {
      return Jt(this)
    },
    toggle: function(e) {
      if (typeof e === "boolean") {
        return e ? this.show() : this.hide()
      }
      return this.each(function() {
        if ($(this)) {
          p(this).show()
        } else {
          p(this).hide()
        }
      })
    }
  });
  p.Tween = Yt;
  Yt.prototype = {
    constructor: Yt,
    init: function(e, t, n, r, i, s) {
      this.elem = e;
      this.prop = n;
      this.easing = i || "swing";
      this.options = t;
      this.start = this.now = this.cur();
      this.end = r;
      this.unit = s || (p.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = Yt.propHooks[this.prop];
      return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = Yt.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
      } else {
        this.pos = t = e
      }
      this.now = (this.end - this.start) * t + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this)
      }
      if (n && n.set) {
        n.set(this)
      } else {
        Yt.propHooks._default.set(this)
      }
      return this
    }
  };
  Yt.prototype.init.prototype = Yt.prototype;
  Yt.propHooks = {
    _default: {
      get: function(e) {
        var t;
        if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
          return e.elem[e.prop]
        }
        t = p.css(e.elem, e.prop, "");
        return !t || t === "auto" ? 0 : t
      },
      set: function(e) {
        if (p.fx.step[e.prop]) {
          p.fx.step[e.prop](e)
        } else {
          if (e.elem.style && (e.elem.style[p.cssProps[e.prop]] != null || p.cssHooks[e.prop])) {
            p.style(e.elem, e.prop, e.now + e.unit)
          } else {
            e.elem[e.prop] = e.now
          }
        }
      }
    }
  };
  Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
    set: function(e) {
      if (e.elem.nodeType && e.elem.parentNode) {
        e.elem[e.prop] = e.now
      }
    }
  };
  p.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    }
  };
  p.fx = Yt.prototype.init;
  p.fx.step = {};
  var Zt, en, tn = /^(?:toggle|show|hide)$/,
    nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
    rn = /queueHooks$/,
    sn = [ln],
    on = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = nn.exec(t),
          s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
          o = (p.cssNumber[e] || s !== "px" && +r) && nn.exec(p.css(n.elem, e)),
          u = 1,
          a = 20;
        if (o && o[3] !== s) {
          s = s || o[3];
          i = i || [];
          o = +r || 1;
          do {
            u = u || ".5";
            o = o / u;
            p.style(n.elem, e, o + s)
          } while (u !== (u = n.cur() / r) && u !== 1 && --a)
        }
        if (i) {
          o = n.start = +o || +r || 0;
          n.unit = s;
          n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]
        }
        return n
      }]
    };
  p.Animation = p.extend(hn, {
    tweener: function(e, t) {
      if (p.isFunction(e)) {
        t = e;
        e = ["*"]
      } else {
        e = e.split(" ")
      }
      var n, r = 0,
        i = e.length;
      for (; r < i; r++) {
        n = e[r];
        on[n] = on[n] || [];
        on[n].unshift(t)
      }
    },
    prefilter: function(e, t) {
      if (t) {
        sn.unshift(e)
      } else {
        sn.push(e)
      }
    }
  });
  p.speed = function(e, t, n) {
    var r = e && typeof e === "object" ? p.extend({}, e) : {
      complete: n || !n && t || p.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !p.isFunction(t) && t
    };
    r.duration = p.fx.off ? 0 : typeof r.duration === "number" ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default;
    if (r.queue == null || r.queue === true) {
      r.queue = "fx"
    }
    r.old = r.complete;
    r.complete = function() {
      if (p.isFunction(r.old)) {
        r.old.call(this)
      }
      if (r.queue) {
        p.dequeue(this, r.queue)
      }
    };
    return r
  };
  p.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter($).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = p.isEmptyObject(e),
        s = p.speed(t, n, r),
        o = function() {
          var t = hn(this, p.extend({}, e), s);
          if (i || p._data(this, "finish")) {
            t.stop(true)
          }
        };
      o.finish = o;
      return i || s.queue === false ? this.each(o) : this.queue(s.queue, o)
    },
    stop: function(e, t, n) {
      var r = function(e) {
        var t = e.stop;
        delete e.stop;
        t(n)
      };
      if (typeof e !== "string") {
        n = t;
        t = e;
        e = undefined
      }
      if (t && e !== false) {
        this.queue(e || "fx", [])
      }
      return this.each(function() {
        var t = true,
          i = e != null && e + "queueHooks",
          s = p.timers,
          o = p._data(this);
        if (i) {
          if (o[i] && o[i].stop) {
            r(o[i])
          }
        } else {
          for (i in o) {
            if (o[i] && o[i].stop && rn.test(i)) {
              r(o[i])
            }
          }
        }
        for (i = s.length; i--;) {
          if (s[i].elem === this && (e == null || s[i].queue === e)) {
            s[i].anim.stop(n);
            t = false;
            s.splice(i, 1)
          }
        }
        if (t || !n) {
          p.dequeue(this, e)
        }
      })
    },
    finish: function(e) {
      if (e !== false) {
        e = e || "fx"
      }
      return this.each(function() {
        var t, n = p._data(this),
          r = n[e + "queue"],
          i = n[e + "queueHooks"],
          s = p.timers,
          o = r ? r.length : 0;
        n.finish = true;
        p.queue(this, e, []);
        if (i && i.stop) {
          i.stop.call(this, true)
        }
        for (t = s.length; t--;) {
          if (s[t].elem === this && s[t].queue === e) {
            s[t].anim.stop(true);
            s.splice(t, 1)
          }
        }
        for (t = 0; t < o; t++) {
          if (r[t] && r[t].finish) {
            r[t].finish.call(this)
          }
        }
        delete n.finish
      })
    }
  });
  p.each(["toggle", "show", "hide"], function(e, t) {
    var n = p.fn[t];
    p.fn[t] = function(e, r, i) {
      return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(an(t, true), e, r, i)
    }
  });
  p.each({
    slideDown: an("show"),
    slideUp: an("hide"),
    slideToggle: an("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    p.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r)
    }
  });
  p.timers = [];
  p.fx.tick = function() {
    var e, t = p.timers,
      n = 0;
    Zt = p.now();
    for (; n < t.length; n++) {
      e = t[n];
      if (!e() && t[n] === e) {
        t.splice(n--, 1)
      }
    }
    if (!t.length) {
      p.fx.stop()
    }
    Zt = undefined
  };
  p.fx.timer = function(e) {
    p.timers.push(e);
    if (e()) {
      p.fx.start()
    } else {
      p.timers.pop()
    }
  };
  p.fx.interval = 13;
  p.fx.start = function() {
    if (!en) {
      en = setInterval(p.fx.tick, p.fx.interval)
    }
  };
  p.fx.stop = function() {
    clearInterval(en);
    en = null
  };
  p.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  p.fn.delay = function(e, t) {
    e = p.fx ? p.fx.speeds[e] || e : e;
    t = t || "fx";
    return this.queue(t, function(t, n) {
      var r = setTimeout(t, e);
      n.stop = function() {
        clearTimeout(r)
      }
    })
  };
  (function() {
    var e, t, n, r, i = N.createElement("div");
    i.setAttribute("className", "t");
    i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    e = i.getElementsByTagName("a")[0];
    n = N.createElement("select");
    r = n.appendChild(N.createElement("option"));
    t = i.getElementsByTagName("input")[0];
    e.style.cssText = "top:1px";
    c.getSetAttribute = i.className !== "t";
    c.style = /top/.test(e.getAttribute("style"));
    c.hrefNormalized = e.getAttribute("href") === "/a";
    c.checkOn = !!t.value;
    c.optSelected = r.selected;
    c.enctype = !!N.createElement("form").enctype;
    n.disabled = true;
    c.optDisabled = !r.disabled;
    t = N.createElement("input");
    t.setAttribute("value", "");
    c.input = t.getAttribute("value") === "";
    t.value = "t";
    t.setAttribute("type", "radio");
    c.radioValue = t.value === "t";
    e = t = n = r = i = null
  })();
  var pn = /\r/g;
  p.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      if (!arguments.length) {
        if (i) {
          t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()];
          if (t && "get" in t && (n = t.get(i, "value")) !== undefined) {
            return n
          }
          n = i.value;
          return typeof n === "string" ? n.replace(pn, "") : n == null ? "" : n
        }
        return
      }
      r = p.isFunction(e);
      return this.each(function(n) {
        var i;
        if (this.nodeType !== 1) {
          return
        }
        if (r) {
          i = e.call(this, n, p(this).val())
        } else {
          i = e
        }
        if (i == null) {
          i = ""
        } else {
          if (typeof i === "number") {
            i += ""
          } else {
            if (p.isArray(i)) {
              i = p.map(i, function(e) {
                return e == null ? "" : e + ""
              })
            }
          }
        }
        t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
        if (!t || !("set" in t) || t.set(this, i, "value") === undefined) {
          this.value = i
        }
      })
    }
  });
  p.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = p.find.attr(e, "value");
          return t != null ? t : p.text(e)
        }
      },
      select: {
        get: function(e) {
          var t, n, r = e.options,
            i = e.selectedIndex,
            s = e.type === "select-one" || i < 0,
            o = s ? null : [],
            u = s ? i + 1 : r.length,
            a = i < 0 ? u : s ? i : 0;
          for (; a < u; a++) {
            n = r[a];
            if ((n.selected || a === i) && (c.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
              t = p(n).val();
              if (s) {
                return t
              }
              o.push(t)
            }
          }
          return o
        },
        set: function(e, t) {
          var n, r, i = e.options,
            s = p.makeArray(t),
            o = i.length;
          while (o--) {
            r = i[o];
            if (p.inArray(p.valHooks.option.get(r), s) >= 0) {
              try {
                r.selected = n = true
              } catch (u) {
                r.scrollHeight
              }
            } else {
              r.selected = false
            }
          }
          if (!n) {
            e.selectedIndex = -1
          }
          return i
        }
      }
    }
  });
  p.each(["radio", "checkbox"], function() {
    p.valHooks[this] = {
      set: function(e, t) {
        if (p.isArray(t)) {
          return e.checked = p.inArray(p(e).val(), t) >= 0
        }
      }
    };
    if (!c.checkOn) {
      p.valHooks[this].get = function(e) {
        return e.getAttribute("value") === null ? "on" : e.value
      }
    }
  });
  var dn, vn, mn = p.expr.attrHandle,
    gn = /^(?:checked|selected)$/i,
    yn = c.getSetAttribute,
    bn = c.input;
  p.fn.extend({
    attr: function(e, t) {
      return J(this, p.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        p.removeAttr(this, e)
      })
    }
  });
  p.extend({
    attr: function(e, t, n) {
      var r, i, s = e.nodeType;
      if (!e || s === 3 || s === 8 || s === 2) {
        return
      }
      if (typeof e.getAttribute === j) {
        return p.prop(e, t, n)
      }
      if (s !== 1 || !p.isXMLDoc(e)) {
        t = t.toLowerCase();
        r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn)
      }
      if (n !== undefined) {
        if (n === null) {
          p.removeAttr(e, t)
        } else {
          if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) {
            return i
          } else {
            e.setAttribute(t, n + "");
            return n
          }
        }
      } else {
        if (r && "get" in r && (i = r.get(e, t)) !== null) {
          return i
        } else {
          i = p.find.attr(e, t);
          return i == null ? undefined : i
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        s = t && t.match(M);
      if (s && e.nodeType === 1) {
        while (n = s[i++]) {
          r = p.propFix[n] || n;
          if (p.expr.match.bool.test(n)) {
            if (bn && yn || !gn.test(n)) {
              e[r] = false
            } else {
              e[p.camelCase("default-" + n)] = e[r] = false
            }
          } else {
            p.attr(e, n, "")
          }
          e.removeAttribute(yn ? n : r)
        }
      }
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!c.radioValue && t === "radio" && p.nodeName(e, "input")) {
            var n = e.value;
            e.setAttribute("type", t);
            if (n) {
              e.value = n
            }
            return t
          }
        }
      }
    }
  });
  vn = {
    set: function(e, t, n) {
      if (t === false) {
        p.removeAttr(e, n)
      } else {
        if (bn && yn || !gn.test(n)) {
          e.setAttribute(!yn && p.propFix[n] || n, n)
        } else {
          e[p.camelCase("default-" + n)] = e[n] = true
        }
      }
      return n
    }
  };
  p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = mn[t] || p.find.attr;
    mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
      var i, s;
      if (!r) {
        s = mn[t];
        mn[t] = i;
        i = n(e, t, r) != null ? t.toLowerCase() : null;
        mn[t] = s
      }
      return i
    } : function(e, t, n) {
      if (!n) {
        return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
    }
  });
  if (!bn || !yn) {
    p.attrHooks.value = {
      set: function(e, t, n) {
        if (p.nodeName(e, "input")) {
          e.defaultValue = t
        } else {
          return dn && dn.set(e, t, n)
        }
      }
    }
  }
  if (!yn) {
    dn = {
      set: function(e, t, n) {
        var r = e.getAttributeNode(n);
        if (!r) {
          e.setAttributeNode(r = e.ownerDocument.createAttribute(n))
        }
        r.value = t += "";
        if (n === "value" || t === e.getAttribute(n)) {
          return t
        }
      }
    };
    mn.id = mn.name = mn.coords = function(e, t, n) {
      var r;
      if (!n) {
        return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
      }
    };
    p.valHooks.button = {
      get: function(e, t) {
        var n = e.getAttributeNode(t);
        if (n && n.specified) {
          return n.value
        }
      },
      set: dn.set
    };
    p.attrHooks.contenteditable = {
      set: function(e, t, n) {
        dn.set(e, t === "" ? false : t, n)
      }
    };
    p.each(["width", "height"], function(e, t) {
      p.attrHooks[t] = {
        set: function(e, n) {
          if (n === "") {
            e.setAttribute(t, "auto");
            return n
          }
        }
      }
    })
  }
  if (!c.style) {
    p.attrHooks.style = {
      get: function(e) {
        return e.style.cssText || undefined
      },
      set: function(e, t) {
        return e.style.cssText = t + ""
      }
    }
  }
  var wn = /^(?:input|select|textarea|button|object)$/i,
    En = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function(e, t) {
      return J(this, p.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      e = p.propFix[e] || e;
      return this.each(function() {
        try {
          this[e] = undefined;
          delete this[e]
        } catch (t) {}
      })
    }
  });
  p.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, t, n) {
      var r, i, s, o = e.nodeType;
      if (!e || o === 3 || o === 8 || o === 2) {
        return
      }
      s = o !== 1 || !p.isXMLDoc(e);
      if (s) {
        t = p.propFix[t] || t;
        i = p.propHooks[t]
      }
      if (n !== undefined) {
        return i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n
      } else {
        return i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
      }
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = p.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  });
  if (!c.hrefNormalized) {
    p.each(["href", "src"], function(e, t) {
      p.propHooks[t] = {
        get: function(e) {
          return e.getAttribute(t, 4)
        }
      }
    })
  }
  if (!c.optSelected) {
    p.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        if (t) {
          t.selectedIndex;
          if (t.parentNode) {
            t.parentNode.selectedIndex
          }
        }
        return null
      }
    }
  }
  p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    p.propFix[this.toLowerCase()] = this
  });
  if (!c.enctype) {
    p.propFix.enctype = "encoding"
  }
  var Sn = /[\t\r\n\f]/g;
  p.fn.extend({
    addClass: function(e) {
      var t, n, r, i, s, o, u = 0,
        a = this.length,
        f = typeof e === "string" && e;
      if (p.isFunction(e)) {
        return this.each(function(t) {
          p(this).addClass(e.call(this, t, this.className))
        })
      }
      if (f) {
        t = (e || "").match(M) || [];
        for (; u < a; u++) {
          n = this[u];
          r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ");
          if (r) {
            s = 0;
            while (i = t[s++]) {
              if (r.indexOf(" " + i + " ") < 0) {
                r += i + " "
              }
            }
            o = p.trim(r);
            if (n.className !== o) {
              n.className = o
            }
          }
        }
      }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, s, o, u = 0,
        a = this.length,
        f = arguments.length === 0 || typeof e === "string" && e;
      if (p.isFunction(e)) {
        return this.each(function(t) {
          p(this).removeClass(e.call(this, t, this.className))
        })
      }
      if (f) {
        t = (e || "").match(M) || [];
        for (; u < a; u++) {
          n = this[u];
          r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "");
          if (r) {
            s = 0;
            while (i = t[s++]) {
              while (r.indexOf(" " + i + " ") >= 0) {
                r = r.replace(" " + i + " ", " ")
              }
            }
            o = e ? p.trim(r) : "";
            if (n.className !== o) {
              n.className = o
            }
          }
        }
      }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      if (typeof t === "boolean" && n === "string") {
        return t ? this.addClass(e) : this.removeClass(e)
      }
      if (p.isFunction(e)) {
        return this.each(function(n) {
          p(this).toggleClass(e.call(this, n, this.className, t), t)
        })
      }
      return this.each(function() {
        if (n === "string") {
          var t, r = 0,
            i = p(this),
            s = e.match(M) || [];
          while (t = s[r++]) {
            if (i.hasClass(t)) {
              i.removeClass(t)
            } else {
              i.addClass(t)
            }
          }
        } else {
          if (n === j || n === "boolean") {
            if (this.className) {
              p._data(this, "__className__", this.className)
            }
            this.className = this.className || e === false ? "" : p._data(this, "__className__") || ""
          }
        }
      })
    },
    hasClass: function(e) {
      var t = " " + e + " ",
        n = 0,
        r = this.length;
      for (; n < r; n++) {
        if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) {
          return true
        }
      }
      return false
    }
  });
  p.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(e, t) {
    p.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  });
  p.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var xn = p.now();
  var Tn = /\?/;
  var Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  p.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) {
      return e.JSON.parse(t + "")
    }
    var n, r = null,
      i = p.trim(t + "");
    return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
      if (n && t) {
        r = 0
      }
      if (r === 0) {
        return e
      }
      n = i || t;
      r += !s - !i;
      return ""
    })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
  };
  p.parseXML = function(t) {
    var n, r;
    if (!t || typeof t !== "string") {
      return null
    }
    try {
      if (e.DOMParser) {
        r = new DOMParser;
        n = r.parseFromString(t, "text/xml")
      } else {
        n = new ActiveXObject("Microsoft.XMLDOM");
        n.async = "false";
        n.loadXML(t)
      }
    } catch (i) {
      n = undefined
    }
    if (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) {
      p.error("Invalid XML: " + t)
    }
    return n
  };
  var Cn, kn, Ln = /#.*$/,
    An = /([?&])_=[^&]*/,
    On = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    _n = /^(?:GET|HEAD)$/,
    Dn = /^\/\//,
    Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hn = {},
    Bn = {},
    jn = "*/".concat("*");
  try {
    kn = location.href
  } catch (Fn) {
    kn = N.createElement("a");
    kn.href = "";
    kn = kn.href
  }
  Cn = Pn.exec(kn.toLowerCase()) || [];
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: kn,
      type: "GET",
      isLocal: Mn.test(Cn[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": jn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": p.parseJSON,
        "text xml": p.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(e, t) {
      return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
    },
    ajaxPrefilter: In(Hn),
    ajaxTransport: In(Bn),
    ajax: function(e, t) {
      function x(e, t, n, r) {
        var f, g, y, w, S, x = t;
        if (b === 2) {
          return
        }
        b = 2;
        if (o) {
          clearTimeout(o)
        }
        a = undefined;
        s = r || "";
        E.readyState = e > 0 ? 4 : 0;
        f = e >= 200 && e < 300 || e === 304;
        if (n) {
          w = Un(l, E, n)
        }
        w = zn(l, w, E, f);
        if (f) {
          if (l.ifModified) {
            S = E.getResponseHeader("Last-Modified");
            if (S) {
              p.lastModified[i] = S
            }
            S = E.getResponseHeader("etag");
            if (S) {
              p.etag[i] = S
            }
          }
          if (e === 204 || l.type === "HEAD") {
            x = "nocontent"
          } else {
            if (e === 304) {
              x = "notmodified"
            } else {
              x = w.state;
              g = w.data;
              y = w.error;
              f = !y
            }
          }
        } else {
          y = x;
          if (e || !x) {
            x = "error";
            if (e < 0) {
              e = 0
            }
          }
        }
        E.status = e;
        E.statusText = (t || x) + "";
        if (f) {
          d.resolveWith(c, [g, x, E])
        } else {
          d.rejectWith(c, [E, x, y])
        }
        E.statusCode(m);
        m = undefined;
        if (u) {
          h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y])
        }
        v.fireWith(c, [E, x]);
        if (u) {
          h.trigger("ajaxComplete", [E, l]);
          if (!--p.active) {
            p.event.trigger("ajaxStop")
          }
        }
      }
      if (typeof e === "object") {
        t = e;
        e = undefined
      }
      t = t || {};
      var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
        c = l.context || l,
        h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
        d = p.Deferred(),
        v = p.Callbacks("once memory"),
        m = l.statusCode || {},
        g = {},
        y = {},
        b = 0,
        w = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (b === 2) {
              if (!f) {
                f = {};
                while (t = On.exec(s)) {
                  f[t[1].toLowerCase()] = t[2]
                }
              }
              t = f[e.toLowerCase()]
            }
            return t == null ? null : t
          },
          getAllResponseHeaders: function() {
            return b === 2 ? s : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            if (!b) {
              e = y[n] = y[n] || e;
              g[e] = t
            }
            return this
          },
          overrideMimeType: function(e) {
            if (!b) {
              l.mimeType = e
            }
            return this
          },
          statusCode: function(e) {
            var t;
            if (e) {
              if (b < 2) {
                for (t in e) {
                  m[t] = [m[t], e[t]]
                }
              } else {
                E.always(e[E.status])
              }
            }
            return this
          },
          abort: function(e) {
            var t = e || w;
            if (a) {
              a.abort(t)
            }
            x(0, t);
            return this
          }
        };
      d.promise(E).complete = v.add;
      E.success = E.done;
      E.error = E.fail;
      l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//");
      l.type = t.method || t.type || l.method || l.type;
      l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""];
      if (l.crossDomain == null) {
        n = Pn.exec(l.url.toLowerCase());
        l.crossDomain = !!(n && (n[1] !== Cn[1] || n[2] !== Cn[2] || (n[3] || (n[1] === "http:" ? "80" : "443")) !== (Cn[3] || (Cn[1] === "http:" ? "80" : "443"))))
      }
      if (l.data && l.processData && typeof l.data !== "string") {
        l.data = p.param(l.data, l.traditional)
      }
      qn(Hn, l, t, E);
      if (b === 2) {
        return E
      }
      u = l.global;
      if (u && p.active++ === 0) {
        p.event.trigger("ajaxStart")
      }
      l.type = l.type.toUpperCase();
      l.hasContent = !_n.test(l.type);
      i = l.url;
      if (!l.hasContent) {
        if (l.data) {
          i = l.url += (Tn.test(i) ? "&" : "?") + l.data;
          delete l.data
        }
        if (l.cache === false) {
          l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++
        }
      }
      if (l.ifModified) {
        if (p.lastModified[i]) {
          E.setRequestHeader("If-Modified-Since", p.lastModified[i])
        }
        if (p.etag[i]) {
          E.setRequestHeader("If-None-Match", p.etag[i])
        }
      }
      if (l.data && l.hasContent && l.contentType !== false || t.contentType) {
        E.setRequestHeader("Content-Type", l.contentType)
      }
      E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
      for (r in l.headers) {
        E.setRequestHeader(r, l.headers[r])
      }
      if (l.beforeSend && (l.beforeSend.call(c, E, l) === false || b === 2)) {
        return E.abort()
      }
      w = "abort";
      for (r in {
          success: 1,
          error: 1,
          complete: 1
        }) {
        E[r](l[r])
      }
      a = qn(Bn, l, t, E);
      if (!a) {
        x(-1, "No Transport")
      } else {
        E.readyState = 1;
        if (u) {
          h.trigger("ajaxSend", [E, l])
        }
        if (l.async && l.timeout > 0) {
          o = setTimeout(function() {
            E.abort("timeout")
          }, l.timeout)
        }
        try {
          b = 1;
          a.send(g, x)
        } catch (S) {
          if (b < 2) {
            x(-1, S)
          } else {
            throw S
          }
        }
      }
      return E
    },
    getJSON: function(e, t, n) {
      return p.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return p.get(e, undefined, t, "script")
    }
  });
  p.each(["get", "post"], function(e, t) {
    p[t] = function(e, n, r, i) {
      if (p.isFunction(n)) {
        i = i || r;
        r = n;
        n = undefined
      }
      return p.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  });
  p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    p.fn[t] = function(e) {
      return this.on(t, e)
    }
  });
  p._evalUrl = function(e) {
    return p.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    })
  };
  p.fn.extend({
    wrapAll: function(e) {
      if (p.isFunction(e)) {
        return this.each(function(t) {
          p(this).wrapAll(e.call(this, t))
        })
      }
      if (this[0]) {
        var t = p(e, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          t.insertBefore(this[0])
        }
        t.map(function() {
          var e = this;
          while (e.firstChild && e.firstChild.nodeType === 1) {
            e = e.firstChild
          }
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      if (p.isFunction(e)) {
        return this.each(function(t) {
          p(this).wrapInner(e.call(this, t))
        })
      }
      return this.each(function() {
        var t = p(this),
          n = t.contents();
        if (n.length) {
          n.wrapAll(e)
        } else {
          t.append(e)
        }
      })
    },
    wrap: function(e) {
      var t = p.isFunction(e);
      return this.each(function(n) {
        p(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!p.nodeName(this, "body")) {
          p(this).replaceWith(this.childNodes)
        }
      }).end()
    }
  });
  p.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && (e.style && e.style.display || p.css(e, "display")) === "none"
  };
  p.expr.filters.visible = function(e) {
    return !p.expr.filters.hidden(e)
  };
  var Wn = /%20/g,
    Xn = /\[\]$/,
    Vn = /\r?\n/g,
    $n = /^(?:submit|button|image|reset|file)$/i,
    Jn = /^(?:input|select|textarea|keygen)/i;
  p.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        t = p.isFunction(t) ? t() : t == null ? "" : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (t === undefined) {
      t = p.ajaxSettings && p.ajaxSettings.traditional
    }
    if (p.isArray(e) || e.jquery && !p.isPlainObject(e)) {
      p.each(e, function() {
        i(this.name, this.value)
      })
    } else {
      for (n in e) {
        Kn(n, e[n], t, i)
      }
    }
    return r.join("&").replace(Wn, "+")
  };
  p.fn.extend({
    serialize: function() {
      return p.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = p.prop(this, "elements");
        return e ? p.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
      }).map(function(e, t) {
        var n = p(this).val();
        return n == null ? null : p.isArray(n) ? p.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Vn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Vn, "\r\n")
        }
      }).get()
    }
  });
  p.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
  } : Zn;
  var Qn = 0,
    Gn = {},
    Yn = p.ajaxSettings.xhr();
  if (e.ActiveXObject) {
    p(e).on("unload", function() {
      for (var e in Gn) {
        Gn[e](undefined, true)
      }
    })
  }
  c.cors = !!Yn && "withCredentials" in Yn;
  Yn = c.ajax = !!Yn;
  if (Yn) {
    p.ajaxTransport(function(e) {
      if (!e.crossDomain || c.cors) {
        var t;
        return {
          send: function(n, r) {
            var i, s = e.xhr(),
              o = ++Qn;
            s.open(e.type, e.url, e.async, e.username, e.password);
            if (e.xhrFields) {
              for (i in e.xhrFields) {
                s[i] = e.xhrFields[i]
              }
            }
            if (e.mimeType && s.overrideMimeType) {
              s.overrideMimeType(e.mimeType)
            }
            if (!e.crossDomain && !n["X-Requested-With"]) {
              n["X-Requested-With"] = "XMLHttpRequest"
            }
            for (i in n) {
              if (n[i] !== undefined) {
                s.setRequestHeader(i, n[i] + "")
              }
            }
            s.send(e.hasContent && e.data || null);
            t = function(n, i) {
              var u, a, f;
              if (t && (i || s.readyState === 4)) {
                delete Gn[o];
                t = undefined;
                s.onreadystatechange = p.noop;
                if (i) {
                  if (s.readyState !== 4) {
                    s.abort()
                  }
                } else {
                  f = {};
                  u = s.status;
                  if (typeof s.responseText === "string") {
                    f.text = s.responseText
                  }
                  try {
                    a = s.statusText
                  } catch (l) {
                    a = ""
                  }
                  if (!u && e.isLocal && !e.crossDomain) {
                    u = f.text ? 200 : 404
                  } else {
                    if (u === 1223) {
                      u = 204
                    }
                  }
                }
              }
              if (f) {
                r(u, a, f, s.getAllResponseHeaders())
              }
            };
            if (!e.async) {
              t()
            } else {
              if (s.readyState === 4) {
                setTimeout(t)
              } else {
                s.onreadystatechange = Gn[o] = t
              }
            }
          },
          abort: function() {
            if (t) {
              t(undefined, true)
            }
          }
        }
      }
    })
  }
  p.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        p.globalEval(e);
        return e
      }
    }
  });
  p.ajaxPrefilter("script", function(e) {
    if (e.cache === undefined) {
      e.cache = false
    }
    if (e.crossDomain) {
      e.type = "GET";
      e.global = false
    }
  });
  p.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = N.head || p("head")[0] || N.documentElement;
      return {
        send: function(r, i) {
          t = N.createElement("script");
          t.async = true;
          if (e.scriptCharset) {
            t.charset = e.scriptCharset
          }
          t.src = e.url;
          t.onload = t.onreadystatechange = function(e, n) {
            if (n || !t.readyState || /loaded|complete/.test(t.readyState)) {
              t.onload = t.onreadystatechange = null;
              if (t.parentNode) {
                t.parentNode.removeChild(t)
              }
              t = null;
              if (!n) {
                i(200, "success")
              }
            }
          };
          n.insertBefore(t, n.firstChild)
        },
        abort: function() {
          if (t) {
            t.onload(undefined, true)
          }
        }
      }
    }
  });
  var tr = [],
    nr = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = tr.pop() || p.expando + "_" + xn++;
      this[e] = true;
      return e
    }
  });
  p.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, s, o, u = t.jsonp !== false && (nr.test(t.url) ? "url" : typeof t.data === "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
    if (u || t.dataTypes[0] === "jsonp") {
      i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
      if (u) {
        t[u] = t[u].replace(nr, "$1" + i)
      } else {
        if (t.jsonp !== false) {
          t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i
        }
      }
      t.converters["script json"] = function() {
        if (!o) {
          p.error(i + " was not called")
        }
        return o[0]
      };
      t.dataTypes[0] = "json";
      s = e[i];
      e[i] = function() {
        o = arguments
      };
      r.always(function() {
        e[i] = s;
        if (t[i]) {
          t.jsonpCallback = n.jsonpCallback;
          tr.push(i)
        }
        if (o && p.isFunction(s)) {
          s(o[0])
        }
        o = s = undefined
      });
      return "script"
    }
  });
  p.parseHTML = function(e, t, n) {
    if (!e || typeof e !== "string") {
      return null
    }
    if (typeof t === "boolean") {
      n = t;
      t = false
    }
    t = t || N;
    var r = E.exec(e),
      i = !n && [];
    if (r) {
      return [t.createElement(r[1])]
    }
    r = p.buildFragment([e], t, i);
    if (i && i.length) {
      p(i).remove()
    }
    return p.merge([], r.childNodes)
  };
  var rr = p.fn.load;
  p.fn.load = function(e, t, n) {
    if (typeof e !== "string" && rr) {
      return rr.apply(this, arguments)
    }
    var r, i, s, o = this,
      u = e.indexOf(" ");
    if (u >= 0) {
      r = e.slice(u, e.length);
      e = e.slice(0, u)
    }
    if (p.isFunction(t)) {
      n = t;
      t = undefined
    } else {
      if (t && typeof t === "object") {
        s = "POST"
      }
    }
    if (o.length > 0) {
      p.ajax({
        url: e,
        type: s,
        dataType: "html",
        data: t
      }).done(function(e) {
        i = arguments;
        o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
      }).complete(n && function(e, t) {
        o.each(n, i || [e.responseText, t, e])
      })
    }
    return this
  };
  p.expr.filters.animated = function(e) {
    return p.grep(p.timers, function(t) {
      return e === t.elem
    }).length
  };
  var ir = e.document.documentElement;
  p.offset = {
    setOffset: function(e, t, n) {
      var r, i, s, o, u, a, f, l = p.css(e, "position"),
        c = p(e),
        h = {};
      if (l === "static") {
        e.style.position = "relative"
      }
      u = c.offset();
      s = p.css(e, "top");
      a = p.css(e, "left");
      f = (l === "absolute" || l === "fixed") && p.inArray("auto", [s, a]) > -1;
      if (f) {
        r = c.position();
        o = r.top;
        i = r.left
      } else {
        o = parseFloat(s) || 0;
        i = parseFloat(a) || 0
      }
      if (p.isFunction(t)) {
        t = t.call(e, n, u)
      }
      if (t.top != null) {
        h.top = t.top - u.top + o
      }
      if (t.left != null) {
        h.left = t.left - u.left + i
      }
      if ("using" in t) {
        t.using.call(e, h)
      } else {
        c.css(h)
      }
    }
  };
  p.fn.extend({
    offset: function(e) {
      if (arguments.length) {
        return e === undefined ? this : this.each(function(t) {
          p.offset.setOffset(this, e, t)
        })
      }
      var t, n, r = {
          top: 0,
          left: 0
        },
        i = this[0],
        s = i && i.ownerDocument;
      if (!s) {
        return
      }
      t = s.documentElement;
      if (!p.contains(t, i)) {
        return r
      }
      if (typeof i.getBoundingClientRect !== j) {
        r = i.getBoundingClientRect()
      }
      n = sr(s);
      return {
        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }
    },
    position: function() {
      if (!this[0]) {
        return
      }
      var e, t, n = {
          top: 0,
          left: 0
        },
        r = this[0];
      if (p.css(r, "position") === "fixed") {
        t = r.getBoundingClientRect()
      } else {
        e = this.offsetParent();
        t = this.offset();
        if (!p.nodeName(e[0], "html")) {
          n = e.offset()
        }
        n.top += p.css(e[0], "borderTopWidth", true);
        n.left += p.css(e[0], "borderLeftWidth", true)
      }
      return {
        top: t.top - n.top - p.css(r, "marginTop", true),
        left: t.left - n.left - p.css(r, "marginLeft", true)
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent || ir;
        while (e && !p.nodeName(e, "html") && p.css(e, "position") === "static") {
          e = e.offsetParent
        }
        return e || ir
      })
    }
  });
  p.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    p.fn[e] = function(r) {
      return J(this, function(e, r, i) {
        var s = sr(e);
        if (i === undefined) {
          return s ? t in s ? s[t] : s.document.documentElement[r] : e[r]
        }
        if (s) {
          s.scrollTo(!n ? i : p(s).scrollLeft(), n ? i : p(s).scrollTop())
        } else {
          e[r] = i
        }
      }, e, r, arguments.length, null)
    }
  });
  p.each(["top", "left"], function(e, t) {
    p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
      if (n) {
        n = Bt(e, t);
        return Pt.test(n) ? p(e).position()[t] + "px" : n
      }
    })
  });
  p.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    p.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      p.fn[r] = function(r, i) {
        var s = arguments.length && (n || typeof r !== "boolean"),
          o = n || (r === true || i === true ? "margin" : "border");
        return J(this, function(t, n, r) {
          var i;
          if (p.isWindow(t)) {
            return t.document.documentElement["client" + e]
          }
          if (t.nodeType === 9) {
            i = t.documentElement;
            return Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])
          }
          return r === undefined ? p.css(t, n, o) : p.style(t, n, r, o)
        }, t, s ? r : undefined, s, null)
      }
    })
  });
  p.fn.size = function() {
    return this.length
  };
  p.fn.andSelf = p.fn.addBack;
  if (typeof define === "function" && define.amd) {
    define("jquery", [], function() {
      return p
    })
  }
  var or = e.jQuery,
    ur = e.$;
  p.noConflict = function(t) {
    if (e.$ === p) {
      e.$ = ur
    }
    if (t && e.jQuery === p) {
      e.jQuery = or
    }
    return p
  };
  if (typeof t === j) {
    e.jQuery = e.$ = p
  }
  return p
});
(function(e, t) {
  function i(t, n) {
    var r, i, o, u = t.nodeName.toLowerCase();
    if ("area" === u) {
      r = t.parentNode;
      i = r.name;
      if (!t.href || !i || r.nodeName.toLowerCase() !== "map") {
        return false
      }
      o = e("img[usemap=#" + i + "]")[0];
      return !!o && s(o)
    }
    return (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
  }

  function s(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return e.css(this, "visibility") === "hidden"
    }).length
  }
  var n = 0,
    r = /^ui-id-\d+$/;
  e.ui = e.ui || {};
  e.extend(e.ui, {
    version: "1.10.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  });
  e.fn.extend({
    focus: function(t) {
      return function(n, r) {
        return typeof n === "number" ? this.each(function() {
          var t = this;
          setTimeout(function() {
            e(t).focus();
            if (r) {
              r.call(t)
            }
          }, n)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus),
    scrollParent: function() {
      var t;
      if (e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position"))) {
        t = this.parents().filter(function() {
          return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0)
      } else {
        t = this.parents().filter(function() {
          return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0)
      }
      return /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    },
    zIndex: function(n) {
      if (n !== t) {
        return this.css("zIndex", n)
      }
      if (this.length) {
        var r = e(this[0]),
          i, s;
        while (r.length && r[0] !== document) {
          i = r.css("position");
          if (i === "absolute" || i === "relative" || i === "fixed") {
            s = parseInt(r.css("zIndex"), 10);
            if (!isNaN(s) && s !== 0) {
              return s
            }
          }
          r = r.parent()
        }
      }
      return 0
    },
    uniqueId: function() {
      return this.each(function() {
        if (!this.id) {
          this.id = "ui-id-" + ++n
        }
      })
    },
    removeUniqueId: function() {
      return this.each(function() {
        if (r.test(this.id)) {
          e(this).removeAttr("id")
        }
      })
    }
  });
  e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(n) {
        return !!e.data(n, t)
      }
    }) : function(t, n, r) {
      return !!e.data(t, r[3])
    },
    focusable: function(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")))
    },
    tabbable: function(t) {
      var n = e.attr(t, "tabindex"),
        r = isNaN(n);
      return (r || n >= 0) && i(t, !r)
    }
  });
  if (!e("<a>").outerWidth(1).jquery) {
    e.each(["Width", "Height"], function(n, r) {
      function u(t, n, r, s) {
        e.each(i, function() {
          n -= parseFloat(e.css(t, "padding" + this)) || 0;
          if (r) {
            n -= parseFloat(e.css(t, "border" + this + "Width")) || 0
          }
          if (s) {
            n -= parseFloat(e.css(t, "margin" + this)) || 0
          }
        });
        return n
      }
      var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
        s = r.toLowerCase(),
        o = {
          innerWidth: e.fn.innerWidth,
          innerHeight: e.fn.innerHeight,
          outerWidth: e.fn.outerWidth,
          outerHeight: e.fn.outerHeight
        };
      e.fn["inner" + r] = function(n) {
        if (n === t) {
          return o["inner" + r].call(this)
        }
        return this.each(function() {
          e(this).css(s, u(this, n) + "px")
        })
      };
      e.fn["outer" + r] = function(t, n) {
        if (typeof t !== "number") {
          return o["outer" + r].call(this, t)
        }
        return this.each(function() {
          e(this).css(s, u(this, t, true, n) + "px")
        })
      }
    })
  }
  if (!e.fn.addBack) {
    e.fn.addBack = function(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
  }
  if (e("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
    e.fn.removeData = function(t) {
      return function(n) {
        if (arguments.length) {
          return t.call(this, e.camelCase(n))
        } else {
          return t.call(this)
        }
      }
    }(e.fn.removeData)
  }
  e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  e.support.selectstart = "onselectstart" in document.createElement("div");
  e.fn.extend({
    disableSelection: function() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault()
      })
    },
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    }
  });
  e.extend(e.ui, {
    plugin: {
      add: function(t, n, r) {
        var i, s = e.ui[t].prototype;
        for (i in r) {
          s.plugins[i] = s.plugins[i] || [];
          s.plugins[i].push([n, r[i]])
        }
      },
      call: function(e, t, n) {
        var r, i = e.plugins[t];
        if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) {
          return
        }
        for (r = 0; r < i.length; r++) {
          if (e.options[i[r][0]]) {
            i[r][1].apply(e.element, n)
          }
        }
      }
    },
    hasScroll: function(t, n) {
      if (e(t).css("overflow") === "hidden") {
        return false
      }
      var r = n && n === "left" ? "scrollLeft" : "scrollTop",
        i = false;
      if (t[r] > 0) {
        return true
      }
      t[r] = 1;
      i = t[r] > 0;
      t[r] = 0;
      return i
    }
  })
})(jQuery);
(function(e, t) {
  var n = 0,
    r = Array.prototype.slice,
    i = e.cleanData;
  e.cleanData = function(t) {
    for (var n = 0, r;
      (r = t[n]) != null; n++) {
      try {
        e(r).triggerHandler("remove")
      } catch (s) {}
    }
    i(t)
  };
  e.widget = function(t, n, r) {
    var i, s, o, u, a = {},
      f = t.split(".")[0];
    t = t.split(".")[1];
    i = f + "-" + t;
    if (!r) {
      r = n;
      n = e.Widget
    }
    e.expr[":"][i.toLowerCase()] = function(t) {
      return !!e.data(t, i)
    };
    e[f] = e[f] || {};
    s = e[f][t];
    o = e[f][t] = function(e, t) {
      if (!this._createWidget) {
        return new o(e, t)
      }
      if (arguments.length) {
        this._createWidget(e, t)
      }
    };
    e.extend(o, s, {
      version: r.version,
      _proto: e.extend({}, r),
      _childConstructors: []
    });
    u = new n;
    u.options = e.widget.extend({}, u.options);
    e.each(r, function(t, r) {
      if (!e.isFunction(r)) {
        a[t] = r;
        return
      }
      a[t] = function() {
        var e = function() {
            return n.prototype[t].apply(this, arguments)
          },
          i = function(e) {
            return n.prototype[t].apply(this, e)
          };
        return function() {
          var t = this._super,
            n = this._superApply,
            s;
          this._super = e;
          this._superApply = i;
          s = r.apply(this, arguments);
          this._super = t;
          this._superApply = n;
          return s
        }
      }()
    });
    o.prototype = e.widget.extend(u, {
      widgetEventPrefix: s ? u.widgetEventPrefix || t : t
    }, a, {
      constructor: o,
      namespace: f,
      widgetName: t,
      widgetFullName: i
    });
    if (s) {
      e.each(s._childConstructors, function(t, n) {
        var r = n.prototype;
        e.widget(r.namespace + "." + r.widgetName, o, n._proto)
      });
      delete s._childConstructors
    } else {
      n._childConstructors.push(o)
    }
    e.widget.bridge(t, o)
  };
  e.widget.extend = function(n) {
    var i = r.call(arguments, 1),
      s = 0,
      o = i.length,
      u, a;
    for (; s < o; s++) {
      for (u in i[s]) {
        a = i[s][u];
        if (i[s].hasOwnProperty(u) && a !== t) {
          if (e.isPlainObject(a)) {
            n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a)
          } else {
            n[u] = a
          }
        }
      }
    }
    return n
  };
  e.widget.bridge = function(n, i) {
    var s = i.prototype.widgetFullName || n;
    e.fn[n] = function(o) {
      var u = typeof o === "string",
        a = r.call(arguments, 1),
        f = this;
      o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o;
      if (u) {
        this.each(function() {
          var r, i = e.data(this, s);
          if (!i) {
            return e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + o + "'")
          }
          if (!e.isFunction(i[o]) || o.charAt(0) === "_") {
            return e.error("no such method '" + o + "' for " + n + " widget instance")
          }
          r = i[o].apply(i, a);
          if (r !== i && r !== t) {
            f = r && r.jquery ? f.pushStack(r.get()) : r;
            return false
          }
        })
      } else {
        this.each(function() {
          var t = e.data(this, s);
          if (t) {
            t.option(o || {})._init()
          } else {
            e.data(this, s, new i(o, this))
          }
        })
      }
      return f
    }
  };
  e.Widget = function() {};
  e.Widget._childConstructors = [];
  e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: false,
      create: null
    },
    _createWidget: function(t, r) {
      r = e(r || this.defaultElement || this)[0];
      this.element = e(r);
      this.uuid = n++;
      this.eventNamespace = "." + this.widgetName + this.uuid;
      this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t);
      this.bindings = e();
      this.hoverable = e();
      this.focusable = e();
      if (r !== this) {
        e.data(r, this.widgetFullName, this);
        this._on(true, this.element, {
          remove: function(e) {
            if (e.target === r) {
              this.destroy()
            }
          }
        });
        this.document = e(r.style ? r.ownerDocument : r.document || r);
        this.window = e(this.document[0].defaultView || this.document[0].parentWindow)
      }
      this._create();
      this._trigger("create", null, this._getCreateEventData());
      this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      this._destroy();
      this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName));
      this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
      this.bindings.unbind(this.eventNamespace);
      this.hoverable.removeClass("ui-state-hover");
      this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function() {
      return this.element
    },
    option: function(n, r) {
      var i = n,
        s, o, u;
      if (arguments.length === 0) {
        return e.widget.extend({}, this.options)
      }
      if (typeof n === "string") {
        i = {};
        s = n.split(".");
        n = s.shift();
        if (s.length) {
          o = i[n] = e.widget.extend({}, this.options[n]);
          for (u = 0; u < s.length - 1; u++) {
            o[s[u]] = o[s[u]] || {};
            o = o[s[u]]
          }
          n = s.pop();
          if (arguments.length === 1) {
            return o[n] === t ? null : o[n]
          }
          o[n] = r
        } else {
          if (arguments.length === 1) {
            return this.options[n] === t ? null : this.options[n]
          }
          i[n] = r
        }
      }
      this._setOptions(i);
      return this
    },
    _setOptions: function(e) {
      var t;
      for (t in e) {
        this._setOption(t, e[t])
      }
      return this
    },
    _setOption: function(e, t) {
      this.options[e] = t;
      if (e === "disabled") {
        this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus")
      }
      return this
    },
    enable: function() {
      return this._setOption("disabled", false)
    },
    disable: function() {
      return this._setOption("disabled", true)
    },
    _on: function(t, n, r) {
      var i, s = this;
      if (typeof t !== "boolean") {
        r = n;
        n = t;
        t = false
      }
      if (!r) {
        r = n;
        n = this.element;
        i = this.widget()
      } else {
        n = i = e(n);
        this.bindings = this.bindings.add(n)
      }
      e.each(r, function(r, o) {
        function u() {
          if (!t && (s.options.disabled === true || e(this).hasClass("ui-state-disabled"))) {
            return
          }
          return (typeof o === "string" ? s[o] : o).apply(s, arguments)
        }
        if (typeof o !== "string") {
          u.guid = o.guid = o.guid || u.guid || e.guid++
        }
        var a = r.match(/^(\w+)\s*(.*)$/),
          f = a[1] + s.eventNamespace,
          l = a[2];
        if (l) {
          i.delegate(l, f, u)
        } else {
          n.bind(f, u)
        }
      })
    },
    _off: function(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
      e.unbind(t).undelegate(t)
    },
    _delay: function(e, t) {
      function n() {
        return (typeof e === "string" ? r[e] : e).apply(r, arguments)
      }
      var r = this;
      return setTimeout(n, t || 0)
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t);
      this._on(t, {
        mouseenter: function(t) {
          e(t.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t);
      this._on(t, {
        focusin: function(t) {
          e(t.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(t, n, r) {
      var i, s, o = this.options[t];
      r = r || {};
      n = e.Event(n);
      n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase();
      n.target = this.element[0];
      s = n.originalEvent;
      if (s) {
        for (i in s) {
          if (!(i in n)) {
            n[i] = s[i]
          }
        }
      }
      this.element.trigger(n, r);
      return !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === false || n.isDefaultPrevented())
    }
  };
  e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(t, n) {
    e.Widget.prototype["_" + t] = function(r, i, s) {
      if (typeof i === "string") {
        i = {
          effect: i
        }
      }
      var o, u = !i ? t : i === true || typeof i === "number" ? n : i.effect || n;
      i = i || {};
      if (typeof i === "number") {
        i = {
          duration: i
        }
      }
      o = !e.isEmptyObject(i);
      i.complete = s;
      if (i.delay) {
        r.delay(i.delay)
      }
      if (o && e.effects && e.effects.effect[u]) {
        r[t](i)
      } else {
        if (u !== t && r[u]) {
          r[u](i.duration, i.easing, s)
        } else {
          r.queue(function(n) {
            e(this)[t]();
            if (s) {
              s.call(r[0])
            }
            n()
          })
        }
      }
    }
  })
})(jQuery);
(function(e, t) {
  var n = false;
  e(document).mouseup(function() {
    n = false
  });
  e.widget("ui.mouse", {
    version: "1.10.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function(n) {
        if (true === e.data(n.target, t.widgetName + ".preventClickEvent")) {
          e.removeData(n.target, t.widgetName + ".preventClickEvent");
          n.stopImmediatePropagation();
          return false
        }
      });
      this.started = false
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName);
      if (this._mouseMoveDelegate) {
        e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      }
    },
    _mouseDown: function(t) {
      if (n) {
        return
      }
      this._mouseStarted && this._mouseUp(t);
      this._mouseDownEvent = t;
      var r = this,
        i = t.which === 1,
        s = typeof this.options.cancel === "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : false;
      if (!i || s || !this._mouseCapture(t)) {
        return true
      }
      this.mouseDelayMet = !this.options.delay;
      if (!this.mouseDelayMet) {
        this._mouseDelayTimer = setTimeout(function() {
          r.mouseDelayMet = true
        }, this.options.delay)
      }
      if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
        this._mouseStarted = this._mouseStart(t) !== false;
        if (!this._mouseStarted) {
          t.preventDefault();
          return true
        }
      }
      if (true === e.data(t.target, this.widgetName + ".preventClickEvent")) {
        e.removeData(t.target, this.widgetName + ".preventClickEvent")
      }
      this._mouseMoveDelegate = function(e) {
        return r._mouseMove(e)
      };
      this._mouseUpDelegate = function(e) {
        return r._mouseUp(e)
      };
      e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
      t.preventDefault();
      n = true;
      return true
    },
    _mouseMove: function(t) {
      if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) {
        return this._mouseUp(t)
      }
      if (this._mouseStarted) {
        this._mouseDrag(t);
        return t.preventDefault()
      }
      if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
        this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== false;
        this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)
      }
      return !this._mouseStarted
    },
    _mouseUp: function(t) {
      e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      if (this._mouseStarted) {
        this._mouseStarted = false;
        if (t.target === this._mouseDownEvent.target) {
          e.data(t.target, this.widgetName + ".preventClickEvent", true)
        }
        this._mouseStop(t)
      }
      return false
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return true
    }
  })
})(jQuery);
(function(e, t) {
  function h(e, t, n) {
    return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
  }

  function p(t, n) {
    return parseInt(e.css(t, n), 10) || 0
  }

  function d(t) {
    var n = t[0];
    if (n.nodeType === 9) {
      return {
        width: t.width(),
        height: t.height(),
        offset: {
          top: 0,
          left: 0
        }
      }
    }
    if (e.isWindow(n)) {
      return {
        width: t.width(),
        height: t.height(),
        offset: {
          top: t.scrollTop(),
          left: t.scrollLeft()
        }
      }
    }
    if (n.preventDefault) {
      return {
        width: 0,
        height: 0,
        offset: {
          top: n.pageY,
          left: n.pageX
        }
      }
    }
    return {
      width: t.outerWidth(),
      height: t.outerHeight(),
      offset: t.offset()
    }
  }
  e.ui = e.ui || {};
  var n, r = Math.max,
    i = Math.abs,
    s = Math.round,
    o = /left|center|right/,
    u = /top|center|bottom/,
    a = /[\+\-]\d+(\.[\d]+)?%?/,
    f = /^\w+/,
    l = /%$/,
    c = e.fn.position;
  e.position = {
    scrollbarWidth: function() {
      if (n !== t) {
        return n
      }
      var r, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
        o = s.children()[0];
      e("body").append(s);
      r = o.offsetWidth;
      s.css("overflow", "scroll");
      i = o.offsetWidth;
      if (r === i) {
        i = s[0].clientWidth
      }
      s.remove();
      return n = r - i
    },
    getScrollInfo: function(t) {
      var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
        i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
        s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
      return {
        width: s ? e.position.scrollbarWidth() : 0,
        height: i ? e.position.scrollbarWidth() : 0
      }
    },
    getWithinInfo: function(t) {
      var n = e(t || window),
        r = e.isWindow(n[0]),
        i = !!n[0] && n[0].nodeType === 9;
      return {
        element: n,
        isWindow: r,
        isDocument: i,
        offset: n.offset() || {
          left: 0,
          top: 0
        },
        scrollLeft: n.scrollLeft(),
        scrollTop: n.scrollTop(),
        width: r ? n.width() : n.outerWidth(),
        height: r ? n.height() : n.outerHeight()
      }
    }
  };
  e.fn.position = function(t) {
    if (!t || !t.of) {
      return c.apply(this, arguments)
    }
    t = e.extend({}, t);
    var n, l, v, m, g, y, b = e(t.of),
      w = e.position.getWithinInfo(t.within),
      E = e.position.getScrollInfo(w),
      S = (t.collision || "flip").split(" "),
      x = {};
    y = d(b);
    if (b[0].preventDefault) {
      t.at = "left top"
    }
    l = y.width;
    v = y.height;
    m = y.offset;
    g = e.extend({}, m);
    e.each(["my", "at"], function() {
      var e = (t[this] || "").split(" "),
        n, r;
      if (e.length === 1) {
        e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]
      }
      e[0] = o.test(e[0]) ? e[0] : "center";
      e[1] = u.test(e[1]) ? e[1] : "center";
      n = a.exec(e[0]);
      r = a.exec(e[1]);
      x[this] = [n ? n[0] : 0, r ? r[0] : 0];
      t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
    });
    if (S.length === 1) {
      S[1] = S[0]
    }
    if (t.at[0] === "right") {
      g.left += l
    } else {
      if (t.at[0] === "center") {
        g.left += l / 2
      }
    }
    if (t.at[1] === "bottom") {
      g.top += v
    } else {
      if (t.at[1] === "center") {
        g.top += v / 2
      }
    }
    n = h(x.at, l, v);
    g.left += n[0];
    g.top += n[1];
    return this.each(function() {
      var o, u, a = e(this),
        f = a.outerWidth(),
        c = a.outerHeight(),
        d = p(this, "marginLeft"),
        y = p(this, "marginTop"),
        T = f + d + p(this, "marginRight") + E.width,
        N = c + y + p(this, "marginBottom") + E.height,
        C = e.extend({}, g),
        k = h(x.my, a.outerWidth(), a.outerHeight());
      if (t.my[0] === "right") {
        C.left -= f
      } else {
        if (t.my[0] === "center") {
          C.left -= f / 2
        }
      }
      if (t.my[1] === "bottom") {
        C.top -= c
      } else {
        if (t.my[1] === "center") {
          C.top -= c / 2
        }
      }
      C.left += k[0];
      C.top += k[1];
      if (!e.support.offsetFractions) {
        C.left = s(C.left);
        C.top = s(C.top)
      }
      o = {
        marginLeft: d,
        marginTop: y
      };
      e.each(["left", "top"], function(r, i) {
        if (e.ui.position[S[r]]) {
          e.ui.position[S[r]][i](C, {
            targetWidth: l,
            targetHeight: v,
            elemWidth: f,
            elemHeight: c,
            collisionPosition: o,
            collisionWidth: T,
            collisionHeight: N,
            offset: [n[0] + k[0], n[1] + k[1]],
            my: t.my,
            at: t.at,
            within: w,
            elem: a
          })
        }
      });
      if (t.using) {
        u = function(e) {
          var n = m.left - C.left,
            s = n + l - f,
            o = m.top - C.top,
            u = o + v - c,
            h = {
              target: {
                element: b,
                left: m.left,
                top: m.top,
                width: l,
                height: v
              },
              element: {
                element: a,
                left: C.left,
                top: C.top,
                width: f,
                height: c
              },
              horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
              vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
            };
          if (l < f && i(n + s) < l) {
            h.horizontal = "center"
          }
          if (v < c && i(o + u) < v) {
            h.vertical = "middle"
          }
          if (r(i(n), i(s)) > r(i(o), i(u))) {
            h.important = "horizontal"
          } else {
            h.important = "vertical"
          }
          t.using.call(this, e, h)
        }
      }
      a.offset(e.extend(C, {
        using: u
      }))
    })
  };
  e.ui.position = {
    fit: {
      left: function(e, t) {
        var n = t.within,
          i = n.isWindow ? n.scrollLeft : n.offset.left,
          s = n.width,
          o = e.left - t.collisionPosition.marginLeft,
          u = i - o,
          a = o + t.collisionWidth - s - i,
          f;
        if (t.collisionWidth > s) {
          if (u > 0 && a <= 0) {
            f = e.left + u + t.collisionWidth - s - i;
            e.left += u - f
          } else {
            if (a > 0 && u <= 0) {
              e.left = i
            } else {
              if (u > a) {
                e.left = i + s - t.collisionWidth
              } else {
                e.left = i
              }
            }
          }
        } else {
          if (u > 0) {
            e.left += u
          } else {
            if (a > 0) {
              e.left -= a
            } else {
              e.left = r(e.left - o, e.left)
            }
          }
        }
      },
      top: function(e, t) {
        var n = t.within,
          i = n.isWindow ? n.scrollTop : n.offset.top,
          s = t.within.height,
          o = e.top - t.collisionPosition.marginTop,
          u = i - o,
          a = o + t.collisionHeight - s - i,
          f;
        if (t.collisionHeight > s) {
          if (u > 0 && a <= 0) {
            f = e.top + u + t.collisionHeight - s - i;
            e.top += u - f
          } else {
            if (a > 0 && u <= 0) {
              e.top = i
            } else {
              if (u > a) {
                e.top = i + s - t.collisionHeight
              } else {
                e.top = i
              }
            }
          }
        } else {
          if (u > 0) {
            e.top += u
          } else {
            if (a > 0) {
              e.top -= a
            } else {
              e.top = r(e.top - o, e.top)
            }
          }
        }
      }
    },
    flip: {
      left: function(e, t) {
        var n = t.within,
          r = n.offset.left + n.scrollLeft,
          s = n.width,
          o = n.isWindow ? n.scrollLeft : n.offset.left,
          u = e.left - t.collisionPosition.marginLeft,
          a = u - o,
          f = u + t.collisionWidth - s - o,
          l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
          c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
          h = -2 * t.offset[0],
          p, d;
        if (a < 0) {
          p = e.left + l + c + h + t.collisionWidth - s - r;
          if (p < 0 || p < i(a)) {
            e.left += l + c + h
          }
        } else {
          if (f > 0) {
            d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
            if (d > 0 || i(d) < f) {
              e.left += l + c + h
            }
          }
        }
      },
      top: function(e, t) {
        var n = t.within,
          r = n.offset.top + n.scrollTop,
          s = n.height,
          o = n.isWindow ? n.scrollTop : n.offset.top,
          u = e.top - t.collisionPosition.marginTop,
          a = u - o,
          f = u + t.collisionHeight - s - o,
          l = t.my[1] === "top",
          c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
          h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
          p = -2 * t.offset[1],
          d, v;
        if (a < 0) {
          v = e.top + c + h + p + t.collisionHeight - s - r;
          if (e.top + c + h + p > a && (v < 0 || v < i(a))) {
            e.top += c + h + p
          }
        } else {
          if (f > 0) {
            d = e.top - t.collisionPosition.marginTop + c + h + p - o;
            if (e.top + c + h + p > f && (d > 0 || i(d) < f)) {
              e.top += c + h + p
            }
          }
        }
      }
    },
    flipfit: {
      left: function() {
        e.ui.position.flip.left.apply(this, arguments);
        e.ui.position.fit.left.apply(this, arguments)
      },
      top: function() {
        e.ui.position.flip.top.apply(this, arguments);
        e.ui.position.fit.top.apply(this, arguments)
      }
    }
  };
  (function() {
    var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
      u = document.createElement("div");
    t = document.createElement(o ? "div" : "body");
    r = {
      visibility: "hidden",
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: "none"
    };
    if (o) {
      e.extend(r, {
        position: "absolute",
        left: "-1000px",
        top: "-1000px"
      })
    }
    for (s in r) {
      t.style[s] = r[s]
    }
    t.appendChild(u);
    n = o || document.documentElement;
    n.insertBefore(t, n.firstChild);
    u.style.cssText = "position: absolute; left: 10.7432222px;";
    i = e(u).offset().left;
    e.support.offsetFractions = i > 10 && i < 11;
    t.innerHTML = "";
    n.removeChild(t)
  })()
})(jQuery);
(function(e, t) {
  var n = 0,
    r = {},
    i = {};
  r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide";
  i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show";
  e.widget("ui.accordion", {
    version: "1.10.4",
    options: {
      active: 0,
      animate: {},
      collapsible: false,
      event: "click",
      header: "> li > :first-child,> :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    _create: function() {
      var t = this.options;
      this.prevShow = this.prevHide = e();
      this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
      if (!t.collapsible && (t.active === false || t.active == null)) {
        t.active = 0
      }
      this._processPanels();
      if (t.active < 0) {
        t.active += this.headers.length
      }
      this._refresh()
    },
    _getCreateEventData: function() {
      return {
        header: this.active,
        panel: !this.active.length ? e() : this.active.next(),
        content: !this.active.length ? e() : this.active.next()
      }
    },
    _createIcons: function() {
      var t = this.options.icons;
      if (t) {
        e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers);
        this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader);
        this.headers.addClass("ui-accordion-icons")
      }
    },
    _destroyIcons: function() {
      this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    },
    _destroy: function() {
      var e;
      this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
      this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
        if (/^ui-accordion/.test(this.id)) {
          this.removeAttribute("id")
        }
      });
      this._destroyIcons();
      e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
        if (/^ui-accordion/.test(this.id)) {
          this.removeAttribute("id")
        }
      });
      if (this.options.heightStyle !== "content") {
        e.css("height", "")
      }
    },
    _setOption: function(e, t) {
      if (e === "active") {
        this._activate(t);
        return
      }
      if (e === "event") {
        if (this.options.event) {
          this._off(this.headers, this.options.event)
        }
        this._setupEvents(t)
      }
      this._super(e, t);
      if (e === "collapsible" && !t && this.options.active === false) {
        this._activate(0)
      }
      if (e === "icons") {
        this._destroyIcons();
        if (t) {
          this._createIcons()
        }
      }
      if (e === "disabled") {
        this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
      }
    },
    _keydown: function(t) {
      if (t.altKey || t.ctrlKey) {
        return
      }
      var n = e.ui.keyCode,
        r = this.headers.length,
        i = this.headers.index(t.target),
        s = false;
      switch (t.keyCode) {
        case n.RIGHT:
        case n.DOWN:
          s = this.headers[(i + 1) % r];
          break;
        case n.LEFT:
        case n.UP:
          s = this.headers[(i - 1 + r) % r];
          break;
        case n.SPACE:
        case n.ENTER:
          this._eventHandler(t);
          break;
        case n.HOME:
          s = this.headers[0];
          break;
        case n.END:
          s = this.headers[r - 1];
          break
      }
      if (s) {
        e(t.target).attr("tabIndex", -1);
        e(s).attr("tabIndex", 0);
        s.focus();
        t.preventDefault()
      }
    },
    _panelKeyDown: function(t) {
      if (t.keyCode === e.ui.keyCode.UP && t.ctrlKey) {
        e(t.currentTarget).prev().focus()
      }
    },
    refresh: function() {
      var t = this.options;
      this._processPanels();
      if (t.active === false && t.collapsible === true || !this.headers.length) {
        t.active = false;
        this.active = e()
      } else {
        if (t.active === false) {
          this._activate(0)
        } else {
          if (this.active.length && !e.contains(this.element[0], this.active[0])) {
            if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
              t.active = false;
              this.active = e()
            } else {
              this._activate(Math.max(0, t.active - 1))
            }
          } else {
            t.active = this.headers.index(this.active)
          }
        }
      }
      this._destroyIcons();
      this._refresh()
    },
    _processPanels: function() {
      this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
      this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
    },
    _refresh: function() {
      var t, r = this.options,
        i = r.heightStyle,
        s = this.element.parent(),
        o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n);
      this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
      this.active.next().addClass("ui-accordion-content-active").show();
      this.headers.attr("role", "tab").each(function(t) {
        var n = e(this),
          r = n.attr("id"),
          i = n.next(),
          s = i.attr("id");
        if (!r) {
          r = o + "-header-" + t;
          n.attr("id", r)
        }
        if (!s) {
          s = o + "-panel-" + t;
          i.attr("id", s)
        }
        n.attr("aria-controls", s);
        i.attr("aria-labelledby", r)
      }).next().attr("role", "tabpanel");
      this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide();
      if (!this.active.length) {
        this.headers.eq(0).attr("tabIndex", 0)
      } else {
        this.active.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0
        }).next().attr({
          "aria-hidden": "false"
        })
      }
      this._createIcons();
      this._setupEvents(r.event);
      if (i === "fill") {
        t = s.height();
        this.element.siblings(":visible").each(function() {
          var n = e(this),
            r = n.css("position");
          if (r === "absolute" || r === "fixed") {
            return
          }
          t -= n.outerHeight(true)
        });
        this.headers.each(function() {
          t -= e(this).outerHeight(true)
        });
        this.headers.next().each(function() {
          e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
        }).css("overflow", "auto")
      } else {
        if (i === "auto") {
          t = 0;
          this.headers.next().each(function() {
            t = Math.max(t, e(this).css("height", "").height())
          }).height(t)
        }
      }
    },
    _activate: function(t) {
      var n = this._findActive(t)[0];
      if (n === this.active[0]) {
        return
      }
      n = n || this.active[0];
      this._eventHandler({
        target: n,
        currentTarget: n,
        preventDefault: e.noop
      })
    },
    _findActive: function(t) {
      return typeof t === "number" ? this.headers.eq(t) : e()
    },
    _setupEvents: function(t) {
      var n = {
        keydown: "_keydown"
      };
      if (t) {
        e.each(t.split(" "), function(e, t) {
          n[t] = "_eventHandler"
        })
      }
      this._off(this.headers.add(this.headers.next()));
      this._on(this.headers, n);
      this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      });
      this._hoverable(this.headers);
      this._focusable(this.headers)
    },
    _eventHandler: function(t) {
      var n = this.options,
        r = this.active,
        i = e(t.currentTarget),
        s = i[0] === r[0],
        o = s && n.collapsible,
        u = o ? e() : i.next(),
        a = r.next(),
        f = {
          oldHeader: r,
          oldPanel: a,
          newHeader: o ? e() : i,
          newPanel: u
        };
      t.preventDefault();
      if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === false) {
        return
      }
      n.active = o ? false : this.headers.index(i);
      this.active = s ? e() : i;
      this._toggle(f);
      r.removeClass("ui-accordion-header-active ui-state-active");
      if (n.icons) {
        r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
      }
      if (!s) {
        i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
        if (n.icons) {
          i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
        }
        i.next().addClass("ui-accordion-content-active")
      }
    },
    _toggle: function(t) {
      var n = t.newPanel,
        r = this.prevShow.length ? this.prevShow : t.oldPanel;
      this.prevShow.add(this.prevHide).stop(true, true);
      this.prevShow = n;
      this.prevHide = r;
      if (this.options.animate) {
        this._animate(n, r, t)
      } else {
        r.hide();
        n.show();
        this._toggleComplete(t)
      }
      r.attr({
        "aria-hidden": "true"
      });
      r.prev().attr("aria-selected", "false");
      if (n.length && r.length) {
        r.prev().attr({
          tabIndex: -1,
          "aria-expanded": "false"
        })
      } else {
        if (n.length) {
          this.headers.filter(function() {
            return e(this).attr("tabIndex") === 0
          }).attr("tabIndex", -1)
        }
      }
      n.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        tabIndex: 0,
        "aria-expanded": "true"
      })
    },
    _animate: function(e, t, n) {
      var s, o, u, a = this,
        f = 0,
        l = e.length && (!t.length || e.index() < t.index()),
        c = this.options.animate || {},
        h = l && c.down || c,
        p = function() {
          a._toggleComplete(n)
        };
      if (typeof h === "number") {
        u = h
      }
      if (typeof h === "string") {
        o = h
      }
      o = o || h.easing || c.easing;
      u = u || h.duration || c.duration;
      if (!t.length) {
        return e.animate(i, u, o, p)
      }
      if (!e.length) {
        return t.animate(r, u, o, p)
      }
      s = e.show().outerHeight();
      t.animate(r, {
        duration: u,
        easing: o,
        step: function(e, t) {
          t.now = Math.round(e)
        }
      });
      e.hide().animate(i, {
        duration: u,
        easing: o,
        complete: p,
        step: function(e, n) {
          n.now = Math.round(e);
          if (n.prop !== "height") {
            f += n.now
          } else {
            if (a.options.heightStyle !== "content") {
              n.now = Math.round(s - t.outerHeight() - f);
              f = 0
            }
          }
        }
      })
    },
    _toggleComplete: function(e) {
      var t = e.oldPanel;
      t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
      if (t.length) {
        t.parent()[0].className = t.parent()[0].className
      }
      this._trigger("activate", null, e)
    }
  })
})(jQuery);
(function(e, t) {
  e.widget("ui.autocomplete", {
    version: "1.10.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: false,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var t, n, r, i = this.element[0].nodeName.toLowerCase(),
        s = i === "textarea",
        o = i === "input";
      this.isMultiLine = s ? true : o ? false : this.element.prop("isContentEditable");
      this.valueMethod = this.element[s || o ? "val" : "text"];
      this.isNewMenu = true;
      this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
      this._on(this.element, {
        keydown: function(i) {
          if (this.element.prop("readOnly")) {
            t = true;
            r = true;
            n = true;
            return
          }
          t = false;
          r = false;
          n = false;
          var s = e.ui.keyCode;
          switch (i.keyCode) {
            case s.PAGE_UP:
              t = true;
              this._move("previousPage", i);
              break;
            case s.PAGE_DOWN:
              t = true;
              this._move("nextPage", i);
              break;
            case s.UP:
              t = true;
              this._keyEvent("previous", i);
              break;
            case s.DOWN:
              t = true;
              this._keyEvent("next", i);
              break;
            case s.ENTER:
            case s.NUMPAD_ENTER:
              if (this.menu.active) {
                t = true;
                i.preventDefault();
                this.menu.select(i)
              }
              break;
            case s.TAB:
              if (this.menu.active) {
                this.menu.select(i)
              }
              break;
            case s.ESCAPE:
              if (this.menu.element.is(":visible")) {
                this._value(this.term);
                this.close(i);
                i.preventDefault()
              }
              break;
            default:
              n = true;
              this._searchTimeout(i);
              break
          }
        },
        keypress: function(r) {
          if (t) {
            t = false;
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
              r.preventDefault()
            }
            return
          }
          if (n) {
            return
          }
          var i = e.ui.keyCode;
          switch (r.keyCode) {
            case i.PAGE_UP:
              this._move("previousPage", r);
              break;
            case i.PAGE_DOWN:
              this._move("nextPage", r);
              break;
            case i.UP:
              this._keyEvent("previous", r);
              break;
            case i.DOWN:
              this._keyEvent("next", r);
              break
          }
        },
        input: function(e) {
          if (r) {
            r = false;
            e.preventDefault();
            return
          }
          this._searchTimeout(e)
        },
        focus: function() {
          this.selectedItem = null;
          this.previous = this._value()
        },
        blur: function(e) {
          if (this.cancelBlur) {
            delete this.cancelBlur;
            return
          }
          clearTimeout(this.searching);
          this.close(e);
          this._change(e)
        }
      });
      this._initSource();
      this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
        role: null
      }).hide().data("ui-menu");
      this._on(this.menu.element, {
        mousedown: function(t) {
          t.preventDefault();
          this.cancelBlur = true;
          this._delay(function() {
            delete this.cancelBlur
          });
          var n = this.menu.element[0];
          if (!e(t.target).closest(".ui-menu-item").length) {
            this._delay(function() {
              var t = this;
              this.document.one("mousedown", function(r) {
                if (r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target)) {
                  t.close()
                }
              })
            })
          }
        },
        menufocus: function(t, n) {
          if (this.isNewMenu) {
            this.isNewMenu = false;
            if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
              this.menu.blur();
              this.document.one("mousemove", function() {
                e(t.target).trigger(t.originalEvent)
              });
              return
            }
          }
          var r = n.item.data("ui-autocomplete-item");
          if (false !== this._trigger("focus", t, {
              item: r
            })) {
            if (t.originalEvent && /^key/.test(t.originalEvent.type)) {
              this._value(r.value)
            }
          } else {
            this.liveRegion.text(r.value)
          }
        },
        menuselect: function(e, t) {
          var n = t.item.data("ui-autocomplete-item"),
            r = this.previous;
          if (this.element[0] !== this.document[0].activeElement) {
            this.element.focus();
            this.previous = r;
            this._delay(function() {
              this.previous = r;
              this.selectedItem = n
            })
          }
          if (false !== this._trigger("select", e, {
              item: n
            })) {
            this._value(n.value)
          }
          this.term = this._value();
          this.close(e);
          this.selectedItem = n
        }
      });
      this.liveRegion = e("<span>", {
        role: "status",
        "aria-live": "polite"
      }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
      this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _destroy: function() {
      clearTimeout(this.searching);
      this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
      this.menu.element.remove();
      this.liveRegion.remove()
    },
    _setOption: function(e, t) {
      this._super(e, t);
      if (e === "source") {
        this._initSource()
      }
      if (e === "appendTo") {
        this.menu.element.appendTo(this._appendTo())
      }
      if (e === "disabled" && t && this.xhr) {
        this.xhr.abort()
      }
    },
    _appendTo: function() {
      var t = this.options.appendTo;
      if (t) {
        t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)
      }
      if (!t) {
        t = this.element.closest(".ui-front")
      }
      if (!t.length) {
        t = this.document[0].body
      }
      return t
    },
    _initSource: function() {
      var t, n, r = this;
      if (e.isArray(this.options.source)) {
        t = this.options.source;
        this.source = function(n, r) {
          r(e.ui.autocomplete.filter(t, n.term))
        }
      } else {
        if (typeof this.options.source === "string") {
          n = this.options.source;
          this.source = function(t, i) {
            if (r.xhr) {
              r.xhr.abort()
            }
            r.xhr = e.ajax({
              url: n,
              data: t,
              dataType: "json",
              success: function(e) {
                i(e)
              },
              error: function() {
                i([])
              }
            })
          }
        } else {
          this.source = this.options.source
        }
      }
    },
    _searchTimeout: function(e) {
      clearTimeout(this.searching);
      this.searching = this._delay(function() {
        if (this.term !== this._value()) {
          this.selectedItem = null;
          this.search(null, e)
        }
      }, this.options.delay)
    },
    search: function(e, t) {
      e = e != null ? e : this._value();
      this.term = this._value();
      if (e.length < this.options.minLength) {
        return this.close(t)
      }
      if (this._trigger("search", t) === false) {
        return
      }
      return this._search(e)
    },
    _search: function(e) {
      this.pending++;
      this.element.addClass("ui-autocomplete-loading");
      this.cancelSearch = false;
      this.source({
        term: e
      }, this._response())
    },
    _response: function() {
      var t = ++this.requestIndex;
      return e.proxy(function(e) {
        if (t === this.requestIndex) {
          this.__response(e)
        }
        this.pending--;
        if (!this.pending) {
          this.element.removeClass("ui-autocomplete-loading")
        }
      }, this)
    },
    __response: function(e) {
      if (e) {
        e = this._normalize(e)
      }
      this._trigger("response", null, {
        content: e
      });
      if (!this.options.disabled && e && e.length && !this.cancelSearch) {
        this._suggest(e);
        this._trigger("open")
      } else {
        this._close()
      }
    },
    close: function(e) {
      this.cancelSearch = true;
      this._close(e)
    },
    _close: function(e) {
      if (this.menu.element.is(":visible")) {
        this.menu.element.hide();
        this.menu.blur();
        this.isNewMenu = true;
        this._trigger("close", e)
      }
    },
    _change: function(e) {
      if (this.previous !== this._value()) {
        this._trigger("change", e, {
          item: this.selectedItem
        })
      }
    },
    _normalize: function(t) {
      if (t.length && t[0].label && t[0].value) {
        return t
      }
      return e.map(t, function(t) {
        if (typeof t === "string") {
          return {
            label: t,
            value: t
          }
        }
        return e.extend({
          label: t.label || t.value,
          value: t.value || t.label
        }, t)
      })
    },
    _suggest: function(t) {
      var n = this.menu.element.empty();
      this._renderMenu(n, t);
      this.isNewMenu = true;
      this.menu.refresh();
      n.show();
      this._resizeMenu();
      n.position(e.extend({ of: this.element
      }, this.options.position));
      if (this.options.autoFocus) {
        this.menu.next()
      }
    },
    _resizeMenu: function() {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function(t, n) {
      var r = this;
      e.each(n, function(e, n) {
        r._renderItemData(t, n)
      })
    },
    _renderItemData: function(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t)
    },
    _renderItem: function(t, n) {
      return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
    },
    _move: function(e, t) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, t);
        return
      }
      if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
        this._value(this.term);
        this.menu.blur();
        return
      }
      this.menu[e](t)
    },
    widget: function() {
      return this.menu.element
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function(e, t) {
      if (!this.isMultiLine || this.menu.element.is(":visible")) {
        this._move(e, t);
        t.preventDefault()
      }
    }
  });
  e.extend(e.ui.autocomplete, {
    escapeRegex: function(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    },
    filter: function(t, n) {
      var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
      return e.grep(t, function(e) {
        return r.test(e.label || e.value || e)
      })
    }
  });
  e.widget("ui.autocomplete", e.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function(e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }
      }
    },
    __response: function(e) {
      var t;
      this._superApply(arguments);
      if (this.options.disabled || this.cancelSearch) {
        return
      }
      if (e && e.length) {
        t = this.options.messages.results(e.length)
      } else {
        t = this.options.messages.noResults
      }
      this.liveRegion.text(t)
    }
  })
})(jQuery);
(function(e, t) {
  var n, r = "ui-button ui-widget ui-state-default ui-corner-all",
    i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    s = function() {
      var t = e(this);
      setTimeout(function() {
        t.find(":ui-button").button("refresh")
      }, 1)
    },
    o = function(t) {
      var n = t.name,
        r = t.form,
        i = e([]);
      if (n) {
        n = n.replace(/'/g, "\\'");
        if (r) {
          i = e(r).find("[name='" + n + "']")
        } else {
          i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
            return !this.form
          })
        }
      }
      return i
    };
  e.widget("ui.button", {
    version: "1.10.4",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: true,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function() {
      this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s);
      if (typeof this.options.disabled !== "boolean") {
        this.options.disabled = !!this.element.prop("disabled")
      } else {
        this.element.prop("disabled", this.options.disabled)
      }
      this._determineButtonType();
      this.hasTitle = !!this.buttonElement.attr("title");
      var t = this,
        i = this.options,
        u = this.type === "checkbox" || this.type === "radio",
        a = !u ? "ui-state-active" : "";
      if (i.label === null) {
        i.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()
      }
      this._hoverable(this.buttonElement);
      this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
        if (i.disabled) {
          return
        }
        if (this === n) {
          e(this).addClass("ui-state-active")
        }
      }).bind("mouseleave" + this.eventNamespace, function() {
        if (i.disabled) {
          return
        }
        e(this).removeClass(a)
      }).bind("click" + this.eventNamespace, function(e) {
        if (i.disabled) {
          e.preventDefault();
          e.stopImmediatePropagation()
        }
      });
      this._on({
        focus: function() {
          this.buttonElement.addClass("ui-state-focus")
        },
        blur: function() {
          this.buttonElement.removeClass("ui-state-focus")
        }
      });
      if (u) {
        this.element.bind("change" + this.eventNamespace, function() {
          t.refresh()
        })
      }
      if (this.type === "checkbox") {
        this.buttonElement.bind("click" + this.eventNamespace, function() {
          if (i.disabled) {
            return false
          }
        })
      } else {
        if (this.type === "radio") {
          this.buttonElement.bind("click" + this.eventNamespace, function() {
            if (i.disabled) {
              return false
            }
            e(this).addClass("ui-state-active");
            t.buttonElement.attr("aria-pressed", "true");
            var n = t.element[0];
            o(n).not(n).map(function() {
              return e(this).button("widget")[0]
            }).removeClass("ui-state-active").attr("aria-pressed", "false")
          })
        } else {
          this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
            if (i.disabled) {
              return false
            }
            e(this).addClass("ui-state-active");
            n = this;
            t.document.one("mouseup", function() {
              n = null
            })
          }).bind("mouseup" + this.eventNamespace, function() {
            if (i.disabled) {
              return false
            }
            e(this).removeClass("ui-state-active")
          }).bind("keydown" + this.eventNamespace, function(t) {
            if (i.disabled) {
              return false
            }
            if (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) {
              e(this).addClass("ui-state-active")
            }
          }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
            e(this).removeClass("ui-state-active")
          });
          if (this.buttonElement.is("a")) {
            this.buttonElement.keyup(function(t) {
              if (t.keyCode === e.ui.keyCode.SPACE) {
                e(this).click()
              }
            })
          }
        }
      }
      this._setOption("disabled", i.disabled);
      this._resetButton()
    },
    _determineButtonType: function() {
      var e, t, n;
      if (this.element.is("[type=checkbox]")) {
        this.type = "checkbox"
      } else {
        if (this.element.is("[type=radio]")) {
          this.type = "radio"
        } else {
          if (this.element.is("input")) {
            this.type = "input"
          } else {
            this.type = "button"
          }
        }
      }
      if (this.type === "checkbox" || this.type === "radio") {
        e = this.element.parents().last();
        t = "label[for='" + this.element.attr("id") + "']";
        this.buttonElement = e.find(t);
        if (!this.buttonElement.length) {
          e = e.length ? e.siblings() : this.element.siblings();
          this.buttonElement = e.filter(t);
          if (!this.buttonElement.length) {
            this.buttonElement = e.find(t)
          }
        }
        this.element.addClass("ui-helper-hidden-accessible");
        n = this.element.is(":checked");
        if (n) {
          this.buttonElement.addClass("ui-state-active")
        }
        this.buttonElement.prop("aria-pressed", n)
      } else {
        this.buttonElement = this.element
      }
    },
    widget: function() {
      return this.buttonElement
    },
    _destroy: function() {
      this.element.removeClass("ui-helper-hidden-accessible");
      this.buttonElement.removeClass(r + " ui-state-active " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
      if (!this.hasTitle) {
        this.buttonElement.removeAttr("title")
      }
    },
    _setOption: function(e, t) {
      this._super(e, t);
      if (e === "disabled") {
        this.element.prop("disabled", !!t);
        if (t) {
          this.buttonElement.removeClass("ui-state-focus")
        }
        return
      }
      this._resetButton()
    },
    refresh: function() {
      var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
      if (t !== this.options.disabled) {
        this._setOption("disabled", t)
      }
      if (this.type === "radio") {
        o(this.element[0]).each(function() {
          if (e(this).is(":checked")) {
            e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
          } else {
            e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
          }
        })
      } else {
        if (this.type === "checkbox") {
          if (this.element.is(":checked")) {
            this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
          } else {
            this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
          }
        }
      }
    },
    _resetButton: function() {
      if (this.type === "input") {
        if (this.options.label) {
          this.element.val(this.options.label)
        }
        return
      }
      var t = this.buttonElement.removeClass(i),
        n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
        r = this.options.icons,
        s = r.primary && r.secondary,
        o = [];
      if (r.primary || r.secondary) {
        if (this.options.text) {
          o.push("ui-button-text-icon" + (s ? "s" : r.primary ? "-primary" : "-secondary"))
        }
        if (r.primary) {
          t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>")
        }
        if (r.secondary) {
          t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>")
        }
        if (!this.options.text) {
          o.push(s ? "ui-button-icons-only" : "ui-button-icon-only");
          if (!this.hasTitle) {
            t.attr("title", e.trim(n))
          }
        }
      } else {
        o.push("ui-button-text-only")
      }
      t.addClass(o.join(" "))
    }
  });
  e.widget("ui.buttonset", {
    version: "1.10.4",
    options: {
      items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
    },
    _create: function() {
      this.element.addClass("ui-buttonset")
    },
    _init: function() {
      this.refresh()
    },
    _setOption: function(e, t) {
      if (e === "disabled") {
        this.buttons.button("option", e, t)
      }
      this._super(e, t)
    },
    refresh: function() {
      var t = this.element.css("direction") === "rtl";
      this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
        return e(this).button("widget")[0]
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
    },
    _destroy: function() {
      this.element.removeClass("ui-buttonset");
      this.buttons.map(function() {
        return e(this).button("widget")[0]
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }
  })
})(jQuery);
(function(e, t) {
  function i() {
    this._curInst = null;
    this._keyEvent = false;
    this._disabledInputs = [];
    this._datepickerShowing = false;
    this._inDialog = false;
    this._mainDivId = "ff-ui-datepicker-div";
    this._inlineClass = "ff-ui-datepicker-inline";
    this._appendClass = "ff-ui-datepicker-append";
    this._triggerClass = "ff-ui-datepicker-trigger";
    this._dialogClass = "ff-ui-datepicker-dialog";
    this._disableClass = "ff-ui-datepicker-disabled";
    this._unselectableClass = "ff-ui-datepicker-unselectable";
    this._currentClass = "ff-ui-datepicker-current-day";
    this._dayOverClass = "ff-ui-datepicker-days-cell-over";
    this.regional = [];
    this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ""
    };
    this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: false,
      hideIfNoPrevNext: false,
      navigationAsDateFormat: false,
      gotoCurrent: false,
      changeMonth: false,
      changeYear: false,
      yearRange: "c-10:c+10",
      showOtherMonths: false,
      selectOtherMonths: false,
      showWeek: false,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: true,
      showButtonPanel: false,
      autoSize: false,
      disabled: false
    };
    e.extend(this._defaults, this.regional[""]);
    this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ff-ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function s(t) {
    var n = "button, .ff-ui-datepicker-prev, .ff-ui-datepicker-next, .ff-ui-datepicker-calendar td a";
    return t.delegate(n, "mouseout", function() {
      e(this).removeClass("ui-state-hover");
      if (this.className.indexOf("ff-ui-datepicker-prev") !== -1) {
        e(this).removeClass("ff-ui-datepicker-prev-hover")
      }
      if (this.className.indexOf("ff-ui-datepicker-next") !== -1) {
        e(this).removeClass("ff-ui-datepicker-next-hover")
      }
    }).delegate(n, "mouseover", function() {
      if (!e.datepicker._isDisabledDatepicker(r.inline ? t.parent()[0] : r.input[0])) {
        e(this).parents(".ff-ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
        e(this).addClass("ui-state-hover");
        if (this.className.indexOf("ff-ui-datepicker-prev") !== -1) {
          e(this).addClass("ff-ui-datepicker-prev-hover")
        }
        if (this.className.indexOf("ff-ui-datepicker-next") !== -1) {
          e(this).addClass("ff-ui-datepicker-next-hover")
        }
      }
    })
  }

  function o(t, n) {
    e.extend(t, n);
    for (var r in n) {
      if (n[r] == null) {
        t[r] = n[r]
      }
    }
    return t
  }
  e.extend(e.ui, {
    datepicker: {
      version: "1.10.4"
    }
  });
  var n = "datepicker",
    r;
  e.extend(i.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(e) {
      o(this._defaults, e || {});
      return this
    },
    _attachDatepicker: function(t, n) {
      var r, i, s;
      r = t.nodeName.toLowerCase();
      i = r === "div" || r === "span";
      if (!t.id) {
        this.uuid += 1;
        t.id = "dp" + this.uuid
      }
      s = this._newInst(e(t), i);
      s.settings = e.extend({}, n || {});
      if (r === "input") {
        this._connectDatepicker(t, s)
      } else {
        if (i) {
          this._inlineDatepicker(t, s)
        }
      }
    },
    _newInst: function(t, n) {
      var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: r,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: n,
        dpDiv: !n ? this.dpDiv : s(e("<div class='" + this._inlineClass + " ff-ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
      }
    },
    _connectDatepicker: function(t, r) {
      var i = e(t);
      r.append = e([]);
      r.trigger = e([]);
      if (i.hasClass(this.markerClassName)) {
        return
      }
      this._attachments(i, r);
      i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
      this._autoSize(r);
      e.data(t, n, r);
      if (r.settings.disabled) {
        this._disableDatepicker(t)
      }
    },
    _attachments: function(t, n) {
      var r, i, s, o = this._get(n, "appendText"),
        u = this._get(n, "isRTL");
      if (n.append) {
        n.append.remove()
      }
      if (o) {
        n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>");
        t[u ? "before" : "after"](n.append)
      }
      t.unbind("focus", this._showDatepicker);
      if (n.trigger) {
        n.trigger.remove()
      }
      r = this._get(n, "showOn");
      if (r === "focus" || r === "both") {
        t.focus(this._showDatepicker)
      }
      if (r === "button" || r === "both") {
        i = this._get(n, "buttonText");
        s = this._get(n, "buttonImage");
        n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
          src: s,
          alt: i,
          title: i
        }) : e("<button type='button'></button>").addClass(this._triggerClass).html(!s ? i : e("<img/>").attr({
          src: s,
          alt: i,
          title: i
        })));
        t[u ? "before" : "after"](n.trigger);
        n.trigger.click(function() {
          if (e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0]) {
            e.datepicker._hideDatepicker()
          } else {
            if (e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0]) {
              e.datepicker._hideDatepicker();
              e.datepicker._showDatepicker(t[0])
            } else {
              e.datepicker._showDatepicker(t[0])
            }
          }
          return false
        })
      }
    },
    _autoSize: function(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t, n, r, i, s = new Date(2009, 12 - 1, 20),
          o = this._get(e, "dateFormat");
        if (o.match(/[DM]/)) {
          t = function(e) {
            n = 0;
            r = 0;
            for (i = 0; i < e.length; i++) {
              if (e[i].length > n) {
                n = e[i].length;
                r = i
              }
            }
            return r
          };
          s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort")));
          s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())
        }
        e.input.attr("size", this._formatDate(e, s).length)
      }
    },
    _inlineDatepicker: function(t, r) {
      var i = e(t);
      if (i.hasClass(this.markerClassName)) {
        return
      }
      i.addClass(this.markerClassName).append(r.dpDiv);
      e.data(t, n, r);
      this._setDate(r, this._getDefaultDate(r), true);
      this._updateDatepicker(r);
      this._updateAlternate(r);
      if (r.settings.disabled) {
        this._disableDatepicker(t)
      }
      r.dpDiv.css("display", "block")
    },
    _dialogDatepicker: function(t, r, i, s, u) {
      var a, f, l, c, h, p = this._dialogInst;
      if (!p) {
        this.uuid += 1;
        a = "dp" + this.uuid;
        this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>");
        this._dialogInput.keydown(this._doKeyDown);
        e("body").append(this._dialogInput);
        p = this._dialogInst = this._newInst(this._dialogInput, false);
        p.settings = {};
        e.data(this._dialogInput[0], n, p)
      }
      o(p.settings, s || {});
      r = r && r.constructor === Date ? this._formatDate(p, r) : r;
      this._dialogInput.val(r);
      this._pos = u ? u.length ? u : [u.pageX, u.pageY] : null;
      if (!this._pos) {
        f = document.documentElement.clientWidth;
        l = document.documentElement.clientHeight;
        c = document.documentElement.scrollLeft || document.body.scrollLeft;
        h = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]
      }
      this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
      p.settings.onSelect = i;
      this._inDialog = true;
      this.dpDiv.addClass(this._dialogClass);
      this._showDatepicker(this._dialogInput[0]);
      if (e.blockUI) {
        e.blockUI(this.dpDiv)
      }
      e.data(this._dialogInput[0], n, p);
      return this
    },
    _destroyDatepicker: function(t) {
      var r, i = e(t),
        s = e.data(t, n);
      if (!i.hasClass(this.markerClassName)) {
        return
      }
      r = t.nodeName.toLowerCase();
      e.removeData(t, n);
      if (r === "input") {
        s.append.remove();
        s.trigger.remove();
        i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
      } else {
        if (r === "div" || r === "span") {
          i.removeClass(this.markerClassName).empty()
        }
      }
    },
    _enableDatepicker: function(t) {
      var r, i, s = e(t),
        o = e.data(t, n);
      if (!s.hasClass(this.markerClassName)) {
        return
      }
      r = t.nodeName.toLowerCase();
      if (r === "input") {
        t.disabled = false;
        o.trigger.filter("button").each(function() {
          this.disabled = false
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        })
      } else {
        if (r === "div" || r === "span") {
          i = s.children("." + this._inlineClass);
          i.children().removeClass("ui-state-disabled");
          i.find("select.ff-ui-datepicker-month, select.ff-ui-datepicker-year").prop("disabled", false)
        }
      }
      this._disabledInputs = e.map(this._disabledInputs, function(e) {
        return e === t ? null : e
      })
    },
    _disableDatepicker: function(t) {
      var r, i, s = e(t),
        o = e.data(t, n);
      if (!s.hasClass(this.markerClassName)) {
        return
      }
      r = t.nodeName.toLowerCase();
      if (r === "input") {
        t.disabled = true;
        o.trigger.filter("button").each(function() {
          this.disabled = true
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        })
      } else {
        if (r === "div" || r === "span") {
          i = s.children("." + this._inlineClass);
          i.children().addClass("ui-state-disabled");
          i.find("select.ff-ui-datepicker-month, select.ff-ui-datepicker-year").prop("disabled", true)
        }
      }
      this._disabledInputs = e.map(this._disabledInputs, function(e) {
        return e === t ? null : e
      });
      this._disabledInputs[this._disabledInputs.length] = t
    },
    _isDisabledDatepicker: function(e) {
      if (!e) {
        return false
      }
      for (var t = 0; t < this._disabledInputs.length; t++) {
        if (this._disabledInputs[t] === e) {
          return true
        }
      }
      return false
    },
    _getInst: function(t) {
      try {
        return e.data(t, n)
      } catch (r) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(n, r, i) {
      var s, u, a, f, l = this._getInst(n);
      if (arguments.length === 2 && typeof r === "string") {
        return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null
      }
      s = r || {};
      if (typeof r === "string") {
        s = {};
        s[r] = i
      }
      if (l) {
        if (this._curInst === l) {
          this._hideDatepicker()
        }
        u = this._getDateDatepicker(n, true);
        a = this._getMinMaxDate(l, "min");
        f = this._getMinMaxDate(l, "max");
        o(l.settings, s);
        if (a !== null && s.dateFormat !== t && s.minDate === t) {
          l.settings.minDate = this._formatDate(l, a)
        }
        if (f !== null && s.dateFormat !== t && s.maxDate === t) {
          l.settings.maxDate = this._formatDate(l, f)
        }
        if ("disabled" in s) {
          if (s.disabled) {
            this._disableDatepicker(n)
          } else {
            this._enableDatepicker(n)
          }
        }
        this._attachments(e(n), l);
        this._autoSize(l);
        this._setDate(l, u);
        this._updateAlternate(l);
        this._updateDatepicker(l)
      }
    },
    _changeDatepicker: function(e, t, n) {
      this._optionDatepicker(e, t, n)
    },
    _refreshDatepicker: function(e) {
      var t = this._getInst(e);
      if (t) {
        this._updateDatepicker(t)
      }
    },
    _setDateDatepicker: function(e, t) {
      var n = this._getInst(e);
      if (n) {
        this._setDate(n, t);
        this._updateDatepicker(n);
        this._updateAlternate(n)
      }
    },
    _getDateDatepicker: function(e, t) {
      var n = this._getInst(e);
      if (n && !n.inline) {
        this._setDateFromField(n, t)
      }
      return n ? this._getDate(n) : null
    },
    _doKeyDown: function(t) {
      var n, r, i, s = e.datepicker._getInst(t.target),
        o = true,
        u = s.dpDiv.is(".ff-ui-datepicker-rtl");
      s._keyEvent = true;
      if (e.datepicker._datepickerShowing) {
        switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker();
            o = false;
            break;
          case 13:
            i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv);
            if (i[0]) {
              e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0])
            }
            n = e.datepicker._get(s, "onSelect");
            if (n) {
              r = e.datepicker._formatDate(s);
              n.apply(s.input ? s.input[0] : null, [r, s])
            } else {
              e.datepicker._hideDatepicker()
            }
            return false;
          case 27:
            e.datepicker._hideDatepicker();
            break;
          case 33:
            e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
            break;
          case 34:
            e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
            break;
          case 35:
            if (t.ctrlKey || t.metaKey) {
              e.datepicker._clearDate(t.target)
            }
            o = t.ctrlKey || t.metaKey;
            break;
          case 36:
            if (t.ctrlKey || t.metaKey) {
              e.datepicker._gotoToday(t.target)
            }
            o = t.ctrlKey || t.metaKey;
            break;
          case 37:
            if (t.ctrlKey || t.metaKey) {
              e.datepicker._adjustDate(t.target, u ? +1 : -1, "D")
            }
            o = t.ctrlKey || t.metaKey;
            if (t.originalEvent.altKey) {
              e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M")
            }
            break;
          case 38:
            if (t.ctrlKey || t.metaKey) {
              e.datepicker._adjustDate(t.target, -7, "D")
            }
            o = t.ctrlKey || t.metaKey;
            break;
          case 39:
            if (t.ctrlKey || t.metaKey) {
              e.datepicker._adjustDate(t.target, u ? -1 : +1, "D")
            }
            o = t.ctrlKey || t.metaKey;
            if (t.originalEvent.altKey) {
              e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M")
            }
            break;
          case 40:
            if (t.ctrlKey || t.metaKey) {
              e.datepicker._adjustDate(t.target, +7, "D")
            }
            o = t.ctrlKey || t.metaKey;
            break;
          default:
            o = false
        }
      } else {
        if (t.keyCode === 36 && t.ctrlKey) {
          e.datepicker._showDatepicker(this)
        } else {
          o = false
        }
      }
      if (o) {
        t.preventDefault();
        t.stopPropagation()
      }
    },
    _doKeyPress: function(t) {
      var n, r, i = e.datepicker._getInst(t.target);
      if (e.datepicker._get(i, "constrainInput")) {
        n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat"));
        r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode);
        return t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
      }
    },
    _doKeyUp: function(t) {
      var n, r = e.datepicker._getInst(t.target);
      if (r.input.val() !== r.lastVal) {
        try {
          n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r));
          if (n) {
            e.datepicker._setDateFromField(r);
            e.datepicker._updateAlternate(r);
            e.datepicker._updateDatepicker(r)
          }
        } catch (i) {}
      }
      return true
    },
    _showDatepicker: function(t) {
      t = t.target || t;
      if (t.nodeName.toLowerCase() !== "input") {
        t = e("input", t.parentNode)[0]
      }
      if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) {
        return
      }
      var n, r, i, s, u, a, f;
      n = e.datepicker._getInst(t);
      if (e.datepicker._curInst && e.datepicker._curInst !== n) {
        e.datepicker._curInst.dpDiv.stop(true, true);
        if (n && e.datepicker._datepickerShowing) {
          e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])
        }
      }
      r = e.datepicker._get(n, "beforeShow");
      i = r ? r.apply(t, [t, n]) : {};
      if (i === false) {
        return
      }
      o(n.settings, i);
      n.lastVal = null;
      e.datepicker._lastInput = t;
      e.datepicker._setDateFromField(n);
      if (e.datepicker._inDialog) {
        t.value = ""
      }
      if (!e.datepicker._pos) {
        e.datepicker._pos = e.datepicker._findPos(t);
        e.datepicker._pos[1] += t.offsetHeight
      }
      s = false;
      e(t).parents().each(function() {
        s |= e(this).css("position") === "fixed";
        return !s
      });
      u = {
        left: e.datepicker._pos[0],
        top: e.datepicker._pos[1]
      };
      e.datepicker._pos = null;
      n.dpDiv.empty();
      n.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      });
      e.datepicker._updateDatepicker(n);
      u = e.datepicker._checkOffset(n, u, s);
      n.dpDiv.css({
        position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
        display: "none",
        left: u.left + "px",
        top: u.top + "px"
      });
      if (!n.inline) {
        a = e.datepicker._get(n, "showAnim");
        f = e.datepicker._get(n, "duration");
        n.dpDiv.zIndex(e(t).zIndex() + 1);
        e.datepicker._datepickerShowing = true;
        if (e.effects && e.effects.effect[a]) {
          n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f)
        } else {
          n.dpDiv[a || "show"](a ? f : null)
        }
        if (e.datepicker._shouldFocusInput(n)) {
          n.input.focus()
        }
        e.datepicker._curInst = n
      }
    },
    _updateDatepicker: function(t) {
      this.maxRows = 4;
      r = t;
      t.dpDiv.empty().append(this._generateHTML(t));
      this._attachHandlers(t);
      t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var n, i = this._getNumberOfMonths(t),
        s = i[1],
        o = 17;
      t.dpDiv.removeClass("ff-ui-datepicker-multi-2 ff-ui-datepicker-multi-3 ff-ui-datepicker-multi-4").width("");
      if (s > 1) {
        t.dpDiv.addClass("ff-ui-datepicker-multi-" + s).css("width", o * s + "em")
      }
      t.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ff-ui-datepicker-multi");
      t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ff-ui-datepicker-rtl");
      if (t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t)) {
        t.input.focus()
      }
      if (t.yearshtml) {
        n = t.yearshtml;
        setTimeout(function() {
          if (n === t.yearshtml && t.yearshtml) {
            t.dpDiv.find("select.ff-ui-datepicker-year:first").replaceWith(t.yearshtml)
          }
          n = t.yearshtml = null
        }, 0)
      }
    },
    _shouldFocusInput: function(e) {
      return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
    },
    _checkOffset: function(t, n, r) {
      var i = t.dpDiv.outerWidth(),
        s = t.dpDiv.outerHeight(),
        o = t.input ? t.input.outerWidth() : 0,
        u = t.input ? t.input.outerHeight() : 0,
        a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
        f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
      n.left -= this._get(t, "isRTL") ? i - o : 0;
      n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0;
      n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0;
      n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0);
      n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0);
      return n
    },
    _findPos: function(t) {
      var n, r = this._getInst(t),
        i = this._get(r, "isRTL");
      while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) {
        t = t[i ? "previousSibling" : "nextSibling"]
      }
      n = e(t).offset();
      return [n.left, n.top]
    },
    _hideDatepicker: function(t) {
      var r, i, s, o, u = this._curInst;
      if (!u || t && u !== e.data(t, n)) {
        return
      }
      if (this._datepickerShowing) {
        r = this._get(u, "showAnim");
        i = this._get(u, "duration");
        s = function() {
          e.datepicker._tidyDialog(u)
        };
        if (e.effects && (e.effects.effect[r] || e.effects[r])) {
          u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s)
        } else {
          u.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? i : null, s)
        }
        if (!r) {
          s()
        }
        this._datepickerShowing = false;
        o = this._get(u, "onClose");
        if (o) {
          o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u])
        }
        this._lastInput = null;
        if (this._inDialog) {
          this._dialogInput.css({
            position: "absolute",
            left: "0",
            top: "-100px"
          });
          if (e.blockUI) {
            e.unblockUI();
            e("body").append(this.dpDiv)
          }
        }
        this._inDialog = false
      }
    },
    _tidyDialog: function(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ff-ui-datepicker-calendar")
    },
    _checkExternalClick: function(t) {
      if (!e.datepicker._curInst) {
        return
      }
      var n = e(t.target),
        r = e.datepicker._getInst(n[0]);
      if (n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && !(e.datepicker._inDialog && e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) {
        e.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      if (this._isDisabledDatepicker(i[0])) {
        return
      }
      this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r);
      this._updateDatepicker(s)
    },
    _gotoToday: function(t) {
      var n, r = e(t),
        i = this._getInst(r[0]);
      if (this._get(i, "gotoCurrent") && i.currentDay) {
        i.selectedDay = i.currentDay;
        i.drawMonth = i.selectedMonth = i.currentMonth;
        i.drawYear = i.selectedYear = i.currentYear
      } else {
        n = new Date;
        i.selectedDay = n.getDate();
        i.drawMonth = i.selectedMonth = n.getMonth();
        i.drawYear = i.selectedYear = n.getFullYear()
      }
      this._notifyChange(i);
      this._adjustDate(r)
    },
    _selectMonthYear: function(t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10);
      this._notifyChange(s);
      this._adjustDate(i)
    },
    _selectDay: function(t, n, r, i) {
      var s, o = e(t);
      if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) {
        return
      }
      s = this._getInst(o[0]);
      s.selectedDay = s.currentDay = e("a", i).html();
      s.selectedMonth = s.currentMonth = n;
      s.selectedYear = s.currentYear = r;
      this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
    },
    _clearDate: function(t) {
      var n = e(t);
      this._selectDate(n, "")
    },
    _selectDate: function(t, n) {
      var r, i = e(t),
        s = this._getInst(i[0]);
      n = n != null ? n : this._formatDate(s);
      if (s.input) {
        s.input.val(n)
      }
      this._updateAlternate(s);
      r = this._get(s, "onSelect");
      if (r) {
        r.apply(s.input ? s.input[0] : null, [n, s])
      } else {
        if (s.input) {
          s.input.trigger("change")
        }
      }
      if (s.inline) {
        this._updateDatepicker(s)
      } else {
        this._hideDatepicker();
        this._lastInput = s.input[0];
        if (typeof s.input[0] !== "object") {
          s.input.focus()
        }
        this._lastInput = null
      }
    },
    _updateAlternate: function(t) {
      var n, r, i, s = this._get(t, "altField");
      if (s) {
        n = this._get(t, "altFormat") || this._get(t, "dateFormat");
        r = this._getDate(t);
        i = this.formatDate(n, r, this._getFormatConfig(t));
        e(s).each(function() {
          e(this).val(i)
        })
      }
    },
    noWeekends: function(e) {
      var t = e.getDay();
      return [t > 0 && t < 6, ""]
    },
    iso8601Week: function(e) {
      var t, n = new Date(e.getTime());
      n.setDate(n.getDate() + 4 - (n.getDay() || 7));
      t = n.getTime();
      n.setMonth(0);
      n.setDate(1);
      return Math.floor(Math.round((t - n) / 86400000) / 7) + 1
    },
    parseDate: function(t, n, r) {
      if (t == null || n == null) {
        throw "Invalid arguments"
      }
      n = typeof n === "object" ? n.toString() : n + "";
      if (n === "") {
        return null
      }
      var i, s, o, u = 0,
        a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        f = typeof a !== "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
        l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
        c = (r ? r.dayNames : null) || this._defaults.dayNames,
        h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
        p = (r ? r.monthNames : null) || this._defaults.monthNames,
        d = -1,
        v = -1,
        m = -1,
        g = -1,
        y = false,
        b, w = function(e) {
          var n = i + 1 < t.length && t.charAt(i + 1) === e;
          if (n) {
            i++
          }
          return n
        },
        E = function(e) {
          var t = w(e),
            r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
            i = new RegExp("^\\d{1," + r + "}"),
            s = n.substring(u).match(i);
          if (!s) {
            throw "Missing number at position " + u
          }
          u += s[0].length;
          return parseInt(s[0], 10)
        },
        S = function(t, r, i) {
          var s = -1,
            o = e.map(w(t) ? i : r, function(e, t) {
              return [
                [t, e]
              ]
            }).sort(function(e, t) {
              return -(e[1].length - t[1].length)
            });
          e.each(o, function(e, t) {
            var r = t[1];
            if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) {
              s = t[0];
              u += r.length;
              return false
            }
          });
          if (s !== -1) {
            return s + 1
          } else {
            throw "Unknown name at position " + u
          }
        },
        x = function() {
          if (n.charAt(u) !== t.charAt(i)) {
            throw "Unexpected literal at position " + u
          }
          u++
        };
      for (i = 0; i < t.length; i++) {
        if (y) {
          if (t.charAt(i) === "'" && !w("'")) {
            y = false
          } else {
            x()
          }
        } else {
          switch (t.charAt(i)) {
            case "d":
              m = E("d");
              break;
            case "D":
              S("D", l, c);
              break;
            case "o":
              g = E("o");
              break;
            case "m":
              v = E("m");
              break;
            case "M":
              v = S("M", h, p);
              break;
            case "y":
              d = E("y");
              break;
            case "@":
              b = new Date(E("@"));
              d = b.getFullYear();
              v = b.getMonth() + 1;
              m = b.getDate();
              break;
            case "!":
              b = new Date((E("!") - this._ticksTo1970) / 10000);
              d = b.getFullYear();
              v = b.getMonth() + 1;
              m = b.getDate();
              break;
            case "'":
              if (w("'")) {
                x()
              } else {
                y = true
              }
              break;
            default:
              x()
          }
        }
      }
      if (u < n.length) {
        o = n.substr(u);
        if (!/^\s+/.test(o)) {
          throw "Extra/unparsed characters found in date: " + o
        }
      }
      if (d === -1) {
        d = (new Date).getFullYear()
      } else {
        if (d < 100) {
          d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100)
        }
      }
      if (g > -1) {
        v = 1;
        m = g;
        do {
          s = this._getDaysInMonth(d, v - 1);
          if (m <= s) {
            break
          }
          v++;
          m -= s
        } while (true)
      }
      b = this._daylightSavingAdjust(new Date(d, v - 1, m));
      if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) {
        throw "Invalid date"
      }
      return b
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000,
    formatDate: function(e, t, n) {
      if (!t) {
        return ""
      }
      var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        s = (n ? n.dayNames : null) || this._defaults.dayNames,
        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        u = (n ? n.monthNames : null) || this._defaults.monthNames,
        a = function(t) {
          var n = r + 1 < e.length && e.charAt(r + 1) === t;
          if (n) {
            r++
          }
          return n
        },
        f = function(e, t, n) {
          var r = "" + t;
          if (a(e)) {
            while (r.length < n) {
              r = "0" + r
            }
          }
          return r
        },
        l = function(e, t, n, r) {
          return a(e) ? r[t] : n[t]
        },
        c = "",
        h = false;
      if (t) {
        for (r = 0; r < e.length; r++) {
          if (h) {
            if (e.charAt(r) === "'" && !a("'")) {
              h = false
            } else {
              c += e.charAt(r)
            }
          } else {
            switch (e.charAt(r)) {
              case "d":
                c += f("d", t.getDate(), 2);
                break;
              case "D":
                c += l("D", t.getDay(), i, s);
                break;
              case "o":
                c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 86400000), 3);
                break;
              case "m":
                c += f("m", t.getMonth() + 1, 2);
                break;
              case "M":
                c += l("M", t.getMonth(), o, u);
                break;
              case "y":
                c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                break;
              case "@":
                c += t.getTime();
                break;
              case "!":
                c += t.getTime() * 10000 + this._ticksTo1970;
                break;
              case "'":
                if (a("'")) {
                  c += "'"
                } else {
                  h = true
                }
                break;
              default:
                c += e.charAt(r)
            }
          }
        }
      }
      return c
    },
    _possibleChars: function(e) {
      var t, n = "",
        r = false,
        i = function(n) {
          var r = t + 1 < e.length && e.charAt(t + 1) === n;
          if (r) {
            t++
          }
          return r
        };
      for (t = 0; t < e.length; t++) {
        if (r) {
          if (e.charAt(t) === "'" && !i("'")) {
            r = false
          } else {
            n += e.charAt(t)
          }
        } else {
          switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
              n += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              if (i("'")) {
                n += "'"
              } else {
                r = true
              }
              break;
            default:
              n += e.charAt(t)
          }
        }
      }
      return n
    },
    _get: function(e, n) {
      return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
    },
    _setDateFromField: function(e, t) {
      if (e.input.val() === e.lastVal) {
        return
      }
      var n = this._get(e, "dateFormat"),
        r = e.lastVal = e.input ? e.input.val() : null,
        i = this._getDefaultDate(e),
        s = i,
        o = this._getFormatConfig(e);
      try {
        s = this.parseDate(n, r, o) || i
      } catch (u) {
        r = t ? "" : r
      }
      e.selectedDay = s.getDate();
      e.drawMonth = e.selectedMonth = s.getMonth();
      e.drawYear = e.selectedYear = s.getFullYear();
      e.currentDay = r ? s.getDate() : 0;
      e.currentMonth = r ? s.getMonth() : 0;
      e.currentYear = r ? s.getFullYear() : 0;
      this._adjustInstDate(e)
    },
    _getDefaultDate: function(e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    },
    _determineDate: function(t, n, r) {
      var i = function(e) {
          var t = new Date;
          t.setDate(t.getDate() + e);
          return t
        },
        s = function(n) {
          try {
            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
          } catch (r) {}
          var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date,
            s = i.getFullYear(),
            o = i.getMonth(),
            u = i.getDate(),
            a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            f = a.exec(n);
          while (f) {
            switch (f[2] || "d") {
              case "d":
              case "D":
                u += parseInt(f[1], 10);
                break;
              case "w":
              case "W":
                u += parseInt(f[1], 10) * 7;
                break;
              case "m":
              case "M":
                o += parseInt(f[1], 10);
                u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                break;
              case "y":
              case "Y":
                s += parseInt(f[1], 10);
                u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                break
            }
            f = a.exec(n)
          }
          return new Date(s, o, u)
        },
        o = n == null || n === "" ? r : typeof n === "string" ? s(n) : typeof n === "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
      o = o && o.toString() === "Invalid Date" ? r : o;
      if (o) {
        o.setHours(0);
        o.setMinutes(0);
        o.setSeconds(0);
        o.setMilliseconds(0)
      }
      return this._daylightSavingAdjust(o)
    },
    _daylightSavingAdjust: function(e) {
      if (!e) {
        return null
      }
      e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0);
      return e
    },
    _setDate: function(e, t, n) {
      var r = !t,
        i = e.selectedMonth,
        s = e.selectedYear,
        o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
      e.selectedDay = e.currentDay = o.getDate();
      e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth();
      e.drawYear = e.selectedYear = e.currentYear = o.getFullYear();
      if ((i !== e.selectedMonth || s !== e.selectedYear) && !n) {
        this._notifyChange(e)
      }
      this._adjustInstDate(e);
      if (e.input) {
        e.input.val(r ? "" : this._formatDate(e))
      }
    },
    _getDate: function(e) {
      var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return t
    },
    _attachHandlers: function(t) {
      var n = this._get(t, "stepMonths"),
        r = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function() {
        var t = {
          prev: function() {
            e.datepicker._adjustDate(r, -n, "M")
          },
          next: function() {
            e.datepicker._adjustDate(r, +n, "M")
          },
          hide: function() {
            e.datepicker._hideDatepicker()
          },
          today: function() {
            e.datepicker._gotoToday(r)
          },
          selectDay: function() {
            e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
            return false
          },
          selectMonth: function() {
            e.datepicker._selectMonthYear(r, this, "M");
            return false
          },
          selectYear: function() {
            e.datepicker._selectMonthYear(r, this, "Y");
            return false
          }
        };
        e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(e) {
      var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
        R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
        U = this._get(e, "isRTL"),
        z = this._get(e, "showButtonPanel"),
        W = this._get(e, "hideIfNoPrevNext"),
        X = this._get(e, "navigationAsDateFormat"),
        V = this._getNumberOfMonths(e),
        $ = this._get(e, "showCurrentAtPos"),
        J = this._get(e, "stepMonths"),
        K = V[0] !== 1 || V[1] !== 1,
        Q = this._daylightSavingAdjust(!e.currentDay ? new Date(9999, 9, 9) : new Date(e.currentYear, e.currentMonth, e.currentDay)),
        G = this._getMinMaxDate(e, "min"),
        Y = this._getMinMaxDate(e, "max"),
        Z = e.drawMonth - $,
        et = e.drawYear;
      if (Z < 0) {
        Z += 12;
        et--
      }
      if (Y) {
        t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate()));
        t = G && t < G ? G : t;
        while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) {
          Z--;
          if (Z < 0) {
            Z = 11;
            et--
          }
        }
      }
      e.drawMonth = Z;
      e.drawYear = et;
      n = this._get(e, "prevText");
      n = !X ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e));
      r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ff-ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ff-ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>";
      i = this._get(e, "nextText");
      i = !X ? i : this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e));
      s = this._canAdjustMonth(e, +1, et, Z) ? "<a class='ff-ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ff-ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>";
      o = this._get(e, "currentText");
      u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R;
      o = !X ? o : this.formatDate(o, u, this._getFormatConfig(e));
      a = !e.inline ? "<button type='button' class='ff-ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>" : "";
      f = z ? "<div class='ff-ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ff-ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "";
      l = parseInt(this._get(e, "firstDay"), 10);
      l = isNaN(l) ? 0 : l;
      c = this._get(e, "showWeek");
      h = this._get(e, "dayNames");
      p = this._get(e, "dayNamesMin");
      d = this._get(e, "monthNames");
      v = this._get(e, "monthNamesShort");
      m = this._get(e, "beforeShowDay");
      g = this._get(e, "showOtherMonths");
      y = this._get(e, "selectOtherMonths");
      b = this._getDefaultDate(e);
      w = "";
      E;
      for (S = 0; S < V[0]; S++) {
        x = "";
        this.maxRows = 4;
        for (T = 0; T < V[1]; T++) {
          N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay));
          C = " ui-corner-all";
          k = "";
          if (K) {
            k += "<div class='ff-ui-datepicker-group";
            if (V[1] > 1) {
              switch (T) {
                case 0:
                  k += " ff-ui-datepicker-group-first";
                  C = " ui-corner-" + (U ? "right" : "left");
                  break;
                case V[1] - 1:
                  k += " ff-ui-datepicker-group-last";
                  C = " ui-corner-" + (U ? "left" : "right");
                  break;
                default:
                  k += " ff-ui-datepicker-group-middle";
                  C = "";
                  break
              }
            }
            k += "'>"
          }
          k += "<div class='ff-ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ff-ui-datepicker-calendar'><thead><tr>";
          L = c ? "<th class='ff-ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
          for (E = 0; E < 7; E++) {
            A = (E + l) % 7;
            L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ff-ui-datepicker-week-end'" : "") + "><span title='" + h[A] + "'>" + p[A] + "</span></th>"
          }
          k += L + "</tr></thead><tbody>";
          O = this._getDaysInMonth(et, Z);
          if (et === e.selectedYear && Z === e.selectedMonth) {
            e.selectedDay = Math.min(e.selectedDay, O)
          }
          M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7;
          _ = Math.ceil((M + O) / 7);
          D = K ? this.maxRows > _ ? this.maxRows : _ : _;
          this.maxRows = D;
          P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
          for (H = 0; H < D; H++) {
            k += "<tr>";
            B = !c ? "" : "<td class='ff-ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>";
            for (E = 0; E < 7; E++) {
              j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [true, ""];
              F = P.getMonth() !== Z;
              I = F && !y || !j[0] || G && P < G || Y && P > Y;
              B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ff-ui-datepicker-week-end" : "") + (F ? " ff-ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ff-ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>";
              P.setDate(P.getDate() + 1);
              P = this._daylightSavingAdjust(P)
            }
            k += B + "</tr>"
          }
          Z++;
          if (Z > 11) {
            Z = 0;
            et++
          }
          k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ff-ui-datepicker-row-break'></div>" : "") : "");
          x += k
        }
        w += x
      }
      w += f;
      e._keyEvent = false;
      return w
    },
    _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
      var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
        g = this._get(e, "changeYear"),
        y = this._get(e, "showMonthAfterYear"),
        b = "<div class='ff-ui-datepicker-title'>",
        w = "";
      if (s || !m) {
        w += "<span class='ff-ui-datepicker-month'>" + o[t] + "</span>"
      } else {
        a = r && r.getFullYear() === n;
        f = i && i.getFullYear() === n;
        w += "<select class='ff-ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
        for (l = 0; l < 12; l++) {
          if ((!a || l >= r.getMonth()) && (!f || l <= i.getMonth())) {
            w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>"
          }
        }
        w += "</select>"
      }
      if (!y) {
        b += w + (s || !(m && g) ? "&#xa0;" : "")
      }
      if (!e.yearshtml) {
        e.yearshtml = "";
        if (s || !g) {
          b += "<span class='ff-ui-datepicker-year'>" + n + "</span>"
        } else {
          c = this._get(e, "yearRange").split(":");
          h = (new Date).getFullYear();
          p = function(e) {
            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
            return isNaN(t) ? h : t
          };
          d = p(c[0]);
          v = Math.max(d, p(c[1] || ""));
          d = r ? Math.max(d, r.getFullYear()) : d;
          v = i ? Math.min(v, i.getFullYear()) : v;
          e.yearshtml += "<select class='ff-ui-datepicker-year' data-handler='selectYear' data-event='change'>";
          for (; d <= v; d++) {
            e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>"
          }
          e.yearshtml += "</select>";
          b += e.yearshtml;
          e.yearshtml = null
        }
      }
      b += this._get(e, "yearSuffix");
      if (y) {
        b += (s || !(m && g) ? "&#xa0;" : "") + w
      }
      b += "</div>";
      return b
    },
    _adjustInstDate: function(e, t, n) {
      var r = e.drawYear + (n === "Y" ? t : 0),
        i = e.drawMonth + (n === "M" ? t : 0),
        s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
        o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
      e.selectedDay = o.getDate();
      e.drawMonth = e.selectedMonth = o.getMonth();
      e.drawYear = e.selectedYear = o.getFullYear();
      if (n === "M" || n === "Y") {
        this._notifyChange(e)
      }
    },
    _restrictMinMax: function(e, t) {
      var n = this._getMinMaxDate(e, "min"),
        r = this._getMinMaxDate(e, "max"),
        i = n && t < n ? n : t;
      return r && i > r ? r : i
    },
    _notifyChange: function(e) {
      var t = this._get(e, "onChangeMonthYear");
      if (t) {
        t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
      }
    },
    _getNumberOfMonths: function(e) {
      var t = this._get(e, "numberOfMonths");
      return t == null ? [1, 1] : typeof t === "number" ? [1, t] : t
    },
    _getMinMaxDate: function(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null)
    },
    _getDaysInMonth: function(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    },
    _getFirstDayOfMonth: function(e, t) {
      return (new Date(e, t, 1)).getDay()
    },
    _canAdjustMonth: function(e, t, n, r) {
      var i = this._getNumberOfMonths(e),
        s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
      if (t < 0) {
        s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth()))
      }
      return this._isInRange(e, s)
    },
    _isInRange: function(e, t) {
      var n, r, i = this._getMinMaxDate(e, "min"),
        s = this._getMinMaxDate(e, "max"),
        o = null,
        u = null,
        a = this._get(e, "yearRange");
      if (a) {
        n = a.split(":");
        r = (new Date).getFullYear();
        o = parseInt(n[0], 10);
        u = parseInt(n[1], 10);
        if (n[0].match(/[+\-].*/)) {
          o += r
        }
        if (n[1].match(/[+\-].*/)) {
          u += r
        }
      }
      return (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
    },
    _getFormatConfig: function(e) {
      var t = this._get(e, "shortYearCutoff");
      t = typeof t !== "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10);
      return {
        shortYearCutoff: t,
        dayNamesShort: this._get(e, "dayNamesShort"),
        dayNames: this._get(e, "dayNames"),
        monthNamesShort: this._get(e, "monthNamesShort"),
        monthNames: this._get(e, "monthNames")
      }
    },
    _formatDate: function(e, t, n, r) {
      if (!t) {
        e.currentDay = e.selectedDay;
        e.currentMonth = e.selectedMonth;
        e.currentYear = e.selectedYear
      }
      var i = t ? typeof t === "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
    }
  });
  e.fn.datepicker = function(t) {
    if (!this.length) {
      return this
    }
    if (!e.datepicker.initialized) {
      e(document).mousedown(e.datepicker._checkExternalClick);
      e.datepicker.initialized = true
    }
    if (e("#" + e.datepicker._mainDivId).length === 0) {
      e("body").append(e.datepicker.dpDiv)
    }
    var n = Array.prototype.slice.call(arguments, 1);
    if (typeof t === "string" && (t === "isDisabled" || t === "getDate" || t === "widget")) {
      return e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }
    if (t === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
      return e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }
    return this.each(function() {
      typeof t === "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
    })
  };
  e.datepicker = new i;
  e.datepicker.initialized = false;
  e.datepicker.uuid = (new Date).getTime();
  e.datepicker.version = "1.10.4"
})(jQuery);
(function(e, t) {
  var n = {
      buttons: true,
      height: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      width: true
    },
    r = {
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true
    };
  e.widget("ui.dialog", {
    version: "1.10.4",
    options: {
      appendTo: "body",
      autoOpen: true,
      buttons: [],
      closeOnEscape: true,
      closeText: "close",
      dialogClass: "",
      draggable: true,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: false,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function(t) {
          var n = e(this).css(t).offset().top;
          if (n < 0) {
            e(this).css("top", t.top - n)
          }
        }
      },
      resizable: true,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    _create: function() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      };
      this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      };
      this.originalTitle = this.element.attr("title");
      this.options.title = this.options.title || this.originalTitle;
      this._createWrapper();
      this.element.show().removeAttr("title").addClass("ff-ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
      this._createTitlebar();
      this._createButtonPane();
      if (this.options.draggable && e.fn.draggable) {
        this._makeDraggable()
      }
      if (this.options.resizable && e.fn.resizable) {
        this._makeResizable()
      }
      this._isOpen = false
    },
    _init: function() {
      if (this.options.autoOpen) {
        this.open()
      }
    },
    _appendTo: function() {
      var t = this.options.appendTo;
      if (t && (t.jquery || t.nodeType)) {
        return e(t)
      }
      return this.document.find(t || "body").eq(0)
    },
    _destroy: function() {
      var e, t = this.originalPosition;
      this._destroyOverlay();
      this.element.removeUniqueId().removeClass("ff-ui-dialog-content ui-widget-content").css(this.originalCss).detach();
      this.uiDialog.stop(true, true).remove();
      if (this.originalTitle) {
        this.element.attr("title", this.originalTitle)
      }
      e = t.parent.children().eq(t.index);
      if (e.length && e[0] !== this.element[0]) {
        e.before(this.element)
      } else {
        t.parent.append(this.element)
      }
    },
    widget: function() {
      return this.uiDialog
    },
    disable: e.noop,
    enable: e.noop,
    close: function(t) {
      var n, r = this;
      if (!this._isOpen || this._trigger("beforeClose", t) === false) {
        return
      }
      this._isOpen = false;
      this._destroyOverlay();
      if (!this.opener.filter(":focusable").focus().length) {
        try {
          n = this.document[0].activeElement;
          if (n && n.nodeName.toLowerCase() !== "body") {
            e(n).blur()
          }
        } catch (i) {}
      }
      this._hide(this.uiDialog, this.options.hide, function() {
        r._trigger("close", t)
      })
    },
    isOpen: function() {
      return this._isOpen
    },
    moveToTop: function() {
      this._moveToTop()
    },
    _moveToTop: function(e, t) {
      var n = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
      if (n && !t) {
        this._trigger("focus", e)
      }
      return n
    },
    open: function() {
      var t = this;
      if (this._isOpen) {
        if (this._moveToTop()) {
          this._focusTabbable()
        }
        return
      }
      this._isOpen = true;
      this.opener = e(this.document[0].activeElement);
      this._size();
      this._position();
      this._createOverlay();
      this._moveToTop(null, true);
      this._show(this.uiDialog, this.options.show, function() {
        t._focusTabbable();
        t._trigger("focus")
      });
      this._trigger("open")
    },
    _focusTabbable: function() {
      var e = this.element.find("[autofocus]");
      if (!e.length) {
        e = this.element.find(":tabbable")
      }
      if (!e.length) {
        e = this.uiDialogButtonPane.find(":tabbable")
      }
      if (!e.length) {
        e = this.uiDialogTitlebarClose.filter(":tabbable")
      }
      if (!e.length) {
        e = this.uiDialog
      }
      e.eq(0).focus()
    },
    _keepFocus: function(t) {
      function n() {
        var t = this.document[0].activeElement,
          n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
        if (!n) {
          this._focusTabbable()
        }
      }
      t.preventDefault();
      n.call(this);
      this._delay(n)
    },
    _createWrapper: function() {
      this.uiDialog = e("<div>").addClass("ff-ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo());
      this._on(this.uiDialog, {
        keydown: function(t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
            t.preventDefault();
            this.close(t);
            return
          }
          if (t.keyCode !== e.ui.keyCode.TAB) {
            return
          }
          var n = this.uiDialog.find(":tabbable"),
            r = n.filter(":first"),
            i = n.filter(":last");
          if ((t.target === i[0] || t.target === this.uiDialog[0]) && !t.shiftKey) {
            r.focus(1);
            t.preventDefault()
          } else {
            if ((t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey) {
              i.focus(1);
              t.preventDefault()
            }
          }
        },
        mousedown: function(e) {
          if (this._moveToTop(e)) {
            this._focusTabbable()
          }
        }
      });
      if (!this.element.find("[aria-describedby]").length) {
        this.uiDialog.attr({
          "aria-describedby": this.element.uniqueId().attr("id")
        })
      }
    },
    _createTitlebar: function() {
      var t;
      this.uiDialogTitlebar = e("<div>").addClass("ff-ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
      this._on(this.uiDialogTitlebar, {
        mousedown: function(t) {
          if (!e(t.target).closest(".ff-ui-dialog-titlebar-close")) {
            this.uiDialog.focus()
          }
        }
      });
      this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
        label: this.options.closeText,
        icons: {
          primary: "ui-icon-closethick"
        },
        text: false
      }).addClass("ff-ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
      this._on(this.uiDialogTitlebarClose, {
        click: function(e) {
          e.preventDefault();
          this.close(e)
        }
      });
      t = e("<span>").uniqueId().addClass("ff-ui-dialog-title").prependTo(this.uiDialogTitlebar);
      this._title(t);
      this.uiDialog.attr({
        "aria-labelledby": t.attr("id")
      })
    },
    _title: function(e) {
      if (!this.options.title) {
        e.html("&#160;")
      }
      e.text(this.options.title)
    },
    _createButtonPane: function() {
      this.uiDialogButtonPane = e("<div>").addClass("ff-ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
      this.uiButtonSet = e("<div>").addClass("ff-ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
      this._createButtons()
    },
    _createButtons: function() {
      var t = this,
        n = this.options.buttons;
      this.uiDialogButtonPane.remove();
      this.uiButtonSet.empty();
      if (e.isEmptyObject(n) || e.isArray(n) && !n.length) {
        this.uiDialog.removeClass("ff-ui-dialog-buttons");
        return
      }
      e.each(n, function(n, r) {
        var i, s;
        r = e.isFunction(r) ? {
          click: r,
          text: n
        } : r;
        r = e.extend({
          type: "button"
        }, r);
        i = r.click;
        r.click = function() {
          i.apply(t.element[0], arguments)
        };
        s = {
          icons: r.icons,
          text: r.showText
        };
        delete r.icons;
        delete r.showText;
        e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
      });
      this.uiDialog.addClass("ff-ui-dialog-buttons");
      this.uiDialogButtonPane.appendTo(this.uiDialog)
    },
    _makeDraggable: function() {
      function r(e) {
        return {
          position: e.position,
          offset: e.offset
        }
      }
      var t = this,
        n = this.options;
      this.uiDialog.draggable({
        cancel: ".ff-ui-dialog-content, .ff-ui-dialog-titlebar-close",
        handle: ".ff-ui-dialog-titlebar",
        containment: "document",
        start: function(n, i) {
          e(this).addClass("ff-ui-dialog-dragging");
          t._blockFrames();
          t._trigger("dragStart", n, r(i))
        },
        drag: function(e, n) {
          t._trigger("drag", e, r(n))
        },
        stop: function(i, s) {
          n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()];
          e(this).removeClass("ff-ui-dialog-dragging");
          t._unblockFrames();
          t._trigger("dragStop", i, r(s))
        }
      })
    },
    _makeResizable: function() {
      function o(e) {
        return {
          originalPosition: e.originalPosition,
          originalSize: e.originalSize,
          position: e.position,
          size: e.size
        }
      }
      var t = this,
        n = this.options,
        r = n.resizable,
        i = this.uiDialog.css("position"),
        s = typeof r === "string" ? r : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ff-ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: n.maxWidth,
        maxHeight: n.maxHeight,
        minWidth: n.minWidth,
        minHeight: this._minHeight(),
        handles: s,
        start: function(n, r) {
          e(this).addClass("ff-ui-dialog-resizing");
          t._blockFrames();
          t._trigger("resizeStart", n, o(r))
        },
        resize: function(e, n) {
          t._trigger("resize", e, o(n))
        },
        stop: function(r, i) {
          n.height = e(this).height();
          n.width = e(this).width();
          e(this).removeClass("ff-ui-dialog-resizing");
          t._unblockFrames();
          t._trigger("resizeStop", r, o(i))
        }
      }).css("position", i)
    },
    _minHeight: function() {
      var e = this.options;
      return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
    },
    _position: function() {
      var e = this.uiDialog.is(":visible");
      if (!e) {
        this.uiDialog.show()
      }
      this.uiDialog.position(this.options.position);
      if (!e) {
        this.uiDialog.hide()
      }
    },
    _setOptions: function(t) {
      var i = this,
        s = false,
        o = {};
      e.each(t, function(e, t) {
        i._setOption(e, t);
        if (e in n) {
          s = true
        }
        if (e in r) {
          o[e] = t
        }
      });
      if (s) {
        this._size();
        this._position()
      }
      if (this.uiDialog.is(":data(ui-resizable)")) {
        this.uiDialog.resizable("option", o)
      }
    },
    _setOption: function(e, t) {
      var n, r, i = this.uiDialog;
      if (e === "dialogClass") {
        i.removeClass(this.options.dialogClass).addClass(t)
      }
      if (e === "disabled") {
        return
      }
      this._super(e, t);
      if (e === "appendTo") {
        this.uiDialog.appendTo(this._appendTo())
      }
      if (e === "buttons") {
        this._createButtons()
      }
      if (e === "closeText") {
        this.uiDialogTitlebarClose.button({
          label: "" + t
        })
      }
      if (e === "draggable") {
        n = i.is(":data(ui-draggable)");
        if (n && !t) {
          i.draggable("destroy")
        }
        if (!n && t) {
          this._makeDraggable()
        }
      }
      if (e === "position") {
        this._position()
      }
      if (e === "resizable") {
        r = i.is(":data(ui-resizable)");
        if (r && !t) {
          i.resizable("destroy")
        }
        if (r && typeof t === "string") {
          i.resizable("option", "handles", t)
        }
        if (!r && t !== false) {
          this._makeResizable()
        }
      }
      if (e === "title") {
        this._title(this.uiDialogTitlebar.find(".ff-ui-dialog-title"))
      }
    },
    _size: function() {
      var e, t, n, r = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      });
      if (r.minWidth > r.width) {
        r.width = r.minWidth
      }
      e = this.uiDialog.css({
        height: "auto",
        width: r.width
      }).outerHeight();
      t = Math.max(0, r.minHeight - e);
      n = typeof r.maxHeight === "number" ? Math.max(0, r.maxHeight - e) : "none";
      if (r.height === "auto") {
        this.element.css({
          minHeight: t,
          maxHeight: n,
          height: "auto"
        })
      } else {
        this.element.height(Math.max(0, r.height - e))
      }
      if (this.uiDialog.is(":data(ui-resizable)")) {
        this.uiDialog.resizable("option", "minHeight", this._minHeight())
      }
    },
    _blockFrames: function() {
      this.iframeBlocks = this.document.find("iframe").map(function() {
        var t = e(this);
        return e("<div>").css({
          position: "absolute",
          width: t.outerWidth(),
          height: t.outerHeight()
        }).appendTo(t.parent()).offset(t.offset())[0]
      })
    },
    _unblockFrames: function() {
      if (this.iframeBlocks) {
        this.iframeBlocks.remove();
        delete this.iframeBlocks
      }
    },
    _allowInteraction: function(t) {
      if (e(t.target).closest(".ff-ui-dialog").length) {
        return true
      }
      return !!e(t.target).closest(".ff-ui-datepicker").length
    },
    _createOverlay: function() {
      if (!this.options.modal) {
        return
      }
      var t = this,
        n = this.widgetFullName;
      if (!e.ui.dialog.overlayInstances) {
        this._delay(function() {
          if (e.ui.dialog.overlayInstances) {
            this.document.bind("focusin.dialog", function(r) {
              if (!t._allowInteraction(r)) {
                r.preventDefault();
                e(".ff-ui-dialog:visible:last .ff-ui-dialog-content").data(n)._focusTabbable()
              }
            })
          }
        })
      }
      this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
      this._on(this.overlay, {
        mousedown: "_keepFocus"
      });
      e.ui.dialog.overlayInstances++
    },
    _destroyOverlay: function() {
      if (!this.options.modal) {
        return
      }
      if (this.overlay) {
        e.ui.dialog.overlayInstances--;
        if (!e.ui.dialog.overlayInstances) {
          this.document.unbind("focusin.dialog")
        }
        this.overlay.remove();
        this.overlay = null
      }
    }
  });
  e.ui.dialog.overlayInstances = 0;
  if (e.uiBackCompat !== false) {
    e.widget("ui.dialog", e.ui.dialog, {
      _position: function() {
        var t = this.options.position,
          n = [],
          r = [0, 0],
          i;
        if (t) {
          if (typeof t === "string" || typeof t === "object" && "0" in t) {
            n = t.split ? t.split(" ") : [t[0], t[1]];
            if (n.length === 1) {
              n[1] = n[0]
            }
            e.each(["left", "top"], function(e, t) {
              if (+n[e] === n[e]) {
                r[e] = n[e];
                n[e] = t
              }
            });
            t = {
              my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
              at: n.join(" ")
            }
          }
          t = e.extend({}, e.ui.dialog.prototype.options.position, t)
        } else {
          t = e.ui.dialog.prototype.options.position
        }
        i = this.uiDialog.is(":visible");
        if (!i) {
          this.uiDialog.show()
        }
        this.uiDialog.position(t);
        if (!i) {
          this.uiDialog.hide()
        }
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.widget("ui.draggable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: true,
      appendTo: "parent",
      axis: false,
      connectToSortable: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      grid: false,
      handle: false,
      helper: "original",
      iframeFix: false,
      opacity: false,
      refreshPositions: false,
      revert: false,
      revertDuration: 500,
      scope: "default",
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: false,
      snapMode: "both",
      snapTolerance: 20,
      stack: false,
      zIndex: false,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      if (this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position"))) {
        this.element[0].style.position = "relative"
      }
      if (this.options.addClasses) {
        this.element.addClass("ui-draggable")
      }
      if (this.options.disabled) {
        this.element.addClass("ui-draggable-disabled")
      }
      this._mouseInit()
    },
    _destroy: function() {
      this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
      this._mouseDestroy()
    },
    _mouseCapture: function(t) {
      var n = this.options;
      if (this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) {
        return false
      }
      this.handle = this._getHandle(t);
      if (!this.handle) {
        return false
      }
      e(n.iframeFix === true ? "iframe" : n.iframeFix).each(function() {
        e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
          width: this.offsetWidth + "px",
          height: this.offsetHeight + "px",
          position: "absolute",
          opacity: "0.001",
          zIndex: 1000
        }).css(e(this).offset()).appendTo("body")
      });
      return true
    },
    _mouseStart: function(t) {
      var n = this.options;
      this.helper = this._createHelper(t);
      this.helper.addClass("ui-draggable-dragging");
      this._cacheHelperProportions();
      if (e.ui.ddmanager) {
        e.ui.ddmanager.current = this
      }
      this._cacheMargins();
      this.cssPosition = this.helper.css("position");
      this.scrollParent = this.helper.scrollParent();
      this.offsetParent = this.helper.offsetParent();
      this.offsetParentCssPosition = this.offsetParent.css("position");
      this.offset = this.positionAbs = this.element.offset();
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      };
      this.offset.scroll = false;
      e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      });
      this.originalPosition = this.position = this._generatePosition(t);
      this.originalPageX = t.pageX;
      this.originalPageY = t.pageY;
      n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt);
      this._setContainment();
      if (this._trigger("start", t) === false) {
        this._clear();
        return false
      }
      this._cacheHelperProportions();
      if (e.ui.ddmanager && !n.dropBehaviour) {
        e.ui.ddmanager.prepareOffsets(this, t)
      }
      this._mouseDrag(t, true);
      if (e.ui.ddmanager) {
        e.ui.ddmanager.dragStart(this, t)
      }
      return true
    },
    _mouseDrag: function(t, n) {
      if (this.offsetParentCssPosition === "fixed") {
        this.offset.parent = this._getParentOffset()
      }
      this.position = this._generatePosition(t);
      this.positionAbs = this._convertPositionTo("absolute");
      if (!n) {
        var r = this._uiHash();
        if (this._trigger("drag", t, r) === false) {
          this._mouseUp({});
          return false
        }
        this.position = r.position
      }
      if (!this.options.axis || this.options.axis !== "y") {
        this.helper[0].style.left = this.position.left + "px"
      }
      if (!this.options.axis || this.options.axis !== "x") {
        this.helper[0].style.top = this.position.top + "px"
      }
      if (e.ui.ddmanager) {
        e.ui.ddmanager.drag(this, t)
      }
      return false
    },
    _mouseStop: function(t) {
      var n = this,
        r = false;
      if (e.ui.ddmanager && !this.options.dropBehaviour) {
        r = e.ui.ddmanager.drop(this, t)
      }
      if (this.dropped) {
        r = this.dropped;
        this.dropped = false
      }
      if (this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0])) {
        return false
      }
      if (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === true || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r)) {
        e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
          if (n._trigger("stop", t) !== false) {
            n._clear()
          }
        })
      } else {
        if (this._trigger("stop", t) !== false) {
          this._clear()
        }
      }
      return false
    },
    _mouseUp: function(t) {
      e("div.ui-draggable-iframeFix").each(function() {
        this.parentNode.removeChild(this)
      });
      if (e.ui.ddmanager) {
        e.ui.ddmanager.dragStop(this, t)
      }
      return e.ui.mouse.prototype._mouseUp.call(this, t)
    },
    cancel: function() {
      if (this.helper.is(".ui-draggable-dragging")) {
        this._mouseUp({})
      } else {
        this._clear()
      }
      return this
    },
    _getHandle: function(t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : true
    },
    _createHelper: function(t) {
      var n = this.options,
        r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
      if (!r.parents("body").length) {
        r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo)
      }
      if (r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position"))) {
        r.css("position", "absolute")
      }
      return r
    },
    _adjustOffsetFromHelper: function(t) {
      if (typeof t === "string") {
        t = t.split(" ")
      }
      if (e.isArray(t)) {
        t = {
          left: +t[0],
          top: +t[1] || 0
        }
      }
      if ("left" in t) {
        this.offset.click.left = t.left + this.margins.left
      }
      if ("right" in t) {
        this.offset.click.left = this.helperProportions.width - t.right + this.margins.left
      }
      if ("top" in t) {
        this.offset.click.top = t.top + this.margins.top
      }
      if ("bottom" in t) {
        this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top
      }
    },
    _getParentOffset: function() {
      var t = this.offsetParent.offset();
      if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) {
        t.left += this.scrollParent.scrollLeft();
        t.top += this.scrollParent.scrollTop()
      }
      if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) {
        t = {
          top: 0,
          left: 0
        }
      }
      return {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if (this.cssPosition === "relative") {
        var e = this.element.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      } else {
        return {
          top: 0,
          left: 0
        }
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var t, n, r, i = this.options;
      if (!i.containment) {
        this.containment = null;
        return
      }
      if (i.containment === "window") {
        this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
        return
      }
      if (i.containment === "document") {
        this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
        return
      }
      if (i.containment.constructor === Array) {
        this.containment = i.containment;
        return
      }
      if (i.containment === "parent") {
        i.containment = this.helper[0].parentNode
      }
      n = e(i.containment);
      r = n[0];
      if (!r) {
        return
      }
      t = n.css("overflow") !== "hidden";
      this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
      this.relative_container = n
    },
    _convertPositionTo: function(t, n) {
      if (!n) {
        n = this.position
      }
      var r = t === "absolute" ? 1 : -1,
        i = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
      if (!this.offset.scroll) {
        this.offset.scroll = {
          top: i.scrollTop(),
          left: i.scrollLeft()
        }
      }
      return {
        top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
        left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
      }
    },
    _generatePosition: function(t) {
      var n, r, i, s, o = this.options,
        u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        a = t.pageX,
        f = t.pageY;
      if (!this.offset.scroll) {
        this.offset.scroll = {
          top: u.scrollTop(),
          left: u.scrollLeft()
        }
      }
      if (this.originalPosition) {
        if (this.containment) {
          if (this.relative_container) {
            r = this.relative_container.offset();
            n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]
          } else {
            n = this.containment
          }
          if (t.pageX - this.offset.click.left < n[0]) {
            a = n[0] + this.offset.click.left
          }
          if (t.pageY - this.offset.click.top < n[1]) {
            f = n[1] + this.offset.click.top
          }
          if (t.pageX - this.offset.click.left > n[2]) {
            a = n[2] + this.offset.click.left
          }
          if (t.pageY - this.offset.click.top > n[3]) {
            f = n[3] + this.offset.click.top
          }
        }
        if (o.grid) {
          i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
          f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i;
          s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
          a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s
        }
      }
      return {
        top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
      }
    },
    _clear: function() {
      this.helper.removeClass("ui-draggable-dragging");
      if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
        this.helper.remove()
      }
      this.helper = null;
      this.cancelHelperRemoval = false
    },
    _trigger: function(t, n, r) {
      r = r || this._uiHash();
      e.ui.plugin.call(this, t, [n, r]);
      if (t === "drag") {
        this.positionAbs = this._convertPositionTo("absolute")
      }
      return e.Widget.prototype._trigger.call(this, t, n, r)
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  });
  e.ui.plugin.add("draggable", "connectToSortable", {
    start: function(t, n) {
      var r = e(this).data("ui-draggable"),
        i = r.options,
        s = e.extend({}, n, {
          item: r.element
        });
      r.sortables = [];
      e(i.connectToSortable).each(function() {
        var n = e.data(this, "ui-sortable");
        if (n && !n.options.disabled) {
          r.sortables.push({
            instance: n,
            shouldRevert: n.options.revert
          });
          n.refreshPositions();
          n._trigger("activate", t, s)
        }
      })
    },
    stop: function(t, n) {
      var r = e(this).data("ui-draggable"),
        i = e.extend({}, n, {
          item: r.element
        });
      e.each(r.sortables, function() {
        if (this.instance.isOver) {
          this.instance.isOver = 0;
          r.cancelHelperRemoval = true;
          this.instance.cancelHelperRemoval = false;
          if (this.shouldRevert) {
            this.instance.options.revert = this.shouldRevert
          }
          this.instance._mouseStop(t);
          this.instance.options.helper = this.instance.options._helper;
          if (r.options.helper === "original") {
            this.instance.currentItem.css({
              top: "auto",
              left: "auto"
            })
          }
        } else {
          this.instance.cancelHelperRemoval = false;
          this.instance._trigger("deactivate", t, i)
        }
      })
    },
    drag: function(t, n) {
      var r = e(this).data("ui-draggable"),
        i = this;
      e.each(r.sortables, function() {
        var s = false,
          o = this;
        this.instance.positionAbs = r.positionAbs;
        this.instance.helperProportions = r.helperProportions;
        this.instance.offset.click = r.offset.click;
        if (this.instance._intersectsWith(this.instance.containerCache)) {
          s = true;
          e.each(r.sortables, function() {
            this.instance.positionAbs = r.positionAbs;
            this.instance.helperProportions = r.helperProportions;
            this.instance.offset.click = r.offset.click;
            if (this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0])) {
              s = false
            }
            return s
          })
        }
        if (s) {
          if (!this.instance.isOver) {
            this.instance.isOver = 1;
            this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
            this.instance.options._helper = this.instance.options.helper;
            this.instance.options.helper = function() {
              return n.helper[0]
            };
            t.target = this.instance.currentItem[0];
            this.instance._mouseCapture(t, true);
            this.instance._mouseStart(t, true, true);
            this.instance.offset.click.top = r.offset.click.top;
            this.instance.offset.click.left = r.offset.click.left;
            this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left;
            this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top;
            r._trigger("toSortable", t);
            r.dropped = this.instance.element;
            r.currentItem = r.element;
            this.instance.fromOutside = r
          }
          if (this.instance.currentItem) {
            this.instance._mouseDrag(t)
          }
        } else {
          if (this.instance.isOver) {
            this.instance.isOver = 0;
            this.instance.cancelHelperRemoval = true;
            this.instance.options.revert = false;
            this.instance._trigger("out", t, this.instance._uiHash(this.instance));
            this.instance._mouseStop(t, true);
            this.instance.options.helper = this.instance.options._helper;
            this.instance.currentItem.remove();
            if (this.instance.placeholder) {
              this.instance.placeholder.remove()
            }
            r._trigger("fromSortable", t);
            r.dropped = false
          }
        }
      })
    }
  });
  e.ui.plugin.add("draggable", "cursor", {
    start: function() {
      var t = e("body"),
        n = e(this).data("ui-draggable").options;
      if (t.css("cursor")) {
        n._cursor = t.css("cursor")
      }
      t.css("cursor", n.cursor)
    },
    stop: function() {
      var t = e(this).data("ui-draggable").options;
      if (t._cursor) {
        e("body").css("cursor", t._cursor)
      }
    }
  });
  e.ui.plugin.add("draggable", "opacity", {
    start: function(t, n) {
      var r = e(n.helper),
        i = e(this).data("ui-draggable").options;
      if (r.css("opacity")) {
        i._opacity = r.css("opacity")
      }
      r.css("opacity", i.opacity)
    },
    stop: function(t, n) {
      var r = e(this).data("ui-draggable").options;
      if (r._opacity) {
        e(n.helper).css("opacity", r._opacity)
      }
    }
  });
  e.ui.plugin.add("draggable", "scroll", {
    start: function() {
      var t = e(this).data("ui-draggable");
      if (t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML") {
        t.overflowOffset = t.scrollParent.offset()
      }
    },
    drag: function(t) {
      var n = e(this).data("ui-draggable"),
        r = n.options,
        i = false;
      if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
        if (!r.axis || r.axis !== "x") {
          if (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity) {
            n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed
          } else {
            if (t.pageY - n.overflowOffset.top < r.scrollSensitivity) {
              n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed
            }
          }
        }
        if (!r.axis || r.axis !== "y") {
          if (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity) {
            n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed
          } else {
            if (t.pageX - n.overflowOffset.left < r.scrollSensitivity) {
              n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed
            }
          }
        }
      } else {
        if (!r.axis || r.axis !== "x") {
          if (t.pageY - e(document).scrollTop() < r.scrollSensitivity) {
            i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed)
          } else {
            if (e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity) {
              i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed)
            }
          }
        }
        if (!r.axis || r.axis !== "y") {
          if (t.pageX - e(document).scrollLeft() < r.scrollSensitivity) {
            i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed)
          } else {
            if (e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity) {
              i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed)
            }
          }
        }
      }
      if (i !== false && e.ui.ddmanager && !r.dropBehaviour) {
        e.ui.ddmanager.prepareOffsets(n, t)
      }
    }
  });
  e.ui.plugin.add("draggable", "snap", {
    start: function() {
      var t = e(this).data("ui-draggable"),
        n = t.options;
      t.snapElements = [];
      e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
        var n = e(this),
          r = n.offset();
        if (this !== t.element[0]) {
          t.snapElements.push({
            item: this,
            width: n.outerWidth(),
            height: n.outerHeight(),
            top: r.top,
            left: r.left
          })
        }
      })
    },
    drag: function(t, n) {
      var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"),
        d = p.options,
        v = d.snapTolerance,
        m = n.offset.left,
        g = m + p.helperProportions.width,
        y = n.offset.top,
        b = y + p.helperProportions.height;
      for (c = p.snapElements.length - 1; c >= 0; c--) {
        u = p.snapElements[c].left;
        a = u + p.snapElements[c].width;
        f = p.snapElements[c].top;
        l = f + p.snapElements[c].height;
        if (g < u - v || m > a + v || b < f - v || y > l + v || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)) {
          if (p.snapElements[c].snapping) {
            p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
              snapItem: p.snapElements[c].item
            }))
          }
          p.snapElements[c].snapping = false;
          continue
        }
        if (d.snapMode !== "inner") {
          r = Math.abs(f - b) <= v;
          i = Math.abs(l - y) <= v;
          s = Math.abs(u - g) <= v;
          o = Math.abs(a - m) <= v;
          if (r) {
            n.position.top = p._convertPositionTo("relative", {
              top: f - p.helperProportions.height,
              left: 0
            }).top - p.margins.top
          }
          if (i) {
            n.position.top = p._convertPositionTo("relative", {
              top: l,
              left: 0
            }).top - p.margins.top
          }
          if (s) {
            n.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: u - p.helperProportions.width
            }).left - p.margins.left
          }
          if (o) {
            n.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: a
            }).left - p.margins.left
          }
        }
        h = r || i || s || o;
        if (d.snapMode !== "outer") {
          r = Math.abs(f - y) <= v;
          i = Math.abs(l - b) <= v;
          s = Math.abs(u - m) <= v;
          o = Math.abs(a - g) <= v;
          if (r) {
            n.position.top = p._convertPositionTo("relative", {
              top: f,
              left: 0
            }).top - p.margins.top
          }
          if (i) {
            n.position.top = p._convertPositionTo("relative", {
              top: l - p.helperProportions.height,
              left: 0
            }).top - p.margins.top
          }
          if (s) {
            n.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: u
            }).left - p.margins.left
          }
          if (o) {
            n.position.left = p._convertPositionTo("relative", {
              top: 0,
              left: a - p.helperProportions.width
            }).left - p.margins.left
          }
        }
        if (!p.snapElements[c].snapping && (r || i || s || o || h)) {
          p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
            snapItem: p.snapElements[c].item
          }))
        }
        p.snapElements[c].snapping = r || i || s || o || h
      }
    }
  });
  e.ui.plugin.add("draggable", "stack", {
    start: function() {
      var t, n = this.data("ui-draggable").options,
        r = e.makeArray(e(n.stack)).sort(function(t, n) {
          return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
        });
      if (!r.length) {
        return
      }
      t = parseInt(e(r[0]).css("zIndex"), 10) || 0;
      e(r).each(function(n) {
        e(this).css("zIndex", t + n)
      });
      this.css("zIndex", t + r.length)
    }
  });
  e.ui.plugin.add("draggable", "zIndex", {
    start: function(t, n) {
      var r = e(n.helper),
        i = e(this).data("ui-draggable").options;
      if (r.css("zIndex")) {
        i._zIndex = r.css("zIndex")
      }
      r.css("zIndex", i.zIndex)
    },
    stop: function(t, n) {
      var r = e(this).data("ui-draggable").options;
      if (r._zIndex) {
        e(n.helper).css("zIndex", r._zIndex)
      }
    }
  })
})(jQuery);
(function(e, t) {
  function n(e, t, n) {
    return e > t && e < t + n
  }
  e.widget("ui.droppable", {
    version: "1.10.4",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: false,
      addClasses: true,
      greedy: false,
      hoverClass: false,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function() {
      var t, n = this.options,
        r = n.accept;
      this.isover = false;
      this.isout = true;
      this.accept = e.isFunction(r) ? r : function(e) {
        return e.is(r)
      };
      this.proportions = function() {
        if (arguments.length) {
          t = arguments[0]
        } else {
          return t ? t : t = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight
          }
        }
      };
      e.ui.ddmanager.droppables[n.scope] = e.ui.ddmanager.droppables[n.scope] || [];
      e.ui.ddmanager.droppables[n.scope].push(this);
      n.addClasses && this.element.addClass("ui-droppable")
    },
    _destroy: function() {
      var t = 0,
        n = e.ui.ddmanager.droppables[this.options.scope];
      for (; t < n.length; t++) {
        if (n[t] === this) {
          n.splice(t, 1)
        }
      }
      this.element.removeClass("ui-droppable ui-droppable-disabled")
    },
    _setOption: function(t, n) {
      if (t === "accept") {
        this.accept = e.isFunction(n) ? n : function(e) {
          return e.is(n)
        }
      }
      e.Widget.prototype._setOption.apply(this, arguments)
    },
    _activate: function(t) {
      var n = e.ui.ddmanager.current;
      if (this.options.activeClass) {
        this.element.addClass(this.options.activeClass)
      }
      if (n) {
        this._trigger("activate", t, this.ui(n))
      }
    },
    _deactivate: function(t) {
      var n = e.ui.ddmanager.current;
      if (this.options.activeClass) {
        this.element.removeClass(this.options.activeClass)
      }
      if (n) {
        this._trigger("deactivate", t, this.ui(n))
      }
    },
    _over: function(t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] === this.element[0]) {
        return
      }
      if (this.accept.call(this.element[0], n.currentItem || n.element)) {
        if (this.options.hoverClass) {
          this.element.addClass(this.options.hoverClass)
        }
        this._trigger("over", t, this.ui(n))
      }
    },
    _out: function(t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] === this.element[0]) {
        return
      }
      if (this.accept.call(this.element[0], n.currentItem || n.element)) {
        if (this.options.hoverClass) {
          this.element.removeClass(this.options.hoverClass)
        }
        this._trigger("out", t, this.ui(n))
      }
    },
    _drop: function(t, n) {
      var r = n || e.ui.ddmanager.current,
        i = false;
      if (!r || (r.currentItem || r.element)[0] === this.element[0]) {
        return false
      }
      this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
        var t = e.data(this, "ui-droppable");
        if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
            offset: t.element.offset()
          }), t.options.tolerance)) {
          i = true;
          return false
        }
      });
      if (i) {
        return false
      }
      if (this.accept.call(this.element[0], r.currentItem || r.element)) {
        if (this.options.activeClass) {
          this.element.removeClass(this.options.activeClass)
        }
        if (this.options.hoverClass) {
          this.element.removeClass(this.options.hoverClass)
        }
        this._trigger("drop", t, this.ui(r));
        return this.element
      }
      return false
    },
    ui: function(e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs
      }
    }
  });
  e.ui.intersect = function(e, t, r) {
    if (!t.offset) {
      return false
    }
    var i, s, o = (e.positionAbs || e.position.absolute).left,
      u = (e.positionAbs || e.position.absolute).top,
      a = o + e.helperProportions.width,
      f = u + e.helperProportions.height,
      l = t.offset.left,
      c = t.offset.top,
      h = l + t.proportions().width,
      p = c + t.proportions().height;
    switch (r) {
      case "fit":
        return l <= o && a <= h && c <= u && f <= p;
      case "intersect":
        return l < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < h && c < u + e.helperProportions.height / 2 && f - e.helperProportions.height / 2 < p;
      case "pointer":
        i = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left;
        s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top;
        return n(s, c, t.proportions().height) && n(i, l, t.proportions().width);
      case "touch":
        return (u >= c && u <= p || f >= c && f <= p || u < c && f > p) && (o >= l && o <= h || a >= l && a <= h || o < l && a > h);
      default:
        return false
    }
  };
  e.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function(t, n) {
      var r, i, s = e.ui.ddmanager.droppables[t.options.scope] || [],
        o = n ? n.type : null,
        u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
      e: for (r = 0; r < s.length; r++) {
        if (s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element)) {
          continue
        }
        for (i = 0; i < u.length; i++) {
          if (u[i] === s[r].element[0]) {
            s[r].proportions().height = 0;
            continue e
          }
        }
        s[r].visible = s[r].element.css("display") !== "none";
        if (!s[r].visible) {
          continue
        }
        if (o === "mousedown") {
          s[r]._activate.call(s[r], n)
        }
        s[r].offset = s[r].element.offset();
        s[r].proportions({
          width: s[r].element[0].offsetWidth,
          height: s[r].element[0].offsetHeight
        })
      }
    },
    drop: function(t, n) {
      var r = false;
      e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
        if (!this.options) {
          return
        }
        if (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance)) {
          r = this._drop.call(this, n) || r
        }
        if (!this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element)) {
          this.isout = true;
          this.isover = false;
          this._deactivate.call(this, n)
        }
      });
      return r
    },
    dragStart: function(t, n) {
      t.element.parentsUntil("body").bind("scroll.droppable", function() {
        if (!t.options.refreshPositions) {
          e.ui.ddmanager.prepareOffsets(t, n)
        }
      })
    },
    drag: function(t, n) {
      if (t.options.refreshPositions) {
        e.ui.ddmanager.prepareOffsets(t, n)
      }
      e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
        if (this.options.disabled || this.greedyChild || !this.visible) {
          return
        }
        var r, i, s, o = e.ui.intersect(t, this, this.options.tolerance),
          u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
        if (!u) {
          return
        }
        if (this.options.greedy) {
          i = this.options.scope;
          s = this.element.parents(":data(ui-droppable)").filter(function() {
            return e.data(this, "ui-droppable").options.scope === i
          });
          if (s.length) {
            r = e.data(s[0], "ui-droppable");
            r.greedyChild = u === "isover"
          }
        }
        if (r && u === "isover") {
          r.isover = false;
          r.isout = true;
          r._out.call(r, n)
        }
        this[u] = true;
        this[u === "isout" ? "isover" : "isout"] = false;
        this[u === "isover" ? "_over" : "_out"].call(this, n);
        if (r && u === "isout") {
          r.isout = false;
          r.isover = true;
          r._over.call(r, n)
        }
      })
    },
    dragStop: function(t, n) {
      t.element.parentsUntil("body").unbind("scroll.droppable");
      if (!t.options.refreshPositions) {
        e.ui.ddmanager.prepareOffsets(t, n)
      }
    }
  }
})(jQuery);
(function(e, t) {
  var n = "ui-effects-";
  e.effects = {
    effect: {}
  };
  (function(e, t) {
    function h(e, t, n) {
      var r = u[t.type] || {};
      if (e == null) {
        return n || !t.def ? null : t.def
      }
      e = r.floor ? ~~e : parseFloat(e);
      if (isNaN(e)) {
        return t.def
      }
      if (r.mod) {
        return (e + r.mod) % r.mod
      }
      return 0 > e ? 0 : r.max < e ? r.max : e
    }

    function p(t) {
      var n = s(),
        r = n._rgba = [];
      t = t.toLowerCase();
      c(i, function(e, i) {
        var s, u = i.re.exec(t),
          a = u && i.parse(u),
          f = i.space || "rgba";
        if (a) {
          s = n[f](a);
          n[o[f].cache] = s[o[f].cache];
          r = n._rgba = s._rgba;
          return false
        }
      });
      if (r.length) {
        if (r.join() === "0,0,0,0") {
          e.extend(r, l.transparent)
        }
        return n
      }
      return l[t]
    }

    function d(e, t, n) {
      n = (n + 1) % 1;
      if (n * 6 < 1) {
        return e + (t - e) * n * 6
      }
      if (n * 2 < 1) {
        return t
      }
      if (n * 3 < 2) {
        return e + (t - e) * (2 / 3 - n) * 6
      }
      return e
    }
    var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
      r = /^([\-+])=\s*(\d+\.?\d*)/,
      i = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(e) {
          return [e[1], e[2], e[3], e[4]]
        }
      }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(e) {
          return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
        }
      }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(e) {
          return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
        }
      }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(e) {
          return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
        }
      }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(e) {
          return [e[1], e[2] / 100, e[3] / 100, e[4]]
        }
      }],
      s = e.Color = function(t, n, r, i) {
        return new e.Color.fn.parse(t, n, r, i)
      },
      o = {
        rgba: {
          props: {
            red: {
              idx: 0,
              type: "byte"
            },
            green: {
              idx: 1,
              type: "byte"
            },
            blue: {
              idx: 2,
              type: "byte"
            }
          }
        },
        hsla: {
          props: {
            hue: {
              idx: 0,
              type: "degrees"
            },
            saturation: {
              idx: 1,
              type: "percent"
            },
            lightness: {
              idx: 2,
              type: "percent"
            }
          }
        }
      },
      u = {
        "byte": {
          floor: true,
          max: 255
        },
        percent: {
          max: 1
        },
        degrees: {
          mod: 360,
          floor: true
        }
      },
      a = s.support = {},
      f = e("<p>")[0],
      l, c = e.each;
    f.style.cssText = "background-color:rgba(1,1,1,.5)";
    a.rgba = f.style.backgroundColor.indexOf("rgba") > -1;
    c(o, function(e, t) {
      t.cache = "_" + e;
      t.props.alpha = {
        idx: 3,
        type: "percent",
        def: 1
      }
    });
    s.fn = e.extend(s.prototype, {
      parse: function(n, r, i, u) {
        if (n === t) {
          this._rgba = [null, null, null, null];
          return this
        }
        if (n.jquery || n.nodeType) {
          n = e(n).css(r);
          r = t
        }
        var a = this,
          f = e.type(n),
          d = this._rgba = [];
        if (r !== t) {
          n = [n, r, i, u];
          f = "array"
        }
        if (f === "string") {
          return this.parse(p(n) || l._default)
        }
        if (f === "array") {
          c(o.rgba.props, function(e, t) {
            d[t.idx] = h(n[t.idx], t)
          });
          return this
        }
        if (f === "object") {
          if (n instanceof s) {
            c(o, function(e, t) {
              if (n[t.cache]) {
                a[t.cache] = n[t.cache].slice()
              }
            })
          } else {
            c(o, function(t, r) {
              var i = r.cache;
              c(r.props, function(e, t) {
                if (!a[i] && r.to) {
                  if (e === "alpha" || n[e] == null) {
                    return
                  }
                  a[i] = r.to(a._rgba)
                }
                a[i][t.idx] = h(n[e], t, true)
              });
              if (a[i] && e.inArray(null, a[i].slice(0, 3)) < 0) {
                a[i][3] = 1;
                if (r.from) {
                  a._rgba = r.from(a[i])
                }
              }
            })
          }
          return this
        }
      },
      is: function(e) {
        var t = s(e),
          n = true,
          r = this;
        c(o, function(e, i) {
          var s, o = t[i.cache];
          if (o) {
            s = r[i.cache] || i.to && i.to(r._rgba) || [];
            c(i.props, function(e, t) {
              if (o[t.idx] != null) {
                n = o[t.idx] === s[t.idx];
                return n
              }
            })
          }
          return n
        });
        return n
      },
      _space: function() {
        var e = [],
          t = this;
        c(o, function(n, r) {
          if (t[r.cache]) {
            e.push(n)
          }
        });
        return e.pop()
      },
      transition: function(e, t) {
        var n = s(e),
          r = n._space(),
          i = o[r],
          a = this.alpha() === 0 ? s("transparent") : this,
          f = a[i.cache] || i.to(a._rgba),
          l = f.slice();
        n = n[i.cache];
        c(i.props, function(e, r) {
          var i = r.idx,
            s = f[i],
            o = n[i],
            a = u[r.type] || {};
          if (o === null) {
            return
          }
          if (s === null) {
            l[i] = o
          } else {
            if (a.mod) {
              if (o - s > a.mod / 2) {
                s += a.mod
              } else {
                if (s - o > a.mod / 2) {
                  s -= a.mod
                }
              }
            }
            l[i] = h((o - s) * t + s, r)
          }
        });
        return this[r](l)
      },
      blend: function(t) {
        if (this._rgba[3] === 1) {
          return this
        }
        var n = this._rgba.slice(),
          r = n.pop(),
          i = s(t)._rgba;
        return s(e.map(n, function(e, t) {
          return (1 - r) * i[t] + r * e
        }))
      },
      toRgbaString: function() {
        var t = "rgba(",
          n = e.map(this._rgba, function(e, t) {
            return e == null ? t > 2 ? 1 : 0 : e
          });
        if (n[3] === 1) {
          n.pop();
          t = "rgb("
        }
        return t + n.join() + ")"
      },
      toHslaString: function() {
        var t = "hsla(",
          n = e.map(this.hsla(), function(e, t) {
            if (e == null) {
              e = t > 2 ? 1 : 0
            }
            if (t && t < 3) {
              e = Math.round(e * 100) + "%"
            }
            return e
          });
        if (n[3] === 1) {
          n.pop();
          t = "hsl("
        }
        return t + n.join() + ")"
      },
      toHexString: function(t) {
        var n = this._rgba.slice(),
          r = n.pop();
        if (t) {
          n.push(~~(r * 255))
        }
        return "#" + e.map(n, function(e) {
          e = (e || 0).toString(16);
          return e.length === 1 ? "0" + e : e
        }).join("")
      },
      toString: function() {
        return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
      }
    });
    s.fn.parse.prototype = s.fn;
    o.hsla.to = function(e) {
      if (e[0] == null || e[1] == null || e[2] == null) {
        return [null, null, null, e[3]]
      }
      var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        i = e[3],
        s = Math.max(t, n, r),
        o = Math.min(t, n, r),
        u = s - o,
        a = s + o,
        f = a * 0.5,
        l, c;
      if (o === s) {
        l = 0
      } else {
        if (t === s) {
          l = 60 * (n - r) / u + 360
        } else {
          if (n === s) {
            l = 60 * (r - t) / u + 120
          } else {
            l = 60 * (t - n) / u + 240
          }
        }
      }
      if (u === 0) {
        c = 0
      } else {
        if (f <= 0.5) {
          c = u / a
        } else {
          c = u / (2 - a)
        }
      }
      return [Math.round(l) % 360, c, f, i == null ? 1 : i]
    };
    o.hsla.from = function(e) {
      if (e[0] == null || e[1] == null || e[2] == null) {
        return [null, null, null, e[3]]
      }
      var t = e[0] / 360,
        n = e[1],
        r = e[2],
        i = e[3],
        s = r <= 0.5 ? r * (1 + n) : r + n - r * n,
        o = 2 * r - s;
      return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
    };
    c(o, function(n, i) {
      var o = i.props,
        u = i.cache,
        a = i.to,
        f = i.from;
      s.fn[n] = function(n) {
        if (a && !this[u]) {
          this[u] = a(this._rgba)
        }
        if (n === t) {
          return this[u].slice()
        }
        var r, i = e.type(n),
          l = i === "array" || i === "object" ? n : arguments,
          p = this[u].slice();
        c(o, function(e, t) {
          var n = l[i === "object" ? e : t.idx];
          if (n == null) {
            n = p[t.idx]
          }
          p[t.idx] = h(n, t)
        });
        if (f) {
          r = s(f(p));
          r[u] = p;
          return r
        } else {
          return s(p)
        }
      };
      c(o, function(t, i) {
        if (s.fn[t]) {
          return
        }
        s.fn[t] = function(s) {
          var o = e.type(s),
            u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n,
            a = this[u](),
            f = a[i.idx],
            l;
          if (o === "undefined") {
            return f
          }
          if (o === "function") {
            s = s.call(this, f);
            o = e.type(s)
          }
          if (s == null && i.empty) {
            return this
          }
          if (o === "string") {
            l = r.exec(s);
            if (l) {
              s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1)
            }
          }
          a[i.idx] = s;
          return this[u](a)
        }
      })
    });
    s.hook = function(t) {
      var n = t.split(" ");
      c(n, function(t, n) {
        e.cssHooks[n] = {
          set: function(t, r) {
            var i, o, u = "";
            if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
              r = s(i || r);
              if (!a.rgba && r._rgba[3] !== 1) {
                o = n === "backgroundColor" ? t.parentNode : t;
                while ((u === "" || u === "transparent") && o && o.style) {
                  try {
                    u = e.css(o, "backgroundColor");
                    o = o.parentNode
                  } catch (f) {}
                }
                r = r.blend(u && u !== "transparent" ? u : "_default")
              }
              r = r.toRgbaString()
            }
            try {
              t.style[n] = r
            } catch (f) {}
          }
        };
        e.fx.step[n] = function(t) {
          if (!t.colorInit) {
            t.start = s(t.elem, n);
            t.end = s(t.end);
            t.colorInit = true
          }
          e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
        }
      })
    };
    s.hook(n);
    e.cssHooks.borderColor = {
      expand: function(e) {
        var t = {};
        c(["Top", "Right", "Bottom", "Left"], function(n, r) {
          t["border" + r + "Color"] = e
        });
        return t
      }
    };
    l = e.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
    }
  })(jQuery);
  (function() {
    function i(t) {
      var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
        s = {};
      if (i && i.length && i[0] && i[i[0]]) {
        r = i.length;
        while (r--) {
          n = i[r];
          if (typeof i[n] === "string") {
            s[e.camelCase(n)] = i[n]
          }
        }
      } else {
        for (n in i) {
          if (typeof i[n] === "string") {
            s[n] = i[n]
          }
        }
      }
      return s
    }

    function s(t, n) {
      var i = {},
        s, o;
      for (s in n) {
        o = n[s];
        if (t[s] !== o) {
          if (!r[s]) {
            if (e.fx.step[s] || !isNaN(parseFloat(o))) {
              i[s] = o
            }
          }
        }
      }
      return i
    }
    var n = ["add", "remove", "toggle"],
      r = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
      };
    e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
      e.fx.step[n] = function(e) {
        if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) {
          jQuery.style(e.elem, n, e.end);
          e.setAttr = true
        }
      }
    });
    if (!e.fn.addBack) {
      e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
      }
    }
    e.effects.animateClass = function(t, r, o, u) {
      var a = e.speed(r, o, u);
      return this.queue(function() {
        var r = e(this),
          o = r.attr("class") || "",
          u, f = a.children ? r.find("*").addBack() : r;
        f = f.map(function() {
          var t = e(this);
          return {
            el: t,
            start: i(this)
          }
        });
        u = function() {
          e.each(n, function(e, n) {
            if (t[n]) {
              r[n + "Class"](t[n])
            }
          })
        };
        u();
        f = f.map(function() {
          this.end = i(this.el[0]);
          this.diff = s(this.start, this.end);
          return this
        });
        r.attr("class", o);
        f = f.map(function() {
          var t = this,
            n = e.Deferred(),
            r = e.extend({}, a, {
              queue: false,
              complete: function() {
                n.resolve(t)
              }
            });
          this.el.animate(this.diff, r);
          return n.promise()
        });
        e.when.apply(e, f.get()).done(function() {
          u();
          e.each(arguments, function() {
            var t = this.el;
            e.each(this.diff, function(e) {
              t.css(e, "")
            })
          });
          a.complete.call(r[0])
        })
      })
    };
    e.fn.extend({
      addClass: function(t) {
        return function(n, r, i, s) {
          return r ? e.effects.animateClass.call(this, {
            add: n
          }, r, i, s) : t.apply(this, arguments)
        }
      }(e.fn.addClass),
      removeClass: function(t) {
        return function(n, r, i, s) {
          return arguments.length > 1 ? e.effects.animateClass.call(this, {
            remove: n
          }, r, i, s) : t.apply(this, arguments)
        }
      }(e.fn.removeClass),
      toggleClass: function(n) {
        return function(r, i, s, o, u) {
          if (typeof i === "boolean" || i === t) {
            if (!s) {
              return n.apply(this, arguments)
            } else {
              return e.effects.animateClass.call(this, i ? {
                add: r
              } : {
                remove: r
              }, s, o, u)
            }
          } else {
            return e.effects.animateClass.call(this, {
              toggle: r
            }, i, s, o)
          }
        }
      }(e.fn.toggleClass),
      switchClass: function(t, n, r, i, s) {
        return e.effects.animateClass.call(this, {
          add: n,
          remove: t
        }, r, i, s)
      }
    })
  })();
  (function() {
    function r(t, n, r, i) {
      if (e.isPlainObject(t)) {
        n = t;
        t = t.effect
      }
      t = {
        effect: t
      };
      if (n == null) {
        n = {}
      }
      if (e.isFunction(n)) {
        i = n;
        r = null;
        n = {}
      }
      if (typeof n === "number" || e.fx.speeds[n]) {
        i = r;
        r = n;
        n = {}
      }
      if (e.isFunction(r)) {
        i = r;
        r = null
      }
      if (n) {
        e.extend(t, n)
      }
      r = r || n.duration;
      t.duration = e.fx.off ? 0 : typeof r === "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default;
      t.complete = i || n.complete;
      return t
    }

    function i(t) {
      if (!t || typeof t === "number" || e.fx.speeds[t]) {
        return true
      }
      if (typeof t === "string" && !e.effects.effect[t]) {
        return true
      }
      if (e.isFunction(t)) {
        return true
      }
      if (typeof t === "object" && !t.effect) {
        return true
      }
      return false
    }
    e.extend(e.effects, {
      version: "1.10.4",
      save: function(e, t) {
        for (var r = 0; r < t.length; r++) {
          if (t[r] !== null) {
            e.data(n + t[r], e[0].style[t[r]])
          }
        }
      },
      restore: function(e, r) {
        var i, s;
        for (s = 0; s < r.length; s++) {
          if (r[s] !== null) {
            i = e.data(n + r[s]);
            if (i === t) {
              i = ""
            }
            e.css(r[s], i)
          }
        }
      },
      setMode: function(e, t) {
        if (t === "toggle") {
          t = e.is(":hidden") ? "show" : "hide"
        }
        return t
      },
      getBaseline: function(e, t) {
        var n, r;
        switch (e[0]) {
          case "top":
            n = 0;
            break;
          case "middle":
            n = 0.5;
            break;
          case "bottom":
            n = 1;
            break;
          default:
            n = e[0] / t.height
        }
        switch (e[1]) {
          case "left":
            r = 0;
            break;
          case "center":
            r = 0.5;
            break;
          case "right":
            r = 1;
            break;
          default:
            r = e[1] / t.width
        }
        return {
          x: r,
          y: n
        }
      },
      createWrapper: function(t) {
        if (t.parent().is(".ui-effects-wrapper")) {
          return t.parent()
        }
        var n = {
            width: t.outerWidth(true),
            height: t.outerHeight(true),
            "float": t.css("float")
          },
          r = e("<div></div>").addClass("ui-effects-wrapper").css({
            fontSize: "100%",
            background: "transparent",
            border: "none",
            margin: 0,
            padding: 0
          }),
          i = {
            width: t.width(),
            height: t.height()
          },
          s = document.activeElement;
        try {
          s.id
        } catch (o) {
          s = document.body
        }
        t.wrap(r);
        if (t[0] === s || e.contains(t[0], s)) {
          e(s).focus()
        }
        r = t.parent();
        if (t.css("position") === "static") {
          r.css({
            position: "relative"
          });
          t.css({
            position: "relative"
          })
        } else {
          e.extend(n, {
            position: t.css("position"),
            zIndex: t.css("z-index")
          });
          e.each(["top", "left", "bottom", "right"], function(e, r) {
            n[r] = t.css(r);
            if (isNaN(parseInt(n[r], 10))) {
              n[r] = "auto"
            }
          });
          t.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })
        }
        t.css(i);
        return r.css(n).show()
      },
      removeWrapper: function(t) {
        var n = document.activeElement;
        if (t.parent().is(".ui-effects-wrapper")) {
          t.parent().replaceWith(t);
          if (t[0] === n || e.contains(t[0], n)) {
            e(n).focus()
          }
        }
        return t
      },
      setTransition: function(t, n, r, i) {
        i = i || {};
        e.each(n, function(e, n) {
          var s = t.cssUnit(n);
          if (s[0] > 0) {
            i[n] = s[0] * r + s[1]
          }
        });
        return i
      }
    });
    e.fn.extend({
      effect: function() {
        function o(n) {
          function u() {
            if (e.isFunction(i)) {
              i.call(r[0])
            }
            if (e.isFunction(n)) {
              n()
            }
          }
          var r = e(this),
            i = t.complete,
            o = t.mode;
          if (r.is(":hidden") ? o === "hide" : o === "show") {
            r[o]();
            u()
          } else {
            s.call(r[0], t, u)
          }
        }
        var t = r.apply(this, arguments),
          n = t.mode,
          i = t.queue,
          s = e.effects.effect[t.effect];
        if (e.fx.off || !s) {
          if (n) {
            return this[n](t.duration, t.complete)
          } else {
            return this.each(function() {
              if (t.complete) {
                t.complete.call(this)
              }
            })
          }
        }
        return i === false ? this.each(o) : this.queue(i || "fx", o)
      },
      show: function(e) {
        return function(t) {
          if (i(t)) {
            return e.apply(this, arguments)
          } else {
            var n = r.apply(this, arguments);
            n.mode = "show";
            return this.effect.call(this, n)
          }
        }
      }(e.fn.show),
      hide: function(e) {
        return function(t) {
          if (i(t)) {
            return e.apply(this, arguments)
          } else {
            var n = r.apply(this, arguments);
            n.mode = "hide";
            return this.effect.call(this, n)
          }
        }
      }(e.fn.hide),
      toggle: function(e) {
        return function(t) {
          if (i(t) || typeof t === "boolean") {
            return e.apply(this, arguments)
          } else {
            var n = r.apply(this, arguments);
            n.mode = "toggle";
            return this.effect.call(this, n)
          }
        }
      }(e.fn.toggle),
      cssUnit: function(t) {
        var n = this.css(t),
          r = [];
        e.each(["em", "px", "%", "pt"], function(e, t) {
          if (n.indexOf(t) > 0) {
            r = [parseFloat(n), t]
          }
        });
        return r
      }
    })
  })();
  (function() {
    var t = {};
    e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
      t[n] = function(t) {
        return Math.pow(t, e + 2)
      }
    });
    e.extend(t, {
      Sine: function(e) {
        return 1 - Math.cos(e * Math.PI / 2)
      },
      Circ: function(e) {
        return 1 - Math.sqrt(1 - e * e)
      },
      Elastic: function(e) {
        return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
      },
      Back: function(e) {
        return e * e * (3 * e - 2)
      },
      Bounce: function(e) {
        var t, n = 4;
        while (e < ((t = Math.pow(2, --n)) - 1) / 11) {}
        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
      }
    });
    e.each(t, function(t, n) {
      e.easing["easeIn" + t] = n;
      e.easing["easeOut" + t] = function(e) {
        return 1 - n(1 - e)
      };
      e.easing["easeInOut" + t] = function(e) {
        return e < 0.5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
      }
    })
  })()
})(jQuery);
(function(e, t) {
  var n = /up|down|vertical/,
    r = /up|left|vertical|horizontal/;
  e.effects.effect.blind = function(t, i) {
    var s = e(this),
      o = ["position", "top", "bottom", "left", "right", "height", "width"],
      u = e.effects.setMode(s, t.mode || "hide"),
      a = t.direction || "up",
      f = n.test(a),
      l = f ? "height" : "width",
      c = f ? "top" : "left",
      h = r.test(a),
      p = {},
      d = u === "show",
      v, m, g;
    if (s.parent().is(".ui-effects-wrapper")) {
      e.effects.save(s.parent(), o)
    } else {
      e.effects.save(s, o)
    }
    s.show();
    v = e.effects.createWrapper(s).css({
      overflow: "hidden"
    });
    m = v[l]();
    g = parseFloat(v.css(c)) || 0;
    p[l] = d ? m : 0;
    if (!h) {
      s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
        position: "absolute"
      });
      p[c] = d ? g : m + g
    }
    if (d) {
      v.css(l, 0);
      if (!h) {
        v.css(c, g + m)
      }
    }
    v.animate(p, {
      duration: t.duration,
      easing: t.easing,
      queue: false,
      complete: function() {
        if (u === "hide") {
          s.hide()
        }
        e.effects.restore(s, o);
        e.effects.removeWrapper(s);
        i()
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.bounce = function(t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "effect"),
      o = s === "hide",
      u = s === "show",
      a = t.direction || "up",
      f = t.distance,
      l = t.times || 5,
      c = l * 2 + (u || o ? 1 : 0),
      h = t.duration / c,
      p = t.easing,
      d = a === "up" || a === "down" ? "top" : "left",
      v = a === "up" || a === "left",
      m, g, y, b = r.queue(),
      w = b.length;
    if (u || o) {
      i.push("opacity")
    }
    e.effects.save(r, i);
    r.show();
    e.effects.createWrapper(r);
    if (!f) {
      f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3
    }
    if (u) {
      y = {
        opacity: 1
      };
      y[d] = 0;
      r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)
    }
    if (o) {
      f = f / Math.pow(2, l - 1)
    }
    y = {};
    y[d] = 0;
    for (m = 0; m < l; m++) {
      g = {};
      g[d] = (v ? "-=" : "+=") + f;
      r.animate(g, h, p).animate(y, h, p);
      f = o ? f * 2 : f / 2
    }
    if (o) {
      g = {
        opacity: 0
      };
      g[d] = (v ? "-=" : "+=") + f;
      r.animate(g, h, p)
    }
    r.queue(function() {
      if (o) {
        r.hide()
      }
      e.effects.restore(r, i);
      e.effects.removeWrapper(r);
      n()
    });
    if (w > 1) {
      b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1)))
    }
    r.dequeue()
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.clip = function(t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = t.direction || "vertical",
      a = u === "vertical",
      f = a ? "height" : "width",
      l = a ? "top" : "left",
      c = {},
      h, p, d;
    e.effects.save(r, i);
    r.show();
    h = e.effects.createWrapper(r).css({
      overflow: "hidden"
    });
    p = r[0].tagName === "IMG" ? h : r;
    d = p[f]();
    if (o) {
      p.css(f, 0);
      p.css(l, d / 2)
    }
    c[f] = o ? d : 0;
    c[l] = o ? 0 : d / 2;
    p.animate(c, {
      queue: false,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        if (!o) {
          r.hide()
        }
        e.effects.restore(r, i);
        e.effects.removeWrapper(r);
        n()
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.drop = function(t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = t.direction || "left",
      a = u === "up" || u === "down" ? "top" : "left",
      f = u === "up" || u === "left" ? "pos" : "neg",
      l = {
        opacity: o ? 1 : 0
      },
      c;
    e.effects.save(r, i);
    r.show();
    e.effects.createWrapper(r);
    c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](true) / 2;
    if (o) {
      r.css("opacity", 0).css(a, f === "pos" ? -c : c)
    }
    l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c;
    r.animate(l, {
      queue: false,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        if (s === "hide") {
          r.hide()
        }
        e.effects.restore(r, i);
        e.effects.removeWrapper(r);
        n()
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.explode = function(t, n) {
    function y() {
      c.push(this);
      if (c.length === r * i) {
        b()
      }
    }

    function b() {
      s.css({
        visibility: "visible"
      });
      e(c).remove();
      if (!u) {
        s.hide()
      }
      n()
    }
    var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
      i = r,
      s = e(this),
      o = e.effects.setMode(s, t.mode || "hide"),
      u = o === "show",
      a = s.show().css("visibility", "hidden").offset(),
      f = Math.ceil(s.outerWidth() / i),
      l = Math.ceil(s.outerHeight() / r),
      c = [],
      h, p, d, v, m, g;
    for (h = 0; h < r; h++) {
      v = a.top + h * l;
      g = h - (r - 1) / 2;
      for (p = 0; p < i; p++) {
        d = a.left + p * f;
        m = p - (i - 1) / 2;
        s.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -p * f,
          top: -h * l
        }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: f,
          height: l,
          left: d + (u ? m * f : 0),
          top: v + (u ? g * l : 0),
          opacity: u ? 0 : 1
        }).animate({
          left: d + (u ? 0 : m * f),
          top: v + (u ? 0 : g * l),
          opacity: u ? 1 : 0
        }, t.duration || 500, t.easing, y)
      }
    }
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.fade = function(t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "toggle");
    r.animate({
      opacity: i
    }, {
      queue: false,
      duration: t.duration,
      easing: t.easing,
      complete: n
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.fold = function(t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "hide"),
      o = s === "show",
      u = s === "hide",
      a = t.size || 15,
      f = /([0-9]+)%/.exec(a),
      l = !!t.horizFirst,
      c = o !== l,
      h = c ? ["width", "height"] : ["height", "width"],
      p = t.duration / 2,
      d, v, m = {},
      g = {};
    e.effects.save(r, i);
    r.show();
    d = e.effects.createWrapper(r).css({
      overflow: "hidden"
    });
    v = c ? [d.width(), d.height()] : [d.height(), d.width()];
    if (f) {
      a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]
    }
    if (o) {
      d.css(l ? {
        height: 0,
        width: a
      } : {
        height: a,
        width: 0
      })
    }
    m[h[0]] = o ? v[0] : a;
    g[h[1]] = o ? v[1] : 0;
    d.animate(m, p, t.easing).animate(g, p, t.easing, function() {
      if (u) {
        r.hide()
      }
      e.effects.restore(r, i);
      e.effects.removeWrapper(r);
      n()
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.highlight = function(t, n) {
    var r = e(this),
      i = ["backgroundImage", "backgroundColor", "opacity"],
      s = e.effects.setMode(r, t.mode || "show"),
      o = {
        backgroundColor: r.css("backgroundColor")
      };
    if (s === "hide") {
      o.opacity = 0
    }
    e.effects.save(r, i);
    r.show().css({
      backgroundImage: "none",
      backgroundColor: t.color || "#ffff99"
    }).animate(o, {
      queue: false,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        if (s === "hide") {
          r.hide()
        }
        e.effects.restore(r, i);
        n()
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.pulsate = function(t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "show"),
      s = i === "show",
      o = i === "hide",
      u = s || i === "hide",
      a = (t.times || 5) * 2 + (u ? 1 : 0),
      f = t.duration / a,
      l = 0,
      c = r.queue(),
      h = c.length,
      p;
    if (s || !r.is(":visible")) {
      r.css("opacity", 0).show();
      l = 1
    }
    for (p = 1; p < a; p++) {
      r.animate({
        opacity: l
      }, f, t.easing);
      l = 1 - l
    }
    r.animate({
      opacity: l
    }, f, t.easing);
    r.queue(function() {
      if (o) {
        r.hide()
      }
      n()
    });
    if (h > 1) {
      c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1)))
    }
    r.dequeue()
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.puff = function(t, n) {
    var r = e(this),
      i = e.effects.setMode(r, t.mode || "hide"),
      s = i === "hide",
      o = parseInt(t.percent, 10) || 150,
      u = o / 100,
      a = {
        height: r.height(),
        width: r.width(),
        outerHeight: r.outerHeight(),
        outerWidth: r.outerWidth()
      };
    e.extend(t, {
      effect: "scale",
      queue: false,
      fade: true,
      mode: i,
      complete: n,
      percent: s ? o : 100,
      from: s ? a : {
        height: a.height * u,
        width: a.width * u,
        outerHeight: a.outerHeight * u,
        outerWidth: a.outerWidth * u
      }
    });
    r.effect(t)
  };
  e.effects.effect.scale = function(t, n) {
    var r = e(this),
      i = e.extend(true, {}, t),
      s = e.effects.setMode(r, t.mode || "effect"),
      o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
      u = t.direction || "both",
      a = t.origin,
      f = {
        height: r.height(),
        width: r.width(),
        outerHeight: r.outerHeight(),
        outerWidth: r.outerWidth()
      },
      l = {
        y: u !== "horizontal" ? o / 100 : 1,
        x: u !== "vertical" ? o / 100 : 1
      };
    i.effect = "size";
    i.queue = false;
    i.complete = n;
    if (s !== "effect") {
      i.origin = a || ["middle", "center"];
      i.restore = true
    }
    i.from = t.from || (s === "show" ? {
      height: 0,
      width: 0,
      outerHeight: 0,
      outerWidth: 0
    } : f);
    i.to = {
      height: f.height * l.y,
      width: f.width * l.x,
      outerHeight: f.outerHeight * l.y,
      outerWidth: f.outerWidth * l.x
    };
    if (i.fade) {
      if (s === "show") {
        i.from.opacity = 0;
        i.to.opacity = 1
      }
      if (s === "hide") {
        i.from.opacity = 1;
        i.to.opacity = 0
      }
    }
    r.effect(i)
  };
  e.effects.effect.size = function(t, n) {
    var r, i, s, o = e(this),
      u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
      a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
      f = ["width", "height", "overflow"],
      l = ["fontSize"],
      c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
      h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
      p = e.effects.setMode(o, t.mode || "effect"),
      d = t.restore || p !== "effect",
      v = t.scale || "both",
      m = t.origin || ["middle", "center"],
      g = o.css("position"),
      y = d ? u : a,
      b = {
        height: 0,
        width: 0,
        outerHeight: 0,
        outerWidth: 0
      };
    if (p === "show") {
      o.show()
    }
    r = {
      height: o.height(),
      width: o.width(),
      outerHeight: o.outerHeight(),
      outerWidth: o.outerWidth()
    };
    if (t.mode === "toggle" && p === "show") {
      o.from = t.to || b;
      o.to = t.from || r
    } else {
      o.from = t.from || (p === "show" ? b : r);
      o.to = t.to || (p === "hide" ? b : r)
    }
    s = {
      from: {
        y: o.from.height / r.height,
        x: o.from.width / r.width
      },
      to: {
        y: o.to.height / r.height,
        x: o.to.width / r.width
      }
    };
    if (v === "box" || v === "both") {
      if (s.from.y !== s.to.y) {
        y = y.concat(c);
        o.from = e.effects.setTransition(o, c, s.from.y, o.from);
        o.to = e.effects.setTransition(o, c, s.to.y, o.to)
      }
      if (s.from.x !== s.to.x) {
        y = y.concat(h);
        o.from = e.effects.setTransition(o, h, s.from.x, o.from);
        o.to = e.effects.setTransition(o, h, s.to.x, o.to)
      }
    }
    if (v === "content" || v === "both") {
      if (s.from.y !== s.to.y) {
        y = y.concat(l).concat(f);
        o.from = e.effects.setTransition(o, l, s.from.y, o.from);
        o.to = e.effects.setTransition(o, l, s.to.y, o.to)
      }
    }
    e.effects.save(o, y);
    o.show();
    e.effects.createWrapper(o);
    o.css("overflow", "hidden").css(o.from);
    if (m) {
      i = e.effects.getBaseline(m, r);
      o.from.top = (r.outerHeight - o.outerHeight()) * i.y;
      o.from.left = (r.outerWidth - o.outerWidth()) * i.x;
      o.to.top = (r.outerHeight - o.to.outerHeight) * i.y;
      o.to.left = (r.outerWidth - o.to.outerWidth) * i.x
    }
    o.css(o.from);
    if (v === "content" || v === "both") {
      c = c.concat(["marginTop", "marginBottom"]).concat(l);
      h = h.concat(["marginLeft", "marginRight"]);
      f = u.concat(c).concat(h);
      o.find("*[width]").each(function() {
        var n = e(this),
          r = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth()
          };
        if (d) {
          e.effects.save(n, f)
        }
        n.from = {
          height: r.height * s.from.y,
          width: r.width * s.from.x,
          outerHeight: r.outerHeight * s.from.y,
          outerWidth: r.outerWidth * s.from.x
        };
        n.to = {
          height: r.height * s.to.y,
          width: r.width * s.to.x,
          outerHeight: r.height * s.to.y,
          outerWidth: r.width * s.to.x
        };
        if (s.from.y !== s.to.y) {
          n.from = e.effects.setTransition(n, c, s.from.y, n.from);
          n.to = e.effects.setTransition(n, c, s.to.y, n.to)
        }
        if (s.from.x !== s.to.x) {
          n.from = e.effects.setTransition(n, h, s.from.x, n.from);
          n.to = e.effects.setTransition(n, h, s.to.x, n.to)
        }
        n.css(n.from);
        n.animate(n.to, t.duration, t.easing, function() {
          if (d) {
            e.effects.restore(n, f)
          }
        })
      })
    }
    o.animate(o.to, {
      queue: false,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        if (o.to.opacity === 0) {
          o.css("opacity", o.from.opacity)
        }
        if (p === "hide") {
          o.hide()
        }
        e.effects.restore(o, y);
        if (!d) {
          if (g === "static") {
            o.css({
              position: "relative",
              top: o.to.top,
              left: o.to.left
            })
          } else {
            e.each(["top", "left"], function(e, t) {
              o.css(t, function(t, n) {
                var r = parseInt(n, 10),
                  i = e ? o.to.left : o.to.top;
                if (n === "auto") {
                  return i + "px"
                }
                return r + i + "px"
              })
            })
          }
        }
        e.effects.removeWrapper(o);
        n()
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.shake = function(t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      s = e.effects.setMode(r, t.mode || "effect"),
      o = t.direction || "left",
      u = t.distance || 20,
      a = t.times || 3,
      f = a * 2 + 1,
      l = Math.round(t.duration / f),
      c = o === "up" || o === "down" ? "top" : "left",
      h = o === "up" || o === "left",
      p = {},
      d = {},
      v = {},
      m, g = r.queue(),
      y = g.length;
    e.effects.save(r, i);
    r.show();
    e.effects.createWrapper(r);
    p[c] = (h ? "-=" : "+=") + u;
    d[c] = (h ? "+=" : "-=") + u * 2;
    v[c] = (h ? "-=" : "+=") + u * 2;
    r.animate(p, l, t.easing);
    for (m = 1; m < a; m++) {
      r.animate(d, l, t.easing).animate(v, l, t.easing)
    }
    r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function() {
      if (s === "hide") {
        r.hide()
      }
      e.effects.restore(r, i);
      e.effects.removeWrapper(r);
      n()
    });
    if (y > 1) {
      g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1)))
    }
    r.dequeue()
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.slide = function(t, n) {
    var r = e(this),
      i = ["position", "top", "bottom", "left", "right", "width", "height"],
      s = e.effects.setMode(r, t.mode || "show"),
      o = s === "show",
      u = t.direction || "left",
      a = u === "up" || u === "down" ? "top" : "left",
      f = u === "up" || u === "left",
      l, c = {};
    e.effects.save(r, i);
    r.show();
    l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](true);
    e.effects.createWrapper(r).css({
      overflow: "hidden"
    });
    if (o) {
      r.css(a, f ? isNaN(l) ? "-" + l : -l : l)
    }
    c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l;
    r.animate(c, {
      queue: false,
      duration: t.duration,
      easing: t.easing,
      complete: function() {
        if (s === "hide") {
          r.hide()
        }
        e.effects.restore(r, i);
        e.effects.removeWrapper(r);
        n()
      }
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.effect.transfer = function(t, n) {
    var r = e(this),
      i = e(t.to),
      s = i.css("position") === "fixed",
      o = e("body"),
      u = s ? o.scrollTop() : 0,
      a = s ? o.scrollLeft() : 0,
      f = i.offset(),
      l = {
        top: f.top - u,
        left: f.left - a,
        height: i.innerHeight(),
        width: i.innerWidth()
      },
      c = r.offset(),
      h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
        top: c.top - u,
        left: c.left - a,
        height: r.innerHeight(),
        width: r.innerWidth(),
        position: s ? "fixed" : "absolute"
      }).animate(l, t.duration, t.easing, function() {
        h.remove();
        n()
      })
  }
})(jQuery);
(function(e, t) {
  e.widget("ui.menu", {
    version: "1.10.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-carat-1-e"
      },
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function() {
      this.activeMenu = this.element;
      this.mouseHandled = false;
      this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
        role: this.options.role,
        tabIndex: 0
      }).bind("click" + this.eventNamespace, e.proxy(function(e) {
        if (this.options.disabled) {
          e.preventDefault()
        }
      }, this));
      if (this.options.disabled) {
        this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
      }
      this._on({
        "mousedown .ui-menu-item > a": function(e) {
          e.preventDefault()
        },
        "click .ui-state-disabled > a": function(e) {
          e.preventDefault()
        },
        "click .ui-menu-item:has(a)": function(t) {
          var n = e(t.target).closest(".ui-menu-item");
          if (!this.mouseHandled && n.not(".ui-state-disabled").length) {
            this.select(t);
            if (!t.isPropagationStopped()) {
              this.mouseHandled = true
            }
            if (n.has(".ui-menu").length) {
              this.expand(t)
            } else {
              if (!this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length) {
                this.element.trigger("focus", [true]);
                if (this.active && this.active.parents(".ui-menu").length === 1) {
                  clearTimeout(this.timer)
                }
              }
            }
          }
        },
        "mouseenter .ui-menu-item": function(t) {
          var n = e(t.currentTarget);
          n.siblings().children(".ui-state-active").removeClass("ui-state-active");
          this.focus(t, n)
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function(e, t) {
          var n = this.active || this.element.children(".ui-menu-item").eq(0);
          if (!t) {
            this.focus(e, n)
          }
        },
        blur: function(t) {
          this._delay(function() {
            if (!e.contains(this.element[0], this.document[0].activeElement)) {
              this.collapseAll(t)
            }
          })
        },
        keydown: "_keydown"
      });
      this.refresh();
      this._on(this.document, {
        click: function(t) {
          if (!e(t.target).closest(".ui-menu").length) {
            this.collapseAll(t)
          }
          this.mouseHandled = false
        }
      })
    },
    _destroy: function() {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var t = e(this);
        if (t.data("ui-menu-submenu-carat")) {
          t.remove()
        }
      });
      this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    },
    _keydown: function(t) {
      function a(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      }
      var n, r, i, s, o, u = true;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move("first", "first", t);
          break;
        case e.ui.keyCode.END:
          this._move("last", "last", t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          if (this.active && !this.active.is(".ui-state-disabled")) {
            this.expand(t)
          }
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          u = false;
          r = this.previousFilter || "";
          i = String.fromCharCode(t.keyCode);
          s = false;
          clearTimeout(this.filterTimer);
          if (i === r) {
            s = true
          } else {
            i = r + i
          }
          o = new RegExp("^" + a(i), "i");
          n = this.activeMenu.children(".ui-menu-item").filter(function() {
            return o.test(e(this).children("a").text())
          });
          n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n;
          if (!n.length) {
            i = String.fromCharCode(t.keyCode);
            o = new RegExp("^" + a(i), "i");
            n = this.activeMenu.children(".ui-menu-item").filter(function() {
              return o.test(e(this).children("a").text())
            })
          }
          if (n.length) {
            this.focus(t, n);
            if (n.length > 1) {
              this.previousFilter = i;
              this.filterTimer = this._delay(function() {
                delete this.previousFilter
              }, 1000)
            } else {
              delete this.previousFilter
            }
          } else {
            delete this.previousFilter
          }
      }
      if (u) {
        t.preventDefault()
      }
    },
    _activate: function(e) {
      if (!this.active.is(".ui-state-disabled")) {
        if (this.active.children("a[aria-haspopup='true']").length) {
          this.expand(e)
        } else {
          this.select(e)
        }
      }
    },
    refresh: function() {
      var t, n = this.options.icons.submenu,
        r = this.element.find(this.options.menus);
      this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
      r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function() {
        var t = e(this),
          r = t.prev("a"),
          i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", true);
        r.attr("aria-haspopup", "true").prepend(i);
        t.attr("aria-labelledby", r.attr("id"))
      });
      t = r.add(this.element);
      t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
        tabIndex: -1,
        role: this._itemRole()
      });
      t.children(":not(.ui-menu-item)").each(function() {
        var t = e(this);
        if (!/[^\-\u2014\u2013\s]/.test(t.text())) {
          t.addClass("ui-widget-content ui-menu-divider")
        }
      });
      t.children(".ui-state-disabled").attr("aria-disabled", "true");
      if (this.active && !e.contains(this.element[0], this.active[0])) {
        this.blur()
      }
    },
    _itemRole: function() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role]
    },
    _setOption: function(e, t) {
      if (e === "icons") {
        this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu)
      }
      this._super(e, t)
    },
    focus: function(e, t) {
      var n, r;
      this.blur(e, e && e.type === "focus");
      this._scrollIntoView(t);
      this.active = t.first();
      r = this.active.children("a").addClass("ui-state-focus");
      if (this.options.role) {
        this.element.attr("aria-activedescendant", r.attr("id"))
      }
      this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
      if (e && e.type === "keydown") {
        this._close()
      } else {
        this.timer = this._delay(function() {
          this._close()
        }, this.delay)
      }
      n = t.children(".ui-menu");
      if (n.length && e && /^mouse/.test(e.type)) {
        this._startOpening(n)
      }
      this.activeMenu = t.parent();
      this._trigger("focus", e, {
        item: t
      })
    },
    _scrollIntoView: function(t) {
      var n, r, i, s, o, u;
      if (this._hasScroll()) {
        n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0;
        r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0;
        i = t.offset().top - this.activeMenu.offset().top - n - r;
        s = this.activeMenu.scrollTop();
        o = this.activeMenu.height();
        u = t.height();
        if (i < 0) {
          this.activeMenu.scrollTop(s + i)
        } else {
          if (i + u > o) {
            this.activeMenu.scrollTop(s + i - o + u)
          }
        }
      }
    },
    blur: function(e, t) {
      if (!t) {
        clearTimeout(this.timer)
      }
      if (!this.active) {
        return
      }
      this.active.children("a").removeClass("ui-state-focus");
      this.active = null;
      this._trigger("blur", e, {
        item: this.active
      })
    },
    _startOpening: function(e) {
      clearTimeout(this.timer);
      if (e.attr("aria-hidden") !== "true") {
        return
      }
      this.timer = this._delay(function() {
        this._close();
        this._open(e)
      }, this.delay)
    },
    _open: function(t) {
      var n = e.extend({ of: this.active
      }, this.options.position);
      clearTimeout(this.timer);
      this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
      t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
    },
    collapseAll: function(t, n) {
      clearTimeout(this.timer);
      this.timer = this._delay(function() {
        var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
        if (!r.length) {
          r = this.element
        }
        this._close(r);
        this.blur(t);
        this.activeMenu = r
      }, this.delay)
    },
    _close: function(e) {
      if (!e) {
        e = this.active ? this.active.parent() : this.element
      }
      e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    },
    collapse: function(e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      if (t && t.length) {
        this._close();
        this.focus(e, t)
      }
    },
    expand: function(e) {
      var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
      if (t && t.length) {
        this._open(t.parent());
        this._delay(function() {
          this.focus(e, t)
        })
      }
    },
    next: function(e) {
      this._move("next", "first", e)
    },
    previous: function(e) {
      this._move("prev", "last", e)
    },
    isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function(e, t, n) {
      var r;
      if (this.active) {
        if (e === "first" || e === "last") {
          r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
        } else {
          r = this.active[e + "All"](".ui-menu-item").eq(0)
        }
      }
      if (!r || !r.length || !this.active) {
        r = this.activeMenu.children(".ui-menu-item")[t]()
      }
      this.focus(n, r)
    },
    nextPage: function(t) {
      var n, r, i;
      if (!this.active) {
        this.next(t);
        return
      }
      if (this.isLastItem()) {
        return
      }
      if (this._hasScroll()) {
        r = this.active.offset().top;
        i = this.element.height();
        this.active.nextAll(".ui-menu-item").each(function() {
          n = e(this);
          return n.offset().top - r - i < 0
        });
        this.focus(t, n)
      } else {
        this.focus(t, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
      }
    },
    previousPage: function(t) {
      var n, r, i;
      if (!this.active) {
        this.next(t);
        return
      }
      if (this.isFirstItem()) {
        return
      }
      if (this._hasScroll()) {
        r = this.active.offset().top;
        i = this.element.height();
        this.active.prevAll(".ui-menu-item").each(function() {
          n = e(this);
          return n.offset().top - r + i > 0
        });
        this.focus(t, n)
      } else {
        this.focus(t, this.activeMenu.children(".ui-menu-item").first())
      }
    },
    _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var n = {
        item: this.active
      };
      if (!this.active.has(".ui-menu").length) {
        this.collapseAll(t, true)
      }
      this._trigger("select", t, n)
    }
  })
})(jQuery);
(function(e, t) {
  e.widget("ui.progressbar", {
    version: "1.10.4",
    options: {
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function() {
      this.oldValue = this.options.value = this._constrainedValue();
      this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
        role: "progressbar",
        "aria-valuemin": this.min
      });
      this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
      this._refreshValue()
    },
    _destroy: function() {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.valueDiv.remove()
    },
    value: function(e) {
      if (e === t) {
        return this.options.value
      }
      this.options.value = this._constrainedValue(e);
      this._refreshValue()
    },
    _constrainedValue: function(e) {
      if (e === t) {
        e = this.options.value
      }
      this.indeterminate = e === false;
      if (typeof e !== "number") {
        e = 0
      }
      return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, e))
    },
    _setOptions: function(e) {
      var t = e.value;
      delete e.value;
      this._super(e);
      this.options.value = this._constrainedValue(t);
      this._refreshValue()
    },
    _setOption: function(e, t) {
      if (e === "max") {
        t = Math.max(this.min, t)
      }
      this._super(e, t)
    },
    _percentage: function() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    },
    _refreshValue: function() {
      var t = this.options.value,
        n = this._percentage();
      this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%");
      this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
      if (this.indeterminate) {
        this.element.removeAttr("aria-valuenow");
        if (!this.overlayDiv) {
          this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
        }
      } else {
        this.element.attr({
          "aria-valuemax": this.options.max,
          "aria-valuenow": t
        });
        if (this.overlayDiv) {
          this.overlayDiv.remove();
          this.overlayDiv = null
        }
      }
      if (this.oldValue !== t) {
        this.oldValue = t;
        this._trigger("change")
      }
      if (t === this.options.max) {
        this._trigger("complete")
      }
    }
  })
})(jQuery);
(function(e, t) {
  function n(e) {
    return parseInt(e, 10) || 0
  }

  function r(e) {
    return !isNaN(parseInt(e, 10))
  }
  e.widget("ui.resizable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: false,
      animate: false,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: false,
      autoHide: false,
      containment: false,
      ghost: false,
      grid: false,
      handles: "e,s,se",
      helper: false,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _create: function() {
      var t, n, r, i, s, o = this,
        u = this.options;
      this.element.addClass("ui-resizable");
      e.extend(this, {
        _aspectRatio: !!u.aspectRatio,
        aspectRatio: u.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
      });
      if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
        this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        }));
        this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
        this.elementIsWrapper = true;
        this.element.css({
          marginLeft: this.originalElement.css("marginLeft"),
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom")
        });
        this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0
        });
        this.originalResizeStyle = this.originalElement.css("resize");
        this.originalElement.css("resize", "none");
        this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        }));
        this.originalElement.css({
          margin: this.originalElement.css("margin")
        });
        this._proportionallyResize()
      }
      this.handles = u.handles || (!e(".ui-resizable-handle", this.element).length ? "e,s,se" : {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      });
      if (this.handles.constructor === String) {
        if (this.handles === "all") {
          this.handles = "n,e,s,w,se,sw,ne,nw"
        }
        t = this.handles.split(",");
        this.handles = {};
        for (n = 0; n < t.length; n++) {
          r = e.trim(t[n]);
          s = "ui-resizable-" + r;
          i = e("<div class='ui-resizable-handle " + s + "'></div>");
          i.css({
            zIndex: u.zIndex
          });
          if ("se" === r) {
            i.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
          }
          this.handles[r] = ".ui-resizable-" + r;
          this.element.append(i)
        }
      }
      this._renderAxis = function(t) {
        var n, r, i, s;
        t = t || this.element;
        for (n in this.handles) {
          if (this.handles[n].constructor === String) {
            this.handles[n] = e(this.handles[n], this.element).show()
          }
          if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
            r = e(this.handles[n], this.element);
            s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
            i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
            t.css(i, s);
            this._proportionallyResize()
          }
          if (!e(this.handles[n]).length) {
            continue
          }
        }
      };
      this._renderAxis(this.element);
      this._handles = e(".ui-resizable-handle", this.element).disableSelection();
      this._handles.mouseover(function() {
        if (!o.resizing) {
          if (this.className) {
            i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
          }
          o.axis = i && i[1] ? i[1] : "se"
        }
      });
      if (u.autoHide) {
        this._handles.hide();
        e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
          if (u.disabled) {
            return
          }
          e(this).removeClass("ui-resizable-autohide");
          o._handles.show()
        }).mouseleave(function() {
          if (u.disabled) {
            return
          }
          if (!o.resizing) {
            e(this).addClass("ui-resizable-autohide");
            o._handles.hide()
          }
        })
      }
      this._mouseInit()
    },
    _destroy: function() {
      this._mouseDestroy();
      var t, n = function(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
      };
      if (this.elementIsWrapper) {
        n(this.element);
        t = this.element;
        this.originalElement.css({
          position: t.css("position"),
          width: t.outerWidth(),
          height: t.outerHeight(),
          top: t.css("top"),
          left: t.css("left")
        }).insertAfter(t);
        t.remove()
      }
      this.originalElement.css("resize", this.originalResizeStyle);
      n(this.originalElement);
      return this
    },
    _mouseCapture: function(t) {
      var n, r, i = false;
      for (n in this.handles) {
        r = e(this.handles[n])[0];
        if (r === t.target || e.contains(r, t.target)) {
          i = true
        }
      }
      return !this.options.disabled && i
    },
    _mouseStart: function(t) {
      var r, i, s, o = this.options,
        u = this.element.position(),
        a = this.element;
      this.resizing = true;
      if (/absolute/.test(a.css("position"))) {
        a.css({
          position: "absolute",
          top: a.css("top"),
          left: a.css("left")
        })
      } else {
        if (a.is(".ui-draggable")) {
          a.css({
            position: "absolute",
            top: u.top,
            left: u.left
          })
        }
      }
      this._renderProxy();
      r = n(this.helper.css("left"));
      i = n(this.helper.css("top"));
      if (o.containment) {
        r += e(o.containment).scrollLeft() || 0;
        i += e(o.containment).scrollTop() || 0
      }
      this.offset = this.helper.offset();
      this.position = {
        left: r,
        top: i
      };
      this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: a.width(),
        height: a.height()
      };
      this.originalSize = this._helper ? {
        width: a.outerWidth(),
        height: a.outerHeight()
      } : {
        width: a.width(),
        height: a.height()
      };
      this.originalPosition = {
        left: r,
        top: i
      };
      this.sizeDiff = {
        width: a.outerWidth() - a.width(),
        height: a.outerHeight() - a.height()
      };
      this.originalMousePosition = {
        left: t.pageX,
        top: t.pageY
      };
      this.aspectRatio = typeof o.aspectRatio === "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
      s = e(".ui-resizable-" + this.axis).css("cursor");
      e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s);
      a.addClass("ui-resizable-resizing");
      this._propagate("start", t);
      return true
    },
    _mouseDrag: function(t) {
      var n, r = this.helper,
        i = {},
        s = this.originalMousePosition,
        o = this.axis,
        u = this.position.top,
        a = this.position.left,
        f = this.size.width,
        l = this.size.height,
        c = t.pageX - s.left || 0,
        h = t.pageY - s.top || 0,
        p = this._change[o];
      if (!p) {
        return false
      }
      n = p.apply(this, [t, c, h]);
      this._updateVirtualBoundaries(t.shiftKey);
      if (this._aspectRatio || t.shiftKey) {
        n = this._updateRatio(n, t)
      }
      n = this._respectSize(n, t);
      this._updateCache(n);
      this._propagate("resize", t);
      if (this.position.top !== u) {
        i.top = this.position.top + "px"
      }
      if (this.position.left !== a) {
        i.left = this.position.left + "px"
      }
      if (this.size.width !== f) {
        i.width = this.size.width + "px"
      }
      if (this.size.height !== l) {
        i.height = this.size.height + "px"
      }
      r.css(i);
      if (!this._helper && this._proportionallyResizeElements.length) {
        this._proportionallyResize()
      }
      if (!e.isEmptyObject(i)) {
        this._trigger("resize", t, this.ui())
      }
      return false
    },
    _mouseStop: function(t) {
      this.resizing = false;
      var n, r, i, s, o, u, a, f = this.options,
        l = this;
      if (this._helper) {
        n = this._proportionallyResizeElements;
        r = n.length && /textarea/i.test(n[0].nodeName);
        i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height;
        s = r ? 0 : l.sizeDiff.width;
        o = {
          width: l.helper.width() - s,
          height: l.helper.height() - i
        };
        u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null;
        a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null;
        if (!f.animate) {
          this.element.css(e.extend(o, {
            top: a,
            left: u
          }))
        }
        l.helper.height(l.size.height);
        l.helper.width(l.size.width);
        if (this._helper && !f.animate) {
          this._proportionallyResize()
        }
      }
      e("body").css("cursor", "auto");
      this.element.removeClass("ui-resizable-resizing");
      this._propagate("stop", t);
      if (this._helper) {
        this.helper.remove()
      }
      return false
    },
    _updateVirtualBoundaries: function(e) {
      var t, n, i, s, o, u = this.options;
      o = {
        minWidth: r(u.minWidth) ? u.minWidth : 0,
        maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
        minHeight: r(u.minHeight) ? u.minHeight : 0,
        maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity
      };
      if (this._aspectRatio || e) {
        t = o.minHeight * this.aspectRatio;
        i = o.minWidth / this.aspectRatio;
        n = o.maxHeight * this.aspectRatio;
        s = o.maxWidth / this.aspectRatio;
        if (t > o.minWidth) {
          o.minWidth = t
        }
        if (i > o.minHeight) {
          o.minHeight = i
        }
        if (n < o.maxWidth) {
          o.maxWidth = n
        }
        if (s < o.maxHeight) {
          o.maxHeight = s
        }
      }
      this._vBoundaries = o
    },
    _updateCache: function(e) {
      this.offset = this.helper.offset();
      if (r(e.left)) {
        this.position.left = e.left
      }
      if (r(e.top)) {
        this.position.top = e.top
      }
      if (r(e.height)) {
        this.size.height = e.height
      }
      if (r(e.width)) {
        this.size.width = e.width
      }
    },
    _updateRatio: function(e) {
      var t = this.position,
        n = this.size,
        i = this.axis;
      if (r(e.height)) {
        e.width = e.height * this.aspectRatio
      } else {
        if (r(e.width)) {
          e.height = e.width / this.aspectRatio
        }
      }
      if (i === "sw") {
        e.left = t.left + (n.width - e.width);
        e.top = null
      }
      if (i === "nw") {
        e.top = t.top + (n.height - e.height);
        e.left = t.left + (n.width - e.width)
      }
      return e
    },
    _respectSize: function(e) {
      var t = this._vBoundaries,
        n = this.axis,
        i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
        s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
        o = r(e.width) && t.minWidth && t.minWidth > e.width,
        u = r(e.height) && t.minHeight && t.minHeight > e.height,
        a = this.originalPosition.left + this.originalSize.width,
        f = this.position.top + this.size.height,
        l = /sw|nw|w/.test(n),
        c = /nw|ne|n/.test(n);
      if (o) {
        e.width = t.minWidth
      }
      if (u) {
        e.height = t.minHeight
      }
      if (i) {
        e.width = t.maxWidth
      }
      if (s) {
        e.height = t.maxHeight
      }
      if (o && l) {
        e.left = a - t.minWidth
      }
      if (i && l) {
        e.left = a - t.maxWidth
      }
      if (u && c) {
        e.top = f - t.minHeight
      }
      if (s && c) {
        e.top = f - t.maxHeight
      }
      if (!e.width && !e.height && !e.left && e.top) {
        e.top = null
      } else {
        if (!e.width && !e.height && !e.top && e.left) {
          e.left = null
        }
      }
      return e
    },
    _proportionallyResize: function() {
      if (!this._proportionallyResizeElements.length) {
        return
      }
      var e, t, n, r, i, s = this.helper || this.element;
      for (e = 0; e < this._proportionallyResizeElements.length; e++) {
        i = this._proportionallyResizeElements[e];
        if (!this.borderDif) {
          this.borderDif = [];
          n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")];
          r = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
          for (t = 0; t < n.length; t++) {
            this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0)
          }
        }
        i.css({
          height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
        })
      }
    },
    _renderProxy: function() {
      var t = this.element,
        n = this.options;
      this.elementOffset = t.offset();
      if (this._helper) {
        this.helper = this.helper || e("<div style='overflow:hidden;'></div>");
        this.helper.addClass(this._helper).css({
          width: this.element.outerWidth() - 1,
          height: this.element.outerHeight() - 1,
          position: "absolute",
          left: this.elementOffset.left + "px",
          top: this.elementOffset.top + "px",
          zIndex: ++n.zIndex
        });
        this.helper.appendTo("body").disableSelection()
      } else {
        this.helper = this.element
      }
    },
    _change: {
      e: function(e, t) {
        return {
          width: this.originalSize.width + t
        }
      },
      w: function(e, t) {
        var n = this.originalSize,
          r = this.originalPosition;
        return {
          left: r.left + t,
          width: n.width - t
        }
      },
      n: function(e, t, n) {
        var r = this.originalSize,
          i = this.originalPosition;
        return {
          top: i.top + n,
          height: r.height - n
        }
      },
      s: function(e, t, n) {
        return {
          height: this.originalSize.height + n
        }
      },
      se: function(t, n, r) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
      },
      sw: function(t, n, r) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
      },
      ne: function(t, n, r) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
      },
      nw: function(t, n, r) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
      }
    },
    _propagate: function(t, n) {
      e.ui.plugin.call(this, t, [n, this.ui()]);
      t !== "resize" && this._trigger(t, n, this.ui())
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  });
  e.ui.plugin.add("resizable", "animate", {
    stop: function(t) {
      var n = e(this).data("ui-resizable"),
        r = n.options,
        i = n._proportionallyResizeElements,
        s = i.length && /textarea/i.test(i[0].nodeName),
        o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
        u = s ? 0 : n.sizeDiff.width,
        a = {
          width: n.size.width - u,
          height: n.size.height - o
        },
        f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
        l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
      n.element.animate(e.extend(a, l && f ? {
        top: l,
        left: f
      } : {}), {
        duration: r.animateDuration,
        easing: r.animateEasing,
        step: function() {
          var r = {
            width: parseInt(n.element.css("width"), 10),
            height: parseInt(n.element.css("height"), 10),
            top: parseInt(n.element.css("top"), 10),
            left: parseInt(n.element.css("left"), 10)
          };
          if (i && i.length) {
            e(i[0]).css({
              width: r.width,
              height: r.height
            })
          }
          n._updateCache(r);
          n._propagate("resize", t)
        }
      })
    }
  });
  e.ui.plugin.add("resizable", "containment", {
    start: function() {
      var t, r, i, s, o, u, a, f = e(this).data("ui-resizable"),
        l = f.options,
        c = f.element,
        h = l.containment,
        p = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
      if (!p) {
        return
      }
      f.containerElement = e(p);
      if (/document/.test(h) || h === document) {
        f.containerOffset = {
          left: 0,
          top: 0
        };
        f.containerPosition = {
          left: 0,
          top: 0
        };
        f.parentData = {
          element: e(document),
          left: 0,
          top: 0,
          width: e(document).width(),
          height: e(document).height() || document.body.parentNode.scrollHeight
        }
      } else {
        t = e(p);
        r = [];
        e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
          r[e] = n(t.css("padding" + i))
        });
        f.containerOffset = t.offset();
        f.containerPosition = t.position();
        f.containerSize = {
          height: t.innerHeight() - r[3],
          width: t.innerWidth() - r[1]
        };
        i = f.containerOffset;
        s = f.containerSize.height;
        o = f.containerSize.width;
        u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o;
        a = e.ui.hasScroll(p) ? p.scrollHeight : s;
        f.parentData = {
          element: p,
          left: i.left,
          top: i.top,
          width: u,
          height: a
        }
      }
    },
    resize: function(t) {
      var n, r, i, s, o = e(this).data("ui-resizable"),
        u = o.options,
        a = o.containerOffset,
        f = o.position,
        l = o._aspectRatio || t.shiftKey,
        c = {
          top: 0,
          left: 0
        },
        h = o.containerElement;
      if (h[0] !== document && /static/.test(h.css("position"))) {
        c = a
      }
      if (f.left < (o._helper ? a.left : 0)) {
        o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left);
        if (l) {
          o.size.height = o.size.width / o.aspectRatio
        }
        o.position.left = u.helper ? a.left : 0
      }
      if (f.top < (o._helper ? a.top : 0)) {
        o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top);
        if (l) {
          o.size.width = o.size.height * o.aspectRatio
        }
        o.position.top = o._helper ? a.top : 0
      }
      o.offset.left = o.parentData.left + o.position.left;
      o.offset.top = o.parentData.top + o.position.top;
      n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width);
      r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height);
      i = o.containerElement.get(0) === o.element.parent().get(0);
      s = /relative|absolute/.test(o.containerElement.css("position"));
      if (i && s) {
        n -= Math.abs(o.parentData.left)
      }
      if (n + o.size.width >= o.parentData.width) {
        o.size.width = o.parentData.width - n;
        if (l) {
          o.size.height = o.size.width / o.aspectRatio
        }
      }
      if (r + o.size.height >= o.parentData.height) {
        o.size.height = o.parentData.height - r;
        if (l) {
          o.size.width = o.size.height * o.aspectRatio
        }
      }
    },
    stop: function() {
      var t = e(this).data("ui-resizable"),
        n = t.options,
        r = t.containerOffset,
        i = t.containerPosition,
        s = t.containerElement,
        o = e(t.helper),
        u = o.offset(),
        a = o.outerWidth() - t.sizeDiff.width,
        f = o.outerHeight() - t.sizeDiff.height;
      if (t._helper && !n.animate && /relative/.test(s.css("position"))) {
        e(this).css({
          left: u.left - i.left - r.left,
          width: a,
          height: f
        })
      }
      if (t._helper && !n.animate && /static/.test(s.css("position"))) {
        e(this).css({
          left: u.left - i.left - r.left,
          width: a,
          height: f
        })
      }
    }
  });
  e.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
      var t = e(this).data("ui-resizable"),
        n = t.options,
        r = function(t) {
          e(t).each(function() {
            var t = e(this);
            t.data("ui-resizable-alsoresize", {
              width: parseInt(t.width(), 10),
              height: parseInt(t.height(), 10),
              left: parseInt(t.css("left"), 10),
              top: parseInt(t.css("top"), 10)
            })
          })
        };
      if (typeof n.alsoResize === "object" && !n.alsoResize.parentNode) {
        if (n.alsoResize.length) {
          n.alsoResize = n.alsoResize[0];
          r(n.alsoResize)
        } else {
          e.each(n.alsoResize, function(e) {
            r(e)
          })
        }
      } else {
        r(n.alsoResize)
      }
    },
    resize: function(t, n) {
      var r = e(this).data("ui-resizable"),
        i = r.options,
        s = r.originalSize,
        o = r.originalPosition,
        u = {
          height: r.size.height - s.height || 0,
          width: r.size.width - s.width || 0,
          top: r.position.top - o.top || 0,
          left: r.position.left - o.left || 0
        },
        a = function(t, r) {
          e(t).each(function() {
            var t = e(this),
              i = e(this).data("ui-resizable-alsoresize"),
              s = {},
              o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
            e.each(o, function(e, t) {
              var n = (i[t] || 0) + (u[t] || 0);
              if (n && n >= 0) {
                s[t] = n || null
              }
            });
            t.css(s)
          })
        };
      if (typeof i.alsoResize === "object" && !i.alsoResize.nodeType) {
        e.each(i.alsoResize, function(e, t) {
          a(e, t)
        })
      } else {
        a(i.alsoResize)
      }
    },
    stop: function() {
      e(this).removeData("resizable-alsoresize")
    }
  });
  e.ui.plugin.add("resizable", "ghost", {
    start: function() {
      var t = e(this).data("ui-resizable"),
        n = t.options,
        r = t.size;
      t.ghost = t.originalElement.clone();
      t.ghost.css({
        opacity: 0.25,
        display: "block",
        position: "relative",
        height: r.height,
        width: r.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass(typeof n.ghost === "string" ? n.ghost : "");
      t.ghost.appendTo(t.helper)
    },
    resize: function() {
      var t = e(this).data("ui-resizable");
      if (t.ghost) {
        t.ghost.css({
          position: "relative",
          height: t.size.height,
          width: t.size.width
        })
      }
    },
    stop: function() {
      var t = e(this).data("ui-resizable");
      if (t.ghost && t.helper) {
        t.helper.get(0).removeChild(t.ghost.get(0))
      }
    }
  });
  e.ui.plugin.add("resizable", "grid", {
    resize: function() {
      var t = e(this).data("ui-resizable"),
        n = t.options,
        r = t.size,
        i = t.originalSize,
        s = t.originalPosition,
        o = t.axis,
        u = typeof n.grid === "number" ? [n.grid, n.grid] : n.grid,
        a = u[0] || 1,
        f = u[1] || 1,
        l = Math.round((r.width - i.width) / a) * a,
        c = Math.round((r.height - i.height) / f) * f,
        h = i.width + l,
        p = i.height + c,
        d = n.maxWidth && n.maxWidth < h,
        v = n.maxHeight && n.maxHeight < p,
        m = n.minWidth && n.minWidth > h,
        g = n.minHeight && n.minHeight > p;
      n.grid = u;
      if (m) {
        h = h + a
      }
      if (g) {
        p = p + f
      }
      if (d) {
        h = h - a
      }
      if (v) {
        p = p - f
      }
      if (/^(se|s|e)$/.test(o)) {
        t.size.width = h;
        t.size.height = p
      } else {
        if (/^(ne)$/.test(o)) {
          t.size.width = h;
          t.size.height = p;
          t.position.top = s.top - c
        } else {
          if (/^(sw)$/.test(o)) {
            t.size.width = h;
            t.size.height = p;
            t.position.left = s.left - l
          } else {
            if (p - f > 0) {
              t.size.height = p;
              t.position.top = s.top - c
            } else {
              t.size.height = f;
              t.position.top = s.top + i.height - f
            }
            if (h - a > 0) {
              t.size.width = h;
              t.position.left = s.left - l
            } else {
              t.size.width = a;
              t.position.left = s.left + i.width - a
            }
          }
        }
      }
    }
  })
})(jQuery);
(function(e, t) {
  e.widget("ui.selectable", e.ui.mouse, {
    version: "1.10.4",
    options: {
      appendTo: "body",
      autoRefresh: true,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function() {
      var t, n = this;
      this.element.addClass("ui-selectable");
      this.dragged = false;
      this.refresh = function() {
        t = e(n.options.filter, n.element[0]);
        t.addClass("ui-selectee");
        t.each(function() {
          var t = e(this),
            n = t.offset();
          e.data(this, "selectable-item", {
            element: this,
            $element: t,
            left: n.left,
            top: n.top,
            right: n.left + t.outerWidth(),
            bottom: n.top + t.outerHeight(),
            startselected: false,
            selected: t.hasClass("ui-selected"),
            selecting: t.hasClass("ui-selecting"),
            unselecting: t.hasClass("ui-unselecting")
          })
        })
      };
      this.refresh();
      this.selectees = t.addClass("ui-selectee");
      this._mouseInit();
      this.helper = e("<div class='ui-selectable-helper'></div>")
    },
    _destroy: function() {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item");
      this.element.removeClass("ui-selectable ui-selectable-disabled");
      this._mouseDestroy()
    },
    _mouseStart: function(t) {
      var n = this,
        r = this.options;
      this.opos = [t.pageX, t.pageY];
      if (this.options.disabled) {
        return
      }
      this.selectees = e(r.filter, this.element[0]);
      this._trigger("start", t);
      e(r.appendTo).append(this.helper);
      this.helper.css({
        left: t.pageX,
        top: t.pageY,
        width: 0,
        height: 0
      });
      if (r.autoRefresh) {
        this.refresh()
      }
      this.selectees.filter(".ui-selected").each(function() {
        var r = e.data(this, "selectable-item");
        r.startselected = true;
        if (!t.metaKey && !t.ctrlKey) {
          r.$element.removeClass("ui-selected");
          r.selected = false;
          r.$element.addClass("ui-unselecting");
          r.unselecting = true;
          n._trigger("unselecting", t, {
            unselecting: r.element
          })
        }
      });
      e(t.target).parents().addBack().each(function() {
        var r, i = e.data(this, "selectable-item");
        if (i) {
          r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected");
          i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting");
          i.unselecting = !r;
          i.selecting = r;
          i.selected = r;
          if (r) {
            n._trigger("selecting", t, {
              selecting: i.element
            })
          } else {
            n._trigger("unselecting", t, {
              unselecting: i.element
            })
          }
          return false
        }
      })
    },
    _mouseDrag: function(t) {
      this.dragged = true;
      if (this.options.disabled) {
        return
      }
      var n, r = this,
        i = this.options,
        s = this.opos[0],
        o = this.opos[1],
        u = t.pageX,
        a = t.pageY;
      if (s > u) {
        n = u;
        u = s;
        s = n
      }
      if (o > a) {
        n = a;
        a = o;
        o = n
      }
      this.helper.css({
        left: s,
        top: o,
        width: u - s,
        height: a - o
      });
      this.selectees.each(function() {
        var n = e.data(this, "selectable-item"),
          f = false;
        if (!n || n.element === r.element[0]) {
          return
        }
        if (i.tolerance === "touch") {
          f = !(n.left > u || n.right < s || n.top > a || n.bottom < o)
        } else {
          if (i.tolerance === "fit") {
            f = n.left > s && n.right < u && n.top > o && n.bottom < a
          }
        }
        if (f) {
          if (n.selected) {
            n.$element.removeClass("ui-selected");
            n.selected = false
          }
          if (n.unselecting) {
            n.$element.removeClass("ui-unselecting");
            n.unselecting = false
          }
          if (!n.selecting) {
            n.$element.addClass("ui-selecting");
            n.selecting = true;
            r._trigger("selecting", t, {
              selecting: n.element
            })
          }
        } else {
          if (n.selecting) {
            if ((t.metaKey || t.ctrlKey) && n.startselected) {
              n.$element.removeClass("ui-selecting");
              n.selecting = false;
              n.$element.addClass("ui-selected");
              n.selected = true
            } else {
              n.$element.removeClass("ui-selecting");
              n.selecting = false;
              if (n.startselected) {
                n.$element.addClass("ui-unselecting");
                n.unselecting = true
              }
              r._trigger("unselecting", t, {
                unselecting: n.element
              })
            }
          }
          if (n.selected) {
            if (!t.metaKey && !t.ctrlKey && !n.startselected) {
              n.$element.removeClass("ui-selected");
              n.selected = false;
              n.$element.addClass("ui-unselecting");
              n.unselecting = true;
              r._trigger("unselecting", t, {
                unselecting: n.element
              })
            }
          }
        }
      });
      return false
    },
    _mouseStop: function(t) {
      var n = this;
      this.dragged = false;
      e(".ui-unselecting", this.element[0]).each(function() {
        var r = e.data(this, "selectable-item");
        r.$element.removeClass("ui-unselecting");
        r.unselecting = false;
        r.startselected = false;
        n._trigger("unselected", t, {
          unselected: r.element
        })
      });
      e(".ui-selecting", this.element[0]).each(function() {
        var r = e.data(this, "selectable-item");
        r.$element.removeClass("ui-selecting").addClass("ui-selected");
        r.selecting = false;
        r.selected = true;
        r.startselected = true;
        n._trigger("selected", t, {
          selected: r.element
        })
      });
      this._trigger("stop", t);
      this.helper.remove();
      return false
    }
  })
})(jQuery);
(function(e, t) {
  var n = 5;
  e.widget("ui.slider", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "slide",
    options: {
      animate: false,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: false,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    _create: function() {
      this._keySliding = false;
      this._mouseSliding = false;
      this._animateOff = true;
      this._handleIndex = null;
      this._detectOrientation();
      this._mouseInit();
      this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
      this._refresh();
      this._setOption("disabled", this.options.disabled);
      this._animateOff = false
    },
    _refresh: function() {
      this._createRange();
      this._createHandles();
      this._setupEvents();
      this._refreshValue()
    },
    _createHandles: function() {
      var t, n, r = this.options,
        i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
        s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
        o = [];
      n = r.values && r.values.length || 1;
      if (i.length > n) {
        i.slice(n).remove();
        i = i.slice(0, n)
      }
      for (t = i.length; t < n; t++) {
        o.push(s)
      }
      this.handles = i.add(e(o.join("")).appendTo(this.element));
      this.handle = this.handles.eq(0);
      this.handles.each(function(t) {
        e(this).data("ui-slider-handle-index", t)
      })
    },
    _createRange: function() {
      var t = this.options,
        n = "";
      if (t.range) {
        if (t.range === true) {
          if (!t.values) {
            t.values = [this._valueMin(), this._valueMin()]
          } else {
            if (t.values.length && t.values.length !== 2) {
              t.values = [t.values[0], t.values[0]]
            } else {
              if (e.isArray(t.values)) {
                t.values = t.values.slice(0)
              }
            }
          }
        }
        if (!this.range || !this.range.length) {
          this.range = e("<div></div>").appendTo(this.element);
          n = "ui-slider-range ui-widget-header ui-corner-all"
        } else {
          this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
            left: "",
            bottom: ""
          })
        }
        this.range.addClass(n + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))
      } else {
        if (this.range) {
          this.range.remove()
        }
        this.range = null
      }
    },
    _setupEvents: function() {
      var e = this.handles.add(this.range).filter("a");
      this._off(e);
      this._on(e, this._handleEvents);
      this._hoverable(e);
      this._focusable(e)
    },
    _destroy: function() {
      this.handles.remove();
      if (this.range) {
        this.range.remove()
      }
      this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
      this._mouseDestroy()
    },
    _mouseCapture: function(t) {
      var n, r, i, s, o, u, a, f, l = this,
        c = this.options;
      if (c.disabled) {
        return false
      }
      this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      };
      this.elementOffset = this.element.offset();
      n = {
        x: t.pageX,
        y: t.pageY
      };
      r = this._normValueFromMouse(n);
      i = this._valueMax() - this._valueMin() + 1;
      this.handles.each(function(t) {
        var n = Math.abs(r - l.values(t));
        if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) {
          i = n;
          s = e(this);
          o = t
        }
      });
      u = this._start(t, o);
      if (u === false) {
        return false
      }
      this._mouseSliding = true;
      this._handleIndex = o;
      s.addClass("ui-state-active").focus();
      a = s.offset();
      f = !e(t.target).parents().addBack().is(".ui-slider-handle");
      this._clickOffset = f ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - a.left - s.width() / 2,
        top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
      };
      if (!this.handles.hasClass("ui-state-hover")) {
        this._slide(t, o, r)
      }
      this._animateOff = true;
      return true
    },
    _mouseStart: function() {
      return true
    },
    _mouseDrag: function(e) {
      var t = {
          x: e.pageX,
          y: e.pageY
        },
        n = this._normValueFromMouse(t);
      this._slide(e, this._handleIndex, n);
      return false
    },
    _mouseStop: function(e) {
      this.handles.removeClass("ui-state-active");
      this._mouseSliding = false;
      this._stop(e, this._handleIndex);
      this._change(e, this._handleIndex);
      this._handleIndex = null;
      this._clickOffset = null;
      this._animateOff = false;
      return false
    },
    _detectOrientation: function() {
      this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(e) {
      var t, n, r, i, s;
      if (this.orientation === "horizontal") {
        t = this.elementSize.width;
        n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
      } else {
        t = this.elementSize.height;
        n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
      }
      r = n / t;
      if (r > 1) {
        r = 1
      }
      if (r < 0) {
        r = 0
      }
      if (this.orientation === "vertical") {
        r = 1 - r
      }
      i = this._valueMax() - this._valueMin();
      s = this._valueMin() + r * i;
      return this._trimAlignValue(s)
    },
    _start: function(e, t) {
      var n = {
        handle: this.handles[t],
        value: this.value()
      };
      if (this.options.values && this.options.values.length) {
        n.value = this.values(t);
        n.values = this.values()
      }
      return this._trigger("start", e, n)
    },
    _slide: function(e, t, n) {
      var r, i, s;
      if (this.options.values && this.options.values.length) {
        r = this.values(t ? 0 : 1);
        if (this.options.values.length === 2 && this.options.range === true && (t === 0 && n > r || t === 1 && n < r)) {
          n = r
        }
        if (n !== this.values(t)) {
          i = this.values();
          i[t] = n;
          s = this._trigger("slide", e, {
            handle: this.handles[t],
            value: n,
            values: i
          });
          r = this.values(t ? 0 : 1);
          if (s !== false) {
            this.values(t, n)
          }
        }
      } else {
        if (n !== this.value()) {
          s = this._trigger("slide", e, {
            handle: this.handles[t],
            value: n
          });
          if (s !== false) {
            this.value(n)
          }
        }
      }
    },
    _stop: function(e, t) {
      var n = {
        handle: this.handles[t],
        value: this.value()
      };
      if (this.options.values && this.options.values.length) {
        n.value = this.values(t);
        n.values = this.values()
      }
      this._trigger("stop", e, n)
    },
    _change: function(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var n = {
          handle: this.handles[t],
          value: this.value()
        };
        if (this.options.values && this.options.values.length) {
          n.value = this.values(t);
          n.values = this.values()
        }
        this._lastChangedValue = t;
        this._trigger("change", e, n)
      }
    },
    value: function(e) {
      if (arguments.length) {
        this.options.value = this._trimAlignValue(e);
        this._refreshValue();
        this._change(null, 0);
        return
      }
      return this._value()
    },
    values: function(t, n) {
      var r, i, s;
      if (arguments.length > 1) {
        this.options.values[t] = this._trimAlignValue(n);
        this._refreshValue();
        this._change(null, t);
        return
      }
      if (arguments.length) {
        if (e.isArray(arguments[0])) {
          r = this.options.values;
          i = arguments[0];
          for (s = 0; s < r.length; s += 1) {
            r[s] = this._trimAlignValue(i[s]);
            this._change(null, s)
          }
          this._refreshValue()
        } else {
          if (this.options.values && this.options.values.length) {
            return this._values(t)
          } else {
            return this.value()
          }
        }
      } else {
        return this._values()
      }
    },
    _setOption: function(t, n) {
      var r, i = 0;
      if (t === "range" && this.options.range === true) {
        if (n === "min") {
          this.options.value = this._values(0);
          this.options.values = null
        } else {
          if (n === "max") {
            this.options.value = this._values(this.options.values.length - 1);
            this.options.values = null
          }
        }
      }
      if (e.isArray(this.options.values)) {
        i = this.options.values.length
      }
      e.Widget.prototype._setOption.apply(this, arguments);
      switch (t) {
        case "orientation":
          this._detectOrientation();
          this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
          this._refreshValue();
          break;
        case "value":
          this._animateOff = true;
          this._refreshValue();
          this._change(null, 0);
          this._animateOff = false;
          break;
        case "values":
          this._animateOff = true;
          this._refreshValue();
          for (r = 0; r < i; r += 1) {
            this._change(null, r)
          }
          this._animateOff = false;
          break;
        case "min":
        case "max":
          this._animateOff = true;
          this._refreshValue();
          this._animateOff = false;
          break;
        case "range":
          this._animateOff = true;
          this._refresh();
          this._animateOff = false;
          break
      }
    },
    _value: function() {
      var e = this.options.value;
      e = this._trimAlignValue(e);
      return e
    },
    _values: function(e) {
      var t, n, r;
      if (arguments.length) {
        t = this.options.values[e];
        t = this._trimAlignValue(t);
        return t
      } else {
        if (this.options.values && this.options.values.length) {
          n = this.options.values.slice();
          for (r = 0; r < n.length; r += 1) {
            n[r] = this._trimAlignValue(n[r])
          }
          return n
        } else {
          return []
        }
      }
    },
    _trimAlignValue: function(e) {
      if (e <= this._valueMin()) {
        return this._valueMin()
      }
      if (e >= this._valueMax()) {
        return this._valueMax()
      }
      var t = this.options.step > 0 ? this.options.step : 1,
        n = (e - this._valueMin()) % t,
        r = e - n;
      if (Math.abs(n) * 2 >= t) {
        r += n > 0 ? t : -t
      }
      return parseFloat(r.toFixed(5))
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.options.max
    },
    _refreshValue: function() {
      var t, n, r, i, s, o = this.options.range,
        u = this.options,
        a = this,
        f = !this._animateOff ? u.animate : false,
        l = {};
      if (this.options.values && this.options.values.length) {
        this.handles.each(function(r) {
          n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100;
          l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%";
          e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate);
          if (a.options.range === true) {
            if (a.orientation === "horizontal") {
              if (r === 0) {
                a.range.stop(1, 1)[f ? "animate" : "css"]({
                  left: n + "%"
                }, u.animate)
              }
              if (r === 1) {
                a.range[f ? "animate" : "css"]({
                  width: n - t + "%"
                }, {
                  queue: false,
                  duration: u.animate
                })
              }
            } else {
              if (r === 0) {
                a.range.stop(1, 1)[f ? "animate" : "css"]({
                  bottom: n + "%"
                }, u.animate)
              }
              if (r === 1) {
                a.range[f ? "animate" : "css"]({
                  height: n - t + "%"
                }, {
                  queue: false,
                  duration: u.animate
                })
              }
            }
          }
          t = n
        })
      } else {
        r = this.value();
        i = this._valueMin();
        s = this._valueMax();
        n = s !== i ? (r - i) / (s - i) * 100 : 0;
        l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%";
        this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate);
        if (o === "min" && this.orientation === "horizontal") {
          this.range.stop(1, 1)[f ? "animate" : "css"]({
            width: n + "%"
          }, u.animate)
        }
        if (o === "max" && this.orientation === "horizontal") {
          this.range[f ? "animate" : "css"]({
            width: 100 - n + "%"
          }, {
            queue: false,
            duration: u.animate
          })
        }
        if (o === "min" && this.orientation === "vertical") {
          this.range.stop(1, 1)[f ? "animate" : "css"]({
            height: n + "%"
          }, u.animate)
        }
        if (o === "max" && this.orientation === "vertical") {
          this.range[f ? "animate" : "css"]({
            height: 100 - n + "%"
          }, {
            queue: false,
            duration: u.animate
          })
        }
      }
    },
    _handleEvents: {
      keydown: function(t) {
        var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            t.preventDefault();
            if (!this._keySliding) {
              this._keySliding = true;
              e(t.target).addClass("ui-state-active");
              r = this._start(t, u);
              if (r === false) {
                return
              }
            }
            break
        }
        o = this.options.step;
        if (this.options.values && this.options.values.length) {
          i = s = this.values(u)
        } else {
          i = s = this.value()
        }
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
            s = this._valueMin();
            break;
          case e.ui.keyCode.END:
            s = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (i === this._valueMax()) {
              return
            }
            s = this._trimAlignValue(i + o);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (i === this._valueMin()) {
              return
            }
            s = this._trimAlignValue(i - o);
            break
        }
        this._slide(t, u, s)
      },
      click: function(e) {
        e.preventDefault()
      },
      keyup: function(t) {
        var n = e(t.target).data("ui-slider-handle-index");
        if (this._keySliding) {
          this._keySliding = false;
          this._stop(t, n);
          this._change(t, n);
          e(t.target).removeClass("ui-state-active")
        }
      }
    }
  })
})(jQuery);
(function(e, t) {
  function n(e, t, n) {
    return e > t && e < t + n
  }

  function r(e) {
    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
  }
  e.widget("ui.sortable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "sort",
    ready: false,
    options: {
      appendTo: "parent",
      axis: false,
      connectWith: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      dropOnEmpty: true,
      forcePlaceholderSize: false,
      forceHelperSize: false,
      grid: false,
      handle: false,
      helper: "original",
      items: "> *",
      opacity: false,
      placeholder: false,
      revert: false,
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1000,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function() {
      var e = this.options;
      this.containerCache = {};
      this.element.addClass("ui-sortable");
      this.refresh();
      this.floating = this.items.length ? e.axis === "x" || r(this.items[0].item) : false;
      this.offset = this.element.offset();
      this._mouseInit();
      this.ready = true
    },
    _destroy: function() {
      this.element.removeClass("ui-sortable ui-sortable-disabled");
      this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) {
        this.items[e].item.removeData(this.widgetName + "-item")
      }
      return this
    },
    _setOption: function(t, n) {
      if (t === "disabled") {
        this.options[t] = n;
        this.widget().toggleClass("ui-sortable-disabled", !!n)
      } else {
        e.Widget.prototype._setOption.apply(this, arguments)
      }
    },
    _mouseCapture: function(t, n) {
      var r = null,
        i = false,
        s = this;
      if (this.reverting) {
        return false
      }
      if (this.options.disabled || this.options.type === "static") {
        return false
      }
      this._refreshItems(t);
      e(t.target).parents().each(function() {
        if (e.data(this, s.widgetName + "-item") === s) {
          r = e(this);
          return false
        }
      });
      if (e.data(t.target, s.widgetName + "-item") === s) {
        r = e(t.target)
      }
      if (!r) {
        return false
      }
      if (this.options.handle && !n) {
        e(this.options.handle, r).find("*").addBack().each(function() {
          if (this === t.target) {
            i = true
          }
        });
        if (!i) {
          return false
        }
      }
      this.currentItem = r;
      this._removeCurrentsFromItems();
      return true
    },
    _mouseStart: function(t, n, r) {
      var i, s, o = this.options;
      this.currentContainer = this;
      this.refreshPositions();
      this.helper = this._createHelper(t);
      this._cacheHelperProportions();
      this._cacheMargins();
      this.scrollParent = this.helper.scrollParent();
      this.offset = this.currentItem.offset();
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      };
      e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      });
      this.helper.css("position", "absolute");
      this.cssPosition = this.helper.css("position");
      this.originalPosition = this._generatePosition(t);
      this.originalPageX = t.pageX;
      this.originalPageY = t.pageY;
      o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
      this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      };
      if (this.helper[0] !== this.currentItem[0]) {
        this.currentItem.hide()
      }
      this._createPlaceholder();
      if (o.containment) {
        this._setContainment()
      }
      if (o.cursor && o.cursor !== "auto") {
        s = this.document.find("body");
        this.storedCursor = s.css("cursor");
        s.css("cursor", o.cursor);
        this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)
      }
      if (o.opacity) {
        if (this.helper.css("opacity")) {
          this._storedOpacity = this.helper.css("opacity")
        }
        this.helper.css("opacity", o.opacity)
      }
      if (o.zIndex) {
        if (this.helper.css("zIndex")) {
          this._storedZIndex = this.helper.css("zIndex")
        }
        this.helper.css("zIndex", o.zIndex)
      }
      if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
        this.overflowOffset = this.scrollParent.offset()
      }
      this._trigger("start", t, this._uiHash());
      if (!this._preserveHelperProportions) {
        this._cacheHelperProportions()
      }
      if (!r) {
        for (i = this.containers.length - 1; i >= 0; i--) {
          this.containers[i]._trigger("activate", t, this._uiHash(this))
        }
      }
      if (e.ui.ddmanager) {
        e.ui.ddmanager.current = this
      }
      if (e.ui.ddmanager && !o.dropBehaviour) {
        e.ui.ddmanager.prepareOffsets(this, t)
      }
      this.dragging = true;
      this.helper.addClass("ui-sortable-helper");
      this._mouseDrag(t);
      return true
    },
    _mouseDrag: function(t) {
      var n, r, i, s, o = this.options,
        u = false;
      this.position = this._generatePosition(t);
      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.lastPositionAbs) {
        this.lastPositionAbs = this.positionAbs
      }
      if (this.options.scroll) {
        if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
          if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity) {
            this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed
          } else {
            if (t.pageY - this.overflowOffset.top < o.scrollSensitivity) {
              this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed
            }
          }
          if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity) {
            this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed
          } else {
            if (t.pageX - this.overflowOffset.left < o.scrollSensitivity) {
              this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed
            }
          }
        } else {
          if (t.pageY - e(document).scrollTop() < o.scrollSensitivity) {
            u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed)
          } else {
            if (e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity) {
              u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)
            }
          }
          if (t.pageX - e(document).scrollLeft() < o.scrollSensitivity) {
            u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed)
          } else {
            if (e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity) {
              u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed)
            }
          }
        }
        if (u !== false && e.ui.ddmanager && !o.dropBehaviour) {
          e.ui.ddmanager.prepareOffsets(this, t)
        }
      }
      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.options.axis || this.options.axis !== "y") {
        this.helper[0].style.left = this.position.left + "px"
      }
      if (!this.options.axis || this.options.axis !== "x") {
        this.helper[0].style.top = this.position.top + "px"
      }
      for (n = this.items.length - 1; n >= 0; n--) {
        r = this.items[n];
        i = r.item[0];
        s = this._intersectsWithPointer(r);
        if (!s) {
          continue
        }
        if (r.instance !== this.currentContainer) {
          continue
        }
        if (i !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && (this.options.type === "semi-dynamic" ? !e.contains(this.element[0], i) : true)) {
          this.direction = s === 1 ? "down" : "up";
          if (this.options.tolerance === "pointer" || this._intersectsWithSides(r)) {
            this._rearrange(t, r)
          } else {
            break
          }
          this._trigger("change", t, this._uiHash());
          break
        }
      }
      this._contactContainers(t);
      if (e.ui.ddmanager) {
        e.ui.ddmanager.drag(this, t)
      }
      this._trigger("sort", t, this._uiHash());
      this.lastPositionAbs = this.positionAbs;
      return false
    },
    _mouseStop: function(t, n) {
      if (!t) {
        return
      }
      if (e.ui.ddmanager && !this.options.dropBehaviour) {
        e.ui.ddmanager.drop(this, t)
      }
      if (this.options.revert) {
        var r = this,
          i = this.placeholder.offset(),
          s = this.options.axis,
          o = {};
        if (!s || s === "x") {
          o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
        }
        if (!s || s === "y") {
          o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
        }
        this.reverting = true;
        e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
          r._clear(t)
        })
      } else {
        this._clear(t, n)
      }
      return false
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp({
          target: null
        });
        if (this.options.helper === "original") {
          this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else {
          this.currentItem.show()
        }
        for (var t = this.containers.length - 1; t >= 0; t--) {
          this.containers[t]._trigger("deactivate", null, this._uiHash(this));
          if (this.containers[t].containerCache.over) {
            this.containers[t]._trigger("out", null, this._uiHash(this));
            this.containers[t].containerCache.over = 0
          }
        }
      }
      if (this.placeholder) {
        if (this.placeholder[0].parentNode) {
          this.placeholder[0].parentNode.removeChild(this.placeholder[0])
        }
        if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
          this.helper.remove()
        }
        e.extend(this, {
          helper: null,
          dragging: false,
          reverting: false,
          _noFinalSort: null
        });
        if (this.domPosition.prev) {
          e(this.domPosition.prev).after(this.currentItem)
        } else {
          e(this.domPosition.parent).prepend(this.currentItem)
        }
      }
      return this
    },
    serialize: function(t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      t = t || {};
      e(n).each(function() {
        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
        if (n) {
          r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
        }
      });
      if (!r.length && t.key) {
        r.push(t.key + "=")
      }
      return r.join("&")
    },
    toArray: function(t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      t = t || {};
      n.each(function() {
        r.push(e(t.item || this).attr(t.attribute || "id") || "")
      });
      return r
    },
    _intersectsWith: function(e) {
      var t = this.positionAbs.left,
        n = t + this.helperProportions.width,
        r = this.positionAbs.top,
        i = r + this.helperProportions.height,
        s = e.left,
        o = s + e.width,
        u = e.top,
        a = u + e.height,
        f = this.offset.click.top,
        l = this.offset.click.left,
        c = this.options.axis === "x" || r + f > u && r + f < a,
        h = this.options.axis === "y" || t + l > s && t + l < o,
        p = c && h;
      if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"]) {
        return p
      } else {
        return s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
      }
    },
    _intersectsWithPointer: function(e) {
      var t = this.options.axis === "x" || n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
        r = this.options.axis === "y" || n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
        i = t && r,
        s = this._getDragVerticalDirection(),
        o = this._getDragHorizontalDirection();
      if (!i) {
        return false
      }
      return this.floating ? o && o === "right" || s === "down" ? 2 : 1 : s && (s === "down" ? 2 : 1)
    },
    _intersectsWithSides: function(e) {
      var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
        r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
        i = this._getDragVerticalDirection(),
        s = this._getDragHorizontalDirection();
      if (this.floating && s) {
        return s === "right" && r || s === "left" && !r
      } else {
        return i && (i === "down" && t || i === "up" && !t)
      }
    },
    _getDragVerticalDirection: function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return e !== 0 && (e > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return e !== 0 && (e > 0 ? "right" : "left")
    },
    refresh: function(e) {
      this._refreshItems(e);
      this.refreshPositions();
      return this
    },
    _connectWith: function() {
      var e = this.options;
      return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
    },
    _getItemsAsjQuery: function(t) {
      function f() {
        o.push(this)
      }
      var n, r, i, s, o = [],
        u = [],
        a = this._connectWith();
      if (a && t) {
        for (n = a.length - 1; n >= 0; n--) {
          i = e(a[n]);
          for (r = i.length - 1; r >= 0; r--) {
            s = e.data(i[r], this.widgetFullName);
            if (s && s !== this && !s.options.disabled) {
              u.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s])
            }
          }
        }
      }
      u.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
      for (n = u.length - 1; n >= 0; n--) {
        u[n][0].each(f)
      }
      return e(o)
    },
    _removeCurrentsFromItems: function() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function(e) {
        for (var n = 0; n < t.length; n++) {
          if (t[n] === e.item[0]) {
            return false
          }
        }
        return true
      })
    },
    _refreshItems: function(t) {
      this.items = [];
      this.containers = [this];
      var n, r, i, s, o, u, a, f, l = this.items,
        c = [
          [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
            item: this.currentItem
          }) : e(this.options.items, this.element), this]
        ],
        h = this._connectWith();
      if (h && this.ready) {
        for (n = h.length - 1; n >= 0; n--) {
          i = e(h[n]);
          for (r = i.length - 1; r >= 0; r--) {
            s = e.data(i[r], this.widgetFullName);
            if (s && s !== this && !s.options.disabled) {
              c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                item: this.currentItem
              }) : e(s.options.items, s.element), s]);
              this.containers.push(s)
            }
          }
        }
      }
      for (n = c.length - 1; n >= 0; n--) {
        o = c[n][1];
        u = c[n][0];
        for (r = 0, f = u.length; r < f; r++) {
          a = e(u[r]);
          a.data(this.widgetName + "-item", o);
          l.push({
            item: a,
            instance: o,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          })
        }
      }
    },
    refreshPositions: function(t) {
      if (this.offsetParent && this.helper) {
        this.offset.parent = this._getParentOffset()
      }
      var n, r, i, s;
      for (n = this.items.length - 1; n >= 0; n--) {
        r = this.items[n];
        if (r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) {
          continue
        }
        i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
        if (!t) {
          r.width = i.outerWidth();
          r.height = i.outerHeight()
        }
        s = i.offset();
        r.left = s.left;
        r.top = s.top
      }
      if (this.options.custom && this.options.custom.refreshContainers) {
        this.options.custom.refreshContainers.call(this)
      } else {
        for (n = this.containers.length - 1; n >= 0; n--) {
          s = this.containers[n].element.offset();
          this.containers[n].containerCache.left = s.left;
          this.containers[n].containerCache.top = s.top;
          this.containers[n].containerCache.width = this.containers[n].element.outerWidth();
          this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
        }
      }
      return this
    },
    _createPlaceholder: function(t) {
      t = t || this;
      var n, r = t.options;
      if (!r.placeholder || r.placeholder.constructor === String) {
        n = r.placeholder;
        r.placeholder = {
          element: function() {
            var r = t.currentItem[0].nodeName.toLowerCase(),
              i = e("<" + r + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            if (r === "tr") {
              t.currentItem.children().each(function() {
                e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
              })
            } else {
              if (r === "img") {
                i.attr("src", t.currentItem.attr("src"))
              }
            }
            if (!n) {
              i.css("visibility", "hidden")
            }
            return i
          },
          update: function(e, i) {
            if (n && !r.forcePlaceholderSize) {
              return
            }
            if (!i.height()) {
              i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10))
            }
            if (!i.width()) {
              i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
            }
          }
        }
      }
      t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem));
      t.currentItem.after(t.placeholder);
      r.placeholder.update(t, t.placeholder)
    },
    _contactContainers: function(t) {
      var i, s, o, u, a, f, l, c, h, p, d = null,
        v = null;
      for (i = this.containers.length - 1; i >= 0; i--) {
        if (e.contains(this.currentItem[0], this.containers[i].element[0])) {
          continue
        }
        if (this._intersectsWith(this.containers[i].containerCache)) {
          if (d && e.contains(this.containers[i].element[0], d.element[0])) {
            continue
          }
          d = this.containers[i];
          v = i
        } else {
          if (this.containers[i].containerCache.over) {
            this.containers[i]._trigger("out", t, this._uiHash(this));
            this.containers[i].containerCache.over = 0
          }
        }
      }
      if (!d) {
        return
      }
      if (this.containers.length === 1) {
        if (!this.containers[v].containerCache.over) {
          this.containers[v]._trigger("over", t, this._uiHash(this));
          this.containers[v].containerCache.over = 1
        }
      } else {
        o = 10000;
        u = null;
        p = d.floating || r(this.currentItem);
        a = p ? "left" : "top";
        f = p ? "width" : "height";
        l = this.positionAbs[a] + this.offset.click[a];
        for (s = this.items.length - 1; s >= 0; s--) {
          if (!e.contains(this.containers[v].element[0], this.items[s].item[0])) {
            continue
          }
          if (this.items[s].item[0] === this.currentItem[0]) {
            continue
          }
          if (p && !n(this.positionAbs.top + this.offset.click.top, this.items[s].top, this.items[s].height)) {
            continue
          }
          c = this.items[s].item.offset()[a];
          h = false;
          if (Math.abs(c - l) > Math.abs(c + this.items[s][f] - l)) {
            h = true;
            c += this.items[s][f]
          }
          if (Math.abs(c - l) < o) {
            o = Math.abs(c - l);
            u = this.items[s];
            this.direction = h ? "up" : "down"
          }
        }
        if (!u && !this.options.dropOnEmpty) {
          return
        }
        if (this.currentContainer === this.containers[v]) {
          return
        }
        u ? this._rearrange(t, u, null, true) : this._rearrange(t, null, this.containers[v].element, true);
        this._trigger("change", t, this._uiHash());
        this.containers[v]._trigger("change", t, this._uiHash(this));
        this.currentContainer = this.containers[v];
        this.options.placeholder.update(this.currentContainer, this.placeholder);
        this.containers[v]._trigger("over", t, this._uiHash(this));
        this.containers[v].containerCache.over = 1
      }
    },
    _createHelper: function(t) {
      var n = this.options,
        r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper === "clone" ? this.currentItem.clone() : this.currentItem;
      if (!r.parents("body").length) {
        e(n.appendTo !== "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0])
      }
      if (r[0] === this.currentItem[0]) {
        this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left")
        }
      }
      if (!r[0].style.width || n.forceHelperSize) {
        r.width(this.currentItem.width())
      }
      if (!r[0].style.height || n.forceHelperSize) {
        r.height(this.currentItem.height())
      }
      return r
    },
    _adjustOffsetFromHelper: function(t) {
      if (typeof t === "string") {
        t = t.split(" ")
      }
      if (e.isArray(t)) {
        t = {
          left: +t[0],
          top: +t[1] || 0
        }
      }
      if ("left" in t) {
        this.offset.click.left = t.left + this.margins.left
      }
      if ("right" in t) {
        this.offset.click.left = this.helperProportions.width - t.right + this.margins.left
      }
      if ("top" in t) {
        this.offset.click.top = t.top + this.margins.top
      }
      if ("bottom" in t) {
        this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top
      }
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) {
        t.left += this.scrollParent.scrollLeft();
        t.top += this.scrollParent.scrollTop()
      }
      if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) {
        t = {
          top: 0,
          left: 0
        }
      }
      return {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if (this.cssPosition === "relative") {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      } else {
        return {
          top: 0,
          left: 0
        }
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var t, n, r, i = this.options;
      if (i.containment === "parent") {
        i.containment = this.helper[0].parentNode
      }
      if (i.containment === "document" || i.containment === "window") {
        this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
      }
      if (!/^(document|window|parent)$/.test(i.containment)) {
        t = e(i.containment)[0];
        n = e(i.containment).offset();
        r = e(t).css("overflow") !== "hidden";
        this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
      }
    },
    _convertPositionTo: function(t, n) {
      if (!n) {
        n = this.position
      }
      var r = t === "absolute" ? 1 : -1,
        i = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        s = /(html|body)/i.test(i[0].tagName);
      return {
        top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
        left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
      }
    },
    _generatePosition: function(t) {
      var n, r, i = this.options,
        s = t.pageX,
        o = t.pageY,
        u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        a = /(html|body)/i.test(u[0].tagName);
      if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
        this.offset.relative = this._getRelativeOffset()
      }
      if (this.originalPosition) {
        if (this.containment) {
          if (t.pageX - this.offset.click.left < this.containment[0]) {
            s = this.containment[0] + this.offset.click.left
          }
          if (t.pageY - this.offset.click.top < this.containment[1]) {
            o = this.containment[1] + this.offset.click.top
          }
          if (t.pageX - this.offset.click.left > this.containment[2]) {
            s = this.containment[2] + this.offset.click.left
          }
          if (t.pageY - this.offset.click.top > this.containment[3]) {
            o = this.containment[3] + this.offset.click.top
          }
        }
        if (i.grid) {
          n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1];
          o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n;
          r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0];
          s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r
        }
      }
      return {
        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
        left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
      }
    },
    _rearrange: function(e, t, n, r) {
      n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
      this.counter = this.counter ? ++this.counter : 1;
      var i = this.counter;
      this._delay(function() {
        if (i === this.counter) {
          this.refreshPositions(!r)
        }
      })
    },
    _clear: function(e, t) {
      function i(e, t, n) {
        return function(r) {
          n._trigger(e, r, t._uiHash(t))
        }
      }
      this.reverting = false;
      var n, r = [];
      if (!this._noFinalSort && this.currentItem.parent().length) {
        this.placeholder.before(this.currentItem)
      }
      this._noFinalSort = null;
      if (this.helper[0] === this.currentItem[0]) {
        for (n in this._storedCSS) {
          if (this._storedCSS[n] === "auto" || this._storedCSS[n] === "static") {
            this._storedCSS[n] = ""
          }
        }
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
      } else {
        this.currentItem.show()
      }
      if (this.fromOutside && !t) {
        r.push(function(e) {
          this._trigger("receive", e, this._uiHash(this.fromOutside))
        })
      }
      if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t) {
        r.push(function(e) {
          this._trigger("update", e, this._uiHash())
        })
      }
      if (this !== this.currentContainer) {
        if (!t) {
          r.push(function(e) {
            this._trigger("remove", e, this._uiHash())
          });
          r.push(function(e) {
            return function(t) {
              e._trigger("receive", t, this._uiHash(this))
            }
          }.call(this, this.currentContainer));
          r.push(function(e) {
            return function(t) {
              e._trigger("update", t, this._uiHash(this))
            }
          }.call(this, this.currentContainer))
        }
      }
      for (n = this.containers.length - 1; n >= 0; n--) {
        if (!t) {
          r.push(i("deactivate", this, this.containers[n]))
        }
        if (this.containers[n].containerCache.over) {
          r.push(i("out", this, this.containers[n]));
          this.containers[n].containerCache.over = 0
        }
      }
      if (this.storedCursor) {
        this.document.find("body").css("cursor", this.storedCursor);
        this.storedStylesheet.remove()
      }
      if (this._storedOpacity) {
        this.helper.css("opacity", this._storedOpacity)
      }
      if (this._storedZIndex) {
        this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
      }
      this.dragging = false;
      if (this.cancelHelperRemoval) {
        if (!t) {
          this._trigger("beforeStop", e, this._uiHash());
          for (n = 0; n < r.length; n++) {
            r[n].call(this, e)
          }
          this._trigger("stop", e, this._uiHash())
        }
        this.fromOutside = false;
        return false
      }
      if (!t) {
        this._trigger("beforeStop", e, this._uiHash())
      }
      this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
      if (this.helper[0] !== this.currentItem[0]) {
        this.helper.remove()
      }
      this.helper = null;
      if (!t) {
        for (n = 0; n < r.length; n++) {
          r[n].call(this, e)
        }
        this._trigger("stop", e, this._uiHash())
      }
      this.fromOutside = false;
      return true
    },
    _trigger: function() {
      if (e.Widget.prototype._trigger.apply(this, arguments) === false) {
        this.cancel()
      }
    },
    _uiHash: function(t) {
      var n = t || this;
      return {
        helper: n.helper,
        placeholder: n.placeholder || e([]),
        position: n.position,
        originalPosition: n.originalPosition,
        offset: n.positionAbs,
        item: n.currentItem,
        sender: t ? t.element : null
      }
    }
  })
})(jQuery);
(function(e) {
  function t(e) {
    return function() {
      var t = this.element.val();
      e.apply(this, arguments);
      this._refresh();
      if (t !== this.element.val()) {
        this._trigger("change")
      }
    }
  }
  e.widget("ui.spinner", {
    version: "1.10.4",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: true,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function() {
      this._setOption("max", this.options.max);
      this._setOption("min", this.options.min);
      this._setOption("step", this.options.step);
      if (this.value() !== "") {
        this._value(this.element.val(), true)
      }
      this._draw();
      this._on(this._events);
      this._refresh();
      this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _getCreateOptions: function() {
      var t = {},
        n = this.element;
      e.each(["min", "max", "step"], function(e, r) {
        var i = n.attr(r);
        if (i !== undefined && i.length) {
          t[r] = i
        }
      });
      return t
    },
    _events: {
      keydown: function(e) {
        if (this._start(e) && this._keydown(e)) {
          e.preventDefault()
        }
      },
      keyup: "_stop",
      focus: function() {
        this.previous = this.element.val()
      },
      blur: function(e) {
        if (this.cancelBlur) {
          delete this.cancelBlur;
          return
        }
        this._stop();
        this._refresh();
        if (this.previous !== this.element.val()) {
          this._trigger("change", e)
        }
      },
      mousewheel: function(e, t) {
        if (!t) {
          return
        }
        if (!this.spinning && !this._start(e)) {
          return false
        }
        this._spin((t > 0 ? 1 : -1) * this.options.step, e);
        clearTimeout(this.mousewheelTimer);
        this.mousewheelTimer = this._delay(function() {
          if (this.spinning) {
            this._stop(e)
          }
        }, 100);
        e.preventDefault()
      },
      "mousedown .ui-spinner-button": function(t) {
        function r() {
          var e = this.element[0] === this.document[0].activeElement;
          if (!e) {
            this.element.focus();
            this.previous = n;
            this._delay(function() {
              this.previous = n
            })
          }
        }
        var n;
        n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
        t.preventDefault();
        r.call(this);
        this.cancelBlur = true;
        this._delay(function() {
          delete this.cancelBlur;
          r.call(this)
        });
        if (this._start(t) === false) {
          return
        }
        this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function(t) {
        if (!e(t.currentTarget).hasClass("ui-state-active")) {
          return
        }
        if (this._start(t) === false) {
          return false
        }
        this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _draw: function() {
      var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
      this.element.attr("role", "spinbutton");
      this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
      if (this.buttons.height() > Math.ceil(e.height() * 0.5) && e.height() > 0) {
        e.height(e.height())
      }
      if (this.options.disabled) {
        this.disable()
      }
    },
    _keydown: function(t) {
      var n = this.options,
        r = e.ui.keyCode;
      switch (t.keyCode) {
        case r.UP:
          this._repeat(null, 1, t);
          return true;
        case r.DOWN:
          this._repeat(null, -1, t);
          return true;
        case r.PAGE_UP:
          this._repeat(null, n.page, t);
          return true;
        case r.PAGE_DOWN:
          this._repeat(null, -n.page, t);
          return true
      }
      return false
    },
    _uiSpinnerHtml: function() {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
    },
    _buttonHtml: function() {
      return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
    },
    _start: function(e) {
      if (!this.spinning && this._trigger("start", e) === false) {
        return false
      }
      if (!this.counter) {
        this.counter = 1
      }
      this.spinning = true;
      return true
    },
    _repeat: function(e, t, n) {
      e = e || 500;
      clearTimeout(this.timer);
      this.timer = this._delay(function() {
        this._repeat(40, t, n)
      }, e);
      this._spin(t * this.options.step, n)
    },
    _spin: function(e, t) {
      var n = this.value() || 0;
      if (!this.counter) {
        this.counter = 1
      }
      n = this._adjustValue(n + e * this._increment(this.counter));
      if (!this.spinning || this._trigger("spin", t, {
          value: n
        }) !== false) {
        this._value(n);
        this.counter++
      }
    },
    _increment: function(t) {
      var n = this.options.incremental;
      if (n) {
        return e.isFunction(n) ? n(t) : Math.floor(t * t * t / 50000 - t * t / 500 + 17 * t / 200 + 1)
      }
      return 1
    },
    _precision: function() {
      var e = this._precisionOf(this.options.step);
      if (this.options.min !== null) {
        e = Math.max(e, this._precisionOf(this.options.min))
      }
      return e
    },
    _precisionOf: function(e) {
      var t = e.toString(),
        n = t.indexOf(".");
      return n === -1 ? 0 : t.length - n - 1
    },
    _adjustValue: function(e) {
      var t, n, r = this.options;
      t = r.min !== null ? r.min : 0;
      n = e - t;
      n = Math.round(n / r.step) * r.step;
      e = t + n;
      e = parseFloat(e.toFixed(this._precision()));
      if (r.max !== null && e > r.max) {
        return r.max
      }
      if (r.min !== null && e < r.min) {
        return r.min
      }
      return e
    },
    _stop: function(e) {
      if (!this.spinning) {
        return
      }
      clearTimeout(this.timer);
      clearTimeout(this.mousewheelTimer);
      this.counter = 0;
      this.spinning = false;
      this._trigger("stop", e)
    },
    _setOption: function(e, t) {
      if (e === "culture" || e === "numberFormat") {
        var n = this._parse(this.element.val());
        this.options[e] = t;
        this.element.val(this._format(n));
        return
      }
      if (e === "max" || e === "min" || e === "step") {
        if (typeof t === "string") {
          t = this._parse(t)
        }
      }
      if (e === "icons") {
        this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up);
        this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)
      }
      this._super(e, t);
      if (e === "disabled") {
        if (t) {
          this.element.prop("disabled", true);
          this.buttons.button("disable")
        } else {
          this.element.prop("disabled", false);
          this.buttons.button("enable")
        }
      }
    },
    _setOptions: t(function(e) {
      this._super(e);
      this._value(this.element.val())
    }),
    _parse: function(e) {
      if (typeof e === "string" && e !== "") {
        e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e
      }
      return e === "" || isNaN(e) ? null : e
    },
    _format: function(e) {
      if (e === "") {
        return ""
      }
      return window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
    },
    _refresh: function() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      })
    },
    _value: function(e, t) {
      var n;
      if (e !== "") {
        n = this._parse(e);
        if (n !== null) {
          if (!t) {
            n = this._adjustValue(n)
          }
          e = this._format(n)
        }
      }
      this.element.val(e);
      this._refresh()
    },
    _destroy: function() {
      this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.uiSpinner.replaceWith(this.element)
    },
    stepUp: t(function(e) {
      this._stepUp(e)
    }),
    _stepUp: function(e) {
      if (this._start()) {
        this._spin((e || 1) * this.options.step);
        this._stop()
      }
    },
    stepDown: t(function(e) {
      this._stepDown(e)
    }),
    _stepDown: function(e) {
      if (this._start()) {
        this._spin((e || 1) * -this.options.step);
        this._stop()
      }
    },
    pageUp: t(function(e) {
      this._stepUp((e || 1) * this.options.page)
    }),
    pageDown: t(function(e) {
      this._stepDown((e || 1) * this.options.page)
    }),
    value: function(e) {
      if (!arguments.length) {
        return this._parse(this.element.val())
      }
      t(this._value).call(this, e)
    },
    widget: function() {
      return this.uiSpinner
    }
  })
})(jQuery);
(function(e, t) {
  function i() {
    return ++n
  }

  function s(e) {
    e = e.cloneNode(false);
    return e.hash.length > 1 && decodeURIComponent(e.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
  }
  var n = 0,
    r = /#.*$/;
  e.widget("ui.tabs", {
    version: "1.10.4",
    delay: 300,
    options: {
      active: null,
      collapsible: false,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _create: function() {
      var t = this,
        n = this.options;
      this.running = false;
      this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
        if (e(this).is(".ui-state-disabled")) {
          t.preventDefault()
        }
      }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
        if (e(this).closest("li").is(".ui-state-disabled")) {
          this.blur()
        }
      });
      this._processTabs();
      n.active = this._initialActive();
      if (e.isArray(n.disabled)) {
        n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
          return t.tabs.index(e)
        }))).sort()
      }
      if (this.options.active !== false && this.anchors.length) {
        this.active = this._findActive(n.active)
      } else {
        this.active = e()
      }
      this._refresh();
      if (this.active.length) {
        this.load(n.active)
      }
    },
    _initialActive: function() {
      var t = this.options.active,
        n = this.options.collapsible,
        r = location.hash.substring(1);
      if (t === null) {
        if (r) {
          this.tabs.each(function(n, i) {
            if (e(i).attr("aria-controls") === r) {
              t = n;
              return false
            }
          })
        }
        if (t === null) {
          t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
        }
        if (t === null || t === -1) {
          t = this.tabs.length ? 0 : false
        }
      }
      if (t !== false) {
        t = this.tabs.index(this.tabs.eq(t));
        if (t === -1) {
          t = n ? false : 0
        }
      }
      if (!n && t === false && this.anchors.length) {
        t = 0
      }
      return t
    },
    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: !this.active.length ? e() : this._getPanelForTab(this.active)
      }
    },
    _tabKeydown: function(t) {
      var n = e(this.document[0].activeElement).closest("li"),
        r = this.tabs.index(n),
        i = true;
      if (this._handlePageNav(t)) {
        return
      }
      switch (t.keyCode) {
        case e.ui.keyCode.RIGHT:
        case e.ui.keyCode.DOWN:
          r++;
          break;
        case e.ui.keyCode.UP:
        case e.ui.keyCode.LEFT:
          i = false;
          r--;
          break;
        case e.ui.keyCode.END:
          r = this.anchors.length - 1;
          break;
        case e.ui.keyCode.HOME:
          r = 0;
          break;
        case e.ui.keyCode.SPACE:
          t.preventDefault();
          clearTimeout(this.activating);
          this._activate(r);
          return;
        case e.ui.keyCode.ENTER:
          t.preventDefault();
          clearTimeout(this.activating);
          this._activate(r === this.options.active ? false : r);
          return;
        default:
          return
      }
      t.preventDefault();
      clearTimeout(this.activating);
      r = this._focusNextTab(r, i);
      if (!t.ctrlKey) {
        n.attr("aria-selected", "false");
        this.tabs.eq(r).attr("aria-selected", "true");
        this.activating = this._delay(function() {
          this.option("active", r)
        }, this.delay)
      }
    },
    _panelKeydown: function(t) {
      if (this._handlePageNav(t)) {
        return
      }
      if (t.ctrlKey && t.keyCode === e.ui.keyCode.UP) {
        t.preventDefault();
        this.active.focus()
      }
    },
    _handlePageNav: function(t) {
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) {
        this._activate(this._focusNextTab(this.options.active - 1, false));
        return true
      }
      if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) {
        this._activate(this._focusNextTab(this.options.active + 1, true));
        return true
      }
    },
    _findNextTab: function(t, n) {
      function i() {
        if (t > r) {
          t = 0
        }
        if (t < 0) {
          t = r
        }
        return t
      }
      var r = this.tabs.length - 1;
      while (e.inArray(i(), this.options.disabled) !== -1) {
        t = n ? t + 1 : t - 1
      }
      return t
    },
    _focusNextTab: function(e, t) {
      e = this._findNextTab(e, t);
      this.tabs.eq(e).focus();
      return e
    },
    _setOption: function(e, t) {
      if (e === "active") {
        this._activate(t);
        return
      }
      if (e === "disabled") {
        this._setupDisabled(t);
        return
      }
      this._super(e, t);
      if (e === "collapsible") {
        this.element.toggleClass("ui-tabs-collapsible", t);
        if (!t && this.options.active === false) {
          this._activate(0)
        }
      }
      if (e === "event") {
        this._setupEvents(t)
      }
      if (e === "heightStyle") {
        this._setupHeightStyle(t)
      }
    },
    _tabId: function(e) {
      return e.attr("aria-controls") || "ui-tabs-" + i()
    },
    _sanitizeSelector: function(e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    },
    refresh: function() {
      var t = this.options,
        n = this.tablist.children(":has(a[href])");
      t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
        return n.index(e)
      });
      this._processTabs();
      if (t.active === false || !this.anchors.length) {
        t.active = false;
        this.active = e()
      } else {
        if (this.active.length && !e.contains(this.tablist[0], this.active[0])) {
          if (this.tabs.length === t.disabled.length) {
            t.active = false;
            this.active = e()
          } else {
            this._activate(this._findNextTab(Math.max(0, t.active - 1), false))
          }
        } else {
          t.active = this.tabs.index(this.active)
        }
      }
      this._refresh()
    },
    _refresh: function() {
      this._setupDisabled(this.options.disabled);
      this._setupEvents(this.options.event);
      this._setupHeightStyle(this.options.heightStyle);
      this.tabs.not(this.active).attr({
        "aria-selected": "false",
        tabIndex: -1
      });
      this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-expanded": "false",
        "aria-hidden": "true"
      });
      if (!this.active.length) {
        this.tabs.eq(0).attr("tabIndex", 0)
      } else {
        this.active.addClass("ui-tabs-active ui-state-active").attr({
          "aria-selected": "true",
          tabIndex: 0
        });
        this._getPanelForTab(this.active).show().attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        })
      }
    },
    _processTabs: function() {
      var t = this;
      this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
      this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
        role: "tab",
        tabIndex: -1
      });
      this.anchors = this.tabs.map(function() {
        return e("a", this)[0]
      }).addClass("ui-tabs-anchor").attr({
        role: "presentation",
        tabIndex: -1
      });
      this.panels = e();
      this.anchors.each(function(n, r) {
        var i, o, u, a = e(r).uniqueId().attr("id"),
          f = e(r).closest("li"),
          l = f.attr("aria-controls");
        if (s(r)) {
          i = r.hash;
          o = t.element.find(t._sanitizeSelector(i))
        } else {
          u = t._tabId(f);
          i = "#" + u;
          o = t.element.find(i);
          if (!o.length) {
            o = t._createPanel(u);
            o.insertAfter(t.panels[n - 1] || t.tablist)
          }
          o.attr("aria-live", "polite")
        }
        if (o.length) {
          t.panels = t.panels.add(o)
        }
        if (l) {
          f.data("ui-tabs-aria-controls", l)
        }
        f.attr({
          "aria-controls": i.substring(1),
          "aria-labelledby": a
        });
        o.attr("aria-labelledby", a)
      });
      this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
    },
    _getList: function() {
      return this.tablist || this.element.find("ol,ul").eq(0)
    },
    _createPanel: function(t) {
      return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
    },
    _setupDisabled: function(t) {
      if (e.isArray(t)) {
        if (!t.length) {
          t = false
        } else {
          if (t.length === this.anchors.length) {
            t = true
          }
        }
      }
      for (var n = 0, r; r = this.tabs[n]; n++) {
        if (t === true || e.inArray(n, t) !== -1) {
          e(r).addClass("ui-state-disabled").attr("aria-disabled", "true")
        } else {
          e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled")
        }
      }
      this.options.disabled = t
    },
    _setupEvents: function(t) {
      var n = {
        click: function(e) {
          e.preventDefault()
        }
      };
      if (t) {
        e.each(t.split(" "), function(e, t) {
          n[t] = "_eventHandler"
        })
      }
      this._off(this.anchors.add(this.tabs).add(this.panels));
      this._on(this.anchors, n);
      this._on(this.tabs, {
        keydown: "_tabKeydown"
      });
      this._on(this.panels, {
        keydown: "_panelKeydown"
      });
      this._focusable(this.tabs);
      this._hoverable(this.tabs)
    },
    _setupHeightStyle: function(t) {
      var n, r = this.element.parent();
      if (t === "fill") {
        n = r.height();
        n -= this.element.outerHeight() - this.element.height();
        this.element.siblings(":visible").each(function() {
          var t = e(this),
            r = t.css("position");
          if (r === "absolute" || r === "fixed") {
            return
          }
          n -= t.outerHeight(true)
        });
        this.element.children().not(this.panels).each(function() {
          n -= e(this).outerHeight(true)
        });
        this.panels.each(function() {
          e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
        }).css("overflow", "auto")
      } else {
        if (t === "auto") {
          n = 0;
          this.panels.each(function() {
            n = Math.max(n, e(this).height("").height())
          }).height(n)
        }
      }
    },
    _eventHandler: function(t) {
      var n = this.options,
        r = this.active,
        i = e(t.currentTarget),
        s = i.closest("li"),
        o = s[0] === r[0],
        u = o && n.collapsible,
        a = u ? e() : this._getPanelForTab(s),
        f = !r.length ? e() : this._getPanelForTab(r),
        l = {
          oldTab: r,
          oldPanel: f,
          newTab: u ? e() : s,
          newPanel: a
        };
      t.preventDefault();
      if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === false) {
        return
      }
      n.active = u ? false : this.tabs.index(s);
      this.active = o ? e() : s;
      if (this.xhr) {
        this.xhr.abort()
      }
      if (!f.length && !a.length) {
        e.error("jQuery UI Tabs: Mismatching fragment identifier.")
      }
      if (a.length) {
        this.load(this.tabs.index(s), t)
      }
      this._toggle(t, l)
    },
    _toggle: function(t, n) {
      function o() {
        r.running = false;
        r._trigger("activate", t, n)
      }

      function u() {
        n.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
        if (i.length && r.options.show) {
          r._show(i, r.options.show, o)
        } else {
          i.show();
          o()
        }
      }
      var r = this,
        i = n.newPanel,
        s = n.oldPanel;
      this.running = true;
      if (s.length && this.options.hide) {
        this._hide(s, this.options.hide, function() {
          n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
          u()
        })
      } else {
        n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
        s.hide();
        u()
      }
      s.attr({
        "aria-expanded": "false",
        "aria-hidden": "true"
      });
      n.oldTab.attr("aria-selected", "false");
      if (i.length && s.length) {
        n.oldTab.attr("tabIndex", -1)
      } else {
        if (i.length) {
          this.tabs.filter(function() {
            return e(this).attr("tabIndex") === 0
          }).attr("tabIndex", -1)
        }
      }
      i.attr({
        "aria-expanded": "true",
        "aria-hidden": "false"
      });
      n.newTab.attr({
        "aria-selected": "true",
        tabIndex: 0
      })
    },
    _activate: function(t) {
      var n, r = this._findActive(t);
      if (r[0] === this.active[0]) {
        return
      }
      if (!r.length) {
        r = this.active
      }
      n = r.find(".ui-tabs-anchor")[0];
      this._eventHandler({
        target: n,
        currentTarget: n,
        preventDefault: e.noop
      })
    },
    _findActive: function(t) {
      return t === false ? e() : this.tabs.eq(t)
    },
    _getIndex: function(e) {
      if (typeof e === "string") {
        e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))
      }
      return e
    },
    _destroy: function() {
      if (this.xhr) {
        this.xhr.abort()
      }
      this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
      this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
      this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
      this.tabs.add(this.panels).each(function() {
        if (e.data(this, "ui-tabs-destroy")) {
          e(this).remove()
        } else {
          e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
        }
      });
      this.tabs.each(function() {
        var t = e(this),
          n = t.data("ui-tabs-aria-controls");
        if (n) {
          t.attr("aria-controls", n).removeData("ui-tabs-aria-controls")
        } else {
          t.removeAttr("aria-controls")
        }
      });
      this.panels.show();
      if (this.options.heightStyle !== "content") {
        this.panels.css("height", "")
      }
    },
    enable: function(n) {
      var r = this.options.disabled;
      if (r === false) {
        return
      }
      if (n === t) {
        r = false
      } else {
        n = this._getIndex(n);
        if (e.isArray(r)) {
          r = e.map(r, function(e) {
            return e !== n ? e : null
          })
        } else {
          r = e.map(this.tabs, function(e, t) {
            return t !== n ? t : null
          })
        }
      }
      this._setupDisabled(r)
    },
    disable: function(n) {
      var r = this.options.disabled;
      if (r === true) {
        return
      }
      if (n === t) {
        r = true
      } else {
        n = this._getIndex(n);
        if (e.inArray(n, r) !== -1) {
          return
        }
        if (e.isArray(r)) {
          r = e.merge([n], r).sort()
        } else {
          r = [n]
        }
      }
      this._setupDisabled(r)
    },
    load: function(t, n) {
      t = this._getIndex(t);
      var r = this,
        i = this.tabs.eq(t),
        o = i.find(".ui-tabs-anchor"),
        u = this._getPanelForTab(i),
        a = {
          tab: i,
          panel: u
        };
      if (s(o[0])) {
        return
      }
      this.xhr = e.ajax(this._ajaxSettings(o, n, a));
      if (this.xhr && this.xhr.statusText !== "canceled") {
        i.addClass("ui-tabs-loading");
        u.attr("aria-busy", "true");
        this.xhr.success(function(e) {
          setTimeout(function() {
            u.html(e);
            r._trigger("load", n, a)
          }, 1)
        }).complete(function(e, t) {
          setTimeout(function() {
            if (t === "abort") {
              r.panels.stop(false, true)
            }
            i.removeClass("ui-tabs-loading");
            u.removeAttr("aria-busy");
            if (e === r.xhr) {
              delete r.xhr
            }
          }, 1)
        })
      }
    },
    _ajaxSettings: function(t, n, r) {
      var i = this;
      return {
        url: t.attr("href"),
        beforeSend: function(t, s) {
          return i._trigger("beforeLoad", n, e.extend({
            jqXHR: t,
            ajaxSettings: s
          }, r))
        }
      }
    },
    _getPanelForTab: function(t) {
      var n = e(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + n))
    }
  })
})(jQuery);
(function(e) {
  function n(t, n) {
    var r = (t.attr("aria-describedby") || "").split(/\s+/);
    r.push(n);
    t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
  }

  function r(t) {
    var n = t.data("ui-tooltip-id"),
      r = (t.attr("aria-describedby") || "").split(/\s+/),
      i = e.inArray(n, r);
    if (i !== -1) {
      r.splice(i, 1)
    }
    t.removeData("ui-tooltip-id");
    r = e.trim(r.join(" "));
    if (r) {
      t.attr("aria-describedby", r)
    } else {
      t.removeAttr("aria-describedby")
    }
  }
  var t = 0;
  e.widget("ui.tooltip", {
    version: "1.10.4",
    options: {
      content: function() {
        var t = e(this).attr("title") || "";
        return e("<a>").text(t).html()
      },
      hide: true,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: true,
      tooltipClass: null,
      track: false,
      close: null,
      open: null
    },
    _create: function() {
      this._on({
        mouseover: "open",
        focusin: "open"
      });
      this.tooltips = {};
      this.parents = {};
      if (this.options.disabled) {
        this._disable()
      }
    },
    _setOption: function(t, n) {
      var r = this;
      if (t === "disabled") {
        this[n ? "_disable" : "_enable"]();
        this.options[t] = n;
        return
      }
      this._super(t, n);
      if (t === "content") {
        e.each(this.tooltips, function(e, t) {
          r._updateContent(t)
        })
      }
    },
    _disable: function() {
      var t = this;
      e.each(this.tooltips, function(n, r) {
        var i = e.Event("blur");
        i.target = i.currentTarget = r[0];
        t.close(i, true)
      });
      this.element.find(this.options.items).addBack().each(function() {
        var t = e(this);
        if (t.is("[title]")) {
          t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
        }
      })
    },
    _enable: function() {
      this.element.find(this.options.items).addBack().each(function() {
        var t = e(this);
        if (t.data("ui-tooltip-title")) {
          t.attr("title", t.data("ui-tooltip-title"))
        }
      })
    },
    open: function(t) {
      var n = this,
        r = e(t ? t.target : this.element).closest(this.options.items);
      if (!r.length || r.data("ui-tooltip-id")) {
        return
      }
      if (r.attr("title")) {
        r.data("ui-tooltip-title", r.attr("title"))
      }
      r.data("ui-tooltip-open", true);
      if (t && t.type === "mouseover") {
        r.parents().each(function() {
          var t = e(this),
            r;
          if (t.data("ui-tooltip-open")) {
            r = e.Event("blur");
            r.target = r.currentTarget = this;
            n.close(r, true)
          }
          if (t.attr("title")) {
            t.uniqueId();
            n.parents[this.id] = {
              element: this,
              title: t.attr("title")
            };
            t.attr("title", "")
          }
        })
      }
      this._updateContent(r, t)
    },
    _updateContent: function(e, t) {
      var n, r = this.options.content,
        i = this,
        s = t ? t.type : null;
      if (typeof r === "string") {
        return this._open(t, e, r)
      }
      n = r.call(e[0], function(n) {
        if (!e.data("ui-tooltip-open")) {
          return
        }
        i._delay(function() {
          if (t) {
            t.type = s
          }
          this._open(t, e, n)
        })
      });
      if (n) {
        this._open(t, e, n)
      }
    },
    _open: function(t, r, i) {
      function f(e) {
        a.of = e;
        if (s.is(":hidden")) {
          return
        }
        s.position(a)
      }
      var s, o, u, a = e.extend({}, this.options.position);
      if (!i) {
        return
      }
      s = this._find(r);
      if (s.length) {
        s.find(".ui-tooltip-content").html(i);
        return
      }
      if (r.is("[title]")) {
        if (t && t.type === "mouseover") {
          r.attr("title", "")
        } else {
          r.removeAttr("title")
        }
      }
      s = this._tooltip(r);
      n(r, s.attr("id"));
      s.find(".ui-tooltip-content").html(i);
      if (this.options.track && t && /^mouse/.test(t.type)) {
        this._on(this.document, {
          mousemove: f
        });
        f(t)
      } else {
        s.position(e.extend({ of: r
        }, this.options.position))
      }
      s.hide();
      this._show(s, this.options.show);
      if (this.options.show && this.options.show.delay) {
        u = this.delayedShow = setInterval(function() {
          if (s.is(":visible")) {
            f(a.of);
            clearInterval(u)
          }
        }, e.fx.interval)
      }
      this._trigger("open", t, {
        tooltip: s
      });
      o = {
        keyup: function(t) {
          if (t.keyCode === e.ui.keyCode.ESCAPE) {
            var n = e.Event(t);
            n.currentTarget = r[0];
            this.close(n, true)
          }
        },
        remove: function() {
          this._removeTooltip(s)
        }
      };
      if (!t || t.type === "mouseover") {
        o.mouseleave = "close"
      }
      if (!t || t.type === "focusin") {
        o.focusout = "close"
      }
      this._on(true, r, o)
    },
    close: function(t) {
      var n = this,
        i = e(t ? t.currentTarget : this.element),
        s = this._find(i);
      if (this.closing) {
        return
      }
      clearInterval(this.delayedShow);
      if (i.data("ui-tooltip-title")) {
        i.attr("title", i.data("ui-tooltip-title"))
      }
      r(i);
      s.stop(true);
      this._hide(s, this.options.hide, function() {
        n._removeTooltip(e(this))
      });
      i.removeData("ui-tooltip-open");
      this._off(i, "mouseleave focusout keyup");
      if (i[0] !== this.element[0]) {
        this._off(i, "remove")
      }
      this._off(this.document, "mousemove");
      if (t && t.type === "mouseleave") {
        e.each(this.parents, function(t, r) {
          e(r.element).attr("title", r.title);
          delete n.parents[t]
        })
      }
      this.closing = true;
      this._trigger("close", t, {
        tooltip: s
      });
      this.closing = false
    },
    _tooltip: function(n) {
      var r = "ui-tooltip-" + t++,
        i = e("<div>").attr({
          id: r,
          role: "tooltip"
        }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
      e("<div>").addClass("ui-tooltip-content").appendTo(i);
      i.appendTo(this.document[0].body);
      this.tooltips[r] = n;
      return i
    },
    _find: function(t) {
      var n = t.data("ui-tooltip-id");
      return n ? e("#" + n) : e()
    },
    _removeTooltip: function(e) {
      e.remove();
      delete this.tooltips[e.attr("id")]
    },
    _destroy: function() {
      var t = this;
      e.each(this.tooltips, function(n, r) {
        var i = e.Event("blur");
        i.target = i.currentTarget = r[0];
        t.close(i, true);
        e("#" + n).remove();
        if (r.data("ui-tooltip-title")) {
          r.attr("title", r.data("ui-tooltip-title"));
          r.removeData("ui-tooltip-title")
        }
      })
    }
  })
})(jQuery);
(function($, undefined) {
  var uuid = 0,
    slice = Array.prototype.slice,
    _cleanData = $.cleanData;
  $.cleanData = function(elems) {
    for (var i = 0, elem;
      (elem = elems[i]) != null; i++) {
      try {
        $(elem).triggerHandler("remove")
      } catch (e) {}
    }
    _cleanData(elems)
  };
  $.widget = function(name, base, prototype) {
    var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
      namespace = name.split(".")[0];
    name = name.split(".")[1];
    fullName = namespace + "-" + name;
    if (!prototype) {
      prototype = base;
      base = $.Widget
    }
    $.expr[":"][fullName.toLowerCase()] = function(elem) {
      return !!$.data(elem, fullName)
    };
    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];
    constructor = $[namespace][name] = function(options, element) {
      if (!this._createWidget) {
        return new constructor(options, element)
      }
      if (arguments.length) {
        this._createWidget(options, element)
      }
    };
    $.extend(constructor, existingConstructor, {
      version: prototype.version,
      _proto: $.extend({}, prototype),
      _childConstructors: []
    });
    basePrototype = new base();
    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function(prop, value) {
      if (!$.isFunction(value)) {
        proxiedPrototype[prop] = value;
        return
      }
      proxiedPrototype[prop] = (function() {
        var _super = function() {
            return base.prototype[prop].apply(this, arguments)
          },
          _superApply = function(args) {
            return base.prototype[prop].apply(this, args)
          };
        return function() {
          var __super = this._super,
            __superApply = this._superApply,
            returnValue;
          this._super = _super;
          this._superApply = _superApply;
          returnValue = value.apply(this, arguments);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue
        }
      })()
    });
    constructor.prototype = $.widget.extend(basePrototype, {
      widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    });
    if (existingConstructor) {
      $.each(existingConstructor._childConstructors, function(i, child) {
        var childPrototype = child.prototype;
        $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto)
      });
      delete existingConstructor._childConstructors
    } else {
      base._childConstructors.push(constructor)
    }
    $.widget.bridge(name, constructor)
  };
  $.widget.extend = function(target) {
    var input = slice.call(arguments, 1),
      inputIndex = 0,
      inputLength = input.length,
      key, value;
    for (; inputIndex < inputLength; inputIndex++) {
      for (key in input[inputIndex]) {
        value = input[inputIndex][key];
        if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
          if ($.isPlainObject(value)) {
            target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value)
          } else {
            target[key] = value
          }
        }
      }
    }
    return target
  };
  $.widget.bridge = function(name, object) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[name] = function(options) {
      var isMethodCall = typeof options === "string",
        args = slice.call(arguments, 1),
        returnValue = this;
      options = !isMethodCall && args.length ? $.widget.extend.apply(null, [options].concat(args)) : options;
      if (isMethodCall) {
        this.each(function() {
          var methodValue, instance = $.data(this, fullName);
          if (!instance) {
            return $.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'")
          }
          if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
            return $.error("no such method '" + options + "' for " + name + " widget instance")
          }
          methodValue = instance[options].apply(instance, args);
          if (methodValue !== instance && methodValue !== undefined) {
            returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
            return false
          }
        })
      } else {
        this.each(function() {
          var instance = $.data(this, fullName);
          if (instance) {
            instance.option(options || {})._init()
          } else {
            $.data(this, fullName, new object(options, this))
          }
        })
      }
      return returnValue
    }
  };
  $.Widget = function() {};
  $.Widget._childConstructors = [];
  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: false,
      create: null
    },
    _createWidget: function(options, element) {
      element = $(element || this.defaultElement || this)[0];
      this.element = $(element);
      this.uuid = uuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;
      this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      if (element !== this) {
        $.data(element, this.widgetFullName, this);
        this._on(true, this.element, {
          remove: function(event) {
            if (event.target === element) {
              this.destroy()
            }
          }
        });
        this.document = $(element.style ? element.ownerDocument : element.document || element);
        this.window = $(this.document[0].defaultView || this.document[0].parentWindow)
      }
      this._create();
      this._trigger("create", null, this._getCreateEventData());
      this._init()
    },
    _getCreateOptions: $.noop,
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,
    destroy: function() {
      this._destroy();
      this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
      this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
      this.bindings.unbind(this.eventNamespace);
      this.hoverable.removeClass("ui-state-hover");
      this.focusable.removeClass("ui-state-focus")
    },
    _destroy: $.noop,
    widget: function() {
      return this.element
    },
    option: function(key, value) {
      var options = key,
        parts, curOption, i;
      if (arguments.length === 0) {
        return $.widget.extend({}, this.options)
      }
      if (typeof key === "string") {
        options = {};
        parts = key.split(".");
        key = parts.shift();
        if (parts.length) {
          curOption = options[key] = $.widget.extend({}, this.options[key]);
          for (i = 0; i < parts.length - 1; i++) {
            curOption[parts[i]] = curOption[parts[i]] || {};
            curOption = curOption[parts[i]]
          }
          key = parts.pop();
          if (arguments.length === 1) {
            return curOption[key] === undefined ? null : curOption[key]
          }
          curOption[key] = value
        } else {
          if (arguments.length === 1) {
            return this.options[key] === undefined ? null : this.options[key]
          }
          options[key] = value
        }
      }
      this._setOptions(options);
      return this
    },
    _setOptions: function(options) {
      var key;
      for (key in options) {
        this._setOption(key, options[key])
      }
      return this
    },
    _setOption: function(key, value) {
      this.options[key] = value;
      if (key === "disabled") {
        this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!value).attr("aria-disabled", value);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus")
      }
      return this
    },
    enable: function() {
      return this._setOption("disabled", false)
    },
    disable: function() {
      return this._setOption("disabled", true)
    },
    _on: function(suppressDisabledCheck, element, handlers) {
      var delegateElement, instance = this;
      if (typeof suppressDisabledCheck !== "boolean") {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false
      }
      if (!handlers) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget()
      } else {
        element = delegateElement = $(element);
        this.bindings = this.bindings.add(element)
      }
      $.each(handlers, function(event, handler) {
        function handlerProxy() {
          if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
            return
          }
          return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments)
        }
        if (typeof handler !== "string") {
          handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++
        }
        var match = event.match(/^(\w+)\s*(.*)$/),
          eventName = match[1] + instance.eventNamespace,
          selector = match[2];
        if (selector) {
          delegateElement.delegate(selector, eventName, handlerProxy)
        } else {
          element.bind(eventName, handlerProxy)
        }
      })
    },
    _off: function(element, eventName) {
      eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
      element.unbind(eventName).undelegate(eventName)
    },
    _delay: function(handler, delay) {
      function handlerProxy() {
        return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments)
      }
      var instance = this;
      return setTimeout(handlerProxy, delay || 0)
    },
    _hoverable: function(element) {
      this.hoverable = this.hoverable.add(element);
      this._on(element, {
        mouseenter: function(event) {
          $(event.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(event) {
          $(event.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(element) {
      this.focusable = this.focusable.add(element);
      this._on(element, {
        focusin: function(event) {
          $(event.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(event) {
          $(event.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(type, event, data) {
      var prop, orig, callback = this.options[type];
      data = data || {};
      event = $.Event(event);
      event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
      event.target = this.element[0];
      orig = event.originalEvent;
      if (orig) {
        for (prop in orig) {
          if (!(prop in event)) {
            event[prop] = orig[prop]
          }
        }
      }
      this.element.trigger(event, data);
      return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented())
    }
  };
  $.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(method, defaultEffect) {
    $.Widget.prototype["_" + method] = function(element, options, callback) {
      if (typeof options === "string") {
        options = {
          effect: options
        }
      }
      var hasOptions, effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
      options = options || {};
      if (typeof options === "number") {
        options = {
          duration: options
        }
      }
      hasOptions = !$.isEmptyObject(options);
      options.complete = callback;
      if (options.delay) {
        element.delay(options.delay)
      }
      if (hasOptions && $.effects && $.effects.effect[effectName]) {
        element[method](options)
      } else {
        if (effectName !== method && element[effectName]) {
          element[effectName](options.duration, options.easing, callback)
        } else {
          element.queue(function(next) {
            $(this)[method]();
            if (callback) {
              callback.call(element[0])
            }
            next()
          })
        }
      }
    }
  })
})(jQuery);
(function($) {
  $.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || $('<input type="file">').prop("disabled"));
  $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
  $.support.xhrFormDataFileUpload = !!window.FormData;
  $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
  $.widget("blueimp.fileupload", {
    options: {
      dropZone: $(document),
      pasteZone: $(document),
      fileInput: undefined,
      replaceFileInput: true,
      paramName: undefined,
      singleFileUploads: true,
      limitMultiFileUploads: undefined,
      limitMultiFileUploadSize: undefined,
      limitMultiFileUploadSizeOverhead: 512,
      sequentialUploads: false,
      limitConcurrentUploads: undefined,
      forceIframeTransport: false,
      redirect: undefined,
      redirectParamName: undefined,
      postMessage: undefined,
      multipart: true,
      maxChunkSize: undefined,
      uploadedBytes: undefined,
      recalculateProgress: true,
      progressInterval: 100,
      bitrateInterval: 500,
      autoUpload: true,
      messages: {
        uploadedBytes: "Uploaded bytes exceed file size"
      },
      i18n: function(message, context) {
        message = this.messages[message] || message.toString();
        if (context) {
          $.each(context, function(key, value) {
            message = message.replace("{" + key + "}", value)
          })
        }
        return message
      },
      formData: function(form) {
        return form.serializeArray()
      },
      add: function(e, data) {
        if (e.isDefaultPrevented()) {
          return false
        }
        if (data.autoUpload || (data.autoUpload !== false && $(this).fileupload("option", "autoUpload"))) {
          data.process().done(function() {
            data.submit()
          })
        }
      },
      processData: false,
      contentType: false,
      cache: false
    },
    _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
    _blobSlice: $.support.blobSlice && function() {
      var slice = this.slice || this.webkitSlice || this.mozSlice;
      return slice.apply(this, arguments)
    },
    _BitrateTimer: function() {
      this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
      this.loaded = 0;
      this.bitrate = 0;
      this.getBitrate = function(now, loaded, interval) {
        var timeDiff = now - this.timestamp;
        if (!this.bitrate || !interval || timeDiff > interval) {
          this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
          this.loaded = loaded;
          this.timestamp = now
        }
        return this.bitrate
      }
    },
    _isXHRUpload: function(options) {
      return !options.forceIframeTransport && ((!options.multipart && $.support.xhrFileUpload) || $.support.xhrFormDataFileUpload)
    },
    _getFormData: function(options) {
      var formData;
      if ($.type(options.formData) === "function") {
        return options.formData(options.form)
      }
      if ($.isArray(options.formData)) {
        return options.formData
      }
      if ($.type(options.formData) === "object") {
        formData = [];
        $.each(options.formData, function(name, value) {
          formData.push({
            name: name,
            value: value
          })
        });
        return formData
      }
      return []
    },
    _getTotal: function(files) {
      var total = 0;
      $.each(files, function(index, file) {
        total += file.size || 1
      });
      return total
    },
    _initProgressObject: function(obj) {
      var progress = {
        loaded: 0,
        total: 0,
        bitrate: 0
      };
      if (obj._progress) {
        $.extend(obj._progress, progress)
      } else {
        obj._progress = progress
      }
    },
    _initResponseObject: function(obj) {
      var prop;
      if (obj._response) {
        for (prop in obj._response) {
          if (obj._response.hasOwnProperty(prop)) {
            delete obj._response[prop]
          }
        }
      } else {
        obj._response = {}
      }
    },
    _onProgress: function(e, data) {
      if (e.lengthComputable) {
        var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
          loaded;
        if (data._time && data.progressInterval && (now - data._time < data.progressInterval) && e.loaded !== e.total) {
          return
        }
        data._time = now;
        loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
        this._progress.loaded += (loaded - data._progress.loaded);
        this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
        data._progress.loaded = data.loaded = loaded;
        data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
        this._trigger("progress", $.Event("progress", {
          delegatedEvent: e
        }), data);
        this._trigger("progressall", $.Event("progressall", {
          delegatedEvent: e
        }), this._progress)
      }
    },
    _initProgressListener: function(options) {
      var that = this,
        xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
      if (xhr.upload) {
        $(xhr.upload).bind("progress", function(e) {
          var oe = e.originalEvent;
          e.lengthComputable = oe.lengthComputable;
          e.loaded = oe.loaded;
          e.total = oe.total;
          that._onProgress(e, options)
        });
        options.xhr = function() {
          return xhr
        }
      }
    },
    _isInstanceOf: function(type, obj) {
      return Object.prototype.toString.call(obj) === "[object " + type + "]"
    },
    _initXHRData: function(options) {
      var that = this,
        formData, file = options.files[0],
        multipart = options.multipart || !$.support.xhrFileUpload,
        paramName = $.type(options.paramName) === "array" ? options.paramName[0] : options.paramName;
      options.headers = $.extend({}, options.headers);
      if (options.contentRange) {
        options.headers["Content-Range"] = options.contentRange
      }
      if (!multipart || options.blob || !this._isInstanceOf("File", file)) {
        options.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(file.name) + '"'
      }
      if (!multipart) {
        options.contentType = file.type || "application/octet-stream";
        options.data = options.blob || file
      } else {
        if ($.support.xhrFormDataFileUpload) {
          if (options.postMessage) {
            formData = this._getFormData(options);
            if (options.blob) {
              formData.push({
                name: paramName,
                value: options.blob
              })
            } else {
              $.each(options.files, function(index, file) {
                formData.push({
                  name: ($.type(options.paramName) === "array" && options.paramName[index]) || paramName,
                  value: file
                })
              })
            }
          } else {
            if (that._isInstanceOf("FormData", options.formData)) {
              formData = options.formData
            } else {
              formData = new FormData();
              $.each(this._getFormData(options), function(index, field) {
                formData.append(field.name, field.value)
              })
            }
            if (options.blob) {
              formData.append(paramName, options.blob, file.name)
            } else {
              $.each(options.files, function(index, file) {
                if (that._isInstanceOf("File", file) || that._isInstanceOf("Blob", file)) {
                  formData.append(($.type(options.paramName) === "array" && options.paramName[index]) || paramName, file, file.uploadName || file.name)
                }
              })
            }
          }
          options.data = formData
        }
      }
      options.blob = null
    },
    _initIframeSettings: function(options) {
      var targetHost = $("<a></a>").prop("href", options.url).prop("host");
      options.dataType = "iframe " + (options.dataType || "");
      options.formData = this._getFormData(options);
      if (options.redirect && targetHost && targetHost !== location.host) {
        options.formData.push({
          name: options.redirectParamName || "redirect",
          value: options.redirect
        })
      }
    },
    _initDataSettings: function(options) {
      if (this._isXHRUpload(options)) {
        if (!this._chunkedUpload(options, true)) {
          if (!options.data) {
            this._initXHRData(options)
          }
          this._initProgressListener(options)
        }
        if (options.postMessage) {
          options.dataType = "postmessage " + (options.dataType || "")
        }
      } else {
        this._initIframeSettings(options)
      }
    },
    _getParamName: function(options) {
      var fileInput = $(options.fileInput),
        paramName = options.paramName;
      if (!paramName) {
        paramName = [];
        fileInput.each(function() {
          var input = $(this),
            name = input.prop("name") || "files[]",
            i = (input.prop("files") || [1]).length;
          while (i) {
            paramName.push(name);
            i -= 1
          }
        });
        if (!paramName.length) {
          paramName = [fileInput.prop("name") || "files[]"]
        }
      } else {
        if (!$.isArray(paramName)) {
          paramName = [paramName]
        }
      }
      return paramName
    },
    _initFormSettings: function(options) {
      if (!options.form || !options.form.length) {
        options.form = $(options.fileInput.prop("form"));
        if (!options.form.length) {
          options.form = $(this.options.fileInput.prop("form"))
        }
      }
      options.paramName = this._getParamName(options);
      if (!options.url) {
        options.url = options.form.prop("action") || location.href
      }
      options.type = (options.type || ($.type(options.form.prop("method")) === "string" && options.form.prop("method")) || "").toUpperCase();
      if (options.type !== "POST" && options.type !== "PUT" && options.type !== "PATCH") {
        options.type = "POST"
      }
      if (!options.formAcceptCharset) {
        options.formAcceptCharset = options.form.attr("accept-charset")
      }
    },
    _getAJAXSettings: function(data) {
      var options = $.extend({}, this.options, data);
      this._initFormSettings(options);
      this._initDataSettings(options);
      return options
    },
    _getDeferredState: function(deferred) {
      if (deferred.state) {
        return deferred.state()
      }
      if (deferred.isResolved()) {
        return "resolved"
      }
      if (deferred.isRejected()) {
        return "rejected"
      }
      return "pending"
    },
    _enhancePromise: function(promise) {
      promise.success = promise.done;
      promise.error = promise.fail;
      promise.complete = promise.always;
      return promise
    },
    _getXHRPromise: function(resolveOrReject, context, args) {
      var dfd = $.Deferred(),
        promise = dfd.promise();
      context = context || this.options.context || promise;
      if (resolveOrReject === true) {
        dfd.resolveWith(context, args)
      } else {
        if (resolveOrReject === false) {
          dfd.rejectWith(context, args)
        }
      }
      promise.abort = dfd.promise;
      return this._enhancePromise(promise)
    },
    _addConvenienceMethods: function(e, data) {
      var that = this,
        getPromise = function(args) {
          return $.Deferred().resolveWith(that, args).promise()
        };
      data.process = function(resolveFunc, rejectFunc) {
        if (resolveFunc || rejectFunc) {
          data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).pipe(function() {
            if (data.errorThrown) {
              return $.Deferred().rejectWith(that, [data]).promise()
            }
            return getPromise(arguments)
          }).pipe(resolveFunc, rejectFunc)
        }
        return this._processQueue || getPromise([this])
      };
      data.submit = function() {
        if (this.state() !== "pending") {
          data.jqXHR = this.jqXHR = (that._trigger("submit", $.Event("submit", {
            delegatedEvent: e
          }), this) !== false) && that._onSend(e, this)
        }
        return this.jqXHR || that._getXHRPromise()
      };
      data.abort = function() {
        if (this.jqXHR) {
          return this.jqXHR.abort()
        }
        this.errorThrown = "abort";
        that._trigger("fail", null, this);
        return that._getXHRPromise(false)
      };
      data.state = function() {
        if (this.jqXHR) {
          return that._getDeferredState(this.jqXHR)
        }
        if (this._processQueue) {
          return that._getDeferredState(this._processQueue)
        }
      };
      data.processing = function() {
        return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === "pending"
      };
      data.progress = function() {
        return this._progress
      };
      data.response = function() {
        return this._response
      }
    },
    _getUploadedBytes: function(jqXHR) {
      var range = jqXHR.getResponseHeader("Range"),
        parts = range && range.split("-"),
        upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
      return upperBytesPos && upperBytesPos + 1
    },
    _chunkedUpload: function(options, testOnly) {
      options.uploadedBytes = options.uploadedBytes || 0;
      var that = this,
        file = options.files[0],
        fs = file.size,
        ub = options.uploadedBytes,
        mcs = options.maxChunkSize || fs,
        slice = this._blobSlice,
        dfd = $.Deferred(),
        promise = dfd.promise(),
        jqXHR, upload;
      if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) || options.data) {
        return false
      }
      if (testOnly) {
        return true
      }
      if (ub >= fs) {
        file.error = options.i18n("uploadedBytes");
        return this._getXHRPromise(false, options.context, [null, "error", file.error])
      }
      upload = function() {
        var o = $.extend({}, options),
          currentLoaded = o._progress.loaded;
        o.blob = slice.call(file, ub, ub + mcs, file.type);
        o.chunkSize = o.blob.size;
        o.contentRange = "bytes " + ub + "-" + (ub + o.chunkSize - 1) + "/" + fs;
        that._initXHRData(o);
        that._initProgressListener(o);
        jqXHR = ((that._trigger("chunksend", null, o) !== false && $.ajax(o)) || that._getXHRPromise(false, o.context)).done(function(result, textStatus, jqXHR) {
          ub = that._getUploadedBytes(jqXHR) || (ub + o.chunkSize);
          if (currentLoaded + o.chunkSize - o._progress.loaded) {
            that._onProgress($.Event("progress", {
              lengthComputable: true,
              loaded: ub - o.uploadedBytes,
              total: ub - o.uploadedBytes
            }), o)
          }
          options.uploadedBytes = o.uploadedBytes = ub;
          o.result = result;
          o.textStatus = textStatus;
          o.jqXHR = jqXHR;
          that._trigger("chunkdone", null, o);
          that._trigger("chunkalways", null, o);
          if (ub < fs) {
            upload()
          } else {
            dfd.resolveWith(o.context, [result, textStatus, jqXHR])
          }
        }).fail(function(jqXHR, textStatus, errorThrown) {
          o.jqXHR = jqXHR;
          o.textStatus = textStatus;
          o.errorThrown = errorThrown;
          that._trigger("chunkfail", null, o);
          that._trigger("chunkalways", null, o);
          dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown])
        })
      };
      this._enhancePromise(promise);
      promise.abort = function() {
        return jqXHR.abort()
      };
      upload();
      return promise
    },
    _beforeSend: function(e, data) {
      if (this._active === 0) {
        this._trigger("start");
        this._bitrateTimer = new this._BitrateTimer();
        this._progress.loaded = this._progress.total = 0;
        this._progress.bitrate = 0
      }
      this._initResponseObject(data);
      this._initProgressObject(data);
      data._progress.loaded = data.loaded = data.uploadedBytes || 0;
      data._progress.total = data.total = this._getTotal(data.files) || 1;
      data._progress.bitrate = data.bitrate = 0;
      this._active += 1;
      this._progress.loaded += data.loaded;
      this._progress.total += data.total
    },
    _onDone: function(result, textStatus, jqXHR, options) {
      var total = options._progress.total,
        response = options._response;
      if (options._progress.loaded < total) {
        this._onProgress($.Event("progress", {
          lengthComputable: true,
          loaded: total,
          total: total
        }), options)
      }
      response.result = options.result = result;
      response.textStatus = options.textStatus = textStatus;
      response.jqXHR = options.jqXHR = jqXHR;
      this._trigger("done", null, options)
    },
    _onFail: function(jqXHR, textStatus, errorThrown, options) {
      var response = options._response;
      if (options.recalculateProgress) {
        this._progress.loaded -= options._progress.loaded;
        this._progress.total -= options._progress.total
      }
      response.jqXHR = options.jqXHR = jqXHR;
      response.textStatus = options.textStatus = textStatus;
      response.errorThrown = options.errorThrown = errorThrown;
      this._trigger("fail", null, options)
    },
    _onAlways: function(jqXHRorResult, textStatus, jqXHRorError, options) {
      this._trigger("always", null, options)
    },
    _onSend: function(e, data) {
      if (!data.submit) {
        this._addConvenienceMethods(e, data)
      }
      var that = this,
        jqXHR, aborted, slot, pipe, options = that._getAJAXSettings(data),
        send = function() {
          that._sending += 1;
          options._bitrateTimer = new that._BitrateTimer();
          jqXHR = jqXHR || (((aborted || that._trigger("send", $.Event("send", {
            delegatedEvent: e
          }), options) === false) && that._getXHRPromise(false, options.context, aborted)) || that._chunkedUpload(options) || $.ajax(options)).done(function(result, textStatus, jqXHR) {
            that._onDone(result, textStatus, jqXHR, options)
          }).fail(function(jqXHR, textStatus, errorThrown) {
            that._onFail(jqXHR, textStatus, errorThrown, options)
          }).always(function(jqXHRorResult, textStatus, jqXHRorError) {
            that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
            that._sending -= 1;
            that._active -= 1;
            if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
              var nextSlot = that._slots.shift();
              while (nextSlot) {
                if (that._getDeferredState(nextSlot) === "pending") {
                  nextSlot.resolve();
                  break
                }
                nextSlot = that._slots.shift()
              }
            }
            if (that._active === 0) {
              that._trigger("stop")
            }
          });
          return jqXHR
        };
      this._beforeSend(e, options);
      if (this.options.sequentialUploads || (this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending)) {
        if (this.options.limitConcurrentUploads > 1) {
          slot = $.Deferred();
          this._slots.push(slot);
          pipe = slot.pipe(send)
        } else {
          this._sequence = this._sequence.pipe(send, send);
          pipe = this._sequence
        }
        pipe.abort = function() {
          aborted = [undefined, "abort", "abort"];
          if (!jqXHR) {
            if (slot) {
              slot.rejectWith(options.context, aborted)
            }
            return send()
          }
          return jqXHR.abort()
        };
        return this._enhancePromise(pipe)
      }
      return send()
    },
    _onAdd: function(e, data) {
      var that = this,
        result = true,
        options = $.extend({}, this.options, data),
        files = data.files,
        filesLength = files.length,
        limit = options.limitMultiFileUploads,
        limitSize = options.limitMultiFileUploadSize,
        overhead = options.limitMultiFileUploadSizeOverhead,
        batchSize = 0,
        paramName = this._getParamName(options),
        paramNameSet, paramNameSlice, fileSet, i, j = 0;
      if (limitSize && (!filesLength || files[0].size === undefined)) {
        limitSize = undefined
      }
      if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
        fileSet = [files];
        paramNameSet = [paramName]
      } else {
        if (!(options.singleFileUploads || limitSize) && limit) {
          fileSet = [];
          paramNameSet = [];
          for (i = 0; i < filesLength; i += limit) {
            fileSet.push(files.slice(i, i + limit));
            paramNameSlice = paramName.slice(i, i + limit);
            if (!paramNameSlice.length) {
              paramNameSlice = paramName
            }
            paramNameSet.push(paramNameSlice)
          }
        } else {
          if (!options.singleFileUploads && limitSize) {
            fileSet = [];
            paramNameSet = [];
            for (i = 0; i < filesLength; i = i + 1) {
              batchSize += files[i].size + overhead;
              if (i + 1 === filesLength || ((batchSize + files[i + 1].size + overhead) > limitSize) || (limit && i + 1 - j >= limit)) {
                fileSet.push(files.slice(j, i + 1));
                paramNameSlice = paramName.slice(j, i + 1);
                if (!paramNameSlice.length) {
                  paramNameSlice = paramName
                }
                paramNameSet.push(paramNameSlice);
                j = i + 1;
                batchSize = 0
              }
            }
          } else {
            paramNameSet = paramName
          }
        }
      }
      data.originalFiles = files;
      $.each(fileSet || files, function(index, element) {
        var newData = $.extend({}, data);
        newData.files = fileSet ? element : [element];
        newData.paramName = paramNameSet[index];
        that._initResponseObject(newData);
        that._initProgressObject(newData);
        that._addConvenienceMethods(e, newData);
        result = that._trigger("add", $.Event("add", {
          delegatedEvent: e
        }), newData);
        return result
      });
      return result
    },
    _replaceFileInput: function(data) {
      var input = data.fileInput,
        inputClone = input.clone(true);
      data.fileInputClone = inputClone;
      $("<form></form>").append(inputClone)[0].reset();
      input.after(inputClone).detach();
      $.cleanData(input.unbind("remove"));
      this.options.fileInput = this.options.fileInput.map(function(i, el) {
        if (el === input[0]) {
          return inputClone[0]
        }
        return el
      });
      if (input[0] === this.element[0]) {
        this.element = inputClone
      }
    },
    _handleFileTreeEntry: function(entry, path) {
      var that = this,
        dfd = $.Deferred(),
        errorHandler = function(e) {
          if (e && !e.entry) {
            e.entry = entry
          }
          dfd.resolve([e])
        },
        successHandler = function(entries) {
          that._handleFileTreeEntries(entries, path + entry.name + "/").done(function(files) {
            dfd.resolve(files)
          }).fail(errorHandler)
        },
        readEntries = function() {
          dirReader.readEntries(function(results) {
            if (!results.length) {
              successHandler(entries)
            } else {
              entries = entries.concat(results);
              readEntries()
            }
          }, errorHandler)
        },
        dirReader, entries = [];
      path = path || "";
      if (entry.isFile) {
        if (entry._file) {
          entry._file.relativePath = path;
          dfd.resolve(entry._file)
        } else {
          entry.file(function(file) {
            file.relativePath = path;
            dfd.resolve(file)
          }, errorHandler)
        }
      } else {
        if (entry.isDirectory) {
          dirReader = entry.createReader();
          readEntries()
        } else {
          dfd.resolve([])
        }
      }
      return dfd.promise()
    },
    _handleFileTreeEntries: function(entries, path) {
      var that = this;
      return $.when.apply($, $.map(entries, function(entry) {
        return that._handleFileTreeEntry(entry, path)
      })).pipe(function() {
        return Array.prototype.concat.apply([], arguments)
      })
    },
    _getDroppedFiles: function(dataTransfer) {
      dataTransfer = dataTransfer || {};
      var items = dataTransfer.items;
      if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
        return this._handleFileTreeEntries($.map(items, function(item) {
          var entry;
          if (item.webkitGetAsEntry) {
            entry = item.webkitGetAsEntry();
            if (entry) {
              entry._file = item.getAsFile()
            }
            return entry
          }
          return item.getAsEntry()
        }))
      }
      return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise()
    },
    _getSingleFileInputFiles: function(fileInput) {
      fileInput = $(fileInput);
      var entries = fileInput.prop("webkitEntries") || fileInput.prop("entries"),
        files, value;
      if (entries && entries.length) {
        return this._handleFileTreeEntries(entries)
      }
      files = $.makeArray(fileInput.prop("files"));
      if (!files.length) {
        value = fileInput.prop("value");
        if (!value) {
          return $.Deferred().resolve([]).promise()
        }
        files = [{
          name: value.replace(/^.*\\/, "")
        }]
      } else {
        if (files[0].name === undefined && files[0].fileName) {
          $.each(files, function(index, file) {
            file.name = file.fileName;
            file.size = file.fileSize
          })
        }
      }
      return $.Deferred().resolve(files).promise()
    },
    _getFileInputFiles: function(fileInput) {
      if (!(fileInput instanceof $) || fileInput.length === 1) {
        return this._getSingleFileInputFiles(fileInput)
      }
      return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).pipe(function() {
        return Array.prototype.concat.apply([], arguments)
      })
    },
    _onChange: function(e) {
      var that = this,
        data = {
          fileInput: $(e.target),
          form: $(e.target.form)
        };
      this._getFileInputFiles(data.fileInput).always(function(files) {
        data.files = files;
        if (that.options.replaceFileInput) {
          that._replaceFileInput(data)
        }
        if (that._trigger("change", $.Event("change", {
            delegatedEvent: e
          }), data) !== false) {
          that._onAdd(e, data)
        }
      })
    },
    _onPaste: function(e) {
      var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
        data = {
          files: []
        };
      if (items && items.length) {
        $.each(items, function(index, item) {
          var file = item.getAsFile && item.getAsFile();
          if (file) {
            data.files.push(file)
          }
        });
        if (this._trigger("paste", $.Event("paste", {
            delegatedEvent: e
          }), data) !== false) {
          this._onAdd(e, data)
        }
      }
    },
    _onDrop: function(e) {
      e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
      var that = this,
        dataTransfer = e.dataTransfer,
        data = {};
      if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
        e.preventDefault();
        this._getDroppedFiles(dataTransfer).always(function(files) {
          data.files = files;
          if (that._trigger("drop", $.Event("drop", {
              delegatedEvent: e
            }), data) !== false) {
            that._onAdd(e, data)
          }
        })
      }
    },
    _onDragOver: function(e) {
      e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
      var dataTransfer = e.dataTransfer;
      if (dataTransfer && $.inArray("Files", dataTransfer.types) !== -1 && this._trigger("dragover", $.Event("dragover", {
          delegatedEvent: e
        })) !== false) {
        e.preventDefault();
        dataTransfer.dropEffect = "copy"
      }
    },
    _initEventHandlers: function() {
      if (this._isXHRUpload(this.options)) {
        this._on(this.options.dropZone, {
          dragover: this._onDragOver,
          drop: this._onDrop
        });
        this._on(this.options.pasteZone, {
          paste: this._onPaste
        })
      }
      if ($.support.fileInput) {
        this._on(this.options.fileInput, {
          change: this._onChange
        })
      }
    },
    _destroyEventHandlers: function() {
      this._off(this.options.dropZone, "dragover drop");
      this._off(this.options.pasteZone, "paste");
      this._off(this.options.fileInput, "change")
    },
    _setOption: function(key, value) {
      var reinit = $.inArray(key, this._specialOptions) !== -1;
      if (reinit) {
        this._destroyEventHandlers()
      }
      this._super(key, value);
      if (reinit) {
        this._initSpecialOptions();
        this._initEventHandlers()
      }
    },
    _initSpecialOptions: function() {
      var options = this.options;
      if (options.fileInput === undefined) {
        options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]')
      } else {
        if (!(options.fileInput instanceof $)) {
          options.fileInput = $(options.fileInput)
        }
      }
      if (!(options.dropZone instanceof $)) {
        options.dropZone = $(options.dropZone)
      }
      if (!(options.pasteZone instanceof $)) {
        options.pasteZone = $(options.pasteZone)
      }
    },
    _getRegExp: function(str) {
      var parts = str.split("/"),
        modifiers = parts.pop();
      parts.shift();
      return new RegExp(parts.join("/"), modifiers)
    },
    _isRegExpOption: function(key, value) {
      return key !== "url" && $.type(value) === "string" && /^\/.*\/[igm]{0,3}$/.test(value)
    },
    _initDataAttributes: function() {
      var that = this,
        options = this.options,
        clone = $(this.element[0].cloneNode(false));
      $.each(clone.data(), function(key, value) {
        var dataAttributeName = "data-" + key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        if (clone.attr(dataAttributeName)) {
          if (that._isRegExpOption(key, value)) {
            value = that._getRegExp(value)
          }
          options[key] = value
        }
      })
    },
    _create: function() {
      this._initDataAttributes();
      this._initSpecialOptions();
      this._slots = [];
      this._sequence = this._getXHRPromise(true);
      this._sending = this._active = 0;
      this._initProgressObject(this);
      this._initEventHandlers()
    },
    active: function() {
      return this._active
    },
    progress: function() {
      return this._progress
    },
    add: function(data) {
      var that = this;
      if (!data || this.options.disabled) {
        return
      }
      if (data.fileInput && !data.files) {
        this._getFileInputFiles(data.fileInput).always(function(files) {
          data.files = files;
          that._onAdd(null, data)
        })
      } else {
        data.files = $.makeArray(data.files);
        this._onAdd(null, data)
      }
    },
    send: function(data) {
      if (data && !this.options.disabled) {
        if (data.fileInput && !data.files) {
          var that = this,
            dfd = $.Deferred(),
            promise = dfd.promise(),
            jqXHR, aborted;
          promise.abort = function() {
            aborted = true;
            if (jqXHR) {
              return jqXHR.abort()
            }
            dfd.reject(null, "abort", "abort");
            return promise
          };
          this._getFileInputFiles(data.fileInput).always(function(files) {
            if (aborted) {
              return
            }
            if (!files.length) {
              dfd.reject();
              return
            }
            data.files = files;
            jqXHR = that._onSend(null, data);
            jqXHR.then(function(result, textStatus, jqXHR) {
              dfd.resolve(result, textStatus, jqXHR)
            }, function(jqXHR, textStatus, errorThrown) {
              dfd.reject(jqXHR, textStatus, errorThrown)
            })
          });
          return this._enhancePromise(promise)
        }
        data.files = $.makeArray(data.files);
        if (data.files.length) {
          return this._onSend(null, data)
        }
      }
      return this._getXHRPromise(false, data && data.context)
    }
  })
})(jQuery);
(function($) {
  $.fn.extend({
    sliderAccess: function(options) {
      options = options || {};
      options.touchonly = options.touchonly !== undefined ? options.touchonly : true;
      if (options.touchonly === true && !("ontouchend" in document)) {
        return $(this)
      }
      return $(this).each(function(i, obj) {
        var $t = $(this),
          o = $.extend({}, {
            where: "after",
            step: $t.slider("option", "step"),
            upIcon: "ui-icon-plus",
            downIcon: "ui-icon-minus",
            text: false,
            upText: "+",
            downText: "-",
            buttonset: true,
            buttonsetTag: "span",
            isRTL: false
          }, options),
          $buttons = $("<" + o.buttonsetTag + ' class="ui-slider-access"><button data-icon="' + o.downIcon + '" data-step="' + (o.isRTL ? o.step : o.step * -1) + '">' + o.downText + '</button><button data-icon="' + o.upIcon + '" data-step="' + (o.isRTL ? o.step * -1 : o.step) + '">' + o.upText + "</button></" + o.buttonsetTag + ">");
        $buttons.children("button").each(function(j, jobj) {
          var $jt = $(this);
          $jt.button({
            text: o.text,
            icons: {
              primary: $jt.data("icon")
            }
          }).click(function(e) {
            var step = $jt.data("step"),
              curr = $t.slider("value"),
              newval = curr += step * 1,
              minval = $t.slider("option", "min"),
              maxval = $t.slider("option", "max"),
              slidee = $t.slider("option", "slide") || function() {},
              stope = $t.slider("option", "stop") || function() {};
            e.preventDefault();
            if (newval < minval || newval > maxval) {
              return
            }
            $t.slider("value", newval);
            slidee.call($t, null, {
              value: newval
            });
            stope.call($t, null, {
              value: newval
            })
          })
        });
        $t[o.where]($buttons);
        if (o.buttonset) {
          $buttons.removeClass("ui-corner-right").removeClass("ui-corner-left").buttonset();
          $buttons.eq(0).addClass("ui-corner-left");
          $buttons.eq(1).addClass("ui-corner-right")
        }
        var bOuterWidth = $buttons.css({
          marginLeft: ((o.where === "after" && !o.isRTL) || (o.where === "before" && o.isRTL) ? 10 : 0),
          marginRight: ((o.where === "before" && !o.isRTL) || (o.where === "after" && o.isRTL) ? 10 : 0)
        }).outerWidth(true) + 5;
        var tOuterWidth = $t.outerWidth(true);
        $t.css("display", "inline-block").width(tOuterWidth - bOuterWidth)
      })
    }
  })
})(jQuery);
(function($) {
  $.ui.timepicker = $.ui.timepicker || {};
  if ($.ui.timepicker.version) {
    return
  }
  $.extend($.ui, {
    timepicker: {
      version: "@@version"
    }
  });
  var Timepicker = function() {
    this.regional = [];
    this.regional[""] = {
      currentText: "Now",
      closeText: "Done",
      amNames: ["AM", "A"],
      pmNames: ["PM", "P"],
      timeFormat: "HH:mm",
      timeSuffix: "",
      timeOnlyTitle: "Choose Time",
      timeText: "Time",
      hourText: "Hour",
      minuteText: "Minute",
      secondText: "Second",
      millisecText: "Millisecond",
      microsecText: "Microsecond",
      timezoneText: "Time Zone",
      isRTL: false
    };
    this._defaults = {
      showButtonPanel: true,
      timeOnly: false,
      timeOnlyShowDate: false,
      showHour: null,
      showMinute: null,
      showSecond: null,
      showMillisec: null,
      showMicrosec: null,
      showTimezone: null,
      showTime: true,
      stepHour: 1,
      stepMinute: 1,
      stepSecond: 1,
      stepMillisec: 1,
      stepMicrosec: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      microsec: 0,
      timezone: null,
      hourMin: 0,
      minuteMin: 0,
      secondMin: 0,
      millisecMin: 0,
      microsecMin: 0,
      hourMax: 23,
      minuteMax: 59,
      secondMax: 59,
      millisecMax: 999,
      microsecMax: 999,
      minDateTime: null,
      maxDateTime: null,
      maxTime: null,
      minTime: null,
      onSelect: null,
      hourGrid: 0,
      minuteGrid: 0,
      secondGrid: 0,
      millisecGrid: 0,
      microsecGrid: 0,
      alwaysSetTime: true,
      separator: " ",
      altFieldTimeOnly: true,
      altTimeFormat: null,
      altSeparator: null,
      altTimeSuffix: null,
      altRedirectFocus: true,
      pickerTimeFormat: null,
      pickerTimeSuffix: null,
      showTimepicker: true,
      timezoneList: null,
      addSliderAccess: false,
      sliderAccessArgs: null,
      controlType: "slider",
      defaultValue: null,
      parse: "strict"
    };
    $.extend(this._defaults, this.regional[""])
  };
  $.extend(Timepicker.prototype, {
    $input: null,
    $altInput: null,
    $timeObj: null,
    inst: null,
    hour_slider: null,
    minute_slider: null,
    second_slider: null,
    millisec_slider: null,
    microsec_slider: null,
    timezone_select: null,
    maxTime: null,
    minTime: null,
    hour: 0,
    minute: 0,
    second: 0,
    millisec: 0,
    microsec: 0,
    timezone: null,
    hourMinOriginal: null,
    minuteMinOriginal: null,
    secondMinOriginal: null,
    millisecMinOriginal: null,
    microsecMinOriginal: null,
    hourMaxOriginal: null,
    minuteMaxOriginal: null,
    secondMaxOriginal: null,
    millisecMaxOriginal: null,
    microsecMaxOriginal: null,
    ampm: "",
    formattedDate: "",
    formattedTime: "",
    formattedDateTime: "",
    timezoneList: null,
    units: ["hour", "minute", "second", "millisec", "microsec"],
    support: {},
    control: null,
    setDefaults: function(settings) {
      extendRemove(this._defaults, settings || {});
      return this
    },
    _newInst: function($input, opts) {
      var tp_inst = new Timepicker(),
        inlineSettings = {},
        fns = {},
        overrides, i;
      for (var attrName in this._defaults) {
        if (this._defaults.hasOwnProperty(attrName)) {
          var attrValue = $input.attr("time:" + attrName);
          if (attrValue) {
            try {
              inlineSettings[attrName] = eval(attrValue)
            } catch (err) {
              inlineSettings[attrName] = attrValue
            }
          }
        }
      }
      overrides = {
        beforeShow: function(input, dp_inst) {
          if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
            return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst)
          }
        },
        onChangeMonthYear: function(year, month, dp_inst) {
          tp_inst._updateDateTime(dp_inst);
          if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
            tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst)
          }
        },
        onClose: function(dateText, dp_inst) {
          if (tp_inst.timeDefined === true && $input.val() !== "") {
            tp_inst._updateDateTime(dp_inst)
          }
          if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
            tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst)
          }
        }
      };
      for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
          fns[i] = opts[i] || null
        }
      }
      tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
        evnts: fns,
        timepicker: tp_inst
      });
      tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
        return val.toUpperCase()
      });
      tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
        return val.toUpperCase()
      });
      tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : ""));
      if (typeof(tp_inst._defaults.controlType) === "string") {
        if (tp_inst._defaults.controlType === "slider" && typeof($.ui.slider) === "undefined") {
          tp_inst._defaults.controlType = "select"
        }
        tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]
      } else {
        tp_inst.control = tp_inst._defaults.controlType
      }
      var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
      if (tp_inst._defaults.timezoneList !== null) {
        timezoneList = tp_inst._defaults.timezoneList
      }
      var tzl = timezoneList.length,
        tzi = 0,
        tzv = null;
      if (tzl > 0 && typeof timezoneList[0] !== "object") {
        for (; tzi < tzl; tzi++) {
          tzv = timezoneList[tzi];
          timezoneList[tzi] = {
            value: tzv,
            label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
          }
        }
      }
      tp_inst._defaults.timezoneList = timezoneList;
      tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : ((new Date()).getTimezoneOffset() * -1);
      tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
      tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
      tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second;
      tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
      tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
      tp_inst.ampm = "";
      tp_inst.$input = $input;
      if (tp_inst._defaults.altField) {
        tp_inst.$altInput = $(tp_inst._defaults.altField);
        if (tp_inst._defaults.altRedirectFocus === true) {
          tp_inst.$altInput.css({
            cursor: "pointer"
          }).focus(function() {
            $input.trigger("focus")
          })
        }
      }
      if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
        tp_inst._defaults.minDate = new Date()
      }
      if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
        tp_inst._defaults.maxDate = new Date()
      }
      if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
        tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())
      }
      if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
        tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())
      }
      if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
        tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())
      }
      if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
        tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())
      }
      tp_inst.$input.bind("focus", function() {
        tp_inst._onFocus()
      });
      return tp_inst
    },
    _addTimePicker: function(dp_inst) {
      var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + " " + this.$altInput.val() : this.$input.val();
      this.timeDefined = this._parseTime(currDT);
      this._limitMinMaxDateTime(dp_inst, false);
      this._injectTimePicker()
    },
    _parseTime: function(timeString, withDate) {
      if (!this.inst) {
        this.inst = $.datepicker._getInst(this.$input[0])
      }
      if (withDate || !this._defaults.timeOnly) {
        var dp_dateFormat = $.datepicker._get(this.inst, "dateFormat");
        try {
          var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
          if (!parseRes.timeObj) {
            return false
          }
          $.extend(this, parseRes.timeObj)
        } catch (err) {
          $.timepicker.log("Error parsing the date/time string: " + err + "\ndate/time string = " + timeString + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + dp_dateFormat);
          return false
        }
        return true
      } else {
        var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
        if (!timeObj) {
          return false
        }
        $.extend(this, timeObj);
        return true
      }
    },
    _injectTimePicker: function() {
      var $dp = this.inst.dpDiv,
        o = this.inst.settings,
        tp_inst = this,
        litem = "",
        uitem = "",
        show = null,
        max = {},
        gridSize = {},
        size = null,
        i = 0,
        l = 0;
      if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
        var noDisplay = ' style="display:none;"',
          html = '<div class="ui-timepicker-div' + (o.isRTL ? " ui-timepicker-rtl" : "") + '"><dl><dt class="ui_tpicker_time_label"' + ((o.showTime) ? "" : noDisplay) + ">" + o.timeText + '</dt><dd class="ui_tpicker_time"' + ((o.showTime) ? "" : noDisplay) + "></dd>";
        for (i = 0, l = this.units.length; i < l; i++) {
          litem = this.units[i];
          uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
          show = o["show" + uitem] !== null ? o["show" + uitem] : this.support[litem];
          max[litem] = parseInt((o[litem + "Max"] - ((o[litem + "Max"] - o[litem + "Min"]) % o["step" + uitem])), 10);
          gridSize[litem] = 0;
          html += '<dt class="ui_tpicker_' + litem + '_label"' + (show ? "" : noDisplay) + ">" + o[litem + "Text"] + '</dt><dd class="ui_tpicker_' + litem + '"><div class="ui_tpicker_' + litem + '_slider"' + (show ? "" : noDisplay) + "></div>";
          if (show && o[litem + "Grid"] > 0) {
            html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';
            if (litem === "hour") {
              for (var h = o[litem + "Min"]; h <= max[litem]; h += parseInt(o[litem + "Grid"], 10)) {
                gridSize[litem]++;
                var tmph = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {
                  hour: h
                }, o);
                html += '<td data-for="' + litem + '">' + tmph + "</td>"
              }
            } else {
              for (var m = o[litem + "Min"]; m <= max[litem]; m += parseInt(o[litem + "Grid"], 10)) {
                gridSize[litem]++;
                html += '<td data-for="' + litem + '">' + ((m < 10) ? "0" : "") + m + "</td>"
              }
            }
            html += "</tr></table></div>"
          }
          html += "</dd>"
        }
        var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone;
        html += '<dt class="ui_tpicker_timezone_label"' + (showTz ? "" : noDisplay) + ">" + o.timezoneText + "</dt>";
        html += '<dd class="ui_tpicker_timezone" ' + (showTz ? "" : noDisplay) + "></dd>";
        html += "</dl></div>";
        var $tp = $(html);
        if (o.timeOnly === true) {
          $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ff-ui-datepicker-title">' + o.timeOnlyTitle + "</div></div>");
          $dp.find(".ff-ui-datepicker-header, .ff-ui-datepicker-calendar").hide()
        }
        for (i = 0, l = tp_inst.units.length; i < l; i++) {
          litem = tp_inst.units[i];
          uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
          show = o["show" + uitem] !== null ? o["show" + uitem] : this.support[litem];
          tp_inst[litem + "_slider"] = tp_inst.control.create(tp_inst, $tp.find(".ui_tpicker_" + litem + "_slider"), litem, tp_inst[litem], o[litem + "Min"], max[litem], o["step" + uitem]);
          if (show && o[litem + "Grid"] > 0) {
            size = 100 * gridSize[litem] * o[litem + "Grid"] / (max[litem] - o[litem + "Min"]);
            $tp.find(".ui_tpicker_" + litem + " table").css({
              width: size + "%",
              marginLeft: o.isRTL ? "0" : ((size / (-2 * gridSize[litem])) + "%"),
              marginRight: o.isRTL ? ((size / (-2 * gridSize[litem])) + "%") : "0",
              borderCollapse: "collapse"
            }).find("td").click(function(e) {
              var $t = $(this),
                h = $t.html(),
                n = parseInt(h.replace(/[^0-9]/g), 10),
                ap = h.replace(/[^apm]/ig),
                f = $t.data("for");
              if (f === "hour") {
                if (ap.indexOf("p") !== -1 && n < 12) {
                  n += 12
                } else {
                  if (ap.indexOf("a") !== -1 && n === 12) {
                    n = 0
                  }
                }
              }
              tp_inst.control.value(tp_inst, tp_inst[f + "_slider"], litem, n);
              tp_inst._onTimeChange();
              tp_inst._onSelectHandler()
            }).css({
              cursor: "pointer",
              width: (100 / gridSize[litem]) + "%",
              textAlign: "center",
              overflow: "hidden"
            })
          }
        }
        this.timezone_select = $tp.find(".ui_tpicker_timezone").append("<select></select>").find("select");
        $.fn.append.apply(this.timezone_select, $.map(o.timezoneList, function(val, idx) {
          return $("<option />").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val)
        }));
        if (typeof(this.timezone) !== "undefined" && this.timezone !== null && this.timezone !== "") {
          var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset() * -1;
          if (local_timezone === this.timezone) {
            selectLocalTimezone(tp_inst)
          } else {
            this.timezone_select.val(this.timezone)
          }
        } else {
          if (typeof(this.hour) !== "undefined" && this.hour !== null && this.hour !== "") {
            this.timezone_select.val(o.timezone)
          } else {
            selectLocalTimezone(tp_inst)
          }
        }
        this.timezone_select.change(function() {
          tp_inst._onTimeChange();
          tp_inst._onSelectHandler()
        });
        var $buttonPanel = $dp.find(".ff-ui-datepicker-buttonpane");
        if ($buttonPanel.length) {
          $buttonPanel.before($tp)
        } else {
          $dp.append($tp)
        }
        this.$timeObj = $tp.find(".ui_tpicker_time");
        if (this.inst !== null) {
          var timeDefined = this.timeDefined;
          this._onTimeChange();
          this.timeDefined = timeDefined
        }
        if (this._defaults.addSliderAccess) {
          var sliderAccessArgs = this._defaults.sliderAccessArgs,
            rtl = this._defaults.isRTL;
          sliderAccessArgs.isRTL = rtl;
          setTimeout(function() {
            if ($tp.find(".ui-slider-access").length === 0) {
              $tp.find(".ui-slider:visible").sliderAccess(sliderAccessArgs);
              var sliderAccessWidth = $tp.find(".ui-slider-access:eq(0)").outerWidth(true);
              if (sliderAccessWidth) {
                $tp.find("table:visible").each(function() {
                  var $g = $(this),
                    oldWidth = $g.outerWidth(),
                    oldMarginLeft = $g.css(rtl ? "marginRight" : "marginLeft").toString().replace("%", ""),
                    newWidth = oldWidth - sliderAccessWidth,
                    newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + "%",
                    css = {
                      width: newWidth,
                      marginRight: 0,
                      marginLeft: 0
                    };
                  css[rtl ? "marginRight" : "marginLeft"] = newMarginLeft;
                  $g.css(css)
                })
              }
            }
          }, 10)
        }
        tp_inst._limitMinMaxDateTime(this.inst, true)
      }
    },
    _limitMinMaxDateTime: function(dp_inst, adjustSliders) {
      var o = this._defaults,
        dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);
      if (!this._defaults.showTimepicker) {
        return
      }
      if ($.datepicker._get(dp_inst, "minDateTime") !== null && $.datepicker._get(dp_inst, "minDateTime") !== undefined && dp_date) {
        var minDateTime = $.datepicker._get(dp_inst, "minDateTime"),
          minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);
        if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
          this.hourMinOriginal = o.hourMin;
          this.minuteMinOriginal = o.minuteMin;
          this.secondMinOriginal = o.secondMin;
          this.millisecMinOriginal = o.millisecMin;
          this.microsecMinOriginal = o.microsecMin
        }
        if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) {
          this._defaults.hourMin = minDateTime.getHours();
          if (this.hour <= this._defaults.hourMin) {
            this.hour = this._defaults.hourMin;
            this._defaults.minuteMin = minDateTime.getMinutes();
            if (this.minute <= this._defaults.minuteMin) {
              this.minute = this._defaults.minuteMin;
              this._defaults.secondMin = minDateTime.getSeconds();
              if (this.second <= this._defaults.secondMin) {
                this.second = this._defaults.secondMin;
                this._defaults.millisecMin = minDateTime.getMilliseconds();
                if (this.millisec <= this._defaults.millisecMin) {
                  this.millisec = this._defaults.millisecMin;
                  this._defaults.microsecMin = minDateTime.getMicroseconds()
                } else {
                  if (this.microsec < this._defaults.microsecMin) {
                    this.microsec = this._defaults.microsecMin
                  }
                  this._defaults.microsecMin = this.microsecMinOriginal
                }
              } else {
                this._defaults.millisecMin = this.millisecMinOriginal;
                this._defaults.microsecMin = this.microsecMinOriginal
              }
            } else {
              this._defaults.secondMin = this.secondMinOriginal;
              this._defaults.millisecMin = this.millisecMinOriginal;
              this._defaults.microsecMin = this.microsecMinOriginal
            }
          } else {
            this._defaults.minuteMin = this.minuteMinOriginal;
            this._defaults.secondMin = this.secondMinOriginal;
            this._defaults.millisecMin = this.millisecMinOriginal;
            this._defaults.microsecMin = this.microsecMinOriginal
          }
        } else {
          this._defaults.hourMin = this.hourMinOriginal;
          this._defaults.minuteMin = this.minuteMinOriginal;
          this._defaults.secondMin = this.secondMinOriginal;
          this._defaults.millisecMin = this.millisecMinOriginal;
          this._defaults.microsecMin = this.microsecMinOriginal
        }
      }
      if ($.datepicker._get(dp_inst, "maxDateTime") !== null && $.datepicker._get(dp_inst, "maxDateTime") !== undefined && dp_date) {
        var maxDateTime = $.datepicker._get(dp_inst, "maxDateTime"),
          maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);
        if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
          this.hourMaxOriginal = o.hourMax;
          this.minuteMaxOriginal = o.minuteMax;
          this.secondMaxOriginal = o.secondMax;
          this.millisecMaxOriginal = o.millisecMax;
          this.microsecMaxOriginal = o.microsecMax
        }
        if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) {
          this._defaults.hourMax = maxDateTime.getHours();
          if (this.hour >= this._defaults.hourMax) {
            this.hour = this._defaults.hourMax;
            this._defaults.minuteMax = maxDateTime.getMinutes();
            if (this.minute >= this._defaults.minuteMax) {
              this.minute = this._defaults.minuteMax;
              this._defaults.secondMax = maxDateTime.getSeconds();
              if (this.second >= this._defaults.secondMax) {
                this.second = this._defaults.secondMax;
                this._defaults.millisecMax = maxDateTime.getMilliseconds();
                if (this.millisec >= this._defaults.millisecMax) {
                  this.millisec = this._defaults.millisecMax;
                  this._defaults.microsecMax = maxDateTime.getMicroseconds()
                } else {
                  if (this.microsec > this._defaults.microsecMax) {
                    this.microsec = this._defaults.microsecMax
                  }
                  this._defaults.microsecMax = this.microsecMaxOriginal
                }
              } else {
                this._defaults.millisecMax = this.millisecMaxOriginal;
                this._defaults.microsecMax = this.microsecMaxOriginal
              }
            } else {
              this._defaults.secondMax = this.secondMaxOriginal;
              this._defaults.millisecMax = this.millisecMaxOriginal;
              this._defaults.microsecMax = this.microsecMaxOriginal
            }
          } else {
            this._defaults.minuteMax = this.minuteMaxOriginal;
            this._defaults.secondMax = this.secondMaxOriginal;
            this._defaults.millisecMax = this.millisecMaxOriginal;
            this._defaults.microsecMax = this.microsecMaxOriginal
          }
        } else {
          this._defaults.hourMax = this.hourMaxOriginal;
          this._defaults.minuteMax = this.minuteMaxOriginal;
          this._defaults.secondMax = this.secondMaxOriginal;
          this._defaults.millisecMax = this.millisecMaxOriginal;
          this._defaults.microsecMax = this.microsecMaxOriginal
        }
      }
      if (dp_inst.settings.minTime !== null) {
        var tempMinTime = new Date("01/01/1970 " + dp_inst.settings.minTime);
        if (this.hour < tempMinTime.getHours()) {
          this.hour = this._defaults.hourMin = tempMinTime.getHours();
          this.minute = this._defaults.minuteMin = tempMinTime.getMinutes()
        } else {
          if (this.hour === tempMinTime.getHours() && this.minute < tempMinTime.getMinutes()) {
            this.minute = this._defaults.minuteMin = tempMinTime.getMinutes()
          } else {
            if (this._defaults.hourMin < tempMinTime.getHours()) {
              this._defaults.hourMin = tempMinTime.getHours();
              this._defaults.minuteMin = tempMinTime.getMinutes()
            } else {
              if (this._defaults.hourMin === tempMinTime.getHours() === this.hour && this._defaults.minuteMin < tempMinTime.getMinutes()) {
                this._defaults.minuteMin = tempMinTime.getMinutes()
              } else {
                this._defaults.minuteMin = 0
              }
            }
          }
        }
      }
      if (dp_inst.settings.maxTime !== null) {
        var tempMaxTime = new Date("01/01/1970 " + dp_inst.settings.maxTime);
        if (this.hour > tempMaxTime.getHours()) {
          this.hour = this._defaults.hourMax = tempMaxTime.getHours();
          this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes()
        } else {
          if (this.hour === tempMaxTime.getHours() && this.minute > tempMaxTime.getMinutes()) {
            this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes()
          } else {
            if (this._defaults.hourMax > tempMaxTime.getHours()) {
              this._defaults.hourMax = tempMaxTime.getHours();
              this._defaults.minuteMax = tempMaxTime.getMinutes()
            } else {
              if (this._defaults.hourMax === tempMaxTime.getHours() === this.hour && this._defaults.minuteMax > tempMaxTime.getMinutes()) {
                this._defaults.minuteMax = tempMaxTime.getMinutes()
              } else {
                this._defaults.minuteMax = 59
              }
            }
          }
        }
      }
      if (adjustSliders !== undefined && adjustSliders === true) {
        var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
          minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
          secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
          millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10),
          microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10);
        if (this.hour_slider) {
          this.control.options(this, this.hour_slider, "hour", {
            min: this._defaults.hourMin,
            max: hourMax,
            step: this._defaults.stepHour
          });
          this.control.value(this, this.hour_slider, "hour", this.hour - (this.hour % this._defaults.stepHour))
        }
        if (this.minute_slider) {
          this.control.options(this, this.minute_slider, "minute", {
            min: this._defaults.minuteMin,
            max: minMax,
            step: this._defaults.stepMinute
          });
          this.control.value(this, this.minute_slider, "minute", this.minute - (this.minute % this._defaults.stepMinute))
        }
        if (this.second_slider) {
          this.control.options(this, this.second_slider, "second", {
            min: this._defaults.secondMin,
            max: secMax,
            step: this._defaults.stepSecond
          });
          this.control.value(this, this.second_slider, "second", this.second - (this.second % this._defaults.stepSecond))
        }
        if (this.millisec_slider) {
          this.control.options(this, this.millisec_slider, "millisec", {
            min: this._defaults.millisecMin,
            max: millisecMax,
            step: this._defaults.stepMillisec
          });
          this.control.value(this, this.millisec_slider, "millisec", this.millisec - (this.millisec % this._defaults.stepMillisec))
        }
        if (this.microsec_slider) {
          this.control.options(this, this.microsec_slider, "microsec", {
            min: this._defaults.microsecMin,
            max: microsecMax,
            step: this._defaults.stepMicrosec
          });
          this.control.value(this, this.microsec_slider, "microsec", this.microsec - (this.microsec % this._defaults.stepMicrosec))
        }
      }
    },
    _onTimeChange: function() {
      if (!this._defaults.showTimepicker) {
        return
      }
      var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, "hour") : false,
        minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, "minute") : false,
        second = (this.second_slider) ? this.control.value(this, this.second_slider, "second") : false,
        millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, "millisec") : false,
        microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, "microsec") : false,
        timezone = (this.timezone_select) ? this.timezone_select.val() : false,
        o = this._defaults,
        pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
        pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;
      if (typeof(hour) === "object") {
        hour = false
      }
      if (typeof(minute) === "object") {
        minute = false
      }
      if (typeof(second) === "object") {
        second = false
      }
      if (typeof(millisec) === "object") {
        millisec = false
      }
      if (typeof(microsec) === "object") {
        microsec = false
      }
      if (typeof(timezone) === "object") {
        timezone = false
      }
      if (hour !== false) {
        hour = parseInt(hour, 10)
      }
      if (minute !== false) {
        minute = parseInt(minute, 10)
      }
      if (second !== false) {
        second = parseInt(second, 10)
      }
      if (millisec !== false) {
        millisec = parseInt(millisec, 10)
      }
      if (microsec !== false) {
        microsec = parseInt(microsec, 10)
      }
      if (timezone !== false) {
        timezone = timezone.toString()
      }
      var ampm = o[hour < 12 ? "amNames" : "pmNames"][0];
      var hasChanged = (hour !== parseInt(this.hour, 10) || minute !== parseInt(this.minute, 10) || second !== parseInt(this.second, 10) || millisec !== parseInt(this.millisec, 10) || microsec !== parseInt(this.microsec, 10) || (this.ampm.length > 0 && (hour < 12) !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) || (this.timezone !== null && timezone !== this.timezone.toString()));
      if (hasChanged) {
        if (hour !== false) {
          this.hour = hour
        }
        if (minute !== false) {
          this.minute = minute
        }
        if (second !== false) {
          this.second = second
        }
        if (millisec !== false) {
          this.millisec = millisec
        }
        if (microsec !== false) {
          this.microsec = microsec
        }
        if (timezone !== false) {
          this.timezone = timezone
        }
        if (!this.inst) {
          this.inst = $.datepicker._getInst(this.$input[0])
        }
        this._limitMinMaxDateTime(this.inst, true)
      }
      if (this.support.ampm) {
        this.ampm = ampm
      }
      this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
      if (this.$timeObj) {
        if (pickerTimeFormat === o.timeFormat) {
          this.$timeObj.text(this.formattedTime + pickerTimeSuffix)
        } else {
          this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix)
        }
      }
      this.timeDefined = true;
      if (hasChanged) {
        this._updateDateTime()
      }
    },
    _onSelectHandler: function() {
      var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
      var inputEl = this.$input ? this.$input[0] : null;
      if (onSelect && inputEl) {
        onSelect.apply(inputEl, [this.formattedDateTime, this])
      }
    },
    _updateDateTime: function(dp_inst) {
      dp_inst = this.inst || dp_inst;
      var dtTmp = (dp_inst.currentYear > 0 ? new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
        dt = $.datepicker._daylightSavingAdjust(dtTmp),
        dateFmt = $.datepicker._get(dp_inst, "dateFormat"),
        formatCfg = $.datepicker._getFormatConfig(dp_inst),
        timeAvailable = dt !== null && this.timeDefined;
      this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
      var formattedDateTime = this.formattedDate;
      if (dp_inst.lastVal === "") {
        dp_inst.currentYear = dp_inst.selectedYear;
        dp_inst.currentMonth = dp_inst.selectedMonth;
        dp_inst.currentDay = dp_inst.selectedDay
      }
      if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) {
        formattedDateTime = this.formattedTime
      } else {
        if ((this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) || (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true)) {
          formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix
        }
      }
      this.formattedDateTime = formattedDateTime;
      if (!this._defaults.showTimepicker) {
        this.$input.val(this.formattedDate)
      } else {
        if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
          this.$altInput.val(this.formattedTime);
          this.$input.val(this.formattedDate)
        } else {
          if (this.$altInput) {
            this.$input.val(formattedDateTime);
            var altFormattedDateTime = "",
              altSeparator = this._defaults.altSeparator !== null ? this._defaults.altSeparator : this._defaults.separator,
              altTimeSuffix = this._defaults.altTimeSuffix !== null ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
            if (!this._defaults.timeOnly) {
              if (this._defaults.altFormat) {
                altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg)
              } else {
                altFormattedDateTime = this.formattedDate
              }
              if (altFormattedDateTime) {
                altFormattedDateTime += altSeparator
              }
            }
            if (this._defaults.altTimeFormat !== null) {
              altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix
            } else {
              altFormattedDateTime += this.formattedTime + altTimeSuffix
            }
            this.$altInput.val(altFormattedDateTime)
          } else {
            this.$input.val(formattedDateTime)
          }
        }
      }
      this.$input.trigger("change")
    },
    _onFocus: function() {
      if (!this.$input.val() && this._defaults.defaultValue) {
        this.$input.val(this._defaults.defaultValue);
        var inst = $.datepicker._getInst(this.$input.get(0)),
          tp_inst = $.datepicker._get(inst, "timepicker");
        if (tp_inst) {
          if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
            try {
              $.datepicker._updateDatepicker(inst)
            } catch (err) {
              $.timepicker.log(err)
            }
          }
        }
      }
    },
    _controls: {
      slider: {
        create: function(tp_inst, obj, unit, val, min, max, step) {
          var rtl = tp_inst._defaults.isRTL;
          return obj.prop("slide", null).slider({
            orientation: "horizontal",
            value: rtl ? val * -1 : val,
            min: rtl ? max * -1 : min,
            max: rtl ? min * -1 : max,
            step: step,
            slide: function(event, ui) {
              tp_inst.control.value(tp_inst, $(this), unit, rtl ? ui.value * -1 : ui.value);
              tp_inst._onTimeChange()
            },
            stop: function(event, ui) {
              tp_inst._onSelectHandler()
            }
          })
        },
        options: function(tp_inst, obj, unit, opts, val) {
          if (tp_inst._defaults.isRTL) {
            if (typeof(opts) === "string") {
              if (opts === "min" || opts === "max") {
                if (val !== undefined) {
                  return obj.slider(opts, val * -1)
                }
                return Math.abs(obj.slider(opts))
              }
              return obj.slider(opts)
            }
            var min = opts.min,
              max = opts.max;
            opts.min = opts.max = null;
            if (min !== undefined) {
              opts.max = min * -1
            }
            if (max !== undefined) {
              opts.min = max * -1
            }
            return obj.slider(opts)
          }
          if (typeof(opts) === "string" && val !== undefined) {
            return obj.slider(opts, val)
          }
          return obj.slider(opts)
        },
        value: function(tp_inst, obj, unit, val) {
          if (tp_inst._defaults.isRTL) {
            if (val !== undefined) {
              return obj.slider("value", val * -1)
            }
            return Math.abs(obj.slider("value"))
          }
          if (val !== undefined) {
            return obj.slider("value", val)
          }
          return obj.slider("value")
        }
      },
      select: {
        create: function(tp_inst, obj, unit, val, min, max, step) {
          var sel = '<select class="ui-timepicker-select" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">',
            format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;
          for (var i = min; i <= max; i += step) {
            sel += '<option value="' + i + '"' + (i === val ? " selected" : "") + ">";
            if (unit === "hour") {
              sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig, "")), {
                hour: i
              }, tp_inst._defaults)
            } else {
              if (unit === "millisec" || unit === "microsec" || i >= 10) {
                sel += i
              } else {
                sel += "0" + i.toString()
              }
            }
            sel += "</option>"
          }
          sel += "</select>";
          obj.children("select").remove();
          $(sel).appendTo(obj).change(function(e) {
            tp_inst._onTimeChange();
            tp_inst._onSelectHandler()
          });
          return obj
        },
        options: function(tp_inst, obj, unit, opts, val) {
          var o = {},
            $t = obj.children("select");
          if (typeof(opts) === "string") {
            if (val === undefined) {
              return $t.data(opts)
            }
            o[opts] = val
          } else {
            o = opts
          }
          return tp_inst.control.create(tp_inst, obj, $t.data("unit"), $t.val(), o.min || $t.data("min"), o.max || $t.data("max"), o.step || $t.data("step"))
        },
        value: function(tp_inst, obj, unit, val) {
          var $t = obj.children("select");
          if (val !== undefined) {
            return $t.val(val)
          }
          return $t.val()
        }
      }
    }
  });
  $.fn.extend({
    timepicker: function(o) {
      o = o || {};
      var tmp_args = Array.prototype.slice.call(arguments);
      if (typeof o === "object") {
        tmp_args[0] = $.extend(o, {
          timeOnly: true
        })
      }
      return $(this).each(function() {
        $.fn.datetimepicker.apply($(this), tmp_args)
      })
    },
    datetimepicker: function(o) {
      o = o || {};
      var tmp_args = arguments;
      if (typeof(o) === "string") {
        if (o === "getDate" || (o === "option" && tmp_args.length === 2 && typeof(tmp_args[1]) === "string")) {
          return $.fn.datepicker.apply($(this[0]), tmp_args)
        } else {
          return this.each(function() {
            var $t = $(this);
            $t.datepicker.apply($t, tmp_args)
          })
        }
      } else {
        return this.each(function() {
          var $t = $(this);
          $t.datepicker($.timepicker._newInst($t, o)._defaults)
        })
      }
    }
  });
  $.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
    var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
    if (parseRes.timeObj) {
      var t = parseRes.timeObj;
      parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
      parseRes.date.setMicroseconds(t.microsec)
    }
    return parseRes.date
  };
  $.datepicker.parseTime = function(timeFormat, timeString, options) {
    var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
      iso8601 = (timeFormat.replace(/\'.*?\'/g, "").indexOf("Z") !== -1);
    var strictParse = function(f, s, o) {
      var getPatternAmpm = function(amNames, pmNames) {
        var markers = [];
        if (amNames) {
          $.merge(markers, amNames)
        }
        if (pmNames) {
          $.merge(markers, pmNames)
        }
        markers = $.map(markers, function(val) {
          return val.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
        });
        return "(" + markers.join("|") + ")?"
      };
      var getFormatPositions = function(timeFormat) {
        var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
          orders = {
            h: -1,
            m: -1,
            s: -1,
            l: -1,
            c: -1,
            t: -1,
            z: -1
          };
        if (finds) {
          for (var i = 0; i < finds.length; i++) {
            if (orders[finds[i].toString().charAt(0)] === -1) {
              orders[finds[i].toString().charAt(0)] = i + 1
            }
          }
        }
        return orders
      };
      var regstr = "^" + f.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) {
          var ml = match.length;
          switch (match.charAt(0).toLowerCase()) {
            case "h":
              return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
            case "m":
              return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
            case "s":
              return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
            case "l":
              return "(\\d?\\d?\\d)";
            case "c":
              return "(\\d?\\d?\\d)";
            case "z":
              return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
            case "t":
              return getPatternAmpm(o.amNames, o.pmNames);
            default:
              return "(" + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(m) {
                return "\\" + m
              }) + ")?"
          }
        }).replace(/\s/g, "\\s?") + o.timeSuffix + "$",
        order = getFormatPositions(f),
        ampm = "",
        treg;
      treg = s.match(new RegExp(regstr, "i"));
      var resTime = {
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0
      };
      if (treg) {
        if (order.t !== -1) {
          if (treg[order.t] === undefined || treg[order.t].length === 0) {
            ampm = "";
            resTime.ampm = ""
          } else {
            ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? "AM" : "PM";
            resTime.ampm = o[ampm === "AM" ? "amNames" : "pmNames"][0]
          }
        }
        if (order.h !== -1) {
          if (ampm === "AM" && treg[order.h] === "12") {
            resTime.hour = 0
          } else {
            if (ampm === "PM" && treg[order.h] !== "12") {
              resTime.hour = parseInt(treg[order.h], 10) + 12
            } else {
              resTime.hour = Number(treg[order.h])
            }
          }
        }
        if (order.m !== -1) {
          resTime.minute = Number(treg[order.m])
        }
        if (order.s !== -1) {
          resTime.second = Number(treg[order.s])
        }
        if (order.l !== -1) {
          resTime.millisec = Number(treg[order.l])
        }
        if (order.c !== -1) {
          resTime.microsec = Number(treg[order.c])
        }
        if (order.z !== -1 && treg[order.z] !== undefined) {
          resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z])
        }
        return resTime
      }
      return false
    };
    var looseParse = function(f, s, o) {
      try {
        var d = new Date("2012-01-01 " + s);
        if (isNaN(d.getTime())) {
          d = new Date("2012-01-01T" + s);
          if (isNaN(d.getTime())) {
            d = new Date("01/01/2012 " + s);
            if (isNaN(d.getTime())) {
              throw "Unable to parse time with native Date: " + s
            }
          }
        }
        return {
          hour: d.getHours(),
          minute: d.getMinutes(),
          second: d.getSeconds(),
          millisec: d.getMilliseconds(),
          microsec: d.getMicroseconds(),
          timezone: d.getTimezoneOffset() * -1
        }
      } catch (err) {
        try {
          return strictParse(f, s, o)
        } catch (err2) {
          $.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f)
        }
      }
      return false
    };
    if (typeof o.parse === "function") {
      return o.parse(timeFormat, timeString, o)
    }
    if (o.parse === "loose") {
      return looseParse(timeFormat, timeString, o)
    }
    return strictParse(timeFormat, timeString, o)
  };
  $.datepicker.formatTime = function(format, time, options) {
    options = options || {};
    options = $.extend({}, $.timepicker._defaults, options);
    time = $.extend({
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      microsec: 0,
      timezone: null
    }, time);
    var tmptime = format,
      ampmName = options.amNames[0],
      hour = parseInt(time.hour, 10);
    if (hour > 11) {
      ampmName = options.pmNames[0]
    }
    tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) {
      switch (match) {
        case "HH":
          return ("0" + hour).slice(-2);
        case "H":
          return hour;
        case "hh":
          return ("0" + convert24to12(hour)).slice(-2);
        case "h":
          return convert24to12(hour);
        case "mm":
          return ("0" + time.minute).slice(-2);
        case "m":
          return time.minute;
        case "ss":
          return ("0" + time.second).slice(-2);
        case "s":
          return time.second;
        case "l":
          return ("00" + time.millisec).slice(-3);
        case "c":
          return ("00" + time.microsec).slice(-3);
        case "z":
          return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false);
        case "Z":
          return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true);
        case "T":
          return ampmName.charAt(0).toUpperCase();
        case "TT":
          return ampmName.toUpperCase();
        case "t":
          return ampmName.charAt(0).toLowerCase();
        case "tt":
          return ampmName.toLowerCase();
        default:
          return match.replace(/'/g, "")
      }
    });
    return tmptime
  };
  $.datepicker._base_selectDate = $.datepicker._selectDate;
  $.datepicker._selectDate = function(id, dateStr) {
    var inst = this._getInst($(id)[0]),
      tp_inst = this._get(inst, "timepicker");
    if (tp_inst && inst.settings.showTimepicker) {
      tp_inst._limitMinMaxDateTime(inst, true);
      inst.inline = inst.stay_open = true;
      this._base_selectDate(id, dateStr);
      inst.inline = inst.stay_open = false;
      this._notifyChange(inst);
      this._updateDatepicker(inst)
    } else {
      this._base_selectDate(id, dateStr)
    }
  };
  $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
  $.datepicker._updateDatepicker = function(inst) {
    var input = inst.input[0];
    if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) {
      return
    }
    if (typeof(inst.stay_open) !== "boolean" || inst.stay_open === false) {
      this._base_updateDatepicker(inst);
      var tp_inst = this._get(inst, "timepicker");
      if (tp_inst) {
        tp_inst._addTimePicker(inst)
      }
    }
  };
  $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
  $.datepicker._doKeyPress = function(event) {
    var inst = $.datepicker._getInst(event.target),
      tp_inst = $.datepicker._get(inst, "timepicker");
    if (tp_inst) {
      if ($.datepicker._get(inst, "constrainInput")) {
        var ampm = tp_inst.support.ampm,
          tz = tp_inst._defaults.showTimezone !== null ? tp_inst._defaults.showTimezone : tp_inst.support.timezone,
          dateChars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat")),
          datetimeChars = tp_inst._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, ampm ? "APM" : "").replace(/Tt/g, ampm ? "AaPpMm" : "").replace(/tT/g, ampm ? "AaPpMm" : "").replace(/T/g, ampm ? "AP" : "").replace(/tt/g, ampm ? "apm" : "").replace(/t/g, ampm ? "ap" : "") + " " + tp_inst._defaults.separator + tp_inst._defaults.timeSuffix + (tz ? tp_inst._defaults.timezoneList.join("") : "") + (tp_inst._defaults.amNames.join("")) + (tp_inst._defaults.pmNames.join("")) + dateChars,
          chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
        return event.ctrlKey || (chr < " " || !dateChars || datetimeChars.indexOf(chr) > -1)
      }
    }
    return $.datepicker._base_doKeyPress(event)
  };
  $.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
  $.datepicker._updateAlternate = function(inst) {
    var tp_inst = this._get(inst, "timepicker");
    if (tp_inst) {
      var altField = tp_inst._defaults.altField;
      if (altField) {
        var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
          date = this._getDate(inst),
          formatCfg = $.datepicker._getFormatConfig(inst),
          altFormattedDateTime = "",
          altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator,
          altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
          altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
        altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
        if (!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null) {
          if (tp_inst._defaults.altFormat) {
            altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime
          } else {
            altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime
          }
        }
        $(altField).val(inst.input.val() ? altFormattedDateTime : "")
      }
    } else {
      $.datepicker._base_updateAlternate(inst)
    }
  };
  $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
  $.datepicker._doKeyUp = function(event) {
    var inst = $.datepicker._getInst(event.target),
      tp_inst = $.datepicker._get(inst, "timepicker");
    if (tp_inst) {
      if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
        try {
          $.datepicker._updateDatepicker(inst)
        } catch (err) {
          $.timepicker.log(err)
        }
      }
    }
    return $.datepicker._base_doKeyUp(event)
  };
  $.datepicker._base_gotoToday = $.datepicker._gotoToday;
  $.datepicker._gotoToday = function(id) {
    var inst = this._getInst($(id)[0]),
      $dp = inst.dpDiv;
    this._base_gotoToday(id);
    var tp_inst = this._get(inst, "timepicker");
    selectLocalTimezone(tp_inst);
    var now = new Date();
    this._setTime(inst, now);
    $(".ff-ui-datepicker-today", $dp).click()
  };
  $.datepicker._disableTimepickerDatepicker = function(target) {
    var inst = this._getInst(target);
    if (!inst) {
      return
    }
    var tp_inst = this._get(inst, "timepicker");
    $(target).datepicker("getDate");
    if (tp_inst) {
      inst.settings.showTimepicker = false;
      tp_inst._defaults.showTimepicker = false;
      tp_inst._updateDateTime(inst)
    }
  };
  $.datepicker._enableTimepickerDatepicker = function(target) {
    var inst = this._getInst(target);
    if (!inst) {
      return
    }
    var tp_inst = this._get(inst, "timepicker");
    $(target).datepicker("getDate");
    if (tp_inst) {
      inst.settings.showTimepicker = true;
      tp_inst._defaults.showTimepicker = true;
      tp_inst._addTimePicker(inst);
      tp_inst._updateDateTime(inst)
    }
  };
  $.datepicker._setTime = function(inst, date) {
    var tp_inst = this._get(inst, "timepicker");
    if (tp_inst) {
      var defaults = tp_inst._defaults;
      tp_inst.hour = date ? date.getHours() : defaults.hour;
      tp_inst.minute = date ? date.getMinutes() : defaults.minute;
      tp_inst.second = date ? date.getSeconds() : defaults.second;
      tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
      tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;
      tp_inst._limitMinMaxDateTime(inst, true);
      tp_inst._onTimeChange();
      tp_inst._updateDateTime(inst)
    }
  };
  $.datepicker._setTimeDatepicker = function(target, date, withDate) {
    var inst = this._getInst(target);
    if (!inst) {
      return
    }
    var tp_inst = this._get(inst, "timepicker");
    if (tp_inst) {
      this._setDateFromField(inst);
      var tp_date;
      if (date) {
        if (typeof date === "string") {
          tp_inst._parseTime(date, withDate);
          tp_date = new Date();
          tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
          tp_date.setMicroseconds(tp_inst.microsec)
        } else {
          tp_date = new Date(date.getTime());
          tp_date.setMicroseconds(date.getMicroseconds())
        }
        if (tp_date.toString() === "Invalid Date") {
          tp_date = undefined
        }
        this._setTime(inst, tp_date)
      }
    }
  };
  $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
  $.datepicker._setDateDatepicker = function(target, _date) {
    var inst = this._getInst(target);
    var date = _date;
    if (!inst) {
      return
    }
    if (typeof(_date) === "string") {
      date = new Date(_date);
      if (!date.getTime()) {
        this._base_setDateDatepicker.apply(this, arguments);
        date = $(target).datepicker("getDate")
      }
    }
    var tp_inst = this._get(inst, "timepicker");
    var tp_date;
    if (date instanceof Date) {
      tp_date = new Date(date.getTime());
      tp_date.setMicroseconds(date.getMicroseconds())
    } else {
      tp_date = date
    }
    if (tp_inst && tp_date) {
      if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
        tp_inst.timezone = tp_date.getTimezoneOffset() * -1
      }
      date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
      tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone)
    }
    this._updateDatepicker(inst);
    this._base_setDateDatepicker.apply(this, arguments);
    this._setTimeDatepicker(target, tp_date, true)
  };
  $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
  $.datepicker._getDateDatepicker = function(target, noDefault) {
    var inst = this._getInst(target);
    if (!inst) {
      return
    }
    var tp_inst = this._get(inst, "timepicker");
    if (tp_inst) {
      if (inst.lastVal === undefined) {
        this._setDateFromField(inst, noDefault)
      }
      var date = this._getDate(inst);
      if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
        date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
        date.setMicroseconds(tp_inst.microsec);
        if (tp_inst.timezone != null) {
          if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
            tp_inst.timezone = date.getTimezoneOffset() * -1
          }
          date = $.timepicker.timezoneAdjust(date, tp_inst.timezone)
        }
      }
      return date
    }
    return this._base_getDateDatepicker(target, noDefault)
  };
  $.datepicker._base_parseDate = $.datepicker.parseDate;
  $.datepicker.parseDate = function(format, value, settings) {
    var date;
    try {
      date = this._base_parseDate(format, value, settings)
    } catch (err) {
      if (err.indexOf(":") >= 0) {
        date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(":") - 2)), settings);
        $.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format)
      } else {
        throw err
      }
    }
    return date
  };
  $.datepicker._base_formatDate = $.datepicker._formatDate;
  $.datepicker._formatDate = function(inst, day, month, year) {
    var tp_inst = this._get(inst, "timepicker");
    if (tp_inst) {
      tp_inst._updateDateTime(inst);
      return tp_inst.$input.val()
    }
    return this._base_formatDate(inst)
  };
  $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
  $.datepicker._optionDatepicker = function(target, name, value) {
    var inst = this._getInst(target),
      name_clone;
    if (!inst) {
      return null
    }
    var tp_inst = this._get(inst, "timepicker");
    if (tp_inst) {
      var min = null,
        max = null,
        onselect = null,
        overrides = tp_inst._defaults.evnts,
        fns = {},
        prop;
      if (typeof name === "string") {
        if (name === "minDate" || name === "minDateTime") {
          min = value
        } else {
          if (name === "maxDate" || name === "maxDateTime") {
            max = value
          } else {
            if (name === "onSelect") {
              onselect = value
            } else {
              if (overrides.hasOwnProperty(name)) {
                if (typeof(value) === "undefined") {
                  return overrides[name]
                }
                fns[name] = value;
                name_clone = {}
              }
            }
          }
        }
      } else {
        if (typeof name === "object") {
          if (name.minDate) {
            min = name.minDate
          } else {
            if (name.minDateTime) {
              min = name.minDateTime
            } else {
              if (name.maxDate) {
                max = name.maxDate
              } else {
                if (name.maxDateTime) {
                  max = name.maxDateTime
                }
              }
            }
          }
          for (prop in overrides) {
            if (overrides.hasOwnProperty(prop) && name[prop]) {
              fns[prop] = name[prop]
            }
          }
        }
      }
      for (prop in fns) {
        if (fns.hasOwnProperty(prop)) {
          overrides[prop] = fns[prop];
          if (!name_clone) {
            name_clone = $.extend({}, name)
          }
          delete name_clone[prop]
        }
      }
      if (name_clone && isEmptyObject(name_clone)) {
        return
      }
      if (min) {
        if (min === 0) {
          min = new Date()
        } else {
          min = new Date(min)
        }
        tp_inst._defaults.minDate = min;
        tp_inst._defaults.minDateTime = min
      } else {
        if (max) {
          if (max === 0) {
            max = new Date()
          } else {
            max = new Date(max)
          }
          tp_inst._defaults.maxDate = max;
          tp_inst._defaults.maxDateTime = max
        } else {
          if (onselect) {
            tp_inst._defaults.onSelect = onselect
          }
        }
      }
    }
    if (value === undefined) {
      return this._base_optionDatepicker.call($.datepicker, target, name)
    }
    return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value)
  };
  var isEmptyObject = function(obj) {
    var prop;
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false
      }
    }
    return true
  };
  var extendRemove = function(target, props) {
    $.extend(target, props);
    for (var name in props) {
      if (props[name] === null || props[name] === undefined) {
        target[name] = props[name]
      }
    }
    return target
  };
  var detectSupport = function(timeFormat) {
    var tf = timeFormat.replace(/'.*?'/g, "").toLowerCase(),
      isIn = function(f, t) {
        return f.indexOf(t) !== -1 ? true : false
      };
    return {
      hour: isIn(tf, "h"),
      minute: isIn(tf, "m"),
      second: isIn(tf, "s"),
      millisec: isIn(tf, "l"),
      microsec: isIn(tf, "c"),
      timezone: isIn(tf, "z"),
      ampm: isIn(tf, "t") && isIn(timeFormat, "h"),
      iso8601: isIn(timeFormat, "Z")
    }
  };
  var convert24to12 = function(hour) {
    hour %= 12;
    if (hour === 0) {
      hour = 12
    }
    return String(hour)
  };
  var computeEffectiveSetting = function(settings, property) {
    return settings && settings[property] ? settings[property] : $.timepicker._defaults[property]
  };
  var splitDateTime = function(dateTimeString, timeSettings) {
    var separator = computeEffectiveSetting(timeSettings, "separator"),
      format = computeEffectiveSetting(timeSettings, "timeFormat"),
      timeParts = format.split(separator),
      timePartsLen = timeParts.length,
      allParts = dateTimeString.split(separator),
      allPartsLen = allParts.length;
    if (allPartsLen > 1) {
      return {
        dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator),
        timeString: allParts.splice(0, timePartsLen).join(separator)
      }
    }
    return {
      dateString: dateTimeString,
      timeString: ""
    }
  };
  var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
    var date, parts, parsedTime;
    parts = splitDateTime(dateTimeString, timeSettings);
    date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings);
    if (parts.timeString === "") {
      return {
        date: date
      }
    }
    parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings);
    if (!parsedTime) {
      throw "Wrong time format"
    }
    return {
      date: date,
      timeObj: parsedTime
    }
  };
  var selectLocalTimezone = function(tp_inst, date) {
    if (tp_inst && tp_inst.timezone_select) {
      var now = date || new Date();
      tp_inst.timezone_select.val(-now.getTimezoneOffset())
    }
  };
  $.timepicker = new Timepicker();
  $.timepicker.timezoneOffsetString = function(tzMinutes, iso8601) {
    if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) {
      return tzMinutes
    }
    var off = tzMinutes,
      minutes = off % 60,
      hours = (off - minutes) / 60,
      iso = iso8601 ? ":" : "",
      tz = (off >= 0 ? "+" : "-") + ("0" + Math.abs(hours)).slice(-2) + iso + ("0" + Math.abs(minutes)).slice(-2);
    if (tz === "+00:00") {
      return "Z"
    }
    return tz
  };
  $.timepicker.timezoneOffsetNumber = function(tzString) {
    var normalized = tzString.toString().replace(":", "");
    if (normalized.toUpperCase() === "Z") {
      return 0
    }
    if (!/^(\-|\+)\d{4}$/.test(normalized)) {
      return tzString
    }
    return ((normalized.substr(0, 1) === "-" ? -1 : 1) * ((parseInt(normalized.substr(1, 2), 10) * 60) + parseInt(normalized.substr(3, 2), 10)))
  };
  $.timepicker.timezoneAdjust = function(date, toTimezone) {
    var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
    if (!isNaN(toTz)) {
      date.setMinutes(date.getMinutes() + -date.getTimezoneOffset() - toTz)
    }
    return date
  };
  $.timepicker.timeRange = function(startTime, endTime, options) {
    return $.timepicker.handleRange("timepicker", startTime, endTime, options)
  };
  $.timepicker.datetimeRange = function(startTime, endTime, options) {
    $.timepicker.handleRange("datetimepicker", startTime, endTime, options)
  };
  $.timepicker.dateRange = function(startTime, endTime, options) {
    $.timepicker.handleRange("datepicker", startTime, endTime, options)
  };
  $.timepicker.handleRange = function(method, startTime, endTime, options) {
    options = $.extend({}, {
      minInterval: 0,
      maxInterval: 0,
      start: {},
      end: {}
    }, options);
    var timeOnly = false;
    if (method === "timepicker") {
      timeOnly = true;
      method = "datetimepicker"
    }

    function checkDates(changed, other) {
      var startdt = startTime[method]("getDate"),
        enddt = endTime[method]("getDate"),
        changeddt = changed[method]("getDate");
      if (startdt !== null) {
        var minDate = new Date(startdt.getTime()),
          maxDate = new Date(startdt.getTime());
        minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
        maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);
        if (options.minInterval > 0 && minDate > enddt) {
          endTime[method]("setDate", minDate)
        } else {
          if (options.maxInterval > 0 && maxDate < enddt) {
            endTime[method]("setDate", maxDate)
          } else {
            if (startdt > enddt) {
              other[method]("setDate", changeddt)
            }
          }
        }
      }
    }

    function selected(changed, other, option) {
      if (!changed.val()) {
        return
      }
      var date = changed[method].call(changed, "getDate");
      if (date !== null && options.minInterval > 0) {
        if (option === "minDate") {
          date.setMilliseconds(date.getMilliseconds() + options.minInterval)
        }
        if (option === "maxDate") {
          date.setMilliseconds(date.getMilliseconds() - options.minInterval)
        }
      }
      if (date.getTime) {
        other[method].call(other, "option", option, date)
      }
    }
    $.fn[method].call(startTime, $.extend({
      timeOnly: timeOnly,
      onClose: function(dateText, inst) {
        checkDates($(this), endTime)
      },
      onSelect: function(selectedDateTime) {
        selected($(this), endTime, "minDate")
      }
    }, options, options.start));
    $.fn[method].call(endTime, $.extend({
      timeOnly: timeOnly,
      onClose: function(dateText, inst) {
        checkDates($(this), startTime)
      },
      onSelect: function(selectedDateTime) {
        selected($(this), startTime, "maxDate")
      }
    }, options, options.end));
    checkDates(startTime, endTime);
    selected(startTime, endTime, "minDate");
    selected(endTime, startTime, "maxDate");
    return $([startTime.get(0), endTime.get(0)])
  };
  $.timepicker.log = function(err) {
    if (window.console) {
      window.console.log(err)
    }
  };
  $.timepicker._util = {
    _extendRemove: extendRemove,
    _isEmptyObject: isEmptyObject,
    _convert24to12: convert24to12,
    _detectSupport: detectSupport,
    _selectLocalTimezone: selectLocalTimezone,
    _computeEffectiveSetting: computeEffectiveSetting,
    _splitDateTime: splitDateTime,
    _parseDateTimeInternal: parseDateTimeInternal
  };
  if (!Date.prototype.getMicroseconds) {
    Date.prototype.microseconds = 0;
    Date.prototype.getMicroseconds = function() {
      return this.microseconds
    };
    Date.prototype.setMicroseconds = function(m) {
      this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1000));
      this.microseconds = m % 1000;
      return this
    }
  }
  $.timepicker.version = "@@version"
})(jQuery);
(function($) {
  if (typeof $.fn.each2 == "undefined") {
    $.extend($.fn, {
      each2: function(c) {
        var j = $([0]),
          i = -1,
          l = this.length;
        while (++i < l && (j.context = j[0] = this[i]) && c.call(j[0], i, j) !== false) {}
        return this
      }
    })
  }
})(jQuery);
(function($, undefined) {
  if (window.Select2 !== undefined) {
    return
  }
  var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer, lastMousePosition = {
      x: 0,
      y: 0
    },
    $document, scrollBarDimensions, KEY = {
      TAB: 9,
      ENTER: 13,
      ESC: 27,
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      HOME: 36,
      END: 35,
      BACKSPACE: 8,
      DELETE: 46,
      isArrow: function(k) {
        k = k.which ? k.which : k;
        switch (k) {
          case KEY.LEFT:
          case KEY.RIGHT:
          case KEY.UP:
          case KEY.DOWN:
            return true
        }
        return false
      },
      isControl: function(e) {
        var k = e.which;
        switch (k) {
          case KEY.SHIFT:
          case KEY.CTRL:
          case KEY.ALT:
            return true
        }
        if (e.metaKey) {
          return true
        }
        return false
      },
      isFunctionKey: function(k) {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123
      }
    },
    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",
    DIACRITICS = {
      "\u24B6": "A",
      "\uFF21": "A",
      "\u00C0": "A",
      "\u00C1": "A",
      "\u00C2": "A",
      "\u1EA6": "A",
      "\u1EA4": "A",
      "\u1EAA": "A",
      "\u1EA8": "A",
      "\u00C3": "A",
      "\u0100": "A",
      "\u0102": "A",
      "\u1EB0": "A",
      "\u1EAE": "A",
      "\u1EB4": "A",
      "\u1EB2": "A",
      "\u0226": "A",
      "\u01E0": "A",
      "\u00C4": "A",
      "\u01DE": "A",
      "\u1EA2": "A",
      "\u00C5": "A",
      "\u01FA": "A",
      "\u01CD": "A",
      "\u0200": "A",
      "\u0202": "A",
      "\u1EA0": "A",
      "\u1EAC": "A",
      "\u1EB6": "A",
      "\u1E00": "A",
      "\u0104": "A",
      "\u023A": "A",
      "\u2C6F": "A",
      "\uA732": "AA",
      "\u00C6": "AE",
      "\u01FC": "AE",
      "\u01E2": "AE",
      "\uA734": "AO",
      "\uA736": "AU",
      "\uA738": "AV",
      "\uA73A": "AV",
      "\uA73C": "AY",
      "\u24B7": "B",
      "\uFF22": "B",
      "\u1E02": "B",
      "\u1E04": "B",
      "\u1E06": "B",
      "\u0243": "B",
      "\u0182": "B",
      "\u0181": "B",
      "\u24B8": "C",
      "\uFF23": "C",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u00C7": "C",
      "\u1E08": "C",
      "\u0187": "C",
      "\u023B": "C",
      "\uA73E": "C",
      "\u24B9": "D",
      "\uFF24": "D",
      "\u1E0A": "D",
      "\u010E": "D",
      "\u1E0C": "D",
      "\u1E10": "D",
      "\u1E12": "D",
      "\u1E0E": "D",
      "\u0110": "D",
      "\u018B": "D",
      "\u018A": "D",
      "\u0189": "D",
      "\uA779": "D",
      "\u01F1": "DZ",
      "\u01C4": "DZ",
      "\u01F2": "Dz",
      "\u01C5": "Dz",
      "\u24BA": "E",
      "\uFF25": "E",
      "\u00C8": "E",
      "\u00C9": "E",
      "\u00CA": "E",
      "\u1EC0": "E",
      "\u1EBE": "E",
      "\u1EC4": "E",
      "\u1EC2": "E",
      "\u1EBC": "E",
      "\u0112": "E",
      "\u1E14": "E",
      "\u1E16": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u00CB": "E",
      "\u1EBA": "E",
      "\u011A": "E",
      "\u0204": "E",
      "\u0206": "E",
      "\u1EB8": "E",
      "\u1EC6": "E",
      "\u0228": "E",
      "\u1E1C": "E",
      "\u0118": "E",
      "\u1E18": "E",
      "\u1E1A": "E",
      "\u0190": "E",
      "\u018E": "E",
      "\u24BB": "F",
      "\uFF26": "F",
      "\u1E1E": "F",
      "\u0191": "F",
      "\uA77B": "F",
      "\u24BC": "G",
      "\uFF27": "G",
      "\u01F4": "G",
      "\u011C": "G",
      "\u1E20": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u01E6": "G",
      "\u0122": "G",
      "\u01E4": "G",
      "\u0193": "G",
      "\uA7A0": "G",
      "\uA77D": "G",
      "\uA77E": "G",
      "\u24BD": "H",
      "\uFF28": "H",
      "\u0124": "H",
      "\u1E22": "H",
      "\u1E26": "H",
      "\u021E": "H",
      "\u1E24": "H",
      "\u1E28": "H",
      "\u1E2A": "H",
      "\u0126": "H",
      "\u2C67": "H",
      "\u2C75": "H",
      "\uA78D": "H",
      "\u24BE": "I",
      "\uFF29": "I",
      "\u00CC": "I",
      "\u00CD": "I",
      "\u00CE": "I",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u0130": "I",
      "\u00CF": "I",
      "\u1E2E": "I",
      "\u1EC8": "I",
      "\u01CF": "I",
      "\u0208": "I",
      "\u020A": "I",
      "\u1ECA": "I",
      "\u012E": "I",
      "\u1E2C": "I",
      "\u0197": "I",
      "\u24BF": "J",
      "\uFF2A": "J",
      "\u0134": "J",
      "\u0248": "J",
      "\u24C0": "K",
      "\uFF2B": "K",
      "\u1E30": "K",
      "\u01E8": "K",
      "\u1E32": "K",
      "\u0136": "K",
      "\u1E34": "K",
      "\u0198": "K",
      "\u2C69": "K",
      "\uA740": "K",
      "\uA742": "K",
      "\uA744": "K",
      "\uA7A2": "K",
      "\u24C1": "L",
      "\uFF2C": "L",
      "\u013F": "L",
      "\u0139": "L",
      "\u013D": "L",
      "\u1E36": "L",
      "\u1E38": "L",
      "\u013B": "L",
      "\u1E3C": "L",
      "\u1E3A": "L",
      "\u0141": "L",
      "\u023D": "L",
      "\u2C62": "L",
      "\u2C60": "L",
      "\uA748": "L",
      "\uA746": "L",
      "\uA780": "L",
      "\u01C7": "LJ",
      "\u01C8": "Lj",
      "\u24C2": "M",
      "\uFF2D": "M",
      "\u1E3E": "M",
      "\u1E40": "M",
      "\u1E42": "M",
      "\u2C6E": "M",
      "\u019C": "M",
      "\u24C3": "N",
      "\uFF2E": "N",
      "\u01F8": "N",
      "\u0143": "N",
      "\u00D1": "N",
      "\u1E44": "N",
      "\u0147": "N",
      "\u1E46": "N",
      "\u0145": "N",
      "\u1E4A": "N",
      "\u1E48": "N",
      "\u0220": "N",
      "\u019D": "N",
      "\uA790": "N",
      "\uA7A4": "N",
      "\u01CA": "NJ",
      "\u01CB": "Nj",
      "\u24C4": "O",
      "\uFF2F": "O",
      "\u00D2": "O",
      "\u00D3": "O",
      "\u00D4": "O",
      "\u1ED2": "O",
      "\u1ED0": "O",
      "\u1ED6": "O",
      "\u1ED4": "O",
      "\u00D5": "O",
      "\u1E4C": "O",
      "\u022C": "O",
      "\u1E4E": "O",
      "\u014C": "O",
      "\u1E50": "O",
      "\u1E52": "O",
      "\u014E": "O",
      "\u022E": "O",
      "\u0230": "O",
      "\u00D6": "O",
      "\u022A": "O",
      "\u1ECE": "O",
      "\u0150": "O",
      "\u01D1": "O",
      "\u020C": "O",
      "\u020E": "O",
      "\u01A0": "O",
      "\u1EDC": "O",
      "\u1EDA": "O",
      "\u1EE0": "O",
      "\u1EDE": "O",
      "\u1EE2": "O",
      "\u1ECC": "O",
      "\u1ED8": "O",
      "\u01EA": "O",
      "\u01EC": "O",
      "\u00D8": "O",
      "\u01FE": "O",
      "\u0186": "O",
      "\u019F": "O",
      "\uA74A": "O",
      "\uA74C": "O",
      "\u01A2": "OI",
      "\uA74E": "OO",
      "\u0222": "OU",
      "\u24C5": "P",
      "\uFF30": "P",
      "\u1E54": "P",
      "\u1E56": "P",
      "\u01A4": "P",
      "\u2C63": "P",
      "\uA750": "P",
      "\uA752": "P",
      "\uA754": "P",
      "\u24C6": "Q",
      "\uFF31": "Q",
      "\uA756": "Q",
      "\uA758": "Q",
      "\u024A": "Q",
      "\u24C7": "R",
      "\uFF32": "R",
      "\u0154": "R",
      "\u1E58": "R",
      "\u0158": "R",
      "\u0210": "R",
      "\u0212": "R",
      "\u1E5A": "R",
      "\u1E5C": "R",
      "\u0156": "R",
      "\u1E5E": "R",
      "\u024C": "R",
      "\u2C64": "R",
      "\uA75A": "R",
      "\uA7A6": "R",
      "\uA782": "R",
      "\u24C8": "S",
      "\uFF33": "S",
      "\u1E9E": "S",
      "\u015A": "S",
      "\u1E64": "S",
      "\u015C": "S",
      "\u1E60": "S",
      "\u0160": "S",
      "\u1E66": "S",
      "\u1E62": "S",
      "\u1E68": "S",
      "\u0218": "S",
      "\u015E": "S",
      "\u2C7E": "S",
      "\uA7A8": "S",
      "\uA784": "S",
      "\u24C9": "T",
      "\uFF34": "T",
      "\u1E6A": "T",
      "\u0164": "T",
      "\u1E6C": "T",
      "\u021A": "T",
      "\u0162": "T",
      "\u1E70": "T",
      "\u1E6E": "T",
      "\u0166": "T",
      "\u01AC": "T",
      "\u01AE": "T",
      "\u023E": "T",
      "\uA786": "T",
      "\uA728": "TZ",
      "\u24CA": "U",
      "\uFF35": "U",
      "\u00D9": "U",
      "\u00DA": "U",
      "\u00DB": "U",
      "\u0168": "U",
      "\u1E78": "U",
      "\u016A": "U",
      "\u1E7A": "U",
      "\u016C": "U",
      "\u00DC": "U",
      "\u01DB": "U",
      "\u01D7": "U",
      "\u01D5": "U",
      "\u01D9": "U",
      "\u1EE6": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u01D3": "U",
      "\u0214": "U",
      "\u0216": "U",
      "\u01AF": "U",
      "\u1EEA": "U",
      "\u1EE8": "U",
      "\u1EEE": "U",
      "\u1EEC": "U",
      "\u1EF0": "U",
      "\u1EE4": "U",
      "\u1E72": "U",
      "\u0172": "U",
      "\u1E76": "U",
      "\u1E74": "U",
      "\u0244": "U",
      "\u24CB": "V",
      "\uFF36": "V",
      "\u1E7C": "V",
      "\u1E7E": "V",
      "\u01B2": "V",
      "\uA75E": "V",
      "\u0245": "V",
      "\uA760": "VY",
      "\u24CC": "W",
      "\uFF37": "W",
      "\u1E80": "W",
      "\u1E82": "W",
      "\u0174": "W",
      "\u1E86": "W",
      "\u1E84": "W",
      "\u1E88": "W",
      "\u2C72": "W",
      "\u24CD": "X",
      "\uFF38": "X",
      "\u1E8A": "X",
      "\u1E8C": "X",
      "\u24CE": "Y",
      "\uFF39": "Y",
      "\u1EF2": "Y",
      "\u00DD": "Y",
      "\u0176": "Y",
      "\u1EF8": "Y",
      "\u0232": "Y",
      "\u1E8E": "Y",
      "\u0178": "Y",
      "\u1EF6": "Y",
      "\u1EF4": "Y",
      "\u01B3": "Y",
      "\u024E": "Y",
      "\u1EFE": "Y",
      "\u24CF": "Z",
      "\uFF3A": "Z",
      "\u0179": "Z",
      "\u1E90": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u1E92": "Z",
      "\u1E94": "Z",
      "\u01B5": "Z",
      "\u0224": "Z",
      "\u2C7F": "Z",
      "\u2C6B": "Z",
      "\uA762": "Z",
      "\u24D0": "a",
      "\uFF41": "a",
      "\u1E9A": "a",
      "\u00E0": "a",
      "\u00E1": "a",
      "\u00E2": "a",
      "\u1EA7": "a",
      "\u1EA5": "a",
      "\u1EAB": "a",
      "\u1EA9": "a",
      "\u00E3": "a",
      "\u0101": "a",
      "\u0103": "a",
      "\u1EB1": "a",
      "\u1EAF": "a",
      "\u1EB5": "a",
      "\u1EB3": "a",
      "\u0227": "a",
      "\u01E1": "a",
      "\u00E4": "a",
      "\u01DF": "a",
      "\u1EA3": "a",
      "\u00E5": "a",
      "\u01FB": "a",
      "\u01CE": "a",
      "\u0201": "a",
      "\u0203": "a",
      "\u1EA1": "a",
      "\u1EAD": "a",
      "\u1EB7": "a",
      "\u1E01": "a",
      "\u0105": "a",
      "\u2C65": "a",
      "\u0250": "a",
      "\uA733": "aa",
      "\u00E6": "ae",
      "\u01FD": "ae",
      "\u01E3": "ae",
      "\uA735": "ao",
      "\uA737": "au",
      "\uA739": "av",
      "\uA73B": "av",
      "\uA73D": "ay",
      "\u24D1": "b",
      "\uFF42": "b",
      "\u1E03": "b",
      "\u1E05": "b",
      "\u1E07": "b",
      "\u0180": "b",
      "\u0183": "b",
      "\u0253": "b",
      "\u24D2": "c",
      "\uFF43": "c",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u00E7": "c",
      "\u1E09": "c",
      "\u0188": "c",
      "\u023C": "c",
      "\uA73F": "c",
      "\u2184": "c",
      "\u24D3": "d",
      "\uFF44": "d",
      "\u1E0B": "d",
      "\u010F": "d",
      "\u1E0D": "d",
      "\u1E11": "d",
      "\u1E13": "d",
      "\u1E0F": "d",
      "\u0111": "d",
      "\u018C": "d",
      "\u0256": "d",
      "\u0257": "d",
      "\uA77A": "d",
      "\u01F3": "dz",
      "\u01C6": "dz",
      "\u24D4": "e",
      "\uFF45": "e",
      "\u00E8": "e",
      "\u00E9": "e",
      "\u00EA": "e",
      "\u1EC1": "e",
      "\u1EBF": "e",
      "\u1EC5": "e",
      "\u1EC3": "e",
      "\u1EBD": "e",
      "\u0113": "e",
      "\u1E15": "e",
      "\u1E17": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u00EB": "e",
      "\u1EBB": "e",
      "\u011B": "e",
      "\u0205": "e",
      "\u0207": "e",
      "\u1EB9": "e",
      "\u1EC7": "e",
      "\u0229": "e",
      "\u1E1D": "e",
      "\u0119": "e",
      "\u1E19": "e",
      "\u1E1B": "e",
      "\u0247": "e",
      "\u025B": "e",
      "\u01DD": "e",
      "\u24D5": "f",
      "\uFF46": "f",
      "\u1E1F": "f",
      "\u0192": "f",
      "\uA77C": "f",
      "\u24D6": "g",
      "\uFF47": "g",
      "\u01F5": "g",
      "\u011D": "g",
      "\u1E21": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u01E7": "g",
      "\u0123": "g",
      "\u01E5": "g",
      "\u0260": "g",
      "\uA7A1": "g",
      "\u1D79": "g",
      "\uA77F": "g",
      "\u24D7": "h",
      "\uFF48": "h",
      "\u0125": "h",
      "\u1E23": "h",
      "\u1E27": "h",
      "\u021F": "h",
      "\u1E25": "h",
      "\u1E29": "h",
      "\u1E2B": "h",
      "\u1E96": "h",
      "\u0127": "h",
      "\u2C68": "h",
      "\u2C76": "h",
      "\u0265": "h",
      "\u0195": "hv",
      "\u24D8": "i",
      "\uFF49": "i",
      "\u00EC": "i",
      "\u00ED": "i",
      "\u00EE": "i",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u00EF": "i",
      "\u1E2F": "i",
      "\u1EC9": "i",
      "\u01D0": "i",
      "\u0209": "i",
      "\u020B": "i",
      "\u1ECB": "i",
      "\u012F": "i",
      "\u1E2D": "i",
      "\u0268": "i",
      "\u0131": "i",
      "\u24D9": "j",
      "\uFF4A": "j",
      "\u0135": "j",
      "\u01F0": "j",
      "\u0249": "j",
      "\u24DA": "k",
      "\uFF4B": "k",
      "\u1E31": "k",
      "\u01E9": "k",
      "\u1E33": "k",
      "\u0137": "k",
      "\u1E35": "k",
      "\u0199": "k",
      "\u2C6A": "k",
      "\uA741": "k",
      "\uA743": "k",
      "\uA745": "k",
      "\uA7A3": "k",
      "\u24DB": "l",
      "\uFF4C": "l",
      "\u0140": "l",
      "\u013A": "l",
      "\u013E": "l",
      "\u1E37": "l",
      "\u1E39": "l",
      "\u013C": "l",
      "\u1E3D": "l",
      "\u1E3B": "l",
      "\u017F": "l",
      "\u0142": "l",
      "\u019A": "l",
      "\u026B": "l",
      "\u2C61": "l",
      "\uA749": "l",
      "\uA781": "l",
      "\uA747": "l",
      "\u01C9": "lj",
      "\u24DC": "m",
      "\uFF4D": "m",
      "\u1E3F": "m",
      "\u1E41": "m",
      "\u1E43": "m",
      "\u0271": "m",
      "\u026F": "m",
      "\u24DD": "n",
      "\uFF4E": "n",
      "\u01F9": "n",
      "\u0144": "n",
      "\u00F1": "n",
      "\u1E45": "n",
      "\u0148": "n",
      "\u1E47": "n",
      "\u0146": "n",
      "\u1E4B": "n",
      "\u1E49": "n",
      "\u019E": "n",
      "\u0272": "n",
      "\u0149": "n",
      "\uA791": "n",
      "\uA7A5": "n",
      "\u01CC": "nj",
      "\u24DE": "o",
      "\uFF4F": "o",
      "\u00F2": "o",
      "\u00F3": "o",
      "\u00F4": "o",
      "\u1ED3": "o",
      "\u1ED1": "o",
      "\u1ED7": "o",
      "\u1ED5": "o",
      "\u00F5": "o",
      "\u1E4D": "o",
      "\u022D": "o",
      "\u1E4F": "o",
      "\u014D": "o",
      "\u1E51": "o",
      "\u1E53": "o",
      "\u014F": "o",
      "\u022F": "o",
      "\u0231": "o",
      "\u00F6": "o",
      "\u022B": "o",
      "\u1ECF": "o",
      "\u0151": "o",
      "\u01D2": "o",
      "\u020D": "o",
      "\u020F": "o",
      "\u01A1": "o",
      "\u1EDD": "o",
      "\u1EDB": "o",
      "\u1EE1": "o",
      "\u1EDF": "o",
      "\u1EE3": "o",
      "\u1ECD": "o",
      "\u1ED9": "o",
      "\u01EB": "o",
      "\u01ED": "o",
      "\u00F8": "o",
      "\u01FF": "o",
      "\u0254": "o",
      "\uA74B": "o",
      "\uA74D": "o",
      "\u0275": "o",
      "\u01A3": "oi",
      "\u0223": "ou",
      "\uA74F": "oo",
      "\u24DF": "p",
      "\uFF50": "p",
      "\u1E55": "p",
      "\u1E57": "p",
      "\u01A5": "p",
      "\u1D7D": "p",
      "\uA751": "p",
      "\uA753": "p",
      "\uA755": "p",
      "\u24E0": "q",
      "\uFF51": "q",
      "\u024B": "q",
      "\uA757": "q",
      "\uA759": "q",
      "\u24E1": "r",
      "\uFF52": "r",
      "\u0155": "r",
      "\u1E59": "r",
      "\u0159": "r",
      "\u0211": "r",
      "\u0213": "r",
      "\u1E5B": "r",
      "\u1E5D": "r",
      "\u0157": "r",
      "\u1E5F": "r",
      "\u024D": "r",
      "\u027D": "r",
      "\uA75B": "r",
      "\uA7A7": "r",
      "\uA783": "r",
      "\u24E2": "s",
      "\uFF53": "s",
      "\u00DF": "s",
      "\u015B": "s",
      "\u1E65": "s",
      "\u015D": "s",
      "\u1E61": "s",
      "\u0161": "s",
      "\u1E67": "s",
      "\u1E63": "s",
      "\u1E69": "s",
      "\u0219": "s",
      "\u015F": "s",
      "\u023F": "s",
      "\uA7A9": "s",
      "\uA785": "s",
      "\u1E9B": "s",
      "\u24E3": "t",
      "\uFF54": "t",
      "\u1E6B": "t",
      "\u1E97": "t",
      "\u0165": "t",
      "\u1E6D": "t",
      "\u021B": "t",
      "\u0163": "t",
      "\u1E71": "t",
      "\u1E6F": "t",
      "\u0167": "t",
      "\u01AD": "t",
      "\u0288": "t",
      "\u2C66": "t",
      "\uA787": "t",
      "\uA729": "tz",
      "\u24E4": "u",
      "\uFF55": "u",
      "\u00F9": "u",
      "\u00FA": "u",
      "\u00FB": "u",
      "\u0169": "u",
      "\u1E79": "u",
      "\u016B": "u",
      "\u1E7B": "u",
      "\u016D": "u",
      "\u00FC": "u",
      "\u01DC": "u",
      "\u01D8": "u",
      "\u01D6": "u",
      "\u01DA": "u",
      "\u1EE7": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u01D4": "u",
      "\u0215": "u",
      "\u0217": "u",
      "\u01B0": "u",
      "\u1EEB": "u",
      "\u1EE9": "u",
      "\u1EEF": "u",
      "\u1EED": "u",
      "\u1EF1": "u",
      "\u1EE5": "u",
      "\u1E73": "u",
      "\u0173": "u",
      "\u1E77": "u",
      "\u1E75": "u",
      "\u0289": "u",
      "\u24E5": "v",
      "\uFF56": "v",
      "\u1E7D": "v",
      "\u1E7F": "v",
      "\u028B": "v",
      "\uA75F": "v",
      "\u028C": "v",
      "\uA761": "vy",
      "\u24E6": "w",
      "\uFF57": "w",
      "\u1E81": "w",
      "\u1E83": "w",
      "\u0175": "w",
      "\u1E87": "w",
      "\u1E85": "w",
      "\u1E98": "w",
      "\u1E89": "w",
      "\u2C73": "w",
      "\u24E7": "x",
      "\uFF58": "x",
      "\u1E8B": "x",
      "\u1E8D": "x",
      "\u24E8": "y",
      "\uFF59": "y",
      "\u1EF3": "y",
      "\u00FD": "y",
      "\u0177": "y",
      "\u1EF9": "y",
      "\u0233": "y",
      "\u1E8F": "y",
      "\u00FF": "y",
      "\u1EF7": "y",
      "\u1E99": "y",
      "\u1EF5": "y",
      "\u01B4": "y",
      "\u024F": "y",
      "\u1EFF": "y",
      "\u24E9": "z",
      "\uFF5A": "z",
      "\u017A": "z",
      "\u1E91": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u1E93": "z",
      "\u1E95": "z",
      "\u01B6": "z",
      "\u0225": "z",
      "\u0240": "z",
      "\u2C6C": "z",
      "\uA763": "z",
      "\u0386": "\u0391",
      "\u0388": "\u0395",
      "\u0389": "\u0397",
      "\u038A": "\u0399",
      "\u03AA": "\u0399",
      "\u038C": "\u039F",
      "\u038E": "\u03A5",
      "\u03AB": "\u03A5",
      "\u038F": "\u03A9",
      "\u03AC": "\u03B1",
      "\u03AD": "\u03B5",
      "\u03AE": "\u03B7",
      "\u03AF": "\u03B9",
      "\u03CA": "\u03B9",
      "\u0390": "\u03B9",
      "\u03CC": "\u03BF",
      "\u03CD": "\u03C5",
      "\u03CB": "\u03C5",
      "\u03B0": "\u03C5",
      "\u03C9": "\u03C9",
      "\u03C2": "\u03C3"
    };
  $document = $(document);
  nextUid = (function() {
    var counter = 1;
    return function() {
      return counter++
    }
  }());

  function reinsertElement(element) {
    var placeholder = $(document.createTextNode(""));
    element.before(placeholder);
    placeholder.before(element);
    placeholder.remove()
  }

  function stripDiacritics(str) {
    function match(a) {
      return DIACRITICS[a] || a
    }
    return str.replace(/[^\u0000-\u007E]/g, match)
  }

  function indexOf(value, array) {
    var i = 0,
      l = array.length;
    for (; i < l; i = i + 1) {
      if (equal(value, array[i])) {
        return i
      }
    }
    return -1
  }

  function measureScrollbar() {
    var $template = $(MEASURE_SCROLLBAR_TEMPLATE);
    $template.appendTo("body");
    var dim = {
      width: $template.width() - $template[0].clientWidth,
      height: $template.height() - $template[0].clientHeight
    };
    $template.remove();
    return dim
  }

  function equal(a, b) {
    if (a === b) {
      return true
    }
    if (a === undefined || b === undefined) {
      return false
    }
    if (a === null || b === null) {
      return false
    }
    if (a.constructor === String) {
      return a + "" === b + ""
    }
    if (b.constructor === String) {
      return b + "" === a + ""
    }
    return false
  }

  function splitVal(string, separator) {
    var val, i, l;
    if (string === null || string.length < 1) {
      return []
    }
    val = string.split(separator);
    for (i = 0, l = val.length; i < l; i = i + 1) {
      val[i] = $.trim(val[i])
    }
    return val
  }

  function getSideBorderPadding(element) {
    return element.outerWidth(false) - element.width()
  }

  function installKeyUpChangeEvent(element) {
    var key = "keyup-change-value";
    element.on("keydown", function() {
      if ($.data(element, key) === undefined) {
        $.data(element, key, element.val())
      }
    });
    element.on("keyup", function() {
      var val = $.data(element, key);
      if (val !== undefined && element.val() !== val) {
        $.removeData(element, key);
        element.trigger("keyup-change")
      }
    })
  }

  function installFilteredMouseMove(element) {
    element.on("mousemove", function(e) {
      var lastpos = lastMousePosition;
      if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
        $(e.target).trigger("mousemove-filtered", e)
      }
    })
  }

  function debounce(quietMillis, fn, ctx) {
    ctx = ctx || undefined;
    var timeout;
    return function() {
      var args = arguments;
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function() {
        fn.apply(ctx, args)
      }, quietMillis)
    }
  }

  function installDebouncedScroll(threshold, element) {
    var notify = debounce(threshold, function(e) {
      element.trigger("scroll-debounced", e)
    });
    element.on("scroll", function(e) {
      if (indexOf(e.target, element.get()) >= 0) {
        notify(e)
      }
    })
  }

  function focus($el) {
    if ($el[0] === document.activeElement) {
      return
    }
    window.setTimeout(function() {
      var el = $el[0],
        pos = $el.val().length,
        range;
      $el.focus();
      var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
      if (isVisible && el === document.activeElement) {
        if (el.setSelectionRange) {
          el.setSelectionRange(pos, pos)
        } else {
          if (el.createTextRange) {
            range = el.createTextRange();
            range.collapse(false);
            range.select()
          }
        }
      }
    }, 0)
  }

  function getCursorInfo(el) {
    el = $(el)[0];
    var offset = 0;
    var length = 0;
    if ("selectionStart" in el) {
      offset = el.selectionStart;
      length = el.selectionEnd - offset
    } else {
      if ("selection" in document) {
        el.focus();
        var sel = document.selection.createRange();
        length = document.selection.createRange().text.length;
        sel.moveStart("character", -el.value.length);
        offset = sel.text.length - length
      }
    }
    return {
      offset: offset,
      length: length
    }
  }

  function killEvent(event) {
    event.preventDefault();
    event.stopPropagation()
  }

  function killEventImmediately(event) {
    event.preventDefault();
    event.stopImmediatePropagation()
  }

  function measureTextWidth(e) {
    if (!sizer) {
      var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
      sizer = $(document.createElement("div")).css({
        position: "absolute",
        left: "-10000px",
        top: "-10000px",
        display: "none",
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        fontStyle: style.fontStyle,
        fontWeight: style.fontWeight,
        letterSpacing: style.letterSpacing,
        textTransform: style.textTransform,
        whiteSpace: "nowrap"
      });
      sizer.attr("class", "select2-sizer");
      $("body").append(sizer)
    }
    sizer.text(e.val());
    return sizer.width()
  }

  function syncCssClasses(dest, src, adapter) {
    var classes, replacements = [],
      adapted;
    classes = $.trim(dest.attr("class"));
    if (classes) {
      classes = "" + classes;
      $(classes.split(/\s+/)).each2(function() {
        if (this.indexOf("select2-") === 0) {
          replacements.push(this)
        }
      })
    }
    classes = $.trim(src.attr("class"));
    if (classes) {
      classes = "" + classes;
      $(classes.split(/\s+/)).each2(function() {
        if (this.indexOf("select2-") !== 0) {
          adapted = adapter(this);
          if (adapted) {
            replacements.push(adapted)
          }
        }
      })
    }
    dest.attr("class", replacements.join(" "))
  }

  function markMatch(text, term, markup, escapeMarkup) {
    var match = stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
      tl = term.length;
    if (match < 0) {
      markup.push(escapeMarkup(text));
      return
    }
    markup.push(escapeMarkup(text.substring(0, match)));
    markup.push("<span class='select2-match'>");
    markup.push(escapeMarkup(text.substring(match, match + tl)));
    markup.push("</span>");
    markup.push(escapeMarkup(text.substring(match + tl, text.length)))
  }

  function defaultEscapeMarkup(markup) {
    var replace_map = {
      "\\": "&#92;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#47;"
    };
    return String(markup).replace(/[&<>"'\/\\]/g, function(match) {
      return replace_map[match]
    })
  }

  function ajax(options) {
    var timeout, handler = null,
      quietMillis = options.quietMillis || 100,
      ajaxUrl = options.url,
      self = this;
    return function(query) {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function() {
        var data = options.data,
          url = ajaxUrl,
          transport = options.transport || $.fn.select2.ajaxDefaults.transport,
          deprecated = {
            type: options.type || "GET",
            cache: options.cache || false,
            jsonpCallback: options.jsonpCallback || undefined,
            dataType: options.dataType || "json"
          },
          params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);
        data = data ? data.call(self, query.term, query.page, query.context) : null;
        url = (typeof url === "function") ? url.call(self, query.term, query.page, query.context) : url;
        if (handler && typeof handler.abort === "function") {
          handler.abort()
        }
        if (options.params) {
          if ($.isFunction(options.params)) {
            $.extend(params, options.params.call(self))
          } else {
            $.extend(params, options.params)
          }
        }
        $.extend(params, {
          url: url,
          dataType: options.dataType,
          data: data,
          success: function(data) {
            var results = options.results(data, query.page, query);
            query.callback(results)
          }
        });
        handler = transport.call(self, params)
      }, quietMillis)
    }
  }

  function local(options) {
    var data = options,
      dataText, tmp, text = function(item) {
        return "" + item.text
      };
    if ($.isArray(data)) {
      tmp = data;
      data = {
        results: tmp
      }
    }
    if ($.isFunction(data) === false) {
      tmp = data;
      data = function() {
        return tmp
      }
    }
    var dataItem = data();
    if (dataItem.text) {
      text = dataItem.text;
      if (!$.isFunction(text)) {
        dataText = dataItem.text;
        text = function(item) {
          return item[dataText]
        }
      }
    }
    return function(query) {
      var t = query.term,
        filtered = {
          results: []
        },
        process;
      if (t === "") {
        query.callback(data());
        return
      }
      process = function(datum, collection) {
        var group, attr;
        datum = datum[0];
        if (datum.children) {
          group = {};
          for (attr in datum) {
            if (datum.hasOwnProperty(attr)) {
              group[attr] = datum[attr]
            }
          }
          group.children = [];
          $(datum.children).each2(function(i, childDatum) {
            process(childDatum, group.children)
          });
          if (group.children.length || query.matcher(t, text(group), datum)) {
            collection.push(group)
          }
        } else {
          if (query.matcher(t, text(datum), datum)) {
            collection.push(datum)
          }
        }
      };
      $(data().results).each2(function(i, datum) {
        process(datum, filtered.results)
      });
      query.callback(filtered)
    }
  }

  function tags(data) {
    var isFunc = $.isFunction(data);
    return function(query) {
      var t = query.term,
        filtered = {
          results: []
        };
      var result = isFunc ? data(query) : data;
      if ($.isArray(result)) {
        $(result).each(function() {
          var isObject = this.text !== undefined,
            text = isObject ? this.text : this;
          if (t === "" || query.matcher(t, text)) {
            filtered.results.push(isObject ? this : {
              id: this,
              text: this
            })
          }
        });
        query.callback(filtered)
      }
    }
  }

  function checkFormatter(formatter, formatterName) {
    if ($.isFunction(formatter)) {
      return true
    }
    if (!formatter) {
      return false
    }
    if (typeof(formatter) === "string") {
      return true
    }
    throw new Error(formatterName + " must be a string, function, or falsy value")
  }

  function evaluate(val, context) {
    if ($.isFunction(val)) {
      var args = Array.prototype.slice.call(arguments, 2);
      return val.apply(context, args)
    }
    return val
  }

  function countResults(results) {
    var count = 0;
    $.each(results, function(i, item) {
      if (item.children) {
        count += countResults(item.children)
      } else {
        count++
      }
    });
    return count
  }

  function defaultTokenizer(input, selection, selectCallback, opts) {
    var original = input,
      dupe = false,
      token, index, i, l, separator;
    if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) {
      return undefined
    }
    while (true) {
      index = -1;
      for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
        separator = opts.tokenSeparators[i];
        index = input.indexOf(separator);
        if (index >= 0) {
          break
        }
      }
      if (index < 0) {
        break
      }
      token = input.substring(0, index);
      input = input.substring(index + separator.length);
      if (token.length > 0) {
        token = opts.createSearchChoice.call(this, token, selection);
        if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
          dupe = false;
          for (i = 0, l = selection.length; i < l; i++) {
            if (equal(opts.id(token), opts.id(selection[i]))) {
              dupe = true;
              break
            }
          }
          if (!dupe) {
            selectCallback(token)
          }
        }
      }
    }
    if (original !== input) {
      return input
    }
  }

  function cleanupJQueryElements() {
    var self = this;
    $.each(arguments, function(i, element) {
      self[element].remove();
      self[element] = null
    })
  }

  function clazz(SuperClass, methods) {
    var constructor = function() {};
    constructor.prototype = new SuperClass;
    constructor.prototype.constructor = constructor;
    constructor.prototype.parent = SuperClass.prototype;
    constructor.prototype = $.extend(constructor.prototype, methods);
    return constructor
  }
  AbstractSelect2 = clazz(Object, {
    bind: function(func) {
      var self = this;
      return function() {
        func.apply(self, arguments)
      }
    },
    init: function(opts) {
      var results, search, resultsSelector = ".select2-results";
      this.opts = opts = this.prepareOpts(opts);
      this.id = opts.id;
      if (opts.element.data("select2") !== undefined && opts.element.data("select2") !== null) {
        opts.element.data("select2").destroy()
      }
      this.container = this.createContainer();
      this.liveRegion = $("<span>", {
        role: "status",
        "aria-live": "polite"
      }).addClass("select2-hidden-accessible").appendTo(document.body);
      this.containerId = "s2id_" + (opts.element.attr("id") || "autogen" + nextUid());
      this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
      this.container.attr("id", this.containerId);
      this.container.attr("title", opts.element.attr("title"));
      this.body = $("body");
      syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
      this.container.attr("style", opts.element.attr("style"));
      this.container.css(evaluate(opts.containerCss, this.opts.element));
      this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));
      this.elementTabIndex = this.opts.element.attr("tabindex");
      this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", killEvent);
      this.container.data("select2", this);
      this.dropdown = this.container.find(".select2-drop");
      syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
      this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
      this.dropdown.data("select2", this);
      this.dropdown.on("click", killEvent);
      this.results = results = this.container.find(resultsSelector);
      this.search = search = this.container.find("input.select2-input");
      this.queryCount = 0;
      this.resultsPage = 0;
      this.context = null;
      this.initContainer();
      this.container.on("click", killEvent);
      installFilteredMouseMove(this.results);
      this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
      this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function(event) {
        this._touchEvent = true;
        this.highlightUnderEvent(event)
      }));
      this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
      this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));
      this.dropdown.on("click", this.bind(function(event) {
        if (this._touchEvent) {
          this._touchEvent = false;
          this.selectHighlighted()
        }
      }));
      installDebouncedScroll(80, this.results);
      this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));
      $(this.container).on("change", ".select2-input", function(e) {
        e.stopPropagation()
      });
      $(this.dropdown).on("change", ".select2-input", function(e) {
        e.stopPropagation()
      });
      if ($.fn.mousewheel) {
        results.mousewheel(function(e, delta, deltaX, deltaY) {
          var top = results.scrollTop();
          if (deltaY > 0 && top - deltaY <= 0) {
            results.scrollTop(0);
            killEvent(e)
          } else {
            if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
              results.scrollTop(results.get(0).scrollHeight - results.height());
              killEvent(e)
            }
          }
        })
      }
      installKeyUpChangeEvent(search);
      search.on("keyup-change input paste", this.bind(this.updateResults));
      search.on("focus", function() {
        search.addClass("select2-focused")
      });
      search.on("blur", function() {
        search.removeClass("select2-focused")
      });
      this.dropdown.on("mouseup", resultsSelector, this.bind(function(e) {
        if ($(e.target).closest(".select2-result-selectable").length > 0) {
          this.highlightUnderEvent(e);
          this.selectHighlighted(e)
        }
      }));
      this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(e) {
        e.stopPropagation()
      });
      this.nextSearchTerm = undefined;
      if ($.isFunction(this.opts.initSelection)) {
        this.initSelection();
        this.monitorSource()
      }
      if (opts.maximumInputLength !== null) {
        this.search.attr("maxlength", opts.maximumInputLength)
      }
      var disabled = opts.element.prop("disabled");
      if (disabled === undefined) {
        disabled = false
      }
      this.enable(!disabled);
      var readonly = opts.element.prop("readonly");
      if (readonly === undefined) {
        readonly = false
      }
      this.readonly(readonly);
      scrollBarDimensions = scrollBarDimensions || measureScrollbar();
      this.autofocus = opts.element.prop("autofocus");
      opts.element.prop("autofocus", false);
      if (this.autofocus) {
        this.focus()
      }
      this.search.attr("placeholder", opts.searchInputPlaceholder)
    },
    destroy: function() {
      var element = this.opts.element,
        select2 = element.data("select2");
      this.close();
      if (element.length && element[0].detachEvent) {
        element.each(function() {
          this.detachEvent("onpropertychange", this._sync)
        })
      }
      if (this.propertyObserver) {
        this.propertyObserver.disconnect();
        this.propertyObserver = null
      }
      this._sync = null;
      if (select2 !== undefined) {
        select2.container.remove();
        select2.liveRegion.remove();
        select2.dropdown.remove();
        element.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || false);
        if (this.elementTabIndex) {
          element.attr({
            tabindex: this.elementTabIndex
          })
        } else {
          element.removeAttr("tabindex")
        }
        element.show()
      }
      cleanupJQueryElements.call(this, "container", "liveRegion", "dropdown", "results", "search")
    },
    optionToData: function(element) {
      if (element.is("option")) {
        return {
          id: element.prop("value"),
          text: element.text(),
          element: element.get(),
          css: element.attr("class"),
          disabled: element.prop("disabled"),
          locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
        }
      } else {
        if (element.is("optgroup")) {
          return {
            text: element.attr("label"),
            children: [],
            element: element.get(),
            css: element.attr("class")
          }
        }
      }
    },
    prepareOpts: function(opts) {
      var element, select, idKey, ajaxUrl, self = this;
      element = opts.element;
      if (element.get(0).tagName.toLowerCase() === "select") {
        this.select = select = opts.element
      }
      if (select) {
        $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
          if (this in opts) {
            throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
          }
        })
      }
      opts = $.extend({}, {
        populateResults: function(container, results, query) {
          var populate, id = this.opts.id,
            liveRegion = this.liveRegion;
          populate = function(results, container, depth) {
            var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;
            results = opts.sortResults(results, container, query);
            var nodes = [];
            for (i = 0, l = results.length; i < l; i = i + 1) {
              result = results[i];
              disabled = (result.disabled === true);
              selectable = (!disabled) && (id(result) !== undefined);
              compound = result.children && result.children.length > 0;
              node = $("<li></li>");
              node.addClass("select2-results-dept-" + depth);
              node.addClass("select2-result");
              node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
              if (disabled) {
                node.addClass("select2-disabled")
              }
              if (compound) {
                node.addClass("select2-result-with-children")
              }
              node.addClass(self.opts.formatResultCssClass(result));
              node.attr("role", "presentation");
              label = $(document.createElement("div"));
              label.addClass("select2-result-label");
              label.attr("id", "select2-result-label-" + nextUid());
              label.attr("role", "option");
              formatted = opts.formatResult(result, label, query, self.opts.escapeMarkup);
              if (formatted !== undefined) {
                label.html(formatted);
                node.append(label)
              }
              if (compound) {
                innerContainer = $("<ul></ul>");
                innerContainer.addClass("select2-result-sub");
                populate(result.children, innerContainer, depth + 1);
                node.append(innerContainer)
              }
              node.data("select2-data", result);
              nodes.push(node[0])
            }
            container.append(nodes);
            liveRegion.text(opts.formatMatches(results.length))
          };
          populate(results, container, 0)
        }
      }, $.fn.select2.defaults, opts);
      if (typeof(opts.id) !== "function") {
        idKey = opts.id;
        opts.id = function(e) {
          return e[idKey]
        }
      }
      if ($.isArray(opts.element.data("select2Tags"))) {
        if ("tags" in opts) {
          throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id")
        }
        opts.tags = opts.element.data("select2Tags")
      }
      if (select) {
        opts.query = this.bind(function(query) {
          var data = {
              results: [],
              more: false
            },
            term = query.term,
            children, placeholderOption, process;
          process = function(element, collection) {
            var group;
            if (element.is("option")) {
              if (query.matcher(term, element.text(), element)) {
                collection.push(self.optionToData(element))
              }
            } else {
              if (element.is("optgroup")) {
                group = self.optionToData(element);
                element.children().each2(function(i, elm) {
                  process(elm, group.children)
                });
                if (group.children.length > 0) {
                  collection.push(group)
                }
              }
            }
          };
          children = element.children();
          if (this.getPlaceholder() !== undefined && children.length > 0) {
            placeholderOption = this.getPlaceholderOption();
            if (placeholderOption) {
              children = children.not(placeholderOption)
            }
          }
          children.each2(function(i, elm) {
            process(elm, data.results)
          });
          query.callback(data)
        });
        opts.id = function(e) {
          return e.id
        }
      } else {
        if (!("query" in opts)) {
          if ("ajax" in opts) {
            ajaxUrl = opts.element.data("ajax-url");
            if (ajaxUrl && ajaxUrl.length > 0) {
              opts.ajax.url = ajaxUrl
            }
            opts.query = ajax.call(opts.element, opts.ajax)
          } else {
            if ("data" in opts) {
              opts.query = local(opts.data)
            } else {
              if ("tags" in opts) {
                opts.query = tags(opts.tags);
                if (opts.createSearchChoice === undefined) {
                  opts.createSearchChoice = function(term) {
                    return {
                      id: $.trim(term),
                      text: $.trim(term)
                    }
                  }
                }
                if (opts.initSelection === undefined) {
                  opts.initSelection = function(element, callback) {
                    var data = [];
                    $(splitVal(element.val(), opts.separator)).each(function() {
                      var obj = {
                          id: this,
                          text: this
                        },
                        tags = opts.tags;
                      if ($.isFunction(tags)) {
                        tags = tags()
                      }
                      $(tags).each(function() {
                        if (equal(this.id, obj.id)) {
                          obj = this;
                          return false
                        }
                      });
                      data.push(obj)
                    });
                    callback(data)
                  }
                }
              }
            }
          }
        }
      }
      if (typeof(opts.query) !== "function") {
        throw "query function not defined for Select2 " + opts.element.attr("id")
      }
      if (opts.createSearchChoicePosition === "top") {
        opts.createSearchChoicePosition = function(list, item) {
          list.unshift(item)
        }
      } else {
        if (opts.createSearchChoicePosition === "bottom") {
          opts.createSearchChoicePosition = function(list, item) {
            list.push(item)
          }
        } else {
          if (typeof(opts.createSearchChoicePosition) !== "function") {
            throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function"
          }
        }
      }
      return opts
    },
    monitorSource: function() {
      var el = this.opts.element,
        observer, self = this;
      el.on("change.select2", this.bind(function(e) {
        if (this.opts.element.data("select2-change-triggered") !== true) {
          this.initSelection()
        }
      }));
      this._sync = this.bind(function() {
        var disabled = el.prop("disabled");
        if (disabled === undefined) {
          disabled = false
        }
        this.enable(!disabled);
        var readonly = el.prop("readonly");
        if (readonly === undefined) {
          readonly = false
        }
        this.readonly(readonly);
        syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
        this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
        syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
        this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element))
      });
      if (el.length && el[0].attachEvent) {
        el.each(function() {
          this.attachEvent("onpropertychange", self._sync)
        })
      }
      observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      if (observer !== undefined) {
        if (this.propertyObserver) {
          delete this.propertyObserver;
          this.propertyObserver = null
        }
        this.propertyObserver = new observer(function(mutations) {
          $.each(mutations, self._sync)
        });
        this.propertyObserver.observe(el.get(0), {
          attributes: true,
          subtree: false
        })
      }
    },
    triggerSelect: function(data) {
      var evt = $.Event("select2-selecting", {
        val: this.id(data),
        object: data,
        choice: data
      });
      this.opts.element.trigger(evt);
      return !evt.isDefaultPrevented()
    },
    triggerChange: function(details) {
      details = details || {};
      details = $.extend({}, details, {
        type: "change",
        val: this.val()
      });
      this.opts.element.data("select2-change-triggered", true);
      this.opts.element.trigger(details);
      this.opts.element.data("select2-change-triggered", false);
      this.opts.element.click();
      if (this.opts.blurOnChange) {
        this.opts.element.blur()
      }
    },
    isInterfaceEnabled: function() {
      return this.enabledInterface === true
    },
    enableInterface: function() {
      var enabled = this._enabled && !this._readonly,
        disabled = !enabled;
      if (enabled === this.enabledInterface) {
        return false
      }
      this.container.toggleClass("select2-container-disabled", disabled);
      this.close();
      this.enabledInterface = enabled;
      return true
    },
    enable: function(enabled) {
      if (enabled === undefined) {
        enabled = true
      }
      if (this._enabled === enabled) {
        return
      }
      this._enabled = enabled;
      this.opts.element.prop("disabled", !enabled);
      this.enableInterface()
    },
    disable: function() {
      this.enable(false)
    },
    readonly: function(enabled) {
      if (enabled === undefined) {
        enabled = false
      }
      if (this._readonly === enabled) {
        return
      }
      this._readonly = enabled;
      this.opts.element.prop("readonly", enabled);
      this.enableInterface()
    },
    opened: function() {
      return (this.container) ? this.container.hasClass("select2-dropdown-open") : false
    },
    positionDropdown: function() {
      var $dropdown = this.dropdown,
        offset = this.container.offset(),
        height = this.container.outerHeight(false),
        width = this.container.outerWidth(false),
        dropHeight = $dropdown.outerHeight(false),
        $window = $(window),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        viewPortRight = $window.scrollLeft() + windowWidth,
        viewportBottom = $window.scrollTop() + windowHeight,
        dropTop = offset.top + height,
        dropLeft = offset.left,
        enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
        enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
        dropWidth = $dropdown.outerWidth(false),
        enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
        aboveNow = $dropdown.hasClass("select2-drop-above"),
        bodyOffset, above, changeDirection, css, resultsListNode;
      if (aboveNow) {
        above = true;
        if (!enoughRoomAbove && enoughRoomBelow) {
          changeDirection = true;
          above = false
        }
      } else {
        above = false;
        if (!enoughRoomBelow && enoughRoomAbove) {
          changeDirection = true;
          above = true
        }
      }
      if (changeDirection) {
        $dropdown.hide();
        offset = this.container.offset();
        height = this.container.outerHeight(false);
        width = this.container.outerWidth(false);
        dropHeight = $dropdown.outerHeight(false);
        viewPortRight = $window.scrollLeft() + windowWidth;
        viewportBottom = $window.scrollTop() + windowHeight;
        dropTop = offset.top + height;
        dropLeft = offset.left;
        dropWidth = $dropdown.outerWidth(false);
        enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
        $dropdown.show();
        this.focusSearch()
      }
      if (this.opts.dropdownAutoWidth) {
        resultsListNode = $(".select2-results", $dropdown)[0];
        $dropdown.addClass("select2-drop-auto-width");
        $dropdown.css("width", "");
        dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
        dropWidth > width ? width = dropWidth : dropWidth = width;
        dropHeight = $dropdown.outerHeight(false);
        enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight
      } else {
        this.container.removeClass("select2-drop-auto-width")
      }
      if (this.body.css("position") !== "static") {
        bodyOffset = this.body.offset();
        dropTop -= bodyOffset.top;
        dropLeft -= bodyOffset.left
      }
      if (!enoughRoomOnRight) {
        dropLeft = offset.left + this.container.outerWidth(false) - dropWidth
      }
      css = {
        left: dropLeft,
        width: width
      };
      if (above) {
        css.top = offset.top - dropHeight;
        css.bottom = "auto";
        this.container.addClass("select2-drop-above");
        $dropdown.addClass("select2-drop-above")
      } else {
        css.top = dropTop;
        css.bottom = "auto";
        this.container.removeClass("select2-drop-above");
        $dropdown.removeClass("select2-drop-above")
      }
      css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));
      $dropdown.css(css)
    },
    shouldOpen: function() {
      var event;
      if (this.opened()) {
        return false
      }
      if (this._enabled === false || this._readonly === true) {
        return false
      }
      event = $.Event("select2-opening");
      this.opts.element.trigger(event);
      return !event.isDefaultPrevented()
    },
    clearDropdownAlignmentPreference: function() {
      this.container.removeClass("select2-drop-above");
      this.dropdown.removeClass("select2-drop-above")
    },
    open: function() {
      if (!this.shouldOpen()) {
        return false
      }
      this.opening();
      $document.on("mousemove.select2Event", function(e) {
        lastMousePosition.x = e.pageX;
        lastMousePosition.y = e.pageY
      });
      return true
    },
    opening: function() {
      var cid = this.containerEventName,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid,
        mask;
      this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
      this.clearDropdownAlignmentPreference();
      if (this.dropdown[0] !== this.body.children().last()[0]) {
        this.dropdown.detach().appendTo(this.body)
      }
      mask = $("#select2-drop-mask");
      if (mask.length == 0) {
        mask = $(document.createElement("div"));
        mask.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask");
        mask.hide();
        mask.appendTo(this.body);
        mask.on("mousedown touchstart click", function(e) {
          reinsertElement(mask);
          var dropdown = $("#select2-drop"),
            self;
          if (dropdown.length > 0) {
            self = dropdown.data("select2");
            if (self.opts.selectOnBlur) {
              self.selectHighlighted({
                noFocus: true
              })
            }
            self.close();
            e.preventDefault();
            e.stopPropagation()
          }
        })
      }
      if (this.dropdown.prev()[0] !== mask[0]) {
        this.dropdown.before(mask)
      }
      $("#select2-drop").removeAttr("id");
      this.dropdown.attr("id", "select2-drop");
      mask.show();
      this.positionDropdown();
      this.dropdown.show();
      this.positionDropdown();
      this.dropdown.addClass("select2-drop-active");
      var that = this;
      this.container.parents().add(window).each(function() {
        $(this).on(resize + " " + scroll + " " + orient, function(e) {
          if (that.opened()) {
            that.positionDropdown()
          }
        })
      })
    },
    close: function() {
      if (!this.opened()) {
        return
      }
      var cid = this.containerEventName,
        scroll = "scroll." + cid,
        resize = "resize." + cid,
        orient = "orientationchange." + cid;
      this.container.parents().add(window).each(function() {
        $(this).off(scroll).off(resize).off(orient)
      });
      this.clearDropdownAlignmentPreference();
      $("#select2-drop-mask").hide();
      this.dropdown.removeAttr("id");
      this.dropdown.hide();
      this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
      this.results.empty();
      $document.off("mousemove.select2Event");
      this.clearSearch();
      this.search.removeClass("select2-active");
      this.opts.element.trigger($.Event("select2-close"))
    },
    externalSearch: function(term) {
      this.open();
      this.search.val(term);
      this.updateResults(false)
    },
    clearSearch: function() {},
    getMaximumSelectionSize: function() {
      return evaluate(this.opts.maximumSelectionSize, this.opts.element)
    },
    ensureHighlightVisible: function() {
      var results = this.results,
        children, index, child, hb, rb, y, more, topOffset;
      index = this.highlight();
      if (index < 0) {
        return
      }
      if (index == 0) {
        results.scrollTop(0);
        return
      }
      children = this.findHighlightableChoices().find(".select2-result-label");
      child = $(children[index]);
      topOffset = (child.offset() || {}).top || 0;
      hb = topOffset + child.outerHeight(true);
      if (index === children.length - 1) {
        more = results.find("li.select2-more-results");
        if (more.length > 0) {
          hb = more.offset().top + more.outerHeight(true)
        }
      }
      rb = results.offset().top + results.outerHeight(true);
      if (hb > rb) {
        results.scrollTop(results.scrollTop() + (hb - rb))
      }
      y = topOffset - results.offset().top;
      if (y < 0 && child.css("display") != "none") {
        results.scrollTop(results.scrollTop() + y)
      }
    },
    findHighlightableChoices: function() {
      return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
    },
    moveHighlight: function(delta) {
      var choices = this.findHighlightableChoices(),
        index = this.highlight();
      while (index > -1 && index < choices.length) {
        index += delta;
        var choice = $(choices[index]);
        if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
          this.highlight(index);
          break
        }
      }
    },
    highlight: function(index) {
      var choices = this.findHighlightableChoices(),
        choice, data;
      if (arguments.length === 0) {
        return indexOf(choices.filter(".select2-highlighted")[0], choices.get())
      }
      if (index >= choices.length) {
        index = choices.length - 1
      }
      if (index < 0) {
        index = 0
      }
      this.removeHighlight();
      choice = $(choices[index]);
      choice.addClass("select2-highlighted");
      this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));
      this.ensureHighlightVisible();
      this.liveRegion.text(choice.text());
      data = choice.data("select2-data");
      if (data) {
        this.opts.element.trigger({
          type: "select2-highlight",
          val: this.id(data),
          choice: data
        })
      }
    },
    removeHighlight: function() {
      this.results.find(".select2-highlighted").removeClass("select2-highlighted")
    },
    touchMoved: function() {
      this._touchMoved = true
    },
    clearTouchMoved: function() {
      this._touchMoved = false
    },
    countSelectableResults: function() {
      return this.findHighlightableChoices().length
    },
    highlightUnderEvent: function(event) {
      var el = $(event.target).closest(".select2-result-selectable");
      if (el.length > 0 && !el.is(".select2-highlighted")) {
        var choices = this.findHighlightableChoices();
        this.highlight(choices.index(el))
      } else {
        if (el.length == 0) {
          this.removeHighlight()
        }
      }
    },
    loadMoreIfNeeded: function() {
      var results = this.results,
        more = results.find("li.select2-more-results"),
        below, page = this.resultsPage + 1,
        self = this,
        term = this.search.val(),
        context = this.context;
      if (more.length === 0) {
        return
      }
      below = more.offset().top - results.offset().top - results.height();
      if (below <= this.opts.loadMorePadding) {
        more.addClass("select2-active");
        this.opts.query({
          element: this.opts.element,
          term: term,
          page: page,
          context: context,
          matcher: this.opts.matcher,
          callback: this.bind(function(data) {
            if (!self.opened()) {
              return
            }
            self.opts.populateResults.call(this, results, data.results, {
              term: term,
              page: page,
              context: context
            });
            self.postprocessResults(data, false, false);
            if (data.more === true) {
              more.detach().appendTo(results).text(evaluate(self.opts.formatLoadMore, self.opts.element, page + 1));
              window.setTimeout(function() {
                self.loadMoreIfNeeded()
              }, 10)
            } else {
              more.remove()
            }
            self.positionDropdown();
            self.resultsPage = page;
            self.context = data.context;
            this.opts.element.trigger({
              type: "select2-loaded",
              items: data
            })
          })
        })
      }
    },
    tokenize: function() {},
    updateResults: function(initial) {
      var search = this.search,
        results = this.results,
        opts = this.opts,
        data, self = this,
        input, term = search.val(),
        lastTerm = $.data(this.container, "select2-last-term"),
        queryNumber;
      if (initial !== true && lastTerm && equal(term, lastTerm)) {
        return
      }
      $.data(this.container, "select2-last-term", term);
      if (initial !== true && (this.showSearchInput === false || !this.opened())) {
        return
      }

      function postRender() {
        search.removeClass("select2-active");
        self.positionDropdown();
        if (results.find(".select2-no-results,.select2-selection-limit,.select2-searching").length) {
          self.liveRegion.text(results.text())
        } else {
          self.liveRegion.text(self.opts.formatMatches(results.find(".select2-result-selectable").length))
        }
      }

      function render(html) {
        results.html(html);
        postRender()
      }
      queryNumber = ++this.queryCount;
      var maxSelSize = this.getMaximumSelectionSize();
      if (maxSelSize >= 1) {
        data = this.data();
        if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
          render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
          return
        }
      }
      if (search.val().length < opts.minimumInputLength) {
        if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
          render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>")
        } else {
          render("")
        }
        if (initial && this.showSearch) {
          this.showSearch(true)
        }
        return
      }
      if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
        if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
          render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>")
        } else {
          render("")
        }
        return
      }
      if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
        render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>")
      }
      search.addClass("select2-active");
      this.removeHighlight();
      input = this.tokenize();
      if (input != undefined && input != null) {
        search.val(input)
      }
      this.resultsPage = 1;
      opts.query({
        element: opts.element,
        term: search.val(),
        page: this.resultsPage,
        context: null,
        matcher: opts.matcher,
        callback: this.bind(function(data) {
          var def;
          if (queryNumber != this.queryCount) {
            return
          }
          if (!this.opened()) {
            this.search.removeClass("select2-active");
            return
          }
          this.context = (data.context === undefined) ? null : data.context;
          if (this.opts.createSearchChoice && search.val() !== "") {
            def = this.opts.createSearchChoice.call(self, search.val(), data.results);
            if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
              if ($(data.results).filter(function() {
                  return equal(self.id(this), self.id(def))
                }).length === 0) {
                this.opts.createSearchChoicePosition(data.results, def)
              }
            }
          }
          if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
            render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
            return
          }
          results.empty();
          self.opts.populateResults.call(this, results, data.results, {
            term: search.val(),
            page: this.resultsPage,
            context: null
          });
          if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
            results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
            window.setTimeout(function() {
              self.loadMoreIfNeeded()
            }, 10)
          }
          this.postprocessResults(data, initial);
          postRender();
          this.opts.element.trigger({
            type: "select2-loaded",
            items: data
          })
        })
      })
    },
    cancel: function() {
      this.close()
    },
    blur: function() {
      if (this.opts.selectOnBlur) {
        this.selectHighlighted({
          noFocus: true
        })
      }
      this.close();
      this.container.removeClass("select2-container-active");
      if (this.search[0] === document.activeElement) {
        this.search.blur()
      }
      this.clearSearch();
      this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
    },
    focusSearch: function() {
      focus(this.search)
    },
    selectHighlighted: function(options) {
      if (this._touchMoved) {
        this.clearTouchMoved();
        return
      }
      var index = this.highlight(),
        highlighted = this.results.find(".select2-highlighted"),
        data = highlighted.closest(".select2-result").data("select2-data");
      if (data) {
        this.highlight(index);
        this.onSelect(data, options)
      } else {
        if (options && options.noFocus) {
          this.close()
        }
      }
    },
    getPlaceholder: function() {
      var placeholderOption;
      return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined)
    },
    getPlaceholderOption: function() {
      if (this.select) {
        var firstOption = this.select.children("option").first();
        if (this.opts.placeholderOption !== undefined) {
          return (this.opts.placeholderOption === "first" && firstOption) || (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select))
        } else {
          if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
            return firstOption
          }
        }
      }
    },
    initContainerWidth: function() {
      function resolveContainerWidth() {
        var style, attrs, matches, i, l, attr;
        if (this.opts.width === "off") {
          return null
        } else {
          if (this.opts.width === "element") {
            return this.opts.element.outerWidth(false) === 0 ? "auto" : this.opts.element.outerWidth(false) + "px"
          } else {
            if (this.opts.width === "copy" || this.opts.width === "resolve") {
              style = this.opts.element.attr("style");
              if (style !== undefined) {
                attrs = style.split(";");
                for (i = 0, l = attrs.length; i < l; i = i + 1) {
                  attr = attrs[i].replace(/\s/g, "");
                  matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                  if (matches !== null && matches.length >= 1) {
                    return matches[1]
                  }
                }
              }
              if (this.opts.width === "resolve") {
                style = this.opts.element.css("width");
                if (style.indexOf("%") > 0) {
                  return style
                }
                return (this.opts.element.outerWidth(false) === 0 ? "auto" : this.opts.element.outerWidth(false) + "px")
              }
              return null
            } else {
              if ($.isFunction(this.opts.width)) {
                return this.opts.width()
              } else {
                return this.opts.width
              }
            }
          }
        }
      }
      var width = resolveContainerWidth.call(this);
      if (width !== null) {
        this.container.css("width", width)
      }
    }
  });
  SingleSelect2 = clazz(AbstractSelect2, {
    createContainer: function() {
      var container = $(document.createElement("div")).attr({
        "class": "select2-container"
      }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><strong role='presentation'></strong></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
      return container
    },
    enableInterface: function() {
      if (this.parent.enableInterface.apply(this, arguments)) {
        this.focusser.prop("disabled", !this.isInterfaceEnabled())
      }
    },
    opening: function() {
      var el, range, len;
      if (this.opts.minimumResultsForSearch >= 0) {
        this.showSearch(true)
      }
      this.parent.opening.apply(this, arguments);
      if (this.showSearchInput !== false) {
        this.search.val(this.focusser.val())
      }
      if (this.opts.shouldFocusInput(this)) {
        this.search.focus();
        el = this.search.get(0);
        if (el.createTextRange) {
          range = el.createTextRange();
          range.collapse(false);
          range.select()
        } else {
          if (el.setSelectionRange) {
            len = this.search.val().length;
            el.setSelectionRange(len, len)
          }
        }
      }
      if (this.search.val() === "") {
        if (this.nextSearchTerm != undefined) {
          this.search.val(this.nextSearchTerm);
          this.search.select()
        }
      }
      this.focusser.prop("disabled", true).val("");
      this.updateResults(true);
      this.opts.element.trigger($.Event("select2-open"))
    },
    close: function() {
      if (!this.opened()) {
        return
      }
      this.parent.close.apply(this, arguments);
      this.focusser.prop("disabled", false);
      if (this.opts.shouldFocusInput(this)) {
        this.focusser.focus()
      }
    },
    focus: function() {
      if (this.opened()) {
        this.close()
      } else {
        this.focusser.prop("disabled", false);
        if (this.opts.shouldFocusInput(this)) {
          this.focusser.focus()
        }
      }
    },
    isFocused: function() {
      return this.container.hasClass("select2-container-active")
    },
    cancel: function() {
      this.parent.cancel.apply(this, arguments);
      this.focusser.prop("disabled", false);
      if (this.opts.shouldFocusInput(this)) {
        this.focusser.focus()
      }
    },
    destroy: function() {
      $("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id"));
      this.parent.destroy.apply(this, arguments);
      cleanupJQueryElements.call(this, "selection", "focusser")
    },
    initContainer: function() {
      var selection, container = this.container,
        dropdown = this.dropdown,
        idSuffix = nextUid(),
        elementLabel;
      if (this.opts.minimumResultsForSearch < 0) {
        this.showSearch(false)
      } else {
        this.showSearch(true)
      }
      this.selection = selection = container.find(".select2-choice");
      this.focusser = container.find(".select2-focusser");
      selection.find(".select2-chosen").attr("id", "select2-chosen-" + idSuffix);
      this.focusser.attr("aria-labelledby", "select2-chosen-" + idSuffix);
      this.results.attr("id", "select2-results-" + idSuffix);
      this.search.attr("aria-owns", "select2-results-" + idSuffix);
      this.focusser.attr("id", "s2id_autogen" + idSuffix);
      elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
      this.focusser.prev().text(elementLabel.text()).attr("for", this.focusser.attr("id"));
      var originalTitle = this.opts.element.attr("title");
      this.opts.element.attr("title", (originalTitle || elementLabel.text()));
      this.focusser.attr("tabindex", this.elementTabIndex);
      this.search.attr("id", this.focusser.attr("id") + "_search");
      this.search.prev().text($("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id"));
      this.search.on("keydown", this.bind(function(e) {
        if (!this.isInterfaceEnabled()) {
          return
        }
        if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
          killEvent(e);
          return
        }
        switch (e.which) {
          case KEY.UP:
          case KEY.DOWN:
            this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
            killEvent(e);
            return;
          case KEY.ENTER:
            this.selectHighlighted();
            killEvent(e);
            return;
          case KEY.TAB:
            this.selectHighlighted({
              noFocus: true
            });
            return;
          case KEY.ESC:
            this.cancel(e);
            killEvent(e);
            return
        }
      }));
      this.search.on("blur", this.bind(function(e) {
        if (document.activeElement === this.body.get(0)) {
          window.setTimeout(this.bind(function() {
            if (this.opened()) {
              this.search.focus()
            }
          }), 0)
        }
      }));
      this.focusser.on("keydown", this.bind(function(e) {
        if (!this.isInterfaceEnabled()) {
          return
        }
        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
          return
        }
        if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
          killEvent(e);
          return
        }
        if (e.which == KEY.DOWN || e.which == KEY.UP || (e.which == KEY.ENTER && this.opts.openOnEnter)) {
          if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
            return
          }
          this.open();
          killEvent(e);
          return
        }
        if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
          if (this.opts.allowClear) {
            this.clear()
          }
          killEvent(e);
          return
        }
      }));
      installKeyUpChangeEvent(this.focusser);
      this.focusser.on("keyup-change input", this.bind(function(e) {
        if (this.opts.minimumResultsForSearch >= 0) {
          e.stopPropagation();
          if (this.opened()) {
            return
          }
          this.open()
        }
      }));
      selection.on("mousedown touchstart", "abbr", this.bind(function(e) {
        if (!this.isInterfaceEnabled()) {
          return
        }
        this.clear();
        killEventImmediately(e);
        this.close();
        this.selection.focus()
      }));
      selection.on("mousedown touchstart", this.bind(function(e) {
        reinsertElement(selection);
        if (!this.container.hasClass("select2-container-active")) {
          this.opts.element.trigger($.Event("select2-focus"))
        }
        if (this.opened()) {
          this.close()
        } else {
          if (this.isInterfaceEnabled()) {
            this.open()
          }
        }
        killEvent(e)
      }));
      dropdown.on("mousedown touchstart", this.bind(function() {
        if (this.opts.shouldFocusInput(this)) {
          this.search.focus()
        }
      }));
      selection.on("focus", this.bind(function(e) {
        killEvent(e)
      }));
      this.focusser.on("focus", this.bind(function() {
        if (!this.container.hasClass("select2-container-active")) {
          this.opts.element.trigger($.Event("select2-focus"))
        }
        this.container.addClass("select2-container-active")
      })).on("blur", this.bind(function() {
        if (!this.opened()) {
          this.container.removeClass("select2-container-active");
          this.opts.element.trigger($.Event("select2-blur"))
        }
      }));
      this.search.on("focus", this.bind(function() {
        if (!this.container.hasClass("select2-container-active")) {
          this.opts.element.trigger($.Event("select2-focus"))
        }
        this.container.addClass("select2-container-active")
      }));
      this.initContainerWidth();
      this.opts.element.addClass("select2-offscreen");
      this.setPlaceholder()
    },
    clear: function(triggerChange) {
      var data = this.selection.data("select2-data");
      if (data) {
        var evt = $.Event("select2-clearing");
        this.opts.element.trigger(evt);
        if (evt.isDefaultPrevented()) {
          return
        }
        var placeholderOption = this.getPlaceholderOption();
        this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
        this.selection.find(".select2-chosen").empty();
        this.selection.removeData("select2-data");
        this.setPlaceholder();
        if (triggerChange !== false) {
          this.opts.element.trigger({
            type: "select2-removed",
            val: this.id(data),
            choice: data
          });
          this.triggerChange({
            removed: data
          })
        }
      }
    },
    initSelection: function() {
      var selected;
      if (this.isPlaceholderOptionSelected()) {
        this.updateSelection(null);
        this.close();
        this.setPlaceholder()
      } else {
        var self = this;
        this.opts.initSelection.call(null, this.opts.element, function(selected) {
          if (selected !== undefined && selected !== null) {
            self.updateSelection(selected);
            self.close();
            self.setPlaceholder();
            self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val())
          }
        })
      }
    },
    isPlaceholderOptionSelected: function() {
      var placeholderOption;
      if (this.getPlaceholder() === undefined) {
        return false
      }
      return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected")) || (this.opts.element.val() === "") || (this.opts.element.val() === undefined) || (this.opts.element.val() === null)
    },
    prepareOpts: function() {
      var opts = this.parent.prepareOpts.apply(this, arguments),
        self = this;
      if (opts.element.get(0).tagName.toLowerCase() === "select") {
        opts.initSelection = function(element, callback) {
          var selected = element.find("option").filter(function() {
            return this.selected && !this.disabled
          });
          callback(self.optionToData(selected))
        }
      } else {
        if ("data" in opts) {
          opts.initSelection = opts.initSelection || function(element, callback) {
            var id = element.val();
            var match = null;
            opts.query({
              matcher: function(term, text, el) {
                var is_match = equal(id, opts.id(el));
                if (is_match) {
                  match = el
                }
                return is_match
              },
              callback: !$.isFunction(callback) ? $.noop : function() {
                callback(match)
              }
            })
          }
        }
      }
      return opts
    },
    getPlaceholder: function() {
      if (this.select) {
        if (this.getPlaceholderOption() === undefined) {
          return undefined
        }
      }
      return this.parent.getPlaceholder.apply(this, arguments)
    },
    setPlaceholder: function() {
      var placeholder = this.getPlaceholder();
      if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {
        if (this.select && this.getPlaceholderOption() === undefined) {
          return
        }
        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));
        this.selection.addClass("select2-default");
        this.container.removeClass("select2-allowclear")
      }
    },
    postprocessResults: function(data, initial, noHighlightUpdate) {
      var selected = 0,
        self = this,
        showSearchInput = true;
      this.findHighlightableChoices().each2(function(i, elm) {
        if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
          selected = i;
          return false
        }
      });
      if (noHighlightUpdate !== false) {
        if (initial === true && selected >= 0) {
          this.highlight(selected)
        } else {
          this.highlight(0)
        }
      }
      if (initial === true) {
        var min = this.opts.minimumResultsForSearch;
        if (min >= 0) {
          this.showSearch(countResults(data.results) >= min)
        }
      }
    },
    showSearch: function(showSearchInput) {
      if (this.showSearchInput === showSearchInput) {
        return
      }
      this.showSearchInput = showSearchInput;
      this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
      this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
      $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput)
    },
    onSelect: function(data, options) {
      if (!this.triggerSelect(data)) {
        return
      }
      var old = this.opts.element.val(),
        oldData = this.data();
      this.opts.element.val(this.id(data));
      this.updateSelection(data);
      this.opts.element.trigger({
        type: "select2-selected",
        val: this.id(data),
        choice: data
      });
      this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
      this.close();
      if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
        this.focusser.focus()
      }
      if (!equal(old, this.id(data))) {
        this.triggerChange({
          added: data,
          removed: oldData
        })
      }
    },
    updateSelection: function(data) {
      var container = this.selection.find(".select2-chosen"),
        formatted, cssClass;
      this.selection.data("select2-data", data);
      container.empty();
      if (data !== null) {
        formatted = this.opts.formatSelection(data, container, this.opts.escapeMarkup)
      }
      if (formatted !== undefined) {
        container.append(formatted)
      }
      cssClass = this.opts.formatSelectionCssClass(data, container);
      if (cssClass !== undefined) {
        container.addClass(cssClass)
      }
      this.selection.removeClass("select2-default");
      if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
        this.container.addClass("select2-allowclear")
      }
    },
    val: function() {
      var val, triggerChange = false,
        data = null,
        self = this,
        oldData = this.data();
      if (arguments.length === 0) {
        return this.opts.element.val()
      }
      val = arguments[0];
      if (arguments.length > 1) {
        triggerChange = arguments[1]
      }
      if (this.select) {
        this.select.val(val).find("option").filter(function() {
          return this.selected
        }).each2(function(i, elm) {
          data = self.optionToData(elm);
          return false
        });
        this.updateSelection(data);
        this.setPlaceholder();
        if (triggerChange) {
          this.triggerChange({
            added: data,
            removed: oldData
          })
        }
      } else {
        if (!val && val !== 0) {
          this.clear(triggerChange);
          return
        }
        if (this.opts.initSelection === undefined) {
          throw new Error("cannot call val() if initSelection() is not defined")
        }
        this.opts.element.val(val);
        this.opts.initSelection(this.opts.element, function(data) {
          self.opts.element.val(!data ? "" : self.id(data));
          self.updateSelection(data);
          self.setPlaceholder();
          if (triggerChange) {
            self.triggerChange({
              added: data,
              removed: oldData
            })
          }
        })
      }
    },
    clearSearch: function() {
      this.search.val("");
      this.focusser.val("")
    },
    data: function(value) {
      var data, triggerChange = false;
      if (arguments.length === 0) {
        data = this.selection.data("select2-data");
        if (data == undefined) {
          data = null
        }
        return data
      } else {
        if (arguments.length > 1) {
          triggerChange = arguments[1]
        }
        if (!value) {
          this.clear(triggerChange)
        } else {
          data = this.data();
          this.opts.element.val(!value ? "" : this.id(value));
          this.updateSelection(value);
          if (triggerChange) {
            this.triggerChange({
              added: value,
              removed: data
            })
          }
        }
      }
    }
  });
  MultiSelect2 = clazz(AbstractSelect2, {
    createContainer: function() {
      var container = $(document.createElement("div")).attr({
        "class": "select2-container select2-container-multi"
      }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
      return container
    },
    prepareOpts: function() {
      var opts = this.parent.prepareOpts.apply(this, arguments),
        self = this;
      if (opts.element.get(0).tagName.toLowerCase() === "select") {
        opts.initSelection = function(element, callback) {
          var data = [];
          element.find("option").filter(function() {
            return this.selected && !this.disabled
          }).each2(function(i, elm) {
            data.push(self.optionToData(elm))
          });
          callback(data)
        }
      } else {
        if ("data" in opts) {
          opts.initSelection = opts.initSelection || function(element, callback) {
            var ids = splitVal(element.val(), opts.separator);
            var matches = [];
            opts.query({
              matcher: function(term, text, el) {
                var is_match = $.grep(ids, function(id) {
                  return equal(id, opts.id(el))
                }).length;
                if (is_match) {
                  matches.push(el)
                }
                return is_match
              },
              callback: !$.isFunction(callback) ? $.noop : function() {
                var ordered = [];
                for (var i = 0; i < ids.length; i++) {
                  var id = ids[i];
                  for (var j = 0; j < matches.length; j++) {
                    var match = matches[j];
                    if (equal(id, opts.id(match))) {
                      ordered.push(match);
                      matches.splice(j, 1);
                      break
                    }
                  }
                }
                callback(ordered)
              }
            })
          }
        }
      }
      return opts
    },
    selectChoice: function(choice) {
      var selected = this.container.find(".select2-search-choice-focus");
      if (selected.length && choice && choice[0] == selected[0]) {} else {
        if (selected.length) {
          this.opts.element.trigger("choice-deselected", selected)
        }
        selected.removeClass("select2-search-choice-focus");
        if (choice && choice.length) {
          this.close();
          choice.addClass("select2-search-choice-focus");
          this.opts.element.trigger("choice-selected", choice)
        }
      }
    },
    destroy: function() {
      $("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id"));
      this.parent.destroy.apply(this, arguments);
      cleanupJQueryElements.call(this, "searchContainer", "selection")
    },
    initContainer: function() {
      var selector = ".select2-choices",
        selection;
      this.searchContainer = this.container.find(".select2-search-field");
      this.selection = selection = this.container.find(selector);
      var _this = this;
      this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function(e) {
        _this.search[0].focus();
        _this.selectChoice($(this))
      });
      this.search.attr("id", "s2id_autogen" + nextUid());
      this.search.prev().text($("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id"));
      this.search.on("input paste", this.bind(function() {
        if (this.search.attr("placeholder") && this.search.val().length == 0) {
          return
        }
        if (!this.isInterfaceEnabled()) {
          return
        }
        if (!this.opened()) {
          this.open()
        }
      }));
      this.search.attr("tabindex", this.elementTabIndex);
      this.keydowns = 0;
      this.search.on("keydown", this.bind(function(e) {
        if (!this.isInterfaceEnabled()) {
          return
        }++this.keydowns;
        var selected = selection.find(".select2-search-choice-focus");
        var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
        var next = selected.next(".select2-search-choice:not(.select2-locked)");
        var pos = getCursorInfo(this.search);
        if (selected.length && (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
          var selectedChoice = selected;
          if (e.which == KEY.LEFT && prev.length) {
            selectedChoice = prev
          } else {
            if (e.which == KEY.RIGHT) {
              selectedChoice = next.length ? next : null
            } else {
              if (e.which === KEY.BACKSPACE) {
                if (this.unselect(selected.first())) {
                  this.search.width(10);
                  selectedChoice = prev.length ? prev : next
                }
              } else {
                if (e.which == KEY.DELETE) {
                  if (this.unselect(selected.first())) {
                    this.search.width(10);
                    selectedChoice = next.length ? next : null
                  }
                } else {
                  if (e.which == KEY.ENTER) {
                    selectedChoice = null
                  }
                }
              }
            }
          }
          this.selectChoice(selectedChoice);
          killEvent(e);
          if (!selectedChoice || !selectedChoice.length) {
            this.open()
          }
          return
        } else {
          if (((e.which === KEY.BACKSPACE && this.keydowns == 1) || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {
            this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
            killEvent(e);
            return
          } else {
            this.selectChoice(null)
          }
        }
        if (this.opened()) {
          switch (e.which) {
            case KEY.UP:
            case KEY.DOWN:
              this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
              killEvent(e);
              return;
            case KEY.ENTER:
              this.selectHighlighted();
              killEvent(e);
              return;
            case KEY.TAB:
              this.selectHighlighted({
                noFocus: true
              });
              this.close();
              return;
            case KEY.ESC:
              this.cancel(e);
              killEvent(e);
              return
          }
        }
        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
          return
        }
        if (e.which === KEY.ENTER) {
          if (this.opts.openOnEnter === false) {
            return
          } else {
            if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
              return
            }
          }
        }
        this.open();
        if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
          killEvent(e)
        }
        if (e.which === KEY.ENTER) {
          killEvent(e)
        }
      }));
      this.search.on("keyup", this.bind(function(e) {
        this.keydowns = 0;
        this.resizeSearch()
      }));
      this.search.on("blur", this.bind(function(e) {
        this.container.removeClass("select2-container-active");
        this.search.removeClass("select2-focused");
        this.selectChoice(null);
        if (!this.opened()) {
          this.clearSearch()
        }
        e.stopImmediatePropagation();
        this.opts.element.trigger($.Event("select2-blur"))
      }));
      this.container.on("click", selector, this.bind(function(e) {
        if (!this.isInterfaceEnabled()) {
          return
        }
        if ($(e.target).closest(".select2-search-choice").length > 0) {
          return
        }
        this.selectChoice(null);
        this.clearPlaceholder();
        if (!this.container.hasClass("select2-container-active")) {
          this.opts.element.trigger($.Event("select2-focus"))
        }
        this.open();
        this.focusSearch();
        e.preventDefault()
      }));
      this.container.on("focus", selector, this.bind(function() {
        if (!this.isInterfaceEnabled()) {
          return
        }
        if (!this.container.hasClass("select2-container-active")) {
          this.opts.element.trigger($.Event("select2-focus"))
        }
        this.container.addClass("select2-container-active");
        this.dropdown.addClass("select2-drop-active");
        this.clearPlaceholder()
      }));
      this.initContainerWidth();
      this.opts.element.addClass("select2-offscreen");
      this.clearSearch()
    },
    enableInterface: function() {
      if (this.parent.enableInterface.apply(this, arguments)) {
        this.search.prop("disabled", !this.isInterfaceEnabled())
      }
    },
    initSelection: function() {
      var data;
      if (this.opts.element.val() === "" && this.opts.element.text() === "") {
        this.updateSelection([]);
        this.close();
        this.clearSearch()
      }
      if (this.select || this.opts.element.val() !== "") {
        var self = this;
        this.opts.initSelection.call(null, this.opts.element, function(data) {
          if (data !== undefined && data !== null) {
            self.updateSelection(data);
            self.close();
            self.clearSearch()
          }
        })
      }
    },
    clearSearch: function() {
      var placeholder = this.getPlaceholder(),
        maxWidth = this.getMaxSearchWidth();
      if (placeholder !== undefined && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
        this.search.val(placeholder).addClass("select2-default");
        this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"))
      } else {
        this.search.val("").width(10)
      }
    },
    clearPlaceholder: function() {
      if (this.search.hasClass("select2-default")) {
        this.search.val("").removeClass("select2-default")
      }
    },
    opening: function() {
      this.clearPlaceholder();
      this.resizeSearch();
      this.parent.opening.apply(this, arguments);
      this.focusSearch();
      if (this.search.val() === "") {
        if (this.nextSearchTerm != undefined) {
          this.search.val(this.nextSearchTerm);
          this.search.select()
        }
      }
      this.updateResults(true);
      if (this.opts.shouldFocusInput(this)) {
        this.search.focus()
      }
      this.opts.element.trigger($.Event("select2-open"))
    },
    close: function() {
      if (!this.opened()) {
        return
      }
      this.parent.close.apply(this, arguments)
    },
    focus: function() {
      this.close();
      this.search.focus()
    },
    isFocused: function() {
      return this.search.hasClass("select2-focused")
    },
    updateSelection: function(data) {
      var ids = [],
        filtered = [],
        self = this;
      $(data).each(function() {
        if (indexOf(self.id(this), ids) < 0) {
          ids.push(self.id(this));
          filtered.push(this)
        }
      });
      data = filtered;
      this.selection.find(".select2-search-choice").remove();
      $(data).each(function() {
        self.addSelectedChoice(this)
      });
      self.postprocessResults()
    },
    tokenize: function() {
      var input = this.search.val();
      input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
      if (input != null && input != undefined) {
        this.search.val(input);
        if (input.length > 0) {
          this.open()
        }
      }
    },
    onSelect: function(data, options) {
      if (!this.triggerSelect(data)) {
        return
      }
      this.addSelectedChoice(data);
      this.opts.element.trigger({
        type: "selected",
        val: this.id(data),
        choice: data
      });
      this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
      this.clearSearch();
      this.updateResults();
      if (this.select || !this.opts.closeOnSelect) {
        this.postprocessResults(data, false, this.opts.closeOnSelect === true)
      }
      if (this.opts.closeOnSelect) {
        this.close();
        this.search.width(10)
      } else {
        if (this.countSelectableResults() > 0) {
          this.search.width(10);
          this.resizeSearch();
          if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
            this.updateResults(true)
          } else {
            if (this.nextSearchTerm != undefined) {
              this.search.val(this.nextSearchTerm);
              this.updateResults();
              this.search.select()
            }
          }
          this.positionDropdown()
        } else {
          this.close();
          this.search.width(10)
        }
      }
      this.triggerChange({
        added: data
      });
      if (!options || !options.noFocus) {
        this.focusSearch()
      }
    },
    cancel: function() {
      this.close();
      this.focusSearch()
    },
    addSelectedChoice: function(data) {
      var enableChoice = !data.locked,
        enabledItem = $("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
        disabledItem = $("<li class='select2-search-choice select2-locked'><div></div></li>");
      var choice = enableChoice ? enabledItem : disabledItem,
        id = this.id(data),
        val = this.getVal(),
        formatted, cssClass;
      formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
      if (formatted != undefined) {
        choice.find("div").replaceWith("<div>" + formatted + "</div>")
      }
      cssClass = this.opts.formatSelectionCssClass(data, choice.find("div"));
      if (cssClass != undefined) {
        choice.addClass(cssClass)
      }
      if (enableChoice) {
        choice.find(".select2-search-choice-close").on("mousedown", killEvent).on("click dblclick", this.bind(function(e) {
          if (!this.isInterfaceEnabled()) {
            return
          }
          this.unselect($(e.target));
          this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
          killEvent(e);
          this.close();
          this.focusSearch()
        })).on("focus", this.bind(function() {
          if (!this.isInterfaceEnabled()) {
            return
          }
          this.container.addClass("select2-container-active");
          this.dropdown.addClass("select2-drop-active")
        }))
      }
      choice.data("select2-data", data);
      choice.insertBefore(this.searchContainer);
      val.push(id);
      this.setVal(val)
    },
    unselect: function(selected) {
      var val = this.getVal(),
        data, index;
      selected = selected.closest(".select2-search-choice");
      if (selected.length === 0) {
        throw "Invalid argument: " + selected + ". Must be .select2-search-choice"
      }
      data = selected.data("select2-data");
      if (!data) {
        return
      }
      var evt = $.Event("select2-removing");
      evt.val = this.id(data);
      evt.choice = data;
      this.opts.element.trigger(evt);
      if (evt.isDefaultPrevented()) {
        return false
      }
      while ((index = indexOf(this.id(data), val)) >= 0) {
        val.splice(index, 1);
        this.setVal(val);
        if (this.select) {
          this.postprocessResults()
        }
      }
      selected.remove();
      this.opts.element.trigger({
        type: "select2-removed",
        val: this.id(data),
        choice: data
      });
      this.triggerChange({
        removed: data
      });
      return true
    },
    postprocessResults: function(data, initial, noHighlightUpdate) {
      var val = this.getVal(),
        choices = this.results.find(".select2-result"),
        compound = this.results.find(".select2-result-with-children"),
        self = this;
      choices.each2(function(i, choice) {
        var id = self.id(choice.data("select2-data"));
        if (indexOf(id, val) >= 0) {
          choice.addClass("select2-selected");
          choice.find(".select2-result-selectable").addClass("select2-selected")
        }
      });
      compound.each2(function(i, choice) {
        if (!choice.is(".select2-result-selectable") && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
          choice.addClass("select2-selected")
        }
      });
      if (this.highlight() == -1 && noHighlightUpdate !== false) {
        self.highlight(0)
      }
      if (!this.opts.createSearchChoice && !choices.filter(".select2-result:not(.select2-selected)").length > 0) {
        if (!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
          if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
            this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>")
          }
        }
      }
    },
    getMaxSearchWidth: function() {
      return this.selection.width() - getSideBorderPadding(this.search)
    },
    resizeSearch: function() {
      var minimumWidth, left, maxWidth, containerLeft, searchWidth, sideBorderPadding = getSideBorderPadding(this.search);
      minimumWidth = measureTextWidth(this.search) + 10;
      left = this.search.offset().left;
      maxWidth = this.selection.width();
      containerLeft = this.selection.offset().left;
      searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
      if (searchWidth < minimumWidth) {
        searchWidth = maxWidth - sideBorderPadding
      }
      if (searchWidth < 40) {
        searchWidth = maxWidth - sideBorderPadding
      }
      if (searchWidth <= 0) {
        searchWidth = minimumWidth
      }
      this.search.width(Math.floor(searchWidth))
    },
    getVal: function() {
      var val;
      if (this.select) {
        val = this.select.val();
        return val === null ? [] : val
      } else {
        val = this.opts.element.val();
        return splitVal(val, this.opts.separator)
      }
    },
    setVal: function(val) {
      var unique;
      if (this.select) {
        this.select.val(val)
      } else {
        unique = [];
        $(val).each(function() {
          if (indexOf(this, unique) < 0) {
            unique.push(this)
          }
        });
        this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator))
      }
    },
    buildChangeDetails: function(old, current) {
      var current = current.slice(0),
        old = old.slice(0);
      for (var i = 0; i < current.length; i++) {
        for (var j = 0; j < old.length; j++) {
          if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
            current.splice(i, 1);
            if (i > 0) {
              i--
            }
            old.splice(j, 1);
            j--
          }
        }
      }
      return {
        added: current,
        removed: old
      }
    },
    val: function(val, triggerChange) {
      var oldData, self = this;
      if (arguments.length === 0) {
        return this.getVal()
      }
      oldData = this.data();
      if (!oldData.length) {
        oldData = []
      }
      if (!val && val !== 0) {
        this.opts.element.val("");
        this.updateSelection([]);
        this.clearSearch();
        if (triggerChange) {
          this.triggerChange({
            added: this.data(),
            removed: oldData
          })
        }
        return
      }
      this.setVal(val);
      if (this.select) {
        this.opts.initSelection(this.select, this.bind(this.updateSelection));
        if (triggerChange) {
          this.triggerChange(this.buildChangeDetails(oldData, this.data()))
        }
      } else {
        if (this.opts.initSelection === undefined) {
          throw new Error("val() cannot be called if initSelection() is not defined")
        }
        this.opts.initSelection(this.opts.element, function(data) {
          var ids = $.map(data, self.id);
          self.setVal(ids);
          self.updateSelection(data);
          self.clearSearch();
          if (triggerChange) {
            self.triggerChange(self.buildChangeDetails(oldData, self.data()))
          }
        })
      }
      this.clearSearch()
    },
    onSortStart: function() {
      if (this.select) {
        throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.")
      }
      this.search.width(0);
      this.searchContainer.hide()
    },
    onSortEnd: function() {
      var val = [],
        self = this;
      this.searchContainer.show();
      this.searchContainer.appendTo(this.searchContainer.parent());
      this.resizeSearch();
      this.selection.find(".select2-search-choice").each(function() {
        val.push(self.opts.id($(this).data("select2-data")))
      });
      this.setVal(val);
      this.triggerChange()
    },
    data: function(values, triggerChange) {
      var self = this,
        ids, old;
      if (arguments.length === 0) {
        return this.selection.children(".select2-search-choice").map(function() {
          return $(this).data("select2-data")
        }).get()
      } else {
        old = this.data();
        if (!values) {
          values = []
        }
        ids = $.map(values, function(e) {
          return self.opts.id(e)
        });
        this.setVal(ids);
        this.updateSelection(values);
        this.clearSearch();
        if (triggerChange) {
          this.triggerChange(this.buildChangeDetails(old, this.data()))
        }
      }
    }
  });
  $.fn.select2 = function() {
    var args = Array.prototype.slice.call(arguments, 0),
      opts, select2, method, value, multiple, allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
      valueMethods = ["opened", "isFocused", "container", "dropdown"],
      propertyMethods = ["val", "data"],
      methodsMap = {
        search: "externalSearch"
      };
    this.each(function() {
      if (args.length === 0 || typeof(args[0]) === "object") {
        opts = args.length === 0 ? {} : $.extend({}, args[0]);
        opts.element = $(this);
        if (opts.element.get(0).tagName.toLowerCase() === "select") {
          multiple = opts.element.prop("multiple")
        } else {
          multiple = opts.multiple || false;
          if ("tags" in opts) {
            opts.multiple = multiple = true
          }
        }
        select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
        select2.init(opts)
      } else {
        if (typeof(args[0]) === "string") {
          if (indexOf(args[0], allowedMethods) < 0) {
            throw "Unknown method: " + args[0]
          }
          value = undefined;
          select2 = $(this).data("select2");
          if (select2 === undefined) {
            return
          }
          method = args[0];
          if (method === "container") {
            value = select2.container
          } else {
            if (method === "dropdown") {
              value = select2.dropdown
            } else {
              if (methodsMap[method]) {
                method = methodsMap[method]
              }
              value = select2[method].apply(select2, args.slice(1))
            }
          }
          if (indexOf(args[0], valueMethods) >= 0 || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
            return false
          }
        } else {
          throw "Invalid arguments to select2 plugin: " + args
        }
      }
    });
    return (value === undefined) ? this : value
  };
  $.fn.select2.defaults = {
    width: "copy",
    loadMorePadding: 0,
    closeOnSelect: true,
    openOnEnter: true,
    containerCss: {},
    dropdownCss: {},
    containerCssClass: "",
    dropdownCssClass: "",
    formatResult: function(result, container, query, escapeMarkup) {
      var markup = [];
      markMatch(result.text, query.term, markup, escapeMarkup);
      return markup.join("")
    },
    formatSelection: function(data, container, escapeMarkup) {
      return data ? escapeMarkup(data.text) : undefined
    },
    sortResults: function(results, container, query) {
      return results
    },
    formatResultCssClass: function(data) {
      return data.css
    },
    formatSelectionCssClass: function(data, container) {
      return undefined
    },
    formatMatches: function(matches) {
      if (matches === 1) {
        return "One result is available, press enter to select it."
      }
      return matches + " results are available, use up and down arrow keys to navigate."
    },
    formatNoMatches: function() {
      return "No matches found"
    },
    formatInputTooShort: function(input, min) {
      var n = min - input.length;
      return "Please enter " + n + " or more character" + (n == 1 ? "" : "s")
    },
    formatInputTooLong: function(input, max) {
      var n = input.length - max;
      return "Please delete " + n + " character" + (n == 1 ? "" : "s")
    },
    formatSelectionTooBig: function(limit) {
      return "You can only select " + limit + " item" + (limit == 1 ? "" : "s")
    },
    formatLoadMore: function(pageNumber) {
      return "Loading more results…"
    },
    formatSearching: function() {
      return "Searching…"
    },
    minimumResultsForSearch: 0,
    minimumInputLength: 0,
    maximumInputLength: null,
    maximumSelectionSize: 0,
    id: function(e) {
      return e == undefined ? null : e.id
    },
    matcher: function(term, text) {
      return stripDiacritics("" + text).toUpperCase().indexOf(stripDiacritics("" + term).toUpperCase()) >= 0
    },
    separator: ",",
    tokenSeparators: [],
    tokenizer: defaultTokenizer,
    escapeMarkup: defaultEscapeMarkup,
    blurOnChange: false,
    selectOnBlur: false,
    adaptContainerCssClass: function(c) {
      return c
    },
    adaptDropdownCssClass: function(c) {
      return null
    },
    nextSearchTerm: function(selectedObject, currentSearchTerm) {
      return undefined
    },
    searchInputPlaceholder: "",
    createSearchChoicePosition: "top",
    shouldFocusInput: function(instance) {
      var supportsTouchEvents = (("ontouchstart" in window) || (navigator.msMaxTouchPoints > 0));
      if (!supportsTouchEvents) {
        return true
      }
      if (instance.opts.minimumResultsForSearch < 0) {
        return false
      }
      return true
    }
  };
  $.fn.select2.ajaxDefaults = {
    transport: $.ajax,
    params: {
      type: "GET",
      cache: false,
      dataType: "json"
    }
  };
  window.Select2 = {
    query: {
      ajax: ajax,
      local: local,
      tags: tags
    },
    util: {
      debounce: debounce,
      markMatch: markMatch,
      escapeMarkup: defaultEscapeMarkup,
      stripDiacritics: stripDiacritics
    },
    "class": {
      "abstract": AbstractSelect2,
      single: SingleSelect2,
      multi: MultiSelect2
    }
  }
}(jQuery));
Select2["class"].multi.prototype.findHighlightableChoices = function() {
  return this.results.find(".select2-result-selectable:not(.select2-disabled)")
};
var Select2TriggerSelect = Select2["class"].multi.prototype.triggerSelect;
Select2["class"].multi.prototype.triggerSelect = function(e) {
  if (-1 === this.val().indexOf(this.id(e))) {
    return Select2TriggerSelect.apply(this, arguments)
  }
  var t = this.id(e),
    i = $.Event("select2-removing");
  if (i.val = t, i.choice = e, this.opts.element.trigger(i), i.isDefaultPrevented()) {
    return !1
  }
  var l = this.val(),
    s = this;
  if (!l || 0 == l.length) {
    return !0
  }
  for (a = 0; a < l.length; a++) {
    l[a] === t && (l.splice(a, 1), this.val(l), this.results.find(".select2-result").each(function() {
      var e = $(this);
      s.id(e.data("select2-data")) === t && e.removeClass("select2-selected")
    }))
  }
  this.opts.element.trigger({
    type: "select2-removed",
    val: this.id(e),
    choice: e
  }), this.triggerChange({
    removed: e
  })
};
! function(e) {
  var t, a;
  return a = "undefined" != typeof window && null !== window ? window : global, a.SelectToRadio = t = function() {
    function t() {
      this.show = function() {
        function t(t, a) {
          var l, n, i = e(t);
          a.preventDefault(), l = i.find("span").attr("value"), n = i.find("label").text(), console.log(" Li value " + l + " text" + n), i.find("span").hasClass("ff-ext-selected") ? (i.find("span").removeClass("ff-ext-selected"), i.find("span").attr("data-" + c + "-checked", !0)) : (o.find("span").removeClass("ff-ext-selected"), o.find("span").attr("data-" + c + "-checked", !1), i.find("span").addClass("ff-ext-selected"), i.find("span").attr("data-" + c + "-checked", !0)), d.data("SelectToRadio").currentItemValue = l, d.data("SelectToRadio").currentItemText = n, console.log(" RBText-" + d.data("SelectToRadio").currentItemText), o.trigger("radiochange").trigger("radiostyle"), r.onSelect.call(t, d.data("SelectToRadio").currentItemValue, d.data("SelectToRadio").currentItemText)
        }

        function a(t, a) {
          var l, n, i = [],
            s = e(t);
          a.preventDefault(), console.log(" Li value " + l + " text" + n), s.find("span").hasClass("ff-ext-selected") ? (s.find("span").removeClass("ff-ext-selected"), s.find("span").attr("data-" + c + "-checked", !1)) : (s.find("span").addClass("ff-ext-selected"), s.find("span").attr("data-" + c + "-checked", !0)), e(t).parent().find("li span").each(function(t, a) {
            "true" == e(a).attr("data-" + c + "-checked") && i.push(e(a).attr("value"))
          }), d.data("SelectToRadio").currentItemValue = i, console.log(" Checkbox text-" + d.data("SelectToRadio").currentItemValue), o.trigger("checkboxchange").trigger("checkboxstyle"), r.onSelect.call(t, d.data("SelectToRadio").currentItemValue, "")
        }
        var o, l, n, i, c, s, d = this.$elem,
          r = this.options,
          f = [],
          u = [];
        if (!d.data("SelectToRadio")) {
          if (r.initialSelectValue) {
            f = e('option[value="' + r.initialSelectValue + '"]', d)
          } else {
            var h = [];
            if (h = e("option:selected", d), h.length > 1) {
              e.each(h, function(t, a) {
                d.find('option[value="' + a + '"]').prop("selected", !0), f.push(e(a).attr("value")), u.push(e(a).text())
              })
            } else {
              var p = h;
              f.push(e(p).attr("value")), u.push(e(p).text())
            }
          }
          i = "horizontal" == r.alignment ? "ff-ext-horizontal" : "ff-ext-vertical", "ff-ext-checkbox" == r.controlType ? (l = !1, c = "ff-ext-checkbox", s = "checkbox") : (l = !0, c = "ff-ext-radio", s = "radiobtn"), d.data("SelectToRadio", {
            userOptions: r,
            currentItemValue: f,
            currentItemText: u,
            originalItemValue: f,
            originalItemText: u
          }), n = d.attr("id"), o = e("<div />", {
            "class": "ff-select-to-" + s + "-list custom-flex-control-container"
          }).insertBefore(d);
          var x = e("<ul />", {
            id: "ul" + n,
            "class": "ff-select-to-" + s + "-ul " + i
          });
          d.find("option").each(function(t) {
            var a, o, i, c, s, d, r;
            a = e(this).val(), a && (o = e(this).text(), c = e(this).data("html"), i = n + "__" + t, c && (o = c), s = e("<li/>", {
              "class": "ff-radio-li"
            }), l || (s = e("<li/>", {
              "class": "ff-checkbox-li"
            })), d = e("<label/>", {
              "for": i,
              text: o
            }), r = l ? e("<span />", {
              "class": "ff-ext-radio-css",
              name: n,
              id: i,
              value: a
            }) : e("<span />", {
              "class": "ff-ext-checkbox-css",
              name: n,
              id: i,
              value: a
            }), s.append(r), s.append(d), x.append(s))
          }), o.append(x), d.data("SelectToRadio").deselectable = d.find("option:first").val() ? !1 : !0, r.readonly && o.addClass("ff-ext-readonly"), l ? (o.on("radiochange", function(e, t, a) {
            t = t ? t : d.data("SelectToRadio").currentItemValue, a = a ? a : d.data("SelectToRadio").currentItemText, d.find('option[value="' + t + '"]').prop("selected", !0), console.log(" Item selected" + a), d.change()
          }).trigger("radiochange"), o.on("radiostyle", function() {
            o.find("li>span").removeClass("ff-ext-selected"), o.find("li>span").attr("data-" + c + "-checked", !1);
            var t = d.data("SelectToRadio").currentItemValue;
            console.log(" currentItemValue " + d.data("SelectToRadio").currentItemValue), e(this).find('li  span[value="' + t + '"]').attr("data-" + c + "-checked", !0), e(this).find('li  span[value="' + t + '"]').addClass("ff-ext-selected")
          }).trigger("radiostyle")) : (o.on("checkboxchange", function(t, a) {
            a = a ? a : d.data("SelectToRadio").currentItemValue, d.find("option").prop("selected", !1), void 0 !== a && a.length > 1 ? (d.find("option").prop("selected", !1), e.each(a, function(e, t) {
              d.find('option[value="' + t + '"]').prop("selected", !0)
            })) : void 0 !== a && d.find('option[value="' + a + '"]').prop("selected", !0), d.change()
          }).trigger("checkboxchange"), o.on("checkboxstyle", function() {
            o.find("li").removeClass("ff-ext-selected");
            var t = d.data("SelectToRadio").currentItemValue;
            void 0 !== t && t.length > 1 ? e.each(t, function(e, t) {
              o.find('li  span[value="' + t + '"]').attr("data-" + c + "-checked", !0), o.find('li span[value="' + t + '"]').addClass("ff-ext-selected")
            }) : void 0 !== t && (o.find('li  span[value="' + t + '"]').attr("data-" + c + "-checked", !0), o.find('li span[value="' + t + '"]').addClass("ff-ext-selected"))
          }).trigger("checkboxstyle")), $allLI = o.find("li"), r.readonly && $allLI.on("click", function(e) {
            e.preventDefault()
          }), r.readonly || $allLI.on("click", function(e) {
            return l ? t(this, e) : a(this, e), !1
          }), $allRadios = o.find("li span"), d.hasClass("custom-select-offscreen") || d.addClass("custom-select-offscreen")
        }
      }, this.destroy = function() {
        var e = this.$elem.data("SelectToRadio").currentItemValue,
          t = this.$elem.data("SelectToRadio").currentItemText,
          a = this.$elem.data("SelectToRadio").userOptions;
        this.$elem.removeData("SelectToRadio"), this.$widget.off().remove(), this.$elem.removeClass("custom-select-offscreen"), a.onDestroy.call(this, e, t)
      }
    }
    return t.prototype.init = function(t, a) {
      var o;
      return o = this, o.elem = a, o.$elem = e(a), o.options = e.extend({}, e.fn.SelectToRadio.defaults, t)
    }, t
  }(), e.fn.SelectToRadio = function(a, o) {
    return this.each(function() {
      var l = new t;
      if (e(this).is("select") || e.error("Sorry, this plugin only works with select fields."), l.hasOwnProperty(a)) {
        if (l.init(o, this), "show" === a) {
          return l.show(o)
        }
        if (e(this).hasClass("custom-select-offscreen") || e(this).addClass("custom-select-offscreen"), l.$widget = e(this).prev("ff-ext-checkbox" == this.options.controlType ? ".ff-select-to-checkbox-list" : ".ff-select-to-radiobtn-list"), l.$widget && l.$elem.data("SelectToRadio")) {
          return l[a](o)
        }
      } else {
        if ("object" == typeof a || !a) {
          return o = a, l.init(o, this), l.show()
        }
        e.error("Method " + a + " does not exist on jQuery.SelectToRadio")
      }
    })
  }, e.fn.SelectToRadio.defaults = {
    initialSelectValue: null,
    controlType: "ff-ext-radio",
    alignment: "vertical",
    readonly: !1,
    onSelect: function() {},
    onDestroy: function() {}
  }
}(jQuery);
! function(t) {
  var a, e;
  return e = "undefined" != typeof window && null !== window ? window : global, e.FFRating = a = function() {
    function a() {
      this.show = function() {
        var a, e, n, r, i, f = this.$elem,
          l = this.options;
        if (!f.data("ffrating")) {
          i = l.initialRating ? l.initialRating : f.val(), r = l.isStar ? "star-rating-control" : "nps-rating-control", f.data("ffrating", {
            userOptions: l,
            currentRatingValue: i,
            originalRatingValue: i
          }), a = t("<div />", {
            "class": "ff-rating-widget " + r + " custom-flex-control-container"
          }).insertBefore(f);
          var s = parseInt(l.min),
            o = [],
            d = parseInt(l.max);
          for (s; d >= s; s++) {
            o.push(s)
          }
          t.each(o, function(e, n) {
            var r, i, f, s;
            r = n;
            var d = parseInt(n);
            d >= 0 && (i = t("<a />", {
              href: "#",
              title: r,
              "data-rating-value": r,
              "data-rating-text": r
            }), f = 0 == e ? t("<span />", {
              html: l.minLabel,
              "class": "rating-label-first"
            }) : e != l.medium || l.isStar ? e == o.length - 1 ? t("<span />", {
              html: l.maxLabel,
              "class": "rating-label-last"
            }) : t("<span />", {
              html: ""
            }) : t("<span />", {
              html: l.mediumLabel,
              "class": "rating-label-middle"
            }), l.isStar ? (s = t("<span />", {
              html: "",
              "class": "star-icon"
            }), i.append(s)) : (s = t("<span />", {
              html: r,
              "class": "nps-text"
            }), i.append(s)), a.append(i.append(f)))
          }), l.showSelectedRating && a.append(t("<span />", {
            text: "",
            "class": "ff-rating-current-rating"
          })), n = l.reverse ? "nextAll" : "prevAll", l.readonly && a.addClass("ff-rating-readonly"), a.on("ratingchange", function(a, e) {
            e = e ? e : f.data("ffrating").currentRatingValue, f.val(e), l.showSelectedRating && t(this).find(".ff-rating-current-rating").text(e)
          }).trigger("ratingchange"), a.on("ratingstyle", function() {
            a.find("a").removeClass("ff-rating-selected ff-rating-current"), t(this).find('a[data-rating-value="' + f.data("ffrating").currentRatingValue + '"]').addClass("ff-rating-selected ff-rating-current")[n]().addClass("ff-rating-selected"), f.val(f.data("ffrating").currentRatingValue)
          }).trigger("ratingstyle"), e = a.find("a"), e.on("touchstart", function(a) {
            a.preventDefault(), a.stopPropagation(), t(this).click()
          }), l.readonly && e.on("click", function(t) {
            t.preventDefault()
          }), l.readonly || (e.on("click", function(r) {
            var i, s, o = t(this);
            return r.preventDefault(), e.removeClass("ff-rating-active ff-rating-selected"), o.addClass("ff-rating-selected")[n]().addClass("ff-rating-selected"), i = o.attr("data-rating-value"), s = o.attr("data-rating-text"), o.hasClass("ff-rating-current") && f.data("ffrating").deselectable ? (o.removeClass("ff-rating-selected ff-rating-current")[n]().removeClass("ff-rating-selected ff-rating-current"), i = "", s = "") : (e.removeClass("ff-rating-current"), o.addClass("ff-rating-current")), f.data("ffrating").currentRatingValue = i, a.trigger("ratingchange"), l.onSelect.call(this, f.data("ffrating").currentRatingValue), !1
          }), e.on({
            mouseenter: function() {
              var r = t(this);
              e.removeClass("ff-rating-active").removeClass("ff-rating-selected"), r.addClass("ff-rating-active")[n]().addClass("ff-rating-active"), a.trigger("ratingchange", [r.attr("data-rating-value"), r.attr("data-rating-text")])
            }
          }), a.on({
            mouseleave: function() {
              e.removeClass("ff-rating-active"), a.trigger("ratingchange").trigger("ratingstyle")
            }
          })), f.hasClass("custom-flexcontrol-offscreen") || f.addClass("custom-flexcontrol-offscreen")
        }
      }, this.destroy = function() {
        var a = this.$elem.data("ffrating").currentRatingValue,
          e = this.$elem.data("ffrating").userOptions;
        this.$elem.removeData("ffrating"), this.$elem.removeClass("custom-flexcontrol-offscreen"), this.$widget.off().remove(), this.$elem.show(), t(this.$elem).removeAttributes(["data-flex-min", "data-flex-max", "data-flex-middle", "data-flex-minlabel", "data-flex-maxlabel", "data-flex-middlelabel"]), e.onDestroy.call(this, a)
      }
    }

    function e(a, e, n, r) {
      var i = n;
      try {
        var i = t(a).attr(e);
        void 0 === i && (i = ""), r && "" == i && (i = n)
      } catch (f) {
        i = n, console.log("FF log (ffrating.js):" + f.message)
      }
      return i
    }
    return t.fn.removeAttributes = function(a, e) {
      return a && (a = t.map(a, function(t) {
        return t.toString().toLowerCase()
      })), e && (e = t.map(e, function(t) {
        return t.toString().toLowerCase()
      }), a && (a = t.grep(a, function(a) {
        return -1 == t.inArray(a, e)
      }))), this.each(function() {
        var n;
        a ? n = a : (n = t.map(this.attributes, function(t) {
          return t.name.toString().toLowerCase()
        }), e && (n = t.grep(n, function(a) {
          return -1 == t.inArray(a, e)
        })));
        var r = t(this);
        t.each(n, function(t, a) {
          r.removeAttr(a)
        })
      })
    }, a.prototype.init = function(a, n) {
      var r;
      return r = this, r.elem = n, r.$elem = t(n), void 0 !== a && (a.min = e(t(n), "data-flex-min", t.fn.ffrating.defaults.min, !0), a.minLabel = e(t(n), "data-flex-minlabel", t.fn.ffrating.defaults.minLabel, !1), a.max = e(t(n), "data-flex-max", t.fn.ffrating.defaults.max, !0), a.maxLabel = e(t(n), "data-flex-maxlabel", t.fn.ffrating.defaults.maxLabel, !1), a.medium = e(t(n), "data-flex-middle", t.fn.ffrating.defaults.medium, !1), a.mediumLabel = e(t(n), "data-flex-middlelabel", t.fn.ffrating.defaults.mediumLabel, !1)), r.options = t.extend({}, t.fn.ffrating.defaults, a)
    }, a
  }(), t.fn.ffrating = function(e, n) {
    return this.each(function() {
      var r = new a;
      if (t(this).is("input") || t.error("Sorry, this plugin only works with input fields."), r.hasOwnProperty(e)) {
        if (r.init(n, this), "show" === e) {
          return r.show(n)
        }
        if (t(this).hasClass("custom-flexcontrol-offscreen") || t(this).addClass("custom-flexcontrol-offscreen"), r.$widget = t(this).prev(".ff-rating-widget"), r.$widget && r.$elem.data("ffrating")) {
          return r[e](n)
        }
      } else {
        if ("object" == typeof e || !e) {
          return n = e, r.init(n, this), r.show()
        }
        t.error("Method " + e + " does not exist on jQuery.ffrating")
      }
    })
  }, t.fn.ffrating.defaults = {
    initialRating: null,
    min: 0,
    max: 10,
    steps: 1,
    medium: 5,
    minLabel: "1",
    maxLabel: "10",
    mediumLabel: "5",
    isStar: !0,
    showValues: !1,
    showSelectedRating: !1,
    reverse: !1,
    readonly: !1,
    onSelect: function() {},
    onClear: function() {},
    onDestroy: function() {}
  }
}(jQuery);
(function($) {
  function SignaturePad(selector, options) {
    var self = this,
      settings = $.extend({}, $.fn.signaturePad.defaults, options),
      context = $(selector),
      canvas = $(settings.canvas, context),
      element = canvas.get(0),
      canvasContext = null,
      previous = {
        x: null,
        y: null
      },
      output = [],
      mouseLeaveTimeout = false,
      mouseButtonDown = false,
      touchable = false,
      eventsBound = false,
      typeItDefaultFontSize = 30,
      typeItCurrentFontSize = typeItDefaultFontSize,
      typeItNumChars = 0;

    function clearMouseLeaveTimeout() {
      clearTimeout(mouseLeaveTimeout);
      mouseLeaveTimeout = false;
      mouseButtonDown = false
    }

    function drawLine(e, newYOffset) {
      var offset, newX, newY;
      e.preventDefault();
      offset = $(e.target).offset();
      clearTimeout(mouseLeaveTimeout);
      mouseLeaveTimeout = false;
      if (typeof e.targetTouches !== "undefined") {
        newX = Math.floor(e.targetTouches[0].pageX - offset.left);
        newY = Math.floor(e.targetTouches[0].pageY - offset.top)
      } else {
        newX = Math.floor(e.pageX - offset.left);
        newY = Math.floor(e.pageY - offset.top)
      }
      if (previous.x === newX && previous.y === newY) {
        return true
      }
      if (previous.x === null) {
        previous.x = newX
      }
      if (previous.y === null) {
        previous.y = newY
      }
      if (newYOffset) {
        newY += newYOffset
      }
      canvasContext.beginPath();
      canvasContext.moveTo(previous.x, previous.y);
      canvasContext.lineTo(newX, newY);
      canvasContext.lineCap = settings.penCap;
      canvasContext.stroke();
      canvasContext.closePath();
      output.push({
        lx: newX,
        ly: newY,
        mx: previous.x,
        my: previous.y
      });
      previous.x = newX;
      previous.y = newY;
      if (settings.onDraw && typeof settings.onDraw === "function") {
        settings.onDraw.apply(self)
      }
    }

    function stopDrawingWrapper() {
      stopDrawing()
    }

    function stopDrawing(e) {
      if (!!e) {
        drawLine(e, 1)
      } else {
        if (touchable) {
          canvas.each(function() {
            this.removeEventListener("touchmove", drawLine)
          })
        } else {
          canvas.unbind("mousemove.signaturepad")
        }
        if (output.length > 0 && settings.onDrawEnd && typeof settings.onDrawEnd === "function") {
          settings.onDrawEnd.apply(self)
        }
      }
      previous.x = null;
      previous.y = null;
      if (settings.output && output.length > 0) {
        $(settings.output, context).val(JSON.stringify(output))
      }
    }

    function drawSigLine() {
      if (!settings.lineWidth) {
        return false
      }
      canvasContext.beginPath();
      canvasContext.lineWidth = settings.lineWidth;
      canvasContext.strokeStyle = settings.lineColour;
      canvasContext.moveTo(settings.lineMargin, settings.lineTop);
      canvasContext.lineTo(element.width - settings.lineMargin, settings.lineTop);
      canvasContext.stroke();
      canvasContext.closePath()
    }

    function clearCanvas() {
      canvasContext.clearRect(0, 0, element.width, element.height);
      canvasContext.fillStyle = settings.bgColour;
      canvasContext.fillRect(0, 0, element.width, element.height);
      if (!settings.displayOnly) {
        drawSigLine()
      }
      canvasContext.lineWidth = settings.penWidth;
      canvasContext.strokeStyle = settings.penColour;
      $(settings.output, context).val("");
      output = [];
      stopDrawing()
    }

    function onMouseMove(e, o) {
      if (previous.x == null) {
        drawLine(e, 1)
      } else {
        drawLine(e, o)
      }
    }

    function startDrawing(e, touchObject) {
      if (touchable) {
        touchObject.addEventListener("touchmove", onMouseMove, false)
      } else {
        canvas.bind("mousemove.signaturepad", onMouseMove)
      }
      drawLine(e, 1)
    }

    function disableCanvas() {
      eventsBound = false;
      canvas.each(function() {
        if (this.removeEventListener) {
          this.removeEventListener("touchend", stopDrawingWrapper);
          this.removeEventListener("touchcancel", stopDrawingWrapper);
          this.removeEventListener("touchmove", drawLine)
        }
        if (this.ontouchstart) {
          this.ontouchstart = null
        }
      });
      $(document).unbind("mouseup.signaturepad");
      canvas.unbind("mousedown.signaturepad");
      canvas.unbind("mousemove.signaturepad");
      canvas.unbind("mouseleave.signaturepad");
      $(settings.clear, context).unbind("click.signaturepad")
    }

    function initDrawEvents(e) {
      if (eventsBound) {
        return false
      }
      eventsBound = true;
      $("input").blur();
      if (typeof e.targetTouches !== "undefined") {
        touchable = true
      }
      if (touchable) {
        canvas.each(function() {
          this.addEventListener("touchend", stopDrawingWrapper, false);
          this.addEventListener("touchcancel", stopDrawingWrapper, false)
        });
        canvas.unbind("mousedown.signaturepad")
      } else {
        $(document).bind("mouseup.signaturepad", function() {
          if (mouseButtonDown) {
            stopDrawing();
            clearMouseLeaveTimeout()
          }
        });
        canvas.bind("mouseleave.signaturepad", function(e) {
          if (mouseButtonDown) {
            stopDrawing(e)
          }
          if (mouseButtonDown && !mouseLeaveTimeout) {
            mouseLeaveTimeout = setTimeout(function() {
              stopDrawing();
              clearMouseLeaveTimeout()
            }, 500)
          }
        });
        canvas.each(function() {
          this.ontouchstart = null
        })
      }
    }

    function drawIt() {
      $(settings.typed, context).hide();
      clearCanvas();
      canvas.each(function() {
        this.ontouchstart = function(e) {
          e.preventDefault();
          mouseButtonDown = true;
          initDrawEvents(e);
          startDrawing(e, this)
        }
      });
      canvas.bind("mousedown.signaturepad", function(e) {
        e.preventDefault();
        if (e.which > 1) {
          return false
        }
        mouseButtonDown = true;
        initDrawEvents(e);
        startDrawing(e)
      });
      $(settings.clear, context).bind("click.signaturepad", function(e) {
        e.preventDefault();
        clearCanvas()
      });
      $(settings.typeIt, context).bind("click.signaturepad", function(e) {
        e.preventDefault();
        typeIt()
      });
      $(settings.drawIt, context).unbind("click.signaturepad");
      $(settings.drawIt, context).bind("click.signaturepad", function(e) {
        e.preventDefault()
      });
      $(settings.typeIt, context).removeClass(settings.currentClass);
      $(settings.drawIt, context).addClass(settings.currentClass);
      $(settings.sig, context).addClass(settings.currentClass);
      $(settings.typeItDesc, context).hide();
      $(settings.drawItDesc, context).show();
      $(settings.clear, context).show()
    }

    function typeIt() {
      clearCanvas();
      disableCanvas();
      $(settings.typed, context).show();
      $(settings.drawIt, context).bind("click.signaturepad", function(e) {
        e.preventDefault();
        drawIt()
      });
      $(settings.typeIt, context).unbind("click.signaturepad");
      $(settings.typeIt, context).bind("click.signaturepad", function(e) {
        e.preventDefault()
      });
      $(settings.output, context).val("");
      $(settings.drawIt, context).removeClass(settings.currentClass);
      $(settings.typeIt, context).addClass(settings.currentClass);
      $(settings.sig, context).removeClass(settings.currentClass);
      $(settings.drawItDesc, context).hide();
      $(settings.clear, context).hide();
      $(settings.typeItDesc, context).show();
      typeItCurrentFontSize = typeItDefaultFontSize = $(settings.typed, context).css("font-size").replace(/px/, "")
    }

    function type(val) {
      var typed = $(settings.typed, context),
        cleanedVal = $.trim(val.replace(/>/g, "&gt;").replace(/</g, "&lt;")),
        oldLength = typeItNumChars,
        edgeOffset = typeItCurrentFontSize * 0.5;
      typeItNumChars = cleanedVal.length;
      typed.html(cleanedVal);
      if (!cleanedVal) {
        typed.css("font-size", typeItDefaultFontSize + "px");
        return
      }
      if (typeItNumChars > oldLength && typed.outerWidth() > element.width) {
        while (typed.outerWidth() > element.width) {
          typeItCurrentFontSize--;
          typed.css("font-size", typeItCurrentFontSize + "px")
        }
      }
      if (typeItNumChars < oldLength && typed.outerWidth() + edgeOffset < element.width && typeItCurrentFontSize < typeItDefaultFontSize) {
        while (typed.outerWidth() + edgeOffset < element.width && typeItCurrentFontSize < typeItDefaultFontSize) {
          typeItCurrentFontSize++;
          typed.css("font-size", typeItCurrentFontSize + "px")
        }
      }
    }

    function onBeforeValidate(context, settings) {
      $("p." + settings.errorClass, context).remove();
      context.removeClass(settings.errorClass);
      $("input, label", context).removeClass(settings.errorClass)
    }

    function onFormError(errors, context, settings) {
      if (errors.nameInvalid) {
        context.append(['<p id="reqdv' + $(settings.name, context).attr("id") + '" class="', settings.errorClass, '">', settings.errorMessage, "</p>"].join(""));
        $(settings.name, context).addClass("ff-input-type-invalid");
        $("label[for=" + $(settings.name, context).attr("id") + "]", context).addClass(settings.errorClass)
      } else {
        $(settings.name, context).removeClass("ff-input-type-invalid")
      }
      if (errors.drawInvalid) {
        context.append(['<p id="reqdvcanvas' + $(settings.name, context).attr("id") + '" class="', settings.errorClass, '">', settings.errorMessageDraw, "</p>"].join(""));
        $(settings.canvas, context).addClass("ff-input-type-invalid");
        $(settings.canvas, context).attr("id", "canvas" + $(settings.name, context).attr("id"))
      } else {
        $(settings.canvas, context).removeClass("ff-input-type-invalid")
      }
    }

    function validateForm() {
      var valid = true,
        errors = {
          drawInvalid: false,
          nameInvalid: false
        },
        onBeforeArguments = [context, settings],
        onErrorArguments = [errors, context, settings];
      if (settings.onBeforeValidate && typeof settings.onBeforeValidate === "function") {
        settings.onBeforeValidate.apply(self, onBeforeArguments)
      } else {
        onBeforeValidate.apply(self, onBeforeArguments)
      }
      if (settings.drawOnly && output.length < 1) {
        errors.drawInvalid = true;
        valid = false
      }
      if ($(settings.name, context).val() === "") {
        errors.nameInvalid = true;
        valid = false
      }
      if (settings.onFormError && typeof settings.onFormError === "function") {
        settings.onFormError.apply(self, onErrorArguments)
      } else {
        onFormError.apply(self, onErrorArguments)
      }
      return valid
    }

    function drawSignature(paths, context, saveOutput) {
      for (var i in paths) {
        if (typeof paths[i] === "object") {
          context.beginPath();
          context.moveTo(paths[i].mx, paths[i].my);
          context.lineTo(paths[i].lx, paths[i].ly);
          context.lineCap = settings.penCap;
          context.stroke();
          context.closePath();
          if (saveOutput) {
            output.push({
              lx: paths[i].lx,
              ly: paths[i].ly,
              mx: paths[i].mx,
              my: paths[i].my
            })
          }
        }
      }
    }

    function init() {
      if (parseFloat(((/CPU.+OS ([0-9_]{3}).*AppleWebkit.*Mobile/i.exec(navigator.userAgent)) || [0, "4_2"])[1].replace("_", ".")) < 4.1) {
        $.fn.Oldoffset = $.fn.offset;
        $.fn.offset = function() {
          var result = $(this).Oldoffset();
          result.top -= window.scrollY;
          result.left -= window.scrollX;
          return result
        }
      }
      $(settings.typed, context).bind("selectstart.signaturepad", function(e) {
        return $(e.target).is(":input")
      });
      canvas.bind("selectstart.signaturepad", function(e) {
        return $(e.target).is(":input")
      });
      if (!element.getContext && FlashCanvas) {
        FlashCanvas.initElement(element)
      }
      if (element.getContext) {
        canvasContext = element.getContext("2d");
        $(settings.sig, context).show();
        if (!settings.displayOnly) {
          if (!settings.drawOnly) {
            $(settings.name, context).bind("keyup.signaturepad", function() {
              type($(this).val())
            });
            $(settings.name, context).bind("blur.signaturepad", function() {
              type($(this).val())
            });
            $(settings.drawIt, context).bind("click.signaturepad", function(e) {
              e.preventDefault();
              drawIt()
            })
          }
          if (settings.drawOnly || settings.defaultAction === "drawIt") {
            drawIt()
          } else {
            typeIt()
          }
          if (settings.validateFields) {
            if ($(selector).is("form")) {
              $(selector).bind("submit.signaturepad", function() {
                return validateForm()
              })
            } else {
              $(selector).parents("form").bind("submit.signaturepad", function() {
                return validateForm()
              })
            }
          }
          $(settings.sigNav, context).show()
        }
      }
    }
    $.extend(self, {
      signaturePad: "{{version}}",
      init: function() {
        init()
      },
      updateOptions: function(options) {
        $.extend(settings, options)
      },
      regenerate: function(paths) {
        self.clearCanvas();
        $(settings.typed, context).hide();
        if (typeof paths === "string") {
          paths = JSON.parse(paths)
        }
        drawSignature(paths, canvasContext, true);
        if (settings.output && $(settings.output, context).length > 0) {
          $(settings.output, context).val(JSON.stringify(output))
        }
      },
      clearCanvas: function() {
        clearCanvas()
      },
      getSignature: function() {
        return output
      },
      getSignatureString: function() {
        return JSON.stringify(output)
      },
      getSignatureImage: function() {
        var tmpCanvas = document.createElement("canvas"),
          tmpContext = null,
          data = null;
        tmpCanvas.style.position = "absolute";
        tmpCanvas.style.top = "-999em";
        tmpCanvas.width = element.width;
        tmpCanvas.height = element.height;
        document.body.appendChild(tmpCanvas);
        if (!tmpCanvas.getContext && FlashCanvas) {
          FlashCanvas.initElement(tmpCanvas)
        }
        tmpContext = tmpCanvas.getContext("2d");
        tmpContext.fillStyle = settings.bgColour;
        tmpContext.fillRect(0, 0, element.width, element.height);
        tmpContext.lineWidth = settings.penWidth;
        tmpContext.strokeStyle = settings.penColour;
        drawSignature(output, tmpContext);
        data = tmpCanvas.toDataURL.apply(tmpCanvas, arguments);
        document.body.removeChild(tmpCanvas);
        tmpCanvas = null;
        return data
      },
      validateForm: function() {
        return validateForm()
      }
    })
  }
  $.fn.signaturePad = function(options) {
    var api = null;
    this.each(function() {
      if (!$.data(this, "plugin-signaturePad")) {
        api = new SignaturePad(this, options);
        api.init();
        $.data(this, "plugin-signaturePad", api)
      } else {
        api = $.data(this, "plugin-signaturePad");
        api.updateOptions(options)
      }
    });
    return api
  };
  $.fn.signaturePad.defaults = {
    defaultAction: "typeIt",
    displayOnly: false,
    drawOnly: false,
    canvas: "canvas",
    sig: ".sig",
    sigNav: ".sigNav",
    bgColour: "#ffffff",
    penColour: "#145394",
    penWidth: 2,
    penCap: "round",
    lineColour: "#ccc",
    lineWidth: 2,
    lineMargin: 5,
    lineTop: 35,
    name: ".name",
    typed: ".typed",
    clear: ".clearButton",
    typeIt: ".typeIt a",
    drawIt: ".drawIt a",
    typeItDesc: ".typeItDesc",
    drawItDesc: ".drawItDesc",
    output: ".output",
    currentClass: "current",
    validateFields: true,
    errorClass: "error",
    errorMessage: "Please enter your name",
    errorMessageDraw: "Please sign the document",
    onBeforeValidate: null,
    onFormError: null,
    onDraw: null,
    onDrawEnd: null
  }
}(jQuery));
if (!this.JSON) {
  this.JSON = {}
}(function() {
  function f(n) {
    return n < 10 ? "0" + n : n
  }
  if (typeof Date.prototype.toJSON !== "function") {
    Date.prototype.toJSON = function(key) {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    };
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
      return this.valueOf()
    }
  }
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap, indent, meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    },
    rep;

  function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
      var c = meta[a];
      return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + string + '"'
  }

  function str(key, holder) {
    var i, k, v, length, mind = gap,
      partial, value = holder[key];
    if (value && typeof value === "object" && typeof value.toJSON === "function") {
      value = value.toJSON(key)
    }
    if (typeof rep === "function") {
      value = rep.call(holder, key, value)
    }
    switch (typeof value) {
      case "string":
        return quote(value);
      case "number":
        return isFinite(value) ? String(value) : "null";
      case "boolean":
      case "null":
        return String(value);
      case "object":
        if (!value) {
          return "null"
        }
        gap += indent;
        partial = [];
        if (Object.prototype.toString.apply(value) === "[object Array]") {
          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || "null"
          }
          v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
          gap = mind;
          return v
        }
        if (rep && typeof rep === "object") {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            k = rep[i];
            if (typeof k === "string") {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v)
              }
            }
          }
        } else {
          for (k in value) {
            if (Object.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v)
              }
            }
          }
        }
        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
        gap = mind;
        return v
    }
  }
  if (typeof JSON.stringify !== "function") {
    JSON.stringify = function(value, replacer, space) {
      var i;
      gap = "";
      indent = "";
      if (typeof space === "number") {
        for (i = 0; i < space; i += 1) {
          indent += " "
        }
      } else {
        if (typeof space === "string") {
          indent = space
        }
      }
      rep = replacer;
      if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
        throw new Error("JSON.stringify")
      }
      return str("", {
        "": value
      })
    }
  }
  if (typeof JSON.parse !== "function") {
    JSON.parse = function(text, reviver) {
      var j;

      function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === "object") {
          for (k in value) {
            if (Object.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v
              } else {
                delete value[k]
              }
            }
          }
        }
        return reviver.call(holder, key, value)
      }
      cx.lastIndex = 0;
      if (cx.test(text)) {
        text = text.replace(cx, function(a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })
      }
      if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
        j = eval("(" + text + ")");
        return typeof reviver === "function" ? walk({
          "": j
        }, "") : j
      }
      throw new SyntaxError("JSON.parse")
    }
  }
}());
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else {
    if (typeof module !== "undefined" && module.exports) {
      module.exports = factory(require("jquery"))
    } else {
      factory(jQuery)
    }
  }
})(function($) {
  var $scrollTo = $.scrollTo = function(target, duration, settings) {
    return $(window).scrollTo(target, duration, settings)
  };
  $scrollTo.defaults = {
    axis: "xy",
    duration: 0,
    limit: true
  };

  function isWin(elem) {
    return !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
  }
  $.fn.scrollTo = function(target, duration, settings) {
    if (typeof duration === "object") {
      settings = duration;
      duration = 0
    }
    if (typeof settings === "function") {
      settings = {
        onAfter: settings
      }
    }
    if (target === "max") {
      target = 9000000000
    }
    settings = $.extend({}, $scrollTo.defaults, settings);
    duration = duration || settings.duration;
    var queue = settings.queue && settings.axis.length > 1;
    if (queue) {
      duration /= 2
    }
    settings.offset = both(settings.offset);
    settings.over = both(settings.over);
    return this.each(function() {
      if (target === null) {
        return
      }
      var win = isWin(this),
        elem = win ? this.contentWindow || window : this,
        $elem = $(elem),
        targ = target,
        attr = {},
        toff;
      switch (typeof targ) {
        case "number":
        case "string":
          if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
            targ = both(targ);
            break
          }
          targ = win ? $(targ) : $(targ, elem);
        case "object":
          if (targ.length === 0) {
            return
          }
          if (targ.is || targ.style) {
            toff = (targ = $(targ)).offset()
          }
      }
      var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;
      $.each(settings.axis.split(""), function(i, axis) {
        var Pos = axis === "x" ? "Left" : "Top",
          pos = Pos.toLowerCase(),
          key = "scroll" + Pos,
          prev = $elem[key](),
          max = $scrollTo.max(elem, axis);
        if (toff) {
          attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);
          if (settings.margin) {
            attr[key] -= parseInt(targ.css("margin" + Pos), 10) || 0;
            attr[key] -= parseInt(targ.css("border" + Pos + "Width"), 10) || 0
          }
          attr[key] += offset[pos] || 0;
          if (settings.over[pos]) {
            attr[key] += targ[axis === "x" ? "width" : "height"]() * settings.over[pos]
          }
        } else {
          var val = targ[pos];
          attr[key] = val.slice && val.slice(-1) === "%" ? parseFloat(val) / 100 * max : val
        }
        if (settings.limit && /^\d+$/.test(attr[key])) {
          attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max)
        }
        if (!i && settings.axis.length > 1) {
          if (prev === attr[key]) {
            attr = {}
          } else {
            if (queue) {
              animate(settings.onAfterFirst);
              attr = {}
            }
          }
        }
      });
      animate(settings.onAfter);

      function animate(callback) {
        var opts = $.extend({}, settings, {
          queue: true,
          duration: duration,
          complete: callback && function() {
            callback.call(elem, targ, settings)
          }
        });
        $elem.animate(attr, opts)
      }
    })
  };
  $scrollTo.max = function(elem, axis) {
    var Dim = axis === "x" ? "Width" : "Height",
      scroll = "scroll" + Dim;
    if (!isWin(elem)) {
      return elem[scroll] - $(elem)[Dim.toLowerCase()]()
    }
    var size = "client" + Dim,
      doc = elem.ownerDocument || elem.document,
      html = doc.documentElement,
      body = doc.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size])
  };

  function both(val) {
    return $.isFunction(val) || $.isPlainObject(val) ? val : {
      top: val,
      left: val
    }
  }
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function(t) {
      return $(t.elem)[t.prop]()
    },
    set: function(t) {
      var curr = this.get(t);
      if (t.options.interrupt && t._last && t._last !== curr) {
        return $(t.elem).stop()
      }
      var next = Math.round(t.now);
      if (curr !== next) {
        $(t.elem)[t.prop](next);
        t._last = this.get(t)
      }
    }
  };
  return $scrollTo
});
var LZString = function() {
  function o(o, r) {
    if (!t[o]) {
      t[o] = {};
      for (var n = 0; n < o.length; n++) {
        t[o][o.charAt(n)] = n
      }
    }
    return t[o][r]
  }
  var r = String.fromCharCode,
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
    t = {},
    i = {
      compressToBase64: function(o) {
        if (null == o) {
          return ""
        }
        var r = i._compress(o, 6, function(o) {
          return n.charAt(o)
        });
        switch (r.length % 4) {
          default:
            case 0:
            return r;
          case 1:
              return r + "===";
          case 2:
              return r + "==";
          case 3:
              return r + "="
        }
      },
      decompressFromBase64: function(r) {
        return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function(e) {
          return o(n, r.charAt(e))
        })
      },
      compressToUTF16: function(o) {
        return null == o ? "" : i._compress(o, 15, function(o) {
          return r(o + 32)
        }) + " "
      },
      decompressFromUTF16: function(o) {
        return null == o ? "" : "" == o ? null : i._decompress(o.length, 16384, function(r) {
          return o.charCodeAt(r) - 32
        })
      },
      compressToUint8Array: function(o) {
        for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) {
          var s = r.charCodeAt(e);
          n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256
        }
        return n
      },
      decompressFromUint8Array: function(o) {
        if (null === o || void 0 === o) {
          return i.decompress(o)
        }
        for (var n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++) {
          n[e] = 256 * o[2 * e] + o[2 * e + 1]
        }
        var s = [];
        return n.forEach(function(o) {
          s.push(r(o))
        }), i.decompress(s.join(""))
      },
      compressToEncodedURIComponent: function(o) {
        return null == o ? "" : i._compress(o, 6, function(o) {
          return e.charAt(o)
        })
      },
      decompressFromEncodedURIComponent: function(r) {
        return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function(n) {
          return o(e, r.charAt(n))
        }))
      },
      compress: function(o) {
        return i._compress(o, 16, function(o) {
          return r(o)
        })
      },
      _compress: function(o, r, n) {
        if (null == o) {
          return ""
        }
        var e, t, i, s = {},
          p = {},
          u = "",
          c = "",
          a = "",
          l = 2,
          f = 3,
          h = 2,
          d = [],
          m = 0,
          v = 0;
        for (i = 0; i < o.length; i += 1) {
          if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) {
            a = c
          } else {
            if (Object.prototype.hasOwnProperty.call(p, a)) {
              if (a.charCodeAt(0) < 256) {
                for (e = 0; h > e; e++) {
                  m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++
                }
                for (t = a.charCodeAt(0), e = 0; 8 > e; e++) {
                  m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                }
              } else {
                for (t = 1, e = 0; h > e; e++) {
                  m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0
                }
                for (t = a.charCodeAt(0), e = 0; 16 > e; e++) {
                  m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
                }
              }
              l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a]
            } else {
              for (t = s[a], e = 0; h > e; e++) {
                m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
              }
            }
            l--, 0 == l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u)
          }
        }
        if ("" !== a) {
          if (Object.prototype.hasOwnProperty.call(p, a)) {
            if (a.charCodeAt(0) < 256) {
              for (e = 0; h > e; e++) {
                m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++
              }
              for (t = a.charCodeAt(0), e = 0; 8 > e; e++) {
                m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
              }
            } else {
              for (t = 1, e = 0; h > e; e++) {
                m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0
              }
              for (t = a.charCodeAt(0), e = 0; 16 > e; e++) {
                m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
              }
            }
            l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a]
          } else {
            for (t = s[a], e = 0; h > e; e++) {
              m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
            }
          }
          l--, 0 == l && (l = Math.pow(2, h), h++)
        }
        for (t = 2, e = 0; h > e; e++) {
          m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
        }
        for (;;) {
          if (m <<= 1, v == r - 1) {
            d.push(n(m));
            break
          }
          v++
        }
        return d.join("")
      },
      decompress: function(o) {
        return null == o ? "" : "" == o ? null : i._decompress(o.length, 32768, function(r) {
          return o.charCodeAt(r)
        })
      },
      _decompress: function(o, n, e) {
        var t, i, s, p, u, c, a, l, f = [],
          h = 4,
          d = 4,
          m = 3,
          v = "",
          w = [],
          A = {
            val: e(0),
            position: n,
            index: 1
          };
        for (i = 0; 3 > i; i += 1) {
          f[i] = i
        }
        for (p = 0, c = Math.pow(2, 2), a = 1; a != c;) {
          u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1
        }
        switch (t = p) {
          case 0:
            for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) {
              u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1
            }
            l = r(p);
            break;
          case 1:
            for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) {
              u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1
            }
            l = r(p);
            break;
          case 2:
            return ""
        }
        for (f[3] = l, s = l, w.push(l);;) {
          if (A.index > o) {
            return ""
          }
          for (p = 0, c = Math.pow(2, m), a = 1; a != c;) {
            u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1
          }
          switch (l = p) {
            case 0:
              for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) {
                u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1
              }
              f[d++] = r(p), l = d - 1, h--;
              break;
            case 1:
              for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) {
                u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1
              }
              f[d++] = r(p), l = d - 1, h--;
              break;
            case 2:
              return w.join("")
          }
          if (0 == h && (h = Math.pow(2, m), m++), f[l]) {
            v = f[l]
          } else {
            if (l !== d) {
              return null
            }
            v = s + s.charAt(0)
          }
          w.push(v), f[d++] = s + v.charAt(0), h--, s = v, 0 == h && (h = Math.pow(2, m), m++)
        }
      }
    };
  return i
}();
"function" == typeof define && define.amd ? define(function() {
  return LZString
}) : "undefined" != typeof module && null != module && (module.exports = LZString);
(function($) {
  $(function() {
    var result = ExecBeforeRender();
    if (result == true) {
      Main()
    }
  });
  var formValid = false;
  var hasGeneralError = false;
  var jqXHRData;
  var maxFileSize = 5000000;
  window.ffErr_SignatureFullNameTyped = "Please enter your first and last name in the provided field.";
  window.ffErr_SignatureInitialsTyped = "Please enter your initials in the provided field.";
  window.ffErr_SignatureFullNameDrawn = "Please sign your first and last name in the provided field.";
  window.ffErr_SignatureInitialsDrawn = "Please sign your initials in the provided field.";
  window.ffErr_SignatureDateTyped = "Please select today's date in the provided field.";
  window.ffErr_SignatureDateDrawn = "Please sign today's date in the provided field.";
  window.ffErr_SignatureAcceptTerms = "You must accept the provided terms before continuing.";
  window.ffErr_SignatureValidEmail = "Please provide a valid email address.";
  window.ffErr_FormatValidDecimal = "Please enter a valid decimal value";
  window.ffErr_FormatValidNumber = "Please enter a valid numeric value";
  window.ffErr_FormatDecimalSize = "Value is too large";
  window.ffErr_FormatValidEmail = "Please enter a valid email address";
  window.ffErr_FormatValidPhone = "Please enter a valid phone number";
  window.ffErr_FormatValidUrl = "Please enter a valid URL";
  window.ffErr_FileUploadSize = "Maximum file size is 5 MB";
  window.ffErr_FileUploadType = "Only the following file types are allowed: ";
  window.ffErr_CaptchaIncorrect = "The text you have entered is incorrect. Please try again.";
  window.ff_AddAnotherSectionLink = "+ add item";
  window.ff_RemoveSectionLink = "- remove";
  window.ffPrompt_EnterSaveEmail = "Please provide your email address below. You will receive an email with a link to allow you to retrieve your saved form at a later date.";
  window.ffPrompt_SaveEmailConfirm = "Thank you! You will receive an email shortly with a link to your saved form.";
  window.ffPrompt_InvalidSavedForm = "The saved form you are attempting to retrieve is invalid or has already been submitted.";
  window.ffPrompt_SavedFormDiscarded = "Your saved form has been discarded.";
  window.ffPrompt_SFLChangesSaved = "Your changes have been saved! To retrieve your saved form at any time, simply click on the link provided to you by email.";
  window.ffPrompt_PaymentInProcessWarning = "Your payment is still being processed. Leaving the page now will cause your payment to not get processed. Are you sure you want to do this?";
  window.ffPaymentError_InvalidCountry = "Please provide a valid country name";
  this.FFSetValidationMessage = function FFSetValidationMessage(item, msg) {
    window[item] = msg
  };
  var setNA25Img = true;

  function ExecBeforeRender() {
    var result = true;
    try {
      result = FF_OnBeforeRender()
    } catch (err) {}
    return result
  }

  function ExecAfterRender() {
    try {
      FF_OnAfterRender()
    } catch (err) {}
  }

  function ExecBeforeSave() {
    var result = true;
    try {
      result = FF_OnBeforeSave()
    } catch (err) {}
    return result
  }

  function ExecAfterSave() {
    try {
      FF_OnAfterSave()
    } catch (err) {}
  }
  this.InitializeIframe = function InitializeIframe(h_pad) {
    try {
      if (document.getElementsByTagName("body").length == 2 && document.getElementsByTagName("body")[1].children.length <= 1) {
        try {
          document.getElementsByTagName("body")[1].remove()
        } catch (err) {
          console.log("iFrame body 2:" + err)
        }
      }
      if (typeof parent.FFSetIframeSize != "undefined") {
        h_pad = typeof h_pad !== "undefined" ? h_pad : 0;
        var body = document.body,
          html = document.documentElement;
        var h = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var w = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
        console.log("Height:" + h);
        parent.FFSetIframeSize(h + h_pad, w)
      }
    } catch (err) {
      console.log("iFrame :" + err)
    }
  };

  function _UniqueArrayFromCSV(csvStr) {
    var result = [];
    if (csvStr != "undefined") {
      var list = [];
      list = csvStr.split(",");
      $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) {
          result.push(e)
        }
      })
    }
    return result
  }

  function BindRuleEvents() {
    var ruleMap = $("#ruleFieldsMap").val();
    var submitRulesArr = [];
    if (ruleMap != "undefined" && ruleMap != "") {
      if ($("#ruleFieldsMap").val() != "") {
        try {
          var jsonObject = JSON.parse($("#ruleFieldsMap").val());
          for (var property in jsonObject) {
            var fieldId = property;
            var ruleNumbersArr = [];
            var ruleBindingInfoArr = _UniqueArrayFromCSV(jsonObject[property]);
            $.each(ruleBindingInfoArr, function(indx, item) {
              var ruleNumberInfo = item;
              if (item !== undefined && item.indexOf("||") > 0) {
                var ruleInfoObj = item.split("||");
                if (_SafeBoolean(ruleInfoObj[1], false)) {
                  submitRulesArr.push(ruleInfoObj[0])
                } else {
                  ruleNumbersArr.push(ruleInfoObj[0])
                }
              }
            });
            var methodToBind = "evaluateRules([" + ruleNumbersArr.toString() + "],this);";
            console.log(property + ": " + jsonObject[property]);
            fieldId = GetInitialFieldIdIfRepeated(fieldId, fieldId.replace(/\./g, "\\."));
            $("#" + fieldId).attr("onchange", methodToBind);
            if (ruleNumbersArr.length > 0) {
              $("#" + fieldId).attr("data-rules", ruleNumbersArr.toString())
            }
          }
          if (submitRulesArr != null && submitRulesArr.length > 0) {
            $("#submitRules").val(submitRulesArr.toString())
          }
        } catch (err) {}
      }
    }
  }

  function GetInitialFieldIdIfRepeated(fieldId, escapedFieldId) {
    if (fieldId != "undefined" && fieldId != "" && $("#dvFastForms").find("#" + escapedFieldId).length == 0 && fieldId.split(".").length == 4) {
      var fieldIdasArr = fieldId.split(".");
      if (fieldIdasArr.length === 4) {
        var tempId = fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_1_." + fieldIdasArr[3];
        tempId = tempId.replace(/\./g, "\\.");
        if ($("#dvFastForms").find("#" + tempId).length == 1 && $("#dvFastForms").find("#" + tempId).parents(".ff-item-row").parent().hasClass("ff-sec-repeat-wrapper")) {
          fieldId = fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_1_." + fieldIdasArr[3]
        }
      }
    }
    return fieldId.replace(/\./g, "\\.")
  }

  function isFieldIdRepeatable(fieldId) {
    if (fieldId != "undefined" && fieldId != "" && $("#dvFastForms").find("#" + fieldId.replace(/\./g, "\\.")).length == 0) {
      if (fieldId.split(".").length == 4) {
        var fieldIdasArr = fieldId.split(".");
        var tempId = fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_1_." + fieldIdasArr[3];
        tempId = tempId.replace(/\./g, "\\.");
        if ($("#dvFastForms").find("#" + tempId).length == 1 && $("#dvFastForms").find("#" + tempId).parents(".ff-item-row").parent().hasClass("ff-sec-repeat-wrapper")) {
          return true
        }
      } else {
        if (fieldId.indexOf(".") < 0) {
          return $("#dvFastForms").find("#" + fieldId + "__1").length == 1
        }
      }
    }
    return false
  }

  function CompareIfRepeatedFieldFromSameSection(fieldId1, fieldId2) {
    if (!isNullOrEmpty(fieldId1) && !isNullOrEmpty(fieldId2) && fieldId1.substring(0, fieldId1.lastIndexOf(".")) && fieldId2.substring(0, fieldId2.lastIndexOf("."))) {
      return true
    }
    return false
  }

  function repeatSafeFieldIdArr(fieldId, triggerSource) {
    var fieldIdArr = [];
    var escapedId = "";
    if (!isNullOrEmpty(fieldId)) {
      escapedId = fieldId.replace(/\./g, "\\.")
    }
    if (triggerSource !== undefined) {
      var parentRepeatedSectionElem = $(triggerSource).parents(".ff-sec-repeat-wrapper");
      if (parentRepeatedSectionElem.length > 0) {
        var repeatIndex = 0;
        if (isFieldIdRepeatable(fieldId)) {
          repeatIndex = $(parentRepeatedSectionElem).parent().find(".ff-sec-repeat-wrapper").index(parentRepeatedSectionElem) + 1;
          fieldId = getRepeatedFieldId(fieldId, repeatIndex);
          fieldIdArr.push(fieldId)
        } else {
          fieldIdArr.push(fieldId)
        }
      } else {
        if ($("#dvFastForms #" + escapedId).length == 0 || fieldId.indexOf(".") < 0) {
          var fieldArr = [];
          if (fieldId.split(".").length == 4) {
            var fieldIdasArr = fieldId.split(".");
            escapedId = fieldIdasArr[0] + "\\." + fieldIdasArr[1] + "\\." + fieldIdasArr[2] + "_";
            $("#dvFastForms .ff-item-row input[id^=" + escapedId + "],#dvFastForms .ff-item-row select[id^=" + escapedId + "],#dvFastForms .ff-item-row textarea[id^=" + escapedId + "]").filter(function() {
              return new RegExp(fieldIdasArr[3] + "$").test(this.id)
            }).each(function() {
              fieldArr.push($(this).attr("id"))
            })
          } else {
            $("#dvFastForms .ff-esignature-wrapper div[id^=elem" + fieldId + "],#dvFastForms .ff-item-row label[id^=" + fieldId + "],#dvFastForms .ff-item-row .ff-col-2 [id^=" + fieldId + "]").each(function() {
              var elemId = $(this).attr("id").replace("elem", "").replace("lbl", "");
              fieldArr.push(elemId)
            })
          }
          if (fieldArr instanceof Array && fieldArr.length > 0) {
            fieldIdArr = fieldArr
          }
        } else {
          if ($("#dvFastForms #" + escapedId).length == 1) {
            fieldIdArr.push(fieldId)
          }
        }
      }
    } else {
      if ($("#dvFastForms #" + escapedId).length > 0) {
        fieldIdArr.push(fieldId)
      } else {
        var tempId = getRepeatedFieldId(fieldId, 1);
        if ($("#dvFastForms #" + tempId.replace(/\./g, "\\.")).length == 1) {
          fieldIdArr = repeatSafeFieldIdArr(fieldId, $("#dvFastForms #" + tempId.replace(/\./g, "\\.")))
        }
      }
    }
    return fieldIdArr
  }

  function getRepeatedFieldId(fieldId, repeatIndex) {
    if (fieldId != "undefined" && fieldId != "" && repeatIndex > 0) {
      if (fieldId.split(".").length == 4) {
        var fieldIdasArr = fieldId.split(".");
        var tempId = fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_" + repeatIndex + "_." + fieldIdasArr[3];
        tempId = tempId.replace(/\./g, "\\.");
        if ($("#dvFastForms").find("#" + tempId).length == 1) {
          return fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_" + repeatIndex + "_." + fieldIdasArr[3]
        }
      } else {
        if (fieldId.indexOf(".") < 0) {
          return fieldId + "__" + repeatIndex
        }
      }
    }
    return fieldId
  }

  function getRepeatedFieldElem(fieldId, repeatIndex) {
    if (fieldId != "undefined" && fieldId != "" && fieldId.split(".").length == 4 && repeatIndex > 0) {
      var fieldIdasArr = fieldId.split(".");
      var tempId = fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_" + repeatIndex + "_." + fieldIdasArr[3];
      tempId = tempId.replace(/\./g, "\\.");
      if ($("#dvFastForms").find("#" + tempId).length == 1) {
        fieldId = fieldIdasArr[0] + "." + fieldIdasArr[1] + "." + fieldIdasArr[2] + "_" + repeatIndex + "_." + fieldIdasArr[3]
      }
    }
    fieldId = fieldId.replace(/\./g, "\\.");
    return $("#dvFastForms").find("#" + fieldId)
  }
  this.FFEvaluateRules = function FFEvaluateRules() {
    if (typeof parent.evaluateRules != "undefined") {
      $("#dvFastForms .ff-item-row input[data-rules],#dvFastForms .ff-item-row select[data-rules],#dvFastForms .ff-item-row textarea[data-rules]").each(function(indx, elem) {
        var rules = $(elem).attr("data-rules");
        var ruleArr = rules.split(",").map(function(item) {
          return parseInt(item, 10)
        });
        parent.evaluateRules(ruleArr, elem)
      })
    }
  };
  this.FFCompare = function FFCompare(fieldId1, fieldId2, isFieldId, operator, triggerSource) {
    if (triggerSource !== undefined) {
      var repeatIndex = 0;
      var parentRepeatedSectionElem = $(triggerSource).parents(".ff-sec-repeat-wrapper");
      if (parentRepeatedSectionElem !== undefined) {
        if (isFieldIdRepeatable(fieldId1)) {
          repeatIndex = $(parentRepeatedSectionElem).parent().find(".ff-sec-repeat-wrapper").index(parentRepeatedSectionElem) + 1;
          fieldId1 = getRepeatedFieldId(fieldId1, repeatIndex)
        }
        if (isFieldId && CompareIfRepeatedFieldFromSameSection(fieldId1, fieldId2) && isFieldIdRepeatable(fieldId2)) {
          fieldId2 = getRepeatedFieldId(fieldId2, repeatIndex)
        }
        return localFFCompare(fieldId1, fieldId2, isFieldId, operator)
      } else {
        return localFFCompare(fieldId1, fieldId2, isFieldId, operator)
      }
    } else {
      return localFFCompare(fieldId1, fieldId2, isFieldId, operator)
    }
    return false
  };
  this.FFEqualTo = function FFEqualTo(fieldId1, fieldId2, isFieldId, triggerSource) {
    return FFCompare(fieldId1, fieldId2, isFieldId, "E", triggerSource)
  };
  this.FFLessThan = function FFLessThan(fieldId1, fieldId2, isFieldId, triggerSource) {
    return FFCompare(fieldId1, fieldId2, isFieldId, "LT", triggerSource)
  };
  this.FFLessThanOrEqualTo = function FFLessThanOrEqualTo(fieldId1, fieldId2, isFieldId, triggerSource) {
    return FFCompare(fieldId1, fieldId2, isFieldId, "LTE", triggerSource)
  };
  this.FFGreaterThan = function FFGreaterThan(fieldId1, fieldId2, isFieldId, triggerSource) {
    return FFCompare(fieldId1, fieldId2, isFieldId, "GT", triggerSource)
  };
  this.FFGreaterThanOrEqualTo = function FFGreaterThanOrEqualTo(fieldId1, fieldId2, isFieldId, triggerSource) {
    return FFCompare(fieldId1, fieldId2, isFieldId, "GTE", triggerSource)
  };
  this.FFStartsWith = function FFStartsWith(field1, field2, isFieldId, triggerSource) {
    if (triggerSource !== undefined) {
      var repeatIndex = 0;
      var parentRepeatedSectionElem = $(triggerSource).parents(".ff-sec-repeat-wrapper");
      if (parentRepeatedSectionElem !== undefined) {
        if (isFieldIdRepeatable(field1)) {
          repeatIndex = $(parentRepeatedSectionElem).parent().find(".ff-sec-repeat-wrapper").index(parentRepeatedSectionElem) + 1;
          field1 = getRepeatedFieldId(field1, repeatIndex)
        }
        if (isFieldId && CompareIfRepeatedFieldFromSameSection(field1, field2) && isFieldIdRepeatable(field2)) {
          field2 = getRepeatedFieldId(field2, repeatIndex)
        }
        return localFFStartsWith(field1, field2, isFieldId)
      } else {
        return localFFStartsWith(field1, field2, isFieldId)
      }
    } else {
      return localFFStartsWith(field1, field2, isFieldId)
    }
    return false
  };
  this.FFEndsWith = function FFEndsWith(field1, field2, isFieldId, triggerSource) {
    if (triggerSource !== undefined) {
      var repeatIndex = 0;
      var parentRepeatedSectionElem = $(triggerSource).parents(".ff-sec-repeat-wrapper");
      if (parentRepeatedSectionElem !== undefined) {
        if (isFieldIdRepeatable(field1)) {
          repeatIndex = $(parentRepeatedSectionElem).parent().find(".ff-sec-repeat-wrapper").index(parentRepeatedSectionElem) + 1;
          field1 = getRepeatedFieldId(field1, repeatIndex)
        }
        if (isFieldId && CompareIfRepeatedFieldFromSameSection(field1, field2) && isFieldIdRepeatable(field2)) {
          field2 = getRepeatedFieldId(field2, repeatIndex)
        }
        return localFFEndsWith(field1, field2, isFieldId)
      } else {
        return localFFEndsWith(field1, field2, isFieldId)
      }
    } else {
      return localFFEndsWith(field1, field2, isFieldId)
    }
    return false
  };
  this.FFContains = function FFContains(field1, field2, isFieldId, triggerSource) {
    if (triggerSource !== undefined) {
      var repeatIndex = 0;
      var parentRepeatedSectionElem = $(triggerSource).parents(".ff-sec-repeat-wrapper");
      if (parentRepeatedSectionElem !== undefined) {
        if (isFieldIdRepeatable(field1)) {
          repeatIndex = $(parentRepeatedSectionElem).parent().find(".ff-sec-repeat-wrapper").index(parentRepeatedSectionElem) + 1;
          field1 = getRepeatedFieldId(field1, repeatIndex)
        }
        if (isFieldId && CompareIfRepeatedFieldFromSameSection(field1, field2) && isFieldIdRepeatable(field2)) {
          field2 = getRepeatedFieldId(field2, repeatIndex)
        }
        return localFFContains(field1, field2, isFieldId)
      } else {
        return localFFContains(field1, field2, isFieldId)
      }
    } else {
      return localFFContains(field1, field2, isFieldId)
    }
    return false
  };

  function localFFSetPicklistValues(fieldId, str, isFieldId) {
    ResetValidation([fieldId]);
    var elem1 = $("#dvFastForms #" + fieldId.replace(/\./g, "\\."));
    var selectedVals = [];
    $(elem1).find(":selected").each(function() {
      selectedVals.push($(this).val())
    });
    if (selectedVals.length > 0) {
      $(elem1).empty().append("<option value></option>")
    } else {
      $(elem1).empty().append('<option selected="selected" value></option>')
    }
    $.each(str.split("|||"), function(i, e) {
      $(elem1).append('<option value="' + e + '">' + e + "</option>")
    });
    for (i = 0; i < selectedVals.length; i++) {
      $(elem1).find('option[value="' + selectedVals[i] + '"]').attr("selected", "selected")
    }
    initFlexControl(elem1, false)
  }

  function localFFMakeReadOnly(fieldId) {
    ResetValidation([fieldId]);
    if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "PICKLIST" || $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "MULTIPICKLIST") {
      $("#dvFastForms #" + fieldId.replace(/\./g, "\\.") + " option:not(:selected)").hide();
      $("#dvFastForms #" + fieldId.replace(/\./g, "\\.") + " option:selected").attr("disabled", "disabled")
    } else {
      if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "REFERENCE") {
        $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).prop("readonly", true);
        $("#dvFastForms #alink" + fieldId.replace(/\./g, "\\.")).removeAttr("onclick")
      } else {
        if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "BOOLEAN") {
          var onclick = $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("onclick");
          if (onclick != undefined) {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("onclick", "return false;" + onclick)
          } else {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("onclick", "return false;")
          }
        } else {
          if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "DATE" || $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "DATETIME") {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).datetimepicker("disable")
          } else {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).prop("readonly", true)
          }
        }
      }
    }
    initFlexControl($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")), true)
  }

  function localFFMakeEditable(fieldId) {
    ResetValidation([fieldId]);
    if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "PICKLIST" || $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "MULTIPICKLIST") {
      $("#dvFastForms #" + fieldId.replace(/\./g, "\\.") + " option:not(:selected)").show();
      $("#dvFastForms #" + fieldId.replace(/\./g, "\\.") + " option:selected").removeAttr("disabled")
    } else {
      if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "REFERENCE") {
        $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).prop("readonly", false);
        $("#dvFastForms #alink" + fieldId.replace(/\./g, "\\.")).attr("onclick", "openLookupPopup(this);")
      } else {
        if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "BOOLEAN") {
          var onclick = $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("onclick");
          if (onclick != undefined) {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("onclick", onclick.replace("return false;", ""))
          } else {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("onclick", "")
          }
        } else {
          if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "DATE" || $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "DATETIME") {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).datetimepicker("enable")
          } else {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).prop("readonly", false)
          }
        }
      }
    }
    initFlexControl($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")), false)
  }

  function localFFMakeRequired(fieldId) {
    ResetValidation([fieldId]);
    if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).data("isrequired") != true) {
      if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "REFERENCE") {
        $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).data("isrequired", true)
      } else {
        $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).data("isrequired", true)
      }
      var lblElem = $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).parent().parent().find(".ff-label-col");
      $(lblElem).append('<span class="ff-required-mark">*</span>');
      initFlexControl($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")), false)
    }
  }

  function localFFMakeNotRequired(fieldId) {
    ResetValidation([fieldId]);
    if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).data("isrequired") != false) {
      if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "REFERENCE") {
        $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).data("isrequired", false)
      } else {
        $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).data("isrequired", false)
      }
      var reqMark = $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).parent().parent().find(".ff-required-mark");
      $(reqMark).remove();
      initFlexControl($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")), false)
    }
  }

  function localFFHideField(fieldId) {
    if ($("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).hasClass("ff-payment-wrapper")) {
      $("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).hide();
      ResetValidation(["lbl" + fieldId])
    } else {
      if ($("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).length && $("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).hasClass("ff-general-text-label")) {
        $("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).parent().hide();
        ResetValidation(["lbl" + fieldId])
      } else {
        if ($("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).length && $("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).parent().hasClass("ff-esignature-wrapper")) {
          $("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).parent().hide();
          clearSignatures($("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).parent());
          ResetValidation(["elem" + fieldId])
        } else {
          if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).hasClass("ff-fileupload-drop-area")) {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).parent().parent().hide();
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).find("a").click();
            ResetValidation([fieldId])
          } else {
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).parent().parent().hide();
            $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val("");
            ResetValidation([fieldId]);
            if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).data("lookup-value-type") == "list") {
              $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).val("");
              $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).attr("value", "")
            }
          }
        }
      }
    }
    InitializeIframe()
  }

  function localFFShowField(fieldId) {
    if ($("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).hasClass("ff-payment-wrapper")) {
      $("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).show();
      ResetValidation(["#dvFastForms #lbl" + fieldId])
    } else {
      if ($("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).length && $("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).hasClass("ff-general-text-label")) {
        $("#dvFastForms #lbl" + fieldId.replace(/\./g, "\\.")).parent().show();
        ResetValidation(["#dvFastForms #lbl" + fieldId])
      } else {
        if ($("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).length && $("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).parent().hasClass("ff-esignature-wrapper")) {
          $("#dvFastForms #elem" + fieldId.replace(/\./g, "\\.")).parent().show()
        } else {
          $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).parent().parent().show();
          ResetValidation([fieldId])
        }
      }
    }
    InitializeIframe()
  }

  function localFFStartsWith(fieldId, str, isFieldId) {
    return ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val().indexOf(str) == 0)
  }

  function localFFEndsWith(fieldId, str, isFieldId) {
    var d = $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val().length - str.length;
    return (d >= 0 && $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val().lastIndexOf(str) === d)
  }

  function localFFContains(fieldId, str, isFieldId) {
    try {
      return ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val().indexOf(str) >= 0)
    } catch (err) {
      return false
    }
  }

  function localFFPopulateLookup(fieldId, str, name, isFieldId) {
    var valElem1 = $("#dvFastForms #" + fieldId.replace(/\./g, "\\."));
    var val = str;
    if (isFieldId == true) {
      val = $("#dvFastForms #" + str.replace(/\./g, "\\.")).val() + "";
      name = $("#dvFastForms #input" + str.replace(/\./g, "\\.")).val() + ""
    }
    $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val(val);
    $("#dvFastForms #input" + fieldId.replace(/\./g, "\\.")).val(name);
    initFlexControl(valElem1, false)
  }

  function localFFPopulate(fieldId, str, isFieldId) {
    ResetValidation([fieldId]);
    var elem1 = $("#dvFastForms #" + fieldId.replace(/\./g, "\\."));
    var val = str;
    if (isFieldId == true) {
      if ($("#dvFastForms #" + str.replace(/\./g, "\\.")).attr("vatt") == "BOOLEAN") {
        val = $("#dvFastForms #" + str.replace(/\./g, "\\.")).prop("checked") + ""
      } else {
        val = $("#dvFastForms #" + str.replace(/\./g, "\\.")).val() + ""
      }
    } else {
      val = EvaluateCustomFormula(str)
    }
    if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "BOOLEAN") {
      if (val == "true") {
        $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).prop("checked", val)
      } else {
        $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).removeProp("checked")
      }
    } else {
      if ($("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).attr("vatt") == "MULTIPICKLIST") {
        $("#dvFastForms #" + fieldId.replace(/\./g, "\\.") + " option:selected").removeAttr("selected");
        $.each(val.split(","), function(i, e) {
          $("#dvFastForms #" + fieldId.replace(/\./g, "\\.") + " option[value='" + e + "']").prop("selected", true)
        })
      } else {
        val = val.replace("&#xA;", "\n");
        $("#dvFastForms #" + fieldId.replace(/\./g, "\\.")).val(val)
      }
    }
    initFlexControl(elem1, false)
  }

  function localFFCompare(fieldId1, fieldId2, isFieldId, operator) {
    var val1 = "";
    var val2 = "";
    var field1 = $("#dvFastForms #" + fieldId1.replace(/\./g, "\\."));
    if (isFieldId) {
      var field2 = $("#dvFastForms #" + fieldId2.replace(/\./g, "\\."));
      if ($(field1).attr("vatt") == "DATE" || $(field2).attr("vatt") == "DATE" || $(field1).attr("vatt") == "DATETIME" || $(field2).attr("vatt") == "DATETIME") {
        val1 = new Date($(field1).val());
        val2 = new Date($(field2).val())
      } else {
        if ($(field1).attr("vatt") == "BOOLEAN" && $(field2).attr("vatt") == "BOOLEAN") {
          val1 = $(field1).is(":checked");
          val2 = $(field2).is(":checked")
        } else {
          if ($(field1).attr("vatt") == "BOOLEAN" && $(field2).attr("vatt") != "BOOLEAN") {
            val1 = $(field1).is(":checked");
            val2 = ($(field2).val() === "true")
          } else {
            val1 = $(field1).val();
            val2 = $(field2).val()
          }
        }
      }
    } else {
      if ($(field1).attr("vatt") == "DATE" || $(field1).attr("vatt") == "DATETIME") {
        val1 = new Date($(field1).val());
        val2 = new Date(fieldId2)
      } else {
        if ($(field1).attr("vatt") == "BOOLEAN") {
          val1 = $(field1).is(":checked");
          val2 = (fieldId2 === "true")
        } else {
          val1 = ($(field1).val() == null ? "" : $(field1).val());
          val2 = (fieldId2 == null ? "" : fieldId2)
        }
      }
    }
    if ($.isNumeric(val1)) {
      val1 = parseInt(val1)
    }
    if ($.isNumeric(val2)) {
      val2 = parseInt(val2)
    }
    switch (operator) {
      case "GT":
        return (val1 > val2);
        break;
      case "GTE":
        return (val1 >= val2);
        break;
      case "LT":
        return (val1 < val2);
        break;
      case "LTE":
        return (val1 <= val2);
        break;
      case "E":
        if ($(field1).attr("vatt") == "DATE" || $(field1).attr("vatt") == "DATETIME") {
          return (val1.getTime() == val2.getTime())
        } else {
          console.log("Comparing " + val1 + " and " + val2);
          console.log("Result: " + (val1 == val2));
          return (val1 == val2)
        }
        break
    }
  }
  this.FFHideField = function FFHideField(fieldId, triggerSource) {
    var fieldIdArr = repeatSafeFieldIdArr(fieldId, triggerSource);
    $.each(fieldIdArr, function(indx, id) {
      localFFHideField(id)
    })
  };
  this.FFShowField = function FFShowField(fieldId, triggerSource) {
    var fieldIdArr = repeatSafeFieldIdArr(fieldId, triggerSource);
    $.each(fieldIdArr, function(indx, id) {
      localFFShowField(id)
    })
  };
  this.FFMakeReadOnly = function FFMakeReadOnly(fieldId, triggerSource) {
    var fieldIdArr = repeatSafeFieldIdArr(fieldId, triggerSource);
    $.each(fieldIdArr, function(indx, id) {
      localFFMakeReadOnly(id)
    })
  };
  this.FFMakeEditable = function FFMakeEditable(fieldId, triggerSource) {
    var fieldIdArr = repeatSafeFieldIdArr(fieldId, triggerSource);
    $.each(fieldIdArr, function(indx, id) {
      localFFMakeEditable(id)
    })
  };
  this.FFMakeRequired = function FFMakeRequired(fieldId, triggerSource) {
    var fieldIdArr = repeatSafeFieldIdArr(fieldId, triggerSource);
    $.each(fieldIdArr, function(indx, id) {
      localFFMakeRequired(id)
    })
  };
  this.FFMakeNotRequired = function FFMakeNotRequired(fieldId, triggerSource) {
    var fieldIdArr = repeatSafeFieldIdArr(fieldId, triggerSource);
    $.each(fieldIdArr, function(indx, id) {
      localFFMakeNotRequired(id)
    })
  };
  this.FFHideSection = function FFHideSection(sectionId) {
    $("#dvFastForms #" + sectionId.replace(/\./g, "\\.")).hide();
    InitializeIframe()
  };
  this.FFShowSection = function FFShowSection(pageId) {
    $("#dvFastForms #" + pageId.replace(/\./g, "\\.")).show();
    InitializeIframe()
  };
  this.FFShowPage = function FFShowPage(pageId) {
    if (isNullOrEmpty($("#dvFastForms #txtUserContentId").val())) {
      $("#dvFastForms #" + pageId).attr("page-ishidden", false);
      $('#dvFastForms .ff-page-bread-item[data-pageid="' + pageId + '"]').show();
      $("#dvFastForms .ff-page-bread-header").remove();
      InitializeBreadcrumbs();
      SetPageButtons();
      SetBreadcrumbWidth(true)
    }
  };
  this.FFHidePage = function FFHidePage(pageId) {
    if (isNullOrEmpty($("#dvFastForms #txtUserContentId").val())) {
      $("#dvFastForms #" + pageId).attr("page-ishidden", true);
      $('#dvFastForms .ff-page-bread-item[data-pageid="' + pageId + '"]').hide();
      $("#dvFastForms .ff-page-bread-header").remove();
      InitializeBreadcrumbs();
      SetPageButtons();
      SetBreadcrumbWidth(true)
    }
  };
  this.EvaluateCustomFormula = function EvaluateCustomFormula(str) {
    var val = str;
    try {
      if (str.indexOf("[[") >= 0 && str.indexOf("]]") >= 0) {
        var arrItems = str.split("[[");
        for (var i = 0; i < arrItems.length; i++) {
          if (arrItems[i].length > 0 && arrItems[i].indexOf("]]") > -1) {
            var itm = arrItems[i].substring(0, arrItems[i].indexOf("]]"));
            var re = new RegExp("\\[\\[" + itm + "\\]\\]", "g");
            str = str.replace(re, $("#dvFastForms #" + itm.replace(/\./g, "\\.")).val())
          }
        }
        val = str
      }
      if (str.indexOf("{{") >= 0 && str.indexOf("}}") >= 0) {
        var arrItems = str.split("{{");
        for (var i = 0; i < arrItems.length; i++) {
          if (arrItems[i].length > 0 && arrItems[i].indexOf("}}") > -1) {
            var itm = arrItems[i].substring(0, arrItems[i].indexOf("}}"));
            var reStr = itm.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var re = new RegExp("{{" + reStr + "}}", "g");
            str = str.replace(re, eval(itm))
          }
        }
        val = str
      }
    } catch (e) {}
    return val
  };
  this.FFToday = function FFToday() {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = (1 + dt.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = dt.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year
  };
  this.TDAY = function TDAY() {
    return FFToday()
  };
  this.FFPopulate = function FFPopulate(field1, field2, isFieldId, triggerSource) {
    var field1Arr = repeatSafeFieldIdArr(field1, triggerSource);
    if (isFieldId) {
      var field2Arr = repeatSafeFieldIdArr(field2, triggerSource);
      if (field1Arr.length === field2Arr.length) {
        $.each(field1Arr, function(indx, item) {
          localFFPopulate(field1Arr[indx], field2Arr[indx], isFieldId)
        })
      }
    } else {
      $.each(field1Arr, function(indx, item) {
        localFFPopulate(item, field2, isFieldId)
      })
    }
  };
  this.FFPopulateLookup = function FFPopulateLookup(field1, field2, name, isFieldId, triggerSource) {
    var field1Arr = repeatSafeFieldIdArr(field1, triggerSource);
    if (isFieldId) {
      var field2Arr = repeatSafeFieldIdArr(field2, triggerSource);
      if (field1Arr.length === field2Arr.length) {
        $.each(field1Arr, function(indx, item) {
          localFFPopulateLookup(field1Arr[indx], field2Arr[indx], name, isFieldId)
        })
      }
    } else {
      $.each(field1Arr, function(indx, item) {
        localFFPopulateLookup(item, field2, name, isFieldId)
      })
    }
  };
  this.FFSetPicklistValues = function FFSetPicklistValues(field1, field2, isFieldId, triggerSource) {
    var field1Arr = repeatSafeFieldIdArr(field1, triggerSource);
    if (isFieldId) {
      var field2Arr = repeatSafeFieldIdArr(field2, triggerSource);
      if (field1Arr.length === field2Arr.length) {
        $.each(field1Arr, function(indx, item) {
          localFFSetPicklistValues(field1Arr[indx], field2Arr[indx], isFieldId)
        })
      }
    } else {
      $.each(field1Arr, function(indx, item) {
        localFFSetPicklistValues(item, field2, isFieldId)
      })
    }
  };
  this.FFShowGeneralError = function FFShowGeneralError(msg) {
    ResetValidation();
    formValid = true;
    ValidateFields(true);
    hasGeneralError = true;
    ShowValidationMessage($("#dvFastForms #btnsubmit"), "GENERAL", msg);
    InitializeIframe()
  };
  this.FFIf = function FFIf(expr, valIfTrue, valIfFalse) {
    if (eval(expr)) {
      return valIfTrue
    } else {
      return valIfFalse
    }
  };

  function getAttributeNameIfExists(elemSource, attrName, defaultvalue) {
    var stringReturn = defaultvalue;
    if (!isNullOrEmpty($(elemSource).attr(attrName))) {
      stringReturn = $(elemSource).attr(attrName)
    }
    return stringReturn
  }
  this.InitializeSignature = function InitializeSignature() {
    $("#dvFastForms .ff-esignature-wrapper").each(function() {
      InitializeSignatureElement(this)
    });
    var i = 0;
    $('#dvFastForms input[name="ffdate"]').each(function() {
      $(this).attr("name", "ffdate" + i);
      i++
    });
    i = 0;
    $('#dvFastForms input[name="ffsignature"]').each(function() {
      $(this).attr("name", "ffsignature" + i);
      i++
    })
  };
  this.InitializeSignatureElement = function InitializeSignatureElement(signatureWrapElement) {
    var signType = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signtype", "full");
    var signOptions = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signoptions", "typed");
    var signLabel = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signlabel", "Full Name");
    var signDate = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signdate", "Date");
    var signDateHide = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signdatehide", "false");
    var signAgreeHide = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signagreehide", "true");
    var signAgree = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-signagree", "I agree to terms and services");
    var signEmailLabel = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-emaillabel", "Email");
    var signEmailEnabled = getAttributeNameIfExists($(signatureWrapElement).find(".ffd-esignature-input"), "data-emailenabled", "false");
    if (signEmailEnabled == true || signEmailEnabled == "true") {
      $(signatureWrapElement).find(".ff-email-verification > input").attr("data-isrequired", true);
      $(signatureWrapElement).find(".ff-email-verification").slideDown();
      $(signatureWrapElement).find(".ff-email-verification .ffsign-label").append('<span class="ff-required-mark">*</span>')
    } else {
      $(signatureWrapElement).find(".ff-email-verification").slideUp();
      $(signatureWrapElement).find(".ff-email-verification").hide();
      $(signatureWrapElement).find(".ff-email-verification > input").attr("data-isrequired", false)
    }
    var options = {
      name: ".ffsignature",
      penColour: "#000",
      drawOnly: false,
      lineWidth: 2,
      typed: ".typedSignName",
      output: ".outputSignedName",
      drawIt: ".ffdrawIt a",
      sig: "docsignWrapper",
      clear: ".ffclearButton a",
      canvas: ".signPadName",
      onBeforeValidate: "validateDocSign",
      errorMessage: (signType == "full" ? ffErr_SignatureFullNameTyped : ffErr_SignatureInitialsTyped),
      errorMessageDraw: (signType == "full" ? ffErr_SignatureFullNameDrawn : ffErr_SignatureInitialsDrawn),
      errorClass: "ff-col-1 ff-error ff-signature-error ff-invalid-msg",
      validateFields: false
    };
    var optionsDate = {
      name: ".ffdate",
      penColour: "#000",
      drawOnly: false,
      lineWidth: 2,
      typed: ".typedSignDate",
      output: ".outputSignedDate",
      drawIt: ".ffdrawIt a",
      sig: "docsignWrapper",
      clear: ".ffclearButton a",
      canvas: ".signPadDate",
      onBeforeValidate: "validateDocSign",
      errorMessage: ffErr_SignatureDateTyped,
      errorMessageDraw: ffErr_SignatureDateDrawn,
      errorClass: "ff-col-1 ff-error ff-signature-error ff-invalid-msg",
      validateFields: false
    };
    if (signType == "initials") {
      $(signatureWrapElement).find(".ff-signwrapper.ff-typed .doc-sign-name .ffsignature").attr("maxlength", 6);
      $(signatureWrapElement).find(".ff-signwrapper.ff-typed .doc-sign-name .docsignWrapper .signPadName").attr("width", "120");
      $(signatureWrapElement).find(".ff-signwrapper.ff-drawn .doc-sign-name .docsignWrapper .signPadName").attr("width", "120")
    } else {
      $(signatureWrapElement).find(".ff-signwrapper.ff-typed .doc-sign-name .ffsignature").removeAttr("maxlength");
      $(signatureWrapElement).find(".ff-signwrapper.ff-typed .doc-sign-name .docsignWrapper .signPadName").attr("width", "232");
      $(signatureWrapElement).find(".ff-signwrapper.ff-drawn .doc-sign-name .docsignWrapper .signPadName").attr("width", "232")
    }
    var signInstance = $(signatureWrapElement).find(".ff-signwrapper.ff-typed .doc-sign-name").signaturePad(options);
    var signInstanceDate = $(signatureWrapElement).find(".ff-signwrapper.ff-typed .doc-sign-date").signaturePad(optionsDate);
    options.drawOnly = true;
    var signInstance = $(signatureWrapElement).find(".ff-signwrapper.ff-drawn .doc-sign-name").signaturePad(options);
    optionsDate.drawOnly = true;
    var signInstanceDate = $(signatureWrapElement).find(".ff-signwrapper.ff-drawn .doc-sign-date").signaturePad(optionsDate);
    $(signatureWrapElement).find(".ff-chkagree > label").html(signAgree);
    $(signatureWrapElement).find(".ff-signwrapper").each(function(ind, signElement) {
      $(signElement).find(".doc-sign-name .ffsign-label>label").html(signLabel);
      $(signElement).find(".doc-sign-date .ffsign-label>label").html(signDate);
      if (signDateHide == true || signDateHide == "true") {
        $(signElement).find('.doc-sign-date input[type="hidden"]').attr("data-required", false);
        $(signElement).find(".doc-sign-date").hide()
      } else {
        $(signElement).find('.doc-sign-date input[type="hidden"]').attr("data-required", true);
        $(signElement).find(".doc-sign-date").show()
      }
    });
    $(signatureWrapElement).find(".main-docsign-wrapper").removeClass("ffs-typed");
    $(signatureWrapElement).find(".main-docsign-wrapper").removeClass("ffs-both");
    $(signatureWrapElement).find(".main-docsign-wrapper").removeClass("ffs-drawn");
    $(signatureWrapElement).find(".main-docsign-wrapper").addClass("ffs-" + signOptions);
    $(signatureWrapElement).find(".main-docsign-wrapper").removeClass("ffs-full");
    $(signatureWrapElement).find(".main-docsign-wrapper").removeClass("ffs-initials");
    $(signatureWrapElement).find(".main-docsign-wrapper").addClass("ffs-" + signType);
    if (signOptions == "drawn") {
      switchSignTab($(signatureWrapElement).find(".main-docsign-wrapper").find("li.ffdrawIt>a"))
    } else {
      switchSignTab($(signatureWrapElement).find(".main-docsign-wrapper").find("li.fftypeIt>a"))
    }
    if (signAgreeHide == true || signAgreeHide == "true") {
      $(signatureWrapElement).find(".ff-chkagree > input").attr("data-required", false);
      $(signatureWrapElement).find(".ff-chkagree").hide()
    } else {
      $(signatureWrapElement).find(".ff-chkagree").show();
      $(signatureWrapElement).find(".ff-chkagree > input").attr("data-required", true)
    }
    ReRenderCalendar($(signatureWrapElement).find(".main-docsign-wrapper .ffdate"))
  };

  function isNullOrEmpty(strvalue) {
    if (strvalue !== undefined && strvalue !== null && strvalue != "") {
      return false
    }
    return true
  }
  this.clearSignatures = function clearSignatures(elem) {
    var target = $("#dvFastForms .ff-esignature-wrapper");
    if (arguments.length > 0) {
      target = $(elem)
    }
    $(target).each(function() {
      $(this).find(".ff-signwrapper.ff-drawn .doc-sign-name").signaturePad().clearCanvas();
      $(this).find(".ff-signwrapper.ff-drawn .doc-sign-date").signaturePad().clearCanvas();
      $(this).find(".docsignWrapper .typedSignName").html("");
      $(this).find(".docsignWrapper .typedSignDate").html("");
      $(this).find(".docsignWrapper .ffsignature").val("");
      $(this).find(".docsignWrapper .ffdate").val("")
    })
  };
  this.clearDrawnElements = function clearDrawnElements(elemSource) {
    $(elemSource).parents(".main-docsign-wrapper").find(".ff-signwrapper.ff-drawn .doc-sign-name").signaturePad().clearCanvas();
    $(elemSource).parents(".main-docsign-wrapper").find(".ff-signwrapper.ff-drawn .doc-sign-date").signaturePad().clearCanvas()
  };
  this.switchSignTab = function switchSignTab(elemSource) {
    $(elemSource).parents(".main-docsign-wrapper").find(".ff-sign-ul li a").removeClass("current");
    $(elemSource).addClass("current");
    $(elemSource).parents(".main-docsign-wrapper").find(".ff-signwrapper").addClass("display-none");
    if ($(elemSource).attr("data-signed") == "drawn") {
      LogEvent("TOGGLED_SIGNATURE_TAB", "DRAWN");
      $(elemSource).parents(".main-docsign-wrapper").find(".ff-signwrapper.ff-drawn").removeClass("display-none");
      $(elemSource).parents(".main-docsign-wrapper").find(".ff-sign-div .ffclearButton").css("visibility", "visible")
    } else {
      LogEvent("TOGGLED_SIGNATURE_TAB", "TYPED");
      $(elemSource).parents(".main-docsign-wrapper").find(".ff-signwrapper.ff-typed").removeClass("display-none");
      $(elemSource).parents(".main-docsign-wrapper").find(".ff-sign-div .ffclearButton").css("visibility", "hidden")
    }
  };

  function ValidateForm() {
    if (isOlderBrowser()) {
      if ($("#dvFastForms .ff-captcha").size() > 0) {
        $("#ffOverlay").addClass("ff-overlay-image");
        $("#dvFastForms form#form1").attr("action", baseUrl + "EngineFrame/CheckCaptcha");
        $("#dvFastForms form#form1").trigger("submit")
      } else {
        ResetValidation();
        ValidateFields(true);
        if ($("#dvFastForms .ff-payment-wrapper").size() > 0 && $("#dvFastForms .ff-creditcard").filter(function() {
            return this.value.length > 0
          }).size() > 0) {
          $("#dvFastForms form#form1").attr("action", baseUrl + "EngineFrame/CheckPayment");
          $("#dvFastForms form#form1").trigger("submit")
        } else {
          if (formValid) {
            $("#ffOverlay").removeClass("ff-overlay-image");
            ResetSaveDraft();
            PostFormData()
          }
        }
      }
    } else {
      ResetValidation();
      ValidateFields(true);
      if (formValid) {
        SendCaptchaToServer()
      }
    }
  }
  this.ScrollToTop = function ScrollToTop() {
    var top = $("#dvFastForms .ff-form-main");
    $("body, html").animate({
      scrollTop: $(top).offset().top
    }, 700)
  };
  this.ScrollToFirstError = function ScrollToFirstError() {
    var firstErrElem = $("#dvFastForms .ff-input-type-invalid").eq(0);
    if ($("#dvFastForms #multipageEnabled").val().toLowerCase() == "true") {
      var currPageNum = $("#dvFastForms .ff-page-row[page-ishidden!=true]:visible:first").index(".ff-page-row[page-ishidden!=true]");
      var errorPageNum = $(firstErrElem).closest(".ff-page-row").index(".ff-page-row[page-ishidden!=true]");
      if (currPageNum != errorPageNum) {
        FFSetPage(errorPageNum, true)
      }
    }
    $("body, html").animate({
      scrollTop: $(firstErrElem).offset().top
    }, 700);
    $(firstErrElem).focus();
    $("#dvFastForms #btnsubmit").prop("disabled", false)
  };

  function ValidateFields(isSubmit) {
    ValidateFields_CheckingAutoPaymentFields();
    if ($("#dvFastForms #pageValType").val() == "page" && !isSubmit) {
      var fieldsToCheck = $("#dvFastForms .ff-page-row:visible:first").find("input, textarea, select");
      var uploadsToCheck = $("#dvFastForms .ff-page-row:visible:first").find(".ff-fileupload-drop-area:visible")
    } else {
      var fieldsToCheck = $("#dvFastForms input,#dvFastForms textarea,#dvFastForms select");
      var uploadsToCheck = $("#dvFastForms .ff-fileupload-drop-area")
    }
    $(fieldsToCheck).each(function() {
      var fieldType = $(this).attr("vatt");
      if (typeof fieldType != "undefined") {
        fieldType.split("(")[0].toUpperCase()
      }
      if ($(this).data("isrequired") == true && $(this).parent().parent().css("display") == "none") {
        VALog("[ValidateFields][" + $(this).attr("id") + "][Ignoring Validation because the field is hidden.]");
        return true
      }
      switch ($(this).prop("type")) {
        case "text":
        case "textarea":
          if ($(this).data("isrequired") == true && (fieldType == "REFERENCE")) {
            var refFieldId = $(this).attr("id").replace("input", "").replace(/\./g, "\\.");
            if ($("#" + refFieldId).val() == "") {
              formValid = false;
              ShowValidationMessage(this, "REQUIRED")
            }
          } else {
            if ($(this).data("isrequired") == true && ($(this).val() == "")) {
              formValid = false;
              ShowValidationMessage(this, "REQUIRED")
            } else {
              if ($(this).val().length > $(this).data("maxlength") && fieldType != "DATE" && fieldType != "DATETIME") {
                formValid = false;
                ShowValidationMessage(this, "LENGTH");
                IsValidFormat(this)
              } else {
                if (($(this).val() != "") && !IsValidFormat(this)) {
                  formValid = false
                }
              }
            }
          }
          break;
        case "select-one":
          if ($(this).data("isrequired") == true) {
            if ($(this).find(":selected").val() == "" || $(this).find(":selected").val() == null || !$(this).find(":selected").val()) {
              formValid = false;
              if ($(this).data("pp-name") == "FFExpiryMM" || $(this).data("pp-name") == "FFExpiryYYYY") {
                ShowValidationMessage($(this), "PAYMENTEXPIRYREQUIRED")
              } else {
                ShowValidationMessage(this, "REQUIRED")
              }
            }
          }
          break;
        case "select-multiple":
          if ($(this).data("isrequired") == true) {
            var selectedValues = "";
            $(this).find(":selected").each(function() {
              if ($(this).val() != "") {
                selectedValues += ";" + $(this).val()
              }
            });
            if (selectedValues.length == 0) {
              formValid = false;
              ShowValidationMessage(this, "REQUIRED")
            }
          }
          break;
        case "checkbox":
          if ($(this).data("isrequired") == true && (!$(this).is(":checked"))) {
            formValid = false;
            ShowValidationMessage(this, "REQUIRED")
          }
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "reset":
        default:
          break
      }
    });
    $(uploadsToCheck).each(function() {
      var numUploads = $(this).find("[id$='_Label']").length;
      if ($(this).data("isrequired") && $(this).parent().parent().css("display") == "none") {
        return true
      } else {
        if ($(this).data("isrequired") && numUploads == 0) {
          formValid = false;
          ShowValidationMessage(this, "REQUIRED")
        }
      }
    });
    var signaturesValid = ValidateSignatures();
    if (formValid && !signaturesValid) {
      formValid = false
    }
    if (!formValid) {
      ScrollToFirstError()
    }
    $("#txtSendSizeChange").click();
    InitializeIframe()
  }

  function ValidateFields_CheckingAutoPaymentFields() {
    jQuery("div[id*='lblFFPAYMENT']").each(function() {
      try {
        var vSetRequire = false;
        if (jQuery(this).find(".ff-creditcard").val() !== "" && jQuery(this).find(".ff-creditcard").val() != null) {
          vSetRequire = true
        } else {
          if (jQuery(this).find(".ff-cvv").val() !== "" && jQuery(this).find(".ff-cvv").val() != null) {
            vSetRequire = true
          } else {
            if (jQuery(this).find(".ff-mm").val() !== "" && jQuery(this).find(".ff-mm").val() != null) {
              vSetRequire = true
            } else {
              if (jQuery(this).find(".ff-yyyy").val() !== "" && jQuery(this).find(".ff-yyyy").val() != null) {
                vSetRequire = true
              }
            }
          }
        }
        if (vSetRequire == false && jQuery(this).find(".ff-creditcard").attr("data-isrequired") == "true" && jQuery(this).find(".ff-creditcard").attr("data-automatic-required") != "true") {
          vSetRequire = true
        }
        if (vSetRequire) {
          if (jQuery(this).find(".ff-creditcard").attr("data-isrequired") == "false") {
            jQuery(this).find(".ff-creditcard").attr("data-automatic-required", "true")
          }
          jQuery(this).find(".ff-creditcard").data("isrequired", true);
          jQuery(this).find(".ff-cvv").data("isrequired", true);
          jQuery(this).find(".ff-mm").data("isrequired", true);
          jQuery(this).find(".ff-yyyy").data("isrequired", true)
        } else {
          jQuery(this).find(".ff-creditcard").data("isrequired", false);
          jQuery(this).find(".ff-cvv").data("isrequired", false);
          jQuery(this).find(".ff-mm").data("isrequired", false);
          jQuery(this).find(".ff-yyyy").data("isrequired", false)
        }
      } catch (err) {
        console.log("Error unexpected! Method[ValidateFields_CheckingAutoPaymentFields] Ex[" + err.message + "]")
      }
    })
  }
  this.ValidateSignatures = function ValidateSignatures() {
    var signaturesValid = true;
    if ($("#dvFastForms #pageValType").val() == "page") {
      var signaturesToCheck = $("#dvFastForms .ff-page-row:visible:first").find(".ff-esignature-wrapper")
    } else {
      var signaturesToCheck = $("#dvFastForms .ff-esignature-wrapper")
    }
    var vIndex = 0;
    $(signaturesToCheck).each(function() {
      try {
        if ($(this).parent().parent().attr("page-ishidden") == "true") {
          return true
        }
        if ($(this).parent().css("display") == "none") {
          return true
        }
        if ($(this).css("display") == "none") {
          return true
        }
        var isNameValid = true;
        var isDateValid = true;
        var isEmailValid = true;
        var areTermsAgreedTo = true;
        var nameElement = $(this).find(".ff-signwrapper:not(.display-none) .doc-sign-name");
        var emailElement = $(this).find(".ff-email-verification");
        var dateElement = $(this).find(".ff-signwrapper:not(.display-none) .doc-sign-date");
        var termsElement = $(this).find(".ff-chkagree");
        var termsCheckbox = $(this).find(".ff-chkagree input");
        vIndex++;
        isNameValid = $(nameElement).signaturePad().validateForm();
        if ($(termsElement).css("display") != "none") {
          areTermsAgreedTo = $(termsCheckbox).is(":checked");
          if (!areTermsAgreedTo) {
            var id = "reqdv" + $(termsCheckbox).attr("id");
            $(termsCheckbox).addClass("ff-input-type-invalid");
            $(termsCheckbox).parent().append("<div class='ff-invalid-msg ff-col-1 ff-signature-error' id='" + id + "'>" + ffErr_SignatureAcceptTerms + "</div>")
          }
        }
        if ($(emailElement).css("display") != "none") {
          var emailField = $(emailElement).find(".ff-type-text");
          isEmailValid = IsValidEmail($(emailField).val()) || $(emailField).val() != "";
          if (!isEmailValid) {
            var id = "reqdv" + $(emailField).attr("id");
            $(emailField).addClass("ff-input-type-invalid");
            $(emailField).parent().after("<div class='ff-invalid-msg ff-col-1 ff-signature-error' id='" + id + "'>" + ffErr_SignatureValidEmail + "</div>")
          }
        }
        if ($(dateElement).css("display") != "none") {
          isDateValid = $(dateElement).signaturePad().validateForm()
        }
        VALog("ValidateSignatures - Checking [" + vIndex + "] isNameValid[" + isNameValid + "]isDateValid[" + isDateValid + "]areTermsAgreedTo[" + areTermsAgreedTo + "]isEmailValid[" + isEmailValid + "] ");
        if (!isNameValid || !isDateValid || !areTermsAgreedTo || !isEmailValid) {
          signaturesValid = false
        }
      } catch (e) {
        console.log("Error unexpected! Method[ValidateSignatures] Ex[" + e.message + "]");
        signaturesValid = false
      }
    });
    return signaturesValid
  };
  this.ResetValidation = function ResetValidation(lstFields) {
    if (arguments.length > 0) {
      for (var i = 0; i < lstFields.length; i++) {
        ClearFieldValidation($("#dvFastForms #" + lstFields[i].replace(/\./g, "\\.")))
      }
    } else {
      $("#dvFastForms .ff-input-type-invalid").each(function() {
        ClearFieldValidation($(this))
      })
    }
    if ($(".ff-invalid-msg.general-payment-err").length > 0) {
      $(".ff-invalid-msg.general-payment-err").remove()
    }
    $("div[id^=reqdvbtnsubmit]").remove();
    $("#dvFastForms #btnsubmit").removeClass("ff-input-type-invalid")
  };

  function ClearFieldValidation(valItem) {
    if ($(valItem).attr("id") && $(valItem).attr("id").indexOf("FFExpiry") == 0) {
      var id = "reqdvFFExpiry";
      if ($("div[id^=" + id + "]").length > 0) {
        $("#" + id).remove()
      }
      if ($("#reqdv" + $(valItem).attr("id")).length > 0) {
        $("#reqdv" + $(valItem).attr("id")).remove()
      }
      $(valItem).toggleClass("ff-input-type-invalid")
    } else {
      if ($(valItem).attr("id") && $(valItem).attr("id").indexOf("elemESIGNATURE") == 0) {
        $(valItem).find(".ff-invalid-msg").remove();
        $(valItem).find(".ff-input-type-invalid").toggleClass("ff-input-type-invalid")
      } else {
        if ($(valItem).attr("id")) {
          var id = "reqdv" + $(valItem).attr("id").replace(/\./g, "\\.");
          if ($("div[id^=" + id + "]").length > 0 || $("p[id^=" + id + "]").length > 0) {
            $("#" + id).remove();
            $(valItem).toggleClass("ff-input-type-invalid")
          }
        }
      }
    }
  }
  this.ShowValidationMessage = function ShowValidationMessage(th, valType, appendMsg, showInPopup) {
    var nm = GetName($(th));
    var id = $(th).attr("id");
    var msg = "";
    var isPaymentExpiry = false;
    switch (valType) {
      case "DECIMALFORMAT":
        msg = ffErr_FormatValidDecimal;
        break;
      case "NUMERICFORMAT":
        msg = ffErr_FormatValidNumber;
        break;
      case "DECIMALSIZE":
        msg = ffErr_FormatDecimalSize;
        break;
      case "EMAILFORMAT":
        msg = ffErr_FormatValidEmail;
        break;
      case "PHONEFORMAT":
        msg = ffErr_FormatValidPhone;
        break;
      case "URLFORMAT":
        msg = ffErr_FormatValidUrl;
        break;
      case "FILESIZE":
        msg = ffErr_FileUploadSize;
        break;
      case "FILETYPE":
        msg = ffErr_FileUploadType + appendMsg;
        break;
      case "REQUIRED":
        msg = $(th).data("requiredmessage");
        if (msg == "" || !msg) {
          msg = "required"
        }
        break;
      case "PAYMENTEXPIRYREQUIRED":
        msg = $(th).data("requiredmessage");
        if (msg == "" || !msg) {
          msg = "required"
        }
        isPaymentExpiry = true;
        break;
      case "LENGTH":
        msg = $(th).data("maxlengthmessage");
        break;
      case "CAPTCHA":
        msg = ffErr_CaptchaIncorrect;
        break;
      case "GENERAL":
      case "PAYMENT":
        msg = appendMsg;
        break;
      default:
    }
    if (showInPopup) {
      ShowErrorPopup(msg)
    } else {
      if (isPaymentExpiry) {
        id = "reqdvFFExpiry";
        var yyElem = $(th).parent().find('[data-pp-name="FFExpiryYYYY"]');
        if ($("#" + id).length == 0) {
          $(yyElem).after("<div class='ff-invalid-msg' id='" + id + "'>" + msg + "</div>")
        }
        $(th).toggleClass("ff-input-type-invalid")
      } else {
        var newid = "reqdv" + id;
        var i = 0;
        while ($("#" + newid).length > 0) {
          newid = "reqdv" + id + i;
          i++
        }
        if (valType == "PAYMENT") {
          $(th).before("<div class='ff-invalid-msg general-payment-err' id='" + newid + "'>" + msg + "</div>")
        } else {
          $(th).parent().append("<div class='ff-invalid-msg' id='" + newid + "'>" + msg + "</div>");
          $(th).toggleClass("ff-input-type-invalid")
        }
      }
    }
  };

  function GetMaxValue(valLen) {
    var maxVal = "1";
    for (var i = 0; i < valLen; i++) {
      maxVal += "0"
    }
    return maxVal
  }

  function IsValidEmail(email) {
    var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(email)
  }

  function IsValidFormat(th) {
    var fieldType = $(th).attr("vatt");
    if (typeof fieldType != "undefined") {
      switch (fieldType.split("(")[0].toUpperCase()) {
        case "EMAIL":
          if (!IsValidEmail($(th).val())) {
            ShowValidationMessage(th, "EMAILFORMAT");
            return false
          } else {
            return true
          }
        case "INTEGER":
          var reCur = /^(\d+)$/;
          if (reCur.test($(th).val())) {
            return true
          } else {
            ShowValidationMessage(th, "NUMERICFORMAT");
            return false
          }
        case "CURRENCY":
        case "DOUBLE":
        case "PERCENT":
          var reCur = /^-?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
          if (reCur.test($(th).val())) {
            var precision = fieldType.split("(")[1].split(",")[0];
            var scale = fieldType.split("(")[1].split(",")[1].replace(")", "");
            var maxVal = GetMaxValue(precision);
            if (parseFloat($(th).val()) >= maxVal) {
              ShowValidationMessage(th, "DECIMALSIZE");
              return false
            } else {
              return true
            }
          } else {
            ShowValidationMessage(th, "DECIMALFORMAT");
            return false
          }
        case "PHONE":
          var re = /\+?[\d- )\(]{8,}/;
          var isValid = re.test($(th).val());
          if (!isValid) {
            ShowValidationMessage(th, "PHONEFORMAT");
            return false
          } else {
            return true
          }
        case "URL":
          var reUrl = /((http:\/\/)|(https:\/\/))?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/ig;
          if (reUrl.test($(th).val())) {
            return true
          } else {
            ShowValidationMessage(th, "URLFORMAT");
            return false
          }
        default:
          return true
      }
    } else {
      return true
    }
  }
  this.ResetFormData = function ResetFormData(clearAll) {
    $("#dvFastForms input,#dvFastForms textarea,#dvFastForms select").each(function() {
      var elementVisible = false;
      if ($(this).parent().parent().css("display") != "none") {
        elementVisible = true
      }
      switch ($(this).prop("type")) {
        case "file":
          if ((clearAll && elementVisible) || GetName($(this)) == $(this).val()) {
            $(this).val("")
          }
          break;
        case "text":
        case "textarea":
          RenderCalendar(this);
          if ((clearAll && elementVisible) || GetName($(this)) == $(this).val()) {
            $(this).val("")
          }
          initFlexControl(this, false);
          break;
        case "reset":
          $(this).click(function(event) {
            event.preventDefault();
            ResetFormData(true)
          });
          break;
        case "radio":
        case "checkbox":
          if ((clearAll && elementVisible)) {
            $(this).prop("checked", false)
          }
          break;
        case "select-one":
          if (clearAll && elementVisible) {
            $(this).prop("selectedIndex", -1)
          }
          initFlexControl(this, false);
          break;
        case "select-multiple":
          if (clearAll && elementVisible) {
            $(this).prop("selectedIndex", -1)
          }
          initFlexControl(this, false);
          break
      }
    });
    $("#dvFastForms div[name=FileUploadLabel]").remove();
    $("#dvFastForms .ff-type-file").each(function() {
      $(this).replaceWith($(this).clone(true))
    });
    if (clearAll) {
      clearSignatures();
      $("#dvFastForms #formHtml").val("");
      if (typeof evaluateRules == "function") {
        evaluateRules()
      }
    }
  };
  this.initFlexControl = function initFlexControl(elem, isReadOnly) {
    switch ($(elem).data("flexcontrol")) {
      case "picklist-combobox":
        try {
          $(elem).select2("destroy");
          if ($(elem).prop("disabled") == false) {
            $(elem).prop("disabled", isReadOnly)
          }
          $(elem).select2()
        } catch (err) {}
        break;
      case "picklist-radiobutton":
        break;
      case "picklist-radiobutton-vertical":
        $(elem).SelectToRadio("destroy");
        if ($(elem).attr("disabled") == "disabled" || isReadOnly) {
          $(elem).SelectToRadio({
            controlType: "ff-ext-radio",
            alignment: "vertical",
            readonly: true
          })
        } else {
          $(elem).SelectToRadio({
            controlType: "ff-ext-radio",
            alignment: "vertical"
          })
        }
        break;
      case "picklist-radiobutton-horizontal":
        $(elem).SelectToRadio("destroy");
        $(elem).removeClass("custom-select-offscreen");
        $(elem).prev().remove();
        if ($(elem).attr("disabled") == "disabled" || isReadOnly) {
          $(elem).SelectToRadio({
            controlType: "ff-ext-radio",
            alignment: "horizontal",
            readonly: true
          })
        } else {
          $(elem).SelectToRadio({
            controlType: "ff-ext-radio",
            alignment: "horizontal"
          })
        }
        break;
      case "multipicklist-multi-tags":
        try {
          $(elem).select2("destroy");
          if ($(elem).prop("disabled") == false) {
            $(elem).prop("disabled", isReadOnly)
          }
          $(elem).select2()
        } catch (err) {}
        break;
      case "multipicklist-multi-tags-check":
        try {
          $(elem).select2("destroy");
          if ($(elem).prop("disabled") == false) {
            $(elem).prop("disabled", isReadOnly)
          }
          $(elem).select2({
            closeOnSelect: false,
            dropdownCssClass: "ff-multi-checkbox"
          })
        } catch (err) {}
        break;
      case "multipicklist-checkbox-vertical":
        $(elem).SelectToRadio("destroy");
        $(elem).removeClass("custom-select-offscreen");
        $(elem).prev().remove();
        if ($(elem).attr("disabled") == "disabled" || isReadOnly) {
          $(elem).SelectToRadio({
            controlType: "ff-ext-checkbox",
            alignment: "vertical",
            readonly: true
          })
        } else {
          $(elem).SelectToRadio({
            controlType: "ff-ext-checkbox",
            alignment: "vertical"
          })
        }
        break;
      case "multipicklist-checkbox-horizontal":
        $(elem).SelectToRadio("destroy");
        $(elem).removeClass("custom-select-offscreen");
        $(elem).prev().remove();
        if ($(elem).attr("disabled") == "disabled" || isReadOnly) {
          $(elem).SelectToRadio({
            controlType: "ff-ext-checkbox",
            alignment: "horizontal",
            readonly: true
          })
        } else {
          $(elem).SelectToRadio({
            controlType: "ff-ext-checkbox",
            alignment: "horizontal"
          })
        }
        break;
      case "integer-starrating":
        var minRating = $(elem).attr("data-flex-min");
        var maxRating = $(elem).attr("data-flex-max");
        var minLabel = $(elem).attr("data-flex-minlabel");
        var maxLabel = $(elem).attr("data-flex-maxlabel");
        $(elem).ffrating("destroy");
        if ($(elem).val() != "" && $(elem).val() != undefined) {
          $(elem).val(Math.round($(elem).val()))
        }
        var readOnly = $(elem).attr("readonly");
        $(elem).attr("data-flex-min", minRating);
        $(elem).attr("data-flex-max", maxRating);
        $(elem).attr("data-flex-minlabel", minLabel);
        $(elem).attr("data-flex-maxlabel", maxLabel);
        if ($(elem).attr("onchange") == null) {
          $(elem).ffrating("show", {
            readonly: readOnly,
            showSelectedRating: true
          })
        } else {
          $(elem).ffrating("show", {
            readonly: readOnly,
            showSelectedRating: true,
            onSelect: function(value, text) {
              $(elem).trigger("change")
            }
          })
        }
        break;
      case "integer-npsrating":
        var minRating = $(elem).attr("data-flex-min");
        var midRating = $(elem).attr("data-flex-middle");
        var maxRating = $(elem).attr("data-flex-max");
        var minLabel = $(elem).attr("data-flex-minlabel");
        var midLabel = $(elem).attr("data-flex-middlelabel");
        var maxLabel = $(elem).attr("data-flex-maxlabel");
        $(elem).ffrating("destroy");
        if ($(elem).val() != "" && $(elem).val() != undefined) {
          $(elem).val(Math.round($(elem).val()))
        }
        var readOnly = $(elem).attr("readonly");
        $(elem).attr("data-flex-min", minRating);
        $(elem).attr("data-flex-middle", midRating);
        $(elem).attr("data-flex-max", maxRating);
        $(elem).attr("data-flex-minlabel", minLabel);
        $(elem).attr("data-flex-middlelabel", midLabel);
        $(elem).attr("data-flex-maxlabel", maxLabel);
        if ($(elem).attr("onchange") == null) {
          $(elem).ffrating("show", {
            readonly: readOnly,
            isStar: false
          })
        } else {
          $(elem).ffrating("show", {
            readonly: readOnly,
            isStar: false,
            onSelect: function(value, text) {
              $(elem).trigger("change")
            }
          })
        }
        break;
      default:
        break
    }
  };

  function CompleteFormSubmission(url, msg) {
    ExecAfterSave();
    ResetFormData($("#dvFastForms #txtObjId").val() == "");
    $("#dvFastForms #btnsubmit").prop("disabled", false);
    if (url) {
      RedirectToUrl(url)
    } else {
      if (msg) {
        ShowConfirmationPopup(msg)
      }
    }
  }
  this.openLookupPopup = function openLookupPopup(elem) {
    LogEvent("OPENED_LOOKUP", "");
    var embedCodeParamArray = getEmbedCodeParams();
    var formWidth = $("#dvFastForms .ff-form-main").css("max-width").replace("px", "");
    try {
      var target = $("#ffLookupDialog");
      if (inIframe()) {
        target = parent.$("#ffLookupDialog")
      }
      $(target).dialog({
        height: 575,
        width: formWidth,
        modal: true,
        id: "dvFastForms",
        dialogClass: "ff-form-main",
        buttons: {
          Done: {
            click: function() {
              $(this).dialog("close")
            },
            text: "Done",
            "class": "ff-btn-submit"
          }
        }
      });
      $(target).html($("<iframe/>", {
        src: baseUrl + "EngineFrame/DoLookup?lf=" + $(elem).attr("id").replace("alink", "") + "&htmlId=" + $("#dvFastForms #txtHtmlId").val() + "&hasCustomCSS=" + $("#dvFastForms #hasCustomCSS").val(),
        style: "width:100%; height:100%;border:none;",
        id: "ffLookupFrame"
      }));
      $(".ff-ui-dialog-titlebar").hide();
      $(".ff-ui-dialog").attr("id", "dvFastForms")
    } catch (ex) {}
    return false
  };
  this.closeLookupPopup = function closeLookupPopup() {
    $("#dvFastForms #ffLookupDialog").dialog("close");
    return false
  };

  function PostFormData() {
    var btnSubmit = $("#dvFastForms #btnsubmit");
    var url = $(btnSubmit).attr("btnurl");
    var msg = $(btnSubmit).attr("btnmessage");
    var isDraft = $("#dvFastForms #isDraft").val().toLowerCase() == "true";
    if (isDraft) {
      var saveUrl = baseUrl + "EngineFrame/SaveDraft"
    } else {
      var saveUrl = baseUrl + "EngineFrame/SaveContent"
    }($).support.cors = true;
    var formData;
    if (isNullOrEmpty($("#dvFastForms #txtUserContentId").val()) && !isDraft) {
      SetFormPDFHTML()
    }
    if (window.XDomainRequest) {
      formData = GenerateFormData(true);
      var xdr = new XDomainRequest();
      if (window.location.protocol == "http:" && saveUrl.lastIndexOf("https:", 0) === 0) {
        saveUrl = saveUrl.replace("https:", "http:")
      }
      xdr.open("post", saveUrl);
      xdr.onload = function() {
        if (!isDraft) {
          CompleteFormSubmission(url, msg)
        } else {
          if ($("#dvFastForms #draftSaved").val() == "True") {
            ShowConfirmationPopup(ffPrompt_SFLChangesSaved)
          }
          $("#dvFastForms #draftSaved").val("True");
          $("#dvFastForms #btndiscard").show()
        }
      };
      xdr.send(formData);
      $("#dvFastForms #btnsubmit").prop("disabled", false)
    } else {
      if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
        console.log("[PostFormData][IE11-SF][XMLHttpRequest]");
        formData = GenerateFormData(false);
        var oReq = null;
        if (Sarissa && Sarissa.originalXMLHttpRequest) {
          oReq = new Sarissa.originalXMLHttpRequest()
        } else {
          if (window.XMLHttpRequest) {
            oReq = new XMLHttpRequest()
          }
        }
        oReq.open("POST", saveUrl, true);
        oReq.onreadystatechange = function() {
          if (oReq.readyState == 4 && oReq.status == 200) {
            if (!isDraft) {
              CompleteFormSubmission(url, msg)
            } else {
              if ($("#dvFastForms #draftSaved").val() == "True") {
                ShowConfirmationPopup(ffPrompt_SFLChangesSaved)
              }
              $("#dvFastForms #draftSaved").val("True");
              $("#dvFastForms #btndiscard").show()
            }
          } else {
            if (oReq.readyState == 4 && oReq.status != 200) {
              console.log(" Service call exception" + oReq.responseText)
            }
          }
        };
        oReq.send(formData)
      } else {
        formData = GenerateFormData(false);
        $.ajax({
          global: false,
          type: "POST",
          crossDomain: true,
          url: saveUrl,
          data: formData,
          dataType: "text",
          processData: false,
          success: function(data) {
            if (!isDraft) {
              CompleteFormSubmission(url, msg)
            } else {
              if ($("#dvFastForms #draftSaved").val() == "True") {
                ShowConfirmationPopup(ffPrompt_SFLChangesSaved)
              }
              $("#dvFastForms #draftSaved").val("True");
              $("#dvFastForms #btndiscard").show()
            }
          },
          error: function(request, status, error) {
            if (!isDraft) {
              CompleteFormSubmission(url, msg)
            } else {
              if ($("#dvFastForms #draftSaved").val() == "True") {
                ShowConfirmationPopup(ffPrompt_SFLChangesSaved)
              }
              $("#dvFastForms #draftSaved").val("True");
              $("#dvFastForms #btndiscard").show()
            }
          }
        })
      }
    }
  }

  function SetFormPDFHTML() {
    if ($(".ff-form").length > 0) {
      var newDiv = $("<div/>").html($(".ff-form").html())
    } else {
      var newDiv = $("<div/>").html($("#dvFastForms").html())
    }
    $(newDiv).find("#jsFastForms").remove();
    $(newDiv).find("#ffOverlay").remove();
    $(newDiv).find(".ff-esignature-wrapper .ffsignature").remove();
    $(newDiv).find(".ff-esignature-wrapper .ffdate").remove();
    $(newDiv).find(".ff-esignature-wrapper .ff-sign-div").remove();
    $(newDiv).find(".ff-esignature-wrapper .typedSignName").addClass("typedSignNamePrintable");
    $(newDiv).find(".ff-esignature-wrapper .typedSignDate").addClass("typedSignDatePrintable");
    $(newDiv).find(".ff-payment-wrapper").each(function() {
      var cardElem = $(this).find(".ff-creditcard");
      var cvvElem = $(this).find(".ff-cvv");
      var cardNum = $(cardElem).val();
      var cvv = $(cvvElem).val();
      var lastDigits = cardNum.substring(cardNum.Length - 3, 3);
      var requiredMaskCard = new String("*", cardNum.Length - lastDigits.Length);
      var maskedStringCVV = new String("*", cvv.Length);
      var maskedStringCard = requiredMaskCard.concat(lastDigits);
      $(cardElem).val(maskedStringCard);
      $(cvvElem).val(maskedStringCVV)
    });
    var imgList = [];
    var imgObj = {};
    var i = 0;
    $("#dvFastForms").find(".main-docsign-wrapper.ffs-drawn").each(function() {
      var api = $(this).find(".ff-signwrapper.ff-drawn .doc-sign-name").signaturePad();
      var image = new Image();
      imgObj[i] = api.getSignatureImage();
      imgList.push(imgObj);
      image.src = "ffSignatureImage" + i;
      $(newDiv).find("#" + $(this).attr("id") + " .ff-signwrapper.ff-drawn .doc-sign-name .docsignWrapper").replaceWith(image);
      i++;
      var api = $(this).find(".ff-signwrapper.ff-drawn .doc-sign-date").signaturePad();
      var image = new Image();
      imgObj[i] = api.getSignatureImage();
      imgList.push(imgObj);
      image.src = "ffSignatureImage" + i;
      $(newDiv).find("#" + $(this).attr("id") + " .ff-signwrapper.ff-drawn .doc-sign-date .docsignWrapper").replaceWith(image);
      i++
    });
    $("#dvFastForms").find(".main-docsign-wrapper.ffs-both").each(function() {
      var api = $(this).find(".ff-signwrapper.ff-drawn .doc-sign-name").signaturePad();
      var image = new Image();
      imgObj[i] = api.getSignatureImage();
      imgList.push(imgObj);
      image.src = "ffSignatureImage" + i;
      $(newDiv).find("#" + $(this).attr("id") + " .ff-signwrapper.ff-drawn .doc-sign-name .docsignWrapper").replaceWith(image);
      i++;
      var api = $(this).find(".ff-signwrapper.ff-drawn .doc-sign-date").signaturePad();
      var image = new Image();
      imgObj[i] = api.getSignatureImage();
      imgList.push(imgObj);
      image.src = "ffSignatureImage" + i;
      $(newDiv).find("#" + $(this).attr("id") + " .ff-signwrapper.ff-drawn .doc-sign-date .docsignWrapper").replaceWith(image);
      i++
    });
    $("#dvFastForms").find(".main-docsign-wrapper.ffs-full").each(function() {
      var api = $(this).find(".ff-signwrapper.ff-drawn .doc-sign-name").signaturePad();
      var image = new Image();
      imgObj[i] = api.getSignatureImage();
      imgList.push(imgObj);
      image.src = "ffSignatureImage" + i;
      $(newDiv).find("#" + $(this).attr("id") + " .ff-signwrapper.ff-drawn .doc-sign-name .docsignWrapper").replaceWith(image);
      i++;
      var api = $(this).find(".ff-signwrapper.ff-drawn .doc-sign-date").signaturePad();
      var image = new Image();
      imgObj[i] = api.getSignatureImage();
      imgList.push(imgObj);
      image.src = "ffSignatureImage" + i;
      $(newDiv).find("#" + $(this).attr("id") + " .ff-signwrapper.ff-drawn .doc-sign-date .docsignWrapper").replaceWith(image);
      i++
    });
    $(newDiv).find(".ff-page-row[page-ishidden!=true]").show();
    $(newDiv).find(".ff-page-bread-header").remove();
    $(newDiv).find(".ff-page-header-row").remove();
    $(newDiv).find("#btnprev").hide();
    $(newDiv).find("#btnnext").hide();
    $(newDiv).find("#btnsubmit").hide();
    $(newDiv).find("#formHtml").remove();
    $(newDiv).find("[class*='ff-ui-dialog']").remove();
    $(newDiv).find("script").remove();
    $(newDiv).find(".ff-general-text-label").parent().css("max-width", "100%");
    var finalHtml = $("<div/>").text($(newDiv).html()).html();
    $.each(imgList, function(i, val) {
      finalHtml = finalHtml.replace(new RegExp("ffSignatureImage" + i, "gi"), encodeURIComponent(val[i]))
    });
    finalHtml = LZString.compressToEncodedURIComponent(finalHtml);
    $("#dvFastForms #formHtml").val(finalHtml)
  }

  function GenerateFormData(isXDR) {
    var now = new Date();
    var formData;
    var dataArr = [];
    AddToArray(dataArr, "inputdate", (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    $("#dvFastForms input,#dvFastForms  textarea,#dvFastForms  select").each(function() {
      var val = $(this).val();
      switch ($(this).prop("type")) {
        case "text":
        case "textbox":
          AddToArray(dataArr, GetName($(this)), encodeURIComponent(val));
          break;
        case "radio":
          if ($(this).prop("checked")) {
            AddToArray(dataArr, GetName($(this)), encodeURIComponent(val))
          }
          break;
        case "checkbox":
          AddToArray(dataArr, GetName($(this)), $(this).prop("checked"));
          break;
        case "textarea":
          AddToArray(dataArr, GetName($(this)), encodeURIComponent(val));
          break;
        case "select-one":
          AddToArray(dataArr, GetName($(this)), encodeURIComponent($(this).find(":selected").val()));
          break;
        case "select-multiple":
          var selectedValues = "";
          $(this).find(":selected").each(function() {
            selectedValues += ";" + encodeURIComponent($(this).val())
          });
          if (selectedValues.length > 1) {
            selectedValues = selectedValues.substr(1, selectedValues.length - 1)
          }
          AddToArray(dataArr, GetName($(this)), selectedValues);
          break;
        case "hidden":
          AddToArray(dataArr, GetName($(this)), val);
          break;
        case "submit":
        case "button":
        case "reset":
          break;
        default:
          AddToArray(dataArr, "Unknown_InputType_" + GetName($(this)), $(this).prop("type"))
      }
    });
    $("#dvFastForms .ff-sec-repeat-wrapper").each(function(indx, ritem) {
      var repeatedObjId = $(ritem).attr("data-rid");
      if (repeatedObjId !== undefined && repeatedObjId != "") {
        AddToArray(dataArr, repeatedObjId, encodeURIComponent($(ritem).attr("data-rval")))
      }
    });
    if (isXDR) {
      formData = "";
      for (var i = 0; i < dataArr.length; i++) {
        if (formData != "") {
          formData += "&"
        }
        formData += dataArr[i][0] + "=" + dataArr[i][1]
      }
    } else {
      formData = new FormData;
      for (var i = 0; i < dataArr.length; i++) {
        formData.append(dataArr[i][0], dataArr[i][1])
      }
    }
    return formData
  }

  function GetSaveDraftEmail() {
    var target = $("#ffLookupDialog");
    if (inIframe()) {
      var email = prompt(ffPrompt_EnterSaveEmail);
      if (email != null && email != "") {
        alert(ffPrompt_SaveEmailConfirm);
        $("#dvFastForms #draftEmail").val(email);
        PostFormData()
      }
    } else {
      var formWidth = $("#dvFastForms .ff-form-main").css("max-width").replace("px", "");
      $(target).dialog({
        height: 300,
        width: formWidth,
        modal: true,
        id: "dvFastForms",
        dialogClass: "ff-form-main",
        show: {
          effect: "fade",
          duration: 350
        },
        hide: {
          effect: "fade",
          duration: 350
        },
        buttons: {
          OK: {
            click: function() {
              var email = $(this).find("#ffSaveDraftEmail").val();
              if (email != "") {
                ShowConfirmationPopup(ffPrompt_SaveEmailConfirm);
                $("#dvFastForms #draftEmail").val(email);
                $(this).dialog("close");
                PostFormData()
              } else {
                ShowValidationMessage($(this).find("#ffSaveDraftEmail"), "REQUIRED")
              }
            },
            text: "OK",
            "class": "ff-btn-submit"
          },
          Cancel: {
            click: function() {
              $(this).dialog("close")
            },
            text: "Cancel",
            "class": "ff-btn-submit"
          }
        }
      });
      $(target).html($('<div class="ff-item-row">   <div class="ff-col-1 ff-label-col">        <label vatt="STRING" class="ff-label">            Please provide your email address below.<br />You will receive an email with a link to allow you to retrieve your saved form at a later date.        </label>   </div></div><div class="ff-item-row">   <div class="ff-col-1 ff-label-col">       <label vatt="STRING" for="ffSaveDraftEmail" class="ff-label" id="lblSaveDraftEmail">         E-mail Address:       </label>       <span class="requiredSpan ff-required-mark">*</span>   </div>   <div class="ff-col-2 ff-field-col">       <input type="textbox" id="ffSaveDraftEmail" name="ffSaveDraftEmail" vatt="STRING" class="ff-input-type ff-type-text" maxlength="50" value="" />   </div></div>'));
      $(".ff-ui-dialog-titlebar").hide();
      $(".ff-ui-dialog").attr("id", "dvFastForms")
    }
  }
  this.DiscardDraft = function DiscardDraft() {
    var target = $("#dialog");
    if (inIframe()) {
      var res = confirm("Are you sure you want to discard this saved form? This action cannot be undone.");
      if (res == true) {
        $("#dvFastForms #isDraft").val("False");
        $("#dvFastForms #draftSaved").val("False");
        DiscardFormData()
      }
    } else {
      $(target).dialog({
        autoResize: true,
        modal: true,
        id: "dvFastForms",
        dialogClass: "ff-form-main",
        show: {
          effect: "fade",
          duration: 350
        },
        hide: {
          effect: "fade",
          duration: 350
        },
        buttons: {
          Yes: {
            click: function() {
              $(this).dialog("close");
              $("#dvFastForms #isDraft").val("False");
              $("#dvFastForms #draftSaved").val("False");
              DiscardFormData()
            },
            text: "Yes",
            "class": "ff-btn-submit"
          },
          No: {
            click: function() {
              $(this).dialog("close")
            },
            text: "No",
            "class": "ff-btn-submit"
          }
        }
      });
      $(target).html("Are you sure you want to discard this saved form?<br /> This action cannot be undone.");
      $(".ff-ui-dialog-titlebar").hide();
      $(".ff-ui-dialog").attr("id", "dvFastForms")
    }
  };

  function DiscardFormData() {
    VALog("[DiscardFormData]");
    ($).support.cors = true;
    var sessionId = $("#dvFastForms #txtSessionID").val();
    var discardUrl = baseUrl + "EngineFrame/DiscardDraft?sid=" + sessionId;
    if (window.XDomainRequest) {
      VALog("[DiscardFormData][XDomainRequest]");
      var xdr = new XDomainRequest();
      if (window.location.protocol == "http:" && discardUrl.lastIndexOf("https:", 0) === 0) {
        discardUrl = discardUrl.replace("https:", "http:")
      }
      xdr.open("POST", discardUrl);
      xdr.onload = function() {
        VALog("[DiscardFormData][XDomainRequest][onload]");
        ShowConfirmationPopup(ffPrompt_SavedFormDiscarded);
        $("#dvFastForms #draftSaved").val("False");
        $("#dvFastForms #isDraft").val("False");
        $("#dvFastForms #btndiscard").hide();
        ResetFormData(true)
      };
      xdr.send()
    } else {
      if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
        console.log("[DiscardFormData][IE11-SF][XMLHttpRequest]");
        var oReq = null;
        if (Sarissa && Sarissa.originalXMLHttpRequest) {
          oReq = new Sarissa.originalXMLHttpRequest()
        } else {
          if (window.XMLHttpRequest) {
            oReq = new XMLHttpRequest()
          }
        }
        oReq.open("POST", discardUrl, true);
        oReq.onreadystatechange = function() {
          if (oReq.readyState == 4 && oReq.status == 200) {
            VALog("[DiscardFormData][IE11-SF][XMLHttpRequest][result]");
            ShowConfirmationPopup(ffPrompt_SavedFormDiscarded);
            $("#dvFastForms #draftSaved").val("False");
            $("#dvFastForms #isDraft").val("False");
            $("#dvFastForms #btndiscard").hide()
          } else {
            if (oReq.readyState == 4 && oReq.status != 200) {
              console.log(" Service call status:" + oReq.status)
            }
          }
        };
        oReq.send()
      } else {
        $.ajax({
          global: false,
          type: "POST",
          crossDomain: true,
          url: discardUrl,
          processData: false,
          success: function(data) {
            ShowConfirmationPopup(ffPrompt_SavedFormDiscarded);
            $("#dvFastForms #draftSaved").val("False");
            $("#dvFastForms #isDraft").val("False");
            $("#dvFastForms #btndiscard").hide()
          },
          error: function(request, status, error) {
            ShowConfirmationPopup(ffPrompt_SavedFormDiscarded);
            $("#dvFastForms #draftSaved").val("False");
            $("#dvFastForms #isDraft").val("False");
            $("#dvFastForms #btndiscard").hide()
          }
        })
      }
    }
  }
  this.SubmitData = function SubmitData(isDraft) {
    if (isDraft == true) {
      $("#dvFastForms #isDraft").val("True");
      if ($("#dvFastForms #draftSaved").val() != "True") {
        GetSaveDraftEmail()
      } else {
        PostFormData()
      }
    } else {
      if ($("#submitRules").length) {
        eval("evaluateRules([" + $("#submitRules").val() + "]);")
      }
      if (!hasGeneralError) {
        $("#dvFastForms #btnsubmit").prop("disabled", true);
        formValid = true;
        var result = ExecBeforeSave();
        if (result == true) {
          ValidateForm()
        }
      } else {
        hasGeneralError = false
      }
    }
  };

  function ShowConfirmationPopup(msg) {
    try {
      var target = $("#dialog");
      if (inIframe()) {
        target = parent.$("#dialog")
      }
      $(target).dialog({
        autoResize: true,
        modal: true,
        id: "dvFastForms",
        dialogClass: "ff-form-main",
        show: {
          effect: "fade",
          duration: 350
        },
        hide: {
          effect: "fade",
          duration: 350
        },
        buttons: {
          OK: {
            click: function() {
              $(this).dialog("close")
            },
            text: "OK",
            "class": "ff-btn-submit"
          }
        }
      });
      $(target).html(msg);
      $(".ff-ui-dialog-titlebar").hide();
      $(".ff-ui-dialog").attr("id", "dvFastForms")
    } catch (ex) {
      alert(msg)
    }
  }

  function ShowErrorPopup(msg) {
    try {
      var target = $("#dialog");
      if (inIframe()) {
        target = parent.$("#dialog")
      }
      $(target).html(msg);
      $(target).dialog({
        title: "Error",
        show: {
          effect: "fade",
          duration: 500
        },
        hide: {
          effect: "fade",
          duration: 500
        },
        buttons: {
          OK: function() {
            $(this).dialog("close")
          }
        }
      })
    } catch (ex) {
      alert(msg)
    }
  }

  function RenderCalendar(th) {
    switch ($(th).attr("vatt")) {
      case "date":
      case "datetime":
      case "DATE":
      case "DATETIME":
        if (!$(th).prop("disabled")) {
          if ($(th).data("datepicker") !== undefined) {
            $(th).datetimepicker("destroy")
          }
          $(th).removeClass("hasDatepicker");
          var nm = GetName($(th));
          $(th).attr("maxlength", "10");
          if ($(th).attr("vatt").toLowerCase() == "datetime") {
            $(th).datetimepicker({
              addSliderAccess: true,
              sliderAccessArgs: {
                touchonly: false
              },
              changeMonth: true,
              changeYear: true,
              yearRange: "-100:+10",
              onSelect: function() {
                $(this).trigger("keyup");
                $(this).blur()
              },
              beforeShow: function() {
                setTimeout(function() {
                  InitializeIframe()
                }, 100)
              }
            })
          } else {
            $(th).datetimepicker({
              showTimepicker: false,
              addSliderAccess: true,
              sliderAccessArgs: {
                touchonly: false
              },
              changeMonth: true,
              changeYear: true,
              yearRange: "-100:+10",
              onSelect: function() {
                $(this).trigger("keyup");
                $(this).blur()
              },
              beforeShow: function() {
                setTimeout(function() {
                  InitializeIframe()
                }, 100)
              }
            })
          }
        }
        break
    }
  }

  function InitializeLogo() {
    var logoDiv = $(".ff-logo");
    var bg_url = $(logoDiv).css("background-image");
    if (bg_url != "none") {
      bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
      bg_url = bg_url ? bg_url[2] : "";
      $(logoDiv).css("background-image", "none");
      $(logoDiv).append($('<img alt="Company Logo" src="' + bg_url + '">'))
    }
  }

  function InitializeForm() {
    if ($("#isHostedForm").val() == "True") {
      $(document).prop("title", $("#dvFastForms #formName").val())
    }
    $(".ff-form-main").prepend('<div id="ffOverlay"></div>');
    $("#dvLoading").hide();
    $(document).ajaxStart(function() {
      $("#ffOverlay").addClass("ff-overlay-image")
    }).ajaxStop(function() {
      $("#ffOverlay").removeClass("ff-overlay-image")
    });
    $(window).off("message");
    $(window).on("message", function(event) {
      HandlePostMessage(event)
    });
    $("#dvFastForms").show();
    ResetFormData(false);
    $("#userTimeZone").val(new Date().getTimezoneOffset());
    InitializeRepeatableSections();
    InitializeCheckboxes();
    InitializeFileUpload();
    InitializePayment();
    InitializeSignature();
    InitializeFooter();
    InitializeLogo();
    InitializePages();
    InitializeBreadcrumbs();
    SetBreadcrumbWidth();
    BindRuleEvents();
    brokenImagesFallback_ForNA25();
    ExecAfterRender();
    InitializeIframe();
    setTimeout(function() {
      InitializeIframe()
    }, 100);
    if ($("#dvFastForms #saveForLaterEnabled").val().toLowerCase() == "true" && $("#dvFastForms #draftSaved").val().toLowerCase() == "true") {
      if (typeof ffFileUploadJson !== "undefined") {
        ValidateFileUploads(ffFileUploadJson)
      }
      if (typeof evaluateRules == "function") {
        evaluateRules()
      }
    }
    if (!isNullOrEmpty($("#txtUserContentId").val())) {
      $(".ff-form-main .btnDiv").remove();
      $(".ff-form-main").find(".ff-page-row[page-ishidden!=true]").show();
      $(".ff-form-main").find(".ff-page-bread").remove();
      $(".ff-form-main").css("pointer-events", "none");
      if (typeof evaluateRules == "function") {
        evaluateRules()
      }
      $(".ff-form-main input, textarea, select").each(function() {
        if ($(this).data("sferr")) {
          ShowValidationMessage(this, "GENERAL", $(this).data("sferr"))
        }
      })
    }
    if ($("#dvFastForms #saveForLaterEnabled").val().toLowerCase() == "true" && $("#dvFastForms #isDraft").val().toLowerCase() != "true" && $("#dvFastForms #draftSaved").val().toLowerCase() == "true") {
      setTimeout(function() {
        ShowConfirmationPopup(ffPrompt_InvalidSavedForm)
      }, 100)
    }
    $(".ff-form-main input, textarea, select").each(function() {
      if ($(this).val() != null && $(this).val().length > 0) {
        $(this).val(EvaluateCustomFormula($(this).val()))
      }
    })
  }

  function brokenImagesFallback_ForNA25() {
    try {
      $(".ff-col-1.ff-image img,.ff-header .ff-logo img").each(function(imgElem) {
        var imgSrc = $(this).attr("src");
        if (imgSrc !== undefined && imgSrc.toLowerCase().indexOf("https://na25.") == 0) {
          $(this).error(function() {
            if (setNA25Img == true) {
              console.log("Error loading an image for NA25");
              onImageLoadError(this)
            }
          })
        }
      })
    } catch (err) {
      console.log("NA25 issue:" + err)
    }
  }

  function onImageLoadError(imgElem) {
    try {
      $(imgElem).unbind("error");
      $(".ff-col-1.ff-image img,.ff-header .ff-logo img").each(function() {
        var imgSrc = $(this).attr("src");
        if (imgSrc !== undefined && imgSrc.toLowerCase().indexOf("https://na25.") == 0) {
          imgSrc = imgSrc.replace("https://NA25.", "https://NA56.");
          imgSrc = imgSrc.replace("https://na25.", "https://na56.");
          $(this).error().attr("src", imgSrc)
        }
      });
      $(".ff-form,.ff-header,.ff-footer-group").each(function() {
        var imgSrc = $(this).css("background-image");
        if (imgSrc !== undefined && imgSrc.toLowerCase().indexOf("https://na25.") > 0) {
          imgSrc = imgSrc.replace("https://NA25.", "https://NA56.");
          imgSrc = imgSrc.replace("https://na25.", "https://na56.");
          $(this).css("background-image", imgSrc)
        }
      })
    } catch (err) {
      console.log("NA25 image error:" + err)
    }
    setNA25Img = false
  }

  function InitializeCheckboxes() {
    $(".ff-checkbox[readonly='readonly']").each(function() {
      var onclick = $(this).attr("onclick");
      if (onclick != undefined) {
        $(this).attr("onclick", "return false;" + onclick)
      } else {
        $(this).attr("onclick", "return false;")
      }
    })
  }

  function InitializeBreadcrumbs() {
    if ($("#dvFastForms #breadcrumbEnabled").val().toLowerCase() == "true") {
      var i = 0;
      var breadHeaderDiv = $("<div />").addClass("ff-page-bread-header");
      var breadWrapperDiv = $("<div />").addClass("ff-page-bread-wrapper");
      var breadDiv = $("<div />").addClass("ff-page-bread");
      var nextBreadBtn = $("<div>></div>").addClass("ff-page-bread-next ff-page-bread-item").attr("onclick", "FFMoveBreadcrumbRight();");
      var prevBreadBtn = $("<div><</div>").addClass("ff-page-bread-prev ff-page-bread-item").attr("onclick", "FFMoveBreadcrumbLeft();");
      $(prevBreadBtn).css("visibility", "hidden");
      $(breadDiv).appendTo(breadWrapperDiv);
      $(breadWrapperDiv).appendTo(breadHeaderDiv);
      $("#dvFastForms .ff-form-main").prepend(breadHeaderDiv);
      $(breadWrapperDiv).before(prevBreadBtn);
      $(breadWrapperDiv).after(nextBreadBtn);
      var totalWidth = 0;
      $("#dvFastForms .ff-page-row[page-ishidden!=true]").each(function() {
        var setPageFunction = "FFSetPage(" + i + ");";
        var breadPrefix = $("#dvFastForms #breadcrumbPrefix").val();
        if (breadPrefix == "") {
          var title = ($("#dvFastForms #breadcrumbNumbered").val().toLowerCase() == "true" ? (i + 1) + ". " : "") + $(this).data("pagetitle")
        } else {
          var title = (breadPrefix == "" ? "" : breadPrefix + " ") + ($("#dvFastForms #breadcrumbNumbered").val().toLowerCase() == "true" ? (i + 1) + ": " : "") + $(this).data("pagetitle")
        }
        var breadItem = $("<div data-pageid='" + $(this).attr("id") + "'/>").html(title).addClass("ff-page-bread-item").attr("onclick", setPageFunction);
        if (i == 0) {
          $(breadItem).addClass("item-selected")
        }
        $(breadItem).appendTo(breadDiv);
        i++
      })
    }
  }
  var lastBreadWidth;
  var lastFormWidth;
  var i = 0;

  function SetBreadcrumbWidth(forceUpdate) {
    if ($(".ff-page-bread-item").eq(0).width() != lastBreadWidth || forceUpdate) {
      lastBreadWidth = $(".ff-page-bread-item").eq(0).width();
      var totalWidth = 0;
      $("#dvFastForms .ff-page-bread-item:visible").each(function() {
        totalWidth += $(this).width() + 30
      });
      $(".ff-page-bread").width(totalWidth)
    }
    if ($(".ff-page-bread-wrapper").width() != lastFormWidth || forceUpdate) {
      var prevBtnWidth = $(".ff-page-bread-prev").outerWidth();
      var nextBtnWidth = $(".ff-page-bread-next").outerWidth();
      var newWidth = $(".ff-page-bread-wrapper").parent().parent().outerWidth() - prevBtnWidth - nextBtnWidth - 5;
      lastFormWidth = newWidth;
      $(".ff-page-bread-wrapper").width(newWidth);
      ShowHideBreadcrumbNav()
    }
    setTimeout(SetBreadcrumbWidth, 100)
  }

  function InitializeFooter() {
    if (!$("#dvFastForms #btnsubmit").length) {
      var ffFooterGroup = $('<div class="ff-footer-group"></div>');
      var ffFooterRow = $('<div class="ff-item-row ff-footer-row"></div>');
      var ffSubmitDiv = $('<div class="ff-submit-btn">');
      var footnoteDiv = $('<div class="footnoteDiv"></div>');
      var requiredSpan = $('<span class="requiredSpan  ff-footnote ff-required-mark">*</span>');
      var ffFootnoteLabel = $('<label class="ff-footnote-label">- required</label>');
      var btnDiv = $('<div class="btnDiv">');
      var btnSubmit = $('<input type="button" class="sectionHeader ff-btn-submit" id="btnsubmit" onclick="SubmitData();">');
      $(btnSubmit).attr("value", $("#dvFastForms #submitBtnText").val());
      $(btnSubmit).attr("btnmessage", $("#dvFastForms #submitMessage").val());
      $(btnSubmit).attr("btnurl", $("#dvFastForms #submitUrl").val());
      $(btnDiv).append(btnSubmit);
      if ($("#dvFastForms #saveForLaterEnabled").val().toLowerCase() == "true") {
        var btnDiscard = $('<input type="button" class="sectionHeader ff-btn-submit" id="btndiscard" onclick="DiscardDraft();">');
        $(btnDiscard).attr("value", $("#dvFastForms #discardBtnText").val());
        $(btnDiv).prepend(btnDiscard);
        if ($("#dvFastForms #isDraft").val().toLowerCase() != "true") {
          $(btnDiscard).hide()
        }
        var btnSave = $('<input type="button" class="sectionHeader ff-btn-submit" id="btnsave" onclick="SubmitData(true);">');
        $(btnSave).attr("value", $("#dvFastForms #saveBtnText").val());
        $(btnDiv).prepend(btnSave)
      }
      $(footnoteDiv).append(requiredSpan);
      $(footnoteDiv).append(ffFootnoteLabel);
      $(ffSubmitDiv).append(footnoteDiv);
      $(ffSubmitDiv).append(btnDiv);
      $(ffFooterRow).append(ffSubmitDiv);
      $(ffFooterGroup).append(ffFooterRow);
      $("#dvFastForms .ff-form-main").append(ffFooterGroup)
    }
  }

  function InitializePages() {
    if ($("#dvFastForms #multipageEnabled").val().toLowerCase() == "true") {
      var startPage = $("#dvFastForms .ff-page-row[page-ishidden!=true]:first");
      $("#dvFastForms .ff-page-row[page-ishidden!=true]:not(:first)").hide();
      $("#dvFastForms .ff-page-row[page-ishidden=true]").hide();
      var btnPrev = $('<input type="button" class="sectionHeader ff-btn-submit ff-btn-prev" id="btnprev" onclick="FFPrevPage();">');
      var btnNext = $('<input type="button" class="sectionHeader ff-btn-submit ff-btn-next" id="btnnext" onclick="FFNextPage();">');
      $(btnPrev).val($("#dvFastForms #prevBtnText").val());
      $(btnNext).val($("#dvFastForms #nextBtnText").val());
      $("#dvFastForms .btnDiv").append(btnPrev);
      $("#dvFastForms .btnDiv").append(btnNext);
      $("#dvFastForms #btnprev").hide();
      $("#dvFastForms #btnnext").hide();
      var numPages = $("#dvFastForms .ff-page-row[page-ishidden!=true]").size();
      if (numPages > 1) {
        $("#dvFastForms #btnsubmit").hide();
        $("#dvFastForms #btnnext").show()
      }
    } else {
      $("#dvFastForms .ff-page-bread-header").remove();
      $("#dvFastForms .ff-page-header-row").remove()
    }
  }
  this.ShowHideBreadcrumbNav = function ShowHideBreadcrumbNav() {
    if ($(".ff-page-bread-wrapper").scrollLeft() + $(".ff-page-bread-wrapper").width() >= $(".ff-page-bread").width()) {
      $(".ff-page-bread-next").css("visibility", "hidden")
    } else {
      $(".ff-page-bread-next").css("visibility", "visible")
    }
    if ($(".ff-page-bread-wrapper").scrollLeft() <= 3) {
      $(".ff-page-bread-prev").css("visibility", "hidden")
    } else {
      $(".ff-page-bread-prev").css("visibility", "visible")
    }
  };
  this.FFMoveBreadcrumbRight = function FFMoveBreadcrumbRight() {
    $(".ff-page-bread-wrapper").scrollLeft($(".ff-page-bread-wrapper").scrollLeft() + $(".ff-page-bread-wrapper").width());
    $(".ff-page-bread-prev").css("visibility", "visible");
    ShowHideBreadcrumbNav()
  };
  this.FFMoveBreadcrumbLeft = function FFMoveBreadcrumbLeft() {
    $(".ff-page-bread-wrapper").scrollLeft($(".ff-page-bread-wrapper").scrollLeft() - $(".ff-page-bread-wrapper").width());
    $(".ff-page-bread-next").css("visibility", "visible");
    ShowHideBreadcrumbNav()
  };
  this.FFPrevPage = function FFPrevPage() {
    var currPageNum = $("#dvFastForms .ff-page-row[page-ishidden!=true]:visible:first").index(".ff-page-row[page-ishidden!=true]");
    FFSetPage(currPageNum - 1)
  };
  this.FFNextPage = function FFNextPage() {
    var currPageNum = $("#dvFastForms .ff-page-row[page-ishidden!=true]:visible:first").index(".ff-page-row[page-ishidden!=true]");
    FFSetPage(currPageNum + 1)
  };
  this.FFSetPage = function FFSetPage(pageNum, skipValidation) {
    var pageValid = true;
    if ($("#dvFastForms #pageValType").val() == "page" && !skipValidation) {
      ResetValidation();
      formValid = true;
      ValidateFields();
      pageValid = formValid
    }
    if (pageValid == true) {
      ScrollToTop();
      $("#dvFastForms .ff-page-bread-item").removeClass("item-selected");
      var breadElem = $('#dvFastForms .ff-page-bread-item:not(".ff-page-bread-next"):not(".ff-page-bread-prev"):visible').eq(pageNum);
      $(breadElem).addClass("item-selected");
      $(".ff-page-bread-wrapper").scrollTo($(breadElem));
      ShowHideBreadcrumbNav();
      var numPages = $("#dvFastForms .ff-page-row[page-ishidden!=true]").size();
      var pageToSet = $("#dvFastForms .ff-page-row[page-ishidden!=true]").eq(pageNum);
      $("#dvFastForms .ff-page-row[page-ishidden!=true]").hide();
      $(pageToSet).show();
      if (pageNum == numPages - 1) {
        $("#dvFastForms #btnnext").css("display", "none");
        $("#dvFastForms #btnsubmit").css("display", "inline-block")
      } else {
        if (pageNum == 0) {
          $("#dvFastForms #btnprev").css("display", "none")
        }
      }
      SetPageButtons();
      InitializeIframe()
    }
  };

  function SetPageButtons() {
    var currPageNum = $("#dvFastForms .ff-page-row[page-ishidden!=true]:visible:first").index(".ff-page-row[page-ishidden!=true]") + 1;
    var numPages = $("#dvFastForms .ff-page-row[page-ishidden!=true]").size();
    if (numPages == 1) {
      $("#dvFastForms #btnnext").css("display", "none");
      $("#dvFastForms #btnprev").css("display", "none");
      $("#dvFastForms #btnsubmit").css("display", "inline-block")
    } else {
      if (currPageNum == numPages) {
        $("#dvFastForms #btnnext").css("display", "none");
        $("#dvFastForms #btnprev").css("display", "inline-block");
        $("#dvFastForms #btnsubmit").css("display", "inline-block")
      } else {
        if (currPageNum == 1) {
          $("#dvFastForms #btnnext").css("display", "inline-block");
          $("#dvFastForms #btnprev").css("display", "none");
          $("#dvFastForms #btnsubmit").css("display", "none")
        } else {
          $("#dvFastForms #btnprev").css("display", "inline-block");
          $("#dvFastForms #btnnext").css("display", "inline-block");
          $("#dvFastForms #btnsubmit").css("display", "none")
        }
      }
    }
  }

  function InitializePayment() {
    if (document.location.protocol != "https:" && !$("#dvFastForms .ff-payment-wrapper").hasClass("ff-test-mode")) {
      $("#dvFastForms .ff-payment-wrapper").remove()
    } else {
      $("#dvFastForms .ff-yyyy").each(function() {
        var currYear = (new Date).getFullYear();
        for (var i = 0; i < 15; i++) {
          $(this).append($("<option>", {
            value: currYear + i
          }).text(currYear + i))
        }
      });
      $("#dvFastForms .ff-mm").each(function() {
        for (var i = 1; i <= 12; i++) {
          if (i < 10) {
            $(this).append($("<option>", {
              value: "0" + i
            }).text("0" + i))
          } else {
            $(this).append($("<option>", {
              value: i
            }).text(i))
          }
        }
      });
      $("#dvFastForms .ff-creditcard").blur(function() {
        ShowCardType(this)
      });
      $("#dvFastForms .ff-taxes").each(function() {
        var fieldNum = $(this).attr("id").replace("FFTaxes", "");
        var subtotalVal = ToAmount($("#FFAmount" + fieldNum).text());
        var taxVal = ToAmount($(this).data("taxes"));
        $(this).text(ToAmount(subtotalVal * (taxVal / 100)))
      });
      UpdatePaymentTotals()
    }
  }

  function ShowCardType(elem) {
    var cardType = "";
    $(elem).parent().find(".imgCardType").remove();
    var re = new RegExp("^4");
    if ($(elem).val().match(re) != null) {
      cardType = "visa"
    }
    re = new RegExp("^5[1-5]");
    if ($(elem).val().match(re) != null) {
      cardType = "mastercard"
    }
    re = new RegExp("^3[47]");
    if ($(elem).val().match(re) != null) {
      cardType = "amex"
    }
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if ($(elem).val().match(re) != null) {
      cardType = "discover"
    }
    re = new RegExp("^36");
    if ($(elem).val().match(re) != null) {
      cardType = "diners"
    }
    re = new RegExp("^30[0-5]");
    if ($(elem).val().match(re) != null) {
      cardType = "diners"
    }
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if ($(elem).val().match(re) != null) {
      cardType = "jcb"
    }
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if ($(elem).val().match(re) != null) {
      cardType = "visaelectron"
    }
    if (cardType != "") {
      $(elem).after($("<img>", {
        src: baseUrl + "Styles/images/" + cardType + ".png"
      }).addClass("imgCardType"))
    }
  }
  var ff_SectionRepeatMinCount = 1;
  var ff_SectionRepeatMaxCount = 100;

  function InitializeRepeatableSections() {
    $("#dvFastForms .ff-sec-repeat-wrapper").parent().each(function(index, parentRepeatElem) {
      $(parentRepeatElem).find(".ff-sec-repeat-wrapper").each(function(rindex, repeatElem) {
        if (isNullOrEmpty($("#dvFastForms #txtUserContentId").val()) && $(repeatElem).find("div[data-rid]").length == 0) {
          SetRepeatableSectionIDs(repeatElem, rindex + 1, true);
          ResetRepeatedSectionItem(repeatElem, true)
        } else {
          SetRepeatableSectionIDs(repeatElem, rindex + 1, true);
          ResetRepeatedSectionItem(repeatElem, true)
        }
      });
      var minItems = safeInt($(parentRepeatElem).data("min"), ff_SectionRepeatMinCount);
      var initialCount = 1;
      if ($(parentRepeatElem).find(".ff-sec-repeat-wrapper").length > 1) {
        initialCount = $(parentRepeatElem).find(".ff-sec-repeat-wrapper").length
      }
      for (var i = initialCount; i < minItems; i++) {
        AddToRepeatableSection($(parentRepeatElem).find(".ff-sec-repeat-wrapper").last().find("a.ff-add"))
      }
      var numItems = $(parentRepeatElem).find(".ff-sec-repeat-wrapper").size();
      if (numItems === minItems) {
        $(parentRepeatElem).find(".ff-sec-repeat-wrapper").last().find("a.ff-remove,.link-divider").hide()
      }
    })
  }

  function SetRepeatableSectionIDs(repeatElem, num, init) {
    console.log("resetting repeated section ids");
    if ($("#dvFastForms #isDraft").val().toLowerCase() != "true" || init != true) {
      $(repeatElem).find('.ff-item-row  .ff-col-2>input,.ff-item-row  .ff-col-2>textarea,.ff-item-row  .ff-col-2>select,.ff-item-row  .ff-col-2>a.lookup-link,.ff-item-row div[vatt="CAPTCHA"]').each(function() {
        var resetId = false;
        if (isNullOrEmpty($(this).parents(".ff-sec-repeat-wrapper").attr("data-rid"))) {
          resetId = true
        }
        var inputId = $(this).attr("id");
        var inputName = $(this).attr("name");
        var label = $(this).parent().parent().find("label[for='" + inputId + "']");
        var newId = inputId;
        var arr = inputId.split(".");
        if (arr.length == 4) {
          arr[2] = arr[2][0] + "_" + num + "_";
          newId = arr.join(".")
        } else {
          if (arr.length == 1) {
            arr = inputId.split("__");
            newId = arr[0] + "__" + num
          }
        }
        if (resetId) {
          $(this).attr("id", newId);
          $(this).attr("name", newId);
          $(label).attr("for", newId);
          $(label).attr("id", $(label).attr("id") + "_" + num)
        }
      });
      if ($(repeatElem).find(".ff-esignature-wrapper").length >= 1) {
        $(repeatElem).find(".ff-esignature-wrapper").each(function(indx, signWrapElement) {
          assignSignatureElementIds(signWrapElement, num);
          InitializeSignatureElement(signWrapElement)
        })
      }
    }
    var repeatElemParent = $(repeatElem).parent();
    var addLinkText = ff_AddAnotherSectionLink;
    var removeLinkText = ff_RemoveSectionLink;
    if (!isNullOrEmpty($(repeatElemParent).attr("data-addlink"))) {
      addLinkText = $(repeatElemParent).attr("data-addlink")
    }
    if (!isNullOrEmpty($(repeatElemParent).attr("data-removelink"))) {
      removeLinkText = $(repeatElemParent).attr("data-removelink")
    }
    $(repeatElem).find(".rsec-footer-row").remove();
    $(repeatElem).append(getRepeatableSectionFooterHTML(addLinkText, removeLinkText));
    resetAddRemoveLinksForRepeatedSections(repeatElem, false)
  }

  function resetAddRemoveLinksForRepeatedSections(repeatElem, isParentElem) {
    var targetElem = $(repeatElem);
    if (!isParentElem) {
      targetElem = $(repeatElem).parent()
    }
    var maxItems = safeInt($(targetElem).data("max"), ff_SectionRepeatMaxCount);
    var minItems = safeInt($(targetElem).data("min"), 1);
    var currNumItems = $(targetElem).find(".ff-sec-repeat-wrapper").size();
    $(targetElem).find(".ff-sec-repeat-wrapper").find(".ff-add,.link-divider").hide();
    if ($(targetElem).find(".ff-sec-repeat-wrapper").length > 1) {
      $(targetElem).find(".ff-sec-repeat-wrapper").each(function(rindx, repElem) {
        if (rindx >= minItems) {
          $(repElem).find(".ff-remove").show()
        } else {
          $(repElem).find(".ff-remove").hide();
          $(repElem).find(".link-divider").hide()
        }
      })
    }
    if (currNumItems < maxItems) {
      $(targetElem).find(".ff-sec-repeat-wrapper:last-child").find(".ff-add,.link-divider").removeAttr("style");
      if (!$(targetElem).find(".ff-sec-repeat-wrapper:last-child").find(".ff-remove").is(":visible")) {
        $(targetElem).find(".ff-sec-repeat-wrapper:last-child").find(".link-divider").hide()
      }
    }
    if (currNumItems <= minItems) {
      $(targetElem).find(".ff-sec-repeat-wrapper").find(".ff-remove").hide();
      $(targetElem).find(".ff-sec-repeat-wrapper").find(".link-divider").hide()
    }
  }
  this.AddToRepeatableSection = function AddToRepeatableSection(elemSource, init) {
    var section = $(elemSource).parents(".ff-sec-repeat-wrapper");
    var maxItems = safeInt($(section).parent().data("max"), ff_SectionRepeatMaxCount);
    var minItems = safeInt($(section).parent().data("min"), 1);
    var currNumItems = $(section).parent().find(".ff-sec-repeat-wrapper").size();
    if (maxItems == "" || currNumItems < maxItems) {
      var lastItem = $(section).parent().find(".ff-sec-repeat-wrapper").eq(currNumItems - 1);
      var newItem = $(lastItem).clone().appendTo($(section).parent());
      if ($(newItem).find(".ff-esignature-wrapper").length > 0) {
        clearSignatureCanvas($(newItem).find(".ff-signwrapper.ff-drawn .doc-sign-name"));
        clearSignatureCanvas($(newItem).find(".ff-signwrapper.ff-drawn .doc-sign-date"));
        clearSignatureCanvas($(newItem).find(".ff-signwrapper.ff-typed .doc-sign-name"));
        clearSignatureCanvas($(newItem).find(".ff-signwrapper.ff-typed .doc-sign-date"));
        $(newItem).find(".docsignWrapper .typedSignName").html("");
        $(newItem).find(".docsignWrapper .typedSignDate").html("");
        $(newItem).find(".docsignWrapper .ffsignature").val("");
        $(newItem).find(".docsignWrapper .ffdate").val("")
      }
      if (init === undefined) {
        $(newItem).removeAttr("data-rid");
        $(newItem).removeAttr("data-rval")
      }
      SetRepeatableSectionIDs($(section).parent().find(".ff-sec-repeat-wrapper").last(), currNumItems + 1, false);
      ResetRepeatedSectionItem($(section).parent().find(".ff-sec-repeat-wrapper").last(), false);
      currNumItems++
    }
    if (currNumItems > minItems) {
      $(section).parent().find(".ff-sec-repeat-wrapper").each(function(dindx, ritem) {
        if (minItems < (dindx + 1)) {
          $(ritem).find(".ff-remove").show()
        } else {
          $(ritem).find(".ff-remove").hide()
        }
      })
    }
    InitializeIframe()
  };

  function clearSignatureCanvas(elem) {
    if (elem !== undefined) {
      try {
        $(elem).signaturePad().clearCanvas()
      } catch (err) {}
    }
  }
  this.RemoveFromRepeatableSection = function RemoveFromRepeatableSection(elemSource) {
    var section = $(elemSource).parents(".ff-sec-repeat-wrapper");
    var minItems = safeInt($(section).parent().data("min"), ff_SectionRepeatMinCount);
    var currNumItems = $(section).parent().find(".ff-sec-repeat-wrapper").size();
    var parentElem = $(section).parent();
    if ((minItems == "" || currNumItems > minItems) && currNumItems > 1) {
      $(section).remove();
      $(parentElem).find(".ff-sec-repeat-wrapper").each(function(rindex, repeatElem) {
        SetRepeatableSectionIDs(repeatElem, rindex + 1, true)
      })
    }
    InitializeIframe()
  };

  function getRepeatableSectionFooterHTML(addtext, removetext) {
    return '<div class="ff-item-row rsec-footer-row"><a class="ff-alink ff-remove" onclick="RemoveFromRepeatableSection(this);" href="javascript:" title="' + removetext + '">' + removetext + '</a><span class="link-divider">/</span><a class="ff-alink ff-add" onclick="AddToRepeatableSection(this);" href="javascript:" title="' + addtext + '">' + addtext + "</a></div>"
  }
  this.ReRenderCalendar = function ReRenderCalendar(elem) {
    if ($(elem).attr("vatt") != undefined && ($(elem).attr("vatt").toLowerCase() == "datetime" || $(elem).attr("vatt").toLowerCase() == "date")) {
      RenderCalendar(elem)
    }
  };
  this.ResetRepeatedSectionItem = function ResetRepeatedSectionItem(repeatElem, initialLoad) {
    $(repeatElem).find(".ff-item-row .ff-col-2>input,.ff-item-row .ff-col-2>textarea,.ff-item-row .ff-col-2>select").each(function() {
      var elementVisible = false;
      if ($(this).parent().parent().css("display") != "none") {
        elementVisible = true
      }
      switch ($(this).prop("type")) {
        case "file":
          if ($("#dvFastForms #isDraft").val().toLowerCase() != "true" && isNullOrEmpty($("#dvFastForms #txtUserContentId").val())) {
            clearFileElements(this)
          }
          break;
        case "text":
        case "textbox":
        case "textarea":
          $(this).parent().find(".custom-flex-control-container").remove();
          $(this).parent().find(".select2-container").remove();
          ReRenderCalendar(this);
          initFlexControl(this, false);
          break;
        case "radio":
        case "checkbox":
          break;
        case "select-one":
          $(this).parent().find(".custom-flex-control-container").remove();
          $(this).parent().find(".select2-container").remove();
          initFlexControl(this, false);
          break;
        case "select-multiple":
          $(this).parent().find(".custom-flex-control-container").remove();
          $(this).parent().find(".select2-container").remove();
          initFlexControl(this, false);
          break
      }
    });
    $(repeatElem).find("div[name=FileUploadLabel]").remove();
    if (!initialLoad) {
      if ($(repeatElem).find("div[vatt='CAPTCHA']").length >= 1) {
        var recaptchaSiteKey = $("#recaptchaSiteKey").val();
        $(repeatElem).find(".ff-captcha").each(function(indx, colItem) {
          $(colItem).find('div[vatt="CAPTCHA"]').find(">div").first().remove();
          var cId = $(colItem).find('div[vatt="CAPTCHA"]').attr("id");
          grecaptcha.render(cId, {
            sitekey: recaptchaSiteKey,
            callback: verifyCallback
          })
        })
      }
    }
  };

  function setSignatureElementIdWithIndx(elemSource, elemIndx, prefix) {
    if (!isNullOrEmpty($(elemSource).attr("id"))) {
      var currentAttr = $(elemSource).attr("id").split("__")[0];
      currentAttr = currentAttr.replace(prefix, "");
      $(elemSource).attr("id", prefix + currentAttr + "__" + elemIndx)
    }
  }

  function setSignatureElementNameWithIndx(elemSource, elemIndx, prefix) {
    if (!isNullOrEmpty($(elemSource).attr("name"))) {
      var currentAttr = $(elemSource).attr("name").split("__")[0];
      currentAttr = currentAttr.replace(prefix, "");
      $(elemSource).attr("name", prefix + currentAttr + "__" + elemIndx)
    }
  }

  function assignSignatureElementIds(parentElement, signatureIndex) {
    setSignatureElementIdWithIndx($(parentElement).find(".main-docsign-wrapper"), signatureIndex, "");
    setSignatureElementIdWithIndx($(parentElement).find(">input"), signatureIndex, "");
    setSignatureElementIdWithIndx($(parentElement).find(".main-docsign-wrapper .ff-chkagree input"), signatureIndex, "");
    setSignatureElementIdWithIndx($(parentElement).find(".main-docsign-wrapper .ff-email-verification .ff-col-2 .ff-type-text"), signatureIndex, "");
    $(parentElement).find(".ff-signwrapper").each(function(ind, signElement) {
      var signoptclass = "signT";
      if ($(signElement).hasClass("ff-drawn")) {
        signoptclass = "signD"
      }
      setSignatureElementIdWithIndx($(signElement).find(".docsignWrapper .ffsignature"), signatureIndex, signoptclass);
      setSignatureElementIdWithIndx($(signElement).find(".docsignWrapper .ffdate"), signatureIndex, signoptclass);
      setSignatureElementIdWithIndx($(signElement).find(".docsignWrapper .outputSignedName"), signatureIndex, signoptclass);
      setSignatureElementIdWithIndx($(signElement).find(".docsignWrapper .outputSignedDate"), signatureIndex, signoptclass);
      setSignatureElementNameWithIndx($(signElement).find(".docsignWrapper .ffsignature"), signatureIndex, signoptclass);
      setSignatureElementNameWithIndx($(signElement).find(".docsignWrapper .ffdate"), signatureIndex, signoptclass);
      setSignatureElementNameWithIndx($(signElement).find(".docsignWrapper .outputSignedName"), signatureIndex, signoptclass);
      setSignatureElementNameWithIndx($(signElement).find(".docsignWrapper .outputSignedDate"), signatureIndex, signoptclass)
    })
  }

  function safeInt(intValue, defaultValue) {
    if (!isNaN(parseInt(intValue))) {
      return parseInt(intValue)
    }
    return defaultValue
  }

  function GetHTML(htmlFrame) {
    var submittedData = null;
    if ($("#submittedData").length) {
      submittedData = $("#submittedData").val()
    }($).support.cors = true;
    if (window.XDomainRequest) {
      var xdr = new XDomainRequest();
      if (window.location.protocol == "http:" && htmlFrame.lastIndexOf("https:", 0) === 0) {
        htmlFrame = htmlFrame.replace("https:", "http:")
      }
      xdr.open("post", htmlFrame);
      xdr.onload = function() {
        $("#dvFastForms").html(xdr.responseText);
        InitializeForm();
        InitializeCaptcha()
      };
      xdr.send(submittedData)
    } else {
      if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
        console.log("[GetHTML][IE11-SF][XMLHttpRequest]");
        var oReq = null;
        if (Sarissa && Sarissa.originalXMLHttpRequest) {
          oReq = new Sarissa.originalXMLHttpRequest()
        } else {
          if (window.XMLHttpRequest) {
            oReq = new XMLHttpRequest()
          }
        }
        oReq.open("POST", htmlFrame, true);
        oReq.onreadystatechange = function() {
          if (oReq.readyState == 4 && oReq.status == 200) {
            if (oReq.responseText && oReq.responseText.length > 0) {
              $("#dvFastForms").html(oReq.responseText);
              InitializeForm();
              InitializeCaptcha()
            } else {
              console.log(" Service call exception" + oReq.responseText)
            }
          } else {
            if (oReq.readyState == 4 && oReq.status != 200) {
              console.log(" Service call status:" + oReq.status)
            }
          }
        };
        oReq.send(submittedData)
      } else {
        ($).ajax({
          async: true,
          global: false,
          data: submittedData,
          type: "POST",
          url: htmlFrame,
          tryCount: 0,
          retryLimit: 3,
          context: document.body,
          success: function(responseText) {
            $("#dvFastForms").html(responseText);
            InitializeForm();
            InitializeCaptcha()
          },
          error: function(xhr, textStatus, errorThrown) {
            if (textStatus == "timeout") {
              this.tryCount++;
              if (this.tryCount <= this.retryLimit) {
                ($).ajax(this);
                return
              }
              return
            }
          }
        })
      }
    }
  }

  function HandlePostMessage(e) {
    if (e.originalEvent.origin === baseUrl.replace("/FormEngine/", "")) {
      var data = e.originalEvent.data || e.originalEvent.message;
      var json = $.parseJSON(data);
      switch (json.resultType) {
        case "CheckCaptcha":
          formValid = true;
          ResetValidation();
          ValidateCaptcha(json.resultData);
          ValidateFields(true);
          if (formValid) {
            if ($("#dvFastForms .ff-payment-wrapper").size() > 0 && $("#dvFastForms .ff-creditcard").filter(function() {
                return this.value.length > 0
              }).size() > 0) {
              $("#dvFastForms form#form1").attr("action", baseUrl + "EngineFrame/CheckPayment");
              $("#dvFastForms form#form1").trigger("submit")
            } else {
              $("#ffOverlay").removeClass("ff-overlay-image");
              PostFormData()
            }
          } else {
            $("#ffOverlay").removeClass("ff-overlay-image")
          }
          break;
        case "CheckPayment":
          formValid = true;
          ValidatePayment(json.resultData);
          if (formValid) {
            $("#ffOverlay").removeClass("ff-overlay-image");
            PostFormData()
          } else {
            $("#ffOverlay").removeClass("ff-overlay-image")
          }
          break;
        case "GenerateCaptcha":
          RenderCaptcha(json.resultData);
          break;
        case "FileUpload":
          ValidateFileUploads(json.resultData);
          break;
        case "Lookup":
          PopulateLookup(json);
          break;
        default:
      }
    }
  }
  this.PopulateLookup = function PopulateLookup(json) {
    if (json.selectedId != undefined && json.sourceField != undefined) {
      LogEvent("SELECTED_LOOKUP_VALUE", "");
      $("#dvFastForms #" + json.sourceField.replace(/\./g, "\\.")).val(json.selectedId);
      $("#dvFastForms #input" + json.sourceField.replace(/\./g, "\\.")).val(json.selectedName);
      $("#dvFastForms #" + json.sourceField.replace(/\./g, "\\.")).trigger("change")
    }
  };

  function RemoveFile(file, id) {
    ($).support.cors = true;
    var result = false;
    var removeUrl = baseUrl + "EngineFrame/RemoveFile";
    if (window.location.protocol == "http:" && removeUrl.lastIndexOf("https:", 0) === 0) {
      removeUrl = removeUrl.replace("https:", "http:")
    }
    if (window.XDomainRequest) {
      var xdr = new XDomainRequest();
      xdr.open("POST", removeUrl, true);
      xdr.send("fileName=" + file + "&sessionId=" + id)
    } else {
      if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
        console.log("[RemoveFile][IE11-SF][XMLHttpRequest]");
        var oReq = null;
        if (Sarissa && Sarissa.originalXMLHttpRequest) {
          oReq = new Sarissa.originalXMLHttpRequest()
        } else {
          if (window.XMLHttpRequest) {
            oReq = new XMLHttpRequest()
          }
        }
        oReq.open("POST", removeUrl, true);
        oReq.onreadystatechange = function() {
          if (oReq.readyState == 4 && oReq.status == 200) {
            if (oReq.responseText && oReq.responseText.length > 0) {
              result = oReq.responseText
            } else {
              console.log(" Service call exception" + oReq.responseText)
            }
          } else {
            if (oReq.readyState == 4 && oReq.status != 200) {
              console.log(" Service call status:" + oReq.status)
            }
          }
        };
        oReq.send("fileName=" + file + "&sessionId=" + id)
      } else {
        ($).ajax({
          global: false,
          type: "POST",
          url: removeUrl,
          crossDomain: true,
          data: "fileName=" + file + "&sessionId=" + id,
          dataType: "text",
          processData: false,
          tryCount: 0,
          retryLimit: 3,
          success: function(responseText) {
            result = responseText
          },
          error: function(xhr, textStatus, errorThrown) {
            if (textStatus == "timeout") {
              this.tryCount++;
              if (this.tryCount <= this.retryLimit) {
                ($).ajax(this);
                return
              }
              return
            }
          }
        });
        return result
      }
    }
  }

  function CheckFileUploadLimits(area) {
    var maxUploads = $(area).data("maxfiles");
    var currentNumUploads = $(area).find("[id$='_Label']").length;
    if (currentNumUploads >= maxUploads) {
      $(area).find("[id$='_Select']").hide()
    } else {
      $(area).find("[id$='_Select']").show()
    }
  }
  this.ValidateFileUploads = function ValidateFileUploads(json) {
    ResetValidation();
    var fileArea;
    var uploadSucceeded = false;
    $.each(json.results, function(index, value) {
      var fileElement = $("#dvFastForms #" + value.elementID);
      fileArea = $(fileElement).closest(".ff-fileupload-drop-area");
      var numFiles = $(fileArea).find("[id$='_Label']").length;
      if (value.message == "Success") {
        var fileExtension = value.fileName.substring(value.fileName.lastIndexOf("."));
        var allowedFileTypes = "";
        if ($(fileArea).data("allowedfiletypes") != null) {
          allowedFileTypes = $(fileArea).data("allowedfiletypes")
        }
        if (allowedFileTypes != "" && $.inArray(fileExtension, allowedFileTypes.split(",")) == -1) {
          ShowValidationMessage(fileArea, "FILETYPE", allowedFileTypes);
          RemoveFile(value.fileName, $("#dvFastForms #txtSessionID").val())
        } else {
          fileArea.prepend('<div name="FileUploadLabel" id="' + value.elementID + numFiles + '_Label"><a title="Remove" href="" id="' + value.elementID + numFiles + '_Remove"><img src="' + baseUrl + 'Styles/images/remove.png" title="Remove" border="0" /></a>&nbsp;<label style="font-weight:bold">' + value.fileName + "</label></div>");
          $("#" + value.elementID + numFiles + "_Remove").click(function(event) {
            event.preventDefault();
            RemoveFile(value.fileName, $("#dvFastForms #txtSessionID").val());
            $("#" + value.elementID + numFiles + "_Label").remove();
            CheckFileUploadLimits(fileArea);
            return false
          });
          uploadSucceeded = true;
          CheckFileUploadLimits(fileArea);
          fileElement.replaceWith(fileElement = fileElement.val("").clone(true))
        }
      } else {
        if (value.message == "MaxSizeExceeded") {
          ShowValidationMessage(fileArea, "FILESIZE")
        } else {
          if (value.message == "MaxRequestLengthExceeded") {
            ShowValidationMessage(fileArea, "FILESIZE", "", true)
          }
        }
      }
    })
  };

  function InitializeFileUpload() {
    $("#dvFastForms .ff-fileupload-drop-area").each(function() {
      var fileArea = $(this);
      var fileUpload = $(this).find(":file");
      if (isOlderBrowser()) {
        $(fileUpload).change(function(event) {
          VALog("[InitializeFileUpload][IE8][change]");
          $("#ffOverlay").addClass("ff-overlay-image");
          $("#dvFastForms form#form1").attr("action", baseUrl + "EngineFrame/UploadFile");
          $("#dvFastForms form#form1").trigger("submit")
        })
      } else {
        $(fileUpload).fileupload({});
        $(fileUpload).fileupload({
          url: baseUrl + "/EngineFrame/UploadFile",
          autoUpload: true,
          xhr: function() {
            var pXHR = null;
            if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
              console.log("[InitializeFileUpload][IE11-SF][xhr]");
              if (Sarissa && Sarissa.originalXMLHttpRequest) {
                pXHR = new Sarissa.originalXMLHttpRequest()
              } else {
                if (window.XMLHttpRequest) {
                  pXHR = new XMLHttpRequest()
                }
              }
            } else {
              pXHR = $.ajaxSettings.xhr()
            }
            return pXHR
          },
          dataType: "json",
          add: function(e, data) {
            VALog("[InitializeFileUpload][Add]");
            ResetValidation();
            var fileSize = data.originalFiles[0]["size"];
            var allowedFileTypes = $(fileArea).data("allowedfiletypes");
            var fileName = data.originalFiles[0]["name"];
            var fileExtension = "";
            if (fileName != null && fileName.indexOf(".") > -1) {
              fileExtension = fileName.substring(fileName.lastIndexOf("."))
            }
            if (fileSize != null && fileSize > maxFileSize) {
              ShowValidationMessage(fileArea, "FILESIZE")
            } else {
              if (allowedFileTypes != "" && allowedFileTypes != null && $.inArray(fileExtension, allowedFileTypes.split(",")) == -1) {
                ShowValidationMessage(fileArea, "FILETYPE", allowedFileTypes)
              } else {
                jqXHRData = data;
                jqXHRData.submit()
              }
            }
          },
          done: function(event, data) {
            VALog("[InitializeFileUpload][Done]");
            var json = $.parseJSON(data.result);
            ValidateFileUploads(json)
          },
          fail: function(event, data) {
            VALog("[InitializeFileUpload][fail]")
          }
        })
      }
    })
  }

  function LoadCaptcha(cnt) {
    var captchaUrl = baseUrl + "EngineFrame/GenerateCaptcha";
    if (window.XDomainRequest) {
      VALog("[LoadCaptcha][IE][XDomainRequest]");
      var xdr = new XDomainRequest();
      xdr.open("POST", captchaUrl, true);
      xdr.onload = function() {
        VALog("[LoadCaptcha][IE][XDomainRequest]");
        var json = $.parseJSON(xdr.responseText);
        RenderCaptcha(json)
      };
      xdr.send("captchaCnt=" + cnt)
    } else {
      if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
        VALog("[LoadCaptcha][IE11-SF][XMLHttpRequest]");
        var oReq = null;
        if (Sarissa && Sarissa.originalXMLHttpRequest) {
          oReq = new Sarissa.originalXMLHttpRequest()
        } else {
          if (window.XMLHttpRequest) {
            oReq = new XMLHttpRequest()
          }
        }
        oReq.open("POST", captchaUrl, true);
        oReq.onreadystatechange = function() {
          if (oReq.readyState == 4 && oReq.status == 200) {
            if (oReq.responseText && oReq.responseText.length > 0) {
              VALog("[LoadCaptcha][IE11-SF][XMLHttpRequest][Result]");
              var json = $.parseJSON(oReq.responseText);
              json = $.parseJSON(json);
              RenderCaptcha(json)
            } else {
              VALog("Service call exception" + oReq.responseText)
            }
          } else {
            if (oReq.readyState == 4 && oReq.status != 200) {
              VALog("Service call status:" + oReq.status)
            }
          }
        };
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("captchaCnt=" + cnt)
      } else {
        ($).ajax({
          global: false,
          type: "POST",
          url: captchaUrl,
          crossDomain: true,
          data: "captchaCnt=" + cnt,
          dataType: "json",
          cache: false,
          success: function(data) {
            var json = $.parseJSON(data);
            RenderCaptcha(json)
          },
          error: function(data) {}
        })
      }
    }
  }

  function RenderCaptcha(json) {
    var i = 0;
    $('#dvFastForms div[name="Captcha"]').each(function() {
      var id = $(this).attr("id");
      captchaID = json[i].captchaID;
      image = json[i].image;
      $("#lbl" + id).attr("for", captchaID + "_Captcha");
      $("#" + id + "_Wrapper").remove();
      $(this).append('<div id="' + id + '_Wrapper" name="' + id + '_Wrapper"><img id="' + id + '_Image" alt="Captcha image" src="data:image/png;base64,' + image + '" /><br /><input type="text" class="ff-input-type ff-type-text" name="' + captchaID + '_Captcha" data-captchaid="' + captchaID + '" data-isrequired="true" id="' + captchaID + '_Captcha" /></div>');
      i++
    });
    InitializeIframe()
  }

  function InitializeCaptcha() {
    var captchaCnt = $('#dvFastForms div[name="Captcha"]').length;
    if (captchaCnt > 0) {
      if (isOlderBrowser()) {
        $("#dvFastForms #captchaCnt").remove();
        $("#dvFastForms form#form1").prepend('<INPUT name="captchaCnt" id="captchaCnt" type=hidden value="' + captchaCnt + '" />');
        $("#dvFastForms form#form1").attr("action", baseUrl + "EngineFrame/GenerateCaptcha");
        $("#dvFastForms form#form1").trigger("submit")
      } else {
        LoadCaptcha(captchaCnt)
      }
    }
  }

  function SendCaptchaToServer() {
    if ($("#dvFastForms .ff-captcha").size() > 0) {
      ($).support.cors = true;
      var result = false;
      var validateUrl = baseUrl + "EngineFrame/CheckCaptcha";
      var formData = GenerateFormData(false);
      if (window.XDomainRequest) {
        console.log("[SendCaptchaToServer][IE][XDomainRequest]");
        var xdr = new XDomainRequest();
        xdr.open("POST", validateUrl, true);
        xdr.onload = function() {
          result = xdr.responseText;
          ValidateCaptcha(result);
          if (formValid) {
            SendPaymentToServer()
          }
        };
        xdr.send(formData)
      } else {
        if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
          console.log("[SendCaptchaToServer][IE11-SF][XMLHttpRequest]");
          var oReq = null;
          if (Sarissa && Sarissa.originalXMLHttpRequest) {
            oReq = new Sarissa.originalXMLHttpRequest()
          } else {
            if (window.XMLHttpRequest) {
              oReq = new XMLHttpRequest()
            }
          }
          oReq.open("POST", validateUrl, true);
          oReq.onreadystatechange = function() {
            if (oReq.readyState == 4 && oReq.status == 200) {
              if (oReq.responseText && oReq.responseText.length > 0) {
                result = oReq.responseText;
                console.log("[SendCaptchaToServer][IE11-SF][XMLHttpRequest][result]");
                console.log(result);
                var json = $.parseJSON(result);
                ValidateCaptcha(json);
                if (formValid) {
                  SendPaymentToServer()
                }
              } else {
                console.log(" Service call exception" + oReq.responseText)
              }
            } else {
              if (oReq.readyState == 4 && oReq.status != 200) {
                console.log(" Service call status:" + oReq.status)
              }
            }
          };
          oReq.send(formData)
        } else {
          ($).ajax({
            global: false,
            type: "POST",
            crossDomain: true,
            async: true,
            url: validateUrl,
            data: formData,
            dataType: "json",
            processData: false,
            tryCount: 0,
            retryLimit: 3,
            success: function(responseText) {
              result = responseText;
              ValidateCaptcha(result);
              if (formValid) {
                SendPaymentToServer()
              }
            },
            error: function(xhr, textStatus, errorThrown) {
              $("#dvFastForms #btnsubmit").prop("disabled", false);
              if (textStatus == "timeout") {
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                  ($).ajax(this);
                  return
                }
                return
              }
              if (xhr.status == 500) {} else {}
            }
          })
        }
      }
    } else {
      SendPaymentToServer()
    }
  }

  function UnloadWarning() {
    if (enableUnloadWarning) {
      return ffPrompt_PaymentInProcessWarning
    } else {
      return
    }
  }

  function stripeResponseHandler(status, response) {
    $("#lblFFPAYMENT" + currentPaymentID).find(".ff-creditcard").removeAttr("data-stripe");
    $("#lblFFPAYMENT" + currentPaymentID).find(".ff-cvv").removeAttr("data-stripe");
    $("#lblFFPAYMENT" + currentPaymentID).find(".ff-mm").removeAttr("data-stripe");
    $("#lblFFPAYMENT" + currentPaymentID).find(".ff-yyyy").removeAttr("data-stripe");
    if (response.error) {
      FFShowGeneralError(response.error.message);
      $("#dvFastForms #btnsubmit").prop("disabled", false)
    } else {
      var token = response.id;
      $("#lblFFPAYMENT" + currentPaymentID).append($('<input type="hidden" id="FFPaymentToken' + currentPaymentID + '" name="FFPaymentToken' + currentPaymentID + '">').val(token));
      SendPaymentToServer()
    }
  }
  this.enableUnloadWarning = false;
  this.currentPaymentID = "";

  function SendPaymentToServer() {
    if ($("#dvFastForms .ff-payment-wrapper").size() > 0 && $("#dvFastForms .ff-creditcard").filter(function() {
        return this.value.length > 0
      }).size() > 0) {
      var paymentReady = false;
      if ($("#dvFastForms #paymentType").val().toLowerCase() == "stripe") {
        $("#dvFastForms .ff-payment-wrapper").each(function() {
          if ($(this).data("apikey") != null && $(this).data("apikey") != "" && $(this).find(".ff-creditcard").filter(function() {
              return this.value.length > 0
            }).size() > 0) {
            $(this).find(".ff-creditcard").attr("data-stripe", "number");
            $(this).find(".ff-cvv").attr("data-stripe", "cvc");
            $(this).find(".ff-mm").attr("data-stripe", "exp_month");
            $(this).find(".ff-yyyy").attr("data-stripe", "exp_year");
            currentPaymentID = $(this).attr("id").replace("lblFFPAYMENT", "");
            var token = $("#FFPaymentToken" + currentPaymentID);
            if ($("#FFPaymentToken" + currentPaymentID).length) {
              paymentReady = true
            } else {
              var apiKey = $(this).data("apikey");
              Stripe.setPublishableKey(apiKey);
              var $form = $("#form1");
              Stripe.card.createToken($form, stripeResponseHandler);
              paymentReady = false;
              return false
            }
          }
        })
      } else {
        paymentReady = true
      }
      if (paymentReady) {
        enableUnloadWarning = true;
        while (!paymentReady) {
          ($).support.cors = true
        }
        var result = false;
        var validateUrl = baseUrl + "EngineFrame/CheckPayment";
        var formData = GenerateFormData(false);
        if (window.XDomainRequest) {
          console.log("[SendPaymentToServer][IE][XDomainRequest]");
          var xdr = new XDomainRequest();
          xdr.open("POST", validateUrl, true);
          xdr.onload = function() {
            $("#FFPaymentToken" + currentPaymentID).remove();
            enableUnloadWarning = false;
            result = xdr.responseText;
            ValidatePayment(result);
            if (formValid) {
              ResetSaveDraft();
              PostFormData()
            }
          };
          xdr.send(formData)
        } else {
          if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
            VALog("[SendPaymentToServer][IE11-SF][XMLHttpRequest]");
            var oReq = null;
            if (Sarissa && Sarissa.originalXMLHttpRequest) {
              oReq = new Sarissa.originalXMLHttpRequest()
            } else {
              if (window.XMLHttpRequest) {
                oReq = new XMLHttpRequest()
              }
            }
            oReq.open("POST", validateUrl, true);
            oReq.onreadystatechange = function() {
              if (oReq.readyState == 4 && oReq.status == 200) {
                if (oReq.responseText && oReq.responseText.length > 0) {
                  VALog("[SendPaymentToServer][IE11-SF][XMLHttpRequest][result]");
                  $("#FFPaymentToken" + currentPaymentID).remove();
                  enableUnloadWarning = false;
                  result = oReq.responseText;
                  var json = $.parseJSON(result);
                  ValidatePayment(json);
                  if (formValid) {
                    ResetSaveDraft();
                    PostFormData()
                  }
                } else {
                  console.log(" Service call exception" + oReq.responseText)
                }
              } else {
                if (oReq.readyState == 4 && oReq.status != 200) {
                  console.log(" Service call status:" + oReq.status)
                }
              }
            };
            oReq.send(formData)
          } else {
            ($).ajax({
              type: "POST",
              crossDomain: true,
              async: true,
              url: validateUrl,
              data: formData,
              dataType: "json",
              processData: false,
              tryCount: 0,
              retryLimit: 3,
              success: function(responseText) {
                $("#FFPaymentToken" + currentPaymentID).remove();
                enableUnloadWarning = false;
                result = responseText;
                ValidatePayment(result);
                if (formValid) {
                  ResetSaveDraft();
                  PostFormData()
                }
              },
              error: function(xhr, textStatus, errorThrown) {
                $("#FFPaymentToken" + currentPaymentID).remove();
                enableUnloadWarning = false;
                $("#dvFastForms #btnsubmit").prop("disabled", false);
                if (textStatus == "timeout") {
                  this.tryCount++;
                  if (this.tryCount <= this.retryLimit) {
                    ($).ajax(this);
                    return
                  }
                  return
                }
              }
            })
          }
        }
      }
    } else {
      ResetSaveDraft();
      PostFormData()
    }
  }

  function ResetSaveDraft() {
    $("#dvFastForms #isDraft").val("False");
    $("#dvFastForms #draftSaved").val("False");
    $("#dvFastForms #btndiscard").hide();
    if ($("#submitRules").length) {
      eval("evaluateRules([" + $("#submitRules").val() + "]);")
    }
  }
  this.UpdatePaymentAmount = function UpdatePaymentAmount(sourceVal, targetElem) {
    if ($("#" + targetElem).length > 0) {
      if (sourceVal != null && sourceVal != "") {
        if (targetElem.lastIndexOf("FFTaxes", 0) === 0) {
          var amountVal = ToAmount($("#" + targetElem.replace("Taxes", "Amount")).text());
          var taxVal = ToAmount(sourceVal);
          if ($.isNumeric(amountVal) && $.isNumeric(taxVal)) {
            $("#" + targetElem).text(ToAmount(amountVal * (taxVal / 100)))
          } else {
            $("#" + targetElem).text("0.00")
          }
        } else {
          $("#" + targetElem).text(ToAmount(sourceVal).toFixed(2))
        }
      } else {
        $("#" + targetElem).text("0.00")
      }
    }
    UpdatePaymentTotals()
  };
  this.UpdatePaymentTotals = function UpdatePaymentTotals() {
    $("#dvFastForms .ff-creditcard").each(function() {
      var fieldNum = $(this).attr("id").replace("FFCreditCard", "");
      var shippingAmount = ToAmount($("#FFShipping" + fieldNum).text());
      var taxesAmount = ToAmount($("#FFTaxes" + fieldNum).text());
      var initialAmount = ToAmount($("#FFRecurringFee" + fieldNum).text());
      var amount = ToAmount($("#FFAmount" + fieldNum).text());
      var subtotalAmount = ToAmount($("#FFSubTotalAmount" + fieldNum).text());
      var taxVal = ToAmount($("#FFTaxes" + fieldNum).data("taxes"));
      if (taxVal > 0) {
        var taxVal = ToAmount(amount * (taxVal / 100));
        taxesAmount = (isNaN(taxVal) ? 0 : taxVal);
        $("#FFTaxes" + fieldNum).text(taxesAmount.toFixed(2))
      }
      var subtotalAmount = ToAmount(ToAmount(amount, 2) + ToAmount(shippingAmount, 2) + ToAmount(taxesAmount, 2), 2).toFixed(2);
      var totalAmount = ToAmount(ToAmount(amount, 2) + ToAmount(shippingAmount, 2) + ToAmount(taxesAmount, 2) + ToAmount(initialAmount, 2)).toFixed(2);
      $("#FFSubTotalAmount" + fieldNum).text((isNaN(subtotalAmount) ? ToAmount(0, 2) : subtotalAmount));
      $("#FFTotalAmount" + fieldNum).text((isNaN(totalAmount) ? ToAmount(0, 2).toFixed(2) : totalAmount))
    })
  };
  this.EvaluatePaymentAmount = function EvaluatePaymentAmount(type, fieldNum, formula) {
    var jsFormula = replaceAll("IF(", "FFIf(", formula);
    jsFormula = replaceAll("if(", "FFIf(", jsFormula);
    jsFormula = replaceAll('["', 'ToAmount(GetPaymentAmount("', jsFormula);
    jsFormula = replaceAll("].amount", "," + fieldNum + "))", jsFormula);
    jsFormula = replaceAll("].val", "))", jsFormula);
    jsFormula = replaceAll("=", "==", jsFormula);
    jsFormula = "ToAmount(" + jsFormula + ")";
    switch (type) {
      case "SUBTOTAL":
        var totalField = $("#dvFastForms #FFAmount" + fieldNum);
        break;
      case "SHIPPING":
        var totalField = $("#dvFastForms #FFShipping" + fieldNum);
        break;
      case "TAXES":
        var totalField = $("#dvFastForms #FFTaxes" + fieldNum);
        break;
      case "INITIALAMOUNT":
        var totalField = $("#dvFastForms #FFRecurringFee" + fieldNum);
        break
    }
    var F = new Function("return " + jsFormula);
    var total = F();
    if (type == "TAXES") {
      $(totalField).text(ToAmount($("#dvFastForms #FFAmount" + fieldNum, 2).text() * (ToAmount(total, 2) / 100)));
      var taxPctLabel = $("#dvFastForms #lblFFPAYMENT" + fieldNum).find(".ff-tax-percentage");
      if (taxPctLabel != undefined && parseFloat(total) > 0) {
        $(taxPctLabel).text(" (" + ToAmount(total, 2) + "%)");
        $(totalField).data("taxes", ToAmount(total, 1))
      } else {
        $(taxPctLabel).text("");
        $(totalField).data("taxes", "0.00")
      }
    } else {
      $(totalField).text((isNaN(total) ? ToAmount(0, 2) : total.toFixed(2)))
    }
    UpdatePaymentTotals()
  };
  this.GetPaymentAmount = function GetPaymentAmount(elemId, fieldNum) {
    var elem = $("#" + elemId);
    if (fieldNum == null) {
      if ($(elem).prop("tagName") == "SELECT" && $(elem).attr("multiple") != "undefined") {
        var sum = 0;
        var strResult = "";
        $("option:selected", elem).each(function() {
          if ($.isNumeric($(this).val())) {
            sum += ToAmount($(this).val())
          } else {
            strResult += $(this).val()
          }
        });
        if (strResult != "") {
          return strResult
        } else {
          return ToAmount(sum)
        }
      } else {
        var elemVal = $(elem).val();
        return ($.isNumeric(elemVal) ? ToAmount(elemVal) : elemVal)
      }
    } else {
      if ($(elem).prop("tagName") == "SELECT" && $(elem).attr("multiple") == "undefined") {
        return ToAmount($("option:selected", elem).data("amount-" + fieldNum), 2)
      } else {
        if ($(elem).prop("tagName") == "SELECT" && $(elem).attr("multiple") != "undefined") {
          var sum = 0;
          $("option:selected", elem).each(function() {
            sum += ToAmount($(this).data("amount-" + fieldNum))
          });
          return ToAmount(sum)
        } else {
          if ($(elem).attr("vatt") == "BOOLEAN" && $(elem).is(":checked")) {
            return ToAmount($(elem).data("true-amount" + fieldNum), 2)
          } else {
            if ($(elem).attr("vatt") == "BOOLEAN" && !$(elem).is(":checked")) {
              return ToAmount($(elem).data("false-amount" + fieldNum), 2)
            } else {
              return ToAmount($(elem).data("amount-" + fieldNum))
            }
          }
        }
      }
    }
  };
  Number.prototype.round = function(p) {
    p = p || 10;
    return parseFloat(this.toFixed(p))
  };
  this.GetValue = function GetValue(itm) {
    if (itm != undefined) {
      var val = itm;
      if (jQuery.type(itm) == "array") {
        val = 0;
        for (var i = 0; i < itm.length; i++) {
          val += ToAmount(itm[i])
        }
      }
      return ToAmount(val)
    } else {
      return 0
    }
  };
  this.GetElem = function GetElem(elem) {
    if ($(elem).prop("tagName") == "SELECT") {
      return $("option:selected", elem)
    } else {
      return elem
    }
  };
  this.ToAmount = function ToAmount(itm, places) {
    if ($.isNumeric(itm)) {
      return parseFloat(itm).round(places)
    } else {
      if (itm == undefined) {
        return parseFloat(0).round(places)
      } else {
        return itm
      }
    }
  };
  this.escapeRegExp = function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
  };
  this.replaceAll = function replaceAll(find, replace, str) {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace)
  };

  function ValidateCaptcha(json) {
    for (var i = 0; i < json.length; i++) {
      if (!json[i].isValid) {
        var elem = $("#dvFastForms #" + json[i].captchaID + "_Captcha");
        ShowValidationMessage($(elem).parent().parent(), "CAPTCHA");
        $("#dvFastForms #btnsubmit").prop("disabled", false);
        InitializeCaptcha();
        formValid = false
      }
    }
  }

  function ValidatePayment(json) {
    for (var i = 0; i < json.length; i++) {
      var elem = $("#dvFastForms #lbl" + json[i].paymentFieldId);
      if (!json[i].success) {
        var errorMsg = json[i].errorMessage;
        if (!isNullOrEmpty(errorMsg) && errorMsg == "INVALID_COUNTRY") {
          errorMsg = ffPaymentError_InvalidCountry
        }
        if (json[i].errorSource !== undefined && json[i].errorSource == "FastForms") {
          elem = $("#dvFastForms #" + json[i].paymentFieldId.replace(/\./g, "\\."));
          ShowValidationMessage($(elem), "GENERAL", errorMsg)
        } else {
          ShowValidationMessage($(elem), "PAYMENT", errorMsg)
        }
        formValid = false;
        $("#dvFastForms #btnsubmit").prop("disabled", false)
      } else {
        if (json[i].transactionIdField != "" && json[i].transactionIdField != null) {
          var transIdElem = $("#dvFastForms #" + json[i].transactionIdField.replace(/\./g, "\\."));
          if (transIdElem.length > 0) {
            $(transIdElem).val(json[i].transactionIdValue)
          }
        }
        if (json[i].totalAmountField != "" && json[i].totalAmountField != null) {
          var totalAmountElem = $("#dvFastForms #" + json[i].totalAmountField.replace(/\./g, "\\."));
          if (totalAmountElem.length > 0) {
            $(totalAmountElem).val(json[i].totalAmountValue)
          }
        }
      }
    }
  }

  function LogEvent(eventName, details) {
    ($).support.cors = true;
    var result = false;
    var logUrl = baseUrl + "EngineFrame/LogEvent";
    if (window.location.protocol == "http:" && logUrl.lastIndexOf("https:", 0) === 0) {
      logUrl = logUrl.replace("https:", "http:")
    }
    if (window.XDomainRequest) {
      var xdr = new XDomainRequest();
      xdr.open("POST", logUrl, true);
      xdr.send("orgId=" + $("#dvFastForms #txtOrgId").val() + "&sessionId=" + $("#dvFastForms #txtSessionID").val() + "&eventName=" + encodeURIComponent(eventName) + "&details=" + encodeURIComponent(details))
    } else {
      if (("ActiveXObject" in window) && window.XMLHttpRequest && (typeof(Sarissa) !== "undefined")) {
        console.log("[LogEvent][IE11-SF][XMLHttpRequest]");
        var oReq = null;
        if (Sarissa && Sarissa.originalXMLHttpRequest) {
          oReq = new Sarissa.originalXMLHttpRequest()
        } else {
          if (window.XMLHttpRequest) {
            oReq = new XMLHttpRequest()
          }
        }
        oReq.open("POST", logUrl, true);
        oReq.send("orgId=" + $("#dvFastForms #txtOrgId").val() + "&sessionId=" + $("#dvFastForms #txtSessionID").val() + "&eventName=" + encodeURIComponent(eventName) + "&details=" + encodeURIComponent(details))
      } else {
        ($).ajax({
          global: false,
          async: true,
          type: "POST",
          url: logUrl,
          crossDomain: true,
          data: "orgId=" + $("#dvFastForms #txtOrgId").val() + "&sessionId=" + $("#dvFastForms #txtSessionID").val() + "&eventName=" + encodeURIComponent(eventName) + "&details=" + encodeURIComponent(details),
          dataType: "text",
          processData: false,
          tryCount: 0,
          retryLimit: 3
        })
      }
    }
  }

  function isOlderBrowser() {
    var browser = ($("#browser").attr("class"));
    return (browser == "ie6" || browser == "ie7" || browser == "ie8" || browser == "ie9")
  }

  function RedirectToUrl(url) {
    var target = window;
    if (inIframe()) {
      target = parent.window
    }
    if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
      target.location.href = url
    } else {
      target.location.href = "http://" + url
    }
  }

  function GetName(elem) {
    var name = elem.attr("name");
    if (name == undefined || name == null) {
      name = elem.attr("id")
    }
    if (name == undefined || name == null) {
      name = elem.attr("class")
    }
    return name
  }

  function AddToArray(arr, name, val) {
    var i = arr.length;
    arr[i] = [];
    arr[i][0] = name;
    arr[i][1] = val
  }

  function GetParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
  }

  function LoadCSS(href) {
    var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
    $("head").prepend(cssLink)
  }

  function LoadJS(src) {
    var jsLink = $("<script type='text/javascript' src='" + src + "'>");
    $("head").append(jsLink)
  }

  function getEmbedCodeParams() {
    var embedCodeParamArray = {};
    var embedCodeQueryString = $("#jsFastForms").attr("src").split("?");
    if (embedCodeQueryString.length == 2) {
      var itemArr = embedCodeQueryString[1].split("&");
      for (i = 0; i < itemArr.length; i++) {
        var qArr = itemArr[i].split("=");
        embedCodeParamArray[qArr[0]] = decodeURIComponent(qArr[1])
      }
    }
    return embedCodeParamArray
  }

  function inIframe() {
    try {
      return window.self !== window.top
    } catch (e) {
      return true
    }
  }
  var vActiveLog = true;

  function VALog(pDescription) {
    if (vActiveLog) {
      console.log(pDescription)
    }
  }

  function Main() {
    $(document).ready(function($) {
      window.onbeforeunload = UnloadWarning;
      LoadCSS(CDNResourceRoot + "styles/jquery-ui.css");
      LoadCSS(CDNResourceRoot + "styles/jquery-ui-timepicker-addon.css");
      LoadCSS(CDNResourceRoot + "styles/select2.css");
      LoadCSS(CDNResourceRoot + "styles/ui.jqgrid.css");
      var htmlFrame = baseUrl + "EngineFrame/Index";
      var pageQueryString = location.search.replace("?", "");
      var embedCodeParamArray = getEmbedCodeParams();
      Object.size = function(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            size++
          }
        }
        return size
      };
      if (embedCodeParamArray.d != undefined && embedCodeParamArray.d != "") {
        var url = htmlFrame + "?d=" + encodeURIComponent(embedCodeParamArray.d);
        if (embedCodeParamArray.dp != undefined && embedCodeParamArray.dp != "") {
          url += "&dp=" + encodeURIComponent(embedCodeParamArray.dp)
        }
        if (embedCodeParamArray.ucId != undefined && embedCodeParamArray.ucId != "") {
          url += "&ucId=" + encodeURIComponent(embedCodeParamArray.ucId)
        }
        if (embedCodeParamArray.ft != undefined && embedCodeParamArray.ft != "") {
          url += "&ft=" + encodeURIComponent(embedCodeParamArray.ft)
        }
        if (embedCodeParamArray.iu != undefined && embedCodeParamArray.iu != "") {
          url += "&iu=" + encodeURIComponent(embedCodeParamArray.iu)
        }
        if (embedCodeParamArray.cut != undefined && embedCodeParamArray.cut != "") {
          url += "&cut=" + encodeURIComponent(embedCodeParamArray.cut)
        }
        if (embedCodeParamArray.cid != undefined && embedCodeParamArray.cid != "") {
          url += "&cid=" + encodeURIComponent(embedCodeParamArray.cid)
        }
        if (embedCodeParamArray.ctype != undefined && embedCodeParamArray.ctype != "") {
          url += "&ctype=" + encodeURIComponent(embedCodeParamArray.ctype)
        }
        url += location.search.replace("?", "&");
        GetHTML(url)
      } else {
        InitializeForm();
        InitializeCaptcha()
      }
    })
  }
})(jQuery);
