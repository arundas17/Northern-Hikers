import React, { useState } from 'react'
import './HeelBlend.css';
const HeelBlend = ({setHeelBlend}) => {
    const slides = [
        { title: "heel blend1", desc: "lorem ipsum dolorn sfdfdfgsdfaggfhgdgfghsdghdgbvvc" },
        { title: "heel blend2", desc: "lorem ipsum dolorn sfdfdfgsdfaggfhgdgfghsdghdgbvvc" },
        { title: "heel blend3", desc: "lorem ipsum dolorn sfdfdfgsdfaggfhgdgfghsdghdgbvvc" },
        { title: "heel blend4", desc: "lorem ipsum dolorn sfdfdfgsdfaggfhgdgfghsdghdgbvvc" },
        { title: "heel blend5", desc: "lorem ipsum dolorn sfdfdfgsdfaggfhgdgfghsdghdgbvvc" }
    ];

    const [currentindex, setCurrentIndex] = useState(0);

    const handleRest = () => setCurrentIndex(0);

    const handlePrev = () => {
        if (currentindex > 0) {
            setCurrentIndex(currentindex - 1);
        }
    };

    const handleNext = () => {
        if (currentindex < slides.length - 1) {
            setCurrentIndex(currentindex + 1);
        }
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
    };

    const disabledStyle = {
        backgroundColor: '#ccc',
        cursor: 'not-allowed'
    };

    return (
        <div className='heelblend'>
            <div className="heelbend-outer">
                <div className="heelblend-contents">
                <div className="control-Heelblend" style={{ marginBottom: '20px' }}>
                <button 
                    onClick={handleRest} 
                    disabled={currentindex === 0}
                    style={{ 
                        ...buttonStyle, 
                        ...(currentindex === 0 ? disabledStyle : {}) 
                    }}
                >
                    Reset
                </button>

                <button 
                    onClick={handlePrev} 
                    disabled={currentindex === 0}
                    style={{ 
                        ...buttonStyle, 
                        ...(currentindex === 0 ? disabledStyle : {}) 
                    }}
                >
                    Prev
                </button>

                <button 
                    onClick={handleNext} 
                    disabled={currentindex === slides.length - 1}
                    style={{ 
                        ...buttonStyle, 
                        ...(currentindex === slides.length - 1 ? disabledStyle : {}) 
                    }}
                >
                    Next
                </button>
            </div>
            <div className="heelblend-contents" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', display: 'inline-block' }}>
                <div className="heelblend-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {slides[currentindex].title}
                </div>
                <div className="heelblend-desc" style={{ fontSize: '16px', color: '#555' }}>
                    {slides[currentindex].desc}
                </div>
            </div>
                </div>
           
               <div className="heelblend-close" onClick={()=>setHeelBlend(false)}>
                close
               </div>
            </div>
          
        </div>
    );
};

export default HeelBlend;
