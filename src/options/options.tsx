import React from 'react'
import {createRoot} from 'react-dom/client'

class App extends React.Component {
    render() {
        return (
            <div className = {'chrome.extension'}>
                <img src="icon.png"></img>
            </div>
        )
    }
}

const documentRoot = document.createElement('div');
document.body.appendChild(documentRoot);
const root = createRoot(documentRoot);
root.render(<App />);