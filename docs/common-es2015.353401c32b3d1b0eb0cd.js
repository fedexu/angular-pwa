(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"18jl":function(n,t,l){"use strict";var e=l("8Y7J");l("X3tW"),l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return o}));var i=e.mb({encapsulation:0,styles:[[""]],data:{}});function o(n){return e.Eb(0,[e.zb(null,0)],null,null)}},"1G5W":function(n,t,l){"use strict";l.d(t,"a",(function(){return o}));var e=l("l7GE"),i=l("ZUHj");function o(n){return t=>t.lift(new s(n))}class s{constructor(n){this.notifier=n}call(n,t){const l=new r(n),e=Object(i.a)(l,this.notifier);return e&&!l.seenValue?(l.add(e),t.subscribe(l)):l}}class r extends e.a{constructor(n){super(n),this.seenValue=!1}notifyNext(n,t,l,e,i){this.seenValue=!0,this.complete()}notifyComplete(){}}},"9Uds":function(n,t,l){"use strict";l.d(t,"a",(function(){return i}));var e=l("8Y7J");class i{constructor(){this.close=new e.m,this.closeContainer=!1}ngOnInit(){}clseContainer(){Boolean(this.closeContainer)&&this.close.emit()}}},As3v:function(n,t,l){"use strict";l.d(t,"a",(function(){return s}));var e=l("jtHE"),i=l("8Y7J"),o=l("z8v2");let s=(()=>{class n{constructor(n){this.localStorage=n,this.items=new Array,this.dbEntity="articles",this.eventItems=new e.a(1)}getItems(){return this.readStorage(),this.eventItems}addItems(n){n.forEach(n=>{this.addItem(n)})}addItem(n){let t=Object.assign({},n);this.items.push(Object.assign({},t,{favorite:!0})),this.alignStorage()}removeItem(n){this.isInFavorites(n)&&(this.items.splice(this.items.indexOf(n),1),this.alignStorage())}isInFavorites(n){let t=this.items.find(t=>t.url===n.url);return!!Boolean(t)}alignStorage(){this.localStorage.setItem(this.dbEntity,this.items).subscribe(()=>{this.eventItems.next(this.items)})}readStorage(){this.localStorage.getItem(this.dbEntity).subscribe(n=>{this.items=Boolean(n)?n:new Array,this.eventItems.next(this.items)})}}return n.ngInjectableDef=i.Ib({factory:function(){return new n(i.Jb(o.a))},token:n,providedIn:"root"}),n})()},Fe25:function(n,t,l){"use strict";l.d(t,"a",(function(){return i}));var e=l("8Y7J");class i{constructor(){this.iconClicked=new e.m,this.readMore=new e.m}ngOnInit(){}onIconClick(){this.item.favorite=!Boolean(this.item.favorite),this.iconClicked.emit(this.item)}onReadMore(){this.readMore.emit(this.item)}}},Kfzt:function(n,t,l){"use strict";var e=l("8Y7J"),i=l("SVse");l("9Uds"),l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return r}));var o=e.mb({encapsulation:0,styles:[[".bottom-up-page-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] 40vw [second] 20vw [third] 40vw [fourth];grid-template-rows:[first] 20vh [second] 8vh [third] 72vh [fourth];height:100%;width:100%;position:absolute;z-index:20;top:0;background-color:transparent}.close-icon-button[_ngcontent-%COMP%]{grid-column:second/third;grid-row:second/third;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.close-icon-button[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:auto;height:auto}.close-icon[_ngcontent-%COMP%]{display:inline-block;font-size:48px;width:48px;overflow:hidden}.bottom-up-page-content[_ngcontent-%COMP%]{grid-column:first/fourth;grid-row:third/fourth;background-color:#fff;z-index:1;overflow-y:scroll}.transparent-clip[_ngcontent-%COMP%]{-webkit-clip-path:ellipse(50% 95% at 50% 100%);clip-path:ellipse(50% 95% at 50% 100%);background-color:#fff;height:100%;width:100%}.clip-wrap[_ngcontent-%COMP%]{grid-column:first/fourth;grid-row:second/third;-webkit-filter:drop-shadow(1px -3px 4px #32320080);filter:drop-shadow(1px -3px 4px #32320080)}.bottom-up-page-content[_ngcontent-%COMP%] pre{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.bottom-up-page-content[_ngcontent-%COMP%] table{overflow:auto;display:block}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}"]],data:{animation:[{type:7,name:"slideInUpOnEnter",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{visibility:"hidden"},offset:null},{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"visible",transform:"translate3d(0, {{translate}}, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"100%"}}}],options:{}},{type:7,name:"slideOutDownOnLeave",definitions:[{type:1,expr:":leave",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, {{translate}}, 0)",visibility:"hidden",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"100%"}}}],options:{}}]}});function s(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,8,"div",[["class","bottom-up-page-container"]],[[24,"@slideInUpOnEnter",0],[24,"@slideOutDownOnLeave",0]],[[null,"@slideOutDownOnLeave.done"]],(function(n,t,l){var e=!0;return"@slideOutDownOnLeave.done"===t&&(e=!1!==n.component.clseContainer()&&e),e}),null,null)),(n()(),e.ob(1,0,null,null,1,"div",[["class","clip-wrap "]],null,null,null,null,null)),(n()(),e.ob(2,0,null,null,0,"div",[["class","transparent-clip"]],null,null,null,null,null)),(n()(),e.ob(3,0,null,null,3,"div",[["class","close-icon-button"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=0!=(n.component.closeContainer=!0)&&e),e}),null,null)),(n()(),e.ob(5,0,null,null,1,"i",[["class","material-icons-round close-icon"]],null,null,null,null,null)),(n()(),e.Db(-1,null,[" close "])),(n()(),e.ob(7,0,null,null,1,"div",[["class","bottom-up-page-content scrollBarLayout"]],null,null,null,null,null)),e.zb(null,0)],null,(function(n,t){n(t,0,0,void 0,void 0)}))}function r(n){return e.Eb(0,[(n()(),e.db(16777216,null,null,1,null,s)),e.nb(1,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,!t.component.closeContainer)}),null)}},UaNN:function(n,t,l){"use strict";var e=l("8Y7J");l("ySUH"),l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return o}));var i=e.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.variables[_ngcontent-%COMP%]{--rowNum:0;--colNum:0;--rowHeight:0px;--gap:0px}.infinite-scroll-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(var(--rowNum),var(--rowHeight));grid-template-columns:repeat(var(--colNum),auto);gap:var(--gap)}.infinite-scroll-grid[_ngcontent-%COMP%] infinite-scroll-grid-item{grid-column-start:auto;grid-row-start:auto;max-height:var(--rowHeight);min-height:var(--rowHeight)}"]],data:{}});function o(n){return e.Eb(0,[e.Bb(671088640,1,{anchor:0}),(n()(),e.ob(1,0,null,null,3,"div",[["class","infinite-scroll-grid variables"]],[[8,"id",0]],null,null,null,null)),e.zb(null,0),(n()(),e.ob(3,0,[[1,0],["anchor",1]],null,1,"div",[],null,null,null,null,null)),(n()(),e.Db(-1,null,["\u2800"]))],null,(function(n,t){n(t,1,0,e.sb(1,"",t.component.id,""))}))}},X3tW:function(n,t,l){"use strict";l.d(t,"a",(function(){return e}));class e{constructor(){}ngOnInit(){}}},syPK:function(n,t,l){"use strict";var e=l("8Y7J"),i=l("SVse");l("Fe25"),l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return c}));var o=e.mb({encapsulation:0,styles:[[".demo-card-wide.mdl-card[_ngcontent-%COMP%]{width:100%;border-radius:15px}.demo-card-wide[_ngcontent-%COMP%] > .mdl-card__menu[_ngcontent-%COMP%], .demo-card-wide[_ngcontent-%COMP%] > .mdl-card__title[_ngcontent-%COMP%]{color:#000}.card-grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] auto [second];grid-template-rows:[first] 40% [second] 38% [third] auto [fourth];max-width:100%;min-width:100%;max-height:100%;min-height:100%}.card-title[_ngcontent-%COMP%]{grid-column:first/second;grid-row:first/second}.card-description[_ngcontent-%COMP%]{grid-column:first/second;grid-row:second/third}.card-button[_ngcontent-%COMP%]{grid-column:first/second;grid-row:third/fourth}.mdl-button--icon[_ngcontent-%COMP%]{padding:.15em}@media only screen and (max-width:360px){.mdl-card__actions[_ngcontent-%COMP%]{padding:0;padding:left 8px}}"]],data:{animation:[{type:7,name:"slideOutUp",definitions:[{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, -{{translate}}, 0)",visibility:"hidden",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"70%"}}}],options:{}}]}});function s(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["favorite"]))],null,null)}function r(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["favorite_border "]))],null,null)}function u(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["favorite"]))],null,null)}function a(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,18,null,null,null,null,null,null,null)),(n()(),e.ob(1,0,null,null,17,"div",[["class","demo-card-wide mdl-card mdl-shadow--2dp card-grid-container"]],null,null,null,null,null)),(n()(),e.ob(2,0,null,null,2,"div",[["class","mdl-card__title card-title"]],null,null,null,null,null)),(n()(),e.ob(3,0,null,null,1,"h2",[["class","mdl-card__title-text"]],null,null,null,null,null)),(n()(),e.Db(4,null,["",""])),(n()(),e.ob(5,0,null,null,1,"div",[["class","mdl-card__supporting-text text-ellipsis card-description"]],null,null,null,null,null)),(n()(),e.Db(6,null,[" "," "])),(n()(),e.ob(7,0,null,null,2,"div",[["class","mdl-card__actions mdl-card--border card-button"]],null,null,null,null,null)),(n()(),e.ob(8,0,null,null,1,"a",[["class","mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.onReadMore()&&e),e}),null,null)),(n()(),e.Db(-1,null,[" Read More "])),(n()(),e.ob(10,0,null,null,8,"div",[["class","mdl-card__menu"]],null,null,null,null,null)),(n()(),e.ob(11,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"],["style","position: absolute;"]],[[24,"@slideOutUp",0]],null,null,null,null)),(n()(),e.db(16777216,null,null,1,null,s)),e.nb(13,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.ob(14,0,null,null,4,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.onIconClick()&&e),e}),null,null)),(n()(),e.db(16777216,null,null,1,null,r)),e.nb(16,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.db(16777216,null,null,1,null,u)),e.nb(18,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,13,0,l.item.favorite),n(t,16,0,!l.item.favorite),n(t,18,0,l.item.favorite)}),(function(n,t){var l=t.component;n(t,4,0,l.item.name),n(t,6,0,l.item.description),n(t,11,0,l.item.favorite)}))}function c(n){return e.Eb(0,[(n()(),e.db(16777216,null,null,1,null,a)),e.nb(1,16384,null,0,i.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.item)}),null)}},ySUH:function(n,t,l){"use strict";l.d(t,"a",(function(){return i}));var e=l("8Y7J");class i{constructor(n){this.host=n,this.options={},this.scrolled=new e.m,this.id="infinite_scroll_grid_"+Math.random()}get element(){return this.host.nativeElement}ngOnInit(){const n=Object.assign({root:this.isHostScrollable()?this.host.nativeElement:null},this.options);this.observer=new IntersectionObserver(([n])=>{n.isIntersecting&&this.scrolled.emit()},n)}ngAfterViewInit(){this.observer.observe(this.anchor.nativeElement);const n=this;var t=setInterval((function(){document.getElementById(n.id)&&(n.infiniteGridElement=document.getElementById(n.id),n.elemntComputed=window.getComputedStyle(n.infiniteGridElement),n.infiniteGridElement.style.setProperty("--gap",n.gap),n.infiniteGridElement.style.setProperty("--colNum",n.colNum),n.infiniteGridElement.style.setProperty("--rowHeight",n.rowHeight),n.updateVar(),clearInterval(t))}),100)}ngOnChanges(){this.infiniteGridElement&&(this.infiniteGridElement.style.setProperty("--gap",this.gap),this.infiniteGridElement.style.setProperty("--colNum",this.colNum),this.infiniteGridElement.style.setProperty("--rowHeight",this.rowHeight),this.updateVar())}isHostScrollable(){const n=window.getComputedStyle(this.element);return"auto"===n.getPropertyValue("overflow")||"scroll"===n.getPropertyValue("overflow-y")}ngOnDestroy(){this.observer.disconnect()}updateVar(){parseInt(this.elemntComputed.getPropertyValue("--rowNum"));let n=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--rowNum",Math.ceil(this.elementsNumber/n)+"")}changeCol(n){let t=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--colNum","add"==n?t+1+"":t-1+""),this.updateVar()}}}}]);