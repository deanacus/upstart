import React from 'react';
import {Table, TH, TD, THead, TR} from '@deanacus/upstart';

const Row = ({name, description, required, type, defaultValue}) => (
<TR>
  <TD>{name}</TD>
  <TD>
      {
        (type.name === 'enum' || type.name === 'union') ?
        (
          type.value.map( value => <small>test {value.name}</small>)
        ) : (
          type.value
        )
      }
  </TD>
  <TD>{required ? 'true' : 'false'}</TD>
  <TD>{defaultValue ? defaultValue.value : ''}</TD>
  <TD>{description}</TD>
</TR>
)

export const PropsTable = ({component}) => {
  const componentProps = component.__docgenInfo.props;
  const propsKeys = componentProps && Object.keys(componentProps);
  console.log(componentProps)
  return(
    <Table>
      <THead>
        <TH>Prop</TH>
        <TH>Type</TH>
        <TH>Required</TH>
        <TH>DefaultValue</TH>
        <TH>Description</TH>
      </THead>
      <tbody>
        {
          propsKeys.map( prop => <Row {...componentProps[prop]} name={prop} />)
        }
      </tbody>
    </Table>
  )
}