# Configuration Resources

    GET config

## Description
Returns Config

***

## Parameters


***

## Return format
A object with the following keys and values.

- **supported_input** - Supported Input


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
            "DESCRIPTION": "We support MF complete .... "
          },
          "BIOLOGICAL_PROCESS": {
            "ID": "GO:0008150",
            "LABEL": "Biological Component",
            "DESCRIPTION": "We support BP complete .... "
          },
          "CELLULAR_COMPONENT": {
            "ID": "GO:0003674",
            "LABEL": "Cellular Component",
            "DESCRIPTION": "We support CC complete"
          },
          "PANTHER_GO_SLIM_MOLECULAR_PROCESS": {
            "DESCRIPTION": "PANTHER GO SLIM Molecular Function terms"
          },
          "PANTHER_GO_SLIM_BIOLOGICAL_PROCESS": {
            "DESCRIPTION": "PANTHER GO SLIM Biological Process terms"
          },
          "PANTHER_GO_SLIM_CELLULAR_COMPONENT": {
            "DESCRIPTION": "PANTHER GO SLIM Cellular Component terms"
          },
          "PANTHER_PROTEIN_CLASS": {
            "DESCRIPTION": "PANTHER Protein Class Terms"
          },
          "PANTHER_PATHWAY": {
            "DESCRIPTION": "PANTHER pathways"
          },
          "REACTOME": {
            "DESCRIPTION": "REACTOME pathways"
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
        },
        "CORRECTION":{
          "BONFERRONI": {
            "DESCRIPTION": "Only valid with TEST_TYPE BINOMIAL"
          }
        },
        "ORGANISM": {
          "HUMAN": {
          "DESCRIPTION": "Use http://www.pantherdb.org/webservices/garuda/search.jsp?type=organism to get 5-letter code of supported organisms"
          }
        },
        "FORMAT": {
          "JSON": {},
          "XML": {},
          "HTML":{
            "DESCRIPTION": "Redirect output to PANTHER results page"
          }
        },
        "INPUT": {
          "DESCRIPTION": "Gene names, Gene symbols, Protein ids delimited by newline" 
        }
      }
   }
```
