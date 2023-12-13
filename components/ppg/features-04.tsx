export default function Features04PPG() {
  return (
    <section className="relative" id={"why-sleeppods"}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blurred shape */}
        <div
          className="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient
                id="bs4-a"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bs4-a)"
              fillRule="evenodd"
              d="m0 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 0 427)"
            />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Why should you choose SleepPods?
            </h2>
            <p className="text-lg text-slate-400">
              Each category emphasizes a unique aspect of the SleepPods,
              showcasing their comprehensive approach to enhancing sleep quality
              and overall user experience
            </p>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {/* Row */}
            <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">
                  Technological Innovation and Personalization{" "}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <path
                        d="M24,128c104-221.7,104,221.7,208,0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Advanced Sleep Tracking Technology
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    State-of-the-art PGG technology to provide comprehensive
                    monitoring of your sleep stages
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <circle
                        cx="128"
                        cy="128"
                        r="88"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="56"
                        y1="24"
                        x2="24"
                        y2="56"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="200"
                        y1="24"
                        x2="232"
                        y2="56"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <polyline
                        points="128 80 128 128 176 128"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Smart Alarm Function
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Gently wakes you during your lightest sleep stage for a more
                    refreshing start to your day
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <circle
                        cx="128"
                        cy="120"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M63.8,199.37a72,72,0,0,1,128.4,0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Personalized Sleep Analysis
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Intelligent algorithms analyze your sleep data to provide
                    personalized insights and recommendations
                  </p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">
                  User Comfort and Experience
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="184"
                        y1="72"
                        x2="32"
                        y2="224"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="112"
                        y1="64.52"
                        x2="112"
                        y2="144"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="136"
                        y1="120"
                        x2="215.2"
                        y2="120"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Comfortable and Non-Intrusive
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Ergonomically designed for all-night comfort without
                    disruption
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <path
                        d="M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="136"
                        y1="64"
                        x2="192"
                        y2="120"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="104"
                        y1="208"
                        x2="48"
                        y2="152"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <polyline
                        points="164 200 204 160 192 120"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Customizable Soundscape
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    A range of soothing audio options to create an ideal sleep
                    environment
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="104"
                        y1="32"
                        x2="128"
                        y2="72.62"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="152"
                        y1="32"
                        x2="76.36"
                        y2="160"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="179.64"
                        y1="160"
                        x2="232"
                        y2="160"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="151.23"
                        y1="111.93"
                        x2="208"
                        y2="208"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="24"
                        y1="160"
                        x2="133.15"
                        y2="160"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="52.73"
                        y1="200"
                        x2="48"
                        y2="208"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Easy-to-Use Companion App
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    User-friendly app for effortless sleep tracking and data
                    access.
                  </p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">
                  Health, Privacy, and Community Support
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <line
                        x1="216"
                        y1="128"
                        x2="216"
                        y2="176"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="192"
                        y1="152"
                        x2="240"
                        y2="152"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="80"
                        y1="40"
                        x2="80"
                        y2="88"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="56"
                        y1="64"
                        x2="104"
                        y2="64"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="168"
                        y1="184"
                        x2="168"
                        y2="216"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="152"
                        y1="200"
                        x2="184"
                        y2="200"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <line
                        x1="144"
                        y1="80"
                        x2="176"
                        y2="112"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <rect
                        x="21.49"
                        y="105.37"
                        width="213.02"
                        height="45.25"
                        rx="8"
                        transform="translate(-53.02 128) rotate(-45)"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Sleep Enhancement Features
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Tools like guided breathing and meditation to aid in
                    quicker, more effective sleep initiation
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <ellipse
                        cx="128"
                        cy="80"
                        rx="88"
                        ry="48"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Secure Data Privacy
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Strong encryption and privacy measures to protect your
                    health data.
                  </p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="22"
                      height="22"
                    >
                      <rect width="256" height="256" fill="none" />
                      <circle
                        cx="84"
                        cy="108"
                        r="52"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M152.69,59.7A52,52,0,1,1,172,160"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M13,196a88,88,0,0,1,142,0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                      <path
                        d="M172,160a87.86,87.86,0,0,1,71,36"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      />
                    </svg>
                    <h4 className="font-medium text-slate-50">
                      Ongoing Support and Community
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Access to a supportive user community and continuous product
                    support for a holistic sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
