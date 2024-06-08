import { useState } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = ({ onAddItem }) => {
  // useState
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // Function onChange & onSubmit
  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };

  // Return ค่า
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label htmlFor="">ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+รายรับ , -รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
