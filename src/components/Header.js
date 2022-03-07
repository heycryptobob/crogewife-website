import Logo from '../logo.jpeg';
import { SocialLinks } from './Socials';

function Header() {
  return (
    <div className="flex justify-between pt-6">
      <div>
        <img src={Logo} alt="logo" className='w-12 h-12 rounded border-2'/>
      </div>
      <div className="flex justify-end gap-4 items-center text-white text-xl">
        <SocialLinks />
      </div>
    </div>
  )
}

export default Header;