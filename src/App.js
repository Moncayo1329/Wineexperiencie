import { Inicio } from './Pages/Inicio'; // Importa el componente Inicio
import { Footer } from './footer'; // Asegúrate de que el nombre del archivo sea correcto (puede que deba ser 'Footer' en lugar de 'footer')
import { Menu } from './menu'; // Asegúrate de que el nombre del archivo sea correcto (debe ser 'Menu' en lugar de 'menu')

function App() {
  return (
    <div>
      <Menu />  {/* Mueve el <Menu /> antes de <Inicio /> si prefieres tenerlo en la parte superior */}
      <Inicio />
      <Footer />
    </div>
  );
}

export { App }; // Exporta el componente App

