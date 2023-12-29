import { Container } from "../../components/container";

export function Home() {
  return (
    <div>
      <Container>
        <h1 className="font-bold text-center mt-6 text-2xl mb-4">Home</h1>
        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <section className="w-full bg-zinc-200 h-72 rounded-lg">
            <img
              className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all "
              src=""
              alt="Imagem da Terapia"
            />
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">
                Terapia:
              </span>
              <strong className="text-black font-medium text-xl">
              Heiki
            </strong>
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}
