import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelection: (item: string) => void;
}

function ListGroup({ items, heading, onSelection }: Props){
    
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClick = (e: MouseEvent) => console.log(e);

    const getMessage = () => {
        return 0
    }

    return (
    <Fragment>
        <h1>{heading}</h1>
        { items.length ===0 ? <p>No item found</p> : null }
        { items.length ===0 && <p>No item found</p> }
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex===index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {setSelectedIndex(index); onSelection(item);}}>{item}</li>
            ))}
        </ul>
    </Fragment>
    );
}

export default ListGroup;
