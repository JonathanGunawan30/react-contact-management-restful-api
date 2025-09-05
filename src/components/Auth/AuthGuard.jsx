import {useLocalStorage, useLocation} from "react-use";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function AuthGuard() {
    const [token] = useLocalStorage("X-API-TOKEN", "");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const isAuthed = !!token;

        if (!isAuthed && location.pathname !== "/login") {
            navigate("/login", { replace: true });
            return;
        }

        if (isAuthed && (location.pathname === "/" || location.pathname === "/login")) {
            navigate("/dashboard/contacts", { replace: true });
        }
    }, [token, navigate, location.pathname]);

    return null;
}