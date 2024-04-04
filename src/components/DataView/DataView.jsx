import { DataBlock, DataDesc, DataLevel, DataTitle, Loading } from "./DataView.styled";

export const DataView = ({ DataSelect }) => {
    return (DataSelect ? (
        <DataBlock>
            <DataTitle>{DataSelect.title}</DataTitle>
            <DataDesc>{DataSelect.description}</DataDesc>
            <DataLevel>level: {DataSelect.level}</DataLevel>
        </DataBlock>
    ) : (
        <DataBlock>
            <Loading>Nothing is selected...</Loading>
        </DataBlock>
    ))
};
