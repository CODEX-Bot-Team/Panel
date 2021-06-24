function GetHash() {
    if (window.location.hash) {
        const HashTable = window.location.hash.split("#")[1].split("&")
        const Hash = {}
        var arrayLength = HashTable.length;
        for (var i = 0; i < arrayLength; i++) {
            //console.log(HashTable[i]);
            //Do something
            const Hashes = HashTable[i].split("=")
            Hash[Hashes[0]] = Hashes[1] 
        }

        return Hash
    } else {
        return null
    }
}