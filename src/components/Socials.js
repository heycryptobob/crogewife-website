import {
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  // FaDiscord,
  // FaMedium,
  // FaGithub,
} from "react-icons/fa";

export const socials = [
  {
    name: "Twitter",
    url: "https://twitter.com/apy_bank",
    icon: <FaTwitter />,
  },
  {
    name: "Telegram",
    url: "https://t.me/APYBank",
    icon: <FaTelegram />,
  },
  {
    name: "Discord",
    url: "https://discord.gg/8Ycqt9QRuF",
    icon: <FaDiscord />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/apybankbsc",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/apybank/",
    icon: <FaInstagram />,
  },
];

function Socials() {
  return (
    <div className="bg-gray-900 w-full border-b-white">
      <div className="container mx-auto px-8 lg:px-16 py-32">
        <h2 className="text-center text-emerald-500 uppercase text-2xl font-mono mb-12">
          Stay in touch
        </h2>
        <div className="flex gap-4 lg:gap-16 justify-center text-white text-2xl lg:text-5xl">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export function SocialIcons({ hasText }) {
  return (
    <>
      {socials.map(({ name, url, icon }, k) => (
        <a key={k} href={url} target="_blank" rel="noreferrer" className="flex items-center hover:text-white">
          {icon}
          { hasText ? <span className="ml-1 capitalize">{name}</span> : null }
        </a>
      ))}
    </>
  );
}

SocialIcons.defaultProps = {
  hasText: false
}

export default Socials;
