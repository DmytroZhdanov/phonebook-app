"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[867],{9867:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,i,a,o=e(9439),c=e(8924),u=e(2791),s=e(5048),d=e(5324),p=function(n){return n.filter},l=e(5861),x=e(4687),f=e.n(x),m=e(7947),h=e(3329),b=function(n){var t=n.contacts,e=(0,u.useState)(""),r=(0,o.Z)(e,2),i=r[0],a=r[1],c=(0,u.useState)(""),s=(0,o.Z)(c,2),p=s[0],x=s[1],b=(0,d.Tn)(),g=(0,o.Z)(b,1)[0],v=function(n){var t=n.target,e=t.name,r=t.value;switch(e){case"name":a(r);break;case"number":x(r)}},Z=function(){var n=(0,l.Z)(f().mark((function n(e){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),r={name:i,number:p},!(null===t||void 0===t?void 0:t.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))){n.next=6;break}return alert("".concat(r.name," is already in contacts.")),n.abrupt("return");case 6:g(r),j();case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(n){n.currentTarget.parentElement.setAttribute("data-filled","".concat(""===n.currentTarget.value?"false":"true"))},j=function(){a(""),x("")};return(0,h.jsxs)(m.l0,{onSubmit:Z,children:[(0,h.jsxs)(m.__,{htmlFor:"input-name",children:["Name",(0,h.jsx)(m.II,{type:"text",name:"name",id:"input-name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:v,onBlur:w,value:i})]}),(0,h.jsxs)(m.__,{htmlFor:"input-number",children:["Phone number",(0,h.jsx)(m.II,{type:"tel",name:"number",id:"input-number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:v,onBlur:w,value:p})]}),(0,h.jsx)(m.zx,{type:"submit",children:"Add contact"})]})},g=e(168),v=e(5706),Z=v.Z.li(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 8px;\n  &:not(:last-of-type) {\n    border-bottom: 1px solid #efefef;\n  }\n"]))),w=v.Z.p(i||(i=(0,g.Z)(["\n  font-size: 14px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),j=v.Z.button(a||(a=(0,g.Z)(["\n  height: 24px;\n  margin-left: auto;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n"]))),y=e(7425),k=function(n){var t=n.name,e=n.number,r=n.id,i=(0,d.Nt)(),a=(0,o.Z)(i,1)[0],c=function(){var n=(0,l.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a(r);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.jsxs)(Z,{children:[(0,h.jsxs)(w,{children:[t,": ",e]}),(0,h.jsx)(j,{type:"button",onClick:c,children:(0,h.jsx)(y.GnT,{size:"20",color:"#C8C8C8"})})]})},z=function(n){var t=n.contacts;return(0,h.jsx)("ul",{children:t.map((function(n){var t=n.name,e=n.number,r=n.id;return(0,h.jsx)(k,{id:r,name:t,number:e},r)}))})},C=e(4808),F=function(){var n=(0,s.I0)(),t=(0,s.v9)(p);return(0,h.jsx)(m.l0,{children:(0,h.jsxs)(m.__,{htmlFor:"input-search",children:["Find contacts by name",(0,h.jsx)(m.II,{type:"text",id:"input-search",onChange:function(t){var e=t.target.value;n((0,C.T)(e))},onBlur:function(n){n.currentTarget.parentElement.setAttribute("data-filled","".concat(""===n.currentTarget.value?"false":"true"))},name:"filter",value:t})]})})},_=e(4932),I=function(){var n=(0,d.bN)(),t=(0,o.Z)(n,2),e=t[0],r=t[1],i=r.data,a=r.isFetching,l=r.error,x=(0,s.v9)(p),f=null===i||void 0===i?void 0:i.filter((function(n){return n.name.toLowerCase().includes(x.toLowerCase())}));return(0,u.useEffect)((function(){e()}),[e]),(0,h.jsxs)(_.W2,{children:[(0,h.jsxs)(_.im,{children:[(0,h.jsx)(_.wo,{children:"New Contact"}),(0,h.jsx)(b,{contacts:null!==i&&void 0!==i?i:[]})]}),(0,h.jsxs)(_.im,{children:[(0,h.jsx)(_.Rn,{children:"Contacts"}),a&&(0,h.jsx)(c.Z,{}),l&&(0,h.jsx)("p",{children:"error"}),(null===i||void 0===i?void 0:i.length)>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(F,{}),(null===f||void 0===f?void 0:f.length)>0?(0,h.jsx)(z,{contacts:f}):(0,h.jsx)(_.v0,{children:"Sorry, we didn't find any contacts matching your query"})]}):(0,h.jsx)(_.v0,{children:"You don't have any contacts"})]})]})}},4932:function(n,t,e){e.d(t,{Rn:function(){return l},W2:function(){return d},im:function(){return x},v0:function(){return f},wo:function(){return p}});var r,i,a,o,c,u=e(168),s=e(5706),d=s.Z.div(r||(r=(0,u.Z)(["\n  width: 320px;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding: 0 30px;\n  }\n"]))),p=s.Z.h1(i||(i=(0,u.Z)(["\n  font-size: 28px;\n  line-height: 1.2;\n  font-weight: 700;\n  margin-bottom: 33px;\n  text-align: center;\n"]))),l=s.Z.h2(a||(a=(0,u.Z)(["\n  font-size: 28px;\n  line-height: 1.2;\n  font-weight: 700;\n  margin-bottom: 33px;\n  text-align: center;\n"]))),x=s.Z.div(o||(o=(0,u.Z)(["\n  border-radius: 30px;\n  background-color: #FFFFFF;\n  padding: 40px 20px 20px;\n  margin: 30px auto 0;\n\n  @media screen and (min-width: 768px){\n    width: 400px;\n  }\n"]))),f=s.Z.p(c||(c=(0,u.Z)(["\n  color: #a4a4a4;\n  text-align: center;\n  font-size: 14px;\n"])))},7947:function(n,t,e){e.d(t,{II:function(){return b},W2:function(){return x},__:function(){return h},im:function(){return f},l0:function(){return m},xv:function(){return v},zx:function(){return g}});var r,i,a,o,c,u,s,d=e(168),p=e(5706),l=e(1087),x=p.Z.div(r||(r=(0,d.Z)(["\n  width: 320px;\n  padding: 0 15px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding: 0 30px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 768px;\n  }\n"]))),f=p.Z.div(i||(i=(0,d.Z)(["\n  border-radius: 30px;\n  background-color: #ffffff;\n  padding: 40px 20px;\n  margin: 30px auto 0;\n\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),m=p.Z.form(a||(a=(0,d.Z)(["\n  position: relative;\n  margin: 20px auto;\n"]))),h=p.Z.label(o||(o=(0,d.Z)(["\n  position: static;\n  height: 60px;\n  display: block;\n  font-size: 18px;\n  color: #a4a4a4;\n  transform: translateX(15px);\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 400ms cubic-bezier(0.4, 0, 0.2, 1),\n    height 400ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus-within,\n  &[data-filled='true'] {\n    height: 95px;\n    color: #000000;\n    transform: translate(15px, -14px);\n  }\n\n  &:focus-within input,\n  &[data-filled='true'] input {\n    transform: translate(-15px, 10px);\n  }\n"]))),b=p.Z.input(c||(c=(0,d.Z)(["\n  transform: translate(-15px, -34px);\n  margin-bottom: 10px;\n  padding: 14px 15px;\n  width: 250px;\n  border-radius: 10px;\n  border: 2px solid #efefef;\n  background-color: transparent;\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  @media screen and (min-width: 768px) {\n    width: 360px;\n  }\n"]))),g=p.Z.button(u||(u=(0,d.Z)(["\n  display: block;\n  width: 100%;\n  padding: 14px 15px;\n  color: #fff;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  border-radius: 10px;\n  background: #146b9c;\n  border: none;\n"]))),v=(0,p.Z)(l.rU)(s||(s=(0,d.Z)(["\n  display: block;\n  color: #a4a4a4;\n  text-align: center;\n  font-size: 14px;\n"])))}}]);
//# sourceMappingURL=867.8b5c8f37.chunk.js.map