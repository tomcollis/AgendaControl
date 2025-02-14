# AgendaControl

[![GitHub stars](https://img.shields.io/github/stars/tomcollis/AgendaControl?style=for-the-badge)](https://github.com/tomcollis/AgendaControl/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/tomcollis/AgendaControl?style=for-the-badge)](https://github.com/tomcollis/AgendaControl/issues)
[![Github All Releases download count](https://img.shields.io/github/downloads/tomcollis/AgendaControl/total.svg?style=for-the-badge)](https://github.com/tomcollis/AgendaControl/releases/latest)
[![GitHub latest release version](https://img.shields.io/github/v/release/tomcollis/AgendaControl.svg?style=for-the-badge)](https://github.com/tomcollis/AgendaControl/releases/latest)

## Overview

AgendaControl is a web application that allows users to dynamic define a meeting agenda with a timer.
The aim is to improve meetings and maintain momemtum by sticking to the planned agenda.

The URL paramters determine the meeting's agenda and timings. As shown in the [Examples](#example-meeting-agendas) below.

If you like this idea or find the app useful, why not?

[![Buy me coffee](https://img.shields.io/badge/Buy%20me%20-coffee!-orange.svg?style=for-the-badge&logo=buy-me-a-coffee&color=6F4E37)](https://paypal.me/TomCollisUK/4)

## Features

- Create meeting agendas
- Defined times for agenda items (maximumL: 10)
- Reusable URL for regular meetings
- Information and Agendas are never stored and are instead created dynamically based on the URL parameters to ensure privacy

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
- **Welcome and Introductions** (10 minutes)
- **Project Overview** (15 minutes)
- **Roles and Responsibilities** (10 minutes)
- **Timeline and Milestones** (20 minutes)
- **Q&A Session** (15 minutes)

> meetingtimer?agenda=Welcome,Project Overview,Roles and Responsibilities,Timeline and Milestones,Q%26A Session&times=10,15,10,20,15

### Example 2: Team Standup Meeting
- **Yesterday's Work Review** (5 minutes)
- **Today's Tasks** (5 minutes)
- **Blockers and Challenges** (5 minutes)
- **Announcements** (5 minutes)

> meetingtimer?agenda=Yesterday's Work Review,Today's Tasks,Blockers and Challenges,Announcements&times=5,5,5,5

### Example 3: General Team Meeting
- **Opening Remarks and Agenda Review** (5 minutes)
- **Department Updates** (10 minutes)
- **Ongoing Projects Status** (15 minutes)
- **New Initiatives and Ideas** (10 minutes)
- **Team Challenges and Solutions** (10 minutes)
- **Next Steps and Action Items** (10 minutes)

> meetingtimer?agenda=Opening Remarks and Agenda Review,Department Updates,Ongoing Projects Status,New Initiatives and Ideas,Team Challenges and Solutions,Next Steps and Action Items&times=5,10,15,10,10,10
