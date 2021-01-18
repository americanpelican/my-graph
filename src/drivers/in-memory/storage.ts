import type { Id, Def, Label, Type, Value } from "../../index"

interface Dictionary<T> {
	[id: string]: T;
  }

export interface Objects {
	objectType: "t" | "n" | "r" | "l" | "d" | "p"
}

export interface TypeObject extends Objects {
	objectType: "t"
	type: Type // must be unique
}

export interface TypeId {
	typeId: Id
}

export interface NodeObject extends Objects, TypeId {
	objectType: "n"
}

export interface RelationshipObject extends Objects, TypeId {
	objectType: "r"
	relationship: {
		fromNrId: Id,
		toNrId: Id
	}
}

export interface LabelObject extends Objects {
	objectType: "l"
	label: Label
}

export interface PropertyDefinitionObject extends Objects {
	objectType: "d"
	def: Def
}

export interface PropertyObject extends Objects {
	objectType: "p"
	value: Value
}

export const nodeDict: Dictionary<Type> = { }

export const RelationshipDict: Dictionary<{type: Type, fromNrId: Id, toNrId: Id}> = { }

export const propDefDict: Dictionary<Def> = { }

export const props: [{id: Id, nrId: Id, defId: Id, value: Value}?] = [ ]

export const types: [{id: Id}?] = [ ]

export const labels: [{id: Id}?] = [ ]

export const labelsAssociated: [{nrId: Id, label: Label}?] = []

export const wiwDict: Dictionary<"n" | "r" | "d" | "l" | "p"> = { }

export const store: Dictionary<
	TypeObject |
	NodeObject |
	RelationshipObject |
	LabelObject |
	PropertyDefinitionObject |
	PropertyObject
	> = { }
