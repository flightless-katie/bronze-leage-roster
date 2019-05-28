import React from 'react'

export default class ProfileCard extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'left', verticalAlign: 'top',
        borderTop: 'solid 1px #cccccc',
        borderBottom: 'solid 1px #cccccc'
      }}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <img src={"/heroes/" + this.props.heroes[0] + ".png"} height={225}/>
        </div>
        <div style={{display: 'inline-block'}}>
          <h3 style={{marginTop: 0, marginBottom: 5}}>{this.props.name}</h3>
          <strong>{this.props.rolesDisplay}</strong><br/>
          <strong>Local Time: {this.props.localTimeDisplay}</strong><br/>
          <strong>{this.props.battleTagsDisplay}</strong><br/>
          <strong>{this.props.name} also plays...</strong><br/>
          <div style={{marginTop: 15}}>
          {this.props.heroes.slice(1).map((h) =>
            <div style={{display: 'inline-block'}}>
              <img src={"/heroes/" + h + ".png"} height={95} />
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}