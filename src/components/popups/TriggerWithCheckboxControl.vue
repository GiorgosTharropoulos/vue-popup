<template>
  <v-row no-gutters align="center">
    <v-col cols="3" sm="1" v-if="trigger.hasCheckbox">
      <v-checkbox v-model="trigger.isEnabled"></v-checkbox>
    </v-col>
    <v-col cols="9" sm="4" v-if="trigger.label">
      <span class="text-h7">{{ trigger.label }}</span>
    </v-col>
    <v-col align-self="center" cols="12" sm="6">
      <div v-if="trigger.available.length > 0">
        <trigger-select :trigger="trigger"></trigger-select>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Trigger from '../../models/popup/trigger';
import TriggerSelect from './TriggerSelect.vue';
export default {
  components: { TriggerSelect },
  props: {
    trigger: Trigger,
  },
  methods: {
    handleValueSelection(input) {
      const cloned = Trigger.copy(this.trigger);

      cloned.selected = input;
    },
  },
};
</script>

<style></style>
