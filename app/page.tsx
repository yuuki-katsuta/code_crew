import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <Code2 className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="mb-4 font-bold text-4xl tracking-tight sm:text-5xl">
            CodeCrew
          </h1>
          <p className="mb-8 text-gray-600 text-xl">
            チーム開発のためのメンバー募集プラットフォーム
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link href="/projects">
              <Button size="lg" className="min-w-[200px]">
                プロジェクトを探す
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                メンバーを募集する
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
