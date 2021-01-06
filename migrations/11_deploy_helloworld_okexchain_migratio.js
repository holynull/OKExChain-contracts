const StableCoin = artifacts.require("StableCoin");

module.exports = async function (deployer) {
    if (deployer.network.indexOf('skipMigrations') > -1) { // skip migration
        return;
    }
    if (deployer.network.indexOf('kovan_oracle') > -1) { // skip migration
        return;
    }
    if (deployer.network_id == 4) { // Rinkeby
    } else if (deployer.network_id == 1) { // main net
    } else if (deployer.network_id == 42) { // kovan
    } else if (deployer.network_id == 2) { //OKExChain testnet
        deployer.then(() => {
            let totalSupply = web3.utils.toWei('100000000', 'ether');
            return StableCoin.new("Hello World Token for OKExChain testnet", "HWT", totalSupply);
        });
    } else {

    }

    // deployer.deploy(factory).then(() => {
    // });
    // deployer.deploy(exchange).then(() => {
    // });
};
