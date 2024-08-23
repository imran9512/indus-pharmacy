import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href={"/"}>
      <span className="text-2xl">
        <b>
          MALE <i>SORT</i>
        </b>
      </span>
    </Link>
  );
}
