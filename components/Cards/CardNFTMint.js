import React from "react";

// components

export default function CardNFTMint() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">铸造 NFT</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            {/* NFT 信息 */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              NFT 信息
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    NFT 名称
                  </label>
                  <input
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
                    NFT 图片
                  </label>
                  <input
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
                    NFT 描述
                  </label>
                  <textarea
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
                  NFT 铸造数量
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* 空投地址 */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              NFT申领条件
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    <input
                      type="checkbox"
                      class="appearance-none checked:bg-blue-600 checked:border-transparent mr-2"
                    ></input>
                    选择参与过的链上活动
                  </label>

                  <div className="flex flex-wrap">
                    <div className="lg:w-6/12">
                      <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option>UNISWAP 交易</option>
                        <option>UNISWAP 添加流动性</option>
                        <option>SUSHISWAP 治理</option>
                        <option>Gitcoin Grant 捐赠</option>
                        <option>参与 L2 Hackthon</option>
                      </select>
                    </div>
                    <div className="lg:w-2/12 px-4 flex items-center">
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="至少交易次数"
                        defaultValue="1"
                      />
                      <span class="px-2">次</span>
                    </div>

                    <div className="lg:w-2/12 px-4">
                      <button
                        className="bg-blueGray-600 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        添加
                      </button>
                    </div>
                  </div>
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
                          UNISWAP 交易，至少 1 次
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
                          UNISWAP 添加流动性，至少 1 次
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
                </div>
              </div>
            </div>
            {/* end: 参与过的链上活动 */}

            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    <input
                      type="checkbox"
                      class="appearance-none checked:bg-blue-600 checked:border-transparent mr-2"
                    ></input>
                    链上资产
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3 ">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    地址上的资产总额
                  </label>
                  <div className="flex  items-center">
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="主流资产总额"
                    />

                    <span class="px-2">USD</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <div className="w-full mt-6 lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 font-bold uppercase text-lg px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  铸造
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
