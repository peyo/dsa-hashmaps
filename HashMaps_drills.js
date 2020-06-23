const HashMap = require("./HashMap");

main = () => {
  let lotr = new HashMap();

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr);

  /*
  const keySearch = lotr._hashTable.map((item) => {
    if (item.key === "Hobbit") {
      return item.value;
    }
  });
  console.log(keySearch);
  */
};

return main();