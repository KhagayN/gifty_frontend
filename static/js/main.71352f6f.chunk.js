(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),s=o(3),i=o.n(s),a=(o(13),o(5)),r=o(6),h=o(8),d=o(7),u=(o(14),o(4)),l=o(1),p=function(e){Object(h.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(a.a)(this,o);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).json={elements:[{type:"checkbox",name:"dadTv",title:"Does your dad watch television?",isRequired:!0,choices:["Yes","No"]},{type:"checkbox",name:"shopFrequency",title:"How often does your dad shop?",isRequired:!0,choices:["All the time","Sometimes","My mom shops for him"]},{type:"checkbox",name:"dadWorkPlace",title:"Does your dad work from home?",isRequired:!0,choices:["Yes","No"]},{type:"checkbox",name:"dadBluetooth",title:"Does your dad have bluetooth headphones?",isRequired:!0,choices:["Yes","No"]},{type:"checkbox",name:"dadHealthCareWatch",title:"Does your dad have an electronic health care watch?",isRequired:!0,choices:["Yes","No"]},{type:"checkbox",name:"dadWorkout",title:"Does your dad like working out?",isRequired:!0,choices:["Yes","No"]},{type:"checkbox",name:"dadGlasses",title:"Does your dad wear glasses?",isRequired:!0,choices:["Yes","No"]}]},e}return Object(r.a)(o,[{key:"onComplete",value:function(e,t){console.log("Survey results: "+JSON.stringify(e.data)),fetch("https://testing-336621.nn.r.appspot.com/collect-feedback",{method:"POST",body:JSON.stringify(e.data)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){fetch("https://testing-336621.nn.r.appspot.com/").then((function(e){return e.json()})).then((function(e){return console.log(e)}));var e=new u.Model(this.json);return Object(l.jsx)(u.Survey,{model:e,onComplete:this.onComplete})}}]),o}(n.Component),m=p,y=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.71352f6f.chunk.js.map