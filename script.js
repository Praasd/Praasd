// Element data with fun facts for kids
const elementsData = {
    1: {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        atomicMass: "1.008",
        category: "Nonmetal",
        description: "Hydrogen is the lightest and most abundant element in the universe!",
        funFact: "🌟 The Sun is made mostly of hydrogen! It's the fuel that makes stars shine bright.",
        uses: "Used in rocket fuel, making ammonia for fertilizers, and powering fuel cells.",
        discoveredBy: "Henry Cavendish (1766)"
    },
    2: {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        atomicMass: "4.003",
        category: "Noble Gas",
        description: "Helium is super light and makes your voice sound funny!",
        funFact: "🎈 Helium makes balloons float because it's lighter than air! It also makes your voice squeaky.",
        uses: "Party balloons, cooling superconducting magnets, and diving tanks.",
        discoveredBy: "Pierre Janssen & Norman Lockyer (1868)"
    },
    3: {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        atomicMass: "6.941",
        category: "Alkali Metal",
        description: "Lithium is the lightest metal and powers your devices!",
        funFact: "🔋 Lithium batteries power your phone, tablet, and electric cars!",
        uses: "Rechargeable batteries, glass and ceramics, and medicine.",
        discoveredBy: "Johan August Arfwedson (1817)"
    },
    6: {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6,
        atomicMass: "12.011",
        category: "Nonmetal",
        description: "Carbon is the building block of all life on Earth!",
        funFact: "💎 Carbon can be soft (like pencil lead) or super hard (like diamonds)! Same element, different forms.",
        uses: "All living things, pencils, diamonds, and carbon fiber in sports equipment.",
        discoveredBy: "Known since ancient times"
    },
    7: {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7,
        atomicMass: "14.007",
        category: "Nonmetal",
        description: "Nitrogen makes up 78% of the air we breathe!",
        funFact: "🌬️ Most of the air you're breathing right now is nitrogen! Your body doesn't use it though.",
        uses: "Fertilizers, food packaging, and making ammonia.",
        discoveredBy: "Daniel Rutherford (1772)"
    },
    8: {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8,
        atomicMass: "15.999",
        category: "Nonmetal",
        description: "Oxygen is essential for breathing and life!",
        funFact: "🫁 You need oxygen to breathe! Without it, you can only survive for a few minutes.",
        uses: "Breathing, burning fuel, and water (H2O).",
        discoveredBy: "Carl Wilhelm Scheele (1772)"
    },
    11: {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11,
        atomicMass: "22.990",
        category: "Alkali Metal",
        description: "Sodium is a soft, shiny metal that reacts with water!",
        funFact: "🧂 Salt is made from sodium and chlorine! Pure sodium explodes in water.",
        uses: "Table salt, street lights, and soap making.",
        discoveredBy: "Humphry Davy (1807)"
    },
    12: {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        atomicMass: "24.305",
        category: "Alkaline Earth Metal",
        description: "Magnesium burns with a brilliant white light!",
        funFact: "✨ Magnesium creates super bright white flames - that's why it's used in fireworks and flares!",
        uses: "Fireworks, lightweight alloys, and photography flashes.",
        discoveredBy: "Joseph Black (1755)"
    },
    13: {
        name: "Aluminum",
        symbol: "Al",
        atomicNumber: 13,
        atomicMass: "26.982",
        category: "Post-transition Metal",
        description: "Aluminum is lightweight, strong, and doesn't rust!",
        funFact: "♻️ Aluminum cans can be recycled forever! One can could be recycled into a new can in just 60 days.",
        uses: "Soda cans, airplanes, and aluminum foil.",
        discoveredBy: "Hans Christian Ørsted (1825)"
    },
    14: {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14,
        atomicMass: "28.085",
        category: "Metalloid",
        description: "Silicon is used to make computer chips!",
        funFact: "💻 The computer chip in your device is made from silicon! That's why tech areas are called 'Silicon Valley'.",
        uses: "Computer chips, glass, and solar panels.",
        discoveredBy: "Jöns Jacob Berzelius (1823)"
    },
    15: {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15,
        atomicMass: "30.974",
        category: "Nonmetal",
        description: "Phosphorus glows in the dark!",
        funFact: "🌟 White phosphorus glows in the dark and can catch fire by itself!",
        uses: "Matches, fertilizers, and bones and teeth (as calcium phosphate).",
        discoveredBy: "Hennig Brand (1669)"
    },
    16: {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16,
        atomicMass: "32.065",
        category: "Nonmetal",
        description: "Sulfur is bright yellow and smells like rotten eggs!",
        funFact: "🥚 Sulfur smells like rotten eggs! Hot springs smell bad because of sulfur.",
        uses: "Gunpowder, matches, and rubber vulcanization.",
        discoveredBy: "Known since ancient times"
    },
    17: {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17,
        atomicMass: "35.453",
        category: "Halogen",
        description: "Chlorine keeps swimming pools clean!",
        funFact: "🏊 Chlorine kills germs in swimming pools - that's why pools smell the way they do!",
        uses: "Water purification, bleach, and table salt (with sodium).",
        discoveredBy: "Carl Wilhelm Scheele (1774)"
    },
    18: {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        atomicMass: "39.948",
        category: "Noble Gas",
        description: "Argon is used in light bulbs!",
        funFact: "💡 Argon gas inside light bulbs helps them last longer by protecting the hot filament!",
        uses: "Light bulbs, welding, and neon signs.",
        discoveredBy: "Lord Rayleigh & William Ramsay (1894)"
    },
    19: {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19,
        atomicMass: "39.098",
        category: "Alkali Metal",
        description: "Potassium is important for your muscles and nerves!",
        funFact: "🍌 Bananas are full of potassium! Your body needs it to help your muscles work.",
        uses: "Fertilizers, glass making, and your body needs it!",
        discoveredBy: "Humphry Davy (1807)"
    },
    20: {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20,
        atomicMass: "40.078",
        category: "Alkaline Earth Metal",
        description: "Calcium makes your bones and teeth strong!",
        funFact: "🦴 Calcium makes your bones and teeth super strong! Drink your milk!",
        uses: "Bones and teeth, chalk, and cement.",
        discoveredBy: "Humphry Davy (1808)"
    },
    26: {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26,
        atomicMass: "55.845",
        category: "Transition Metal",
        description: "Iron is the most common element on Earth!",
        funFact: "🧲 Iron is magnetic! Your blood contains iron to carry oxygen around your body.",
        uses: "Steel for buildings, cars, and your blood (hemoglobin).",
        discoveredBy: "Known since ancient times"
    },
    29: {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29,
        atomicMass: "63.546",
        category: "Transition Metal",
        description: "Copper is reddish-orange and conducts electricity!",
        funFact: "💰 Pennies used to be made of pure copper! Copper turns green when it gets old (like the Statue of Liberty).",
        uses: "Electrical wires, pipes, and coins.",
        discoveredBy: "Known since ancient times"
    },
    47: {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47,
        atomicMass: "107.868",
        category: "Transition Metal",
        description: "Silver is shiny and the best conductor of electricity!",
        funFact: "✨ Silver is the shiniest metal and conducts electricity better than any other element!",
        uses: "Jewelry, mirrors, and electronics.",
        discoveredBy: "Known since ancient times"
    },
    79: {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79,
        atomicMass: "196.967",
        category: "Transition Metal",
        description: "Gold is a precious metal that never rusts!",
        funFact: "👑 Gold never rusts or tarnishes! That's why ancient gold treasures still look shiny today.",
        uses: "Jewelry, electronics, and money.",
        discoveredBy: "Known since ancient times"
    },
    80: {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80,
        atomicMass: "200.592",
        category: "Transition Metal",
        description: "Mercury is the only metal that's liquid at room temperature!",
        funFact: "🌡️ Mercury is a liquid metal! Old thermometers used mercury, but it's poisonous so we don't use it anymore.",
        uses: "Old thermometers, fluorescent lights, and dental fillings.",
        discoveredBy: "Known since ancient times"
    },
    82: {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82,
        atomicMass: "207.2",
        category: "Post-transition Metal",
        description: "Lead is very heavy and soft!",
        funFact: "⚖️ Lead is so heavy that a small block feels like holding a brick! Ancient Romans used lead pipes.",
        uses: "Car batteries, radiation shields, and fishing weights.",
        discoveredBy: "Known since ancient times"
    },
    92: {
        name: "Uranium",
        symbol: "U",
        atomicNumber: 92,
        atomicMass: "238.029",
        category: "Actinide",
        description: "Uranium is radioactive and used for nuclear energy!",
        funFact: "⚛️ Uranium powers nuclear power plants! A tiny amount can make TONS of energy.",
        uses: "Nuclear power, nuclear weapons, and dating rocks.",
        discoveredBy: "Martin Heinrich Klaproth (1789)"
    }
};

// Add basic info for remaining elements
const basicElements = {
    4: { name: "Beryllium", symbol: "Be", category: "Alkaline Earth Metal", funFact: "💎 Emeralds are made with beryllium! It's used in spacecraft." },
    5: { name: "Boron", symbol: "B", category: "Metalloid", funFact: "🧼 Borax (used in slime!) contains boron. It's also used in glass." },
    9: { name: "Fluorine", symbol: "F", category: "Halogen", funFact: "🦷 Fluorine in toothpaste helps prevent cavities!" },
    10: { name: "Neon", symbol: "Ne", category: "Noble Gas", funFact: "🔴 Neon makes bright red-orange signs glow!" },
    21: { name: "Scandium", symbol: "Sc", category: "Transition Metal", funFact: "🚴 Scandium makes super light bicycle frames!" },
    22: { name: "Titanium", symbol: "Ti", category: "Transition Metal", funFact: "🦿 Titanium is strong, light, and used in artificial joints!" },
    23: { name: "Vanadium", symbol: "V", category: "Transition Metal", funFact: "🛡️ Vanadium makes steel super strong for tools!" },
    24: { name: "Chromium", symbol: "Cr", category: "Transition Metal", funFact: "✨ Chrome on cars is actually chromium - it's super shiny!" },
    25: { name: "Manganese", symbol: "Mn", category: "Transition Metal", funFact: "🥫 Manganese is in steel cans and helps plants grow!" },
    27: { name: "Cobalt", symbol: "Co", category: "Transition Metal", funFact: "🔵 Cobalt makes beautiful blue colors in glass and paint!" },
    28: { name: "Nickel", symbol: "Ni", category: "Transition Metal", funFact: "🪙 Nickels are actually made of copper and nickel!" },
    30: { name: "Zinc", symbol: "Zn", category: "Transition Metal", funFact: "🔋 Zinc is in batteries and helps your immune system!" },
    31: { name: "Gallium", symbol: "Ga", category: "Post-transition Metal", funFact: "🫠 Gallium melts in your hand! (But don't touch it!)" },
    32: { name: "Germanium", symbol: "Ge", category: "Metalloid", funFact: "📱 Germanium is used in smartphones and fiber optics!" },
    33: { name: "Arsenic", symbol: "As", category: "Metalloid", funFact: "☠️ Arsenic is poisonous! It's found in some video games about mystery." },
    34: { name: "Selenium", symbol: "Se", category: "Nonmetal", funFact: "📸 Selenium helps solar panels work and is good for your body in tiny amounts!" },
    35: { name: "Bromine", symbol: "Br", category: "Halogen", funFact: "🌊 Bromine is one of only two liquid elements! It comes from seawater." },
    36: { name: "Krypton", symbol: "Kr", category: "Noble Gas", funFact: "💡 Krypton gas makes super bright lights! Just like Superman's planet!" },
    37: { name: "Rubidium", symbol: "Rb", category: "Alkali Metal", funFact: "🔥 Rubidium catches fire in air! Scientists use it in atomic clocks." },
    38: { name: "Strontium", symbol: "Sr", category: "Alkaline Earth Metal", funFact: "🎆 Strontium makes red fireworks! It's also in some TV screens." },
    // Add more as needed...
    78: { name: "Platinum", symbol: "Pt", category: "Transition Metal", funFact: "💍 Platinum is more valuable than gold! It's used in jewelry and car catalytic converters." },
    83: { name: "Bismuth", symbol: "Bi", category: "Post-transition Metal", funFact: "🌈 Bismuth crystals look like rainbow staircases! It's also in Pepto-Bismol." },
    118: { name: "Oganesson", symbol: "Og", category: "Noble Gas", funFact: "🧪 Oganesson is the newest element! Scientists only made a few atoms of it." }
};

// Merge basic elements into main data
Object.keys(basicElements).forEach(num => {
    if (!elementsData[num]) {
        elementsData[num] = {
            ...basicElements[num],
            atomicNumber: parseInt(num),
            atomicMass: "...",
            description: `${basicElements[num].name} is a ${basicElements[num].category}.`,
            uses: "Various industrial and scientific applications.",
            discoveredBy: "Various scientists"
        };
    }
});

// Get all elements from DOM
const elements = document.querySelectorAll('.element');
const modal = document.getElementById('elementModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');
const searchBox = document.getElementById('searchBox');

// Add click event to each element
elements.forEach(element => {
    element.addEventListener('click', () => {
        const atomicNumber = element.getAttribute('data-number');
        showElementInfo(atomicNumber);
    });
});

// Show element information in modal
function showElementInfo(atomicNumber) {
    const elementData = elementsData[atomicNumber];

    if (elementData) {
        modalTitle.textContent = `${elementData.symbol} - ${elementData.name}`;
        modalBody.innerHTML = `
            <p><strong>Atomic Number:</strong> ${elementData.atomicNumber}</p>
            <p><strong>Atomic Mass:</strong> ${elementData.atomicMass}</p>
            <p><strong>Category:</strong> ${elementData.category}</p>

            <h3>What is it?</h3>
            <p>${elementData.description}</p>

            <h3>What is it used for?</h3>
            <p>${elementData.uses}</p>

            <div class="fun-fact">
                <h3>🌟 Fun Fact!</h3>
                <p>${elementData.funFact}</p>
            </div>

            <p style="margin-top: 15px;"><strong>Discovered by:</strong> ${elementData.discoveredBy}</p>
        `;
    } else {
        // For elements without full data
        const elementDiv = document.querySelector(`[data-number="${atomicNumber}"]`);
        const name = elementDiv.querySelector('.name').textContent;
        const symbol = elementDiv.querySelector('.symbol').textContent;

        modalTitle.textContent = `${symbol} - ${name}`;
        modalBody.innerHTML = `
            <p><strong>Atomic Number:</strong> ${atomicNumber}</p>
            <p>${name} is an amazing element! Scientists are still learning about it.</p>
            <div class="fun-fact">
                <h3>🔬 Science Fact!</h3>
                <p>Every element is unique and has its own special properties. There are 118 known elements in total!</p>
            </div>
        `;
    }

    modal.style.display = 'block';
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Search functionality
searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    elements.forEach(element => {
        const name = element.querySelector('.name').textContent.toLowerCase();
        const symbol = element.querySelector('.symbol').textContent.toLowerCase();
        const number = element.getAttribute('data-number');

        if (name.includes(searchTerm) || symbol.includes(searchTerm) || number.includes(searchTerm)) {
            element.classList.remove('hidden');
            if (searchTerm.length > 0) {
                element.classList.add('highlight');
                setTimeout(() => element.classList.remove('highlight'), 600);
            }
        } else {
            element.classList.add('hidden');
        }
    });

    // If search is empty, show all
    if (searchTerm === '') {
        elements.forEach(element => {
            element.classList.remove('hidden');
        });
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Add animation delay to elements for cool loading effect
elements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.01}s`;
});

// Add welcome message
window.addEventListener('load', () => {
    setTimeout(() => {
        console.log('🧪 Welcome to the Interactive Periodic Table!');
        console.log('Click on any element to learn amazing facts!');
    }, 1000);
});
