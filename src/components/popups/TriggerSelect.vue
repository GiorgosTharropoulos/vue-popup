<template>
  <v-select
    :items="value.available"
    :value="value.selected"
    @change="handleTriggerChanged"
    :disabled="!value.isEnabled"
    item-text="label"
    item-value="value"
    filled
    return-object
  ></v-select>
</template>

<script>
import Trigger from '../../models/popup/trigger';
export default {
  props: {
    value: Trigger,
  },

  methods: {
    handleTriggerChanged(newOptionSelected) {
      const copied = this.value.copy();

      copied.selected = newOptionSelected;

      this.$emit('input', copied);
    },
  },
};
</script>

<style></style>
