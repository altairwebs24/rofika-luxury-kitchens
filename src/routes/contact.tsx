import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/rofika-site";

const shareImage = "https://mudtzlkzbgckaeyjxkkd.supabase.co/storage/v1/object/public/rofika-media/vanity-detail.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rofika Quality Kitchens | Book a Pretoria Consultation" },
      { name: "description", content: "Get in touch with Rofika Quality Kitchens about custom kitchen design, cabinetry or an interior renovation in Pretoria." },
      { property: "og:title", content: "Contact Rofika Quality Kitchens | Pretoria" },
      { property: "og:description", content: "Tell Rofika about your kitchen or home interior project. Based in Equestria, Pretoria." },
      { property: "og:image", content: shareImage },
      { name: "twitter:title", content: "Contact Rofika Quality Kitchens" },
      { name: "twitter:description", content: "Start a conversation about your home project with Rofika in Pretoria." },
      { name: "twitter:image", content: shareImage },
    ],
  }),
  component: ContactPage,
});