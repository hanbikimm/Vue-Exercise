<template>
  <div>
    <h2>User Home 컴포넌트</h2>
    <ul>
      <li>
        <router-link to="/user/foo/profile">/user/foo/profile</router-link>
      </li>
      <li>
        <router-link to="/user/foo/posts">/user/foo/posts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "userHome"
};
</script>
