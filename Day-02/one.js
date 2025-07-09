// Node.js ka built-in module import kar rahe hain jo hashing provide karta hai
const crypto = require('crypto');

// SHA-256 hash generate karne wala function
function sha256(data) {
  // Input data ka SHA-256 hash banake hexadecimal format me return karo
  return crypto.createHash('sha256').update(data).digest('hex');
}
// Mining function jo valid hash dhoondhta hai
function mineBlock(data, difficultyPrefix = '0000') {
  // Mining start karne ke liye nonce initialize karte hain
  let nonce = 0;

  // Hash variable initialize (yeh valid hash milne ke baad use hoga)
  let hash = '';

  // Console me batate hain mining start ho gayi hai aur kis prefix ka hash chahiye
  console.log(`Mining started... Looking for hash starting with '${difficultyPrefix}'`);

  // Infinite loop - jab tak hash milta nahi, tab tak chalta rahega
  while (true) {
    // Har iteration me data + nonce ka string banate hain
    const input = data + nonce;

    // Us string ka SHA-256 hash generate karte hain
    hash = sha256(input);

    // Agar hash desired prefix se start karta hai, to mining successful
    if (hash.startsWith(difficultyPrefix)) {
      // Success message print karo
      console.log(` Hash found!`);
      console.log(`Data   : "${data}"`);      // Original data
      console.log(`Nonce  : ${nonce}`);        // Jo number mila jis se valid hash bana
      console.log(`Hash   : ${hash}`);         // Final hash
      break;                                   // Loop break 
    }

    // Har 100000 nonce par status print karo taaki pata chale progress ho rahi hai
    if (nonce % 100000 === 0) {
      console.log(` Trying nonce ${nonce}... Current hash: ${hash}`);
    }

    // Nonce badha ke next value try karo
    nonce++;
  }
}

// Miner run karo - yeh function call actual mining start karta hai
mineBlock("Vijay sends 10 BTC to Ram");