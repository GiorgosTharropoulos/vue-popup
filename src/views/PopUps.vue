<template>
  <v-container>
    <v-row>
      <v-col>
        <breadcrumbs page="popups"></breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-stepper v-model="currentStep">
          <v-stepper-header>
            <v-stepper-step :complete="currentStep > 1" step="1">
              Set Pop-Up's triggers
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="currentStep > 2" step="2">
              Customize Appereance
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-sheet class="mb-2">
                <card-title>Automatically Show</card-title>
                <div class="mt-2">
                  <!--  -->
                  <trigger-with-checkbox-control
                    :trigger.sync="popup.delayTrigger"
                  ></trigger-with-checkbox-control>
                  <trigger-with-checkbox-control
                    :trigger="popup.scrollTrigger"
                  ></trigger-with-checkbox-control>
                  <trigger-with-checkbox-control
                    :trigger="popup.exitTrigger"
                  ></trigger-with-checkbox-control>
                  <!--  -->
                </div>

                <v-divider class="my-1"></v-divider>

                <card-title> Trigger Automatically At Most </card-title>
                <div class="mt-2">
                  <!--  -->
                  <trigger-without-checkbox-control
                    :trigger="popup.timeFrequencyTrigger"
                  ></trigger-without-checkbox-control>
                  <!--  -->
                </div>
              </v-sheet>
              <v-row align="center">
                <v-col> </v-col>
                <v-col>
                  <v-btn
                    class="float-right"
                    rounded
                    color="primary"
                    @click="currentStep++"
                  >
                    <v-icon left> mdi-arrow-right </v-icon>
                    Next
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-sheet class="mb-2">
                <v-row>
                  <v-col>
                    <card-title>Content</card-title>
                    <div class="my-2">
                      <!-- Editor -->
                      <editor v-model="popup.content" />
                    </div>
                    <v-row no-gutters align="center">
                      <v-col cols="12">
                        <card-title>Background Image</card-title>
                      </v-col>
                      <v-col cols="12">
                        <v-file-input
                          :value="backgroundImage"
                          @change="handleChangeBackgroudImage"
                          accept="image/*"
                          label="File input"
                          prepend-icon="mdi-camera"
                        >
                        </v-file-input>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-divider vertical inset></v-divider>
                  <v-col>
                    <card-title>Preview</card-title>
                    <v-card>
                      <v-img
                        :src="popup.backgroundImage"
                        height="300px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                      >
                        <v-card-text>
                          <div v-html="popup.content"></div>
                        </v-card-text>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
              <v-row align="center">
                <v-col>
                  <v-btn
                    class="float-left"
                    rounded
                    color="secondary"
                    @click="currentStep--"
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
                    @click="handleSubmit"
                  >
                    <v-icon left> mdi-pencil </v-icon>
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '../components/navigation/Breadcrumbs.vue';
import TriggerWithCheckboxControl from '../components/popups/TriggerWithCheckboxControl.vue';
import TriggerWithoutCheckboxControl from '../components/popups/TriggerWithoutCheckboxControl.vue';
import CardTitle from '../components/shared/CardTitle.vue';
import Editor from '../components/shared/Editor.vue';
import PopupViewModel from '../models/popup/PopupViewModel.js';
import { required } from '../utils/validation.js';
export default {
  components: {
    Breadcrumbs,
    TriggerWithCheckboxControl,
    TriggerWithoutCheckboxControl,
    CardTitle,
    Editor,
  },
  data() {
    return {
      popup: new PopupViewModel(1, '', null, 0, [], 0, null),
      currentStep: 1,
      rules: {
        required: required,
      },
      backgroundImage: null,
    };
  },
  methods: {
    handleChangeBackgroudImage(input) {
      if (!input) {
        this.popup.backgroundImage = '';
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => (this.popup.backgroundImage = reader.result);
      reader.readAsDataURL(input);
    },
    handleSubmit() {},
  },
};
</script>

<style></style>
