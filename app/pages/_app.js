import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";


import "../styles/App.css";
import "../styles/CandyMachine.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import "../styles/globals.css";


const App = ({ Component, pageProps }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter(),  new SolflareWalletAdapter(), new TorusWalletAdapter()], [network]);


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Component {...pageProps} />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
