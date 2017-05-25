<template>
  <header>

    <div class="desktop" v-if="$mq.resize && $mq.above('767px')">
      <router-link class="salsita" to="/">Salsita Software<dynamic-logo></dynamic-logo></router-link>
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

    <div class="mobile" v-if="$mq.resize && $mq.below('768px')">
      <router-link class="salsita" to="/">Salsita Software<dynamic-logo></dynamic-logo></router-link>
      <button class="hamburger">Open navigation</button>
      <button class="contact" v-scroll-to="contactScrollTo">Contact us</button>
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

  </header>
</template>

<script>
import DynamicLogo from '@/components/DynamicLogo'

export default {
  name: 'app-header',
  components: {
    DynamicLogo
  },
  data () {
    return {
      contactScrollTo: {
        el: 'section.contact',
        container: 'app-container > view-container:first-of-type'
      }
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

  +media('<tablet')
    height: $headerHeightMobile
    background: #111

  > div
    +clearfix
    height: 100%
    max-width: $contentMaxWidth
    margin: 0 auto

    +media('<=desktop')
      padding: 0 1.5*$base

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

    &.mobile
      display: flex
      justify-content: space-between

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
