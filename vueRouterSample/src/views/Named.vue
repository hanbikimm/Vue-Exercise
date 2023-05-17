<template>
  <!-- 라우트 링크 클릭 시 해당 영역이 replace 됨 -->
  <div>
    <h1>Named Routes</h1>
    <p>현재 Route 이름 : {{ this.$route.name }}</p>
    <ul>
      <li>
        <router-link :to="{ name: 'named1' }">named1 으로</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'named2' }">named2 으로</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'named3', params: { id: 'ghkim' } }">named3 으로</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['name']
};
</script>

<style></style>
