// router
import { NavLink } from "react-router"

// components
import Marquee from "../components/ui/Marquee"
import Carousel from "../components/ui/Carousel"

// motion
import { motion } from "motion/react"

export default function Home() {
    return (
        <main className="mt-20 bg-slate-100 pt-2 pr-4 pb-4 pl-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.4,
                        },
                    },
                }}
                className="font-ibm-serif flex flex-col px-8 !overflow-hidden mask-x-from-90% mask-x-to-100% text-4xl leading-loose text-slate-700 md:text-7xl lg:text-9xl"
            >
                <motion.span
                    variants={{
                        hidden: { translateX: "-100%", opacity: 0 },
                        visible: {
                            translateX: 0,
                            opacity: 1,
                            transition: {
                                duration: 1.8,
                                ease: [0.33, 1, 0.68, 1],
                            },
                        },
                    }}
                    className="will-change-transform"
                >
                    Crafting Beautiful
                </motion.span>
                <motion.span
                    variants={{
                        hidden: { translateX: "100%", opacity: 0 },
                        visible: {
                            translateX: 0,
                            opacity: 1,
                            transition: {
                                duration: 1.8,
                                ease: [0.33, 1, 0.68, 1],
                            },
                        },
                    }}
                    className="text-right will-change-transform"
                >
                    Functional
                </motion.span>
                <motion.span
                    variants={{
                        hidden: { translateX: "-100%", opacity: 0 },
                        visible: {
                            translateX: 0,
                            opacity: 1,
                            transition: {
                                duration: 1.8,
                                ease: [0.33, 1, 0.68, 1],
                            },
                        },
                    }}
                    className="will-change-transform"
                >
                    Web Experiences
                </motion.span>
            </motion.div>

            {/* Introduction */}
            <section className="mt-20 mb-20 max-w-4xl py-4">
                <h2 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Introduction
                </h2>
                <p className="font-ibm-serif mt-2 text-2xl !leading-relaxed text-slate-700">
                    I'm a Software Engineering student at the University of
                    Phayao with a strong interest in both front-end and back-end
                    development. I enjoy working across the full stack to create
                    practical, user-focused applications
                </p>
                <NavLink to="/information">
                    <button className="text-md mt-8 cursor-pointer rounded-md border border-slate-300 bg-slate-200/50 px-3 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-200">
                        Information
                    </button>
                </NavLink>
            </section>

            {/* Skills */}
            <section className="mb-16" id="skills">
                <h2 className="border-t border-t-slate-300 pt-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Skills
                </h2>
                <Marquee />
            </section>

            {/* Carousel */}
            <Carousel />
        </main>
    )
}
