import { GENERATE_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";

const GeneratorHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  console.log(data);

  return (
    <div className="flex min-h-screen justify-center bg-slate-800">
      <div className="mt-8">
        <div>
          <p className="text-center text-4xl font-medium">Generator History</p>
          {data.map((text) => (
            <div className="my-4 min-h-[5rem] text-wrap rounded-2xl border-2 border-slate-600 bg-slate-600 p-2 placeholder:text-slate-400">
              <QRCodeSVG className="float-left mr-2 h-16 w-16" value={text} />
              <p key={text} className="max-w-[600px] break-words">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { GeneratorHistory };
