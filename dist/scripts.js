(()=>{var e={230:()=>{var e,t,n;t=(e=document).getElementById("iconMenu"),n=e.getElementById("main-nav"),t.addEventListener("click",(function(){n.classList.toggle("main-nav--show")})),e.addEventListener("click",(function(e){if(!e.target.matches(".main-menu__link"))return!1;n.classList.remove("main-nav--show")})),function(e){var t=e.querySelector(".form"),n=e.querySelector(".form__loader"),o=e.getElementById("thank");t.addEventListener("submit",(function(e){e.preventDefault(),n.classList.add("form__loader--show"),fetch("https://formsubmit.co/ajax/purihuamanpurihuamanpedro@gmail.com",{method:"POST",body:new FormData(e.target)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){console.log(e),location.hash="#thank",t.reset()})).catch((function(e){console.log(e);var t=e.statusText||"Ocurrió un error al enviar, intenta nuevamente!.";o.querySelector("h3").textContent="Erro ".concat(e.status,": ").concat(t)})).finally((function(){n.classList.remove("form__loader--show"),setTimeout((function(){location.hash="#close"}),3e3)}))}))}(document)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(230)})()})();