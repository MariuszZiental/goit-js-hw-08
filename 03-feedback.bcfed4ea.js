function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(S,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=v();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?g(n,o-(e-l)):n}(e))}function w(e){return u=void 0,m&&r?b(e):(r=i=void 0,a)}function O(){var e=v(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector("input"),h=document.querySelector("testarea"),j=document.querySelector(".feedback-form"),S=e(t)((function(e){e.preventDefault();const t={email:b.value,message:h.value};e.target===b?t.email=e.target.value:e.target===h&&(t.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(t))}));j.addEventListener("input",S),function(){try{const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(b.value=t.email||"",h.value=t.message||"")}catch(e){console.log(e.message)}}(),j.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.value,message:h.value};e.target===b?t.email=e.target.value:e.target===h&&(t.message=e.target.value);j.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.bcfed4ea.js.map