import Layout from './layout.jsx';
import Home from './home/home.jsx';
import Other from './other/other.jsx';

export default [
  {
    path: '/',
    to: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        to: '/home',
        component: Home,
        redirect: '/',
      },
      {
        path: '/other',
        to: '/other',
        component: Other,
      },
    ],
  },
]
