// Comprehensive Agricultural Knowledge Base for Smart Krushi
const CROPS_DATA = [
  {
    id: "rice",
    name: "Rice (Paddy / धान)",
    scientificName: "Oryza sativa",
    category: "Cereals",
    icon: "fa-seedling",
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    season: "Kharif (June - Nov) & Rabi (Nov - May)",
    growthDuration: "110 - 150 days",
    optimalTemp: "21°C - 37°C",
    waterReq: "High (1200 - 1500 mm)",
    soilType: "Deep clayey, silty clay, or loamy soil with high water retention",
    phRange: "5.5 - 7.0",
    yieldEstimate: "4.5 - 6.5 tonnes/ha",
    overview: "Rice is the primary staple food for over half the world's population. In India, it covers the largest cultivated area and thrives in warm, humid conditions with abundant water availability.",
    cultivationSteps: [
      {
        stage: "Nursery & Seed Priming",
        desc: "Treat seeds with Carbendazim (2g/kg) or Trichoderma viride (10g/kg). Prepare wet nursery beds with 1000m² area for 1 hectare transplanting."
      },
      {
        stage: "Puddling & Mainfield Preparation",
        desc: "Puddle field 2-3 times to create an impermeable hard pan that prevents water percolation. Level thoroughly."
      },
      {
        stage: "Transplanting",
        desc: "Transplant 21-25 days old seedlings with 2-3 seedlings per hill at 20x15 cm spacing. Consider SRI (System of Rice Intensification) for 30% water saving."
      },
      {
        stage: "Nutrient Management (NPK)",
        desc: "Standard N:P:K ratio 120:60:40 kg/ha. Apply 50% N + full P and K at basal; remaining N split at tillering and panicle initiation."
      },
      {
        stage: "Water & Weed Management",
        desc: "Maintain 2-5 cm standing water till grain hardening. Drain water 10-15 days prior to harvest. Use Cono-weeder or Pre-emergence herbicide like Pretilachlor."
      }
    ],
    majorDiseases: [
      {
        name: "Rice Blast (Magnaporthe oryzae)",
        symptoms: "Spindle-shaped diamond lesions with gray/ash center and brown margin on leaves and panicle neck rot.",
        treatment: "Spray Tricyclazole 75 WP @ 0.6g/L or Isoprothiolane 40 EC @ 1.5ml/L."
      },
      {
        name: "Bacterial Leaf Blight (BLB)",
        symptoms: "Water-soaked streaks starting from leaf tips turning yellow-white wavy lesions along leaf margins.",
        treatment: "Spray Streptocycline 1g + Copper Oxychloride 25g in 10 liters of water."
      },
      {
        name: "Brown Plant Hopper (BPH)",
        symptoms: "Circular patches of dried hopper-burn plants appearing suddenly in maturing fields.",
        treatment: "Spray Triflumezopyrim 10% SC @ 0.5ml/L or Pymetrozine 50% WG @ 0.6g/L."
      }
    ],
    marketInsights: "MSP for Common Paddy is approx ₹2,300/quintal. Basmati varieties command premium exports to the Middle East & Europe."
  },
  {
    id: "groundnut",
    name: "Groundnut (Peanut / मूंगफली)",
    scientificName: "Arachis hypogaea",
    category: "Oilseeds",
    icon: "fa-cubes-stacked",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    season: "Kharif (June - Oct) & Summer (Jan - May)",
    growthDuration: "100 - 125 days",
    optimalTemp: "25°C - 30°C",
    waterReq: "Moderate (450 - 650 mm)",
    soilType: "Well-drained light sandy loam, red sandy or loose loamy soil rich in organic matter",
    phRange: "6.0 - 7.5",
    yieldEstimate: "2.0 - 3.2 tonnes/ha (pod)",
    overview: "Groundnut is an invaluable oilseed and cash crop providing high-grade vegetable oil and protein-dense cake. Its unique geocarpic habit means flowers are pollinated above ground but develop pods deep underground.",
    cultivationSteps: [
      {
        stage: "Seed Selection & Inoculation",
        desc: "Use certified disease-free kernels with 70%+ germination. Inoculate with Rhizobium culture (250g/10kg seed) and Phosphobacteria to promote nitrogen-fixing root nodules."
      },
      {
        stage: "Land Preparation & Sowing",
        desc: "Plow to fine tilth. Ensure loose friable topsoil to allow easy penetration of pegs. Sow at 30x10 cm spacing at 4-5 cm depth."
      },
      {
        stage: "Critical Pegging Stage",
        desc: "At 40-50 days after sowing, pegs emerge and enter soil. Do NOT hoe or cultivate at this stage. Ensure adequate soil moisture."
      },
      {
        stage: "Gypsum Application (Crucial)",
        desc: "Apply Gypsum @ 400 - 500 kg/ha at pegging stage (40-45 DAS). Calcium is vital for pod shell filling and preventing empty pops."
      },
      {
        stage: "Harvesting & Curing",
        desc: "Harvest when inner shell of pods turns dark brown/blackish and leaves start yellowing. Sun dry pods to reduce moisture below 8-9% before storage."
      }
    ],
    majorDiseases: [
      {
        name: "Tikka Disease (Cercospora Leaf Spot)",
        symptoms: "Circular dark necrotic spots surrounded by prominent bright yellow halos on both leaf surfaces.",
        treatment: "Spray Mancozeb 75 WP @ 2.5g/L or Tebuconazole 25.9 EC @ 1ml/L at 15-day intervals."
      },
      {
        name: "Collar Rot (Aspergillus niger)",
        symptoms: "Black fungal spore masses at collar region causing sudden wilting and drying of seedlings.",
        treatment: "Seed dressing with Thiram (3g/kg) and soil application of Trichoderma viride mixed with FYM."
      },
      {
        name: "Rust (Puccinia arachidis)",
        symptoms: "Pustules containing orange-brown powdery spores on the lower leaf surface.",
        treatment: "Spray Hexaconazole 5% EC @ 2ml/L or Chlorothalonil 75 WP @ 2g/L."
      }
    ],
    marketInsights: "High oil content (48-50%) makes groundnut a high-demand commodity in oil pressing and export-grade peanut butter processing."
  },
  {
    id: "wheat",
    name: "Wheat (गेहूं)",
    scientificName: "Triticum aestivum",
    category: "Cereals",
    icon: "fa-wheat-awn",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    featured: false,
    season: "Rabi (Oct - April)",
    growthDuration: "120 - 140 days",
    optimalTemp: "15°C - 24°C",
    waterReq: "Moderate (350 - 450 mm)",
    soilType: "Well-drained fertile clay loam or loam",
    phRange: "6.0 - 7.5",
    yieldEstimate: "4.0 - 5.5 tonnes/ha",
    overview: "Leading winter staple grain rich in protein, carbs and dietary fiber. Critical irrigation stages are Crown Root Initiation (CRI) at 21 days and Flowering.",
    cultivationSteps: [
      { stage: "Sowing", desc: "Line sowing with seed-cum-fertilizer drill at 20-22.5 cm row spacing." },
      { stage: "CRI Stage Irrigation", desc: "First irrigation at 20-25 DAS is non-negotiable for root establishment." },
      { stage: "Nutrient Plan", desc: "NPK 120:60:40 kg/ha. Apply Zinc Sulphate @ 25 kg/ha if zinc deficient." }
    ],
    majorDiseases: [
      { name: "Yellow Rust (Stripe Rust)", symptoms: "Yellow powdery pustules arranged in linear stripes on leaves.", treatment: "Spray Propiconazole 25 EC @ 1ml/L." }
    ]
  },
  {
    id: "cotton",
    name: "Cotton (कपास)",
    scientificName: "Gossypium hirsutum",
    category: "Cash Crops",
    icon: "fa-cloud",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    featured: false,
    season: "Kharif (May - Dec)",
    growthDuration: "150 - 180 days",
    optimalTemp: "21°C - 32°C",
    waterReq: "Moderate to High (600 - 800 mm)",
    soilType: "Deep black cotton soils (Vertisols) with high clay content",
    phRange: "6.5 - 8.0",
    yieldEstimate: "2.0 - 2.8 tonnes/ha",
    overview: "Known as 'White Gold', cotton is the king of textile fibers and an indispensable cash crop across central and southern India.",
    cultivationSteps: [
      { stage: "Sowing", desc: "Bt cotton hybrid planted at 90x60 cm or 120x45 cm." },
      { stage: "Square & Boll Formation", desc: "Foliar spray of 19:19:19 and Planofix @ 0.25ml/L to curb flower drop." }
    ],
    majorDiseases: [
      { name: "Pink Bollworm", symptoms: "Rosetted flowers and hollowed cotton bolls with internal larvae feeding.", treatment: "Pheromone traps @ 5/acre + spray Profenofos 50 EC @ 2ml/L." }
    ]
  },
  {
    id: "maize",
    name: "Maize / Corn (मक्का)",
    scientificName: "Zea mays",
    category: "Cereals",
    icon: "fa-cubes",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    featured: false,
    season: "Kharif, Rabi & Spring",
    growthDuration: "90 - 110 days",
    optimalTemp: "20°C - 30°C",
    waterReq: "Moderate (500 - 700 mm)",
    soilType: "Well-drained deep loamy soil rich in organic matter",
    phRange: "5.8 - 7.2",
    yieldEstimate: "5.0 - 7.5 tonnes/ha",
    overview: "Queen of cereals with immense yield potential, used widely for food, poultry feed, starch and biofuel production.",
    cultivationSteps: [
      { stage: "Planting", desc: "Ridge and furrow method at 60x20 cm spacing with 20 kg/ha seed rate." },
      { stage: "Silking & Tasseling", desc: "Most moisture-critical phase; avoid any water stress." }
    ],
    majorDiseases: [
      { name: "Fall Armyworm (FAW)", symptoms: "Extensive defoliation with shot-holes and coarse sawdust-like frass inside whorls.", treatment: "Spray Chlorantraniliprole 18.5 SC @ 0.4ml/L into central whorl." }
    ]
  },
  {
    id: "tomato",
    name: "Tomato (टमाटर)",
    scientificName: "Solanum lycopersicum",
    category: "Vegetables",
    icon: "fa-apple-whole",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    featured: false,
    season: "Year-round (Autumn / Spring / Summer)",
    growthDuration: "90 - 130 days",
    optimalTemp: "18°C - 28°C",
    waterReq: "Drip Irrigation Recommended (400 - 600 mm)",
    soilType: "Well drained fertile sandy loam with good organic matter",
    phRange: "6.0 - 7.0",
    yieldEstimate: "35 - 55 tonnes/ha",
    overview: "High-value horticulture crop popular in protected and open-field cultivation, responsive to fertigation and staking.",
    cultivationSteps: [
      { stage: "Trellising / Staking", desc: "Stake indeterminate plants using bamboo poles or GI wire for clean fruit." },
      { stage: "Fertigation", desc: "Water-soluble fertilizers (NPK 19-19-19 and Calcium Nitrate) supplied via drip." }
    ],
    majorDiseases: [
      { name: "Early & Late Blight", symptoms: "Concentric target-like rings on foliage turning brown-black rapidly.", treatment: "Spray Mancozeb @ 2.5g/L or Azoxystrobin @ 1ml/L." }
    ]
  }
];

// Export to window
if (typeof window !== 'undefined') {
  window.CROPS_DATA = CROPS_DATA;
}
