import { Home, MyAccount, MyOrder, MyOrders, NotFound, Signin } from "../index"
import '../../Styles/App.scss'

const App = () => {
  return (
    <>
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <Signin/>
    </>
  )
}

export default App