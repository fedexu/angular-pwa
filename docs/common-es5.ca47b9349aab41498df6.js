function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],l=!0,i=!1,r=void 0;try{for(var o,u=t[Symbol.iterator]();!(l=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);l=!0);}catch(s){i=!0,r=s}finally{try{l||null==u.return||u.return()}finally{if(i)throw r}}return e}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var l=n[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"18jl":function(t,n,e){"use strict";var l=e("8Y7J");e("X3tW"),e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=l.mb({encapsulation:0,styles:[[""]],data:{}});function r(t){return l.Eb(0,[l.zb(null,0)],null,null)}},"1G5W":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var l=e("l7GE"),i=e("ZUHj");function r(t){return function(n){return n.lift(new o(t))}}var o=function(){function t(n){_classCallCheck(this,t),this.notifier=n}return _createClass(t,[{key:"call",value:function(t,n){var e=new u(t),l=Object(i.a)(e,this.notifier);return l&&!e.seenValue?(e.add(l),n.subscribe(e)):e}}]),t}(),u=function(t){function n(t){var e;return _classCallCheck(this,n),(e=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,t))).seenValue=!1,e}return _inherits(n,t),_createClass(n,[{key:"notifyNext",value:function(t,n,e,l,i){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),n}(l.a)},As3v:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var l=e("jtHE"),i=e("8Y7J"),r=e("z8v2"),o=function(){var t=function(){function t(n){var e=this;_classCallCheck(this,t),this.localStorage=n,this.items=new Array,this.dbEntity="articles",this.eventItems=new l.a(1),this.localStorage.getItem(this.dbEntity).subscribe((function(t){Boolean(t)&&(e.items=t),e.eventItems.next(e.items)}))}return _createClass(t,[{key:"getItems",value:function(){return this.eventItems}},{key:"addItems",value:function(t){var n=this;t.forEach((function(t){n.addItem(t)}))}},{key:"addItem",value:function(t){var n=Object.assign({},t);this.items.push(Object.assign({},n,{favorite:!0})),this.alignStorage()}},{key:"removeItem",value:function(t){this.isInFavorites(t)&&(this.items.splice(this.items.indexOf(t),1),this.alignStorage())}},{key:"isInFavorites",value:function(t){var n=this.items.find((function(n){return n.url===t.url}));return!!Boolean(n)}},{key:"alignStorage",value:function(){var t=this;this.localStorage.setItem(this.dbEntity,this.items).subscribe((function(){t.eventItems.next(t.items)}))}}]),t}();return t.ngInjectableDef=i.Ib({factory:function(){return new t(i.Jb(r.a))},token:t,providedIn:"root"}),t}()},Fe25:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var l=e("8Y7J"),i=function(){function t(){_classCallCheck(this,t),this.iconClicked=new l.m,this.readMore=new l.m}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onIconClick",value:function(){this.item.favorite=!Boolean(this.item.favorite),this.iconClicked.emit(this.item)}},{key:"onReadMore",value:function(){this.readMore.emit(this.item)}}]),t}()},UaNN:function(t,n,e){"use strict";var l=e("8Y7J");e("ySUH"),e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=l.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.variables[_ngcontent-%COMP%]{--rowNum:0;--colNum:0;--rowHeight:0px;--gap:0px}.infinite-scroll-grid[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(var(--rowNum),var(--rowHeight));grid-template-columns:repeat(var(--colNum),auto);gap:var(--gap)}.infinite-scroll-grid[_ngcontent-%COMP%] infinite-scroll-grid-item{grid-column-start:auto;grid-row-start:auto;max-height:var(--rowHeight);min-height:var(--rowHeight)}"]],data:{}});function r(t){return l.Eb(0,[l.Bb(671088640,1,{anchor:0}),(t()(),l.ob(1,0,null,null,3,"div",[["class","infinite-scroll-grid variables"]],[[8,"id",0]],null,null,null,null)),l.zb(null,0),(t()(),l.ob(3,0,[[1,0],["anchor",1]],null,1,"div",[],null,null,null,null,null)),(t()(),l.Db(-1,null,["\u2800"]))],null,(function(t,n){t(n,1,0,l.sb(1,"",n.component.id,""))}))}},X3tW:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var l=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()},syPK:function(t,n,e){"use strict";var l=e("8Y7J"),i=e("SVse");e("Fe25"),e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c}));var r=l.mb({encapsulation:0,styles:[[".demo-card-wide.mdl-card[_ngcontent-%COMP%]{width:100%;border-radius:15px}.demo-card-wide[_ngcontent-%COMP%] > .mdl-card__menu[_ngcontent-%COMP%], .demo-card-wide[_ngcontent-%COMP%] > .mdl-card__title[_ngcontent-%COMP%]{color:#000}.card-grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:[first] auto [second];grid-template-rows:[first] 40% [second] 38% [third] auto [fourth];max-width:100%;min-width:100%;max-height:100%;min-height:100%}.card-title[_ngcontent-%COMP%]{grid-column:first/second;grid-row:first/second}.card-description[_ngcontent-%COMP%]{grid-column:first/second;grid-row:second/third}.card-button[_ngcontent-%COMP%]{grid-column:first/second;grid-row:third/fourth}.mdl-button--icon[_ngcontent-%COMP%]{padding:.15em}"]],data:{animation:[{type:7,name:"slideOutUp",definitions:[{type:1,expr:"0 => 1",animation:[{type:3,steps:[{type:10,animation:{type:8,animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:"translate3d(0, 0, 0)",easing:"ease",offset:0},offset:null},{type:6,styles:{transform:"translate3d(0, -{{translate}}, 0)",visibility:"hidden",easing:"ease",offset:1},offset:null}]},timings:"{{duration}}ms {{delay}}ms"}],options:null},options:null},{type:11,selector:"@*",animation:{type:9,options:null},options:{optional:!0}}],options:null}],options:{params:{delay:0,duration:1e3,translate:"70%"}}}],options:{}}]}});function o(t){return l.Eb(0,[(t()(),l.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(t()(),l.Db(-1,null,["favorite"]))],null,null)}function u(t){return l.Eb(0,[(t()(),l.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(t()(),l.Db(-1,null,["favorite_border "]))],null,null)}function s(t){return l.Eb(0,[(t()(),l.ob(0,0,null,null,1,"i",[["class","material-icons-round heart-icon-ff2e2e"]],null,null,null,null,null)),(t()(),l.Db(-1,null,["favorite"]))],null,null)}function a(t){return l.Eb(0,[(t()(),l.ob(0,0,null,null,18,null,null,null,null,null,null,null)),(t()(),l.ob(1,0,null,null,17,"div",[["class","demo-card-wide mdl-card mdl-shadow--2dp card-grid-container"]],null,null,null,null,null)),(t()(),l.ob(2,0,null,null,2,"div",[["class","mdl-card__title card-title"]],null,null,null,null,null)),(t()(),l.ob(3,0,null,null,1,"h2",[["class","mdl-card__title-text"]],null,null,null,null,null)),(t()(),l.Db(4,null,["",""])),(t()(),l.ob(5,0,null,null,1,"div",[["class","mdl-card__supporting-text text-ellipsis card-description"]],null,null,null,null,null)),(t()(),l.Db(6,null,[" "," "])),(t()(),l.ob(7,0,null,null,2,"div",[["class","mdl-card__actions mdl-card--border card-button"]],null,null,null,null,null)),(t()(),l.ob(8,0,null,null,1,"a",[["class","mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.onReadMore()&&l),l}),null,null)),(t()(),l.Db(-1,null,[" Read More "])),(t()(),l.ob(10,0,null,null,8,"div",[["class","mdl-card__menu"]],null,null,null,null,null)),(t()(),l.ob(11,0,null,null,2,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"],["style","position: absolute;"]],[[24,"@slideOutUp",0]],null,null,null,null)),(t()(),l.db(16777216,null,null,1,null,o)),l.nb(13,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(t()(),l.ob(14,0,null,null,4,"button",[["class","mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.onIconClick()&&l),l}),null,null)),(t()(),l.db(16777216,null,null,1,null,u)),l.nb(16,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(t()(),l.db(16777216,null,null,1,null,s)),l.nb(18,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,13,0,e.item.favorite),t(n,16,0,!e.item.favorite),t(n,18,0,e.item.favorite)}),(function(t,n){var e=n.component;t(n,4,0,e.item.name),t(n,6,0,e.item.description),t(n,11,0,e.item.favorite)}))}function c(t){return l.Eb(0,[(t()(),l.db(16777216,null,null,1,null,a)),l.nb(1,16384,null,0,i.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,1,0,n.component.item)}),null)}},ySUH:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var l=e("8Y7J"),i=function(){function t(n){_classCallCheck(this,t),this.host=n,this.options={},this.scrolled=new l.m,this.id="infinite_scroll_grid_"+Math.random()}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,n=Object.assign({root:this.isHostScrollable()?this.host.nativeElement:null},this.options);this.observer=new IntersectionObserver((function(n){_slicedToArray(n,1)[0].isIntersecting&&t.scrolled.emit()}),n)}},{key:"ngAfterViewInit",value:function(){this.observer.observe(this.anchor.nativeElement);var t=this,n=setInterval((function(){document.getElementById(t.id)&&(t.infiniteGridElement=document.getElementById(t.id),t.elemntComputed=window.getComputedStyle(t.infiniteGridElement),t.infiniteGridElement.style.setProperty("--gap",t.gap),t.infiniteGridElement.style.setProperty("--colNum",t.colNum),t.infiniteGridElement.style.setProperty("--rowHeight",t.rowHeight),t.updateVar(),clearInterval(n))}),100)}},{key:"ngOnChanges",value:function(){this.infiniteGridElement&&(this.infiniteGridElement.style.setProperty("--gap",this.gap),this.infiniteGridElement.style.setProperty("--colNum",this.colNum),this.infiniteGridElement.style.setProperty("--rowHeight",this.rowHeight),this.updateVar())}},{key:"isHostScrollable",value:function(){var t=window.getComputedStyle(this.element);return"auto"===t.getPropertyValue("overflow")||"scroll"===t.getPropertyValue("overflow-y")}},{key:"ngOnDestroy",value:function(){this.observer.disconnect()}},{key:"updateVar",value:function(){parseInt(this.elemntComputed.getPropertyValue("--rowNum"));var t=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--rowNum",Math.ceil(this.elementsNumber/t)+"")}},{key:"changeCol",value:function(t){var n=parseInt(this.elemntComputed.getPropertyValue("--colNum"));this.infiniteGridElement.style.setProperty("--colNum","add"==t?n+1+"":n-1+""),this.updateVar()}},{key:"element",get:function(){return this.host.nativeElement}}]),t}()}}]);