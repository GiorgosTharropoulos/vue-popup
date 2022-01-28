import Vue from 'vue';

export const store = Vue.observable({
  hoveringOutsideMain: null,
});

export const mutations = {
  setHovering(isHovering) {
    store.hoveringOutsideMain = isHovering;
  },
};
