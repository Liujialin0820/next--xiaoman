export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <header className="w-full flex-col items-center justify-between font-medium text-sm lg:flex">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
                            About
                        </h1>
                    </div>
                </header>
                {children}
                <footer className="w-full flex-col items-center justify-between font-medium text-sm lg:flex">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © 2024 My App. All rights reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}   