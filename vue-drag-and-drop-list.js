(function(){
  var DragAndDropList = {};

  DragAndDropList.install = function(Vue) {
    Vue.directive('dnd-list', {
      params: [],
      bind: function () {

      },
      update: function (newValue, oldValue) {

      },
      unbind: function () {

      }
    });

    Vue.directive('dnd-draggable', {
      params: [],
      bind: function () {

      },
      update: function (newValue, oldValue) {

      },
      unbind: function () {

      }
    })
  }

  if (typeof exports == "object") {
    module.exports = DragAndDrop
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return DragAndDrop })
  } else if (window.Vue) {
    window.DragAndDrop = DragAndDrop
    Vue.use(DragAndDrop)
  }
})();
