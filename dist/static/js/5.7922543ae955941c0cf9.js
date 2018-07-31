webpackJsonp([5],{"88bc":function(e,r){},KamI:function(e,r,t){"use strict";r.a=function(e){return Object(a.a)({url:"/kong/route/save",method:"post",data:e})},r.e=function(e){return Object(a.a)({url:"/kong/route/search",method:"post",data:e})},r.d=function(e){return Object(a.a)({url:"/kong/route/info",method:"post",params:e})},r.b=function(e){return Object(a.a)({url:"/kong/route/delete",method:"post",params:e})},r.c=function(e){return Object(a.a)({url:"/kong/route/lists",method:"get",params:e})};var a=t("BXx+")},NLP8:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Hmpo"),o=t.n(a),s=t("vYJH"),l=t.n(s),n=t("KamI"),i=t("T452"),u={data:function(){return{rules:{name:[{required:!0,message:"请输入路由名称",trigger:"blur"}],code:{required:!0,message:"请输入编码",trigger:"blur"}},isEdit:!1,resPidVisible:!1,resTypeList:[{resTypeDesc:"模块",resType:0},{resTypeDesc:"页面",resType:1},{resTypeDesc:"按钮",resType:2}],resPidTipMsg:"",searchForm:{name:"",pid:0},searchList:[],searchName:"",ruleForm:{id:this.$route.params.id,is_hidden:!1,icon:"",name:"",route:"",res_uri:"",pid:0,level:0,code:"",type:1}}},created:function(){0!=this.ruleForm.id&&this.routeInfo()},methods:{routeInfo:function(){var e=this;return l()(o.a.mark(function r(){var t,a,s;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t={id:e.ruleForm.id},r.next=3,Object(n.d)(t);case 3:if((a=r.sent).data.code==i.d){r.next=7;break}return r.abrupt("return");case 7:s=a.data.data,e.ruleForm.name=s.name,e.ruleForm.route=s.route,e.ruleForm.type=s.type;case 11:case"end":return r.stop()}},r,e)}))()},onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.add()})},add:function(){var e=this;return l()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(n.a)(e.ruleForm);case 2:r.sent.data.code==i.d&&e.$router.push({path:"/user/route/list"});case 4:case"end":return r.stop()}},r,e)}))()},resetForm:function(e){this.$refs[e].resetFields()},handleGetResPid:function(){var e=this;return l()(o.a.mark(function r(){var t;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(n.e)(e.searchForm);case 2:if((t=r.sent).data.code==i.d){r.next=5;break}return r.abrupt("return");case 5:e.searchList=t.data.data,0==e.searchList.length&&(e.resPidTipMsg="无搜索结果");case 7:case"end":return r.stop()}},r,e)}))()},chooseResPid:function(e){this.ruleForm.level=e.id,this.searchName=e.name,this.resPidVisible=!1}}},c={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"资源类型：",prop:"pid"}},[t("el-select",{attrs:{size:"small",disabled:e.isEdit,placeholder:"请选择"},model:{value:e.ruleForm.pid,callback:function(r){e.$set(e.ruleForm,"pid",r)},expression:"ruleForm.pid"}},e._l(e.resTypeList,function(e){return t("el-option",{key:e.resType,attrs:{label:e.resTypeDesc,value:e.resType}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"上级资源名称："}},[0!=e.ruleForm.pid?[t("el-popover",{ref:"searchPostPopover",attrs:{placement:"bottom-start",width:"360"},model:{value:e.resPidVisible,callback:function(r){e.resPidVisible=r},expression:"resPidVisible"}},[t("el-input",{attrs:{placeholder:"请输入上级资源名称",autofocus:!0,size:"small"},model:{value:e.searchForm.name,callback:function(r){e.$set(e.searchForm,"name",r)},expression:"searchForm.name"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleGetResPid},slot:"append"})],1),e._v(" "),e.searchList.length>0?t("div",{staticClass:"search-group"},e._l(e.searchList,function(r,a){return t("dl",{key:a,on:{click:function(t){e.chooseResPid(r)}}},[t("dd",[e._v("资源名称："+e._s(r.name))])])})):t("div",{staticClass:"no-data-show"},[e._v("\n                    "+e._s(e.resPidTipMsg)+"\n                ")])],1),e._v(" "),t("div",{directives:[{name:"popover",rawName:"v-popover:searchPostPopover",arg:"searchPostPopover"}],on:{click:function(r){e.resPidVisible=!0,e.resPidTipMsg="",e.searchForm.name="",e.searchList=[]}}},[t("el-input",{attrs:{size:"small",placeholder:"上级资源名称",readonly:""},model:{value:e.searchName,callback:function(r){e.searchName="string"==typeof r?r.trim():r},expression:"searchName"}})],1)]:[t("el-input",{attrs:{size:"small",placeholder:"上级资源名称信息",disabled:""},model:{value:e.searchName,callback:function(r){e.searchName="string"==typeof r?r.trim():r},expression:"searchName"}})]],2),e._v(" "),t("el-form-item",{attrs:{label:"权限编码：",prop:"code"}},[t("el-input",{attrs:{name:"code",type:"text",placeholder:"编码"},model:{value:e.ruleForm.code,callback:function(r){e.$set(e.ruleForm,"code",r)},expression:"ruleForm.code"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"名称：",prop:"name"}},[t("el-input",{attrs:{name:"name",type:"text",placeholder:"路由名字"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"路由规则：",prop:"route"}},[t("el-input",{attrs:{name:"route",type:"text",placeholder:"路由规则"},model:{value:e.ruleForm.route,callback:function(r){e.$set(e.ruleForm,"route",r)},expression:"ruleForm.route"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"图标：",prop:"icon"}},[t("el-input",{attrs:{name:"icon",type:"text",placeholder:"图标"},model:{value:e.ruleForm.icon,callback:function(r){e.$set(e.ruleForm,"icon",r)},expression:"ruleForm.icon"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"目标地址：",prop:"res_uri"}},[t("el-input",{attrs:{name:"res_uri",type:"text",placeholder:"目标地址"},model:{value:e.ruleForm.res_uri,callback:function(r){e.$set(e.ruleForm,"res_uri",r)},expression:"ruleForm.res_uri"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否显示：",prop:"is_hidden"}},[t("el-radio",{attrs:{label:!1},model:{value:e.ruleForm.is_hidden,callback:function(r){e.$set(e.ruleForm,"is_hidden",r)},expression:"ruleForm.is_hidden"}},[e._v("否")]),e._v(" "),t("el-radio",{attrs:{label:!0},model:{value:e.ruleForm.is_hidden,callback:function(r){e.$set(e.ruleForm,"is_hidden",r)},expression:"ruleForm.is_hidden"}},[e._v("是")])],1),e._v(" "),t("el-form-item",{attrs:{label:"路由：",prop:"type"}},[t("el-radio",{attrs:{label:1},model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[e._v("系统路由")]),e._v(" "),t("el-radio",{attrs:{label:0},model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[e._v("自定义路由")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.onSubmit("ruleForm")}}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var m=t("D8HT")(u,c,!1,function(e){t("88bc")},null,null);r.default=m.exports}});
//# sourceMappingURL=5.7922543ae955941c0cf9.js.map