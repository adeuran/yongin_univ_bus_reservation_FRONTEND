import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/templates/Main';
import Login from '@/templates/Login';
import Reservation from '@/templates/Reservation';
// ADMIN PAGE
import StationList from '@/templates/admin/StationList';
import StationAdd from '@/templates/admin/StationAdd';
import StationEdit from '@/templates/admin/StationEdit';

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

    // Station
    {
      path: '/admin/station/list',
      name: 'StationList',
      component: StationList,
    },
    {
      path: '/admin/station/add',
      name: 'StationAdd',
      component: StationAdd,
    },
    {
      path: '/admin/station/edit/:id',
      name: 'StationEdit',
      component: StationEdit,
    },
  ]
})
