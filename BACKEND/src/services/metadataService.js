function buildMetadata(lead) {
  return {
    name: `Lead: ${lead.business_name}`,
    description: `Lead tokenizado de ${lead.business_name}, sector ${lead.industry}`,
    image: "ipfs://<placeholder-image-cid>", 
    attributes: [
      { trait_type: "Industry", value: lead.industry },
      { trait_type: "City", value: lead.city },
      { trait_type: "Status", value: lead.status }
    ]
  };
}

module.exports = { buildMetadata };
