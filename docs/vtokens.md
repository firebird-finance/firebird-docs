---
id: vTokens
title: vTokens
sidebar_label: vTokens
---

---
![enter image description here](https://miro.medium.com/max/700/0*jdP3nA_zcxBKlura)

**Introducing vTokens**

Users will now be able to move **vUSD, vBTC and vDOT** cross-chain in a decentralized manner, governed by VALUE holders.

Value DeFi will become a viable option for **users to exchange BTC and DOT with other ERC-20 tokens without going through a centralized exchange.** Our vToken technology has been intentionally designed to be interchangeable as we **plan to launch other vTokens to additional cross-chain partners/projects.**

After the successful launch of the first wave of vTokens, we will begin building our new decentralized lending platform — Value Lending. Accepting vUSD, vBTC, vDOT, ESD and BAC as a new class of seigniorage tokens. 

Value Lending article: https://valuedefi.medium.com/elastic-decentralized-loans-powered-by-chainlink-479c137866c8

vTokens Whitepaper: https://valuedefi.io/static/media/vTokens_v1.0.21994c66.pdf

![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)

**Seigniorage — The Basics**

The core mechanics of seigniorage tokens is expansion and contraction. The algorithm used to calculate this rate is highly complex, but the result is quite simple and uses basic laws of economics. When a v**Token is worth more than its peg** (ie. vUSD > $1), the protocol is in **expansion** and vUSD will be minted. As increasing the supply causes inflation, theoretically reducing the price by increasing selling pressure. When a **vToken is worth less than its peg** (ie. 1 vBTC < 1 BTC), the system goes into a **contraction** **phase** and users can burn vBTC for vBTC coupons at a premium. Working as the perfect opposite to expansion, as this theoretically increases the price through deflation by increasing demand.

**Introducing the Price Peg Mechanism **

What sets our vTokens above current algorithm tokens is our innovative features. We have developed four novel mechanisms to improve the price stability of pegged assets, or vTokens, of our protocol.

**First**, we use two liquidity pools, 80/20 and 98/2 with the higher weight being that of the pegged asset. This in turn requires less capital of the secondary asset to maintain the price peg.

**Second**, we have introduced dynamic expansion based on the current liquidity of the pools used for the calculations of the current price of the pegged asset to avoid excessive expansion which is the major problem for all other algorithmic stablecoin protocols.

**Third**, we allow for dynamic epoch length, depending if the protocol is in a contraction or expansion phase, which allows the protocol to stay longer at healthy market condition (expansion) and reacts faster at bad market condition (contraction).

**Finally**, during a contraction phase, when a vToken is burned for a coupon, 5% of the burned vToken is redirected as a yield to those providing liquidity as an additional incentive to keep their liquidity in the pool during the contraction phase.

![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)

**vUSD — Synthetic cross-chain seigniorage stablecoin**

Using the 4-stage mechanism stated above, the ultimate goal is to have vUSD close to $1 as possible.

**Old vUSD to New vUSD**

Old vUSD users much migrate their vUSD to ‘New vUSD’ using our migration contract. Link here: New vUSD will be used with vTokens and Value Lending.

> The deadline for the migration is 30-June-2021.

**vUSD pools**

Using ChainLink’s price oracle for ETH/USD, we can accurately calculate the vUSD price from two pools. We have chosen **vUSD/WETH 80/20** and **vUSD/WETH 98/2** as two pools to stabilize the vUSD to USD peg.

vUSD will have its **‘bootstrapping period’** for the **first week** (14 epochs). During the bootstrapping period, vUSD’s price oracle will be set to $1.20 USD (regardless of true market price) so the protocol is in constant and stable expansion. After this period the protocol will work as intended, using ChainLink’s oracle for true market price with contraction and expansion when necessary.
To reward and incentivize liquidity providers during expansion:
**35% of minted vUSD** will go to the **80/20 vUSD/WETH** pool.

**50% of minted vUSD** will go to the **98/2 vUSD/WETH** pool.

Additionally, **10% of minted vUSD will be used for incentivizing FaaS liquidity pools on ValueLiquid.**

And **5% of minted vUSD in expansion goes to a Reserve Fund, which automatically sells vUSD at a threshold to keep the vUSD price on-peg.**

![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)

**vBTC — First seigniorage synthetic BTC on Ethereum and Polkadot**

Building further on our work with vUSD and existing experimentation on the seigniorage concept, we can create synthetic assets that do not exist before on the Ethereum network in a decentralized manner. As such, we are proud to present vBTC, an alternative BTC synthetic on the Ethereum network without a centralized approach like WBTC or renBTC.

**vETH to vBTC**

Currently vETH has a supply of 1,609.32 vETH. **All current vETH** holders will have the ability to migrate their vETH to new vBTC at a fixed rate of 0.024 vBTC:vETH (current BTC/ETH price at the time of Whitepaper writing). This results in 38.62368 vBTC as the initial distribution of the token.

**vBTC pools**

We have chosen **vBTC/WBTC 80/20 and vBTC/WETH 98/2** as two pools to stabilize the vBTC to BTC peg.
vBTC will have its ‘**bootstrapping period’ for the first week (14 epochs). 
During the bootstrapping period, vBTC’s price oracle will be set to 1.2 BTC so the protocol is in constant expansion**.
To reward and incentivize liquidity providers during expansion:
**60% of minted vBTC in expansion will go to LPs of vBTC/WETH 98/2 pool.

35% of minted vBTC in expansion will go to LPs of vBTC/WBTC 80/20 pool.

5% of minted vBTC in expansion goes to a Reserve Fund, which automatically sells vBTC at a threshold to keep the vBTC price on-peg.**

![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)

**vDOT — First seigniorage synthetic DOT on Ethereum and Polkadot**

vDOT is another experiment to move Polkadot tokens onto the Ethereum network in a decentralized manner. It also shows our commitment to implement our current work to the Polkadot network.
To distribute vDOT fairly to users, we have chosen **4 seed pools: VALUE, WBTC, WETH, LINK to distribute vDOT. 10k initial vDOT will be distributed to 4 seed pools across 7 days (2.5k vDOT for each VALUE, WBTC, WETH and LINK pool).**
The Value Governance Vault will use idle funds to farm the VALUE Seed Pool for vDOT. Giving Governance Stakers additional rewards without them doing anything.

**vDOT pools**

Similar to vBTC, we chose two pools — vDOT/WETH 98/2 and vDOT/USDC 80/20 — to peg the vDOT price. The TWAP of vDOT will be subsequently calculated using DOT/USD and ETH/USD price feeds provided by ChainLink oracle services to ensure maximal robustness and efficiency.
**vDOT will have its ‘bootstrapping period’ for the first week (14 epochs). During the bootstrapping period, vDOT’s price oracle will be set to 1.2 DOT so the protocol is in constant expansion.**
**60% of minted vDOT will go to vDOT/WETH 98/2 pool.

35% of minted vDOT will go to vDOT/USDC 80/20 pool.

5% of minted vDOT goes to the Reserve Fund, which automatically sells vDOT at a threshold to keep the vDOT price on-peg.**

![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)

**Benefits for the Value Ecosystem**

We recognize for Value Liquid to expand and become a massive DeX we need to increase liquidity. Furthermore, there will be a total of 6 new liquidity pools which are used to stabilize vTokens to their respective peg. Ultimately, these pools used for vTokens will also be used in ValueLiquid for regular transactions, resulting in increased Total Value Locked (TVL) and liquidity for swaps, reducing slippage. Additionally, the 4 new Seed Pools for distribution of vDOT will also significantly boost our TVL.
As ValueLiquid will be the only DeX to trade vTokens, we expect a significant increase in daily trading volume. Through Value DeFi’s profit-sharing ecosystem, this **trading volume will increase rewards for Governance Vault Stakers.**

An example of this, during the peak of BSD on FaaS, the Governance Vault reached an APY of 70%+, with 20k VALUE tokens being distributed back to Stakers during that week through buybacks.
That is the power behind seigniorage tokens, particularly one token, and Value DeFi plans to launch multiple vTokens, rewarding loyal Stakers continuously over an extended period of time.

![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)  

![enter image description here](https://valuedefi.io/static/media/vusd-infographic.9f282db3.jpg)
  
![enter image description here](https://miro.medium.com/max/700/1*a81g73R8alhkV0TL9CPsng.png)  

**Contract addresses**  
Old vUSD contract address: [0x1B8E12F839BD4e73A47adDF76cF7F0097d74c14C](https://etherscan.io/token/0x1B8E12F839BD4e73A47adDF76cF7F0097d74c14C)   
New vUSD contract address: [0x3479b0acf875405d7853f44142fe06470a40f6cc](https://etherscan.io/token/0x3479b0acf875405d7853f44142fe06470a40f6cc)  
vETH contract address: [0x76A034e76Aa835363056dd418611E4f81870f16e](https://etherscan.io/token/0x76A034e76Aa835363056dd418611E4f81870f16e)


