
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from '../index';

let onRemoved = (inst) => {
    console.log(inst);
    alert('onremoved callback');
}

const App = (props) => (
    <div>
        <main></main>
        <footer>
            <ul class="clearfix">
                <li>消息<span id="msg-badge">
                    <Badge count={8} onRemoved={onRemoved}></Badge>
                </span></li>
                <li>联系人<span id="friend-badge">
                    <Badge count={100} onRemoved={onRemoved}></Badge>
                </span></li>
                <li>动态<span id="feed-badge">
                    <Badge dot={true}></Badge>
                </span></li>
            </ul>
        </footer>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('container'));
