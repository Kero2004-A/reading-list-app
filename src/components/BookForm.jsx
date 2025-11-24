import { useState } from 'react';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !author.trim()) {
      alert('Please enter both book title and author name');
      return;
    }

    onAddBook({
      title: title.trim(),
      author: author.trim()
    });

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Book Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Atomic Habits"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Author Name
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="e.g., James Clear"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition shadow-md hover:shadow-lg"
        >
          Add Book +
        </button>
      </form>
    </div>
  );
}

export default BookForm;