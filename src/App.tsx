import { Index } from './routes/Index';
import { NotFound } from './routes/NotFound';
import { RouteError } from './routes/RouteError';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <RouteError />,
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <RouteError />,
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
