(this["webpackJsonpmathbot-proto"]=this["webpackJsonpmathbot-proto"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(3),o=n.n(a),s=n(14),c=n.n(s),u=(n(21),n(0)),i=n.n(u),f=n(2),p=n(8),x=n(9),l=n(12),h=n(11),b=(n(23),n(15)),d=n(10),k=n(4),y=n(7);var w=[{name:"Double inverse is identity",match:{type:"div",a:1,b:{type:"div",a:1,b:"x"}},to:function(e){return e.x}},{name:"Sum of squares of sin and cos is 1",match:{type:"add",a:{type:"pow",a:{type:"cos",a:"x"},b:2},b:{type:"pow",a:{type:"sin",a:"x"},b:2}},to:function(e){return 1}}];function m(e,t){var n=v(e,t.match);if(n.error){if("object"===typeof e){if("undefined"!==typeof e.a){var r=m(e.a,t);if(!r.error){var a=Object.assign({},e);return a.a=r.data,{error:!1,data:a}}}if("undefined"!==typeof e.b){var o=m(e.b,t);if(!o.error){var s=Object.assign({},e);return s.b=o.data,{error:!1,data:s}}}}return{error:!0}}return{error:!1,data:t.to(n.data)}}function v(e,t){if("number"===typeof t)return e===t?{error:!1,data:{}}:{error:!0};if("string"===typeof t)return{error:!1,data:Object(y.a)({},t,e)};if("object"===typeof t){if("object"!==typeof t)return{error:!0};if(t.type===e.type){var n={},r={};return"undefined"!==typeof t.a&&(n=v(e.a,t.a)),"undefined"!==typeof t.b&&(r=v(e.b,t.b)),{error:n.error||r.error,data:Object(k.a)(Object(k.a)({},n.data),r.data)}}return{error:!0}}}var g={toString:function e(t){if("number"===typeof t)return t;if("string"===typeof t)return t;if("object"===typeof t){var n=t.type;if("add"===n)return"("+e(t.a)+") + ("+e(t.b)+")";if("sub"===n)return"("+e(t.a)+") - ("+e(t.b)+")";if("mul"===n)return"("+e(t.a)+") * ("+e(t.b)+")";if("div"===n)return"("+e(t.a)+") / ("+e(t.b)+")";if("pow"===n)return"("+e(t.a)+") ^ ("+e(t.b)+")";if("cos"===n)return"cos("+e(t.a)+")";if("sin"===n)return"sin("+e(t.a)+")"}},applyRewrite:m,allRewrites:function(e){return w.filter((function(t){return!m(e,t).error}))}};function j(){return(j=Object(f.a)(i.a.mark((function e(t,n){var r,a,o,s,c,u,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Hello!");case 2:return e.next=4,t("Do you want to do a proof or do you want to learn about a new topic?");case 4:return e.next=6,t("Or do you want to simplify something?");case 6:return e.next=8,n(["Proof","Topic","Simplify","Not right now"]);case 8:if(0!==(r=e.sent)){e.next=20;break}return e.next=12,fetch("./proof.json");case 12:return a=e.sent,e.next=15,a.json();case 15:return o=e.sent,e.next=18,B(t,n,o[0]);case 18:e.next=44;break;case 20:if(1!==r){e.next=31;break}return e.next=23,fetch("./content.json");case 23:return s=e.sent,e.next=26,s.json();case 26:return c=e.sent,e.next=29,O(t,n,c);case 29:e.next=44;break;case 31:if(2!==r){e.next=42;break}return e.next=34,fetch("./simplify.json");case 34:return u=e.sent,e.next=37,u.json();case 37:return f=e.sent,e.next=40,G(t,n,f);case 40:e.next=44;break;case 42:return e.next=44,t("No worries, talk later.");case 44:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t,n){return q.apply(this,arguments)}function q(){return(q=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Great, which topic would you like to learn about?");case 2:return a=r.map((function(e){return e.name})),e.next=5,n(a);case 5:return o=e.sent,s=r[o],e.next=9,I(t,n,s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,n){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Great choice!");case 2:return e.next=4,t("Which subtopic?");case 4:return a=r.subtopics.map((function(e){return e.name})),e.next=7,n(a);case 7:return o=e.sent,s=r.subtopics[o],e.next=11,T(t,n,s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n){return z.apply(this,arguments)}function z(){return(z=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s,c,u,f,p,x,l,h,b,d,y,w,m,v,g,j,O,q,I,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("First we do a quiz to assess your prior knowledge");case 2:return e.next=4,t("Ready?");case 4:return e.next=6,n(["Yes, ready!"]);case 6:return e.next=8,S(t,n,r.quiz);case 8:return a=e.sent,o=a.correct,s=r.quiz.length,c=o/s,u=Math.round(100*c),f=a.explWrong,e.next=16,t("Great work on the quiz!");case 16:return e.next=18,t("You got "+o+" out of "+s+" or "+u+"% correct");case 18:if(!(u<=50)){e.next=23;break}return e.next=21,t("I recommend you work on this subject");case 21:e.next=35;break;case 23:if(!(u<=75)){e.next=28;break}return e.next=26,t("You did well on this quiz but you can always fill your knowledge holes");case 26:e.next=35;break;case 28:if(!(u<=90)){e.next=33;break}return e.next=31,t("You did very well, but feel free to study this subject anyway");case 31:e.next=35;break;case 33:return e.next=35,t("You did great, and your time is probably better spent on something more challenging");case 35:return e.next=37,t("So do you want to work or skip?");case 37:return e.next=39,n(["Work","Skip"]);case 39:if(0===e.sent){e.next=44;break}return e.next=43,t("That's ok, I will mark it as complete");case 43:return e.abrupt("return");case 44:p=!0;case 45:if(!p){e.next=151;break}return x=r.explanations.map((function(e,t){var n=f.filter((function(e){return e===t})).length;return Object(k.a)(Object(k.a)({},e),{},{priority:n})})),l=x.sort((function(e,t){return t.priority-e.priority})),e.next=50,t("We have three things we can do: explanations, questions, and finishing up and retaking the quiz.");case 50:return e.next=52,t("I have sorted the explanations based on what you got wrong in the quiz.");case 52:return e.next=54,t("I recommend doing a few explanations first, then questions if you have any, and retaking the quiz when you feel ready.");case 54:return e.next=56,t("Feel free to learn from other resources as well.");case 56:return e.next=58,n(["Explanation","Question","Retake Quiz"]);case 58:if(0!==(h=e.sent)){e.next=82;break}return e.next=62,t("Which explanation would you like?");case 62:return b=l.map((function(e){return e.name})),e.next=65,n(b);case 65:return d=e.sent,y=l[d],e.next=69,t(y.text);case 69:return e.next=71,n(["I understand!","I don't understand..."]);case 71:if(0!==(w=e.sent)){e.next=77;break}return e.next=75,t("Great!");case 75:e.next=80;break;case 77:if(1!==w){e.next=80;break}return e.next=80,t("I'm sorry you didn't understand. I'll report this to my creators.");case 80:e.next=149;break;case 82:if(1!==h){e.next=105;break}return e.next=85,t("Which question would you like to ask?");case 85:return m=r.questions.map((function(e){return e.q})),e.next=88,n(m);case 88:return v=e.sent,g=r.questions[v],e.next=92,t(g.a);case 92:return e.next=94,n(["I understand!","I don't understand..."]);case 94:if(0!==(j=e.sent)){e.next=100;break}return e.next=98,t("Great!");case 98:e.next=103;break;case 100:if(1!==j){e.next=103;break}return e.next=103,t("I'm sorry you didn't understand. I'll report this to my creators.");case 103:e.next=149;break;case 105:if(2!==h){e.next=149;break}return e.next=108,t("It's great that you feel ready. I will start the quiz.");case 108:return e.next=110,S(t,n,r.quiz);case 110:return O=e.sent,q=O.correct,I=q/s,C=Math.round(100*I),f=O.explWrong,e.next=117,t("Great work on the quiz!");case 117:return e.next=119,t("You got "+q+" out of "+s+" or "+C+"% correct");case 119:if(!(C>u)){e.next=122;break}return e.next=122,t("You did better this time compared to last time!");case 122:if(!(C<=50)){e.next=127;break}return e.next=125,t("I recommend you work even more on this subject");case 125:e.next=139;break;case 127:if(!(C<=75)){e.next=132;break}return e.next=130,t("You did well on this quiz but you can always fill your knowledge holes");case 130:e.next=139;break;case 132:if(!(C<=90)){e.next=137;break}return e.next=135,t("You did very well, but feel free to study this subject more anyway");case 135:e.next=139;break;case 137:return e.next=139,t("You did great, and your time is probably better spent on something more challenging");case 139:return e.next=141,t("So do you want to work even more or are you done?");case 141:return e.next=143,n(["Work","Done"]);case 143:if(0===e.sent){e.next=149;break}return e.next=147,t("That's ok, I will mark it as complete");case 147:return p=!1,e.abrupt("return");case 149:e.next=45;break;case 151:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return Y.apply(this,arguments)}function Y(){return(Y=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=0,o=[],e.next=4,t("Ok, first question:");case 4:s=Object(d.a)(r),e.prev=5,s.s();case 7:if((c=s.n()).done){e.next=19;break}return u=c.value,e.next=11,t(u.question);case 11:return e.next=13,n(u.choices);case 13:return e.sent===u.correct?a+=1:o.push.apply(o,Object(b.a)(u.explanations)),e.next=17,t("Thank you for the answer");case 17:e.next=7;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),s.e(e.t0);case 24:return e.prev=24,s.f(),e.finish(24);case 27:return e.next=29,t("That was all the questions!");case 29:return e.abrupt("return",{correct:a,explWrong:o});case 30:case"end":return e.stop()}}),e,null,[[5,21,24,27]])})))).apply(this,arguments)}function B(e,t,n){return W.apply(this,arguments)}function W(){return(W=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s,c,u,p,x,l,h,b,k,y,w,m,v,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Great, today we will prove '"+r.name+"'. ");case 2:a="init",o=[],s=!0;case 5:if(!s){e.next=83;break}return c=r.states[a],o.push(a),e.next=10,t("Here is the status of the proof:");case 10:if(0===c.have.length){e.next=30;break}return e.next=13,t("Here is what we have:");case 13:u=Object(d.a)(c.have),e.prev=14,u.s();case 16:if((p=u.n()).done){e.next=22;break}return x=p.value,e.next=20,t("\u2022 "+x);case 20:e.next=16;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(14),u.e(e.t0);case 27:return e.prev=27,u.f(),e.finish(27);case 30:if(0===c.know.length){e.next=50;break}return e.next=33,t("Here is what we know:");case 33:l=Object(d.a)(c.know),e.prev=34,l.s();case 36:if((h=l.n()).done){e.next=42;break}return b=h.value,e.next=40,t("\u2022 "+b);case 40:e.next=36;break;case 42:e.next=47;break;case 44:e.prev=44,e.t1=e.catch(34),l.e(e.t1);case 47:return e.prev=47,l.f(),e.finish(47);case 50:if(1!==c.goal.length){e.next=57;break}return e.next=53,t("There is only one thing to prove:");case 53:return e.next=55,t("\u2192 "+c.goal[0]);case 55:e.next=61;break;case 57:return e.next=59,t("There are multiple things to prove, but for now only worry about this:");case 59:return e.next=61,t("\u2192 "+c.goal[0]);case 61:return e.next=63,t("What do you want to do?");case 63:return k=c.directions.map((function(e){return e.name})),y=k.concat(o.length<=1?[]:["Back","Restart"]),w=k.length,m=w+1,e.next=69,n(y);case 69:if((v=e.sent)!==w){e.next=76;break}o.pop(),g=o.pop(),a=g,e.next=81;break;case 76:if(v!==m){e.next=80;break}a="init",e.next=81;break;case 80:return e.delegateYield(i.a.mark((function e(){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.directions[v],o=function(){var e=Object(f.a)(i.a.mark((function e(r){var c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.goto){e.next=12;break}if("done"!==r.goto){e.next=7;break}return e.next=4,t("Great work! You finished the proof!");case 4:s=!1,e.next=10;break;case 7:return e.next=9,t("Great!");case 9:a=r.goto;case 10:e.next=28;break;case 12:if(!r.error){e.next=19;break}return e.next=15,t(r.error);case 15:return e.next=17,t("Try again");case 17:e.next=28;break;case 19:if(!r.directions){e.next=28;break}return e.next=22,t("Which of these?");case 22:return e.next=24,n(r.directions.map((function(e){return e.name})));case 24:return c=e.sent,u=r.directions[c],e.next=28,o(u);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=4,o(r);case 4:case"end":return e.stop()}}),e)}))(),"t2",81);case 81:e.next=5;break;case 83:case"end":return e.stop()}}),e,null,[[14,24,27,30],[34,44,47,50]])})))).apply(this,arguments)}function G(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("Great, which simplification would you like to do?");case 2:return a=r.map((function(e){return e.name})),e.next=5,n(a);case 5:return o=e.sent,s=r[o],e.next=9,D(t,n,s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,n){return F.apply(this,arguments)}function F(){return(F=Object(f.a)(i.a.mark((function e(t,n,r){var a,o,s,c,u,f,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.expr,o=!0;case 2:if(!o){e.next=36;break}if(a!==r.goal){e.next=8;break}return e.next=6,t("You have reached the goal! Congratulations!");case 6:return o=!1,e.abrupt("break",36);case 8:return e.next=10,t("We have the following expression:");case 10:return e.next=12,t(g.toString(a));case 12:return e.next=14,t("I will compile all the rewritings you can use.");case 14:if(s=g.allRewrites(a),c=s.map((function(e){return e.name})),0!==s.length){e.next=21;break}return e.next=19,t("I did not find any rewrites!");case 19:e.next=34;break;case 21:return e.next=23,t("Here are the ones you can use:");case 23:return e.next=25,n(c);case 25:if(u=e.sent,f=s[u],(p=g.applyRewrite(a,f)).error){e.next=32;break}a=p.data,e.next=34;break;case 32:return e.next=34,t("Could not apply that one.");case 34:e.next=2;break;case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,t){return j.apply(this,arguments)};var N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={chat:[],writing:!1,choices:[],resolveChoice:function(){}},M(function(){var e=Object(f.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.state.chat.concat({msg:t,sentByBot:!0}),r.setState({writing:!0}),e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:r.setState({writing:!1,chat:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(f.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){r.setState({choices:t,resolveChoice:function(t){e(t)}})}));case 2:return n=e.sent,a=r.state.chat.concat({msg:r.state.choices[n],sentByBot:!1}),r.setState({choices:[],resolveChoice:function(){},chat:a}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state.chat.map((function(e,t){return Object(r.jsx)(H,{value:e.msg,sender:e.sentByBot?"bot":"user"},t)})),n=this.state.writing?Object(r.jsx)(H,{value:"...",sender:"bot"}):null,a=this.state.choices.map((function(t,n){return Object(r.jsx)(P,{value:t,onClick:function(){return e.state.resolveChoice(n)}},n)}));return Object(r.jsxs)("div",{id:"chatarea",children:[t,n,a,Object(r.jsx)("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t},children:" "})]})}}]),n}(o.a.Component),H=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"Message "+this.props.sender,children:[" ",Object(r.jsxs)("div",{className:"MessageContainer",children:[this.props.value," "]})]})}}]),n}(o.a.Component),P=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(r.jsx)("input",{type:"button",className:"choice",value:this.props.value,onClick:this.props.onClick})}}]),n}(o.a.Component),E=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(N,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),J()}},[[24,1,2]]]);
//# sourceMappingURL=main.dc6b1a3a.chunk.js.map