function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9nKY":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},i=e("pMnS"),o=e("iInd"),r=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),a=t.mb({encapsulation:2,styles:[],data:{}});function c(n){return t.Eb(0,[(n()(),t.ob(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.nb(1,212992,null,0,o.n,[o.b,t.M,t.j,[8,null],t.h],null,null)],(function(n,l){n(l,1,0)}),null)}var s=t.kb("favorite",r,(function(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"favorite",[],null,null,null,c,a)),t.nb(1,114688,null,0,r,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),b=e("18jl"),f=e("X3tW"),h=e("syPK"),d=e("Fe25"),m=e("UaNN"),v=e("ySUH"),g=e("SVse"),p=e("XNiG"),y=e("1G5W"),k=function(){function n(l){_classCallCheck(this,n),this.favoritesDataService=l,this.items=new Array,this.colNum=0,this.rowHeight="0vh",this.ngUnsubscribe=new p.a}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.favoritesDataService.getItems().pipe(Object(y.a)(this.ngUnsubscribe)).subscribe((function(l){n.items=l}));var l=this;function e(){window.matchMedia("(min-width: 768px)").matches?(l.colNum=4,l.rowHeight="30vh"):(l.colNum=1,l.rowHeight="30vh")}window.addEventListener("resize",e),e()}},{key:"ngOnDestroy",value:function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}},{key:"removeToFavorites",value:function(n){this.favoritesDataService.removeItem(n.item)}}]),n}(),w=e("As3v"),C=t.mb({encapsulation:0,styles:[[".scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}.card-container[_ngcontent-%COMP%]{padding:1em}.no-article[_ngcontent-%COMP%]{font-size:1.5em;text-align:center;position:relative;top:25vh}"]],data:{}});function _(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),t.ob(1,0,null,null,3,"infinite-scroll-grid-item",[],null,null,null,b.b,b.a)),t.nb(2,114688,null,0,f.a,[],null,null),(n()(),t.ob(3,0,null,0,1,"card",[],null,[[null,"iconClicked"]],(function(n,l,e){var t=!0;return"iconClicked"===l&&(t=!1!==n.component.removeToFavorites(e)&&t),t}),h.b,h.a)),t.nb(4,114688,null,0,d.a,[],{item:[0,"item"],iconFilled:[1,"iconFilled"]},{iconClicked:"iconClicked"})],(function(n,l){n(l,2,0),n(l,4,0,l.context.$implicit,l.context.$implicit.favorite)}),null)}function N(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"div",[["class","no-article"]],null,null,null,null,null)),(n()(),t.Db(-1,null,[" You don't have any favorites article!"]))],null,null)}function O(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,3,"infinite-scroll",[["class","scrollBarLayout"]],null,null,null,m.b,m.a)),t.nb(1,4964352,null,0,v.a,[t.k],{colNum:[0,"colNum"],gap:[1,"gap"],elementsNumber:[2,"elementsNumber"],rowHeight:[3,"rowHeight"]},null),(n()(),t.db(16777216,null,0,1,null,_)),t.nb(3,278528,null,0,g.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.db(16777216,null,null,1,null,N)),t.nb(5,16384,null,0,g.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.colNum,"1em",e.items.length,e.rowHeight),n(l,3,0,e.items),n(l,5,0,0==e.items.length)}),null)}var M=t.kb("dashboard",k,(function(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"dashboard",[],null,null,null,O,C)),t.nb(1,245760,null,0,k,[w.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),P=e("IheW"),F=function n(){_classCallCheck(this,n)},E=e("PCNd");e.d(l,"FavoriteModuleNgFactory",(function(){return I}));var I=t.lb(u,[],(function(n){return t.xb([t.yb(512,t.j,t.W,[[8,[i.a,s,M]],[3,t.j],t.v]),t.yb(4608,g.k,g.j,[t.s,[2,g.r]]),t.yb(4608,P.d,P.d,[]),t.yb(1073742336,g.b,g.b,[]),t.yb(1073742336,o.m,o.m,[[2,o.r],[2,o.k]]),t.yb(1073742336,F,F,[]),t.yb(1073742336,E.a,E.a,[]),t.yb(1073742336,u,u,[]),t.yb(1024,o.i,(function(){return[[{path:"",component:r,children:[{path:"",component:k}]}]]}),[])])}))}}]);