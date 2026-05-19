export interface CmsButton {
  texto: string;
  link: string;
}

export interface CmsCampo {
  nome: string;
  identificador: string;
  tipo: string;
  valor: unknown;
}

export interface CmsSecao {
  id: number;
  nome: string;
  ordem: number;
  campos: CmsCampo[];
}

export interface CmsPageData {
  id: number;
  titulo: string;
  slug: string;
  status: string;
  campos: CmsCampo[];
  secoes: CmsSecao[];
}

export interface CmsHomeResponse {
  success: boolean;
  data: CmsPageData;
  message: string;
}

export interface HomePageContent {
  banner: {
    title: string;
    description: string;
    button: CmsButton;
    footerText: string;
    backgroundImage: string;
  };
  pain: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
    backgroundImage: string;
    solutionsEyebrow: string;
    solutionsTitle: string;
  };
  solutions: Array<{
    title: string;
    description: string;
    benefits: string[];
    image: string;
    button: CmsButton;
  }>;
  services: {
    title: string;
    description: string;
    backgroundImage: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  method: {
    badge: string;
    title: string;
    backgroundImage: string;
    steps: Array<{
      stageLabel: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
}
