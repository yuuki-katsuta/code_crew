import { ProjectsFilters } from "@/components/projects/projects-filters";
import { Suspense } from "react";

export default async function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 font-bold text-3xl">プロジェクト一覧</h1>
        <p className="text-gray-600">
          チーム開発プロジェクトを探して参加しよう
        </p>
      </div>

      <Suspense fallback={<div>検索中...</div>}>
        <ProjectsFilters />
      </Suspense>

      <Suspense fallback={<ProjectsLoadingSkeleton />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}

async function ProjectsList() {
  return (
    <div className="py-12 text-center">
      <p className="text-gray-500">プロジェクトが見つかりませんでした</p>
    </div>
  );
}

function ProjectsLoadingSkeleton() {
  const skeletonItems = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skeletonItems.map((item) => (
        <div
          key={`skeleton-${item}`}
          className="h-64 animate-pulse rounded-lg bg-gray-200"
        />
      ))}
    </div>
  );
}
