import { createToDo, fetchToDo } from "api";
import { ListToDo } from "components/form/FormL";
import FormToDo from "components/form/FormT";
import { SortForm } from "components/sort/SortForm";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const App = () => {
    //* state
    const [list, setList] = useState([]);
    const [selectEl, setSelectEl] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [deleteID, setDeleteID] = useState(-1);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        filterText: "",
        filterLevel: "all",
    });

    // * consts

    //*componentDidMounts
    useEffect(() => {
        setLoading(true);
        setError(null);
        const getData = async () => {
            const res = await fetchToDo();
            console.log(res);
            setList(res);
        };
        try {
            getData();
        } catch (error) {
            toast.error("Get Data ERROR");
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    //*componentDidUpdates
    useEffect(() => {
        setLoading(false); //?
    }, [list]);

    useEffect(() => {}, [filters]);
    //*Functions
    const handleAddItem = (item) => {
        const createElementFatch = async () => {
            const addToDo = await createToDo(item);
            setList((list) => [...list, addToDo]);
        };
        try {
            setLoading(true);
            setError(null);
            createElementFatch();
        } catch (error) {
            toast.error("Add error");
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSortItems = async (sortFilter) => {
        setFilters({ ...filters, ...sortFilter });
    };
    const visibleList = (list) => {
        return list.filter(
            (item) =>
                item.title
                    .toLowerCase()
                    .includes(filters.filterText.toLowerCase()) ||
                item.description.toLowerCase().includes(filters.filterText)
        );
    };
    return (
        <>
            <FormToDo onAdd={handleAddItem} />
            <br />
            <SortForm onSort={handleSortItems} />
            {list.length > 0 && <ListToDo list={visibleList(list)} />}
        </>
    );
};
