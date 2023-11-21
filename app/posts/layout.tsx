export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-wrap justify-center py-6">
      {children}
    </div>
  );
}
