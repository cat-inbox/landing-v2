const {
  StandardMerkleTree
} = require("@openzeppelin/merkle-tree")
const fs =  require("fs");

// (1)
const tree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("./tree.json", "utf8")));

// (2)
for (const [i, v] of tree.entries()) {
  if (v[0] === '0x93eb6ccF00Bfdb205ab79E824C4855d2ad196a77') {
      // (3)
      const proof = tree.getProof(i);
      console.log('Value:', v);
      console.log('Proof:', proof);
  }
}