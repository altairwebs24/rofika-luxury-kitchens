import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/rofika-site";

const shareImage = "https://mudtzlkzbgckaeyjxkkd.supabase.co/storage/v1/object/public/rofika-media/classic-island-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rofika Quality Kitchens | Thoughtful Kitchen Design in Pretoria" },
      { name: "description", content: "Discover custom kitchen design, cabinetry and considered home interiors by Rofika Quality Kitchens in Pretoria, South Africa." },
      { property: "og:title", content: "Rofika Quality Kitchens | Thoughtful Kitchen Design in Pretoria" },
      { property: "og:description", content: "Thoughtful kitchen design, considered cabinetry and interior renovations for the way you really live." },
      { property: "og:image", content: shareImage },
      { name: "twitter:title", content: "Rofika Quality Kitchens | Thoughtful Kitchen Design in Pretoria" },
      { name: "twitter:description", content: "Thoughtful kitchen design and considered home interiors in Pretoria." },
      { name: "twitter:image", content: shareImage },
    ],
  }),
  component: HomePage,
});