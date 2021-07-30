import React from "react";
import PropTypes from "prop-types";

import { tabList } from "libs/airdropConfig";
import { tableHeads } from "libs/airdropConfig";

const fakeData = [
  {
    project: "ABC",
    participatedAddrCount: "100",
    totalAirdropAddrCount: "1000",
    totalAirdropAmount: "500000",
    startTime: "2021.7.29 12:00",
    endTime: "2021.8.1 12:00",
  },
  {
    project: "CBA",
    participatedAddrCount: "100",
    totalAirdropAddrCount: "1000",
    totalAirdropAmount: "500000",
    startTime: "2021.7.29 12:00",
    endTime: "2021.8.1 12:00",
  },
];

const tabListKeys = tabList.map((item) => item.key);
tabListKeys.splice(0, 1);
// components

const renderTitle = (typeKey) => {
  if (typeKey) {
    const title = tabList.find((item) => item.key === typeKey).text;
    return <h3 className="font-semibold text-lg text-blueGray-700">{title}</h3>;
  }
};

const renderTableHead = (typeKey, TableHead) => {
  if (typeKey === "ongoing") {
    if (TableHead.key === "startTime") {
      return null;
    }
  }

  if (typeKey === "upcoming") {
    if (TableHead.key === "endTime") {
      return null;
    }
  }

  return (
    <th
      key={TableHead.key}
      className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
    >
      {TableHead.text}
    </th>
  );
};

const renderTableData = (typeKey, rowData, index) => {
  return (
    <tr
      key={index}
      className="hover:bg-blueGray-600 hover:text-white cursor-pointer"
    >
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {rowData.project}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {rowData.participatedAddrCount}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs wπitespace-nowrap p-4">
        {rowData.totalAirdropAddrCount}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {rowData.totalAirdropAmount}
      </td>
      {typeKey !== "ongoing" ? (
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {rowData.startTime}
        </td>
      ) : null}
      {typeKey !== "upcoming" ? (
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {rowData.endTime}
        </td>
      ) : null}
    </tr>
  );
};

export default function AirdropsCardTable({ color, typeKey }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        {typeKey && (
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                {renderTitle(typeKey)}
              </div>
            </div>
          </div>
        )}

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {tableHeads.map((head) => renderTableHead(typeKey, head))}
              </tr>
            </thead>
            <tbody>
              {fakeData.map((data, index) =>
                renderTableData(typeKey, data, index)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

AirdropsCardTable.defaultProps = {
  color: "light",
  typeKey: "",
};

AirdropsCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  typeKey: PropTypes.oneOf(["", ...tabListKeys]),
};
