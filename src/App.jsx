
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './pages/Form/Form'
import GetUser from './pages/GetUser/GetUser'
import Dashboard from './Layout/Dashboard';
import Home from './pages/Home/Home';
import GetAllUser from './pages/GetAllUser/GetAllUser';
import EditUser from './pages/EditUser/EditUser';
import Login from './pages/login/login';
import PrivateRoutes from './Route/PrivateRoute';
function App() {
  const router = createBrowserRouter([

    {
      path: "/dashboard",
      element: <PrivateRoutes />,
      children: [
        {
          path: '',
          element: <Dashboard />,

          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "users",
              element: <GetAllUser />,
            },
            {
              path: "create-user",
              element: <Form />,
            },
            {
              path: "user/:id",
              element: <GetUser />
            },
            {
              path: "edit-user/:id",
              element: <EditUser />
            },

          ]
        },
      ]
    }, {
      path: 'login',
      element: <Login />,
    },
  ]);

  return (


    <RouterProvider router={ router } />
  )
}

export default App
