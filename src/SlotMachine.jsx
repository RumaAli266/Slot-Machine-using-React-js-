const SlotMachine = (props) =>{

    if( (props.x===props.y) && (props.y===props.z))
    {
        return(
            <>
                <div className="slot_inner">
                    <h1>{props.x}{props.y}{props.z}</h1>
                    <h1>This is Matching 👍</h1>
                </div>
                <br /><hr /> <br />
            </>
        )
    }
    else
    {
        return(
            <>
                <div className="slot_inner">
                    <h1>{props.x}{props.y}{props.z}</h1>
                    <h1>This is not Matching 👎</h1>
                </div>
                <br /><hr /> <br />
            </>
        )
    }
}


export default SlotMachine;