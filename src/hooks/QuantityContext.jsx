import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../hooks/auth";

const QuantityContext = createContext();

export function QuantityProvider({ children }) {
  const { user } = useAuth(); // Obtém as informações do usuário
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (user && user.id) {
      // Carregar quantidades do localStorage quando o usuário mudar
      const savedQuantities = JSON.parse(localStorage.getItem(`@foodexplorer:quantities_user${user.id}`)) || {};
      setQuantities(savedQuantities);
    }
  }, [user]);

  const updateQuantity = (dishId, quantity) => {
    if (!user || !user.id) return; // Verifica se o user está definido

    setQuantities(prevState => {
      const updatedQuantities = {
        ...prevState,
        [dishId]: quantity
      };
      // Salvar apenas para o usuário atual
      localStorage.setItem(`@foodexplorer:quantities_user${user.id}`, JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  };

  const getTotalQuantity = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <QuantityContext.Provider value={{ quantities, updateQuantity, getTotalQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
}

export function useQuantity() {
  return useContext(QuantityContext);
}
