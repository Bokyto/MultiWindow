import React, { useState } from 'react';

interface TileProps {
    setUrl: (url: string) => void;
    className?: string;
}

const Tile: React.FC<TileProps> = ({ setUrl, className}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [link, setLink] = useState('');

    const handleSaveLink = () => {
        if (link.trim() === "") {
            alert("Please enter a valid link");
            return;
        }

        setUrl(link);

        setModalOpen(false);
        setLink("");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSaveLink();
        }
    };

    return (
        <div className="relative">
            <div className={`absolute inset-0 bg-blue-900 ${modalOpen ? "" : ""} flex justify-center items-center`} style={{ opacity: modalOpen ? 1 : 1 }}>
                {modalOpen ? (
                    <div className="bg-white rounded-lg p-2 flex items-center justify-between">
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="border p-2 rounded"
                        />
                        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handleSaveLink}>
                            Save
                        </button>
                    </div>
                ) : (
                    <button className="bg-transparent border-none cursor-pointer" onClick={() => setModalOpen(true)}>
                        <span className="text-lg text-gray-400" role="img" aria-label="large-plus">➕</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Tile;