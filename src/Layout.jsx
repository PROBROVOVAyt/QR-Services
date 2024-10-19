import { Routes, Route} from "react-router-dom";

import { GeneratorHistory } from "./components/GeneratorHistory";
import { QrCodeGenerator } from './components/QrCodeGenerator'
import { QrCodeScanner } from './components/QrCodeScanner'
import { Navigation } from './components/Navigation';
import { ScannerHistory } from "./components/ScannerHistory";

const Layout = () => {
  return (
    <div className="bg-slate-900 w-screen min-h-screen text-slate-200">
      <div className="float-left">
        <Navigation/>        
      </div>
      <div className="">
        <Routes>
          <Route path="/generate" element={<QrCodeGenerator />}/>
          <Route path="/generate/history" element={<GeneratorHistory />}/>
          <Route path="/scanner" element={<QrCodeScanner />}/>
          <Route path="/scanner/history" element={<ScannerHistory />}/>
        </Routes>        
      </div>
    </div>
  );
};

export { Layout };