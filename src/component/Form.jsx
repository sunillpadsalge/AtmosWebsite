
import React,{Component} from 'react';
import "../cards/card-style.css";
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           Name:'' ,
           Comments: '',
           topic: ''      
         };
      } 
      handleNameChange= event => {
            this.setState({
                Name:event.target.value
            })
      }

      handleCommentChange= event => {
        this.setState({
            Comments:event.target.value
        })
    }

        handleTopicChange= event => {
            this.setState({
                topic:event.target.value
            })
    }

        handleSubmit= event => {
            alert(`${this.state.Name} ${this.state.Comments} ${this.state.topic}`)
            event.preventDefault();
        }  

    render() { 
        const {Name,Comments,topic}=this.state
        return (  
            <div className="card text-center shadow" style={{background:"#E9ECEF"}}>
                <div className="card-body text-dark">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Enter your Details</h3>
                    <label>Name</label>
                    <input type="text" className="form-control" value={Name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={Comments} className="form-control" onChange={this.handleCommentChange}/>
                </div>
                <div>
                    <label>Select Course</label>
                    <select className="form-control" value={topic} onChange={this.handleTopicChange}>
                       <option value="C Language" >C Language</option> 
                       <option value="Core Java" >Core Java</option> 
                       <option value="Web Designing" >Web Designing</option> 
                    </select>
                </div>  
            </form>
            </div>
                    <button className="btn btn-outline-success" type="submit">Submit</button>
            </div>
        );
    }
}
 
export default Form;