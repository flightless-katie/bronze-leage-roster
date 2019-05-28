import React from 'react'
import moment from 'moment'

export default class ProfileCard extends React.Component {
  render() {
    const localTime = this.props.timezone ? moment()
            .utcOffset(this.props.timezone)
            .format('HH:mm a')
      : 'Not known'
    return (
      <div style={{textAlign: 'left', verticalAlign: 'top',
        borderTop: 'solid 1px #cccccc',
        borderBottom: 'solid 1px #cccccc'
      }}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <img src={"/heroes/" + this.props.heroes[0].toLowerCase() + ".png"} height={225}/>
        </div>
        <div style={{display: 'inline-block'}}>
          <h3 style={{marginTop: 0, marginBottom: 5}}>{this.props.name}</h3>
          <strong>{this.props.rolesDisplay}</strong><br/>
          <strong>Local Time: {localTime}</strong><br/>
          {this.props.battleTagsDisplay}<br/>
          <strong>{this.props.name} also plays...</strong><br/>
          <div style={{marginTop: 15}}>
          {this.props.heroes.slice(1).map((h) =>
            <div style={{display: 'inline-block'}}>
              <img src={"/heroes/" + h.toLowerCase() + ".png"} height={95} />
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}