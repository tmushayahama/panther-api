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
  "PANTHER_VERSION" : "13",
  "API_VERSION": "1",
  "DATA_VERSIONS": "13.2",
  "SUPPORTED_INPUT": {   
    "DATA_ANNOTATION_TYPE": {
        "ANNOT_TYPE_PANTHER_PATHWAY": {
            "RELEASE_DATE": "2017-11-12",
            "VERSION": 13,
            "DESCRIPTION": "Panther Pathways",
            "LABEL": "ANNOT_TYPE_PANTHER_PATHWAY",
            "ID": "ANNOT_TYPE_ID_PANTHER_PATHWAY"
        },
        "BIOLOGICAL_PROCESS": {
            "RELEASE_DATE": "2017-10-23",
            "VERSION": 1.2,
            "DESCRIPTION": "Any process specifically pertinent to the functioning of integrated living units: cells, tissues, organs, and organisms. A process is a collection of molecular events with a defined beginning and end. [GOC:go_curators, GOC:isa_complete]",
            "LABEL": "biological_process",
            "ID": "GO:0008150"
        },
        "MOLECULAR_FUNCTION": {
            "RELEASE_DATE": "2017-10-23",
            "VERSION": 1.2,
            "DESCRIPTION": "The actions of a single gene product or complex at the molecular level consisting of a single biochemical activity or multiple causally linked biochemical activities. A given gene product may exhibit one or more molecular functions. [GOC:go_curators]",
            "LABEL": "molecular_function",
            "ID": "GO:0003674"
        },
        "PANTHER_GO_SLIM_BIOLOGICAL_PROCESS": {
            "RELEASE_DATE": "2017-11-12",
            "VERSION": 13,
            "DESCRIPTION": "\"Any process specifically pertinent to the functioning of integrated living units: cells, tissues, organs, and organisms. A process is a collection of molecular events with a defined beginning and end.\" [GOC:go_curators, GOC:isa_complete]",
            "LABEL": "PANTHER_GO_Slim_Biological_Process",
            "ID": "ANNOT_TYPE_ID_PANTHER_GO_SLIM_BP"
        },
        "PANTHER_GO_SLIM_MOLECULAR_FUNCTION": {
            "RELEASE_DATE": "2017-11-12",
            "VERSION": 13,
            "DESCRIPTION": "\"Elemental activities, such as catalysis or binding, describing the actions of a gene product at the molecular level. A given gene product may exhibit one or more molecular functions.\" [GOC:go_curators]",
            "LABEL": "PANTHER_GO_Slim_Molecular_Function",
            "ID": "ANNOT_TYPE_ID_PANTHER_GO_SLIM_MF"
        },
        "CELLULAR_COMPONENT": {
            "RELEASE_DATE": "2017-10-23",
            "VERSION": 1.2,
            "DESCRIPTION": "The part of a cell, extracellular environment or virus in which a gene product is located. A gene product may be located in one or more parts of a cell and its location may be as specific as a particular macromolecular complex, that is, a stable, persistent association of macromolecules that function together. [GOC:go_curators, NIF_Subcellular:sao-1337158144]",
            "LABEL": "cellular_component",
            "ID": "GO:0005575"
        },
        "PROTEIN_CLASS": {
            "RELEASE_DATE": "2017-11-12",
            "VERSION": 13,
            "LABEL": "protein_class",
            "ID": "ANNOT_TYPE_ID_PANTHER_PC"
        },
        "ANNOT_TYPE_REACTOME_PATHWAY": {
            "RELEASE_DATE": "2017-10-13",
            "DESCRIPTION": "Reactome Pathways",
            "LABEL": "ANNOT_TYPE_REACTOME_PATHWAY",
            "ID": "ANNOT_TYPE_ID_REACTOME_PATHWAY"
        },
        "PANTHER_GO_SLIM_CELLULAR_LOCATION": {
            "RELEASE_DATE": "2017-11-12",
            "VERSION": 13,
            "DESCRIPTION": "\"The part of a cell or its extracellular environment in which a gene product is located. A gene product may be located in one or more parts of a cell and its location may be as specific as a particular macromolecular complex, that is, a stable, persistent association of macromolecules that function together.\" [GOC:go_curators]",
            "LABEL": "PANTHER_GO_Slim_Cellular_Location",
            "ID": "ANNOT_TYPE_ID_PANTHER_GO_SLIM_CC"
        }
    },
    "ORGANISM":{
      "TRICA": {
          "COMMON_NAME": "red flour beetle",
          "LONG_NAME": "Tribolium castaneum",
          "LABEL": "TRICA",
          "ID": 7070
      },
      "NEUCR": {
          "COMMON_NAME": "fungi",
          "LONG_NAME": "Neurospora crassa",
          "LABEL": "NEUCR",
          "ID": 367110
      }
    }
  },
  "ORGANISM" : {
    "VERSION": {
      "13_1": {
        "TRICA": {
          "ID": 7070
        },
        "NEUCR": {
          "ID": 367110
        }
      },
      "13_2": {
        "THEYD": {
          "ID": 289376
        },
        "BACCR": {
          "ID": 226900
        },
        "VIBCH": {
          "ID": 243277
        },
      }
    },
    "ALL": {
        "TRICA": {
            "COMMON_NAME": "red flour beetle",
            "LONG_NAME": "Tribolium castaneum",
            "LABEL": "TRICA",
            "ID": 7070,
            "SUPPORTED_VERSIONS" : [
              "13.1",
              "13.2"
            ]
        },
        "NEUCR": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Neurospora crassa",
            "LABEL": "NEUCR",
            "ID": 367110,
            "SUPPORTED_VERSIONS" : [
              "13.2"
            ]
        },
        "THEYD": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Thermodesulfovibrio yellowstonii",
            "LABEL": "THEYD",
            "ID": 289376,
            "SUPPORTED_VERSIONS" : [
              "13.3"
            ]
        },
        "BACCR": {
            "COMMON_NAME": "bacillus cereus",
            "LONG_NAME": "Bacillus cereus",
            "LABEL": "BACCR",
            "ID": 226900
        },
        "VIBCH": {
            "COMMON_NAME": "cholera",
            "LONG_NAME": "Vibrio cholerae",
            "LABEL": "VIBCH",
            "ID": 243277
        },
        "PLAF7": {
            "COMMON_NAME": "apicomplexan",
            "LONG_NAME": "Plasmodium falciparum",
            "LABEL": "PLAF7",
            "ID": 36329
        },
        "KORCO": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Korarchaeum cryptofilum",
            "LABEL": "KORCO",
            "ID": 374847
        },
        "CRYNJ": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Cryptococcus neoformans",
            "LABEL": "CRYNJ",
            "ID": 214684
        },
        "PHANO": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Phaeosphaeria nodorum",
            "LABEL": "PHANO",
            "ID": 321614
        },
        "HALSA": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Halobacterium salinarum",
            "LABEL": "HALSA",
            "ID": 64091
        },
        "SALTY": {
            "COMMON_NAME": "salmonella",
            "LONG_NAME": "Salmonella typhimurium",
            "LABEL": "SALTY",
            "ID": 99287
        },
        "LEIMA": {
            "COMMON_NAME": "protozoa",
            "LONG_NAME": "Leishmania major",
            "LABEL": "LEIMA",
            "ID": 5664
        },
        "PSEAE": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Pseudomonas aeruginosa",
            "LABEL": "PSEAE",
            "ID": 208964
        },
        "MONDO": {
            "COMMON_NAME": "opossum",
            "LONG_NAME": "Monodelphis domestica",
            "LABEL": "MONDO",
            "ID": 13616
        },
        "CHICK": {
            "COMMON_NAME": "chicken",
            "LONG_NAME": "Gallus gallus",
            "LABEL": "CHICK",
            "ID": 9031
        },
        "HAEIN": {
            "COMMON_NAME": "influenza",
            "LONG_NAME": "Haemophilus influenzae",
            "LABEL": "HAEIN",
            "ID": 71421
        },
        "DICDI": {
            "COMMON_NAME": "slime mold",
            "LONG_NAME": "Dictyostelium discoideum",
            "LABEL": "DICDI",
            "ID": 44689
        },
        "CHLAA": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Chloroflexus aurantiacus",
            "LABEL": "CHLAA",
            "ID": 324602
        },
        "DROME": {
            "COMMON_NAME": "fruit fly",
            "LONG_NAME": "Drosophila melanogaster",
            "LABEL": "DROME",
            "ID": 7227
        },
        "GORGO": {
            "COMMON_NAME": "gorilla",
            "LONG_NAME": "Gorilla gorilla gorilla",
            "LABEL": "GORGO",
            "ID": 9595
        },
        "THAPS": {
            "COMMON_NAME": "diatom",
            "LONG_NAME": "Thalassiosira pseudonana",
            "LABEL": "THAPS",
            "ID": 35128
        },
        "RHOBA": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Rhodopirellula baltica",
            "LABEL": "RHOBA",
            "ID": 243090
        },
        "DICTD": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Dictyoglomus turgidum",
            "LABEL": "DICTD",
            "ID": 515635
        },
        "ANOCA": {
            "COMMON_NAME": "lizard",
            "LONG_NAME": "Anolis carolinensis",
            "LABEL": "ANOCA",
            "ID": 28377
        },
        "YEAST": {
            "COMMON_NAME": "Brewer's yeast",
            "LONG_NAME": "Saccharomyces cerevisiae",
            "LABEL": "YEAST",
            "ID": 559292
        },
        "PIG": {
            "COMMON_NAME": "pig",
            "LONG_NAME": "Sus scrofa",
            "LABEL": "PIG",
            "ID": 9823
        },
        "FUSNN": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Fusobacterium nucleatum",
            "LABEL": "FUSNN",
            "ID": 190304
        },
        "ENTHI": {
            "COMMON_NAME": "amoeba",
            "LONG_NAME": "Entamoeba histolytica",
            "LABEL": "ENTHI",
            "ID": 5759
        },
        "ARATH": {
            "COMMON_NAME": "dicot plant",
            "LONG_NAME": "Arabidopsis thaliana",
            "LABEL": "ARATH",
            "ID": 3702
        },
        "ASPFU": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Neosartorya fumigata",
            "LABEL": "ASPFU",
            "ID": 330879
        },
        "YARLI": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Yarrowia lipolytica",
            "LABEL": "YARLI",
            "ID": 284591
        },
        "CIOIN": {
            "COMMON_NAME": "sea squirt",
            "LONG_NAME": "Ciona intestinalis",
            "LABEL": "CIOIN",
            "ID": 7719
        },
        "MACMU": {
            "COMMON_NAME": "macacque monkey",
            "LONG_NAME": "Macaca mulatta",
            "LABEL": "MACMU",
            "ID": 9544
        },
        "MYCGE": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "mycoplasma genitalium",
            "LABEL": "MYCGE",
            "ID": 243273
        },
        "SOLLC": {
            "COMMON_NAME": "tomato",
            "LONG_NAME": "Solanum lycopersicum",
            "LABEL": "SOLLC",
            "ID": 4081
        },
        "DANRE": {
            "COMMON_NAME": "zebrafish",
            "LONG_NAME": "Danio rerio",
            "LABEL": "DANRE",
            "ID": 7955
        },
        "YERPE": {
            "COMMON_NAME": "yersinia",
            "LONG_NAME": "Yersinia pestis",
            "LABEL": "YERPE",
            "ID": 632
        },
        "EMENI": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Emericella nidulans",
            "LABEL": "EMENI",
            "ID": 227321
        },
        "ORNAN": {
            "COMMON_NAME": "platypus",
            "LONG_NAME": "Ornithorhynchus anatinus",
            "LABEL": "ORNAN",
            "ID": 9258
        },
        "THEKO": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Thermococcus kodakaraensis",
            "LABEL": "THEKO",
            "ID": 69014
        },
        "HORSE": {
            "COMMON_NAME": "horse",
            "LONG_NAME": "Equus caballus",
            "LABEL": "HORSE",
            "ID": 9796
        },
        "SCHPO": {
            "COMMON_NAME": "fission yeast",
            "LONG_NAME": "Schizosaccharomyces pombe",
            "LABEL": "SCHPO",
            "ID": 284812
        },
        "LISMO": {
            "COMMON_NAME": "listeria",
            "LONG_NAME": "Listeria monocytogenes",
            "LABEL": "LISMO",
            "ID": 169963
        },
        "GEOSL": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Geobacter sulfurreducens",
            "LABEL": "GEOSL",
            "ID": 243231
        },
        "AQUAE": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Aquifex aeolicus",
            "LABEL": "AQUAE",
            "ID": 224324
        },
        "HUMAN": {
            "COMMON_NAME": "human",
            "LONG_NAME": "Homo sapiens",
            "LABEL": "HUMAN",
            "ID": 9606
        },
        "MONBE": {
            "COMMON_NAME": "sponge",
            "LONG_NAME": "Monosiga brevicollis",
            "LABEL": "MONBE",
            "ID": 81824
        },
        "FELCA": {
            "COMMON_NAME": "cat",
            "LONG_NAME": "Felis catus",
            "LABEL": "FELCA",
            "ID": 9685
        },
        "CHLTR": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Chlamydia trachomatis",
            "LABEL": "CHLTR",
            "ID": 272561
        },
        "CAEEL": {
            "COMMON_NAME": "nematode worm",
            "LONG_NAME": "Caenorhabditis elegans",
            "LABEL": "CAEEL",
            "ID": 6239
        },
        "STRCO": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Streptomyces coelicolor",
            "LABEL": "STRCO",
            "ID": 100226
        },
        "USTMA": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Ustilago maydis",
            "LABEL": "USTMA",
            "ID": 237631
        },
        "THEMA": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Thermotoga maritima",
            "LABEL": "THEMA",
            "ID": 243274
        },
        "BACTN": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Bacteroides thetaiotaomicron",
            "LABEL": "BACTN",
            "ID": 226186
        },
        "SCLS1": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Sclerotinia sclerotiorum",
            "LABEL": "SCLS1",
            "ID": 665079
        },
        "SULSO": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Sulfolobus solfataricus",
            "LABEL": "SULSO",
            "ID": 273057
        },
        "ECOLI": {
            "COMMON_NAME": "E. coli",
            "LONG_NAME": "Escherichia coli",
            "LABEL": "ECOLI",
            "ID": 83333
        },
        "LEPOC": {
            "COMMON_NAME": "spotted gar",
            "LONG_NAME": "lepisosteus oculatus",
            "LABEL": "LEPOC",
            "ID": 7918
        },
        "STRPU": {
            "COMMON_NAME": "sea urchin",
            "LONG_NAME": "Strongylocentrotus purpuratus",
            "LABEL": "STRPU",
            "ID": 7668
        },
        "VITVI": {
            "COMMON_NAME": "grape",
            "LONG_NAME": "Vitis vinifera",
            "LABEL": "VITVI",
            "ID": 29760
        },
        "DICPU": {
            "COMMON_NAME": "slime mold",
            "LONG_NAME": "Dictyostelium purpureum",
            "LABEL": "DICPU",
            "ID": 5786
        },
        "POPTR": {
            "COMMON_NAME": "black cottonwood",
            "LONG_NAME": "Populus trichocarpa",
            "LABEL": "POPTR",
            "ID": 3694
        },
        "PYRAE": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Pyrobaculum aerophilum",
            "LABEL": "PYRAE",
            "ID": 178306
        },
        "DEIRA": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Deinococcus radiodurans",
            "LABEL": "DEIRA",
            "ID": 243230
        },
        "COXBU": {
            "COMMON_NAME": "coxiella",
            "LONG_NAME": "Coxiella burnetii",
            "LABEL": "COXBU",
            "ID": 227377
        },
        "SHEON": {
            "COMMON_NAME": "shewanella",
            "LONG_NAME": "Shewanella oneidensis",
            "LABEL": "SHEON",
            "ID": 211586
        },
        "HELRO": {
            "COMMON_NAME": "leech",
            "LONG_NAME": "helobdella robusta",
            "LABEL": "HELRO",
            "ID": 6412
        },
        "CANLF": {
            "COMMON_NAME": "dog",
            "LONG_NAME": "Canis lupus familiaris",
            "LABEL": "CANLF",
            "ID": 9615
        },
        "PANTR": {
            "COMMON_NAME": "chimpanzee",
            "LONG_NAME": "Pan troglodytes",
            "LABEL": "PANTR",
            "ID": 9598
        },
        "BACSU": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Bacillus subtilis",
            "LABEL": "BACSU",
            "ID": 224308
        },
        "CLOBH": {
            "COMMON_NAME": "clostridium",
            "LONG_NAME": "Clostridium botulinum",
            "LABEL": "CLOBH",
            "ID": 441771
        },
        "TRIVA": {
            "COMMON_NAME": "protist",
            "LONG_NAME": "Trichomonas vaginalis",
            "LABEL": "TRIVA",
            "ID": 5722
        },
        "ORYSJ": {
            "COMMON_NAME": "rice",
            "LONG_NAME": "Oryza sativa",
            "LABEL": "ORYSJ",
            "ID": 39947
        },
        "STRR6": {
            "COMMON_NAME": "strep",
            "LONG_NAME": "Streptococcus pneumoniae",
            "LABEL": "STRR6",
            "ID": 171101
        },
        "RAT": {
            "COMMON_NAME": "rat",
            "LONG_NAME": "Rattus norvegicus",
            "LABEL": "RAT",
            "ID": 10116
        },
        "PHYPA": {
            "COMMON_NAME": "moss",
            "LONG_NAME": "Physcomitrella patens",
            "LABEL": "PHYPA",
            "ID": 3218
        },
        "BRADI": {
            "COMMON_NAME": "purple false brome",
            "LONG_NAME": "Brachypodium distachyon",
            "LABEL": "BRADI",
            "ID": 15368
        },
        "BOVIN": {
            "COMMON_NAME": "cow",
            "LONG_NAME": "Bos taurus",
            "LABEL": "BOVIN",
            "ID": 9913
        },
        "XANCP": {
            "COMMON_NAME": "xanthomonas",
            "LONG_NAME": "Xanthomonas campestris",
            "LABEL": "XANCP",
            "ID": 190485
        },
        "ANOGA": {
            "COMMON_NAME": "mosquito",
            "LONG_NAME": "Anopheles gambiae",
            "LABEL": "ANOGA",
            "ID": 7165
        },
        "XENTR": {
            "COMMON_NAME": "frog",
            "LONG_NAME": "Xenopus tropicalis",
            "LABEL": "XENTR",
            "ID": 8364
        },
        "SYNY3": {
            "COMMON_NAME": "cyanobacteria",
            "LONG_NAME": "Synechocystis",
            "LABEL": "SYNY3",
            "ID": 1111708
        },
        "BRADU": {
            "COMMON_NAME": "proteobacteria",
            "LONG_NAME": "Bradyrhizobium diazoefficiens",
            "LABEL": "BRADU",
            "ID": 224911
        },
        "NITMS": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Nitrosopumilus maritimus",
            "LABEL": "NITMS",
            "ID": 436308
        },
        "HELPY": {
            "COMMON_NAME": "H.pylori",
            "LONG_NAME": "helicobacter pylori",
            "LABEL": "HELPY",
            "ID": 85962
        },
        "CAEBR": {
            "COMMON_NAME": "nematode worm",
            "LONG_NAME": "Caenorhabditis briggsae",
            "LABEL": "CAEBR",
            "ID": 6238
        },
        "MOUSE": {
            "COMMON_NAME": "mouse",
            "LONG_NAME": "Mus musculus",
            "LABEL": "MOUSE",
            "ID": 10090
        },
        "MYCTU": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Mycobacterium tuberculosis",
            "LABEL": "MYCTU",
            "ID": 83332
        },
        "MAIZE": {
            "COMMON_NAME": "corn",
            "LONG_NAME": "Zea mays",
            "LABEL": "MAIZE",
            "ID": 4577
        },
        "STAA8": {
            "COMMON_NAME": "staph",
            "LONG_NAME": "Staphylococcus aureus",
            "LABEL": "STAA8",
            "ID": 93061
        },
        "CHLRE": {
            "COMMON_NAME": "green algae",
            "LONG_NAME": "Chlamydomonas reinhardtii",
            "LABEL": "CHLRE",
            "ID": 3055
        },
        "ORYLA": {
            "COMMON_NAME": "Japanese rice fish",
            "LONG_NAME": "Oryzias latipes",
            "LABEL": "ORYLA",
            "ID": 8090
        },
        "TRIAD": {
            "COMMON_NAME": "placozoan",
            "LONG_NAME": "Trichoplax adhaerens",
            "LABEL": "TRIAD",
            "ID": 10228
        },
        "METAC": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Methanosarcina acetivorans",
            "LABEL": "METAC",
            "ID": 188937
        },
        "IXOSC": {
            "COMMON_NAME": "tick",
            "LONG_NAME": "Ixodes scapularis",
            "LABEL": "IXOSC",
            "ID": 6945
        },
        "SOYBN": {
            "COMMON_NAME": "soybean",
            "LONG_NAME": "Glycine max",
            "LABEL": "SOYBN",
            "ID": 3847
        },
        "PARTE": {
            "COMMON_NAME": "paramecium",
            "LONG_NAME": "Paramecium tetraurelia",
            "LABEL": "PARTE",
            "ID": 5888
        },
        "METJA": {
            "COMMON_NAME": "archaea",
            "LONG_NAME": "Methanocaldococcus jannaschii",
            "LABEL": "METJA",
            "ID": 243232
        },
        "LEPIN": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Leptospira interrogans",
            "LABEL": "LEPIN",
            "ID": 189518
        },
        "PRIPA": {
            "COMMON_NAME": "nematode worm",
            "LONG_NAME": "Pristionchus pacificus",
            "LABEL": "PRIPA",
            "ID": 54126
        },
        "PUCGT": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Puccinia graminis",
            "LABEL": "PUCGT",
            "ID": 418459
        },
        "TRYB2": {
            "COMMON_NAME": "excavate",
            "LONG_NAME": "Trypanosoma brucei",
            "LABEL": "TRYB2",
            "ID": 185431
        },
        "ASHGO": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Ashbya gossypii",
            "LABEL": "ASHGO",
            "ID": 284811
        },
        "GIAIC": {
            "COMMON_NAME": "protist",
            "LONG_NAME": "Giardia intestinalis",
            "LABEL": "GIAIC",
            "ID": 184922
        },
        "NEIMB": {
            "COMMON_NAME": "meningococcus",
            "LONG_NAME": "Neisseria meningitidis serogroup b",
            "LABEL": "NEIMB",
            "ID": 122586
        },
        "NEMVE": {
            "COMMON_NAME": "anemone",
            "LONG_NAME": "Nematostella vectensis",
            "LABEL": "NEMVE",
            "ID": 45351
        },
        "DAPPU": {
            "COMMON_NAME": "water_flea",
            "LONG_NAME": "Daphnia pulex",
            "LABEL": "DAPPU",
            "ID": 6669
        },
        "GLOVI": {
            "COMMON_NAME": "bacteria",
            "LONG_NAME": "Gloeobacter violaceus",
            "LABEL": "GLOVI",
            "ID": 251221
        },
        "CANAL": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Candida albicans",
            "LABEL": "CANAL",
            "ID": 237561
        },
        "BATDJ": {
            "COMMON_NAME": "fungi",
            "LONG_NAME": "Batrachochytrium dendrobatidis",
            "LABEL": "BATDJ",
            "ID": 684364
        },
        "PHYRM": {
            "COMMON_NAME": "oomycete",
            "LONG_NAME": "Phytophthora ramorum",
            "LABEL": "PHYRM",
            "ID": 164328
        },
        "BRAFL": {
            "COMMON_NAME": "chordate",
            "LONG_NAME": "Branchiostoma floridae",
            "LABEL": "BRAFL",
            "ID": 7739
        }
    },
    },
    "FORMAT": {
        "JSON": {"ID": "JSON"},
        "XML": {"ID": "XML"}
    },
    "GENE_INPUT_LIST": "",
    "ENRICHMENT_TEST_TYPE": {
        "BINOMIAL": {
            "VERSION": 20171205,
            "ID": "BINOMIAL"
        },
        "FISHER": {
            "VERSION": 20171205,
            "ID": "FISHER"
        }
    },
    "CORRECTION": {"ID": "BONFERRONI"}
}}
