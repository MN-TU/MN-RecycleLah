document.addEventListener('DOMContentLoaded', function () {
    const recyclingInfo = document.getElementById('recycling-info');
    const pageElements = {
        pageTitle: document.getElementById('page-title'),
        introText: document.getElementById('intro-text'),
        dropdownLabel: document.getElementById('dropdown-label'),
        guideTitle: document.getElementById('guide-title')
    };
    let currentLanguage = 'en';
    let selectedItem = null;

    const translations = {
        en: {
            pageTitle: "Recycling Info Guide",
            introText: "Find out which items are recyclable!",
            items: {
                paper: "Paper",
                plastic: "Plastic",
                glass: "Glass",
                metal: "Metal",
                textile: "Textile",
                electronics: "Electronics"
            },
            recyclableTitle: "Yes, these are recyclable!",
            nonRecyclableTitle: "No, these are NOT recyclable!",
            recyclableData: {
                paper: [
                    { text: "Newspaper", image: "images/Paper/newspaper.jpg" },
                    { text: "Egg tray", image: "images/Paper/egg tray.jpg" },
                    { text: "Calendar", image: "images/Paper/calendar.jpg" },
                    { text: "Magazine", image: "images/Paper/magazine.jpg" },
                    { text: "Textbook", image: "images/Paper/textbook.jpg" },
                    { text: "Cardboard", image: "images/Paper/cardboard.jpg" },
                    { text: "Office paper", image: "images/Paper/office paper.jpg" },
                    { text: "Beverage carton", image: "images/Paper/beverage carton.jpg" },
                    { text: "Brochure", image: "images/Paper/brochure.jpg" },
                    { text: "Envelope", image: "images/Paper/envelope.jpg" },
                    { text: "Gift wrapping paper", image: "images/Paper/gift wrapping paper.jpg" },
                    { text: "Receipt", image: "images/Paper/receipt.jpg" },
                    { text: "Red packet", image: "images/Paper/red packet.jpg" },
                    { text: "Toilet roll tube", image: "images/Paper/toilet roll tube.jpg" },
                ],
                plastic: [
                    { text: "Plastic Bottle", image: "images/Plastic/bottles.jpg" },
                    { text: "CDs or DVDs", image: "images/Plastic/cd or dvd.jpg" },
                    { text: "Detergent bottle", image: "images/Plastic/detergent bottle.jpg" },
                    { text: "Plastic egg tray", image: "images/Plastic/egg tray.jpg" },
                    { text: "Medicine bottle", image: "images/Plastic/medicine bottle.jpg" },
                    { text: "Plastic bag", image: "images/Plastic/plastic bag.jpg" },
                    { text: "Plastic container", image: "images/Plastic/plastic container.jpg" },
                    { text: "Plastic film", image: "images/Plastic/plastic film.jpg" },
                    { text: "Shampoo, body wash bottles", image: "images/Plastic/shampoo, body wash bottles.jpg" },
                    { text: "Plastic clothes hanger", image: "images/Plastic/clothes hanger.jpg" },
                ],
                glass: [
                    { text: "Food glass bottle", image: "images/glass/food glass bottle.jpg" },
                    { text: "Beverage glass bottle", image: "images/glass/beverage glass bottle.jpg" },
                    { text: "Home-use glassware", image: "images/glass/home use glassware.jpg" },
                    { text: "Perfume glass bottle", image: "images/glass/perfume glass bottle.jpg" },
                    { text: "Cosmetic glass bottle", image: "images/glass/cosmestic glass bottle.jpg" },
                ],

                metal: [
                    { text: "Medals", image: "images/metal/medals.jpg" },
                    { text: "Metal bottle cap", image: "images/metal/metal bottle cap.jpg" },
                    { text: "Aerosol can", image: "images/metal/aerosol can.jpg" },
                    { text: "Paint container", image: "images/metal/paint container.jpg" },
                    { text: "Metal cutlery", image: "images/metal/metal cutlery.jpg" },
                    { text: "Steel wool", image: "images/metal/steel wool.jpg" },
                    { text: "Food metal can", image: "images/metal/food metal can.jpg" },
                    { text: "Beverage metal can", image: "images/metal/beverage metal can.jpg" },
                    { text: "Clean aluminum tray", image: "images/metal/clean aluminum tray.jpg" },
                    { text: "Clean aluminum foil", image: "images/metal/clean aluminum foil.jpg" },
                    
                ],
                textile: [
                    { text: "Clean clothes", image: "images/textile/clothes.jpg" },
                    { text: "Cap", image: "images/textile/cap.jpg" },
                    { text: "Curtain", image: "images/textile/curtain.jpg" },
                    { text: "Pillowcase", image: "images/textile/pillowcase.jpg" },
                    { text: "Household linen", image: "images/textile/household linen.jpg" },
                    { text: "Blanket", image: "images/textile/blanket.jpg" },
                    { text: "Bedsheet", image: "images/textile/bedsheet.jpg" },
                    { text: "Shoes", image: "images/textile/shoes.jpg" },
                    { text: "Boots", image: "images/textile/boots.jpg" },
                    { text: "Soft toy", image: "images/textile/soft toy.jpg" },
                    { text: "belt", image: "images/textile/belt.jpg" },
                    { text: "Bag", image: "images/textile/bag.jpg" },
                ],
                electronics: [

                ],
            },
            nonRecyclableData: {
                paper: [
                    { text: "Waxed paper", image: "images/Paper/waxed paper.jpg" },
                    { text: "Paper towel", image: "images/Paper/paper towel.jpg" },
                    { text: "Paper disposable", image: "images/Paper/paper disposable.jpg" },
                    { text: "Tissue paper", image: "images/Paper/tissue paper.jpg" },
                    { text: "Toilet paper", image: "images/Paper/toilet paper.jpg" },
                    { text: "Wooden chopsticks", image: "images/Paper/wooden chopsticks.jpg" },
                    { text: "Pizza box", image: "images/Paper/pizza box.jpg" },
                ],
                plastic: [
                    { text: "Melamine cup", image: "images/Plastic/melamine cups.jpg" },
                    { text: "Plastic cutlery", image: "images/Plastic/plastic cutlery.jpg" },
                    { text: "Drinking straw", image: "images/Plastic/drinking straw.jpg" },
                    { text: "Casette & video tapes", image: "images/Plastic/casette and video tapes.jpg" },
                    { text: "Styrofoam products", image: "images/Plastic/styrofoam product.jpg" },
                    { text: "Polystyrene foam products", image: "images/Plastic/polystyrene foam product.jpg" },
                    { text: "Expired credit card", image: "images/Plastic/expired credit card.jpg" },
                ],
                glass: [
                    { text: "Light bulb", image: "images/glass/light bulb.jpg" },
                    { text: "Bakeware", image: "images/glass/bakeware.jpg" },
                    { text: "Tempered glass", image: "images/glass/tempered glass.jpg" },
                    { text: "Windows", image: "images/glass/window glass.jpg" },
                    { text: "Mirror", image: "images/glass/mirror.jpg" },
                    { text: "Ceramic product", image: "images/glass/ceramic product.jpg" },
                    { text: "Borosilicate glassware", image: "images/glass/borosilicate glassware.jpg" },
                    { text: "Oven-safe food container", image: "images/glass/oven safe food container.jpg" },
                ],
                metal: [
                    { text: "Rusty metal can", image: "images/metal/rusty metal can.jpg" },
                    { text: "Dirty aluminum tray", image: "images/metal/dirty aluminum tray.jpg" },
                    { text: "Dirty aluminum foil", image: "images/metal/dirty aluminum foil.jpg" },
                ],
                textile: [
                    { text: "Underwear", image: "images/textile/underwear.jpg" },
                    { text: "Pillow sponge", image: "images/textile/pillow sponge.jpg" },
                    { text: "Mattress foam", image: "images/textile/mattress foam.jpg" },
                ],
                electronics: "Batteries and certain types of electronics may need special disposal."
            }
        },
        zh: {
            pageTitle: "回收信息指南",
            introText: "了解哪些物品可以回收！",
            items: {
                paper: "纸",
                plastic: "塑料",
                glass: "玻璃",
                metal: "金属",
                textile: "纺织品",
                electronics: "电子产品"
            },
            recyclableTitle: "是的，这些是可回收的！",
            nonRecyclableTitle: "不，这些是不可回收的！",
            recyclableData: {
                paper: "报纸、纸板和办公用纸。",
                plastic: "大多数带有回收标志的塑料。",
                glass: "玻璃瓶和玻璃罐。",
                metal: "铝罐和钢罐。",
                textile: "某些纺织品可以回收或捐赠。",
                electronics: "许多电子产品可以在特殊设施回收。"
            },
            nonRecyclableData: {
                paper: "蜡纸、使用过的纸巾和受污染的纸。",
                plastic: "塑料袋、泡沫塑料和某些类型的塑料包装。",
                glass: "破碎的玻璃、镜子和灯泡。",
                metal: "油漆罐和气雾罐。",
                textile: "严重污损或受污染的纺织品。",
                electronics: "电池和某些类型的电子产品可能需要特殊处理。"
            }
        }
    };

    function updateLanguage(lang) {
        currentLanguage = lang;
        // Update static page elements
        pageElements.pageTitle.textContent = translations[lang].pageTitle;
        pageElements.introText.textContent = translations[lang].introText;

        // Update tile texts
        document.querySelectorAll('.item-tile').forEach(tile => {
            const item = tile.getAttribute('data-item');
            tile.textContent = translations[lang].items[item];
        });

        // Update language button styles
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
    
        // Update the recycling info if an item is selected
        if (selectedItem) {
            updateRecyclingInfo(selectedItem);
        }
    
    }

    function updateRecyclingInfo(item) {
        const recyclableElement = document.getElementById('recyclable');
        const nonRecyclableElement = document.getElementById('non-recyclable');
    
        function createItemElements(data) {
            return `
                <div class="info-tiles-wrapper">
                    <div class="info-tiles-container">
                        ${data.map(item => `
                            <div class="info-tile" style="background-image: url('${item.image}')">
                                <span class="info-tile-text">${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    
        recyclableElement.innerHTML = `
            <h3 class="recyclable-title">${translations[currentLanguage].recyclableTitle}</h3>
            ${createItemElements(translations[currentLanguage].recyclableData[item])}
        `;
    
        nonRecyclableElement.innerHTML = `
            <h3 class="non-recyclable-title">${translations[currentLanguage].nonRecyclableTitle}</h3>
            ${createItemElements(translations[currentLanguage].nonRecyclableData[item])}
        `;
    }

    // Event listeners for language buttons
    document.getElementById('lang-en').addEventListener('click', function () {
        updateLanguage('en');
    });

    document.getElementById('lang-zh').addEventListener('click', function () {
        updateLanguage('zh');
    });

    // Add click event listeners to tiles
    document.querySelectorAll('.item-tile').forEach(tile => {
        tile.addEventListener('click', function () {
            const item = tile.getAttribute('data-item');
            selectedItem = item;
        updateRecyclingInfo(item);
        });
    });

    // Set the initial language on page load
    updateLanguage(currentLanguage);
});