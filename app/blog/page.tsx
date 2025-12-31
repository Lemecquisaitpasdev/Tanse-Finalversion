import { Metadata } from "next";
import BlogSection from "@/components/blog/BlogSection";

export const metadata: Metadata = {
  title: "Blog TANSE - Lead Generation, GEO & Content Marketing B2B",
  description:
    "Découvrez nos guides et stratégies pour générer des leads B2B qualifiés avec le content marketing et l'optimisation GEO.",
  openGraph: {
    title: "Blog TANSE - Stratégies Lead Generation B2B",
    description:
      "Guides et cas pratiques pour attirer des clients B2B sans cold calling.",
    images: ["/images/blog/magnet-attraction.png"],
  },
};

export default function BlogPage() {
  return <BlogSection />;
}
