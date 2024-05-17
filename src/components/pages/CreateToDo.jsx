import { createToDo } from "api";
import { Loader } from "components/Loader/Loader";
import FormToDo from "components/form/FormT";
import { useState } from "react";
import toast from "react-hot-toast";

export const CreateToDo = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAddItem = async (item) => {
        try {
            setLoading(true);
            setError(null);
            await createToDo(item);
        } catch (error) {
            toast.error("Add error");
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <FormToDo onAdd={handleAddItem} />
            {loading && <Loader />}
        </>
    );
};
