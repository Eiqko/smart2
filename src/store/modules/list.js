import axios from 'axios';

const state = {
  list: []
};

const getters = {
  allTodos: state => state.list
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    commit('setTodos', response.data);
  },
}

const mutations = {
  setTodos: (state, list) => (state.list = list),
};

export default {
  state,
  getters,
  actions,
  mutations
};