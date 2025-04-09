import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="md:px-8 ">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href={"https://www.firataltun.com"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Fırat Altun
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
