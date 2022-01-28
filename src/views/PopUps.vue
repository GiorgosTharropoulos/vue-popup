<template>
  <v-container>
    <v-row>
      <v-col>
        <breadcrumbs page="popups"></breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="popups" class="elevation-3">
          <template #top>
            <v-toolbar flat>
              <v-toolbar-title>Current Popups</v-toolbar-title>
              <v-divider class="mx-4" inset vertical />
              <v-spacer />
              <v-btn color="primary" @click="handleCreatePopupClicked"
                >Create</v-btn
              >
              <popup-form
                v-model="popup"
                :isVisible="dialogEdit"
                :title="dialogEditTitle"
                @visibilityChanged="
                  newVisibility => (dialogEdit = newVisibility)
                "
                @submit="handleSubmit"
              />
              <v-dialog v-model="dialogDelete" max-width="600px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this popup?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="removePopupConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template #item.actions="{ item }">
            <v-icon small class="mr-2" @click="handleEditClicked(item)">
              mdi-pencil</v-icon
            >
            <v-icon class="mr-2" small @click="handleRemoveClicked(item)">
              mdi-delete
            </v-icon>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  class="mr-2"
                  small
                  @click="handleResetViewedAt(item)"
                >
                  mdi-reload
                </v-icon>
              </template>
              <span>Reset Last Viewed</span>
            </v-tooltip>
          </template>
          <template #item.lastViewedAt="{ item }">
            {{
              item.lastViewedAt
                ? new Date(item.lastViewedAt).toDateString()
                : '-'
            }}
          </template>
          <template #item.createdAt="{ item }">
            {{ new Date(item.createdAt).toDateString() }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-snackbar :color="snackbarColor" v-model="alertIsVisible" :timeout="5000">
      <v-icon>{{ snackbarIcon }} </v-icon>
      {{ alertText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
// Components
import Breadcrumbs from '../components/navigation/Breadcrumbs.vue';
import PopupForm from '../components/popups/PopupForm.vue';
// Models
import Popup, { gridHeaders } from '../models/popup/popup.js';

// db

import PopupService from '../services/service-popup';

export default {
  components: {
    Breadcrumbs,
    PopupForm,
  },

  data() {
    return {
      popup: new Popup(),
      popups: [],
      currentStep: 1,
      dialogEdit: false,
      dialogDelete: false,
      headers: gridHeaders,
      alertIsVisible: false,
      alertType: 'fasdf',
      alertText: 'Successfully saved',
      selectedId: -1,
    };
  },

  watch: {
    dialogEdit(val) {
      val || this.closeEdit();
    },

    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  computed: {
    snackbarColor: function () {
      return this.alertIsSuccess() ? 'green accent-2' : 'red accent-2';
    },

    snackbarIcon: function () {
      return this.alertIsSuccess()
        ? 'mdi-check-circle-outline'
        : 'mdi-alert-circle-outline';
    },

    dialogEditTitle: function () {
      return this.selectedId === -1 ? 'Create a new awesome Popup' : 'Editing';
    },
  },

  methods: {
    handleSubmit() {
      if (this.selectedId === -1) {
        PopupService.create(this.popup)
          .then(() => {
            this.alertType = 'success';
            this.alertText = `Successfully saved Popup ${this.popup.title}`;
            this.alertIsVisible = true;
          })
          .catch(() => {
            this.alertType = 'error';
            this.alertText = `Save of Popup ${this.popup.title} failed`;
            this.alertIsVisible = true;
          });
      } else {
        PopupService.update(this.selectedId, this.popup)
          .then(() => {
            this.alertType = 'success';
            this.alertText = `Succcessfully updated Popup ${this.popup.title}`;
            this.alertIsVisible = true;
          })
          .catch(() => {
            this.alertType = 'error';
            this.alertText = `Update of Popup ${this.popup.title} failed`;
            this.alertIsVisible = true;
          });
      }

      this.dialogEdit = false;
    },

    handleCreatePopupClicked() {
      this.dialogEdit = true;
      this.selectedId = -1;
    },

    alertIsSuccess() {
      return this.alertType === 'success';
    },

    handleEditClicked(popupEditing) {
      this.selectedId = popupEditing.id;

      PopupService.get(popupEditing.id).then(popup => {
        this.popup = popup;
        this.dialogEdit = true;
      });
    },

    handleRemoveClicked(popupToRemove) {
      this.selectedId = popupToRemove.id;
      this.dialogDelete = true;
    },

    closeEdit() {
      this.dialogEdit = false;
      this.$nextTick(() => {
        this.popup = new Popup();
        this.selectedId = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.popup = new Popup();
        this.selectedId = 1;
      });
    },

    removePopupConfirm() {
      PopupService.delete(this.selectedId);
      this.dialogDelete = false;
    },

    async handleResetViewedAt(popup) {
      await PopupService.resetViewedNow(popup.id);
    },
  },

  firestore: {
    popups: PopupService.collection,
  },
};
</script>

<style>
.button {
  display: flex;
}
</style>
