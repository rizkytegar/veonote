import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-sm mx-auto mt-5">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          type="text"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search notes by title or content..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBarComponent;


