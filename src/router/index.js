import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/templates/Main';
import Login from '@/templates/Login';
import Reservation from '@/templates/Reservation';
// ADMIN PAGE
import StationList from '@/templates/admin/StationList';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation,
    },
    // ADMIN PAGE
    {
      path: '/admin/station',
      name: 'StationList',
      component: StationList,
    },
  ]
})
