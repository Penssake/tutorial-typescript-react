import React from "react"
import { InitState as InitProps } from "../App";

// now imported from app export of InitState
// interface InitProps {
//     people: {
//         name: string,
//         age: number,
//         url: string,
//         note?: string
//     }[] // taken from initial state in app and passed as props to List component - defined the same, only props
// }

// posiible but without defining the function as a functional component, typescript has no idea what it is
// const List = (props: InitProps) => {
//     return (
//         <div>
//             I am a list
//         </div>
//     )
// }

// deifine as functional component using React to be more specific
const List: React.FC<InitProps> = ({ people }) => {

    // const renderList = (): JSX.Element[] => {
    const renderList = () => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img src={person.url} alt="avatar" className="List-img" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age}</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {/* possible, also can use function */}
            {/* {people.map(person => {
                return (
                    <div>{person.name}</div>
                )
            })} */}
            {renderList()}
        </ul>
    )
}

export default List