webpackJsonp([8],{"8B2t":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Edqs"),s=a.n(r),n=a("Hmpo"),o=a.n(n),i=a("vYJH"),c=a.n(i),l=a("gm1x"),d=a("vMJZ"),u=a("T452"),v=a("rV7I"),p={name:"service",data:function(){return{userPower:{kong_service_add:0,kong_service_upload:0,kong_service_delete:0},serviceData:[],searchForm:{},page:1,total:0,pagesize:10}},created:function(){this.serviceLists()},methods:{resetForm:function(e){this.$refs[e].resetFields()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.serviceLists()})},serviceLists:function(){var e=this;return c()(o.a.mark(function t(){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.d)(e.searchForm);case 2:return a=t.sent,t.next=5,Object(d.a)(e.userPower);case 5:r=t.sent,e.loading=!0,a.data.code==u.d?(e.serviceData=a.data.data,e.total=10*a.data.data.total,e.loading=!1):Object(v.Message)(a.data.message),r.data.code==u.d&&(e.userPower=r.data.data);case 9:case"end":return t.stop()}},t,e)}))()},handleEdit:function(e){this.$router.push({path:"/kong/service/edit/"+e})},handleDelete:function(e){var t=this,a=this,r={id:e};this.$confirm("此操作将永久删除服务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.b)(r).then(function(e){e.data.code==u.d&&(t.$message({type:"success",message:"删除成功!"}),a.serviceLists())})})},handleAdd:function(){this.$router.push({path:"/kong/service/add"})},handleCurrentChange:function(e){var t=s()(this.searchForm,{page:e});this.userLists(t)}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e._m(0),e._v(" "),a("div",{staticClass:"ibox-content"},[a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:0!=e.userPower.kong_service_add,expression:"userPower.kong_service_add != 0"}],attrs:{type:"primary"},on:{click:function(t){e.handleAdd()}}},[e._v("新建服务")])],1),e._v(" "),a("el-table",{staticStyle:{"min-width":"100vw","margin-top":"30px"},attrs:{data:e.serviceData.data,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"服务Id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"protocol",label:"通信协议"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"host",label:"主机"}}),e._v(" "),a("el-table-column",{attrs:{prop:"path",label:"请求路径"}}),e._v(" "),a("el-table-column",{attrs:{prop:"port",label:"服务器端口"}}),e._v(" "),a("el-table-column",{attrs:{prop:"retries",label:"失败重试次数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"connect_timeout",label:"连接超时时间"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:0!=e.userPower.kong_service_upload,expression:"userPower.kong_service_upload != 0"}],attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.row.id)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0!=e.userPower.kong_service_delete,expression:"userPower.kong_service_delete != 0"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ibox-title"},[t("h3",[this._v("服务列表")])])}]};var m=a("D8HT")(p,h,!1,function(e){a("XlHk")},"data-v-f1fafce6",null);t.default=m.exports},XlHk:function(e,t){}});
//# sourceMappingURL=8.7ff46baab9fbe92ef3d8.js.map