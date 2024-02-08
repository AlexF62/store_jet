import React from 'react'

interface AsideTitleProps {
    title: string;
    className: string;
  }

const AsideTitle: React.FC<AsideTitleProps> = ({title, className}) => {
  return <a className={className}>{title}</a>
}

export default AsideTitle