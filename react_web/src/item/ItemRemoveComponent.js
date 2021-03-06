// @flow

import React from 'react';

type Props = {
  id: string,
  removeItem: (id: string) => void,
};

class ItemRemove extends React.Component<Props> {
  handleRemoveButtonClick: () => void;

  constructor(props: Props) {
    super(props);
    this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
  }

  removeItem(id?: string): void {
    this.props.removeItem(id || this.props.id);
  }

  handleRemoveButtonClick(): void {
    this.removeItem();
  }

  render(): ?React$Element<any> {
    return (
      <span className="list__remove">
        <button
          className="list__button button"
          onClick={ this.handleRemoveButtonClick }>
          Remove
        </button>
      </span>
    );
  }
}

export default ItemRemove;
