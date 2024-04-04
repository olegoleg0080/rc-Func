const Image = (props) => {
    if (props.type === "t") {
        return (
            <td>
                <img src={props.imgSrc} alt="IMG" />
            </td>
        );
    } else
        return (
            <>
                <img src={props.imgSrc} alt="IMG" />
            </>
        );
};
export default Image;
