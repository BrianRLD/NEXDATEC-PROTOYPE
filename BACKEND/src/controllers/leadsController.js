const supabase = require("../config/supabase");

async function getLeads(req, res) {
  const { data, error } = await supabase.from("leads").select("*").limit(20);
  if (error) return res.status(500).json({ error });
  res.json(data);
}

module.exports = { getLeads };
