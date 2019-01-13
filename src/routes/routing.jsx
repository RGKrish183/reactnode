import Example from '../components/examplecomponent/example.jsx';
// ui components



var AllRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Example 
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default AllRoutes;
