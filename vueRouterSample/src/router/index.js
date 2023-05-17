import Vue from "vue";
import VueRouter from "vue-router";
import namedRoutes from "./named.js";
import basicRoutes from "./basic.js";
import nestedRoutes from "./nested.js";
import dynamicRoutes from "./dynamic.js";

// 라우트에 연결해줄 컴포넌트 import

// 라우터 사용
Vue.use(VueRouter);

// 라우트를 정의
// - 각 라우트는 반드시 컴포넌트와 매핑되어야 함.
// - "component"는 `Vue.extend()`를 통해 만들어진
//    실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const routes = [
  ...basicRoutes,
  ...namedRoutes,
  ...nestedRoutes,
  ...dynamicRoutes,
  // {
  //   path: "/about",
  //   name: "about",
  // 라우트 코드 스플리팅
  // 해당 라우트에서 대한 분할된 chunk를 생성합니다. ex) about.[hash].js 
  // 이에  해당된 route에 들어갈 때, 컴포넌트를 비동기적으로 로딩합니다.(Lazy Loading)
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue") // 주석에 따라 chuck 파일을 생성합니다.
  // }
];

// 'routes' 옵션과 함께 router 인스턴스 생성
//  옵션  :
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes // ' routes : routes ' 에 ES6 문법 사용
});

// root Vue 인스턴스 사용할 수 있게 export
// => new Vue시 옵션으로 router 주입 ex) main.js
export default router;
