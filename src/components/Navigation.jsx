import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="w-96 p-4">
      <p className="font-medium text-4xl mb-8">Navigation</p>
      <div className="my-2 mx-4">
        <Link className="font-medium text-2xl hover:text-cyan-400 transition-all hover:text-3xl" to="/generate">QR Code Generator</Link>        
      </div>
      <div className="my-2 mx-4">
        <Link className="font-medium text-2xl hover:text-cyan-400 transition-all hover:text-3xl" to="/scanner">QR Code Scanner</Link>
      </div>
      <div className="my-2 mx-4">
        <Link className="font-medium text-2xl hover:text-cyan-400 transition-all hover:text-3xl" to="/generate/history">Generator History</Link>
      </div>
      <div className="my-2 mx-4">
        <Link className="font-medium text-2xl hover:text-cyan-400 transition-all hover:text-3xl" to="/scanner/history">Scanner History</Link>
      </div>
    </div>
  );
};

export { Navigation };