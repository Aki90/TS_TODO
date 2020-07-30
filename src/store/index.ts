import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from './store.interface';
import AxiosService from '../service/axios.service';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  mutations: {
    // TODO 가져오기
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    },
    // TODO 추가
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // TODO status 변경
    changeStatus(state, { id, status }: { id: number, status: 'active' | 'clear' }) {
      state.todoList[id].status = status;
    },
    // TODO 삭제
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
  },
  actions: {
    async initData({ commit }) {
      const response: AxiosResponse<{ todoList: Item[] }> = await AxiosService.instance.get('/data.json');
      commit('setTodoList', response.data.todoList);
    },
  },
  modules: {
  },
  getters: {
    // 모든 TODO LIST return
    allTodoList: (state) => state.todoList,
    // Active 만 return
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'active');
    },
    // Clear 만 return
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'clear');
    },
  },
};

export default new Vuex.Store(store);
