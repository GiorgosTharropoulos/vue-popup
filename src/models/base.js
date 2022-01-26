export class DropdownItem {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

export class Header {
  text = '';
  align = 'start';
  sortable = false;
  value = '';
  constructor(text, align, sortable, value) {
    this.text = text;
    this.align = align;
    this.sortable = sortable;
    this.value = value;
  }
}
