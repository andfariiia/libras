/**
 * Anexa automaticamente os parâmetros da URL atual (<dyad-write path="src/utils/navigation.ts" description="Criando utilitário central para redirecionamentos com repasse obrigatório de window.location.search">
/**
 * Anexa automaticamente os parâmetros da URL atual (window.location.search)
 * a qualquer URL de destino e executa o redirecionamento via window.location.href.
 */
export const buildUrlWithParams = (targetUrl: string): string => {
  if (typeof window === "undefined") return targetUrl;

  const currentSearch = window.location.search;
  if (!currentSearch || currentSearch === "") return targetUrl;

  const cleanParams = currentSearch.startsWith("?")
    ? currentSearch.substring(1)
    : currentSearch;

  if (!cleanParams) return targetUrl;

  const separator = targetUrl.includes("?") ? "&" : "?";
  return `${targetUrl}${separator}${cleanParams}`;
};

export const navigateWithParams = (targetUrl: string): void => {
  if (typeof window === "undefined") return;
  const finalUrl = buildUrlWithParams(targetUrl);
  window.location.href = finalUrl;
};