<template>
  <trigger-select :trigger="trigger"></trigger-select>
</template>

<script>
import TriggerViewModel from '../../models/popup/TriggersVeiwModel';
import TriggerSelect from './TriggerSelect.vue';
export default {
  components: { TriggerSelect },
  props: { trigger: TriggerViewModel },
};
</script>

<style></style>
