import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import Admin from "./pages/Admin";
import SuperAdmin from "./pages/SuperAdmin";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Category from "./pages/Category";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[2001]} />}>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[2002]} />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="home" element={<Admin />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="category" element={<Category />} />
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[2003]} />}>
          <Route path="super" element={<SuperAdmin />} />
        </Route>
        {/* Catch All */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
