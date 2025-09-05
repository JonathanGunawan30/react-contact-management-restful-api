import { Link } from "react-router";
import { useLocalStorage } from "react-use";

export default function NotFound() {
    const [token] = useLocalStorage("X-API-TOKEN", "");

    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                <div className="bg-slate-800/70 backdrop-blur rounded-2xl border border-slate-700 shadow-2xl overflow-hidden animate-fade-in">
                    <div className="px-8 pt-10 pb-6 text-center border-b border-slate-700">
                        <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl bg-gradient-to-br from-blue-500 to-blue-700">
                            <i className="fas fa-exclamation-triangle text-5xl text-white drop-shadow-md" />
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
                        <h2 className="text-2xl mt-2 font-semibold text-slate-200">
                            Page Not Found
                        </h2>
                        <p className="mt-3 text-slate-300">
                            The page you’re looking for doesn’t exist, was moved, or the URL
                            is incorrect.
                        </p>
                    </div>

                    <div className="px-8 py-8 text-center space-y-4">
                        {token ? (
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link to="/dashboard/contacts"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 bg-gradient-to-r from-blue-500 to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <i className="fas fa-home mr-2" />
                                    Back to Dashboard
                                </Link>
                                <Link to="/"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-colors duration-200 border border-slate-600 hover:bg-slate-700/60">
                                    <i className="fas fa-arrow-left mr-2" />
                                    Go to Start
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link to="/login"
                                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 bg-gradient-to-r from-blue-500 to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <i className="fas fa-sign-in-alt mr-2" />
                                    Go to Login
                                </Link>
                                <Link to="/register"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-colors duration-200 border border-slate-600 hover:bg-slate-700/60">
                                    <i className="fas fa-user-plus mr-2" />
                                    Create an Account
                                </Link>
                            </div>
                        )}

                        <div className="pt-6 text-sm text-slate-400">
                            <p>
                                Tip: Check the URL, or use the buttons above to navigate back.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-slate-400 text-sm">
                    <nav className="inline-flex items-center gap-2">
                        <Link to="/"
                            className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline">
                            Home
                        </Link>
                        <span>·</span>
                        {token ? (
                            <Link to="/dashboard/contacts"
                                className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline">
                                Dashboard
                            </Link>
                        ) : (
                            <Link to="/login"
                                className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline">
                                Login
                            </Link>
                        )}
                        <span>·</span>
                        <Link to="/register"
                            className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline">
                            Register
                        </Link>
                    </nav>
                </div>
            </div>
        </main>
    );
}
