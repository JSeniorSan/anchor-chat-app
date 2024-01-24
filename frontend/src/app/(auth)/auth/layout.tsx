const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 text-lg h-screen items-center justify-center">
      <h1>Hello</h1>
      {children}
    </div>
  );
};

export default Layout;
