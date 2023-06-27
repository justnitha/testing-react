import React, { useEffect, useState } from 'react';

const Animation = ({ targetValue }) => {
  const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationValue(prevValue => prevValue + 1); // Tambah 1 setiap detik
    },);// }, 10);

    if (animationValue >= targetValue) {
      clearInterval(interval); // Hentikan interval jika nilai mencapai target
    }
    
    return () => clearInterval(interval); // Membersihkan interval saat komponen tidak lagi digunakan
  }, [animationValue, targetValue]);

  return (
    <div>
      <h2>{animationValue}+</h2>
    </div>
  );
};

export default Animation;
