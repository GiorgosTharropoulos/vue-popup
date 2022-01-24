<template>
  <v-sheet
    class="d-none d-sm-block"
    outlined
    rounded
    color="blue-grey lighten-5"
  >
    <v-breadcrumbs large :items="items"></v-breadcrumbs>
  </v-sheet>
</template>

<script>
import breadcrumbs from '../../routes/breadcrumbs';
export default {
  props: {
    page: String,
  },
  data() {
    return {
      items: breadcrumbs[this.page],
    };
  },
};
</script>

<style></style>
