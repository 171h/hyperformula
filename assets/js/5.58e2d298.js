(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{393:function(e,t,n){},425:function(e,t,n){"use strict";n(393)},513:function(e,t,n){"use strict";var s=n(514),o=(n(213),n(9),n(94),n(71),n(210),n(376),n(214),n(207),n(131),n(44),n(34),n(373),n(217),n(218),n(209),n(375),n(384),n(232)),i=n.n(o),r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=i()(t,"title","");return i()(t,"frontmatter.tags")&&(s+=" ".concat(t.frontmatter.tags.join(" "))),n&&(s+=" ".concat(n)),u(e,s)},u=function(e,t){var n=t.toLowerCase();return e.toLowerCase().split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e})).every((function(e){return n.indexOf(e)>-1}))},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this;return[{name:"Guides",filterFn:function(t){return!e.isFromApiReference(t)},limit:this.$site.themeConfig.searchLimitGuide||5},{name:"API Reference",filterFn:this.isFromApiReference,limit:this.$site.themeConfig.searchLimitApi||5}].map((function(t){return e.suggestionsFromCategory(t.name,t.filterFn,t.limit)})).reduce((function(e,t){return e.concat(t)}),[])},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{suggestionsFromCategory:function(e,t,n){var o=this.query.trim().toLowerCase();if(!o)return[];for(var i=this.$site.pages,u=this.$localePath,a=[],c=0;c<i.length&&!(a.length>=n);c++){var f=i[c];if(this.getPageLocalePath(f)===u&&t(f)&&this.isSearchable(f))if(r(o,f))a.push(Object(s.a)(Object(s.a)({},f),{},{category:e}));else if(f.headers)for(var l=0;l<f.headers.length&&!(a.length>=n);l++){var h=f.headers[l];h.title&&r(o,f,h.title)&&a.push(Object(s.a)(Object(s.a)({},f),{},{path:f.path+"#"+h.slug,header:h,category:e}))}}return a},isFromApiReference:function(e){return e.path.startsWith("/api/")},getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},c=(n(425),n(65)),f=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},[e._l(e.suggestions,(function(t,s){return[t.category!==(e.suggestions[s-1]||{}).category?n("li",[e._v(" "+e._s(t.category)+": ")]):e._e(),e._v(" "),n("li",{key:s,staticClass:"suggestion",class:{focused:s===e.focusIndex},on:{mousedown:function(t){return e.go(s)},mouseenter:function(t){return e.focus(s)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])]}))],2):e._e()])}),[],!1,null,null,null);t.a=f.exports}}]);