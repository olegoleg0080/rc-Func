import { FormSort, InputSortForm, Label } from "components/form/form.styled";

export const SortForm = ({ onSort }) => {
    const onSortChange = (e, key) => {
        onSort({ [key]: e.target.value });
    };
    return (
        //     onSubmit={(values) => {
        //         this.props.onSort(values);
        //     }}

        <FormSort>
            <Label>
                TextSort
                <InputSortForm
                    onChange={(e) => onSortChange(e, "filterText")}
                    name="textSort"
                    type="text"
                />
            </Label>
            <Label>
                LevelSort
                <InputSortForm
                    onChange={(e) => onSortChange(e, "filterLevel")}
                    as="select"
                    name="levelSort"
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
