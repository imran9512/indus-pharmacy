import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center px-4 h-[70vh]">
      <Image
        src={"/assets/common/background.png"}
        alt="Background"
        width={1500}
        height={1000}
        className="h-full w-full absolute"
      />
      <div className="z-50 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">
          Empowering Wellbeing for Men and Women
        </h1>
        <p className="text-lg text-smaller-mobile">
          🌿 Welcome to MaleSort is your one-stop shop for addressing a variety
          of personal health concerns. We understand that intimate health can be
          a delicate topic, and we&#39;re here to provide discreet and reliable
          resources to help you feel your best. Our comprehensive selection of
          products caters to both men&#39;s and women&#39;s needs, focusing on
          overall well-being. Whether you&#39;re seeking solutions for common
          issues like erectile dysfunction ED or premature ejaculation PE, or
          exploring options for family planning, we offer a range of
          high-quality products to support your health journey. We prioritize
          discretion and privacy. Our platform allows you to browse and purchase
          products comfortably, with secure payment options and fast,
          confidential shipping. Malesort.com is committed to empowering
          individuals to take control of their health. We believe in providing
          access to informative resources and effective products to help you
          achieve optimal well-being.
        </p>
      </div>
    </section>
  );
}
