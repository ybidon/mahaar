import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Research - Mahaar',
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 