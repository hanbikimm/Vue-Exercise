<template>
    <div>
        <h1>동적 라우트 </h1>
        <h4>Optional Params</h4>
        <ul>
            <li> <router-link to = "/optional-params"> /optional-params </router-link> </li>
            <li> <router-link to = "/optional-params/foo"> /optional-params /foo </router-link> </li>
        </ul>

        <h4>Params with regex</h4>
        <ul>
            <li> <router-link to = "/params-with-regex/123"> /params-with-regex /123 </router-link> </li>
            <li> <router-link to = "/params-with-regex/abc"> /params-with-regex /abc </router-link> </li>
        </ul>

        <h4>asterisk </h4>
        <ul>
            <li> <router-link to = "/asterisk/foo"> /asterisk /foo </router-link> </li>
            <li> <router-link to = "/asterisk/foo/bar"> /asterisk /foo /bar </router-link> </li>
        </ul>
        
        <h4>Optional Group</h4>
        <ul>
            <li> <router-link to = "/optional-group/bar"> /optional-group /bar </router-link> </li>
            <li> <router-link to = "/optional-group/foo/bar"> /optional-group /foo /bar </router-link> </li>
        </ul>
      <hr>
      <h3>경로 컨텍스트</h3>
      <pre> {{JSON.stringify(this.$route.path)}}</pre>
      <!-- 라우터 view 영역 -->
      <router-view></router-view>
      </div>
</template>

<script>
export default {

}
</script>

<style >
#child{
    border:1px solid green
}

</style>