import Example from '../components/examplecomponent/example.jsx';
import Products from '../components/listcomponent/products';
import Blogs from '../components/bloglistcomponent/bloglist';
// ui components



var AllRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Example 
  },
  { 
    path: '/blogs', 
    name: 'blogs', 
    icon: 'ti-loop', 
    component: Blogs
  },
  { path: '/', pathTo: '/blogs', name: 'Blogs', redirect: true }
];
export default AllRoutes;
