import { formatUnits } from "@ethersproject/units";

export function shortenHex(hex, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const ETHERSCAN_PREFIXES = {
  1: "",
  3: "ropsten.",
  4: "rinkeby.",
  5: "goerli.",
  42: "kovan.",
};

/**
 *
 * @param {("Account"|"Transaction")} type
 * @param {[number, string]} data
 */
export function formatEtherscanLink(type, data) {
  const [chainId, address] = data;
  // polygon
  if (chainId === 137) {
    switch (type) {
      case "Account": {
        return `https://polygonscan.com/address/${address}`;
      }
      case "Transaction": {
        return `https://polygonscan.com/tx/${hash}`;
      }
      default:
        return;
    }
  } else {
    switch (type) {
      case "Account": {
        return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
      }
      case "Transaction": {
        return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
      }
      default:
        return;
    }
  }
}

/**
 * @name parseBalance
 *
 * @param {import("@ethersproject/bignumber").BigNumberish} balance
 * @param {number} decimals
 * @param {number} decimalsToDisplay
 *
 * @returns {string}
 */
export const parseBalance = (balance, decimals = 18, decimalsToDisplay = 3) =>
  Number(formatUnits(balance, decimals)).toFixed(decimalsToDisplay);
