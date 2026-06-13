const { sumERC4626VaultsExport2 } = require('../helper/erc4626')

const VAULT = '0xB7c1C8F7191C7d76B5c6650a6fB20F6f8027bf0d'

module.exports = {
  methodology: 'TVL is totalAssets() of the Bizantine USDT0 SuperVault on Superform.',
  flare: {
    tvl: sumERC4626VaultsExport2({ vaults: [VAULT] })
  }
}
