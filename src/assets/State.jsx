import React, { useState } from "react";


function State() {
  const [result, setResult] = useState("");

  const num1 = 10;
  const num2 = 10;

  const Opeartion = (Opeartion) => 
  {
    if (Opeartion === "+") setResult(num1 + num2);
    else if (Opeartion === "-") setResult(num1 - num2);
    else if (Opeartion === "*") setResult(num1 * num2);
    else if (Opeartion === "%") setResult(num1 % num2);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-extrabold mb-6">حاسبة للعمليات الأساسية - قيم ثابتة</h1>

      <p className="text-lg mb-6">
        القيمة الأولى: <span className="font-bold">{num1}</span> | القيمة الثانية: <span className="font-bold">{num2}</span>
      </p>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => Opeartion("+")}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-lg font-semibold"
        >
          +
        </button>
        <button
          onClick={() => Opeartion("-")}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-lg font-semibold"
        >
          -
        </button>
        <button
          onClick={() => Opeartion("*")}
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded text-lg font-semibold"
        >
          *
        </button>
        <button
          onClick={() => Opeartion("%")}
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-lg font-semibold"
        >
          %
        </button>
      </div>

      <div className="text-2xl font-bold">
        النتيجة: {result}
      </div>
    </div>
  );
}

export default State;
