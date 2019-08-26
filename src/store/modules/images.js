import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};
