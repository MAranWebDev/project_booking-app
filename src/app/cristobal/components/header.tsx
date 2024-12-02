import '@/assets/styles/styles.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a className="header-button">Home</a>
      </Link>
      <Link href="/contacto">
        <a className="header-button">Contacto</a>
      </Link>
    </div>
  );
};
