import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Feature() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto px-16 py-16">
        <h2 className="text-center text-white capitalize text-5xl font-mono mb-12">
          Buy<span className="text-emerald-500">.</span> Hold
          <span className="text-emerald-500">.</span> Earn
          <span className="text-emerald-500">.</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="text-center">
            <div className="text-emerald-500 text-7xl drop-shadow-2xl my-8 font-semibold">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <div style={{ height: 64 }}>
                    {isVisible ? (
                      <CountUp
                        start={0}
                        end={333333}
                        separator=","
                        suffix="%"
                        duration={3}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <p className="text-white text-3xl">Fixed Staking APY</p>
          </div>
          <div className="tracking-wide leading-2">
            <h3 className="text-xl text-emerald-500 uppercase">About</h3>
            <p className="text-white my-4">
              The APY Bank auto-staking and auto-compound features allows holders to earn rebase rewards directly into your wallet.
            </p>
            <p className="text-white">
              APY Bank uses a <span className="underline decoration-emerald-500 capitalize">Positive Rebase Algorithm</span> to provide daily
              token distribution that is directly proportionate to the daily
              rebase incentives, worth <span className="underline decoration-emerald-500">2,247%</span> of the total quantity of
              tokens a $APY token owned in your wallet, without having to remove their tokens from their
              wallet. The rebase payments are
              awarded to all $APY holders at each epoch (rebase period).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
