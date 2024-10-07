import './App.css';
import SearchButtonComponent from './Components/SearchButtonComponent';

export default function App() {
  const handleSearchClick = () => {
    console.log("Search button clicked");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-900 underline">
        Veo Note
      </h1>
      <SearchButtonComponent onSearch={handleSearchClick} />
    </>
  );
}
