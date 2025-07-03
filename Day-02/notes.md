# Blockchain Basics

## Real-World Use Case: Fake Certificates

### Problem:
- Politicians, students, or job seekers can submit **fake certificates**.
- Traditional verification is **manual**, **slow**, and **easily manipulated**.

### Blockchain-Based Solution:
- Certificates are stored as **blocks** in a **blockchain**.
- Each certificate is **immutable** and **verifiable**.
- Multiple authorities (universities, government) maintain the same **public ledger**.

---

## Bitcoin Example: Sohan → Mohan Transaction

### Scenario:
-  Sohan wants to send **5 BTC** to  Mohan.

### Without Blockchain (Bank Model):
1. Sohan sends ₹5.
2. Bank updates the database.
3. Only the bank maintains the transaction history.
4. If bank fails or manipulates, data is lost.

### With Blockchain:
1. Sohan broadcasts the transaction request to the network.
2. All nodes verify:
   - Does Sohan have 5 BTC?
   - Is the transaction history valid?
3. If valid, transaction is grouped into a **block**.
4. The block is added to the **chain**, and all nodes update their ledger.

> **Blockchain = Decentralized digital public ledger**

---


## Internal Working of Blockchain

### 1. Client-Server vs Blockchain Architecture

| Client-Server | Blockchain |
|---------------|------------|
| Centralized (Bank, Google) | Decentralized (Peer-to-peer) |
| Data controlled by one server | Every node has full copy of data |
| Risk of failure/corruption | No single point of failure |

---

### 2. Blocks Structure

Each block contains:
- Block Number
- Timestamp
- List of Transactions
- Previous Block Hash
- Current Block Hash
- Nonce (used in mining)

---

### 3. Hashing and Validation

- Each block is hashed using SHA-256.
- Hash = Digital fingerprint.
- Even a 1-character change alters the hash completely.
- If hash doesn’t match, the block is **invalid**.

---

### 4. Mining & 10-Minute Rule

- Bitcoin adds a new block **every 10 minutes**.
- Miners solve a cryptographic puzzle (Proof of Work).
- The fastest miner adds the block and gets rewarded.
- Others verify and sync the new block.

---

