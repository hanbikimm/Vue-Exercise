import FirstHome from "../components/FirstHome"
import SecondHome from "../components/SecondHome"

const routes = [

    {
      path: "/first",
      component: FirstHome,
      name: "FirstHome",
    },
    {
      path: "/second",
      component: SecondHome,
      name: "SecondHome"
    }
]

export default routes;