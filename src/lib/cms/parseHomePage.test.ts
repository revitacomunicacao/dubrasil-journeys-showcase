import { describe, expect, it } from "vitest";
import { parseHomePage } from "./parseHomePage";
import type { CmsHomeResponse } from "./types";

const minimalResponse: CmsHomeResponse = {
  success: true,
  message: "ok",
  data: {
    id: 1,
    titulo: "Home",
    slug: "home",
    status: "published",
    campos: [],
    secoes: [
      {
        id: 1,
        nome: "Banner",
        ordem: 1,
        campos: [
          {
            nome: "Título",
            identificador: "titulo",
            tipo: "texto",
            valor: "Jornadas, Acessos e Identificação com Segurança Jurídica",
          },
          {
            nome: "Botão",
            identificador: "botao",
            tipo: "botao",
            valor: {
              texto: "CTA",
              link: "https://example.com/projetos/dubrasil-jornadas/#contato",
            },
          },
        ],
      },
      { id: 2, nome: "Pain", ordem: 2, campos: [{ identificador: "servicos", nome: "S", tipo: "repetidor", valor: [] }] },
      { id: 3, nome: "Soluções", ordem: 3, campos: [{ identificador: "solucoes", nome: "S", tipo: "repetidor", valor: [] }] },
      { id: 4, nome: "Serviços", ordem: 4, campos: [{ identificador: "servicos-1", nome: "S", tipo: "repetidor", valor: [] }] },
      { id: 5, nome: "Método", ordem: 5, campos: [{ identificador: "etapas", nome: "E", tipo: "repetidor", valor: [] }] },
      { id: 6, nome: "FAQ", ordem: 6, campos: [{ identificador: "perguntas-e-respostas", nome: "P", tipo: "repetidor", valor: [] }] },
    ],
  },
};

describe("parseHomePage", () => {
  it("normaliza links de CTA para hash interno", () => {
    const content = parseHomePage(minimalResponse);
    expect(content.banner.button.link).toBe("#contato");
  });
});
