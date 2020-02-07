function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],l=!0,i=!1,o=void 0;try{for(var r,u=n[Symbol.iterator]();!(l=(r=u.next()).done)&&(e.push(r.value),!t||e.length!==t);l=!0);}catch(s){i=!0,o=s}finally{try{l||null==u.return||u.return()}finally{if(i)throw o}}return e}}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _possibleConstructorReturn(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(n):t}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"18jl":function(n,t,e){"use strict";var l=e("8Y7J");e("X3tW"),e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=l.mb({encapsulation:0,styles:[[""]],data:{}});function o(n){return l.Eb(0,[l.zb(null,0)],null,null)}},"1G5W":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("l7GE"),i=e("ZUHj");function o(n){return function(t){return t.lift(new r(n))}}var r=function(){function n(t){_classCallCheck(this,n),this.notifier=t}return _createClass(n,[{key:"call",value:function(n,t){var e=new u(n),l=Object(i.a)(e,this.notifier);return l&&!e.seenValue?(e.add(l),t.subscribe(e)):e}}]),n}(),u=function(n){function t(n){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,n))).seenValue=!1,e}return _inherits(t,n),_createClass(t,[{key:"notifyNext",value:function(n,t,e,l,i){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),t}(l.a)},"9Uds":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("8Y7J"),i=function(){function n(){_classCallCheck(this,n),this.close=new l.m,this.closeContainer=!1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"clseContainer",value:function(){Boolean(this.closeContainer)&&this.close.emit()}}]),n}()},As3v:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var l=e("jtHE"),i=e("8Y7J"),o=e("z8v2"),r=function(){var n=function(){function n(t){_classCallCheck(this,n),this.localStorage=t,this.items=new Array,this.dbEntity="articles",this.eventItems=new l.a(1)}return _createClass(n,[{key:"getItems",value:function(){return this.readStorage(),this.eventItems}},{key:"addItems",value:function(n){var t=this;n.forEach((function(n){t.addItem(n)}))}},{key:"addItem",value:function(n){var t=Object.assign({},n);this.items.push(Object.assign({},t,{favorite:!0})),this.alignStorage()}},{key:"removeItem",value:function(n){this.isInFavorites(n)&&(this.items.splice(this.items.indexOf(n),1),this.alignStorage())}},{key:"isInFavorites",value:function(n){var t=this.items.find((function(t){return t.url===n.url}));return!!Boolean(t)}},{key:"alignStorage",value:function(){var n=this;this.localStorage.setItem(this.dbEntity,this.items).subscribe((function(){n.eventItems.next(n.items)}))}},{key:"readStorage",value:function(){var n=this;this.localStorage.getItem(this.dbEntity).subscribe((function(t){n.items=Boolean(t)?t:new Array,n.eventItems.next(n.items)}))}}]),n}();return n.ngInjectableDef=i.Ib({factory:function(){return new n(i.Jb(o.a))},token:n,providedIn:"root"}),n}()},Fe25:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("8Y7J"),i=function(){function n(){_classCallCheck(this,n),this.iconClicked=new l.m,this.readMore=new l.m}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onIconClick",value:function(){this.item.favorite=!Boolean(this.item.favorite),this.iconClicked.emit(this.item)}},{key:"onReadMore",value:function(){this.readMore.emit(this.item)}}]),n}()},Kfzt:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("SVse");e("9Uds"),e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return u}));var o=l.mb({encapsulation:0,styles:[[".bottom-up-page-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] 40vw [second] 20vw [third] 40vw [fourth];grid-template-rows:[first] 20vh [second] 8vh [third] 72vh [fourth];height:100%;width:100%;position:absolute;z-index:20;top:0;background-color:transparent}.close-icon-button[_ngcontent-%COMP%]{grid-column:second/third;grid-row:second/third;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.close-icon-button[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:auto;height:auto}.close-icon[_ngcontent-%COMP%]{display:inline-block;font-size:48px;width:48px;overflow:hidden}.bottom-up-page-content[_ngcontent-%COMP%]{grid-column:first/fourth;grid-row:third/fourth;background-color:#fff;z-index:1;overflow-y:scroll}.transparent-clip[_ngcontent-%COMP%]{-webkit-clip-path:ellipse(50% 95% at 50% 100%);clip-path:ellipse(50% 95% at 50% 100%);background-color:#fff;height:100%;width:100%}.clip-wrap[_ngcontent-%COMP%]{grid-column:first/fourth;grid-row:second/third;-webkit-filter:drop-shadow(1px -3px 4px #32320080);filter:drop-shadow(1px -3px 4px #32320080)}.bottom-up-page-content[_ngcontent-%COMP%] pre{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.bottom-up-page-content[_ngcontent-%COMP%] table{overflow:auto;display:block}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;border-radius:1em}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}.scrollBarLayout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:#708090 solid 1px}"]],data:{animation:[{type:7,name:"slideInUpOnEnter",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{visibility:"hidden"},offset:null},{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:"visible",transform:"translate3d(0, {{translate}}, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"100%"}}}],options:{}},{type:7,name:"slideOutDownOnLeave",definitions:[{type:1,expr:":leave",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, {{translate}}, 0)",visibility:"hidden",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"100%"}}}],options:{}}]}});function r(n){return l.Eb(0,[(n()(),l.ob(0,0,null,null,8,"div",[["class","bottom-up-page-container"]],[[24,"@slideInUpOnEnter",0],[24,"@slideOutDownOnLeave",0]],[[null,"@slideOutDownOnLeave.done"]],(function(n,t,e){var l=!0;return"@slideOutDownOnLeave.done"===t&&(l=!1!==n.component.clseContainer()&&l),l}),null,null)),(n()(),l.ob(1,0,null,null,1,"div",[["class","clip-wrap "]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,0,"div",[["class","transparent-clip"]],null,null,null,null,null)),(n()(),l.ob(3,0,null,null,3,"div",[["class","close-icon-button"]],null,null,null,null,null)),(n()(),l.ob(4,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=0!=(n.component.closeContainer=!0)&&l),l}),null,null)),(n()(),l.ob(5,0,null,null,1,"i",[["class","material-icons-round close-icon"]],null,null,null,null,null)),(n()(),l.Db(-1,null,[" close "])),(n()(),l.ob(7,0,null,null,1,"div",[["class","bottom-up-page-content scrollBarLayout"]],null,null,null,null,null)),l.zb(null,0)],null,(function(n,t){n(t,0,0,void 0,void 0)}))}function u(n){return l.Eb(0,[(n()(),l.db(16777216,null,null,1,null,r)),l.nb(1,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,!t.component.closeContainer)}),null)}},UaNN:function(n,t,e){"use strict";var l=e("8Y7J");e("ySUH"),e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=l.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.variables[_ngcontent-%COMP%]{--rowNum:0;--colNum:0;--rowHeight:0px;--gap:0px}.infinite-scroll-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(var(--rowNum),var(--rowHeight));grid-template-columns:repeat(var(--colNum),auto);gap:var(--gap)}.infinite-scroll-grid[_ngcontent-%COMP%] infinite-scroll-grid-item{grid-column-start:auto;grid-row-start:auto;max-height:var(--rowHeight);min-height:var(--rowHeight)}"]],data:{}});function o(n){return l.Eb(0,[l.Bb(671088640,1,{anchor:0}),(n()(),l.ob(1,0,null,null,3,"div",[["class","infinite-scroll-grid variables"]],[[8,"id",0]],null,null,null,null)),l.zb(null,0),(n()(),l.ob(3,0,[[1,0],["anchor",1]],null,1,"div",[],null,null,null,null,null)),(n()(),l.Db(-1,null,["\u2800"]))],null,(function(n,t){n(t,1,0,l.sb(1,"",t.component.id,""))}))}},X3tW:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()},syPK:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("SVse");e("Fe25"),e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c}));var o=l.mb({encapsulation:0,styles:[[".demo-card-wide.mdl-card[_ngcontent-%COMP%]{width:100%;border-radius:15px}.demo-card-wide[_ngcontent-%COMP%] > .mdl-card__menu[_ngcontent-%COMP%], .demo-card-wide[_ngcontent-%COMP%] > .mdl-card__title[_ngcontent-%COMP%]{color:#000}.card-grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] auto [second];grid-template-rows:[first] 40% [second] 38% [third] auto [fourth];max-width:100%;min-width:100%;max-height:100%;min-height:100%}.card-title[_ngcontent-%COMP%]{grid-column:first/second;grid-row:first/second}.card-description[_ngcontent-%COMP%]{grid-column:first/second;grid-row:second/third}.card-button[_ngcontent-%COMP%]{grid-column:first/second;grid-row:third/fourth}.mdl-button--icon[_ngcontent-%COMP%]{padding:.15em}@media only screen and (max-width:360px){.mdl-card__actions[_ngcontent-%COMP%]{padding:0;padding:left 8px}}"]],data:{animation:[{type:7,name:"slideOutUp",definitions:[{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, -{{translate}}, 0)",visibility:"hidden",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"70%"}}}],options:{}}]}});function r(n){return l.Eb(0,[(n()(),l.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(n()(),l.Db(-1,null,["favorite"]))],null,null)}function u(n){return l.Eb(0,[(n()(),l.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(n()(),l.Db(-1,null,["favorite_border "]))],null,null)}function s(n){return l.Eb(0,[(n()(),l.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(n()(),l.Db(-1,null,["favorite"]))],null,null)}function a(n){return l.Eb(0,[(n()(),l.ob(0,0,null,null,18,null,null,null,null,null,null,null)),(n()(),l.ob(1,0,null,null,17,"div",[["class","demo-card-wide mdl-card mdl-shadow--2dp card-grid-container"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,2,"div",[["class","mdl-card__title card-title"]],null,null,null,null,null)),(n()(),l.ob(3,0,null,null,1,"h2",[["class","mdl-card__title-text"]],null,null,null,null,null)),(n()(),l.Db(4,null,["",""])),(n()(),l.ob(5,0,null,null,1,"div",[["class","mdl-card__supporting-text text-ellipsis card-description"]],null,null,null,null,null)),(n()(),l.Db(6,null,[" "," "])),(n()(),l.ob(7,0,null,null,2,"div",[["class","mdl-card__actions mdl-card--border card-button"]],null,null,null,null,null)),(n()(),l.ob(8,0,null,null,1,"a",[["class","mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.onReadMore()&&l),l}),null,null)),(n()(),l.Db(-1,null,[" Read More "])),(n()(),l.ob(10,0,null,null,8,"div",[["class","mdl-card__menu"]],null,null,null,null,null)),(n()(),l.ob(11,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"],["style","position: absolute;"]],[[24,"@slideOutUp",0]],null,null,null,null)),(n()(),l.db(16777216,null,null,1,null,r)),l.nb(13,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l.ob(14,0,null,null,4,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.onIconClick()&&l),l}),null,null)),(n()(),l.db(16777216,null,null,1,null,u)),l.nb(16,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l.db(16777216,null,null,1,null,s)),l.nb(18,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,13,0,e.item.favorite),n(t,16,0,!e.item.favorite),n(t,18,0,e.item.favorite)}),(function(n,t){var e=t.component;n(t,4,0,e.item.name),n(t,6,0,e.item.description),n(t,11,0,e.item.favorite)}))}function c(n){return l.Eb(0,[(n()(),l.db(16777216,null,null,1,null,a)),l.nb(1,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.item)}),null)}},ySUH:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("8Y7J"),i=function(){function n(t){_classCallCheck(this,n),this.host=t,this.options={},this.scrolled=new l.m,this.id="infinite_scroll_grid_"+Math.random()}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this,t=Object.assign({root:this.isHostScrollable()?this.host.nativeElement:null},this.options);this.observer=new IntersectionObserver((function(t){_slicedToArray(t,1)[0].isIntersecting&&n.scrolled.emit()}),t)}},{key:"ngAfterViewInit",value:function(){this.observer.observe(this.anchor.nativeElement);var n=this,t=setInterval((function(){document.getElementById(n.id)&&(n.infiniteGridElement=document.getElementById(n.id),n.elemntComputed=window.getComputedStyle(n.infiniteGridElement),n.infiniteGridElement.style.setProperty("--gap",n.gap),n.infiniteGridElement.style.setProperty("--colNum",n.colNum),n.infiniteGridElement.style.setProperty("--rowHeight",n.rowHeight),n.updateVar(),clearInterval(t))}),100)}},{key:"ngOnChanges",value:function(){this.infiniteGridElement&&(this.infiniteGridElement.style.setProperty("--gap",this.gap),this.infiniteGridElement.style.setProperty("--colNum",this.colNum),this.infiniteGridElement.style.setProperty("--rowHeight",this.rowHeight),this.updateVar())}},{key:"isHostScrollable",value:function(){var n=window.getComputedStyle(this.element);return"auto"===n.getPropertyValue("overflow")||"scroll"===n.getPropertyValue("overflow-y")}},{key:"ngOnDestroy",value:function(){this.observer.disconnect()}},{key:"updateVar",value:function(){parseInt(this.elemntComputed.getPropertyValue("--rowNum"));var n=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--rowNum",Math.ceil(this.elementsNumber/n)+"")}},{key:"changeCol",value:function(n){var t=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--colNum","add"==n?t+1+"":t-1+""),this.updateVar()}},{key:"element",get:function(){return this.host.nativeElement}}]),n}()}}]);