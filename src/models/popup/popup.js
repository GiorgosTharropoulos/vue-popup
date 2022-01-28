import Trigger from './trigger';

import Pbutton from './button';

import { Header } from '../base';

export default class Popup {
  id = '';
  title = 'My popup';
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
  createdAt = Date.now();

  /**
   * @param {String} id
   * @param {String} title
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
   * @param {Date} createdAt
   */
  constructor(data) {
    this.load(data);
  }

  load(data = {}) {
    this.id = data.id || '';
    this.title = data.title || 'My popup';
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
    this.createdAt = data.createdAt || Date.now();
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

  toJSON() {
    const json = {
      title: this.title,
      content: this.content,
      backgroundImage: this.backgroundImage,
      views: this.views,
      clicks: this.clicks,
      lastViewedAt: this.lastViewedAt,
      button: this.button.toJSON(),
      delayTrigger: this.delayTrigger.toJSON(),
      scrollTrigger: this.scrollTrigger.toJSON(),
      exitTrigger: this.exitTrigger.toJSON(),
      timeTrigger: this.timeTrigger.toJSON(),
      createdAt: this.createdAt,
    };
    return json;
  }

  setViewedNow() {
    this.lastViewedAt = Date.now();
  }

  shouldGetDisplayed() {
    // If the popup has not been shown ever.
    if (!this.lastViewedAt) return true;

    // The unix timestamp that the popup was viewed plus the value of the
    // trigger should be less than the current timestamp for the
    // popup to be shown.
    return this.lastViewedAt + this.timeTrigger.selected.value <= Date.now();
  }

  areAllTriggersDisabled() {
    return (
      !this.delayTrigger.isEnabled &&
      !this.scrollTrigger.isEnabled &&
      !this.exitTrigger.isEnabled
    );
  }

  setExitTrigger(
    window,
    { unloadHandler, touchStartHandler, touchEndHandler, touchMoveHandler },
    cb
  ) {
    if (this.exitTrigger.isEnabled) {
      setTimeout(() => {
        window.addEventListener('beforeunload', unloadHandler);
        window.document.body.addEventListener(
          'touchstart',
          touchStartHandler,
          false
        );
        window.document.body.addEventListener(
          'touchend',
          touchEndHandler,
          false
        );
        window.document.body.addEventListener(
          'touchmove',
          touchMoveHandler,
          false
        );
        cb();
      }, this.exitTrigger.selected.value);
    }
  }

  setDelayTrigger(cb) {
    if (this.delayTrigger.isEnabled) {
      return setTimeout(cb, this.delayTrigger.selected.value);
    }
  }
}

export const gridHeaders = [
  new Header('Title', 'start', true, 'title'),
  new Header('Views', 'start', true, 'views'),
  new Header('Clicks', 'start', true, 'clicks'),
  new Header('Last Viewed', 'start', true, 'lastViewedAt'),
  new Header('Created', 'start', true, 'createdAt'),
  new Header('Actions', null, false, 'actions'),
];
