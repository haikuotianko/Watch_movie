(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0c5aac4"],{"1cfe":function(t,i,a){t.exports=a.p+"img/applogo.1995d416.png"},"386b":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"home"},[a("div",{staticClass:"home-top-title clearfix"},[t._m(0),a("div",{staticClass:"home-logo-name fl"},[t._v("天虎电影院")]),a("div",{staticClass:"home-sousuo fr"},[a("input",{attrs:{type:"text"}}),a("van-icon",{staticClass:"home-sousuo-icon",attrs:{name:"search"}})],1)]),a("div",{staticClass:"home-Carousel"},[a("van-swipe",{attrs:{autoplay:3e3}},t._l(t.new_movies,(function(t,i){return a("van-swipe-item",{key:i},[a("img",{staticClass:"auto-img",attrs:{src:t}})])})),1)],1),t._l(t.List_dataApi,(function(i,e){return a("div",{key:e,staticClass:"home-List"},[a("h2",[t._v(t._s(i.title))]),a("ul",t._l(t.dataIndex[e],(function(i,e){return a("li",{key:e,on:{click:function(a){return t.Rxiangqin(void 0==i.subject?i.id:i.subject.id)}}},[a("div",{staticClass:"home-List-img"},[a("img",{staticClass:"auto-img",attrs:{src:void 0==i.subject?i.images.medium:i.subject.images.medium,alt:""}})]),a("div",{staticClass:"home-List-name one-text"},[t._v(t._s(void 0==i.subject?i.title:i.subject.title))])])})),0)])}))],2)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home-logo fl"},[e("img",{staticClass:"auto-img",attrs:{src:a("1cfe"),alt:"logo"}})])}],c=(a("4160"),a("159b"),a("2909")),o={name:"home",data:function(){return{baseUrl:"https://douban.uieee.com",new_movies:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576318420460&di=eab0d231f48b221644614396bc9b87d0&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe17fea8ffacd9bc977c7ac95bb2dc3ff6dae5de0.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576318330514&di=710f15aa655fd25fa807bd65aa290bde&imgtype=0&src=http%3A%2F%2F001.img.pu.sohu.com.cn%2Fgroup2%2FM05%2FC0%2FB5%2FMTAuMTAuODguODE%3D%2FdXBsb2FkRmlsZV85XzE0NjMwMjg4Mzk4Njc%3D.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576318330502&di=f1844880b391b95fd8ca2819ce3085f7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F5743eb1f535f3.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576318329887&di=3eee5e68005d3af4735fc8a4fc0f0a3a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F5417ca4eabf61.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576318330523&di=8fe2139b8310ad9924a74e25c562f936&imgtype=0&src=http%3A%2F%2Fwww.91zhuti.com%2Fuploads%2Fallimg%2F131202%2F4-131202111234.jpg"],List_dataApi:[{title:"Top250",url:"/v2/movie/top250"},{title:"北美票房榜",url:"/v2/movie/us_box"},{title:"口碑榜",url:"/v2/movie/weekly"},{title:"新片榜",url:"/v2/movie/new_movies"}],dataIndex:[]}},methods:{home_List_data:function(t,i){var a=this;return this.axios({method:"GET",url:this.baseUrl+t}).then((function(t){a.dataIndex[i]=t.data.subjects,a.dataIndex=Object(c["a"])(a.dataIndex)})).catch((function(t){return console.log("err ==> ",t),0})),0},Rxiangqin:function(t){console.log(t),this.$router.push({name:"movieDetail",params:{id:t}})}},created:function(){var t=this;this.dataIndex=Array(this.List_dataApi.length),this.List_dataApi.forEach((function(i,a){t.home_List_data(i.url,a)}))}},n=o,u=(a("8a50"),a("2877")),m=Object(u["a"])(n,e,s,!1,null,"0d0742d7",null);i["default"]=m.exports},"8a50":function(t,i,a){"use strict";var e=a("eb70"),s=a.n(e);s.a},eb70:function(t,i,a){}}]);
//# sourceMappingURL=chunk-c0c5aac4.5c7f8cf3.js.map