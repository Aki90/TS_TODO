<template>
  <div id="app">
    <AppHeader />
    <ItemInput />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';
import ItemInput from '@/components/ItemInput.vue';

@Component({
  components: {
    AppHeader,
    ItemInput,
  },
})
export default class App extends Vue {

}
</script>

<style>
  #app {
    padding: 100px;
  }
</style>
