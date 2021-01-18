/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty-function */

import * as M from 'mocha' // if you used the '@types/mocha' method to install mocha type definitions, uncomment
import { expect } from 'chai'

import * as G from "../drivers/in-memory"

let myGraph: G.graph

const typeA = "type A"
const typeB = "type B"
const typeR = "type R"

let nodeA: string
let nodeB: string
let rel1: string

export default function suite (): void {

	M.before('set up...', async (): Promise<void> => {

		myGraph = new G.graph()

		await myGraph.init()

	})

	M.after('teardown...', async (): Promise<void> => {

	})

	M.describe(`basic engine test`, () => {

		M.it("create type", async (): Promise<void> => {

			await myGraph.createType(typeA)
			await myGraph.createType(typeB)

		})

		M.it("try creating existing type", async (): Promise<void> => {

			try {

				await myGraph.createType(typeA)

			} catch (e) {

				console.log("im here")
				expect(e).to.not.be.null

			}

		})

		M.it("create node", async (): Promise<void> => {

			nodeA = await myGraph.createNode("type A")

			nodeB = await myGraph.createNode("type B")

		})

		M.it("try to create exising node", async (): Promise<void> => {

			try {

				await myGraph.createNode("type A", nodeA)

			} catch (e) {

				expect(e).to.not.be.null

			}

		})

		M.it("create relationship", async (): Promise<void> => {

			const rel1 = await myGraph.createRel(typeR, nodeA, nodeB)

			// await myGraph.createRel(typeR, nodeA, nodeB, rel1)

			expect(rel1).is.string

			console.log(rel1)

		})

		M.it("try to create existing relationship", async (): Promise<void> => {

			try {

				await myGraph.createRel(typeR, nodeA, nodeB, rel1)

				expect(false, "error should have be captured").to.be.true

			} catch (e) {

				expect(e).to.not.be.null

			}

		})

	})

}
