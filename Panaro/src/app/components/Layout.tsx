import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/auth";

export function Layout() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0b1a] text-white flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0b1a] text-white flex">
      <aside className="w-64 border-r border-white/10 p-4 space-y-3">
        <h1 className="text-2xl font-bold mb-6">Panora</h1>

        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" className="hover:text-purple-300">Dashboard</NavLink>
          <NavLink to="/dashboard/tasks" className="hover:text-purple-300">Tarefas</NavLink>
          <NavLink to="/dashboard/projects" className="hover:text-purple-300">Projetos</NavLink>
          <NavLink to="/dashboard/calendar" className="hover:text-purple-300">Calendário</NavLink>
          <NavLink to="/dashboard/notes" className="hover:text-purple-300">Notas</NavLink>
          <NavLink to="/dashboard/visual-editor" className="hover:text-purple-300">Editor Visual</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}