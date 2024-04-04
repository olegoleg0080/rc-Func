import people from "../../arrayCard";
import Image from "./Image";
import Tel from "./Tel";
import Name from "./Name";

const Card = () => {
    return (
        <div className="root">
            {people.map((e) => (
                <div key={e.id} className="card">
                    <Image imgSrc={e.img} />
                    <Name name={e.name} />
                    <Tel tel={e.tel} />
                </div>
            ))}
        </div>
    );
};

export default Card;
