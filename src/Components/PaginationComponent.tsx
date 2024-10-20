const PaginationComponent = () => {
    return (
        <div className="flex gap-2 justify-end">
            <button onClick={() => { alert('Prev') }} className="text-white bg-gray-800 px-7 py-2 rounded-md">
                Prev
            </button>
            <button onClick={() => { alert('Next') }} className="text-white bg-gray-800 px-7 py-2 rounded-md">
                Next
            </button>
        </div>
    );
};

export default PaginationComponent; 