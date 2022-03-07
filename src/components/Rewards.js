import "./Rewards.css";

function Rewards() {
  return (
    <div>
      <div className="bg-gray-900 w-full border-b-white border-b-8">
        <div className="container mx-auto px-32 py-48 text-center">
              <h2 className="text-white leading-relaxed capitalize text-4xl mb-12">
                APY rewards holders with{" "}
                <span className="underline decoration-emerald-500">
                  automatic compounding interest
                </span>
                , increasing their APY holdings over time.
              </h2>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
