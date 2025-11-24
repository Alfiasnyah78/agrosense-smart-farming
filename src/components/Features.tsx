import { Wifi, Brain, BarChart3, Sprout, CloudRain, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Wifi,
    title: "IoT Monitoring",
    description: "Sensor real-time untuk memantau kondisi lahan, kelembaban tanah, dan suhu lingkungan 24/7",
  },
  {
    icon: Brain,
    title: "Analisis AI",
    description: "Kecerdasan buatan untuk prediksi hasil panen dan rekomendasi perawatan tanaman yang optimal",
  },
  {
    icon: BarChart3,
    title: "Dashboard Data",
    description: "Visualisasi data yang mudah dipahami untuk pengambilan keputusan yang lebih tepat",
  },
  {
    icon: Sprout,
    title: "Analisis Tanaman",
    description: "Deteksi dini penyakit tanaman dan rekomendasi nutrisi berbasis data lapangan",
  },
  {
    icon: CloudRain,
    title: "Prediksi Cuaca",
    description: "Informasi cuaca akurat dan peringatan dini untuk melindungi hasil panen",
  },
  {
    icon: Shield,
    title: "Data Terjamin",
    description: "Keamanan data terjamin dengan enkripsi tingkat enterprise dan backup otomatis",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Lengkap untuk Pertanian Modern</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solusi terintegrasi yang menggabungkan sensor IoT, analisis AI, dan interface yang mudah digunakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
