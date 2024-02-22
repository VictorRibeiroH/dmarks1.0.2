import Link from 'next/link';
import React from 'react';

const BtnProd = () => {
  return (
    <Link href="/produtos">
      <div className='btn btn-accent mx-auto mt-4 rounded-full'>
        <button>Confira nossos produtos!</button>
      </div>

      
    </Link>

    
  );
};

export default BtnProd;
