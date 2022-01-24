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
import TriggerViewModel from '../../models/popup/TriggersVeiwModel';
export default {
  props: {
    trigger: TriggerViewModel,
  },
};
</script>

<style></style>
