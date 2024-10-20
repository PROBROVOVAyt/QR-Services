import { Routes, Route } from "react-router-dom";

import { GeneratorHistory } from "./components/GeneratorHistory";
import { QrCodeGenerator } from "./components/QrCodeGenerator";
import { QrCodeScanner } from "./components/QrCodeScanner";
import { Navigation } from "./components/Navigation";
import { ScannerHistory } from "./components/ScannerHistory";

const Layout = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-900 text-slate-200">
      <div className="float-left">
        <Navigation />
      </div>
      <div className="">
        <Routes>
          <Route path="/qr-services/generate" element={<QrCodeGenerator />} />
          <Route path="/qr-services/generate/history" element={<GeneratorHistory />} />
          <Route path="/qr-services/scanner" element={<QrCodeScanner />} />
          <Route path="/qr-services/scanner/history" element={<ScannerHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export { Layout };
