import React, { PropTypes } from 'react';
import Clipboard from 'clipboard';

import styles from './style.scss';

class ClipboardBtn extends React.Component {
  componentDidMount() {
    new Clipboard(".clipboard-data");
  }

  render() {
    return (
      <i
        className={`${styles.btn} clipboard-data fa fa-clipboard`}
        data-clipboard-text={this.props.data}
      />
    );
  }
}

ClipboardBtn.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ClipboardBtn;
