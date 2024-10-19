import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

import { SCAN_DATA } from "../constants";

const QrCodeScanner = () => {
  const [scanned, setScannde] = useState('')

  const scanHendler = (result) => {
    console.log(result[0].rawValue)
    setScannde(result[0].rawValue)

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')


    // console.log("prevData " + prevData)
    // console.log("JSON " + JSON.stringify([...prevData, result[0].rawValue]))
    if (result[0].rawValue !== "")
      localStorage.setItem(
        SCAN_DATA,
        JSON.stringify([...prevData, result[0].rawValue])
      )
  } 

  // console.log("Scanned " + scanned)
  // console.log("Scannes Data " + SCAN_DATA)

  const settings = {
    audio: false,
    finder: false,
  }


  return (
    <div className="flex justify-center h-screen bg-slate-800">
      <div>
        <div className="mt-32 h-64 w-64 ml-16 bg-black">
          <Scanner components={settings} onScan={scanHendler} />                
        </div>
        <div className="mt-16 ">
          <div className="">
            <p className="bg-slate-600 text-center min-h-16 border-slate-600 border-2 p-4 rounded-2xl w-96">
            {scanned !== '' ? ( 
              <p>{scanned}</p>
            ): (
              <div className="flex justify-center">
                <div className="float-left animate-spin">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>                  
                </div>
                <div className="float-left ml-4">
                  <p className="break-words">Scanning</p>
                </div>
              </div>
            )}  
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
};

export { QrCodeScanner };