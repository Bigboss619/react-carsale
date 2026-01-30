import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
import { AuthContextProvider } from "./context/AuthContext.jsx"
import store from "./store/store.js"
import './index.css'
import './components/plugins/all.js'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Listing from "./pages/Listing.jsx" // Assuming Listing is for Services
import Contact from "./pages/Contact.jsx"
import Agents from "./pages/Agents.jsx"
import Pricing from "./pages/Pricing.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import AgentLogin from "./pages/AgentLogin.jsx"
import AgentRegister from "./pages/AgentRegister.jsx"
import CustomerLogin from "./pages/CustomerLogin.jsx"
import CustomerRegister from "./pages/CustomerRegister.jsx"
import PrivateRoute from "./context/PrivateRoute.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/listing",
        element: <Listing />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/agents",
        element: <Agents />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard /> </PrivateRoute>
      },
      {
        path: "/agent-login",
        element: <AgentLogin />
      },
      {
        path: "/customer-login",
        element: <CustomerLogin />
      },
      {
        path: "/customer-register",
        element: <CustomerRegister />
      },
      {
        path: "/agent-register",
        element: <AgentRegister />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </Provider>
  </StrictMode>,
)
