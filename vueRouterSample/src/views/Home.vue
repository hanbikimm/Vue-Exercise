<template>
  <div class="home">
    <router-link to="basic" replace="">Basic</router-link><br />
    <!-- <a href="basic">Basic</a> -->

    <!-- 'v-bind'를 이용한 표현식 -->
    <router-link v-bind:to="'basic'">Basic v-bind</router-link><br />
    <router-link :to="'basic'">Basic v-bind 축약</router-link><br />
    <!-- <router-link :to="{ path: 'basic'}">Basic path</router-link> -->

    <!-- 이름을 가지는 라우트 -->
    <!-- 쿼리가 있으면,  `/register?plan=private` 이 됩니다. -->
    <router-link :to="{ name: 'user', params: { id: 123 } }"
      >User 컴포넌트</router-link
    ><br />
    <router-link :to="{ path: 'named3', query: { id: 'ghkim' } }"
       >Query String</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
