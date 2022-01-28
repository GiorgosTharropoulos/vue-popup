<template>
  <v-stepper-content step="1" class="height: 100%">
    <v-container fluid class="pa-0">
      <v-row align="center" no-gutters>
        <v-col>
          <card-title>Automatically Show</card-title>
        </v-col>
      </v-row>
      <v-row align="center" no-gutters>
        <v-col>
          <trigger-with-checkbox-control
            type="delay"
            :value="value.delayTrigger"
            @input="handleTriggerChanged"
          />
        </v-col>
      </v-row>

      <v-row align="center" no-gutters>
        <v-col>
          <trigger-with-checkbox-control
            type="scroll"
            :value="value.scrollTrigger"
            @input="handleTriggerChanged"
          />
        </v-col>
      </v-row>

      <v-row align="center" no-gutters>
        <v-col>
          <trigger-with-checkbox-control
            type="exit"
            :value="value.exitTrigger"
            @input="handleTriggerChanged"
          />
        </v-col>
      </v-row>

      <v-row align="center" no-gutters>
        <v-col>
          <card-title> Trigger Automatically At Most </card-title>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <trigger-select
            :value="value.timeTrigger"
            @input="
              newTrigger =>
                handleTriggerChanged({ newTrigger: newTrigger, type: 'time' })
            "
          />
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col> </v-col>
        <v-col>
          <v-btn
            class="float-right"
            rounded
            color="primary"
            @click="$emit('increment')"
          >
            <v-icon left> mdi-arrow-right </v-icon>
            Next
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-stepper-content>
</template>

<script>
import Popup from '../../../models/popup/popup';
import TriggerWithCheckboxControl from '../TriggerWithCheckboxControl.vue';
import CardTitle from '../../shared/CardTitle.vue';
import TriggerSelect from '../TriggerSelect.vue';
// import TriggerWithoutCheckboxControl from '../TriggerWithoutCheckboxControl.vue';

export default {
  components: {
    TriggerWithCheckboxControl,
    CardTitle,
    TriggerSelect,
    // TriggerWithoutCheckboxControl,
  },

  props: {
    value: Popup,
  },

  methods: {
    handleTriggerChanged({ newTrigger, type }) {
      const copied = this.value.copy();

      if (type === 'delay') {
        copied.delayTrigger = newTrigger;
      } else if (type === 'scroll') {
        copied.scrollTrigger = newTrigger;
      } else if (type === 'exit') {
        copied.exitTrigger = newTrigger;
      } else {
        copied.timeTrigger = newTrigger;
      }

      this.$emit('input', copied);
    },
  },
};
</script>

<style></style>
