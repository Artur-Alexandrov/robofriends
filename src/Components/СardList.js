
import Card from './Card';

const СardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return <Card key = {i} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email}  />
    })
    return (
        <div>
        {cardArray}
        </div>
    );
}
export default СardList;