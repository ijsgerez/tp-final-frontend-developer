import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import BreweriesPage from './pages/BreweriesPage';
import Layout from './pages/Layout';
import BreweryDetailPage from './pages/BreweryDetailPage';
import NotFound from './pages/NotFound';

// Definimos los caminos (rutas) de nuestra aplicación
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "breweriesbrowser", element: <BreweriesPage/> },
      { path: "breweriesbrowser/:id", element: <BreweryDetailPage /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {
  return (
    <main className="app-container">
      {/* El RouterProvider se encarga de renderizar la página correcta según la URL */}
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
