import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home, MyAccount, MyOrder, MyOrders, NotFound, SignIn } from "../index"
import '../../Styles/App.scss'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/my-account', element: <MyAccount/> },
        { path: '/my-order', element: <MyOrder/> },
        { path: '/my-orders', element: <MyOrders/> },
        { path: '/*', element: <NotFound/> },
        { path: '/sign-in', element: <SignIn/> },
    ])

    return routes
}

const App = () => {


  return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
  )
}

export default App