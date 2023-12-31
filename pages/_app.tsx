import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "PolygonZkevmTestnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 7171, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://bitrock.rpc.thirdweb.com"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Bitrock",
          symbol: "BROCK",
        },
        shortName: "Brock", // Display value shown in the wallet UI
        slug: "Bitrock", // Display value shown in the wallet UI
        testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Bitrock", // Name of the network
        name: "Bitrock Mainnet", // Name of the network
      }}
    >
      <ChakraProvider>
        <NavBar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
