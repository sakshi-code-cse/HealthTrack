
<img width="408" alt="Screenshot 2024-08-31 at 9 33 54 PM" src="https://github.com/user-attachments/assets/83ef4481-cf2b-4b94-9742-cc5899bad485">

# HealthTrack - Decentralized Health Record Storer

## Overview

HealthTrack is a blockchain-based electronic health record (EHR) registry designed to provide secure and decentralized storage of patient records. By leveraging the Ethereum blockchain, HealthTrack ensures that patient data is safely managed, authenticated, and stored without relying on a centralized authority.

## Key Features

- **Decentralized Record Storage:** Patient records are securely stored on the Ethereum blockchain, ensuring data integrity and privacy.
- **Patient Authentication:** Integrated smart contracts handle patient authentication, guaranteeing that only authorized individuals can access records.
- **Record Management:** Provides an easy-to-use interface for patients and healthcare providers to manage health records, with secure data handling via smart contracts.

## Technology Stack

- **Frontend:** ReactJS
- **Smart Contracts:** Solidity, Hardhat
- **Backend:** Node.js, ExpressJS
- **Blockchain Integration:** Web3.js

## Project Structure

The project is organized as follows:

```
HealthTrack/
│
├── artifacts/
│   ├── build-info/
│   ├── contracts/
│       ├── MedicalRecords.dbg.json
│       └── MedicalRecords.json
│
├── cache/
│   └── solidity-files-cache.json
│
├── contracts/
│   └── medicalRecord.sol
│
├── ignition/
│   └── Lock.js
│
├── scripts/
│   ├── deploy.js
│   └── seeding.js
│
├── src/
│   └── [Frontend files go here]
│
├── test/
│   └── MedicalRecordTest.js
│
└── hardhat.config.js
```

### Folder Descriptions

- **artifacts/**: Contains build information and compiled contract files such as `MedicalRecords.dbg.json` and `MedicalRecords.json`.
- **cache/**: Stores Solidity cache information, including the `solidity-files-cache.json` file.
- **contracts/**: Contains the Solidity source code, including `medicalRecord.sol`.
- **ignition/**: Contains initialization scripts like `Lock.js`.
- **scripts/**: Contains deployment and seeding scripts, including `deploy.js` and `seeding.js`.
- **src/**: Holds the frontend ReactJS code.
- **test/**: Contains test scripts like `MedicalRecordTest.js` to ensure smart contract functionality.
- **hardhat.config.js**: Configuration file for the Hardhat development environment.

## Getting Started

### Prerequisites

- **Node.js**
- **Hardhat**
- **MetaMask** (for interacting with the Ethereum blockchain)
- **Ganache** (optional, for local blockchain development)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/ishangawande55/HealthTrack.git
cd HealthTrack
```

2. **Install dependencies:**

```bash
npm install
```

3. **Compile the smart contracts:**

```bash
npx hardhat compile
```

4. **Deploy the contracts:**

```bash
npx hardhat run scripts/deploy.js --network localhost
```

5. **Run the frontend:**

```bash
npm start
```

## Testing

To run the tests for the smart contracts, use the following command:

```bash
npx hardhat test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License.
```
