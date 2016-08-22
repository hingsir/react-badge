
'use strict';

import React, { PropTypes } from 'react'

export default class ReactBadge extends React.Component {
    // static propTypes = {
    //     count: PropTypes.number,
    //     overflowCount: PropTypes.number,
    //     dot: PropTypes.bool,
    //     background: PropTypes.string,
    //     color: PropTypes.string,
    //     onRemoved: PropTypes.func
    // };
    //
    // static defaultProps = {
    //     count: 0,
    //     overflowCount: 99,
    //     dot: false,
    //     background: '#f50',
    //     color: '#fff',
    //     onRemoved: () => {}
    // };

    render() {
        let {count, overflowCount, dot, background, color, onRemoved} = this.props;
        let displayCount = dot ? '' : count > overflowCount ? `${overflowCount}+` : count;
        let style = {
            background: background,
            color: color,
            borderRadius: '10px',
            fontSize: '12px',
            display: 'inline-block',
            textAlign: 'center'
        }
        if(dot){
            style.width = '8px';
            style.height = '8px';
        }else{
            style.height = '20px';
            style.minWidth = '20px';
            style.lineHeight = '20px';
            style.padding = '0 6px';
            style.boxSizing = 'border-box';
        }
        return (
            <sup style={style} onTouchMove={this.badgeDraging()}
                onTouchEnd={this.badgeDragEnd(onRemoved)}>{displayCount}</sup>
        );
    }
    badgeDraging(){
        return (event) => {
            var target = event.target;
            if(!this.__defaultRect__){
                this.__defaultRect__ = target.getBoundingClientRect();
            }
            target.style.position = 'fixed';
            target.style.left = event.changedTouches[0].pageX + 'px';
            target.style.top = event.changedTouches[0].pageY + 'px';
        }
    }
    badgeDragEnd(onRemoved){
        return (event) => {
            var target = event.target,
                pageX = event.changedTouches[0].pageX,
                pageY = event.changedTouches[0].pageY,
                defaultLeft = this.__defaultRect__.left,
                defaultTop = this.__defaultRect__.top;
            if(Math.abs(pageX - defaultLeft) < 15 && Math.abs(pageY - defaultTop) < 15){
                target.style.left = defaultLeft + 'px';
                target.style.top = defaultTop + 'px';
                target.style.position = 'static';
            }else{
                target.parentNode.removeChild(target);
                onRemoved.call(this, this);
            }
        }
    }
}

ReactBadge.propTypes = {
    count: PropTypes.number,
    overflowCount: PropTypes.number,
    dot: PropTypes.bool,
    background: PropTypes.string,
    color: PropTypes.string,
    onRemoved: PropTypes.func
};

ReactBadge.defaultProps = {
    count: 0,
    overflowCount: 99,
    dot: false,
    background: '#f50',
    color: '#fff',
    onRemoved: () => {}
};
