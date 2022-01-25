<template>
  <v-slider
    v-model="size"
    :tick-labels="sizes"
    :max="sizes.length - 1"
    step="1"
    ticks="always"
    tick-size="4"
  >
    <template v-slot:prepend>
      <v-icon :disabled="size === 0" color="primary" @click="decrement">
        mdi-minus
      </v-icon>
    </template>
    <template v-slot:append>
      <v-icon
        :disabled="size === sizes.length - 1"
        color="primary"
        @click="increment"
      >
        mdi-plus
      </v-icon>
    </template>
    <template v-slot:thumb-label="{ value }">
      {{ sizes[value] }}
    </template>
  </v-slider>
</template>

<script>
import PButton from '@/models/popup/button';

export default {
  props: {
    value: {
      type: PButton,
    },
  },

  watch: {
    size(newSize) {
      if (newSize === this.value.size) return;
      const copied = this.value.copy();
      copied.setSize(newSize);
      this.$emit('input', copied);
    },
  },

  data() {
    return {
      size: 1,
      sizes: ['Small', 'Regular', 'Large', 'XL'],
    };
  },

  methods: {
    decrement() {
      if (this.size <= 0) return;

      this.size--;
    },

    increment() {
      if (this.size >= this.sizes.length - 1) return;

      this.size++;
    },
  },
};
</script>

<style></style>
