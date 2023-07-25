import React from 'react'


const Daikichi = () => {
    const Img1 = 'https://japaclip.com/files/omikuji-daikichi.png';
    return (
        <div>
            <div>大吉が出ました</div>
            <img src={Img1} height={100} width={50} loading='lazy' />
        </div>
    );
};


export default Daikichi