import { useState } from "react";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const ActiveComponent = tabs.find((tab) => tab.key === activeTab)?.component;

  return (
    <div>
      <div className="relative flex justify-between">
        <img
          src="../../imgs/hamburger.png"
          alt="hamburger"
          className="absolute left-0 top-40 w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] lg:w-[6rem] lg:h-[6rem] object-contain overflow-hidden"
        />
        <img
          src="../../imgs/bread.png"
          alt="bread"
          className="absolute right-0 top-40 w-[4rem] h-[8rem] object-contain overflow-hidden"
        />
      </div>
      <div className="container mx-auto py-10">
        <div>
          <div className="flex justify-center mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 text-base w-[100px] text-center hover:cursor-pointer ${
                  activeTab === tab.key
                    ? "border-b-2 border-[#006A5A] text-[#006A5A] font-bold"
                    : "text-[#D9D9D9] border-b-2 border-[#D9D9D9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-center text-lg font-semibold text-gray-800">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
