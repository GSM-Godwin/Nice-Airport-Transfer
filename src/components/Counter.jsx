const Counter = ({ label, id, min, max }) => {
    return (
      <div className="block mb-5">
        <label htmlFor={id}>{label}:<span>*</span></label>
        <div className="counter flex items-center">
          <button type="button" onClick={() => decrementValue(id)} className="border p-1 rounded">-</button>
          <input type="number" id={id} name={id} value="1" min={min} max={max} readOnly className="w-16 text-center border border-gray-300 rounded" />
          <button type="button" onClick={() => incrementValue(id)} className="border p-1 rounded">+</button>
        </div>
      </div>
    );
  };
  
  export default Counter;