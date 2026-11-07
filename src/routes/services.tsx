import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "@/components/rofika-site";

const shareImage = "https://mudtzlkzbgckaeyjxkkd.supabase.co/storage/v1/object/public/rofika-media/sage-kitchen.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Kitchen Renovations & Custom Cabinetry | Rofika Pretoria" },
      { name: "description", content: "Explore Rofika’s kitchen renovations, built-in cupboards, custom furniture and home interior services in Pretoria." },
      { property: "og:title", content: "Kitchen Renovations & Custom Cabinetry | Rofika Pretoria" },
      { property: "og:description", content: "Custom kitchen layouts, wardrobes, living-room furniture and home interior renovations." },
      { property: "og:image", content: shareImage },
      { name: "twitter:title", content: "Kitchen Renovations & Custom Cabinetry | Rofika" },
      { name: "twitter:description", content: "Thoughtful kitchen, cabinetry and home interior services in Pretoria." },
      { name: "twitter:image", content: shareImage },
    ],
  }),
  component: ServicesPage,
});