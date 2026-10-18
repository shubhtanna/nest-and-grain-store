// Product catalogue. Exported from the inventory sheet; edit there and re-export.

import type { Product, Room } from './types'

export const ROOMS: Room[] = [
  {
    "slug": "living-room",
    "name": "Living Room",
    "blurb": "Sofas, armchairs, side tables and shelving",
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
  },
  {
    "slug": "bedroom",
    "name": "Bedroom",
    "blurb": "Beds, bedside tables, rugs and bedding",
    "image": "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
  },
  {
    "slug": "dining",
    "name": "Dining",
    "blurb": "Tables, chairs and stools",
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200"
  },
  {
    "slug": "lighting",
    "name": "Lighting",
    "blurb": "Pendants, floor and table lamps",
    "image": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
  },
  {
    "slug": "decor",
    "name": "Decor",
    "blurb": "Planters, candles, ceramics and storage",
    "image": "https://images.unsplash.com/photo-1618220179428-22790b461013"
  }
]

export const PRODUCTS: Product[] = [
  {
    "id": "NG2401",
    "slug": "aria-velvet-sofa",
    "name": "Aria 3-Seater Velvet Sofa",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    "price": 64900,
    "compareAt": 74900,
    "rating": 4.7,
    "reviews": 86,
    "stock": "in_stock",
    "material": "Velvet upholstery, solid acacia legs",
    "dimensions": "W 210 × D 88 × H 82 cm",
    "option": {
      "name": "Colour",
      "values": [
        "Emerald",
        "Ink Blue",
        "Rust"
      ]
    },
    "deliveryDays": "10–14",
    "description": "A deep, generous sofa in soft performance velvet. High-density foam with a feather topper keeps the seat plump for years.",
    "details": [
      "Kiln-dried hardwood frame",
      "Removable seat cushions",
      "Seats 3",
      "Assembly: legs screw on, 10 minutes"
    ]
  },
  {
    "id": "NG2402",
    "slug": "hudson-leather-sofa",
    "name": "Hudson Leather Sofa",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
    "price": 92500,
    "compareAt": null,
    "rating": 4.8,
    "reviews": 41,
    "stock": "made_to_order",
    "material": "Top-grain leather, kiln-dried hardwood frame",
    "dimensions": "W 220 × D 92 × H 80 cm",
    "option": {
      "name": "Leather",
      "values": [
        "Cognac",
        "Espresso"
      ]
    },
    "deliveryDays": "28–35",
    "description": "Mid-century lines in top-grain leather that softens and darkens beautifully with use.",
    "details": [
      "Made to order in our Jodhpur workshop",
      "Pocket-spring seats",
      "Seats 3"
    ]
  },
  {
    "id": "NG2403",
    "slug": "sahara-modular-sofa",
    "name": "Sahara Modular Sofa",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1578500494198-246f612d3b3d",
    "price": 78000,
    "compareAt": null,
    "rating": 4.5,
    "reviews": 27,
    "stock": "in_stock",
    "material": "Boucle-weave fabric, pine frame",
    "dimensions": "W 240 × D 95 × H 78 cm",
    "option": {
      "name": "Configuration",
      "values": [
        "3-seater",
        "4-seater L-shape"
      ]
    },
    "deliveryDays": "10–14",
    "description": "Low, loungy and rearrangeable. Add or move modules as your space changes.",
    "details": [
      "Modules clip together",
      "Stain-resistant fabric",
      "Seats 3–4"
    ]
  },
  {
    "id": "NG2404",
    "slug": "nora-two-seater",
    "name": "Nora 2-Seater Sofa",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    "price": 38900,
    "compareAt": 45900,
    "rating": 4.4,
    "reviews": 112,
    "stock": "in_stock",
    "material": "Linen-blend fabric, rubberwood legs",
    "dimensions": "W 160 × D 82 × H 84 cm",
    "option": {
      "name": "Colour",
      "values": [
        "Sky Blue",
        "Oat",
        "Charcoal"
      ]
    },
    "deliveryDays": "7–10",
    "description": "A compact sofa sized for city flats, with button tufting and a slim profile.",
    "details": [
      "Fits through standard doorways",
      "Reversible cushions",
      "Seats 2"
    ]
  },
  {
    "id": "NG2405",
    "slug": "marigold-lounge-chair",
    "name": "Marigold Lounge Chair",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    "price": 21900,
    "compareAt": null,
    "rating": 4.6,
    "reviews": 58,
    "stock": "in_stock",
    "material": "Cotton twill, solid oak legs",
    "dimensions": "W 76 × D 80 × H 86 cm",
    "option": {
      "name": "Colour",
      "values": [
        "Marigold",
        "Forest"
      ]
    },
    "deliveryDays": "7–10",
    "description": "A cheerful wingback-inspired chair that makes any corner a reading nook.",
    "details": [
      "High-resilience foam",
      "Solid oak legs",
      "Weight capacity 120 kg"
    ]
  },
  {
    "id": "NG2406",
    "slug": "blanc-tufted-chair",
    "name": "Blanc Tufted Accent Chair",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
    "price": 16500,
    "compareAt": 19900,
    "rating": 4.3,
    "reviews": 34,
    "stock": "in_stock",
    "material": "Boucle fabric, painted beech legs",
    "dimensions": "W 68 × D 70 × H 82 cm",
    "option": null,
    "deliveryDays": "7–10",
    "description": "Scalloped back, deep button tufting and turned legs. Soft, romantic and surprisingly comfy.",
    "details": [
      "Hand-tufted",
      "Turned beech legs",
      "Spot clean"
    ]
  },
  {
    "id": "NG2407",
    "slug": "halo-swivel-chair",
    "name": "Halo Swivel Chair",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    "price": 18900,
    "compareAt": null,
    "rating": 4.5,
    "reviews": 22,
    "stock": "out_of_stock",
    "material": "Woven fabric, ash base",
    "dimensions": "W 70 × D 72 × H 80 cm",
    "option": null,
    "deliveryDays": "—",
    "description": "A shell-shaped swivel chair on a four-star ash base. Turns 360° smoothly.",
    "details": [
      "360° swivel",
      "Ash wood base",
      "Back in stock early December"
    ]
  },
  {
    "id": "NG2408",
    "slug": "teak-c-side-table",
    "name": "Teak C-Side Table",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1611486212557-88be5ff6f941",
    "price": 8900,
    "compareAt": null,
    "rating": 4.7,
    "reviews": 140,
    "stock": "in_stock",
    "material": "Solid teak",
    "dimensions": "W 50 × D 35 × H 58 cm",
    "option": null,
    "deliveryDays": "5–7",
    "description": "Slides under the sofa so your laptop or chai sits right where you need it. Built-in book slot.",
    "details": [
      "Solid reclaimed teak",
      "Natural oil finish",
      "No assembly"
    ]
  },
  {
    "id": "NG2409",
    "slug": "float-wall-shelves",
    "name": "Float Wall Shelf Set",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe",
    "price": 12400,
    "compareAt": null,
    "rating": 4.2,
    "reviews": 47,
    "stock": "in_stock",
    "material": "Engineered wood, oak veneer",
    "dimensions": "Set of 4 · up to 120 cm wide",
    "option": {
      "name": "Finish",
      "values": [
        "Oak / White",
        "Walnut / White"
      ]
    },
    "deliveryDays": "5–7",
    "description": "A modular set of floating boxes and ledges for books, plants and media.",
    "details": [
      "Hidden brackets included",
      "Holds 12 kg per shelf",
      "Wall-mounted"
    ]
  },
  {
    "id": "NG2410",
    "slug": "library-bookcase",
    "name": "Library Bookcase",
    "room": "living-room",
    "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156",
    "price": 46000,
    "compareAt": null,
    "rating": 4.6,
    "reviews": 19,
    "stock": "made_to_order",
    "material": "Solid sheesham",
    "dimensions": "W 180 × D 35 × H 220 cm",
    "option": {
      "name": "Finish",
      "values": [
        "Natural",
        "Honey"
      ]
    },
    "deliveryDays": "30–40",
    "description": "Floor-to-ceiling solid sheesham shelving with adjustable shelves. Made to order.",
    "details": [
      "Anchors to the wall",
      "Adjustable shelves",
      "Two-person assembly included"
    ]
  },
  {
    "id": "NG2411",
    "slug": "regent-upholstered-bed",
    "name": "Regent Upholstered Bed",
    "room": "bedroom",
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "price": 54900,
    "compareAt": 62900,
    "rating": 4.7,
    "reviews": 73,
    "stock": "in_stock",
    "material": "Linen-look fabric, engineered wood base",
    "dimensions": "Queen: 160 × 200 cm",
    "option": {
      "name": "Size",
      "values": [
        "Queen",
        "King"
      ]
    },
    "deliveryDays": "10–14",
    "description": "A statement headboard with classic button tufting and a sturdy slatted base.",
    "details": [
      "Under-bed clearance 18 cm",
      "Mattress sold separately",
      "Free installation in metros"
    ]
  },
  {
    "id": "NG2412",
    "slug": "oslo-bedside-table",
    "name": "Oslo Bedside Table",
    "room": "bedroom",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
    "price": 9800,
    "compareAt": null,
    "rating": 4.5,
    "reviews": 96,
    "stock": "in_stock",
    "material": "Engineered wood, beech legs",
    "dimensions": "W 45 × D 38 × H 52 cm",
    "option": null,
    "deliveryDays": "5–7",
    "description": "One soft-close drawer and an open shelf, on tapered beech legs.",
    "details": [
      "Soft-close drawer",
      "Cable cut-out at the back",
      "Easy 15-minute assembly"
    ]
  },
  {
    "id": "NG2413",
    "slug": "cloud-pillow",
    "name": "Cloud Microfibre Pillow",
    "room": "bedroom",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
    "price": 1499,
    "compareAt": 1899,
    "rating": 4.4,
    "reviews": 388,
    "stock": "in_stock",
    "material": "Cotton cover, microfibre fill",
    "dimensions": "50 × 75 cm",
    "option": {
      "name": "Firmness",
      "values": [
        "Soft",
        "Medium"
      ]
    },
    "deliveryDays": "3–5",
    "description": "Plump, hotel-style pillow with a 300-thread-count cotton cover.",
    "details": [
      "Machine washable",
      "Hypoallergenic fill",
      "Sold individually"
    ]
  },
  {
    "id": "NG2414",
    "slug": "heirloom-woven-rug",
    "name": "Heirloom Woven Rug",
    "room": "bedroom",
    "image": "https://images.unsplash.com/photo-1600166898405-da9535204843",
    "price": 15900,
    "compareAt": null,
    "rating": 4.6,
    "reviews": 51,
    "stock": "in_stock",
    "material": "Wool and viscose",
    "dimensions": "160 × 230 cm",
    "option": {
      "name": "Size",
      "values": [
        "120 × 180 cm",
        "160 × 230 cm",
        "200 × 300 cm"
      ]
    },
    "deliveryDays": "7–10",
    "description": "A faded vintage-style pattern, hand-loomed in Bhadohi.",
    "details": [
      "Hand-loomed",
      "Low pile",
      "Use a rug pad on hard floors"
    ]
  },
  {
    "id": "NG2415",
    "slug": "nordic-dining-chair",
    "name": "Nordic Dining Chair (Set of 2)",
    "room": "dining",
    "image": "https://images.unsplash.com/photo-1592078615290-033ee584e267",
    "price": 8900,
    "compareAt": null,
    "rating": 4.3,
    "reviews": 164,
    "stock": "in_stock",
    "material": "Polypropylene shell, beech legs",
    "dimensions": "W 48 × D 54 × H 82 cm",
    "option": {
      "name": "Colour",
      "values": [
        "Black",
        "White",
        "Sage"
      ]
    },
    "deliveryDays": "5–7",
    "description": "The modern classic: a moulded seat with a padded cushion on splayed beech legs.",
    "details": [
      "Sold as a set of 2",
      "Padded seat",
      "Wipe clean"
    ]
  },
  {
    "id": "NG2416",
    "slug": "linen-dining-chair",
    "name": "Linen Upholstered Dining Chair",
    "room": "dining",
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
    "price": 7900,
    "compareAt": null,
    "rating": 4.5,
    "reviews": 61,
    "stock": "in_stock",
    "material": "Linen blend, oak legs",
    "dimensions": "W 50 × D 56 × H 88 cm",
    "option": {
      "name": "Colour",
      "values": [
        "Pebble Grey",
        "Oat"
      ]
    },
    "deliveryDays": "7–10",
    "description": "A curved, wing-back dining chair that's comfortable enough for long dinners.",
    "details": [
      "Solid oak legs",
      "Sold individually",
      "Spot clean"
    ]
  },
  {
    "id": "NG2417",
    "slug": "bistro-round-table",
    "name": "Bistro Round Dining Table",
    "room": "dining",
    "image": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
    "price": 18500,
    "compareAt": 22000,
    "rating": 4.4,
    "reviews": 38,
    "stock": "in_stock",
    "material": "Lacquered MDF top, beech legs",
    "dimensions": "Ø 90 × H 75 cm",
    "option": null,
    "deliveryDays": "7–10",
    "description": "A compact round table that seats four. Ideal for breakfast nooks and small dining spaces.",
    "details": [
      "Seats 4",
      "Scratch-resistant top",
      "Legs attach in minutes"
    ]
  },
  {
    "id": "NG2418",
    "slug": "pine-bar-stool",
    "name": "Pine Bar Stool",
    "room": "dining",
    "image": "https://images.unsplash.com/photo-1503602642458-232111445657",
    "price": 4200,
    "compareAt": null,
    "rating": 4.1,
    "reviews": 29,
    "stock": "in_stock",
    "material": "Solid pine",
    "dimensions": "Seat height 65 cm",
    "option": null,
    "deliveryDays": "5–7",
    "description": "A simple, sturdy counter stool with a footrest.",
    "details": [
      "Counter height",
      "Solid pine",
      "Natural lacquer"
    ]
  },
  {
    "id": "NG2419",
    "slug": "heritage-spindle-chair",
    "name": "Heritage Spindle Chair",
    "room": "dining",
    "image": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237",
    "price": 6500,
    "compareAt": null,
    "rating": 4.0,
    "reviews": 12,
    "stock": "in_stock",
    "material": "Reclaimed mango wood",
    "dimensions": "W 44 × D 46 × H 90 cm",
    "option": null,
    "deliveryDays": "7–10",
    "description": "Hand-finished from reclaimed wood, so every chair has its own grain and character.",
    "details": [
      "Reclaimed mango wood",
      "Each piece unique",
      "Sold individually"
    ]
  },
  {
    "id": "NG2420",
    "slug": "dome-pendant-light",
    "name": "Dome Pendant Light",
    "room": "lighting",
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
    "price": 3900,
    "compareAt": null,
    "rating": 4.6,
    "reviews": 203,
    "stock": "in_stock",
    "material": "Powder-coated steel",
    "dimensions": "Ø 30 cm · 1.5 m cord",
    "option": {
      "name": "Colour",
      "values": [
        "Concrete Grey",
        "Matte Black",
        "White"
      ]
    },
    "deliveryDays": "3–5",
    "description": "A clean dome shade that throws a warm pool of light over a dining table or island.",
    "details": [
      "E27 bulb (not included)",
      "Adjustable cord",
      "Professional installation recommended"
    ]
  },
  {
    "id": "NG2421",
    "slug": "studio-task-lamp",
    "name": "Studio Task Lamp",
    "room": "lighting",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    "price": 5600,
    "compareAt": 6900,
    "rating": 4.5,
    "reviews": 77,
    "stock": "in_stock",
    "material": "Steel, adjustable arm",
    "dimensions": "H 120 cm (floor) · head 22 cm",
    "option": null,
    "deliveryDays": "3–5",
    "description": "An industrial-style lamp with an adjustable head. Perfect beside a reading chair or desk.",
    "details": [
      "Foot switch",
      "Adjustable arm",
      "E27 bulb included"
    ]
  },
  {
    "id": "NG2422",
    "slug": "rattan-pendant",
    "name": "Rattan Basket Pendant",
    "room": "lighting",
    "image": "https://images.unsplash.com/photo-1615529182904-14819c35db37",
    "price": 4800,
    "compareAt": null,
    "rating": 4.7,
    "reviews": 92,
    "stock": "in_stock",
    "material": "Hand-woven rattan",
    "dimensions": "Ø 40 × H 32 cm",
    "option": {
      "name": "Size",
      "values": [
        "Small (Ø 30 cm)",
        "Large (Ø 40 cm)"
      ]
    },
    "deliveryDays": "5–7",
    "description": "Hand-woven by artisans in Assam. Casts a beautiful dappled light.",
    "details": [
      "Hand-woven",
      "Fits standard ceiling roses",
      "Bulb not included"
    ]
  },
  {
    "id": "NG2423",
    "slug": "mint-ceramic-planter",
    "name": "Mint Ceramic Planter",
    "room": "decor",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    "price": 899,
    "compareAt": null,
    "rating": 4.5,
    "reviews": 421,
    "stock": "in_stock",
    "material": "Glazed stoneware",
    "dimensions": "Ø 14 × H 13 cm",
    "option": {
      "name": "Size",
      "values": [
        "Small",
        "Medium",
        "Large"
      ]
    },
    "deliveryDays": "3–5",
    "description": "A soft mint glazed pot with a drainage hole. Plant not included.",
    "details": [
      "Drainage hole and saucer",
      "Indoor use",
      "Hand-glazed"
    ]
  },
  {
    "id": "NG2424",
    "slug": "amber-jar-candle",
    "name": "Amber Jar Candle",
    "room": "decor",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59",
    "price": 1290,
    "compareAt": null,
    "rating": 4.8,
    "reviews": 512,
    "stock": "in_stock",
    "material": "Soy wax, amber glass",
    "dimensions": "200 g · 45-hour burn",
    "option": {
      "name": "Scent",
      "values": [
        "Sandalwood & Vetiver",
        "Fig & Cedar",
        "Monsoon Rain"
      ]
    },
    "deliveryDays": "3–5",
    "description": "Hand-poured soy candle in a reusable amber glass jar.",
    "details": [
      "Cotton wick",
      "Phthalate-free fragrance",
      "Reusable jar"
    ]
  },
  {
    "id": "NG2425",
    "slug": "speckle-stoneware-pots",
    "name": "Speckle Stoneware Pots (Set of 3)",
    "room": "decor",
    "image": "https://images.unsplash.com/photo-1610701596007-11502861dcfa",
    "price": 2490,
    "compareAt": 2990,
    "rating": 4.4,
    "reviews": 76,
    "stock": "in_stock",
    "material": "Stoneware",
    "dimensions": "Ø 10 / 12 / 14 cm",
    "option": null,
    "deliveryDays": "3–5",
    "description": "A trio of speckled, dipped pots for succulents, utensils or bathroom bits.",
    "details": [
      "Set of 3",
      "Food safe glaze",
      "Dishwasher safe"
    ]
  },
  {
    "id": "NG2426",
    "slug": "cubby-wall-cabinet",
    "name": "Cubby Wall Cabinet",
    "room": "decor",
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
    "price": 11900,
    "compareAt": null,
    "rating": 4.2,
    "reviews": 15,
    "stock": "out_of_stock",
    "material": "Engineered wood, oak finish",
    "dimensions": "W 40 × D 25 × H 120 cm",
    "option": null,
    "deliveryDays": "—",
    "description": "A tall, slim wall unit with cubbies for towels, spices or treasures.",
    "details": [
      "Wall-mounted",
      "Fixings included",
      "Back in stock soon"
    ]
  }
]
