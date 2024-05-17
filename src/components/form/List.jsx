import { DelBtn, Item, Level, Text, Title } from "./form.styled";

export const Card = ({
    id,
    title,
    level,
    description,
    onDeleteBtn,
    onSelected,
}) => {
    return (
        <Item
            onClick={(e) => onSelected(e, {title, description, level, id })}
            level={level}
        >
            <Title to={id}>{title}</Title>
            <Text>{description}</Text>
            <Level>{level}</Level>
            {/* <Gmail colorData="#ff0000"/> */}
            <DelBtn onClick={() => onDeleteBtn(id)}>delete</DelBtn>
        </Item>
    );
};
