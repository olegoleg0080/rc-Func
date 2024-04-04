import { FormSort, InputSortForm, Label } from "components/form/form.styled";

export const SortForm = ({onSort})=> {
        return (
            //     onSubmit={(values) => {
            //         this.props.onSort(values);
            //     }}

            <FormSort>
                <Label>
                    TextSort
                    <InputSortForm
                        onChange={(e) => {
                            onSort({ filterText: e.target.value });
                        }}
                        name="textSort"
                        type="text"
                    />
                </Label>
                <Label>
                    LevelSort
                    <InputSortForm
                        onChange={(e) => {
                            onSort({ filterLevel: e.target.value });
                        }}
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
}
