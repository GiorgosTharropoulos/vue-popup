<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> ✨ Popups ✨ </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <!-- Routes -->
    <v-list>
      <sidebar-link
        v-for="(route, index) in routes"
        :link="route"
        :key="index"
      ></sidebar-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '../../routes/routes';
import SidebarLink from './SidebarLink.vue';
export default {
  components: { SidebarLink },
  data() {
    return {
      drawer: undefined,
      routes: routes,
      selectedLink: 0,
    };
  },
};
</script>

<style></style>
