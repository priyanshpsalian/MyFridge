// sendApiRequest();
// async function sendApiRequest() {
//   let APIKEY = "6C02336BB54244A5863F51E9C4A6E2CD";

//   let items = ["rice"];
//   for (let i = 0; i < items.length; i++)
//   {
//     let item = items[i];
//   fetch(`https://api.rainforestapi.com/request?api_key=${APIKEY}&type=search&amazon_domain=amazon.in&search_term=${item}&sort_by=price_low_to_high
//     `)
//     .then((results) => results.json())
//     .then((data) => useApiData(data));
//   }
// }
const obj = {
  request_info: {
    success: true,
    credits_used: 19,
    credits_remaining: 81,
    credits_used_this_request: 1,
  },
  request_metadata: {
    created_at: "2022-01-18T15:46:40.197Z",
    processed_at: "2022-01-18T15:46:46.600Z",
    total_time_taken: 6.4,
    amazon_url:
      "https://www.amazon.in/s/?k=rice&ref=nb_sb_noss_2&s=price-asc-rank",
  },
  request_parameters: {
    type: "search",
    amazon_domain: "amazon.in",
    search_term: "rice",
    sort_by: "price_low_to_high",
  },
  search_results: [
    {
      position: 1,
      title:
        "SMart Basmati Rice | Authentic Basmati Rice | Testy Biryani Basmati Rice (250 Gm)",
      asin: "B09M8LXB5H",
      link: "https://www.amazon.in/SMart-Basmati-Authentic-Testy-Biryani/dp/B09M8LXB5H/ref=sr_1_1?keywords=rice&qid=1642520804&sr=8-1",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/51uIW979VaL._AC_UL320_.jpg",
    },
    {
      position: 2,
      title: "Daawat Basmati Rice, Rozana (Super), 1kg",
      asin: "B0756Y49DS",
      link: "https://www.amazon.in/Daawat-Basmati-Rice-Rozana-Super/dp/B0756Y49DS/ref=sr_1_2_0o_fs?almBrandId=ctnow&fpw=alm&keywords=rice&qid=1642520804&sr=8-2",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81ra4bn7YJL._AC_UL320_.jpg",
      is_amazon_fresh: true,
      rating: 4,
      ratings_total: 1074,
      prices: [
        {
          symbol: "₹",
          value: 64,
          currency: "INR",
          raw: "₹64",
          name: "₹64₹64 (₹64/kg) ₹85₹85",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 85,
          currency: "INR",
          raw: "₹85",
          name: "₹64₹64 (₹64/kg) ₹85₹85",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 64,
        currency: "INR",
        raw: "₹64",
        name: "₹64₹64 (₹64/kg) ₹85₹85",
        is_primary: true,
      },
    },
    {
      position: 3,
      title: "Adrish ZeroWaste Organic Wada Kollam Rice 500 gm",
      asin: "B09BVL5T64",
      link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Wada-Kollam/dp/B09BVL5T64/ref=sr_1_3?keywords=rice&qid=1642520804&sr=8-3",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/516cZaDCHtL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 65,
          currency: "INR",
          raw: "₹65",
          asin: "B09BVL5T64",
          link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Wada-Kollam/dp/B09BVL5T64/ref=sr_1_3?keywords=rice&qid=1642520804&sr=8-3",
        },
      ],
      price: {
        symbol: "₹",
        value: 65,
        currency: "INR",
        raw: "₹65",
        asin: "B09BVL5T64",
        link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Wada-Kollam/dp/B09BVL5T64/ref=sr_1_3?keywords=rice&qid=1642520804&sr=8-3",
      },
      delivery: {
        tagline: "Get it by Tuesday, January 25",
      },
    },
    {
      position: 4,
      title: "Adrish ZeroWaste Organic Jeera Kollam Rice 500 gm",
      asin: "B09BYXRY88",
      link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Jeera-Kollam/dp/B09BYXRY88/ref=sr_1_4?keywords=rice&qid=1642520804&sr=8-4",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61NuyyM3aFL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 75,
          currency: "INR",
          raw: "₹75",
          asin: "B09BYXRY88",
          link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Jeera-Kollam/dp/B09BYXRY88/ref=sr_1_4?keywords=rice&qid=1642520804&sr=8-4",
        },
      ],
      price: {
        symbol: "₹",
        value: 75,
        currency: "INR",
        raw: "₹75",
        asin: "B09BYXRY88",
        link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Jeera-Kollam/dp/B09BYXRY88/ref=sr_1_4?keywords=rice&qid=1642520804&sr=8-4",
      },
      delivery: {
        tagline: "Get it by Tuesday, January 25",
      },
    },
    {
      position: 5,
      title: "Daawat Rozana Gold Basmati Rice, 1kg",
      asin: "B008ZV8J04",
      link: "https://www.amazon.in/Daawat-Rozana-Gold-Basmati-Rice/dp/B008ZV8J04/ref=sr_1_5?keywords=rice&qid=1642520804&sr=8-5",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/8121boPMmFL._AC_UL320_.jpg",
      rating: 4.1,
      ratings_total: 877,
      prices: [
        {
          symbol: "₹",
          value: 84,
          currency: "INR",
          raw: "₹84",
          name: "₹84₹84 (₹84/kg) ₹90₹90",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 90,
          currency: "INR",
          raw: "₹90",
          name: "₹84₹84 (₹84/kg) ₹90₹90",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 84,
        currency: "INR",
        raw: "₹84",
        name: "₹84₹84 (₹84/kg) ₹90₹90",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Friday, January 28 - Saturday, January 29",
      },
    },
    {
      position: 6,
      title:
        "Orgasatva Organic Healthy Ambemohar White Rice Rich in Aroma Clean Grain Perfect Fit for Daily Consumption Easy to cook Available in 500gm",
      asin: "B09PYVFHGG",
      link: "https://www.amazon.in/Orgasatva-Organic-Ambemohar-Consumption-Available/dp/B09PYVFHGG/ref=sr_1_6?keywords=rice&qid=1642520804&sr=8-6",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/31a23neMaXL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 77,
          currency: "INR",
          raw: "₹77",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 87,
          currency: "INR",
          raw: "₹87",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 77,
        currency: "INR",
        raw: "₹77",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, January 22",
      },
    },
    {
      position: 7,
      title: "10X Rozana Silver Basmati Rice, 1Kg",
      asin: "B09Q2344XN",
      link: "https://www.amazon.in/10X-Rozana-Silver-Basmati-Rice/dp/B09Q2344XN/ref=sr_1_7?keywords=rice&qid=1642520804&sr=8-7",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/7145Un9GaRL._AC_UL320_.jpg",
    },
    {
      position: 8,
      title: "Fortune Rozana Basmati Rice, suitable for daily cooking, 1 kg",
      asin: "B00YGMLWQO",
      link: "https://www.amazon.in/Fortune-Rozana-Basmati-Rice-1kg/dp/B00YGMLWQO/ref=sr_1_8?keywords=rice&qid=1642520804&sr=8-8",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/51P9gYrBViL._AC_UL320_.jpg",
      rating: 4.1,
      ratings_total: 2856,
      prices: [
        {
          symbol: "₹",
          value: 115,
          currency: "INR",
          raw: "₹115",
          name: "₹115₹115 (₹115/kg) ₹130₹130",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 130,
          currency: "INR",
          raw: "₹130",
          name: "₹115₹115 (₹115/kg) ₹130₹130",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 115,
        currency: "INR",
        raw: "₹115",
        name: "₹115₹115 (₹115/kg) ₹130₹130",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Friday, January 28 - Saturday, January 29",
      },
    },
    {
      position: 9,
      title: "Naman Rozana Premium Rice,1kg",
      asin: "B08K8XT6BT",
      link: "https://www.amazon.in/Naman-Rozana-Premium-Rice-1kg/dp/B08K8XT6BT/ref=sr_1_9?keywords=rice&qid=1642520804&sr=8-9",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81axL+BWcUL._AC_UL320_.jpg",
      rating: 4.5,
      ratings_total: 2,
      prices: [
        {
          symbol: "₹",
          value: 84,
          currency: "INR",
          raw: "₹84",
          name: "₹84₹84 (₹84/kg) ₹89₹89",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 89,
          currency: "INR",
          raw: "₹89",
          name: "₹84₹84 (₹84/kg) ₹89₹89",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 84,
        currency: "INR",
        raw: "₹84",
        name: "₹84₹84 (₹84/kg) ₹89₹89",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Wednesday, January 26",
      },
    },
    {
      position: 10,
      title: "India Gate Basmati Rice Pouch, Feast Rozzana, 1kg",
      asin: "B01JAF16Q2",
      link: "https://www.amazon.in/India-Gate-Basmati-Pouch-Rozzana/dp/B01JAF16Q2/ref=sr_1_10_0o_fs?almBrandId=ctnow&fpw=alm&keywords=rice&qid=1642520804&sr=8-10",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61SvqojMkSL._AC_UL320_.jpg",
      is_amazon_fresh: true,
      rating: 4.3,
      ratings_total: 4223,
      prices: [
        {
          symbol: "₹",
          value: 85,
          currency: "INR",
          raw: "₹85",
          name: "₹85₹85 (₹85/kg) ₹96₹96",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 96,
          currency: "INR",
          raw: "₹96",
          name: "₹85₹85 (₹85/kg) ₹96₹96",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 85,
        currency: "INR",
        raw: "₹85",
        name: "₹85₹85 (₹85/kg) ₹96₹96",
        is_primary: true,
      },
    },
    {
      position: 11,
      title: "Satkar Basmati Everyday Rice, 1 KG",
      asin: "B08LSNYBCM",
      link: "https://www.amazon.in/Satkar-Basmati-Everyday-Rice-KG/dp/B08LSNYBCM/ref=sr_1_11?keywords=rice&qid=1642520804&sr=8-11",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/815l3pNCpkL._AC_UL320_.jpg",
      rating: 3.3,
      ratings_total: 7,
      prices: [
        {
          symbol: "₹",
          value: 85,
          currency: "INR",
          raw: "₹85",
          name: "₹85₹85 (₹85/kg) ₹95₹95",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "₹85₹85 (₹85/kg) ₹95₹95",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 85,
        currency: "INR",
        raw: "₹85",
        name: "₹85₹85 (₹85/kg) ₹95₹95",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 12,
      title: "WEEFA ORGANIC Dosa Rice (1kg)",
      asin: "B09DK7B5SY",
      link: "https://www.amazon.in/WEEFA-ORGANIC-Dosa-Rice-1kg/dp/B09DK7B5SY/ref=sr_1_12?keywords=rice&qid=1642520804&sr=8-12",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71VcuyEJFiL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 85,
          currency: "INR",
          raw: "₹85",
          name: "₹85₹85 (₹85/count) ₹86₹86",
          is_primary: true,
          asin: "B09DK7B5SY",
          link: "https://www.amazon.in/WEEFA-ORGANIC-Dosa-Rice-1kg/dp/B09DK7B5SY/ref=sr_1_12?keywords=rice&qid=1642520804&sr=8-12",
        },
        {
          symbol: "₹",
          value: 86,
          currency: "INR",
          raw: "₹86",
          name: "₹85₹85 (₹85/count) ₹86₹86",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 85,
        currency: "INR",
        raw: "₹85",
        name: "₹85₹85 (₹85/count) ₹86₹86",
        is_primary: true,
        asin: "B09DK7B5SY",
        link: "https://www.amazon.in/WEEFA-ORGANIC-Dosa-Rice-1kg/dp/B09DK7B5SY/ref=sr_1_12?keywords=rice&qid=1642520804&sr=8-12",
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 13,
      title: "Naman Super Dubar Basmati Rice,1kg",
      asin: "B08K95RXJ1",
      link: "https://www.amazon.in/Naman-Super-Dubar-Basmati-Rice/dp/B08K95RXJ1/ref=sr_1_13?keywords=rice&qid=1642520804&sr=8-13",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81-Z+aEV9bL._AC_UL320_.jpg",
      rating: 2.8,
      ratings_total: 23,
      prices: [
        {
          symbol: "₹",
          value: 89,
          currency: "INR",
          raw: "₹89",
          name: "₹89₹89 (₹89/kg) ₹99₹99",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹89₹89 (₹89/kg) ₹99₹99",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 89,
        currency: "INR",
        raw: "₹89",
        name: "₹89₹89 (₹89/kg) ₹99₹99",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Wednesday, January 26",
      },
    },
    {
      position: 14,
      title:
        "PureFoods Ready to eat Premium Jeera Basmati Rice Gluten and Lactose Free, 200g",
      asin: "B07PSNQQ7R",
      link: "https://www.amazon.in/PureFoods-Premium-Basmati-Gluten-Lactose/dp/B07PSNQQ7R/ref=sr_1_14?keywords=rice&qid=1642520804&sr=8-14",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61jYUf5lLkS._AC_UL320_.jpg",
      rating: 4.4,
      ratings_total: 5,
      prices: [
        {
          symbol: "₹",
          value: 90,
          currency: "INR",
          raw: "₹90",
          name: "₹90₹90 (₹396.48/kg)",
          asin: "B07PSNQQ7R",
          link: "https://www.amazon.in/PureFoods-Premium-Basmati-Gluten-Lactose/dp/B07PSNQQ7R/ref=sr_1_14?keywords=rice&qid=1642520804&sr=8-14",
        },
      ],
      price: {
        symbol: "₹",
        value: 90,
        currency: "INR",
        raw: "₹90",
        name: "₹90₹90 (₹396.48/kg)",
        asin: "B07PSNQQ7R",
        link: "https://www.amazon.in/PureFoods-Premium-Basmati-Gluten-Lactose/dp/B07PSNQQ7R/ref=sr_1_14?keywords=rice&qid=1642520804&sr=8-14",
      },
      delivery: {
        tagline: "Get it by Friday, January 21",
      },
    },
    {
      position: 15,
      title: "Hari Patti 40 Basmati Rice ( 1 Kg)",
      asin: "B07ZFJH651",
      link: "https://www.amazon.in/Hari-Patti-40-Basmati-Rice/dp/B07ZFJH651/ref=sr_1_15?keywords=rice&qid=1642520804&sr=8-15",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ebJrT5zfL._AC_UL320_.jpg",
      rating: 1,
      ratings_total: 1,
      prices: [
        {
          symbol: "₹",
          value: 90,
          currency: "INR",
          raw: "₹90",
          name: "₹90₹90 (₹90/kg)",
          asin: "B07ZFJH651",
          link: "https://www.amazon.in/Hari-Patti-40-Basmati-Rice/dp/B07ZFJH651/ref=sr_1_15?keywords=rice&qid=1642520804&sr=8-15",
        },
      ],
      price: {
        symbol: "₹",
        value: 90,
        currency: "INR",
        raw: "₹90",
        name: "₹90₹90 (₹90/kg)",
        asin: "B07ZFJH651",
        link: "https://www.amazon.in/Hari-Patti-40-Basmati-Rice/dp/B07ZFJH651/ref=sr_1_15?keywords=rice&qid=1642520804&sr=8-15",
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 16,
      title: "Grainka Basmati 1121 Boiled 600Grms, for Fried Rice",
      asin: "B09QHZTK82",
      link: "https://www.amazon.in/Grainka-Basmati-Boiled-600Grms-Fried/dp/B09QHZTK82/ref=sr_1_16?keywords=rice&qid=1642520804&sr=8-16",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/31kfrpCX8DL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 90,
          currency: "INR",
          raw: "₹90",
          asin: "B09QHZTK82",
          link: "https://www.amazon.in/Grainka-Basmati-Boiled-600Grms-Fried/dp/B09QHZTK82/ref=sr_1_16?keywords=rice&qid=1642520804&sr=8-16",
        },
      ],
      price: {
        symbol: "₹",
        value: 90,
        currency: "INR",
        raw: "₹90",
        asin: "B09QHZTK82",
        link: "https://www.amazon.in/Grainka-Basmati-Boiled-600Grms-Fried/dp/B09QHZTK82/ref=sr_1_16?keywords=rice&qid=1642520804&sr=8-16",
      },
      delivery: {
        tagline: "Get it Thursday, January 20 - Monday, January 24",
      },
    },
    {
      position: 17,
      title: "Hashtag Organick Pusa Basmati Rice | 500 GM (Pack of 1)",
      asin: "B09GYK548Z",
      link: "https://www.amazon.in/Hashtag-Organick-Pusa-Basmati-Rice/dp/B09GYK548Z/ref=sr_1_17?keywords=rice&qid=1642520804&sr=8-17",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71a7G4kd4YL._AC_UL320_.jpg",
    },
    {
      position: 18,
      title: "Adrish ZeroWaste Organic Mappilai Samba Rice 500 gm",
      asin: "B09BVLHY93",
      link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Mappilai-Samba/dp/B09BVLHY93/ref=sr_1_18?keywords=rice&qid=1642520804&sr=8-18",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/616GZbV3zcL._AC_UL320_.jpg",
    },
    {
      position: 19,
      title: "WEEFA ORGANIC Sona Masuri Rice - Polished (1kg)",
      asin: "B09DKN2VVV",
      link: "https://www.amazon.in/WEEFA-ORGANIC-Sona-Masuri-Rice/dp/B09DKN2VVV/ref=sr_1_19?keywords=rice&qid=1642520804&sr=8-19",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71raCtH0k-L._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 94,
          currency: "INR",
          raw: "₹94",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 94,
        currency: "INR",
        raw: "₹94",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 20,
      title: "Kohinoor Royale Authentic Basmati Rice, 500 g Pack",
      asin: "B07FPK18RB",
      link: "https://www.amazon.in/Kohinoor-Royale-Authentic-Biryani-Basmati/dp/B07FPK18RB/ref=sr_1_20?keywords=rice&qid=1642520804&sr=8-20",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ez3O6-wZL._AC_UL320_.jpg",
      rating: 4.4,
      ratings_total: 279,
      prices: [
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "₹95₹95 (₹190/kg) ₹99₹99",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹95₹95 (₹190/kg) ₹99₹99",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 95,
        currency: "INR",
        raw: "₹95",
        name: "₹95₹95 (₹190/kg) ₹99₹99",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Sunday, January 23",
      },
    },
    {
      position: 21,
      title: "Kohinoor Dubar Authentic Basmati Rice, 1 kg",
      asin: "B07H3R8H54",
      link: "https://www.amazon.in/Kohinoor-Dubar-Basmati-Rice-1kg/dp/B07H3R8H54/ref=sr_1_21?keywords=rice&qid=1642520804&sr=8-21",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61faC9kRsIL._AC_UL320_.jpg",
      rating: 4.2,
      ratings_total: 131,
      prices: [
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "₹95₹95 (₹95/Item) ₹125₹125",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 125,
          currency: "INR",
          raw: "₹125",
          name: "₹95₹95 (₹95/Item) ₹125₹125",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 95,
        currency: "INR",
        raw: "₹95",
        name: "₹95₹95 (₹95/Item) ₹125₹125",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Friday, January 21",
      },
    },
    {
      position: 22,
      title: "Rajamudi Authentic Semi-Polished Rice (1Kg)",
      asin: "B09K565NBL",
      link: "https://www.amazon.in/Rajamudi-Authentic-Semi-Polished-Rice-1Kg/dp/B09K565NBL/ref=sr_1_22?keywords=rice&qid=1642520804&sr=8-22",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71VkKePKavL._AC_UL320_.jpg",
      rating: 5,
      ratings_total: 1,
      prices: [
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "₹95₹95 (₹95/count) ₹99₹99",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹95₹95 (₹95/count) ₹99₹99",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 95,
        currency: "INR",
        raw: "₹95",
        name: "₹95₹95 (₹95/count) ₹99₹99",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 23,
      title: "TATHASTU Super Mogra Rice_1kg",
      asin: "B07VC8X6L2",
      link: "https://www.amazon.in/TATHASTU-Super-Mogra-Rice_1kg/dp/B07VC8X6L2/ref=sr_1_23?keywords=rice&qid=1642520804&sr=8-23",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71uFRywKxhL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "₹95₹95 (₹95/kg) ₹199₹199",
          is_primary: true,
          asin: "B07VC8X6L2",
          link: "https://www.amazon.in/TATHASTU-Super-Mogra-Rice_1kg/dp/B07VC8X6L2/ref=sr_1_23?keywords=rice&qid=1642520804&sr=8-23",
        },
        {
          symbol: "₹",
          value: 199,
          currency: "INR",
          raw: "₹199",
          name: "₹95₹95 (₹95/kg) ₹199₹199",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 95,
        currency: "INR",
        raw: "₹95",
        name: "₹95₹95 (₹95/kg) ₹199₹199",
        is_primary: true,
        asin: "B07VC8X6L2",
        link: "https://www.amazon.in/TATHASTU-Super-Mogra-Rice_1kg/dp/B07VC8X6L2/ref=sr_1_23?keywords=rice&qid=1642520804&sr=8-23",
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 24,
      title: "Value Life Essentials Rajamudi Rice (500g)",
      asin: "B09M8B63GC",
      link: "https://www.amazon.in/Value-Life-Essentials-Rajamudi-Rice/dp/B09M8B63GC/ref=sr_1_24?keywords=rice&qid=1642520804&sr=8-24",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61D7QkIyKJL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 95,
          currency: "INR",
          raw: "₹95",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 140,
          currency: "INR",
          raw: "₹140",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 95,
        currency: "INR",
        raw: "₹95",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 25,
      title: "WEEFA Organic Sona Masuri Rice - UnPolished (1kg)",
      asin: "B09DKCZ4RW",
      link: "https://www.amazon.in/WEEFA-Organic-Sona-Masuri-Rice/dp/B09DKCZ4RW/ref=sr_1_25?keywords=rice&qid=1642520804&sr=8-25",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71yaEC44ctL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 98,
          currency: "INR",
          raw: "₹98",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 98,
        currency: "INR",
        raw: "₹98",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 26,
      title: "Daawat Pulav Basmati Rice, 1kg",
      asin: "B00N2WK7QU",
      link: "https://www.amazon.in/Daawat-Pulav-Basmati-Rice-1kg/dp/B00N2WK7QU/ref=sr_1_26_0o_fs?almBrandId=ctnow&fpw=alm&keywords=rice&qid=1642520804&sr=8-26",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81UXExmd7VL._AC_UL320_.jpg",
      is_amazon_fresh: true,
      rating: 4.3,
      ratings_total: 1214,
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹99₹99 (₹99/kg) ₹135₹135",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 135,
          currency: "INR",
          raw: "₹135",
          name: "₹99₹99 (₹99/kg) ₹135₹135",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "₹99₹99 (₹99/kg) ₹135₹135",
        is_primary: true,
      },
    },
    {
      position: 27,
      title:
        "Vamitv - Samvat Rice (Sama Chawal / Samak / Samo ) 400gm, Upwaas Food | 100% Natural",
      asin: "B09HKN1BFX",
      link: "https://www.amazon.in/Vamitv-Samvat-Chawal-Upwaas-Natural/dp/B09HKN1BFX/ref=sr_1_27?keywords=rice&qid=1642520804&sr=8-27",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61xTFyORFGL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 110,
          currency: "INR",
          raw: "₹110",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Wednesday, January 26",
      },
    },
    {
      position: 28,
      title: "Daawat Basmati Rice - Rozana (Gold), 1kg Bag",
      asin: "B00XW5HDZU",
      link: "https://www.amazon.in/Daawat-Basmati-Rice-Rozana-Gold/dp/B00XW5HDZU/ref=sr_1_28?keywords=rice&qid=1642520804&sr=8-28",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71fQ5G9bUuL._AC_UL320_.jpg",
      rating: 4.1,
      ratings_total: 21,
    },
    {
      position: 29,
      title:
        "Mittal Organics Special Grocery Pack of Poha, Besan, Arhar Dal and Basmati Rice",
      asin: "B09MFXHJKW",
      link: "https://www.amazon.in/Mittal-Organics-Special-Grocery-Basmati/dp/B09MFXHJKW/ref=sr_1_29?keywords=rice&qid=1642520804&sr=8-29",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71lKU-S0QrL._AC_UL320_.jpg",
      coupon: {
        badge_text: "Save 10%",
        text: "with coupon",
      },
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 149,
          currency: "INR",
          raw: "₹149",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it Monday, January 24 - Friday, January 28",
      },
    },
    {
      position: 30,
      title: "TATHASTU Mota Sella Rice_1kg",
      asin: "B07VD67MNT",
      link: "https://www.amazon.in/TATHASTU-Mota-Sella-Rice_1kg/dp/B07VD67MNT/ref=sr_1_30?keywords=rice&qid=1642520804&sr=8-30",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/716JIH2Pa1L._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹99₹99 (₹99/kg) ₹199₹199",
          is_primary: true,
          asin: "B07VD67MNT",
          link: "https://www.amazon.in/TATHASTU-Mota-Sella-Rice_1kg/dp/B07VD67MNT/ref=sr_1_30?keywords=rice&qid=1642520804&sr=8-30",
        },
        {
          symbol: "₹",
          value: 199,
          currency: "INR",
          raw: "₹199",
          name: "₹99₹99 (₹99/kg) ₹199₹199",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "₹99₹99 (₹99/kg) ₹199₹199",
        is_primary: true,
        asin: "B07VD67MNT",
        link: "https://www.amazon.in/TATHASTU-Mota-Sella-Rice_1kg/dp/B07VD67MNT/ref=sr_1_30?keywords=rice&qid=1642520804&sr=8-30",
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 31,
      title: "ASE No-1 Basmati Rice 1 Kg",
      asin: "B09NM6DYH9",
      link: "https://www.amazon.in/ASE-No-1-Basmati-Rice-Kg/dp/B09NM6DYH9/ref=sr_1_31?keywords=rice&qid=1642520804&sr=8-31",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81zGwUHTNCL._AC_UL320_.jpg",
    },
    {
      position: 32,
      title: "Jaivik Jeevan Poha 500gm Flattened Rice",
      asin: "B09MTM1D37",
      link: "https://www.amazon.in/Jaivik-Jeevan-Poha-500gm-Flattened/dp/B09MTM1D37/ref=sr_1_32?keywords=rice&qid=1642520804&sr=8-32",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71zu68iQGGL._AC_UL320_.jpg",
      coupon: {
        badge_text: "Save 5%",
        text: "with coupon",
      },
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 139,
          currency: "INR",
          raw: "₹139",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, January 22",
      },
    },
    {
      position: 33,
      title: "Dawn Lee Basmati Rice Long Grain Old Rice (500 Gm)",
      asin: "B089DP7H2Q",
      link: "https://www.amazon.in/Basmati-Rice-Dawn-Lee-500/dp/B089DP7H2Q/ref=sr_1_33?keywords=rice&qid=1642520804&sr=8-33",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/716gsfdkggL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 599,
          currency: "INR",
          raw: "₹599",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, January 22",
      },
    },
    {
      position: 34,
      title: "Sri Sauham Pratham Choice Basmati Rice, 1 kg",
      asin: "B01N1FKSJB",
      link: "https://www.amazon.in/Sauham-Pratham-Choice-Basmati-Rice/dp/B01N1FKSJB/ref=sr_1_34?keywords=rice&qid=1642520804&sr=8-34",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71DcvEzefBL._AC_UL320_.jpg",
      rating: 5,
      ratings_total: 1,
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹99₹99 (₹99/kg) ₹115₹115",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 115,
          currency: "INR",
          raw: "₹115",
          name: "₹99₹99 (₹99/kg) ₹115₹115",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "₹99₹99 (₹99/kg) ₹115₹115",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 35,
      title: "VANAM Organic Broken Rice, 1 KG",
      asin: "B0868NM81F",
      link: "https://www.amazon.in/VANAM-Organic-Broken-Rice-KG/dp/B0868NM81F/ref=sr_1_35?keywords=rice&qid=1642520804&sr=8-35",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61KWnZ0o0nL._AC_UL320_.jpg",
      rating: 3.7,
      ratings_total: 8,
      prices: [
        {
          symbol: "₹",
          value: 100,
          currency: "INR",
          raw: "₹100",
          name: "₹100₹100 (₹100/kg) ₹200₹200",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 200,
          currency: "INR",
          raw: "₹200",
          name: "₹100₹100 (₹100/kg) ₹200₹200",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 100,
        currency: "INR",
        raw: "₹100",
        name: "₹100₹100 (₹100/kg) ₹200₹200",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Wednesday, January 26",
      },
    },
    {
      position: 36,
      title: "S.A Rice Flakes(G18--1_White_500gm)",
      asin: "B08X1QNMLT",
      link: "https://www.amazon.in/S-A-Rice-Flakes-G18-1_White_500gm/dp/B08X1QNMLT/ref=sr_1_36?keywords=rice&qid=1642520804&sr=8-36",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/4151Ar9g6zL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 42,
          currency: "INR",
          raw: "₹42",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 50,
          currency: "INR",
          raw: "₹50",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 42,
        currency: "INR",
        raw: "₹42",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, January 22",
      },
    },
    {
      position: 37,
      title:
        "WEEFA ORGANIC Unpolished Red Rice, Less Sticky, Slender, Medium Grain-500 gram",
      asin: "B09HMN7NKD",
      link: "https://www.amazon.in/WEEFA-ORGANIC-Unpolished-Slender-Grain-500/dp/B09HMN7NKD/ref=sr_1_37?keywords=rice&qid=1642520804&sr=8-37",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71nzP0Yu8lL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 45,
          currency: "INR",
          raw: "₹45",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 46,
          currency: "INR",
          raw: "₹46",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 45,
        currency: "INR",
        raw: "₹45",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 38,
      title:
        "Orgasatva Best Organic Indrayani White Rice Healthy Delicious Sticky Rich Aroma Suited for Khichadi Pudding Easy to cook Available in 500gm",
      asin: "B09PR53MZL",
      link: "https://www.amazon.in/Orgasatva-Indrayani-Delicious-Khichadi-Available/dp/B09PR53MZL/ref=sr_1_38?keywords=rice&qid=1642520804&sr=8-38",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/41egrS0c1vL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 57,
          currency: "INR",
          raw: "₹57",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 64,
          currency: "INR",
          raw: "₹64",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 57,
        currency: "INR",
        raw: "₹57",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Saturday, January 22",
      },
    },
    {
      position: 39,
      title:
        "FAZLANI FOODS Ready to Eat Steamed Basmati Rice (Plain Rice) Pack of 1, 250g| Tasty and Authentic Instant Food Meals | Suitable for Home, Travelling and Non-Cooking Days | ISO & USDA Approved",
      asin: "B07R8SYTL7",
      link: "https://www.amazon.in/FAZLANI-FOODS-Ready-Steamed-Basmati/dp/B07R8SYTL7/ref=sr_1_39?keywords=rice&qid=1642520804&sr=8-39",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61ezVt7Q4gS._AC_UL320_.jpg",
      is_prime: true,
      rating: 2.6,
      ratings_total: 8,
      prices: [
        {
          symbol: "₹",
          value: 59,
          currency: "INR",
          raw: "₹59",
          name: "₹59₹59 (₹59/count) ₹120₹120",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 120,
          currency: "INR",
          raw: "₹120",
          name: "₹59₹59 (₹59/count) ₹120₹120",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 59,
        currency: "INR",
        raw: "₹59",
        name: "₹59₹59 (₹59/count) ₹120₹120",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Thursday, January 20",
      },
    },
    {
      position: 40,
      title:
        "Orizza Biryani Basmati Rice | Extra Long Grain With Upto 3X Elongation | Authentic Aroma 1121 Basmati Rice | 250 Grams",
      asin: "B09D3TTFVC",
      link: "https://www.amazon.in/Orizza-Biryani-Basmati-Elongation-Authentic/dp/B09D3TTFVC/ref=sr_1_40?keywords=rice&qid=1642520804&sr=8-40",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71FNcOHdixL._AC_UL320_.jpg",
      rating: 5,
      ratings_total: 5,
      prices: [
        {
          symbol: "₹",
          value: 70,
          currency: "INR",
          raw: "₹70",
          name: "₹70₹70 (₹28/100 g) ₹129₹129",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 129,
          currency: "INR",
          raw: "₹129",
          name: "₹70₹70 (₹28/100 g) ₹129₹129",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 70,
        currency: "INR",
        raw: "₹70",
        name: "₹70₹70 (₹28/100 g) ₹129₹129",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 41,
      title: "GIRIKA GOBINDOBHOG RICE 500 GMS (PACK OF 1)",
      asin: "B09PYTSJMX",
      link: "https://www.amazon.in/GIRIKA-GOBINDOBHOG-RICE-500-PACK/dp/B09PYTSJMX/ref=sr_1_41?keywords=rice&qid=1642520804&sr=8-41",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/41HIZ1lwhAL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 75,
          currency: "INR",
          raw: "₹75",
          asin: "B09PYTSJMX",
          link: "https://www.amazon.in/GIRIKA-GOBINDOBHOG-RICE-500-PACK/dp/B09PYTSJMX/ref=sr_1_41?keywords=rice&qid=1642520804&sr=8-41",
        },
      ],
      price: {
        symbol: "₹",
        value: 75,
        currency: "INR",
        raw: "₹75",
        asin: "B09PYTSJMX",
        link: "https://www.amazon.in/GIRIKA-GOBINDOBHOG-RICE-500-PACK/dp/B09PYTSJMX/ref=sr_1_41?keywords=rice&qid=1642520804&sr=8-41",
      },
      delivery: {
        tagline: "Get it by Thursday, January 20",
      },
    },
    {
      position: 42,
      title: "Shazia Gluten Free Long Grain Biryani Rice, 1Kg,Daily Rice",
      asin: "B095KG8RM2",
      link: "https://www.amazon.in/Shazia-Gluten-Grain-Biryani-Daily/dp/B095KG8RM2/ref=sr_1_42?keywords=rice&qid=1642520804&sr=8-42",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71aj774066S._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 75,
          currency: "INR",
          raw: "₹75",
          name: "Primary",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 100,
          currency: "INR",
          raw: "₹100",
          name: "Original",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 75,
        currency: "INR",
        raw: "₹75",
        name: "Primary",
        is_primary: true,
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 43,
      title: "Adrish ZeroWaste Organic Hill Rice 500gm",
      asin: "B09BVKCGKD",
      link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Hill-500gm/dp/B09BVKCGKD/ref=sr_1_43?keywords=rice&qid=1642520804&sr=8-43",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/61P+tk3WPzL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 75,
          currency: "INR",
          raw: "₹75",
          asin: "B09BVKCGKD",
          link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Hill-500gm/dp/B09BVKCGKD/ref=sr_1_43?keywords=rice&qid=1642520804&sr=8-43",
        },
      ],
      price: {
        symbol: "₹",
        value: 75,
        currency: "INR",
        raw: "₹75",
        asin: "B09BVKCGKD",
        link: "https://www.amazon.in/Adrish-ZeroWaste-Organic-Hill-500gm/dp/B09BVKCGKD/ref=sr_1_43?keywords=rice&qid=1642520804&sr=8-43",
      },
      delivery: {
        tagline: "Get it by Tuesday, January 25",
      },
    },
    {
      position: 44,
      title: "Shiva's Premium Rice Flour; 1Kg; Basmati Rice Flour",
      asin: "B078SSV6B9",
      link: "https://www.amazon.in/Shivas-Premium-Rice-Flour-Basmati/dp/B078SSV6B9/ref=sr_1_44?keywords=rice&qid=1642520804&sr=8-44",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81tfu+RHOoL._AC_UL320_.jpg",
      prices: [
        {
          symbol: "₹",
          value: 80,
          currency: "INR",
          raw: "₹80",
          asin: "B078SSV6B9",
          link: "https://www.amazon.in/Shivas-Premium-Rice-Flour-Basmati/dp/B078SSV6B9/ref=sr_1_44?keywords=rice&qid=1642520804&sr=8-44",
        },
      ],
      price: {
        symbol: "₹",
        value: 80,
        currency: "INR",
        raw: "₹80",
        asin: "B078SSV6B9",
        link: "https://www.amazon.in/Shivas-Premium-Rice-Flour-Basmati/dp/B078SSV6B9/ref=sr_1_44?keywords=rice&qid=1642520804&sr=8-44",
      },
      delivery: {
        tagline: "Get it by Saturday, January 22",
      },
    },
    {
      position: 45,
      title: "Hari Patti 30 Basmati Rice ( 1 Kg)",
      asin: "B07ZFK1S1F",
      link: "https://www.amazon.in/Hari-Patti-30-Basmati-Rice/dp/B07ZFK1S1F/ref=sr_1_45?keywords=rice&qid=1642520804&sr=8-45",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/611EULwIMhL._AC_UL320_.jpg",
      rating: 1.5,
      ratings_total: 2,
      prices: [
        {
          symbol: "₹",
          value: 80,
          currency: "INR",
          raw: "₹80",
          name: "₹80₹80 (₹80/kg)",
          asin: "B07ZFK1S1F",
          link: "https://www.amazon.in/Hari-Patti-30-Basmati-Rice/dp/B07ZFK1S1F/ref=sr_1_45?keywords=rice&qid=1642520804&sr=8-45",
        },
      ],
      price: {
        symbol: "₹",
        value: 80,
        currency: "INR",
        raw: "₹80",
        name: "₹80₹80 (₹80/kg)",
        asin: "B07ZFK1S1F",
        link: "https://www.amazon.in/Hari-Patti-30-Basmati-Rice/dp/B07ZFK1S1F/ref=sr_1_45?keywords=rice&qid=1642520804&sr=8-45",
      },
      delivery: {
        tagline: "Get it by Monday, January 24",
      },
    },
    {
      position: 46,
      title: "10X Rozana Gold Basmati Rice, 1Kg Pouch",
      asin: "B09Q23HWQ4",
      link: "https://www.amazon.in/Rozana-Gold-Basmati-Rice-Pouch/dp/B09Q23HWQ4/ref=sr_1_46?keywords=rice&qid=1642520804&sr=8-46",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71Sp9r-m9lL._AC_UL320_.jpg",
    },
    {
      position: 47,
      title: "India Gate Basmati Rice Pouch, Feast Rozzana, 1kg",
      asin: "B07JZYT14R",
      link: "https://www.amazon.in/India-Gate-Basmati-Pouch-Rozzana/dp/B07JZYT14R/ref=sr_1_47?keywords=rice&qid=1642520804&sr=8-47",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/81AZd184bpL._AC_UL320_.jpg",
      rating: 5,
      ratings_total: 5,
      prices: [
        {
          symbol: "₹",
          value: 96,
          currency: "INR",
          raw: "₹96",
          name: "₹96₹96 (₹96/kg)",
          asin: "B07JZYT14R",
          link: "https://www.amazon.in/India-Gate-Basmati-Pouch-Rozzana/dp/B07JZYT14R/ref=sr_1_47?keywords=rice&qid=1642520804&sr=8-47",
        },
      ],
      price: {
        symbol: "₹",
        value: 96,
        currency: "INR",
        raw: "₹96",
        name: "₹96₹96 (₹96/kg)",
        asin: "B07JZYT14R",
        link: "https://www.amazon.in/India-Gate-Basmati-Pouch-Rozzana/dp/B07JZYT14R/ref=sr_1_47?keywords=rice&qid=1642520804&sr=8-47",
      },
      delivery: {
        tagline: "Get it by Saturday, January 29",
      },
    },
    {
      position: 48,
      title:
        "Tilda Everyday Basmati Rice |Non Sticky |Great Value for Daily Rice Recipes 1 kg",
      asin: "B08RQ2TTLS",
      link: "https://www.amazon.in/Tilda-Everyday-Basmati-Rice/dp/B08RQ2TTLS/ref=sr_1_48_0o_fs?almBrandId=ctnow&fpw=alm&keywords=rice&qid=1642520804&sr=8-48",
      categories: [
        {
          name: "All Categories",
          id: "aps",
        },
      ],
      image: "https://m.media-amazon.com/images/I/71udfLLCBoL._AC_UL320_.jpg",
      is_amazon_fresh: true,
      rating: 4.2,
      ratings_total: 13,
      prices: [
        {
          symbol: "₹",
          value: 99,
          currency: "INR",
          raw: "₹99",
          name: "₹99₹99 (₹99/kg) ₹169₹169",
          is_primary: true,
        },
        {
          symbol: "₹",
          value: 169,
          currency: "INR",
          raw: "₹169",
          name: "₹99₹99 (₹99/kg) ₹169₹169",
          is_rrp: true,
        },
      ],
      price: {
        symbol: "₹",
        value: 99,
        currency: "INR",
        raw: "₹99",
        name: "₹99₹99 (₹99/kg) ₹169₹169",
        is_primary: true,
      },
    },
  ],
  related_searches: [
    {
      query: "rice 25kg",
      link: "https://www.amazon.in/s/?k=rice+25kg&ref=sugsr_0_15&pd_rd_w=rOASi&pf_rd_p=206c771a-9255-43c3-91ee-be3d883c7b95&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=ddc96efc-c46c-4a2e-8d8a-71a96be972ce&pd_rd_wg=VzXq5&qid=1642520804",
    },
    {
      query: "atta",
      link: "https://www.amazon.in/s/?k=atta&ref=sugsr_3_4&pd_rd_w=rOASi&pf_rd_p=206c771a-9255-43c3-91ee-be3d883c7b95&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=ddc96efc-c46c-4a2e-8d8a-71a96be972ce&pd_rd_wg=VzXq5&qid=1642520804",
    },
    {
      query: "rice 1kg",
      link: "https://www.amazon.in/s/?k=rice+1kg&ref=sugsr_1_5&pd_rd_w=rOASi&pf_rd_p=206c771a-9255-43c3-91ee-be3d883c7b95&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=ddc96efc-c46c-4a2e-8d8a-71a96be972ce&pd_rd_wg=VzXq5&qid=1642520804",
    },
    {
      query: "oil",
      link: "https://www.amazon.in/s/?k=oil&ref=sugsr_4_3&pd_rd_w=rOASi&pf_rd_p=206c771a-9255-43c3-91ee-be3d883c7b95&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=ddc96efc-c46c-4a2e-8d8a-71a96be972ce&pd_rd_wg=VzXq5&qid=1642520804",
    },
    {
      query: "sugar",
      link: "https://www.amazon.in/s/?k=sugar&ref=sugsr_2_4&pd_rd_w=rOASi&pf_rd_p=206c771a-9255-43c3-91ee-be3d883c7b95&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=ddc96efc-c46c-4a2e-8d8a-71a96be972ce&pd_rd_wg=VzXq5&qid=1642520804",
    },
    {
      query: "rice 25kg bags sona masoori",
      link: "https://www.amazon.in/s/?k=rice+25kg+bags+sona+masoori&ref=sugsr_5_3&pd_rd_w=rOASi&pf_rd_p=206c771a-9255-43c3-91ee-be3d883c7b95&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=ddc96efc-c46c-4a2e-8d8a-71a96be972ce&pd_rd_wg=VzXq5&qid=1642520804",
    },
  ],
  related_brands: [
    {
      image:
        "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/2/A21TJRUUN4KGV/bc71c89998ce1860a33363a9c257ecf4._CR0,0,853,1280_AC_SX139_SY100_QL70_.jpg",
      title: "Low GI Diabetic White Rice By BefachShop D'cal",
      link: "https://aax-eu.amazon.in/x/c/Qob1TlumYo8qCpT7Tv3DONUAAAF-bd58RgMAAAH2ATUc2ic/https://www.amazon.in/stores/page/58C16D02-906D-4D18-824F-648ED9ED949A/?_encoding=UTF8&store_ref=SB_A0844234I7PAOYGR61F1&pd_rd_plhdr=t&aaxitk=296371b8cf86e008e40d4a36de392738&hsa_cr_id=9744485680102&lp_asins=B07HM5421C&lp_query=rice&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=tcgzB&pf_rd_p=3782b4d8-6773-4e66-8793-e7e6e9a9d8d2&pd_rd_wg=VfzAN&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=3994594e-7b0c-492f-a184-2af9996bafa4",
      store_link:
        "https://www.amazon.in/stores/page/58C16D02-906D-4D18-824F-648ED9ED949A",
      store_id: "58C16D02-906D-4D18-824F-648ED9ED949A",
      store_name: "D'cal",
    },
    {
      logo: "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/4/A21TJRUUN4KGV/2e4db6aebf36875ed1cb7bce736dc8cf._CR170,143,2287,2253_AC_SX139_SY100_QL70_.png",
      image:
        "https://m.media-amazon.com/images/I/712YpNymS3L._AC_SR139,139_QL70_.jpg",
      title: "Healthy & Delicious Products from Across the WorldShop DiSano",
      link: "https://aax-eu.amazon.in/x/c/Qgssh2z-SmiCKFYjUvKC4jEAAAF-bd58RgMAAAH2AS6Kkzg/https://www.amazon.in/stores/page/789E507A-B6B6-4319-93B5-716EF052DEE6/?_encoding=UTF8&store_ref=SB_A0318828P2AN4N5RIXZD&pd_rd_plhdr=t&aaxitk=3609f7f47d899a00bafc974513461442&hsa_cr_id=2403847570502&lp_asins=B010GGD02C%2CB07L2WVRPR&lp_query=rice&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=tcgzB&pf_rd_p=3782b4d8-6773-4e66-8793-e7e6e9a9d8d2&pd_rd_wg=VfzAN&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=3994594e-7b0c-492f-a184-2af9996bafa4",
      store_link:
        "https://www.amazon.in/stores/page/789E507A-B6B6-4319-93B5-716EF052DEE6",
      store_id: "789E507A-B6B6-4319-93B5-716EF052DEE6",
      store_name: "DiSano",
    },
    {
      logo: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e4408767-7d1d-46ed-90d9-a8fb76f22430._CR0,0,590,590_AC_SX139_SY100_QL70_.jpeg",
      image:
        "https://m.media-amazon.com/images/I/41aGek-GDbL._AC_SR139,139_QL70_.jpg",
      title: "Thooyamalli Rice- Perfect rice for kidsShop B&B Organics",
      link: "https://aax-eu.amazon.in/x/c/QsfGDol0DZWh9CChQ4HdAvAAAAF-bd58RgMAAAH2AS4hpHg/https://www.amazon.in/stores/page/E05FB7E6-60A9-4F7C-80E2-72787CB23145/?_encoding=UTF8&store_ref=SB_A0759867LINARTAW8JRR&pd_rd_plhdr=t&aaxitk=9a8bec6d6c2ed5845916f808d34b6f7f&hsa_cr_id=6917356250002&lp_asins=B08574CDS5%2CB07FKK6BYV%2CB07FKLJK5P&lp_query=rice&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=tcgzB&pf_rd_p=3782b4d8-6773-4e66-8793-e7e6e9a9d8d2&pd_rd_wg=VfzAN&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=3994594e-7b0c-492f-a184-2af9996bafa4",
      store_link:
        "https://www.amazon.in/stores/page/E05FB7E6-60A9-4F7C-80E2-72787CB23145",
      store_id: "E05FB7E6-60A9-4F7C-80E2-72787CB23145",
      store_name: "B&B Organics",
    },
  ],
  pagination: {
    total_results: 1000,
    current_page: 1,
    current_page_link:
      "https://www.amazon.in/s?k=rice&s=price-asc-rank&qid=1642520804&ref=sr_pg_1",
    next_page_link:
      "https://www.amazon.in/s?k=rice&s=price-asc-rank&qid=1642520804&ref=sr_pg_1&page=2",
    total_pages: 7,
  },
  refinements: {
    delivery: [
      {
        name: "Get It by Tomorrow",
        value: "p_90/6741118031",
        link: "https://www.amazon.in/s?k=rice&rh=p_90%3A6741118031&s=price-asc-rank&dc&qid=1642520804&rnid=6741116031&ref=sr_nr_p_90_1",
      },
      {
        name: "Get It in 2 Days",
        value: "p_90/20912642031",
        link: "https://www.amazon.in/s?k=rice&rh=p_90%3A20912642031&s=price-asc-rank&dc&qid=1642520804&rnid=6741116031&ref=sr_nr_p_90_2",
      },
    ],
    departments: [
      {
        name: "Grocery & Gourmet Foods",
        value: "n/2454178031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031&s=price-asc-rank&dc&qid=1642520804&rnid=3576079031&ref=sr_nr_n_1",
      },
      {
        name: "Basmati",
        value: "n/4860267031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cn%3A4860267031&s=price-asc-rank&dc&qid=1642520804&rnid=3576079031&ref=sr_nr_n_2",
      },
      {
        name: "Sona Masuri",
        value: "n/4860275031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cn%3A4860275031&s=price-asc-rank&dc&qid=1642520804&rnid=3576079031&ref=sr_nr_n_3",
      },
      {
        name: "Brown Rice",
        value: "n/4860268031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cn%3A4860268031&s=price-asc-rank&dc&qid=1642520804&rnid=3576079031&ref=sr_nr_n_4",
      },
    ],
    reviews: [
      {
        name: "4 Stars & Up",
        value: "p_72/1318476031",
        link: "https://www.amazon.in/s?k=rice&rh=p_72%3A1318476031&s=price-asc-rank&dc&qid=1642520804&rnid=1318475031&ref=sr_nr_p_72_1",
      },
      {
        name: "3 Stars & Up",
        value: "p_72/1318477031",
        link: "https://www.amazon.in/s?k=rice&rh=p_72%3A1318477031&s=price-asc-rank&dc&qid=1642520804&rnid=1318475031&ref=sr_nr_p_72_2",
      },
      {
        name: "2 Stars & Up",
        value: "p_72/1318478031",
        link: "https://www.amazon.in/s?k=rice&rh=p_72%3A1318478031&s=price-asc-rank&dc&qid=1642520804&rnid=1318475031&ref=sr_nr_p_72_3",
      },
      {
        name: "1 Star & Up",
        value: "p_72/1318479031",
        link: "https://www.amazon.in/s?k=rice&rh=p_72%3A1318479031&s=price-asc-rank&dc&qid=1642520804&rnid=1318475031&ref=sr_nr_p_72_4",
      },
    ],
    price: [
      {
        name: "Under ₹1,000",
        value: "n:2454178031||p_36/1318503031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_36%3A1318503031&s=price-asc-rank&dc&qid=1642520804&rnid=1318502031&ref=sr_nr_p_36_1",
      },
      {
        name: "₹1,000 - ₹5,000",
        value: "n:2454178031||p_36/1318504031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_36%3A1318504031&s=price-asc-rank&dc&qid=1642520804&rnid=1318502031&ref=sr_nr_p_36_2",
      },
      {
        name: "₹5,000 - ₹10,000",
        value: "n:2454178031||p_36/1318505031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_36%3A1318505031&s=price-asc-rank&dc&qid=1642520804&rnid=1318502031&ref=sr_nr_p_36_3",
      },
      {
        name: "Today's Deals",
        value: "p_n_specials_match/21618256031",
        link: "https://www.amazon.in/s?k=rice&rh=p_n_specials_match%3A21618256031&s=price-asc-rank&dc&qid=1642520804&rnid=21618255031&ref=sr_nr_p_n_specials_match_1",
      },
    ],
    brand: [
      {
        name: "DAAWAT",
        value: "n:2454178031||p_89/DAAWAT",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ADAAWAT&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_1",
      },
      {
        name: "FORTUNE",
        value: "n:2454178031||p_89/FORTUNE",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AFORTUNE&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_2",
      },
      {
        name: "India Gate",
        value: "n:2454178031||p_89/India Gate",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AIndia+Gate&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_3",
      },
      {
        name: "Kohinoor",
        value: "n:2454178031||p_89/Kohinoor",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AKohinoor&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_4",
      },
      {
        name: "Aashirvaad",
        value: "n:2454178031||p_89/Aashirvaad",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AAashirvaad&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_5",
      },
      {
        name: "Manna",
        value: "n:2454178031||p_89/Manna",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AManna&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_6",
      },
      {
        name: "Pintola",
        value: "n:2454178031||p_89/Pintola",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3APintola&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_7",
      },
      {
        name: "24 Mantra OrganicMTRTildaORGANIC TATTVADouble HorseSHRILALMAHALPANSARISlurrp FarmNATURELAND ORGANICSOctaviusPro NatureSri Sri TATTVA shuddhta ka naamGitsGenericDISANOTataTrue ElementsPillsburyRAMAJEYAM Premium RicePhalada Pure & SureTruefarmClassic HarvestLal QillaB&B OrganicsMonBanglaJUST ORGANIKSTAR 555Delight FoodsSugar Watchersbytewise organicMasterChowELWORLD AGRO & ORGANIC FOOD PRODUCTSFarmory",
        value: "n:2454178031||undefined",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3A24+Mantra+Organic&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_8",
      },
      {
        name: "24 Mantra Organic",
        value: "n:2454178031||p_89/24 Mantra Organic",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3A24+Mantra+Organic&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_8",
      },
      {
        name: "MTR",
        value: "n:2454178031||p_89/MTR",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AMTR&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_9",
      },
      {
        name: "Tilda",
        value: "n:2454178031||p_89/Tilda",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ATilda&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_10",
      },
      {
        name: "ORGANIC TATTVA",
        value: "n:2454178031||p_89/ORGANIC TATTVA",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AORGANIC+TATTVA&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_11",
      },
      {
        name: "Double Horse",
        value: "n:2454178031||p_89/Double Horse",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ADouble+Horse&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_12",
      },
      {
        name: "SHRILALMAHAL",
        value: "n:2454178031||p_89/SHRILALMAHAL",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ASHRILALMAHAL&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_13",
      },
      {
        name: "PANSARI",
        value: "n:2454178031||p_89/PANSARI",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3APANSARI&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_14",
      },
      {
        name: "Slurrp Farm",
        value: "n:2454178031||p_89/Slurrp Farm",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ASlurrp+Farm&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_15",
      },
      {
        name: "NATURELAND ORGANICS",
        value: "n:2454178031||p_89/NATURELAND ORGANICS",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ANATURELAND+ORGANICS&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_16",
      },
      {
        name: "Octavius",
        value: "n:2454178031||p_89/Octavius",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AOctavius&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_17",
      },
      {
        name: "Pro Nature",
        value: "n:2454178031||p_89/Pro Nature",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3APro+Nature&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_18",
      },
      {
        name: "Sri Sri TATTVA shuddhta ka naam",
        value: "n:2454178031||p_89/Sri Sri TATTVA shuddhta ka naam",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ASri+Sri+TATTVA+shuddhta+ka+naam&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_19",
      },
      {
        name: "Gits",
        value: "n:2454178031||p_89/Gits",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AGits&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_20",
      },
      {
        name: "Generic",
        value: "n:2454178031||p_89/Generic",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AGeneric&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_21",
      },
      {
        name: "DISANO",
        value: "n:2454178031||p_89/DISANO",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ADISANO&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_22",
      },
      {
        name: "Tata",
        value: "n:2454178031||p_89/Tata",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ATata&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_23",
      },
      {
        name: "True Elements",
        value: "n:2454178031||p_89/True Elements",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ATrue+Elements&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_24",
      },
      {
        name: "Pillsbury",
        value: "n:2454178031||p_89/Pillsbury",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3APillsbury&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_25",
      },
      {
        name: "RAMAJEYAM Premium Rice",
        value: "n:2454178031||p_89/RAMAJEYAM Premium Rice",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ARAMAJEYAM+Premium+Rice&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_26",
      },
      {
        name: "Phalada Pure & Sure",
        value: "n:2454178031||p_89/Phalada Pure & Sure",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3APhalada+Pure+%26+Sure&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_27",
      },
      {
        name: "Truefarm",
        value: "n:2454178031||p_89/Truefarm",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ATruefarm&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_28",
      },
      {
        name: "Classic Harvest",
        value: "n:2454178031||p_89/Classic Harvest",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AClassic+Harvest&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_29",
      },
      {
        name: "Lal Qilla",
        value: "n:2454178031||p_89/Lal Qilla",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ALal+Qilla&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_30",
      },
      {
        name: "B&B Organics",
        value: "n:2454178031||p_89/B&B Organics",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AB%26B+Organics&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_31",
      },
      {
        name: "MonBangla",
        value: "n:2454178031||p_89/MonBangla",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AMonBangla&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_32",
      },
      {
        name: "JUST ORGANIK",
        value: "n:2454178031||p_89/JUST ORGANIK",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AJUST+ORGANIK&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_33",
      },
      {
        name: "STAR 555",
        value: "n:2454178031||p_89/STAR 555",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ASTAR+555&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_34",
      },
      {
        name: "Delight Foods",
        value: "n:2454178031||p_89/Delight Foods",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ADelight+Foods&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_35",
      },
      {
        name: "Sugar Watchers",
        value: "n:2454178031||p_89/Sugar Watchers",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3ASugar+Watchers&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_36",
      },
      {
        name: "bytewise organic",
        value: "n:2454178031||p_89/bytewise organic",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3Abytewise+organic&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_37",
      },
      {
        name: "MasterChow",
        value: "n:2454178031||p_89/MasterChow",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AMasterChow&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_38",
      },
      {
        name: "ELWORLD AGRO & ORGANIC FOOD PRODUCTS",
        value: "n:2454178031||p_89/ELWORLD AGRO & ORGANIC FOOD PRODUCTS",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AELWORLD+AGRO+%26+ORGANIC+FOOD+PRODUCTS&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_39",
      },
      {
        name: "Farmory",
        value: "n:2454178031||p_89/Farmory",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_89%3AFarmory&s=price-asc-rank&dc&qid=1642520804&rnid=3837712031&ref=sr_nr_p_89_40",
      },
    ],
    made_for_amazon: [
      {
        name: "Made for Amazon",
        value: "n:2454178031||p_n_is_private_label/16184648031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_is_private_label%3A16184648031&s=price-asc-rank&dc&qid=1642520804&rnid=16184647031&ref=sr_nr_p_n_is_private_label_1",
      },
    ],
    food_preference: [
      {
        name: "Vegetarian",
        value: "n:2454178031||p_n_intended_use_browse-bin/5224522031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_intended_use_browse-bin%3A5224522031&s=price-asc-rank&dc&qid=1642520804&rnid=5224521031&ref=sr_nr_p_n_intended_use_browse-bin_1",
      },
      {
        name: "Non-Vegetarian",
        value: "n:2454178031||p_n_intended_use_browse-bin/5224523031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_intended_use_browse-bin%3A5224523031&s=price-asc-rank&dc&qid=1642520804&rnid=5224521031&ref=sr_nr_p_n_intended_use_browse-bin_2",
      },
    ],
    subscription_option: [
      {
        name: "Subscribe & Save",
        value: "p_n_is_sns_available/9835532031",
        link: "https://www.amazon.in/s?k=rice&rh=p_n_is_sns_available%3A9835532031&s=price-asc-rank&dc&qid=1642520804&rnid=9835531031&ref=sr_nr_p_n_is_sns_available_1",
      },
    ],
    pay_on_delivery: [
      {
        name: "Eligible for Pay On Delivery",
        value: "p_n_is_cod_eligible/4931671031",
        link: "https://www.amazon.in/s?k=rice&rh=p_n_is_cod_eligible%3A4931671031&s=price-asc-rank&dc&qid=1642520804&rnid=4931670031&ref=sr_nr_p_n_is_cod_eligible_1",
      },
    ],
    specialty: [
      {
        name: "Alcohol Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868021031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868021031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_1",
      },
      {
        name: "Dairy Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868023031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868023031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_2",
      },
      {
        name: "Fair Trade",
        value: "n:2454178031||p_n_feature_browse-bin/4868024031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868024031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_3",
      },
      {
        name: "Fat Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868025031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868025031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_4",
      },
      {
        name: "Gluten Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868030031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868030031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_5",
      },
      {
        name: "GMO-Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868029031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868029031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_6",
      },
      {
        name: "Halal",
        value: "n:2454178031||p_n_feature_browse-bin/4868032031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868032031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_7",
      },
      {
        name: "High in ProteinKosherLactose FreeLow CarbLow FatLow SodiumNaturalNo Added SaltNo Added SugarNo Artificial ColoursNo Artificial FlavourNo Genetic EngineeringNo PreservativesNut FreeOrganicSeafood FreeSuitable for DiabeticsSuitable for VegansSuitable for VegetariansWheat Free",
        value: "n:2454178031||undefined",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868033031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_8",
      },
      {
        name: "High in Protein",
        value: "n:2454178031||p_n_feature_browse-bin/4868033031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868033031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_8",
      },
      {
        name: "Kosher",
        value: "n:2454178031||p_n_feature_browse-bin/4868035031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868035031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_9",
      },
      {
        name: "Lactose Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868036031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868036031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_10",
      },
      {
        name: "Low Carb",
        value: "n:2454178031||p_n_feature_browse-bin/4868038031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868038031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_11",
      },
      {
        name: "Low Fat",
        value: "n:2454178031||p_n_feature_browse-bin/4868039031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868039031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_12",
      },
      {
        name: "Low Sodium",
        value: "n:2454178031||p_n_feature_browse-bin/4868040031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868040031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_13",
      },
      {
        name: "Natural",
        value: "n:2454178031||p_n_feature_browse-bin/4868041031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868041031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_14",
      },
      {
        name: "No Added Salt",
        value: "n:2454178031||p_n_feature_browse-bin/4868043031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868043031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_15",
      },
      {
        name: "No Added Sugar",
        value: "n:2454178031||p_n_feature_browse-bin/4868044031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868044031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_16",
      },
      {
        name: "No Artificial Colours",
        value: "n:2454178031||p_n_feature_browse-bin/4868045031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868045031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_17",
      },
      {
        name: "No Artificial Flavour",
        value: "n:2454178031||p_n_feature_browse-bin/4868046031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868046031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_18",
      },
      {
        name: "No Genetic Engineering",
        value: "n:2454178031||p_n_feature_browse-bin/4868049031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868049031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_19",
      },
      {
        name: "No Preservatives",
        value: "n:2454178031||p_n_feature_browse-bin/4868050031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868050031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_20",
      },
      {
        name: "Nut Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868052031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868052031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_21",
      },
      {
        name: "Organic",
        value: "n:2454178031||p_n_feature_browse-bin/4868053031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868053031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_22",
      },
      {
        name: "Seafood Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868056031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868056031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_23",
      },
      {
        name: "Suitable for Diabetics",
        value: "n:2454178031||p_n_feature_browse-bin/4868060031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868060031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_24",
      },
      {
        name: "Suitable for Vegans",
        value: "n:2454178031||p_n_feature_browse-bin/4868061031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868061031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_25",
      },
      {
        name: "Suitable for Vegetarians",
        value: "n:2454178031||p_n_feature_browse-bin/4868062031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868062031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_26",
      },
      {
        name: "Wheat Free",
        value: "n:2454178031||p_n_feature_browse-bin/4868065031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_feature_browse-bin%3A4868065031&s=price-asc-rank&dc&qid=1642520804&rnid=4868020031&ref=sr_nr_p_n_feature_browse-bin_27",
      },
    ],
    cuisine: [
      {
        name: "American",
        value: "n:2454178031||p_n_cuisinebin/4868220031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868220031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_1",
      },
      {
        name: "Chinese",
        value: "n:2454178031||p_n_cuisinebin/4868223031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868223031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_2",
      },
      {
        name: "English",
        value: "n:2454178031||p_n_cuisinebin/4868224031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868224031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_3",
      },
      {
        name: "Indian",
        value: "n:2454178031||p_n_cuisinebin/4868228031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868228031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_4",
      },
      {
        name: "Italian",
        value: "n:2454178031||p_n_cuisinebin/4868229031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868229031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_5",
      },
      {
        name: "Mexican",
        value: "n:2454178031||p_n_cuisinebin/4868234031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868234031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_6",
      },
      {
        name: "Portuguese",
        value: "n:2454178031||p_n_cuisinebin/4868239031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868239031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_7",
      },
      {
        name: "ThaiTurkish",
        value: "n:2454178031||undefined",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868247031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_8",
      },
      {
        name: "Thai",
        value: "n:2454178031||p_n_cuisinebin/4868247031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868247031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_8",
      },
      {
        name: "Turkish",
        value: "n:2454178031||p_n_cuisinebin/4868248031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_cuisinebin%3A4868248031&s=price-asc-rank&dc&qid=1642520804&rnid=4868218031&ref=sr_nr_p_n_cuisinebin_9",
      },
    ],
    discount: [
      {
        name: "10% Off or more",
        value: "n:2454178031||p_n_pct-off-with-tax/2665399031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_pct-off-with-tax%3A2665399031&s=price-asc-rank&dc&qid=1642520804&rnid=2665398031&ref=sr_nr_p_n_pct-off-with-tax_1",
      },
      {
        name: "25% Off or more",
        value: "n:2454178031||p_n_pct-off-with-tax/2665400031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_pct-off-with-tax%3A2665400031&s=price-asc-rank&dc&qid=1642520804&rnid=2665398031&ref=sr_nr_p_n_pct-off-with-tax_2",
      },
      {
        name: "35% Off or more",
        value: "n:2454178031||p_n_pct-off-with-tax/2665402031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_pct-off-with-tax%3A2665402031&s=price-asc-rank&dc&qid=1642520804&rnid=2665398031&ref=sr_nr_p_n_pct-off-with-tax_3",
      },
      {
        name: "50% Off or more",
        value: "n:2454178031||p_n_pct-off-with-tax/2665401031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_pct-off-with-tax%3A2665401031&s=price-asc-rank&dc&qid=1642520804&rnid=2665398031&ref=sr_nr_p_n_pct-off-with-tax_4",
      },
      {
        name: "60% Off or more",
        value: "n:2454178031||p_n_pct-off-with-tax/27060456031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_pct-off-with-tax%3A27060456031&s=price-asc-rank&dc&qid=1642520804&rnid=2665398031&ref=sr_nr_p_n_pct-off-with-tax_5",
      },
      {
        name: "70% Off or more",
        value: "n:2454178031||p_n_pct-off-with-tax/27060457031",
        link: "https://www.amazon.in/s?k=rice&rh=n%3A2454178031%2Cp_n_pct-off-with-tax%3A27060457031&s=price-asc-rank&dc&qid=1642520804&rnid=2665398031&ref=sr_nr_p_n_pct-off-with-tax_6",
      },
    ],
    availability: [
      {
        name: "Include Out of Stock",
        value: "p_n_availability/1318485031",
        link: "https://www.amazon.in/s?k=rice&rh=p_n_availability%3A1318485031&s=price-asc-rank&dc&qid=1642520804&rnid=1318483031&ref=sr_nr_p_n_availability_2",
      },
    ],
  },
  ad_blocks: [
    {
      campaign_id: "3841029770402",
      brand_logo:
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5929af75-8387-4334-8122-c2c5385e62e5._CR177,69,2928,1394_AC_SX130_SY60_QL70_.jpg",
      advertiser_id: "1349558200402",
      ad_id: "1349558200402",
      link: "https://aax-eu.amazon.in/x/c/QrU35_UcI5xrWGqcMaBEEtQAAAF-bd57rAMAAAH2AYdOPBs/https://www.amazon.in/stores/page/7DB9F46D-9477-4CA1-8543-7DAE83FD8F50/?_encoding=UTF8&store_ref=SB_A08301294DSGLPN00CJK&pd_rd_plhdr=t&aaxitk=0c9069874d48af5fe050f55f3c754f24&hsa_cr_id=2043736680102&lp_asins=B00V4SBOPM&lp_query=rice&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_ssd_bkgd&pd_rd_w=9yNnG&pf_rd_p=47ac07ef-304a-41df-a673-0b368707e6c6&pd_rd_wg=budkw&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=202b09a6-4984-4dff-8d74-296d259331d6",
      title: "One stop for your japanese ingredients..",
      store_link:
        "https://www.amazon.in/stores/page/7DB9F46D-9477-4CA1-8543-7DAE83FD8F50/?_encoding=UTF8&store_ref=SB_A08301294DSGLPN00CJK&pd_rd_plhdr=t&aaxitk=0c9069874d48af5fe050f55f3c754f24&hsa_cr_id=2043736680102&lp_asins=B00V4SBOPM&lp_query=rice&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_ssd_cta&pd_rd_w=9yNnG&pf_rd_p=47ac07ef-304a-41df-a673-0b368707e6c6&pd_rd_wg=budkw&pf_rd_r=HYPGJAK6884W40WN03JN&pd_rd_r=202b09a6-4984-4dff-8d74-296d259331d6",
      store_id: "7DB9F46D-9477-4CA1-8543-7DAE83FD8F50",
      store_name: "the Japanese Choice Store on Amazon",
      products: [
        {
          asin: "B06XX59B54",
          link: "https://www.amazon.in/dp/B06XX59B54",
          image:
            "https://m.media-amazon.com/images/I/41--bnqBCrL._AC_SR180,120_QL70_.jpg",
          title: "Instant Noodles",
        },
        {
          asin: "B00V4SBOPM",
          link: "https://www.amazon.in/dp/B00V4SBOPM",
          image:
            "https://m.media-amazon.com/images/I/419BaoJJh1L._AC_SR180,120_QL70_.jpg",
          title: "Japanese Rice",
        },
        {
          asin: "B00U5SJ9C2",
          link: "https://www.amazon.in/dp/B00U5SJ9C2",
          image:
            "https://m.media-amazon.com/images/I/51dzFzB6V7L._AC_SR180,120_QL70_.jpg",
          title: "Nori seeweed sheets",
        },
      ],
    },
  ],
};

sendApiRequest();
async function sendApiRequest() {
  for (let i = 0; i < 4; i++) {
    useApiData(obj);
  }
}

function useApiData(data) {
  console.log(data);
  let container = document.querySelector("#container");
  let template = document.querySelector("#template");

  let k;
  let price = 0;
  for (k = 0; k < 10; k++) {
    try {
      price = data.search_results[k].price.raw;
      break;
    } catch (e) {
      console.log(e);
    }
  }
  let title = data.search_results[k].title;
  let img = data.search_results[k].image;
  let url = data.search_results[k].link;

  console.log(price);

  let cardTemplate = template.content.querySelector(".card");

  let cardTitle = cardTemplate.querySelector(".card-title");
  let cardImg = cardTemplate.querySelector(".card-img-top");
  let buyBtn = cardTemplate.querySelector(".btn-success");
  let btnName = cardTemplate.querySelector(".buyBtn");
  let priceSpan = cardTemplate.querySelector("#price");

  cardTitle.innerHTML = title;
  buyBtn.setAttribute("name", title);
  cardImg.setAttribute("src", img);
  buyBtn.setAttribute("href", url);
  priceSpan.innerHTML = price;

  let card = document.importNode(cardTemplate, true);
  container.appendChild(card);
}

let purchasedArr = [];
function eventOnClick(event) {
  let itemName = event.path[0].name;
  console.log(itemName);
  purchasedArr.push(itemName);
  console.log(purchasedArr);
}

btns = document.getElementsByClassName("buyBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", eventOnClick);
}
