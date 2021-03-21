import { useLocation } from "preact-iso/router";

export default function Footer() {
  const { url } = useLocation();
  return (
    <footer>
      <nav>
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://mozart409.space/impressum"
        >
          Impressum
        </a>
        <p></p>
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://mozart409.space/datenschutz"
        >
          Datenschutz
        </a>
      </nav>
    </footer>
  );
}
