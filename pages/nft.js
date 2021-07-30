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

      <section className="header relative pt-32 items-center flex">
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

      <Footer />
    </>
  );
}
