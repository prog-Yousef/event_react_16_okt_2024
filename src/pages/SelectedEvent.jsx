import { useLocation,useNavigate } from "react-router-dom";


function SelectedEvent() {
    const eventInfo = useLocation();
    const navigate = useNavigate();
    console.log(eventInfo); 

    function handleClick() {
        navigate('/confirmation', {state: {event: eventInfo.state.event}});
    }

    return (
        <section>
            <h2>Du har valt:</h2>
            <h3>{eventInfo.state.event.name}</h3>
            <p>{eventinfo.state.event.where}</p>
            <p>{eventinfo.state.event.price}</p>
            <button onClick={handleClick}>Köp</button>
        </section>
    )
}

export default SelectedEvent;
    