export interface SalonTechnologyItem {
  id: string;
  name: string;
  category: "Scalp & Trichology" | "Clinical Aesthetics" | "Light & Cellular Therapy" | "Hair Science & Bond Repair" | "Artistry & Airbrush" | "Sterilization & Hygiene";
  tagline: string;
  description: string;
  howItWorks: string;
  clinicalBenefits: string[];
  technicalSpecs: { label: string; value: string }[];
  associatedServices: { name: string; href: string }[];
  image: string;
  imageAlt: string;
  origin: string;
  certification: string;
}

export const salonTechnologies: SalonTechnologyItem[] = [
  {
    id: "trichology-micro-scanner",
    name: "200x High-Definition Trichology Follicle Scanner",
    category: "Scalp & Trichology",
    tagline: "Cellular-level follicle diagnostics before every hair journey",
    description: "Our dual-lens trichological camera magnifies your scalp and hair follicles up to 200 times under polarized and multi-spectral lighting. It analyzes follicular density, sebum blockage, scalp keratinization, and microvascular blood flow.",
    howItWorks: "Using cross-polarized dermatoscopic sensors, the scanner captures high-resolution digital micro-imagery of individual follicular units. Software algorithms measure hair shaft caliber variation and scalp sebum secretion rates, generating an instant diagnostic baseline.",
    clinicalBenefits: [
      "Early detection of miniaturization and follicular dormancy months before visible hair thinning",
      "Exact diagnosis of dry vs. oily dandruff, psoriasis, or sebum impaction",
      "Digital before-and-after photo comparison delivered directly to your client phone",
      "Custom product tailoring based on your real scalp microbiome and porosity"
    ],
    technicalSpecs: [
      { label: "Optical Magnification", value: "50x to 200x Optical & Polarized" },
      { label: "Sensor Resolution", value: "4K UHD True-Color Dermatoscopy" },
      { label: "Light Spectrum", value: "Multi-Spectral White & UV-Fluorescence" },
      { label: "Diagnostic Report", value: "Instant Cloud Trichogram Delivery" }
    ],
    associatedServices: [
      { name: "Japanese Waterfall Head Spa", href: "/services/japanese-head-spa-scalp-sanctuary" },
      { name: "Bespoke Haircut & Blow-Dry", href: "/services/bespoke-haircut-and-style" },
      { name: "First-Visit Scalp Diagnostic", href: "/offers" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clinician using high-tech digital microscope scanning device with illuminated sensor",
    origin: "Tokyo, Japan",
    certification: "ISO 13485 Medical Device Standard"
  },
  {
    id: "japanese-head-spa-halo",
    name: "Tokyo Waterfall Hydrotherapy Halo & Ozone Micro-Mist",
    category: "Scalp & Trichology",
    tagline: "Thermostatically controlled rainfall hydrotherapy and warm ultrasonic mist",
    description: "An authentic Japanese scalp sanctuary ritual integrating a circular 180-degree golden water halo rainfall bar with a closed-canopy ultrasonic ozone micro-mist steamer that opens hair cuticles without scorching heat.",
    howItWorks: "Continuous warm ionized water cascades in a gentle circular rainfall pattern over the scalp and forehead, releasing craniosacral tension and washing away dislodged sebum. The micro-mist generator emits 1.6 MHz ultrasonic vapor particles that penetrate deep into the hair cortex.",
    clinicalBenefits: [
      "Releases deep mental fatigue, migraine tension, and neck stiffness via parasympathetic stimulation",
      "Deeply clarifies scalp pores without stripping natural lipid moisture",
      "Multiplies the absorption rate of organic botanical conditioning masks by up to 300%",
      "Imparts high-gloss mirror shine to dull, pollution-damaged hair"
    ],
    technicalSpecs: [
      { label: "Hydrotherapy System", value: "Circular 180° Ionized Water Halo Rainfall" },
      { label: "Water Temperature", value: "Thermostatically Regulated 38°C – 40°C" },
      { label: "Mist Particle Frequency", value: "1.6 MHz Ultrasonic Atomization" },
      { label: "Water Filtration", value: "Triple Micro-Carbon & KDF Heavy Metal Filter" }
    ],
    associatedServices: [
      { name: "Japanese Waterfall Head Spa & Scalp Detox", href: "/services/japanese-head-spa-scalp-sanctuary" },
      { name: "Cellular Hydra & Head Spa Duo", href: "/offers" }
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Relaxing hydrotherapy head spa with warm water rainfall halo and botanical treatment",
    origin: "Osaka, Japan",
    certification: "CE Medical Wellness Certified"
  },
  {
    id: "vortex-hydra-dermabrasion",
    name: "Medical-Grade Vortex Hydra-Dermabrasion & Electroporation",
    category: "Clinical Aesthetics",
    tagline: "Non-invasive spiral vacuum pore clearance and needle-free peptide infusion",
    description: "A patented 4-step clinical aesthetic system that uses vortex fluid suction to painlessly vacuum blackheads, dead stratum corneum cells, and micro-pollutants, immediately followed by transdermal electroporation to infuse hyaluronic acid and peptide cocktails.",
    howItWorks: "The specialized vortex tip generates a pressurized fluid swirl that softens impactions with gentle lactic and salicylic acids while vacuum suction extracts impurities into a visible waste container. Needle-free electroporation then creates temporary micro-channels in lipid bilayers, delivering active actives directly to basal skin layers.",
    clinicalBenefits: [
      "Zero downtime or redness: Instant glass-skin radiance suitable immediately prior to weddings",
      "Painless extraction of stubborn blackheads and whiteheads with zero skin trauma",
      "Intense transdermal hydration that plumps fine lines and tightens enlarged pores",
      "Removes oxidized skin sebum and city pollution particulate matter"
    ],
    technicalSpecs: [
      { label: "Vortex Vacuum Pressure", value: "Up to 680 mmHg Medical Suction" },
      { label: "Delivery Mechanism", value: "4-Tip Patented Spiral Hydro-Peel" },
      { label: "Infusion Technology", value: "Transdermal Electroporation (Needle-Free)" },
      { label: "Serum Formulations", value: "Sterile Medical-Grade Botanical Peptides" }
    ],
    associatedServices: [
      { name: "Hydra-Radiance Medical Infusion Facial", href: "/services/hydra-radiance-cellular-facial" },
      { name: "24K Gold Cellular Rejuvenation Ritual", href: "/services/korean-glass-skin-gold-ritual" },
      { name: "Gentleman's Charcoal Detox Facial", href: "/services/gentlemans-revitalizing-scalp-and-facial" }
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Client receiving rejuvenating hydrating facial therapy in aesthetic salon spa",
    origin: "Seoul, South Korea",
    certification: "FDA & KFDA Registered Aesthetic Device"
  },
  {
    id: "nasa-led-photobiomodulation",
    name: "Multi-Spectral LED Photo-Biomodulation Canopy",
    category: "Light & Cellular Therapy",
    tagline: "NASA-engineered wavelengths to stimulate collagen and eliminate acne bacteria",
    description: "A clinical-grade multi-wavelength light therapy system delivering calibrated therapeutic nanometer wavelengths. Red light stimulates fibroblast collagen production, blue light destroys acne bacteria, and near-infrared triggers hair follicle cellular regeneration.",
    howItWorks: "Light photons are absorbed by cytochrome c oxidase within cellular mitochondria, stimulating ATP production and cellular respiration. This increases blood microcirculation, decreases pro-inflammatory cytokines, and accelerates tissue healing without UV radiation or heat generation.",
    clinicalBenefits: [
      "Stimulates natural collagen and elastin synthesis for firmer, plumped skin",
      "Eliminates Cutibacterium acnes bacteria without stripping the skin barrier",
      "Reduces inflammation and erythema following peels or eyebrow threading",
      "Accelerates scalp cellular healing and strengthens hair follicle root anchors"
    ],
    technicalSpecs: [
      { label: "Red Spectrum", value: "633nm Deep Cellular Collagen Synthesis" },
      { label: "Blue Spectrum", value: "415nm Anti-Microbial Acne Target" },
      { label: "Near-Infrared Spectrum", value: "830nm Deep Dermal Wound & Follicle Repair" },
      { label: "Optical Power Density", value: "105 mW/cm² Medical Grade Irradiance" }
    ],
    associatedServices: [
      { name: "Hydra-Radiance Infusion Facial", href: "/services/hydra-radiance-cellular-facial" },
      { name: "Japanese Waterfall Head Spa", href: "/services/japanese-head-spa-scalp-sanctuary" }
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aesthetician adjusting high-tech light treatment device above client face",
    origin: "California, USA",
    certification: "US FDA Cleared Medical Class-II Device"
  },
  {
    id: "temptu-wireless-airbrush",
    name: "Temptu Pro 4-Micron Wireless Airbrush Atomizer",
    category: "Artistry & Airbrush",
    tagline: "High-definition micro-droplet misting for 18-hour waterproof second-skin finish",
    description: "The gold standard in international bridal and red-carpet artistry. Our wireless micro-compressor airbrush atomizes prestige silicone and water-based pigments into 4-micron droplets that float onto the skin for a transfer-proof, high-definition finish.",
    howItWorks: "Air pressurized at 12 PSI atomizes liquid foundation into a micro-fine aerosol. Rather than rubbing pigment into skin folds with sponges, the airbrush lays down a microscopic dot matrix that blurs skin pores optical-mechanically, remaining completely sweat-proof and waterproof under intense 4K studio lenses.",
    clinicalBenefits: [
      "18-hour guaranteed waterproof and humidity-proof wear for South Indian and destination weddings",
      "100% transfer-proof: Will not smudge onto white gowns, silk sarees, or groom sherwanis",
      "Non-comedogenic, hypoallergenic, and gentle on sensitive or rosacea-prone skin",
      "Flawless under 4K lenses without creating heavy, mask-like texture in person"
    ],
    technicalSpecs: [
      { label: "Atomization Droplet Size", value: "4 Microns Ultra-Fine Particle Spray" },
      { label: "Operating Pressure", value: "12 PSI Controlled Micro-Compressor" },
      { label: "Needle Gauge", value: "0.35mm Precision Surgical Titanium Nozzle" },
      { label: "Pigment Formulation", value: "Silicone-Polymer HD Suspension" }
    ],
    associatedServices: [
      { name: "Royal South Asian Muhurtham Experience", href: "/bridal" },
      { name: "Western Couture & Cathedral Bride", href: "/bridal" },
      { name: "Sangeet & Reception Glamour", href: "/bridal" }
    ],
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury makeup artist brush set and high-end cosmetic pigments on salon counter",
    origin: "New York, USA",
    certification: "Dermatologically Tested & Cruelty-Free"
  },
  {
    id: "class-b-autoclave-sterilizer",
    name: "Class-B Fractional Vacuum Medical Autoclave Suite",
    category: "Sterilization & Hygiene",
    tagline: "100% surgical-grade hospital sterilization for all salon tools",
    description: "Unlike salons that rely on basic blue UV boxes or alcohol dips, Aura Luxe operates a hospital-grade Class-B fractional pre-vacuum autoclave that eliminates 100% of bacterial spores, viruses, and fungi with 134°C superheated steam.",
    howItWorks: "The autoclave executes a triple fractional vacuum pulse to remove all air from hollow and porous instruments, followed by injecting superheated steam at 2.1 bar pressure and 134°C. Instruments are vacuum-sealed in sterile medical pouches that are unsealed exclusively in front of each guest.",
    clinicalBenefits: [
      "Absolute zero cross-contamination risk for manicure tools, cuticle nippers, and shaving razors",
      "Hospital surgical standards EN 13060 compliant: Complete spore elimination",
      "Every single stainless steel tool is sealed in individual color-changing indicator pouches",
      "Single-use biodegradable capes, towels, and neck strips for uncompromising personal hygiene"
    ],
    technicalSpecs: [
      { label: "Sterilization Chamber", value: "Class-B Fractional Pre-Vacuum EN 13060" },
      { label: "Sterilization Temperature", value: "134°C at 2.1 Bar Superheated Steam" },
      { label: "Cycle Control", value: "Microprocessor Validated Electronic Sensor Log" },
      { label: "Tool Storage", value: "Hermetically Sealed Medical Pouches with Chemical Indicators" }
    ],
    associatedServices: [
      { name: "Signature Russian Manicure & Gel Art", href: "/services/signature-gel-sculpt-and-art-manicure" },
      { name: "Executive Fade & Traditional Hot Towel Shave", href: "/services/executive-barber-haircut-and-beard-sculpt" },
      { name: "All Hair, Skin & Nail Services", href: "/about#hygiene" }
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Immaculate sterile steel instruments and clinical hygiene workstation",
    origin: "Bologna, Italy",
    certification: "European Standard EN 13060 Class-B Hospital Grade"
  },
  {
    id: "ultrasonic-cold-fusion-styler",
    name: "Ultrasonic Cold-Fusion & Far-Infrared Molecular Styler",
    category: "Hair Science & Bond Repair",
    tagline: "36,000 vibrations/sec driving Olaplex and K18 with zero thermal heat",
    description: "A revolutionary cold-treatment device that repairs broken disulfide and peptide bonds without heat damage. Combining ultrasonic magnetic micro-vibrations with 680nm far-infrared cold rays, it vaporizes liquid molecular treatments straight into the hair cortex.",
    howItWorks: "One plate vibrates ultrasonically at 36,000 pulses per second, breaking down water and protein molecules into gas-level micro-clusters that pass through cuticle scales effortlessly. The opposite far-infrared plate seals the cuticle flat at room temperature, locking in bond-building nutrition.",
    clinicalBenefits: [
      "Zero heat exposure: 100% safe for bleached, damaged, fragile, or over-processed hair",
      "Drives Olaplex No. 1/2 and K18 peptide treatments deep into the internal cortex structure",
      "Locks in moisture and restores natural bounce, elasticity, and keratin tensile strength",
      "Reduces split ends and seals in color toner pigments for up to 8 weeks longer"
    ],
    technicalSpecs: [
      { label: "Ultrasonic Frequency", value: "36,000 Micro-Pulses / Second" },
      { label: "Operating Temperature", value: "Room Temperature (0°C Thermal Generation)" },
      { label: "Infrared Wavelength", value: "680nm Far-Infrared Cuticle Cold-Seal" },
      { label: "Plate Material", value: "Titanium-Coated Medical Grade Ceramic" }
    ],
    associatedServices: [
      { name: "Artisan Balayage & French Gloss Toning", href: "/services/artisan-balayage-and-toning" },
      { name: "Formaldehyde-Free Botanical Keratin", href: "/services/botanical-keratin-infusion" },
      { name: "Kérastase Fusio-Dose Booster Ritual", href: "/services/bespoke-haircut-and-style" }
    ],
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hair styling in front of salon mirror with professional precision equipment",
    origin: "Frankfurt, Germany",
    certification: "TÜV Rheinland Electrical Safety Certified"
  },
  {
    id: "zero-gravity-wash-lounge",
    name: "Zero-Gravity Motorized Acoustic Wash Lounges",
    category: "Clinical Aesthetics",
    tagline: "135-degree spine decompression with integrated acoustic sound isolation",
    description: "Say goodbye to awkward neck strain at the sink. Our bespoke motorized wash lounges feature NASA-inspired 135-degree zero-gravity ergonomic recline, integrated multi-zone lumbar shiatsu airbags, and noise-damping acoustic shell headrests.",
    howItWorks: "The motorized cradle elevates the knees above the heart line to decompress the lumbar spine and improve venous circulation. The padded silicone neck support conforms to the occipital bone, eliminating cervical strain during extended head spa and scalp detox treatments.",
    clinicalBenefits: [
      "Completely eliminates cervical neck hyperextension discomfort common in conventional salon bowls",
      "Promotes deep parasympathetic nervous system relaxation and alpha brainwave calm",
      "Gentle rhythmic spinal shiatsu airbags ease lower back tightness during rituals",
      "Acoustic cocoon shell minimizes salon floor chatter for a true private sensory retreat"
    ],
    technicalSpecs: [
      { label: "Recline Angle", value: "135° NASA Zero-Gravity Decompression" },
      { label: "Massage Mechanism", value: "Pneumatic Multi-Zone Spinal Airbag Compression" },
      { label: "Neck Support", value: "Ergonomic Memory Gel Occipital Cradle" },
      { label: "Basin Material", value: "Deep Cast Resin with Anti-Splash Jet Aerators" }
    ],
    associatedServices: [
      { name: "Japanese Waterfall Head Spa", href: "/services/japanese-head-spa-scalp-sanctuary" },
      { name: "All Shampoo & Treatment Rituals", href: "/services" }
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Calm luxury aesthetic salon lounge interior with modern architectural styling",
    origin: "Milan, Italy",
    certification: "Ergonomic Ergocert Class-A Certified"
  }
];

export const technologyCategories = [
  "All Technologies",
  "Scalp & Trichology",
  "Clinical Aesthetics",
  "Light & Cellular Therapy",
  "Hair Science & Bond Repair",
  "Artistry & Airbrush",
  "Sterilization & Hygiene"
] as const;
