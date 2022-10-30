# zk-Bridge

## Frontend

## Getting Started

First install all dependencies

```bash
pnpm install
# or
yarn install
```

Then run the development server:

```bash
pnpm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (it could be another port if that one is unavailable).

## Install
move to contracts and run 
`yarn install`

## Testing

- Open terminal one, go to this repo and : `hardhat node`
- Open terminal two, run `starknet-devnet --lite-mode -p 8000` (make sure you installed [starknet-devnet](https://github.com/Shard-Labs/starknet-devnet))
- Open terminal three, go to this repo and run `yarn test`. Profit.
