<template>
  <div class="nav-icon">
    <div class="replay">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sprite-svg sprite-svg--replay"
        width="23px"
        height="23px"
        viewBox="0 0 23 23"
      >
        <path
          class="svg--replay-path"
          opacity="1"
          fill="#FFF"
          fill-rule="evenodd"
          d="M11.5 23C5.14872538 23 0 17.8512746 0 11.5 0 5.14872538 5.14872538 0 11.5 0 17.8512746 0 23 5.14872538 23 11.5 23 17.8512746 17.8512746 23 11.5 23zM9 6v11l8-5.522174L9 6z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Replay",
  props: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.replay {
  cursor: pointer;
  height: 66px;
  width: 66px;
  @mixin center;
}
</style>
