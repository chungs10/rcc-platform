import React, { useState, useEffect } from 'react';
import '../App.css';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css"

function Calendar() {

  const dayHeaderContent = (info) => {
    // Add a custom class to day header elements
    return (<div className="custom-day-header">${info.dayNumberText}</div>);
  };

  return (
    <div className='calendarHolder'>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        customButtons={{
          exportICS: {
            text: "Export ICS",
          },
        }}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        footerToolbar={{
          end: "exportICS",
        }}
        height={"82vh"}
        
      />
    </div>
  );
}


export default Calendar;
