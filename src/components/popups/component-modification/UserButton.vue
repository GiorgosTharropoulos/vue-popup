<template>
  <v-btn
    :large="value.isLarge"
    :small="value.isSmall"
    :x-large="value.isXLarge"
    :color="value.color"
    class="btn-input"
    :ripple="false"
    :outlined="value.isOutlined"
    :plain="value.isPlain"
    :rounded="value.isRounded"
    :text="value.isText"
    :tile="value.isTile"
    :block="value.isBlock"
    @click="handleButtonClicked"
  >
    <span class="masked-input">
      <input
        :style="{ width: inputWidth }"
        v-show="isInput"
        @blur="isInput = false"
        v-model="inputValue"
        @input="handleTextInput"
        ref="textInput"
      />
      <div v-show="!isInput" @click="handleTextClicked" ref="buttonContent">
        {{ value.text }}
      </div>
    </span>
  </v-btn>
</template>

<script>
import PButton from '@/models/popup/button';
import sanitizeHtml from 'sanitize-html';

export default {
  props: {
    value: {
      type: PButton,
    },
  },

  data() {
    return {
      isInput: false,
      buttonContentWidth: 0,
      inputValue: this.value.copy().text,
    };
  },

  watch: {
    inputValue(unsafeText) {
      const safeText = sanitizeHtml(unsafeText, { allowedTags: [] });

      const copied = this.value.copy();

      copied.text = safeText;

      this.$emit('input', copied);
    },
  },

  computed: {
    inputWidth: {
      get: function () {
        return this.buttonContentWidth === 0
          ? ''
          : `${this.buttonContentWidth}px`;
      },
      set: function (newValue) {
        this.buttonContentWidth = newValue;
      },
    },
  },

  methods: {
    handleTextClicked() {
      this.isInput = true;
      this.buttonContentWidth = this.$refs.buttonContent.clientWidth;
      this.focusInput();
    },

    handleTextInput() {
      const inputElement = this.$refs.textInput;
      const isOverflowing = inputElement.clientWidth < inputElement.scrollWidth;

      if (isOverflowing) {
        this.inputWidth = 0;
      }
    },

    focusInput() {
      this.$refs.textInput.focus();
    },

    handleButtonClicked() {
      this.focusInput();
      this.isInput = true;
    },
  },
};
</script>

<style>
.masked-input {
  display: flex;
  flex-grow: 1;
  align-items: center;
  cursor: text;
  height: 100%;
}

.btn-input .v-btn__content {
  height: 100%;
}

.btn-input input {
  text-decoration-line: none;
  text-decoration-line: none;
  text-decoration-thickness: initial;
  text-decoration-style: initial;
  text-decoration-color: initial;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
}
</style>
