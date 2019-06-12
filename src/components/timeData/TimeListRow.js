import React from "react";

import { actions } from "../../store";

import Time from "../Time";

import "../../styles/components/TimeListRow.css";

export default class TimeListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      labelText: props.time.label
    };
  }
  render() {
    const { time } = this.props;
    const { editing, labelText } = this.state;
    return (
      <tr className="timeListRow">
        <td className="timeListRow__controls">
          <button onClick={() => actions.removeTime(time)}>&times;</button>
        </td>
        <td>
          <Time time={time.time} />
        </td>
        <td className="timeListRow__label" onDoubleClick={this.doubleClick}>
          {editing ? (
            <form onSubmit={this.edit}>
              <input
                className="timeListRow__label__input"
                type="text"
                ref="label"
                size="8"
                value={labelText}
                onChange={this.changeLabel}
                onBlur={this.toggleEdit}
              />
            </form>
          ) : (
            time.label
          )}
        </td>
      </tr>
    );
  }
  changeLabel = e => {
    const labelText = e.target.value;
    this.setState({ labelText });
  };
  doubleClick = e => {
    const { editing } = this.state;
    if (!editing) this.toggleEdit();
  };
  toggleEdit = _ => {
    const { editing } = this.state;

    // should save edits on click-away
    if (editing) this.saveEdits();

    this.setState({ editing: !editing }, () => {
      // should focus input on edit enable
      if (!editing) this.refs.label.focus();
    });
  };
  edit = e => {
    e.preventDefault();
    this.saveEdits();
    this.setState({ editing: false });
  };
  saveEdits = _ => {
    const { time } = this.props;
    const label = this.refs.label.value;
    const nTime = { ...time, label };
    actions.editTime(nTime);
  };
}
