const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 font-sans px-4">
      <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
