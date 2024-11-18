const translations = {
    en: {
        pageTitle: "Recycling Info Guide",
        introText: "Not sure which items are recyclable? Find out below!",
        langEn: "English",
        langZh: "中文",
        langMs: "Melayu",
        langTa: "தமிழ்",
        paper: "Paper",
        plastic: "Plastic",
        glass: "Glass",
        metal: "Metal",
        textile: "Textile",
        electronics: "Electronics",
        aboutMe: "About Me",
        disclaimer: "Disclaimer: This website is created for learning purposes only. The information provided here should not be considered professional advice. Please note that we make no guarantees regarding the accuracy, completeness, or reliability of the contents of this website. Any actions you take based on the contents of this website are at your own risk. We are not liable for any losses or damages incurred from the use of this website.",
        lastUpdated: "Last updated on: 18 November 2024",
        recyclableTitle: "Yes, these are recyclable!",
        nonRecyclableTitle: "No, these are NOT recyclable!",
        disposalInstructions: {
            blueBin: "Place recyclables in Blue Bin",
            textileBin: "Place recyclables in Textile Bin",
            eBin: "Place recyclable electronic wastes in e-Bin",
            greenBin: "Dispose in Green Bin",
        },
        unableToFind: "Unable to find the item? Click HERE to find out more!",
        
        binCaption: {
            blueBin: "Click HERE to find out where the bins are located!",
            textileBin: "Click HERE to find out where the bins are located!",
            eBinRegulated: "Click HERE to find out where the regulated e-Bins are located!",
            eBinIrregulated: "Click HERE to find out where the non-regulated e-Bins are located!",
            greenBin: "You may dispose them as general waste.",
        },

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
                { text: "Paint container", image: "images/metal/paint container.jpg" },
                { text: "Metal cutlery", image: "images/metal/metal cutlery.jpg" },
                { text: "Steel wool", image: "images/metal/steel wool.jpg" },
                { text: "Food metal can", image: "images/metal/food metal can.jpg" },
                { text: "Beverage metal can", image: "images/metal/beverage metal can.jpg" },
                { text: "Clean aluminum tray", image: "images/metal/clean aluminum tray.jpg" },
                { text: "Clean aluminum foil", image: "images/metal/clean aluminum foil.jpg" },
                { text: "Empited aerosol can", image: "images/metal/aerosol can.jpg" },
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
                { text: "Belt", image: "images/textile/belt.jpg" },
                { text: "Bag", image: "images/textile/bag.jpg" },
            ],
            electronics: [
                { text: "Regulated Electronics Waste", isHeader: true },
                { text: "Laptop", image: "images/electronics/laptop.jpg" },
                { text: "Tablet", image: "images/electronics/tablet.jpg" },
                { text: "Printer", image: "images/electronics/printer.jpg" },
                { text: "Powerbank", image: "images/electronics/powerbank.jpg" },
                { text: "Mobile phone", image: "images/electronics/mobile phone.jpg" },
                { text: "Modem/Router", image: "images/electronics/modem or router.jpg" },
                { text: "Light bulb", image: "images/electronics/light bulb.jpg" },
                { text: "Fluorescent tube", image: "images/electronics/fluorescent tube.jpg" },
                { text: "Household battery", image: "images/electronics/household battery.jpg" },
                { text: "Computer monitor screen", image: "images/electronics/computer monitor screen.jpg" },
                { text: "Non-regulated Electronics Waste", isHeader: true },
                { text: "Blender", image: "images/electronics/blender.jpg" },
                { text: "Camera", image: "images/electronics/camera.jpg" },
                { text: "Vacuum cleaner", image: "images/electronics/vacuum cleaner.jpg" },
                { text: "Coffee machine", image: "images/electronics/coffee machine.jpg" },
                { text: "Fan", image: "images/electronics/fan.jpg" },
                { text: "Game console", image: "images/electronics/game console.jpg" },
                { text: "Hair dryer", image: "images/electronics/hair dryer.jpg" },
                { text: "Microwave", image: "images/electronics/microwave.jpg" },
                { text: "Rice cooker", image: "images/electronics/rice cooker.jpg" },
                { text: "Electric toothbrush", image: "images/electronics/electric toothbrush.png" },
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
            electronics: [
                { text: "Broken lamp", image: "images/electronics/broken lamp.jpg" },
                { text: "Broken light bulb", image: "images/electronics/broken light bulb.jpg" },
            ]
        }
    },
    zh: {
        pageTitle: "回收信息指南",
        introText: "不确定哪些物品可以回收？在下方查看！",
        langEn: "English",
        langZh: "中文",
        paper: "纸",
        plastic: "塑料",
        glass: "玻璃",
        metal: "金属",
        textile: "纺织品",
        electronics: "电子产品",
        aboutMe: "关于我",
        disclaimer: "免责声明：本网站仅供学习目的而创建。此处提供的信息不应被视为专业建议。请注意，我们不对本网站内容的准确性、完整性或可靠性做出任何保证。您根据本网站内容采取的任何行动均由您自行承担风险。我们对使用本网站而产生的任何损失或损害概不负责。",
        lastUpdated: "最后更新于: 2024年11月18日",
        recyclableTitle: "是的，这些是可回收的！",
        nonRecyclableTitle: "不，这些不可回收！",
        disposalInstructions: {
            blueBin: "请将可回收物品放入蓝色回收箱",
            textileBin: "请将可回收物品放入纺织品回收箱",
            eBin: "请将可回收的电子废弃物放入电子回收箱",
            greenBin: "请将可回收物品放入绿色回收箱",
        },
        unableToFind: "找不到物品？点击此处了解更多！",

        binCaption: {
            blueBin: "点击此处查找回收箱的位置！",
            textileBin: "点击此处查找纺织品回收箱的位置！",
            eBinRegulated: "点击此处查找受管制电子废弃物回收箱的位置！",
            eBinIrregulated: "点击此处查找非受管制电子废弃物回收箱的位置！",
            greenBin: "您可以将它们作为一般废弃物处理。",
        },

        recyclableData: {
            paper: [
                { text: "报纸", image: "images/Paper/newspaper.jpg" },
                { text: "蛋托", image: "images/Paper/egg tray.jpg" },
                { text: "日历", image: "images/Paper/calendar.jpg" },
                { text: "杂志", image: "images/Paper/magazine.jpg" },
                { text: "教科书", image: "images/Paper/textbook.jpg" },
                { text: "纸板", image: "images/Paper/cardboard.jpg" },
                { text: "办公用纸", image: "images/Paper/office paper.jpg" },
                { text: "饮料纸盒", image: "images/Paper/beverage carton.jpg" },
                { text: "宣传册", image: "images/Paper/brochure.jpg" },
                { text: "信封", image: "images/Paper/envelope.jpg" },
                { text: "礼品包装纸", image: "images/Paper/gift wrapping paper.jpg" },
                { text: "收据", image: "images/Paper/receipt.jpg" },
                { text: "红包", image: "images/Paper/red packet.jpg" },
                { text: "卫生纸卷筒", image: "images/Paper/toilet roll tube.jpg" },
            ],
            plastic: [
                { text: "塑料瓶", image: "images/Plastic/bottles.jpg" },
                { text: "光盘或DVD", image: "images/Plastic/cd or dvd.jpg" },
                { text: "洗涤剂瓶", image: "images/Plastic/detergent bottle.jpg" },
                { text: "塑料蛋托", image: "images/Plastic/egg tray.jpg" },
                { text: "药瓶", image: "images/Plastic/medicine bottle.jpg" },
                { text: "塑料袋", image: "images/Plastic/plastic bag.jpg" },
                { text: "塑料容器", image: "images/Plastic/plastic container.jpg" },
                { text: "塑料膜", image: "images/Plastic/plastic film.jpg" },
                { text: "洗发水、沐浴露瓶", image: "images/Plastic/shampoo, body wash bottles.jpg" },
                { text: "塑料衣架", image: "images/Plastic/clothes hanger.jpg" },
            ],
            glass: [
                { text: "食品玻璃瓶", image: "images/glass/food glass bottle.jpg" },
                { text: "饮料玻璃瓶", image: "images/glass/beverage glass bottle.jpg" },
                { text: "家用玻璃器皿", image: "images/glass/home use glassware.jpg" },
                { text: "香水玻璃瓶", image: "images/glass/perfume glass bottle.jpg" },
                { text: "化妆品玻璃瓶", image: "images/glass/cosmestic glass bottle.jpg" },
            ],
            metal: [
                { text: "奖牌", image: "images/metal/medals.jpg" },
                { text: "金属瓶盖", image: "images/metal/metal bottle cap.jpg" },
                { text: "油漆容器", image: "images/metal/paint container.jpg" },
                { text: "金属餐具", image: "images/metal/metal cutlery.jpg" },
                { text: "钢丝绒", image: "images/metal/steel wool.jpg" },
                { text: "食品金属罐", image: "images/metal/food metal can.jpg" },
                { text: "饮料金属罐", image: "images/metal/beverage metal can.jpg" },
                { text: "干净的铝盘", image: "images/metal/clean aluminum tray.jpg" },
                { text: "干净的铝箔", image: "images/metal/clean aluminum foil.jpg" },
                { text: "空气喷雾罐", image: "images/metal/aerosol can.jpg" },
            ],
            textile: [
                { text: "干净的衣物", image: "images/textile/clothes.jpg" },
                { text: "帽子", image: "images/textile/cap.jpg" },
                { text: "窗帘", image: "images/textile/curtain.jpg" },
                { text: "枕套", image: "images/textile/pillowcase.jpg" },
                { text: "家用亚麻制品", image: "images/textile/household linen.jpg" },
                { text: "毯子", image: "images/textile/blanket.jpg" },
                { text: "床单", image: "images/textile/bedsheet.jpg" },
                { text: "鞋子", image: "images/textile/shoes.jpg" },
                { text: "靴子", image: "images/textile/boots.jpg" },
                { text: "毛绒玩具", image: "images/textile/soft toy.jpg" },
                { text: "皮带", image: "images/textile/belt.jpg" },
                { text: "包", image: "images/textile/bag.jpg" },
            ],
            electronics: [
                { text: "受管制电子废弃物", isHeader: true },
                { text: "笔记本电脑", image: "images/electronics/laptop.jpg" },
                { text: "平板电脑", image: "images/electronics/tablet.jpg" },
                { text: "打印机", image: "images/electronics/printer.jpg" },
                { text: "充电宝", image: "images/electronics/powerbank.jpg" },
                { text: "手机", image: "images/electronics/mobile phone.jpg" },
                { text: "调制解调器/路由器", image: "images/electronics/modem or router.jpg" },
                { text: "灯泡", image: "images/electronics/light bulb.jpg" },
                { text: "荧光灯管", image: "images/electronics/fluorescent tube.jpg" },
                { text: "家用电池", image: "images/electronics/household battery.jpg" },
                { text: "电脑显示器", image: "images/electronics/computer monitor screen.jpg" },
                { text: "非受管制电子废弃物", isHeader: true },
                { text: "搅拌机", image: "images/electronics/blender.jpg" },
                { text: "相机", image: "images/electronics/camera.jpg" },
                { text: "吸尘器", image: "images/electronics/vacuum cleaner.jpg" },
                { text: "咖啡机", image: "images/electronics/coffee machine.jpg" },
                { text: "风扇", image: "images/electronics/fan.jpg" },
                { text: "游戏机", image: "images/electronics/game console.jpg" },
                { text: "吹风机", image: "images/electronics/hair dryer.jpg" },
                { text: "微波炉", image: "images/electronics/microwave.jpg" },
                { text: "电饭煲", image: "images/electronics/rice cooker.jpg" },
                { text: "电动牙刷", image: "images/electronics/electric toothbrush.png" },
            ],
        },
        nonRecyclableData: {
            paper: [
                { text: "蜡纸", image: "images/Paper/waxed paper.jpg" },
                { text: "纸巾", image: "images/Paper/paper towel.jpg" },
                { text: "一次性纸制品", image: "images/Paper/paper disposable.jpg" },
                { text: "面巾纸", image: "images/Paper/tissue paper.jpg" },
                { text: "卫生纸", image: "images/Paper/toilet paper.jpg" },
                { text: "木筷子", image: "images/Paper/wooden chopsticks.jpg" },
                { text: "披萨盒", image: "images/Paper/pizza box.jpg" },
            ],
            plastic: [
                { text: "美耐皿杯", image: "images/Plastic/melamine cups.jpg" },
                { text: "塑料餐具", image: "images/Plastic/plastic cutlery.jpg" },
                { text: "饮用吸管", image: "images/Plastic/drinking straw.jpg" },
                { text: "磁带和录像带", image: "images/Plastic/casette and video tapes.jpg" },
                { text: "泡沫塑料制品", image: "images/Plastic/styrofoam product.jpg" },
                { text: "聚苯乙烯泡沫制品", image: "images/Plastic/polystyrene foam product.jpg" },
                { text: "过期信用卡", image: "images/Plastic/expired credit card.jpg" },
            ],
            glass: [
                { text: "灯泡", image: "images/glass/light bulb.jpg" },
                { text: "烤盘", image: "images/glass/bakeware.jpg" },
                { text: "钢化玻璃", image: "images/glass/tempered glass.jpg" },
                { text: "窗户玻璃", image: "images/glass/window glass.jpg" },
                { text: "镜子", image: "images/glass/mirror.jpg" },
                { text: "陶瓷制品", image: "images/glass/ceramic product.jpg" },
                { text: "硼硅酸盐玻璃器皿", image: "images/glass/borosilicate glassware.jpg" },
                { text: "耐热食品容器", image: "images/glass/oven safe food container.jpg" },
            ],
            metal: [
                { text: "生锈的金属罐", image: "images/metal/rusty metal can.jpg" },
                { text: "脏的铝盘", image: "images/metal/dirty aluminum tray.jpg" },
                { text: "脏的铝箔", image: "images/metal/dirty aluminum foil.jpg" },
            ],
            textile: [
                { text: "内衣", image: "images/textile/underwear.jpg" },
                { text: "枕头海绵", image: "images/textile/pillow sponge.jpg" },
                { text: "床垫泡沫", image: "images/textile/mattress foam.jpg" },
            ],
            electronics: [
                { text: "破损的灯", image: "images/electronics/broken lamp.jpg" },
                { text: "破损的灯泡", image: "images/electronics/broken light bulb.jpg" },
            ]
        }
    
    },

    ms: {
    pageTitle: "Panduan Maklumat Kitar Semula",
    introText: "Tidak pasti item mana yang boleh dikitar semula? Ketahui di bawah!",
    langEn: "English",
    langMs: "Melayu",
    paper: "Kertas",
    plastic: "Plastik",
    glass: "Kaca",
    metal: "Logam",
    textile: "Tekstil",
    electronics: "Elektronik",
    aboutMe: "Tentang Saya",
    disclaimer: "Penafian: Laman web ini dibuat untuk tujuan pembelajaran sahaja. Maklumat yang disediakan di sini tidak boleh dianggap sebagai nasihat profesional. Sila ambil perhatian bahawa kami tidak memberi jaminan mengenai ketepatan, kelengkapan, atau kebolehpercayaan kandungan laman web ini. Sebarang tindakan yang anda ambil berdasarkan kandungan laman web ini adalah atas risiko anda sendiri. Kami tidak bertanggungjawab atas sebarang kerugian atau kerosakan yang berlaku akibat penggunaan laman web ini.",
    lastUpdated: "Kemas kini terakhir pada: 18 November 2024",
    recyclableTitle: "Ya, ini boleh dikitar semula!",
    nonRecyclableTitle: "Tidak, ini TIDAK boleh dikitar semula!",
    disposalInstructions: {
        blueBin: "Letakkan bahan kitar semula dalam Tong Biru",
        textileBin: "Letakkan bahan kitar semula dalam Tong Tekstil",
        eBin: "Letakkan sisa elektronik yang boleh dikitar semula dalam e-Tong",
        greenBin: "Buang dalam Tong Hijau",
    },
    unableToFind: "Tidak dapat mencari item? Klik DI SINI untuk mengetahui lebih lanjut!",
    
    binCaption: {
        blueBin: "Klik DI SINI untuk mengetahui di mana tong-tong ini terletak!",
        textileBin: "Klik DI SINI untuk mengetahui di mana tong-tong ini terletak!",
        eBinRegulated: "Klik DI SINI untuk mengetahui di mana e-Tong terkawal terletak!",
        eBinIrregulated: "Klik DI SINI untuk mengetahui di mana e-Tong tidak terkawal terletak!",
        greenBin: "Anda boleh membuangnya sebagai sisa am.",
    },

    recyclableData: {
        paper: [
            { text: "Surat khabar", image: "images/Paper/newspaper.jpg" },
            { text: "Dulang telur", image: "images/Paper/egg tray.jpg" },
            { text: "Kalendar", image: "images/Paper/calendar.jpg" },
            { text: "Majalah", image: "images/Paper/magazine.jpg" },
            { text: "Buku teks", image: "images/Paper/textbook.jpg" },
            { text: "Kadbod", image: "images/Paper/cardboard.jpg" },
            { text: "Kertas pejabat", image: "images/Paper/office paper.jpg" },
            { text: "Karton minuman", image: "images/Paper/beverage carton.jpg" },
            { text: "Risalah", image: "images/Paper/brochure.jpg" },
            { text: "Sampul surat", image: "images/Paper/envelope.jpg" },
            { text: "Kertas pembungkus hadiah", image: "images/Paper/gift wrapping paper.jpg" },
            { text: "Resit", image: "images/Paper/receipt.jpg" },
            { text: "Sampul duit raya", image: "images/Paper/red packet.jpg" },
            { text: "Tiub kertas tandas", image: "images/Paper/toilet roll tube.jpg" },
        ],
        plastic: [
            { text: "Botol plastik", image: "images/Plastic/bottles.jpg" },
            { text: "CD atau DVD", image: "images/Plastic/cd or dvd.jpg" },
            { text: "Botol detergen", image: "images/Plastic/detergent bottle.jpg" },
            { text: "Dulang telur plastik", image: "images/Plastic/egg tray.jpg" },
            { text: "Botol ubat", image: "images/Plastic/medicine bottle.jpg" },
            { text: "Beg plastik", image: "images/Plastic/plastic bag.jpg" },
            { text: "Bekas plastik", image: "images/Plastic/plastic container.jpg" },
            { text: "Filem plastik", image: "images/Plastic/plastic film.jpg" },
            { text: "Botol syampu, sabun mandi", image: "images/Plastic/shampoo, body wash bottles.jpg" },
            { text: "Penyangkut pakaian plastik", image: "images/Plastic/clothes hanger.jpg" },
        ],
        glass: [
            { text: "Botol kaca makanan", image: "images/glass/food glass bottle.jpg" },
            { text: "Botol kaca minuman", image: "images/glass/beverage glass bottle.jpg" },
            { text: "Barangan kaca rumah", image: "images/glass/home use glassware.jpg" },
            { text: "Botol kaca minyak wangi", image: "images/glass/perfume glass bottle.jpg" },
            { text: "Botol kaca kosmetik", image: "images/glass/cosmestic glass bottle.jpg" },
        ],
        metal: [
            { text: "Pingat", image: "images/metal/medals.jpg" },
            { text: "Penutup botol logam", image: "images/metal/metal bottle cap.jpg" },
            { text: "Bekas cat", image: "images/metal/paint container.jpg" },
            { text: "Peralatan makan logam", image: "images/metal/metal cutlery.jpg" },
            { text: "Wul keluli", image: "images/metal/steel wool.jpg" },
            { text: "Tin makanan logam", image: "images/metal/food metal can.jpg" },
            { text: "Tin minuman logam", image: "images/metal/beverage metal can.jpg" },
            { text: "Dulang aluminium bersih", image: "images/metal/clean aluminum tray.jpg" },
            { text: "Kerajang aluminium bersih", image: "images/metal/clean aluminum foil.jpg" },
            { text: "Tin aerosol kosong", image: "images/metal/aerosol can.jpg" },
        ],
        textile: [
            { text: "Pakaian bersih", image: "images/textile/clothes.jpg" },
            { text: "Topi", image: "images/textile/cap.jpg" },
            { text: "Langsir", image: "images/textile/curtain.jpg" },
            { text: "Sarung bantal", image: "images/textile/pillowcase.jpg" },
            { text: "Linen rumah", image: "images/textile/household linen.jpg" },
            { text: "Selimut", image: "images/textile/blanket.jpg" },
            { text: "Cadar", image: "images/textile/bedsheet.jpg" },
            { text: "Kasut", image: "images/textile/shoes.jpg" },
            { text: "But", image: "images/textile/boots.jpg" },
            { text: "Mainan lembut", image: "images/textile/soft toy.jpg" },
            { text: "Tali pinggang", image: "images/textile/belt.jpg" },
            { text: "Beg", image: "images/textile/bag.jpg" },
        ],
        electronics: [
            { text: "Sisa Elektronik Terkawal", isHeader: true },
            { text: "Komputer riba", image: "images/electronics/laptop.jpg" },
            { text: "Tablet", image: "images/electronics/tablet.jpg" },
            { text: "Pencetak", image: "images/electronics/printer.jpg" },
            { text: "Powerbank", image: "images/electronics/powerbank.jpg" },
            { text: "Telefon bimbit", image: "images/electronics/mobile phone.jpg" },
            { text: "Modem/Router", image: "images/electronics/modem or router.jpg" },
            { text: "Mentol lampu", image: "images/electronics/light bulb.jpg" },
            { text: "Tiub fluoresen", image: "images/electronics/fluorescent tube.jpg" },
            { text: "Bateri isi rumah", image: "images/electronics/household battery.jpg" },
            { text: "Skrin monitor komputer", image: "images/electronics/computer monitor screen.jpg" },
            { text: "Sisa Elektronik Tidak Terkawal", isHeader: true },
            { text: "Pengisar", image: "images/electronics/blender.jpg" },
            { text: "Kamera", image: "images/electronics/camera.jpg" },
            { text: "Pembersih vakum", image: "images/electronics/vacuum cleaner.jpg" },
            { text: "Mesin kopi", image: "images/electronics/coffee machine.jpg" },
            { text: "Kipas", image: "images/electronics/fan.jpg" },
            { text: "Konsol permainan", image: "images/electronics/game console.jpg" },
            { text: "Pengering rambut", image: "images/electronics/hair dryer.jpg" },
            { text: "Ketuhar gelombang mikro", image: "images/electronics/microwave.jpg" },
            { text: "Periuk nasi elektrik", image: "images/electronics/rice cooker.jpg" },
            { text: "Berus gigi elektrik", image: "images/electronics/electric toothbrush.png" },
        ],
    },
    nonRecyclableData: {
        paper: [
            { text: "Kertas berlilin", image: "images/Paper/waxed paper.jpg" },
            { text: "Tuala kertas", image: "images/Paper/paper towel.jpg" },
            { text: "Kertas pakai buang", image: "images/Paper/paper disposable.jpg" },
            { text: "Tisu", image: "images/Paper/tissue paper.jpg" },
            { text: "Kertas tandas", image: "images/Paper/toilet paper.jpg" },
            { text: "Penyepit makanan kayu", image: "images/Paper/wooden chopsticks.jpg" },
            { text: "Kotak pizza", image: "images/Paper/pizza box.jpg" },
        ],
        plastic: [
            { text: "Cawan melamin", image: "images/Plastic/melamine cups.jpg" },
            { text: "Peralatan makan plastik", image: "images/Plastic/plastic cutlery.jpg" },
            { text: "Penyedut minuman", image: "images/Plastic/drinking straw.jpg" },
            { text: "Pita kaset & video", image: "images/Plastic/casette and video tapes.jpg" },
            { text: "Produk styrofoam", image: "images/Plastic/styrofoam product.jpg" },
            { text: "Produk busa polistirena", image: "images/Plastic/polystyrene foam product.jpg" },
            { text: "Kad kredit tamat tempoh", image: "images/Plastic/expired credit card.jpg" },
        ],
        glass: [
            { text: "Mentol lampu", image: "images/glass/light bulb.jpg" },
            { text: "Perkakas pembakar", image: "images/glass/bakeware.jpg" },
            { text: "Kaca tahan haba", image: "images/glass/tempered glass.jpg" },
            { text: "Tingkap", image: "images/glass/window glass.jpg" },
            { text: "Cermin", image: "images/glass/mirror.jpg" },
            { text: "Produk seramik", image: "images/glass/ceramic product.jpg" },
            { text: "Barangan kaca borosilikat", image: "images/glass/borosilicate glassware.jpg" },
            { text: "Bekas makanan tahan ketuhar", image: "images/glass/oven safe food container.jpg" },
        ],
        metal: [
            { text: "Tin logam berkarat", image: "images/metal/rusty metal can.jpg" },
            { text: "Dulang aluminium kotor", image: "images/metal/dirty aluminum tray.jpg" },
            { text: "Kerajang aluminium kotor", image: "images/metal/dirty aluminum foil.jpg" },
        ],
        textile: [
            { text: "Pakaian dalam", image: "images/textile/underwear.jpg" },
            { text: "Span bantal", image: "images/textile/pillow sponge.jpg" },
            { text: "Busa tilam", image: "images/textile/mattress foam.jpg" },
        ],
        electronics: [
            { text: "Lampu rosak", image: "images/electronics/broken lamp.jpg" },
            { text: "Mentol lampu pecah", image: "images/electronics/broken light bulb.jpg" },
        ]
    }
}
}
export default translations;