webpackJsonp([8],{"8B2t":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Edqs"),r=a.n(n),s=a("Hmpo"),i=a.n(s),o=a("vYJH"),l=a.n(o),c=a("gm1x"),u=a("T452"),d=a("rV7I"),p={name:"service",data:function(){return{serviceData:[],searchForm:{},page:1,total:0,pagesize:10}},created:function(){this.serviceLists()},methods:{resetForm:function(t){this.$refs[t].resetFields()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.serviceLists()})},serviceLists:function(){var t=this;return l()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(t.searchForm);case 2:a=e.sent,t.loading=!0,a.data.code==u.d?(t.serviceData=a.data.data,t.total=10*a.data.data.total,t.loading=!1):Object(d.Message)(a.data.message);case 5:case"end":return e.stop()}},e,t)}))()},handleEdit:function(t){this.$router.push({path:"/service/edit/"+t})},handleDelete:function(t){var e=this,a=this,n={id:t};this.$confirm("此操作将永久删除服务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.b)(n).then(function(t){t.data.code==u.d&&(e.$message({type:"success",message:"删除成功!"}),a.serviceLists())})})},handleAdd:function(){this.$router.push({path:"/kong/service/add"})},handleCurrentChange:function(t){var e=r()(this.searchForm,{page:t});this.userLists(e)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),t._v(" "),a("div",{staticClass:"ibox-content"},[a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleAdd()}}},[t._v("新建服务")])],1),t._v(" "),a("el-table",{staticStyle:{"min-width":"100vw","margin-top":"30px"},attrs:{data:t.serviceData.data,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"服务Id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"protocol",label:"通信协议"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"host",label:"主机"}}),t._v(" "),a("el-table-column",{attrs:{prop:"path",label:"请求路径"}}),t._v(" "),a("el-table-column",{attrs:{prop:"port",label:"服务器端口"}}),t._v(" "),a("el-table-column",{attrs:{prop:"retries",label:"失败重试次数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"connect_timeout",label:"连接超时时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ibox-title"},[e("h3",[this._v("服务列表")])])}]};var h=a("D8HT")(p,v,!1,function(t){a("MNhn")},"data-v-741969d5",null);e.default=h.exports},MNhn:function(t,e){}});
//# sourceMappingURL=8.00715ccaa7f83efc0ed1.js.map