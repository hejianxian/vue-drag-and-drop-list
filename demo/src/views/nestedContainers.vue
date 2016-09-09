<template lang="html">
  <div class="row nestedDemo">
    <div class="alert alert-success" role="alert">
      Instructions: In this demo you can not only drag & drop list items, but also containers, which can contain list items or other containers themselves. To create new elements, use the toolbar on the right. If this is more than you need, check out the simple list demo.
    </div>
    <div v-for="(zone, list) in dropzones" class="col-md-5">
      <div class="panel panel-vue">
        <div class="panel-heading">
            <h3 class="panel-title">Dropzone {{zone}}</h3>
        </div>
        <ul class="panel-body container-list"
            v-dnd-list
            :dnd-list="list"
            dnd-inserted="inserted"
            dnd-effect-allowed="move"
            :dnd-external-sources="true">
          <list v-for="item in list" :item="item" :list="list" :index="$index" :selected.sync="selected"></list>
        </ul>
      </div>
    </div>
    <div class="col-md-2">
      <div class="new-elements">
        <div class="panel panel-info">
          <div class="panel-heading">
              <h3 class="panel-title">New Elements</h3>
          </div>
          <div class="panel-body">
            <div v-dnd-draggable class="dnd-button"
                :dnd-draggable="templates"
                dnd-copied="copied"
                dnd-effect-allowed="copy">
                Add Element
            </div>
          </div>
        </div>
      </div>
      <div class="selected" v-if="selected">
        <div class="panel panel-info">
          <div class="panel-heading">
              <h3 class="panel-title">Selected</h3>
          </div>
          <div class="panel-body">
            {{selected.type}} {{selected.id}}
          </div>
        </div>
      </div>
      <div class="ashcan">
        <div class="panel panel-info">
          <div class="panel-heading">
              <h3 class="panel-title">Ashcan</h3>
          </div>
          <div v-dnd-list  :dnd-list="[]" class="panel-body">
            <img class="ashcan-logo" src="../assets/ashcan.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import list from '../components/list';

export default {
  data() {
    return {
      selected: null,
      templates: {type: "new element", id: 1},
      dropzones: {
        "A": [
          {
            "type": "container",
            "id": 1,
            "columns": [
                {
                  "type": "item",
                  "id": "1"
                },
                {
                  "type": "item",
                  "id": "2"
                },
                {
                  "type": "item",
                  "id": "3"
                }
            ]
          },
          {
            "type": "item",
            "id": "4"
          },
          {
            "type": "item",
            "id": "5"
          },
          {
            "type": "item",
            "id": "6"
          }
        ],
        "B": [
          {
            "type": "item",
            "id": 7
          },
          {
            "type": "item",
            "id": "8"
          },
          {
            "type": "container",
            "id": "2",
            "columns": [
                {
                  "type": "item",
                  "id": "9"
                },
                {
                  "type": "item",
                  "id": "10"
                },
                {
                  "type": "container",
                  "id": "3",
                  "columns": [
                      {
                        "type": "item",
                        "id": "13"
                      },
                      {
                        "type": "item",
                        "id": "14"
                      }
                  ]
                },
                {
                  "type": "item",
                  "id": "15"
                }
              ]
            }
          ]
        }
    };
  },
  methods: {
    copied(index){
      index.id++;
    },
    inserted(data){
      // console.log(data);
    }
  },
  components: {
    list
  }
};
</script>

<style lang="less">
/**
 * For the correct positioning of the placeholder element, the dnd-list and
 * it's children must have position: relative
 */
.nestedDemo ul[dnd-list],
.nestedDemo ul[dnd-list] > li{
	position: relative;
  min-height: 40px;
}

/**
 * The dnd-list should always have a min-height,
 * otherwise you can't drop to it once it's empty
 */
.nestedDemo ul[dnd-list] {
    padding-left: 0px;
}

/**
 * The dndDraggingSource class will be applied to
 * the source element of a drag operation. It makes
 * sense to hide it to give the user the feeling
 * that he's actually moving it.
 */

.nestedDemo ul[dnd-list] .dndDragging{
    opacity: 0.7;
}

.nestedDemo ul[dnd-list] .dndDraggingSource{
    display: none;
}

/**
 * An element with .dndPlaceholder class will be
 * added to the dnd-list while the user is dragging
 * over it.
 */
.nestedDemo ul[dnd-list] .dndPlaceholder {
    display: block;
    background-color: #eee;
    min-height: 41px;
}

/**
 * The dnd-lists's child elements currently MUST have
 * position: relative. Otherwise we can not determine
 * whether the mouse pointer is in the upper or lower
 * half of the element we are dragging over. In other
 * browsers we can use event.offsetY for this.
 */
.nestedDemo ul[dnd-list] li {
    background-color: #fff;
    color: #35495E;
    border-bottom: 1px solid #41B883;
    display: block;
    padding: 0 15px;
    line-height: 40px;
    p{
      margin: 0;
    }
}

.nestedDemo ul[dnd-list] li:last-child{
    border-bottom: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}


/**
 * Show selected elements in green
 */
.nestedDemo ul[dnd-list] .selected {
    background-color: #dff0d8;
    color: #3c763d;
}
.nestedDemo ul[dnd-list] .selected.has-container {
  background-color: #fff;
  .panel-body, .panel-body li{
    background-color: #dff0d8;
    color: #3c763d;
  }
}


/*new-elements*/
.new-elements .dnd-button{
    border: 1px solid #41B883;
    text-align: center;
    height: 40px;
    border-radius: 4px;
    line-height: 40px;
    background-color: #41B883;
    color: #fff;
    cursor: move;
}

.selected{

}

.ashcan{
  .ashcan-logo{
    display: block;
    width: 40px;
    margin: 10px auto;
  }
}


</style>
