import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@deanacus/upstart';

const getValues = (type) => {
  if (type.name === 'enum') {
    return type.value.map((val) => val.value).join(', ');
  }

  if (type.name === 'union') {
    return type.value.map((val) => {
      if (!val.value) {
        return val.name;
      }
      return `${val.name} ${val.value.name}`;
    }).join(', ');
  }

  return null;
};

export const Prop = ({
  name, description, type, defaultValue,
}) => {
  console.log({
    name, description, type, defaultValue,
  });
  const title = getValues(type);
  return (
    <TableRow>
      <TableCell padding="px-1">
        <code><small>{name}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <code><small title={title}>{type.name}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <code><small>{defaultValue ? defaultValue.value : 'Required'}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <small>{description}</small>
      </TableCell>
    </TableRow>
  );
};

Prop.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  defaultValue: PropTypes.shape({ value: PropTypes.string }),
};

Prop.defaultProps = {
  description: null,
  defaultValue: null,
};

export default Prop;
