<template>
  <div>
    <a href="#" class="replay">
      <icon-replay></icon-replay>
    </a>
  </div>
</template>

<script>
import IconReplay from "../icons/IconReplay";
export default {
  components: { IconReplay },
  name: "Replay",
  props: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='postcss'>
.replay {
  color: white;
  height: 66px;
  width: 66px;
  @mixin center;
}
.replay:active,
.replay:focus {
  background-color: #fff;
  color: black;
}
</style>
