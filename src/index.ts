export type Type = string
export type Label = string
export type Id = string 	// unique identifier, using UUID
export enum Def {
	BOOLEAN = "boolean",
	STRING = "string",
	NUMBER = "number"
}
export type Value = string | number | boolean

export abstract class myGraph {

	abstract init (): Promise<void>

	// types must be unique
	abstract createType (t: Type): Promise<void>

	// labels must be unique
	abstract createLabel (l: Label): Promise<void>

	abstract createNode (t: Type, id?: Id): Promise<Id>

	abstract createRel (t: Type, fromNrId: Id, toNrId: Id, id?: Id): Promise<Id>

	abstract defProp (def: Def, id?: Id): Promise<Id>

	abstract del (nrdpid: Id): Promise<void>

	abstract addProp (nrId: Id, defId: Id, value: Value, id?: Id): Promise<Id>

	abstract addLabel (nrlId: Id, label: Label): Promise<void>

	abstract removeLabel (nrlId: Id, label: Label): Promise<void>

	abstract get (nrlId: Id): Promise<object>

	abstract addSchema(schema: string): Promise<void>

	abstract getSchema(): Promise<string>
}
