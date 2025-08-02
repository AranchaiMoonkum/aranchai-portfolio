export default function Information() {
    const paragraphs = [
        "I'm currently a third-year Software Engineering student at the University of Phayao. Throughout my studies, I’ve developed a strong interest in web development and enjoy working across different layers of the stack to build modern and efficient web applications",
        "I have hands-on experience with technologies such as Angular, React, Vue.js, Next.js, Nuxt, TypeScript, Prisma, Sass, and Tailwind CSS. Recently, I’ve been focusing more on back-end development, working with tools like Supabase, NextAuth.js, and Prisma through API routes in Next.js to handle authentication and database interactions effectively",
        "I'm always eager to explore new technologies and programming languages. I enjoy pushing myself to take on new challenges and continuously grow, both technically and professionally, as I work towards becoming a well-rounded developer",
    ]

    return (
        <main className="mt-28 gap-4 bg-slate-100 pt-4 pr-4 pb-4 pl-4 md:mt-40">
            <h2 className="hidden text-xs font-semibold tracking-widest text-slate-500 uppercase md:block">
                Information
            </h2>
            <article className="mt-4 flex flex-col gap-4 md:flex-row-reverse">
                <section className="w-1/3 md:flex md:items-center md:justify-center">
                    <img
                        alt="Profile Picture"
                        src="/profile/profile.jpg"
                        className="max-m-full aspect-[4/5] max-h-[300px] max-w-[300px] overflow-hidden rounded-md md:max-h-[400px] md:max-w-[400px]"
                    />
                </section>

                <section className="w-full md:w-2/3">
                    <h2 className="mb-4 block text-xs font-semibold tracking-widest text-slate-500 uppercase md:hidden">
                        Information
                    </h2>
                    <div className="font-ibm-serif flex flex-col gap-8 overflow-y-hidden text-2xl text-slate-700">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    )
}
