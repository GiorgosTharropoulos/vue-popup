<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="value.isOutlined" label="Outlined" />
            <v-checkbox v-model="value.isPlain" label="Plain" />
            <v-checkbox v-model="value.isText" label="Text" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="value.isRounded" label="Rounded" />
            <v-checkbox v-model="value.isTile" label="Tile" />
            <v-checkbox v-model="value.isBlock" label="Block" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import PButton from '@/models/popup/button';

export default {
  props: {
    value: PButton,
  },
};
</script>

<style></style>
