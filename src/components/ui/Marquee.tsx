export default function Marquee() {
    const icons = [
        "angular.svg",
        "next.js_wordmark_light.svg",
        "react_light.svg",
        "sass.svg",
        "tailwindcss.svg",
        "typescript.svg",
        "vue.svg",
        "supabase.svg",
    ]

    const icons_2 = [
        "vscode.svg",
        "neovim.svg",
        "postman.svg",
        "github_light.svg",
        "java.svg",
        "python.svg",
        "markdown_light.svg",
        "zod.svg",
    ]

    return (
        <article className="mt-4">
            {/* Left to right */}
            <section
                className="relative mx-auto mt-8 flex h-24 gap-5 overflow-hidden"
                id="marquee-group"
            >
                {icons.map((icon, index) => {
                    return (
                        <img
                            key={index}
                            src={`/icons/${icon}`}
                            alt={icon.split(".")[0]}
                            className="animate-scroll-right absolute right-[max(calc(112px*8),100%))] h-24 w-24"
                        />
                    )
                })}
            </section>

            {/* Right to left */}
            <section
                className="relative mx-auto mt-8 flex h-24 gap-5 overflow-hidden"
                id="marquee-group"
            >
                {icons_2.map((icon, index) => {
                    return (
                        <img
                            key={index}
                            src={`/icons/${icon}`}
                            alt={icon.split(".")[0]}
                            className="animate-scroll-left absolute left-[max(calc(128px*8),100%))] h-24 w-24"
                        />
                    )
                })}
            </section>
        </article>
    )
}
