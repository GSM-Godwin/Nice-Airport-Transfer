const ReturnFields = () => {
    return (
      <div>
        <div className="flex">
          <div className="block">
            <label htmlFor="returnDate">Return Date:<span>*</span></label>
            <input type="date" id="returnDate" name="returnDate" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <div className="flex">
          <div className="block">
            <label htmlFor="returnTime">Return Time (24-hour format):<span>*</span></label>
            <input type="time" id="returnTime" name="returnTime" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ReturnFields;
  