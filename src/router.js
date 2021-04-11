import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import FaqStatic from "./views/FaqStatic.vue";
import TOS from "./views/TOS.vue";
import Privacidade from "./views/Privacidade.vue";
import Start from "./views/Start.vue";

import store from "@/store";

Vue.use(Router);

const _router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landingRoot",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/faq-static",
      name: "faq-static",
      components: {
        header: AppHeader,
        default: FaqStatic,
        footer: AppFooter
      }
    },
    {
      path: "/tos",
      name: "tos",
      components: {
        header: AppHeader,
        default: TOS,
        footer: AppFooter
      }
    },
    {
      path: "/privacidade",
      name: "privacidade",
      components: {
        header: AppHeader,
        default: Privacidade,
        footer: AppFooter
      }
    },
    {
      path: "/start",
      name: "start",
      components: {
        header: AppHeader,
        default: Start
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


_router.beforeEach((to, from, next) => {
  console.log('from=', from?.name, 'to=', to?.name);

  // redirect to login on these routes
  const needAuthPaths = ['quiz', 'report', 'profile']
  const routeNeedsAuth = needAuthPaths.includes(to.name)
  const isAuthenticated = store.getters.isAuthenticated
  console.log('routeNeedsAuth=', routeNeedsAuth, 'isAuth=', isAuthenticated);
  console.log(store.getters.user?.CurrentQuestion, store.getters.user);
  console.log(!!(store.getters.token), store.getters.token);
  const allowedNotInQuiz = ['report', 'profile']

  // redirect to quiz if still in the middle of one
  const inQuiz = store.getters.isInQuiz
  console.log('inQuiz=', inQuiz);
 
  if (routeNeedsAuth && !isAuthenticated) {
    console.log('redirect to /login');
    next({ name: 'login' });
  }
  else if(to.name !== 'quiz' && inQuiz) {
    console.log('redirect to /quiz');
    next({ name: 'quiz' });
  }
  else if(!allowedNotInQuiz.includes(to.name) && isAuthenticated && !inQuiz) {
    console.log('redirect to report');
    next({ name: 'report' });
  }
  else { next(); }
})

export default _router;
