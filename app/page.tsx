
"use client";
import { HeroSection } from "@/components/blocks/hero-section-1";
import Demo from "@/components/ui/demo";
import { FeaturesSectionWithCardGradient } from "@/components/blocks/feature-section-with-card-gradient";
import { MinimalFooter } from "@/components/ui/minimal-footer";
export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <section id="demo" className="py-20">
                <Demo />
            </section>
            <section id="features" className="py-20">
                <FeaturesSectionWithCardGradient />
            </section>
            <MinimalFooter />
        </div>
    );
}
