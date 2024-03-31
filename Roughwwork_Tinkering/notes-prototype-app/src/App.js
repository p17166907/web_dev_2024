import './index.css'
import { useState } from 'react';

function App() {
  const [noteObjsArr, setNoteObjs] = useState([])

  const handleAddNoteObj = (noteObj) => { setNoteObjs((currentNoteObjs) => [...currentNoteObjs, noteObj]) }

  return (
    <div className="app">
      <Logo />
      <Form handleAddNoteObj={handleAddNoteObj} noteObjsArr={noteObjsArr} />
    </div>
  );
}
export default App;


function Logo() { return (<h1>✍🏾 UseNotes 📝</h1>) }

export function Form({ handleAddNoteObj, noteObjsArr }) {
  const now = new Date();

  // Extract hours, minutes, and seconds from the Date object
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the time as a string in HH:MM:SS format
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  let entryTimeStr = ''

  console.log('Form  noteObjsArr', noteObjsArr);

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [entryTime, setEntryTime] = useState(entryTimeStr)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !subject) return
    const newNoteObj = { id: Date.now, entryTime: formattedTime, title, subject }
    handleAddNoteObj(newNoteObj)
    setEntryTime('')
    setTitle('')
    setSubject('')
  }

  console.log('Form  formattedTime', formattedTime);


  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>Title</h3>
      <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <h3>Subject</h3>
      <input type="text" placeholder="Subject..." value={subject} onChange={(e) => setSubject(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  )
}
