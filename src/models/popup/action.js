const Sizes = {
  SMALL: 0,
  REGULAR: 1,
  LARGE: 2,
  XLARGE: 3,
};

export default class PopupAction {
  constructor(
    text,
    isOutlined,
    isPlain,
    isRounded,
    isText,
    isTile,
    isBlock,
    isSmall,
    isLarge,
    isXLarge,
    color
  ) {
    this.text = text;
    this.isOutlined = isOutlined;
    this.isPlain = isPlain;
    this.isRounded = isRounded;
    this.isText = isText;
    this.isTile = isTile;
    this.isBlock = isBlock;
    this.isSmall = isSmall;
    this.isLarge = isLarge;
    this.isXLarge = isXLarge;
    this.color = color;
  }

  copy() {
    return new PopupAction(
      this.text,
      this.isOutlined,
      this.isPlain,
      this.isRounded,
      this.isText,
      this.isTile,
      this.isBlock,
      this.isSmall,
      this.isLarge,
      this.isXLarge,
      this.color
    );
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
  static default() {
    return new PopupAction(
      'Learn More',
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      'primary'
    );
  }
}
