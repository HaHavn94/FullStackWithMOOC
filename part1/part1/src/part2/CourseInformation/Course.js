
const Course = (props) => {
    const courses = props.courses;

    return (
        <div>
            {courses.map(c =>
                <div key={c.name}>
                    <h3>{c.name}</h3>
                    {c.parts.map(n => <p key={n.id}>{n.name} {n.exercises}</p>)}
                    <p>total of {c.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>
                </div>
            )}


        </div>
    )
}

export default Course;
