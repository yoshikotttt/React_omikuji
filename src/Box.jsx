import React from 'react'

const Box = () => {
    const Img5 = 'https://jpnculture.net/wp-content/uploads/2015/10/syougatsu2_omijikuji2.jpg';
  return (
      <div>
        <img src={Img5} height={100} width={50} loading='lazy' />
        </div>
  )
}

export default Box