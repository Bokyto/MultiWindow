import React, { useState } from 'react';
import Panel from '../elements/Panel';
import Tile from '../elements/Tile';
import { Rnd, RndResizeCallback } from 'react-rnd';

const MultiWindow = () => {
    const [showPanel1, setShowPanel1] = useState(false);
    const [url1, setUrl1] = useState('');
    const [tileActive, setTileActive] = useState(true);

    const handleSetUrl = (panelIndex: number, newUrl: string) => {
        if (panelIndex === 1) {
            setUrl1(newUrl);
            setShowPanel1(true);
            setTileActive(false); // Делаем плитку неактивной после отрисовки панели
        }
    };

    const handleResize: RndResizeCallback = (_, __, ref) => {
        if (ref) {
            // handle resize logic here
        }
    };

    return (
        <div className="h-screen flex items-stretch justify-center">
            <Rnd
                className="flex bg-blue-500 p-4 rounded-lg"
                minWidth={100}
                minHeight={100}
                default={{
                    x: 0,
                    y: 0,
                    width: '25vw',
                    height: '25vh' // 25% от высоты экрана
                }}
                onResize={handleResize}
            >
                <div className="h-full w-full flex items-center justify-center">
                    {tileActive && <Tile setUrl={(url) => handleSetUrl(1, url)} className="bg-blue-500 p-4 rounded-lg"/>}
                    {showPanel1 && <Panel url={url1} className="w-100 h-100"/>}
                </div>
            </Rnd>
            {/* Повторите для других блоков Tile и Panel */}
        </div>
    );
};

export default MultiWindow;