<template>
  <footer>
    <section class="work-together">
      <div>
        <a href="//www.salsitasoft.com/contact-us">Let&#39;s work together</a>
      </div>
    </section>
    <section class="javascript-experts">
      <div>
        <a href="/" class="logo-salsita">Salsita Software</a>
        <strong>The JavaScript Experts&#8482;</strong>
        <nav>
          <ul>
            <li><a href="//twitter.com/salsitasoft" class="icon-twitter">Twitter</a></li>
            <li><a href="//facebook.com/salsitasoft" class="icon-facebook">Facebook</a></li>
            <li><a href="//linkedin.com/company/salsita-software" class="icon-linkedin">LinkedIn</a></li>
            <li><a href="//plus.google.com/+Salsitasoft" class="icon-gplus">Google+</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="copyright">
      <div>
        <a href="//www.salsitasoft.com/privacy-policy">Privacy Policy</a>
        <p>Copyright &copy; Salsita Software 2017. All Rights Reserved.</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="sass" scoped>
@import ../styles/shared

footer
  color: #fff
  background-color: #222

  section
    // Work Together
    &.work-together
      background: url(../assets/img/bg-footer.jpg) 50% 0%
      background-size: cover

      > div
        +align(center center)
        padding: 10*$base 0

      a
        position: relative
        display: inline-block
        height: 54px
        line-height: 50px
        padding: 0 7*$base 0 2*$base
        border: 2px #fff solid
        color: #fff
        text-align: center
        font-size: $fontL
        text-decoration: none
        transition: box-shadow 0.25s linear, opacity 0.5s linear

        &:after
          +pseudo
          +abs(top 21px 15px)
          width: 32px
          height: 12px
          background: url(../assets/img/button-arrow-right.png) no-repeat center center

        &:hover, &:focus
          box-shadow: inset 0 0 0 2px #fff

          &:after
            animation: arrowHintRight 1.5s ease-out 0.25s infinite

    // JavaScript Experts
    &.javascript-experts

      > div
        +align(center center)
        height: 100%
        padding: 2*$base 0

        +media('<=desktop')
          padding: 3*$base 1.5*$base

        +media('<=mobile')
          flex-direction: column

      .logo-salsita
        +hide-text
        display: inline-block
        flex-shrink: 0
        width: 110px
        height: 100px
        background: transparent url(../assets/img/logo-salsita-white.png) no-repeat 50% 50%
        background-size: contain

        +media('<=mobile')
          height: 60px
          margin-bottom: 2*$base

      strong
        display: inline-block
        margin-left: 2*$base
        padding-left: 2*$base
        border-left: 1px #444 solid
        font-size: $fontXL
        font-weight: $fontRegular

        +media('<=mobile')
          display: none

      nav
        flex-grow: 1

        ul
          +align(right center, $base, row)
          margin: 0

        a
          +hide-text
          position: relative
          display: block
          width: 40px
          height: 40px
          color: #191919
          background-color: #3b3b3b
          border-radius: 50%
          text-decoration: none
          line-height: 40px
          text-align: center
          transition: all 0.25s linear

          &:before
            +abs(center)

          &:hover, &:focus
            color: #fff
            transform: scale(1.1)

          &.icon-twitter:hover,
          &.icon-twitter:focus
            background-color: #55acee

          &.icon-facebook:hover,
          &.icon-facebook:focus
            background-color: #3b5998

          &.icon-linkedin:hover,
          &.icon-linkedin:focus
            background-color: #1a85bc

          &.icon-gplus:hover,
          &.icon-gplus:focus
            background-color: #d73d32

    // Copyright
    &.copyright
      height: 50px
      color: #666
      background-color: #111

      +media('<=mobile')
        height: auto
        text-align: center

      > div
        +align(left center)
        height: 100%
        padding: 0

        +media('<=desktop')
          padding: 0 1.5*$base

        +media('<=mobile')
          flex-direction: column
          padding: 1.5*$base

      a
        color: #fff
        text-decoration: none

        +media('<=mobile')
          margin-bottom: $base

      p
        display: inline-block
        margin: 0 0 0 2*$base
        padding-left: 2*$base
        border-left: 1px #666 solid

        +media('<=mobile')
          margin: 0
          padding: 0
          border: none
</style>
