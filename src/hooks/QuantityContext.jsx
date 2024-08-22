import React, { createContext, useState, useContext, useEffect } from "react";

const QuantityContext = createContext();

export function QuantityProvider({ children }) {
  const [quantities, setQuantities] = useState(() => {
    // Carrega as quantidades do localStorage quando o componente é montado
    const savedQuantities = localStorage.getItem("quantities");
    return savedQuantities ? JSON.parse(savedQuantities) : {};
  });

  const updateQuantity = (dishId, quantity) => {
    setQuantities(prevState => {
      const updatedQuantities = {
        ...prevState,
        [dishId]: quantity,
      };
      // Salva as quantidades no localStorage
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
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
