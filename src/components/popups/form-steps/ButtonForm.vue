<template>
  <v-stepper-content step="3" class="pa-1 pt-0">
    <!-- Begin Content -->
    <v-container fluid align="center" class="pa-0">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <!-- Begin Actions -->
          <v-container fluid>
            <v-row no-gutters>
              <v-col>
                <card-title>Action</card-title>
              </v-col>
            </v-row>

            <!-- Begin Button -->
            <v-row no-gutters>
              <v-col>
                <user-button
                  :value="value.button"
                  @input="handleButtonChanged"
                />
                <button-size-slider
                  :value="value.button"
                  @input="handleButtonChanged"
                />
                <v-row align="center">
                  <v-col>
                    <button-color-select
                      :value="value.button"
                      @input="handleButtonChanged"
                    />
                  </v-col>
                  <v-col>
                    <v-text-field v-model="value.button.to" label="Target" />
                  </v-col>
                </v-row>

                <button-general-props
                  :value="value.button"
                  @input="handleButtonChanged"
                />
              </v-col>
            </v-row>
            <!-- End Button -->

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
            @click="$emit('submit')"
          >
            <v-icon left> mdi-pencil </v-icon>
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-stepper-content>
</template>

<script>
import UserButton from '../component-modification/UserButton.vue';
import ButtonSizeSlider from '../component-modification/ButtonSizeSlider.vue';
import ButtonColorSelect from '../component-modification/ButtonColorSelect.vue';
import ButtonGeneralProps from '../component-modification/ButtonGeneralProps.vue';
import CardTitle from '../../shared/CardTitle.vue';
import PopupDisplay from '@/components/popups/PopupDisplay.vue';

import Popup from '../../../models/popup/popup';

export default {
  components: {
    UserButton,
    ButtonSizeSlider,
    ButtonColorSelect,
    ButtonGeneralProps,
    CardTitle,
    PopupDisplay,
  },

  props: {
    value: Popup,
  },

  methods: {
    handleButtonChanged(newButton) {
      this.$emit('input', this.value.copy({ button: newButton }));
    },
  },
};
</script>

<style></style>
