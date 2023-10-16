import { useState } from 'react'

const AppUnicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1);
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1);
    }

    const handleBad = () => {
        setBad(bad + 1)
    }

    const StatisticLine = ({ text, value }) => {
        return (

            <tr>
                <td>{`${text} ${value}`} </td>
            </tr>

        )
    }

    const positive = () => {
        let pos = 0;
        pos = good / (good + neutral + bad) * 100;
        return pos;


    }


    return (
        <div>
            <h1>give feeback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
            <br />
            <h1>Statistics</h1>

            {(bad || neutral || good !== 0) ? (
                <>
                    <table>
                        <tbody>
                            <StatisticLine text="good" value={good} />
                            <StatisticLine text="neutral" value={neutral} />
                            <StatisticLine text="bad" value={bad} />
                            <StatisticLine text="all" value={good + neutral + bad} />
                            <StatisticLine text="average" value={(good + neutral * 0 + bad * -1) / (good + neutral + bad)} />
                            <StatisticLine text="positive" value={`${positive()}%`} />
                        </tbody>
                    </table>
                </>
            ) : (<p>No feedback given</p>)}
        </div>
    )
}

export default AppUnicafe