import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Vue 라우터 주입, 하위 컴포넌트에서 this.$router와 this.$route로 접근가능
  render: h => h(App)
}).$mount("#app");

// this.$router : Vue 인스턴스에서 주입된 router 객체
//  사용 이유 : 라우터 조작이 필요한 모든 컴포넌트에서 라우트 객체를 가져올 필요가 없기 때문
//  ex) 페이지 전환이 없는 컴포넌트 등
// this.$route : 현재 라우트에 대한 정보를 얻을 수 있다.
