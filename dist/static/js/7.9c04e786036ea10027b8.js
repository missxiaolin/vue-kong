webpackJsonp([7],{ijJX:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Hmpo"),o=t.n(a),n=t("vYJH"),s=t.n(n),u=t("vMJZ"),l=t("T452"),i=t("rV7I"),m={data:function(){return{rules:{name:[{required:!0,message:"请输入用户名称",trigger:"blur"}],mobile:{required:!0,message:"请输入正确手机号",trigger:"blur"},password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"}]},ruleForm:{id:this.$route.params.id,name:"",mobile:"",password:""}}},created:function(){0!=this.ruleForm.id&&this.userInfo()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.add()})},add:function(){var e=this;return s()(o.a.mark(function r(){var t,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.ruleForm,r.next=3,Object(u.a)(t);case 3:a=r.sent,e.loading=!0,a.data.code==l.d?e.$router.push({path:"/user"}):Object(i.Message)(a.data.message);case 6:case"end":return r.stop()}},r,e)}))()},userInfo:function(){var e=this;return s()(o.a.mark(function r(){var t,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e,a={id:e.$route.params.id},r.next=4,Object(u.b)(a).then(function(e){e.data.code==l.d?(t.ruleForm.name=e.data.data.name,t.ruleForm.mobile=e.data.data.mobile,t.loading=!1):Object(i.Message)(e.data.message),t.loading=!0});case 4:case"end":return r.stop()}},r,e)}))()},resetForm:function(e){this.$refs[e].resetFields()}}},c={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名称",prop:"name"}},[t("el-input",{attrs:{name:"name",type:"text",placeholder:"用户名称"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号：",prop:"mobile"}},[t("el-input",{attrs:{name:"mobile",type:"number",autoComplete:"off",placeholder:"手机号码"},model:{value:e.ruleForm.mobile,callback:function(r){e.$set(e.ruleForm,"mobile",r)},expression:"ruleForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码：",prop:"password"}},[t("el-input",{attrs:{name:"password",type:"text",autoComplete:"off",placeholder:"密码",onfocus:"this.type='password'"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},d=t("D8HT")(m,c,!1,null,null,null);r.default=d.exports},vMJZ:function(e,r,t){"use strict";r.c=function(e){return Object(a.a)({url:"/kong/user/lists",method:"get",params:e})},r.a=function(e){return Object(a.a)({url:"/kong/user/add",method:"post",data:e})},r.b=function(e){return Object(a.a)({url:"/kong/user/info",method:"get",params:e})},r.d=function(e){return Object(a.a)({url:"/kong/user/status",method:"post",data:e})};var a=t("BXx+")}});
//# sourceMappingURL=7.9c04e786036ea10027b8.js.map