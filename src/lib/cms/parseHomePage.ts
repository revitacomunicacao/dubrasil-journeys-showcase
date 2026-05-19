import type {
  CmsButton,
  CmsHomeResponse,
  CmsSecao,
  HomePageContent,
} from "./types";
import {
  getFieldValue,
  getSection,
  normalizeCtaLink,
  splitLines,
} from "./field-utils";

interface PainServiceItem {
  servico: string;
  descricao: string;
}

interface SolutionItem {
  titulo: string;
  descricao: string;
  itens: string;
  botao: CmsButton;
  "imagem-de-fundo": string;
}

interface ServiceCarouselItem {
  titulo: string;
  descricao: string;
  icone: string;
}

interface MethodStepItem {
  "numero-da-etapa": string;
  titulo: string;
  descricao: string;
  icone: string;
}

interface FaqItem {
  pergunta: string;
  resposta: string;
}

function parseButton(raw: unknown): CmsButton {
  const btn = raw as CmsButton;
  return {
    texto: btn?.texto ?? "Quero saber mais",
    link: normalizeCtaLink(btn?.link ?? "#contato"),
  };
}

function fieldsFrom(secoes: CmsSecao[], sectionId: number) {
  return getSection(secoes, sectionId)?.campos ?? [];
}

export function parseHomePage(response: CmsHomeResponse): HomePageContent {
  const { secoes } = response.data;

  const bannerFields = fieldsFrom(secoes, 1);
  const painFields = fieldsFrom(secoes, 2);
  const solutionsFields = fieldsFrom(secoes, 3);
  const servicesFields = fieldsFrom(secoes, 4);
  const methodFields = fieldsFrom(secoes, 5);
  const faqFields = fieldsFrom(secoes, 6);

  const painCards = getFieldValue<PainServiceItem[]>(painFields, "servicos") ?? [];
  const solutionItems = getFieldValue<SolutionItem[]>(solutionsFields, "solucoes") ?? [];
  const serviceItems = getFieldValue<ServiceCarouselItem[]>(servicesFields, "servicos-1") ?? [];
  const methodSteps = getFieldValue<MethodStepItem[]>(methodFields, "etapas") ?? [];
  const faqItems = getFieldValue<FaqItem[]>(faqFields, "perguntas-e-respostas") ?? [];

  return {
    banner: {
      title: getFieldValue<string>(bannerFields, "titulo") ?? "",
      description: getFieldValue<string>(bannerFields, "descricao") ?? "",
      button: parseButton(getFieldValue(bannerFields, "botao")),
      footerText: getFieldValue<string>(bannerFields, "texto-inferior") ?? "",
      backgroundImage: getFieldValue<string>(bannerFields, "imagem-de-fundo") ?? "",
    },
    pain: {
      eyebrow: getFieldValue<string>(painFields, "titulo-1") ?? "",
      title: getFieldValue<string>(painFields, "titulo-2") ?? "",
      description: getFieldValue<string>(painFields, "descricao-1") ?? "",
      cards: painCards.map((item) => ({
        title: item.servico,
        description: item.descricao,
      })),
      backgroundImage: getFieldValue<string>(painFields, "imagem-de-fundo-1") ?? "",
      solutionsEyebrow: getFieldValue<string>(solutionsFields, "titulo-3") ?? "",
      solutionsTitle: getFieldValue<string>(solutionsFields, "titulo-2-1") ?? "",
    },
    solutions: solutionItems.map((item) => ({
      title: item.titulo,
      description: item.descricao,
      benefits: splitLines(item.itens ?? ""),
      image: item["imagem-de-fundo"] ?? "",
      button: parseButton(item.botao),
    })),
    services: {
      title: getFieldValue<string>(servicesFields, "titulo-4") ?? "",
      description: getFieldValue<string>(servicesFields, "descricao-2") ?? "",
      backgroundImage: getFieldValue<string>(servicesFields, "imagem-de-fundo-2") ?? "",
      items: serviceItems.map((item) => ({
        title: item.titulo,
        description: item.descricao,
        icon: item.icone,
      })),
    },
    method: {
      badge: getFieldValue<string>(methodFields, "titulo-5") ?? "",
      title: getFieldValue<string>(methodFields, "subtitulo") ?? "",
      backgroundImage: getFieldValue<string>(methodFields, "imagem-de-fundo-3") ?? "",
      steps: methodSteps.map((step) => ({
        stageLabel: step["numero-da-etapa"],
        title: step.titulo,
        description: step.descricao,
        icon: step.icone,
      })),
    },
    faq: {
      badge: getFieldValue<string>(faqFields, "titulo-6") ?? "",
      title: getFieldValue<string>(faqFields, "subtitulo-1") ?? "",
      description: getFieldValue<string>(faqFields, "descricao-3") ?? "",
      items: faqItems.map((item) => ({
        question: item.pergunta,
        answer: item.resposta,
      })),
    },
  };
}
