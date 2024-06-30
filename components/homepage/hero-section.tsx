import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <Image
        src={"/assets/common/background.png"}
        alt="Background"
        width={1500}
        height={1000}
        className="h-full w-full absolute"
      />
      <div className="z-50 max-w-2xl text-center">
        <h1 className="text-7xl font-bold mb-6">Headline Here</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor
          repellendus ut beatae odio. Repellendus, voluptates reiciendis, eius
          necessitatibus quas dicta at eaque officiis, eligendi dolore vitae
          assumenda incidunt non?
        </p>
      </div>
    </section>
  );
}
