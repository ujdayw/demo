import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Map from '@/views/Map.vue';
import Search from '@/views/Search.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/map',
        name: 'map',
        component: Map
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;