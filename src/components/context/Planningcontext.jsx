// Planningcontext.jsx
import React, { createContext, useContext, useState } from 'react';

const PlanningContext = createContext();

export function PlanningProvider({ children }) {
  const [form, setForm] = useState({
    coupleNames: '',
    weddingDate: '',
    location: '',
    guestCount: '',
    theme: '',
    budget: '',
  });

  return (
    <PlanningContext.Provider value={{ form, setForm }}>
      {children}
    </PlanningContext.Provider>
  );
}

export const usePlanning = () => useContext(PlanningContext);
