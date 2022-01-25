<template>
  <v-select
    :items="trigger.available"
    v-model="trigger.selected"
    item-text="label"
    item-value="value"
    filled
    :disabled="!trigger.isEnabled"
    return-object
  ></v-select>
</template>

<script>
import Trigger from '../../models/popup/trigger';
export default {
  props: {
    trigger: Trigger,
  },
};
</script>

<style></style>
