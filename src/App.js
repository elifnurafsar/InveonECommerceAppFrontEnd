import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import userManager from "./userManager"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import loadable from "./components/Common/loadable";
import pMinDelay from "p-min-delay";
import Loader from "./components/Common/Loader";
import './assets/css/style.css';
import './assets/css/animate.min.css';
import './assets/css/color.css';

const Fashion = loadable(() => pMinDelay(import('./page/'), 250), { fallback: <Loader /> });
const Register = loadable(() => pMinDelay(import('./page/register'), 250), { fallback: <Loader /> });
const ProductDetailsTwos = loadable(() => pMinDelay(import('./page/Product/product-details-two'), 250), { fallback: <Loader /> });
const About = loadable(() => pMinDelay(import('./page/about'), 250), { fallback: <Loader /> });
const ContactTwo = loadable(() => pMinDelay(import('./page/Contact/contact-two'), 250), { fallback: <Loader /> });
const Login = loadable(() => pMinDelay(import('./page/login'), 250), { fallback: <Loader /> });
const Cart = loadable(() => pMinDelay(import('./page/cart/index'), 250), { fallback: <Loader /> });
const Favorites = loadable(() => pMinDelay(import('./page/Wishlist/index'), 250), { fallback: <Loader /> });
const ShopLeftSideBar = loadable(() => pMinDelay(import('./page/shop/shop-left-sidebar'), 250), { fallback: <Loader /> });
const OrderComplete = loadable(() => pMinDelay(import('./page/order/order-complete'), 250), { fallback: <Loader /> });
const CheckoutTwos = loadable(() => pMinDelay(import('./page/checkout/checkout-two'), 250), { fallback: <Loader /> });
const CustomerOrder = loadable(() => pMinDelay(import('./page/my-account/customer-order'), 250), { fallback: <Loader /> });
const CustomerAddress = loadable(() => pMinDelay(import('./page/my-account/customer-address'), 250), { fallback: <Loader /> });
const CustomerAccountDetails = loadable(() => pMinDelay(import('./page/my-account/customer-account-details'), 250), { fallback: <Loader /> });
const CallbackPage = loadable(() => pMinDelay(import('./components/CallbackPage'), 250), { fallback: <Loader /> });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    userManager.getUser()
    .then(user => {
      if (user!=null && !(user.expired)) {
        console.log("Access Token: ", user.access_token);
        console.log(">>User Profile: ", userProfile);
        var userProfile = {
          name: user.profile.name,
          role: user.profile.role,
          email: user.profile.preferred_username
        }  
        dispatch({ type: "user/login", payload: { user: userProfile, status: true } })
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.access_token;
      }
    });  
  }, [dispatch]);


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fashion />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/signout-callback-oidc" element={ <Navigate to="/" /> } />
          <Route path="/product-details-two/:id" element={<ProductDetailsTwos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactTwo />} />
          <Route path='/order-complete' element={<OrderComplete />} />
          <Route path="/checkout-two" element={<CheckoutTwos />} />
          <Route path="/my-account/customer-order" element={<CustomerOrder />} />
          <Route path="/my-account/customer-address" element={<CustomerAddress />} />
          <Route path="/my-account/customer-account-details" element={<CustomerAccountDetails />} />
          <Route path="/shop/shop-left-sidebar" element={<ShopLeftSideBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
