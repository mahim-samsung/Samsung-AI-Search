import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:pl-20 bg-light-primary dark:bg-dark-primary min-h-screen flex flex-col">
      <main className="max-w-screen-lg lg:mx-auto mx-4 flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
