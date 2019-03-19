import Example from '../components/examplecomponent/example.jsx';
import Products from '../components/listcomponent/products';
// ui components



var AllRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Example 
  },
  { 
    path: '/products', 
    name: 'Products', 
    icon: 'ti-loop', 
    component: Products
  },
  { path: '/', pathTo: '/products', name: 'Products', redirect: true }
];
export default AllRoutes;
