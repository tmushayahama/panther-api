# Enrichment Overrepresentation Resources

    GET enrichment/overrep

## Description
Returns Overrepresentation Test

***

## Parameters

#### Query
- **input** _(required)_ - List of reference genes to be used for the analysis
- **ontology** _(required)_ - Annotation Data Set
- **species**  _(required)_ -
- **test_type**
- **correction**
- **input_type**  Variant Cell Format. Currently we support VCF version 4.0 formatthe list of reference genes to be used for the analysis
- **flanking_region** Max offset range for SNP position to gene position.  This is used for VCF files.

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
            "number_in_list": 2,
            "expected": 0.0005702879954376961,
            "number_in_reference": 6,
            "pValue": 0.0007033064101134962,
            "term": {
              "id":"'GO:0051096",
              "label": "positive regulation of helicase activity",
            },
            "plus_minus": "+"
          } ]
        }
      }
```
