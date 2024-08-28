
import React from 'react'
import { useState } from 'react';

const Diagram = () => {
    const [color, setColor] = useState('#000000');
    const [percentage, setPercentage] = useState(0);
    const [title, setTitle] = useState('');

    const handleColorChange = (e) => setColor(e.target.value);
    const handlePercentageChange = (e) => setPercentage(e.target.value);
    const handleTitleChange = (e) => setTitle(e.target.value);

    return (
        <div style={{ padding: '20px', border: '1px solid black', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    placeholder="Название диаграммы"
                    value={title}
                    onChange={handleTitleChange}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="number"
                    min="0"
                    max="100"
                    value={percentage}
                    onChange={handlePercentageChange}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            width: '50px',
                            height: '100px',
                            backgroundColor: '#f0f0f0',
                            position: 'relative',
                            marginBottom: '10px'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: `${percentage}%`,
                                backgroundColor: color
                            }}
                        ></div>
                    </div>
                    <div>{title || 'назв.'}</div>
                </div>
            </div>
        </div>
    );
};

export default Diagram;
