import React from "react";

const Folder = (props) => {
    const data = props.data;
    return (
        <div
          style={{
            marginLeft: "20px",
          }}
          >
            {data.map((item , index) => {
                return (
                    <div key={index}>
                        {item.isFolder ? 
                         <SubFolder item={item} />
                        : 
                        <div>{item.name}</div>}
                    </div>
                )
            })}
        </div>
    ) ;
}


const SubFolder =  ({item}) =>{
    const [ show, setShow ] = React.useState(true);
    return (
    <>
        <div
           onClick={() => setShow( show => !show)}
         >{item.name}</div>
        { show && <Folder data={item.children} /> }
    </>);
};

export default Folder;