import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  // Динамический импорт. Будет загружаться только то, что нужно для этого конкретного маршрута.
  { path: '/brazil', name: 'brazil', component: () => import('../views/Brazil.vue')},
  { path: '/jamaica', name: 'jamaica', component: () => import('../views/Jamaica.vue')},
  { path: '/panama', name: 'panama', component: () => import('../views/Panama.vue')},
  { path: '/hawaii', name: 'hawaii', component: () => import('../views/Hawaii.vue')},
];

const router = createRouter({
  // HTML 5 history API. На выходе получаем обычную ссылку вида /destination
  history: createWebHistory(), // HTML 5 mode
  // еще один вариант – использовать createWebHashHistory(), в этом случае ссылки будут вида /#/destination.
  // Это позволяет не настраивать сервер для работы с единственной точкой входа, чтобы любой путь ресолвился от корня (в случае HTML 5 mode именно так делается).
  // Отрицательно влияет на SEO, поэтому не рекомендуется.
  // в случае Vue Cli сервер преднастроенный, а в документации описаны настройки для основных типов серверов: https://router.vuejs.org/guide/essentials/history-mode.html
  routes,
  // ↓ переназначение названия активного класса
  // linkActiveClass: 'vue-school-active-link'
});

export default router;
