"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[221],{6221:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(885),a=n(2791),u=n(501),c=n(6871),i=n(171),o=n(184);function s(){var t,e=(0,a.useState)([]),n=(0,r.Z)(e,2),s=n[0],p=n[1],f=(0,u.lr)(),h=(0,r.Z)(f,2),l=h[0],m=h[1],d=null!==(t=l.get("movieName"))&&void 0!==t?t:"",v=(0,c.TH)();(0,a.useEffect)((function(){""!==d&&(0,i.qF)(d).then((function(t){p(t.results)}))}),[d]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.movieName.value;""!==e.trim()&&(m({movieName:e}),t.target.reset())},children:[(0,o.jsx)("input",{type:"text",name:"movieName",placeholder:"Search movies"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),(0,o.jsx)("ul",{children:s.map((function(t){var e=t.title,n=t.id;return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"".concat(n),state:{from:v},children:e})},n)}))})]})}},171:function(t,e,n){n.d(e,{Hg:function(){return s},TP:function(){return l},qF:function(){return f},tx:function(){return g},zv:function(){return d}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c),o="0eaaf2516690b5ff52877c678f040000";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=221.1e32b262.chunk.js.map