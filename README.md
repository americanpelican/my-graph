# my-graph
A minimalistic Typescript-based graph server implementation which runs on top of high-performance databases, typically a document store, tuned to support visualizations of analyst-developed models.

# Audience
Programmers/analysts who are interested to develop graph models, capture data as basis for later analysis, typically some form of diagram visualization.

# Logical Structure
## Nodes
Used to represent real-life entities, with a few rules and features:
* Must have an unique identifier to facilitate reference, if not given will be assiged UUID,
* Must have exactly one type.
## Relationships
Take place between a pair of Nodes, Relationships or a Node and Relationship, with a few rules and features:
* Must have an unique identifier to facilitate reference, if not given will be assiged UUID,
* Must have exactly one type.
## Labels
Used to shape a domain or groups Nodes, Relationships into sets. Labels can be part of a hierarchy, including node type and associated constraints. Labels can be used to associate a set of Properties to Nodes and Relationships, with a few rules and features:
* Must have an unique identifier to facilitate reference, if not given will be assiged UUID,
## Properties
Name-value pairs are used to add qualities to nodes and relationships, with a few rules and features:
* Must have an unique identifier to facilitate reference, if not given will be assiged UUID,
* Must have a definition of data types such as number, string and boolean that it can hold.
## Constraints
Are used to ensure the nodes, relationships and properties adheres to the rules of the defined by types and labels.
## Indexes
Defined by schema, used to increase performance.
## Schema
Schema is optional, but could be used to define Types, Labels, Properties, Indexes and Constraints. Nodes, Relationships and Properties  can be created without an up front schema. Indexes and constraints can be introduced when desired, in order to gain performance or modeling benefits.
# Technology
## Runtime
It should be run by a Javascript engine such as NodeJS or Deno, typically from a command line, but could be embedded into a browser-based application or thick client such as Electron.
## API
It will provide a Typescript API, still under definition.
## Database
Graph can be stored in memory, or rely a high-performance database server. Vision is that drivers would be available for different technologies and CouchDB will be used as reference implementation.
