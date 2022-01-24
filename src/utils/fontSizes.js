import { DropdownItem } from '../models/base';

export class FontSizeSelection extends DropdownItem {
  constructor(value) {
    super(`${value}pt`, value);
  }
}

export const defaultFontSize = new FontSizeSelection(12);

export const fontSizes = [
  new FontSizeSelection(6),
  new FontSizeSelection(7),
  new FontSizeSelection(8),
  new FontSizeSelection(9),
  new FontSizeSelection(10),
  new FontSizeSelection(10.5),
  new FontSizeSelection(11),
  new FontSizeSelection(12),
  new FontSizeSelection(13),
  new FontSizeSelection(14),
  new FontSizeSelection(15),
  new FontSizeSelection(16),
  new FontSizeSelection(18),
  new FontSizeSelection(20),
  new FontSizeSelection(22),
  new FontSizeSelection(24),
  new FontSizeSelection(26),
  new FontSizeSelection(28),
  new FontSizeSelection(32),
  new FontSizeSelection(36),
  new FontSizeSelection(40),
  new FontSizeSelection(44),
  new FontSizeSelection(48),
  new FontSizeSelection(54),
  new FontSizeSelection(60),
  new FontSizeSelection(66),
  new FontSizeSelection(72),
  new FontSizeSelection(72),
  new FontSizeSelection(80),
  new FontSizeSelection(80),
  new FontSizeSelection(88),
  new FontSizeSelection(96),
];
