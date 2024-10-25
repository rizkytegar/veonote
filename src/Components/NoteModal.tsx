import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNotes } from './NotesProvider';

const noteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: 'Title must be at least 4 characters' })
    .max(100, { message: 'Title must be at most 20 characters' }),
  description: z
    .string()
    .trim()
    .min(6, { message: 'Description must be at least 6 characters' })
    .max(1000, { message: 'Description must be at most 1000 characters' }),
});

type NoteSchema = z.infer<typeof noteSchema>;

export default function NoteModal() {
  const { addNote, editNote, selectedNote, setSelectedNote } = useNotes();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NoteSchema>({
    resolver: zodResolver(noteSchema),
  });

  useEffect(() => {
    if (selectedNote) reset(selectedNote);
  }, [selectedNote, reset]);

  const onSubmit: SubmitHandler<NoteSchema> = async (data) => {
    try {
      if (selectedNote) {
        editNote(selectedNote.id, data.title, data.description);
      } else {
        addNote(data.title, data.description);
      }
      reset();
      setSelectedNote(null);
      (document?.getElementById('note_modal') as HTMLDialogElement)?.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog id="note_modal" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">
          {selectedNote ? 'Edit' : 'Add'} Note
        </h3>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full input input-bordered"
              {...register('title')}
            />
            {errors.title && (
              <p className="mt-2 text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div>
            <textarea
              className="w-full textarea textarea-bordered"
              placeholder="Description"
              {...register('description')}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <button type="submit" className="w-full btn btn-primary">
            {selectedNote ? 'Edit' : 'Add'} Note
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
