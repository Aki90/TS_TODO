<template>
  <div class="form-group">
      <input 
        type="text"
        class="form-control" 
        v-model="title"
        @keyup.enter="addItem"
        placeholder="할일을 입력해 주세요."
      >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {
  public title: String = '';

  public addItem() {
    this.$store.commit('addItem', {
      id: this.$store.state.todoList.length + 1,
      title: this.title,
      status: 'active',
    });
  }
}
</script>

<style>

</style>