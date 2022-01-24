<template>
  <v-btn :ripple="false">
    {{ value.text }}
    <input :value="value.text" @input="handleTextChanged" />
  </v-btn>
</template>

<script>
import UserAction from '../../../models/popup/user-action';
export default {
  props: {
    value: UserAction,
  },

  methods: {
    handleTextChanged(text) {
      const newUserButton = this.userButton.copy();
      newUserButton.text = text;
      this.$emit('input', newUserButton);
    },
  },
};
</script>

<style></style>
