<template>
  <section style="position: relative">
    <div
      ref="container"
      class="mb-2 mr-3"
      style="position: fixed; bottom: 0; right: 0"
      v-if="popups.length > 0"
    >
      <popup-container
        :popups="popups"
        @dismiss="handleDismiss"
        @delay="handleDelay"
        @exitMounted="handleExitMounted"
      />
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

import PopupContainer from '@/components/display/PopupContainer.vue';

export default {
  components: {
    PopupContainer,
  },

  data() {
    return {
      popups: [],
      timeoutId: null,
      triedToExit: false,
      oldPageY: null,
      swipeThreshold: 200,
      yDiff: null,
      yDown: null,
      currentlyDisplayeQueue: [],
    };
  },

  watch: {
    isHoveringOutside(value) {
      if (value && !this.triedToExit) {
        this.notifyExit();
      }
    },
  },

  computed: {
    isHoveringOutside: () => store.hoveringOutsideMain,
    viewportHeight: function () {
      const main = document.getElementById('mainWrapper');
      const style = window.getComputedStyle(main);

      return window.innerHeight - parseFloat(style.paddingTop);
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
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
    PopupService.shouldBeDisplayed().then(popups => {
      this.popups = popups;
    });
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('beforeunload', this.handleUnload);
    window.document.body.removeEventListener(
      'touchstart',
      this.handleTouchStart
    );
    window.document.body.removeEventListener('touchend', this.handleTouchEnd);
    window.document.body.removeEventListener('touchmove', this.handleTouchMove);
  },

  beforeRouteLeave(to, from, next) {
    if (this.popups.filter(pop => pop.exitTriggerMounted).length > 0) {
      this.notifyExit();
      next(false);
    } else {
      next();
    }
  },

  methods: {
    notifyExit() {
      this.popups
        .filter(pop => pop.exitTriggerMounted)
        .forEach(pop => {
          pop.display = true;
          // We do not need to await the set viewed now
          PopupService.setViewedNow(pop);

          this.currentlyDisplayeQueue.push(pop);

          this.hideExtra();
        });
    },

    notifyScroll(scrollPercent) {
      this.popups
        .filter(
          pop =>
            pop.scrollTrigger.isEnabled &&
            pop.scrollTrigger.selected.value >= scrollPercent
        )
        .forEach(pop => {
          if (
            Math.round(scrollPercent * 100) >=
            Math.round(pop.scrollTrigger.selected.value * 100)
          ) {
            pop.display = true;
            // We do not need to await the set viewed now
            PopupService.setViewedNow(pop);

            this.currentlyDisplayeQueue.push(pop);

            this.hideExtra();
          }
        });
    },

    handleScroll() {
      // pageYOffset the pixels that the user has scrolled.
      // offsetHeight the heigh of element in pixes including borders and padding.

      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      this.notifyScroll(scrollPercent);
    },

    handleUnload(e) {
      if (this.popups.filter(pop => pop.exitTriggerMounted).length > 0) {
        this.notifyExit();
        e.preventDefault();
        this.triedToExit = true;
        e.returnValue = '';
      }
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
        this.notifyExit();
      }
      this.yDown = null;
    },

    handleDismiss(pop) {
      const toRemove = this.popups.findIndex(popup => popup.id === pop.id);

      const index = this.popups.indexOf(toRemove);

      if (index === -1) return;

      this.popups.splice(index, 1);

      const dispIndex = this.currentlyDisplayeQueue.findIndex(
        disp => disp.id === toRemove.id
      );

      if (dispIndex === -1) return;

      this.currentlyDisplayeQueue.splice(index, 1);
    },

    handleDelay(pop) {
      const popupToDisplay = this.popups.find(popup => popup.id === pop.id);

      if (!popupToDisplay) return;

      popupToDisplay.display = true;
      // We do not need to await the set viewed now
      PopupService.setViewedNow(popupToDisplay);

      this.currentlyDisplayeQueue.push(popupToDisplay);

      this.hideExtra();
    },

    handleExitMounted(pop) {
      const popup = this.popups.find(p => p.id === pop.id);

      popup.exitTriggerMounted = true;
    },

    hideExtra() {
      if (
        this.$refs.container.getBoundingClientRect().height >
        this.viewportHeight
      ) {
        const toRemove = this.currentlyDisplayeQueue.shift();

        const index = this.popups.findIndex(pop => pop.id === toRemove?.id);

        if (index === -1) return;

        this.popups.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>
