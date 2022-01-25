import Trigger from './trigger';

import Pbutton from './button';

export default class Popup {
  id = 0;
  content = '<h1>20% Off</h1>';

  backgroundImage = '';
  views = 0;
  clicks = 0;
  lastViewedAt = null;
  button = new Pbutton();
  delayTrigger = Trigger.getDefaultDelayTrigger();
  scrollTrigger = Trigger.getDefaultScrollTrigger();
  exitTrigger = Trigger.getDefaultExitTrigger();
  timeTrigger = Trigger.getDefaultTimeFrequencyTrigger();

  /**
   *
   * @param {Number} id
   * @param {String} content
   * @param {String} backgroundImage
   * @param {Number} views
   * @param {Number} clicks
   * @param {Date} lastViewedAt
   * @param {Pbutton} button
   * @param {Trigger} delayTrigger
   * @param {Trigger} scrollTrigger
   * @param {Trigger} exitTrigger
   * @param {Trigger} timeTrigger
   */
  constructor(data) {
    this.load(data);
  }

  load(data = {}) {
    this.id = data.id || 0;
    this.content = data.content || '<h1>20% Off</h1>';
    this.backgroundImage = data.backgroundImage || '';
    this.views = data.views || 0;
    this.clicks = data.clicks || 0;
    this.lastViewedAt = data.lastViewedAt || null;
    this.button = data.button || new Pbutton();
    this.delayTrigger = data.delayTrigger || Trigger.getDefaultDelayTrigger();
    this.scrollTrigger =
      data.scrollTrigger || Trigger.getDefaultScrollTrigger();
    this.exitTrigger = data.exitTrigger || Trigger.getDefaultExitTrigger();
    this.timeTrigger =
      data.timeTrigger || Trigger.getDefaultTimeFrequencyTrigger();
  }

  copy(data) {
    return new Popup({
      ...this,
      ...{
        delayTrigger: this.delayTrigger.copy(),
        scrollTrigger: this.scrollTrigger.copy(),
        exitTrigger: this.exitTrigger.copy(),
        timeTrigger: this.timeTrigger.copy(),
        button: this.button.copy(),
      },
      ...data,
    });
  }

  setViewedNow() {
    this.lastViewedAt = Date.now();
  }
}
