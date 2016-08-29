(function(){
  var DragAndDrop = {};

  DragAndDrop.install = function(Vue) {
    Vue.directive('drag-and-drop', {
      twoWay: true,
      params: [
        'dnd-drap',
        'dnd-dragstart',
        'dnd-dragend',
        'dnd-dragover',
        'dnd-dragenter',
        'dnd-dragleave',
        'dnd-drop',
        'dnd-effect-allowed',
        'dnd-allowed-types',
        'dnd-type',
        'dnd-inserted',
        'dnd-selected',
        'dnd-draggable'],
      bind: function () {

        // drag
        this.handleDrag = function(event){
          if (typeof(this.vm[this.params.dndDrag]) === 'function') {
            this.vm[this.params.drag].call(this, event.target);
          }
        }.bind(this);

        // dragstart
        this.handleDragstart = function(event){
          event = event.originalEvent || event;

          var dndDraggable = this.params.dndDraggable;
          console.log(dndDraggable);
          // Check whether the element is draggable, since dragstart might be triggered on a child.
          if (dndDraggable == 'false') return true;

          // Serialize the data associated with this element. IE only supports the Text drag type
          event.dataTransfer.setData("Text", dndDraggable);

          // Only allow actions specified in dnd-effect-allowed attribute
          event.dataTransfer.effectAllowed = this.vm[this.params.dndEffectAllowed] || "move";

          // Add CSS classes. See documentation above
          this.el.classList.add("dndDragging");

          // Try setting a proper drag image if triggered on a dnd-handle (won't work in IE).
          if (event._dndHandle && event.dataTransfer.setDragImage) {
            event.dataTransfer.setDragImage(this.el, 0, 0);
          }

          // Invoke callback
          if (typeof(this.vm[this.params.dndDragstart]) === 'function') {
            this.vm[this.params.dndDragstart].call(this, event.target);
          }

          event.stopPropagation();
        }.bind(this);

        // dragend
        this.handleDragend = function(event){

        }.bind(this);

        // dragover
        this.handleDragover = function(event){
          event = event.originalEvent || event;

          // todo: placeholder element

          event.target.classList.add("dndDragover");
          event.preventDefault();
          event.stopPropagation();
          return false;
        }.bind(this);

        // dragenter
        this.handleDragenter = function(event){

        }.bind(this);

        // dragleave
        this.handleDragleave = function(event){
          event = event.originalEvent || event;
          event.target.classList.remove("dndDragover");
        }.bind(this);

        // drop
        this.handleDrop = function(event){
          event = event.originalEvent || event;
          event.target.classList.remove("dndDragover");
          // Invoke callback
          if (typeof(this.vm[this.params.dndDrop]) === 'function') {
            this.vm[this.params.dndDrop].call(this, event.target);
          }
        }.bind(this);

        // selected
        var dndSelected = this.vm[this.params.dndSelected];
        this.handleSelected = function(event){
          // bind click event
          if (typeof(dndSelected) === 'function') {
            dndSelected.call(null, event.target);
          }
        }

        this.el.setAttribute('draggable', true);
        this.el.addEventListener('drag', this.handleDrag, false);
        this.el.addEventListener('dragstart', this.handleDragstart, false);
        this.el.addEventListener('dragend', this.handleDragend, false);
        this.el.addEventListener('dragover', this.handleDragover, false);
        this.el.addEventListener('dragenter', this.handleDragenter, false);
        this.el.addEventListener('dragleave', this.handleDragleave, false);
        this.el.addEventListener('drop', this.handleDrop, false);

        this.el.addEventListener('click', this.handleSelected, false);
      },
      update: function (newValue, oldValue) {
        // 值更新时的工作
        // 也会以初始值为参数调用一次
      },
      unbind: function () {
        // removeEventListener
        this.el.removeEventListener('drag', this.handleDrag, false);
        this.el.removeEventListener('dragstart', this.handleDragstart, false);
        this.el.removeEventListener('dragend', this.handleDragend, false);
        this.el.removeEventListener('dragover', this.handleDragover, false);
        this.el.removeEventListener('dragenter', this.handleDragenter, false);
        this.el.removeEventListener('dragleave', this.handleDragleave, false);
        this.el.removeEventListener('drop', this.handleDrop, false);

        this.el.removeEventListener('click', this.handleSelected, false);
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
