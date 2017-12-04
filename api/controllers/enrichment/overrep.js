'use strict';

var util = require('util');
var request = require('request');


module.exports = {
  overrep: overrep
};

/**
 * Overrep Test
 * 
 * req: a handle to the request object
 * res: a handle to the response object
 *
 */
function overrep(req, res) {
  var gene = "";

  if (req.ontology == "GO:44444") {
    gene = "molecular_fnc"
  }

  //var city = req.swagger.params.city.value;
  //var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial";

  // var url = "http://go.pantherdb.org/webservices/go/overrep.jsp?ontology=biological_process&species=HUMAN&correction=bonferroni&input=fake%0AMSH2%0AMSH3&format=json"
  //console.log('Executing request: ' + url);
  //request.get(url).pipe(res);

  // this sends back a JSON response which is a single string
  res.json("hello");
  /*
    examples:
      application / json: | -{
        "reference": {
          "mapped_count": 21042,
          "unmapped_count": 0
        },
        "input_list": {
          "mapped_count": 2,
          "mapped_id": [
            "MSH2",
            "MSH3"
          ],
          "unmapped_count": 1,
          "unmapped_id": "fake"
        },
        "result": [{
              "number_in_list": 0,
              "expected": 0.3384659252922726,
              "number_in_reference": 3561,
              "pValue": 0,
              "term": {
                "label": "UNCLASSIFIED"
              },
              "plus_minus": '-'
            }, {
              "number_in_list": 2,
              "expected": 0.000380191996958464,
              "number_in_reference": 4,
              "pValue": 0.00031258062671710987,
              "term": {
                "id": 'GO:0043570',
                "label": "maintenance of DNA repeat elements",
              }
              "plus_minus": +
            }, {
              "number_in_list": 2,
              "expected": 0.0005702879954376961,
              "number_in_reference": 6,
              "pValue": 0.0007033064101134962,
              "term": {
                "id": 'GO:0051096',
                "label": "positive regulation of helicase activity",
              },
              "plus_minus": +
            ]
          }
          */
}