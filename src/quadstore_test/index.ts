// import * as RDF from '@rdfjs/data-model'
// import { prefixes } from '@zazuko/rdf-vocabularies'
// import namespace from '@rdfjs/namespace'
// import { Sparql } from 'rdf-string'

import JasonLD from "jsonld"

import rdfParser from "rdf-parse"

import { Quadstore, QuadArrayResult }from "quadstore"

// import { Quad } from "rdf-quad"

import { DataFactory } from 'rdf-data-factory'

// import 'levelup'

import MemDown from 'memdown'
// import LevelUp from "levelup"

import { ReadableString } from "./readable-string.class"

/*
enum elementTypeIRI {

	APPLICATION_COMPONENT = "http://bp4mc2.org/def/archimate#ApplicationComponent"
}
*/
export async function testQuadStore() {


	const textStream = new ReadableString(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
			 xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
			 xmlns:archimate="http://bp4mc2.org/def/archimate#">
	   <archimate:CourseOfAction rdf:about="urn:uuid:id-755c208d-2d93-415b-ba49-405bd45bcb5b">
		  <rdfs:label xml:lang="en">Course of Action</rdfs:label>
		  <archimate:influence rdf:resource="urn:uuid:id-24378147-a60b-484a-bce3-5bb79388145a"/>
	   </archimate:CourseOfAction>
	   <archimate:BusinessInterface rdf:about="urn:uuid:id-57d92bef-3c56-4d44-affb-a44be147252e">
		  <rdfs:label xml:lang="en">Business Interface</rdfs:label>
		  <rdfs:comment xml:lang="en">asdfasdfaerdsfsd</rdfs:comment>
	   </archimate:BusinessInterface>
	   <archimate:ApplicationComponent rdf:about="urn:uuid:id-a24fd0b8-56f6-4636-80b1-0b1f5a46436d">
		  <rdfs:label xml:lang="en">Application Component</rdfs:label>
		  <archimate:readWriteAccess rdf:resource="urn:uuid:id-883bea07-3479-4934-a78e-be352f2db4f3"/>
		  <archimate:association rdf:resource="urn:uuid:id-883bea07-3479-4934-a78e-be352f2db4f3"/>
	   </archimate:ApplicationComponent>
	   <archimate:DataObject rdf:about="urn:uuid:id-883bea07-3479-4934-a78e-be352f2db4f3">
		  <rdfs:label xml:lang="en">Data Object</rdfs:label>
		  <archimate:composition rdf:resource="urn:uuid:id-d263b72e-3eb5-4c13-9163-5438deeddb31"/>
	   </archimate:DataObject>
	   <archimate:DataObject rdf:about="urn:uuid:id-d263b72e-3eb5-4c13-9163-5438deeddb31">
		  <rdfs:label xml:lang="en">Data Object</rdfs:label>
	   </archimate:DataObject>
	   <archimate:ApplicationComponent rdf:about="urn:uuid:id-febda12f-7558-4c56-83a3-70a4021d213a">
		  <rdfs:label xml:lang="en">Application Component</rdfs:label>
	   </archimate:ApplicationComponent>
	   <archimate:Goal rdf:about="urn:uuid:id-24378147-a60b-484a-bce3-5bb79388145a">
		  <rdfs:label xml:lang="en">Goal</rdfs:label>
	   </archimate:Goal>
	   <archimate:AndJunction rdf:about="urn:uuid:id-cd5a0111-ae13-47e2-8c8e-552197b6f8f0">
		  <rdfs:label xml:lang="en">Junction</rdfs:label>
	   </archimate:AndJunction>
	   <archimate:AndJunction rdf:about="urn:uuid:id-5ea3c277-174f-4936-8065-c94ccf3347a1">
		  <rdfs:label xml:lang="en">Junction</rdfs:label>
	   </archimate:AndJunction>
	   <archimate:Location rdf:about="urn:uuid:id-9b63a000-df39-4e11-9a60-5065cea99260">
		  <rdfs:label xml:lang="en">Location</rdfs:label>
	   </archimate:Location>
	   <rdf:Statement rdf:about="urn:uuid:id-712610d7-3a96-42ee-8227-c5cd3a01df2a">
		  <rdf:subject rdf:resource="urn:uuid:id-a24fd0b8-56f6-4636-80b1-0b1f5a46436d"/>
		  <rdf:object rdf:resource="urn:uuid:id-883bea07-3479-4934-a78e-be352f2db4f3"/>
		  <rdf:predicate rdf:resource="http://bp4mc2.org/def/archimate#readWriteAccess"/>
		  <rdfs:label xml:lang="en">this is a relationship</rdfs:label>
		  <rdfs:comment xml:lang="en">some documentation</rdfs:comment>
		  <archimate:association rdf:resource="urn:uuid:id-755c208d-2d93-415b-ba49-405bd45bcb5b"/>
	   </rdf:Statement>
	</rdf:RDF>`)

	const jsonLdString = `{
		"@context": {
			"@version": 1.1,
			"@base": "archimate:",
			"@vocab": "#",
			"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
			"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
			"owl": "http://www.w3.org/2002/07/owl#",
			"xml": "http://www.w3.org/XML/1998/namespace",
			"schema": "http://schema.org",
			"xsd": "http://www.w3.org/2001/XMLSchema#",
			"archimate": "http://archimate.tbd/namespace",
			"Thing": "schema:Thing",
			"property": "schema:property",
			"url": "property:url",
			"dateCreated": {
				"@id": "schema:dateCreated",
				"@type": "xsd:date"
			},
			"location": "schema:location",
			"identifier": "schema:identifier",
			"duration": {
				"@id": "schema:duration",
				"@type": "xsd:duration"
			},
			"isPartOf": {
				"@type": "@id"
			},
			"isPropertyOf": {
				"@type": "@id"
			},
			"isDefinedBy": {
				"@type": "@id"
			},
			"refersTo": {
				"@type": "@id"
			},
			"urn": "http://www.urn.org",
			"ar": "http://www.ar.org/2021/01/21/repository",
			"label": {
				"@type": "ar:label",
				"@id": "ar:label",
				"@container": "@language"
			},
			"ar:property": {
				"@type": "ar:property",
				"@id": "ar:property",
				"@container": "@language"
			},
			"propertyDef": {
				"@type": "ar:propertyDef",
				"@id": "ar:propertyDef",
				"@container": "@language"
			},
			"valueDateTime": {
				"@id": "ar:valueDateTime",
				"@type": "xsd:dateTime"
			},
			"ar:object": {
				"@type": "xsd:dateTime"
			},
			"name": {
				"@id": "archimate:name",
				"@container": "@language"
			},
			"documentation": {
				"@id": "archimate:documentation",
				"@container": "@language"
			}
		},
		"@graph": [
			{
				"@id": "http://archimate.tbd/graph",
				"generatedAt": "2012-04-09T00:00:00",
				"@graph": [
					{
						"@id": "archimate:Model",
						"@type": "owl:Class"
					},
					{
						"@id": "archimate:Relationship",
						"@type": "owl:Class"
					},
					{
						"@id": "Influence",
						"@type": "owl:Class",
						"owl:subClass": "archimate:Relationship"
					},
					{
						"@id": "archimate:Element",
						"@type": "owl:Class"
					},
					{
						"@id": "archimate:WorkPackage",
						"@type": "owl:Class",
						"owl:subClass": "archimate:Element"
					}
				]
			},
			{
				"@id": "http://eatool.user/graph",
				"generatedAt": "2012-04-09T00:00:00",
				"@graph": [
					{
						"@id": "model_1",
						"identifier": "123e4567-e89b-12d3-a456-426655440001",
						"@type": "Model",
						"ar:documentation": "test model",
						"location": "New Orleans Arena, New Orleans, Louisiana, USA",
						"dateCreated": "this is not a date"
					},
					{
						"@id": "property_def_1",
						"identifier": "123e4567-e89b-12d3-a456-426655440002",
						"@type": "propertyDef",
						"ar:documentation": "propertyDef",
						"dateCreated": "this is not a date"
					},
					{
						"@id": "work_package_1",
						"identifier": "123e4567-e89b-12d3-a456-426655440003",
						"@type": "archimate:WorkPackage",
						"documentation": {
							"en": "some project documentation",
							"pt": "alguma documentacao de projeto"
						},
						"location": "New York City, New York, USA",
						"dateCreated": "this is not a date",
						"duration": "some duration",
						"isPartOf": "model 1",
						"name": {
							"en": "some project",
							"pt": "um projeto"
						}
					},
					{
						"@id": "4",
						"identifier": "123e4567-e89b-12d3-a456-426655440004",
						"@type": "ar:property",
						"isDefinedBy": "property def 1",
						"isPropertydOf": "work package 1",
						"valueDateTime": "this should be a date time"
					}
				]
			}
		]
	}`

	console.log("process json ld ---------------------------------")
	const jsonLdQuad = await JasonLD.toRDF (jsonLdString, {skipExpansion: false, format: 'application/n-quads'})
	console.log(jsonLdQuad)


	console.log("get db ---------------------------------")
	const db = MemDown()

	console.log("get data factory")
	const dataFactory = new DataFactory()


	//const namedNode = dataFactory.namedNode('ex://s')

	// const namedNode2 = dataFactory.quad('http://example.org/subject', 'http://example.org/predicate', 'http://example.org/object')

	/*
	const quad = dataFactory.quad(
		dataFactory.namedNode('ex://s'),	// subject
		dataFactory.namedNode('ex://p'),	// predicate
		dataFactory.namedNode('ex://o'),	// object
		dataFactory.namedNode('ex://g'),	// graph
	)
	*/

	const elementClass = dataFactory.quad(
		dataFactory.namedNode('eatool:Element'),	// subject
		dataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),	// predicate
		dataFactory.namedNode('http://www.w3.org/2002/07/owl#Class')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const applicationComponentClass = dataFactory.quad(
		dataFactory.namedNode('eatool:ApplicationComponent'),	// subject
		dataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),	// predicate
		dataFactory.namedNode('http://www.w3.org/2002/07/owl#Class')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const applicationComponentSubClass = dataFactory.quad(
		dataFactory.namedNode('eatool:ApplicationComponent'),	// subject
		dataFactory.namedNode('http://www.w3.org/2000/01/rdf-schema#subClass'),	// predicate
		dataFactory.namedNode('eatool:Element')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const relationshipClass = dataFactory.quad(
		dataFactory.namedNode('eatool:Relationship'),	// subject
		dataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),	// predicate
		dataFactory.namedNode('http://www.w3.org/2002/07/owl#Class')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const assessmentClass = dataFactory.quad(
		dataFactory.namedNode('eatool:Assessment'),	// subject
		dataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),	// predicate
		dataFactory.namedNode('http://www.w3.org/2002/07/owl#Class')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const assessmentSubClass = dataFactory.quad(
		dataFactory.namedNode('eatool:Assessment'),	// subject
		dataFactory.namedNode('http://www.w3.org/2000/01/rdf-schema#subClass'),	// predicate
		dataFactory.namedNode('eatool:Relationship')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const associationClass = dataFactory.quad(
		dataFactory.namedNode('eatool:Association'),	// subject
		dataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),	// predicate
		dataFactory.namedNode('http://www.w3.org/2002/07/owl#Class')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	const associationSubClass = dataFactory.quad(
		dataFactory.namedNode('eatool:Association'),	// subject
		dataFactory.namedNode('http://www.w3.org/2000/01/rdf-schema#subClass'),	// predicate
		dataFactory.namedNode('eatool:Relationship')	// object
		// dataFactory.namedNode('ex://g'),	// graph
	)

	// <eatool:Assessment> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Class> .
	// <eatool:Assessment> <http://www.w3.org/2000/01/rdf-schema#subClass> "eatool:Relationship" .

	console.log(assessmentSubClass)

	const store = new Quadstore({
		dataFactory: new DataFactory(),
		backend: db
	})


	console.log("store opens")
	await store.open()



	rdfParser.parse(textStream, { contentType: 'application/rdf+xml', baseIRI: 'http://example.org' })
	// .on('data', (quad) => console.log(quad))
	.on('data', (quad) => store.put(quad))
	.on('error', (error) => console.error(error))
	.on('end', () => console.log('All done!'))

	console.log("store put")
	await store.put(elementClass)
	await store.put(applicationComponentClass)
	await store.put(applicationComponentSubClass)
	await store.put(relationshipClass)
	await store.put(assessmentClass)
	await store.put(assessmentSubClass)
	await store.put(associationClass)
	await store.put(associationSubClass)

	console.log("store get -----------------------")
	const pattern = {graph: dataFactory.namedNode('eatool:Assessment')}
	const { items } = await store.get(pattern)
	console.log(items)

	console.log("sparql -----------------------")

	/*
	const schema = namespace(prefixes.schema)
	const name = "John"
	const person = RDF.variable('person')
	const query = Sparql`SELECT * WHERE {
	  ${person} a ${PersonType} .
	  ${person} ${schema.name} ${name} .
	}`

	query.toString()
	*/

	const result = await store.sparql(`

	PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
	PREFIX owl: <http://www.w3.org/2002/07/owl#>

  SELECT ?s ?p ?o WHERE {
	  ?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://bp4mc2.org/def/archimate#ApplicationComponent> .
	  ?s ?p ?o .

	}
	`) // subject, predicate, object, graph

	const quadArray = result as QuadArrayResult
	// console.log(quadArray.items)

	console.log("length >>> ", quadArray.items.length)
	for (let i of quadArray.items) {
		console.log(i)
	}

	await store.close()

}

/*
function async findElements (store: Quadstore, type: elementTypeIRI): Promise<void> {

	const result = await store.sparql(`

  SELECT ?s ?p ?o WHERE {
	  ?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <${type}> .
	  ?s ?p ?o .

	}

}`)

console.log(result)
}
*/
