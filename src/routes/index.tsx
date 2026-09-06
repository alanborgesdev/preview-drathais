import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Dra. Thaís Menezes | Cirurgiã-dentista em Sorocaba, Jardim Vergueiro";
const DESC =
  "Cirurgiã-dentista em Sorocaba. Cirurgias odontológicas particulares com horário exclusivo, sem sobreposição, e acompanhamento próximo do pré ao pós-operatório.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Site da Dra. Thaís Menezes, cirurgiã-dentista em Sorocaba"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
