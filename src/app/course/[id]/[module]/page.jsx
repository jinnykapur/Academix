import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import Module from "@/views/course/Module";

export default function Page({ params }) {
  return (
    <main className="max-w-screen-xl h-screen mx-auto px-10">
      <NavBar />
      <Module id={params.id} module={params.module} />
      <Footer />
    </main>
  );
}
