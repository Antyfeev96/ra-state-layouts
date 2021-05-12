import React from 'react'

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  const name = `material-icons ${icon}`
  return ( 
    <i className={name} onClick={onSwitch}>{icon}</i> 
  )
}
