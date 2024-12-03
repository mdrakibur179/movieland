import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
export default App;
