<template>
  <div class="nav-icon">
    <div class="profile">
      <img
        src="https://prisonbreak.site/uploads/user_pictures/64302e214492346b7df90051376ff090/small_94b368166a6888e743b44cd0.jpg"
        alt
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.profile {
  cursor: pointer;
  height: 66px;
  width: 66px;
  @mixin center;
}
.profile img {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
</style>
