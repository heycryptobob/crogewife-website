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
    url: "https://twitter.com/crogewife",
    icon: <FaTwitter />,
  },
  {
    name: "Telegram",
    url: "https://t.me/crogewife",
    icon: <FaTelegram />,
  },
  {
    name: "Discord",
    url: "https://discord.gg/crogewife",
    icon: <FaDiscord />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/crogewife",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/crogewife/",
    icon: <FaInstagram />,
  },
];

function Socials() {
  return (
    <div>
      <div className="container mx-auto px-8 lg:px-16 mt-8">
        <div className="flex gap-8 lg:gap-16 justify-center text-white text-2xl">
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
