import App from "../App";
import Default from "../screens/Default";
import Forms from "../screens/Forms";
import Home from "../screens/Home";
import Products from "../screens/Products";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/default',
            element: <Default />,
         },
         {
            path: '/products',
            element: <Products />,
         },
         {
            path: '/forms',
            element: <Forms />,
         }
      ]
   }
]);

export default router