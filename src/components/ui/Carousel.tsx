// router
import { NavLink } from "react-router"

// swiper
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Navigation, Mousewheel } from "swiper/modules"

// icons
import { MoveLeft, MoveRight } from "lucide-react"
import { useRef, useState } from "react"

export default function Carousel() {
    const [hover, setHover] = useState(false)
    const [hoverRect, setHoverRect] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    })
    const containerRef = useRef<HTMLDivElement>(null)

    const portfolioItems = [
        {
            id: 1,
            title: "Shopping Website",
            description: "E-commerce platform for online shopping",
            path: "work/shopping",
            image: "/shopping/shopping_1.png",
            roles: ["Design", "Development"],
            technologies: [
                "Angular",
                "TypeScript",
                "Sass",
                "Angular Material UI",
            ],
        },
        {
            id: 2,
            title: "POS Buddy",
            description: "Point of Sale system for retail management",
            path: "work/pos-buddy",
            image: "/pos/pos_2.png",
            roles: ["Development"],
            technologies: [
                "Next.js",
                "NextAuth.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn/ui",
                "Prisma",
                "Neon",
            ],
        },
        {
            id: 3,
            title: "Spark UP",
            description:
                "An e-commerce platform for pre-owned computer hardware",
            path: "work/spark-up",
            image: "/sparkup/sparkup_3.png",
            roles: ["Development"],
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn/ui",
                "Prisma",
                "Supabase",
            ],
        },
    ]

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!containerRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const imageDiv = e.currentTarget.querySelector(
            ".image-container"
        ) as HTMLElement
        if (!imageDiv) return

        const rect = imageDiv.getBoundingClientRect()
        const padding = 6

        setHoverRect({
            left: rect.left - containerRect.left - padding,
            top: rect.top - containerRect.top - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
        })
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    return (
        <section className="mb-8 md:mb-16" id="portfolio">
            <h2 className="flex items-center justify-between border-t border-t-slate-300 pt-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Portfolio
                <div className="flex gap-1.5">
                    <button className="swiper-button-prev cursor-pointer rounded p-1 transition-colors duration-100 hover:bg-slate-300/50 disabled:cursor-default disabled:text-slate-300 disabled:hover:bg-transparent">
                        <MoveLeft size={16} />
                    </button>
                    <button className="swiper-button-next cursor-pointer rounded p-1 transition-colors duration-100 hover:bg-slate-300/50 disabled:cursor-default disabled:text-slate-300 disabled:hover:bg-transparent">
                        <MoveRight size={16} />
                    </button>
                </div>
            </h2>

            <div ref={containerRef} className="relative mt-8">
                {/* Hover background */}
                <div
                    className={`pointer-events-none absolute rounded-xl bg-slate-200 transition-all duration-300 ease-in-out ${
                        hover ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        left: hoverRect.left,
                        top: hoverRect.top,
                        width: hoverRect.width,
                        height: hoverRect.height,
                    }}
                ></div>

                <Swiper
                    direction="horizontal"
                    slidesPerView="auto"
                    spaceBetween={20}
                    mousewheel={{ enabled: true, forceToAxis: true }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    watchOverflow={true}
                    loop={false}
                    modules={[Mousewheel, Navigation]}
                >
                    {portfolioItems.map((item) => (
                        <SwiperSlide className="!w-[45%]" key={item.id}>
                            <NavLink
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                to={`/${item.path}`}
                            >
                                <div className="image-container relative z-10 aspect-[16/9]">
                                    <img
                                        src={item.image}
                                        className="object-fit h-full w-full rounded-md"
                                        alt={item.title}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-md mt-2 text-slate-700">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="pb-4 text-sm text-slate-500">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                    {/* Roles with distinct background */}
                                    {item.roles.map((role) => (
                                        <span
                                            key={`role-${role}`}
                                            className="rounded-md border border-slate-300 bg-slate-200/50 px-2 py-1 text-xs text-slate-700"
                                        >
                                            {role}
                                        </span>
                                    ))}

                                    {/* Technologies with lighter style */}
                                    {item.technologies.map((tech) => (
                                        <span
                                            key={`tech-${tech}`}
                                            className="rounded-md border border-slate-300 bg-slate-100 px-2 py-1 text-xs text-slate-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
