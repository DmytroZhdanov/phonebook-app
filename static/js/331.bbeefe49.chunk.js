"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[331],{3331:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,i,o,s,d,c,u,l,p,m,x=t(8924),h=t(2791),f=t(9434),b=t(3634),g=t(6916),v=function(n){return n.contacts.contacts},Z=function(n){return n.filter},j=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},w=(0,g.P1)([v,Z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),F=t(9439),C=t(168),k=t(5706),z=k.Z.form(r||(r=(0,C.Z)(["\n  border: 1px solid #555555;\n  border-radius: 16px;\n  padding: 12px;\n  margin-bottom: 24px;\n"]))),A=k.Z.label(a||(a=(0,C.Z)(["\n  display: block;\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),L=k.Z.input(i||(i=(0,C.Z)(["\n  margin-bottom: 16px;\n  padding: 14px 15px;\n  width: 260px;\n  border-radius: 10px;\n  border: 2px solid #efefef;\n"]))),I=k.Z.button(o||(o=(0,C.Z)(["\n  display: block;\n  margin: 16px 0 20px;\n"]))),S=t(3329),_=function(){var n=(0,f.I0)(),e=(0,f.v9)(v),t=(0,h.useState)(""),r=(0,F.Z)(t,2),a=r[0],i=r[1],o=(0,h.useState)(""),s=(0,F.Z)(o,2),d=s[0],c=s[1],u=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":c(r)}},l=function(){i(""),c("")};return(0,S.jsxs)(z,{onSubmit:function(t){t.preventDefault();var r={name:a,number:d};e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts.")):(n((0,b.uK)(r)),l())},children:[(0,S.jsx)(A,{htmlFor:"input-name",children:"Name"}),(0,S.jsx)(L,{type:"text",name:"name",id:"input-name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:u,value:a}),(0,S.jsx)(A,{htmlFor:"input-number",children:"Phone number"}),(0,S.jsx)(L,{type:"tel",name:"number",id:"input-number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:u,value:d}),(0,S.jsx)(I,{type:"submit",children:"Add contact"})]})},q=k.Z.li(s||(s=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 8px;\n  &:not(:last-of-type) {\n    border-bottom: 1px solid #555555;\n  }\n  &:nth-of-type(even) {\n    background-color: #dddddd;\n  }\n"]))),P=k.Z.button(d||(d=(0,C.Z)(["\n  height: 24px;\n  margin-left: auto;\n"]))),G=t(7425),K=function(n){var e=n.name,t=n.number,r=n.id,a=(0,f.I0)();return(0,S.jsxs)(q,{children:[(0,S.jsxs)("p",{children:[e,": ",t]}),(0,S.jsx)(P,{type:"button",onClick:function(){return a((0,b.GK)(r))},children:(0,S.jsx)(G.GnT,{})})]})},N=function(){var n=(0,f.v9)(w);return(0,S.jsx)("ul",{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,S.jsx)(K,{id:r,name:e,number:t},r)}))})},T=t(4808),B=function(){var n=(0,f.I0)(),e=(0,f.v9)(Z);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(A,{htmlFor:"input-search",children:"Find contacts by name"}),(0,S.jsx)(L,{type:"text",id:"input-search",onChange:function(e){var t=e.target.value;n((0,T.T)(t))},name:"filter",value:e})]})},D=k.Z.div(c||(c=(0,C.Z)(["\n  width: 320px;\n  margin: 0 auto;\n  padding: 0 15px;\n"]))),E=k.Z.div(u||(u=(0,C.Z)(["\n  font-size: 28px;\n  line-height: 1.2;\n  font-weight: 700;\n  margin-bottom: 12px;\n  text-align: center;\n"]))),J=(k.Z.div(l||(l=(0,C.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 12px;\n"]))),k.Z.div(p||(p=(0,C.Z)(["\n  border-radius: 30px;\n  background-color: #FFFFFF;\n  padding: 12px;\n"])))),M=k.Z.p(m||(m=(0,C.Z)(["\n  text-align: center;\n"]))),Y=function(){var n=(0,f.I0)(),e=(0,f.v9)(v),t=(0,f.v9)(j),r=(0,f.v9)(y),a=(0,f.v9)(w);return(0,h.useEffect)((function(){n((0,b.yF)())}),[n]),(0,S.jsxs)(D,{children:[(0,S.jsx)(_,{}),(0,S.jsxs)(J,{children:[(0,S.jsx)(E,{children:"Contacts"}),t&&(0,S.jsx)(x.Z,{}),r&&(0,S.jsx)("p",{children:r}),e.length>0?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B,{}),a.length>0?(0,S.jsx)(N,{}):(0,S.jsx)(M,{children:"Sorry, we didn't find any contacts matching your query"})]}):(0,S.jsx)(M,{children:"You don't have any contacts"})]})]})}}}]);
//# sourceMappingURL=331.bbeefe49.chunk.js.map