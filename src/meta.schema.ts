import type * as SCHEMA from "./mygraph1.schema"

export const bare: SCHEMA.Schema = {

	$schema: "VERSION GOES HERE",

	schemaOnly: {
		nodes: true,
		relationships: true,
		labels: true
	},

	definitions: {
		types: [
			{
				id: "_label_",
				node: true,
				relationship: false
			},
			{
				id: "_property_def_",
				node: true,
				relationship: false
			},
			{
				id: "_property_",
				node: true,
				relationship: false
			},
			{
				id: "_label_",
				node: true,
				relationship: false
			},
			{
				id: "_is_property_of_",
				node: false,
				relationship: true
			},
			{
				id: "_defines_property_",
				node: false,
				relationship: true
			},
			{
				id: "_labels_",
				node: false,
				relationship: true
			}

		],
		properties: []
	}

}