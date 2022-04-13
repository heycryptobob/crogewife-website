import Tokenomics from "../components/Tokenomics"

function Tax() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-600 border-b-2">
      <div className="container mx-auto px-4 md:px-4 md:w-3/4 lg:w-3/4 py-16">
        <h2 className="text-2xl font-semibold text-slate-100 uppercase text-center">Tax</h2>
        <p className="text-xs text-slate-50 text-center lg:mx-32 my-8 uppercase font-light">A tax system is designed to maximise the long-term value of the token.</p>
        <div className="flex justify-center">
          <Tokenomics />
        </div>
      </div>
    </div>
  )
}

export default Tax