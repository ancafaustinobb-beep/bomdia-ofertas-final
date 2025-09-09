export default function handler(req, res) {
  const produtos = [
    {
      title: "Apple iPhone 13 (128 GB) - Luz das estrelas",
      image: "/imagens/iphone13.png",
      link: "https://amzn.to/46n1EUG",
      price: "R$ 3.999,00",
      discount: "10%"
    },
    {
      title: "Notebook Lenovo LOQ-e 15IAX9E Intel Core i5-12450HX 16GB 512GB SSD",
      image: "/imagens/lenovo.png",
      link: "https://amzn.to/46suSSe",
      price: "R$ 4.299,00",
      discount: "12%"
    },
    {
      title: "Notebook VAIO FE15, Intel Core i7 12th, 16GB 512GB SSD",
      image: "/imagens/vaio.png",
      link: "https://amzn.to/46suSSe",
      price: "R$ 5.499,00",
      discount: "15%"
    },
    {
      title: "Smart TV Samsung 50'' Crystal UHD 4K",
      image: "/imagens/smarttv.png",
      link: "https://amzn.to/3xY7X1Q",
      price: "R$ 2.799,00",
      discount: "18%"
    },
    {
      title: "Fone de Ouvido Bluetooth JBL Tune 225TWS",
      image: "/imagens/jbl.png",
      link: "https://amzn.to/3xXk5Ee",
      price: "R$ 399,00",
      discount: "20%"
    },
    {
      title: "Cafeteira Nespresso Essenza Mini",
      image: "/imagens/nespresso.png",
      link: "https://amzn.to/3xZ1X2P",
      price: "R$ 499,00",
      discount: "15%"
    },
    {
      title: "Relógio Smartwatch Amazfit Bip U",
      image: "/imagens/amazfit.png",
      link: "https://amzn.to/3xY9E2R",
      price: "R$ 349,00",
      discount: "10%"
    },
    {
      title: "Tablet Samsung Galaxy Tab A8 32GB",
      image: "/imagens/galaxytab.png",
      link: "https://amzn.to/3xYzQ2S",
      price: "R$ 1.299,00",
      discount: "12%"
    },
    {
      title: "Echo Dot (5ª Geração) com Alexa",
      image: "/imagens/echodot.png",
      link: "https://amzn.to/3xZ2X3R",
      price: "R$ 299,00",
      discount: "15%"
    }
  ];

  res.status(200).json(produtos);
}
