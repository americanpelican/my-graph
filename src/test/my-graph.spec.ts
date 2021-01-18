/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty-function */

import * as M from 'mocha' // if you used the '@types/mocha' method to install mocha type definitions, uncomment
// import { expect } from 'chai'

import { testQuadStore } from "../quadstore_test"

export default function suite (): void {

	M.before('set up...', async (): Promise<void> => {

	})

	M.after('teardown...', async (): Promise<void> => {

	})

	M.describe(`basic engine test`, () => {

		M.it("test quad", async (): Promise<void> => {

			await testQuadStore()

		})

	})

}