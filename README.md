# AgendaControl

## Overview

AgendaControl is a web application that allows users to dynamic define a meeting agenda with a timer.
The aim is to improveme meetings and maintain momemtum while sticking to the planned agenda.

The URL paramters determine the meeting's agenda and timings. As shown in the [Examples](#example-meeting-agendas) below.

## Features

- Create meeting agendas
- Defined times for agenda items
- Reusable URL for regular meetings
- Information and Agendas are never stored and are instead created dynamically based on the URL parameters to ensure privacy
- Basic analytics are used to track app usage

## Requirements

- Node.js 18.20.4

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tomcollis/AgendaControl.git
   cd AgendaControl

2. Run Application

    ```bash
    node loader.cjs

## Example Meeting Agendas

### Example 1: Project Kickoff Meeting
1. **Welcome and Introductions** - 10 minutes
2. **Project Overview** - 15 minutes
3. **Roles and Responsibilities** - 10 minutes
4. **Timeline and Milestones** - 20 minutes
5. **Q&A Session** - 15 minutes

`meetingtimer?agenda=Welcome,Project%20Overview,Roles%20and%20Responsibilities,Timeline%20and%20Milestones,Q%26A%20Session&times=10,15,10,20,15

### Example 2: Team Standup Meeting
- **Yesterday's Work Review** - 5 minutes
- **Today's Tasks** - 5 minutes
- **Blockers and Challenges** - 5 minutes
- **Announcements** - 5 minutes

`meetingtimer?agenda=Yesterday's Work Review,Today's Tasks,Blockers and Challenges,Announcements&times=5,5,5,5

### Example 3: General Team Meeting
1. **Opening Remarks and Agenda Review** - 5 minutes
2. **Department Updates** - 10 minutes
3. **Ongoing Projects Status** - 15 minutes
4. **New Initiatives and Ideas** - 10 minutes
5. **Team Challenges and Solutions** - 10 minutes
6. **Next Steps and Action Items** - 10 minutes

`meetingtimer?agenda=Opening Remarks and Agenda Review,Department Updates,Ongoing Projects Status,New Initiatives and Ideas,Team Challenges and Solutions,Next Steps and Action Items&times=5,10,15,10,10,10
