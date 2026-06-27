const produtosEcommerce = [
  // --- ELETRÔNICOS ---
  {
    id: 1,
    title: "Fone de Ouvido Bluetooth Noise Cancelling",
    price: 450.00,
    description: "Fone de ouvido over-ear com cancelamento de ruído ativo e bateria de 40 horas.",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    rating: 4.7
  },
  {
    id: 2,
    title: "Relógio Inteligente Smartwatch v2",
    price: 899.00,
    description: "Monitoramento cardíaco, GPS integrado, oxímetro e notificações no pulso.",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    rating: 4.3
  },
  {
    id: 3,
    title: "Teclado Mecânico RGB",
    price: 349.90,
    description: "Teclado mecânico switch blue com retroiluminação RGB customizável e anti-ghosting.",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: 4,
    title: "Mouse Gamer 16000 DPI",
    price: 199.90,
    description: "Mouse ergonômico com sensor óptico de alta precisão e 6 botões programáveis.",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  },
  {
    id: 5,
    title: "Carregador Portátil Power Bank 20000mAh",
    price: 159.00,
    description: "Carregamento rápido com duas saídas USB-C, ideal para viagens longas.",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1609592424085-f5b2257f8664?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: 6,
    title: "Caixa de Som Bluetooth Impermeável",
    price: 279.90,
    description: "Som potente com graves profundos e proteção IPX7 contra água.",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60",
    rating: 4.8
  },

  // --- CALÇADOS ---
  {
    id: 7,
    title: "Tênis Esportivo Running",
    price: 299.90,
    description: "Tênis ideal para corridas e caminhadas, com amortecimento em gel.",
    category: "Calçados",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  },
  {
    id: 8,
    title: "Sapato Social Couro Legítimo",
    price: 249.00,
    description: "Design clássico em couro legítimo, ideal para eventos formais e trabalho.",
    category: "Calçados",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&auto=format&fit=crop&q=60",
    rating: 4.2
  },
  {
    id: 9,
    title: "Bota Cano Curto Urbana",
    price: 319.90,
    description: "Bota em estilo coturno com solado tratorado antiderrapante e cano acolchoado.",
    category: "Calçados",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: 10,
    title: "Sandália Casual Confort",
    price: 89.90,
    description: "Sandália leve com palmilha anatômica, perfeita para dias de verão.",
    category: "Calçados",
    image: "https://images.unsplash.com/photo-1621996346565-e3bb64619a4e?w=500&auto=format&fit=crop&q=60",
    rating: 4.1
  },
  {
    id: 11,
    title: "Tênis Casual Casual Urbano",
    price: 179.95,
    description: "Tênis minimalista de lona, combina perfeitamente com calça jeans ou bermuda.",
    category: "Calçados",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: 12,
    title: "Chuteira de Campo Profissional",
    price: 389.00,
    description: "Travas posicionadas para máxima tração em gramados naturais.",
    category: "Calçados",
    image: "https://images.unsplash.com/photo-1514989940723-e8e5163ccbe8?w=500&auto=format&fit=crop&q=60",
    rating: 4.7
  },

  // --- ROUPAS ---
  {
    id: 13,
    title: "Camiseta Algodão Premium",
    price: 79.90,
    description: "Camiseta 100% algodão egípcio, corte slim fit, máximo conforto.",
    category: "Roupas",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
    rating: 4.8
  },
  {
    id: 14,
    title: "Calça Jeans Skinny Escura",
    price: 149.90,
    description: "Calça jeans com elastano, modelagem ajustada e lavagem moderna.",
    category: "Roupas",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60",
    rating: 4.3
  },
  {
    id: 15,
    title: "Jaqueta Corta Vento Sport",
    price: 199.00,
    description: "Jaqueta super leve, repelente à água, ideal para treinos ao ar livre.",
    category: "Roupas",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  },
  {
    id: 16,
    title: "Moletom Canguru com Capuz",
    price: 169.90,
    description: "Moletom flanelado por dentro com bolso frontal e ajuste no capuz.",
    category: "Roupas",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: 17,
    title: "Vestido Midi Floral",
    price: 139.90,
    description: "Vestido leve e fluido com estampa floral, perfeito para a primavera.",
    category: "Roupas",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: 18,
    title: "Bermuda Cargo Sarja",
    price: 99.90,
    description: "Bermuda de sarja resistente com bolsos laterais funcionais.",
    category: "Roupas",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60",
    rating: 4.2
  },

  // --- ACESSÓRIOS ---
  {
    id: 19,
    title: "Mochila Impermeável para Notebook",
    price: 189.90,
    description: "Compartimento estofado para notebooks de até 15.6 polegadas.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: 20,
    title: "Garrafa Térmica Inox 750ml",
    price: 120.00,
    description: "Mantém a bebida gelada por até 24h ou quente por até 12h. Livre de BPA.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
    rating: 4.9
  },
  {
    id: 21,
    title: "Óculos de Sol Aviador Clássico",
    price: 145.00,
    description: "Lentes com proteção UV400 total e armação metálica leve.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  },
  {
    id: 22,
    title: "Carteira Slim de Couro",
    price: 69.90,
    description: "Design ultrafino com proteção RFID contra clonagem de cartões.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: 23,
    title: "Boné Snapback Aba Reta",
    price: 59.90,
    description: "Boné com ajuste clássico e tecido respirável de alta qualidade.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
    rating: 4.1
  },
  {
    id: 24,
    title: "Cinto Masculino de Lona",
    price: 39.90,
    description: "Cinto ajustável militar com fivela de engate rápido.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1624222247344-550fb8ef986c?w=500&auto=format&fit=crop&q=60",
    rating: 4.3
  },

  // --- CASA & DECORAÇÃO ---
  {
    id: 25,
    title: "Luminária de Mesa Articulada",
    price: 110.00,
    description: "Luminária estilo Pixar perfeita para mesas de estudo ou escritórios.",
    category: "Casa e Decoração",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: 26,
    title: "Almofada Ergonômica para Cadeira",
    price: 135.00,
    description: "Espuma de memória que alivia a pressão na lombar ao trabalhar sentado.",
    category: "Casa e Decoração",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=60",
    rating: 4.7
  },
  {
    id: 27,
    title: "Kit 3 Quadros Decorativos",
    price: 99.00,
    description: "Quadros com moldura preta e artes abstratas minimalistas.",
    category: "Casa e Decoração",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: 28,
    title: "Vaso de Cerâmica Minimalista",
    price: 55.00,
    description: "Vaso fosco ideal para plantas secas, suculentas ou decoração de estantes.",
    category: "Casa e Decoração",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&auto=format&fit=crop&q=60",
    rating: 4.3
  },
  {
    id: 29,
    title: "Jogo de Cama Casal Algodão 180 Fios",
    price: 210.00,
    description: "Inclui lençol com elástico, lençol de cima e duas fronhas super macias.",
    category: "Casa e Decoração",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60",
    rating: 4.8
  },
  {
    id: 30,
    title: "Tapete Geométrico de Sala (1,5m x 2,0m)",
    price: 340.00,
    description: "Tapete com estampa moderna, toque macio e base antiderrapante.",
    category: "Casa e Decoração",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  }
];

export default produtosEcommerce;