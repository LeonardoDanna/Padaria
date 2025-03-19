export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: 'paes',
    title: 'Pães & Croissants',
    items: [
      {
        title: 'Pão Francês',
        description: 'Crocante por fora, macio por dentro',
        price: 'R$ 3,50',
        image: 'https://t4.ftcdn.net/jpg/06/25/28/97/360_F_625289707_TAnANCUMgNYaZVvrB6PCtRJ1yk6wEy6d.jpg'
      },
      {
        title: 'Baguete Artesanal',
        description: 'Feita com fermentação natural',
        price: 'R$ 12,90',
        image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=100'
      },
      {
        title: 'Croissant Manteigado',
        description: 'Folhado e dourado na medida certa',
        price: 'R$ 8,90',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=100'
      },
      {
        title: 'Pão de Queijo',
        description: 'Tradicional e irresistível',
        price: 'R$ 4,50',
        image: 'https://media.istockphoto.com/id/1287600222/pt/foto/cheese-bread-from-brazil-cheese-bread-on-a-table-with-red-and-white-checked-tablecloth.jpg?s=612x612&w=0&k=20&c=3kcItTIJgw5fw2COMCOn9TFdbZcnUC_RWow1MW4Vw2w='
      }
    ]
  },
  {
    id: 'doces',
    title: 'Bolos & Doces',
    items: [
      {
        title: 'Bolo de Chocolate Belga',
        description: 'Intenso e cremoso',
        price: 'R$ 15,90',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=100'
      },
      {
        title: 'Torta de Limão',
        description: 'Equilíbrio perfeito entre doce e ácido',
        price: 'R$ 14,90',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=100'
      },
      {
        title: 'Cheesecake de Frutas Vermelhas',
        description: 'Leve e saboroso',
        price: 'R$ 16,90',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=100'
      },
      {
        title: 'Brigadeiros Gourmet',
        description: 'Vários sabores exclusivos',
        price: 'R$ 5,90',
        image: 'https://www.assai.com.br/sites/default/files/960x500op2-brigadeiro-gourmet-e-receita-de-sucesso.jpg'
      }
    ]
  },
  {
    id: 'lanches',
    title: 'Sanduíches & Lanches',
    items: [
      {
        title: 'Sanduíche Caprese',
        description: 'Queijo, tomate e manjericão no pão ciabatta',
        price: 'R$ 24,90',
        image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&q=100'
      },
      {
        title: 'Croissant de Frango',
        description: 'Recheado com frango cremoso e ervas',
        price: 'R$ 22,90',
        image: 'https://cdn.awsli.com.br/800x800/1554/1554596/produto/100029810/93c879dc47.jpg'
      },
      {
        title: 'Toast de Avocado',
        description: 'Pão integral, avocado e ovos',
        price: 'R$ 26,90',
        image: 'https://static1.minhavida.com.br/recipes/26/78/5f/3b/avocado-toast-com-ovo-orig-1.jpg'
      },
      {
        title: 'Pão de Forma Caseiro',
        description: 'Recheios variados',
        price: 'R$ 18,90',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=100'
      }
    ]
  },
  {
    id: 'bebidas',
    title: 'Cafés & Bebidas',
    items: [
      {
        title: 'Espresso Clássico',
        description: 'Intenso e aromático',
        price: 'R$ 6,90',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=100'
      },
      {
        title: 'Cappuccino Cremoso',
        description: 'Feito com leite vaporizado',
        price: 'R$ 9,90',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=100'
      },
      {
        title: 'Chás Naturais',
        description: 'Opções de ervas e frutas',
        price: 'R$ 7,90',
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=100'
      },
      {
        title: 'Suco Natural',
        description: 'Frutas frescas do dia',
        price: 'R$ 12,90',
        image: 'https://images.vexels.com/media/users/3/220328/raw/b605d99064f9760f6feb6a22de890c0b-conjunto-de-vidro-de-suco-de-fruta-brilhante-realista.jpg'
      }
    ]
  }
]; 