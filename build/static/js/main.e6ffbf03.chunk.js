(this.webpackJsonpmessenger_app=this.webpackJsonpmessenger_app||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},58:function(e,a,t){},63:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(13),o=t.n(r),c=(t(47),t(28)),m=t(26),i=t.n(m),l=(t(58),t(88)),u=t(84),f=t(85),p=Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},s.a.createElement(l.a,{className:n?"message__userCard":"message__guestCard"},s.a.createElement(u.a,null,s.a.createElement(f.a,{variant:"h5",component:"h2",color:"white"},!n&&"".concat(t.username||"Unknown User"," :")," ",t.message))))})),d=t(89),g=t(87),b=t(38),h=i.a.initializeApp({apiKey:"AIzaSyBF6sMiA5Qrvg7so1Z9z37rOYq7NcvqlvM",authDomain:"facebook-messenger-f2fef.firebaseapp.com",databaseURL:"https://facebook-messenger-f2fef.firebaseio.com",projectId:"facebook-messenger-f2fef",storageBucket:"facebook-messenger-f2fef.appspot.com",messagingSenderId:"524101676363",appId:"1:524101676363:web:483bef29e2dfe8f5084cce",measurementId:"G-H71Z8T8J1W"}).firestore(),E=t(37),v=t.n(E),_=t(86);t(63);var w=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),m=Object(c.a)(o,2),l=m[0],u=m[1],f=Object(n.useState)(""),E=Object(c.a)(f,2),w=E[0],k=E[1];return Object(n.useEffect)((function(){k(prompt("please enter your name"))}),[]),Object(n.useEffect)((function(){h.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){u(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),s.a.createElement("div",{className:"app"},s.a.createElement("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"}),s.a.createElement("h1",null,"Send your messages Here"),s.a.createElement("h2",null,"Welcome ",w),s.a.createElement("form",{className:"app__form"},s.a.createElement(d.a,{className:"app__formControl"},s.a.createElement(g.a,{className:"app__input",placeholder:"Enter a message...",value:t,onChange:function(e){return r(e.target.value)}}),s.a.createElement(_.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),h.collection("messages").add({message:t,username:w,timestamp:i.a.firestore.FieldValue.serverTimestamp()}),r("")}},s.a.createElement(v.a,null)))),s.a.createElement(b.a,null,l.map((function(e){var a=e.id,t=e.message;return s.a.createElement(p,{key:a,username:w,message:t})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e6ffbf03.chunk.js.map