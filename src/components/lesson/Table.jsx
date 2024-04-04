import people from "../../arrayCard";
import Image from "./Image";
import Tel from "./Tel";
import Name from "./Name";

const Table = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Tel</th>
                </tr>
                {people.map((e) => (
                    <tr className="cardTable">
                        <Image type="t" imgSrc={e.img} />
                        <Name type="t" name={e.name} />
                        <Tel type="t" tel={e.tel} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
