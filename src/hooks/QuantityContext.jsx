import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../hooks/auth";

const QuantityContext = createContext();

export function QuantityProvider({ children }) {
  const { user } = useAuth();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (user && user.id) {
      const savedQuantities =
        JSON.parse(
          localStorage.getItem(`@foodexplorer:quantities_user${user.id}`)
        ) || {};
      setQuantities(savedQuantities);
    }
  }, [user]);

  const updateQuantity = (dishId, quantity) => {
    setQuantities((prevState) => {
      const updatedQuantities = {
        ...prevState,
        [dishId]: quantity,
      };
      localStorage.setItem(
        `@foodexplorer:quantities_user${user.id}`,
        JSON.stringify(updatedQuantities)
      );
      return updatedQuantities;
    });
  };

  const getTotalQuantity = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <QuantityContext.Provider
      value={{ quantities, updateQuantity, getTotalQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

export function useQuantity() {
  return useContext(QuantityContext);
}
