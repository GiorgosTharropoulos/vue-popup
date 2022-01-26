<template>
  <v-stepper-content step="3" class="pa-2">
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
                <button-color-select
                  :value="value.button"
                  @input="handleButtonChanged"
                />
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
        <v-col cols="12" md="6">
          <card-title>Preview</card-title>
          <v-card>
            <v-img
              :src="value.backgroundImage"
              height="300px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
            >
              <v-card-text>
                <div v-html="value.content"></div>
              </v-card-text>
            </v-img>
          </v-card>
        </v-col>
        <!-- End Preview -->
      </v-row>
    </v-container>

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
  </v-stepper-content>
</template>

<script>
import UserButton from '../component-modification/UserButton.vue';
import ButtonSizeSlider from '../component-modification/ButtonSizeSlider.vue';
import ButtonColorSelect from '../component-modification/ButtonColorSelect.vue';
import ButtonGeneralProps from '../component-modification/ButtonGeneralProps.vue';
import CardTitle from '../../shared/CardTitle.vue';

import Popup from '../../../models/popup/popup';

export default {
  components: {
    UserButton,
    ButtonSizeSlider,
    ButtonColorSelect,
    ButtonGeneralProps,
    CardTitle,
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
