import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground">
              Blog <span className="text-primary">RevWheel</span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              Arrive bientôt
            </p>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Nous préparons du contenu exclusif pour vous aider à maximiser vos avis Google et fidéliser vos clients.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;