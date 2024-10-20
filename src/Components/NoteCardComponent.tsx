import IconEditNote from '../utility/IconEditNote';
import IconDeleteNote from '../utility/IconDeleteNote';
import DumyNotesList from '../__data__/DumyNotesList';

const NoteCardComponent = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {DumyNotesList.map((note) => (
                    <div key={note.id} className="bg-yellow-200 border shadow-md rounded-2xl p-5 hover:shadow-2xl flex flex-col">
                        <div className="mb-5 flex-grow">
                            <h1 className="text-xl font-bold mb-3">{note.title}</h1>
                            <p className="font-base text-sm text-gray-800">{note.description}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-700 text-sm mt-auto mb-auto">{note.date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</div>
                            <div className="flex gap-2">
                                <button onClick={() => { alert('Edit Note') }} className="bg-gray-800 px-5 py-2 rounded-md">
                                    <IconEditNote color={'white'} size={20} />
                                </button>
                                <button onClick={() => { alert('Delete Note') }} className="bg-gray-800 px-5 py-2 rounded-md">
                                    <IconDeleteNote color={'white'} size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default NoteCardComponent;
