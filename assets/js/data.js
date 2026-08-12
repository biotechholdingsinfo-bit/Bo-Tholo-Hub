/* =========================================================================
   BO THOLO HUB — DATA STORE
   -------------------------------------------------------------------------
   This is the ONLY file you should need to edit to keep the site current.
   Everything below is SAMPLE / PLACEHOLDER data so the app is fully
   functional out of the box. Replace it with verified information from
   COGHSTA, DMPR mining/licensing systems, Stats SA, and each mine's
   own public disclosures.
 
   After editing, commit + push to GitHub — Pages will redeploy automatically.
   No build step, no server required.
   ========================================================================= */
 
const LAST_UPDATED = "2026-08-11"; // update whenever you edit this file
 
/* ---------------- Documented traditional leadership ---------------- */
const KINGS = [
  {
    kingdom: "Barolong Boo Tholo (Bo Tholo)",
    leader: "Kgosi [Placeholder Name]",
    title: "Kgosi / Paramount Chief — recognition per Traditional & Khoi-San Leadership Act",
    district: "John Taolo Gaetsewe",
    recognitionStatus: "Documented — supporting title deeds & COGHSTA correspondence on file",
    source: "COGHSTA Northern Cape — Provincial House of Traditional Leaders (placeholder ref.)",
    documented: "2026",
    notes: "Add the COGHSTA gazette / government notice reference number here once available."
  },
  {
    kingdom: "AmaZulu Kingdom",
    leader: "King [Reference — public record]",
    title: "King — recognised under the Ingonyama Trust framework",
    district: "KwaZulu-Natal (reference entry)",
    recognitionStatus: "Nationally recognised",
    source: "COGTA National / Provincial House of Traditional Leaders",
    documented: "—",
    notes: "Included as a reference point for comparative recognition status."
  },
  {
    kingdom: "Royal Bafokeng Nation",
    leader: "Kgosi [Reference — public record]",
    title: "Kgosi",
    district: "North West (reference entry)",
    recognitionStatus: "Nationally recognised, own administration",
    source: "COGTA North West",
    documented: "—",
    notes: "Included as a reference point — widely cited as a mining-royalty governance model."
  }
];
 
/* ---------------- Population & demographics ---------------- */
const DEMOGRAPHICS = {
  districts: [
    {
      name: "Ga-Segonyana Local Municipality",
      note: "District municipality: John Taolo Gaetsewe",
      population: 155000,
      households: 39000,
      unemployment: "34%",
      medianAge: 24,
      source: "Stats SA — Census / Community Survey (placeholder figures, replace with latest release)"
    },
    {
      name: "John Taolo Gaetsewe District Municipality",
      note: "Includes Ga-Segonyana, Gamagara, Joe Morolong",
      population: 260000,
      households: 68000,
      unemployment: "31%",
      medianAge: 25,
      source: "Stats SA — Census / Community Survey (placeholder figures, replace with latest release)"
    }
  ]
};
 
/* ---------------- Operational mines ---------------- */
const MINES = [
  {
    name: "Kalahari Manganese Mine (placeholder)",
    commodity: "Manganese",
    operator: "Operator name (placeholder)",
    district: "John Taolo Gaetsewe",
    king: "Barolong Boo Tholo",
    status: "active",
    opened: "19xx",
    history: "Short factual history of the mine — commissioning date, ownership changes, expansion phases. Replace with sourced text.",
    url: "",
    slpTarget: "1.0% of annual payroll (Mining Charter community development)",
    slpSpendStatus: "on-track"
  },
  {
    name: "Ga-Segonyana Iron Ore Operation (placeholder)",
    commodity: "Iron ore",
    operator: "Operator name (placeholder)",
    district: "Ga-Segonyana",
    king: "Barolong Boo Tholo",
    status: "active",
    opened: "20xx",
    history: "Short factual history — pit development, workforce size, export routes. Replace with sourced text.",
    url: "",
    slpTarget: "1.0% of annual payroll (Mining Charter community development)",
    slpSpendStatus: "at-risk"
  },
  {
    name: "Legacy Prospecting Site (placeholder)",
    commodity: "Manganese",
    operator: "Operator name (placeholder)",
    district: "John Taolo Gaetsewe",
    king: "Barolong Boo Tholo",
    status: "pending",
    opened: "—",
    history: "Prospecting right under review — add status once confirmed via the current DMPR licensing record.",
    url: "",
    slpTarget: "Not yet applicable — prospecting stage",
    slpSpendStatus: "no-data"
  }
];
 
/* ---------------- Community trusts ---------------- */
const TRUSTS = [
  {
    name: "Bo Tholo Community Development Trust (placeholder)",
    king: "Barolong Boo Tholo",
    linkedMine: "Kalahari Manganese Mine (placeholder)",
    registered: "20xx",
    exco: [
      { name: "Placeholder Name", role: "Chairperson" },
      { name: "Placeholder Name", role: "Deputy Chairperson" },
      { name: "Placeholder Name", role: "Secretary" },
      { name: "Placeholder Name", role: "Treasurer" },
      { name: "Placeholder Name", role: "Trustee — Royal Council rep." }
    ]
  },
  {
    name: "Ga-Segonyana Beneficiary Trust (placeholder)",
    king: "Barolong Boo Tholo",
    linkedMine: "Ga-Segonyana Iron Ore Operation (placeholder)",
    registered: "20xx",
    exco: [
      { name: "Placeholder Name", role: "Chairperson" },
      { name: "Placeholder Name", role: "Secretary" },
      { name: "Placeholder Name", role: "Treasurer" }
    ]
  }
];
 
/* ---------------- SLP-funded projects & disbursements ---------------- */
const PROJECTS = [
  {
    name: "Bo Tholo Bursary Programme",
    trust: "Bo Tholo Community Development Trust (placeholder)",
    fundedBy: "Kalahari Manganese Mine (placeholder)",
    amount: 1200000,
    year: 2024,
    duration: "3 years",
    beneficiaries: "60 students, Ga-Segonyana ward area",
    status: "active"
  },
  {
    name: "Rural Roads Access Upgrade",
    trust: "Ga-Segonyana Beneficiary Trust (placeholder)",
    fundedBy: "Ga-Segonyana Iron Ore Operation (placeholder)",
    amount: 8500000,
    year: 2023,
    duration: "18 months",
    beneficiaries: "4 surrounding villages",
    status: "complete"
  },
  {
    name: "Clinic Equipment & Water Infrastructure",
    trust: "Bo Tholo Community Development Trust (placeholder)",
    fundedBy: "Kalahari Manganese Mine (placeholder)",
    amount: 3400000,
    year: 2025,
    duration: "12 months",
    beneficiaries: "2 clinics, ~9,000 residents",
    status: "pending"
  }
];
 
/* ---------------- Mining & prospecting permits (DMPR-style register) ---------------- */
const PERMITS = [
  {
    holder: "Operator name (placeholder)",
    type: "Mining Right",
    commodity: "Manganese",
    area: "Ga-Segonyana",
    district: "John Taolo Gaetsewe",
    status: "granted",
    validFrom: "2019",
    validTo: "2039",
    beneficiaries: "Bo Tholo Community Development Trust (placeholder)"
  },
  {
    holder: "Operator name (placeholder)",
    type: "Mining Right",
    commodity: "Iron ore",
    area: "Ga-Segonyana",
    district: "Ga-Segonyana",
    status: "granted",
    validFrom: "2016",
    validTo: "2036",
    beneficiaries: "Ga-Segonyana Beneficiary Trust (placeholder)"
  },
  {
    holder: "Applicant name (placeholder)",
    type: "Prospecting Right",
    commodity: "Manganese",
    area: "Joe Morolong",
    district: "John Taolo Gaetsewe",
    status: "pending",
    validFrom: "Application lodged 2025",
    validTo: "—",
    beneficiaries: "To be confirmed"
  }
];
 
/* ---------------- Documents on file (evidence register) ---------------- */
const DOCUMENTS = [
  {
    title: "Title deed — [property description] (placeholder)",
    type: "Title Deed",
    heldBy: "Office of the Kgosi",
    dateOnFile: "2026",
    relatesTo: "Barolong Boo Tholo",
    status: "on-file"
  },
  {
    title: "COGHSTA correspondence confirming recognition process (placeholder)",
    type: "Government Correspondence",
    heldBy: "Office of the Kgosi",
    dateOnFile: "2026",
    relatesTo: "Barolong Boo Tholo",
    status: "on-file"
  },
  {
    title: "SLP agreement — Kalahari Manganese Mine (placeholder)",
    type: "SLP Agreement",
    heldBy: "Bo Tholo Community Development Trust",
    dateOnFile: "2024",
    relatesTo: "Kalahari Manganese Mine (placeholder)",
    status: "on-file"
  },
  {
    title: "Trust deed — Ga-Segonyana Beneficiary Trust (placeholder)",
    type: "Trust Deed",
    heldBy: "Ga-Segonyana Beneficiary Trust (placeholder)",
    dateOnFile: "20xx",
    relatesTo: "Ga-Segonyana Iron Ore Operation (placeholder)",
    status: "requested"
  }
];
 
/* ---------------- Key contacts / engagement directory ---------------- */
const CONTACTS = [
  {
    name: "Placeholder Name",
    role: "Community Liaison Officer",
    organisation: "Kalahari Manganese Mine (placeholder)",
    category: "Mine",
    notes: "First point of contact for SLP queries"
  },
  {
    name: "Regional Office — Northern Cape",
    role: "Regional Manager",
    organisation: "Department of Mineral and Petroleum Resources (DMPR)",
    category: "Government",
    notes: "Permit status & SAMRAD queries"
  },
  {
    name: "Placeholder Name",
    role: "Provincial official",
    organisation: "COGHSTA Northern Cape",
    category: "Government",
    notes: "Traditional leadership recognition matters"
  },
  {
    name: "Placeholder Name",
    role: "Chairperson",
    organisation: "Provincial House of Traditional Leaders",
    category: "Traditional governance",
    notes: "—"
  }
];
 
/* ---------------- GIS map markers (approx. Northern Cape coordinates) ---------------- */
const MAP_MINES = [
  { name: "Kalahari Manganese Mine (placeholder)", lat: -27.55, lng: 22.85, commodity: "Manganese", status: "active" },
  { name: "Ga-Segonyana Iron Ore Operation (placeholder)", lat: -27.63, lng: 23.05, commodity: "Iron ore", status: "active" },
  { name: "Legacy Prospecting Site (placeholder)", lat: -27.40, lng: 22.70, commodity: "Manganese", status: "pending" }
];
