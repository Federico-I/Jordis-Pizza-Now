// eslint-disable-next-line no-unused-vars
import React from "react";

function App() {
  const x = 23;

  return <div>Hello{x}</div>;
}

export default App;

//////////////////////////////////////
//          Router - Data
//////////////////////////////////////

// After createRouter6.4 If you want to use new API's for data loaders, Data Fetchers or Data Actions, it's mandatory to use the CreateBrouserRouter structure (syntax) shown below. 


/* 
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path:"/", element: <Home />},
      { path:"/menu", element: <Menu />, loader: menuLoader, errorElement: <Error />},
      { path:"/cart", element: <Cart />},
      { path:"/order/new", element: <CreateOrder />, action: actionCreateOrder},
      { path:"/order/:orderId", element: <Order />, loader: orderLoader, errorElement: <Error />},
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;  

}

export default App;

*/