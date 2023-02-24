def findPK(CID):
    import json
    with open('./blockchainCode/file.json') as f:
        data = json.load(f)

    newdata = []   
    data.reverse()
    for user in data:
        txns = user.get("transactions")
        for txn in txns:
            temp = list(txn.values())
            if(temp[0] == CID):
                return temp[2]

def addAnotherBlock()
print(findPK("wesrdfxcvbhj"))