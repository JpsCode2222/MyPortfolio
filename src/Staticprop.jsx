import React from 'react';
class Staticprop extends React.Component{
    // Mounting

    // 1 Constructor()
    constructor(props){
        super(props);
        this.state=({
            val1:'1234',
        })
        this.upd=this.upd.bind(this);
        console.log('call Constructor')
    }

    // 2 static getDerivedStateFromProps()
    static getDerivedStateFromProps(state,props){
        console.log(state,props);
        console.log('call static getDerivedStateFromProps');
        return null;
    }

    // 4 componentDidMout()
    componentDidMount(){
        console.log('call componentDidMount');
    }

    // 5 shouldComponentUpdate()
    shouldComponentUpdate(Nextprop,Nextstate){
        console.log(Nextprop,Nextstate);
        console.log('call shouldComponentUpdate');
        return true;
    }

    // 6 getSnapshotBeforeUpdate()
    getSnapshotBeforeUpdate(pp,ps){
        console.log(pp,ps);
        console.log('call getSnapshotBeforeUpdate');
        return true;
    }
     
    // 7 componentDidUpdate()
    componentDidUpdate(pp,ps,snap){
        console.log(pp,ps,snap);
        console.log('call componentDidMount');
    }
    upd(){
        this.setState({
            val1:'00000',
        })
    }
    // 3 render()
    render(){
        return(
            <>
            <h1>LifeCycleMethods</h1>
            <div>
                {

                }
            </div>
            <h1>{this.state.val1}</h1>
            <button onClick={this.upd}>Update</button>
            </>
        )
    }
}
export default Staticprop;