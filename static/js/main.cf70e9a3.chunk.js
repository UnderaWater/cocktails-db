(this["webpackJsonpcocktails-db"]=this["webpackJsonpcocktails-db"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(17),i=c.n(a),r=(c(25),c(26),c(7)),l=c(2),o=c.p+"static/media/logo.5bb3b58e.svg",j=c(0),d=function(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-center",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("img",{className:"logo",src:o,alt:"cocktail db logo"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/about",children:"About"})})]})]})})},b=c(20),u=function(e){var t=e.image,c=e.name,s=e.id,n=e.info,a=e.glass;return Object(j.jsxs)("article",{className:"cocktail",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:t,alt:c})}),Object(j.jsxs)("div",{className:"cocktail-footer",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("h4",{children:a}),Object(j.jsx)("p",{children:n}),Object(j.jsx)(r.b,{className:"btn btn-primary btn-details",to:"/cocktail/".concat(s),children:"details"})]})]})},h=function(){return Object(j.jsx)("div",{className:"loader"})},O=c(10),x=c.n(O),m=c(12),p=c(9),f=n.a.createContext(),g=function(e){var t=e.children,c=Object(s.useState)(!0),n=Object(p.a)(c,2),a=n[0],i=n[1],r=Object(s.useState)("a"),l=Object(p.a)(r,2),o=l[0],d=l[1],b=Object(s.useState)([]),u=Object(p.a)(b,2),h=u[0],O=u[1],g=Object(s.useCallback)(Object(m.a)(x.a.mark((function e(){var t,c,s,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(o));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,(s=c.drinks)?(n=s.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),O(n)):O([]),i(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),i(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[o]);return Object(s.useEffect)((function(){g()}),[o,g]),Object(j.jsx)(f.Provider,{value:{loading:a,cocktails:h,setSearchTerm:d},children:t})},k=function(){return Object(s.useContext)(f)},v=function(){var e=k(),t=e.cocktails;return e.loading?Object(j.jsx)(h,{}):t.length<1?Object(j.jsx)("h2",{className:"section-title",children:"no cocktails matched your search criteria"}):Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h2",{className:"section-title",children:"cocktails"}),Object(j.jsx)("div",{className:"cocktails-center",children:t.map((function(e){return Object(j.jsx)(u,Object(b.a)({},e),e.id)}))})]})},N=function(){var e=k().setSearchTerm,t=n.a.useRef("");n.a.useEffect((function(){t.current.focus()}),[]);return Object(j.jsx)("section",{className:"section search",children:Object(j.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{htmlFor:"name",children:" search your favorite cocktail "}),Object(j.jsx)("input",{type:"text",id:"name",ref:t,onChange:function(){e(t.current.value)}})]})})})},y=function(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(N,{}),Object(j.jsx)(v,{})]})},w=function(){return Object(j.jsxs)("section",{className:"section about-section",children:[Object(j.jsx)("h2",{className:"section-title",children:"About us"}),Object(j.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magni cupiditate vero dolores illo similique repellendus aliquid, itaque voluptatem ipsam natus beatae iste architecto eveniet sapiente numquam necessitatibus. Harum quaerat excepturi quos facilis in tenetur, exercitationem perspiciatis similique sint? Eos!"})]})},S=function(){var e=Object(l.f)().id,t=n.a.useState(!1),c=Object(p.a)(t,2),s=c[0],a=c[1],i=n.a.useState(null),o=Object(p.a)(i,2),d=o[0],b=o[1];if(n.a.useEffect((function(){function t(){return t=Object(m.a)(x.a.mark((function t(){var c,s,n,i,r,l,o,j,d,u,h,O,m,p;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:(s=t.sent).drinks?(n=s.drinks[0],i=n.strDrink,r=n.strDrinkThumb,l=n.strAlcoholic,o=n.strCategory,j=n.strGlass,d=n.strInstructions,u=n.strIngredient1,h=n.strIngredient2,O=n.strIngredient3,m=n.strIngredient4,p=n.strIngredient5,b({name:i,image:r,info:l,category:o,glass:j,instructions:d,ingredients:[u,h,O,m,p]})):b(null),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:a(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])}))),t.apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e]),s)return Object(j.jsx)(h,{});if(d){var u=d.name,O=d.image,f=d.category,g=d.info,k=d.glass,v=d.instructions,N=d.ingredients;return Object(j.jsxs)("section",{className:"section cocktail-section",children:[Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"back home"}),Object(j.jsx)("h2",{className:"section-title",children:u}),Object(j.jsxs)("div",{className:"drink",children:[Object(j.jsx)("img",{src:O,alt:u}),Object(j.jsxs)("div",{className:"drink-info",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"name :"})," ",u]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"category :"})," ",f]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"info :"})," ",g]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"glass :"})," ",k]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"instructons :"})," ",v]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"drink-data",children:"ingredients :"}),N.map((function(e,t){return e?Object(j.jsxs)("span",{children:[" ",e]},t):null}))]})]})]})]})}return Object(j.jsx)("h2",{className:"section-title",children:"no cocktail to display"})},C=function(){return Object(j.jsx)("section",{className:"error-page section",children:Object(j.jsxs)("div",{className:"error-container",children:[Object(j.jsx)("h1",{children:"oops! it's a dead end"}),Object(j.jsx)(r.b,{className:"btn btn-primary",to:"/",children:"back home"})]})})};var I=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(y,{})}),Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(w,{})}),Object(j.jsx)(l.a,{path:"/cocktail/:id",children:Object(j.jsx)(S,{})}),Object(j.jsx)(l.a,{path:"*",children:Object(j.jsx)(C,{})})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{children:Object(j.jsx)(I,{})})}),document.getElementById("root")),q()}},[[34,1,2]]]);
//# sourceMappingURL=main.cf70e9a3.chunk.js.map