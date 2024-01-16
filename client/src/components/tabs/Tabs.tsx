"use client"
import React, { useState } from 'react';
import Tab from './Tab';
import './tabs.scss';

const TabsPage = () => {
  const tabs = [
    { index: 1, label: 'Поиск по номеру' },
    { index: 2, label: 'Поиск по марке' },
    { index: 3, label: 'Поиск по товарам' },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: React.SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='search__inner'>
      <div className="search__tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab.index}
            index={tab.index}
            activeTab={activeTab}
            onClick={handleTabChange}
            label={tab.label}
          />
        ))}
      </div>

      <div className="search__content">
        {tabs.map((tab) => (
          <div key={tab.index} className={`search__content-item ${activeTab === tab.index ? 'active' : ''}`}>
            <form className='search__content-form'>
              <input className='search__content-input' type="text" placeholder={`Введите ${tab.label.split(' ')[2].toLowerCase()}`}/>
              <button className='search__content-btn' type='submit'>искать</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsPage;
