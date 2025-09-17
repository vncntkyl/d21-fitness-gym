import { Route, Routes } from "react-router-dom";
import { ScreenWidthProvider } from "./context/screenWidthContext";
import Public from "./routes/public";
import Login from "./routes/public/Login";
import Main from "./routes/private/admin/Main";
import { AuthProvider } from "./context/authContext";
import { Toaster } from "sonner";
import ProtectedRoutes from "./lib/protectedRoutes";
function App() {
  return (
    <ScreenWidthProvider>
      <AuthProvider>
        <Toaster richColors position="top-right" />
        <AppRoutes />
      </AuthProvider>
    </ScreenWidthProvider>
  );
}

function AppRoutes() {
  return <Routes>
    <Route path="login" element={<Login />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="admin/*" element={<Main />} />
    </Route>
    <Route path="/*" element={<Public />} />
  </Routes>
}

export default App;
