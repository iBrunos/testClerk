import { SignIn } from "@clerk/nextjs";
import Notifications from "@/components/shared/notifications/notifications";
import Footer from "@/components/shared/footer/Footer";

export default function Page() {
  const wallpaper = "/assets/images/wallpaper.png"; // Substitua pelo caminho correto da imagem

  return (
    <main className="bg-[#c2c2c2]">
    
      <section className={`bg-contain bg-center bg-no-repeat bg-opacity-75`} style={{ backgroundImage: `url('${wallpaper}')` }}>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <Notifications />
          <div className="mb-20">
            <SignIn />
          </div>
          
        </div>
        <Footer />
      </section>
    </main>
  );
}
