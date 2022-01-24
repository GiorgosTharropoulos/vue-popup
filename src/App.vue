<template>
  <v-app id="inspire">
    <side-bar ref="sidebar"></side-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon
        @click="$refs.sidebar.drawer = !$refs.sidebar.drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Flashy Popups 🦄</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <popup-footer></popup-footer>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/navigation/SideBar.vue';
import PopupFooter from './components/shared/PopupFooter.vue';
export default {
  components: { SideBar, PopupFooter },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>
