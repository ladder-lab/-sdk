import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC = 56,
    SEPOLIA = 11155111,
    MATIC = 137
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}

const init_hash_721 = (chainId) => {
  const hash = {
    [56]: '',
    [4]: '0x5ec183c910dde62b453e2ec8cccc3e2e88361521812cd72a9225360027ece5ae',
    [5]: '0x0c1c6aa59d5605cb5e03b2231bdcf0f5aac2ee335d521e7780d25cdb5bfcae07',
    [11155111]: '0x92b5b00a5369e3cbce91ff0263d855551da6acef450f1b715128f900dfcce24d',
    [137]:'0xa2c974965ff855e65e49362587334831dd3ad6a7f163bfe29b22b4d95644b999'
  }
  return hash[chainId] ? hash[chainId] : hash[5]
}

const init_hash = (chainId) => {
  const hash = {
    [56]: '0x9ec8c8ff3b18dfb14fac50eaf8f1f0222c424b82ab776a7b394271de4c1a8e9f',
    [4]: '0x7842a3ea267789f9cac67fced95cf3f35c1f5f518317922ae0e6889f2e088f0b',
    [5]: '0x340b5d80515b108122de5e560de62961080d006845634656ff84db6d94c7d069',
    [11155111]: '0x340b5d80515b108122de5e560de62961080d006845634656ff84db6d94c7d069',
    [137]:'0x91a521d3200632f6f18c2d161b34446d17ee5a8126366b0e8c30a668837f4a6d'
  }
  return hash[chainId] ? hash[chainId] : hash[5]
}

const factory_addresses721 = (chainId) => {
  const addresses = {
    [56]: '',
    [4]: '0x50A180230A11734FFD1A9A55e80c442387d42931',
    [5]: '0xfE354EA7a06f6dBDEF06F087C4Be5A6d4E021442',
    [11155111]: '0xc5af92f871Aac038e336c9a04bbAFE45C81916f3',
    [137]:'0xFc709d4669228380B8b349B05B21F3b168A3eC7E'
  }
  return addresses[chainId] ? addresses[chainId] : addresses[5]
}

const factory_addresses = (chainId) => {
  const addresses = {
    [56]: '0xa1bf45AF7cDe8c105054611383E8ae3dA65615a3',
    [4]: '0xB4AA7ce0558A8EbfC943928d6F3E5ceCc1650a46',
    [5]: '0x075333bF761555D28D78E40232ABdC548083C3D7',
    [11155111]: '0x83b115AdC58A951B77cD249b41977B2Fd1f13772',
    [137]:'0x590184D7c808c1f68304dEbDCeABec039226CBe5'
  }
  return addresses[chainId] ? addresses[chainId] : addresses[5]
}

export declare const FACTORY_ADDRESS =(chainId, is721Pair) => is721Pair ? factory_addresses721(chainId) : factory_addresses(chainId);
export declare const INIT_CODE_HASH =  (chainId, is721Pair) => is721Pair ? init_hash_721(chainId) : init_hash(chainId);
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
