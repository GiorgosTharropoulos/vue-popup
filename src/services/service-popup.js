import { db } from '../db';
import Pbutton from '../models/popup/button';
import Popup from '../models/popup/popup';
import Trigger from '../models/popup/trigger';
import { LinkedList } from '../utils/utils';

export default class PopupService {
  static #fromPojo(doc) {
    const documentData = doc.data();

    const button = new Pbutton(documentData.button);

    const data = {
      id: doc.id,
      backgroundImage: documentData.backgroundImage,
      button: button,
      clicks: documentData.clicks,
      content: documentData.content,
      createdAt: documentData.createdAt,
      delayTrigger: Trigger.fromData(documentData.delayTrigger),
      exitTrigger: Trigger.fromData(documentData.exitTrigger),
      scrollTrigger: Trigger.fromData(documentData.scrollTrigger),
      timeTrigger: Trigger.fromData(documentData.timeTrigger),
      lastViewedAt: documentData.lastViewedAt,
      title: documentData.title,
      views: documentData.views,
    };

    return new Popup(data);
  }
  static async get(id) {
    const doc = await this.collection.doc(id).get();

    if (!doc.exists) throw new Error(`Popup with id ${id} does not exists.`);

    return this.#fromPojo(doc);
  }

  static collection = db.collection('popups');

  static async create(popup) {
    return await this.collection.add(popup.toJSON());
  }
  static async delete(id) {
    await this.collection.doc(id).delete();
  }

  static async update(id, popup) {
    return await this.collection.doc(id).set(popup.toJSON());
  }

  static async getAllDisplayed() {
    const popups = (
      await this.collection.where('lastViewedAt', '!=', null).get()
    ).docs.map(this.#fromPojo);

    return popups;
  }

  static async shouldBeDisplayed() {
    const neverShowed = (
      await this.collection.where('lastViewedAt', '==', null).get()
    ).docs.map(this.#fromPojo);

    const displayed = await this.getAllDisplayed();

    const shouldDisplayAgain = displayed.filter(pop =>
      pop.shouldGetDisplayed()
    );

    return LinkedList.fromArray([...neverShowed, ...shouldDisplayAgain]);
  }

  static async setViewedNow(popup) {
    return await this.collection
      .doc(popup.id)
      .update({ lastViewedAt: Date.now(), views: popup.views + 1 });
  }

  static async resetViewedNow(id) {
    return await this.collection.doc(id).update({ lastViewedAt: null });
  }
}
