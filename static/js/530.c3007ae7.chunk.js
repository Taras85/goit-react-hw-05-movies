"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[530],{386:function(e,t,n){n.d(t,{IQ:function(){return v},Jh:function(){return d},YJ:function(){return p},e2:function(){return c},qH:function(){return o}});var r=n(861),a=n(757),u=n.n(a),s=n(243);function c(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/week");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(u().mark((function e(t){var n,r,a,c,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,r={query:t,language:"en-US",page:n},e.next=4,s.Z.get("/search/movie",{params:r});case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"2b15838aeeca2717c2311fc28fc79239"}},76:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var r=n(689),a=n(87),u="Movie_movies_list__QTeWc",s="Movie_movies_link__GdugY",c=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{className:u,children:t.map((function(e){var t=e.original_title,r=e.id;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:n},className:s,children:t})},r)}))})}},530:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(386),i=n(474),o=n(76),f=n(791),p=n(87),l=n(596),v="Movies_movies_container__BoUga",h=n(184),d=function(){var e=(0,f.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,f.useState)(!1),m=(0,a.Z)(d,2),x=m[0],g=m[1],_=(0,f.useState)(""),Z=(0,a.Z)(_,2),w=Z[0],y=Z[1],b=(0,p.lr)(),k=(0,a.Z)(b,1)[0],j=(0,p.lr)(),S=(0,a.Z)(j,2)[1],q=k.get("q");return(0,f.useEffect)((function(){if(q){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(""),g(!0),e.prev=2,e.next=5,(0,c.qH)(q);case 5:t=e.sent,u(t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),y("There is something wrong in your action"),console.log(e.t0);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[q]),(0,f.useEffect)((function(){w&&l.Am.error(w)}),[w]),(0,h.jsxs)("section",{className:v,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"SEARCH MOVIE"}),(0,h.jsx)("form",{onSubmit:function(e){e.preventDefault(),S({q:e.target.elements.query.value})},children:(0,h.jsxs)("label",{children:[(0,h.jsx)("input",{type:"text",name:"query",autoFocus:!0,placeholder:"Search movies...",defaultValue:q}),(0,h.jsx)("button",{type:"submit",children:"SEARCH"})]})}),n.length>0&&(0,h.jsx)(o.Z,{movies:n})]}),x&&(0,h.jsx)(i.Z,{})]})}}}]);
//# sourceMappingURL=530.c3007ae7.chunk.js.map