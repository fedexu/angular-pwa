(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9nKY":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),i=t("iInd");class a{constructor(){}ngOnInit(){}}var r=e.mb({encapsulation:2,styles:[],data:{}});function s(n){return e.Eb(0,[(n()(),e.ob(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.nb(1,212992,null,0,i.n,[i.b,e.M,e.j,[8,null],e.h],null,null)],(function(n,l){n(l,1,0)}),null)}function c(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"favorite",[],null,null,null,s,r)),e.nb(1,114688,null,0,a,[],null,null)],(function(n,l){n(l,1,0)}),null)}var b=e.kb("favorite",a,c,{},{},[]),m=t("18jl"),p=t("X3tW"),d=t("syPK"),f=t("Fe25"),h=t("UaNN"),y=t("ySUH"),v=t("SVse"),g=t("XNiG"),w=t("1G5W");class O{constructor(n){this.favoritesDataService=n,this.items=new Array,this.colNum=0,this.rowHeight="0vh",this.ngUnsubscribe=new g.a}ngOnInit(){this.favoritesDataService.getItems().pipe(Object(w.a)(this.ngUnsubscribe)).subscribe(n=>{this.items=n});const n=this;function l(){window.matchMedia("(min-width: 768px)").matches?(n.colNum=4,n.rowHeight="30vh"):(n.colNum=1,n.rowHeight="30vh")}window.addEventListener("resize",l),l()}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}removeToFavorites(n){n.favorite||this.favoritesDataService.removeItem(n)}}var k=t("As3v"),N=e.mb({encapsulation:0,styles:[[".scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}.card-container[_ngcontent-%COMP%]{padding:1em}.no-article[_ngcontent-%COMP%]{font-size:1.5em;text-align:center;position:relative;top:25vh}"]],data:{animation:[{type:7,name:"fadeOut",definitions:[{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,easing:"ease",offset:0},offset:null},{type:6,styles:{opacity:0,easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3}}}],options:{}}]}});function M(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,4,"div",[["style","height: 100%;"]],[[24,"@fadeOut",0]],[[null,"@fadeOut.done"]],(function(n,l,t){var e=!0;return"@fadeOut.done"===l&&(e=!1!==n.component.removeToFavorites(n.context.$implicit)&&e),e}),null,null)),(n()(),e.ob(1,0,null,null,3,"infinite-scroll-grid-item",[],null,null,null,m.b,m.a)),e.nb(2,114688,null,0,p.a,[],null,null),(n()(),e.ob(3,0,null,0,1,"card",[],null,null,null,d.b,d.a)),e.nb(4,114688,null,0,f.a,[],{item:[0,"item"]},null)],(function(n,l){n(l,2,0),n(l,4,0,l.context.$implicit)}),(function(n,l){n(l,0,0,!l.context.$implicit.favorite)}))}function x(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"div",[["class","no-article"]],null,null,null,null,null)),(n()(),e.Db(-1,null,[" You don't have any favorites article!"]))],null,null)}function I(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,3,"infinite-scroll",[["class","scrollBarLayout"]],null,null,null,h.b,h.a)),e.nb(1,4964352,null,0,y.a,[e.k],{colNum:[0,"colNum"],gap:[1,"gap"],elementsNumber:[2,"elementsNumber"],rowHeight:[3,"rowHeight"]},null),(n()(),e.db(16777216,null,0,1,null,M)),e.nb(3,278528,null,0,v.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.db(16777216,null,null,1,null,x)),e.nb(5,16384,null,0,v.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.colNum,"1em",t.items.length,t.rowHeight),n(l,3,0,t.items),n(l,5,0,0==t.items.length)}),null)}function E(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"dashboard",[],null,null,null,I,N)),e.nb(1,245760,null,0,O,[k.a],null,null)],(function(n,l){n(l,1,0)}),null)}var F=e.kb("dashboard",O,E,{},{},[]),H=t("IheW");class P{}var j=t("PCNd");t.d(l,"FavoriteModuleNgFactory",(function(){return C}));var C=e.lb(o,[],(function(n){return e.xb([e.yb(512,e.j,e.W,[[8,[u.a,b,F]],[3,e.j],e.v]),e.yb(4608,v.k,v.j,[e.s,[2,v.r]]),e.yb(4608,H.d,H.d,[]),e.yb(1073742336,v.b,v.b,[]),e.yb(1073742336,i.m,i.m,[[2,i.r],[2,i.k]]),e.yb(1073742336,P,P,[]),e.yb(1073742336,j.a,j.a,[]),e.yb(1073742336,o,o,[]),e.yb(1024,i.i,(function(){return[[{path:"",component:a,children:[{path:"",component:O}]}]]}),[])])}))}}]);