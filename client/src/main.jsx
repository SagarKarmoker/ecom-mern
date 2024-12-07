import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard.jsx';
import Mainlayout from './layouts/Mainlayout.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import AddEquipment from './pages/AddEquipment.jsx';
import AllSportsEquipment from './pages/AllSportsEquipment.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import MyEquipment from './pages/MyEquipment.jsx';
import ProductUpdate from './pages/ProductUpdate.jsx';
import Error404 from './pages/Error404.jsx';
import Forget from './pages/Forget.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <Dashboard />
        </PrivateRoute>,
      },
      {
        path: "/equipments",
        element: <AllSportsEquipment />,
        loader: () => fetch('http://localhost:5000/api/v1/product')
      },
      {
        path: "/add-equipment",
        element: <PrivateRoute>
          <AddEquipment />
        </PrivateRoute>,
      },
      {
        path: "/my-equipments",
        element: (
          <PrivateRoute>
            <MyEquipment />
          </PrivateRoute>
        )
      },
      {
        path: "/update/:id",
        element:<PrivateRoute> <ProductUpdate /> </PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/api/v1/product/${params.id}`);
          return response.json();
        }
      },
      {
        path: "/product/:id",
        element: <PrivateRoute>
          <ProductDetails />
        </PrivateRoute>,
        loader: async ({ params }) => await fetch(`http://localhost:5000/api/v1/product/${params.id}`)
      },
      {
        path: "/forgot-password",
        element: <Forget />
      },
      {
        path: "/blog/:id",
        element: <ComingSoon />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
