"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[451],{4451:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),a=e(2791),u=e(171),c=e(6871),i=e(501),o=e(184);function s(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];(0,a.useEffect)((function(){(0,u.Hg)().then((function(t){s(t.results)}))}),[]);var p=(0,c.TH)();return(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:e.map((function(t){var n=t.title,e=t.id;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:p},children:n})},e)}))})]})}},171:function(t,n,e){e.d(n,{Hg:function(){return s},TP:function(){return d},qF:function(){return f},tx:function(){return m},zv:function(){return g}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c),o="0eaaf2516690b5ff52877c678f040000";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=451.70074043.chunk.js.map