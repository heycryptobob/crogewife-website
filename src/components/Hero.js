import Header from "./Header";
import "./Hero.css";
import LogoSVG from './LogoSVG';

function Hero() {
  return (
    <div className="hero w-full">
      <div className="container mx-auto px-8 md:px-16">
        <Header />
        <div className="pt-16 pb-32">
          <div className="flex">
            <div className="w-full lg:w-2/3">
              <div className="lg:invisible w-64 mb-8 lg:mb-0">
                <LogoSVG />
              </div>
              <h1 className="font-mono text-3xl lg:text-4xl text-white antialiased capitalize leading-relaxed lg:leading-loose">
                The world's leading decentralized{" "}
                <span className="underline decoration-emerald-500 capitalize">
                  auto-staking
                </span>{" "}
                &{" "}
                <span className="underline decoration-emerald-500 capitalize">
                  Auto-compounding
                </span>{" "}
                protocol.
              </h1>
              <ul className="mt-8 capitalize leading-relaxed lg:leading-loose text-gray-400 text-xl lg:text-2xl font-mono list-disc list-inside">
                <li>Highest Fixed APY - 333,333%</li>
                <li>Automatic Staking and Compounding</li>
                <li>Get Rewards Every 30 Minutes</li>
              </ul>

              <div className="mt-12">
                <a
                  href="https://apybank.gitbook.io/apy-bank-whitepaper/"
                  alt="APY Bank Whitepaper"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent hover:bg-emerald-500 hover:bg-opacity-50 text-emerald-500 font-semibold hover:text-emerald-50 py-4 px-6 border border-emerald-500 hover:border-emerald-50 rounded text-xl font-mono"
                >
                  Whitepaper
                </a>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x7f75b4f6215dc2d89132f2ff199cd3fdea55f6ef"
                  alt="Buy APY Bank Token"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 bg-transparent hover:bg-emerald-500 hover:bg-opacity-50 text-emerald-500 font-semibold hover:text-emerald-50 py-4 px-6 border border-emerald-500 hover:border-emerald-50 rounded text-xl font-mono"
                >
                  Buy
                </a>
                <a
                  href="https://app.apybank.net/"
                  alt="Buy APY Bank Token"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent hover:bg-emerald-500 hover:bg-opacity-50 text-emerald-500 font-semibold hover:text-emerald-50 py-4 px-6 border border-emerald-500 hover:border-emerald-50 rounded text-xl font-mono"
                >
                  App
                </a>
              </div>
              <div className="mt-12">
                <code className="p-4 border border-slate-400 text-slate-400 rounded bg-white bg-opacity-5">
                  <span className="mr-2">BSC:</span>
                  <span>0x7f75b4f6215dc2d89132f2ff199cd3fdea55f6ef</span>
                </code>
              </div>
            </div>
            <div className="w-0 lg:w-1/3">
              <LogoSVG />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
