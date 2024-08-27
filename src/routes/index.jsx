import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { ClientRoutes } from "./client.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();

function AcessRoute(){
  switch(user.role){
    case USER_ROLE.ADMIN :
      return <AdminRoutes/>
      case USER_ROLE.CLIENT:
        return <ClientRoutes/>
  }
}

  return (
    <BrowserRouter>
    {!user ? <AuthRoutes/> : <AcessRoute/> }
    </BrowserRouter>
  );
}
