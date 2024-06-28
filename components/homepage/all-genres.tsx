import Catagories from "./caragories";

export default function AllGenres() {
  return (
    <section className="flex items-center justify-center">
      <article className="py-10 px-4 flex flex-col gap-4 w-full max-w-screen-xl">
        <Catagories />
      </article>
    </section>
  );
}
