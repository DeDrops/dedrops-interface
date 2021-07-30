import React, { useRef } from "react";
import _ from "lodash";

import { AirdropContract } from "libs/contracts";
import { useWeb3React } from "@web3-react/core";

import useContract from "hooks/useContract";
import { Airdrop as AirdropABI } from "constans/abi/Airdrop";
import { IERC20 as IERC20ABI } from "constans/abi/IERC20";
import { toAmount, toNum } from "libs/web3Util";
import getContract from "libs/getContract";

// components

export default function CardSettings() {
  const { library, account } = useWeb3React();

  // 空投活动名称
  const nameRef = useRef();

  // 空投活动图片
  const imgUrlRef = useRef();

  // 空投活动描述
  const descRef = useRef();

  // 空投项目网址
  const websiteRef = useRef();

  // 空投项目twitter
  const twitterRef = useRef();

  // 空投项目telegram
  const telegramRef = useRef();

  // 空投 token 地址
  const tokenAddrRef = useRef();

  // 空投 token 数量
  const tokenAmountRef = useRef();

  // 空投 token 可领取的地址数量
  const tokenClaimableCountRef = useRef();

  // 空投开始时间
  const startTimeRef = useRef();

  // 空投结束时间
  const endTimeRef = useRef();

  // airdrop contract instance
  const airdropContractIns = useContract(AirdropContract, AirdropABI, account);

  const handleSubmit = async () => {
    const info = {
      name: nameRef.current.value,
      imgUrl: imgUrlRef.current.value,
      desc: descRef.current.value,
      website: websiteRef.current.value,
      twitter: twitterRef.current.value,
      telegram: telegramRef.current.value,
    };

    const condition = [];

    const airdrop = {
      token: tokenAddrRef.current.value,
      tokenAmount: tokenAmountRef.current.value,
      tokenClaimableCount: tokenClaimableCountRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
    };

    // const mintInfo = {
    //   name: nftName.current.value,
    //   imgUrl: nftImgUrl.current.value,
    //   desc: nftDesc,
    //   nftCount: nftCount.current.value,
    // };
    // const condition = {
    //   actions: nftOnChainConCheckbox.current.checked ? onChainCon : null,
    //   money: nftMoneyCheckbox.current.checked ? nftMoney.current.value : 0,
    // };
    // console.log(mintInfo);
    // // console.log(nftOnChainConCheckbox.current.checked);
    // console.log(condition);
    // // 要上链的数据
    // const data = {
    //   amount: nftCount,
    //   info: mintInfo,
    //   info2: condition,
    // };
    // erc20 contrasct instance
    const erc20ContractIns = getContract(
      tokenAddrRef.current.value,
      IERC20ABI,
      account,
      library
    );
    // console.log(erc20ContractIns);

    const allowance = await erc20ContractIns.allowance(
      account,
      AirdropContract
    );

    console.log("allowance", toNum(allowance));

    if (toNum(allowance) >= toAmount(airdrop.tokenAmount, 18)) {
      // 提交上链
      const res = await airdropContractIns.drop(
        tokenAddrRef.current.value,
        toAmount(airdrop.tokenAmount, 18),
        JSON.stringify(info),
        JSON.stringify({ airdrop, condition })
      );

      console.log(res);
      if (res.hash) {
        window.alert("提交成功,等待上链...");
      }
    } else {
      // approve token
      const resApprove = await erc20ContractIns.approve(
        AirdropContract,
        toAmount(airdrop.tokenAmount, 18)
      );

      console.log(resApprove);
      window.alert("提交成功,等待上链...");

      if (resApprove.hash) {
        window.alert("提交成功,等待上链...");
      }
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">发起空投</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {/* 空投项目信息 */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              空投项目信息
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投活动名称
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投活动图片
                  </label>
                  <input
                    ref={imgUrlRef}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投活动描述
                  </label>
                  <textarea
                    ref={descRef}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  空投项目网址
                </label>
                <input
                  ref={websiteRef}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  空投项目 Twitter
                </label>
                <input
                  ref={twitterRef}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  空投项目 Telegram
                </label>
                <input
                  ref={telegramRef}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* 空投地址 */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              空投地址条件
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    选择持有以下 NFT 的地址，作为空投的目标地址
                  </label>
                  <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option>资深 DeFi 玩家</option>
                    <option>资深 DeFi 玩家</option>
                    <option>资深 DeFi 玩家</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full mt-6 lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <button
                    className="bg-blueGray-600 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    添加
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <ul className="border border-white rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <span className="ml-2 flex-1 w-0 truncate">
                          资深 DeFi 玩家 (NFT 总数：10/100)
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          删除
                        </button>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <span className="ml-2 flex-1 w-0 truncate">
                          资深 DeFi 玩家 (NFT 总数：10/100)
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          删除
                        </button>
                      </div>
                    </li>
                  </ul>

                  <h6
                    className="mt-4 block text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    可空投地址总数: 200
                  </h6>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              空投信息
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投 Token 合约地址
                  </label>
                  <input
                    ref={tokenAddrRef}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="0x67a32987a8eaa0644702c362b53b8eebd126c20b"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    可领取空投地址数
                  </label>
                  <input
                    ref={tokenClaimableCountRef}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    平均每个地址获得空投Token 数量
                  </label>
                  <input
                    type="text"
                    disabled="disabled"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-blueGray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="6000"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投Token 数量
                  </label>
                  <input
                    ref={tokenAmountRef}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3"></div>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投开始时间
                  </label>
                  <input
                    ref={startTimeRef}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    空投结束时间
                  </label>
                  <input
                    ref={endTimeRef}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <div className="w-full mt-6 lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <button
                  onClick={handleSubmit}
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 font-bold uppercase text-lg px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  提交
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
