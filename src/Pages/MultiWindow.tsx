import React, { useState } from 'react';
import Panel from '../elements/Panel';
import Tile from '../elements/Tile';

const MultiWindow = () => {
    const [urls, setUrls] = useState(['', '', '', '']);
    const [activePanelIndex, setActivePanelIndex] = useState(-1);

    const handleSetUrl = (panelIndex: number, newUrl: string) => {
        const newUrls = [...urls];
        newUrls[panelIndex] = newUrl;
        setUrls(newUrls);
        setActivePanelIndex(panelIndex);
    };

    return (
        <div className="h-screen flex">
            {/* Левый верхний угол */}
                <div className="flex justify-center items-center top-0 left-0 w-1/2 h-1/2 bg-blue-900 border-2 border-gray-900">
                    {activePanelIndex !== 0 && (
                        <Tile
                            setUrl={(url) => handleSetUrl(0, url)}
                            className="bg-blue-500 p-4 rounded-lg cursor-pointer"
                        />
                    )}
                    {urls[0] !== '' && (
                        <Panel
                            url={urls[0]}
                            className="flex inset-0 bg-blue-800 p-4 rounded-lg"
                        />
                    )}
                </div>

            {/* Правый верхний угол */}
                <div className="flex justify-center items-center top-0 right-0 w-1/2 h-1/2 bg-blue-900 border-2 border-gray-900">
                    {activePanelIndex !== 1 && (
                        <Tile
                            setUrl={(url) => handleSetUrl(1, url)}
                            className="bg-blue-500 p-4 rounded-lg cursor-pointer"
                        />
                    )}
                    {urls[1] !== '' && (
                        <Panel
                            url={urls[1]}
                            className="absolute inset-0 bg-blue-800 p-4 rounded-lg"
                        />
                    )}
                </div>

            {/* Левый нижний угол */}

                <div className="absolute justify-center items-center bottom-0 left-0 w-1/2 h-1/2 bg-blue-900 border-2 border-gray-900">
                    {activePanelIndex !== 2 && (
                        <Tile
                            setUrl={(url) => handleSetUrl(2, url)}
                            className="bg-blue-500 p-4 rounded-lg cursor-pointer"
                        />
                    )}
                    {urls[2] !== '' && (
                        <Panel
                            url={urls[2]}
                            className="absolute inset-0 bg-blue-800 p-4 rounded-lg"
                        />
                    )}
                </div>
            {/* Правый нижний угол */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-900 border-2 border-gray-900">
                    {activePanelIndex !== 3 && (
                        <Tile
                            setUrl={(url) => handleSetUrl(3, url)}
                            className="bg-blue-500 p-4 cursor-pointer"
                        />
                    )}
                    {urls[3] !== '' && (
                        <Panel
                            url={urls[3]}
                            className="absolute inset-0 bg-blue-800 p-4 rounded-lg"
                        />
                    )}
                </div>
            </div>
    );
};

export default MultiWindow;