import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Siap Meningkatkan Produktivitas Pertanian Anda?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Bergabunglah dengan ribuan petani dan pelaku agribisnis yang telah merasakan manfaat 
            teknologi AlmondSense. Mulai transformasi digital pertanian Anda hari ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background hover:bg-background/90 text-foreground shadow-medium group">
              Hubungi Kami
              <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 group">
              Demo Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
