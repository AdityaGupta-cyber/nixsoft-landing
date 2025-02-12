import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "url('Hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative h-[500px] bg-cover bg-center">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
                Achieve your CX goals with Unified Observability
              </h1>
              <p className="text-blue-300 text-xl">
                Get unparalleled visibility into your infrastructure.
                <br />
                Make better data-driven decisions.
              </p>
              <Button className="bg-[#1E90FF] text-white px-8 py-6 text-lg hover:bg-blue-600">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
