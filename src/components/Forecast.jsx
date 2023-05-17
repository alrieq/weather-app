export default function Forecast({props}) {
    return (
        <li>
            <span>{props.date} </span>
            <span>{props.day.maxtemp_c}</span>
        </li>
    )

}