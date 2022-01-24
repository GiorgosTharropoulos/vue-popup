<template>
  <v-sheet>
    <v-sheet
      color="blue-grey lighten-5"
      elevation="2"
      class="pa-0"
      v-if="editor"
    >
      <v-container fluid>
        <!-- Text Style and Font -->
        <v-row align="center">
          <v-col cols="6">
            <v-overflow-btn
              :value="selectedTextStyle"
              :items="textStyleNames"
              @input="handleChangeTextStyle"
              hide-details
              editable
              background-color="white"
              color="white"
              class="pa-0"
            ></v-overflow-btn>
          </v-col>
          <v-col cols="6">
            <font-family-select
              v-model="selectedFontFamily"
              @change="handleFontChange"
              backgroundColor="white"
            ></font-family-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <!-- Actions -->
        <v-row>
          <v-col>
            <div style="width: 100%" class="d-flex align-center flex-wrap">
              <div style="max-width: 100px">
                <font-size-select ref="fontSizeSelect" v-model="fontSize" />
              </div>

              <!-- Undo & Redo -->
              <action-button top @click="editor.commands.undo()">
                <template #icon>mdi-undo-variant</template>
                <template #tooltip>Undo</template>
              </action-button>
              <action-button top @click="editor.commands.redo()">
                <template #icon>mdi-redo-variant</template>
                <template #tooltip>Redo</template>
              </action-button>

              <!-- Text Format -->
              <action-button
                top
                @click="editor.chain().focus().toggleBold().run()"
                :active="editor.isActive('bold')"
              >
                <template #icon>mdi-format-bold</template>
                <template #tooltip>Bold</template>
              </action-button>

              <action-button
                top
                @click="editor.chain().focus().toggleItalic().run()"
                :active="editor.isActive('italic')"
              >
                <template #icon>mdi-format-italic</template>
                <template #tooltip>Italic</template>
              </action-button>

              <action-button
                top
                @click="editor.chain().focus().toggleStrike().run()"
                :active="editor.isActive('strike')"
              >
                <template #icon>mdi-format-strikethrough</template>
                <template #tooltip>Strike</template>
              </action-button>

              <!-- Color Picker -->
              <v-btn-toggle dense group>
                <v-btn icon @input="handleApplyTextColor" color="primary">
                  <v-row align="center" class="flex-column" justify="center">
                    <v-icon class="cols 12"> mdi-format-color-text </v-icon>

                    <v-sheet
                      tile
                      style="margin-top: -4px"
                      height="4"
                      width="26"
                      :color="textColor"
                    ></v-sheet>
                  </v-row>
                </v-btn>
                <v-menu
                  z-index="99999999"
                  offset-y
                  :close-on-content-click="false"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="primary"
                      class="btn"
                      min-width="0"
                      max-width="0"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-color-picker v-model="textColor"></v-color-picker>
                  <template v-if="recentTextColors.length > 0">
                    <v-divider> </v-divider>
                    <v-subheader>Recent Colors</v-subheader>
                    <v-list>
                      <v-list-item
                        @click="textColor = color"
                        v-for="color in recentTextColors"
                        :key="color"
                      >
                        <v-list-item-avatar>
                          <v-sheet
                            width="40"
                            height="10"
                            :color="color"
                          ></v-sheet>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          {{ color }}
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn icon @click="hanldeRemoveRecentColor(color)">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </template>
                </v-menu>
              </v-btn-toggle>

              <!-- Text Alignmetn -->
              <!-- Left align -->
              <action-button
                top
                @click="handleSetTextAlign('left')"
                :active="editor.isActive({ textAlign: 'left' })"
              >
                <template #icon>mdi-format-align-left</template>
                <template #tooltip>Align Left</template>
              </action-button>

              <!-- Center align -->
              <action-button
                top
                @click="handleSetTextAlign('center')"
                :active="editor.isActive({ textAlign: 'center' })"
              >
                <template #icon>mdi-format-align-center</template>
                <template #tooltip>Align Center</template>
              </action-button>

              <!-- Right align -->

              <action-button
                top
                @click="handleSetTextAlign('right')"
                :active="editor.isActive({ textAlign: 'right' })"
              >
                <template #icon>mdi-format-align-right</template>
                <template #tooltip>Align Right</template>
              </action-button>

              <!-- Justify -->

              <action-button
                top
                @click="handleSetTextAlign('justify')"
                :active="editor.isActive({ textAlign: 'justify' })"
              >
                <template #icon>mdi-format-align-justify</template>
                <template #tooltip>Justify</template>
              </action-button>

              <!-- List Items -->

              <action-button
                top
                @click="editor.chain().focus().toggleBulletList().run()"
                :active="editor.isActive('bulletList')"
              >
                <template #icon>mdi-format-list-bulleted</template>
                <template #tooltip>Bullet List</template>
              </action-button>

              <action-button
                top
                @click="editor.chain().focus().toggleBulletList().run()"
                :active="editor.isActive('orderedList')"
              >
                <template #icon>mdi-format-list-numbered</template>
                <template #tooltip>Numbered List</template>
              </action-button>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-card outlined rounded="0" elevation="2">
      <editor-content :editor="editor" />
    </v-card>
  </v-sheet>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { TextAlign } from '@tiptap/extension-text-align';
import { FontFamily } from '@tiptap/extension-font-family';

import ActionButton from '../editor/ActionButton.vue';

import {
  availableFontFamilies,
  defaultFontFamily,
} from '../../utils/fontFamilies.js';

import { FontSize } from '../../editor-extensions/font-size';

import FontFamilySelect from '../editor/FontFamilySelect.vue';
import FontSizeSelect from '../editor/FontSizeSelect.vue';
import { defaultFontSize } from '../../utils/fontSizes.js';
export default {
  components: {
    EditorContent,
    FontFamilySelect,
    FontSizeSelect,
    ActionButton,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
      textColor: '#000000',
      recentTextColors: [],
      textStyleNames: [
        // TODO: make a module
        { text: 'Paragraph', value: 'p' },
        { text: 'Heading 1', value: 'h1' },
        { text: 'Heading 2', value: 'h2' },
        { text: 'Heading 3', value: 'h3' },
        { text: 'Heading 4', value: 'h4' },
        { text: 'Heading 5', value: 'h5' },
        { text: 'Heading 6', value: 'h6' },
      ],
      selectedTextStyle: { text: 'Paragraph', value: 'p' },
      fontFamilies: availableFontFamilies,
      selectedFontFamily: defaultFontFamily,
      fontSize: defaultFontSize,
    };
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },

    fontSize(value) {
      // Once the font size changes apply the size to the selected text
      this.editor
        .chain()
        .focus()
        .setMark('textStyle', {
          fontSize: value.text,
        })
        .run();
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [
        StarterKit,
        Color,
        TextStyle,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        FontFamily,
        FontSize,
      ],
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
      onSelectionUpdate: () => {
        this.updateTextStyleDropdown();
        this.updateFontFamily();
        this.updateFontSize();
      },
    });

    this.editor.chain().focus().setParagraph().setMark('textStyle', {
      fontSize: defaultFontSize.text,
      fontFamily: defaultFontFamily.value,
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    handleApplyTextColor() {
      this.addTextColorToRecent();
      this.editor.chain().focus().setColor(this.textColor).run();
    },
    addTextColorToRecent() {
      if (this.recentTextColors.includes(this.textColor)) return;

      this.recentTextColors.push(this.textColor);

      // Get the last three colors
      this.recentTextColors = this.recentTextColors.slice(
        Math.max(this.recentTextColors.length - 3, 0)
      );
    },
    handleChangeTextStyle(input) {
      if (/\d/.test(input)) {
        const headingLevel = input.match(/\d/)[0];
        this.editor
          .chain()
          .focus()
          .toggleHeading({ level: +headingLevel })
          .run();
      } else {
        this.editor.chain().focus().setParagraph().run();
      }
    },
    updateTextStyleDropdown() {
      const { level } = this.editor.getAttributes('heading');
      if (!level) {
        this.selectedTextStyle = { text: 'Paragraph', value: 'p' };
      } else {
        this.selectedTextStyle = {
          text: `Heading ${level}`,
          value: `h${level}`,
        };
      }
    },
    hanldeRemoveRecentColor(color) {
      // If the color is not included in the array return.
      const index = this.recentTextColors.indexOf(color);
      if (index === -1) return;

      this.recentTextColors.splice(index, 1);
    },
    handleSetTextAlign(align) {
      this.editor.chain().focus().setTextAlign(align).run();
    },
    handleFontChange(newSelectedFontFamily) {
      this.selectedFontFamily = newSelectedFontFamily;
      this.editor
        .chain()
        .focus()
        .setFontFamily(this.selectedFontFamily.value)
        .run();
    },
    updateFontFamily() {
      const textStyle = this.editor.getAttributes('textStyle');
      if (Object.keys(textStyle).length > 0 && textStyle.fontFamily) {
        this.selectedFontFamily = this.fontFamilies.find(
          font => font.value === textStyle.fontFamily
        );
      } else {
        this.selectedFontFamily = defaultFontFamily;
      }
    },
    updateFontSize() {
      const textStyle = this.editor.getAttributes('textStyle');
      if (Object.keys(textStyle).length > 0 && textStyle.fontSize) {
        this.fontSize = this.$refs.fontSizeSelect.available.find(
          font => font.text === textStyle.fontSize
        );
      } else {
        this.fontSize = defaultFontSize;
      }
    },
  },
};
</script>

<style>
.ProseMirror {
  padding: 20px;
}
.v-text-field__details {
  display: none;
}
</style>
