"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[782],{386:function(t,e,n){n.d(e,{IQ:function(){return v},Jh:function(){return d},YJ:function(){return p},e2:function(){return i},qH:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(u().mark((function t(e){var n,r,a,i,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,r={query:e,language:"en-US",page:n},t.next=4,c.Z.get("/search/movie",{params:r});case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"2b15838aeeca2717c2311fc28fc79239"}},854:function(t,e,n){n(791);var r=n(691),a=n(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.Nx,{width:"200",color:"#4fa94d",timeout:"1000"})})}},76:function(t,e,n){n.d(e,{Z:function(){return i}});n(791);var r=n(689),a=n(87),u="Movie_movies_list__QTeWc",c=n(184),i=function(t){var e=t.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{className:u,children:e.map((function(t){var e=t.original_title,r=t.id;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:n},children:e})},r)}))})}},782:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(76),s=n(791),o=n(386),f=n(596),p=n(854),h="GetTrending_trending_container__hSEeH",v=n(184),l=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],l=(0,s.useState)(""),d=(0,a.Z)(l,2),m=d[0],x=d[1],g=(0,s.useState)(!0),w=(0,a.Z)(g,2),Z=w[0],_=w[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(""),t.prev=1,t.next=4,(0,o.e2)();case 4:e=t.sent,u(e.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),x("There is something wrong in your action");case 11:return t.prev=11,_(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,s.useEffect)((function(){m&&f.Am.error(m)}),[m]),(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("h1",{children:"Tranding today"}),n.length>0&&(0,v.jsx)(i.Z,{movies:n}),Z&&(0,v.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=782.547feebd.chunk.js.map