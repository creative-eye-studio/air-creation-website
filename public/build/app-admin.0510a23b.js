"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[527],{6526:(e,n,o)=>{o(9554),o(1539),o(4747),o(1508);var t=o(9688),c=document.querySelector(".tab-container");null!=c&&t(c);var a=document.querySelector("#add-carac-btn"),r=document.querySelector(".carac-panel:last-child"),l=document.querySelector(".carac-panel-container");a&&(a.onclick=function(){var e=r.cloneNode(!0);return l.append(e),console.log("Cliqué"),!1}),document.addEventListener("DOMContentLoaded",(function(){console.log("Page chargée"),document.querySelectorAll(".delImgBtn").forEach((function(e){e.onclick=function(n){n.preventDefault();var o=new XMLHttpRequest,t=e.getAttribute("imgId");o.onreadystatechange=function(e,n){"good"==n?console.log("Demande envoyée"):console.log("Demande refusée")},o.open("POST",window.location.href),o.send({imgId:t})}}))}))}},e=>{e.O(0,[715,945,433],(()=>{return n=6526,e(e.s=n);var n}));e.O()}]);