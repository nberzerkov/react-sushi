import{u as o,j as s,r as u,a as p,m as C,L as d,b as L,s as b,c as v,d as _}from"./index-P0NPWkep.js";const g=({title:e,price:i,sizes:c,types:r,imageUrl:n,id:t,count:l})=>{const a=o(),h=[2,3,4],x=()=>{confirm("Вы уверены что хотите удалить товар?")&&a(u(t))},m=()=>{a(p({id:t,price:i}))},j=()=>{a(C({id:t}))};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cart__item",children:[s.jsx("div",{className:"cart__item-img",children:s.jsx("img",{className:"pizza-block__image",src:n,alt:"Sushi/Rolls"})}),s.jsxs("div",{className:"cart__item-info",children:[s.jsx("h3",{children:e}),s.jsxs("p",{children:[r," ролл , ",h[c]," см риса."]})]}),s.jsxs("div",{className:"cart__item-count",children:[s.jsx("button",{disabled:l===1,onClick:()=>j(),className:"button button--outline button--circle cart__item-count-minus",children:s.jsxs("svg",{width:10,height:10,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),s.jsx("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),s.jsx("b",{children:l}),s.jsx("button",{onClick:()=>m(),className:"button button--outline button--circle cart__item-count-plus",children:s.jsxs("svg",{width:10,height:10,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),s.jsx("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),s.jsx("div",{className:"cart__item-price",children:s.jsxs("b",{children:[i," ₽"]})}),s.jsx("div",{className:"cart__item-remove",children:s.jsx("button",{onClick:()=>x(),className:"button button--outline button--circle",children:s.jsxs("svg",{width:10,height:10,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),s.jsx("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})})},k=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cart cart--empty",children:[s.jsx("h2",{children:"Корзина пустая 😕"}),s.jsxs("p",{children:["Вероятней всего, вы не заказывали ещё пиццу.",s.jsx("br",{}),"Для того, чтобы заказать пиццу, перейди на главную страницу."]}),s.jsx("img",{src:"public/empty-cart.png",alt:"Empty cart"}),s.jsx(d,{to:"/",className:"button button--black",children:s.jsx("span",{children:"Вернуться назад"})})]})}),w=()=>{const e=L(b),i=o(),c=e.items.reduce((n,t)=>n+=t.count,0),r=()=>{confirm("Очистить корзину?")&&i(_())};return e.items.length?s.jsx(s.Fragment,{children:s.jsx("div",{className:"content",children:s.jsx("div",{className:"container container--cart",children:s.jsxs("div",{className:"cart",children:[s.jsxs("div",{className:"cart__top",children:[s.jsxs("h2",{className:"content__title",children:[s.jsx(v,{}),"Корзина"]}),s.jsxs("div",{onClick:()=>r(),className:"cart__clear",children:[s.jsxs("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("span",{children:"Очистить корзину"})]})]}),s.jsx("div",{className:"content__items--cart",children:e.items.map((n,t)=>s.jsx(g,{...n},t))}),s.jsxs("div",{className:"cart__bottom",children:[s.jsxs("div",{className:"cart__bottom-details",children:[s.jsxs("span",{children:[" ","Всего роллов: ",s.jsxs("b",{children:[c," шт."]})," "]}),s.jsxs("span",{children:[" ","Сумма заказа: ",s.jsxs("b",{children:[e.totalPrice," ₽"]})," "]})]}),s.jsxs("div",{className:"cart__bottom-buttons",children:[s.jsxs(d,{to:"/",className:"button button--outline button--add go-back-btn",children:[s.jsx("svg",{width:8,height:14,viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsx("span",{children:"Вернуться назад"})]}),s.jsx("div",{className:"button pay-btn",children:s.jsx("span",{children:"Оплатить сейчас"})})]})]})]})})})}):s.jsx(k,{})},N=()=>s.jsx(w,{});export{N as default};