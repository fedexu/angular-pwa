(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L6id:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var r=t("pMnS"),u=t("iInd");class s{constructor(){}ngOnInit(){}}var i=o.mb({encapsulation:2,styles:[],data:{}});function a(n){return o.Db(0,[(n()(),o.ob(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.nb(1,212992,null,0,u.n,[u.b,o.M,o.j,[8,null],o.h],null,null)],(function(n,l){n(l,1,0)}),null)}function c(n){return o.Db(0,[(n()(),o.ob(0,0,null,null,1,"home",[],null,null,null,a,i)),o.nb(1,114688,null,0,s,[],null,null)],(function(n,l){n(l,1,0)}),null)}var b=o.kb("home",s,c,{},{},[]);class h{constructor(n){this.host=n,this.options={},this.scrolled=new o.m}get element(){return this.host.nativeElement}ngOnInit(){const n=Object.assign({root:this.isHostScrollable()?this.host.nativeElement:null},this.options);this.observer=new IntersectionObserver(([n])=>{n.isIntersecting&&this.scrolled.emit()},n)}ngAfterViewInit(){this.observer.observe(this.anchor.nativeElement)}isHostScrollable(){const n=window.getComputedStyle(this.element);return"auto"===n.getPropertyValue("overflow")||"scroll"===n.getPropertyValue("overflow-y")}ngOnDestroy(){this.observer.disconnect()}}var d=o.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function m(n){return o.Db(0,[o.Ab(671088640,1,{anchor:0}),o.yb(null,0),(n()(),o.ob(2,0,[[1,0],["anchor",1]],null,1,"div",[],null,null,null,null,null)),(n()(),o.Cb(-1,null,["\u2800"]))],null,null)}var p=t("SVse");class v{constructor(n){this.homeApiService=n,this.items=new Array}ngOnInit(){}fetchData(){this.homeApiService.getData().subscribe(n=>{this.items=[...this.items,...n]},n=>{console.error(n)})}onReachEnd(){this.fetchData()}}var f=t("IheW");let g=(()=>{class n{constructor(n){this.http=n,this.dataURL="https://www.techiediaries.com/api/data.json"}getData(){return this.http.get(this.dataURL)}}return n.ngInjectableDef=o.Hb({factory:function(){return new n(o.Ib(f.c))},token:n,providedIn:"root"}),n})();var w=o.mb({encapsulation:0,styles:[[".scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}"]],data:{}});function y(n){return o.Db(0,[(n()(),o.ob(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o.ob(1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o.Cb(2,null,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit.html)}))}function k(n){return o.Db(0,[(n()(),o.ob(0,0,null,null,3,"infinite-scroll",[["class","scrollBarLayout"]],null,[[null,"scrolled"]],(function(n,l,t){var o=!0;return"scrolled"===l&&(o=!1!==n.component.onReachEnd()&&o),o}),m,d)),o.nb(1,4440064,null,0,h,[o.k],null,{scrolled:"scrolled"}),(n()(),o.db(16777216,null,0,1,null,y)),o.nb(3,278528,null,0,p.h,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,1,0),n(l,3,0,t.items)}),null)}function D(n){return o.Db(0,[(n()(),o.ob(0,0,null,null,1,"dashboard",[],null,null,null,k,w)),o.nb(1,114688,null,0,v,[g],null,null)],(function(n,l){n(l,1,0)}),null)}var O=o.kb("dashboard",v,D,{},{},[]);class x{}var I=t("PCNd");t.d(l,"HomeModuleNgFactory",(function(){return C}));var C=o.lb(e,[],(function(n){return o.wb([o.xb(512,o.j,o.W,[[8,[r.a,b,O]],[3,o.j],o.v]),o.xb(4608,p.k,p.j,[o.s,[2,p.q]]),o.xb(4608,f.d,f.d,[]),o.xb(1073742336,p.b,p.b,[]),o.xb(1073742336,u.m,u.m,[[2,u.r],[2,u.k]]),o.xb(1073742336,x,x,[]),o.xb(1073742336,I.a,I.a,[]),o.xb(1073742336,e,e,[]),o.xb(1024,u.i,(function(){return[[{path:"",component:s,children:[{path:"",component:v}]}]]}),[])])}))}}]);