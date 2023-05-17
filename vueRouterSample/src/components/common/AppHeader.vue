<template>
  <div>
    <!-- 네비게이션을 위한 router-link 사용 
        :  가져올 컴포넌트는 to 속성을 이용해 라우팅 해줌. 기본적으로 <router-link>는 <a>로 렌더링됨-->
    <!-- <router-link>는 현재 라우트와 알치할 때, 자동으로 .router-link-active 클래스가 추가됩니다.-->
    <router-link to="/">기본 라우트</router-link>|
    <router-link to="/user/myid">중첩 라우트</router-link>|
    <router-link to="/named">네임드 라우트</router-link>|
    <router-link to="/namedViews">네임드 뷰</router-link>|
    <router-link to="/dynamic">동적 라우트</router-link>|
  </div>
</template>

<script>
export default {};
</script>

<style></style>
