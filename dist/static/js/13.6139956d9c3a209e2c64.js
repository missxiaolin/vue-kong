webpackJsonp([13],{"6Qob":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t("BXx+");var r=t("T452"),l=t("Kf/3"),i=t("rV7I"),a={name:"login",data:function(){return{loginForm:{mobile:"",password:""},loginRules:{mobile:[{required:!0,trigger:"blur",validator:function(e,o,t){o?o.length<11?t(new Error("手机号不能小于11位")):t():t(new Error("请输入正确的手机号"))}}],password:[{required:!0,trigger:"blur",validator:function(e,o,t){o.length<5?t(new Error("密码不能小于5位")):t()}}]},loading:!1}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(o){if(!o)return!1;var t;e.loading=!0,(t=e.loginForm,Object(n.a)({url:"/kong/user/login",method:"post",data:t})).then(function(o){var t=o.data;t.code==r.d?(Object(l.c)(t.data.token),e.$router.push({path:"/"}),e.loading=!1):Object(i.Message)(t.message)})})}}},s={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:e.loginForm,rules:e.loginRules,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title"},[e._v("登录")]),e._v(" "),t("el-form-item",{attrs:{prop:"mobile"}},[t("el-input",{attrs:{name:"mobile",type:"text",autoComplete:"on",placeholder:"mobile"},model:{value:e.loginForm.mobile,callback:function(o){e.$set(e.loginForm,"mobile",o)},expression:"loginForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{name:"password",type:"password",autoComplete:"on",placeholder:"password"},nativeOn:{keyup:function(o){return"button"in o||!e._k(o.keyCode,"enter",13,o.key,"Enter")?e.handleLogin(o):null}},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(o){return o.preventDefault(),e.handleLogin(o)}}},[e._v("\n        登录\n      ")])],1)],1)],1)},staticRenderFns:[]};var u=t("D8HT")(a,s,!1,function(e){t("oJu3")},null,null);o.default=u.exports},oJu3:function(e,o){}});
//# sourceMappingURL=13.6139956d9c3a209e2c64.js.map