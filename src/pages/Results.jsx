import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  // เงินได้ทั้งหมด
  let salary = parseInt(formData.salary);
  let salaryOfYear = salary * 12;
  let bonus = parseInt(formData.bonus);
  let totalSalary = salaryOfYear + bonus;
  let expenses =
    totalSalary * 0.5 <= 100000 ? totalSalary * 0.5 : 100000;

  // ค่าลดหย่อน
  let me = 60000;
  let children =
    parseInt(formData.children) * 30000 <= 60000
      ? parseInt(formData.children) * 30000
      : 60000;
  let social = parseInt(formData.social);
  let socialOfyear =
    social * 12 <= 30000 ? social * 12 : 30000;
  let life =
    parseInt(formData.life) <= 100000
      ? parseInt(formData.life)
      : 100000;
  let deduction = me + children + socialOfyear + life;

  // เงินได้พึงประเมิน
  let income = totalSalary - expenses - deduction;

  // อัตราภาษี
  let taxRate = 0;
  if (income <= 100000) {
    taxRate = 0;
  } else if (income <= 300000) {
    taxRate = 0.05;
  } else if (income <= 1000000) {
    taxRate = 0.1;
  } else {
    taxRate = 0.15;
  }

  // ภาษีที่ต้องชำระ
  let taxPay = taxRate * income;

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-400">
      <div className="w-full max-w-3xl bg-pink-300 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          ผลการคำนวณภาษี
        </h1>
        <p className="text-center mb-6 text-black">
          ------------------------------------------------------------
        </p>
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong>เงินได้ทั้งปี:</strong> {salaryOfYear.toLocaleString()} บาท
          </p>
          <p>
            <strong>ค่าใช้จ่าย:</strong> {expenses.toLocaleString()} บาท
          </p>
          <p>
            <strong>ค่าลดหย่อน:</strong> {deduction.toLocaleString()} บาท
          </p>
          <p>
            <strong>เงินได้พึงประเมินสุทธิ:</strong> {income.toLocaleString()} บาท
          </p>
          <p>
            <strong>อัตราภาษี:</strong> {taxRate * 100} %
          </p>
          <p>
            <strong>ภาษีที่ต้องชำระ:</strong> {taxPay.toLocaleString()} บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
