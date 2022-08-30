import { Outlet } from 'react-router-dom';
import Sider from '@/components/Sider';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Route</h1>
      </header>
      <section>
        <aside>
          <Sider />
        </aside>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
