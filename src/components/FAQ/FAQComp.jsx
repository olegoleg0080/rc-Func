import { El, FAQSVG, HideContent, RotatedSvg } from "./FAQ.styled";
import minusSVG from "../../icons/minus.svg";
export const FAQComp = ({isOpen,  text, content, id, setSel, isMult, mult, setMult }) => {
    return (
        <El
            onClick={() => {
                setSel(id)
                // const filterMult = mult.filter(item => item !== id);
                // mult.includes(id) !== -1 ? setMult((state) => [...state, filterMult]) : 
                // setMult((state) => [...state, id])
            }}
        >
            <div>
                <h2>{text}</h2>
                <FAQSVG status={isOpen === id ? "false" : "true"}>
                    <RotatedSvg src={minusSVG} alt="-" />
                    <img src={minusSVG} alt="-" />
                </FAQSVG>
            </div>
            <HideContent status={isMult ? mult.includes(id) :  isOpen === id }>${content}</HideContent>
        </El>
    );
};
