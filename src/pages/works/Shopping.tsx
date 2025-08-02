export default function Shopping() {
    const shopping_images = [
        "/shopping/shopping_1.png",
        "/shopping/shopping_2.png",
        "/shopping/shopping_3.png",
        "/shopping/shopping_4.png",
    ]

    const shopping_info = {
        title: "Shopping Website",
        description: "E-commerce platform for online shopping",
        roles: ["Design", "Development"],
        technologies: ["Angular", "TypeScript", "Sass", "Angular Material UI"],
    }

    return (
        <main className="mt-28 gap-4 bg-slate-100 pt-4 pr-4 pb-4 pl-4 md:mt-40">
            <div className="flex flex-col gap-4 md:flex-row">
                {/* Photos */}
                <section className="w-full md:w-2/3">
                    <div className="mb-8 flex flex-col gap-2 md:mb-0 md:gap-4">
                        {shopping_images.map((image, index) => (
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
                                I designed and developed this e-commerce
                                platform using Angular and TypeScript. The site
                                features an intuitive interface built with
                                Angular Material components, allowing users to
                                browse products, add items to their cart, and
                                complete purchases with ease. I implemented a
                                responsive design to ensure a smooth experience
                                across both desktop and mobile devices. Key
                                features include product search, filtering,
                                efficient state management to avoid unnecessary
                                re-renders, and a secure checkout process.
                                Styling was handled with Sass to keep the
                                codebase clean and maintainable. Data is fetched
                                from the API using Observables for a reactive
                                and efficient data flow.
                            </p>
                            <a
                                className="text-md mt-8 mb-4 cursor-pointer self-start rounded-md border border-slate-300 bg-slate-200/50 px-3 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-200"
                                href="https://aing-shopping-angular.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                aing-shopping-angular.web.app
                            </a>
                            <a
                                className="text-slate-700 underline decoration-slate-700 underline-offset-2"
                                href="https://github.com/AranchaiMoonkum/shopping-angular"
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
