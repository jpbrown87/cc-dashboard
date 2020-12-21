import React from "react";

const FlightList = ({flights}) => {

    return(
        <>
        {
            flights.map((flight) => {
                return (
                    <>
                    {flight}
                    </>
                )
            })
        }
        </>
    )

}

export default FlightList