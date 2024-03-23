
let all_products = [
    {
        id:1,
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"mens",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating:{rate:3.9, count:120}
    },
    
    {
        id:2,
        title:"Mens Casual Premium Slim Fit T-Shirts ",
        price:22.3,
        description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category:"mens",
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating:{rate:4.1, count:259}
    },
    
    {
        id:3,
        title:"Mens Cotton Jacket",
        price:55.99,
        description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category:"mens",
        image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating:{rate:4.7, count:500}
    },
    
    {
        id:4,
        title:"Mens Casual Slim Fit",
        price:15.99,
        description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the productdescription",
        category:"mens",
        image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating:{rate:2.1, count:430}
    },
    
    {
        id:5,
        title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price:695,
        description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category:"womens",
        image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating:{rate:4.6, count:400}
    },
    
    {
        id:6,
        title:"Solid Gold Petite Micropave ",
        price:168,
        description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category:"womens",
        image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating:{rate:3.9, count:70}
    },
    
    {
        id:7,
        title:"White Gold Plated Princess",
        price:9.99,
        description:"Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category:"womens",
        image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating:{rate:3, count:400}
    },
    
    {
        id:8,
        title:"Pierced Owl Rose Gold Plated Stainless Steel Double",
        price:10.99,
        description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category:"womens",
        image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating:{rate:1.9, count:100}
    },
    
    {
        id:9,
        title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price:64,
        description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.",
        category:"electronics",
        image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating:{rate:3.3, count:203}
    },
    
    {
        id:10,
        title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price:78,
        description:"Easy upgrade for faster boot up, shutdown, application load and response.",
        category:"electronics",image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating:{rate:2.9, count:470}
    },
    
    {
        id:11,
        title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price:109,
        description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",category:"electronics",
        image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating:{rate:4.8, count:319}
    },
    
    {
        id:12,
        title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price:84,
        description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",category:"electronics",
        image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating:{rate:4.8, count:400}
    },
    
    {
        id:13,
        title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price:599,
        description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refreshrate 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category:"electronics",
        image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating:{rate:2.9, count:250}
    },
    
    {
        id:14,
        title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price:999.99,
        description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accratecolor and contrast 144HZ HIGH REFRESHrateand 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category:"electronics",
        image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating:{rate:2.2, count:140}
    },
    
    {
        id:15,
        title:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price:56.99,
        description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather.",
        category:"womens",
        image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating:{rate:2.6, count:235}
    },
    
    {
        id:16,title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price:29.95,
        description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category:"womens",
        image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating:{rate:2.9, count:340}
    },
    
    {
        id:17,
        title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price:39.99,
        description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.",
        category:"womens",
        image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating:{rate:3.8, count:679}
    },
    
    {
        id:18,
        title:"MBJ Women's Solid Short Sleeve Boat Neck V ",
        price:9.85,
        description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category:"womens",
        image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating:{rate:4.7, count:130}
    },
    
    {
        id:19,
        title:"Opna Women's Short Sleeve Moisture",
        price:7.95,
        description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category:"womens",
        image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating:{rate:4.5, count:146}
    },
    
    {
        id:20,
        title:"DANVOUY Womens T Shirt Casual Cotton Short",
        price:12.99,
        description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category:"womens",
        image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating:{rate:3.6, count:145}
    },

    {
        id: 22,
        title: "iPhone X",
        price: 549,
        category: "electronics",
        description: "An apple mobile which is nothing like apple",
        image: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        rating:{rate:4.6, count:146}
    },

    {
        id: 23,
        title: "Huawei P30",
        price: 449,
        category: "electronics",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        image: "https://cdn.dummyjson.com/product-images/6/2.jpg",
        rating:{rate:4.0, count:147}
    },

    {
        id: 24,
        title: "MacBook Pro",
        price: 1768,
        category: "electronics",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        image: "https://cdn.dummyjson.com/product-images/6/3.png",
        rating:{rate:4.5, count:149}
    },

    {
        id: 25,
        title: "HP Pavilion 15-DK1056WM",
        price: 699,
        category: "electronics",
        description: "P Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        image: "https://cdn.dummyjson.com/product-images/10/2.jpg",
        rating:{rate:3.6, count:150}
    },

    {
        id: 26,
        title: "Brown Perfume",
        price: 47,
        category: "womens",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        image: "https://cdn.dummyjson.com/product-images/12/2.jpg",
        rating:{rate:3.6, count:151}
    },

    {
        id: 27,
        title: "Air Jordan 1 Retro High OG “University Blue”",
        price: 120,
        category: "mens",
        description: "Dubbed the Air Jordan 1 Retro High OG “University Blue” or “UNC Toe,” this latest colorway is a heartfelt tribute to Michael Jordan's alma mater, The University of North Carolina. The sneaker boasts a stylish combination of white, black, and leather on its upper. Its colorblocking is reminiscent of the fan-favorite  Air Jordan 1 Retro High OG.",
        image: "https://cdn.shopify.com/s/files/1/0095/4420/4367/files/DZ5485-400-B.jpg?v=1689609979",
        rating:{rate:3.6, count:152}
    },

    {
        id: 28,
        title: "Air Jordan 3 RETRO 'FEAR'",
        price: 150,
        category: "mens",
        description: "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.",
        image: "https://www.dtlr.com/cdn/shop/products/Jordan-CT85320-080-M055.jpg?v=1700596304",
        rating:{rate:4.0, count:153}
    },

    {
        id: 29,
        title: "Mens Essential Hoodie",
        price: 67,
        category: "mens",
        description: "The Essentials hoodie is made in core fleece and designed with volume to create a round, cropped silhouette. Details include a mock neckline, side seam pockets, rib-knit cuffs, and waist hem. New minimalist branding is seen in the rubberized Essentials Fear of God black bar on the center front.",
        image: "https://fearofgod.com/cdn/shop/files/yznth7hcjhkoazftu6gz_x800.jpg?v=1707185467",
        rating:{rate:3.6, count:154}
    },

    {
        id: 30,
        title: "Air Jordan 4 RETRO 'BRED REIMAGINED'",
        price: 110,
        category: "mens",
        description: "The Air Jordan 4 Retro 'Bred Reimagined' is a new iteration of the iconic design which replaces the original 1989 release's nubuck material with a black leather upper. Quarter panel netting, gray molded eyelets, and Nike Air branding on the heel tab are heritage details, and a crimson Jumpman logo adorns the woven Flight tongue tag. The PU midsole features encapsulated Air-sole cushioning in the forefoot and an exposed Air unit in the heel, resting on a pre-distressed rubber outsole with a herringbone traction pattern",
        image: "https://cdn.flightclub.com/TEMPLATE/383225/1.jpg?w=750",
        rating:{rate:3.6, count:155}
    },

    {
        id: 31,
        title: "Shoe High-heeled footwear Stiletto heel",
        price: 100,
        category: "womens",
        description: "Colibrì slingbacks with elastic ribbons around the foot. The sole is finished with rubber inserts. Made of tech mesh fabric with FF print. Finished with contrasting heat seals and two-tone ribbon straps",
        image: "https://castamere.com/cdn/shop/products/1-1_2a6cf15e-3ebd-484f-a5b2-4efa50095a85.jpg?v=1607050323",
        rating:{rate:3.6, count:156}
    },

    {
        id: 32,
        title: "Womens Filled Bomber",
        price: 55,
        category: "womens",
        description: "The Women's filled bomber is made in a stretch woven nylon with polyfill for warmth. The piece is designed with a cropped, rounded silhouette. Details include a shirt collar, slash pockets, and waist hem with bungee and toggle for adjustability. New minimalist branding is seen in the rubberized Essentials Fear of God black bar on the cuff. A Fear of God rubberized label is at the back colla",
        image: "https://fearofgod.com/cdn/shop/files/ljkyin9lmqg3lu8zqwtk_900x.jpg?v=1707332215",
        rating:{rate:3.6, count:157}
    },

    // {
    //     id: 21,
    //     title: "",
    //     price: "",
    //     category: "",
    //     description: "",
    //     image: "",
    //     rating:{rate:3.6, count:145}
    // }
];

export default all_products;