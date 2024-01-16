// Tab.jsx
import React from 'react';

interface TabProps {
  index: number;
  activeTab: number;
  onClick: (index: number) => void;
  label: string;
}

const Tab: React.FC<TabProps> = ({ index, activeTab, onClick, label }) => (
  <a onClick={() => onClick(index)} className={activeTab === index ? 'active' : 'search__tabs-item'}>
    {label}
  </a>
);

export default Tab;

