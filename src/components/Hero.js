import Header from "./Header";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero w-full">
      <div className="container mx-auto px-16 h-screen">
        <Header />
        <div className="flex flex-col place-content-center h-full">
          <div className="flex animate-fade">
            <div className="w-2/3">
              <h1 className="font-mono text-4xl text-white antialiased capitalize leading-relaxed">
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
              <ul className="mt-8 capitalize leading-loose text-gray-400 text-2xl font-mono list-disc list-inside">
                <li>Highest Fixed APY - 333,333%</li>
                <li>Automatic Staking and Compounding</li>
                <li>Get Rewards Every 30 Minutes</li>
              </ul>

              <div className="mt-12">
                <a
                  href="https://apybank.gitbook.io/apy-bank-whitepaper/"
                  alt="APY Bank Whitepaper"
                  className="bg-transparent hover:bg-emerald-500 hover:bg-opacity-50 text-emerald-500 font-semibold hover:text-emerald-50 py-4 px-6 border border-emerald-500 hover:border-emerald-50 rounded text-xl font-mono"
                >
                  Whitepaper
                </a>
              </div>
            </div>
            <div className="w-1/3">
<svg width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>apy-bank</title>
    <g id="apy-bank" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group-2" transform="translate(218.000000, 132.000000)" stroke="#FFFFFF" strokeWidth="4">
            <path d="M32,-0.953470933 C33.2899547,-0.953470933 34.5799093,-0.538718911 35.6582646,0.290785132 L35.6582646,0.290785132 L55.8977768,15.8596407 C57.2110392,16.8698425 57.99051,18.3167135 58.1891147,19.8393495 C58.3877194,21.3619856 58.005458,22.9603868 56.9952561,24.2736492 C55.8594784,25.7501603 54.1023263,26.6153846 52.2395122,26.6153846 L52.2395122,26.6153846 L11.7604878,26.6153846 C10.1036335,26.6153846 8.60363354,25.9438117 7.5178471,24.8580253 C6.43206066,23.7722389 5.76048779,22.2722389 5.76048779,20.6153846 C5.76048779,18.7525705 6.6257121,16.9954185 8.10222322,15.8596407 L8.10222322,15.8596407 L28.3417354,0.290785132 C29.4200907,-0.538718911 30.7100453,-0.953470933 32,-0.953470933 Z" id="Triangle" className="svg-elem-1"></path>
            <line x1="10.0923077" y1="34.4615385" x2="10.0923077" y2="54.1538462" id="Path-2" strokeLinecap="round" className="svg-elem-2"></line>
            <line x1="24.8615385" y1="34.4615385" x2="24.8615385" y2="54.1538462" id="Path-2-Copy" strokeLinecap="round" className="svg-elem-3"></line>
            <line x1="39.1384615" y1="34.4615385" x2="39.1384615" y2="54.1538462" id="Path-2-Copy-2" strokeLinecap="round" className="svg-elem-4"></line>
            <line x1="53.9076923" y1="34.4615385" x2="53.9076923" y2="54.1538462" id="Path-2-Copy-3" strokeLinecap="round" className="svg-elem-5"></line>
            <rect id="Rectangle" x="0" y="61.5384615" width="64" height="9.84615385" rx="4" className="svg-elem-6"></rect>
        </g>
        <g id="Group" transform="translate(44.000000, 223.000000)" fill="#10B981" fillRule="nonzero" stroke="#10B981" strokeWidth="2">
            <path d="M34.704,34.128 L28.368,16.056 L22.032,34.128 L34.704,34.128 Z M38.448,44.856 L18.288,44.856 L15.048,54.288 L0,54.288 L20.664,0 L36.072,0 L56.736,54.288 L41.688,54.288 L38.448,44.856 Z" id="Shape" className="svg-elem-7"></path>
            <path d="M77.04,24.912 L81.72,24.912 C86.904,24.912 89.496,22.656 89.496,18.144 C89.496,13.632 86.904,11.376 81.72,11.376 L77.04,11.376 L77.04,24.912 Z M77.04,54.288 L62.928,54.288 L62.928,0 L85.392,0 C91.488,0 96.156,1.584 99.396,4.752 C102.636,7.92 104.256,12.384 104.256,18.144 C104.256,23.904 102.636,28.368 99.396,31.536 C96.156,34.704 91.488,36.288 85.392,36.288 L77.04,36.288 L77.04,54.288 Z" id="Shape" className="svg-elem-8"></path>
            <polygon id="Path" points="124.848 28.224 105.048 0 121.896 0 131.976 14.832 141.984 0 158.832 0 138.96 28.224 138.96 54.288 124.848 54.288" className="svg-elem-9"></polygon>
            <path d="M202.392,43.344 L205.488,43.344 C209.04,43.344 211.584,42.888 213.12,41.976 C214.656,41.064 215.424,39.6 215.424,37.584 C215.424,35.568 214.656,34.104 213.12,33.192 C211.584,32.28 209.04,31.824 205.488,31.824 L202.392,31.824 L202.392,43.344 Z M202.392,21.312 L204.984,21.312 C209.4,21.312 211.608,19.56 211.608,16.056 C211.608,12.552 209.4,10.8 204.984,10.8 L202.392,10.8 L202.392,21.312 Z M188.28,0 L209.304,0 C214.296,0 218.088,1.2 220.68,3.6 C223.272,6 224.568,9.456 224.568,13.968 C224.568,16.704 224.076,18.972 223.092,20.772 C222.108,22.572 220.608,24.096 218.592,25.344 C220.608,25.728 222.324,26.316 223.74,27.108 C225.156,27.9 226.308,28.872 227.196,30.024 C228.084,31.176 228.72,32.472 229.104,33.912 C229.488,35.352 229.68,36.888 229.68,38.52 C229.68,41.064 229.236,43.32 228.348,45.288 C227.46,47.256 226.212,48.912 224.604,50.256 C222.996,51.6 221.04,52.608 218.736,53.28 C216.432,53.952 213.84,54.288 210.96,54.288 L188.28,54.288 L188.28,0 Z" id="Shape" className="svg-elem-10"></path>
            <path d="M266.832,34.128 L260.496,16.056 L254.16,34.128 L266.832,34.128 Z M270.576,44.856 L250.416,44.856 L247.176,54.288 L232.128,54.288 L252.792,0 L268.2,0 L288.864,54.288 L273.816,54.288 L270.576,44.856 Z" id="Shape" className="svg-elem-11"></path>
            <polygon id="Path" points="295.056 54.288 295.056 0 309.168 0 335.232 33.192 335.232 0 349.272 0 349.272 54.288 335.232 54.288 309.168 21.096 309.168 54.288" className="svg-elem-12"></polygon>
            <polygon id="Path" points="374.76 22.392 391.968 0 409.392 0 387.864 25.704 411.408 54.288 393.12 54.288 374.76 30.744 374.76 54.288 360.648 54.288 360.648 0 374.76 0" className="svg-elem-13"></polygon>
        </g>
    </g>
</svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
