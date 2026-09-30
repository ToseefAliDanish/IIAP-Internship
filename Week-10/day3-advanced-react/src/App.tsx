import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

interface User {
  id: string;
  name: string;
  role: "Admin" | "Intern";
}

interface AuthContextType {
  user: User | null;
  login: (name: string, role: "Admin" | "Intern") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, role: "Admin" | "Intern") => {
    setUser({ id: `U-${Math.floor(Math.random() * 1000)}`, name, role });
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}


//No Prop Drilling!

function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#ccc'}` }}>
      <h2>IIAP Portal</h2>
      <div>
        <button onClick={toggleTheme} style={{ marginRight: "10px" }}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}

function Dashboard() {
  const { user, login } = useAuth();
  
  if (!user) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>Access Restricted</h3>
        <button onClick={() => login("Toseef", "Intern")}>Login as Internee</button>
        <button onClick={() => login("Admin", "Admin")} style={{ marginLeft: "10px" }}>Login as Admin</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Welcome, {user.name}</h3>
      <p>Your Access Level: <strong>{user.role}</strong></p>
      {user.role === "Admin" ? (
        <div style={{ padding: "10px", backgroundColor: "rgba(255, 0, 0, 0.1)", border: "1px solid red" }}>
          🚨 Admin Zone: System configuration unlocked.
        </div>
      ) : (
        <div style={{ padding: "10px", backgroundColor: "rgba(0, 128, 0, 0.1)", border: "1px solid green" }}>
          ✅ Intern Zone: Standard dashboard access granted.
        </div>
      )}
    </div>
  );
}


function AppContent() {
  const { theme } = useTheme(); 
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: theme === "light" ? "#fff" : "#1e1e1e",
      color: theme === "light" ? "#000" : "#fff",
      fontFamily: "sans-serif",
      transition: "all 0.3s ease"
    }}>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default function IIAPApplication() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}