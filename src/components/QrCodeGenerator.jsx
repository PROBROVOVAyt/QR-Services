import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../constants";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("")
  const [result, setResult] = useState('')

  const onClickHendler = (event) => {
    setResult(value)
    setValue('')
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    if (value !== "")
      localStorage.setItem(
        GENERATE_DATA,
        JSON.stringify([...prevData, value])
      )
  }

  const onChangeHendler = (event) => {
    setValue(event.target.value)
    // setResult('')
  }

  return (
    <div className="flex justify-center h-screen bg-slate-800">
      <div className="">
        <div className="mt-32 h-64 w-64 ">
          {result !== '' ? ( 
            <QRCodeSVG className="w-64 h-64 ml-16" value={result} />
          ): (
            <div className="w-64 h-64 ml-16 bg-white"></div>
          )}        
        </div>
        <div className="mt-16 ">
          <div className="">
            <input
              className="bg-slate-600 text-center h-12 border-slate-600 border-2 placeholder:text-slate-400 rounded-2xl w-96"
              type="text" placeholder="Write text" value={value} onChange={onChangeHendler}
            />            
          </div>
          <div className="">
            <button
              className="bg-slate-500 border border-slate-500 text-slate-200 rounded-2xl h-12 w-96 mt-8"
              onClick={onClickHendler} type="button"
            >Generate QR</button>                   
          </div>
        </div>        
      </div>
    </div>
  );
};

export { QrCodeGenerator };