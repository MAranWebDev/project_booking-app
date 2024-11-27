import Link from 'next/link';

import styles from './navbar.module.css'; // Asumiendo que usarás módulos de CSS para estilos

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/Home" legacyBehavior>
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>Quiénes Somos</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a>Contacto</a>
          </Link>
        </li>
        <li>
          <Link href="/signup" legacyBehavior>
            <a>Regístrate</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
