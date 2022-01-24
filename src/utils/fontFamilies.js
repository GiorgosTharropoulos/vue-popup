import { DropdownItem } from '../models/base';

export class FontFamilySelection extends DropdownItem {
  constructor(text, value) {
    super(text, value);
  }
}

export const availableFontFamilies = [
  new FontFamilySelection('Roboto', '"Roboto", sans-serif'),
  new FontFamilySelection('Poppins', '"Poppins", sans-serif'),
  new FontFamilySelection('Lato', '"Lato", sans-serif'),
  new FontFamilySelection('Inter', 'Inter'),
  new FontFamilySelection('Comic Sans', 'Comic Sans MS, Comic Sans'),
  new FontFamilySelection('Serif', 'serif'),
  new FontFamilySelection('Monospace', 'monospace'),
  new FontFamilySelection('Cursive', 'cursive'),
];

export const defaultFontFamily = new FontFamilySelection(
  'Roboto',
  '"Roboto", sans-serif'
);
