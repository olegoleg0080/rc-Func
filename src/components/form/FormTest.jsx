import { useLocalStorage } from "hooks/useLocalStorage";

export const FormTest = () => {
    const [userName, setUserName] = useLocalStorage(
        "userName",
        () => JSON.parse(localStorage.getItem("userName")) ?? ""
      );
      const [userLastName, setUserLastName]=useLocalStorage(
        "userLastName",
        () => JSON.parse(localStorage.getItem("userName")) ?? ""
      );

    const handelName = (e) => {
        setUserName(e.target.value);
    };
    const handelLastName = (e) => {
        setUserLastName(e.target.value);
    };




    return (
        <form>
            <label>
                Name <input type="text" value={userName} onChange={handelName} />
            </label>
            <label>
                LastName{" "}
                <input
                    type="text"
                    value={userLastName}
                    onChange={handelLastName}
                />
            </label>
        </form>
    );
};
