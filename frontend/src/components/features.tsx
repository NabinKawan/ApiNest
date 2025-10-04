const features = [
    {
        icon: '📦',
        title: 'Simple Buckets',
        description:
            'Paste your JSON and—<strong>BOOM!</strong>—an instant endpoint. Zero hassle, all giggles. 😄',
    },
    {
        icon: '🔗',
        title: 'Custom Endpoints',
        description:
            'Unique URLs like <span className="text-orange-600 font-bold bg-yellow-300 px-1 rounded">/username/projects</span>. Yours to play with! 🎮',
    },
    {
        icon: '📖',
        title: 'Auto Docs',
        description:
            'Swagger-style docs, but with playful vibes. Test and share with flair and a sprinkle of magic! ✨',
    },
];

function FeatureCard({
    icon,
    title,
    description,
    delay = 0,
}: {
    icon: string;
    title: string;
    description: string;
    delay?: number;
}) {
    return (
        <div className="group rounded-3xl border-4 border-orange-400 bg-gradient-to-b from-orange-50 to-yellow-50 p-8 shadow-[6px_6px_0px_#000000] transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_#000000]">
            <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-400 text-2xl shadow-[3px_3px_0px_#000000] transition-transform group-hover:scale-110"
                style={{ animationDelay: `${delay}ms` }}
            >
                {icon}
            </div>
            <h4 className="mb-4 text-2xl font-black text-orange-700">
                {title}
            </h4>
            <p
                className="font-medium leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="relative z-10 mt-32 px-6 md:px-20">
            <h3 className="mb-16 text-center text-4xl font-black text-gray-900">
                Why NestAPI? 🤔
            </h3>
            <div className="grid gap-12 md:grid-cols-3">
                {features.map(({ icon, title, description }, index) => (
                    <FeatureCard
                        key={title}
                        icon={icon}
                        title={title}
                        description={description}
                        delay={index * 200}
                    />
                ))}
            </div>
        </section>
    );
}
