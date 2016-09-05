<template lang="html">
  <div class="row horizontal">
    <div class="alert alert-success" role="alert">Instructions: Drag & drop the horizontal items to move them around.</div>
      <div v-for="(listName, list) in lists" class="col-md-4">
          <div class="panel panel-vue">
              <div class="panel-heading">
                  <h3 class="panel-title">List {{listName}}</h3>
              </div>
              <div class="panel-body">
                <ul v-dnd-list :dnd-list="list" :dnd-horizontal-list="true">
                    <li v-dnd-draggable v-for="item in list"
                        :dnd-draggable="item"
                        :dnd-index="$index"
                        :dnd-data="list"
                        dnd-effect-allowed="move"
                        v-bind:class="{'selected': selected === item}"
                        >
                        {{item.label}}
                    </li>
                </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      "selected": null,
      "lists": {
        "A": [
          {
            "label": "Item A1"
          },
          {
            "label": "Item A2"
          },
          {
            "label": "Item A3"
          },
          {
            "label": "Item A5"
          },
          {
            "label": "Item A6"
          },
          {
            "label": "Item A7"
          },
          {
            "label": "Item A8"
          },
          {
            "label": "Item A9"
          }
        ],
        "B": [
          {
            "label": "Item B1"
          },
          {
            "label": "Item B2"
          },
          {
            "label": "Item B3"
          },
          {
            "label": "Item B4"
          },
          {
            "label": "Item B5"
          },
          {
            "label": "Item B6"
          },
          {
            "label": "Item B7"
          }
        ],
        "C": [
          {
            "label": "Item C1"
          },
          {
            "label": "Item C2"
          },
          {
            "label": "Item C3"
          },
          {
            "label": "Item C4"
          },
          {
            "label": "Item C5"
          },
          {
            "label": "Item C6"
          }
        ]
      }
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
.horizontal ul[dnd-list] > li {
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

.horizontal ul[dnd-list] .dndDraggingSource {
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

/**
 * The dnd-lists's child elements currently MUST have
 * position: relative. Otherwise we can not determine
 * whether the mouse pointer is in the upper or lower
 * half of the element we are dragging over. In other
 * browsers we can use event.offsetY for this.
 */
.horizontal ul[dnd-list] li {
    color: #fff;
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px;
    background: #4899A1;
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
