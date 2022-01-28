export class TriggerOptionViewModel {
  /**
   *
   * @param {String} label
   * @param {Number} value
   */
  constructor(label, value) {
    this.label = label;
    this.value = value;
  }

  toJSON() {
    return { ...this };
  }

  static fromData(data) {
    if (!data) throw new Error('Data is null or undefined');
    return new TriggerOptionViewModel(data.label, data.value);
  }

  copy() {
    return new TriggerOptionViewModel(this.label, this.value);
  }
}

const MS_PER_SECOND = 1000;
const SECS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;

const SEC = MS_PER_SECOND;
const MINUTE = SECS_PER_MINUTE * MS_PER_SECOND;
const HOUR = MINUTE * MINUTES_PER_HOUR;
const DAY = HOUR * HOURS_PER_DAY;
const WEEK = DAY * DAYS_PER_WEEK;

export const DelayTriggerValues = Object.freeze({
  TEN_SEC: new TriggerOptionViewModel('After 10 seconds', 10 * SEC),
  HALF_MINUTE: new TriggerOptionViewModel('After 30 seconds', 0.5 * MINUTE),
  ONE_MINUTE: new TriggerOptionViewModel('After 1 minute', MINUTE),
  TWO_MINUTES: new TriggerOptionViewModel('After 2 minutes', 2 * MINUTE),
});

export const ScrollPercentageValues = Object.freeze({
  QUARTER: new TriggerOptionViewModel('25% of page', 0.25),
  HALF: new TriggerOptionViewModel('50% of the page', 0.5),
  THREE_QUARTERS: new TriggerOptionViewModel('75% of the page', 0.75),
});

export const DisplayTimeFrequencyValues = Object.freeze({
  DAY: new TriggerOptionViewModel('Every day', DAY),
  TWO_DAYS: new TriggerOptionViewModel('Every 2 days', 2 * DAY),
  THREE_DAYS: new TriggerOptionViewModel('Every 3 days', 3 * DAY),
  WEEK: new TriggerOptionViewModel('Every week', WEEK),
});

export const ExitTriggerValues = Object.freeze({
  FIVE_SECONDS: new TriggerOptionViewModel('5 Seconds', 5 * SEC),
  TEN_SECONDS: new TriggerOptionViewModel('10 Seconds', 10 * SEC),
  HALF_MINUTE: new TriggerOptionViewModel('30 Seconds', 0.5 * MINUTE),
  MINUTE: new TriggerOptionViewModel('1 minute', MINUTE),
});

export default class Trigger {
  /**
   * @constructor
   * @param {Boolean} isEnabled - Whether the trigger is enabled
   * @param {String} label - The label to render
   * @param {TriggerOptionViewModel} selected - The selected option of the trigger
   * @param {TriggerOptionViewModel[]} available - Available options of the trigger
   * @param {Boolean} hasCheckbox - Whether the trigger input has an on-off checkbox
   */
  constructor(isEnabled, label, selected, available, hasCheckbox) {
    this.isEnabled = isEnabled;
    this.label = label;
    this.selected = selected;
    this.available = available;
    this.hasCheckbox = hasCheckbox;
  }

  static fromData(data) {
    if (!data) throw new Error('Data is undefined');

    return new Trigger(
      data.isEnabled,
      data.label,
      TriggerOptionViewModel.fromData(data.selected),
      data.availabel?.map(opt => TriggerOptionViewModel.fromData(opt)),
      data.hasCheckbox
    );
  }
  toJSON() {
    const json = {
      isEnabled: this.isEnabled,
      label: this.label,
      selected: this.selected.toJSON(),
      availabel: this.available.map(option => option.toJSON()),
      hasCheckbox: this.hasCheckbox,
    };
    return json;
  }

  static newDelayTrigger(isEnabled, selected) {
    const label = 'Show on a timer';
    return new Trigger(
      isEnabled,
      label,
      selected,
      Object.values(DelayTriggerValues),
      true
    );
  }

  static newScrollingTrigger(isEnabled, selected) {
    const label = 'Show after scrolling';
    return new Trigger(
      isEnabled,
      label,
      selected,
      Object.values(ScrollPercentageValues),
      true
    );
  }

  static newOnExitIntentTrigger(isEnabled, selected) {
    const label = 'Show on exit-intent';
    return new Trigger(
      isEnabled,
      label,
      selected,
      Object.values(ExitTriggerValues),
      true
    );
  }

  static newTimeFrequencyTrigger(selected) {
    return new Trigger(
      true,
      '',
      selected,
      Object.values(DisplayTimeFrequencyValues),
      false
    );
  }

  static getDefaultDelayTrigger() {
    return Trigger.newDelayTrigger(true, DelayTriggerValues.ONE_MINUTE);
  }

  static getDefaultScrollTrigger() {
    return Trigger.newScrollingTrigger(false, ScrollPercentageValues.QUARTER);
  }

  static getDefaultExitTrigger() {
    return Trigger.newOnExitIntentTrigger(false, ExitTriggerValues.TEN_SECONDS);
  }

  static getDefaultTimeFrequencyTrigger() {
    return Trigger.newTimeFrequencyTrigger(DisplayTimeFrequencyValues.DAY);
  }

  static getDefaultTriggers() {
    const delay = Trigger.getDefaultDelayTrigger();

    const scroll = Trigger.getDefaultScrollTrigger();

    const exit = Trigger.getDefaultExitTrigger();

    const timeFrequency = Trigger.getDefaultTimeFrequencyTrigger();

    return {
      delay: delay,
      scroll: scroll,
      exit: exit,
      timeFrequency: timeFrequency,
    };
  }

  /**
   *
   * @param {Trigger} trigger
   * @returns {Trigger}
   */
  copy() {
    return new Trigger(
      this.isEnabled,
      this.label,
      new TriggerOptionViewModel(this.selected.label, this.selected.value),
      this.available.map(available => available.copy()),
      this.hasCheckbox
    );
  }
}
