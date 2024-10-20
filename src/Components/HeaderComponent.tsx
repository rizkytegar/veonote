import IconAddNote from '../utility/IconAddNote';
const HeaderComponent = () => {
    return (
        <div className="flex gap-2 justify-between">
            <div>
            </div>
            <div>
                <button onClick={() => { alert('Add Note') }} className="flex inline-flex text-white bg-gray-800 px-7 py-2 rounded-md">
                    <IconAddNote color={'white'} size={24} /> Add Note
                </button>
            </div>
        </div>
    );
};

export default HeaderComponent; 