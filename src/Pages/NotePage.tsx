import React from 'react';
import NoteCard from '../Components/NoteCard';
const NotePage: React.FC = () => {

    const data = [   
        {"title":"Example Note",
        "descryption":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo eveniet beatae, doloremque repellendus, saepe eligendi, nobis nam alias at ducimus perferendis cupiditate nemo assumenda cumque exercitationem impedit soluta modi.",
        "date":"17 October,2024"
        }
        ,
        {"title":"First Note",
        "descryption":"This data is typed, we can use fetch and retrieve our data from server through database or can store in browser of user for simpler application",
        "date":"17 October,2024"
        },
        {"title":"Second Note",
        "descryption":"We can push new datasets into this data for creating new notes",
        "date":"17 October,2024"
            },
            {"title":"Example Note",
                "descryption":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo eveniet beatae, doloremque repellendus, saepe eligendi, nobis nam alias at ducimus perferendis cupiditate nemo assumenda cumque exercitationem impedit soluta modi.",
                "date":"17 October,2024"
                }
                ,
                {"title":"First Note",
                "descryption":"This data is typed, we can use fetch and retrieve our data from server through database or can store in browser of user for simpler application",
                "date":"17 October,2024"
                },
                {"title":"Second Note",
                "descryption":"We can push new datasets into this data for creating new notes",
                "date":"17 October,2024"
                    },
                    {"title":"Example Note",
                        "descryption":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo eveniet beatae, doloremque repellendus, saepe eligendi, nobis nam alias at ducimus perferendis cupiditate nemo assumenda cumque exercitationem impedit soluta modi.",
                        "date":"17 October,2024"
                        }
                        ,
                        {"title":"First Note",
                        "descryption":"This data is typed, we can use fetch and retrieve our data from server through database or can store in browser of user for simpler application",
                        "date":"17 October,2024"
                        },
                        {"title":"Second Note",
                        "descryption":"We can push new datasets into this data for creating new notes",
                        "date":"17 October,2024"
                            },
    ]
    return(
        <>
        <div className='flex flex-row flex-wrap'>
        {data.map((note ,index)=>(
            <NoteCard key={index} title={note.title} descryption={note.descryption} date={note.date}/>
        ))}
        </div>
        </>
        

    )
};

export default NotePage;
