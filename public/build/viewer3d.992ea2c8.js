(self.webpackChunk=self.webpackChunk||[]).push([[224],{9752:()=>{!function(){var e=document.querySelector("#product-3d-viewer"),t=new THREE.WebGLRenderer({canvas:e}),a=e.getAttribute("data-model");console.log(a);var n=new THREE.PerspectiveCamera(150,2,0,100);n.position.set(0,0,0);var r=new THREE.OrbitControls(n,e);r.target.set(0,0,0),r.update();var i=new THREE.Scene;i.background=new THREE.Color("darkgray");var o=new THREE.HemisphereLight(11657727,12155424,1);i.add(o);var d=new THREE.DirectionalLight(16777215,1);d.position.set(0,10,0),d.target.position.set(-5,0,0),i.add(d),i.add(d.target),(new THREE.OBJLoader2).load("../../uploads/3d-models/"+a,(function(e){var t=e.detail.loaderRootNode;i.add(t)})),requestAnimationFrame((function e(){if(function(e){var t=e.domElement,a=t.clientWidth,n=t.clientHeight,r=t.width!==a||t.height!==n;return r&&e.setSize(a,n,!1),r}(t)){var a=t.domElement;n.aspect=a.clientWidth/a.clientHeight,n.updateProjectionMatrix()}t.render(i,n),requestAnimationFrame(e)}))}()}},e=>{var t;t=9752,e(e.s=t)}]);