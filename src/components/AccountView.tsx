import React from 'react';
import Header from "./Header";

export const AccountView = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-card-light-blue">
            {/* What's New Section */}
            <div className="w-full max-w-4xl mb-8 p-4 border border-transparent hover:border-duke-blue bg-card-sky-blue">
                <h1 className="text-duke-blue">What's New!</h1>
                <p className="text-duke-blue">[Change log notes]</p>
            </div>
            
            {/* Extra Sections */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="p-4 border border-transparent hover:border-duke-blue bg-card-sky-blue">
                    <h2 className="text-duke-blue">Extra</h2>
                    <p className="text-duke-blue">[Misc. / Links]</p>
                </div>
                <div className="p-4 border border-transparent hover:border-duke-blue bg-card-sky-blue">
                    <h2 className="text-duke-blue">Extra</h2>
                    <p className="text-duke-blue">[Misc. / Links]</p>
                </div>
                <div className="p-4 border border-transparent hover:border-duke-blue bg-card-sky-blue">
                    <h2 className="text-duke-blue">Extra</h2>
                    <p className="text-duke-blue">[Misc. / Links]</p>
                </div>
            </div>
        </div>
    );
};

export default AccountView;
