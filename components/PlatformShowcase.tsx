"use client";

import React from "react";
import { 
  SiTiktok, 
  SiInstagram, 
  SiX, 
  SiSnapchat, 
  SiYoutube, 
  SiFacebook, 
  SiTwitch, 
  SiPinterest
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const platforms = [
  { name: "TikTok", Icon: SiTiktok },
  { name: "Instagram", Icon: SiInstagram },
  { name: "X", Icon: SiX },
  { name: "Snapchat", Icon: SiSnapchat },
  { name: "YouTube", Icon: SiYoutube },
  { name: "Facebook", Icon: SiFacebook },
  { 
    name: "Kick", 
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.242 0A1.24 1.24 0 0 0 0 1.242v21.516A1.24 1.24 0 0 0 1.242 24h21.516A1.24 1.24 0 0 0 24 22.758V1.242A1.24 1.24 0 0 0 22.758 0H1.242zm6.21 4.97h3.105V8.04h3.105V4.97h3.105v6.21h-3.105v3.105h3.105v4.658h-3.105v-3.105h-3.105v3.105H7.452v-4.658h3.105v-3.105H7.452V4.97z" />
      </svg>
    )
  },
  { name: "Twitch", Icon: SiTwitch },
  { name: "LinkedIn", Icon: FaLinkedin },
  { name: "Pinterest", Icon: SiPinterest },
];

export default function PlatformShowcase() {
  return (
    <div className="w-full py-10 flex items-center justify-center gap-6 md:gap-8 flex-wrap">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="w-12 h-12 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,210,190,0.4)] cursor-pointer"
          title={platform.name}
        >
          <platform.Icon size={28} />
        </div>
      ))}
    </div>
  );
}
