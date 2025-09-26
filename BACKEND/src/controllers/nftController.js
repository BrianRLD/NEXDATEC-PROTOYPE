const nftClient = require("../config/nftstorage");
const supabase = require("../config/supabase");
const { buildMetadata } = require("../services/metadataService");

async function generateMetadata(req, res) {
  const { leadId } = req.params;
  const { data: lead, error } = await supabase.from("leads").select("*").eq("id", leadId).single();

  if (error || !lead) return res.status(404).json({ error: "Lead not found" });

  const metadata = buildMetadata(lead);

  try {
    const blob = new Blob([JSON.stringify(metadata)], { type: "application/json" });
    const cid = await nftClient.storeBlob(blob);
    const tokenURI = `ipfs://${cid}`;

    res.json({ tokenURI, metadata });
  } catch (err) {
    res.status(500).json({ error: "NFT storage failed", details: err.message });
  }
}

module.exports = { generateMetadata };
