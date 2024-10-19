import { SCAN_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";

const ScannerHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

  console.log(data)

  return (
    <div className="flex justify-center min-h-screen bg-slate-800">
      <div className="mt-8">
        <div>
          <p className="text-4xl font-medium text-center">Scanner History</p>
          {data.map((text) => (
          <div className="my-4 min-h-[5rem] p-2 text-wrap bg-slate-600 border-slate-600 border-2 placeholder:text-slate-400 rounded-2xl">
            <QRCodeSVG className="w-16 h-16 mr-2 float-left" value={text} />
            <p key={text} className="max-w-[284px] break-words lg:max-w-[600px]">{text}</p>              
          </div>
          ))}        
        </div>        
      </div>
    </div>
  );
};

export { ScannerHistory };