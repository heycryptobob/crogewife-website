function Utility() {
  return (
    <div className="bg-gray-900 w-full utility">
      <div className="container mx-auto px-8 lg:px-16 py-32 text-white">
        <h2 className="text-5xl text-center mb-8 font-mono">Utility</h2>
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-32 items-center">
          <div className="w-full">
          <div className="border-white border-opacity-20 border-4 hover:border-emerald-500 rounded-lg p-8 m-0 lg:m-4 bg-white bg-opacity-5 hover:bg-emerald-500 hover:text-gray-900">
              <h3 className="text-xl font-semibold mb-4">APY Referral System</h3>
              <p>
                Earn 5% rewards in $WBTC on every buy transaction using your referral link.
              </p>
            </div>
          </div>
          <div className="w-full">
          <div className="border-white border-opacity-20 border-4 hover:border-emerald-500 rounded-lg p-8 m-0 lg:m-4 bg-white bg-opacity-5 hover:bg-emerald-500 hover:text-gray-900">
              <h3 className="text-xl font-semibold mb-4">APY Launchpad</h3>
              <p>
                Contribute early on to upcoming projects, fees are used in buybacks and burns.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="border-white border-opacity-20 border-4 hover:border-emerald-500 rounded-lg p-8 m-0 lg:m-4 bg-white bg-opacity-5 hover:bg-emerald-500 hover:text-gray-900">
              <h3 className="text-xl font-semibold mb-4">APY Swap</h3>
              <p>
                Fees from transactions completed on the APY Swap will be used in buybacks and burns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
