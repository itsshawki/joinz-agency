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
      <div className="service-card glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl">
            {icon}
          </span>
        </div>
        <h3 className="font-headline font-bold text-xl text-white mb-3">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="mt-auto flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-4 transition-all">
          Explore service
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
