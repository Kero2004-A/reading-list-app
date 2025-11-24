import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import FilterButtons from './components/FilterButtons';
import Statistics from './components/Statistics';

function App() {
  const [books, setBooks] = useLocalStorage('readingList', []);
  const [filter, setFilter] = useState('all');

  const addBook = (bookData) => {
    const newBook = {
      id: Date.now(),
      ...bookData,
      done: false
    };
    setBooks([...books, newBook]);
  };

  const toggleBookStatus = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, done: !book.done } : book
    ));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const getFilteredBooks = () => {
    switch(filter) {
      case 'completed':
        return books.filter(book => book.done);
      case 'notCompleted':
        return books.filter(book => !book.done);
      default:
        return books;
    }
  };

  const filteredBooks = getFilteredBooks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">My Reading List 📚</h1>
          </div>
          <p className="text-gray-600">Track the books you want to read</p>
        </div>

        {/* Add Book Form */}
        <BookForm onAddBook={addBook} />

        {/* Filter Buttons */}
        <FilterButtons 
          filter={filter}
          onFilterChange={setFilter}
          books={books}
        />

        {/* Books List */}
        <BookList 
          books={filteredBooks}
          onToggleRead={toggleBookStatus}
          onDelete={deleteBook}
        />

        {/* Statistics */}
        <Statistics books={books} />
      </div>
    </div>
  );
}

export default App;