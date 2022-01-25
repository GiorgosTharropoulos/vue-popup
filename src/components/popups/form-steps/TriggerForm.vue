<template>
  <v-stepper-content step="1">
    <v-sheet class="mb-2">
      <card-title>Automatically Show</card-title>
      <div class="mt-2">
        <!--  -->
        <trigger-with-checkbox-control
          :trigger.sync="popup.delayTrigger"
        ></trigger-with-checkbox-control>
        <!-- <trigger-with-checkbox-control
                    :trigger="popup.scrollTrigger"
                  ></trigger-with-checkbox-control>
                  <trigger-with-checkbox-control
                    :trigger="popup.exitTrigger"
                  ></trigger-with-checkbox-control> -->
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
</template>

<script>
export default {
  props: {},
};
</script>

<style></style>
