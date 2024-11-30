import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { DrumIcon } from "lucide-react";

interface Route {
  name: string;
  path: string;
  codePath: string;
}

async function getRoutes(): Promise<Route[]> {
  const appDirectory = path.join(process.cwd(), "src/app");
  const entries = await fs.readdir(appDirectory, { withFileTypes: true });

  const routes = entries
    .filter((entry) => entry.isDirectory())
    .filter((dir) => !dir.name.startsWith("_") && !dir.name.startsWith("."))
    .filter((dir) => !["code", "fonts"].includes(dir.name)) // Exclude both code and fonts directories
    .map((dir) => ({
      name: dir.name,
      path: `/${dir.name}`,
      codePath: `/code/${dir.name}`,
    }));

  return routes;
}

export default async function Home() {
  const routes = await getRoutes();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <DrumIcon className="w-6 h-6 mr-2" /> Playground
        </h1>

        <div className="grid gap-6">
          {routes.map((route) => (
            <div
              key={route.name}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                  {route.name.replace(/-/g, " ")}
                </h2>
                <span className="text-md text-gray-500">{route.path}</span>
              </div>
              <div className="space-x-4">
                <Link
                  href={route.path}
                  className="inline-flex bg-indigo-500 text-white px-4 py-2 rounded-md items-center hover:bg-indigo-600"
                >
                  🚀 View Project
                </Link>
                <Link
                  href={route.codePath}
                  className="inline-flex bg-cyan-500 text-white px-4 py-2 rounded-md items-center hover:bg-cyan-600"
                >
                  💻 View Source
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
