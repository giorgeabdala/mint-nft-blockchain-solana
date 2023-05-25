import React from "react"
import dynamic from "next/dynamic"

// Constants
const TWITTER_HANDLE = "web3dev_"
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const Home = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );

  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />
      <div className="button-container">
        <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
      </div>
        
    </div>
  );

  return (
    <div className="App bg-gradient-to-r from-zinc-500 via-black to-zinc-500">
      <div className="container ">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">Máquina de doces para mintar NFTs</p>
          {renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default Home
