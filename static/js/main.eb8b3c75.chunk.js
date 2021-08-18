(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__37Ktj",contact:"contactListItem_contact__2DXtK",buttonDelete:"contactListItem_buttonDelete__3fSj1"}},15:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__1tKfJ",filterInput:"filter_filterInput___EWR2"}},27:function(t,e,n){},28:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(27),n(28),n(12)),s=n.n(i),u=n(1),b=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDelete;return Object(u.jsxs)("li",{className:s.a.contactListItem,children:[Object(u.jsxs)("p",{className:s.a.contact,children:[e,": ",n," "]}),Object(u.jsx)("button",{className:s.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},l=n(3),m=n(18),j=n.n(m),d=n(4),f={addContact:Object(d.b)("counter/formSubmitHandler",(function(t){var e=t.name,n=t.number;return{payload:{id:j.a.generate(),name:e,number:n}}})),deleteContact:Object(d.b)("counter/deleteContacts"),changeFilter:Object(d.b)("counter/changeFilter")},O=function(t){return t.contacts.items},p=function(t){return t.contacts.filter},h=function(t){var e=O(t),n=p(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},_=function(){var t=Object(l.c)(h),e=Object(l.b)();return Object(u.jsx)("ul",{children:t.map((function(t){var n=t.name,a=t.number,c=t.id;return Object(u.jsx)(b,{id:c,name:n,number:a,onDelete:function(){return function(t){return e(f.deleteContact(t))}(c)}},c)}))})},x=n(16),v=n(5),C=n.n(v);function g(t){t.onSubmit;var e=Object(l.c)(O),n=Object(l.b)(),c=Object(a.useState)(""),r=Object(x.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),b=Object(x.a)(s,2),m=b[0],j=b[1],d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":j(a);break;default:return}};return Object(u.jsxs)("form",{className:C.a.form,onSubmit:function(t){var a;(t.preventDefault(),a=o,e.some((function(t){return t.name===a})))?alert("".concat(o," is already in contacts!")):(n(f.addContact({name:o,number:m})),i(""),j(""))},children:[Object(u.jsxs)("label",{className:C.a.formLabel,children:["Name",Object(u.jsx)("input",{className:C.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:d})]}),Object(u.jsxs)("label",{className:C.a.formLabel,children:["Number",Object(u.jsx)("input",{className:C.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:m,onChange:d})]}),Object(u.jsx)("button",{className:C.a.buttonSubmit,type:"submit",children:"Add contact"})]})}var L=n(15),k=n.n(L),y=function(){var t=Object(l.c)(p),e=Object(l.b)();return Object(u.jsxs)("label",{className:k.a.filterLabel,children:["Find contacts by name",Object(u.jsx)("input",{className:k.a.filterInput,type:"text",value:t,onChange:function(t){return e(f.changeFilter(t.target.value))}})]})};var I,N=function(){return Object(u.jsxs)("div",{className:C.a.phonebook,children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(g,{}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(y,{}),Object(u.jsx)(_,{})]})},F=(n(44),n(19)),S=n(20),w=n.n(S),A=n(7),D=n(22),z=n(2),J=Object(d.c)([],(I={},Object(A.a)(I,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(D.a)(t),[n])})),Object(A.a)(I,f.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),I)),B=Object(d.c)("",Object(A.a)({},f.changeFilter,(function(t,e){return e.payload}))),E=Object(z.b)({items:J,filter:B}),K=n(6),T=n(21),Z={key:"contacts",storage:n.n(T).a,blacklist:["filter"]},q=Object(d.a)({reducer:{contacts:Object(K.g)(Z,E)},middleware:function(t){return t({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}}).concat(w.a)},devTools:!1}),M={store:q,persistor:Object(K.h)(q)};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{store:M.store,children:Object(u.jsx)(F.a,{losding:null,persistor:M.persistor,children:Object(u.jsx)(N,{})})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={phonebook:"ContactForm_phonebook__tRBT-",form:"ContactForm_form__2ETYu",formLabel:"ContactForm_formLabel__3OAyt",formInput:"ContactForm_formInput__3VtsJ",buttonSubmit:"ContactForm_buttonSubmit__2m-Op"}}},[[48,1,2]]]);
//# sourceMappingURL=main.eb8b3c75.chunk.js.map