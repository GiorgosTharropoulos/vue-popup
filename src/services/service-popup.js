import { db } from '../db';
import Pbutton from '../models/popup/button';
import Popup from '../models/popup/popup';
import Trigger from '../models/popup/trigger';

const collection = db.collection('popups');

export default class PopupService {
  static async get(id) {
    const doc = await collection.doc(id).get();

    if (!doc.exists) throw new Error(`Popup with id ${id} does not exists.`);

    const pojo = doc.data();

    const button = new Pbutton(pojo.button);

    const data = {
      backgroundImage: pojo.backgroundImage,
      button: button,
      clicks: pojo.clicks,
      content: pojo.content,
      createdAt: pojo.createdAt,
      delayTrigger: Trigger.fromData(pojo.delayTrigger),
      exitTrigger: Trigger.fromData(pojo.exitTrigger),
      scrollTrigger: Trigger.fromData(pojo.scrollTrigger),
      timeTrigger: Trigger.fromData(pojo.timeTrigger),
      lastViewedAt: pojo.lastViewedAt,
      title: pojo.title,
      views: pojo.views,
    };
    return new Popup(data);
  }

  static collection() {
    return collection;
  }
  static async create(popup) {
    return await collection.add(popup.toJSON());
  }
  static async delete(id) {
    await collection.doc(id).delete();
  }

  static async update(id, popup) {
    return await collection.doc(id).set(popup.toJSON());
  }
}
