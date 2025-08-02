import { useState } from "react"

// icons
import { Check, Copy } from "lucide-react"

export default function Footer() {
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("aranchai.moonkum.work@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 700)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <section className="p-4" id="contact">
            <footer className="grid grid-cols-1 gap-2 border-t border-t-slate-300 pt-4 md:grid-cols-12">
                <h2 className="col-span-5 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Contact
                </h2>
                <div className="col-span-7">
                    {/* Description */}
                    <div className="mb-12">
                        <p className="text-2xl text-slate-700">
                            Designed the website with a minimalist approach by
                            utilizing a single Slate color palette, ensuring a
                            clean, cohesive, and visually consistent user
                            experience
                        </p>
                    </div>

                    {/* Mail */}
                    <div className="hidden md:flex flex-row items-center justify-between gap-4 border-t border-t-slate-300 pt-4 pb-12">
                        <div className="flex flex-col">
                            <a
                                className="cursor-pointer self-start text-slate-700"
                                href="mailto:aranchai.moonkum.work@gmail.com"
                            >
                                Mail
                            </a>
                        </div>
                        <button
                            className="inline-flex cursor-pointer items-center justify-center rounded px-1.5 py-1 text-slate-500 transition-colors duration-200 hover:bg-slate-200"
                            onClick={handleCopy}
                        >
                            <span className="text-base">
                                aranchai.moonkum.work@gmail.com
                            </span>
                            {copied ? (
                                <Check size={16} className="ml-2" />
                            ) : (
                                <Copy size={16} className="ml-2" />
                            )}
                        </button>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-row border-t border-t-slate-300 pt-4">
                        <div className="group flex flex-col">
                            <a
                                className="cursor-pointer text-slate-500 transition-colors duration-200 group-hover:text-slate-400 hover:text-slate-700"
                                href="https://www.linkedin.com/in/aranchai-moonkum-57b60832b/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                            <a
                                className="cursor-pointer text-slate-500 transition-colors duration-200 group-hover:text-slate-400 hover:text-slate-700"
                                href="https://www.instagram.com/arnxhi/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                            <a
                                className="cursor-pointer text-slate-500 transition-colors duration-200 group-hover:text-slate-400 hover:text-slate-700"
                                href="https://github.com/AranchaiMoonkum/"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="mt-12 box-border gap-4 bg-slate-100 md:grid md:grid-cols-12">
                <p className="col-span-5 text-sm text-slate-500 uppercase">
                    Designed & Coded by
                    <a
                        href="https://www.instagram.com/arnxhi/"
                        target="_blank"
                        className="cursor-pointer pl-1 text-right text-sm text-slate-500 uppercase transition-colors duration-200 hover:text-slate-700"
                    >
                        Aranchai Moonkum
                    </a>
                </p>
                <p className="col-span-5 text-sm text-slate-500 uppercase">
                    Updated August 2025
                </p>
                <button
                    onClick={scrollToTop}
                    className="col-span-2 cursor-pointer text-right text-sm text-slate-500 uppercase transition-colors duration-200 hover:text-slate-700"
                >
                    Go to top
                </button>
            </section>
        </section>
    )
}
