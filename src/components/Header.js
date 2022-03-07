import { FaTwitter, FaTelegram, FaDiscord, FaMedium, FaGithub } from 'react-icons/fa';
import Logo from '../logo.png';

function Header() {
  return (
    <div className="flex justify-between pt-6">
      <div>
        <img src={Logo} alt="logo" className='w-12 h-12 rounded border-2'/>
      </div>
      <div className="flex justify-end gap-4 items-center">
          <a href="" className='text-white text-xl'><FaTwitter /></a>
          <a href="" className='text-white text-xl'><FaTelegram /></a>
          <a href="" className='text-white text-xl'><FaDiscord /></a>
          <a href="" className='text-white text-xl'><FaMedium /></a>
          <a href="" className='text-white text-xl'><FaGithub /></a>
      </div>
    </div>
  )
}

export default Header;