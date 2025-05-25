import React, { useState } from "react";

function State() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const Operation = (operation) => {
    if ( operation === "+") setResult(num1 + num2);
    else if (operation === "-") setResult(num1 - num2);
    else if (operation === "*") setResult(num1 * num2);
    else if (operation === "%") setResult(num2 !== 0 ? num1 % num2 : "خطأ في القسمة");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h2 className="text-2xl font-bold mb-6">: حاسبة للعمليات البسيطة - أدخل الرقم الأول والثاني</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="القيمة 1"
          className="px-4 py-2 rounded bg-white text-black"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="القيمة 2"
          className="px-4 py-2 rounded bg-white text-black"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <button onClick={() => Operation("+")} className="cursor-pointer bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">+</button>
        <button onClick={() => Operation("-")} className="cursor-pointer bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">-</button>
        <button onClick={() => Operation("*")} className="cursor-pointer bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">*</button>
        <button onClick={() => Operation("%")} className="cursor-pointer bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">%</button>
      </div>

      <p className="text-xl font-semibold">{result} : النتيجة</p>

    </div>
  );
}

export default State;
