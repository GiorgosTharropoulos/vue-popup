<template>
  <v-list-item :to="link.to" link>
    <v-list-item-icon>
      <v-icon>{{ link.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        {{ link.text }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import SidebarNavLink from '../../models/navigation/SidebarNavLink';

export default {
  emits: ['click'],
  props: {
    link: SidebarNavLink,
  },
};
</script>

<style></style>
