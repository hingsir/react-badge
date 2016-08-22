
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from '../index';

let onRemoved = (inst) => {
    console.log(inst)
    alert('onremoved callback')
}

ReactDOM.render((
    <Badge count={8} onRemoved={onRemoved}>
    </Badge>
), document.getElementById('msg-badge'));

ReactDOM.render((
    <Badge count={100} onRemoved={onRemoved}>
    </Badge>
), document.getElementById('friend-badge'));

ReactDOM.render((
    <Badge dot={true}>
    </Badge>
), document.getElementById('feed-badge'));
