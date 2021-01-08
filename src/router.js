import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Render from './views/Render.vue';
import Categories from './views/Categories.vue';
import Home from './views/Home.vue';
import Search from './views/Search.vue';

// import { initData } from './services/initData';

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: Render, 
			children: [
				{
					path: '',
					component: Home,
				},
				{
					path: 'categories',
					component: Categories,
				},
				{
					path: 'calendar',
					component: Home,
				},
				{
					path: 'transfer',
					component: Home,
				},
				{
					path: 'analytics',
					component: Home,
				},
				{
					path: 'settings',
					component: Home,
				},
				{
					path: 'search',
					component: Search,
				},
			],
		},
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;