/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../logo.png";
import Socials from "../components/Socials"

const list = [
  { title: "Token" },
  { title: "Tax" },
  { title: "NFT" },
  { title: "P2E" },
  { title: "Staking" },
];

function Hero() {
  return (
    <div className="hero w-full h-screen bg-indigo-900 antialiased">
      <div className="container mx-auto px-4 md:px-4 md:w-3/4 lg:w-1/2">
        <div className="flex justify-center">
          <img src={Logo} className="max-h-96" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-evenly text-indigo-100 font-semibold">
            {list.map((item) => (
              <div>
                <a href="#" className="hover:underline">{item.title}</a>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="bg-indigo-400 py-2 px-8 rounded-full bg-opacity-20 text-xs text-center text-indigo-50 w-fit">
              Stealth launch April 13th - Cronos Chain
            </div>
          </div>
          <div className="flex justify-center gap-8 lg:gap-16 text-center font-semibold">
            <a
              href="#"
              className="basis-1/2 xl:basis-1/4 rounded-full bg-green-400 text-green-50 hover:bg-green-500 py-2"
            >
              Buy
            </a>
            <a
              href="#"
              className="basis-1/2 xl:basis-1/4 rounded-full bg-indigo-500 text-green-50 hover:bg-indigo-600 py-2"
            >
              Chart
            </a>
          </div>
          <div>
            <Socials />
          </div>
          <div className="text-center text-indigo-50">
            <button className="antialiased">How To: Bridge assets to Cronos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
