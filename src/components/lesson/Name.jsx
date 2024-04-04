const Name = (props) => {
    if (props.type === "t") {
        return (
            <>
                <td>{props.name}</td>
            </>
        );
    } else {
        return (
            <>
                <h1>{props.name}</h1>
            </>
        );
    }
};
export default Name;
