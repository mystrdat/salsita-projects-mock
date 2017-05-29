<template>
  <header v-bind="skrollrHeader">
    <div class="desktop" v-if="$mq.resize && $mq.above('768px')">
      <router-link class="salsita" to="/" v-bind="skrollrLogo">Salsita Software<dynamic-logo></dynamic-logo></router-link>
      <nav>
        <ul>
          <li><a href="//www.salsitasoft.com/javascript-engineers"><span>Skilled JavaScript Engineers</span></a></li>
          <li><a href="//www.salsitasoft.com/mobile-and-web-apps"><span>Mobile & Web Apps</span></a></li>
          <li><a href="//www.salsitasoft.com/clients"><span>Clients</span></a></li>
          <li><a href="//www.salsitasoft.com/about-us"><span>About Us</span></a></li>
          <li><a href="//www.salsitasoft.com/careers"><span>Careers</span></a></li>
          <li><a href="//blog.salsitasoft.com/"><span>Blog</span></a></li>
          <li><a v-scroll-to="contactScrollTo"><span>Contact Us</span></a></li>
        </ul>
      </nav>
    </div>
    <div class="mobile" v-if="$mq.resize && $mq.below('767px')">
      <router-link class="salsita" to="/">Salsita Software<dynamic-logo></dynamic-logo></router-link>
      <button class="hamburger" @click="toggleNav" v-bind:class="{ active: mobileNavOpen }">Open navigation<span></span></button>
      <button class="contact" v-scroll-to="contactScrollTo">Contact us<contact-icon></contact-icon></button>
      <transition name="nav-mobile">
        <nav v-if="mobileNavOpen">
          <ul>
            <li><a href="//www.salsitasoft.com/javascript-engineers"><span>Skilled JavaScript Engineers</span></a></li>
            <li><a href="//www.salsitasoft.com/mobile-and-web-apps"><span>Mobile & Web Apps</span></a></li>
            <li><a href="//www.salsitasoft.com/clients"><span>Clients</span></a></li>
            <li><a href="//www.salsitasoft.com/about-us"><span>About Us</span></a></li>
            <li><a href="//www.salsitasoft.com/careers"><span>Careers</span></a></li>
            <li><a href="//blog.salsitasoft.com/"><span>Blog</span></a></li>
            <li><a v-scroll-to="contactScrollTo"><span>Contact Us</span></a></li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
import DynamicLogo from '@/components/elements/DynamicLogo'
import ContactIcon from '@/components/elements/ContactIcon'

export default {
  name: 'app-header',
  components: {
    DynamicLogo,
    ContactIcon
  },
  data () {
    return {
      mobileNavOpen: false,
      contactScrollTo: {
        el: 'section.contact',
        offset: -60
      },
      skrollrHeader: {
        'data-anchor-target': '.jumbotron',
        'data-top': 'background-color: rgba(17, 17, 17, 0); color: rgb(255, 255, 255); box-shadow: 0 0 5px rgba(0, 0, 0, 0)',
        'data--100-top': 'background-color: rgba(17, 17, 17, 1)',
        'data-50-top-bottom': 'background-color: rgba(17, 17, 17, 1)',
        'data-top-bottom': 'background-color: rgba(255, 255, 255, 1); color: rgb(34, 34, 34); box-shadow: 0 0 5px rgba(0, 0, 0, .15)'
      },
      skrollrLogo: {
        'data-anchor-target': '.jumbotron',
        'data-50-top-bottom': 'color: rgb(255, 255, 255)',
        'data-top-bottom': 'color: rgb(34, 34, 34)'
      }
    }
  },
  methods: {
    toggleNav () {
      this.mobileNavOpen = !this.mobileNavOpen
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../styles/shared

header
  +fix
  width: 100%
  height: $headerHeight
  z-index: 1000
  color: #fff
  background-color: #111
  will-change: transform

  +media('<tablet')
    height: $headerHeightMobile
    background: #111

  > div
    height: 100%
    max-width: $contentMaxWidth
    padding: 0 1.5*$base
    margin: 0 auto

    // Desktop
    &.desktop
      +align(left center)

      nav
        flex-grow: 1
        height: 100%

      ul
        +align(right center, 0, row)
        height: 100%
        margin: 0

        li
          height: 100%
          padding: 0 $base
          line-height: $headerHeight

          a
            color: currentColor
            position: relative
            white-space: nowrap
            text-decoration: none
            will-change: transform

            // Underline effect
            &:after
              +pseudo
              +abs(left top 100% right)
              height: 1px
              background-color: currentColor
              opacity: 0
              transition: all $transitionDuration
              will-change: opacity, transform

            &:hover:after, &:focus:after
              opacity: 0.4
              transform: translateY(3px)

          &:last-child
            padding-right: 0

          &:first-child
            padding-left: 0

            // Skilled JavaScript Engineers > Engineers
            +media('<=desktop')
              span
                display: none
              a:before
                content: 'Engineers'

          &:nth-child(2)
            position: relative
            padding-right: 2*$base

            // Mobile & Web Apps > Apps
            +media('<=desktop')
              span
                display: none
              a:before
                content: 'Apps'

            // Right border
            &:after
              +pseudo
              +abs(right fill 25%)
              width: 1px
              background-color: currentColor
              opacity: 0.2

          &:nth-child(3)
            padding-left: 2*$base

          // Contact us icon
          &:last-child a
            padding-right: 40px
            background: url(../assets/img/icon-contact-us.svg) no-repeat right 50% / auto 22px

            &:after
              right: 40px

    // Mobile
    &.mobile
      display: flex
      justify-content: space-between
      padding: 0

      .hamburger
        order: 1

      .salsita
        width: 80px
        order: 2

      .contact
        order: 3

      nav
        +fix(0 $headerHeight)
        +scrollable
        width: 100%
        height: calc(100vh - #{$headerHeight})
        background: #141414
        will-change: transform

        +media('<tablet')
          top: $headerHeightMobile
          height: calc(100vh - #{$headerHeightMobile})

        ul
          +align(left top, 0, col)

        li
          width: 100%
          line-height: 59px
          border-bottom: 1px solid #333

        a
          display: block
          padding: 0 1.5*$base
          text-decoration: none
          color: #888

          &:hover
            color: #fafafa

    .salsita
      +hide-text
      display: block
      width: 110px
      height: 100%
      position: relative
      color: #fff

      svg
        +abs
        display: block
        width: 100%
        height: 100%
</style>
