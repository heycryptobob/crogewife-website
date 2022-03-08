import "./Footer.css";
import { SocialIcons } from "./Socials";


function Footer() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto px-8 lg:px-16 pb-16">
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-32 text-gray-300 font-light">
            <div className="flex flex-col gap-4">
              <h5 className="text-emerald-500 text-lg font-medium">Socials</h5>
              <SocialIcons hasText={true} />
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-emerald-500 text-lg font-medium">Learn</h5>
              <a href="https://apybank.gitbook.io/apy-bank-whitepaper/" target="_blank" rel="noreferrer" className="hover:text-white">Whitepaper</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
