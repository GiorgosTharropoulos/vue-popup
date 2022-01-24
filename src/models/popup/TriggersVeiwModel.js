export default class TriggerViewModel {
  /**
   * @constructor
   * @param {Boolean} isEnabled - Whether the trigger is enabled
   * @param {String} label - The label to render
   * @param {TriggerOptionViewModel} selected - The selected option of the trigger
   * @param {TriggerOptionViewModel[]} availableOptions - Available options of the trigger
   * @param {Boolean} hasCheckbox - Whether the trigger input has an on-off checkbox
   */
  constructor(isEnabled, label, selected, availableOptions, hasCheckbox) {
    this.isEnabled = isEnabled;
    this.label = label;
    this.selected = selected;
    this.available = availableOptions;
    this.hasCheckbox = hasCheckbox;
  }

  static newDelayTrigger(isEnabled, selected) {
    const label = 'Show on a timer';
    return new TriggerViewModel(
      isEnabled,
      label,
      selected,
      Object.values(DelayTriggerValues),
      true
    );
  }

  static newScrollingTrigger(isEnabled, selected) {
    const label = 'Show after scrolling';
    return new TriggerViewModel(
      isEnabled,
      label,
      selected,
      Object.values(ScrollPercentageValues),
      true
    );
  }

  static newOnExitIntentTrigger(isEnabled) {
    const label = 'Show on exit-intent';
    return new TriggerViewModel(isEnabled, label, isEnabled, [], true);
  }

  static newTimeFrequencyTrigger(selected) {
    return new TriggerViewModel(
      true,
      undefined,
      selected,
      Object.values(DisplayTimeFrequencyValues),
      false
    );
  }

  /**
   *
   * @param {TriggerViewModel} trigger
   * @returns {TriggerViewModel}
   */
  static clone(trigger) {
    return new TriggerViewModel(
      trigger.isEnabled,
      trigger.label,
      TriggerOptionViewModel.clone(trigger.selected),
      trigger.available.map(available =>
        TriggerOptionViewModel.clone(available)
      ),
      trigger.hasCheckbox
    );
  }
}

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

  static clone(label, value) {
    return new TriggerOptionViewModel(label, value);
  }
}

const MS_PER_SECOND = 1000;
const SECS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;

const MINUTE = SECS_PER_MINUTE * MS_PER_SECOND;
const HOUR = MINUTE * MINUTES_PER_HOUR;
const DAY = HOUR * HOURS_PER_DAY;
const WEEK = DAY * DAYS_PER_WEEK;

export const DelayTriggerValues = Object.freeze({
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
