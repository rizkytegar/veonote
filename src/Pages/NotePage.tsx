import NoteCardComponent from '../Components/NoteCardComponent';
import PaginationComponent from '../Components/PaginationComponent';
import HeaderComponent from '../Components/HeaderComponent';

const NotePage = () => {
    return (
        <div className="flex flex-col px-4 md:px-8 lg:px-12 py-4 gap-4">
            <div className="">
                <HeaderComponent />
            </div>
            <div className="h-full pb-5">
                <NoteCardComponent />
            </div>
            <div className="">
                <PaginationComponent />
            </div>
        </div>
    )
};

export default NotePage;
