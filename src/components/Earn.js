import "./Earn.css";

function Earn() {
  return (
    <div className="bg-gray-900 w-full earn">
      <div className="container mx-auto px-16 py-32">
        {/* <p>Our products are powered by DeFi and are designed to help you effortlessly generate cash flow from your crypto.</p> */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <h2 className="text-white leading-relaxed capitalize text-5xl mb-8">
              So,
              <br />{" "}
              <span className="underline decoration-emerald-500">
                how much
              </span>{" "}
              can I earn?
            </h2>
          </div>
          <div className="text-gray-100 text-3xl leading-loose">
            <p>
              At the end of one year and with{" "}
              <span className="text-emerald-500">$1000 USD</span> of $APY
              invested.
            </p>
            <p>
              You can earn up to <br />
              <span className="text-emerald-500">$ 3,333,330 USD</span> of $APY.
              <sup>*</sup>
            </p>
            <p className="text-white text-sm mt-8">
              <sup>*</sup>Earnings are calculated in a scenario where the RFV
              sustains the rebase reward for 365 days.
            </p>
          </div>
          {/* <div>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 500"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>compound</title>
              <defs>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-2"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-3"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-4"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-5"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-6"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-7"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-8"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-9"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-10"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-11"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-12"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-13"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-14"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="49.9890103%"
                  x2="100.051443%"
                  y2="49.9890103%"
                  id="linearGradient-15"
                >
                  <stop stop-color="#1B1F3C" offset="0%"></stop>
                  <stop stop-color="#111827" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="compound"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  transform="translate(81.000000, 0.000000)"
                  fill-rule="nonzero"
                  id="s"
                >
                  <path
                    d="M109.919387,182.165944 C109.849893,183.440572 109.659535,184.707483 109.350846,185.942239 C109.040871,187.176995 108.612565,188.378309 108.073645,189.525603 C107.534726,190.672897 106.885193,191.764884 106.140481,192.783558 C105.394483,193.802231 104.553305,194.746305 103.631097,195.600344 C102.708889,196.454384 101.706936,197.218389 100.644532,197.879498 C99.5808409,198.540606 98.4566986,199.097533 97.2913979,199.539987 C96.1260971,199.982441 94.9196378,200.311709 93.6964579,200.52136 C92.4707055,200.731012 91.2295187,200.821046 89.9934767,200.795322 C91.2295187,200.768312 92.4604159,200.624257 93.6643028,200.363157 C94.8681897,200.103344 96.0437801,199.726486 97.1692085,199.241588 C98.2959231,198.756689 99.3724758,198.163749 100.379574,197.47563 C101.387957,196.78751 102.328172,196.002926 103.182212,195.138597 C104.037538,194.274268 104.807974,193.328908 105.479372,192.323097 C106.152057,191.315999 106.725704,190.247163 107.190023,189.134597 C107.654343,188.022031 108.010622,186.868306 108.252428,185.692715 C108.494234,184.517125 108.620282,183.320955 108.633144,182.124786 C108.637003,181.769793 108.931544,181.498404 109.286536,181.502222 C109.641528,181.506121 109.923207,181.782655 109.919387,182.138934 C109.919387,182.147937 109.919387,182.155654 109.918062,182.164658 L109.919387,182.165944 Z"
                    fill="url(#linearGradient-1)"
                    transform="translate(99.956432, 191.150913) rotate(66.400000) translate(-99.956432, -191.150913) "
                    class="svg-elem-1"
                  ></path>
                  <path
                    d="M132.803342,183.298523 C132.687518,185.422903 132.370255,187.534422 131.855773,189.592348 C131.339148,191.650274 130.625305,193.652465 129.727106,195.564621 C128.828906,197.476778 127.746352,199.296757 126.505165,200.994546 C125.261834,202.692335 123.859872,204.265791 122.322858,205.68919 C120.785845,207.112589 119.115923,208.385931 117.345249,209.487779 C115.572431,210.589627 113.698861,211.517838 111.756693,212.255261 C109.814525,212.992685 107.803759,213.541465 105.765126,213.890884 C103.722206,214.240303 101.653561,214.39036 99.593491,214.347486 C101.653561,214.302469 103.705056,214.062378 105.711534,213.627212 C107.718013,213.19419 109.67733,212.566094 111.553044,211.757929 C113.430902,210.949764 115.225156,209.961531 116.903652,208.814666 C118.584292,207.667801 120.151317,206.36016 121.574716,204.919611 C123.000259,203.479063 124.284319,201.903463 125.403317,200.227111 C126.524458,198.548615 127.480536,196.767222 128.254402,194.912945 C129.028268,193.058667 129.622066,191.135793 130.025076,189.176475 C130.428087,187.217158 130.638167,185.223542 130.659603,183.229926 C130.666034,182.638272 131.156936,182.185957 131.748589,182.19232 C132.340243,182.198819 132.809708,182.659709 132.803342,183.253506 C132.803342,183.268512 132.803342,183.281374 132.801133,183.29638 L132.803342,183.298523 Z"
                    fill="url(#linearGradient-2)"
                    transform="translate(116.198416, 198.273472) rotate(16.400000) translate(-116.198416, -198.273472) "
                    class="svg-elem-2"
                  ></path>
                  <path
                    d="M125.322609,188.333031 C125.177829,190.988506 124.78125,193.627904 124.138148,196.200312 C123.492366,198.772719 122.600062,201.275458 121.477313,203.665654 C120.354565,206.055849 119.001371,208.330822 117.449887,210.453059 C115.895724,212.575295 114.143271,214.542116 112.222004,216.321364 C110.300737,218.100613 108.213335,219.692291 105.999993,221.069601 C103.78397,222.446911 101.442007,223.607174 99.0142975,224.528953 C96.5865876,225.450733 94.0731307,226.136708 91.5248391,226.573482 C88.9711884,227.010255 86.3853826,227.197826 83.8102951,227.144235 C86.3853826,227.087963 88.9497517,226.787849 91.4578494,226.243892 C93.965947,225.702614 96.4150937,224.917494 98.7597363,223.907288 C101.107058,222.897082 103.349877,221.66179 105.447997,220.228209 C107.548797,218.794627 109.507578,217.160077 111.286827,215.359391 C113.068755,213.558706 114.67383,211.589206 116.072577,209.493765 C117.474004,207.395645 118.669101,205.168904 119.636434,202.851058 C120.603767,200.533211 121.346013,198.129617 121.849777,195.680471 C122.35354,193.231324 122.61614,190.739304 122.642936,188.247284 C122.650974,187.507717 123.264601,186.942323 124.004168,186.950277 C124.743735,186.9584 125.330566,187.534512 125.322609,188.276759 C125.322609,188.295516 125.322609,188.311594 125.319848,188.330351 L125.322609,188.333031 Z"
                    fill="url(#linearGradient-3)"
                    transform="translate(104.566452, 207.051716) rotate(46.400000) translate(-104.566452, -207.051716) "
                    class="svg-elem-3"
                  ></path>
                  <path
                    d="M159.597844,173.284485 C159.424109,176.471056 158.948213,179.638333 158.176491,182.725222 C157.401553,185.812112 156.330788,188.815398 154.98349,191.683633 C153.636191,194.551867 152.012359,197.281835 150.150578,199.828519 C148.285583,202.375203 146.182639,204.735387 143.877119,206.870486 C141.571598,209.005584 139.066716,210.915597 136.410705,212.568369 C133.751478,214.221141 130.941123,215.613457 128.027871,216.719592 C125.114619,217.825728 122.09847,218.648898 119.040521,219.173026 C115.97614,219.697154 112.873173,219.92224 109.783068,219.85793 C112.873173,219.790404 115.950416,219.430267 118.960133,218.777519 C121.96985,218.127986 124.908826,217.185841 127.722397,215.973594 C130.539184,214.761347 133.230566,213.278997 135.74831,211.558699 C138.26927,209.838401 140.619807,207.87694 142.754906,205.716118 C144.89322,203.555295 146.81931,201.191895 148.497806,198.677367 C150.179518,196.159622 151.613635,193.487534 152.774434,190.706118 C153.935233,187.924702 154.82593,185.040389 155.430446,182.101413 C156.034961,179.162437 156.350081,176.172013 156.382236,173.181589 C156.391883,172.294108 157.128235,171.615636 158.015715,171.625181 C158.903196,171.634929 159.607393,172.326263 159.597844,173.21696 C159.597844,173.239468 159.597844,173.258761 159.594531,173.28127 L159.597844,173.284485 Z"
                    fill="url(#linearGradient-4)"
                    transform="translate(134.690456, 195.746908) rotate(-13.600000) translate(-134.690456, -195.746908) "
                    class="svg-elem-4"
                  ></path>
                  <path
                    d="M181.327649,164.385188 C181.096002,168.633948 180.461475,172.856984 179.432512,176.972837 C178.399261,181.088689 176.971575,185.093071 175.175177,188.917384 C173.378778,192.741697 171.213668,196.381654 168.731295,199.777233 C166.244634,203.172811 163.440709,206.319723 160.366682,209.166521 C157.292655,212.013319 153.952812,214.560003 150.411463,216.763699 C146.865828,218.967395 143.118687,220.823816 139.234351,222.298664 C135.350015,223.773511 131.328484,224.871071 127.251218,225.569909 C123.165377,226.268746 119.028087,226.568861 114.907947,226.483114 C119.028087,226.393079 123.131078,225.912897 127.144034,225.042565 C131.15699,224.176521 135.075625,222.920329 138.827053,221.303999 C142.582769,219.68767 146.171278,217.711203 149.52827,215.417473 C152.88955,213.123742 156.0236,210.508461 158.870398,207.627364 C161.721483,204.746267 164.289604,201.595068 166.527599,198.242363 C168.769881,194.88537 170.682038,191.322585 172.22977,187.614031 C173.777502,183.905476 174.965097,180.059726 175.771118,176.141092 C176.577139,172.222457 176.997299,168.235225 177.040172,164.247992 C177.053034,163.064685 178.034837,162.160055 179.218144,162.172781 C180.401452,162.185779 181.340381,163.107558 181.327649,164.295153 C181.327649,164.325165 181.327649,164.350889 181.323231,164.3809 L181.327649,164.385188 Z"
                    fill="url(#linearGradient-5)"
                    transform="translate(148.117798, 194.335084) rotate(-23.600000) translate(-148.117798, -194.335084) "
                    class="svg-elem-5"
                  ></path>
                  <path
                    d="M165.629278,195.188908 C165.339719,200.499859 164.54656,205.778654 163.260356,210.92347 C161.968793,216.068285 160.184185,221.073762 157.938688,225.854154 C155.69319,230.634545 152.986802,235.184491 149.883835,239.428964 C146.775509,243.673437 143.270603,247.607078 139.428069,251.165575 C135.585535,254.724073 131.410731,257.907428 126.984046,260.662048 C122.552002,263.416668 117.868076,265.737194 113.012656,267.580753 C108.157236,269.424312 103.130322,270.796263 98.033739,271.66981 C92.9264376,272.543357 87.7548259,272.9185 82.604651,272.811316 C87.7548259,272.698773 92.8835641,272.098545 97.8997595,271.01063 C102.915955,269.928075 107.814248,268.357835 112.503533,266.337423 C117.198178,264.317011 121.683814,261.846427 125.880054,258.979264 C130.081654,256.112101 133.999217,252.843 137.557714,249.241629 C141.121571,245.640258 144.331722,241.701258 147.129215,237.510377 C149.932068,233.314137 152.322264,228.860655 154.256929,224.224962 C156.191594,219.589269 157.676088,214.782081 158.683614,209.883788 C159.69114,204.985495 160.21634,200.001455 160.269932,195.017414 C160.28601,193.53828 161.513263,192.407492 162.992397,192.4234 C164.471532,192.439647 165.645193,193.591872 165.629278,195.076365 C165.629278,195.11388 165.629278,195.146035 165.623756,195.183549 L165.629278,195.188908 Z"
                    fill="url(#linearGradient-6)"
                    transform="translate(124.116965, 232.626279) rotate(26.400000) translate(-124.116965, -232.626279) "
                    class="svg-elem-6"
                  ></path>
                  <path
                    d="M130.359193,198.196103 C130.011722,204.569243 129.059931,210.903798 127.516486,217.077577 C125.96661,223.251356 123.825081,229.257928 121.130483,234.994398 C118.435886,240.730867 115.188221,246.190803 111.464661,251.28417 C107.734669,256.377538 103.528783,261.097906 98.9177415,265.368104 C94.3067003,269.638301 89.296936,273.458326 83.9849137,276.76387 C78.6664604,280.069415 73.0457492,282.854046 67.2192454,285.066317 C61.3927415,287.278588 55.3604451,288.924929 49.2445453,289.973185 C43.1157836,291.021441 36.9098496,291.471612 30.7296396,291.342992 C36.9098496,291.207941 43.0643354,290.487666 49.0837698,289.182169 C55.1032043,287.883103 60.9811563,285.998815 66.6082985,283.57432 C72.2418718,281.149826 77.6246353,278.185126 82.6601237,274.74453 C87.7020431,271.303935 92.4031185,267.381013 96.6733156,263.059367 C100.949944,258.737722 104.802124,254.010923 108.159117,248.981865 C111.52254,243.946377 114.390775,238.6022 116.712373,233.039368 C119.033971,227.476535 120.815364,221.707911 122.024395,215.829959 C123.233427,209.952007 123.863667,203.971158 123.927977,197.99031 C123.94727,196.215349 125.419974,194.858404 127.194935,194.877493 C128.969897,194.89699 130.37829,196.279659 130.359193,198.061051 C130.359193,198.106069 130.359193,198.144655 130.352566,198.189672 L130.359193,198.196103 Z"
                    fill="url(#linearGradient-7)"
                    transform="translate(80.544416, 243.120948) rotate(66.400000) translate(-80.544416, -243.120948) "
                    class="svg-elem-7"
                  ></path>
                  <path
                    d="M202.788107,196.14882 C202.382724,203.584151 201.272301,210.974464 199.471616,218.177207 C197.663427,225.379949 195.164976,232.387616 192.02128,239.080164 C188.877583,245.772712 185.08864,252.142637 180.744486,258.084899 C176.39283,264.027161 171.485962,269.534258 166.106414,274.516155 C160.726866,279.498051 154.882141,283.954748 148.684781,287.811216 C142.479919,291.667684 135.922423,294.916421 129.124835,297.497403 C122.327247,300.078386 115.289568,301.999117 108.154352,303.222083 C101.00413,304.445048 93.7638733,304.970248 86.5536284,304.820191 C93.7638733,304.662631 100.944107,303.822311 107.96678,302.299232 C114.989454,300.783655 121.847064,298.585318 128.412064,295.756741 C134.984566,292.928164 141.264457,289.469347 147.139193,285.455319 C153.021432,281.441291 158.50602,276.864549 163.487917,271.822629 C168.477316,266.78071 172.971527,261.26611 176.888018,255.398877 C180.812012,249.52414 184.158286,243.289267 186.866817,236.799296 C189.575348,230.309325 191.65364,223.579263 193.064177,216.721652 C194.474714,209.864042 195.209993,202.886385 195.285022,195.908729 C195.307531,193.837941 197.025685,192.254838 199.096473,192.27711 C201.167261,192.299855 202.810387,193.912969 202.788107,195.99126 C202.788107,196.04378 202.788107,196.088798 202.780375,196.141318 L202.788107,196.14882 Z"
                    fill="url(#linearGradient-8)"
                    transform="translate(144.670868, 248.561140) rotate(16.400000) translate(-144.670868, -248.561140) "
                    class="svg-elem-8"
                  ></path>
                  <path
                    d="M269.031627,133.194917 C268.548063,142.064204 267.223488,150.879792 265.075527,159.471635 C262.918617,168.063477 259.938321,176.422624 256.18834,184.405877 C252.438359,192.389131 247.918692,199.987541 242.736737,207.075811 C237.545832,214.164081 231.69264,220.73326 225.275607,226.675951 C218.858575,232.618642 211.886653,237.934845 204.494089,242.53506 C197.092575,247.135276 189.270418,251.010555 181.161867,254.089298 C173.053316,257.168042 164.65837,259.4592 156.147076,260.918023 C147.617883,262.376846 138.981291,263.003335 130.380499,262.824338 C138.981291,262.636391 147.546284,261.63401 155.92333,259.817193 C164.300376,258.009326 172.480526,255.387024 180.311633,252.012936 C188.151689,248.638848 195.642701,244.512974 202.650423,239.724812 C209.667094,234.93665 216.209424,229.47725 222.152115,223.46296 C228.103755,217.448671 233.464707,210.870541 238.136521,203.87177 C242.817285,196.864048 246.808912,189.426735 250.039803,181.685127 C253.270694,173.943519 255.749798,165.915516 257.432367,157.735367 C259.114936,149.555217 259.99202,141.231869 260.081519,132.908522 C260.108368,130.438368 262.15788,128.549952 264.628035,128.576519 C267.09819,128.603651 269.058204,130.527866 269.031627,133.00697 C269.031627,133.069619 269.031627,133.123318 269.022404,133.185967 L269.031627,133.194917 Z"
                    fill="url(#linearGradient-9)"
                    transform="translate(199.706063, 195.715326) rotate(-33.600000) translate(-199.706063, -195.715326) "
                    class="svg-elem-9"
                  ></path>
                  <path
                    d="M178.656858,214.787059 C178.135652,224.34677 176.707965,233.848602 174.392798,243.10927 C172.067985,252.369938 168.85569,261.379797 164.813795,269.984501 C160.771899,278.589206 155.900401,286.779109 150.315061,294.419161 C144.720074,302.059212 138.411243,309.139765 131.494682,315.54506 C124.57812,321.950356 117.063473,327.680395 109.09544,332.638711 C101.11776,337.597027 92.6866932,341.773974 83.9469374,345.09238 C75.2071816,348.410786 66.1587369,350.880298 56.9848873,352.452682 C47.7917447,354.025067 38.4828437,354.700324 29.2125288,354.507393 C38.4828437,354.304816 47.7145724,353.224405 56.7437241,351.266159 C65.7728757,349.31756 74.5898037,346.491127 83.0305171,342.854385 C91.480877,339.217644 99.5550222,334.770594 107.108255,329.6097 C114.671134,324.448807 121.722747,318.564424 128.128043,312.081956 C134.542985,305.599488 140.321256,298.509289 145.356744,290.965703 C150.401879,283.41247 154.704232,275.396204 158.186629,267.051956 C161.669026,258.707708 164.341115,250.054771 166.154662,241.237843 C167.96821,232.420915 168.91357,223.449643 169.010035,214.47837 C169.038975,211.815928 171.24803,209.78051 173.910472,209.809145 C176.572914,209.83839 178.685504,211.912393 178.656858,214.584482 C178.656858,214.652008 178.656858,214.709887 178.646918,214.777413 L178.656858,214.787059 Z"
                    fill="url(#linearGradient-10)"
                    transform="translate(103.934694, 282.174327) rotate(46.400000) translate(-103.934694, -282.174327) "
                    class="svg-elem-10"
                  ></path>
                  <path
                    d="M222.407721,217.021002 C221.799647,228.173998 220.134013,239.259468 217.432985,250.063582 C214.720702,260.867695 210.973025,271.379196 206.25748,281.418018 C201.541935,291.45684 195.858521,301.011727 189.342291,309.925121 C182.814806,318.838514 175.454504,327.099159 167.385182,334.572004 C159.31586,342.044849 150.548772,348.729893 141.252733,354.514596 C131.94544,360.299298 122.109195,365.172403 111.912813,369.043877 C101.716432,372.915351 91.1599129,375.796448 80.4570884,377.630896 C69.7317553,379.465344 58.8713708,380.253144 48.0560034,380.028059 C58.8713708,379.791719 69.641721,378.531239 80.1757313,376.246619 C90.7097416,373.973254 100.996158,370.675748 110.843656,366.432883 C120.70241,362.190018 130.122246,357.001793 138.93435,350.98075 C147.75771,344.959708 155.984591,338.094595 163.457436,330.531716 C170.941536,322.968836 177.682852,314.696937 183.557588,305.896087 C189.443579,297.083982 194.46299,287.731672 198.525787,277.996716 C202.588583,268.26176 205.70602,258.166666 207.821826,247.88025 C209.937631,237.593834 211.040551,227.12735 211.153094,216.660865 C211.186857,213.554683 213.764088,211.180029 216.87027,211.213436 C219.976453,211.247554 222.441141,213.667226 222.407721,216.784662 C222.407721,216.863442 222.407721,216.930968 222.396124,217.009748 L222.407721,217.021002 Z"
                    fill="url(#linearGradient-11)"
                    transform="translate(135.231862, 295.639481) rotate(31.400000) translate(-135.231862, -295.639481) "
                    class="svg-elem-11"
                  ></path>
                  <path
                    d="M276.943279,206.540778 C276.248337,219.287059 274.344755,231.956168 271.257866,244.303726 C268.158114,256.651284 263.875055,268.664428 258.485861,280.137368 C253.096666,291.610307 246.601336,302.530178 239.154215,312.716913 C231.694233,322.903648 223.282459,332.344385 214.060377,340.88478 C204.838294,349.425174 194.818766,357.065225 184.194721,363.676313 C173.557815,370.287402 162.316392,375.856665 150.663384,380.281206 C139.010377,384.705748 126.945784,387.99843 114.713984,390.094942 C102.456461,392.191455 90.0445928,393.091797 77.6841729,392.834557 C90.0445928,392.564454 102.353564,391.123905 114.392433,388.512911 C126.431302,385.914779 138.187206,382.146202 149.441491,377.297213 C160.708637,372.448224 171.474164,366.518824 181.545141,359.637633 C191.62898,352.756442 201.031131,344.910598 209.571525,336.267307 C218.124781,327.624017 225.829143,318.170418 232.543127,308.112303 C239.269974,298.041326 245.006443,287.352972 249.64964,276.227308 C254.292836,265.101643 257.855621,253.564394 260.273684,241.80849 C262.691748,230.052586 263.952227,218.090889 264.080848,206.129193 C264.119434,202.57927 267.064841,199.86538 270.614764,199.903559 C274.164687,199.942552 276.981473,202.70789 276.943279,206.270675 C276.943279,206.36071 276.943279,206.437882 276.930025,206.527916 L276.943279,206.540778 Z"
                    fill="url(#linearGradient-12)"
                    transform="translate(177.313726, 296.390468) rotate(14.400000) translate(-177.313726, -296.390468) "
                    class="svg-elem-12"
                  ></path>
                  <path
                    d="M367.424876,52.8741926 C366.652911,67.0331865 364.538349,81.1064549 361.109329,94.8225337 C357.666022,108.538612 352.908257,121.883214 346.92176,134.627737 C340.935263,147.372261 333.720034,159.502418 325.447524,170.818183 C317.160727,182.133948 307.816648,192.621033 297.572452,202.107988 C287.328255,211.594942 276.198229,220.081766 264.396686,227.425583 C252.580856,234.7694 240.093509,240.955923 227.148959,245.870852 C214.20441,250.78578 200.802658,254.443401 187.215168,256.772277 C173.599102,259.101153 159.811585,260.101283 146.081219,259.815532 C159.811585,259.515492 173.484801,257.915283 186.857978,255.014904 C200.231155,252.128812 213.290005,247.942551 225.791639,242.556132 C238.307561,237.169714 250.266267,230.583139 261.453444,222.939282 C272.654908,215.295426 283.099131,206.580001 292.586085,196.978746 C302.087328,187.37749 310.645589,176.876118 318.103707,165.703228 C325.576112,154.516052 331.948374,142.643071 337.106191,130.284312 C342.264008,117.925554 346.221669,105.109593 348.907734,92.0507427 C351.593799,78.9918927 352.993983,65.7044414 353.136858,52.41699 C353.179721,48.4736174 356.451577,45.4589375 360.39495,45.5013489 C364.338323,45.544663 367.467303,48.6164932 367.424876,52.5741534 C367.424876,52.6741665 367.424876,52.759892 367.410153,52.8599051 L367.424876,52.8741926 Z"
                    fill="url(#linearGradient-13)"
                    transform="translate(256.753047, 152.682224) rotate(-53.600000) translate(-256.753047, -152.682224) "
                    class="svg-elem-13"
                  ></path>
                  <path
                    d="M382.187959,128.230493 C381.348238,143.63225 379.048077,158.940756 375.318085,173.860722 C371.572552,188.780687 366.397189,203.296571 359.885246,217.159706 C353.373302,231.02284 345.524779,244.217685 336.526174,256.526657 C327.512028,268.835628 317.347802,280.243185 306.204452,290.562828 C295.061103,300.882471 282.954173,310.1142 270.116785,318.102598 C257.263857,326.090997 243.680471,332.820523 229.599754,338.166844 C215.519036,343.513165 200.940986,347.491823 186.160895,350.025108 C171.349721,352.558394 156.352047,353.646308 141.41654,353.335476 C156.352047,353.009101 171.225388,351.268439 185.772354,348.113488 C200.319321,344.974078 214.524372,340.42038 228.123299,334.561186 C241.737767,328.701991 254.746112,321.537299 266.915209,313.222526 C279.099848,304.907754 290.46078,295.427359 300.780423,284.983383 C311.115608,274.539407 320.425045,263.116308 328.537776,250.962753 C336.666049,238.793656 343.597616,225.87856 349.208145,212.43505 C354.818674,198.991539 359.123706,185.050696 362.045532,170.845645 C364.967359,156.640595 366.490439,142.186878 366.645855,127.733161 C366.69248,123.443671 370.251514,120.164387 374.541004,120.210521 C378.830494,120.257637 382.234111,123.599087 382.187959,127.904119 C382.187959,128.01291 382.187959,128.10616 382.171944,128.214952 L382.187959,128.230493 Z"
                    fill="url(#linearGradient-14)"
                    transform="translate(261.802250, 236.798869) rotate(-23.600000) translate(-261.802250, -236.798869) "
                    class="svg-elem-14"
                  ></path>
                  <path
                    d="M328.760684,219.279355 C327.834095,236.274397 325.295985,253.166542 321.180133,269.629952 C317.047131,286.093363 311.336385,302.110889 304.150793,317.408141 C296.9652,332.705393 288.30476,347.265222 278.375266,360.847536 C268.428622,374.429849 257.212924,387.017498 244.916814,398.404691 C232.620704,409.791883 219.261333,419.978618 205.09594,428.793402 C190.913398,437.608187 175.924835,445.033871 160.387491,450.933259 C144.850147,456.832648 128.764024,461.222891 112.454958,464.018241 C96.1115928,466.813591 79.5624355,468.014048 63.0818757,467.67106 C79.5624355,467.310923 95.9743977,465.390192 112.026223,461.908866 C128.078048,458.44469 143.752587,453.41992 158.758299,446.954602 C173.781161,440.489283 188.135197,432.583417 201.563166,423.408495 C215.008285,414.233574 227.544486,403.772448 238.931678,392.248061 C250.33602,380.723674 260.608502,368.118875 269.560481,354.708055 C278.52961,341.280086 286.178236,327.028947 292.369165,312.194728 C298.560093,297.360509 303.310473,281.97751 306.534557,266.302971 C309.758642,250.628433 311.439282,234.679504 311.610776,218.730575 C311.662224,213.997344 315.589433,210.378824 320.322664,210.42973 C325.055894,210.48172 328.81161,214.168838 328.760684,218.919218 C328.760684,219.039264 328.760684,219.14216 328.743012,219.262206 L328.760684,219.279355 Z"
                    fill="url(#linearGradient-15)"
                    transform="translate(195.921280, 339.078942) rotate(16.400000) translate(-195.921280, -339.078942) "
                    class="svg-elem-15"
                  ></path>
                </g>
              </g>
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Earn;
