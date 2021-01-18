import * as U from "uuid"

import * as G from "../../index"

import * as M from "./storage"

export class graph extends G.myGraph {

	async init (): Promise<void> {

	}

	async createType (t: G.Type): Promise<void> {

		// tests if type exists
		for (const value of Object.values(M.store)) {

			if (value.objectType === "t") {

				if (value.type === t) throw new Error("type already exists")

			}
		}

		// creates type
		M.store[U.v4()] = {
			objectType: "t",
			type: t
		}
	}

	async createLabel (l: string): Promise<void> {

		// tests if label exists, must be unique
		for (const value of Object.values(M.store)) {

			if (value.objectType === "l") {

				if (value.label === l) throw new Error("label already exists")

			}
		}

		// creates label
		M.store[U.v4()] = {
			objectType: "l",
			label: l
		}

	}

	async createNode (t: G.Type, id?: G.Id): Promise<G.Id> {

		if (!id) id = U.v4()

		// tests if id has been used already
		if (M.store[id]) throw new Error("id already exists")

		// creates node
		M.wiwDict[id] = "n"
		M.nodeDict[id] = t

		// creates node
		M.store[id] = {
			objectType: "n",
			typeId: t
		}

		return id
	}

	async createRel (t: G.Type, fromNrId: G.Id, toNrId: G.Id, id?: G.Id): Promise<G.Id> {

		if (!id) id = U.v4()

		// tests if id has been used already
		if (M.store[id]) throw new Error("id already exists")

		// tests if source exists, is node or relationship
		if (M.store[fromNrId].objectType !== "r" && M.store[fromNrId].objectType !== "n") throw new Error("incorrect source")

		// tests if target exists, is node or relationship
		if (M.store[toNrId].objectType !== "r" && M.store[toNrId].objectType !== "n") throw new Error("incorrect target")

		// tests if types exists

		const findType = function (object: M.TypeObject): M.TypeObject | undefined {

			if (object.objectType === "t" && object.type === t) return object

			return undefined

		}

		const findType2 = function (object: FACETIME): M.TypeObject | undefined {

			if (object.objectType === "t" && object.type === t) return object

			return undefined

			for (const [id, object] of Object.entries(object1)) {
				console.log(`${key}: ${value}`);
			  }


		}

		// const x = Object.values(M.store).find(findType)

		const y = Object.entries(M.store).find(entry => entry[1].objectType === "t" && entry[1].type === t)

		for (const value of Object.values(M.store)) {

			if (value.objectType === "t") {

				if (value.type === t throw new Error("label already exists")

			}
		}

		// creates relationship
		M.store[id] = {
			objectType: "r",
			typeId: t,
			fromNrId,
			toNrId
		}

		return id
	}

	async defProp (def: G.Def, id?: G.Id):  Promise<G.Id> {

		if (!id) id = U.v4()

		// tests if id has been used already
		if (M.wiwDict[id]) throw new Error("property definition already exists")

		return "def prop id"
	}

	async del (id: G.Id) {

	}

	async addProp (nrId: G.Id, defId: G.Id, value: G.Value, id?: G.Id):  Promise<G.Id> {

		if (!id) id = U.v4()

		// tests if id has been used already
		if (M.wiwDict[id]) throw new Error("property already exists")


		return "prop id"
	}

	async addLabel (nrlId: G.Id, labelId: G.Id): Promise<void> {

		// tests if where label will be attached exists
		if (M.wiwDict[labelId] !== "l") throw new Error(`only labels can be associated`)

		// tests if where label will be attached exists
		if (M.wiwDict[nrlId]) throw new Error(`label can't be associated with ${nrlId} as it does not exist`)

	}

	async removeLabel (nrlId: G.Id, label: G.Label): Promise<void> {

	}

	async get (nrlId: G.Id): Promise<object> {

		return {}
	}

	async addSchema(schema: string): Promise<void> {

	}

	async getSchema(): Promise<string> {

		return "schema"
	}

}