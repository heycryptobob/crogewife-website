function Tokenomics() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto px-16 py-16">
        <h2 className="text-center text-white capitalize text-5xl font-mono mb-12">
          Tokenomics
        </h2>
        <div className="flex justify-center">
          <div className="w-1/2 rounded-lg border">
            <table className="border-collapse table-fixed w-full text-md">
              <thead className="bg-white bg-opacity-10">
                <tr>
                  <th className="border-b-4 font-medium p-4 text-slate-200 text-left">
                    Tax
                  </th>
                  <th className="border-b-4 font-medium p-4 text-slate-200 text-right">
                    Buy
                  </th>
                  <th className="border-b-4 font-medium p-4 text-slate-100 text-right">
                    Sell
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white opacity-30">
                <tr>
                  <td className="p-4 text-gray-900">Liquidity Pool</td>
                  <td className="p-4 text-gray-900 text-right">4%</td>
                  <td className="p-4 text-gray-900 text-right">7%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-900">Marketing</td>
                  <td className="p-4 text-gray-900 text-right">4%</td>
                  <td className="p-4 text-gray-900 text-right">7%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-900">Referral Rewards</td>
                  <td className="p-4 text-gray-900 text-right">5%</td>
                  <td className="p-4 text-gray-900 text-right">0%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-900">Operations</td>
                  <td className="p-4 text-gray-900 text-right">2%</td>
                  <td className="p-4 text-gray-900 text-right">2%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-900">Auto-Burn</td>
                  <td className="p-4 text-gray-900 text-right">2%</td>
                  <td className="p-4 text-gray-900 text-right">2%</td>
                </tr>
              </tbody>
              <tfoot className="bg-white bg-opacity-10">
                <tr>
                  <th className="border-t-4 font-medium p-4 text-slate-200 text-left">
                    Total
                  </th>
                  <th className="border-t-4 font-medium p-4 text-slate-200 text-right">
                    17%
                  </th>
                  <th className="border-t-4 font-medium p-4 text-slate-100 text-right">
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
