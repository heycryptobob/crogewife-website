function Tokenomics() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <h2 className="text-center text-white capitalize text-3xl lg:text-5xl font-mono mb-12">
          Tokenomics
        </h2>
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2 rounded-lg border">
            <table className="border-collapse table-fixed w-full text-md">
              <thead>
                <tr>
                  <th className="border-b-4 font-medium p-4 text-slate-200 text-left">
                    Tax
                  </th>
                  <th className="border-b-4 font-medium p-4 text-emerald-500 text-right">
                    Buy
                  </th>
                  <th className="border-b-4 font-medium p-4 text-red-500 text-right">
                    Sell
                  </th>
                </tr>
              </thead>
              <tbody className="bg-transparent">
                <tr>
                  <td className="p-4 text-slate-300">Liquidity Pool</td>
                  <td className="p-4 text-slate-300 text-right">4%</td>
                  <td className="p-4 text-slate-300 text-right">7%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Marketing</td>
                  <td className="p-4 text-slate-300 text-right">4%</td>
                  <td className="p-4 text-slate-300 text-right">7%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Referral Rewards</td>
                  <td className="p-4 text-slate-300 text-right">5%</td>
                  <td className="p-4 text-slate-300 text-right">0%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Operations</td>
                  <td className="p-4 text-slate-300 text-right">2%</td>
                  <td className="p-4 text-slate-300 text-right">2%</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-300">Auto-Burn</td>
                  <td className="p-4 text-slate-300 text-right">2%</td>
                  <td className="p-4 text-slate-300 text-right">2%</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th className="border-t-4 font-medium p-4 text-slate-200 text-left">
                    Total
                  </th>
                  <th className="border-t-4 font-medium p-4 text-emerald-500 text-right">
                    17%
                  </th>
                  <th className="border-t-4 font-medium p-4 text-red-500 text-right">
                    12%
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
