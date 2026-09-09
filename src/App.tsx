import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RolePage from "./pages/RolePage";
import ExperiencePage from "./pages/ExperiencePage";
import TimeseriesPage from "./pages/TimeseriesPage";
import { experiences } from "./data/experiences";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<RolePage />} />
        <Route path="/practice/timeseries" element={<TimeseriesPage />} />
        {experiences.map((item) => (
          <Route
            key={item.slug}
            path={`/experience/${item.slug}`}
            element={<ExperiencePage slug={item.slug} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
