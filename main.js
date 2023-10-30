(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,o){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(i)?i:String(i)),n)}var i}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={}}var o,r;return o=e,r=[{key:"emit",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];return!!Array.isArray(this.listeners[e])&&(this.listeners[e].forEach((function(e){e.apply(void 0,o)})),!0)}},{key:"subscribe",value:function(e,t){var o=this;return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t),function(){o.listeners[e]=o.listeners[e].filter((function(e){return e!==t}))}}}],r&&t(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),e}(),r={themeCheck:{classNode:".checkbox_theme",classIco:".setting__theme"},muteCheck:{classNode:".checkbox_mute",classIco:".setting__mute"}},n={classNode:".setting__size"},i=[3,4,5],s=".board",a=".chip";function l(e){var t=e.toString();return t.length<2?"0"+t:t}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==u(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(n)?n:String(n)),r)}var n}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._body=document.querySelector("body"),this._observer=t,this._setButtons=this._setButtons.bind(this),this._setMute=this._setMute.bind(this),this._setTheme=this._setTheme.bind(this),this._setSize=this._setSize.bind(this),this._setSteps=this._setSteps.bind(this),this._setTime=this._setTime.bind(this)}var t,o;return t=e,o=[{key:"init",value:function(e,t,o){var r=this;for(var n in this._buttonsNode={},this._checksNode={},this._selectNode={},this._boardNode=document.querySelector(s),e)this._buttonsNode[n]=document.querySelector(e[n].class),this._onListener(this._buttonsNode[n],"click",e[n].cb);for(var a in t)this._checksNode[a]={},this._checksNode[a].node=document.querySelector(t[a].dataInit.classNode),this._checksNode[a].nodeIco=document.querySelector(t[a].dataInit.classIco),this._onListener(this._checksNode[a].node,"change",t[a].cb);this._selectNode=document.querySelector(o.size.class),i.forEach((function(e){var t=new Option("".concat(e,"x").concat(e),e);r._selectNode.append(t)})),this._onListener(this._selectNode,"change",o.size.cb),this._counterMoviesValueNode=document.querySelector(".counter__value.counter_move"),this._counterTimeValueNode=document.querySelector(".counter__value.counter_time"),this._observer.subscribe("modelApp:setButton",this._setButtons),this._observer.subscribe("modelApp:setMute",this._setMute),this._observer.subscribe("modelApp:setTheme",this._setTheme),this._observer.subscribe("controllerApp:setSizeBoard",this._setSize),this._observer.subscribe("modelApp:setSteps",this._setSteps),this._observer.subscribe("modelApp:setTime",this._setTime)}},{key:"_setTime",value:function(e){var t,o,r;this._counterTimeValueNode.textContent=(t=e,o=Math.floor(t/60),r=t%60,l(o%=60)+":"+l(r))}},{key:"_setSteps",value:function(e){this._counterMoviesValueNode.textContent=e}},{key:"_setSize",value:function(e){console.log("ViewApp: setSize"),this._selectNode.selectedIndex=e}},{key:"_setButtons",value:function(e){for(var t in e)e[t]?this._changeClass(this._buttonsNode[t],!1,"button_disabled"):this._changeClass(this._buttonsNode[t],"button_disabled",!1);e.play?this._changeClass(this._boardNode,null,"board_open"):this._changeClass(this._boardNode,"board_open",null)}},{key:"_setMute",value:function(e){e.mute;var t=e.ico;this._icoChange(this._checksNode.mute.nodeIco,t)}},{key:"_setTheme",value:function(e){var t=e.theme,o=e.ico;this._icoChange(this._checksNode.theme.nodeIco,o),t?this._changeClass(this._body,"theme__dark","theme__light"):this._changeClass(this._body,"theme__light","theme__dark")}},{key:"_icoChange",value:function(e,t){e.textContent=t}},{key:"_onListener",value:function(e,t,o){e.addEventListener(t,(function(){o(this)}))}},{key:"_changeClass",value:function(e,t,o){t&&e.classList.add(t),o&&e.classList.remove(o)}}],o&&c(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==d(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(n)?n:String(n)),r)}var n}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._observer=t,this._storageKey="puzzleApp",this._state={buttons:{play:null,replay:null,pause:null},checks:{mute:null,theme:null},mute:null,theme:null,steps:null,time:null},this._themeIco={icoOn:"light_mode",icoOff:"dark_mode"},this._muteIco={icoOn:"volume_up",icoOff:"volume_off"},this._addTime=this._addTime.bind(this)}var t,o;return t=e,(o=[{key:"init",value:function(){this._setInitButtonState(),this.setTheme(!1),this.setMute(!0),this.setSteps(0),this.setTime(0)}},{key:"setTime",value:function(e){this._state.time=e,this._observer.emit("modelApp:setTime",e)}},{key:"_addTime",value:function(){this._state.time++,this.setTime(this._state.time)}},{key:"runTimer",value:function(){this._timer=setInterval(this._addTime,1e3)}},{key:"stopTimer",value:function(){clearTimeout(this._timer)}},{key:"setSteps",value:function(e){this._state.steps=e,this._observer.emit("modelApp:setSteps",e)}},{key:"addSteps",value:function(){this._state.steps++,this.setSteps(this._state.steps)}},{key:"setPlayState",value:function(){this.setButton({play:!1,replay:!0,pause:!0})}},{key:"setPauseState",value:function(){this.setButton({play:!0,replay:!0,pause:!1})}},{key:"setReplayState",value:function(){this._setInitButtonState(),this.stopTimer(),this.setSteps(0),this.setTime(0)}},{key:"_setInitButtonState",value:function(){this.setButton({play:!0,replay:!1,pause:!1})}},{key:"setButton",value:function(e){var t=e.play,o=e.replay,r=e.pause;this._state.buttons.play=t,this._state.buttons.replay=o,this._state.buttons.pause=r,this._observer.emit("modelApp:setButton",this._state.buttons)}},{key:"setTheme",value:function(e){var t;this._state.theme=e,t=this._state.theme?this._themeIco.icoOn:this._themeIco.icoOff,this._observer.emit("modelApp:setTheme",{theme:this._state.theme,ico:t})}},{key:"setMute",value:function(e){var t;this._state.mute=e,t=this._state.mute?this._muteIco.icoOn:this._muteIco.icoOff,this._observer.emit("modelApp:setMute",{mute:this._state.mute,ico:t})}}])&&f(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}var b,v,S,w=function(){function e(t,o){var r=o.col,n=o.row;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._num=t,this._col=r,this._row=n}var t,o;return t=e,(o=[{key:"createCell",value:function(){return this._element=e._template.cloneNode(!0),this._chip=this._element.querySelector(a),this._chip.textContent=this._num,this._chip.closest(".cell").dataset.row=this._row,this._chip.closest(".cell").dataset.col=this._col,0===this._num&&(this._chip.closest(".cell").dataset.type="zero",this._chip.remove()),this._element}}])&&_(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,B(r.key),r)}}function B(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}b=w,v="_template",S=document.querySelector("#cell-template").content,(v=p(v))in b?Object.defineProperty(b,v,{value:S,enumerable:!0,configurable:!0,writable:!0}):b[v]=S;var z=function(){function e(t){var o=this,r=t.instance,n=t.handle,i=t.observer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,o){(t=B(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(this,"_handleClick",(function(e,t){o._currentNode=e.target,o._current=t.current,o._onClick(t)})),this._cellInstance=r,this._onClick=n,this._observer=i,this._root=document.querySelector(s),this._moveGood=this._moveGood.bind(this),this._moveBad=this._moveBad.bind(this)}var t,o;return t=e,(o=[{key:"init",value:function(){this._observer.subscribe("modelBoard:moveIsAllowed",this._moveGood),this._observer.subscribe("modelBoard:moveIsNotAllowed",this._moveBad)}},{key:"_moveGood",value:function(){this._zeroNode=this._root.querySelector('[data-type="zero"]');var e=this._currentNode.getBoundingClientRect(),t=this._zeroNode.getBoundingClientRect();e.y===t.y?e.x>t.x?this._move("left",e.x-t.x):this._move("right",t.x-e.x):e.y>t.y?this._move("up",e.y-t.y):this._move("down",t.y-e.y),this._observer.emit("viewBoard:addStep")}},{key:"_move",value:function(e,t){var o=this;switch(this._root.style.pointerEvents="none",e){case"up":this._currentNode.style.transform="translateY(-".concat(t,"px)");break;case"down":this._currentNode.style.transform="translateY(".concat(t,"px)");break;case"left":this._currentNode.style.transform="translateX(-".concat(t,"px)");break;case"right":console.log("right"),this._currentNode.style.transform="translateX(".concat(t,"px)");break;default:return null}setTimeout((function(){o._currentNode.style.transform=null,o._currentNode.closest(".cell").dataset.type="zero",o._zeroNode.appendChild(o._currentNode),delete o._zeroNode.dataset.type,o._zero=o._current,o._root.style.pointerEvents="auto"}),1e3)}},{key:"_moveBad",value:function(){}},{key:"clearBoard",value:function(){this._root.innerHTML=""}},{key:"renderBoard",value:function(e){for(var t=new DocumentFragment,o=0;o<e.length;o++){var r=document.createElement("div");r.classList.add("row");for(var n=0;n<e.length;n++){var i=new this._cellInstance(e[o][n],{col:n,row:o});0===e[o][n]&&(this._zero={col:n,row:o}),r.append(i.createCell())}t.append(r)}this._root.append(t),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._root.querySelectorAll(a).forEach((function(t){t.addEventListener("click",(function(o){e._handleClick(o,{zero:e._zero,current:{col:+t.closest(".cell").dataset.col,row:+t.closest(".cell").dataset.row}})}))}))}}])&&k(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function N(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function A(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===T(t)?t:String(t)}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._observer=t,this._storageKey="puzzleBoard",this._state={sizeIndex:null,sizeBoard:null,board:null},this._setSizeBoard=this._setSizeBoard.bind(this)}var t,o;return t=e,(o=[{key:"init",value:function(){this._setSizeBoard(0),this._observer.subscribe("controllerApp:ChangeSizeBoard",this._setSizeBoard)}},{key:"_setSizeBoard",value:function(e,t){this._state.sizeIndex=e,this._state.sizeBoard=i[e],this._genBoard()}},{key:"_genBoard",value:function(){var e,t=function(e){if(Array.isArray(e))return C(e)}(e=function(e){for(var t=new Set,o=Math.pow(e,2);t.size<o;)t.add(Math.floor(Math.random()*o));return t}(this._state.sizeBoard))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=0;this._state.board=Array(this._state.sizeBoard);for(var r=0;r<this._state.sizeBoard;r++){this._state.board[r]=Array(this._state.sizeBoard);for(var n=0;n<this._state.sizeBoard;n++)this._state.board[r][n]=t[o++]}this._observer.emit("modelBoard:genBoard",this._state.board)}},{key:"move",value:function(e){this._availableMovies(e.zero).some((function(t){var o=t.row,r=t.col;return o===e.current.row&&r===e.current.col}))?(this._state.board[e.zero.row][e.zero.col]=this._state.board[e.current.row][e.current.col],this._state.board[e.current.row][e.current.col]=0,this._observer.emit("modelBoard:moveIsAllowed",null)):this._observer.emit("modelBoard:moveIsNotAllowed",null)}},{key:"_availableMovies",value:function(e){var t=this,o=e.col,r=e.row;return[{row:r-1,col:o},{row:r+1,col:o},{row:r,col:o-1},{row:r,col:o+1}].filter((function(e){var o=e.row,r=e.col;return o>=0&&o<t._state.sizeBoard&&r>=0&&r<t._state.sizeBoard}))}}])&&N(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function O(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._observer=t,this._handleClick=this._handleClick.bind(this),this._renderBoard=this._renderBoard.bind(this)}var t,o;return t=e,(o=[{key:"_init",value:function(){this._observer.subscribe("modelBoard:genBoard",this._renderBoard),this._viewBoard=new z({instance:w,handle:this._handleClick,observer:this._observer}),this._viewBoard.init(),this._modelBoard=new P(this._observer,this._storage),this._modelBoard.init()}},{key:"run",value:function(){this._init()}},{key:"changeSizeBoard",value:function(e){this._modelBoard._setSizeBoard(e)}},{key:"_renderBoard",value:function(e){this._viewBoard.clearBoard(),this._viewBoard.renderBoard(e)}},{key:"_handleClick",value:function(e){this._modelBoard.move(e)}}])&&I(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function M(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function q(e,t,o){return(t=L(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function L(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===x(t)?t:String(t)}new(function(){function e(t){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"handlePlay",(function(){o._modelApp.setPlayState(),o._modelApp.runTimer()})),q(this,"handlePause",(function(){o._modelApp.setPauseState(),o._modelApp.stopTimer()})),q(this,"handleReplay",(function(){o._modelApp.setReplayState()})),q(this,"handleChangeMute",(function(e){o._modelApp.setMute(!e.checked)})),q(this,"handleChangeTheme",(function(e){o._modelApp.setTheme(e.checked)})),q(this,"handleChangeSizeBoard",(function(e){o._observer.emit("controllerApp:ChangeSizeBoard",e.selectedIndex),o._controllerBoard.changeSizeBoard(e.selectedIndex)})),this._observer=t,this._addStep=this._addStep.bind(this)}var t,o;return t=e,(o=[{key:"init",value:function(){this.buttons={play:{class:".button_play",cb:this.handlePlay},replay:{class:".button_replay",cb:this.handleReplay},pause:{class:".button_pause",cb:this.handlePause}},this.checks={theme:{dataInit:r.themeCheck,cb:this.handleChangeTheme},mute:{dataInit:r.muteCheck,cb:this.handleChangeMute}},this.select={size:{class:n.classNode,options:n.options,cb:this.handleChangeSizeBoard}},this._observer.subscribe("viewBoard:addStep",this._addStep)}},{key:"run",value:function(){this.init(),this._viewApp=new h(this._observer),this._viewApp.init(this.buttons,this.checks,this.select),this._modelApp=new y(this._observer,this._storage),this._modelApp.init(),this._controllerBoard=new E(this._observer,this._storage),this._controllerBoard.run()}},{key:"_addStep",value:function(){this._modelApp.addSteps()}}])&&M(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}())(new o).run()})();
//# sourceMappingURL=main.js.map