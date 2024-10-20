import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../constants";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHendler = (event) => {
    setResult(value);
    setValue("");
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    if (value !== "")
      localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
  };

  const onChangeHendler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex h-screen justify-center bg-slate-800">
      <div className="">
        <div className="mt-32 h-64 w-64">
          {result !== "" ? (
            <QRCodeSVG className="ml-16 h-64 w-64" value={result} />
          ) : (
            <div className="ml-16 h-64 w-64 bg-white" />
          )}
        </div>
        <div className="mt-16">
          <div className="">
            <input
              className="h-12 w-96 rounded-2xl border-2 border-slate-600 bg-slate-600 text-center placeholder:text-slate-400"
              type="text"
              placeholder="Write text"
              value={value}
              onChange={onChangeHendler}
            />
          </div>
          <div className="">
            <button
              className="mt-8 h-12 w-96 rounded-2xl border border-slate-500 bg-slate-500 text-slate-200"
              onClick={onClickHendler}
              type="button"
            >
              Generate QR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QrCodeGenerator };
