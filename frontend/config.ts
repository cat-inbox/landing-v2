// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  "decimals": 18,
  "airdrop": {
    "0x1552B1A051430290f1B5E31F156E3CD501f520C3": 1000,
    "0xe32d9D1F1484f57F8b5198f90bcdaBC914de0B5A": 1000,
    "0x858817FF833B5608656B22A1940eE97C7b26134c": 1000,
    "0x921b87310e4DC8827e91938C89eDa521CAd63c3a": 1000,
    "0x020bCdC76C86db34718f0357c35811b147CD866B": 1000
  }
};

// Export config
export default config;
