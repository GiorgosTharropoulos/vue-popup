<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="isOutlined" label="Outlined" />
            <v-checkbox v-model="isPlain" label="Plain" />
            <v-checkbox v-model="isText" label="Text" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="isRounded" label="Rounded" />
            <v-checkbox v-model="isTile" label="Tile" />
            <v-checkbox v-model="isBlock" label="Block" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import PopupAction from '@/models/popup/action';

export default {
  props: {
    value: PopupAction,
  },

  watch: {
    isOutlined(value) {
      if (value === this.value.isOutline) return;

      const copied = this.value.copy();

      copied.isOutlined = value;

      this.$emit('input', copied);
    },
    isPlain(value) {
      if (value === this.value.isPlain) return;

      const copied = this.value.copy();

      copied.isPlain = value;

      this.$emit('input', copied);
    },
    isRounded(value) {
      if (value === this.value.isRounded) return;

      const copied = this.value.copy();

      copied.isRounded = value;

      this.$emit('input', copied);
    },
    isText(value) {
      if (value === this.value.isText) return;

      const copied = this.value.copy();

      copied.isText = value;

      this.$emit('input', copied);
    },
    isTile(value) {
      if (value === this.value.isTile) return;

      const copied = this.value.copy();

      copied.isTile = value;

      this.$emit('input', copied);
    },
    isBlock(value) {
      if (value === this.value.isBlock) return;

      const copied = this.value.copy();

      copied.isBlock = value;

      this.$emit('input', copied);
    },
  },

  data() {
    const copied = this.value.copy();
    return {
      isOutlined: copied.isOutlined,
      isPlain: copied.isPlain,
      isRounded: copied.isRounded,
      isText: copied.isText,
      isTile: copied.isTile,
      isBlock: copied.isBlock,
    };
  },
};
</script>

<style></style>
