import React from 'react';

// This is required to attach the proper attributes for iphone 10+ usage and proper muting because react doesn't support the attributes'
function attachCustomAttrs(domNode){
  if(domNode){
    domNode.setAttribute('inline', '');
    domNode.setAttribute('muted', '');
  }
}

export default class ReactMisEnScene extends React.Component {
  render(){
    window.poster = this.props.poster;
    return(
      <video style={styles.video} autoPlay loop poster={this.props.poster} id={this.props.cssID} ref={attachCustomAttrs}>
        <source src={this.props.videoUrl} type="video/mp4" />
      </video>
    );
  }
}

var styles = {
  video: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    height: 'auto',
    width: 'auto',
    zIndex: '-100',
    transform: 'translateX(-50%) translateY(-50%)',
    backgroundImage: `url(${window.poster})`,
    backgroundSize: 'cover'
  }
}