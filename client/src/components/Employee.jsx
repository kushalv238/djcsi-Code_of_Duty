import yellowFlag from './../images/yellowFlag.png';
import redFlag from './../images/redFlag.png';
import orangeFlag from './../images/orangeFlag.png';
import { useEffect } from 'react';
import getData from '../getInfo/patchEmployee';

const Employee = (props) => {
    const flagClicked = (params) => {
        props.flags.params+=1;
        console.log(props.flags)
    }

    useEffect(() => {
        async function fetchdata(data) {
            const newData = await getData(data);
            // setData(newData);
        }

        fetchdata(props.data);
    }, [])
    
    // console.log(props)
    return (
        <div
            className="product"
            title={props.title}
        >
            <div className="prod-img">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="prod-data">
                <div className="prod-info">
                    <h2 className='bold'>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="prod-flags">
                <div className="flag"
                    onClick={flagClicked('yellow')}
                ><img src={yellowFlag} alt="img" /><p>{props.flags.yellow ||= 0}</p></div>
                <div className="flag"><img src={orangeFlag} alt="img" /><p>{props.flags.orange ||= 0}</p></div>
                <div className="flag"><img src={redFlag} alt="img" /><p>{props.flags.red ||= 0}</p></div>
            </div>
        </div>
    )
}

export default Employee