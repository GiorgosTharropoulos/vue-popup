<template>
  <v-tooltip :top="top" :bottom="bottom">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        @click="$emit('click')"
        class="btn"
        icon
        v-bind="attrs"
        v-on="on"
        :class="{ 'is-active': active }"
      >
        <v-icon><slot name="icon"></slot></v-icon>
      </v-btn>
    </template>
    <span><slot name="tooltip"></slot></span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    top: String,
    bottom: String,
    active: Boolean,
  },
};
</script>

<style>
.is-active.btn.theme--light.v-btn::before {
  opacity: 0.28;
}

.btn.theme--light.v-btn::before {
  opacity: 0;
}
</style>
