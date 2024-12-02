function Tabs({ activeTab, setActiveTab, onTabChange }) {
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange();
  };

  return (
    <div className="tabs">
      <button
        id="all-tab"
        className={activeTab === 'all' ? 'active-tab' : ''}
        onClick={() => handleTabChange('all')}
      >
        All
      </button>
      <button
        id="favorites-tab"
        className={activeTab === 'favorites' ? 'active-tab' : ''}
        onClick={() => handleTabChange('favorites')}
      >
        Favorites
      </button>
    </div>
  );
}

export default Tabs;