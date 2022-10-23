(self["webpackChunk"] = self["webpackChunk"] || []).push([["carousel"],{

/***/ "./assets/carousel.js":
/*!****************************!*\
  !*** ./assets/carousel.js ***!
  \****************************/
/***/ (() => {

var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
imagesLoaded(grid).on('progress', function () {
  // layout Masonry after each image loads
  msnry.layout();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/carousel.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFYO0FBRUEsSUFBSUMsS0FBSyxHQUFHLElBQUlDLE9BQUosQ0FBYUosSUFBYixFQUFtQjtFQUM3QkssWUFBWSxFQUFFLFlBRGU7RUFFN0JDLFdBQVcsRUFBRSxhQUZnQjtFQUc3QkMsZUFBZSxFQUFFO0FBSFksQ0FBbkIsQ0FBWjtBQU1BQyxZQUFZLENBQUVSLElBQUYsQ0FBWixDQUFxQlMsRUFBckIsQ0FBeUIsVUFBekIsRUFBcUMsWUFBVztFQUM5QztFQUNBTixLQUFLLENBQUNPLE1BQU47QUFDRCxDQUhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nhcm91c2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcblxudmFyIG1zbnJ5ID0gbmV3IE1hc29ucnkoIGdyaWQsIHtcbiAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXG4gIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxuICBwZXJjZW50UG9zaXRpb246IHRydWVcbn0pO1xuXG5pbWFnZXNMb2FkZWQoIGdyaWQgKS5vbiggJ3Byb2dyZXNzJywgZnVuY3Rpb24oKSB7XG4gIC8vIGxheW91dCBNYXNvbnJ5IGFmdGVyIGVhY2ggaW1hZ2UgbG9hZHNcbiAgbXNucnkubGF5b3V0KCk7XG59KTsiXSwibmFtZXMiOlsiZ3JpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1zbnJ5IiwiTWFzb25yeSIsIml0ZW1TZWxlY3RvciIsImNvbHVtbldpZHRoIiwicGVyY2VudFBvc2l0aW9uIiwiaW1hZ2VzTG9hZGVkIiwib24iLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9