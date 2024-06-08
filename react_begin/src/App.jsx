const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;
const Description = () => <p>บันทึกข้อมูลบัญชีในเเต่ละวัน</p>;
const Transaction = () => {
  return (
    <ul>
      <li>
        ค่าเดินทาง <span>-200</span>
      </li>
      <li>
        เงินเดือน <span>+20,000</span>
      </li>
      <li>
        เงินอาหาร <span>-500</span>
      </li>
    </ul>
  );
};
function App() {
  return (
    <>
      <Title />
      <Description />
      <Transaction />
    </>
  );
}

export default App;
