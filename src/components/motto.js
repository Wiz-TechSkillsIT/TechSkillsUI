import { Card } from "primereact/card";
import '../css/motto.css';
 
function Motto(){
    return(
        <div className="cardmotto">
             <div>
                <span >
                    <p className="motto-text">
                    <div>
  Learn concepts with&nbsp; 
  <span style={{ 
    backgroundColor: 'rgb(217, 160, 94)', 
    color: 'white', 
    lineHeight: '1', 
    padding: '2px 4px', 
    display: 'inline-block'
  }}>
    examples 
  </span>  
  &nbsp;and&nbsp;
  <span style={{ 
    backgroundColor: 'rgb(217, 160, 94)', 
    color: 'white', 
    lineHeight: '1', 
    padding: '2px 4px', 
    display: 'inline-block'
  }}>
    case studies
  </span> 
  &nbsp;from the videos and <br />
  <span style={{ 
    backgroundColor: 'rgb(217, 160, 94)', 
    color: 'white', 
    lineHeight: '1.0', 
    padding: '2px 4px', 
    display: 'inline-block'
  }}>
    make projects
  </span> 
  &nbsp;from scratch with the trainer
</div>

                    </p>
                </span>
             </div>

        </div>
         
     
    
 
    )
}

export default Motto; 