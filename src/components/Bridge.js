const bridges = [
  {
    title: "Multichain.org",
    subtitle: "Decentralized Bridge",
    website: {
      url: "https://app.multichain.org/#/router",
      title: "app.multichain.org",
    },
    list: [
      "Suggested for small-medium amounts",
      "Always check the price impact on the assets you're going to bridge",
      "You can't bridge CRO, so you won't have gas to use the chain",
    ],
  },
  {
    title: "Evodefi.com",
    subtitle: "Decentralized Bridge",
    website: {
      url: "https://bridge.evodefi.com/",
      title: "bridge.evodefi.com",
    },
    list: [
      "Suggested for small-medium amounts",
      "Always check the price impact on the assets you’re going to bridge",
      "You get 2 CRO (for gas fees)",
    ],
  },
  {
    title: "Elk.finance",
    subtitle: "DEX",
    website: {
      url: "https://app.elk.finance/#/elknet",
      title: "app.elk.finance",
    },
    list: [
      "Suggested for small amounts",
      "You can only bridge $ELK from chain to chain",
      "Check the tick to receive gas on Cronos chain",
    ],
  },
  {
    title: "Crypto.com",
    subtitle: "app / CEX",
    website: {
      url: "https://crypto.com/",
      title: "crypto.com",
    },
    list: [
      "Suggested for medium-large amounts",
      "Deposit your assets on the crypto.com app",
      "Swap into CRO (So that you’ll have some gas to use the chain)",
      "Withdraw CRO to Cronos Chain (CRC-20)",
    ],
  },
];

function BridgeItem({ item }) {
  const { title, subtitle, website, list } = item;
  return (
    <tr className="border-b">
      <td className="pr-4 py-2">
        <h4 className="text-md font-semibold">{title}</h4>
        <a
          className="text-xs text-indigo-500 hover:text-indigo-600 hover:underline"
          href={website.url}
        >
          {website.title}
        </a>
        <p className="text-gray-600 text-xs">{subtitle}</p>
      </td>
      <td className="py-2">
        <ul className="text-xs">
          {list.map((listItem, key) => (
            <li key={key}>{listItem}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function Bridge() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-800">Bridging funds from other chains to Cronos Chain.</p>
      <p className="text-gray-800">
        CrogeWife is a token traded on the Cronos Chain. As this is a new chain,
        many of you will need to bridge funds. Below you will find four ways to
        doing this.
      </p>
      <table>
        <tbody>
          {bridges.map((item, key) => (
            <BridgeItem key={key} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bridge;
