<template lang="html">
  <li v-dnd-draggable
      :dnd-draggable="item"
      :dnd-index="index"
      dnd-selected="selectedEvent"
      v-bind:class="{'selected': selected === item, 'has-container': item.type === 'container'}"
      :dnd-data="list">
    <div class="panel panel-vue padding" v-if="item.type === 'container'">
      <div class="panel-heading">
          <h3 class="panel-title">container {{item.id}}</h3>
      </div>
      <div class="panel-body">
        <ul v-dnd-list
            :dnd-list="item.columns"
            :dnd-external-sources="true">
          <list v-for="col in item.columns" :item="col" :list="item.columns" :index="$index" :selected.sync="selected"></list>
        </ul>
      </div>
    </div>
    <p v-else>
      {{item.type}} {{item.id}}
    </p>
  </li>
</template>

<script>
export default {
  name: 'list',
  props: ['item', 'list', 'index', 'selected'],
  methods: {
    selectedEvent(item){
      this.selected = item;
    }
  }
};
</script>

<style lang="css">
</style>
