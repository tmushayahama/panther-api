'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  hello: hello
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);
  ///http://go.pantherdb.org/webservices/go/overrep.jsp?ontology=biological_process&species=HUMAN&correction=bonferroni&input=fake%0AMSH2%0AMSH3&format=json
  var gene = "";

  if (req.ontology == "GO:44444") {
    gene = "molecular_fnc"
  }

  // this sends back a JSON response which is a single string
  res.json(hello);
  /*
    examples:
    application/json: |-
      {
        reference: {
          mapped_count: 21042,
          unmapped_count: 0
        }, 
        input_list: {
          mapped_count: 2,
          mapped_id: [
            MSH2
            MSH3 ],
          unmapped_count: 1,
          unmapped_id: fake
        },
        result: [
          {
            number_in_list: 0,
            expected: 0.3384659252922726,
            number_in_reference: 3561,
            pValue: 0,
            term: {
              label: UNCLASSIFIED
            },
            plus_minus: '-'
          }, {
            number_in_list: 2,
            expected: 0.000380191996958464,
            number_in_reference: 4,
            pValue: 0.00031258062671710987,
            term: {
              id: 'GO:0043570',
              label: maintenance of DNA repeat elements,
            }
            plus_minus: +
          }, {
            number_in_list: 2,
            expected: 0.0005702879954376961,
            number_in_reference: 6,
            pValue: 0.0007033064101134962,
            term: {
              id: 'GO:0051096',
              label: positive regulation of helicase activity,
            },
            plus_minus: +
        ]
      }
      */
}