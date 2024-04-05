import { DataBlock, DataDesc, DataLevel, DataTitle, Loading } from "./DataView.styled";

export const DataView = ({ dataSelect }) => {
    return (dataSelect ? (
        <DataBlock>
            <DataTitle>{dataSelect.title}</DataTitle>
            <DataDesc>{dataSelect.description}</DataDesc>
            <DataLevel>level: {dataSelect.level}</DataLevel>
        </DataBlock>
    ) : (
        <DataBlock>
            <Loading>Nothing is selected...</Loading>
        </DataBlock>
    ))
};
