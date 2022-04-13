/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "../components/Header";
import CronosWhite from "../assets/cronos-white.svg";
import Logo from "../assets/logo.png";

function Button({ title, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="basis-1/2 lg:basis-1/4 rounded-lg border-2 border-white hover:border-green-400 hover:text-green-400 px-4 py-2 uppercase"
    >
      {title}
    </a>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-600 border-b-2">
      <div className="container mx-auto px-4 md:px-4 md:w-4/5">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 py-16">
          <div className="text-white">
            <p className="text-2xl py-4">
              <span className="font-semibold">CROGEWIFE</span> - Aspire for more
            </p>
            <ul className="py-4">
              <li>Earn $CRO rewards</li>
              <li>Stake NFTs</li>
              <li>P2E Games</li>
            </ul>
            <div>
              <code className="p-2 bg-slate-600 text-xs rounded-lg">Contract: 0x8f11f9918b613CE9c9220A6F32cbf796e1761c32</code>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center py-8">
              <Button title="buy" url="https://mm.finance/swap?outputCurrency=0x8f11f9918b613CE9c9220A6F32cbf796e1761c32" />
              <Button title="chart" url="https://dexscreener.com/cronos/0x1c49efec84948d109b429901ac6df3f316ee500f" />
              <Button title="audit" url="https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/CrogeWife_AuditReport_InterFi.pdf" />
              <Button title="app" url="https://app.crogewife.com/" />

            </div>
            <p>
              Available on <img src={CronosWhite} className="h-8 inline ml-1" />
            </p>
          </div>
          <div className="justify-center items-center hidden lg:flex">
            <img src={Logo} className="max-h-64 " />
          </div>
        </div>
      </div>
    </div>
  );
}  
export default Hero;
