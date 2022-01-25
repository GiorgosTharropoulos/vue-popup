<template>
  <v-select v-model="color" :items="colors" label="Color">
    <template #selection="{ item, index }">
      <v-chip :color="item" v-if="index === 0">
        <span>{{ item }}</span>
      </v-chip>
    </template>
    <template #prepend>
      <v-menu z-index="99999999" offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn small fab :color="color" v-bind="attrs" v-on="on">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          v-model="color"
          @update:color="debouncedHandleColorChanged"
        ></v-color-picker>
      </v-menu>
    </template>
  </v-select>
</template>

<script>
import PButton from '@/models/popup/button';
import debounce from 'lodash.debounce';

export default {
  props: {
    value: PButton,
  },

  watch: {
    color(newColor) {
      this.debouncedWatch(newColor);
    },
  },

  data() {
    return {
      color: 'primary',
      colors: ['primary', 'secondary', 'accent'],
    };
  },

  methods: {
    handleColorChanged({ hex }) {
      if (this.colors.includes(hex)) return;

      this.colors.push(hex);
    },
  },

  created() {
    this.debouncedHandleColorChanged = debounce(({ hex }) => {
      if (this.colors.includes(hex)) return;
      this.colors.push(hex);
    }, 500);

    this.debouncedWatch = debounce(newColor => {
      if (this.value.color == newColor) return;
      const copied = this.value.copy();

      copied.color = newColor;

      this.$emit('input', copied);
    }, 500);
  },

  beforeDestroy() {
    this.debouncedHandleColorChanged.cancel();
    this.debouncedWatch.cancel();
  },
};
</script>

<style></style>
