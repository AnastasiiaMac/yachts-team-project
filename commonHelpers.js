(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const o={openMenuBtn:document.querySelector(".open-menu-btn"),mobMenu:document.querySelector(".mob-menu"),closeMenuBtn:document.querySelector(".icon-close-btn"),body:document.querySelector("body"),navLinks:document.querySelectorAll(".button-text-mob")},i=()=>{o.mobMenu.classList.toggle("is-open-mob"),o.body.classList.toggle("noScroll")},d=()=>{o.mobMenu.classList.remove("is-open-mob"),o.body.classList.remove("noScroll")};o.openMenuBtn.addEventListener("click",i);o.closeMenuBtn.addEventListener("click",i);o.navLinks.forEach(n=>{n.addEventListener("click",d)});var m=document.querySelectorAll(".ouryachts-item");[...m].forEach(n=>{n.addEventListener("click",function(){n.classList.toggle("is-flipped")})});const l=document.getElementById("scrollBtn");window.addEventListener("scroll",a);function a(){document.body.scrollTop>35||document.documentElement.scrollTop>35?l.style.display="flex":l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map