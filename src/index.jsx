import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { ClientRoutes } from "./routes/client.routes";
import { AdminRoutes } from "./routes/admin.routes";
import { AuthRoutes } from "./routes/auth.routes";
import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CLIENT:
        return <ClientRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {!user ? <AuthRoutes /> : <AcessRoute />}
    </BrowserRouter>
  );
}
