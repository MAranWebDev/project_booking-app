import imagen from '@/assets/images/imagen.jpg';
import logo from '@/assets/images/logo.png';
import { Navbar } from '@/components/ui/headers';
import Image from 'next/image';

// Direct imports
import '@/assets/styles/styles.css';

export default function Page() {
  return (
    <div className="container">
      <header className="Header">
        <div className="logo-header">
          <Image src={logo} alt="Logo" width={60} height={60} />
        </div>
      </header>

      <Navbar></Navbar>

      <div className="login-box">
        <div className="logo">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Ingresar</button>
        </form>
      </div>

      <div className="image-frame">
        <Image
          style={{ objectFit: 'cover' }}
          src={imagen}
          alt="Imagen"
          width={3000}
          height={1686}
          quality={100}
        />

        <div className="button-container">
          <button className="action-button">¿Necesitas Hablar?</button>
          <button className="action-button">Guías de Ayuda</button>
        </div>
      </div>
    </div>
  );
}
