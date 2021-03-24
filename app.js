const PositiveMessage = () => <p>Możesz obejrzeć film</p>;

const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu</p>;


class CheckboxAgeConfirmation extends React.Component{
  
 render(){
   return(
    <>
      <h1>Kup bilet na horror roku!</h1>
      <input type="checkbox" id="age"/>
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      
    </> 
    )
 }
}

ReactDOM.render(<CheckboxAgeConfirmation />,
document.getElementById('root'))