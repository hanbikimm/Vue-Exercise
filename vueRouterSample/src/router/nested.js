// 최상위 Outlet 컴포넌트
import User from "../views/User.vue";

// User의 Child 컴포넌트
import UserHome from "../components/User/UserHome.vue";
import UserProfile from "../components/User/UserProfile.vue";
import UserPosts from "../components/User/UserPosts.vue";

const routes = [
  //  중첩된 라우트(Nested Route)
  {
    // 동적 라우트 매칭 : 동적 세그먼트를 사용
    // 동적 세그먼트는 콜론(:)으로 시작
    path: "/user/:id",
    name: "user",
    component: User, // 최상위 Outlet 컴포넌트
    props: true, // 라우트 컴포넌트에 속성 전달
    // props를 true로 설정하면 route.params가 컴포넌트 props로 설정됩니다.
    // children, 배열형태로 route와 같은 형태로 자식 라우트를 설정 가능.
    children: [
      // UserHome은 User컴포넌트 안의 <router-view>에서 랜더링됨
      // url 형식 : /user/:id 로 일치시 랜더링
      {
        path: "",
        component: UserHome
      },

      // UserProfile도 User컴포넌트 안의 <router-view>에서 랜더링됨
      // url 형식 : /user/:id/profile 로 일치시 랜더링
      {
        path: "profile",
        component: UserProfile,
        meta: { title: "meta 태그테스트", auth: true }
      },
      // UserPosts도 User컴포넌트 안의 <router-view>에서 랜더링됨
      // url 형식 : /user/:id/posts 로 일치시 랜더링
      { path: "posts", component: UserPosts }
    ]
  }
];

export default routes;
