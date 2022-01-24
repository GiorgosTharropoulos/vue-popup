<template>
  <v-combobox
    :value="value"
    @input="handleInput"
    :items="available"
    :disabled="disabled"
    background-color="white"
    item-text="text"
    item-value="value"
    return-object
    dense
    filled
  >
  </v-combobox>
</template>

<script>
import {
  FontSizeSelection,
  defaultFontSize,
  fontSizes,
} from '../../utils/fontSizes.js';

import { getNumberFromString } from '../../utils/utils.js';

export default {
  props: {
    value: {
      type: FontSizeSelection,
      default: defaultFontSize,
    },
    disabled: Boolean,
  },

  data() {
    return {
      available: fontSizes,
    };
  },

  methods: {
    handleInput(input) {
      if (!this.isUserInput(input)) {
        this.$emit('input', input);
      } else {
        if (!input || !(input.length > 0)) return;

        const numericPart = getNumberFromString(input);

        if (!(numericPart.length > 0)) return;

        const fontSize = Number(numericPart);

        const sizeInAvailable = this.available.find(
          font => font.value === fontSizes
        );

        // If it's already contained in the list emit the input event and return.
        if (sizeInAvailable) {
          this.$emit('input', sizeInAvailable);
          return;
        }

        const newFontSize = new FontSizeSelection(fontSize);

        this.available = [...this.available, newFontSize]
          .map(font => font.value)
          .sort((a, b) => a - b)
          .map(fontSize => new FontSizeSelection(fontSize));

        this.$emit('input', newFontSize);
      }
    },

    isUserInput(input) {
      return !(input instanceof FontSizeSelection);
    },
  },
};
</script>

<style></style>
