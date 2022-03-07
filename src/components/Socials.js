import { FaTwitter, FaTelegram, FaDiscord, FaMedium, FaGithub } from 'react-icons/fa';

function Socials() {
  return (
    <div className="bg-gray-900 w-full border-b-white">
      <div className="container mx-auto px-16 py-32">
      <h2 className="text-center text-emerald-500 uppercase text-2xl font-mono mb-12">
        Stay in touch
        </h2>
        <div className="flex gap-16 justify-center">
          <a href="" className='text-white text-5xl'><FaTwitter /></a>
          <a href="" className='text-white text-5xl'><FaTelegram /></a>
          <a href="" className='text-white text-5xl'><FaDiscord /></a>
          <a href="" className='text-white text-5xl'><FaMedium /></a>
          <a href="" className='text-white text-5xl'><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
