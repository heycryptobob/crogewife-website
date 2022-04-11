function Tokenomics() {
  return (
    <div>
      <table className="border-collapse table-fixed w-full text-md">
        <thead>
          <tr>
            <th className="bg-white font-medium pr-4 py-2 text-gray-900 text-left rounded-tl">
              Receiver
            </th>
            <th className="bg-white font-medium pr-4 py-2 text-gray-900 text-right">
              Buy
            </th>
            <th className="bg-white font-medium pr-4 py-2 text-gray-900 text-right rounded-tr">
              Sell
            </th>
          </tr>
        </thead>
        <tbody className="bg-transparent">
          <tr>
            <td className="pr-4 py-2 text-gray-600">Liquidity Pool</td>
            <td className="pr-4 py-2 text-gray-600 text-right">2%</td>
            <td className="pr-4 py-2 text-gray-600 text-right">3%</td>
          </tr>
          <tr>
            <td className="pr-4 py-2 text-gray-600">Marketing</td>
            <td className="pr-4 py-2 text-gray-600 text-right">5%</td>
            <td className="pr-4 py-2 text-gray-600 text-right">9%</td>
          </tr>
          <tr>
            <td className="pr-4 py-2 text-gray-600">Development</td>
            <td className="pr-4 py-2 text-gray-600 text-right">2%</td>
            <td className="pr-4 py-2 text-gray-600 text-right">2%</td>
          </tr>
          <tr>
            <td className="pr-4 py-2 text-gray-600">CRO Rewards</td>
            <td className="pr-4 py-2 text-gray-600 text-right">1%</td>
            <td className="pr-4 py-2 text-gray-600 text-right">2%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className="bg-white font-medium pr-4 py-2 text-gray-900 text-left rounded-bl">
              Total
            </th>
            <th className="bg-white font-medium pr-4 py-2 text-gray-900 text-right">
              10%
            </th>
            <th className="bg-white font-medium pr-4 py-2 text-gray-900 text-right rounded-br">
              15%
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Tokenomics;
