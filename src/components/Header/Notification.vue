<template>
  <div>
    <a class="notification" href="#">
      <icon-bell class="icon"></icon-bell>
    </a>
  </div>
</template>

<script>
import IconBell from "../icons/IconBell";
export default {
  components: { IconBell },
  name: "Notification",
  props: {},
  data() {
    return {
      isNotified
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='postcss'>
.notification {
  height: 66px;
  width: 66px;
  @mixin center;
  & .icon {
    color: white;
    width: 25px;
    height: 25px;
  }
}
.notification:active,
.notification:focus {
  background-color: #fff;
  & .icon {
    color: black;
  }
}
</style>
