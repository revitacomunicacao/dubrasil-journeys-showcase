import type { CmsCampo, CmsSecao } from "./types";

export function getSection(secoes: CmsSecao[], id: number): CmsSecao | undefined {
  return secoes.find((s) => s.id === id);
}

export function getFieldValue<T>(campos: CmsCampo[], identificador: string): T {
  const field = campos.find((c) => c.identificador === identificador);
  return field?.valor as T;
}

export function splitLines(value: string): string[] {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function splitParagraphs(value: string): string[] {
  return value
    .split(/\r?\n\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function normalizeCtaLink(link: string): string {
  if (!link) return "#contato";
  if (link.startsWith("#")) return link;

  try {
    const url = new URL(link);
    if (url.hash) return url.hash;
    return link;
  } catch {
    return link;
  }
}
