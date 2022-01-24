<template>
  <v-container>
    <v-row>
      <v-col> <breadcrumbs page="tags"></breadcrumbs> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row v-if="!hasTags" align="center">
          <v-col>
            <div class="text-h5 text-sm-h3">{{ title }}</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '../components/navigation/Breadcrumbs.vue';
import ServiceTag from '../services/ServiceTag';
export default {
  components: { Breadcrumbs },
  data() {
    return {
      allTags: [],
      isCreateDialogShown: false,
    };
  },
  created() {
    // Source tags
    this.allTags = ServiceTag.listTags();
  },
  computed: {
    hasTags: function () {
      return this.allTags.length > 0;
    },
    title: function () {
      return this.hasTags
        ? `Created ${this.allTags.length} tags`
        : 'No tags, just yet!';
    },
  },
  methods: {},
};
</script>

<style></style>
