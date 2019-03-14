<template>
  <div class="nav-icon">
    <div class="notification">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sprite-svg sprite-svg--notification"
        width="19px"
        height="27px"
        viewBox="0 0 19 27"
      >
        <defs></defs>
        <g fill="none" fill-rule="evenodd" transform="translate(0 2)">
          <g class="svg--notice-g" opacity=".5" fill="#FFF">
            <path
              d="M4.37443932 22C5.06884028 23.7659048 6.65471287 25 8.5 25c1.8452871 0 3.4311597-1.2340952 4.1255607-3H4.37443932z"
            ></path>
            <path
              d="M15 13.3379618v-2.8382236c0-2.32079587-1.2116935-4.35281465-3.0358301-5.50242686C11.7203989 3.30247524 10.2623042 2 8.5 2 6.7362727 2 5.27724632 3.3045797 5.0352419 5.00141803 3.2130372 6.1529452 2 8.18504208 2 10.4997382v2.8377802C.81780626 13.8995524 0 15.104384 0 16.5 0 18.4290634 1.5678085 20 3.50179827 20h9.99640343C15.4311523 20 17 18.4329966 17 16.5c0-1.3929536-.8174728-2.5991758-2-3.1620382z"
            ></path>
          </g>
          <g class="svg--dot-g">
            <path
              fill="#FFC000"
              d="M13.5 7C15.4329966 7 17 5.43299662 17 3.5S15.4329966 0 13.5 0 10 1.56700338 10 3.5 11.5670034 7 13.5 7z"
            ></path>
            <path
              class="svg--dot-path"
              stroke="#FFF"
              stroke-width="2"
              d="M13.5 8C11.0147186 8 9 5.98528137 9 3.5S11.0147186-1 13.5-1 18 1.01471863 18 3.5 15.9852814 8 13.5 8z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Notification",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='postcss'>
.notification {
  cursor: pointer;
  height: 66px;
  width: 66px;
  @mixin center;
}
</style>
