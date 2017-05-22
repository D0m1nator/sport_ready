import React, { Component, PropTypes } from 'react';

class Contest extends Component {
  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.refs.newNameInput.value, this.props._id);
    this.refs.newNameInput.value = '';
  };
  render() {
    return (
      <div className="well">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Описание события</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Имя участника</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">
                  {this.props.lookupName(nameId).name}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Стать участником</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text"
                   placeholder="Новое имя "
                   ref="newNameInput"
                   className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">
                     Стать участником
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="btn btn-warning"
             onClick={this.props.contestListClick}>
          Список событий
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
  fetchNames: PropTypes.func.isRequired,
  nameIds: PropTypes.array.isRequired,
  lookupName: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired,
};

export default Contest;
