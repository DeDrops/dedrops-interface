/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import AirdropsTabs from "components/Tabs/AirdropsTabs";
import AirdropsCardTable from "components/Cards/CardAirdropsTable";

import Footer from "components/Footers/Footer.js";
import { tabList } from "libs/airdropConfig";

const renderTabsContent = (tabKey, setOpenTab) => {
  const moreBtn = (tabKey) => {
    return (
      <a
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(tabKey);
        }}
        data-toggle="tab"
        href={`#${tabKey}`}
        role="tablist"
        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
      >
        更多 <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
      </a>
    );
  };

  return tabList.map((item) => {
    if (item.key === "overview") {
      return (
        <div
          className={tabKey === "overview" ? "block" : "hidden"}
          key={item.key}
          id={item.key}
        >
          <div className="flex flex-wrap items-center pt-2">
            <div className="w-full md:w-6/12 px-4">
              <AirdropsCardTable typeKey="ongoing" />
              {moreBtn("ongoing")}
            </div>
            <div className="w-full md:w-6/12 px-4">
              <AirdropsCardTable typeKey="upcoming" />
              {moreBtn("upcoming")}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={tabKey === item.key ? "block" : "hidden"}
          key={item.key}
          id={item.key}
        >
          <div className="flex flex-wrap items-center pt-2">
            <div className="w-full px-4">
              <AirdropsCardTable typeKey={item.key} />
            </div>
          </div>
        </div>
      );
    }
  });
};

export default function Index() {
  const [openTab, setOpenTab] = React.useState("overview");

  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-24 items-center flex">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full px-4">
            <AirdropsTabs openTab={openTab} handleSetOpenTab={setOpenTab} />

            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
              <div className="flex-auto">
                <div className="tab-content tab-space">
                  {renderTabsContent(openTab, setOpenTab)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white rounded-lg py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center mb-2">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">来尝试下发起空投？</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                任何人都可以用 DeDrops 一键发起空投！
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/airdrops/apply">
                  <span className="cursor-pointer github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 text-sm shadow hover:shadow-lg">
                    <span>DeDrops It!</span>
                  </span>
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
