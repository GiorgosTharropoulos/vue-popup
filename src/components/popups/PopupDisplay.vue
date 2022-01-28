<template>
  <v-fade-transition>
    <v-card elevation="5" max-width="300">
      <v-icon
        @click="$emit('dismiss', popup)"
        style="
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1000;
          margin-right: -12px;
          margin-top: -12px;
        "
        >mdi-close-circle</v-icon
      >
      <v-responsive :aspect-ratio="16 / 9">
        <v-img
          v-if="popup.backgroundImage.length > 0"
          height="150"
          :src="popup.backgroundImage"
        />
        <v-card-title> {{ popup.title }}</v-card-title>
        <v-card-text>
          <div v-html="popup.content" />
        </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <v-btn
            :large="popup.button.isLarge"
            :small="popup.button.isSmall"
            :x-large="popup.button.isXLarge"
            :color="popup.button.color"
            :outlined="popup.button.isOutlined"
            :plain="popup.button.isPlain"
            :rounded="popup.button.isRounded"
            :text="popup.button.isText"
            :tile="popup.button.isTile"
            :block="popup.button.isBlock"
          >
            {{ popup.button.text }}
          </v-btn>
        </v-card-actions>
      </v-responsive>
    </v-card>
  </v-fade-transition>
</template>

<script>
import Popup from '../../models/popup/popup';

export default {
  props: {
    popup: Popup,
  },

  mounted() {
    this.popup.setDelayTrigger(() => this.$emit('delay', this.popup));

    if (this.popup.exitTrigger.isEnabled) {
      setTimeout(() => {
        this.$emit('exitMounted', this.popup);
      }, this.popup.exitTrigger.selected.value);
    }
  },
};
</script>

<style></style>
