export default function Sparkup() {
    const sparkup_images = [
        "/sparkup/sparkup_1.png",
        "/sparkup/sparkup_2.png",
        "/sparkup/sparkup_3.png",
        "/sparkup/sparkup_4.png",
    ]

    const sparkup_info = {
        title: "Spark UP",
        description: "An e-commerce platform for pre-owned computer hardware",
        roles: ["Development"],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn/ui",
            "Prisma",
            "Supabase",
        ],
    }

    return (
        <main className="mt-28 gap-4 bg-slate-100 pt-4 pr-4 pb-4 pl-4 md:mt-40">
            <div className="flex flex-col gap-4 md:flex-row">
                {/* Photos */}
                <section className="w-full md:w-2/3">
                    <div className="mb-8 flex flex-col gap-2 md:mb-0 md:gap-4">
                        {sparkup_images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={image}
                                    className="h-full w-full rounded-md object-cover"
                                    alt={`Shopping Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Information */}
                <section className="flex w-full flex-col md:w-1/3">
                    <div className="sticky top-24">
                        {/* Title */}
                        <h2 className="text-2xl text-slate-700">
                            {sparkup_info.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-2 pb-4 text-2xl text-slate-500">
                            {sparkup_info.description}
                        </p>

                        {/* Roles and Technologies */}
                        <div className="mb-8 flex flex-wrap gap-1">
                            {/* Roles with distinct background */}
                            {sparkup_info.roles.map((role) => (
                                <span
                                    key={`role-${role}`}
                                    className="rounded-md border border-slate-300 bg-slate-200/50 px-2 py-1 text-xs text-slate-700"
                                >
                                    {role}
                                </span>
                            ))}

                            {/* Technologies with lighter style */}
                            {sparkup_info.technologies.map((tech) => (
                                <span
                                    key={`tech-${tech}`}
                                    className="rounded-md border border-slate-300 bg-slate-100 px-2 py-1 text-xs text-slate-500"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* What I did */}
                        <div className="flex flex-col">
                            <h3 className="border-t border-t-slate-300 py-4 text-slate-700">
                                What I did
                            </h3>
                            <p className="font-ibm-serif text-slate-500">
                                I developed the entire e-commerce platform using
                                Next.js and TypeScript. Implemented a responsive
                                easy-to-use interface with Tailwind CSS and
                                Shadcn/ui. Utilized Prisma for database
                                management and Supabase for backend services.
                                The platform allows users to buy and sell
                                pre-owned computer hardware, providing a
                                seamless experience for both buyers and sellers.
                                Connected with Stripe for payment processing and
                                integrated a user-friendly admin panel for
                                managing listings and transactions.
                            </p>
                            <a
                                className="text-md mt-8 mb-4 cursor-pointer self-start rounded-md border border-slate-300 bg-slate-200/50 px-3 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-200"
                                href="https://www.figma.com/design/a5H753Sy32naDHeBCoGSMU/Design?node-id=9-706&t=iC4CM3u3oMQwGU2u-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Spark UP on Figma
                            </a>
                            <a
                                className="text-slate-700 underline decoration-slate-700 underline-offset-2"
                                href="https://github.com/AranchaiMoonkum/spark-up"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source Code on Github
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
