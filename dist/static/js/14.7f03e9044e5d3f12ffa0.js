webpackJsonp([14],{"3+3P":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("Hmpo"),l=t.n(o),s=t("vYJH"),a=t.n(s),u=t("VVuV"),i=t("T452"),c=t("rV7I"),n={data:function(){return{rules:{},ruleForm:{hosts:null,protocols:[],methods:[],strip_path:!0,preserve_host:!1,regex_priority:0,service:{id:""}}}},created:function(){},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.request()})},request:function(){var e=this;return a()(l.a.mark(function r(){var t,o;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.ruleForm,r.next=3,Object(u.b)(t);case 3:o=r.sent,e.loading=!0,o.data.code==i.d?(e.$router.push({path:"/kong/routes/list"}),e.loading=!1):Object(c.Message)(o.data.message);case 6:case"end":return r.stop()}},r,e)}))()},resetForm:function(e){this.$refs[e].resetFields()}}},p={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"服务Id：",prop:"protocols"}},[t("el-input",{attrs:{type:"text",placeholder:"服务id"},model:{value:e.ruleForm.service.id,callback:function(r){e.$set(e.ruleForm.service,"id",r)},expression:"ruleForm.service.id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"协议列表：",prop:"protocols"}},[t("el-checkbox-group",{model:{value:e.ruleForm.protocols,callback:function(r){e.$set(e.ruleForm,"protocols",r)},expression:"ruleForm.protocols"}},[t("el-checkbox",{attrs:{label:"http"}}),e._v(" "),t("el-checkbox",{attrs:{label:"https"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"HTTP方法：",prop:"methods"}},[t("el-checkbox-group",{model:{value:e.ruleForm.methods,callback:function(r){e.$set(e.ruleForm,"methods",r)},expression:"ruleForm.methods"}},[t("el-checkbox",{attrs:{label:"POST"}}),e._v(" "),t("el-checkbox",{attrs:{label:"GET"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"路径列表：",prop:"paths"}},[t("el-input",{attrs:{type:"text",placeholder:"/my-path"},model:{value:e.ruleForm.paths,callback:function(r){e.$set(e.ruleForm,"paths",r)},expression:"ruleForm.paths"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"删除匹配前缀：",prop:"strip_path"}},[t("el-radio",{attrs:{label:!0},model:{value:e.ruleForm.strip_path,callback:function(r){e.$set(e.ruleForm,"strip_path",r)},expression:"ruleForm.strip_path"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:!1},model:{value:e.ruleForm.strip_path,callback:function(r){e.$set(e.ruleForm,"strip_path",r)},expression:"ruleForm.strip_path"}},[e._v("否")])],1),e._v(" "),t("el-form-item",{attrs:{label:"请求标头：",prop:"preserve_host"}},[t("el-radio",{attrs:{label:!0},model:{value:e.ruleForm.preserve_host,callback:function(r){e.$set(e.ruleForm,"preserve_host",r)},expression:"ruleForm.preserve_host"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:!1},model:{value:e.ruleForm.preserve_host,callback:function(r){e.$set(e.ruleForm,"preserve_host",r)},expression:"ruleForm.preserve_host"}},[e._v("否")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},m=t("D8HT")(n,p,!1,null,null,null);r.default=m.exports}});
//# sourceMappingURL=14.7f03e9044e5d3f12ffa0.js.map