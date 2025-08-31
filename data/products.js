export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) =>{
      if(product.id === productId) {
          matchingProduct = product;
      }
  });

  return matchingProduct ;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "image/products/6-piece-non-stick-baking-set.webp",
    name: "6-piece-non-stick-baking-set",
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "image/products/6-piece-white-dinner-plate-set.jpg",
    name: "6-piece-white-dinner-plate-set",
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "image/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "adults-plain-cotton-tshirt-2-pack-teal",
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "image/products/athletic-cotton-socks-6-pairs.jpg",
    name: "athletic-cotton-socks-6-pairs",
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "image/products/backpack.jpg",
    name: "backpack",
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "image/products/bathroom-rug.jpg",
    name: "bathroom-rug",
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "image/products/black-2-slot-toaster.jpg",
    name: "black-2-slot-toaster",
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "image/products/non-stick-cooking-set-15-pieces.webp",
    name: "non-stick-cooking-set-15-pieces",
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "image/products/blackout-curtain-set-beige.webp",
    name: "blackout-curtain-set-beige",
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "image/products/blackout-curtains-black.jpg",
    name: "blackout-curtains-black",
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "image/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "coffeemaker-with-glass-carafe-black",
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d71",
    image: "image/products/umbrella.jpg",
    name: "coffeemaker-with-glass-carafe-black",
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
  },
] 