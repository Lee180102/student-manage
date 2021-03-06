import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import HomePage from './components/HomePage.vue';
import HolleWorld from './components/HelloWorld.vue';
import StudentInformation from './views/student/StudentInformation.vue';
import TeacherInformation from './views/teacher/TeacherInformation.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home_page',
      name: 'home_page',
      component: HomePage,
    },
    {
      path: '/student_information',
      name: 'student_information',
      component: StudentInformation,
    },
    {
      path: '/teacher_information',
      name: 'teacher_information',
      component: TeacherInformation,
    },
    {
      path: '/holle_world',
      name: 'holle_world',
      component: HolleWorld,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
