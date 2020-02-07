function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n)){for(var l=0,t=new Array(n.length);l<n.length;l++)t[l]=n[l];return t}}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{L6id:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),u=t("iInd"),r=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),a=e.mb({encapsulation:2,styles:[],data:{}});function s(n){return e.Eb(0,[(n()(),e.ob(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.nb(1,212992,null,0,u.n,[u.b,e.M,e.j,[8,null],e.h],null,null)],(function(n,l){n(l,1,0)}),null)}var c,f=e.kb("home",r,(function(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"home",[],null,null,null,s,a)),e.nb(1,114688,null,0,r,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),d=t("syPK"),p=t("Fe25"),b=t("18jl"),y=t("X3tW"),m=t("SVse"),h=t("Kfzt"),g=t("9Uds"),v=t("UaNN"),w=t("ySUH"),C=t("XNiG"),k=t("1G5W"),I=function(){function n(l,t){_classCallCheck(this,n),this.homeApiService=l,this.favoritesDataService=t,this.items=new Array,this.colNum=1,this.rowHeight="0vh",this.showPage=!1,this.toogleContainer=!1,this.error=!1,this.ngUnsubscribe=new C.a}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;function l(){window.matchMedia("(min-width: 768px)").matches?(n.colNum=4,n.rowHeight="30vh"):(n.colNum=1,n.rowHeight="30vh")}window.addEventListener("resize",l),l()}},{key:"ngAfterViewInit",value:function(){this.showPage=!0}},{key:"ngOnDestroy",value:function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}},{key:"fetchData",value:function(){var n=this;this.homeApiService.getData().pipe(Object(k.a)(this.ngUnsubscribe)).subscribe((function(l){n.items=[].concat(_toConsumableArray(n.items),_toConsumableArray(l)),n.items.forEach((function(l){l.favorite=n.isInFavorites(l)}))}),(function(l){n.error=!0}))}},{key:"onReachEnd",value:function(){Boolean(this.showPage)&&this.fetchData()}},{key:"toogleDetail",value:function(n){this.toogleContainer=!0,this.innerHTML=n.html}},{key:"addToFavorites",value:function(n){n.favorite?this.favoritesDataService.addItem(n):this.favoritesDataService.removeItem(n)}},{key:"isInFavorites",value:function(n){return this.favoritesDataService.isInFavorites(n)}}]),n}(),_=t("IheW"),M=((c=function(){function n(l){_classCallCheck(this,n),this.http=l,this.dataURL="https://www.techiediaries.com/api/data.json"}return _createClass(n,[{key:"getData",value:function(){return this.http.get(this.dataURL)}}]),n}()).ngInjectableDef=e.Ib({factory:function(){return new c(e.Jb(_.c))},token:c,providedIn:"root"}),c),O=t("As3v"),E=e.mb({encapsulation:0,styles:[[".scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}.card-container[_ngcontent-%COMP%]{padding:1em}.description-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] 5vw [second] 90vw [third] 5vw [fourth];grid-template-rows:[first] auto [second]}.content[_ngcontent-%COMP%]{grid-column:second/third;grid-row:first/second}.no-article[_ngcontent-%COMP%]{font-size:1.5em;text-align:center;position:relative;top:25vh}"]],data:{animation:[{type:7,name:"fadeInOnEnter",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{visibility:"hidden"},offset:null},{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"visible",opacity:0,easing:"ease",offset:0},offset:null},{type:6,styles:{opacity:1,easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3}}}],options:{}},{type:7,name:"slideInLeftOnEnter",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{visibility:"hidden"},offset:null},{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"visible",transform:"translate3d(-{{translate}}, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:500,translate:"100%"}}}],options:{}},{type:7,name:"slideInRightOnEnter",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{visibility:"hidden"},offset:null},{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"visible",transform:"translate3d({{translate}}, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:500,translate:"100%"}}}],options:{}}]}});function P(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,2,"div",[["style","height: 100%;"]],[[24,"@slideInRightOnEnter",0]],null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"card",[],null,[[null,"iconClicked"],[null,"readMore"]],(function(n,l,t){var e=!0,o=n.component;return"iconClicked"===l&&(e=!1!==o.addToFavorites(t)&&e),"readMore"===l&&(e=!1!==o.toogleDetail(t)&&e),e}),d.b,d.a)),e.nb(2,114688,null,0,p.a,[],{item:[0,"item"]},{iconClicked:"iconClicked",readMore:"readMore"})],(function(n,l){n(l,2,0,l.parent.context.$implicit)}),(function(n,l){n(l,0,0,void 0)}))}function A(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,2,"div",[["style","height: 100%;"]],[[24,"@slideInLeftOnEnter",0]],null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"card",[],null,[[null,"iconClicked"],[null,"readMore"]],(function(n,l,t){var e=!0,o=n.component;return"iconClicked"===l&&(e=!1!==o.addToFavorites(t)&&e),"readMore"===l&&(e=!1!==o.toogleDetail(t)&&e),e}),d.b,d.a)),e.nb(2,114688,null,0,p.a,[],{item:[0,"item"]},{iconClicked:"iconClicked",readMore:"readMore"})],(function(n,l){n(l,2,0,l.parent.context.$implicit)}),(function(n,l){n(l,0,0,void 0)}))}function D(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,5,"infinite-scroll-grid-item",[],null,null,null,b.b,b.a)),e.nb(2,114688,null,0,y.a,[],null,null),(n()(),e.db(16777216,null,0,1,null,P)),e.nb(4,16384,null,0,m.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.db(16777216,null,0,1,null,A)),e.nb(6,16384,null,0,m.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0),n(l,4,0,l.context.index%2==0),n(l,6,0,l.context.index%2!=0)}),null)}function x(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"div",[["class","no-article"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["Some error occurs..."])),(n()(),e.ob(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,1,"div",[["class","no-article"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["(\u274d\u1d25\u274d\u028b)"]))],null,null)}function S(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,3,"bottom-up-page-container",[],null,[[null,"close"]],(function(n,l,t){var e=!0;return"close"===l&&(e=0!=(n.component.toogleContainer=!1)&&e),e}),h.b,h.a)),e.nb(2,114688,null,0,g.a,[],null,{close:"close"}),(n()(),e.ob(3,0,null,0,1,"div",[["class","description-grid"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,2,0)}),(function(n,l){n(l,4,0,l.component.innerHTML)}))}function H(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,3,"infinite-scroll",[["class","scrollBarLayout"]],null,[[null,"scrolled"]],(function(n,l,t){var e=!0;return"scrolled"===l&&(e=!1!==n.component.onReachEnd()&&e),e}),v.b,v.a)),e.nb(1,4964352,null,0,w.a,[e.k],{colNum:[0,"colNum"],gap:[1,"gap"],elementsNumber:[2,"elementsNumber"],rowHeight:[3,"rowHeight"]},{scrolled:"scrolled"}),(n()(),e.db(16777216,null,0,1,null,D)),e.nb(3,278528,null,0,m.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.db(16777216,null,null,1,null,x)),e.nb(5,16384,null,0,m.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.db(16777216,null,null,1,null,S)),e.nb(7,16384,null,0,m.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.colNum,"1em",t.items.length,t.rowHeight),n(l,3,0,t.items),n(l,5,0,t.error),n(l,7,0,t.toogleContainer)}),null)}var L=e.kb("dashboard",I,(function(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"dashboard",[],null,null,null,H,E)),e.nb(1,4440064,null,0,I,[M,O.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),N=function n(){_classCallCheck(this,n)},j=t("PCNd");t.d(l,"HomeModuleNgFactory",(function(){return F}));var F=e.lb(o,[],(function(n){return e.xb([e.yb(512,e.j,e.W,[[8,[i.a,f,L]],[3,e.j],e.v]),e.yb(4608,m.k,m.j,[e.s,[2,m.r]]),e.yb(4608,_.d,_.d,[]),e.yb(1073742336,m.b,m.b,[]),e.yb(1073742336,u.m,u.m,[[2,u.r],[2,u.k]]),e.yb(1073742336,N,N,[]),e.yb(1073742336,j.a,j.a,[]),e.yb(1073742336,o,o,[]),e.yb(1024,u.i,(function(){return[[{path:"",component:r,children:[{path:"",component:I}]}]]}),[])])}))}}]);