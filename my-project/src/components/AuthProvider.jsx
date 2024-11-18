import { createContext, useContext, useState } from "react";

// Création du contexte
const AuthContext = createContext();

// Fournisseur du contexte
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  return useContext(AuthContext);
};
