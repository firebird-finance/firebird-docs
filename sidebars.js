module.exports = {
  someSidebar: {
    "Overview": [
      "introduction",
      "resources/vision-mission",
    ],
    "Products and services": [
      "products/vSwap",
      "products/farms-as-a-service",
      "products/vSafes",
      "products/vGovernance",
    ],
    "Tokenomics": [
      {
        type: "category",
        label: "ETH",
        items: ["VALUE","gvvalue", "vBOND", "vTokens"],
      },
      {
        type: "category",
        label: "BSC",
        items: ["vBSWAP"],
      },
     ],
    "Resources": [
      {
        type: "category",
        label: "Guides",
        items: [
          {
            ETH: [
          "guides/provide-liquidity-on-value-liquid-and-farm-for-value-rewards",
          "guides/save-on-transaction-fees-using-the-chi-gastoken"
              ],
            },
          {
            BSC: [   
          "binance-smart-chain",
          "guide-to-gvvalue-staking-on-binance-smart-chain",
          "vSafe-guide-on-binance-smart-chain",
          "Beltfi-guide",
          "vFarm-security"
              ],
             },
        ],
      },
      {
        type: "category",
        label: "FAQ",
        items: ["resources/glossary/defi", "binance-smart-chain-expansion-faq"],
      },
      {
        type: "category",
        label: "AMA",
        items: ["ama/arto-vfarm-ama"],
      },
    ],
      "Social Media": [
      {
        type: 'link',
        label: 'Medium',
        href: 'https://valuedefi.medium.com/'
      },
      {
        type: 'link',
        label: 'Github',
        href: 'https://github.com/valuedefi'
      },
      {
        type: 'link',
        label: 'Governance Forum',
        href: 'https://vboard.valuedefi.io/'
      },
      {
        type: 'link',
        label: 'Twitter',
        href: 'https://twitter.com/value_defi'
      },
      {
        type: 'link',
        label: 'Discord',
        href: 'https://discord.gg/Dpvd7tp'
      },
      {
        type: 'link',
        label: 'Telegram',
        href: 'https://t.me/ValueDeFi'
      }
    ],
  },
};
