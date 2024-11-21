import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-400">
      <div className="w-full max-w-4xl bg-pink-300 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          แบบฟอร์มภาษีเงินได้
        </h1>
        <form onSubmit={submitForm} className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="salary"
              className="block text-black font-medium mb-2"
            >
              เงินเดือน:
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="bonus"
              className="block text-black font-medium mb-2"
            >
              โบนัส:
            </label>
            <input
              type="text"
              name="bonus"
              id="bonus"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="social"
              className="block text-black font-medium mb-2"
            >
              หักประกันสังคมต่อเดือน:
            </label>
            <input
              type="text"
              name="social"
              id="social"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="children"
              className="block text-black font-medium mb-2"
            >
              จำนวนบุตร:
            </label>
            <input
              type="text"
              name="children"
              id="children"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="life"
              className="block text-black font-medium mb-2"
            >
              ค่าเบี้ยประกันชีวิต:
            </label>
            <input
              type="text"
              name="life"
              id="life"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-black py-2 px-8 rounded-lg hover:bg-blue-600 transition"
            >
              ตกลง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
