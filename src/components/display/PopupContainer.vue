<template>
  <section class="popup-container">
    <popup-display
      v-for="popup of popups"
      :popup="popup"
      @dismiss="pop => $emit('dismiss', pop)"
      @delay="pop => $emit('delay', pop)"
      @exitMounted="pop => $emit('exitMounted', pop)"
      :key="popup.id"
      v-show="popup.display"
    />
  </section>
</template>

<script>
import PopupDisplay from '@/components/popups/PopupDisplay';

export default {
  components: {
    PopupDisplay,
  },

  props: {
    popups: Array,
  },
};
</script>

<style>
.popup-container > * {
  margin-top: 20px;
}
</style>
