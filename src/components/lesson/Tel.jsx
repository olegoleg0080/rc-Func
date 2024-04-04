const Tel = (props) => {
    if (props.type==='t') {
        return(
            <>
                <td>{props.tel}</td>
            </>
        );
    }
    return(
        <>
            <p>{props.tel}</p>
        </>
    );
};
export default Tel;
