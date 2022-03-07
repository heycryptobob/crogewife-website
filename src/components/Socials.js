import {
  FaTwitter,
  FaTelegram,
  // FaDiscord,
  // FaMedium,
  // FaGithub,
} from "react-icons/fa";

function Socials() {
  return (
    <div className="bg-gray-900 w-full border-b-white">
      <div className="container mx-auto px-8 lg:px-16 py-32">
        <h2 className="text-center text-emerald-500 uppercase text-2xl font-mono mb-12">
          Stay in touch
        </h2>
        <div className="flex gap-4 lg:gap-16 justify-center text-white text-2xl lg:text-5xl">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export function SocialLinks() {
  return (
    <>
      <a href="https://twitter.com/apy_bank" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://t.me/APYBank" target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>
      {/* <a href="" target="_blank" rel="noreferrer">
        <FaDiscord />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <FaMedium />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <FaGithub />
      </a> */}
    </>
  );
}

export default Socials;
