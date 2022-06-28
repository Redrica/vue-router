import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  // давать маршрутам имена – наиболее правильное решение, тк в этом случае навигация становится проще, для перехода по нужному роуту не надо обновлять ссылки в случае каких-то изменений.
  { path: '/', name: 'Home', component: Home },
  // Динамический импорт. Будет загружаться только то, что нужно для этого конкретного маршрута.
  { path: '/brazil', name: 'brazil', component: () => import('../views/Brazil.vue')},
  { path: '/jamaica', name: 'jamaica', component: () => import('../views/Jamaica.vue')},
  { path: '/panama', name: 'panama', component: () => import('../views/Panama.vue')},
  { path: '/hawaii', name: 'hawaii', component: () => import('../views/Hawaii.vue')},
  // Динамический путь. Вместо id может быть подставлено "что угодно", осуществится переход по заданному роуту. Само слово id тоже не принципиально.
  { path: '/destination/:id', name: 'destination.show', component: () => import('../views/DestinationShow.vue')},
  // если есть явно прописанный роут, то при переходе на него загрузится именно он, а не динамический (/:id при переходе на /brazil загрузит именно Brazil, а не DestinationShow)
  // { path: '/:id', component: () => import('../views/DestinationShow.vue')}
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
