(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L6id:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class r{}var i=t("pMnS"),o=t("iInd");class u{constructor(){}ngOnInit(){}}var s=e.mb({encapsulation:2,styles:[],data:{}});function a(l){return e.Eb(0,[(l()(),e.ob(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.nb(1,212992,null,0,o.n,[o.b,e.M,e.j,[8,null],e.h],null,null)],(function(l,n){l(n,1,0)}),null)}function c(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,1,"home",[],null,null,null,a,s)),e.nb(1,114688,null,0,u,[],null,null)],(function(l,n){l(n,1,0)}),null)}var d=e.kb("home",u,c,{},{},[]);class m{constructor(){}ngOnInit(){}}var h=e.mb({encapsulation:0,styles:[[""]],data:{}});function b(l){return e.Eb(0,[e.zb(null,0)],null,null)}var g=t("SVse");class p{constructor(){}ngOnInit(){}}var f=e.mb({encapsulation:0,styles:[[".demo-card-wide.mdl-card[_ngcontent-%COMP%]{width:100%}.demo-card-wide[_ngcontent-%COMP%] > .mdl-card__menu[_ngcontent-%COMP%], .demo-card-wide[_ngcontent-%COMP%] > .mdl-card__title[_ngcontent-%COMP%]{color:#000}.card-grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] auto [second];grid-template-rows:[first] 40% [second] 38% [third] auto [fourth];max-width:100%;min-width:100%;max-height:100%;min-height:100%}.card-title[_ngcontent-%COMP%]{grid-column:first/second;grid-row:first/second}.card-description[_ngcontent-%COMP%]{grid-column:first/second;grid-row:second/third}.card-button[_ngcontent-%COMP%]{grid-column:first/second;grid-row:third/fourth}"]],data:{}});function w(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,13,null,null,null,null,null,null,null)),(l()(),e.ob(1,0,null,null,12,"div",[["class","demo-card-wide mdl-card mdl-shadow--2dp card-grid-container"]],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,2,"div",[["class","mdl-card__title card-title"]],null,null,null,null,null)),(l()(),e.ob(3,0,null,null,1,"h2",[["class","mdl-card__title-text"]],null,null,null,null,null)),(l()(),e.Db(4,null,["",""])),(l()(),e.ob(5,0,null,null,1,"div",[["class","mdl-card__supporting-text text-ellipsis card-description"]],null,null,null,null,null)),(l()(),e.Db(6,null,[" "," "])),(l()(),e.ob(7,0,null,null,2,"div",[["class","mdl-card__actions mdl-card--border card-button"]],null,null,null,null,null)),(l()(),e.ob(8,0,null,null,1,"a",[["class","mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Read More "])),(l()(),e.ob(10,0,null,null,3,"div",[["class","mdl-card__menu"]],null,null,null,null,null)),(l()(),e.ob(11,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,null,null,null,null)),(l()(),e.ob(12,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["share"]))],null,(function(l,n){var t=n.component;l(n,4,0,t.item.name),l(n,6,0,t.item.description)}))}function v(l){return e.Eb(0,[(l()(),e.db(16777216,null,null,1,null,w)),e.nb(1,16384,null,0,g.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.item)}),null)}class y{constructor(l){this.host=l,this.options={},this.scrolled=new e.m,this.id="infinite_scroll_grid_"+Math.random()}get element(){return this.host.nativeElement}ngOnInit(){const l=Object.assign({root:this.isHostScrollable()?this.host.nativeElement:null},this.options);this.observer=new IntersectionObserver(([l])=>{l.isIntersecting&&this.scrolled.emit()},l)}ngAfterViewInit(){this.observer.observe(this.anchor.nativeElement);const l=this;var n=setInterval((function(){document.getElementById(l.id)&&(l.infiniteGridElement=document.getElementById(l.id),l.elemntComputed=window.getComputedStyle(l.infiniteGridElement),l.infiniteGridElement.style.setProperty("--gap",l.gap),l.infiniteGridElement.style.setProperty("--colNum",l.colNum),l.infiniteGridElement.style.setProperty("--rowHeight",l.rowHeight),l.updateVar(),clearInterval(n))}),100)}ngOnChanges(){this.infiniteGridElement&&(this.infiniteGridElement.style.setProperty("--gap",this.gap),this.infiniteGridElement.style.setProperty("--colNum",this.colNum),this.infiniteGridElement.style.setProperty("--rowHeight",this.rowHeight),this.updateVar())}isHostScrollable(){const l=window.getComputedStyle(this.element);return"auto"===l.getPropertyValue("overflow")||"scroll"===l.getPropertyValue("overflow-y")}ngOnDestroy(){this.observer.disconnect()}updateVar(){parseInt(this.elemntComputed.getPropertyValue("--rowNum"));let l=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--rowNum",Math.ceil(this.elementsNumber/l)+"")}changeCol(l){let n=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--colNum","add"==l?n+1+"":n-1+""),this.updateVar()}}var _=e.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.variables[_ngcontent-%COMP%]{--rowNum:1;--colNum:1;--rowHeight:176px;--gap:0px}.infinite-scroll-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(var(--rowNum),var(--rowHeight));grid-template-columns:repeat(var(--colNum),auto);gap:var(--gap)}.infinite-scroll-grid[_ngcontent-%COMP%] infinite-scroll-grid-item{grid-column-start:auto;grid-row-start:auto;max-height:var(--rowHeight);min-height:var(--rowHeight)}"]],data:{}});function P(l){return e.Eb(0,[e.Bb(671088640,1,{anchor:0}),(l()(),e.ob(1,0,null,null,3,"div",[["class","infinite-scroll-grid variables"]],[[8,"id",0]],null,null,null,null)),e.zb(null,0),(l()(),e.ob(3,0,[[1,0],["anchor",1]],null,1,"div",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["\u2800"]))],null,(function(l,n){l(n,1,0,e.sb(1,"",n.component.id,""))}))}class E{constructor(l){this.homeApiService=l,this.items=new Array,this.colNum=1,this.rowHeight="0vh"}ngOnInit(){const l=this;function n(){window.matchMedia("(min-width: 768px)").matches?(l.colNum=4,l.rowHeight="30vh"):(l.colNum=1,l.rowHeight="30vh")}window.addEventListener("resize",n),n()}fetchData(){this.homeApiService.getData().subscribe(l=>{this.items=[...this.items,...l]},l=>{console.error(l)})}onReachEnd(){this.fetchData()}}var O=t("IheW");let C=(()=>{class l{constructor(l){this.http=l,this.dataURL="https://www.techiediaries.com/api/data.json"}getData(){return this.http.get(this.dataURL)}}return l.ngInjectableDef=e.Ib({factory:function(){return new l(e.Jb(O.c))},token:l,providedIn:"root"}),l})();var M=e.mb({encapsulation:0,styles:[[".scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}.card-container[_ngcontent-%COMP%]{padding:1em}"]],data:{}});function N(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e.ob(1,0,null,null,3,"infinite-scroll-grid-item",[],null,null,null,b,h)),e.nb(2,114688,null,0,m,[],null,null),(l()(),e.ob(3,0,null,0,1,"card",[],null,null,null,v,f)),e.nb(4,114688,null,0,p,[],{item:[0,"item"]},null)],(function(l,n){l(n,2,0),l(n,4,0,n.context.$implicit)}),null)}function I(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,3,"infinite-scroll",[["class","scrollBarLayout"]],null,[[null,"scrolled"]],(function(l,n,t){var e=!0;return"scrolled"===n&&(e=!1!==l.component.onReachEnd()&&e),e}),P,_)),e.nb(1,4964352,null,0,y,[e.k],{colNum:[0,"colNum"],gap:[1,"gap"],elementsNumber:[2,"elementsNumber"],rowHeight:[3,"rowHeight"]},{scrolled:"scrolled"}),(l()(),e.db(16777216,null,0,1,null,N)),e.nb(3,278528,null,0,g.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.colNum,"1em",t.items.length,t.rowHeight),l(n,3,0,t.items)}),null)}function H(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,1,"dashboard",[],null,null,null,I,M)),e.nb(1,114688,null,0,E,[C],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.kb("dashboard",E,H,{},{},[]);class x{}var j=t("PCNd");t.d(n,"HomeModuleNgFactory",(function(){return D}));var D=e.lb(r,[],(function(l){return e.xb([e.yb(512,e.j,e.W,[[8,[i.a,d,k]],[3,e.j],e.v]),e.yb(4608,g.k,g.j,[e.s,[2,g.r]]),e.yb(4608,O.d,O.d,[]),e.yb(1073742336,g.b,g.b,[]),e.yb(1073742336,o.m,o.m,[[2,o.r],[2,o.k]]),e.yb(1073742336,x,x,[]),e.yb(1073742336,j.a,j.a,[]),e.yb(1073742336,r,r,[]),e.yb(1024,o.i,(function(){return[[{path:"",component:u,children:[{path:"",component:E}]}]]}),[])])}))}}]);