const features = [
  { title: "Reward Token", description: "Earn $CRO rewards as a form of passive income on every transaction.", subheading: "Available now" },
  { title: "NFT Staking", description: "Earn the native token by staking your NFTs on the NFT Staking Platform.", subheading: "Available now" },
  { title: "P2E Game", description: "Play video game with your NFTs while getting rewarded in the native token.", subheading: "Coming soon" },
]

function Feature({ title, description, subheading }) {
  return (
    <div className="shadow-lg bg-slate-50 rounded-lg border-2 text-slate-600 border-slate-600 hover:border-slate-800 hover:bg-slate-800 hover:text-slate-50 p-8">
      <h3 className="text-xl font-semibold uppercase">{title}</h3>
      <p className="text-sm py-2">{description}</p>
      <p className="uppercase text-xs font-semibold">{subheading}</p>
    </div>
  )
}

function Features() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 border-b-2">
      <div className="container mx-auto px-4 md:px-4 md:w-3/4 lg:w-3/4 py-16">
        <h2 className="text-2xl font-semibold text-slate-600 uppercase text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {features.map(({ title, description, subheading }, key) => <Feature key={key} title={title} description={description} subheading={subheading} />)}
        </div>
      </div>
    </div>
  )
}

export default Features