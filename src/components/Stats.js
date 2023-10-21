export default function Stats({items}) {

    if (items.length === 0) return <p className="stats" ><em>Start adding some itmes to
        your list</em></p>

    const numItems = items.length
    const numPacked = items.filter((item) => item.packed).length
    const percentage = Math.round((numPacked / numItems) * 100)


    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? 'You got everithing ! Ready To Go ;)' :
                    `You have ${numItems} items on yours list, and you already packed ${numPacked} ( ${percentage} %)`
                }
            </em>
        </footer>
    )


};