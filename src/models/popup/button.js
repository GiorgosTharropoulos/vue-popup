const Sizes = {
  SMALL: 0,
  REGULAR: 1,
  LARGE: 2,
  XLARGE: 3,
};

export default class Pbutton {
  constructor(data) {
    this.load(data);
  }

  load(data = {}) {
    this.text = data.text || 'Learn More';
    this.isOutlined = data.isOutlined || false;
    this.isPlain = data.isPlain || false;
    this.isRounded = data.isRounded || true;
    this.isText = data.isText || false;
    this.isTile = data.isTile || false;
    this.isBlock = data.isBlock || false;
    this.isSmall = data.isSmall || false;
    this.isLarge = data.isLarge || false;
    this.isXLarge = data.isXLarge || false;
    this.color = data.color || 'primary';
    this.to = data.to || '';
  }

  clear() {
    this.load();
  }
  copy(data) {
    return new Pbutton({ ...this, ...data });
  }

  toJSON() {
    return { ...this };
  }

  /**
   *
   * @param {Sizes} size
   */
  setSize(size) {
    switch (size) {
      case Sizes.SMALL:
        this.isSmall = true;
        this.isLarge = false;
        this.isXLarge = false;
        break;
      case Sizes.REGULAR:
        this.isSmall = false;
        this.isLarge = false;
        this.isXLarge = false;
        break;
      case Sizes.LARGE:
        this.isSmall = false;
        this.isLarge = true;
        this.isXLarge = false;
        break;
      case Sizes.XLARGE:
        this.isSmall = false;
        this.isLarge = false;
        this.isXLarge = true;
        break;
    }
  }
}
