(function(){"use strict";var e={475:function(e,t,a){var r=a(144),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.isLoaded?a("div",{},[a("HeaderComponent",{on:{valueToSearch:e.getQueryValue,resetQuerys:e.resetResultQuerys}}),a("HeroComponent",{attrs:{trendingTitlesForHero:e.trendingTitlesArray}}),a("MainComponent",{attrs:{resultQueryMovie:e.responseMovieArray,resultQueryTv:e.responseTvArray,defaultQuery:e.trendingTitlesArray,genreMovie:e.responseGenreMovie,genreTV:e.responseGenreTV},on:{resetQuerys:e.resetResultQuerys}})],1):a("div",{},[a("LoadingComponent",{attrs:{loaderName:"LOADING ..."}})],1)])},s=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar_personal"},[r("div",{staticClass:"container-fluid"},[r("a",{staticClass:"navbar-brand logo",attrs:{href:"#"},on:{click:function(t){return e.$emit("resetQuerys","")}}},[r("img",{attrs:{src:a(80),alt:"Logo Boolflix"}})]),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("font-awesome-icon",{staticClass:"hamburger_icon",attrs:{icon:"fa-solid fa-bars"}})],1),r("div",{staticClass:"collapse navbar-collapse navbar_select_container",attrs:{id:"navbarSupportedContent"}},[r("SearchComponent",{on:{textToSearch:e.saveSearchValue}})],1)])])},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex py-4 py-md-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"form-control me-2",attrs:{type:"search",placeholder:"Inserisci il titolo","aria-label":"Search"},domProps:{value:e.inputValue},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("textToSearch",e.inputValue),e.inputValue=""},input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),a("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(t){e.$emit("textToSearch",e.inputValue),e.inputValue=""}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-magnifying-glass"}})],1)])},c=[],d={name:"SearchComponent",data(){return{inputValue:""}}},u=d,p=a(1),m=(0,p.Z)(u,l,c,!1,null,"4c70e3e8",null),v=m.exports,h={name:"HeaderComponent",components:{SearchComponent:v},data(){return{searchValue:""}},methods:{saveSearchValue(e){console.log("Valore Salvato da SearchComponent: ",e),this.searchValue=e,this.$emit("valueToSearch",this.searchValue)}}},g=h,f=(0,p.Z)(g,n,o,!1,null,"2af14275",null),_=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main_wrapper"},[!this.resultQueryMovie.length>0&&!this.resultQueryTv.length>0?a("h3",[e._v("Titoli della settimana")]):e._e(),!this.resultQueryMovie.length>0&&!this.resultQueryTv.length>0?a("div",{staticClass:"default_cards"},e._l(this.defaultQuery,(function(t){return a("CardComponent",{key:"key-"+t.id,attrs:{item:t,genre:e.genreMovie,itemsType:"film"}})})),1):a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"},on:{click:function(t){return e.$emit("resetQuerys","")}}},[e._v("Home")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Risultati della ricerca")])])]),a("h4",[e._v("Film")]),a("div",{staticClass:"default_cards"},e._l(this.resultQueryMovie,(function(t){return a("CardComponent",{key:"key-"+t.id,attrs:{item:t,genre:e.genreMovie,itemsType:"film"}})})),1),a("h4",[e._v("Serie TV")]),a("div",{staticClass:"default_cards"},e._l(this.resultQueryTv,(function(t){return a("CardComponent",{key:"key-"+t.id,attrs:{item:t,genre:e.genreTV,itemsType:"tv"}})})),1)])])},y=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card_wrapper"},[r("div",{staticClass:"card_container",attrs:{"data-itemID":e.item.id,"data-genresID":e.item.genre_ids},on:{mouseover:function(t){return e.mouseOverCallAPI(e.item.id)}}},[r("div",{staticClass:"card_front"},[null==e.item.poster_path?r("img",{attrs:{src:a(245)}}):r("img",{attrs:{src:"https://image.tmdb.org/t/p/original/"+e.item.poster_path}})]),e.isLoaded?r("div",{staticClass:"card_back",style:"background: url(https://image.tmdb.org/t/p/w780"+e.item.backdrop_path+"); background-repeat:no-repeat;\n                background-size: cover; background-position:center;"},[r("h1",{staticClass:"boolflix_title"},[e._v(e._s(e.item.title||e.item.name)+" "),e.item.title?r("small",[e._v(" ("+e._s(e.item.release_date.substring(0,4))+") ")]):e._e()]),r("div",{staticClass:"card_back_details"},[r("ul",[r("li",[r("h5",[e._v(e._s(e.item.original_title||e.item.original_name))]),r("span",{class:"fi fi-"+e.checkFlag(e.item.original_language)}),e._l(e.checkVote(e.item.vote_average),(function(t){return r("span",{key:"star-full-"+e.item.id+"-"+t},[r("font-awesome-icon",{attrs:{color:"#db1f2c",icon:"fa-solid fa-star"}})],1)})),e._l(5-e.checkVote(e.item.vote_average),(function(t){return r("span",{key:"star-empty-"+e.item.id+"-"+t},[r("font-awesome-icon",{attrs:{color:"#db1f2c",icon:"fa-regular fa-star"}})],1)}))],2)]),r("div",{staticClass:"card_back_overview"},[r("h5",{staticClass:"boolflix_title"},[e._v("Sinossi: ")]),r("div",{staticClass:"overview"},[e._v(e._s(e.item.overview))]),r("h5",{staticClass:"boolflix_title"},[e._v("Cast: ")]),r("p",{staticClass:"actors"},[e._v(" "+e._s(e.castItem())+" ")]),r("h5",{staticClass:"boolflix_title"},[e._v("Generi: ")]),r("div",{staticClass:"genre"},[e._v(e._s(e.genreItem()))])])]),e.linkItem()?r("div",{staticClass:"card_back_button"},[r("a",{attrs:{href:e.linkItem(),target:"_blank"}},[e._v(" Guarda Trailer")])]):e._e()]):r("div",{staticClass:"card_back"},[r("h3",{staticClass:"boolflix_title"},[e._v("LOADING ...")])])])])},T=[],x=a(669),I=a.n(x),k={name:"CardComponent",props:{itemsListArray:Array,item:Object,itemsType:String,genre:Array},data(){return{apiVideosParameters:{api_key:"933535a20fccede2394fcd6641cbed47",language:"it-IT"},isLoaded:!1,actorsItemOver:[{}],localExtraData:[{}]}},mounted(){},methods:{mouseOverCallAPI(e){this.callCastAPI(e),this.callVideosAPI(e),setTimeout((()=>{this.isLoaded=!0}),1e3)},checkFlag(e){return"en"==e?"us":"ja"==e?"jp":e},checkVote(e){return Math.ceil(e/2)},callCastAPI(e){console.log("CallCastAPI ----- Value:",e);let t="";"film"==this.itemsType?t=`https://api.themoviedb.org/3/movie/${e}/credits`:"tv"==this.itemsType&&(t=`https://api.themoviedb.org/3/tv/${e}/credits`),I().get(t,{params:this.apiVideosParameters}).then((t=>{this.actorsItemOver=t.data.cast,console.log("ATTORI:",this.actorsItemOver);let a="";if(this.actorsItemOver.length>1)for(let e=0;e<5;e++)a+=4==e?this.actorsItemOver[e].name:this.actorsItemOver[e].name+", ";else a=1==this.actorsItemOver.length?this.actorsItemOver[0].name:"Dati sul cast non presenti";let r={id:e,cast:a,genre:this.item.genre_ids};this.localExtraData.some((t=>t.id===e))||this.localExtraData.push(r)}))},callVideosAPI(e){let t=[],a="";"film"==this.itemsType?a=`https://api.themoviedb.org/3/movie/${e}/videos`:"tv"==this.itemsType&&(a=`https://api.themoviedb.org/3/tv/${e}/videos`),I().get(a,{params:this.apiVideosParameters}).then((a=>{if(console.log("Array VideosAPI: ",a.data.results),t=a.data.results,t.length>0){const a=this.localExtraData.findIndex((t=>t.id===e));let r={id:e,cast:this.localExtraData[a].cast,genre:this.item.genre_ids,youtube:`https://www.youtube.com/watch?v=${t[0].key}`};this.localExtraData[a]=r}}))},castItem(){const e=this.localExtraData.findIndex((e=>e.id===this.item.id));return e>=0?this.localExtraData[e].cast:"Dati sul Cast non presenti"},linkItem(){const e=this.localExtraData.findIndex((e=>e.id===this.item.id));return e>=0?this.localExtraData[e].youtube:""},genreItem(){let e,t="";const a=this.item.genre_ids.length;console.log("propsGenreLenght: -----\x3e",a);for(let r=0;r<a;r++)e=this.genre.findIndex((e=>e.id===this.item.genre_ids[r])),console.log("GENRE INDEX: ",e),t+=r==a-1?this.genre[e].name:this.genre[e].name+", ",console.log("GENRESTING:----\x3e",t);return this.item.genre_ids.length?t:"Dati sui Generi non presenti"}}},A=k,M=(0,p.Z)(A,C,T,!1,null,"05013bd3",null),P=M.exports,V={name:"MainComponent",props:{resultQueryMovie:Array,resultQueryTv:Array,defaultQuery:Array,genreMovie:Array,genreTV:Array},data(){return{}},methods:{},components:{CardComponent:P}},w=V,O=(0,p.Z)(w,b,y,!1,null,"52af7990",null),S=O.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"feature_wrapper",style:"background-repeat: no-repeat; background: url(https://image.tmdb.org/t/p/original"+this.trendingTitlesForHero[this.index].backdrop_path+")"},[a("div",{staticClass:"title_wrapper"},[a("span",{staticClass:"pretitle"},[e._v("Trending Week")]),a("h1",{staticClass:"title"},[e._v(e._s(this.trendingTitlesForHero[this.index].title)+" "),a("small",[e._v("("+e._s(this.trendingTitlesForHero[this.index].release_date.substring(0,4))+")")])])])]),e._m(0)])},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"progress color_theme"},[a("div",{staticClass:"progress-bar progress-bar-animated bg-danger",attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})])}],Q={name:"HeroComponent",components:{},props:{trendingTitlesForHero:Array},data(){return{trendingMin:0,trendingMax:0,index:0}},methods:{getRandomNumber(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},mounted(){this.trendingMax=this.trendingTitlesForHero.length-1,setInterval((()=>{this.index=this.getRandomNumber(this.trendingMin,this.trendingMax)}),7e3)}},L=Q,R=(0,p.Z)(L,E,G,!1,null,"a6d2eb20",null),$=R.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader_container"},[r("img",{attrs:{src:a(80),alt:"Logo"}}),r("audio",{attrs:{src:a(456),autoplay:""}}),r("div",{staticClass:"loader"}),r("div",{staticClass:"title"},[e._v(e._s(e.loaderName))])])},H=[],N={name:"LoadingComponent",props:{loaderName:String}},j=N,F=(0,p.Z)(j,D,H,!1,null,"a56a03a0",null),Z=F.exports,U={name:"App",components:{HeaderComponent:_,MainComponent:S,HeroComponent:$,LoadingComponent:Z},data(){return{isLoaded:!1,apiMovieURL:"https://api.themoviedb.org/3/search/movie/",apiMovieParameters:{api_key:"933535a20fccede2394fcd6641cbed47",language:"it-IT",query:""},apiTvURL:"https://api.themoviedb.org/3/search/tv/",apiTvParameters:{api_key:"933535a20fccede2394fcd6641cbed47",language:"it-IT",query:""},apiTrendingURL:"https://api.themoviedb.org/3/trending/movie/day",apiTrandingParameters:{api_key:"933535a20fccede2394fcd6641cbed47"},responseMovieArray:[],responseTvArray:[],trendingTitlesArray:[],responseGenreMovie:[],responseGenreTV:[]}},mounted(){this.callTrendingAPI(),this.callGenreAPI("film"),this.callGenreAPI("tv")},methods:{callMovieAPI(){I().get(this.apiMovieURL,{params:this.apiMovieParameters}).then((e=>{this.responseMovieArray=e.data.results,console.log("Risposta API Movie----\x3e",e.data.results)}))},callTvAPI(){I().get(this.apiTvURL,{params:this.apiTvParameters}).then((e=>{this.responseTvArray=e.data.results,console.log("Risposta API TV----\x3e",e.data.results)}))},callGenreAPI(e){"film"==e?I().get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"933535a20fccede2394fcd6641cbed47",language:"it-IT"}}).then((e=>{this.responseGenreMovie=e.data.genres,console.log("Risposta API GenreMovie----\x3e",e.data.genres)})):"tv"==e&&I().get("https://api.themoviedb.org/3/genre/tv/list",{params:{api_key:"933535a20fccede2394fcd6641cbed47",language:"it-IT"}}).then((e=>{this.responseGenreTV=e.data.genres,console.log("Risposta API GenreTV----\x3e",e.data.genres)}))},callTrendingAPI(){I().get(this.apiTrendingURL,{params:this.apiTrandingParameters}).then((e=>{this.trendingTitlesArray=e.data.results,console.log("Risposta API Trending----\x3e",e.data.results),setTimeout((()=>{this.isLoaded=!0}),5e3)}))},getQueryValue(e){console.log("emit da HeaderComponent ----\x3e",e),this.apiMovieParameters.query=e,this.callMovieAPI(),this.apiTvParameters.query=e,this.callTvAPI()},resetResultQuerys(){this.responseMovieArray=[],this.responseTvArray=[]}}},q=U,z=(0,p.Z)(q,i,s,!1,null,null,null),B=z.exports,W=(a(244),a(484),a(947)),X=a(436),Y=a(24),J=a(810);W.vI.add(X.xiG,X.Y$T,X.Tab,Y.Tab),r.Z.component("font-awesome-icon",J.GN),r.Z.config.productionTip=!1,new r.Z({render:e=>e(B)}).$mount("#app")},80:function(e,t,a){e.exports=a.p+"img/logo.0c1cebc8.png"},245:function(e,t,a){e.exports=a.p+"img/poster_placeholder.fc65442e.jpg"},456:function(e,t,a){e.exports=a.p+"media/intro.8764e3c9.mp3"}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,s){if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],s=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<n&&(n=s));if(o){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,i,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/vue-boolflix/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,n=r[0],o=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var d=l(a)}for(t&&t(r);c<n.length;c++)s=n[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=self["webpackChunkvue_boolflix"]=self["webpackChunkvue_boolflix"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(475)}));r=a.O(r)})();
//# sourceMappingURL=app.0ff6d44e.js.map