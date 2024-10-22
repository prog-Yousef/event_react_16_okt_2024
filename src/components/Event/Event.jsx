import { useNavigate } from "react-router-dom";

function Event(props) {
    
    const { event } = props;
    const navigate = useNavigate();


    function handleEventClick() {
        navigate(`/event`, {state: {event: event}});
    }

    return (
        <article onClick={handleEventClick}>
            <h3>{event.name}</h3>
            <p>{event.where}</p>
        </article>
    );
}

export default Event;