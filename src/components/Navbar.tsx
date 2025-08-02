import { useRef, useState } from "react"

// router
import { NavLink } from "react-router"

export default function Navbar() {
    const [hoverPos, setHoverPos] = useState({ x: 0, width: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null)

    const handleHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const containerRect = menuRef.current?.getBoundingClientRect()
        if (!containerRect) return

        setHoverPos({
            x: rect.left - containerRect.left,
            width: rect.width,
        })
        setIsHovering(true)
    }

    const handleLeave = () => {
        setIsHovering(false)
    }

    return (
        <header className="fixed top-0 right-0 left-0 z-50 box-border w-full bg-slate-100/50 p-4 backdrop-blur-md">
            <nav className="grid grid-cols-2 items-center md:grid-cols-12">
                {/* Navbar title */}
                <div className="col-span-1 h-full text-slate-700 md:col-span-5">
                    <NavLink
                        to="/"
                        className="font-ibm-serif inline-flex h-full flex-col justify-center italic"
                    >
                        Aranchai Moonkum
                    </NavLink>
                </div>

                {/* Menu — hidden on small screens */}
                <ul
                    ref={menuRef}
                    className="relative col-span-5 hidden md:block"
                    onMouseLeave={handleLeave}
                >
                    {/* Background slider */}
                    <div
                        className={`pointer-events-none absolute top-0 h-full rounded bg-slate-200/65 backdrop-blur-sm transition-all duration-300 ${
                            isHovering ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            left: hoverPos.x,
                            width: hoverPos.width,
                        }}
                    ></div>

                    {/* Menu items */}
                    <div className="group relative flex gap-4">
                        {[
                            { label: "Portfolio", href: "/#portfolio" },
                            {
                                label: "Information",
                                to: "/information",
                                isNav: true,
                            },
                            {
                                label: "Contact",
                                href: "mailto:aranchai.moonkum.work@gmail.com",
                            },
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="font-ibm-serif p-1 text-base text-slate-500 italic transition-colors duration-200 group-hover:text-slate-400 hover:text-slate-700"
                                onMouseEnter={handleHover}
                            >
                                {item.isNav ? (
                                    <NavLink to={item.to!}>
                                        {item.label}
                                    </NavLink>
                                ) : (
                                    <a href={item.href}>{item.label}</a>
                                )}
                            </li>
                        ))}
                    </div>
                </ul>

                {/* Quote */}
                <span className="font-ibm-serif col-span-1 flex h-full items-center justify-end text-right text-base text-slate-700 italic md:col-span-2">
                    labor omnia vincit
                </span>
            </nav>
        </header>
    )
}
