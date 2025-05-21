"use client"
import 'react-calendar/dist/Calendar.css';

import { useState } from "react";
import Calendar from "react-calendar";
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events=[
    {
        id:1,
        title:"Event Title come here",
        time:"12:00 PM - 2:00 PM",
        description:"Event description come here, add event details here"
    },
    {
        id:2,
        title:"Event Title come here",
        time:"12:00 PM - 2:00 PM",
        description:"Event description come here, add event details here"
    },
    {
        id:3,
        title:"Event Title come here",
        time:"12:00 PM - 2:00 PM",
        description:"Event description come here, add event details here"
    }
]

const EventCalendar=()=>{
    const [value, onChange] = useState<Value>(new Date());
    return(
        <div>
            <Calendar onChange={onChange} value={value} />
            <div className=' flex items-center justify-between'>
                <h1 className=' text-xl font-semibold my-4'>Events</h1>
                <Image src="/moreDark.png" alt='event' width={20} height={20}/>
            </div>
            <div className=' flex flex-col gap-4'>
                {events.map((event)=>(
                    <div className=' p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-devSky even:border-t-devPurple' key={event.id}>
                        <div className=' flex items-center justify-between'>
                            <h1 className=' font-semibold text-gray-600'>{event.title}</h1>
                            <span className=' text-gray-300 text-xs'>{event.time}</span>
                        </div>
                        <p className=' mt-2 text-gray-400 tex-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EventCalendar;
