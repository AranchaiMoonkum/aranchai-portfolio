export default function Pos() {
    const pos_images = ["/pos/pos_1.png", "/pos/pos_2.png", "/pos/pos_3.png"]

    const shopping_info = {
        title: "POS Buddy",
        description: "Point of Sale system for retail management",
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
    }

    return (
        <main className="mt-28 gap-4 bg-slate-100 pt-4 pr-4 pb-4 pl-4 md:mt-40">
            <div className="flex flex-col gap-4 md:flex-row">
                {/* Photos */}
                <section className="w-full md:w-2/3">
                    <div className="mb-8 flex flex-col gap-2 md:mb-0 md:gap-4">
                        {pos_images.map((image, index) => (
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
                            {shopping_info.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-2 pb-4 text-2xl text-slate-500">
                            {shopping_info.description}
                        </p>

                        {/* Roles and Technologies */}
                        <div className="mb-8 flex flex-wrap gap-1">
                            {/* Roles with distinct background */}
                            {shopping_info.roles.map((role) => (
                                <span
                                    key={`role-${role}`}
                                    className="rounded-md border border-slate-300 bg-slate-200/50 px-2 py-1 text-xs text-slate-700"
                                >
                                    {role}
                                </span>
                            ))}

                            {/* Technologies with lighter style */}
                            {shopping_info.technologies.map((tech) => (
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
                                Developed a Point of Sale (POS) system for
                                retail management with an emphasis on intuitive
                                user experience and efficient transaction
                                processing. Implemented secure authentication
                                using NextAuth.js and handled data operations
                                with Prisma ORM. The system supports full CRUD
                                functionality, allowing users to manage
                                categories and products, and track key business
                                metrics such as net sales, net expenses, gross
                                profit, and order volume. This project
                                strengthened my expertise in building secure,
                                scalable full-stack web applications.
                            </p>
                            <a
                                className="text-md mt-8 mb-4 cursor-pointer self-start rounded-md border border-slate-300 bg-slate-200/50 px-3 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-200"
                                href="https://www.figma.com/design/iWo7hSH0b4egy3UJ6BwTWT/POSBUDDY?node-id=0-1&t=7NQYeYX4Yqpcd0xU-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Spark UP on Figma
                            </a>
                            <a
                                className="text-slate-700 underline decoration-slate-700 underline-offset-2"
                                href="https://github.com/AranchaiMoonkum/pos-system-website"
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
