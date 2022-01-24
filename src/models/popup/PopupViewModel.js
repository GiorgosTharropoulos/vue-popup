import TriggerViewModel, {
  DelayTriggerValues,
  DisplayTimeFrequencyValues,
  ScrollPercentageValues,
} from './TriggersVeiwModel';

// eslint-disable-next-line no-unused-vars
import PopupAction from '@/models/popup/action';

export default class PopupViewModel {
  /**
   *
   * @param {Number} id
   * @param {String} content
   * @param {String} backgroundImage
   * @param {Number} views
   * @param {Number} clicks
   * @param {Date} lastViewedAt
   * @param {PopupAction} userAction
   * @param {TriggerViewModel} delayTrigger
   * @param {TriggerViewModel} scrollTrigger
   * @param {TriggerViewModel} exitTrigger
   * @param {TriggerViewModel} timeFrequencyTrigger
   */
  constructor(
    id,
    content,
    backgroundImage,
    views,
    clicks,
    lastViewedAt,
    userAction,
    delayTrigger = null,
    scrollTrigger = null,
    exitTrigger = null,
    timeFrequencyTrigger = null
  ) {
    this.id = id;
    this.content = content;
    this.backgroundImage = backgroundImage;
    this.views = views;
    this.clicks = clicks;
    this.lastViewedAt = lastViewedAt;
    this.button = userAction;
    this.delayTrigger = delayTrigger || this.getDefaultDelayTrigger();
    this.scrollTrigger = scrollTrigger || this.getDefaultScrollTrigger();
    this.exitTrigger = exitTrigger || this.getDefaultExitTrigger();
    this.timeFrequencyTrigger =
      timeFrequencyTrigger || this.getDefaultTimeFrequencyTrigger();
  }

  setViewedNow() {
    this.lastViewedAt = Date.now();
  }

  static default() {
    return new PopupViewModel(
      undefined,
      '<h1><strong>20% Off</strong></h1>',
      '',
      0,
      0,
      undefined,
      PopupAction.default(),
      PopupViewModel.getDefaultDelayTrigger(),
      PopupViewModel.getDefaultScrollTrigger(),
      PopupViewModel.getDefaultExitTrigger(),
      PopupViewModel.getDefaultTimeFrequencyTrigger()
    );
  }

  static getDefaultDelayTrigger() {
    return TriggerViewModel.newDelayTrigger(
      true,
      DelayTriggerValues.ONE_MINUTE
    );
  }

  static getDefaultScrollTrigger() {
    return TriggerViewModel.newScrollingTrigger(
      false,
      ScrollPercentageValues.QUARTER
    );
  }

  static getDefaultExitTrigger() {
    return TriggerViewModel.newOnExitIntentTrigger(false);
  }

  static getDefaultTimeFrequencyTrigger() {
    return TriggerViewModel.newTimeFrequencyTrigger(
      DisplayTimeFrequencyValues.DAY
    );
  }

  static getDefaultTriggers() {
    const delay = PopupViewModel.getDefaultDelayTrigger();

    const scroll = PopupViewModel.getDefaultScrollTrigger();

    const exit = PopupViewModel.getDefaultExitTrigger();

    const timeFrequency = PopupViewModel.getDefaultTimeFrequencyTrigger();

    return {
      delay: delay,
      scroll: scroll,
      exit: exit,
      timeFrequency: timeFrequency,
    };
  }
}
