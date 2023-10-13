const Total = (props) => {
    let sum = 0;

    const sumPart = (parts) => {

        parts.map(part => {
            sum = sum + part.exercises;
        })
        return sum;
    }

    return (
        <p>Number of exercises {sumPart(props.parts)}</p>
    )

}

export default Total;