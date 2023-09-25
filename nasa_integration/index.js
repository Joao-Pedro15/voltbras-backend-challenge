const path = require("path")
const { pipeline }  = require("stream/promises")
const fs = require('fs')
const csv = require('csv-parser')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const file = path.join(__dirname, 'PS_2023.09.24_15.48.08.csv')


async function * item(stream) {
  let count = 0
  let names = []
  for await(let chunk of stream) {
    if(!names.includes(chunk.hostname) && Number(chunk.pl_bmassj ?? 0) > 10) {
      yield chunk
      count++
    }
    names.push(chunk.hostname)
  }
}

async function * nexted(stream) {
  for await(let chunk of stream) {
    try {
      await prisma.suitablePlanets.create({
        data: {
          name: chunk.hostname,
          mass: Number(chunk.pl_bmassj),
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}

async function main() {
  const stream = fs.createReadStream(file)

  await pipeline(
    stream,
    csv(),
    item,
    nexted
  )
}

main()