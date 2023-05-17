// 1. route에 설정한 component를 imponent : 라우트에 연결해줄 컴포넌트 import
import Home from "../views/Home.vue";

import Basic from "../components/Basic/Basic.vue";
import Foo from "../components/Basic/Foo.vue";
import Bar from "../components/Basic/Bar.vue";

// 2. 라우터(router)에 설정할 라우트(route)를 지정합니다.
// 각 라우트는 path와 component를 필수로 설정합니다.
// - path : url 주소
// - component : path 주소에 따라 랜더링할 component
const routes = [
  // Named Route
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/basic",
    component: Basic,
    name: "basic",
    alias:'/test'
  },
  {
    path: "/foo",
    component: Foo,
    name: "foo"
  },
  {
    path: "/bar",
    component: Bar,
    name: "bar"
  }
];

export default routes;
