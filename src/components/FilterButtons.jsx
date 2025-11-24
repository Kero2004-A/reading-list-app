function FilterButtons({ filter, onFilterChange, books }) {
  const filters = [
    { key: 'all', label: 'All', count: books.length },
    { key: 'completed', label: 'Completed', count: books.filter(b => b.done).length },
    { key: 'notCompleted', label: 'Not Completed', count: books.filter(b => !b.done).length }
  ];

  const getFilterButtonStyle = (filterKey) => {
    switch (filterKey) {
      case 'all':
        return 'bg-purple-600 text-white shadow-lg';
      case 'completed':
        return 'bg-green-600 text-white shadow-lg';
      case 'notCompleted':
        return 'bg-orange-600 text-white shadow-lg';
      default:
        return 'bg-purple-600 text-white shadow-lg';
    }
  };

  return (
    <div className="flex gap-3 mb-6 flex-wrap justify-center">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            filter === key
              ? getFilterButtonStyle(key)
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;