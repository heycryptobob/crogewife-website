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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center py-8">
              <Button title="buy" url="#" />
              <Button title="chart" url="#" />
              <Button title="audit" url="https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/CrogeWife_AuditReport_InterFi.pdf" />
              <Button title="app" url="https://app.crogewife.com/" />

            </div>
            <p>
              Launching on <img src={CronosWhite} className="h-8 inline ml-1" />
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
