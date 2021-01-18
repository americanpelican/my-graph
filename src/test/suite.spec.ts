/* eslint-disable no-invalid-this */
import { describe } from 'mocha'

import graphEngine from './graph-engine'
import testQuadStore from './my-graph.spec'

/*
 *FILE NAMES MUST BE SORTED IN ORDER OF EXECUTION!!!!
 */

// export default function suite (): void {

describe.skip('overall test suite', () => {

	// eslint-disable-next-line no-undef
	describe('graph engine', graphEngine.bind(globalThis))

})

describe('my quad', () => {

	// eslint-disable-next-line no-undef
	describe('my graph', testQuadStore.bind(globalThis))

})

// }
