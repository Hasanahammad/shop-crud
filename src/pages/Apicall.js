import React, { useEffect, useState } from 'react';

const Apicall = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://45.64.132.149:3388/zab/mmphonenumber?PhoneNumber=01795254586');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          {/* Render data here */}
          {JSON.stringify(data)}
          console.log(JSON.stringify(data));
        </div>
      )}
      {error && (
        <div>
          {/* Render error message here */}
          {JSON.stringify(error)}
        </div>
      )}
    </div>
  );
};

export default Apicall;
