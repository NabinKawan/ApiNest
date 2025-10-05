const features = [
    {
        icon: '📦',
        title: 'JSON to API',
        description:
            'Upload your JSON data and—<strong>BOOM!</strong>—get instant REST endpoints with full CRUD operations. Zero setup required! 😄',
    },
    {
        icon: '🔗',
        title: 'Custom Endpoints',
        description:
            'Get unique URLs like <span className="text-orange-600 font-bold bg-yellow-300 px-1 rounded">/api/users</span> and <span className="text-orange-600 font-bold bg-yellow-300 px-1 rounded">/api/products</span> automatically generated from your data! 🎮',
    },
    {
        icon: '📖',
        title: 'Auto Documentation',
        description:
            'Beautiful Swagger-style API docs generated automatically. Test your endpoints with our interactive playground! ✨',
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
        <div className="group rounded-4xl border-4 border-orange-400 bg-gradient-to-b from-orange-50 to-yellow-50 p-6 shadow-cartoon transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-cartoon-lg">
            <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400 text-xl shadow-cartoon transition-transform group-hover:scale-110"
                style={{ animationDelay: `${delay}ms` }}
            >
                {icon}
            </div>
            <h4 className="mb-3 font-fredoka text-lg font-black text-orange-700">
                {title}
            </h4>
            <p
                className="text-sm font-medium leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="relative z-10 mt-32 px-6 md:px-20">
            <h3 className="mb-12 text-center font-fredoka text-2xl font-black text-gray-900">
                Why ApiNest? 🤔
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
