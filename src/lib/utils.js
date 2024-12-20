import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param  {string | object} inputs
 * @returns
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param {string} link
 * @returns Parsed Link
 */
export function parseHttps(link) {
  if (link.slice(0, 8) == "https://" || link.slice(0, 7) == "http://")
    return link;
  else return "https://" + link;
}

/**
 *
 * @param {number} number
 * @returns
 */
export function parseNumberToString(number) {
  let res = number.toString();
  let i = res.length - 1;
  while (i >= 2) {
    res = res.slice(0, i - 2) + "," + res.slice(i - 2, res.length);
    i -= 3;
  }
  return res;
}

/**
 *
 * @param {string} string
 * @returns
 */
export function textToParagraph(string) {
  return string.split("\n").flatMap((ele, i, arr) => {
    if (arr.length - 1 != i) return [ele, <br key={arr.length + i} />];
    else return ele;
  });
}
