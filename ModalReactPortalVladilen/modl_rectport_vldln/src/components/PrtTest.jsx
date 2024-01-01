
import { createPortal } from "react-dom";

export default function PrtTest(){


    return (
       
       
        createPortal(
        <pre>{`Testing of the createPortal
                ---<pre>---
                 adfadf
             adfafd  sdfgsfg
                   sdfgsdgsg`}
        </pre>,
        document.body
          //document.getElementById("fff")
        )
        
    
    )
  }

