import FullCalendar from "@fullcalendar/react"; // must go before plugins
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import listGridPlugin from "@fullcalendar/list"; // a plugin!
import { Interaction } from "@fullcalendar/core/internal";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../../Components/head";
import { formatDate } from "@fullcalendar/core";

import {
  Box,
  useTheme,
  ListItem,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { tokens } from "../../theme";
import { borderRadius, margin } from "@mui/system";

const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvent, setCurrentEvent] = useState([]);
  console.log(currentEvent);
  const handleDateClick = (selected) => {
    const title = prompt("Provide the title of the event to register");
    const calendarAPI = selected.view.calendar;
    calendarAPI.unselect();
    if (title) {
      calendarAPI.addEvent({
        id: `${selected.dateString}-${title}`,
        title: title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handlEVentClick = (selected) => {
    if (
      window.confirm(` you sure you want to delete  ${selected.event.title} `)
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box
      sx={{
        margin: "4px 2px",
        padding: "4px 4px",
      }}
    >
      <Header title="CALENDAR" subtittle="Here is the calendar" />
      <Box display="flex" justifyContent="space-between">
        <Box
          marginRight="4px"
          flex="1 1 20%"
          backgroundColor={colors.primary[300]}
        >
          <Typography variant="h5" margin="4px">
            Events
          </Typography>
          <List>
            {currentEvent.map((event) => {
              console.log(event);
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={<Typography>{event.date}</Typography>}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box flex="1 1 100%" marginLeft="2px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listGridPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            weekends={true}
            editable={true}
            selectable={true}
            select={handleDateClick}
            eventClick={handlEVentClick}
            eventsSet={(events) => setCurrentEvent(events)}
            initialEvents={[
              { title: "happy new year", date: "2023-01-01", id: 1 },
              { title: "happy new year", date: "2023-01-01", id: 2 },
              { title: "Mapinduzi day", date: "2023-01-12", id: 3 },
              { title: "Mapinduzi day", date: "2023-01-15", id: 4 },
              { title: "Mapinduzi day", date: "2023-01-14", id: 5 },
              { title: "Mapinduzi day", date: "2023-01-17", id: 6 },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;
