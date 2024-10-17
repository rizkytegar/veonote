import React from 'react';
import bin from '../../public/bin.png'
import write from '../../public/write.png'
interface NoteCardsProps{
    title:string;
    descryption:string;
    date:string;
}
const NoteCard: React.FC <NoteCardsProps>= ({title,descryption,date}) => {

    

    return(
        <div className='flex flex-col border flex-wrap border-gray-500 rounded m-3 bg-slate-200 h-max lg:w-[450px]  md:w-[320px] sm:w-[80vw]'>
        <div>
            <h1 className='text-3xl font-bold m-4'>{title}</h1>
        </div>
        <div>
            <p className='font-mono  ml-4 ' >{descryption}</p>
        </div>
        <div className='flex flex-row'>
        <div className=' m-4'>{date}</div>
        <img src={write} className='w-6 h-6  self-center relative right-0 ml-auto mr-3'></img>
        <img src={bin} className='w-6 h-6  self-center relative right-0 mr-4 '></img>
        </div>
        </div>
    )
};

export default NoteCard;
