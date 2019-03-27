<template>
  <!-- <tabs class="flex dropdown">
      <tab name="фильмы" :selected="'true'">
        <ul class="dropdown-list">
          <li v-for="genre in genres" :key="genre.id" class="dropdown-list-item">
            <a
              class="dropdown-list-link"
              href
              @click.prevent="discover({with_genres: genre.id})"
            >{{genre.name}}</a>
          </li>
        </ul>
      </tab>
  </tabs>-->
</template>

<script>
export default {};
</script>

<style>
.flex {
  display: flex;
}
.dropdown-list {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 30px 0;
  max-height: 315px;
  box-sizing: border-box;
  margin-left: 40px;
  &-item {
    color: black;
    font-size: 16px;
    height: 35px;
    width: 216px;
    @mixin center;
    /* align-items: flex-start; */
    align-items: stretch;
  }
  &-link {
    margin-left: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    &:hover {
      color: #1a94b5;
    }
  }
}
</style>
