import { Check, Trash2 } from 'lucide-react';

function BookCard({ book, onToggleRead, onDelete }) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 transition hover:shadow-xl ${
      book.done ? 'border-2 border-green-400' : ''
    }`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`text-xl font-bold ${
              book.done ? 'text-gray-500 line-through' : 'text-gray-800'
            }`}>
              {book.title}
            </h3>
            {book.done && (
              <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
            )}
          </div>
          <p className="text-gray-600">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
        </div>
        
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onToggleRead(book.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              book.done
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {book.done ? 'Mark Unread' : 'Mark as Read'}
          </button>
          
          <button
            onClick={() => onDelete(book.id)}
            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            title="Delete book"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;