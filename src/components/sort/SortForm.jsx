import { FormSort, InputSortForm, Label } from "components/form/form.styled";

export const SortForm = ({ onSort }) => {
    const onSortChange = (e) => {
        onSort(e.target.name, e.target.value);
    };
    return (
        //     onSubmit={(values) => {
        //         this.props.onSort(values);
        //     }}

        <FormSort>
            <Label>
                TextSort
                <InputSortForm
                    onChange={onSortChange}
                    name="filterText"
                    type="text"
                />
            </Label>
            <Label>
                LevelSort
                <InputSortForm
                    onChange={onSortChange}
                    as="select"
                    name="filterLevel"
                >
                    <option value="all">all</option>
                    <option value="hard">hard</option>
                    <option value="normal">normal</option>
                    <option value="easy">easy</option>
                </InputSortForm>
            </Label>
        </FormSort>
    );
};
