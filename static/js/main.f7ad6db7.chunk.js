(this["webpackJsonpshopping-cart-toc"]=this["webpackJsonpshopping-cart-toc"]||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(21),n=c.n(a),r=c(19),d=c(14),o=c(4),l=c(22),j=c(2),h=(c(28),c.p+"static/media/homeBackground.4df5525e.jpg"),b=c(0),u=function(){return Object(b.jsx)("div",{className:"mainHome",style:{backgroundImage:"url(".concat(h,")")},children:Object(b.jsx)("button",{className:"shopButton",children:Object(b.jsx)("a",{href:"/shop",children:"shop."})})})},O=(c(30),function(){return Object(b.jsx)("footer",{children:Object(b.jsxs)("small",{children:["created by"," ",Object(b.jsx)("a",{href:"https://github.com/carlossgv/shopping-cart-toc",children:"Carlos Gonzalez"})]})})});c(31);var m=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{}),Object(b.jsx)(O,{})]})},x=(c(32),function(e){var t=Object(s.useState)("shopping-cart-toc/static/img/clothes/".concat(e.item.code,"/default.jpeg")),c=Object(o.a)(t,2),i=c[0],a=c[1],n=Object(s.useState)({text:"Add to cart",className:"notAdded"}),r=Object(o.a)(n,2),d=r[0],l=r[1];Object(s.useEffect)((function(){e.item.isAdded?l({text:"Remove from cart",className:"added"}):l({text:"Add to cart",className:"notAdded"})}),[e]);return Object(b.jsxs)("div",{className:"card",id:e.id,children:[Object(b.jsx)("img",{src:i,alt:"".concat(e.item.title),onMouseOver:function(){a("shopping-cart-toc/static/img/clothes/".concat(e.item.code,"/model.jpeg"))},onMouseLeave:function(){a("shopping-cart-toc/static/img/clothes/".concat(e.item.code,"/default.jpeg"))}}),Object(b.jsxs)("div",{className:"cardInfo",children:[Object(b.jsx)("h5",{children:e.item.title}),Object(b.jsxs)("p",{children:["$",e.item.price]}),Object(b.jsx)("button",{className:d.className,onClick:e.handleAddToCart,children:d.text})]})]})}),p=(c(33),function(e){return Object(b.jsx)("div",{className:"mainShop",children:Object(b.jsxs)("div",{className:"shopDisplay",children:[Object(b.jsxs)("div",{className:"cardsListTitle",children:[Object(b.jsx)("h1",{children:"MEN'S SWIM TRUNKS"}),Object(b.jsx)("p",{children:"Get vacation-ready with our selection of men\u2019s swim shorts. Browse classic knee-length styles in staple colors from navy blue to khaki green and black. Want to go graphic? No problem. Experiment with stripes, animal motifs or printed shorts to reflect your personality. Pair your trunks with retro sunglasses or a hat and you\u2019ll be ready to hit the beach or pool in just a few scrolls."})]}),Object(b.jsx)("div",{className:"cardsList",children:function(t){var c=[];return t.forEach((function(t){c.push(Object(b.jsx)(x,{handleAddToCart:e.handleAddToCart,item:t,id:"card_".concat(t.id)},t.code))})),c}(e.items)})]})})}),v=(c(34),function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),i=c[0],a=c[1],n=Object(s.useState)({code:e.item.code,price:e.item.price}),r=Object(o.a)(n,2),d=r[0],l=r[1],j="";Object(s.useEffect)((function(){for(var t=[],c=1;c<21;c++)t.push(Object(b.jsx)("option",{children:c}));a(t),l({code:e.item.code,price:e.item.price}),e.cardTotal(d)}),[e]);return Object(b.jsxs)("div",{className:"cartCard",id:e.id,children:[Object(b.jsxs)("div",{className:"leftContainer",children:[Object(b.jsx)("div",{className:"cartCardImg",children:Object(b.jsx)("img",{src:"shopping-cart-toc/static/img/clothes/".concat(e.item.code,"/default.jpeg"),alt:e.item.title})}),Object(b.jsxs)("div",{className:"cartCardInfo",children:[Object(b.jsx)("h5",{children:e.item.title}),Object(b.jsxs)("p",{children:["Price: $",parseFloat(e.item.price).toFixed(2)]}),Object(b.jsx)("p",{children:"Total: $".concat(parseFloat(d.price).toFixed(2))}),Object(b.jsx)("select",{onChange:function(t){t&&(j=t.target.value*e.item.price,l({code:e.item.code,price:j}),e.cardTotal(d))},children:i})]})]}),Object(b.jsx)("div",{className:"cartCardButton",children:Object(b.jsx)("img",{onClick:e.removeCard,className:"trashIcon",src:"shopping-cart-toc/static/img/trashIcon.png",alt:"Trash Icon"})})]})}),f=(c(35),function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("table",{className:"subTotalTable",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"tableHeader",children:"Order value"}),Object(b.jsxs)("td",{className:"tableSubTotal",children:["$",parseFloat(e.total).toFixed(2)]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"tableHeader",children:"Shipping"}),Object(b.jsx)("td",{className:"tableSubTotal",children:"$0.00"})]})]})}),Object(b.jsx)("table",{className:"totalTable",children:Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"tableHeader",children:"Total"}),Object(b.jsx)("td",{className:"tableSubTotal",children:Object(b.jsxs)("strong",{children:["$",parseFloat(e.total).toFixed(2)]})})]})})})]})}),S=function(){return Object(b.jsxs)("form",{className:"discountForm",children:[Object(b.jsx)("label",{htmlFor:"discountCode",children:"ADD A DISCOUNT CODE"}),Object(b.jsxs)("div",{className:"discountInput",children:[Object(b.jsx)("input",{type:"text"}),Object(b.jsx)("button",{className:"cartOptionButton",children:"ADD"})]})]})},k=function(){return Object(b.jsxs)("div",{className:"loginDiv",children:[Object(b.jsx)("span",{children:" Log in to use your member offers!"}),Object(b.jsx)("button",{className:"cartOptionButton",children:"LOGIN"})]})},I=function(e){return Object(b.jsxs)("div",{className:"cartTotal",children:[Object(b.jsx)(S,{}),Object(b.jsx)(k,{}),Object(b.jsxs)("div",{className:"cartTotalDiv",children:[Object(b.jsx)(f,{total:e.total}),Object(b.jsx)("button",{className:"checkoutButton",children:"CONTINUE TO CHECKOUT"})]})]})},R=c(9),g=c(13),y=c.n(g),N=(c(37),function(e){var t=[],c=Object(s.useState)([]),i=Object(o.a)(c,2),a=i[0],n=i[1],r=Object(s.useState)(0),l=Object(o.a)(r,2),j=l[0],h=l[1],u=Object(s.useState)([]),O=Object(o.a)(u,2),m=O[0],x=O[1],p=function(e){var t=Object(d.a)(m),c=0;t.push(e),t.forEach((function(e){console.log(e),c+=e.price})),x(t),h(c)};return Object(s.useEffect)((function(){e.productsInCart.forEach((function(c){t.push(Object(b.jsx)(v,{id:"cartCard_".concat(c),item:R[c],removeCard:e.handleRemoveCard,cardTotal:p},y.a.uniqueId))})),n(t),h(j)}),[e]),Object(b.jsx)("div",{className:"mainCart",children:Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsx)("h1",{children:"Shopping Cart"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"cartProducts",children:a}),Object(b.jsx)(I,{total:j})]})]})})}),w=(c(38),function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"shop",children:[Object(b.jsx)(p,{items:e.items,handleAddToCart:e.handleAddToCart}),Object(b.jsx)(N,{items:e.items,productsInCart:e.productsInCart,handleRemoveCard:e.handleRemoveCard})]}),Object(b.jsx)(O,{})]})}),D=(c(39),function(e){return Object(b.jsx)("div",{onClick:e.handleCart,className:"cartLogo",children:Object(b.jsx)("p",{children:"Cart (".concat(e.qty,")")})})}),H=function(e){return Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{className:"navContent",children:[Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"Waves Logo",height:"100px"}),Object(b.jsx)("a",{href:"/",children:"Home"}),Object(b.jsx)("a",{href:"/shop",children:"Shop"}),Object(b.jsx)(D,{handleCart:function(){console.log("handlingCart");var e=document.querySelector(".mainCart");window.innerWidth<=1199?"0"===e.style.opacity?(e.style.opacity=100,e.style.zIndex=1):(e.style.opacity=0,e.style.zIndex=-1):(e.style.opacity=100,e.style.zIndex=1)},qty:e.qty})]})})},Z=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([]),n=Object(o.a)(a,2),h=n[0],u=n[1];Object(s.useEffect)((function(){var e=h.length;for(var t in i(e),R){var c=R[t];h.includes(t)?c.isAdded=!0:c.isAdded=!1}}),[h]);var O=function(e){var t=e.target.parentElement.parentElement.id;t=y.a.split(t,"_",2)[1],u((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(d.a)(e),[t])}))};return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(H,{qty:c}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(j.a,{exact:!0,path:"/shop",render:function(e){return Object(b.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{items:Object.values(R),handleAddToCart:O,handleRemoveCard:O,productsInCart:h}))}})]})]})};n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(Z,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"0":{"id":"0","title":"Knee Length Swim Shorts","price":15.99,"code":"kneeLengthSwimShorts","isAdded":false},"1":{"id":"1","title":"Patterned Swim Shorts Blue","price":29.99,"code":"patternedSwimShortsBlue","isAdded":false},"2":{"id":"2","title":"Patterned Swim Shorts Gray","price":24.99,"code":"patternedSwimShortsGray","isAdded":false},"3":{"id":"3","title":"Patterned Swim Shorts Green","price":19.99,"code":"patternedSwimShortsGreen","isAdded":false},"4":{"id":"4","title":"Patterned Swim Shorts  Light Blue","price":29.99,"code":"patternedSwimShortsLightBlue","isAdded":false},"5":{"id":"5","title":"Patterned Swim Shorts Orange","price":19.99,"code":"patternedSwimShortsOrange","isAdded":false},"6":{"id":"6","title":"Patterned Swim Shorts Pink","price":29.99,"code":"patternedSwimShortsPink","isAdded":false},"7":{"id":"7","title":"Swim Shorts Black","price":29.99,"code":"swimShortsBlack","isAdded":false}}')}},[[47,1,2]]]);
//# sourceMappingURL=main.f7ad6db7.chunk.js.map