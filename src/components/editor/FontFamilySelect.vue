<template>
  <v-overflow-btn
    :value="value"
    :items="fonts"
    @input="onChange"
    label="Select font"
    hide-details
    editable
    return-object
    :disabled="disabled"
    :background-color="backgroundColor"
    item-value="value"
    item-text="text"
    class="pa-0"
  ></v-overflow-btn>
</template>

<script>
import {
  availableFontFamilies,
  defaultFontFamily,
  FontFamilySelection,
} from '../../utils/fontFamilies.js';

export default {
  props: {
    value: {
      type: FontFamilySelection,
      required: true,
      default: defaultFontFamily.text,
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    disabled: Boolean,
  },

  data() {
    return {
      fonts: availableFontFamilies,
    };
  },

  methods: {
    onChange(input) {
      this.$emit('input', input);
      this.$emit('change', input);
    },
  },
};
</script>

<style></style>
