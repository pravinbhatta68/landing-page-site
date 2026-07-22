import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <Image
        className="header-logo"
        src="/landing page logo.png"
        alt="Aesthetic Pravin"
        width={126}
        height={84}
        priority
      />
    </header>
  );
}
