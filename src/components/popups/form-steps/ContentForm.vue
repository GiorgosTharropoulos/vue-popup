<template>
  <v-stepper-content step="2">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col>
          <card-title>Content</card-title>
        </v-col>
      </v-row>
      <v-row>
        <!-- Begin Content -->
        <v-col cols="12" md="6">
          <!-- Begin Actions -->
          <v-container fluid class="pa-0">
            <!-- Begin Background Image & Title -->
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  :value="value.title"
                  @blur="
                    event =>
                      $emit('input', value.copy({ title: event.target.value }))
                  "
                  label="Title"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-file-input
                  :value="backgroundImage"
                  @change="handleChangeBackgroudImage"
                  accept="image/*"
                  label="Background Image"
                  prepend-icon="mdi-camera"
                />
              </v-col>
            </v-row>
            <!-- End Background Image & Title -->

            <!-- Begin Editor -->
            <v-row>
              <v-col>
                <editor v-model="value.content" />
              </v-col>
            </v-row>
            <!-- End Editor -->
          </v-container>
        </v-col>
        <!-- End Actions -->

        <!-- Begin Preview -->
        <v-col cols="12" md="6" class="d-flex flex-column">
          <card-title>Preview</card-title>
          <div class="d-flex align-center justify-center flex-grow-1">
            <popup-display :popup="value" />
          </div>
        </v-col>
        <!-- End Preview -->
      </v-row>

      <!-- End Content-->
    </v-container>
    <v-row align="center">
      <v-col>
        <v-btn
          class="float-left"
          rounded
          color="secondary"
          @click="$emit('decrement')"
        >
          <v-icon left> mdi-arrow-left </v-icon>
          Back
        </v-btn>
      </v-col>
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
  </v-stepper-content>
</template>

<script>
// Models
import Popup from '../../../models/popup/popup';

// Components

import CardTitle from '../../shared/CardTitle.vue';
import Editor from '@/components/editor/Editor.vue';
import PopupDisplay from '@/components/popups/PopupDisplay.vue';

export default {
  components: {
    CardTitle,
    Editor,
    PopupDisplay,
  },

  props: {
    value: Popup,
  },

  data() {
    return {
      backgroundImage: null,
      key: 1,
    };
  },

  methods: {
    handleChangeBackgroudImage(input) {
      if (!input) {
        this.$emit('input', this.value.copy({ backgroundImage: '' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        this.$emit(
          'input',
          this.value.copy({ backgroundImage: reader.result })
        );
      };
      reader.readAsDataURL(input);
    },

    clearBackgroundImage() {
      this.backgroundImage = null;
      // Dirty dirty hack
      this.key++;
    },
  },
};
</script>

<style></style>
