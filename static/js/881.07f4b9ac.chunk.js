"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{1510:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7689),a=n(1087),u="MovieList_list__yjDCC",s="MovieList_item__tDivI",c="MovieList_link__+cn-g",i=n(184),o=function(e){var t=e.movies,n=(0,r.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.title;return(0,i.jsx)("li",{className:s,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},className:c,children:r})},t)}))})})}},5881:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(9439),u=n(7757),s=n.n(u),c=n(2791),i=n(1087),o=n(3051),p=n(1510),f=n(3448),l=n(8174),m=(n(5462),{form:"Movies_form__4ow+Z",input:"Movies_input__KrUqs",submit:"Movies_submit__Nxgt8"}),v=n(184),h=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=(0,i.lr)(),d=(0,a.Z)(h,2),x=d[0],_=d[1],g=(0,c.useState)(!1),k=(0,a.Z)(g,2),b=k[0],w=k[1],y=x.get("query");return(0,c.useEffect)((function(){if(y){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,o.V0)(y);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target,n=t.elements.search.value.toLowerCase().trim();n||l.Am.warn("Look, the input field is empty! Please, make a choice.",{position:l.Am.POSITION.TOP_CENTER,autoClose:3500,theme:"dark",transition:l.BW}),_(""!==n?{query:n}:{}),t.reset()},className:m.form,children:[(0,v.jsx)("input",{type:"text",name:"search",className:m.input,placeholder:"Enter the movie title"}),(0,v.jsx)("button",{type:"submit",className:m.submit,children:(0,v.jsx)("span",{className:m.btnlabel,children:"Search"})})]}),(0,v.jsx)(l.Ix,{}),0!==n.length&&(0,v.jsx)(p.Z,{movies:n}),b&&(0,v.jsx)(f.a,{})]})}},3051:function(e,t,n){n.d(t,{Df:function(){return o},TP:function(){return f},V0:function(){return p},tx:function(){return m},zv:function(){return l}});var r=n(5861),a=n(7757),u=n.n(a),s=n(5294),c="0df669f29ba8ead11b0550cf046b58d7",i="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"trending/movie/day?"),e.next=3,s.Z.get(t,{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"search/movie?"),e.next=3,s.Z.get(n,{params:{api_key:c,query:t,include_adult:!1,language:"en-US",page:1}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"?"),e.next=3,s.Z.get(n,{params:{api_key:c,language:"en-US"}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/credits?"),e.next=3,s.Z.get(n,{params:{api_key:c,language:"en-US"}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/reviews?"),e.next=3,s.Z.get(n,{params:{api_key:c,language:"en-US",page:1}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=881.07f4b9ac.chunk.js.map