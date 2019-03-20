<template>
  <div class="app-footer">
    <div class="container-flex">
      <div class="logo"></div>
      <div class="copy">© 2016–{{new Date().getFullYear()}} «Onvix»</div>
      <div class="contacts">
        <a href>О проекте</a>
        <a href>Контакты</a>
        <a href>Пользовательское соглашение</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>

<style lang="postcss" scoped>
.app-footer {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 30px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  font-size: 14px;
  color: #aaa;

  & .logo {
    grid-column: 1/2;
    grid-row: 1;
    height: 20px;
    background-image: url("../");
  }
  & .copy {
    grid-column: 2/3;
    grid-row: 1;
    display: flex;
    justify-content: center;
  }
  & .contacts {
    grid-column: 3/4;
    grid-row: 1;
    text-align: right;

    & a {
      font-size: 14px;
      margin-left: 20px;
      color: #cfcfcf;
      text-decoration: none;
      &:hover {
        color: #fff;
      }
    }
  }
}
.container-flex {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
  max-width: 1650px;
  padding: 30px 20px 0;
}
</style>
