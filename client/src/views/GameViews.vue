<template>
  <div :class="test()">
      test game views
      <game />
  </div>
</template>

<script>
import Game from '@/components/Game'
export default {

  name: 'GameViews',
  components: {
    Game
  },
  methods: {
    test () {
      console.log('test')
    }
  }
}
</script>

<style>

</style>
