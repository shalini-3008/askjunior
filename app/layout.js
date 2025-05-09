import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js CRUD Task Manager</title>
        <meta name="description" content="A simple CRUD app built with Next.js" />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
          <nav className="bg-blue-600 text-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">NextJS CRUD App</h1>
              <div className="hidden md:block">
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-200 transition">Next.js Docs</a>
              </div>
            </div>
          </nav>
          <div className="container mx-auto py-8 px-4">
            {children}
          </div>
          <footer className="bg-gray-800 text-black text-center p-4 mt-12">
            <p>AskJunior Simple CRUD</p>
          </footer>
        </div>
      </body>
    </html>
  );
}