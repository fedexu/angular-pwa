(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"18jl":function(t,n,l){"use strict";var e=l("8Y7J");l("X3tW"),l.d(n,"a",(function(){return i})),l.d(n,"b",(function(){return o}));var i=e.mb({encapsulation:0,styles:[[""]],data:{}});function o(t){return e.Eb(0,[e.zb(null,0)],null,null)}},"1G5W":function(t,n,l){"use strict";l.d(n,"a",(function(){return o}));var e=l("l7GE"),i=l("ZUHj");function o(t){return n=>n.lift(new r(t))}class r{constructor(t){this.notifier=t}call(t,n){const l=new s(t),e=Object(i.a)(l,this.notifier);return e&&!l.seenValue?(l.add(e),n.subscribe(l)):l}}class s extends e.a{constructor(t){super(t),this.seenValue=!1}notifyNext(t,n,l,e,i){this.seenValue=!0,this.complete()}notifyComplete(){}}},As3v:function(t,n,l){"use strict";l.d(n,"a",(function(){return r}));var e=l("jtHE"),i=l("8Y7J"),o=l("z8v2");let r=(()=>{class t{constructor(t){this.localStorage=t,this.items=new Array,this.dbEntity="articles",this.eventItems=new e.a(1),this.localStorage.getItem(this.dbEntity).subscribe(t=>{Boolean(t)&&(this.items=t),this.eventItems.next(this.items)})}getItems(){return this.eventItems}addItems(t){t.forEach(t=>{this.addItem(t)})}addItem(t){let n=Object.assign({},t);this.items.push(Object.assign({},n,{favorite:!0})),this.alignStorage()}removeItem(t){this.isInFavorites(t)&&(this.items.splice(this.items.indexOf(t),1),this.alignStorage())}isInFavorites(t){let n=this.items.find(n=>n.url===t.url);return!!Boolean(n)}alignStorage(){this.localStorage.setItem(this.dbEntity,this.items).subscribe(()=>{this.eventItems.next(this.items)})}}return t.ngInjectableDef=i.Ib({factory:function(){return new t(i.Jb(o.a))},token:t,providedIn:"root"}),t})()},Fe25:function(t,n,l){"use strict";l.d(n,"a",(function(){return i}));var e=l("8Y7J");class i{constructor(){this.iconClicked=new e.m,this.readMore=new e.m}ngOnInit(){}onIconClick(){this.item.favorite=!Boolean(this.item.favorite),this.iconClicked.emit(this.item)}onReadMore(){this.readMore.emit(this.item)}}},UaNN:function(t,n,l){"use strict";var e=l("8Y7J");l("ySUH"),l.d(n,"a",(function(){return i})),l.d(n,"b",(function(){return o}));var i=e.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.variables[_ngcontent-%COMP%]{--rowNum:0;--colNum:0;--rowHeight:0px;--gap:0px}.infinite-scroll-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(var(--rowNum),var(--rowHeight));grid-template-columns:repeat(var(--colNum),auto);gap:var(--gap)}.infinite-scroll-grid[_ngcontent-%COMP%] infinite-scroll-grid-item{grid-column-start:auto;grid-row-start:auto;max-height:var(--rowHeight);min-height:var(--rowHeight)}"]],data:{}});function o(t){return e.Eb(0,[e.Bb(671088640,1,{anchor:0}),(t()(),e.ob(1,0,null,null,3,"div",[["class","infinite-scroll-grid variables"]],[[8,"id",0]],null,null,null,null)),e.zb(null,0),(t()(),e.ob(3,0,[[1,0],["anchor",1]],null,1,"div",[],null,null,null,null,null)),(t()(),e.Db(-1,null,["\u2800"]))],null,(function(t,n){t(n,1,0,e.sb(1,"",n.component.id,""))}))}},X3tW:function(t,n,l){"use strict";l.d(n,"a",(function(){return e}));class e{constructor(){}ngOnInit(){}}},syPK:function(t,n,l){"use strict";var e=l("8Y7J"),i=l("SVse");l("Fe25"),l.d(n,"a",(function(){return o})),l.d(n,"b",(function(){return c}));var o=e.mb({encapsulation:0,styles:[[".demo-card-wide.mdl-card[_ngcontent-%COMP%]{width:100%;border-radius:15px}.demo-card-wide[_ngcontent-%COMP%] > .mdl-card__menu[_ngcontent-%COMP%], .demo-card-wide[_ngcontent-%COMP%] > .mdl-card__title[_ngcontent-%COMP%]{color:#000}.card-grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] auto [second];grid-template-rows:[first] 40% [second] 38% [third] auto [fourth];max-width:100%;min-width:100%;max-height:100%;min-height:100%}.card-title[_ngcontent-%COMP%]{grid-column:first/second;grid-row:first/second}.card-description[_ngcontent-%COMP%]{grid-column:first/second;grid-row:second/third}.card-button[_ngcontent-%COMP%]{grid-column:first/second;grid-row:third/fourth}.mdl-button--icon[_ngcontent-%COMP%]{padding:.15em}@media only screen and (max-width:360px){.mdl-card__actions[_ngcontent-%COMP%]{padding:0;padding:left 8px}}"]],data:{animation:[{type:7,name:"slideOutUp",definitions:[{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, -{{translate}}, 0)",visibility:"hidden",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"70%"}}}],options:{}}]}});function r(t){return e.Eb(0,[(t()(),e.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(t()(),e.Db(-1,null,["favorite"]))],null,null)}function s(t){return e.Eb(0,[(t()(),e.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(t()(),e.Db(-1,null,["favorite_border "]))],null,null)}function u(t){return e.Eb(0,[(t()(),e.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(t()(),e.Db(-1,null,["favorite"]))],null,null)}function a(t){return e.Eb(0,[(t()(),e.ob(0,0,null,null,18,null,null,null,null,null,null,null)),(t()(),e.ob(1,0,null,null,17,"div",[["class","demo-card-wide mdl-card mdl-shadow--2dp card-grid-container"]],null,null,null,null,null)),(t()(),e.ob(2,0,null,null,2,"div",[["class","mdl-card__title card-title"]],null,null,null,null,null)),(t()(),e.ob(3,0,null,null,1,"h2",[["class","mdl-card__title-text"]],null,null,null,null,null)),(t()(),e.Db(4,null,["",""])),(t()(),e.ob(5,0,null,null,1,"div",[["class","mdl-card__supporting-text text-ellipsis card-description"]],null,null,null,null,null)),(t()(),e.Db(6,null,[" "," "])),(t()(),e.ob(7,0,null,null,2,"div",[["class","mdl-card__actions mdl-card--border card-button"]],null,null,null,null,null)),(t()(),e.ob(8,0,null,null,1,"a",[["class","mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.onReadMore()&&e),e}),null,null)),(t()(),e.Db(-1,null,[" Read More "])),(t()(),e.ob(10,0,null,null,8,"div",[["class","mdl-card__menu"]],null,null,null,null,null)),(t()(),e.ob(11,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"],["style","position: absolute;"]],[[24,"@slideOutUp",0]],null,null,null,null)),(t()(),e.db(16777216,null,null,1,null,r)),e.nb(13,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.ob(14,0,null,null,4,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.onIconClick()&&e),e}),null,null)),(t()(),e.db(16777216,null,null,1,null,s)),e.nb(16,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.db(16777216,null,null,1,null,u)),e.nb(18,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){var l=n.component;t(n,13,0,l.item.favorite),t(n,16,0,!l.item.favorite),t(n,18,0,l.item.favorite)}),(function(t,n){var l=n.component;t(n,4,0,l.item.name),t(n,6,0,l.item.description),t(n,11,0,l.item.favorite)}))}function c(t){return e.Eb(0,[(t()(),e.db(16777216,null,null,1,null,a)),e.nb(1,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,1,0,n.component.item)}),null)}},ySUH:function(t,n,l){"use strict";l.d(n,"a",(function(){return i}));var e=l("8Y7J");class i{constructor(t){this.host=t,this.options={},this.scrolled=new e.m,this.id="infinite_scroll_grid_"+Math.random()}get element(){return this.host.nativeElement}ngOnInit(){const t=Object.assign({root:this.isHostScrollable()?this.host.nativeElement:null},this.options);this.observer=new IntersectionObserver(([t])=>{t.isIntersecting&&this.scrolled.emit()},t)}ngAfterViewInit(){this.observer.observe(this.anchor.nativeElement);const t=this;var n=setInterval((function(){document.getElementById(t.id)&&(t.infiniteGridElement=document.getElementById(t.id),t.elemntComputed=window.getComputedStyle(t.infiniteGridElement),t.infiniteGridElement.style.setProperty("--gap",t.gap),t.infiniteGridElement.style.setProperty("--colNum",t.colNum),t.infiniteGridElement.style.setProperty("--rowHeight",t.rowHeight),t.updateVar(),clearInterval(n))}),100)}ngOnChanges(){this.infiniteGridElement&&(this.infiniteGridElement.style.setProperty("--gap",this.gap),this.infiniteGridElement.style.setProperty("--colNum",this.colNum),this.infiniteGridElement.style.setProperty("--rowHeight",this.rowHeight),this.updateVar())}isHostScrollable(){const t=window.getComputedStyle(this.element);return"auto"===t.getPropertyValue("overflow")||"scroll"===t.getPropertyValue("overflow-y")}ngOnDestroy(){this.observer.disconnect()}updateVar(){parseInt(this.elemntComputed.getPropertyValue("--rowNum"));let t=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--rowNum",Math.ceil(this.elementsNumber/t)+"")}changeCol(t){let n=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--colNum","add"==t?n+1+"":n-1+""),this.updateVar()}}}}]);