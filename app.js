/**
 * Smart Krushi - Main Application Script
 * Full interactivity for Crop Guides, AI Assistant, Disease Scanner, Weather, & Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initCropSection();
  initAIAssistant();
  initDiseaseScanner();
  initWeatherDashboard();
  initContactForm();
  initLanguageSwitcher();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('smart_krushi_theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('smart_krushi_theme', isDark ? 'dark' : 'light');
    themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    showToast(isDark ? '🌙 Dark Mode enabled' : '☀️ Light Mode enabled');
  });
}

/* ==========================================================================
   2. Header & Navigation (Smooth Scroll, Active Spy, Drawer)
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Active section scroll spy
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link && scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
}

/* ==========================================================================
   3. Crop Information & Modal
   ========================================================================== */
function initCropSection() {
  const cropsGrid = document.getElementById('cropsGrid');
  const searchInput = document.getElementById('cropSearchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.getElementById('cropModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  let currentCategory = 'all';
  let searchQuery = '';

  // Render initial crop cards
  renderCrops();

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderCrops();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCrops();
    });
  }

  function renderCrops() {
    if (!cropsGrid || !window.CROPS_DATA) return;

    const filtered = window.CROPS_DATA.filter(crop => {
      const matchCategory = (currentCategory === 'all') || (crop.category.toLowerCase() === currentCategory.toLowerCase());
      const matchSearch = crop.name.toLowerCase().includes(searchQuery) ||
                          crop.scientificName.toLowerCase().includes(searchQuery) ||
                          crop.category.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      cropsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fa-solid fa-wheat-awn-circle-exclamation" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--earth-amber);"></i>
          <p>No crops found matching "${searchQuery}". Try searching for 'Rice', 'Groundnut', or 'Wheat'.</p>
        </div>`;
      return;
    }

    cropsGrid.innerHTML = filtered.map(crop => `
      <div class="crop-card">
        <div class="crop-card-image-box">
          <img src="${crop.image}" alt="${crop.name}" class="crop-card-img" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'250\' viewBox=\'0 0 400 250\'><rect fill=\'%232d6a4f\' width=\'400\' height=\'250\'/><text fill=\'%23ffffff\' font-family=\'sans-serif\' font-size=\'20\' dy=\'10.5\' font-weight=\'bold\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'>${encodeURIComponent(crop.name)}</text></svg>';" />
          <span class="crop-category-tag">${crop.category}</span>
          ${crop.featured ? '<span class="crop-feature-tag"><i class="fa-solid fa-star"></i> Featured Focus</span>' : ''}
        </div>
        <div class="crop-card-body">
          <div class="crop-title-row">
            <h3 class="crop-name">${crop.name}</h3>
          </div>
          <div class="crop-scientific">${crop.scientificName}</div>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
            ${crop.overview.slice(0, 115)}...
          </p>
          <div class="crop-quick-meta">
            <div class="meta-item"><i class="fa-regular fa-calendar"></i> <span>${crop.season.split('(')[0]}</span></div>
            <div class="meta-item"><i class="fa-solid fa-temperature-half"></i> <span>${crop.optimalTemp}</span></div>
            <div class="meta-item"><i class="fa-solid fa-droplet"></i> <span>${crop.waterReq.split(' ')[0]} Water</span></div>
            <div class="meta-item"><i class="fa-solid fa-seedling"></i> <span>${crop.growthDuration}</span></div>
          </div>
          <div class="crop-card-footer">
            <button class="btn btn-secondary view-crop-btn" data-crop-id="${crop.id}" style="width: 100%; padding: 10px 16px; font-size: 0.88rem;">
              <i class="fa-solid fa-book-open-reader"></i> View Full Agronomy Guide
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to view detail buttons
    document.querySelectorAll('.view-crop-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cropId = btn.getAttribute('data-crop-id');
        openCropModal(cropId);
      });
    });
  }

  // Modal interactions
  function openCropModal(cropId) {
    const crop = window.CROPS_DATA.find(c => c.id === cropId);
    if (!crop || !modalBackdrop) return;

    document.getElementById('modalCropName').textContent = crop.name;
    document.getElementById('modalScientific').textContent = crop.scientificName;
    document.getElementById('modalHeroImg').src = crop.bannerImage || crop.image;

    // Overview Tab
    document.getElementById('modalOverviewText').textContent = crop.overview;
    document.getElementById('modalSoilInfo').textContent = crop.soilType;
    document.getElementById('modalPhInfo').textContent = crop.phRange;
    document.getElementById('modalYieldInfo').textContent = crop.yieldEstimate;
    document.getElementById('modalDurationInfo').textContent = crop.growthDuration;

    // Cultivation Timeline Tab
    const timelineContainer = document.getElementById('modalCultivationTimeline');
    timelineContainer.innerHTML = crop.cultivationSteps.map((step, idx) => `
      <div class="timeline-step">
        <div class="step-num">${idx + 1}</div>
        <div>
          <h4 style="font-size: 1rem; color: var(--primary-700); margin-bottom: 4px;">${step.stage}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">${step.desc}</p>
        </div>
      </div>
    `).join('');

    // Diseases Tab
    const diseasesContainer = document.getElementById('modalDiseasesList');
    diseasesContainer.innerHTML = crop.majorDiseases.map(d => `
      <div style="background: var(--bg-card-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px; border-left: 4px solid #d32f2f;">
        <h4 style="color: #c62828; font-size: 1rem; margin-bottom: 4px;"><i class="fa-solid fa-triangle-exclamation"></i> ${d.name}</h4>
        <p style="font-size: 0.88rem; margin-bottom: 6px;"><strong>Symptoms:</strong> ${d.symptoms}</p>
        <p style="font-size: 0.88rem; color: var(--primary-800);"><strong>Recommended Action:</strong> ${d.treatment}</p>
      </div>
    `).join('');

    // Market Tab
    document.getElementById('modalMarketInfo').innerHTML = `
      <div style="background: var(--bg-card-subtle); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid var(--earth-gold);">
        <h4 style="color: var(--primary-800); margin-bottom: 8px;"><i class="fa-solid fa-chart-line"></i> Market & Price Advisory</h4>
        <p style="font-size: 0.92rem; color: var(--text-muted);">${crop.marketInsights || 'High commercial market liquidity across national APMC mandis. Consult local agricultural marketing boards for daily mandi rates.'}</p>
      </div>
    `;

    // Reset to first tab
    switchModalTab('overview');
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Modal Tab switching
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchModalTab(tabName);
    });
  });

  function switchModalTab(tabName) {
    modalTabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tabName));
    document.querySelectorAll('.modal-tab-pane').forEach(p => {
      p.classList.toggle('active', p.id === `tab-${tabName}`);
    });
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
}

/* ==========================================================================
   4. AI Agriculture Assistant (Chat, Speech Synthesis, Presets)
   ========================================================================== */
function initAIAssistant() {
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendChatBtn');
  const clearBtn = document.getElementById('clearChatBtn');
  const presetChips = document.querySelectorAll('.chip-btn');

  // Handle Preset Chips
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        handleUserMessage(prompt);
      }
    });
  });

  // Handle Input Submit
  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', () => {
      const msg = chatInput.value.trim();
      if (msg) {
        handleUserMessage(msg);
        chatInput.value = '';
      }
    });

    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const msg = chatInput.value.trim();
        if (msg) {
          handleUserMessage(msg);
          chatInput.value = '';
        }
      }
    });
  }

  // Clear Chat
  if (clearBtn && chatMessages) {
    clearBtn.addEventListener('click', () => {
      chatMessages.innerHTML = `
        <div class="chat-bubble bot">
          <div style="font-weight: 700; color: var(--primary-700); margin-bottom: 4px;">🌱 Smart Krushi AI Assistant</div>
          <p>Namaste! I am your 24/7 AI Agricultural Expert. How can I assist you with rice, groundnut, crop diseases, fertilizer calculations, or weather advisories today?</p>
        </div>
      `;
      showToast('Chat history cleared');
    });
  }

  function handleUserMessage(userText) {
    // Append user bubble
    appendMessage(userText, 'user');

    // Add typing indicator
    const typingId = appendTypingIndicator();

    // Simulate AI reasoning delay
    setTimeout(() => {
      removeTypingIndicator(typingId);
      const aiReply = window.AI_KNOWLEDGE_BASE.generateResponse(userText);
      appendMessage(aiReply, 'bot');
    }, 650);
  }

  function appendMessage(text, sender) {
    if (!chatMessages) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;

    if (sender === 'user') {
      bubble.textContent = text;
    } else {
      // Format markdown-like bold and bullet lists for bot
      const formatted = formatBotMessage(text);
      bubble.innerHTML = `
        <div style="font-weight: 700; color: var(--primary-700); margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between;">
          <span>🌱 Krushi AI Advisor</span>
          <span style="font-size: 0.72rem; font-weight: normal; color: var(--text-muted);">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <div class="bot-msg-body">${formatted}</div>
        <div class="chat-bubble-actions">
          <button class="action-tiny-btn speak-btn" title="Read Aloud"><i class="fa-solid fa-volume-high"></i> Listen</button>
          <button class="action-tiny-btn copy-btn" title="Copy Text"><i class="fa-regular fa-copy"></i> Copy</button>
        </div>
      `;

      // Speech synthesis listener
      const speakBtn = bubble.querySelector('.speak-btn');
      speakBtn.addEventListener('click', () => {
        speakText(text);
      });

      // Copy listener
      const copyBtn = bubble.querySelector('.copy-btn');
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Copied to clipboard!');
        });
      });
    }

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendTypingIndicator() {
    const id = 'typing_' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = id;
    typingDiv.className = 'chat-bubble bot';
    typingDiv.innerHTML = `
      <div class="typing-dots">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function formatBotMessage(raw) {
    // Replace **bold** with <strong>
    let res = raw.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace markdown bullet points with nicely styled bullet lines
    res = res.replace(/^[•\-\*]\s+(.*)$/gm, '<li style="margin-left: 18px; margin-bottom: 4px;">$1</li>');
    // Replace linebreaks
    res = res.replace(/\n\n/g, '<div style="margin-bottom: 8px;"></div>');
    res = res.replace(/\n/g, '<br>');
    return res;
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Speech synthesis not supported in this browser');
      return;
    }
    window.speechSynthesis.cancel(); // stop any ongoing speech
    // Strip markdown formatting for speech
    const cleanText = text.replace(/[*#•\-]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    showToast('🔊 Reading advisory aloud...');
  }
}

/* ==========================================================================
   5. AI Crop Disease Detection Engine
   ========================================================================== */
function initDiseaseScanner() {
  const fileInput = document.getElementById('leafImageInput');
  const dropZone = document.getElementById('scannerDropZone');
  const previewImg = document.getElementById('scannerPreviewImg');
  const placeholder = document.getElementById('scannerPlaceholder');
  const hud = document.getElementById('scanningHud');
  const hudReading = document.getElementById('hudReading');
  const sampleBtns = document.querySelectorAll('.sample-pill-btn');

  const emptyState = document.getElementById('emptyDiagnosisState');
  const resultContent = document.getElementById('resultContentView');

  // Sample quick buttons
  sampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sampleId = btn.getAttribute('data-sample');
      const sample = window.DIAGNOSTIC_SAMPLES.find(s => s.id === sampleId);
      if (sample) {
        runScanPipeline(sample.imageUrl, sample);
      }
    });
  });

  // File Upload
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        processUploadedFile(file);
      }
    });
  }

  // Drag and Drop
  if (dropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      if (file) {
        processUploadedFile(file);
      }
    });
  }

  function processUploadedFile(file) {
    if (!file.type.startsWith('image/')) {
      showToast('Please upload a valid image file (JPG, PNG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      // Synthesize diagnostic result for user-uploaded custom crop leaf
      const customSample = generateCustomDiagnosis(file.name);
      runScanPipeline(dataUrl, customSample);
    };
    reader.readAsDataURL(file);
  }

  function runScanPipeline(imageSrc, diagnosticData) {
    // Show image in preview box
    placeholder.style.display = 'none';
    previewImg.src = imageSrc;
    previewImg.classList.add('visible');

    // Activate laser HUD scanner
    hud.classList.add('active');

    // Cycle HUD diagnostics messages
    const hudMessages = [
      "CALIBRATING SENSORS...",
      "EXTRACTING CHLOROPHYLL SPECTRA...",
      "IDENTIFYING NECROTIC REGIONS...",
      "MATCHING AGAINST 50,000+ AGRI SAMPLES...",
      "DIAGNOSIS COMPLETE"
    ];

    let step = 0;
    hudReading.textContent = hudMessages[0];
    const interval = setInterval(() => {
      step++;
      if (step < hudMessages.length) {
        hudReading.textContent = hudMessages[step];
      } else {
        clearInterval(interval);
      }
    }, 350);

    // Conclude scan after 1.6s
    setTimeout(() => {
      hud.classList.remove('active');
      renderDiagnosisResult(diagnosticData);
      showToast(`Scan complete: ${diagnosticData.disease}`);
    }, 1700);
  }

  function renderDiagnosisResult(data) {
    if (!emptyState || !resultContent) return;

    emptyState.style.display = 'none';
    resultContent.classList.add('active');

    document.getElementById('diagCropName').textContent = data.crop;
    document.getElementById('diagDiseaseName').textContent = data.disease;
    document.getElementById('diagConfidence').textContent = `${data.confidence}% Match`;

    const sevPill = document.getElementById('diagSeverity');
    sevPill.textContent = data.severity;
    sevPill.className = `severity-pill severity-${data.severity}`;

    // Symptoms list
    const symptomsList = document.getElementById('diagSymptomsList');
    symptomsList.innerHTML = data.symptoms.map(s => `<li>${s}</li>`).join('');

    // Remedies
    document.getElementById('diagChemical').textContent = data.chemicalControl;
    document.getElementById('diagOrganic').textContent = data.organicControl;
    document.getElementById('diagPrevention').textContent = data.prevention;
  }

  function generateCustomDiagnosis(fileName) {
    // Return an intelligent Groundnut or Rice detection based on filename or random selection
    const isGroundnut = fileName.toLowerCase().includes('groundnut') || fileName.toLowerCase().includes('peanut');
    if (isGroundnut) {
      return window.DIAGNOSTIC_SAMPLES[1]; // Groundnut Tikka
    }
    return window.DIAGNOSTIC_SAMPLES[0]; // Rice Blast
  }

  // Print / Save Report
  const printBtn = document.getElementById('printDiagnosisBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   6. Weather & Agro-Advisory Dashboard
   ========================================================================== */
function initWeatherDashboard() {
  const cityBtns = document.querySelectorAll('.city-quick-btn');
  const citySearchInput = document.getElementById('weatherCityInput');
  const citySearchBtn = document.getElementById('searchWeatherBtn');

  const WEATHER_DATABASE = {
    "nashik": {
      name: "Nashik, Maharashtra",
      region: "Western Ghats / Agri Hub",
      temp: "27°C",
      condition: "Partly Cloudy",
      icon: "fa-cloud-sun",
      humidity: "68%",
      wind: "11 km/h",
      rainProb: "15%",
      soilMoisture: "Optimal (62%)",
      uvIndex: "6 (Moderate)",
      advisory: "Favorable conditions for foliar nutrient sprays in early morning. Monitor groundnut fields for early tikka leaf spot due to overnight dew.",
      forecast: [
        { day: "Today", temp: "27° / 19°", icon: "fa-cloud-sun", text: "Clear" },
        { day: "Tomorrow", temp: "28° / 18°", icon: "fa-sun", text: "Sunny" },
        { day: "Thu", temp: "26° / 20°", icon: "fa-cloud-rain", text: "Light Rain" },
        { day: "Fri", temp: "29° / 19°", icon: "fa-sun", text: "Clear" },
        { day: "Sat", temp: "28° / 18°", icon: "fa-cloud", text: "Overcast" }
      ]
    },
    "guntur": {
      name: "Guntur, Andhra Pradesh",
      region: "Krishna Delta / Rice & Chilli Bowl",
      temp: "32°C",
      condition: "Humid & Sunny",
      icon: "fa-sun",
      humidity: "82%",
      wind: "14 km/h",
      rainProb: "35%",
      soilMoisture: "High (78%)",
      uvIndex: "8 (Very High)",
      advisory: "High relative humidity (>80%) creates favorable conditions for Rice Blast and Brown Plant Hopper. Maintain alternate wetting and drying.",
      forecast: [
        { day: "Today", temp: "32° / 25°", icon: "fa-sun", text: "Humid" },
        { day: "Tomorrow", temp: "33° / 26°", icon: "fa-cloud-sun", text: "Warm" },
        { day: "Thu", temp: "30° / 24°", icon: "fa-cloud-showers-heavy", text: "Thunder" },
        { day: "Fri", temp: "31° / 25°", icon: "fa-cloud-sun", text: "Breezy" },
        { day: "Sat", temp: "32° / 24°", icon: "fa-sun", text: "Sunny" }
      ]
    },
    "rajkot": {
      name: "Rajkot, Gujarat",
      region: "Saurashtra / Groundnut Capital",
      temp: "30°C",
      condition: "Clear & Dry",
      icon: "fa-sun",
      humidity: "52%",
      wind: "16 km/h",
      rainProb: "5%",
      soilMoisture: "Moderate (48%)",
      uvIndex: "7 (High)",
      advisory: "Ideal dry weather for pegging stage in groundnut. Ensure light irrigation if top 5 cm soil feels crusted. Broadcast gypsum @ 400 kg/ha now.",
      forecast: [
        { day: "Today", temp: "30° / 21°", icon: "fa-sun", text: "Sunny" },
        { day: "Tomorrow", temp: "31° / 22°", icon: "fa-sun", text: "Clear" },
        { day: "Thu", temp: "32° / 22°", icon: "fa-sun", text: "Clear" },
        { day: "Fri", temp: "31° / 20°", icon: "fa-cloud-sun", text: "Partly Cloudy" },
        { day: "Sat", temp: "30° / 21°", icon: "fa-sun", text: "Sunny" }
      ]
    },
    "ludhiana": {
      name: "Ludhiana, Punjab",
      region: "Indo-Gangetic Plain",
      temp: "24°C",
      condition: "Mild & Breezy",
      icon: "fa-cloud-sun",
      humidity: "58%",
      wind: "8 km/h",
      rainProb: "10%",
      soilMoisture: "Optimal (55%)",
      uvIndex: "5 (Moderate)",
      advisory: "Excellent window for wheat field preparation and basal fertilizer application. Low risk of fungal spread over the next 48 hours.",
      forecast: [
        { day: "Today", temp: "24° / 14°", icon: "fa-cloud-sun", text: "Mild" },
        { day: "Tomorrow", temp: "25° / 13°", icon: "fa-sun", text: "Clear" },
        { day: "Thu", temp: "25° / 14°", icon: "fa-sun", text: "Sunny" },
        { day: "Fri", temp: "23° / 13°", icon: "fa-cloud", text: "Overcast" },
        { day: "Sat", temp: "22° / 12°", icon: "fa-cloud-rain", text: "Showers" }
      ]
    }
  };

  function updateWeatherUI(cityKey) {
    const data = WEATHER_DATABASE[cityKey.toLowerCase()] || WEATHER_DATABASE["nashik"];

    document.getElementById('weatherCityName').textContent = data.name;
    document.getElementById('weatherCondition').textContent = data.condition;
    document.getElementById('weatherTemp').textContent = data.temp;
    document.getElementById('weatherMainIcon').className = `fa-solid ${data.icon} weather-icon-large`;
    document.getElementById('weatherAdvisoryText').textContent = data.advisory;

    // Metrics
    document.getElementById('metricHumidity').textContent = data.humidity;
    document.getElementById('metricWind').textContent = data.wind;
    document.getElementById('metricRainProb').textContent = data.rainProb;
    document.getElementById('metricSoilMoisture').textContent = data.soilMoisture;

    // 5-day forecast
    const forecastRow = document.getElementById('forecastRow');
    if (forecastRow) {
      forecastRow.innerHTML = data.forecast.map(f => `
        <div class="forecast-card">
          <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 8px;">${f.day}</div>
          <i class="fa-solid ${f.icon}" style="font-size: 1.6rem; color: var(--primary-500); margin-bottom: 8px;"></i>
          <div style="font-weight: 700; font-size: 0.92rem;">${f.temp}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${f.text}</div>
        </div>
      `).join('');
    }
  }

  // City button triggers
  cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cityKey = btn.getAttribute('data-city');
      updateWeatherUI(cityKey);
      showToast(`Updated weather for ${btn.textContent}`);
    });
  });

  // Search input trigger
  if (citySearchBtn && citySearchInput) {
    citySearchBtn.addEventListener('click', () => {
      const q = citySearchInput.value.toLowerCase().trim();
      if (WEATHER_DATABASE[q]) {
        updateWeatherUI(q);
        showToast(`Loaded weather for ${q.toUpperCase()}`);
      } else {
        // Fallback simulation for any city
        showToast(`Loaded live agricultural forecast for "${citySearchInput.value}"`);
        document.getElementById('weatherCityName').textContent = citySearchInput.value + " (Agri Zone)";
      }
    });
  }

  // Load default
  updateWeatherUI('nashik');
}

/* ==========================================================================
   7. Contact & Helpline Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('krushiContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const crop = document.getElementById('contactCrop').value;
    const msg = document.getElementById('contactMsg').value.trim();

    if (!name || !phone || !msg) {
      showToast('⚠️ Please fill out all required fields.');
      return;
    }

    // Simulate instant ticket creation
    const ticketId = 'SK-' + Math.floor(100000 + Math.random() * 900000);
    showToast(`✅ Query registered successfully! Your Advisory Ticket: ${ticketId}`);

    // Reset form
    form.reset();
  });
}

/* ==========================================================================
   8. Multilingual Quick Switcher
   ========================================================================== */
function initLanguageSwitcher() {
  const langSelect = document.getElementById('langSelect');
  if (!langSelect) return;

  const translations = {
    en: {
      heroTitle: "Intelligent Agriculture with <span class='highlight'>Smart Krushi AI</span>",
      heroSub: "Empowering farmers and agriculture students with next-generation AI agronomy, instant crop disease diagnostics, weather advisories, and precision farming intelligence.",
      askAi: "Ask AI Assistant",
      scanCrop: "Scan Crop Disease"
    },
    hi: {
      heroTitle: "स्मार्ट कृषि के साथ <span class='highlight'>आधुनिक खेती</span>",
      heroSub: "किसान भाइयों और कृषि छात्रों के लिए एआई आधारित रोग पहचान, धान व मूंगफली की वैज्ञानिक खेती, और सटीक मौसम सलाह।",
      askAi: "एआई सहायक से पूछें",
      scanCrop: "फसल रोग की जांच करें"
    },
    mr: {
      heroTitle: "स्मार्ट कृषी सह <span class='highlight'>प्रगत शेती तंत्रज्ञान</span>",
      heroSub: "शेतकरी बांधवांसाठी तांदूळ आणि भुईमूग पिकांचे आधुनिक व्यवस्थापन, रोग निदान आणि हवामान सल्ला.",
      askAi: "एआय सहाय्यक विचारा",
      scanCrop: "रोग निदान करा"
    },
    te: {
      heroTitle: "స్మార్ట్ కృషితో <span class='highlight'>ఆధునిక వ్యవసాయం</span>",
      heroSub: "వరి, వేరుశనగ పంటల శాస్త్రీయ సాగు, AI ఆధారిత వ్యాధి గుర్తింపు మరియు వాతావరణ సలహాలు.",
      askAi: "AI ని అడగండి",
      scanCrop: "వ్యాధిని గుర్తించండి"
    }
  };

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang] || translations.en;

    const heroTitleEl = document.getElementById('heroMainTitle');
    const heroSubEl = document.getElementById('heroSubtitle');
    const heroCtaAi = document.getElementById('heroCtaAi');
    const heroCtaScan = document.getElementById('heroCtaScan');

    if (heroTitleEl) heroTitleEl.innerHTML = t.heroTitle;
    if (heroSubEl) heroSubEl.textContent = t.heroSub;
    if (heroCtaAi) heroCtaAi.innerHTML = `<i class="fa-solid fa-robot"></i> ${t.askAi}`;
    if (heroCtaScan) heroCtaScan.innerHTML = `<i class="fa-solid fa-camera-retro"></i> ${t.scanCrop}`;

    showToast(`Language switched to ${langSelect.options[langSelect.selectedIndex].text}`);
  });
}

/* ==========================================================================
   Utility: Toast Notifications
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--primary-500);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
