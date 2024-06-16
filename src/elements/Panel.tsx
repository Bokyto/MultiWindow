import React from 'react';
interface PanelProps {
    url: string;
    className?: string;
}
const Panel: React.FC<PanelProps> = ({ url, className }) => {
    return (
        <iframe title="Website Viewer" src={url} width="100%" height="100%" />
    );
};
export default Panel;