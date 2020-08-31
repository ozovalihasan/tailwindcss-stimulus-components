import{Controller as t}from"stimulus";function e(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var n=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s=n.prototype;return s.initialize=function(){this.hide()},s.connect=function(){var t=this;setTimeout(function(){t.show()},200)},s.close=function(){var t=this;this.hide(),setTimeout(function(){t.element.remove()},1100)},s.show=function(){this.element.setAttribute("style","transition: 1s; transform:translate(0, 0);")},s.hide=function(){this.element.setAttribute("style","transition: 1s; transform:translate(400px, 0);")},n}(t),s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s=n.prototype;return s.connect=function(){this.timeout=null,this.duration=this.data.get("duration")||1e3},s.save=function(){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.statusTarget.textContent="Saving...",Rails.fire(t.formTarget,"submit")},this.duration)},s.success=function(){this.setStatus("Saved!")},s.error=function(){this.setStatus("Unable to save!")},s.setStatus=function(t){var e=this;this.statusTarget.textContent=t,this.timeout=setTimeout(function(){e.statusTarget.textContent=""},2e3)},n}(t);s.targets=["form","status"];var i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s=n.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden"},s.toggle=function(){this.menuTarget.classList.toggle(this.toggleClass)},s.hide=function(t){!1!==this.element.contains(t.target)||this.menuTarget.classList.contains(this.toggleClass)||this.menuTarget.classList.add(this.toggleClass)},n}(t);i.targets=["menu"];var o=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s=n.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden",this.backgroundHtml=this.data.get("backgroundHtml")||this._backgroundHTML(),this.backgroundId=this.data.get("backgroundId")||"modal-background",this.allowBackgroundClose="true"===(this.data.get("allowBackgroundClose")||"true"),this.preventDefaultActionOpening="true"===(this.data.get("preventDefaultActionOpening")||"true"),this.preventDefaultActionClosing="true"===(this.data.get("preventDefaultActionClosing")||"true")},s.disconnect=function(){this.close()},s.open=function(t){this.preventDefaultActionOpening&&t.preventDefault(),t.target.blur(),this.lockScroll(),this.containerTarget.classList.remove(this.toggleClass),this.data.get("disable-backdrop")||(document.body.insertAdjacentHTML("beforeend",this.backgroundHtml),this.background=document.querySelector("#"+this.backgroundId))},s.close=function(t){t&&this.preventDefaultActionClosing&&t.preventDefault(),this.unlockScroll(),this.containerTarget.classList.add(this.toggleClass),this.background&&this.background.remove()},s.closeBackground=function(t){this.allowBackgroundClose&&t.target===this.containerTarget&&this.close(t)},s.closeWithKeyboard=function(t){27!==t.keyCode||this.containerTarget.classList.contains(this.toggleClass)||this.close(t)},s._backgroundHTML=function(){return'<div id="modal-background" class="fixed top-0 left-0 w-full h-full" style="background-color: rgba(0, 0, 0, 0.8); z-index: 9998;"></div>'},s.lockScroll=function(){var t=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=t+"px",this.saveScrollPosition(),document.body.classList.add("fixed","inset-x-0","overflow-hidden"),document.body.style.top="-"+this.scrollPosition+"px"},s.unlockScroll=function(){document.body.style.paddingRight=null,document.body.classList.remove("fixed","inset-x-0","overflow-hidden"),this.restoreScrollPosition(),document.body.style.top=null},s.saveScrollPosition=function(){this.scrollPosition=window.pageYOffset||document.body.scrollTop},s.restoreScrollPosition=function(){document.documentElement.scrollTop=this.scrollPosition},n}(t);o.targets=["container"];var a=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s,i=n.prototype;return i.connect=function(){var t=this;this.activeTabClasses=(this.data.get("activeTab")||"active").split(" "),this.inactiveTabClasses=(this.data.get("inactiveTab")||"inactive").split(" "),this.anchor&&(this.index=this.tabTargets.findIndex(function(e){return e.id===t.anchor})),this.showTab()},i.change=function(t){t.preventDefault(),this.index=t.currentTarget.dataset.index?t.currentTarget.dataset.index:t.currentTarget.dataset.id?this.tabTargets.findIndex(function(e){return e.id==t.currentTarget.dataset.id}):this.tabTargets.indexOf(t.currentTarget),window.dispatchEvent(new CustomEvent("tsc:tab-change"))},i.showTab=function(){var t=this;this.tabTargets.forEach(function(e,n){var s,i,o,a,r=t.panelTargets[n];n===t.index?(r.classList.remove("hidden"),(s=e.classList).remove.apply(s,t.inactiveTabClasses),(i=e.classList).add.apply(i,t.activeTabClasses),e.id&&(event.preventDefault(),location.hash=e.id)):(r.classList.add("hidden"),(o=e.classList).remove.apply(o,t.activeTabClasses),(a=e.classList).add.apply(a,t.inactiveTabClasses))})},(s=[{key:"index",get:function(){return parseInt(this.data.get("index")||0)},set:function(t){this.data.set("index",t>=0?t:0),this.showTab()}},{key:"anchor",get:function(){return document.URL.split("#").length>1?document.URL.split("#")[1]:null}}])&&function(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}(n.prototype,s),n}(t);a.targets=["tab","panel"];var r=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s=n.prototype;return s.connect=function(){this.toggleClass=this.data.get("class")||"hidden"},s.toggle=function(t){var e=this;t.preventDefault(),this.toggleableTargets.forEach(function(t){t.classList.toggle(e.toggleClass)})},n}(t);r.targets=["toggleable"];var c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var s=n.prototype;return s.initialize=function(){this.contentTarget.setAttribute("style","transform:translate("+this.data.get("translateX")+", "+this.data.get("translateY")+");")},s.mouseOver=function(){this.contentTarget.classList.remove("hidden")},s.mouseOut=function(){this.contentTarget.classList.add("hidden")},n}(t);c.targets=["content"];export{n as Alert,s as Autosave,i as Dropdown,o as Modal,c as Popover,a as Tabs,r as Toggle};
//# sourceMappingURL=tailwindcss-stimulus-components.m.js.map
