<template>
  <v-row no-gutters align="center">
    <v-col cols="3" sm="1" v-if="value.hasCheckbox">
      <v-checkbox
        :input-value="value.isEnabled"
        @change="handleIsEnabledChanged"
      ></v-checkbox>
    </v-col>
    <v-col cols="9" sm="4" v-if="value.label">
      <span class="text-h7">{{ value.label }}</span>
    </v-col>
    <v-col align-self="center" cols="12" sm="6">
      <div v-if="value.available.length > 0">
        <trigger-select
          :value="value"
          @input="
            newTrigger => $emit('input', { newTrigger: newTrigger, type: type })
          "
        ></trigger-select>
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
    value: Trigger,
    type: String,
  },
  methods: {
    handleIsEnabledChanged(newValue) {
      const copied = this.value.copy();

      copied.isEnabled = newValue ?? false;

      this.$emit('input', { newTrigger: copied, type: this.type });
    },
  },
};
</script>

<style></style>
