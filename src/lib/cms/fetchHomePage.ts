import { parseHomePage } from "./parseHomePage";
import type { CmsHomeResponse, HomePageContent } from "./types";

export const CMS_HOME_API_URL =
  import.meta.env.VITE_CMS_HOME_API_URL ??
  "https://revitacomunicacao.com.br/adminjornadas/api/pages/home";

export async function fetchHomePage(): Promise<HomePageContent> {
  const response = await fetch(CMS_HOME_API_URL);

  if (!response.ok) {
    throw new Error(`Falha ao carregar conteúdo do CMS (${response.status})`);
  }

  const json = (await response.json()) as CmsHomeResponse;

  if (!json.success || !json.data) {
    throw new Error(json.message ?? "Resposta inválida do CMS");
  }

  return parseHomePage(json);
}
