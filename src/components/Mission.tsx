import { Target, Eye, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi Kami</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknologi untuk bumi yang lebih subur
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 hover:shadow-medium transition-all duration-300 animate-slide-up">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi pelopor solusi pertanian digital di Indonesia yang membantu petani dan pelaku 
                agribisnis meningkatkan produktivitas melalui teknologi yang mudah diakses dan akurat.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Menghadirkan sistem pemantauan lahan yang terukur dan real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Memberikan insight berbasis AI untuk mendukung keputusan pertanian</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Mempermudah proses analisis kondisi tanaman, cuaca, dan tanah</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tujuan</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-accent">•</span>
                  <span>Meningkatkan hasil panen dan efisiensi penggunaan sumber daya</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-accent">•</span>
                  <span>Mengurangi risiko gagal panen melalui data prediktif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-accent">•</span>
                  <span>Menciptakan ekosistem agritech yang terintegrasi di Indonesia</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
