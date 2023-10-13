import Part
    from "./Part";
const Content = (props) => {

    return (
        <div>
            {props.parts.map((parts => <Part parts={parts} />))}
        </div>
    )
}

export default Content;
