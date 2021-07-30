/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NFTTabs from "components/Tabs/NFTTabs";
import AirdropsCardTable from "components/Cards/CardAirdropsTable";
import CardNFTItem from "components/Cards/CardNFTItem";

import Footer from "components/Footers/Footer.js";
import { tabList } from "libs/airdropConfig";
import { fakeData } from "libs/nftConfig";

const renderTabsContent = (tabKey) => {
  if (tabKey === "all") {
    return fakeData.map((data) => <CardNFTItem key={data.id} data={data} />);
  } else {
    const tagList = fakeData.filter((data) => data.key === tabKey);
    console.log(tagList);
    return tagList.map((data) => <CardNFTItem key={data.id} data={data} />);
  }
};

export default function Index() {
  const [openTab, setOpenTab] = React.useState("all");

  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-24 items-center flex">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full px-4">
            <NFTTabs openTab={openTab} handleSetOpenTab={setOpenTab} />

            <div className="relative flex flex-col min-w-0 break-words  w-full mb-24  rounded">
              <div className="flex-auto">
                <div className="tab-content tab-space">
                  <div className="flex flex-wrap">
                    {renderTabsContent(openTab)}
                  </div>
                  {/* {renderTabsContent(openTab, setOpenTab)} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white rounded-lg py-4 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center mb-2">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">来尝试下铸造 NFT？</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                任何人都可以用 DeDrops 一键铸造 NFT！
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/nft/mint">
                  <span className="cursor-pointer github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 text-sm shadow hover:shadow-lg">
                    <span>Mint It!</span>
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
