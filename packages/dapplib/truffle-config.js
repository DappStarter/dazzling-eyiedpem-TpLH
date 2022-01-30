require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain quality harvest clinic bright skate'; 
let testAccounts = [
"0xf2fecf18d10d01d708781555437fe4004277b6c24ceb857371f661deaf195176",
"0x7371d9b99ea134bac3f9915ad30ff2f66697345e356441ff29516243fb1f2da1",
"0x6c1c50aecf8bf73783e2d0d75766d8260e88369f1744d5ab0cde7ff7a68959a7",
"0xc4124ee2019b76792a5fd83753dcf892541292cf1ddbca641c6cec1e5db9b51e",
"0x54100436ae258a0b262f51acc9a0ded98e221f0b6c3a7ab88873663edd2c9538",
"0xcec4345049e682bcc8e0f520dbf70f8358dd50c58b12ed2caad8e9661207dc07",
"0xcb3c54ae1a98c68b142db88930b43ab33066ab40de76a1ea28fe5fec87316be5",
"0x29d67e6025bc74da42661e61772ad1fe555b8e43910e2b51a7e5366c5377b435",
"0x1acdaca0327ebb16dd1dd691397ae36e52da3fb2fa7fe93aa1b3734d07e81fd8",
"0x80a8a07e685c76fd49a15b82566d5a137d8c3750cc40972a2dbea2922bdf661d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

