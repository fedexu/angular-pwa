function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9nKY":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),u=t("iInd"),a=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),s=e.mb({encapsulation:2,styles:[],data:{}});function r(n){return e.Eb(0,[(n()(),e.ob(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.nb(1,212992,null,0,u.n,[u.b,e.M,e.j,[8,null],e.h],null,null)],(function(n,l){n(l,1,0)}),null)}var c=e.kb("favorite",a,(function(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"favorite",[],null,null,null,r,s)),e.nb(1,114688,null,0,a,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),p=t("18jl"),f=t("X3tW"),b=t("syPK"),d=t("Fe25"),m=t("Kfzt"),y=t("9Uds"),g=t("UaNN"),h=t("ySUH"),v=t("SVse"),w=t("XNiG"),C=t("1G5W"),k=function(){function n(l){_classCallCheck(this,n),this.favoritesDataService=l,this.items=new Array,this.colNum=0,this.rowHeight="0vh",this.toogleContainer=!1,this.ngUnsubscribe=new w.a}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.favoritesDataService.getItems().pipe(Object(C.a)(this.ngUnsubscribe)).subscribe((function(l){n.items=l}));var l=this;function t(){window.matchMedia("(min-width: 768px)").matches?(l.colNum=4,l.rowHeight="30vh"):(l.colNum=1,l.rowHeight="30vh")}window.addEventListener("resize",t),t()}},{key:"ngOnDestroy",value:function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}},{key:"removeToFavorites",value:function(n){n.favorite||this.favoritesDataService.removeItem(n)}},{key:"toogleDetail",value:function(n){this.toogleContainer=!0,this.innerHTML=n.html}}]),n}(),M=t("As3v"),O=e.mb({encapsulation:0,styles:[[".scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}.card-container[_ngcontent-%COMP%]{padding:1em}.description-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] 5vw [second] 90vw [third] 5vw [fourth];grid-template-rows:[first] auto [second]}.content[_ngcontent-%COMP%]{grid-column:second/third;grid-row:first/second}.no-article[_ngcontent-%COMP%]{font-size:1.5em;text-align:center;position:relative;top:25vh}"]],data:{animation:[{type:7,name:"fadeOut",definitions:[{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,easing:"ease",offset:0},offset:null},{type:6,styles:{opacity:0,easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3}}}],options:{}},{type:7,name:"fadeInOnEnter",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{visibility:"hidden"},offset:null},{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"visible",opacity:0,easing:"ease",offset:0},offset:null},{type:6,styles:{opacity:1,easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3}}}],options:{}}]}});function _(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,4,"div",[["style","height: 100%;"]],[[24,"@fadeOut",0],[24,"@fadeInOnEnter",0]],[[null,"@fadeOut.done"]],(function(n,l,t){var e=!0;return"@fadeOut.done"===l&&(e=!1!==n.component.removeToFavorites(n.context.$implicit)&&e),e}),null,null)),(n()(),e.ob(1,0,null,null,3,"infinite-scroll-grid-item",[],null,null,null,p.b,p.a)),e.nb(2,114688,null,0,f.a,[],null,null),(n()(),e.ob(3,0,null,0,1,"card",[],null,[[null,"readMore"]],(function(n,l,t){var e=!0;return"readMore"===l&&(e=!1!==n.component.toogleDetail(t)&&e),e}),b.b,b.a)),e.nb(4,114688,null,0,d.a,[],{item:[0,"item"]},{readMore:"readMore"})],(function(n,l){n(l,2,0),n(l,4,0,l.context.$implicit)}),(function(n,l){n(l,0,0,!l.context.$implicit.favorite,void 0)}))}function N(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"div",[["class","no-article"]],null,null,null,null,null)),(n()(),e.Db(-1,null,[" You don't have any favorites article!"]))],null,null)}function P(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,3,"bottom-up-page-container",[],null,[[null,"close"]],(function(n,l,t){var e=!0;return"close"===l&&(e=0!=(n.component.toogleContainer=!1)&&e),e}),m.c,m.b)),e.nb(2,114688,null,0,y.a,[],null,{close:"close"}),(n()(),e.ob(3,0,null,0,1,"div",[["class","description-grid"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,2,0)}),(function(n,l){n(l,4,0,l.component.innerHTML)}))}function I(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,3,"infinite-scroll",[["class","scrollBarLayout"]],null,null,null,g.b,g.a)),e.nb(1,4964352,null,0,h.a,[e.k],{colNum:[0,"colNum"],gap:[1,"gap"],elementsNumber:[2,"elementsNumber"],rowHeight:[3,"rowHeight"]},null),(n()(),e.db(16777216,null,0,1,null,_)),e.nb(3,278528,null,0,v.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.db(16777216,null,null,1,null,N)),e.nb(5,16384,null,0,v.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.db(16777216,null,null,1,null,P)),e.nb(7,16384,null,0,v.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.colNum,"1em",t.items.length,t.rowHeight),n(l,3,0,t.items),n(l,5,0,0==t.items.length),n(l,7,0,t.toogleContainer)}),null)}var E=e.kb("dashboard",k,(function(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"dashboard",[],null,null,null,I,O)),e.nb(1,245760,null,0,k,[M.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),x=t("IheW"),H=function n(){_classCallCheck(this,n)},L=t("PCNd");t.d(l,"FavoriteModuleNgFactory",(function(){return j}));var j=e.lb(o,[],(function(n){return e.xb([e.yb(512,e.j,e.W,[[8,[i.a,c,E]],[3,e.j],e.v]),e.yb(4608,v.k,v.j,[e.s,[2,v.r]]),e.yb(4608,x.d,x.d,[]),e.yb(1073742336,v.b,v.b,[]),e.yb(1073742336,u.m,u.m,[[2,u.r],[2,u.k]]),e.yb(1073742336,H,H,[]),e.yb(1073742336,L.a,L.a,[]),e.yb(1073742336,o,o,[]),e.yb(1024,u.i,(function(){return[[{path:"",component:a,children:[{path:"",component:k}]}]]}),[])])}))}}]);