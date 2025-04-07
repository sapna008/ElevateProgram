import React, { useRef, useEffect } from 'react';

function UseRefForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
    inputRef.current.focus(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UseRefForm;
