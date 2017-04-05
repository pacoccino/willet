import React, { PropTypes } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Component({}) {
  return (
    <div style={styles.container}>
      <a>Exchange</a>
      <a>Send</a>
      <a>Receive</a>
    </div>
  );
}

Component.propTypes = {
};

export default Component;
