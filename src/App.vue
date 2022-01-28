<template>
  <v-app id="inspire">
    <side-bar
      ref="sidebar"
      @mouseover.native="handleMouseOver"
      @mouseout.native="handleMouseOut"
    ></side-bar>

    <v-app-bar
      app
      ref="appBar"
      @mouseover.native="handleMouseOver"
      @mouseout.native="handleMouseOut"
    >
      <v-app-bar-nav-icon
        @click="$refs.sidebar.drawer = !$refs.sidebar.drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Flashy Popups 🦄</v-toolbar-title>
    </v-app-bar>

    <v-main ref="main">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/navigation/SideBar.vue';
import { mutations } from './stores/hoverStore';

export default {
  components: { SideBar },

  mounted() {
    this.$refs.appBar.$el.addEventListener(
      'touchstart',
      this.handleMouseOver,
      false
    );
  },

  methods: {
    handleMouseOver() {
      mutations.setHovering(true);
    },

    handleMouseOut() {
      mutations.setHovering(false);
    },
  },

  destroyed() {
    this.$refs.appBar.$el.removeEventListener(
      'touchstart',
      this.handleMouseOver
    );
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>
