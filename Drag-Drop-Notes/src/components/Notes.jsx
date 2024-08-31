import React from "react";
import { useEffect, useRef, createRef } from "react";
import Note from "./Note.jsx";

const Notes = ({notes = [], setNotes = () => {}}) => {
  
    useEffect(() => {
  
      const determineNewPosition = () => {
        let maxX =  window.innerWidth - 400;
        let maxY = window.innerHeight - 400;
  
        return {
          x : Math.floor(Math.random() * maxX),
          y : Math.floor(Math.random() * maxY)
        }
      }
  
      // local storage logic 
      const savedNotes =  JSON.parse(localStorage.getItem("notes")) || [];
  
      const updatedNotes = notes.map(note =>{
        const savedNote = savedNotes?.find(savedNote => savedNote.id === note.id);
        if(savedNote){
           return { ...note , position : savedNote.position };
        }else{
           const position = determineNewPosition();
           return { ...note,position };
        }
      });
  
      setNotes(updatedNotes);
      localStorage.setItem("notes",JSON.stringify(updatedNotes));
    },[notes.length]);
  
    const noteRefs = useRef([]);
  
    const handleDragStart = (note,e) =>{
       const noteRef = noteRefs.current[note.id].current;
       const rect = noteRef.getBoundingClientRect();
  
       //Calculate the offset before hand . Will be used to calculate the new position.
       const offsetX = e.clientX - rect.left;
       const offsetY = e.clientY - rect.top;
  
       const startPosition  = note;
  
       const handleMouseMove = (e) =>{
           const newX = e.clientX - offsetX;
           const newY = e.clientY - offsetY;
  
            noteRef.style.left = `${newX}px`;
            noteRef.style.top = `${newY}px`;
       }
  
       const handleMouseUp = () => {
  
        document.removeEventListener('mousemove',handleMouseMove);
        document.removeEventListener('mouseup',handleMouseUp);
  
        const finalRect = noteRef.getBoundingClientRect();
        const newPosition = { x: finalRect.left, y: finalRect.top };
    
         updateNotePosition(note.id,newPosition);
       }
  
       document.addEventListener('mousemove',handleMouseMove);
       document.addEventListener('mouseup',handleMouseUp);
    };
  
    const updateNotePosition = (id,newPosition) => {
      const updatedNotes = notes.map( note => note.id === id ? {...note,position : newPosition} : note);
      setNotes(updatedNotes);
      localStorage.setItem("notes",JSON.stringify(updatedNotes));
    }
  
    return (
      <div className="">
        {notes.map(note => 
              <Note 
                 ref={noteRefs.current[note.id] ? noteRefs.current[note.id] : (noteRefs.current[note.id] = createRef())}
                 note={note} 
                 initialPosition={note.position} 
                 key={note.id}
                 onMouseDown={(e) => {handleDragStart(note,e);}}/>)}
      </div>
    );
}   

export default Notes;