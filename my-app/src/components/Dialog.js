import React, { useState } from 'react';
import { Portal } from 'react-portal';

const Dialog = ({ title, buttonName, children, onClose }) => {

    const [showDialog, setShowDialog] = useState(false);

    const handleOpenDialog = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            <button onClick={handleOpenDialog}>{buttonName}</button>
            {showDialog && (
                <div>
                    <Portal>
                        <div className="dialog-overlay">
                            <div className="dialog">
                                <div className="dialog-header">
                                    <h2>{title}</h2>
                                    <button onClick={handleCloseDialog}>×</button>
                                </div>
                                <div className="dialog-body">{children}</div>
                            </div>
                        </div>
                    </Portal>
                </div>
            )}
        </>
    );
};

export default Dialog;