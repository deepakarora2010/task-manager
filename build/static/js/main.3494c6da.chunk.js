(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),a=n.n(s),i=(n(10),n(5)),o=(n(11),n(0)),d=function(e){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{children:e.title})})};d.defaultProps={title:"Task Tracker"};var j=d,l=function(e){var t=e.text,n=e.color,r=e.onClick;return Object(o.jsx)("button",{onClick:r,style:{backgroundColor:n},className:"btn",children:t})};l.defaultProps={color:"red"};var u=l,b=n(3),h=function(e){var t=e.task;return Object(o.jsxs)("div",{className:"task",children:[Object(o.jsxs)("h3",{children:[t.description," ",Object(o.jsx)(b.a,{})]}),Object(o.jsx)("p",{children:t.day})]})},k=function(e){var t=e.tasks;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(h,{task:e},e.id)}))})};var O=function(){var e=Object(r.useState)([{id:1,description:"First Task",day:"01 January 2000",reminder:!0},{id:2,description:"second Task",day:"01 January 2020",reminder:!0},{id:3,description:"Third Task",day:"10 October 2020",reminder:!0}]),t=Object(i.a)(e,2),n=t[0];return t[1],Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{}),Object(o.jsx)(u,{text:"Add",color:"green",onClick:function(e){console.log(e)}}),Object(o.jsx)(k,{tasks:n})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.3494c6da.chunk.js.map