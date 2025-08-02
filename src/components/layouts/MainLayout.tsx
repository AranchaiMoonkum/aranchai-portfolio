import { Outlet } from "react-router"

// components
import Navbar from "../Navbar"
import Footer from "../Footer"

// effects
import ScrollToTop from "../effects/ScrollToTop"

export default function MainLayout() {
    return (
        <>

            {/* Navbar */}
            <Navbar />

            <ScrollToTop />

            {/* Main content */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </>
    )
}
