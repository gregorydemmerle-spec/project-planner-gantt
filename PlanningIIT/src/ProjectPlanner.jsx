{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import React, \{ useState \} from "react";\
import \{ motion \} from "framer-motion";\
\
export default function ProjectPlanner() \{\
\'a0 const [projects, setProjects] = useState([]);\
\'a0 const [name, setName] = useState("");\
\'a0 const [stage, setStage] = useState("avant");\
\'a0 const [resources, setResources] = useState("");\
\'a0 const [start, setStart] = useState("");\
\'a0 const [end, setEnd] = useState("");\
\
\'a0 const addProject = () => \{\
\'a0\'a0\'a0 if (!name || !resources || !start || !end) return;\
\'a0\'a0\'a0 setProjects([...projects, \{ name, stage, resources, start, end \}]);\
\'a0\'a0\'a0 setName("");\
\'a0\'a0\'a0 setResources("");\
\'a0\'a0\'a0 setStart("");\
\'a0\'a0\'a0 setEnd("");\
\'a0 \};\
\
\'a0 const stages = \{\
\'a0\'a0\'a0 avant: "Avant\uc0\u8209 projet",\
\'a0\'a0\'a0 dev: "D\'e9veloppement",\
\'a0\'a0\'a0 post: "Post\uc0\u8209 d\'e9veloppement",\
\'a0 \};\
\
\'a0 const getTimeline = () => \{\
\'a0\'a0\'a0 if (projects.length === 0) return [];\
\
\'a0\'a0\'a0 const minDate = new Date(Math.min(...projects.map((p) => new Date(p.start))));\
\'a0\'a0\'a0 const maxDate = new Date(Math.max(...projects.map((p) => new Date(p.end))));\
\
\'a0\'a0\'a0 const timeline = [];\
\'a0\'a0\'a0 const current = new Date(minDate.getFullYear(), minDate.getMonth(), 1);\
\
\'a0\'a0\'a0 while (current <= maxDate) \{\
\'a0\'a0\'a0\'a0\'a0 timeline.push(\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 current.toLocaleString("fr-FR", \{ month: "short", year: "numeric" \})\
\'a0\'a0\'a0\'a0\'a0 );\
\'a0\'a0\'a0\'a0\'a0 current.setMonth(current.getMonth() + 1);\
\'a0\'a0\'a0 \}\
\
\'a0\'a0\'a0 return timeline;\
\'a0 \};\
\
\'a0 const timeline = getTimeline();\
\
\'a0 return (\
\'a0\'a0\'a0 <div className="planner">\
\'a0\'a0\'a0\'a0\'a0 <motion.h1 initial=\{\{ opacity: 0 \}\} animate=\{\{ opacity: 1 \}\}>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 Planificateur de projets + GANTT\
\'a0\'a0\'a0\'a0\'a0 </motion.h1>\
\
\'a0\'a0\'a0\'a0\'a0 <div className="form">\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <label>Nom du projet</label>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input value=\{name\} onChange=\{(e) => setName(e.target.value)\} />\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <label>Phase</label>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <select value=\{stage\} onChange=\{(e) => setStage(e.target.value)\}>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <option value="avant">Avant\uc0\u8209 projet</option>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <option value="dev">D\'e9veloppement</option>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <option value="post">Post\uc0\u8209 d\'e9veloppement</option>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </select>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <label>Ressources</label>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input value=\{resources\} onChange=\{(e) => setResources(e.target.value)\} />\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <label>Date d\'e9but</label>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input type="date" value=\{start\} onChange=\{(e) => setStart(e.target.value)\} />\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <label>Date fin</label>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input type="date" value=\{end\} onChange=\{(e) => setEnd(e.target.value)\} />\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button onClick=\{addProject\}>Ajouter projet</button>\
\'a0\'a0\'a0\'a0\'a0 </div>\
\
\'a0\'a0\'a0\'a0\'a0 \{timeline.length > 0 && (\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h2>\uc0\u55357 \u56517  \'c9chelle de temps</h2>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="timeline">\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{timeline.map((t, i) => (\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="month" key=\{i\}>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{t\}\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h2>\uc0\u55357 \u56522  GANTT</h2>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="gantt">\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{projects.map((p, i) => \{\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const s = new Date(p.start);\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const e = new Date(p.end);\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const base = new Date(timeline[0]);\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const monthOffset =\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 (s.getFullYear() - base.getFullYear()) * 12 +\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 (s.getMonth() - base.getMonth());\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const duration =\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 (e.getFullYear() - s.getFullYear()) * 12 +\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 (e.getMonth() - s.getMonth()) +\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 1;\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return (\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div key=\{i\} className="row">\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="label">\{p.name\}</div>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="bar"\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 style=\{\{\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 marginLeft: `$\{monthOffset * 120\}px`,\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 width: `$\{duration * 120\}px`,\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}\}\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ></div>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 );\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \})\}\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </>\
\'a0\'a0\'a0\'a0\'a0 )\}\
\'a0\'a0\'a0 </div>\
\'a0 );\
\}\
}