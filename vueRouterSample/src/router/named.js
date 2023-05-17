// Named route 관련
import Named from "../views/Named.vue";
import Named1 from "../components/Named/Named1.vue";
import Named2 from "../components/Named/Named2.vue";
import Named3 from "../components/Named/Named3.vue";

// Named View 관련
import Top from "../components/NamedView/Top.vue";
import Middle from "../components/NamedView/Middle.vue";
import Bottom from "../components/NamedView/Bottom.vue";

const routes = [
  // Named Route
  {
    path: "/named",
    component: Named,
    name: "named",
    props:{ name: "ghkim" } 
  },
  {
    path: "/named1",
    component: Named1,
    name: "named1"
  },
  {
    path: "/named2",
    component: Named2,
    name: "named2"
  },
  {
    path: "/named3",
    component: Named3,
    name: "named3"
  },
  // Named View : 하나의 루트에 여러 컴포넌트를 route-view의 name으로 구성
  {
    path: "/namedViews",
    components: {
      default: Top,
      middle: Middle,
      bottom: Bottom
    }
  }
];

export default routes;
