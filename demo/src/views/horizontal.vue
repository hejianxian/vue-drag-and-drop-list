<template lang="html">
  <div class="row horizontal">
    <div class="alert alert-success" role="alert">Instructions: Drag & drop the items or containers to move them around.</div>
    <div v-for="container in lists" class="col-md-4">
      <div class="panel panel-vue">
        <div class="panel-heading">
            <h3 class="panel-title">Dropzone {{$index+1}}</h3>
        </div>
        <ul class="panel-body container-list"
            v-dnd-list
            :dnd-list="container"
            :dnd-allowed-types="['containerType']"
            :dnd-external-sources="true">
          <li class="panel panel-vue padding"
              v-for="list in container"
              v-dnd-draggable
              :dnd-draggable="list"
              :dnd-index="$index"
              :dnd-data="container"
              :dnd-type="'containerType'"
              dnd-effect-allowed="copyMove">
              <div class="panel-heading">
                  <h3 class="panel-title">container {{$index+1}}</h3>
              </div>
              <div class="panel-body">
                <ul v-dnd-list class="item-list"
                    :dnd-list="list"
                    :dnd-horizontal-list="true"
                    :dnd-allowed-types="['itemType']"
                    :dnd-external-sources="true">
                  <li v-for="item in list" class="item"
                      v-dnd-draggable
                      :dnd-draggable="item"
                      :dnd-type="'itemType'"
                      dnd-effect-allowed="copyMove"
                      :dnd-index="$index"
                      :dnd-data="list">{{item.label}}</li>
                </ul>
              </div>
          </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let lists = [];
    let id = 10;
    for(var i = 0; i < 3; i++) {
      lists.push([]);
      for(var j = 0; j < 2; j++) {
        lists[i].push([]);
        for(var k = 0; k < 7; k++) {
          lists[i][j].push({"label": "Item " + id++});
        }
      }
    }
    return {
      "lists": lists
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="less">
/**
 * For the correct positioning of the placeholder element, the dnd-list and
 * it's children must have position: relative
 */
.horizontal ul[dnd-list],
.horizontal ul[dnd-list] > li{
	position: relative;
}

/**
 * The dnd-list should always have a min-height,
 * otherwise you can't drop to it once it's empty
 */
.horizontal ul[dnd-list] {
    padding-left: 0px;
		min-height: 40px;
}

/**
 * The dndDraggingSource class will be applied to
 * the source element of a drag operation. It makes
 * sense to hide it to give the user the feeling
 * that he's actually moving it.
 */

.horizontal ul[dnd-list] .dndDragging{
    opacity: 0.7;
}

.horizontal ul[dnd-list] .dndDraggingSource,
.horizontal .item-list .item.dndDraggingSource {
    display: none;
}

/**
 * An element with .dndPlaceholder class will be
 * added to the dnd-list while the user is dragging
 * over it.
 */
.horizontal ul[dnd-list] .dndPlaceholder {
    display: block;
    background-color: #eee;
    min-height: 41px;
}

.horizontal .container-list .dndPlaceholder{
  height: 100px;
}

.horizontal .item-list .dndPlaceholder{
  width: 50px;
  height: 50px;
  margin: 10px;
  padding: 5px;
  float: left;
  border-radius: 4px;
}

/**
 * The dnd-lists's child elements currently MUST have
 * position: relative. Otherwise we can not determine
 * whether the mouse pointer is in the upper or lower
 * half of the element we are dragging over. In other
 * browsers we can use event.offsetY for this.
 */
.horizontal .item-list li.item {
    color: #fff;
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px;
    background: #55A1A8;
    text-align: center;
    line-height: 20px;
    padding: 5px;
    float: left;
    border-radius: 4px;
}

/**
 * Show selected elements in green  有问题的
 */
.horizontal ul[dnd-list] li.selected {
    background-color: #dff0d8;
    color: #3c763d;
}
</style>
