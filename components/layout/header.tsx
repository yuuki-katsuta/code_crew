"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth/client";
import { Code2, LogOut, Plus, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  const { data: session, isPending } = useSession();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">CodeCrew</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900"
            >
              プロジェクト一覧
            </Link>

            {!isPending &&
              (session?.user ? (
                <>
                  <Link
                    href="/projects/new"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  >
                    <Plus className="h-4 w-4" />
                    <span>募集作成</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  >
                    <User className="h-4 w-4" />
                    <span>マイページ</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut()}
                    className="flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>ログアウト</span>
                  </Button>
                </>
              ) : (
                <Link href="/login">
                  <Button size="sm">ログイン</Button>
                </Link>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
