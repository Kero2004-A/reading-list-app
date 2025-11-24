import { BookOpen } from 'lucide-react';
import BookCard from './BookCard';

function BookList({ books, onToggleRead, onDelete }) {
  if (books.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-md">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">
          No books found. Start by adding a new book!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookList;