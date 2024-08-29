import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Hexagon } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";

export function Logo() {
  const { user } = useAuth();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user && user.role) {
      setRole(user.role);
    }
  }, [user]);

  const isAdmin = role === "admin";
  
  return (
    <Container className="logo">
      <Hexagon className="exagon" weight="fill" />
      <div>
        <h1>food explorer</h1>
        {isAdmin && <small>admin</small>}
      </div>
    </Container>
  );
}
