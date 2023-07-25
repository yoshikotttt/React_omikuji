import React from 'react'

const Kichi = () => {
    const Img3 = 'https://japaclip.com/files/omikuji-kichi.png';
    return (
        <div>
            <div className='two'>吉が出ました</div>
            <img src={Img3} height={100} width={50} loading='lazy' />
        </div>
    )
}

export default Kichi