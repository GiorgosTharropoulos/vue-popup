<template>
  <user-button v-model="userAction"></user-button>
</template>

<script>
import UserButton from '../components/popups/component-modification/UserButton.vue';
import UserAction from '@/models/popup/action';
export default {
  name: 'Home',
  components: {
    UserButton,
  },

  data() {
    return {
      userAction: new UserAction(),
    };
  },
};
</script>
