import { useTheme } from "./ThemeProvider";
import IconAddNote from "../utility/IconAddNote";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useNotes from "../hooks/useNotes";

const addNoteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(4, { message: "Title must be at least 4 characters" })
    .max(100, { message: "Title must be at most 20 characters" }),
  description: z
    .string()
    .trim()
    .min(6, { message: "Description must be at least 6 characters" })
    .max(1000, { message: "Description must be at most 1000 characters" }),
});

type AddNoteSchema = z.infer<typeof addNoteSchema>;

export default function AddNoteModal() {
  const { theme } = useTheme();
  const { addNote, notes } = useNotes();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddNoteSchema>({
    resolver: zodResolver(addNoteSchema),
  });

  const onSubmit: SubmitHandler<AddNoteSchema> = async (data) => {
    try {
      addNote(data.title, data.description);
      reset();
      (document?.getElementById("add_note") as HTMLDialogElement)?.close();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(notes, "notes");
  return (
    <>
      <button
        className={`btn border-none px-7 ${
          theme === "light"
            ? "bg-gray-200 text-black hover:bg-gray-300"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
        onClick={() =>
          (
            document?.getElementById("add_note") as HTMLDialogElement
          )?.showModal()
        }
      >
        <IconAddNote color={theme === "light" ? "black" : "white"} size={24} />{" "}
        Add Note
      </button>
      <dialog id="add_note" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add Note</h3>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                type="text"
                placeholder="Title"
                className="w-full input input-bordered"
                {...register("title")}
              />
              {errors.title && (
                <p className="mt-2 text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div>
              <textarea
                className="w-full textarea textarea-bordered"
                placeholder="Description"
                {...register("description")}
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Add Note
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
