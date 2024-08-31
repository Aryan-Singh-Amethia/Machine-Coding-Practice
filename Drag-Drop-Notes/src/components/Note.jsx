import React, { forwardRef } from 'react';

const Note = forwardRef(({note,initialPosition,...props},ref) => {
    return (
        <div
          key={note.id}
          ref={ref}
          style={{
            border : '2px solid grey',
            backgroundColor : 'lightyellow',
            position : 'absolute',
            top : `${initialPosition?.y}px`,
            left : `${initialPosition?.x}px`,
            width : '400px',
            textAlign : 'center',
            cursor:'move',
            userSelect : 'none',
          }}
          {...props}
        >
          <p>{note.content}</p>
        </div>
    );
});

export default Note;
