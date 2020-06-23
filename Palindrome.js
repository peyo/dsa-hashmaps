const HashMap = require("./HashMap");

palindrome = (string) => {
  // Remove non letter characters
  const filtered = string.replace(/[^a-zA-Z]+/g, "").toLowerCase();

  // Empty string
  if (!filtered) {
    return "Provide a string.";
  }

  const hash = new HashMap();
  let count = 0;

  // Loop to find dup key in hashTable
  for (const i in filtered) {
    // We skip .get() method because it throws error
    // undefined = no value set yet

    if (!hash._hashTable[hash._findSlot(filtered[i])]) {
      // If no value yet then set to 1
      hash.set(filtered[i], 1);
    } else {
      // Index has value. Now we just + 1 to value
      // Because index has value, no more error from .set(). We can use .set() method
      hash.set(filtered[i], hash.get(filtered[i]) + 1);
    }
  }

  // Loop through each index in hashTable that has key
  for (i in hash._hashTable) {
    // Console.log(count = hash._hashTable[i].value % 2)
    // If % 2 has remainder add to count
    hash._hashTable[i].value % 2 !== 0 && count++;
    i++;
  }

  // If less than or equal to 1 then it is palindrome.
  return count <= 1;
};

const string = "acecarr";
console.log(palindrome(string));
