import { FAQComp } from "./FAQComp";
import { Container } from "./FAQ.styled";
import { useState } from "react";

export const FAQ = () => {
    const [mult, setMult] = useState([])
    const [isMult, setIsMult] = useState(false)
    const [isSelected, setSelected] = useState(null);
    setIsMult(false)
    return (
        <>
        {/* <button onClick={setIsMult(!mult)}>Mult</button> */}
            <Container>
                <FAQComp
                    id="1"
                    isMult={isMult}
                    mult={mult}
                    setMult= {setMult} 
                    setSel={setSelected}
                    isOpen={isSelected}
                    text="What are accordion components?"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <FAQComp
                    id="2"
                    isMult={isMult}
                    mult={mult}
                    setMult= {setMult} 
                    setSel={setSelected}
                    isOpen={isSelected}
                    text="What are they used for?"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <FAQComp
                    id="3"
                    isMult={isMult}
                    mult={mult}
                    setMult= {setMult} 
                    setSel={setSelected}
                    isOpen={isSelected}
                    text="Accordion as a musical instrument"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <FAQComp
                    id="4"
                    isMult={isMult}
                    mult={mult}
                    setMult= {setMult} 
                    setSel={setSelected}
                    isOpen={isSelected}
                    text="Can I create an according component with a different framework?"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
            </Container>
        </>
    );
};
