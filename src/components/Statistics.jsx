function Statistics({ books }) {
  const completedCount = books.filter(book => book.done).length;
  const totalCount = books.length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  if (totalCount === 0) return null;

  return (
    <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-center">
      <p className="text-gray-700">
        You've read <span className="font-bold text-green-600">{completedCount}</span> out of{' '}
        <span className="font-bold text-purple-600">{totalCount}</span> books
        ({completionPercentage}%)
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
        <div
          className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
}

export default Statistics;