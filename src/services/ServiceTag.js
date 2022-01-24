// eslint-disable-next-line no-unused-vars
import TagViewModel, {
  SelectableTagViewModel,
} from '../models/tag/TagViewModel';
export default class ServiceTag {
  /**
   *
   * @param {TagViewModel[]} tags
   * @param {string} user
   * @returns {SelectableTagViewModel[]}
   */
  static getSelectedTags(tags, user) {
    return tags.reduce((list, tag) => {
      const selectableTag = new SelectableTagViewModel(tag.id, tag.slug);

      list.push(selectableTag);

      selectableTag.selected = tag.users.includes(user) ? true : false;

      return list;
    }, []);
  }

  static listTags() {
    return localStorage.getItem('allTags') ?? [];
  }
}
