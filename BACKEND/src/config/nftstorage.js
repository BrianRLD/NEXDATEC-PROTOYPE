const { NFTStorage } = require("nft.storage");

const nftClient = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY });

module.exports = nftClient;
