<template>
  <trigger-select :trigger="trigger"></trigger-select>
</template>

<script>
import Trigger from '../../models/popup/trigger';
import TriggerSelect from './TriggerSelect.vue';
export default {
  components: { TriggerSelect },
  props: { trigger: Trigger },
};
</script>

<style></style>
