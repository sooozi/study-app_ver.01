import { default as React, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

const CalendarWrap = styled.div`
    .react-calendar {
        border: 1px solid #d5d5d58c;
        border-radius: 5px;
        overflow: hidden;
    }
`;

const StyleCalendar = styled(Calendar)`
    .react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus,
    .react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus {
        background-color: rgba(255, 243, 229, 0.5);
        color: rgb(57, 32, 5);
        border-radius: 50%;
    }
    .react-calendar__navigation__label__labelText {
        font-size: 10px;
    }
    .react-calendar__navigation {
        height: 30px;
        margin-bottom: 0;
    }
    .react-calendar__navigation__label {
        pointer-events: none;
    }
    .react-calendar__navigation button {
        min-width: 20px;
    }
    abbr {
        text-decoration: none;
        font-size: 10px;
    }
    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display: none;
    }
    .react-calendar__tile {
        padding: 1px;
    }
    .react-calendar__tile--now {
        background: rgb(255, 175, 88);
        border-radius: 50%;
    }
    .react-calendar__tile--active {
        font-weight: bold;
    }
    .react-calendar__tile--active {
        background: #006edc;
        border-radius: 50%;
    }
    
`;

function TodoCalendar() {
    const [value, onChange] = useState(new Date()); //초기값은 현재 날짜

    return (
        <CalendarWrap>
            <StyleCalendar locale="en">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </StyleCalendar>
        </CalendarWrap>
    );
}

export default TodoCalendar;