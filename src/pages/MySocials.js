import Socials from "../components/Socials"


function MySocials() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 border-b-2">
      <div className="container mx-auto px-4 md:px-4 md:w-3/4 lg:w-3/4 py-16">
        <h2 className="text-2xl font-semibold text-slate-600 uppercase text-center">Socials</h2>
        <Socials />
      </div>
    </div>
  )
}

export default MySocials