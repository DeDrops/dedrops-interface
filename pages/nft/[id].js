/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import AirdropsTabs from "components/Tabs/AirdropsTabs";
import AirdropsCardTable from "components/Cards/CardAirdropsTable";

import { fakeData } from "libs/nftConfig";

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

export default function NFTDetail({ data }) {
  const [openTab, setOpenTab] = React.useState("overview");

  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-24 items-center flex">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full px-4 pt-8">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
              <div className="flex flex-wrap pt-2">
                <div className="w-full lg:w-6/12 px-4">
                  {/* 领取条件 */}
                  <h4 className="text-xl font-bold text-blueGray-600">
                    领取条件
                  </h4>

                  <div className="mt-2">
                    <ul className="border border-blueGray-200 rounded-md divide-y divide-gray-200">
                      <li className="pl-3 pr-4 py-4 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">
                            UNISWAP 交易，至少 1 次
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="bg-emerald-500 text-white font-bold  text-xs px-4 py-2 rounded  outline-none mr-1 mb-1 ">
                            满足
                          </span>
                        </div>
                      </li>
                      <li className="pl-3 pr-4 py-4 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">
                            UNISWAP 添加流动性，至少 1 次
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="bg-red-500 text-white font-bold  text-xs px-4 py-2 rounded  outline-none mr-1 mb-1 ">
                            不满足
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full mt-6 px-4">
                    <div className="relative w-full mb-3 px-12">
                      <button
                        className="bg-emerald-500 text-white block w-full mr-1active:bg-emerald-500 font-bold uppercase text-lg px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        领取
                      </button>
                    </div>
                  </div>

                  <hr className="my-6 border-b-1 border-blueGray-300" />

                  {/* 关联的空投活动 */}
                  <h4 className="mb-4 text-xl font-bold text-blueGray-600">
                    关联的空投活动
                  </h4>

                  <AirdropsCardTable />
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="px-4">
                    <div className="bg-blueGray-200 h-600-px relative flex p-8 flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-lg ease-linear transition-all duration-150 hover:shadow-lg">
                      <blockquote className="relative">
                        <h4 className="text-xl font-bold text-blueGray-600">
                          {data.name}
                        </h4>

                        <a
                          href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                          className="text-xs font-semibold block py-1 px-2  rounded text-blueGray-200 bg-blueGray-400 mt-1"
                        >
                          智能合约: {data.contract}
                        </a>

                        <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-emerald-600 bg-emerald-200 mr-2">
                          已领取/总数: {data.claimed} / {data.total}
                        </span>

                        {data.key && (
                          <span className="mt-2 text-xs font-semibold inline-block py-1 px-2  rounded text-orange-600 bg-orange-200">
                            {data.tag}
                          </span>
                        )}
                      </blockquote>

                      <img
                        alt=""
                        src={data.img}
                        className="object-cover my-4 h-64 w-full align-middle"
                      />

                      <p className="text-md font-light my-2 text-blueGray-600">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

NFTDetail.defaultProps = {
  data: fakeData[0],
  tag: "dedrops",
};
