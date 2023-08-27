#!/usr/bin/env/ node

import { createSpinner } from 'nanospinner'
import { buzzwords } from './buzzwords.js'

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

async function spinAndPrint(text) {
  const spinner = createSpinner().start()
  await sleep()
  spinner.success({ text: `${text}` })
}

function sleep(ms = 1_800) {
  return new Promise((_) => setTimeout(_, ms))
}

async function main() {
  const buzzword = getRandomWord(buzzwords)
  await spinAndPrint(buzzword)
  // console.log(`${process.argv[2]}`)
}

await main().catch((e) => console.log(e))
