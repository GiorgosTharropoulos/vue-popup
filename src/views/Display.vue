<template>
  <section style="position: relative">
    <div
      class="mb-2 mr-3"
      style="position: fixed; bottom: 0; right: 0"
      v-if="display"
    >
      <popup-display :popup="popup" @dismiss="handleDismiss" />
    </div>
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quae.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad,
        commodi totam quis quod labore fugiat non quos sit ipsam molestiae
        perspiciatis provident similique saepe magnam animi omnis vero quas
        sapiente dicta reprehenderit voluptatem. Illo dolore ipsam, perferendis,
        eum modi rerum, animi aspernatur temporibus harum voluptates magni
        reprehenderit! Autem, earum nulla exercitationem iusto ea odio sequi
        dolorum eveniet delectus eos ducimus quidem ut, architecto laborum vero
        asperiores quod sed qui non velit dignissimos, tenetur quia. Aperiam
        voluptatibus praesentium iure cumque dolores nulla culpa, in odit
        expedita perferendis odio quas libero minima ratione vel cupiditate
        quam, id, hic doloribus sunt! Esse.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quae.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad,
        commodi totam quis quod labore fugiat non quos sit ipsam molestiae
        perspiciatis provident similique saepe magnam animi omnis vero quas
        sapiente dicta reprehenderit voluptatem. Illo dolore ipsam, perferendis,
        eum modi rerum, animi aspernatur temporibus harum voluptates magni
        reprehenderit! Autem, earum nulla exercitationem iusto ea odio sequi
        dolorum eveniet delectus eos ducimus quidem ut, architecto laborum vero
        asperiores quod sed qui non velit dignissimos, tenetur quia. Aperiam
        voluptatibus praesentium iure cumque dolores nulla culpa, in odit
        expedita perferendis odio quas libero minima ratione vel cupiditate
        quam, id, hic doloribus sunt! Esse.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quae.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad,
        commodi totam quis quod labore fugiat non quos sit ipsam molestiae
        perspiciatis provident similique saepe magnam animi omnis vero quas
        sapiente dicta reprehenderit voluptatem. Illo dolore ipsam, perferendis,
        eum modi rerum, animi aspernatur temporibus harum voluptates magni
        reprehenderit! Autem, earum nulla exercitationem iusto ea odio sequi
        dolorum eveniet delectus eos ducimus quidem ut, architecto laborum vero
        asperiores quod sed qui non velit dignissimos, tenetur quia. Aperiam
        voluptatibus praesentium iure cumque dolores nulla culpa, in odit
        expedita perferendis odio quas libero minima ratione vel cupiditate
        quam, id, hic doloribus sunt! Esse.
      </p>
    </div>
  </section>
</template>

<script>
import { store } from '../stores/hoverStore';

import PopupService from '@/services/service-popup.js';

import PopupDisplay from '@/components/popups/PopupDisplay';
import { LinkedList } from '../utils/utils';

export default {
  components: {
    PopupDisplay,
  },

  data() {
    return {
      popupsLinkedList: new LinkedList(),
      popup: null,
      display: false,
      timeoutId: null,
      scrollPercent: 0,
      triedToExit: false,
      oldPageY: null,
      swipeThreshold: 200,
      yDiff: null,
      yDown: null,
      exitTriggerMounted: false,
    };
  },

  watch: {
    display(value) {
      value && PopupService.setViewedNow(this.popup);
    },

    isHoveringOutside(value) {
      if (value && this.exitTriggerMounted && !this.triedToExit) {
        this.display = true;
      }
    },
  },

  computed: {
    isHoveringOutside: () => store.hoveringOutsideMain,
  },

  created() {
    PopupService.shouldBeDisplayed().then(popups => {
      this.popupsLinkedList = popups;

      this.setPopupAndTriggers();
    });
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
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
    if (!this.triedToExit && this.exitTriggerMounted) {
      this.triedToExit = true;
      this.display = true;
      next(false);
    } else {
      next();
    }
  },

  methods: {
    handleScroll() {
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
      if (this.triedToExit) return;
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

    handleDismiss() {
      this.clearState();

      this.setPopupAndTriggers();
    },

    setPopupAndTriggers() {
      const popup = this.popupsLinkedList.popFirst();

      if (!popup) return;

      this.popup = popup;

      if (this.popup.areAllTriggersDisabled()) {
        this.display = true;
      } else {
        // Exit trigger
        this.popup.setExitTrigger(
          window,
          {
            unloadHandler: this.handleUnload,
            touchStartHandler: this.handleTouchStart,
            touchEndHandler: this.handleTouchEnd,
            touchMoveHandler: this.handleTouchMove,
          },
          () => (this.exitTriggerMounted = true)
        );

        // Delay Trigger
        this.timeoutId = this.popup.setDelayTrigger(
          () => (this.display = true)
        );

        // Scroll Trigger
        if (this.popup.scrollTrigger.isEnabled) {
          window.addEventListener('scroll', this.handleScroll);
        }
      }
    },

    clearState() {
      this.triedToExit = false;
      this.exitTriggerMounted = false;
      this.display = false;
      this.timeoutId = null;
      this.popup = null;
    },
  },
};
</script>

<style></style>
