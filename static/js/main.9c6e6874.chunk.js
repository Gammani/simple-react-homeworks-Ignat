(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={wrapperMessage:"Message_wrapperMessage__AYOp4",blockWrapperAvatar:"Message_blockWrapperAvatar__21Cbh",blockAvatar:"Message_blockAvatar__3Gk05",avatar:"Message_avatar__3Va-Z",blockWrapperMessage:"Message_blockWrapperMessage__rl2iL",blockMessage:"Message_blockMessage__2zW3o",time:"Message_time__1VaAK",message:"Message_message__3dvkm",messageName:"Message_messageName__2GAjp",messageText:"Message_messageText__1x72E"}},function(e,a,t){e.exports={link:"Header_link__UzlIS",active:"Header_active__2wsLH",block:"Header_block__2wxpX",header:"Header_header__2R4GI"}},,,function(e,a,t){e.exports={button:"Affairs_button__1KMsq",buttonActive:"Affairs_buttonActive__13xNg",high:"Affairs_high__Pl4qX",middle:"Affairs_middle__3-2Qh",low:"Affairs_low__JkHBo"}},function(e,a,t){e.exports={greeting:"Greeting_greeting__34pjI",error:"Greeting_error__2XhU0",input:"Greeting_input__1tcWh",errorInput:"Greeting_errorInput__1l-C5",button:"Greeting_button__3UOl9",count:"Greeting_count__MO12j"}},,,function(e,a,t){e.exports={input:"SuperInputText_input__3kNvV",superInput:"SuperInputText_superInput__3sOYe",errorInput:"SuperInputText_errorInput__2MMEb",error:"SuperInputText_error__1BD77"}},,function(e,a,t){e.exports={default:"SuperButton_default__1DkXi",red:"SuperButton_red__EOOsr",button:"SuperButton_button__3Kpeg",blink:"SuperButton_blink__rEsx0"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__3H0Ad",checkbox:"SuperCheckbox_checkbox__cJ9jP",spanClassName:"SuperCheckbox_spanClassName__Qliny"}},,function(e,a,t){e.exports={blue:"HW4_blue__1sSA2",column:"HW4_column__hDYc5",testSpanError:"HW4_testSpanError__L2IvJ"}},,,,,,function(e,a,t){e.exports={App:"App_App__tzXFv"}},function(e,a,t){e.exports=t.p+"static/media/avatar-bin.9902c1a1.jpg"},,,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=(t(34),t(24)),o=t.n(s),i=t(6),u=t.n(i),m=t(7),_=t(1),p=t(5),d=t.n(p);var E=function(e){return r.a.createElement("div",{className:d.a.wrapperMessage},r.a.createElement("div",{className:d.a.blockWrapperAvatar},r.a.createElement("div",{className:d.a.blockAvatar},r.a.createElement("div",{className:d.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})))),r.a.createElement("div",{className:d.a.blockWrapperMessage},r.a.createElement("div",{className:d.a.blockMessage},r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.messageName},e.name),r.a.createElement("div",{className:d.a.messageText},e.message)),r.a.createElement("div",{className:d.a.time},e.time))))},v=t(25),f={avatar:t.n(v).a,name:"Some Name",message:"some text",time:"22:00"};var b=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:f.avatar,name:f.name,message:f.message,time:f.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(4),g=t(9),k=t.n(g);var N=function(e){var a=k.a[e.affair.priority];return r.a.createElement("div",null,e.affair.name," : priority - ",r.a.createElement("span",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.button},"Delete"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=function(a){e.setFilter(a.currentTarget.value)},n=function(a){return e.filter===a?k.a.buttonActive:k.a.button};return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:t,className:n("all"),value:"all"},"All"),r.a.createElement("button",{onClick:t,className:n("high"),value:"high"},"High"),r.a.createElement("button",{onClick:t,className:n("middle"),value:"middle"},"Middle"),r.a.createElement("button",{onClick:t,className:n("low"),value:"low"},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(x),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(h.a)(c,2),o=s[0],i=s[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{filter:o,data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(28),A=t(10),O=t.n(A),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onEnter,o=e.showError,i=e.hideError,u=l?O.a.errorInput:"";return r.a.createElement("div",{className:O.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:u,onKeyDown:s,onBlur:o,onFocus:i}),r.a.createElement("div",{className:O.a.error},l)),r.a.createElement("button",{onClick:n,className:O.a.button},"add"),r.a.createElement("span",{className:O.a.count},c))},M=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),u=Object(h.a)(i,2),m=u[0],_=u[1],p=function(){s?(_(""),t(s.trim()),alert("Hello  ".concat(s,"!")),o("")):_("name is require!")},d=a.length;return r.a.createElement(y,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:p,error:m,totalUsers:d,onEnter:function(e){"Enter"===e.key&&(s?(p(),_(""),console.log(m)):_("name is require!"))},showError:function(){""===s&&_("name is require!")},hideError:function(){_("")}})},S=t(42);var I=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(M,{users:t,addUserCallback:function(e){var a={_id:Object(S.a)(),name:e};l([].concat(Object(w.a)(t),[a])),console.log(t)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(8),W=t(13),H=t.n(W),B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(H.a.error," ").concat(o||""),m="".concat(H.a.input," ").concat(c?H.a.errorInput:H.a.superInpet," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:u},c))},G=t(18),U=t.n(G),J=t(15),K=t.n(J),P=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(K.a.button," ").concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},q=t(16),D=t.n(q),F=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:D.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:D.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(h.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(B,{className:U.a.blue}),r.a.createElement(P,null,"default"),r.a.createElement(P,{red:!0,onClick:s},"delete "),r.a.createElement(P,{disabled:!0},"disabled"),r.a.createElement(F,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(F,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var L=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(I,null),r.a.createElement(X,null))};var z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var V=function(){return r.a.createElement("div",null,"Junior")};var Y=function(){return r.a.createElement("div",null,"Junior Plus")},Q="/pre-junior",R="/junior",Z="/junior-plus";var $=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:Q})}}),r.a.createElement(_.b,{path:Q,render:function(){return r.a.createElement(L,null)}}),r.a.createElement(_.b,{path:R,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(_.b,{path:Z,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(z,null)}})))};var ee=function(){return r.a.createElement("div",{className:u.a.header},r.a.createElement(m.b,{to:Q,className:u.a.link,activeClassName:u.a.active},"pre-junior"),r.a.createElement(m.b,{to:R,className:u.a.link,activeClassName:u.a.active},"junior"),r.a.createElement(m.b,{to:Z,className:u.a.link,activeClassName:u.a.active},"junior+"),r.a.createElement("div",{className:u.a.block}))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(ee,null),r.a.createElement($,null)))};var te=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.9c6e6874.chunk.js.map