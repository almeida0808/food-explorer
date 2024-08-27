import { Container, Main } from "./styles";
import { motion } from "framer-motion";

export function NotFound({ ...rest }) {
  const { user } = useAuth();
  const [role, setRole] = useState(user.role);
  const isAdmin = role === "admin";
  const { getTotalQuantity, quantities } = useQuantity();

  return (
    <Container>
      <Menu totalQuantity={getTotalQuantity()} isAdmin={isAdmin} />
      <Main>
<h1>404</h1>
<h2>NOT FOUND</h2>

      </Main>
      <Footer />
    </Container>
  );
}
