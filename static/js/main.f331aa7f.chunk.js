(this["webpackJsonpcost-simulator"]=this["webpackJsonpcost-simulator"]||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(19),l=n.n(r),c=(n(27),n(8)),s=n(9),u=n(11),o=n(10),d=n(12),m=n(6),g=n(5),h=(n(28),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={ingredient:[],volume:[],price:[],unit:[],used:[],isActived:!0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=["\u0e21\u0e34\u0e25\u0e25\u0e34\u0e01\u0e23\u0e31\u0e21","\u0e01\u0e23\u0e31\u0e21","\u0e01\u0e34\u0e42\u0e25\u0e01\u0e23\u0e31\u0e21","\u0e1f\u0e2d\u0e07","\u0e21\u0e34\u0e25\u0e25\u0e34\u0e25\u0e34\u0e15\u0e23","\u0e25\u0e34\u0e15\u0e23"].map((function(e,t){return i.a.createElement("option",{value:e,key:t},e)})),n=!(this.state.ingredient.length>0)||(!(this.state.volume.length>0)||(!(this.state.price.length>0)||!(this.state.used.length>0)));return i.a.createElement("div",{className:"InputConfig"},i.a.createElement("input",{type:"text",placeholder:"\u0e27\u0e31\u0e15\u0e16\u0e38\u0e14\u0e34\u0e1a",onChange:function(t){return e.setState({ingredient:t.target.value})},value:this.state.ingredient}),i.a.createElement("input",{type:"number",placeholder:"\u0e1b\u0e23\u0e34\u0e21\u0e32\u0e13",onChange:function(t){return e.setState({volume:t.target.value})},value:this.state.volume}),i.a.createElement("select",{onClick:function(t){return e.setState({unit:t.target.value})},disabled:!(this.state.volume.length>0)},i.a.createElement("option",{defaultValue:!0,hidden:!0},"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e19\u0e48\u0e27\u0e22"),t),i.a.createElement("input",{type:"number",placeholder:"\u0e23\u0e32\u0e04\u0e32 (\u0e1a\u0e32\u0e17)",onChange:function(t){return e.setState({price:t.target.value})},value:this.state.price}),i.a.createElement("input",{type:"number",placeholder:"\u0e1b\u0e23\u0e34\u0e21\u0e32\u0e13\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e44\u0e1b ("+this.state.unit+")",onChange:function(t){return e.setState({used:t.target.value})},value:this.state.used}),i.a.createElement("button",{type:"submit",onClick:function(){e.props.dataSubmit(e.state.ingredient,e.state.volume,e.state.price,e.state.unit,e.state.used),e.setState({ingredient:[],volume:[],price:[],unit:[],used:[]})},disabled:n},"\u0e04\u0e33\u0e19\u0e27\u0e13"))}}]),t}(a.Component)),p=(n(29),function(e){return i.a.createElement("div",{className:"Sum"},i.a.createElement("h3",null,"\u0e27\u0e31\u0e15\u0e16\u0e38\u0e14\u0e34\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),i.a.createElement("li",null,e.ingredient),i.a.createElement("h3",null,"\u0e23\u0e32\u0e04\u0e32\u0e15\u0e49\u0e19\u0e17\u0e38\u0e19"),i.a.createElement("p",null,e.totalPrice," \u0e1a\u0e32\u0e17"),i.a.createElement("button",{className:"Back"},i.a.createElement(m.b,{to:"/"},"\u0e01\u0e25\u0e31\u0e1a")),i.a.createElement("button",{className:"Fin",onClick:e.reset},i.a.createElement(m.b,{to:"/",exact:!0},"\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e34\u0e49\u0e19")))}),E=(n(35),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={ingredients:[1],ingredientsVolume:[],ingredientsPrice:[],ingredientsUsed:[],ingredientsUnit:[],totalPrice:[]},n.setIngredient=function(e,t,a,i,r){var l=r*a/t;n.setState({ingredients:n.state.ingredients.concat(e),ingredientsVolume:n.state.ingredientsVolume.concat(t),ingredientsPrice:n.state.ingredientsPrice.concat(a),ingredientsUnit:n.state.ingredientsUnit.concat(i),ingredientsUsed:n.state.ingredientsUsed.concat(r),totalPrice:n.state.totalPrice.concat(l)})},n.resetIngredient=function(){n.setState({ingredients:[],ingredientsVolume:[],ingredientsPrice:[],ingredientsUnit:[],ingredientsUsed:[],totalPrice:[]})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.ingredients.map((function(t,n){var a=(e.state.ingredientsUsed[n]*e.state.ingredientsPrice[n]/e.state.ingredientsVolume[n]).toPrecision(3);return i.a.createElement("div",{key:n,className:"TextStyle"},i.a.createElement("h4",null,"Ingredient ",n+1,"  "),i.a.createElement("p",null,i.a.createElement("b",null,"\u0e27\u0e31\u0e15\u0e16\u0e38\u0e14\u0e34\u0e1a")," : ",t," "),i.a.createElement("p",null,i.a.createElement("b",null,"\u0e1b\u0e23\u0e34\u0e21\u0e32\u0e13")," : ",e.state.ingredientsVolume[n]," ",e.state.ingredientsUnit[n]," "),i.a.createElement("p",null,i.a.createElement("b",null,"\u0e23\u0e32\u0e04\u0e32")," : ",(e.state.ingredientsPrice[n]/e.state.ingredientsVolume[n]).toPrecision(3)," \u0e1a\u0e32\u0e17\u0e15\u0e48\u0e2d ",e.state.ingredientsUnit[n]," "),i.a.createElement("p",null,i.a.createElement("b",null,"\u0e1b\u0e23\u0e34\u0e21\u0e32\u0e13\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49")," : ",e.state.ingredientsUsed[n]," ",e.state.ingredientsUnit[n]),i.a.createElement("p",null,i.a.createElement("b",null,"\u0e04\u0e34\u0e14\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e07\u0e34\u0e19")," ",a," \u0e1a\u0e32\u0e17"))})),n=this.state.ingredients.length>0?i.a.createElement("button",{className:"Summa"},i.a.createElement(m.b,{to:"/summary"},"\u0e2a\u0e23\u0e38\u0e1b")):null;return i.a.createElement("div",null,i.a.createElement(g.a,{path:"/",exact:!0,render:function(){return i.a.createElement("div",null,i.a.createElement("h1",{style:{fontFamily:"'Pridi', serif"}},"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c Version 0.0.3"),i.a.createElement(h,{dataSubmit:function(t,n,a,i,r){return e.setIngredient(t,n,a,i,r)}}),i.a.createElement("li",null,t),n)}}),i.a.createElement(g.a,{path:"/summary",render:function(){var t=e.state.totalPrice.reduce((function(e,t){return e+t}),0);return i.a.createElement("div",null,i.a.createElement(p,{ingredient:e.state.ingredients.map((function(e,t){return i.a.createElement("div",{key:t}," ",e," ")})),totalPrice:t,reset:function(){return e.resetIngredient()}}))}}))}}]),t}(a.Component)),v=(n(36),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("div",null,i.a.createElement(E,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f331aa7f.chunk.js.map