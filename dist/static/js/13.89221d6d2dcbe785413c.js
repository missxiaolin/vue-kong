webpackJsonp([13],{"rIK+":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("Hmpo"),s=t.n(o),l=t("vYJH"),a=t.n(l),u=t("VVuV"),i=t("T452"),n=t("rV7I"),m={data:function(){return{rules:{name:{required:!0,message:"请输入用户名称",trigger:"blur"}},ruleForm:{id:this.$route.params.id,protocolsList:[],methodsList:[],strip_path:"true",preserve_host:"false",regex_priority:"0",service:{id:this.$route.params.id}}}},created:function(){0!=this.ruleForm.id&&this.routesInfo()},methods:{submitForm:function(e){var r=this,t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;0==r.ruleForm.id?t.request(u.add):t.request(u.updated)})},request:function(e){var r=this;return a()(s.a.mark(function t(){var o,l;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.ruleForm,t.next=3,e(o);case 3:l=t.sent,r.loading=!0,l.data.code==i.d?(r.$router.push({path:"/api"}),r.loading=!1):Object(n.Message)(l.data.message);case 6:case"end":return t.stop()}},t,r)}))()},routesInfo:function(){var e=this;return a()(s.a.mark(function r(){var t,o;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e,o={id:e.$route.params.id},r.next=4,Object(u.info)(o).then(function(e){e.data.code==i.d?(t.ruleForm.name=e.data.data.name,t.loading=!1):Object(n.Message)(e.data.message),t.loading=!0});case 4:case"end":return r.stop()}},r,e)}))()},resetForm:function(e){this.$refs[e].resetFields()}}},c={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"协议列表：",prop:"protocols"}},[t("el-checkbox-group",{model:{value:e.ruleForm.protocolsList,callback:function(r){e.$set(e.ruleForm,"protocolsList",r)},expression:"ruleForm.protocolsList"}},[t("el-checkbox",{attrs:{label:"http"}}),e._v(" "),t("el-checkbox",{attrs:{label:"https"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"HTTP方法：",prop:"methods"}},[t("el-checkbox-group",{model:{value:e.ruleForm.methodsList,callback:function(r){e.$set(e.ruleForm,"methodsList",r)},expression:"ruleForm.methodsList"}},[t("el-checkbox",{attrs:{label:"POST"}}),e._v(" "),t("el-checkbox",{attrs:{label:"GET"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"路径列表：",prop:"paths"}},[t("el-input",{attrs:{name:"paths",type:"text",placeholder:"/my-path"},model:{value:e.ruleForm.paths,callback:function(r){e.$set(e.ruleForm,"paths",r)},expression:"ruleForm.paths"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"域名列表：",prop:"hosts"}},[t("el-input",{attrs:{name:"hosts",type:"text",placeholder:"example.com"},model:{value:e.ruleForm.hosts,callback:function(r){e.$set(e.ruleForm,"hosts",r)},expression:"ruleForm.hosts"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"删除匹配前缀：",prop:"strip_path"}},[t("el-radio",{attrs:{label:"true"},model:{value:e.ruleForm.strip_path,callback:function(r){e.$set(e.ruleForm,"strip_path",r)},expression:"ruleForm.strip_path"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:"false"},model:{value:e.ruleForm.strip_path,callback:function(r){e.$set(e.ruleForm,"strip_path",r)},expression:"ruleForm.strip_path"}},[e._v("否")])],1),e._v(" "),t("el-form-item",{attrs:{label:"请求标头：",prop:"preserve_host"}},[t("el-radio",{attrs:{label:"true"},model:{value:e.ruleForm.preserve_host,callback:function(r){e.$set(e.ruleForm,"preserve_host",r)},expression:"ruleForm.preserve_host"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:"false"},model:{value:e.ruleForm.preserve_host,callback:function(r){e.$set(e.ruleForm,"preserve_host",r)},expression:"ruleForm.preserve_host"}},[e._v("否")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},p=t("D8HT")(m,c,!1,null,null,null);r.default=p.exports}});
//# sourceMappingURL=13.89221d6d2dcbe785413c.js.map