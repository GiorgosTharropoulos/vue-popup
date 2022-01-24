<template>
  <v-combobox
    v-model="selectedTags"
    :items="allTags"
    @input="handleInput"
    label="Tags"
    multiple
    chips
  ></v-combobox>
</template>

<script>
export default {
  emits: ['input'],
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTags: this.tags
        .filter(tag => tag.isSelected)
        .map(tag => tag.toString()),
      allTags: this.tags.map(tag => tag.toString()),
    };
  },
  methods: {
    handleInput(input) {
      this.$emit('input', input);
    },
  },
};
</script>

<style></style>
