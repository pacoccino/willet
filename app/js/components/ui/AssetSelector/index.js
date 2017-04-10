import React, { PropTypes } from 'react';

export function AssetSelector({ assets, input: { value, onChange } }) {
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
    <select value={value} onChange={onChange}>
      {options.map(o =>
        <option value={o.value} key={o.value}>
          {o.label}
        </option>
      )}
    </select>
  );
}

AssetSelector.propTypes = {
  assets: PropTypes.array.isRequired,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }),
};