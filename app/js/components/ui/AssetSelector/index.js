import React, { PropTypes } from 'react';

import styles from './style.scss';

export default class AssetSelector extends React.Component {
  componentWillMount() {
    if (this.props.assets.length) {
      this.props.input.onChange(this.props.assets[0].uuid);
    }
  }
  render() {
    const { assets, input: { value, onChange } } = this.props;
    const options = assets.map(a => ({
      value: a.uuid,
      label: a.shortName,
    }));

    // function handleChange(e) {
    //   const value = e.target.value;
    //   const asset = assets.find(a => a.uuid === value);
    //   onChange(asset);
    // }

    return (
      <select
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map(o =>
          <option value={o.value} key={o.value}>
            {o.label.toUpperCase()}
          </option>,
        )}
      </select>
    );
  }
}

AssetSelector.propTypes = {
  assets: PropTypes.array.isRequired,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }),
};
