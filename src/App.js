import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Freya" animal="Dog" breed="American Bulldog" />
            <Pet name="Lizzie" animal="Leopard Gecko" breed="Regular" />
            <Pet name="Max" animal="Cat" breed="Tabby" />
        </div>
    );
};


render(React.createElement(App), document.getElementById("root"));
