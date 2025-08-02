import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"

// styles
import "./index.css"

// layouts
import MainLayout from "./components/layouts/MainLayout.tsx"

// pages
import Home from "./pages/Home.tsx"
import Information from "./pages/Information.tsx"
import Shopping from "./pages/works/Shopping.tsx"
import Pos from "./pages/works/Pos.tsx"
import Sparkup from "./pages/works/Sparkup.tsx"

const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "/information", Component: Information },
            { path: "/work/shopping", Component: Shopping },
            { path: "/work/pos-buddy", Component: Pos },
            { path: "/work/spark-up", Component: Sparkup },
        ],
    },
])

const root = document.getElementById("root")

createRoot(root!).render(
    <RouterProvider router={router} />
)
