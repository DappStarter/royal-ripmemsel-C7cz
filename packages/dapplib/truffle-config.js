require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strong cruise script protect hope open force gather'; 
let testAccounts = [
"0xda9768538d618c3ee9285326f70c3f968ed50b67abba5aade1ed8dd81a89a448",
"0x9acbea01fcafb8d7d74c055e69da6e926a1931b3e8741c92a02e83f3ddb03395",
"0x23a27b15dad9251cea68ca3e2b58ec84e625793b8b70b189c51dec244c690592",
"0x09f38791340c4dc081469bcb653cf08c522b7f974b3b1105bd030d23649d541a",
"0x109d9552258d0bb02bc4d03160dbeeaa223cf7a1688abf6efd83b2144192fdd5",
"0x588c8cddb86e36c3bc5067b7ffdba5106cc8d1fd42fa07a43b59d166050f5e69",
"0x8872ab84c81e58a315640aee462c8c4c6fc6074403bd1ef8d80b86602112701a",
"0x361365a2e9bd35a14867afa9b6ea1cb4c3dd724d20a9a7a035543e4534573d58",
"0xa07ddcb45032c65ced147323efa302631f037c4402fad832ad0f393ca92b4e45",
"0x08b4139daa4e6a4dc76087565e99c728ef031d49748961f326f07c9ae1c92b4c"
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

