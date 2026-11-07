import { createFileRoute } from "@tanstack/react-router";

import { ProjectsPage } from "@/components/rofika-site";

const shareImage = "https://mudtzlkzbgckaeyjxkkd.supabase.co/storage/v1/object/public/rofika-media/modern-island-kitchen.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Completed Projects | Rofika Quality Kitchens, Pretoria" },
      { name: "description", content: "Browse completed Rofika Quality Kitchens projects, featuring custom kitchens, built-in cabinetry and thoughtful home details." },
      { property: "og:title", content: "Completed Projects | Rofika Quality Kitchens, Pretoria" },
      { property: "og:description", content: "A closer look at finished kitchens and custom interior details by Rofika in Pretoria." },
      { property: "og:image", content: shareImage },
      { name: "twitter:title", content: "Completed Projects | Rofika Quality Kitchens" },
      { name: "twitter:description", content: "Explore finished kitchens, cabinetry and home interiors from Rofika." },
      { name: "twitter:image", content: shareImage },
    ],
  }),
  component: ProjectsPage,
});