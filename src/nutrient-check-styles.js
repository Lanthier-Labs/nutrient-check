import { css } from 'lit-element';

export const styles = css`
  :host {
    border-width: 4px;
    border-style: solid;
    border-color: black;
    display: flex;
    flex-direction: column;
    width: var(--card-width, 250px);
    height: var(--card-height);
    background-color: var(--card-bg-color, white);
    padding: 2px;
  }

  ::slotted(.footer) {
    display: flex;
    justify-content: flex-end;
  }

  .header {
    margin: 0px;
    align-self: center;
  }

  .gray-divider {
    background: lightgray;
    height: 2px;
    width: 100%;
    margin: 1px;
  }

  .black-divider {
    background: black;
    width: 100%;
    margin: 1px;
  }

  .lg {
    height: 8px;
  }

  .md {
    height: 4px;
  }

  .sm {
    height: 1px;
  }

  .macro {
    border-bottom: 1px solid black;
  }

  .macro:last-of-type {
    border-bottom: none;
  }

  .sub-macro {
    padding-left: 16px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 4px 0px;
  }
  .row h2 {
    margin: 0px;
  }
`;  