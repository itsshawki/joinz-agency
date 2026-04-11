import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full py-16 bg-[#080f12] overflow-hidden border-t border-white/[0.08]">
      {/* Background Overlay Styles (Replicating Hero logic) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,204,155,0.05)_0%,transparent_70%)]" />
        
        {/* Wave Lines Pattern */}
        <svg 
          className="absolute top-0 left-0 w-full h-full opacity-[0.15]" 
          viewBox="0 0 1000 1000" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0,500 C150,300 350,700 500,500 S850,300 1000,500" fill="none" stroke="#16cc9b" strokeWidth="0.5" />
          <path d="M0,600 C200,400 400,800 600,600 S900,400 1000,600" fill="none" stroke="#16cc9b" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 pb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black text-white font-headline mb-4 tracking-tighter block"
            >
              Joinz
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
              Building Digital Trust & Authority. We provide expert solutions for social media verification and reputation.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/Joinz.Agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#16cc9b] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/joinz.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#16cc9b] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 2.67.121 3.943 1.397 4.063 4.063.056 1.265.072 1.648.072 4.851 0 3.203-.016 3.585-.072 4.85-.12 2.662-1.392 3.934-4.063 4.063-1.265.055-1.647.072-4.85.072-3.203 0-3.585-.017-4.85-.072-2.663-.12-3.938-1.39-4.063-4.063-.056-1.265-.072-1.647-.072-4.85 0-3.203.016-3.585.072-4.85.12-2.67 1.397-3.943 4.063-4.063 1.265-.055 1.648-.071 4.85-.071zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/201020366187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#16cc9b] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href="mailto:info@joinz.agency"
                className="text-gray-400 hover:text-[#16cc9b] transition-all duration-300"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Services</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/verification" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Verification</Link></li>
              <li><Link href="/services/reputation" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Reputation Management</Link></li>
              <li><Link href="/services/recovery" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Account Recovery</Link></li>
              <li><Link href="/services/username" className="text-gray-400 hover:text-[#16cc9b] text-sm transition-colors">Username Claim</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/[0.08]">
          <p className="text-center text-gray-500 text-xs text-balance">
            © 2022 - 2026 Joinz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
