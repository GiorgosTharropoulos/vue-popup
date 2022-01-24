import slugify from 'slugify';

class TagBase {
  /**
   *
   * @param {Number} id
   * @param {String} slug
   */
  constructor(id, slug) {
    this.id = id;
    this.slug = slug;
  }

  toString() {
    return this.slug;
  }
}

export default class TagViewModel extends TagBase {
  /**
   *
   * @param {number} id
   * @param {string} slug
   * @param {String[]} users
   */
  constructor(id, slug, users) {
    super(id, slug);
    this.users = users;
  }
}

export class SelectableTagViewModel extends TagBase {
  constructor(id, slug, isSelected) {
    super(id, slug);
    this.isSelected = isSelected;
  }
}

export class TagInViewModel {
  constructor(title) {
    this.slug = slugify(title);
  }
}
