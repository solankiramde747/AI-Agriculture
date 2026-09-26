// AI Knowledge Base & Disease Diagnostic Engine for Smart Krushi

const AI_KNOWLEDGE_BASE = {
  // Common farmer question mappings
  faqs: [
    {
      keywords: ["rice blast", "blast", "धान ब्लास्ट", "neck blast", "leaf blast"],
      response: `🌱 **Rice Blast Management (Magnaporthe oryzae)**

• **Symptoms:** Spindle/diamond-shaped lesions with grayish-white centers and reddish-brown borders. In neck blast, nodes turn black and panicles break.
• **Chemical Treatment:**
  - Spray **Tricyclazole 75% WP** @ 0.6 g/liter of water, OR
  - **Isoprothiolane 40% EC** @ 1.5 ml/liter, OR
  - **Azoxystrobin 18.2% + Difenoconazole 11.4% SC** @ 1 ml/liter.
• **Organic / Biological Control:**
  - Spray *Pseudomonas fluorescens* @ 2.5 kg/ha or 5g/L water at 10-day intervals.
  - Foliar spray of fresh cow dung slurry (5%) + neem oil (3%).
• **Preventive Steps:**
  - Avoid excessive nitrogenous fertilizer (Urea); split doses into 3-4 applications.
  - Maintain continuous thin film of water without flooding nursery.`
    },
    {
      keywords: ["groundnut tikka", "tikka", "leaf spot", "मूंगफली टिक्का", "cercospora"],
      response: `🥜 **Groundnut Tikka (Leaf Spot) Management**

• **Symptoms:**
  - *Early leaf spot:* Circular reddish-brown spots with prominent bright yellow halos.
  - *Late leaf spot:* Dark brown to black spots with minimal or no yellow halo, mostly on the lower leaf surface.
• **Chemical Control:**
  - Spray **Mancozeb 75% WP** @ 2.5 g/liter, OR
  - **Tebuconazole 25.9% EC** @ 1 ml/liter, OR
  - **Carbendazim 12% + Mancozeb 63% WP (Saaf)** @ 2 g/liter at the first sign of spots. Repeat after 14 days if rainy.
• **Cultural & Organic Control:**
  - Collect and burn plant residues after harvest.
  - Spray 5% Neem Seed Kernel Extract (NSKE) or Trichoderma viride.
• **Nutrient Advice:** Apply **Gypsum @ 400 kg/ha** at 40-45 DAS to strengthen cell walls against fungal penetration.`
    },
    {
      keywords: ["groundnut gypsum", "pegging", "calcium groundnut", "pops", "empty shell"],
      response: `🥜 **Groundnut Pegging & Gypsum Application Advisory**

• **Why Gypsum?** Groundnut pods absorb calcium directly from the soil, not from roots. Calcium deficiency leads to 'pops' (empty pods) and weak kernels.
• **Application Time:** 40 to 45 days after sowing (DAS), right during peak flowering & peg entry.
• **Dosage:** 400 - 500 kg/ha (approx 160-200 kg per acre).
• **Method:** Broadcast evenly around the root zone when soil has light moisture, then incorporate with light earthing up. Avoid deep hoeing which breaks fragile pegs.`
    },
    {
      keywords: ["rice stem borer", "stem borer", "dead heart", "white earhead", "तना छेदक"],
      response: `🌾 **Paddy Yellow Stem Borer Control**

• **Symptoms:** Larva bores into main stem causing 'Dead Heart' during vegetative phase and 'White Earheads' (chaffy white panicles) during flowering.
• **Recommended Treatment:**
  - Broadcast **Chlorantraniliprole 0.4% GR (Ferterra)** @ 4 kg/acre, OR
  - **Cartap Hydrochloride 4% GR (Padan)** @ 7.5 - 10 kg/acre with thin layer of standing water.
  - For foliar spray: **Chlorantraniliprole 18.5% SC** @ 0.4 ml/L.
• **Biological / IPM:**
  - Install **Pheromone traps** @ 8-10 traps/acre with Scirpophaga incertulas lures.
  - Release egg parasitoid *Trichogramma japonicum* @ 100,000/ha weekly.`
    },
    {
      keywords: ["drip irrigation", "water saving", "drip subsidy", "ड्रिप सिंचाई"],
      response: `💧 **Smart Drip Irrigation & Fertigation Guide**

• **Benefits:**
  - 40% to 60% water savings compared to flood irrigation.
  - 25% to 35% higher crop yields due to direct root-zone hydration.
  - Prevents fungal foliar diseases by keeping leaves dry.
• **Government Subsidies (PMKSY - Per Drop More Crop):**
  - Small & marginal farmers: Up to **55% subsidy**.
  - Other farmers: Up to **45% subsidy**.
• **Fertigation Schedule:**
  - Apply 100% water-soluble fertilizers (NPK 19-19-19, Urea, Potassium Nitrate) through venturi injector every 7-10 days.`
    },
    {
      keywords: ["organic", "neem oil", "jeevamrut", "जैविक खेती", "panchagavya"],
      response: `🌿 **Natural & Organic Farming Formulations**

1. **Jeevamrut (Soil Booster):**
   - 10 kg native cow dung + 10 L cow urine + 2 kg jaggery + 2 kg pulse flour + handful of fertile field soil + 200 L water. Ferment for 48 hours, stir clockwise twice daily. Apply 200L/acre via irrigation.
2. **Neem Seed Kernel Extract (NSKE 5%):**
   - Soak 5 kg pounded neem seed powder in 100 L water with 100g detergent overnight. Potent repellent against chewing & sucking pests.
3. **Dashaparni Ark:**
   - Fermented concoction of 10 bitter plant leaves (Neem, Papaya, Castor, Karanja, Datura, etc.) providing wide-spectrum pest resistance.`
    },
    {
      keywords: ["weather", "rain", "spray", "foliar spray condition", "मौसम"],
      response: `⛅ **Agro-Weather Spray Decision Guidelines**

• **Wind Speed:** Best spray conditions are when wind speed is between 3 to 10 km/h. Avoid spraying if wind exceeds 15 km/h to prevent chemical drift.
• **Temperature:** Spray in early morning (6 AM - 9 AM) or late afternoon (4 PM - 6:30 PM). High midday temperatures (>32°C) cause fast evaporation and leaf scorch.
• **Rainfall Window:** Do not apply foliar sprays if rain is forecast within 4 to 6 hours. Always add a silicon-based non-ionic sticking/spreader agent (0.5 ml/L).`
    },
    {
      keywords: ["soil health", "soil test", "ph", "मिट्टी की जांच", "fertilizer"],
      response: `🧪 **Soil Health & Nutrient Optimization**

• **Soil Testing Frequency:** Conduct comprehensive soil testing once every 2-3 years before sowing season.
• **Key Parameters to Track:** pH (ideal 6.5 - 7.5), Electrical Conductivity (EC < 1.0 dS/m), Organic Carbon (> 0.75%), Available Nitrogen, Phosphorus, Potassium, Zinc, and Boron.
• **Remedies for Soil Imbalance:**
  - *Acidic soil (pH < 6.0):* Apply Agricultural Lime or Dolomite @ 1-2 tonnes/ha.
  - *Alkaline / Saline soil (pH > 8.0):* Apply Agricultural Gypsum @ 2-3 tonnes/ha with green manuring (Dhaincha/Sunhemp).`
    }
  ],

  // Fallback intelligent responder based on semantic agriculture tokens
  generateResponse(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. Direct keyword match
    for (const faq of this.faqs) {
      if (faq.keywords.some(k => cleanQuery.includes(k.toLowerCase()))) {
        return faq.response;
      }
    }

    // 2. Crop specific broad handlers
    if (cleanQuery.includes("rice") || cleanQuery.includes("paddy") || cleanQuery.includes("धान")) {
      return `🌾 **Smart Krushi Rice (Paddy) Advisory**

Rice thrives in heavy clay soils with good water retention.
• **Key Recommendations:**
  - **Seed Rate:** 20-25 kg/ha for normal transplanting; 5-7 kg/ha for SRI.
  - **Fertilizer:** NPK 120:60:40 kg/ha. Apply Zinc Sulphate 25 kg/ha basal.
  - **Water Management:** Alternate Wetting & Drying (AWD) saves 25% water without yield penalty.
  - Need details on specific pests like Stem Borer, Gall Midge, or Rice Blast? Just ask!`;
    }

    if (cleanQuery.includes("groundnut") || cleanQuery.includes("peanut") || cleanQuery.includes("मूंगफली")) {
      return `🥜 **Smart Krushi Groundnut (Peanut) Advisory**

Groundnut needs light, loose sandy-loam soils to allow easy peg penetration.
• **Key Recommendations:**
  - **Seed Treatment:** Inoculate with Rhizobium + Trichoderma viride.
  - **Critical Stages:** Flowering (25-35 DAS), Pegging (40-50 DAS), and Pod development (60-80 DAS).
  - **Crucial Mineral:** Apply **Gypsum 400 kg/ha** at pegging stage for kernel fullness and oil synthesis.
  - Have a leaf photo? Upload it to our **Disease Detection** tool for instant diagnosis!`;
    }

    if (cleanQuery.includes("fertilizer") || cleanQuery.includes("npk") || cleanQuery.includes("urea")) {
      return `🌱 **Smart Krushi Balanced Nutrition Guidance**

• Avoid unbalanced over-use of plain Urea (Nitrogen), as it invites fungal attacks and succulent vegetative growth.
• Follow the 4R Nutrient Stewardship: **Right Source, Right Rate, Right Time, Right Place**.
• Integrate 5 tonnes of Farmyard Manure (FYM) or 2 tonnes of Vermicompost per hectare alongside chemical fertilizers.`;
    }

    if (cleanQuery.includes("pest") || cleanQuery.includes("insect") || cleanQuery.includes("spray") || cleanQuery.includes("कीड़ा")) {
      return `🐛 **Integrated Pest Management (IPM) Advisory**

1. Install yellow & blue sticky traps @ 10-15 per acre to monitor thrips, whiteflies, and aphids.
2. Maintain beneficial predator insects by avoiding indiscriminate broad-spectrum sprays.
3. For chewing caterpillars, consider Bacillus thuringiensis (Bt) or Neem formulations (10,000 ppm) before applying targeted chemicals.`;
    }

    // Default versatile response
    return `🌾 **Smart Krushi AI Agronomist**

Thank you for your question on "${query}".
Here are quick actionable agronomic steps:
• **Soil & Moisture:** Ensure field moisture is optimal; avoid water stagnation in root zones (except wetland paddy).
• **Diagnostic check:** If you are noticing yellowing leaves, spots, or stunted growth, check our **Disease Detection** scanner or specify the crop name (e.g. *Rice*, *Groundnut*, *Wheat*).
• **Helpline:** You can also call the National Kisan Call Center at **1800-180-1551** (Toll-Free, 6 AM to 10 PM).`;
  }
};

// Preset Diagnostic Samples for testing Disease Detection
const DIAGNOSTIC_SAMPLES = [
  {
    id: "sample_rice_blast",
    name: "Rice Blast (Paddy)",
    crop: "Rice (Paddy)",
    disease: "Rice Blast (Magnaporthe oryzae)",
    confidence: 96.8,
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    symptoms: [
      "Diamond or spindle-shaped lesions with ash-colored centers",
      "Dark brown borders with yellow chlorotic halos",
      "Necrotic spots coalescing to cause complete leaf blight"
    ],
    chemicalControl: "Spray Tricyclazole 75% WP @ 0.6 g/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 ml/L.",
    organicControl: "Foliar application of Pseudomonas fluorescens @ 2.5 kg/ha or 5% Neem oil emulsion.",
    prevention: "Avoid excessive nitrogen fertilizers; avoid dense planting; use resistant varieties such as Swarna or IR-64."
  },
  {
    id: "sample_groundnut_tikka",
    name: "Groundnut Tikka (Leaf Spot)",
    crop: "Groundnut (Peanut)",
    disease: "Tikka Leaf Spot (Cercospora arachidicola)",
    confidence: 94.2,
    severity: "Moderate to High",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    symptoms: [
      "Circular dark brown to black spots on upper leaf surfaces",
      "Prominent bright yellow concentric haloes surrounding lesions",
      "Premature defoliation resulting in severe pod yield loss"
    ],
    chemicalControl: "Spray Mancozeb 75 WP @ 2.5g/L or Tebuconazole 25.9 EC @ 1ml/L at 14-day intervals.",
    organicControl: "Spray 5% Neem Seed Kernel Extract (NSKE) or Trichoderma viride enriched compost.",
    prevention: "Apply Gypsum @ 400 kg/ha at pegging; rotate crops with non-legumes; remove infected debris."
  },
  {
    id: "sample_rice_blight",
    name: "Rice Bacterial Leaf Blight",
    crop: "Rice (Paddy)",
    disease: "Bacterial Leaf Blight (Xanthomonas oryzae)",
    confidence: 92.5,
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    symptoms: [
      "Water-soaked stripes starting near leaf tips and margins",
      "Wavy translucent yellow to grayish lesions advancing downward",
      "Milky bacterial exudate droplets visible on early morning leaves"
    ],
    chemicalControl: "Spray Streptocycline @ 1g + Copper Oxychloride @ 25g per 10 L water.",
    organicControl: "Spray fresh cow dung supernatant (20 kg cow dung soaked in 100 L water) filtered through muslin cloth.",
    prevention: "Avoid deep submergence in nursery; drain excess water; avoid clipping seedling tips."
  },
  {
    id: "sample_groundnut_rust",
    name: "Groundnut Rust",
    crop: "Groundnut (Peanut)",
    disease: "Groundnut Rust (Puccinia arachidis)",
    confidence: 91.0,
    severity: "Moderate",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    symptoms: [
      "Orange-brown to reddish pustules on the lower leaf surface",
      "Leaves become chlorotic, curled, and brittle like sandpaper",
      "Pustules rupture releasing masses of urediniospores"
    ],
    chemicalControl: "Spray Chlorothalonil 75 WP @ 2g/L or Hexaconazole 5 EC @ 2ml/L.",
    organicControl: "Foliar application of Panchagavya 3% or fermented buttermilk spray (1:10 ratio).",
    prevention: "Field sanitation; destroy volunteer plants; maintain optimum plant spacing for aeration."
  },
  {
    id: "sample_healthy_rice",
    name: "Healthy Rice Field",
    crop: "Rice (Paddy)",
    disease: "None - Vibrant & Healthy Crop",
    confidence: 99.1,
    severity: "Healthy",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    symptoms: [
      "Uniform lush green foliage without spotting or chlorosis",
      "Sturdy tillers with balanced internode spacing",
      "Clean root system with vigorous feeder roots"
    ],
    chemicalControl: "No chemical fungicides or bactericides required.",
    organicControl: "Continue protective prophylactic sprays of Jeevamrut or Seaweed extract @ 2ml/L.",
    prevention: "Maintain balanced nitrogen levels; avoid prolonged deep flooding; maintain clean bunds."
  }
];

if (typeof window !== 'undefined') {
  window.AI_KNOWLEDGE_BASE = AI_KNOWLEDGE_BASE;
  window.DIAGNOSTIC_SAMPLES = DIAGNOSTIC_SAMPLES;
}
