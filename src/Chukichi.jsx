import React from 'react'

const Chukichi = () => {
    const Img2 = 'https://japaclip.com/files/omikuji-chukichi.png';
  return (
      <div>
        <div className='one'>中吉が出ました</div>
        <img src={Img2} height={100} width={50} loading='lazy' />
        </div>
  )
}

export default Chukichi