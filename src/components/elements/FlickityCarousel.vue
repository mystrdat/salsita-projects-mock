<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Flickity from 'flickity'

export default {
  name: 'flickity-carousel',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.flickity = new Flickity(this.$el, this.options)
  },
  beforeDestroy () {
    this.flickity.destroy()
    this.flickity = null
  },
  methods: {
    next (isWrapped, isInstant) {
      this.flickity.next(isWrapped, isInstant)
    },
    previous (isWrapped, isInstant) {
      this.flickity.previous(isWrapped, isInstant)
    },
    select (index, isWrapped, isInstant) {
      this.flickity.select(index, isWrapped, isInstant)
    },
    selectCell (value, isWrapped, isInstant) {
      this.flickity.selectCell(value, isWrapped, isInstant)
    },
    resize () {
      this.flickity.resize()
    },
    reposition () {
      this.flickity.reposition()
    },
    selectedIndex () {
      return this.flickity.selectedIndex
    },
    prepend (elements) {
      this.flickity.prepend(elements)
    },
    append (elements) {
      this.flickity.append(elements)
    },
    insert (elements, index) {
      this.flickity.insert(elements, index)
    },
    remove (elements) {
      this.flickity.remove(elements)
    },
    playPlayer () {
      this.flickity.playPlayer()
    },
    stopPlayer () {
      this.flickity.stopPlayer()
    },
    pausePlayer () {
      this.flickity.pausePlayer()
    },
    unpausePlayer () {
      this.flickity.unpausePlayer()
    },
    destroy () {
      this.flickity.destroy()
    },
    reloadCells () {
      this.flickity.reloadCells()
    },
    getCellElements () {
      this.flickity.getCellElements()
    },
    data () {
      return Flickity.data(this.$el)
    },
    on (eventName, listener) {
      this.flickity.on(eventName, listener)
    },
    off (eventName, listener) {
      this.flickity.off(eventName, listener)
    },
    once (eventName, listener) {
      this.flickity.once(eventName, listener)
    }
  }
}
</script>

<style>
flickity-carousel {
  display: block;
}

.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus { outline: none; }

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100% !important;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
          tap-highlight-color: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  position: absolute;
  top: 50%;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: white;
  background: hsla(0, 0%, 100%, 0.75);
  cursor: pointer;
  /* vertically center */
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.flickity-prev-next-button:hover { background: white; }

.flickity-prev-next-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #09F;
}

.flickity-prev-next-button:active {
  opacity: 0.6;
}

.flickity-prev-next-button.previous { left: 10px; }
.flickity-prev-next-button.next { right: 10px; }
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button:disabled {
  opacity: 0.3;
  cursor: auto;
}

.flickity-prev-next-button svg {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

.flickity-prev-next-button .arrow {
  fill: #333;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots { direction: rtl; }

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
</style>
