webpackJsonp([0],{CWf5:function(t,e){},nWjE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"CheckCustomer",data:function(){return{State:!0,Checked:[],Arr:[{State:!1,id:"1"},{State:!1,id:"2"},{State:!1,id:"3"},{State:!1,id:"4"},{State:!1,id:"5"}]}},methods:{ChangeState:function(){this.State=!this.State},ChangeCheck:function(t){this.Checked=[],this.Arr[t].State=!this.Arr[t].State,this.Checked=this.Arr.map(function(t){if(t.State)return console.log(t),t.id})}},watch:{Checked:function(t){console.log(t)}}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"CheckCustomer"},[e("h1",[this._v("杰杰美女")])])}]};var r=n("VU/8")(i,a,!1,function(t){n("CWf5")},null,null);e.default=r.exports}});
//# sourceMappingURL=0.8fd919d5a666bbdb5d0b.js.map