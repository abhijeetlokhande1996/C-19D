import csv
import json
with open("CountryAndIdMapping.csv", 'r') as file:
    csv_file = csv.DictReader(file)
    dictToWrite = {}
    for row in csv_file:
        myDict = dict(row)
        countryName = myDict["Name"]
        id = str(myDict["Id"])
        if (len(id) == 1):
            id = f"0{id}"
        dictToWrite[countryName] = id
with open("country-id-mapping.json","w") as file:
    file.write(json.dumps(dictToWrite))
    print("Success")
