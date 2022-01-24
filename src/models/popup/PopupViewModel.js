import TriggerViewModel, {
  DelayTriggerValues,
  DisplayTimeFrequencyValues,
  ScrollPercentageValues,
} from './TriggersVeiwModel';

export default class PopupViewModel {
  constructor(
    id,
    content,
    backgroundImage,
    views,
    tags,
    clicks,
    lastViewedAt,
    delayTrigger = null,
    scrollTrigger = null,
    exitTrigger = null,
    timeFrequencyTrigger = null
  ) {
    this.id = id;
    this.content = content;
    this.backgroundImage = backgroundImage;
    this.views = views;
    this.tags = tags;
    this.clicks = clicks;
    this.lastViewedAt = lastViewedAt;
    this.delayTrigger = delayTrigger || this.getDefaultDelayTrigger();
    this.scrollTrigger = scrollTrigger || this.getDefaultScrollTrigger();
    this.exitTrigger = exitTrigger || this.getDefaultExitTrigger();
    this.timeFrequencyTrigger =
      timeFrequencyTrigger || this.getDefaultTimeFrequencyTrigger();
  }

  setViewedNow() {
    this.lastViewedAt = Date.now();
  }

  getDefaultDelayTrigger() {
    return TriggerViewModel.newDelayTrigger(
      true,
      DelayTriggerValues.ONE_MINUTE
    );
  }

  getDefaultScrollTrigger() {
    return TriggerViewModel.newScrollingTrigger(
      false,
      ScrollPercentageValues.QUARTER
    );
  }

  getDefaultExitTrigger() {
    return TriggerViewModel.newOnExitIntentTrigger(false);
  }

  getDefaultTimeFrequencyTrigger() {
    return TriggerViewModel.newTimeFrequencyTrigger(
      DisplayTimeFrequencyValues.DAY
    );
  }

  getDefaultTriggers() {
    const delay = this.getDefaultDelayTrigger();

    const scroll = this.getDefaultScrollTrigger();

    const exit = this.getDefaultExitTrigger();

    const timeFrequency = this.getDefaultTimeFrequencyTrigger();

    return {
      delay: delay,
      scroll: scroll,
      exit: exit,
      timeFrequency: timeFrequency,
    };
  }
}
