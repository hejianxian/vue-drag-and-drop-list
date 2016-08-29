(function(){
  var DragAndDropList = {};

  DragAndDropList.install = function(Vue) {
    Vue.directive('dnd-list', {
      params: ['dnd-list', 'dnd-allowed-types', 'dnd-disable-if', 'dnd-external-sources', 'dnd-inserted', 'dnd-drop'],
      // css: placeholder, dragover
      bind: function () {

      },
      update: function (newValue, oldValue) {

      },
      unbind: function () {

      }
    });

    Vue.directive('dnd-draggable', {
      params: ['dnd-draggable', 'dnd-effect-allowed', 'dnd-type', 'dnd-dragstart', 'dnd-selected', 'dnd-dragend', 'dnd-disable-if', 'dnd-moved', 'dnd-canceled'],
      // css: dragging, draggingSource
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
