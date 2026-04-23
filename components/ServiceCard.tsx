import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  slug,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group block">
      <div className="service-card glass-card rounded-3xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
        {/* Subtle hover glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-surface-container border border-outline/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-2xl">
              {icon}
            </span>
          </div>
          <h3 className="font-headline font-bold text-xl text-on-surface mb-3">
            {title}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-4 transition-all relative z-10">
          Explore service
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
