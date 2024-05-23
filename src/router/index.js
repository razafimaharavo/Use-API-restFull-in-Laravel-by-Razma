import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import Home from '../views/Home.vue';
import UserList from '../views/UserList.vue';
import UserDetail from '../views/UserDetail.vue';
import UserCreate from '../views/UserCreate.vue';
import UserEdit from '../views/UserEdit.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/users', name: 'UserList', component: UserList },
    { path: '/users/:id', name: 'UserDetail', component: UserDetail, name: 'userDetail' },
    { path: '/users/create', name: 'UserCreate', component: UserCreate },
    { path: '/users/edit/:id', name: 'UserEdit', component: UserEdit }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// // Middleware pour gérer les en-têtes CORS
// router.beforeEach(async (to, from, next) => {
//     // Ajouter les en-têtes CORS à toutes les requêtes sortantes
//     axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//     axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
//     axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
  
//     next();
//   });

export default router;
