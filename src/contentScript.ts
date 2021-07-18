"use strict"

import { replace } from "./util"

const parenClassName = "__egovstylist-paren"
const mainId = "MainProvision"

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec))

async function element(id: string, timeout: number): Promise<HTMLElement> {
  const now = new Date()
  while (new Date().getTime() - now.getTime() < timeout) {
    const el = document.getElementById(id)
    if (el) {
      return el
    }
    await sleep(100)
  }
  throw `${mainId} not found within ${timeout} ms`
}

async function main(): Promise<void> {
  await element(mainId, 10000)

  const divs = document.querySelectorAll("div")
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i]

    // seems like a title, not the paragraph (which we're looking for)
    if (div.style.fontWeight) {
      continue
    }

    // the sentences we're looking for are the end of the tree and don't include child div elements
    if (div.innerHTML.indexOf("div") !== -1) {
      continue
    }

    // and anchors
    if (div.innerHTML.indexOf("<a ") !== -1) {
      continue
    }

    if (div.innerHTML.indexOf("（") !== -1) {
      div.innerHTML = replace(
        div.innerHTML,
        `<span class="${parenClassName}">（`,
        `）</span>`
      )
    }
  }
}

;(async function () {
  await main()
})()
