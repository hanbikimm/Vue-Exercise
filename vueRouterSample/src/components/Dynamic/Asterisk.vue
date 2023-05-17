<template>
  <div id=child>
      <h2>Asterisk</h2><br />
     <p>Asterisk(*)을 사용하면, * 이하 모든 주소와 매핑된다.</p>
     <p>보통 유효하지 않은 주소 입력 시, path: '*' 줘서 처리.</p>
     
     
     경로 설정 : / asterisk / 
     <pre> ex)
         -  /asterisk
         -  /asterisk/foo
         -  /asterisk/foo/bar/test
         -  /asterisk/1234/test
     </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>