<template>
  <v-dialog
    :value="isVisible"
    :fullscreen="$vuetify.breakpoint.mobile"
    @input="newVisibility => $emit('visibilityChanged', newVisibility)"
    @click:outsite="$emit('visibilityChanged', false)"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar color="primary">
        <v-btn icon dark @click="$emit('visibilityChanged', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-stepper color="primary" v-model="currentStep" elevation="0">
        <!-- Begin Stepper Header -->
        <v-stepper-header ref="header" v-show="!$vuetify.breakpoint.mobile">
          <v-stepper-step :complete="currentStep > 1" step="1">
            Set Pop-Up's triggers
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="currentStep > 2" step="2">
            Customize Appereance
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="currentStep > 3" step="3">
            Customize Action
          </v-stepper-step>
        </v-stepper-header>

        <!-- End Stepper Header -->

        <v-stepper-items>
          <trigger-form
            :value="value"
            @input="handlePopupInput"
            @increment="handleIncrement"
          />

          <content-form
            ref="contentForm"
            :value="value"
            @input="handlePopupInput"
            @decrement="handleDecrement"
            @increment="handleIncrement"
          />

          <button-form
            :value="value"
            @input="handlePopupInput"
            @decrement="handleDecrement"
            @submit="handleSubmit"
          />
          <!-- @submit="handleSubmit" -->
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-dialog>
</template>

<script>
// Models
import Popup from '../../models/popup/popup';

// Components
import TriggerForm from './form-steps/TriggerForm.vue';
import ContentForm from './form-steps/ContentForm.vue';
import ButtonForm from './form-steps/ButtonForm.vue';

export default {
  components: {
    TriggerForm,
    ContentForm,
    ButtonForm,
  },

  props: {
    value: Popup,
    isVisible: Boolean,
    title: String,
  },

  watch: {
    isVisible(val) {
      if (!val) {
        this.currentStep = 1;
        this.$refs.contentForm.clearBackgroundImage();
      }
    },
  },

  data() {
    return {
      currentStep: 1,
    };
  },

  computed: {
    options() {
      return {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      };
    },
  },

  methods: {
    handlePopupInput(popup) {
      this.$emit('input', this.value.copy(popup));
    },

    handleSubmit() {
      this.$refs.contentForm.clearBackgroundImage();
      this.currentStep = 1;
      this.$emit('submit');
    },

    handleDecrement() {
      this.$vuetify.goTo(this.$refs.header, {});
      this.currentStep--;
    },

    handleIncrement() {
      this.$vuetify.goTo(this.$refs.header, {});
      this.currentStep++;
    },
  },
};
</script>

<style></style>
