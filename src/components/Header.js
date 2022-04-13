import Logo from '../assets/title.png';
import LogoAlt from '../assets/logo.png';
import { SocialIcons } from './Socials';

function MenuItem({ title, url }) {

  const klass = "font-semibold hover:underline uppercase"

  return (
    <a className={klass} href={url}>{title}</a>
  )
}

function Menu() {
  return (
    <div className='text-xs md:text-sm flex gap-4 md:gap-8 items-center'>
      <MenuItem title="Buy" url="#" />
      <MenuItem title="Chart" url="#" />
      <a href="https://app.crogewife.com" target="_blank" rel="noreferrer" className="border-2 border-white rounded-lg p-2 bg-transparent font-semibold hover:bg-white hover:text-slate-800">dApp</a>
    </div>
  )
}

function Header() {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <img src={Logo} alt="logo" className='h-6 hidden md:block'/>
        <img src={LogoAlt} alt="logo" className='h-10 block md:hidden'/>
      </div>
      <div className="flex justify-end gap-8 items-center text-white text-xl">
        <Menu />
        {/* <SocialIcons /> */}
      </div>
    </div>
  )
}

export default Header;