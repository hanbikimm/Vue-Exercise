<template>
  <div>
    <!-- User 카테고리의 최상위 outlet -->
    <!-- <h2>User {{ this.$route.params.id }}</h2> -->
    <h2>User {{ id }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 라우트의 동적 세그먼트 이름과 props 속성 이름이 같으면,
  // 컴포넌트에서 props로 받아 사용할 수도 있다.
  props: ["id"]
};
</script>

<style></style>
