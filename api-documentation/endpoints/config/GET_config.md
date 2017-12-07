# Enrichment Overrepresentation Resources

    GET config

## Description
Returns Config

***

## Parameters


***

## Return format
A object with the following keys and values.

- **supported_inpout** - Supported Input


***

## Errors
None

***

## Example
**Request**


**Return** 
``` json
    {        
      "supported_input": {
        "ONTOLOGY" : {
          "MOLECULAR_FUNCTION": {
            "ID": "GO:0003674",
            "LABEL": "Molecular Function",
            "DESCRIPTION": "We support MF and .... "
          },
          "BIOLOGICAL_PROCESS": {
            "ID": "GO:0008150",
            "LABEL": "Biological Component",
            "DESCRIPTION": "We support BP and .... "
          },
          "CELLULAR_COMPONENT": {
            "ID": "GO:0003674",
            "LABEL": "Cellular Component",
            "DESCRIPTION": "Description .... "
          }          
        },
        "TEST_TYPE": {
          "FISHER": {
            "ID":"fisher",
            "LABEL":"Fisher test type",
            "DETAILS": ""
          },
          "BINOMIAL": {
            "ID":"binomial",
            "LABEL":"Binomial test type",
            "DETAILS": ""
          }
        }
      }
   }
```
