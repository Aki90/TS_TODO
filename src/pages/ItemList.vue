<template>
  <div>
    <Item 
      v-for="item in renderList"
      :key="item.id" 
      :id="item.id"
      :title="item.title"
      :status="item.status"
  />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Item from '@/components/Item.vue';

@Component({
  components: {
    Item,
  },
})
export default class ItemList extends Vue {

  public renderList: any[] = [];


  public created() {
    this.$store.dispatch('initData');
  }

  public initRenderList(status: String) {
    if (! status) {
      this.renderList = this.$store.getters.allTodoList;
    } else if (status === 'active') {
      this.renderList = this.$store.getters.activeTodoList;
    } else if (status === 'clear') {
      this.renderList = this.$store.getters.clearTodoList;
    }
  }

  @Watch('$route.params.status')
  public routeUpdate(newValue: 'active' | 'clear') {
    this.initRenderList(newValue);
  }

  @Watch('$store.state.todoList', { deep: true })
  public stateUpdate() {
    this.initRenderList(this.$route.params.status);
  }
}
</script>

<style>

</style>