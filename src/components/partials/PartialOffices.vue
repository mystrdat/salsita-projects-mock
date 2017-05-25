<template>
  <section class="offices">
    <div>
      <h2>Our Offices</h2>
      <grid-container>
        <div>
          <h3>United States</h3>
          <p>123 10th ST<br /> San Francisco, CA 94103<br /> USA</p>
          <p>Telephone:<br /> +1 (415) 723-4723</p>
        </div>
        <div>
          <h3>Europe</h3>
          <p>Stefanikova 25<br /> 150 00 Prague 5<br /> Czech Republic</p>
          <p>Telephone:<br /> +420 270 005 255 (Czech)<br /> +44 800 014 8384 (Toll Free)</p>
        </div>
      </grid-container>
    </div>
  </section>
</template>

<script>
export default {
  name: 'partial-offices'
}
</script>

<style lang="sass" scoped>
@import ../../styles/shared

.offices
  background: url(../../assets/img/bg-our-offices.png) no-repeat center 225px

  +media('<=desktop')
    background-position: center 155px

  +media('<=mobile')
    padding-bottom: 45vw
    margin-bottom: 3*$base
    background-position: center bottom, left top
    background-size: calc(100% - #{3*$base}), auto
    background-image: url(../../assets/img/bg-our-offices.png), linear-gradient(to bottom, #f8f8f8 0%, #fff 100%)

  grid-container
    +grid(2, 5*$base)

    +media('<=mobile')
      +grid(1, $base)

    > div
      border-top: 1px solid #111
      text-align: left

      +media('<=mobile')
        border-top: none

  h2
    text-align: center
    margin-bottom: 440px

    +media('<=mobile')
      margin-bottom: 3*$base

  h3
    margin-top: 2*$base
    text-transform: uppercase

    +media('<=mobile')
      text-align: center
  p
    +media('<=mobile')
      text-align: center
</style>
