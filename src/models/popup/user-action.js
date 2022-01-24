export default class UserAction {
  constructor(
    text,
    isOutlined,
    isPlain,
    isRaised,
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
    this.isRaised = isRaised;
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
    return new UserAction(JSON.parse(JSON.stringify(this)));
  }
}
