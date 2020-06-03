import React, {Component} from 'react';
import './Modal.css'
import classNames from 'classnames';

class Modal extends Component {
  constructor(props) {
      super(props);
      this.state = {visiable: true};
      this.onClickModal = this.onClickModal.bind(this); 
  }

  onClickModal() {
    this.setState(state => ({
      visiable: !state.visiable
    }));
  }

  render() {
      const { visiable } = this.state;
      const { children } = this.props;
      return <div> 
            <input id="myBtn" type="button" onClick={this.onClickModal} value="Modal"/>
            
              <div className={classNames('modal-content', {
                'vis': visiable
              })}>
                <div className="modal-header">
                  <span class="close">&times;</span>
                  <h2>This is a modal 1</h2>
                </div>
                <div className="modal-content">
                  <p>{children}</p>
                </div>
                <div className="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>

            
          </div>;
    }
}

export default Modal;