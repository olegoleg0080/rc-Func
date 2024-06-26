import { Modal } from "@mui/material";
import {delToDo, fetchToDo } from "api";
import { DataView } from "components/DataView/DataView";
// import { Loader } from "components/Loader/Loader";
import { ListToDo } from "components/form/FormL";
// import FormToDo from "components/form/FormT";
import {
    ButtonForDelFalse,
    ButtonForDelTrue,
} from "components/lesson/modal/Modal.styled";
import { SortForm } from "components/sort/SortForm";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const BtnContent = ({ agree, noArgee }) => {
    return (
        <>
            <h1>Are you serious?</h1>
            <ButtonForDelTrue onClick={() => agree(true)}>
                True
            </ButtonForDelTrue>
            <ButtonForDelFalse onClick={() => noArgee()}>
                False
            </ButtonForDelFalse>
        </>
    );
};
export const ToDo = () => {
    //* state
    const [showModal, setShowModal] = useState(false);
    const [selectEl, setSelectEl] = useState("");
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [deleteID, setDeleteID] = useState("0");
    
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
            setList(res);
        };
        const localStorageGetSelectedEl = () => {
            const selectData = localStorage.getItem("selectEl");
            const selectDataElement = JSON.parse(selectData);
            if (selectDataElement) {
                setSelectEl(selectDataElement);
            }
        };
        try {
            getData();
            localStorageGetSelectedEl();
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
    //*Functions

    const handleSortItems = async (name, value) => {
        setFilters({ ...filters, [name]: value });
    };
    const handleSelectItem = (e, dataElement) => {
        if (e.target.nodeName !== "BUTTON") {
            setSelectEl(dataElement);
            localStorage.setItem("selectEl", JSON.stringify(dataElement));
        } else return;
    };
    const visibleList = (list) => {
        if (filters.filterLevel === "all") {
            return list.filter(
                (item) =>
                    item.title
                        .toLowerCase()
                        .includes(filters.filterText.toLowerCase()) ||
                    item.description
                        .toLowerCase()
                        .includes(filters.filterText.toLocaleLowerCase())
            );
        } else {
            return list.filter(
                (item) =>
                    (item.title
                        .toLowerCase()
                        .includes(filters.filterText.toLowerCase()) ||
                        item.description
                            .toLowerCase()
                            .includes(
                                filters.filterText.toLocaleLowerCase()
                            )) &&
                    item.level === filters.filterLevel
            );
        }
    };

    const handleDeleteItem = (value) => {
        if (typeof value === "string") {
            setDeleteID(value);
            setShowModal(true);
        } else if (value === true) {
            handleDeleteConfirm();
        }
    };
    const handleDeleteConfirm = async () => {
        try {
            setLoading(true);
            setError(null);
            const deletedToDo = await delToDo(deleteID);
            setList((list) =>
                list.filter((item) => item.id !== deletedToDo.id)
            );
            toast.success("Delete succes");
            if (selectEl.id === deleteID) {
                setSelectEl("");
                localStorage.removeItem("selectEl");
            }
        } catch (error) {
            toast.error("Del error");
            setError(error);
        } finally {
            setShowModal(false);
            setLoading(false);
        }
    };
    const togleModal = () => {
        setShowModal((showModal) => !showModal);
    };

    return (
        <>
            <br />

            <SortForm onSort={handleSortItems} />
            {list.length > 0 && (
                <ListToDo
                    list={visibleList(list)}
                    onDelete={handleDeleteItem}
                    onSelect={handleSelectItem}
                />
            )}
            <DataView dataSelect={selectEl} />
            {showModal && (
                <Modal onClose={togleModal}>
                    <BtnContent agree={handleDeleteItem} noArgee={togleModal} />
                </Modal>
            )}
            {error && <p>`${error}`</p>}
        </>
    );
};
