import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/rofika-site";

const shareImage = "https://mudtzlkzbgckaeyjxkkd.supabase.co/storage/v1/object/public/rofika-media/modern-island-kitchen.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rofika Quality Kitchens | Pretoria, South Africa" },
      { name: "description", content: "Meet Rofika Quality Kitchens, a Pretoria home-interior and kitchen-renovation business creating custom spaces for everyday living." },
      { property: "og:title", content: "About Rofika Quality Kitchens | Pretoria, South Africa" },
      { property: "og:description", content: "A Pretoria kitchen and home-interiors business, making room for more personal everyday living." },
      { property: "og:image", content: shareImage },
      { name: "twitter:title", content: "About Rofika Quality Kitchens" },
      { name: "twitter:description", content: "Custom kitchens and thoughtful home interiors in Pretoria, South Africa." },
      { name: "twitter:image", content: shareImage },
    ],
  }),
  component: AboutPage,
});