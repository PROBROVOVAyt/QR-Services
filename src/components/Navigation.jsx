import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="w-96 p-4">
      <p className="mb-8 text-4xl font-medium">Navigation</p>
      <div className="mx-4 my-2">
        <Link
          className="text-2xl font-medium transition-all hover:text-3xl hover:text-cyan-400"
          to="/generate"
        >
          QR Code Generator
        </Link>
      </div>
      <div className="mx-4 my-2">
        <Link
          className="text-2xl font-medium transition-all hover:text-3xl hover:text-cyan-400"
          to="/scanner"
        >
          QR Code Scanner
        </Link>
      </div>
      <div className="mx-4 my-2">
        <Link
          className="text-2xl font-medium transition-all hover:text-3xl hover:text-cyan-400"
          to="/generate/history"
        >
          Generator History
        </Link>
      </div>
      <div className="mx-4 my-2">
        <Link
          className="text-2xl font-medium transition-all hover:text-3xl hover:text-cyan-400"
          to="/scanner/history"
        >
          Scanner History
        </Link>
      </div>
    </div>
  );
};

export { Navigation };
