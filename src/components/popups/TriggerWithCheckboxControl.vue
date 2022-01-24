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
import TriggerViewModel from '../../models/popup/TriggersVeiwModel';
import TriggerSelect from './TriggerSelect.vue';
export default {
  components: { TriggerSelect },
  props: {
    trigger: TriggerViewModel,
  },
  methods: {
    handleValueSelection(input) {
      const cloned = TriggerViewModel.clone(this.trigger);
      console.log(cloned);

      cloned.selected = input;

      console.log(cloned);
    },
  },
};
</script>

<style></style>
