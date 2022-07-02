# Simple Next.js and Web3react Frontend for Fund Me

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is a Next.js and Web3React frontend for https://github.com/PCWCFA/fcc-hardhat-fund-me. Note that this is purely a proof of concept.

## Setup & Configuration

### Development Server

- First, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### hardhat-fund-me-fcc

- Run fcc-hardhat-fund-me on hardhat's localhost with
  "yarn hardhat node" to deploy the contracts on the localhost
- Note the contract address
- Copy this contract address to pages/constants.js's contractAddress

### Metamask

- Import the localhost deployer account address (usually account[0] depending on your hardhat.helper.config's namedAccounts configuration) in Metamask

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# License

Distributed under the MIT License. See LICENSE.txt for more information.
