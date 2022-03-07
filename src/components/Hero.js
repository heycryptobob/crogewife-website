import "./Hero.css";

function Hero() {
  return (
    <div className="hero w-full">
      <div className="container mx-auto px-16">
        <div className="flex flex-col place-content-center min-h-screen">
          <div className="flex">
            <div className="flex-auto w-96">
              <h1 className="font-mono text-4xl text-white antialiased capitalize leading-relaxed">
                The world's leading decentralized{" "}
                <span className="text-emerald-400 capitalize">
                  auto-staking
                </span>{" "}
                & &nbsp;
                <span className="text-emerald-400 capitalize">
                  Auto-compounding
                </span>{" "}
                protocol.
              </h1>
              <ul className="mt-8 capitalize text-gray-400 text-2xl font-mono list-disc list-inside">
                <li>Highest Fixed APY - 333,333%</li>
                <li>Automatic Staking and Compounding</li>
                <li>Get Rewards Every 30 Minutes</li>
              </ul>

              <div className="mt-12">
                <a
                  href="https://apybank.gitbook.io/apy-bank-whitepaper/"
                  alt="APY Bank Whitepaper"
                  class="bg-transparent hover:bg-emerald-500 hover:bg-opacity-50 text-emerald-500 font-semibold hover:text-emerald-50 py-4 px-6 border border-emerald-500 hover:border-emerald-50 rounded text-xl font-mono"
                >
                  Whitepaper
                </a>
              </div>
            </div>
            <div className="flex-auto w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
