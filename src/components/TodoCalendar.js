import { default as React, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

const StyleCalendar = styled(Calendar)`
    .react-calendar__navigation__label__labelText {
        font-size: 10px;
    }
    .react-calendar__navigation {
        height: 30px;
        margin-bottom: 0;
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
`;

function TodoCalendar() {
    const [value, onChange] = useState(new Date()); //초기값은 현재 날짜

    return (
        <div>
            <StyleCalendar locale="en">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </StyleCalendar>
        </div>
    );
}

export default TodoCalendar;