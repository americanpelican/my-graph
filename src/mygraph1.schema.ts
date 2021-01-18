export interface Basis {
	id: string,
	description?: string,
	examples?: string | number | boolean []
}

export interface Type extends Basis {
	node: boolean
	relationship: boolean
}

export interface Label extends Basis {
	node: boolean
	relationship: boolean
	constraints: {
		types: string[]
		composes: string
	}
}

export interface ValueType {
	value: string
}

export interface RangeConstraints {
	minimum?: number | string
	exclusiveMinimum?: number | string
	maximum?: number | string
	exclusiveMaximum?: number | string
}

export interface NumberConstraints {
	multipleOf?: number
}

export interface enumValue extends ValueType {
	value: "enum"
	enum: string | number | boolean []
}

export interface numberValue extends ValueType, NumberConstraints {
	value: "string"
}

export interface integerValue extends ValueType, NumberConstraints, RangeConstraints {
	value: "integer"
}

export interface stringValue extends ValueType, RangeConstraints {
	value: "string"
	regex?: string
}

export interface PropertyDefinition extends Basis {
	default: boolean | number | string
	value: enumValue | numberValue | integerValue | stringValue
}

export interface Schema {
	$schema: string,
	schemaOnly: {
		nodes: boolean,
		relationships: boolean,
		labels: boolean
	}
	definitions: {
		types: Type[],
		properties: PropertyDefinition[]
	}
}