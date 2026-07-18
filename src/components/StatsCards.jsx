import "./StatsCards.css";

import {
  FaTemperatureHigh,
  FaTint,
  FaLeaf,
  FaCloudRain
} from "react-icons/fa";

function StatsCards() {

    const stats = [

        {
            title:"Temperature",
            value:"30°C",
            icon:<FaTemperatureHigh />,
            color:"orange"
        },

        {
            title:"Soil Moisture",
            value:"71%",
            icon:<FaTint />,
            color:"blue"
        },

        {
            title:"Crop Health",
            value:"98%",
            icon:<FaLeaf />,
            color:"green"
        },

        {
            title:"Rain Probability",
            value:"45%",
            icon:<FaCloudRain />,
            color:"purple"
        }

    ];

    return(

        <div className="stats-grid">

            {stats.map((item,index)=>(

                <div className="stat-card" key={index}>

                    <div className={`stat-icon ${item.color}`}>

                        {item.icon}

                    </div>

                    <div>

                        <h4>{item.title}</h4>

                        <h2>{item.value}</h2>

                    </div>

                </div>

            ))}

        </div>

    )

}

export default StatsCards;