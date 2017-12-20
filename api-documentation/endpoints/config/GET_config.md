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
  "panther_version" : "13",
  "panther_api_version": "2",
  "data_version": "13.2",
  "supported_input": {   
    "data_annotation_type": {
        "annotation_type_panther_PATHWAY": {
            "release_date": "2017-11-12",
            "version": 13,
            "description": "Panther Pathways",
            "label": "ANNOT_type_panther_PATHWAY",
            "id": "ANNOT_type_id_panther_PATHWAY"
        },
        "biological_process": {
            "release_date": "2017-10-23",
            "version": 1.2,
            "description": "Any process specifically pertinent to the functioning of integrated living units: cells, tissues, organs, and organisms. A process is a collection of molecular events with a defined beginning and end. [GOC:go_curators, GOC:isa_complete]",
            "label": "biological_process",
            "id": "GO:0008150"
        },
        "molecular_function": {
            "release_date": "2017-10-23",
            "version": 1.2,
            "description": "The actions of a single gene product or complex at the molecular level consisting of a single biochemical activity or multiple causally linked biochemical activities. A given gene product may exhibit one or more molecular functions. [GOC:go_curators]",
            "label": "molecular_function",
            "id": "GO:0003674"
        },
        "panther_go_slim_biological_process": {
            "release_date": "2017-11-12",
            "version": 13,
            "description": "\"Any process specifically pertinent to the functioning of integrated living units: cells, tissues, organs, and organisms. A process is a collection of molecular events with a defined beginning and end.\" [GOC:go_curators, GOC:isa_complete]",
            "label": "panther_GO_Slim_biological_process",
            "id": "ANNOT_type_id_panther_GO_slim_BP"
        },
        "panther_go_slim_molecular_function": {
            "release_date": "2017-11-12",
            "version": 13,
            "description": "\"Elemental activities, such as catalysis or binding, describing the actions of a gene product at the molecular level. A given gene product may exhibit one or more molecular functions.\" [GOC:go_curators]",
            "label": "panther_GO_Slim_Molecular_Function",
            "id": "ANNOT_type_id_panther_GO_slim_MF"
        },
        "cellular_component": {
            "release_date": "2017-10-23",
            "version": 1.2,
            "description": "The part of a cell, extracellular environment or virus in which a gene product is located. A gene product may be located in one or more parts of a cell and its location may be as specific as a particular macromolecular complex, that is, a stable, persistent association of macromolecules that function together. [GOC:go_curators, NIF_Subcellular:sao-1337158144]",
            "label": "cellular_component",
            "id": "GO:0005575"
        },
        "protein_class": {
            "release_date": "2017-11-12",
            "version": 13,
            "label": "protein_class",
            "id": "ANNOT_type_id_panther_PC"
        },
        "annotation_type_reactome_pathway": {
            "release_date": "2017-10-13",
            "description": "Reactome Pathways",
            "label": "ANNOT_type_REACTOME_PATHWAY",
            "id": "ANNOT_type_id_REACTOME_PATHWAY"
        },
        "panther_go_slim_cellular_location": {
            "release_date": "2017-11-12",
            "version": 13,
            "description": "\"The part of a cell or its extracellular environment in which a gene product is located. A gene product may be located in one or more parts of a cell and its location may be as specific as a particular macromolecular complex, that is, a stable, persistent association of macromolecules that function together.\" [GOC:go_curators]",
            "label": "panther_GO_Slim_Cellular_Location",
            "id": "ANNOT_type_id_panther_GO_slim_CC"
        }
    },
    "organism":{
      "TRICA": {
          "common_name": "red flour beetle",
          "long_name": "Tribolium castaneum",
          "label": "TRICA",
          "id": 7070
      },
      "NEUCR": {
          "common_name": "fungi",
          "long_name": "Neurospora crassa",
          "label": "NEUCR",
          "id": 367110
      }
    }
  },
  "organism" : {
    "version": {
      "13_1": {
        "TRICA": {
          "id": 7070
        },
        "NEUCR": {
          "id": 367110
        }
      },
      "13_2": {
        "THEYD": {
          "id": 289376
        },
        "BACCR": {
          "id": 226900
        },
        "VIBCH": {
          "id": 243277
        },
      }
    },
    "all": {
        "TRICA": {
            "common_name": "red flour beetle",
            "long_name": "Tribolium castaneum",
            "label": "TRICA",
            "id": 7070,
            "SUPPORTED_versionS" : [
              "13.1",
              "13.2"
            ]
        },
        "NEUCR": {
            "common_name": "fungi",
            "long_name": "Neurospora crassa",
            "label": "NEUCR",
            "id": 367110,
            "SUPPORTED_versionS" : [
              "13.2"
            ]
        },
        "THEYD": {
            "common_name": "bacteria",
            "long_name": "Thermodesulfovibrio yellowstonii",
            "label": "THEYD",
            "id": 289376,
            "SUPPORTED_versionS" : [
              "13.3"
            ]
        },
        "BACCR": {
            "common_name": "bacillus cereus",
            "long_name": "Bacillus cereus",
            "label": "BACCR",
            "id": 226900
        },
        "VIBCH": {
            "common_name": "cholera",
            "long_name": "Vibrio cholerae",
            "label": "VIBCH",
            "id": 243277
        },
        "PLAF7": {
            "common_name": "apicomplexan",
            "long_name": "Plasmodium falciparum",
            "label": "PLAF7",
            "id": 36329
        },
        "KORCO": {
            "common_name": "archaea",
            "long_name": "Korarchaeum cryptofilum",
            "label": "KORCO",
            "id": 374847
        },
        "CRYNJ": {
            "common_name": "fungi",
            "long_name": "Cryptococcus neoformans",
            "label": "CRYNJ",
            "id": 214684
        },
        "PHANO": {
            "common_name": "fungi",
            "long_name": "Phaeosphaeria nodorum",
            "label": "PHANO",
            "id": 321614
        },
        "HALSA": {
            "common_name": "bacteria",
            "long_name": "Halobacterium salinarum",
            "label": "HALSA",
            "id": 64091
        },
        "SALTY": {
            "common_name": "salmonella",
            "long_name": "Salmonella typhimurium",
            "label": "SALTY",
            "id": 99287
        },
        "LEIMA": {
            "common_name": "protozoa",
            "long_name": "Leishmania major",
            "label": "LEIMA",
            "id": 5664
        },
        "PSEAE": {
            "common_name": "bacteria",
            "long_name": "Pseudomonas aeruginosa",
            "label": "PSEAE",
            "id": 208964
        },
        "MONDO": {
            "common_name": "opossum",
            "long_name": "Monodelphis domestica",
            "label": "MONDO",
            "id": 13616
        },
        "CHICK": {
            "common_name": "chicken",
            "long_name": "Gallus gallus",
            "label": "CHICK",
            "id": 9031
        },
        "HAEIN": {
            "common_name": "influenza",
            "long_name": "Haemophilus influenzae",
            "label": "HAEIN",
            "id": 71421
        },
        "DICDI": {
            "common_name": "slime mold",
            "long_name": "Dictyostelium discoideum",
            "label": "DICDI",
            "id": 44689
        },
        "CHLAA": {
            "common_name": "bacteria",
            "long_name": "Chloroflexus aurantiacus",
            "label": "CHLAA",
            "id": 324602
        },
        "DROME": {
            "common_name": "fruit fly",
            "long_name": "Drosophila melanogaster",
            "label": "DROME",
            "id": 7227
        },
        "GORGO": {
            "common_name": "gorilla",
            "long_name": "Gorilla gorilla gorilla",
            "label": "GORGO",
            "id": 9595
        },
        "THAPS": {
            "common_name": "diatom",
            "long_name": "Thalassiosira pseudonana",
            "label": "THAPS",
            "id": 35128
        },
        "RHOBA": {
            "common_name": "bacteria",
            "long_name": "Rhodopirellula baltica",
            "label": "RHOBA",
            "id": 243090
        },
        "DICTD": {
            "common_name": "bacteria",
            "long_name": "Dictyoglomus turgidum",
            "label": "DICTD",
            "id": 515635
        },
        "ANOCA": {
            "common_name": "lizard",
            "long_name": "Anolis carolinensis",
            "label": "ANOCA",
            "id": 28377
        },
        "YEAST": {
            "common_name": "Brewer's yeast",
            "long_name": "Saccharomyces cerevisiae",
            "label": "YEAST",
            "id": 559292
        },
        "PIG": {
            "common_name": "pig",
            "long_name": "Sus scrofa",
            "label": "PIG",
            "id": 9823
        },
        "FUSNN": {
            "common_name": "bacteria",
            "long_name": "Fusobacterium nucleatum",
            "label": "FUSNN",
            "id": 190304
        },
        "ENTHI": {
            "common_name": "amoeba",
            "long_name": "Entamoeba histolytica",
            "label": "ENTHI",
            "id": 5759
        },
        "ARATH": {
            "common_name": "dicot plant",
            "long_name": "Arabidopsis thaliana",
            "label": "ARATH",
            "id": 3702
        },
        "ASPFU": {
            "common_name": "fungi",
            "long_name": "Neosartorya fumigata",
            "label": "ASPFU",
            "id": 330879
        },
        "YARLI": {
            "common_name": "fungi",
            "long_name": "Yarrowia lipolytica",
            "label": "YARLI",
            "id": 284591
        },
        "CIOIN": {
            "common_name": "sea squirt",
            "long_name": "Ciona intestinalis",
            "label": "CIOIN",
            "id": 7719
        },
        "MACMU": {
            "common_name": "macacque monkey",
            "long_name": "Macaca mulatta",
            "label": "MACMU",
            "id": 9544
        },
        "MYCGE": {
            "common_name": "bacteria",
            "long_name": "mycoplasma genitalium",
            "label": "MYCGE",
            "id": 243273
        },
        "SOLLC": {
            "common_name": "tomato",
            "long_name": "Solanum lycopersicum",
            "label": "SOLLC",
            "id": 4081
        },
        "DANRE": {
            "common_name": "zebrafish",
            "long_name": "Danio rerio",
            "label": "DANRE",
            "id": 7955
        },
        "YERPE": {
            "common_name": "yersinia",
            "long_name": "Yersinia pestis",
            "label": "YERPE",
            "id": 632
        },
        "EMENI": {
            "common_name": "fungi",
            "long_name": "Emericella nidulans",
            "label": "EMENI",
            "id": 227321
        },
        "ORNAN": {
            "common_name": "platypus",
            "long_name": "Ornithorhynchus anatinus",
            "label": "ORNAN",
            "id": 9258
        },
        "THEKO": {
            "common_name": "archaea",
            "long_name": "Thermococcus kodakaraensis",
            "label": "THEKO",
            "id": 69014
        },
        "HORSE": {
            "common_name": "horse",
            "long_name": "Equus caballus",
            "label": "HORSE",
            "id": 9796
        },
        "SCHPO": {
            "common_name": "fission yeast",
            "long_name": "Schizosaccharomyces pombe",
            "label": "SCHPO",
            "id": 284812
        },
        "LISMO": {
            "common_name": "listeria",
            "long_name": "Listeria monocytogenes",
            "label": "LISMO",
            "id": 169963
        },
        "GEOSL": {
            "common_name": "bacteria",
            "long_name": "Geobacter sulfurreducens",
            "label": "GEOSL",
            "id": 243231
        },
        "AQUAE": {
            "common_name": "bacteria",
            "long_name": "Aquifex aeolicus",
            "label": "AQUAE",
            "id": 224324
        },
        "HUMAN": {
            "common_name": "human",
            "long_name": "Homo sapiens",
            "label": "HUMAN",
            "id": 9606
        },
        "MONBE": {
            "common_name": "sponge",
            "long_name": "Monosiga brevicollis",
            "label": "MONBE",
            "id": 81824
        },
        "FELCA": {
            "common_name": "cat",
            "long_name": "Felis catus",
            "label": "FELCA",
            "id": 9685
        },
        "CHLTR": {
            "common_name": "bacteria",
            "long_name": "Chlamydia trachomatis",
            "label": "CHLTR",
            "id": 272561
        },
        "CAEEL": {
            "common_name": "nematode worm",
            "long_name": "Caenorhabditis elegans",
            "label": "CAEEL",
            "id": 6239
        },
        "STRCO": {
            "common_name": "bacteria",
            "long_name": "Streptomyces coelicolor",
            "label": "STRCO",
            "id": 100226
        },
        "USTMA": {
            "common_name": "fungi",
            "long_name": "Ustilago maydis",
            "label": "USTMA",
            "id": 237631
        },
        "THEMA": {
            "common_name": "bacteria",
            "long_name": "Thermotoga maritima",
            "label": "THEMA",
            "id": 243274
        },
        "BACTN": {
            "common_name": "bacteria",
            "long_name": "Bacteroides thetaiotaomicron",
            "label": "BACTN",
            "id": 226186
        },
        "SCLS1": {
            "common_name": "fungi",
            "long_name": "Sclerotinia sclerotiorum",
            "label": "SCLS1",
            "id": 665079
        },
        "SULSO": {
            "common_name": "archaea",
            "long_name": "Sulfolobus solfataricus",
            "label": "SULSO",
            "id": 273057
        },
        "ECOLI": {
            "common_name": "E. coli",
            "long_name": "Escherichia coli",
            "label": "ECOLI",
            "id": 83333
        },
        "LEPOC": {
            "common_name": "spotted gar",
            "long_name": "lepisosteus oculatus",
            "label": "LEPOC",
            "id": 7918
        },
        "STRPU": {
            "common_name": "sea urchin",
            "long_name": "Strongylocentrotus purpuratus",
            "label": "STRPU",
            "id": 7668
        },
        "VITVI": {
            "common_name": "grape",
            "long_name": "Vitis vinifera",
            "label": "VITVI",
            "id": 29760
        },
        "DICPU": {
            "common_name": "slime mold",
            "long_name": "Dictyostelium purpureum",
            "label": "DICPU",
            "id": 5786
        },
        "POPTR": {
            "common_name": "black cottonwood",
            "long_name": "Populus trichocarpa",
            "label": "POPTR",
            "id": 3694
        },
        "PYRAE": {
            "common_name": "archaea",
            "long_name": "Pyrobaculum aerophilum",
            "label": "PYRAE",
            "id": 178306
        },
        "DEIRA": {
            "common_name": "bacteria",
            "long_name": "Deinococcus radiodurans",
            "label": "DEIRA",
            "id": 243230
        },
        "COXBU": {
            "common_name": "coxiella",
            "long_name": "Coxiella burnetii",
            "label": "COXBU",
            "id": 227377
        },
        "SHEON": {
            "common_name": "shewanella",
            "long_name": "Shewanella oneidensis",
            "label": "SHEON",
            "id": 211586
        },
        "HELRO": {
            "common_name": "leech",
            "long_name": "helobdella robusta",
            "label": "HELRO",
            "id": 6412
        },
        "CANLF": {
            "common_name": "dog",
            "long_name": "Canis lupus familiaris",
            "label": "CANLF",
            "id": 9615
        },
        "PANTR": {
            "common_name": "chimpanzee",
            "long_name": "Pan troglodytes",
            "label": "PANTR",
            "id": 9598
        },
        "BACSU": {
            "common_name": "bacteria",
            "long_name": "Bacillus subtilis",
            "label": "BACSU",
            "id": 224308
        },
        "CLOBH": {
            "common_name": "clostridium",
            "long_name": "Clostridium botulinum",
            "label": "CLOBH",
            "id": 441771
        },
        "TRIVA": {
            "common_name": "protist",
            "long_name": "Trichomonas vaginalis",
            "label": "TRIVA",
            "id": 5722
        },
        "ORYSJ": {
            "common_name": "rice",
            "long_name": "Oryza sativa",
            "label": "ORYSJ",
            "id": 39947
        },
        "STRR6": {
            "common_name": "strep",
            "long_name": "Streptococcus pneumoniae",
            "label": "STRR6",
            "id": 171101
        },
        "RAT": {
            "common_name": "rat",
            "long_name": "Rattus norvegicus",
            "label": "RAT",
            "id": 10116
        },
        "PHYPA": {
            "common_name": "moss",
            "long_name": "Physcomitrella patens",
            "label": "PHYPA",
            "id": 3218
        },
        "BRADI": {
            "common_name": "purple false brome",
            "long_name": "Brachypodium distachyon",
            "label": "BRADI",
            "id": 15368
        },
        "BOVIN": {
            "common_name": "cow",
            "long_name": "Bos taurus",
            "label": "BOVIN",
            "id": 9913
        },
        "XANCP": {
            "common_name": "xanthomonas",
            "long_name": "Xanthomonas campestris",
            "label": "XANCP",
            "id": 190485
        },
        "ANOGA": {
            "common_name": "mosquito",
            "long_name": "Anopheles gambiae",
            "label": "ANOGA",
            "id": 7165
        },
        "XENTR": {
            "common_name": "frog",
            "long_name": "Xenopus tropicalis",
            "label": "XENTR",
            "id": 8364
        },
        "SYNY3": {
            "common_name": "cyanobacteria",
            "long_name": "Synechocystis",
            "label": "SYNY3",
            "id": 1111708
        },
        "BRADU": {
            "common_name": "proteobacteria",
            "long_name": "Bradyrhizobium diazoefficiens",
            "label": "BRADU",
            "id": 224911
        },
        "NITMS": {
            "common_name": "archaea",
            "long_name": "Nitrosopumilus maritimus",
            "label": "NITMS",
            "id": 436308
        },
        "HELPY": {
            "common_name": "H.pylori",
            "long_name": "helicobacter pylori",
            "label": "HELPY",
            "id": 85962
        },
        "CAEBR": {
            "common_name": "nematode worm",
            "long_name": "Caenorhabditis briggsae",
            "label": "CAEBR",
            "id": 6238
        },
        "MOUSE": {
            "common_name": "mouse",
            "long_name": "Mus musculus",
            "label": "MOUSE",
            "id": 10090
        },
        "MYCTU": {
            "common_name": "bacteria",
            "long_name": "Mycobacterium tuberculosis",
            "label": "MYCTU",
            "id": 83332
        },
        "MAIZE": {
            "common_name": "corn",
            "long_name": "Zea mays",
            "label": "MAIZE",
            "id": 4577
        },
        "STAA8": {
            "common_name": "staph",
            "long_name": "Staphylococcus aureus",
            "label": "STAA8",
            "id": 93061
        },
        "CHLRE": {
            "common_name": "green algae",
            "long_name": "Chlamydomonas reinhardtii",
            "label": "CHLRE",
            "id": 3055
        },
        "ORYLA": {
            "common_name": "Japanese rice fish",
            "long_name": "Oryzias latipes",
            "label": "ORYLA",
            "id": 8090
        },
        "TRIAD": {
            "common_name": "placozoan",
            "long_name": "Trichoplax adhaerens",
            "label": "TRIAD",
            "id": 10228
        },
        "METAC": {
            "common_name": "archaea",
            "long_name": "Methanosarcina acetivorans",
            "label": "METAC",
            "id": 188937
        },
        "IXOSC": {
            "common_name": "tick",
            "long_name": "Ixodes scapularis",
            "label": "IXOSC",
            "id": 6945
        },
        "SOYBN": {
            "common_name": "soybean",
            "long_name": "Glycine max",
            "label": "SOYBN",
            "id": 3847
        },
        "PARTE": {
            "common_name": "paramecium",
            "long_name": "Paramecium tetraurelia",
            "label": "PARTE",
            "id": 5888
        },
        "METJA": {
            "common_name": "archaea",
            "long_name": "Methanocaldococcus jannaschii",
            "label": "METJA",
            "id": 243232
        },
        "LEPIN": {
            "common_name": "bacteria",
            "long_name": "Leptospira interrogans",
            "label": "LEPIN",
            "id": 189518
        },
        "PRIPA": {
            "common_name": "nematode worm",
            "long_name": "Pristionchus pacificus",
            "label": "PRIPA",
            "id": 54126
        },
        "PUCGT": {
            "common_name": "fungi",
            "long_name": "Puccinia graminis",
            "label": "PUCGT",
            "id": 418459
        },
        "TRYB2": {
            "common_name": "excavate",
            "long_name": "Trypanosoma brucei",
            "label": "TRYB2",
            "id": 185431
        },
        "ASHGO": {
            "common_name": "fungi",
            "long_name": "Ashbya gossypii",
            "label": "ASHGO",
            "id": 284811
        },
        "GIAIC": {
            "common_name": "protist",
            "long_name": "Giardia intestinalis",
            "label": "GIAIC",
            "id": 184922
        },
        "NEIMB": {
            "common_name": "meningococcus",
            "long_name": "Neisseria meningitidis serogroup b",
            "label": "NEIMB",
            "id": 122586
        },
        "NEMVE": {
            "common_name": "anemone",
            "long_name": "Nematostella vectensis",
            "label": "NEMVE",
            "id": 45351
        },
        "DAPPU": {
            "common_name": "water_flea",
            "long_name": "Daphnia pulex",
            "label": "DAPPU",
            "id": 6669
        },
        "GLOVI": {
            "common_name": "bacteria",
            "long_name": "Gloeobacter violaceus",
            "label": "GLOVI",
            "id": 251221
        },
        "CANAL": {
            "common_name": "fungi",
            "long_name": "Candida albicans",
            "label": "CANAL",
            "id": 237561
        },
        "BATDJ": {
            "common_name": "fungi",
            "long_name": "Batrachochytrium dendrobatidis",
            "label": "BATDJ",
            "id": 684364
        },
        "PHYRM": {
            "common_name": "oomycete",
            "long_name": "Phytophthora ramorum",
            "label": "PHYRM",
            "id": 164328
        },
        "BRAFL": {
            "common_name": "chordate",
            "long_name": "Branchiostoma floridae",
            "label": "BRAFL",
            "id": 7739
        }
    },
    },
    "FORMAT": {
        "JSON": {"id": "JSON"},
        "XML": {"id": "XML"}
    },
    "GENE_INPUT_LIST": "",
    "ENRICHMENT_TEST_type": {
        "BINOMIAL": {
            "version": 20171205,
            "id": "BINOMIAL"
        },
        "FISHER": {
            "version": 20171205,
            "id": "FISHER"
        }
    },
    "CORRECTION": {"id": "BONFERRONI"}
}}
