function Tokenomics() {
  return (
    <div className="shadow-lg w-full md:w-3/4 lg:w-1/2">
      <table className="border-collapse table-fixed w-full text-md">
        <thead>
          <tr>
            <th className="bg-white font-medium pr-4 p-2 text-gray-900 text-left rounded-tl">
              Receiver
            </th>
            <th className="bg-white font-medium pr-4 p-2 text-gray-900 text-right">
              Buy
            </th>
            <th className="bg-white font-medium pr-4 p-2 text-gray-900 text-right rounded-tr">
              Sell
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-800 opacity-50">
          <tr>
            <td className="pr-4 p-2 text-slate-50">Liquidity Pool</td>
            <td className="pr-4 p-2 text-slate-50 text-right">1%</td>
            <td className="pr-4 p-2 text-slate-50 text-right">2%</td>
          </tr>
          <tr>
            <td className="pr-4 p-2 text-slate-50">Marketing</td>
            <td className="pr-4 p-2 text-slate-50 text-right">5%</td>
            <td className="pr-4 p-2 text-slate-50 text-right">7%</td>
          </tr>
          <tr>
            <td className="pr-4 p-2 text-slate-50">Development</td>
            <td className="pr-4 p-2 text-slate-50 text-right">2%</td>
            <td className="pr-4 p-2 text-slate-50 text-right">2%</td>
          </tr>
          <tr>
            <td className="pr-4 p-2 text-slate-50">CRO Rewards</td>
            <td className="pr-4 p-2 text-slate-50 text-right">1%</td>
            <td className="pr-4 p-2 text-slate-50 text-right">1%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className="bg-white font-medium pr-4 p-2 text-gray-900 text-left rounded-bl">
              Total
            </th>
            <th className="bg-white font-medium pr-4 p-2 text-gray-900 text-right">
              9%
            </th>
            <th className="bg-white font-medium pr-4 p-2 text-gray-900 text-right rounded-br">
              12%
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Tokenomics;
