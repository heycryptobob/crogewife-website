import Logo from '../assets/title.png';
import LogoAlt from '../assets/logo.png';

function MenuItem({ title, url }) {

  const klass = "font-semibold hover:underline uppercase"

  return (
    <a className={klass} href={url}>{title}</a>
  )
}

function Menu() {
  return (
    <div className='text-xs md:text-sm flex gap-4 md:gap-8 items-center'>
      <MenuItem title="Buy" url="https://mm.finance/swap?outputCurrency=0x8f11f9918b613CE9c9220A6F32cbf796e1761c32" />
      <MenuItem title="Chart" url="https://dexscreener.com/cronos/0x1c49efec84948d109b429901ac6df3f316ee500f" />
      <a href="https://app.crogewife.com" target="_blank" rel="noreferrer" className="border-2 border-white rounded-lg px-4 py-2 bg-transparent font-semibold hover:bg-white hover:text-slate-800 uppercase">app</a>
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