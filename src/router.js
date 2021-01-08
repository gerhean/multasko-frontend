import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Render from './views/Render.vue';
import Categories from './views/Categories.vue';
import Home from './views/Home.vue';
import UnderConstruction from './views/UnderConstruction.vue';

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
					component: UnderConstruction,
				},
				{
					path: 'transfer',
					component: UnderConstruction,
				},
				{
					path: 'analytics',
					component: UnderConstruction,
				},
				{
					path: 'settings',
					component: UnderConstruction,
				},
			],
		},
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;