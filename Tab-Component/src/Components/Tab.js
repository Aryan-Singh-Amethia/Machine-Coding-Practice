import { createContext, useContext } from "react";


const TabContext = createContext();


function Tab(props){
    return (
        <div>
            <TabContext.Provider value={{index:props?.index || 0, setIndex : props?.setIndex || function(){}}}>
              {props.children}
            </TabContext.Provider>
        </div>
    );
}


Tab.HeadsContainer = function(props){ 
    // This way of Declaring Closely associated Components is Called "Compound Components"
    return(
     <div className="tabs__container">{props?.children}</div>
    );
}

Tab.HeadItem = (props)=>{
    // const {setIndex} = useContext(TabContext); // Unable to use Hooks here in the Compound Component
    return (
        <TabContext.Consumer>
           {(context)=>(
           <div onClick={()=>context?.setIndex(props.index)} className="tabs">
            <b>{props?.label}</b>
           </div>)}
        </TabContext.Consumer>
    );
}

Tab.ContentContainer = function({children}){
    return(
      <div>{children}</div>
    );
}

Tab.ContentItem = function({index,children}){
    return (
        <TabContext.Consumer>
            {(context)=>(
                <div className="content">
                 {context.index === index ? children : null}
                </div>
            )}
        </TabContext.Consumer>
    );
}

export default Tab;

