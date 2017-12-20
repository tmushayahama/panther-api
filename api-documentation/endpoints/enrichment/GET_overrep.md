# Enrichment Overrepresentation Resources

    GET enrichment/overrep

## Description
Returns Overrepresentation Test

***

## Parameters

#### Query
- **input** _(required)_ - List of reference genes to be used for the analysis.  List to be separated by newline unless **input_type** parameter is specified and set to 'VCF'
- **input_type**  - Set to 'VCF' for Variant Call Format. Currently we support VCF version 4.0 formatted list of reference genes to be used for the analysis
- **flanking_region** Max offset range for SNP position to gene position.  This is used if **input_type** parameter is set to 'VCF'.
- **ontology** _(required)_ - Annotation Data Set. In addition to GO terms, PANTHER also supports PANTHER GO slim, PANTHER protein class, PANTHER pathways and Reactome Pathways.  Just using the GO id will not work.  We may want to register annotation data set types in identifiers.org
- **species**  _(required)_ Use 5 letter species code
- **test_type** - If specified, this can be 'FISHER' or 'BINOMIAL'.  If not specified, system will perform Fisher's exact test 
- **correction** - This is applicable only for 'BINOMIAL' test and can be set to 'bonferroni' to apply the bonferroni correction to the p-value in the results.  We may have additional parameters as new tests are added


***

## Return format
A object with the following keys and values. Result is an array of

- **reference**
- **input_list**
- **result** -  List of 

***

## Errors
None

***

## Example
**Request**


**Return** 
``` json
    {
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
            "plus_minus": "-"
          }, {
            "number_in_list": 2,
            "expected": 0.000380191996958464,
            "number_in_reference": 4,
            "pValue": 0.00031258062671710987,
            "term": {
              "id": "GO:0043570",
              "label": "maintenance of DNA repeat elements",
            },
            "plus_minus": "+"
          }, {
            "number_in_list": 0,
            "fdr": 1.000000000037891,
            "expected": 0.023381807812945538,
            "number_in_reference": 246,
            "pValue": 1.000000000037891,
            "term": {
                "id": "GO:0010976",
                "label": "positive regulation of neuron projection development"
            },
            "plus_minus": "-"
        }
    ],
    "tool_release_date": 20171205,
    "data_version_release_date": "GO Ontology database  Released 2017-11-28",
    "test_type": "FISHER"
}}
```


## How to use

**We recommend that you call ** [<code>GET</code> config](https://github.com/tmushayahama/panther-api/blob/master/api-documentation/endpoints/config/GET_config.md) to get all the configuration and data needed. FOr example supported organism

### Example 

### Javascript
``` javascript
  var config = getConfig();
  var human = config.SUPPORTED_INPUT.ORGANISM.HUMAN.ID;
  var bp = config.SUPPORTED_INPUT.DATA_ANNOTATION_TYPE.BIOLOGICAL_PROCES.ID;

  var geneList = "abca1\tabca2";
  var result = getOverrep(geneList, bp,  human);
```