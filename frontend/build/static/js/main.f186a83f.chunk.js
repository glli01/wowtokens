(this.webpackJsonpwowtokenz=this.webpackJsonpwowtokenz||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(31),i=n.n(r),s=n(8),l=n(3),o=(n(87),n(2)),u=n(7),j=n(15),d=n.n(j),b=n(32),m=n(123),h=n(76),A=n(125),O=n(124),f=n(121),x=n(126),p=n(33),g=n.n(p),y=n(1),w=function(e){return Math.floor(e/1e4)},v=function(e){return Math.floor(e%1e4/100)},N=function(e){switch(e){case"SHORT":return"< 30m";case"MEDIUM":return"30m - 2h";case"LONG":return"2h - 12h";case"VERY_LONG":return"12h - 48h";default:return"???"}},k=function(e){var t=(e=e.filter((function(e){return!!e}))).length,n=e.sort(),c=Math.ceil(t/2);return t%2===0?(n[c]+n[c-1])/2:n[c-1]},R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AsWESoENkELEAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADRklEQVRIx7WVT2wiVRzHPzCFPjLgDh0Xu9tCt61mEzXt7rgmctGDrTTr3ZOJt72YePHqwaMHYzT+jTHevHhxjyUe1MRYIbgEsxuMgihb2qYu25ZaZgKdGQ8zBV4BN8b0l0wCv/fm+3nv928CrutylhbkjO3MARMAC/MLknPPkjcJqyb9jwh5XZu9CsDK8ysAzKYukysU+eLzDzzAf7QwEAM6wBHgnN6QKxTlG9Q2t7mUvET8XNzz7pR74IzR4clHuDo/y0tAGkjGYz3RA+D7vXDjvVv1RLX4+08AxLQlRwKMs4zRWcwY3bcvJ1maT5LshSwubVva2d69AXwIvF68mxjOgRT/gz3WjA4Zo/vCmtH9ylMk9KC4GandV4Eq8FHlcARg/2AfgPi5OBmj2hcfYc2/+r/18xLkHSBbucNvEkBMELDa+xhLTa6n7YU1w/kstEjYvg/OHrTuyQDHrzJxPojlKEw/1p0A2NwNYQU7r0RF442xffBi2nkrtMiF/1H6q2NzcD1tLwCryhTY9/t+NSordGNBRELxbpFQwOoOLk8BUeDvUUleGWr1OIiu7LNUpQcYY5oE0KK4/klXRZSgxbR3jil/+/Gp1rZn6HnMKlje+zvNMC0zPFmrHB2OK9NFgKBYlr3H5sDcWIZ23RevjDp9w2/AYcD6hsJa2mtCRSyjnIAGASfToj1SnNt/qPl/m6bV9Y0gjlV6cK2YFS88g+I1tQHcHKqifUtDj9kUf7Xfv7vjPFXbCkeuXfmBp69sehmLPt67aXP3NmrwpjxtBeZ6Tqd0Rytk8/o32/dujS7T5qHyHfBtoVR/edA/p/0sCarT8mXWczrZvF7N5vWPR34PfHH0mA3wJpAqlOrPnqxFn6hLL6Wmex+Edq4szGxeb/jiX48FDID+fDTBDeDTQqk+d205NQeYfr4CgJsrCxswc2XRzP0SaZRr+pfAJ6NSFXBdl0AgQCisEppUCU+qPBQxSV0UM8BrqYuRZyIT21NSfo8vHALUtzqb9a3Oux03ugG4VruFZbawTK8NXNftA4Ae5GFNKq4ZxbWeA1L+gx2IVYAf/YfWkeNYZsvrcrM/q4cA/cBppxrtdGCFdAIROnIGhQcB/wAT1jNDsC4sVAAAAABJRU5ErkJggg==",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AsWESobu0kG5QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADQUlEQVRIx7WVzWvbZhzHP7Ji1+7iTKobZW5KXMVaoeAOZhihoYE1LHu57L5/oTutsF5y2XmH9lQY5D8Y7LBLoaUvhGaH9NLBAmVUdqiXMvw0shTZrRQrRjv4JZJfynrIDwT6PXqe7/f5/t4khWHISVqCE7YTJ5gCUFUVbVZD0zQAlJwCQO1ljdrLGoAcPeQ4jhT1V6+tHhWNIoZhYHxsgAzP/37O+o/rXYK+9QnanXYUfMSuLF95PwVR8KGbs1BYIKfmiuVPy9cBAyjG9XDfPXB/Bx6ZpglAIAWjBH0TQgyAFwoL5UKh8NPyZ8vfRPekp9NR1zBfmN+ZprkBrE9UgATitQAJzp87/4F+QV/TL+i/6bqO1/YSAJnTmbFh0OY0NegEN4F/g05wJ3s6G45U0c7OzuBAFBzA93x8z8e27NjjvfXw3noAzJ+bJ5vN3gaK4xX0rHS59MnqtdWfo2u+509MYjqTZmZmBtd1+0vfAz9M7IPS5dLN6C12d3cnAqcz6XFh+3pEgeM40tLSEuVyeVFV1G+Tp5IJAFEXKKoC0hBECIrS7RXlQwX/0JdbzRaddgev6WUO7INpoDVOwdr/qW1F7YKrZ9SJWyblYK1XFbFFeSpe+Ol0rEzZf70/TNCaRLAYJdDmNERdkDqVGntNu2FjN2wArH0LoN0Dd2IEl0qXQveNi9tyA9d12+r0sfTo+wDYsbEaFkE74DA4pPmmeZTKpBB1kbBs637+ozybm5ujCrafbleBxfm5eVaurrzX1BR1gagLE7jXBx8Xoo3tp9tfzKqzAAOSfSseY+fAwWpY43hMURf33tVoD4EHW39sfQmoT7aesHJ1BVmOJ1lOyuMUmKIu7gyvS2EYks/nURQFVVEBNKbYAL66WLzI2TNn0XU9OVRF7aj/7K9nf+7V9n4Fbu/V9qi8qHRz1bQHjXacVEUVwA3gltWwioAx3GjJ1ICvYlbNanAYPO6DT5ymfZKeikpOzd0ArlsNi2ar2Yn9Z+WEDFQBKtXKL4lO4m7/26t/Xo2GKJM5nieKoqAbenRP0ff9zwGt99ADrwAPABKdRDsK7Pv+IERSGIZIUjwG/TkzeebGzXfi09Y/6vphGPIfTpxP4P+yH80AAAAASUVORK5CYII=",B=n(122),C=function(e){var t=e.show,n=e.setShow,c=e.message,a=e.variant,r=void 0===a?"danger":a,i=e.heading,s=void 0===i?"Oh snap! You got an error!":i;return t?Object(y.jsxs)(B.a,{variant:r,onClose:function(){return n(!1)},dismissible:!0,children:[Object(y.jsx)(B.a.Heading,{children:s}),Object(y.jsx)("p",{children:c})]}):Object(y.jsx)(y.Fragment,{})},M=n(128),z=function(e){return Object(y.jsxs)(M.a,Object(o.a)(Object(o.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(y.jsx)(M.a.Header,{closeButton:!0,children:Object(y.jsx)(M.a.Title,{id:"contained-modal-title-vcenter",children:e.heading?e.heading:"Auctions"})}),Object(y.jsxs)(M.a.Body,{children:[Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex flex-row justify-content-between w-85 pt-2 px-0",children:[Object(y.jsx)(m.a,{className:"w-50",children:Object(y.jsx)(f.a,{fluid:!0,src:e.item&&e.item.imgUrl?e.item.imgUrl:"https://render.worldofwarcraft.com/us/icons/56/inv_sword_39.jpg",style:{width:"60%"}})}),Object(y.jsxs)(m.a,{className:"d-flex flex-column justify-content-evenly w-50 px-0",children:[Object(y.jsx)("h4",{children:e.item?"Name: "+e.item.name:"Name: Unknown Item"}),Object(y.jsx)("h4",{children:e.item?"ID: "+e.item.id:"ID: ???"}),Object(y.jsx)("h4",{className:e.item.quality+"_MODAL",children:e.item?"Rarity: "+e.item.quality:"Rarity: ???"})]})]}),Object(y.jsx)(m.a,{fluid:!0,className:"d-flex d-row justify-content-center mt-5",style:{maxHeight:"50vh"},children:Object(y.jsx)("div",{className:"custom-scrollbar-css",style:{width:"85%",overflow:"auto"},children:Object(y.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"w-100 mb-0",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{style:{width:"8%"},children:"Qty"}),Object(y.jsx)("th",{style:{width:"30%"},children:"Price"}),Object(y.jsx)("th",{style:{width:"10%"},children:"Time Left"})]})}),Object(y.jsx)("tbody",{children:e.auctions?e.auctions.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.quantity}),Object(y.jsx)("td",{children:(t=e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid,(Math.floor(t/100)/100).toFixed(2)+"g ")}),Object(y.jsx)("td",{children:N(e.time_left)})]});var t})):""})]})})})]}),Object(y.jsx)(M.a.Footer,{children:Object(y.jsx)(h.a,{onClick:e.onHide,children:"Close"})})]}))},S=function(e){var t=e.realm,n=(e.setRealm,15),a=Object(c.useState)(0),r=Object(l.a)(a,2),i=r[0],j=r[1],p=Object(c.useState)(n),N=Object(l.a)(p,2),B=N[0],M=N[1],S=Object(c.useState)(new Map),F=Object(l.a)(S,2),T=F[0],U=F[1],I=Object(c.useState)(new Map),H=Object(l.a)(I,2),Q=H[0],W=H[1],D=Object(c.useState)(new Map),Y=Object(l.a)(D,2),q=Y[0],J=Y[1],P=Object(c.useState)(""),X=Object(l.a)(P,2),V=X[0],L=X[1],K=Object(c.useState)([]),G=Object(l.a)(K,2),Z=G[0],_=G[1],$=Object(c.useState)(0),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(0),ae=Object(l.a)(ce,2),re=ae[0],ie=ae[1],se=Object(c.useState)(!1),le=Object(l.a)(se,2),oe=le[0],ue=le[1],je=Object(c.useState)(""),de=Object(l.a)(je,2),be=de[0],me=de[1],he=Object(c.useState)(!1),Ae=Object(l.a)(he,2),Oe=Ae[0],fe=Ae[1],xe=Object(c.useState)(!1),pe=Object(l.a)(xe,2),ge=(pe[0],pe[1]),ye=Object(c.useState)(!1),we=Object(l.a)(ye,2),ve=we[0],Ne=we[1],ke=Object(c.useState)(!1),Re=Object(l.a)(ke,2),Ee=Re[0],Be=Re[1],Ce=Object(c.useState)([]),Me=Object(l.a)(Ce,2),ze=Me[0],Se=Me[1],Fe=Object(c.useState)({}),Te=Object(l.a)(Fe,2),Ue=Te[0],Ie=Te[1],He=Object(c.useState)(!1),Qe=Object(l.a)(He,2),We=(Qe[0],Qe[1],Object(c.useState)(0)),De=Object(l.a)(We,2),Ye=De[0],qe=De[1],Je="USJ6h0WjEgWMlMvUSRbxztINPY1E2W8M2j";Object(c.useEffect)((function(){Pe(),Le(),j(0),M(n),console.log("start endIndex ="+B)}),[t]),Object(c.useEffect)((function(){_e()}),[B,Q]);var Pe=function(){var e=Object(b.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://us.api.blizzard.com/data/wow/connected-realm/".concat(t.connectedRealmID,"/auctions?namespace=dynamic-us&locale=en_US&access_token=").concat(Je));case 3:n=e.sent,c=n.data,qe(c.auctions.length),Ve(c.auctions),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.message)),me("Auction House Data Retrieval Error: ".concat(e.t0.message,".\n If this occurs repeatedly, please contact the service owner.")),ue(!0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(u.a)(Q),e.next=3,g.a.post("/api/item/query",{queryString:V,ids:Object(u.a)(Q.keys())});case 3:a=e.sent,console.log(a.data),a.data.length>=1e3&&(me("Caution: Your search query may not be specific enough, so the items shown may vary from what is expected."),ue(!0)),r=new Map,a.data.forEach((function(e){return r.set(e.itemID,1)})),console.log(r),c=c.filter((function(e){return r.has(e[1].itemID)})),console.log(c),c=new Map(c),_([].concat(Object(u.a)(Z),[V])),L(""),j(0),M(n),W(c);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=function(e){var t=(new Date).getTime(),n=new Map;e.forEach((function(e){if(e.buyout||e.unit_price)if(n.has(e.item.id)){var t=n.get(e.item.id);n.set(e.item.id,Object(o.a)(Object(o.a)({},t),{},{totalQuantity:t.totalQuantity+e.quantity,itemAuctions:[e].concat(Object(u.a)(t.itemAuctions))}))}else n.set(e.item.id,[e]),n.set(e.item.id,{itemID:e.item.id,itemName:null,totalQuantity:e.quantity,itemAuctions:[e]})})),console.log("mapInfo took: "+((new Date).getTime()-t)),console.log(n),W(n),J(n)},Le=function(){W(new Map(q)),_([])},Ke=function(){var e="Price (Asc)",t="Price (Dsc)";if(re){console.log("Sorting by Price Ascending");var c=Object(u.a)(Q);c=c.sort((function(e,t){return Math.min.apply(Math,Object(u.a)(e[1].itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid}))))>Math.min.apply(Math,Object(u.a)(t[1].itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid}))))?-1:1})),W(new Map(c)),_([].concat(Object(u.a)(Z.filter((function(n){return n!==e&&n!==t}))),[t])),ie(0)}else{console.log("Sorting by Price Ascending");var a=Object(u.a)(Q);a=a.sort((function(e,t){return Math.min.apply(Math,Object(u.a)(e[1].itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid}))))>Math.min.apply(Math,Object(u.a)(t[1].itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid}))))?1:-1})),W(new Map(a)),_([].concat(Object(u.a)(Z.filter((function(n){return n!==e&&n!==t}))),[e])),ie(1)}j(0),M(n)},Ge=function(e,t){return Object(u.a)(t.get(e).itemAuctions).reduce((function(n,c,a,r){r.length;return c||console.log("item: "+e+" index: "+a),n+c.quantity*(c.buyout?c.buyout:c.unit_price?c.unit_price:c.bid)/t.get(e).totalQuantity}),0)},Ze=function(e,t){return Math.min.apply(Math,Object(u.a)(t.get(e).itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid}))))},_e=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!ve){e.next=3;break}return e.abrupt("return");case 3:t=i;case 4:if(!(t<B)){e.next=12;break}if(T.has(Object(u.a)(Q.keys())[t])){e.next=7;break}return e.abrupt("break",12);case 7:if(t!==B-1){e.next=9;break}return e.abrupt("return",console.log("No new names needed to be found"));case 9:t++,e.next=4;break;case 12:return n=new Map(T),Ne(!0),e.next=16,g.a.post("/api/name/batch",{ids:Object(u.a)(Q.keys()).slice(i,i+100)});case 16:c=e.sent,a=c.data,Ne(!1),a.forEach((function(e){n.has(e.itemID)||n.set(e.itemID,{name:e.name,quality:e.rarity?e.rarity:"COMMON",imgUrl:e.imgUrl?e.imgUrl:null})})),U(n),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.message));case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z,{show:Ee,onHide:function(){return Be(!1)},item:Ue,auctions:ze}),Object(y.jsx)(C,{show:oe,setShow:ue,message:be}),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex flex-row justify-content-between w-50 py-3 px-0",children:[i>0?Object(y.jsx)(h.a,{variant:"dark",onClick:function(){j(i-n>0?i-n:0),M(i>0?B-n:B)},children:"Previous Page"}):Object(y.jsx)(h.a,{disabled:!0,variant:"dark",onClick:function(){j(i-n>0?i-n:0),M(i>0?B-n:B)},children:"Previous Page"}),Object(y.jsx)("input",{type:"text",placeholder:"search",value:V,className:"w-50 rounded px-3 search-bar",onChange:function(e){L(e.target.value)},onSubmit:Xe,onKeyDown:function(e){"Enter"===e.key&&Xe()}}),B<=Q.size?Object(y.jsx)(h.a,{variant:"dark",disabled:Oe,onClick:function(){j(i+n),M(B+n),fe(!0),setTimeout((function(){return fe(!1)}),50)},children:"Next Page"}):Object(y.jsx)(h.a,{disabled:!0,variant:"dark",onClick:function(){j(i+n),M(B+n),ge(!0),setTimeout((function(){return ge(!1)}),50)},children:"Next Page"})]}),Object(y.jsx)(m.a,{fluid:!0,className:"d-flex flex-row justify-content-center mb-3 w-100 px-0",children:Z.length>0?Object(y.jsxs)(y.Fragment,{children:[" ",Z.map((function(e){return Object(y.jsx)(A.a,{pill:!0,bg:"light",text:"dark",className:"mx-1",children:e},e)})),Object(y.jsx)(A.a,{pill:!0,bg:"info",text:"dark",onClick:Le,className:"pointer mx-1",children:"Clear"})]}):""}),Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex flex-row justify-content-center mb-3 px-0 white-text",children:["Items ",i," - ",B," of ",Q.size," in"," ",Ye," auctions"]}),Object(y.jsx)(m.a,{fluid:!0,className:"d-flex flex-row justify-content-center px-0",children:Object(y.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"table-w-50",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{className:"text-end",children:[Object(y.jsxs)("th",{className:"text-start",children:[" ",Object(y.jsx)("span",{style:Object(s.a)({marginLeft:"5vh"},"marginLeft","calc(var(--vh, 1vh) * 5)"),children:"Item"})]}),Object(y.jsx)("th",{style:{width:"8em"},className:"hover-underline",onClick:Ke,children:"Low"}),Object(y.jsx)("th",{style:{width:"8em"},className:"hover-underline",onClick:Ke,children:"Median"}),Object(y.jsx)("th",{style:{width:"8em"},className:"hover-underline",onClick:Ke,children:"Average"}),Object(y.jsxs)("th",{style:{width:"5em"},className:"hover-underline",onClick:function(){var e="Quantity (Asc)",t="Quantity (Dsc)";if(te){console.log("Sorting by Quantity Descending");var c=Object(u.a)(Q);c=c.sort((function(e,t){return e[1].totalQuantity>t[1].totalQuantity?-1:1})),W(new Map(c)),_([].concat(Object(u.a)(Z.filter((function(n){return n!==e&&n!==t}))),["Quantity (Dsc)"])),ne(0)}else{console.log("Sorting by Quantity Ascending");var a=Object(u.a)(Q);a=a.sort((function(e,t){return e[1].totalQuantity>t[1].totalQuantity?1:-1})),W(new Map(a)),_([].concat(Object(u.a)(Z.filter((function(n){return n!==e&&n!==t}))),["Quantity (Asc)"])),ne(1)}j(0),M(n)},children:["Quantity"," "]})]})}),Object(y.jsx)("tbody",{className:"text-end",children:Object(u.a)(Q.keys()).slice(i,B).map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{onClick:function(){return function(e){Se(Object(u.a)(Q.get(e).itemAuctions.sort((function(e,t){return(e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid)>(t.buyout?t.buyout:t.unit_price?t.unit_price:t.bid)?1:-1}))));var t=T.get(e);Ie(Object(o.a)(Object(o.a)({},t),{},{id:e})),Be(!0)}(e)},className:"hover-underline text-start p-1 px-0",children:Object(y.jsxs)("div",{style:{minHeight:"33px"},children:[Object(y.jsxs)("span",{className:"px-2",children:[Object(y.jsx)(f.a,{fluid:!0,src:T.get(e)&&T.get(e).imgUrl?T.get(e).imgUrl:"https://render.worldofwarcraft.com/us/icons/56/inv_sword_39.jpg",className:"icn rounded"})," "]}),T.get(e)?Object(y.jsx)("span",{className:T.get(e).quality,children:T.get(e).name}):Object(y.jsx)("span",{style:{minHeight:"25px"},children:Object(y.jsx)(x.a,{animation:"border",size:"sm"})})]})}),Object(y.jsx)("td",{className:"px-0",children:Object(y.jsxs)(m.a,{className:"d-flex px-0 flex-row justify-content-end",children:[Object(y.jsxs)("div",{className:"d-flex flex-row justify-content-end",style:{minWidth:"6em"},children:[w(Ze(e,Q)),Object(y.jsx)(f.a,{src:R,className:"coin"})]}),Object(y.jsxs)("div",{className:"d-flex flex-row justify-content-end",style:{minWidth:"3em"},children:[v(Ze(e,Q)),Object(y.jsx)(f.a,{src:E,className:"coin"})]})]})}),Object(y.jsx)("td",{className:"px-0",children:Object(y.jsxs)(m.a,{className:"d-flex flex-row px-0 justify-content-end",children:[Object(y.jsxs)("div",{className:"d-flex flex-row justify-content-end",style:{minWidth:"6em"},children:[w(k(Q.get(e).itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid})))),Object(y.jsx)(f.a,{src:R,className:"coin"})]}),Object(y.jsx)("div",{className:"d-flex flex-row justify-content-end",style:{minWidth:"2em"},children:v(k(Q.get(e).itemAuctions.map((function(e){return e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid}))))}),Object(y.jsx)(f.a,{src:E,className:"coin"})]})}),Object(y.jsx)("td",{className:"px-0",onClick:function(){console.log(JSON.stringify(Q.get(e).itemAuctions.map((function(e){return{auctionPrice:e.buyout?e.buyout:e.unit_price?e.unit_price:e.bid,auctionQuantity:e.quantity}}))))},children:Object(y.jsxs)(m.a,{className:"d-flex flex-row p-0 justify-content-end",children:[Object(y.jsxs)("div",{className:"d-flex flex-row justify-content-end",style:{minWidth:"6em"},children:[w(Ge(e,Q)),Object(y.jsx)(f.a,{src:R,className:"coin"})]}),Object(y.jsx)("div",{className:"d-flex flex-row justify-content-end",style:{minWidth:"2em"},children:v(Ge(e,Q))}),Object(y.jsx)(f.a,{src:E,className:"coin"})]})}),Object(y.jsx)("td",{children:Q.get(e).totalQuantity})]},e)}))})]})})]})]})},F=function(e){var t=e.realm,n=e.setRealm;return Object(y.jsx)(S,{realm:t,setRealm:n})},T=n(78),U=n(10),I=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex flex-column justify-content-between p-0 white-text w-50",style:Object(s.a)({height:"80vh"},"height","calc(var(--vh, 1vh) * 80)"),children:[Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex flex-row justify-content-between p-0",style:{height:"35%"},children:[Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex flex-column justify-content-between p-0 m-0",style:{height:"100%",width:"25%"},children:[Object(y.jsx)(m.a,{className:"p-0",style:{height:"65%"},children:"Profession"}),Object(y.jsx)(m.a,{className:"p-0",style:{height:"25%"},children:"decorational banner"})]}),Object(y.jsx)(m.a,{fluid:!0,className:"p-0 m-0",style:{height:"100%",width:"70%"},children:"Ingredients Owned"})]}),Object(y.jsx)(m.a,{fluid:!0,className:"p-0",style:{height:"60%"},children:Object(y.jsx)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{style:{width:"50%"},children:"Recipe"}),Object(y.jsx)("th",{children:" Cost"}),Object(y.jsx)("th",{children:" Price"}),Object(y.jsx)("th",{children:" Profit"}),Object(y.jsx)("th",{children:" Profit (Owned)"})]})})})})]})})},H=n(129),Q=n(130),W=n(127),D=function(e){var t=e.realm,n=e.setRealm,a=Object(c.useState)([]),r=Object(l.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)([]),j=Object(l.a)(o,2),h=j[0],A=j[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),w=p[0],v=p[1],N=Object(c.useState)(""),k=Object(l.a)(N,2),R=k[0],E=k[1],B=Object(c.useState)(""),M=Object(l.a)(B,2),z=M[0],S=M[1],F=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S(""),s(Object(u.a)(h)),!(h.length>0)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,g.a.get("/api/realms");case 7:t=e.sent,n=t.data,s(n.sort((function(e,t){return e.realmName.localeCompare(t.realmName)}))),A(n.sort((function(e,t){return e.realmName.localeCompare(t.realmName)}))),e.next=20;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.message)),E("Error: ".concat(e.t0.message)),v(!0),s([{realmName:"Error Retrieving Realm Data",connectedRealmID:404}]),A([{realmName:"Error Retrieving Realm Data",connectedRealmID:404}]);case 20:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(H.a,{bg:"dark",variant:"dark",className:"w-100",children:Object(y.jsxs)(m.a,{fluid:!0,className:"w-75",children:[Object(y.jsxs)(H.a.Brand,{href:"#home",children:[" ",Object(y.jsxs)(m.a,{fluid:!0,className:"d-flex",children:[Object(y.jsx)(f.a,{src:"data:image/png;base64,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",style:{width:"2rem"}}),Object(y.jsx)("div",{style:{display:"inline"},className:"px-1",children:"Wowtokens"})]})]}),Object(y.jsxs)(Q.a,{className:"me-auto",children:[Object(y.jsx)(Q.a.Link,{children:"Home"}),Object(y.jsx)(Q.a.Link,{children:"Features"}),Object(y.jsx)(Q.a.Link,{children:"Calculator"})]}),Object(y.jsx)(Q.a,{onClick:F,children:Object(y.jsx)(W.a,{id:"nav-realm",title:t.realmName,menuVariant:"dark",children:h.length>0?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{type:"text",placeholder:"search",value:z,className:"rounded w-75 mx-3",onChange:function(e){S(e.target.value),s(Object(u.a)(h).filter((function(t){return t.realmName.match(new RegExp("".concat(e.target.value),"i"))})))}}),i.map((function(e){return Object(y.jsx)(W.a.Item,{onClick:function(){return n(e)},children:e.realmName})}))]}):Object(y.jsx)(x.a,{animation:"border",size:"sm"})})})]})}),Object(y.jsx)(C,{show:w,setShow:v,message:R,variant:"info",heading:"Realm Retrieval Error"})]})};var Y=function(){Object(c.useEffect)((function(){var e=function(){var e=.01*window.innerHeight,t=.01*window.innerWidth;console.log("resized"),document.documentElement.style.setProperty("--vh","".concat(e,"px")),document.documentElement.style.setProperty("--vw","".concat(t,"px"))};e(),window.addEventListener("resize",e)}),[]);var e=Object(c.useState)({realmName:"Malygos",connectedRealmID:104}),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(T.a,{children:Object(y.jsxs)("div",{className:"main",style:Object(s.a)({width:"100vw"},"width","calc(var(--vw,1vh) * 100)"),children:[Object(y.jsx)(D,{realm:n,setRealm:a}),Object(y.jsx)(U.a,{path:"/",exact:!0,children:Object(y.jsx)(F,{realm:n,setRealm:a})}),Object(y.jsx)(U.a,{path:"/test",component:I})]})})})};n(114);i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Y,{})}),document.getElementById("root"))},87:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.f186a83f.chunk.js.map