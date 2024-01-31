import React from 'react';
import './tabs.scss';
interface TabProps {
  index: number;
  activeTab: number;
  onClick: (index: number) => void;
  label: string;
}

const Tab: React.FC<TabProps> = ({ index, activeTab, onClick, label }) => (
  <a
    onClick={() => onClick(index)}
    className={`search__tabs-item ${activeTab === index ? 'active' : ''}`}
  >
    {label}
  </a>
);

export default Tab;
