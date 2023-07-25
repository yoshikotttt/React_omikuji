import React from 'react'

const Kyou = () => {
    const Img4 = 'https://japaclip.com/files/omikuji-kyo.png';
    return (
        <div>
            <div className='three'>凶が出ました</div>
            <img src={Img4} height={100} width={50} loading='lazy' />
        </div>
    )
}

export default Kyou