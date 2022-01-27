<template>
  <section style="position: relative">
    <div
      style="position: fixed; bottom: 0; right: 0; font-size: 50px"
      v-if="display"
    >
      {{ popup.title }}
    </div>
    <div style="height: 2000px"></div>
  </section>
</template>

<script>
import PopupService from '@/services/service-popup.js';

export default {
  data() {
    return {
      popup: null,
      display: false,
      timeoutId: null,
      scrollPercent: 0,
      triedToExit: false,
      oldPageY: null,
      swipeThreshold: 200,
      yDiff: null,
      yDown: null,
    };
  },

  watch: {
    display(value) {
      value && this.popup?.setViewedNow();
    },
  },

  created() {
    PopupService.shouldBeDisplayed()
      .then(popups => {
        if (Array.isArray(popups) && popups.length > 0) {
          this.popup = popups[0];

          if (this.popup.areAllTriggersDisabled()) {
            this.display = true;
          } else {
            if (this.popup.exitTrigger.isEnabled) {
              setTimeout(() => {
                window.addEventListener('beforeunload', this.handleUnload);
                window.document.body.addEventListener(
                  'touchstart',
                  this.handleTouchStart,
                  false
                );
                window.document.body.addEventListener(
                  'touchend',
                  this.handleTouchEnd,
                  false
                );
                window.document.body.addEventListener(
                  'touchmove',
                  this.handleTouchMove,
                  false
                );
              }, this.popup.exitTrigger.selected.value);
            }
            // Delay Trigger
            if (this.popup.delayTrigger.isEnabled) {
              this.timeoutId = setTimeout(
                () => (this.display = true),
                this.popup.delayTrigger.selected.value
              );
            }

            // Scroll Trigger
            if (this.popup.scrollTrigger.isEnabled) {
              window.addEventListener('scroll', this.onScrollTrigger);
            }
          }
        }
      })
      .catch(error => console.error(error));
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScrollTrigger);
    window.removeEventListener('beforeunload', this.handleUnload);
    window.document.body.removeEventListener(
      'touchstart',
      this.handleTouchStart,
      false
    );
    window.document.body.removeEventListener(
      'touchend',
      this.handleTouchEnd,
      false
    );
    window.document.body.removeEventListener(
      'touchmove',
      this.handleTouchMove,
      false
    );
  },

  beforeRouteLeave(to, from, next) {
    if (!this.triedToExit) {
      this.triedToExit = true;
      this.display = true;
      next(false);
    } else {
      next();
    }
  },

  methods: {
    onScrollTrigger() {
      // pageYOffset the pixels that the user has scrolled.
      // offsetHeight the heigh of element in pixes including borders and padding.

      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      if (scrollPercent >= this.popup.scrollTrigger.selected.value) {
        this.display = true;
        // Stop the timeout if the scroll event fired before the delay.
        clearTimeout(this.timeoutId);
      }
    },

    handleUnload(e) {
      e.preventDefault();
      this.display = true;
      this.display = true;
      this.triedToExit = true;
      e.returnValue = '';
    },

    handleTouchStart(e) {
      this.yDown = e.touches[0].clientY;
      this.yDiff = 0;
    },

    handleTouchMove(e) {
      if (!this.yDown) return;

      this.yDiff = this.yDown - e.touches[0].clientY;
    },

    handleTouchEnd() {
      // If the touch was toward the top and the difference
      // was greater than the threshold then the user tried to exit.
      if (this.yDiff < 0 && Math.abs(this.yDiff) > this.swipeThreshold) {
        this.triedToExit = true;
        this.display = true;
      }
      this.yDown = null;
    },
  },
};
</script>

<style></style>
