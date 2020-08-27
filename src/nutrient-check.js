import { LitElement, html } from 'lit-element';
import { styles } from './nutrient-check-styles';

export class NutrientCheck extends LitElement {

  static get styles() {
    return [
      styles
    ];
  }

  static get properties() {
    return {
      servingSize: String,
      calories: Number,
      fat: Number,
      saturatedFat: Number,
      transFat: Number,
      polyUnsaturatedFat: Number,
      monoUnsaturatedFat: Number,
      carbohydrates: Number,
      fiber: Number,
      sugars: Number,
      protein: Number
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <style>
    </style>
    <h1 class="header">Nutrient Check</h1>
    <div class="gray-divider"></div>
    <div class="row">
      <strong>Serving size</strong>
      <strong>2${this.servingSize}</strong>
    </div>
    <div class="black-divider lg"></div>
    <div class="row">
      <h2>Calories</h2>
      <h2>${this.calories}</h2>
    </div>
    <div class="black-divider md"></div>
    <div class="row">
      <strong>Macro</strong>
      <strong>Calories</strong>
    </div>
    <div class="black-divider sm"></div>
    <div class="row macro">
      <span><strong>Fat</strong> ${this.fat}g</span>
      <span>${this.fat*9}</span>
    </div>
    ${this.renderSaturatedFat()}
    ${this.renderTransFat()}
    ${this.renderPolyUnsaturatedFat()}
    ${this.renderMonoUnsaturatedFat()}
    <div class="row macro">
      <span><strong>Protein</strong> ${this.protein}g</span>
      <span>${this.protein*4}</span>
    </div>
    <div class="row macro">
      <span><strong>Carbohydrate</strong> ${this.carbohydrates}g</span>
      <span>${this.carbohydrates*4}</span>
    </div>
    ${this.renderFibers()}
    ${this.renderSugars()}
    `;
  }

  renderFibers() {
    return this.fiber ? html`<div class="sub-macro macro">Fiber ${this.fiber}g </div>` : html``;
  }

  renderSugars() {
    return this.sugars ? html`<div class="sub-macro macro">Fiber ${this.sugars}g </div>` : html``
  }

  renderPolyUnsaturatedFat() {
    return this.polyUnsaturatedFat ? html`<div class="sub-macro macro">Polyunsaturated fat ${this.polyUnsaturatedFat}g </div>` : html``
  }

  renderMonoUnsaturatedFat() {
    return this.monoUnsaturatedFat ? html`<div class="sub-macro macro">Monounsaturated fat ${this.monoUnsaturatedFat}g </div>` : html``
  }

  renderSaturatedFat() {
    return this.saturatedFat ? html`<div class="sub-macro macro">Saturated fat ${this.saturatedFat}g </div>` : html``
  }

  renderTransFat() {
    return this.transFat ? html`<div class="sub-macro macro">Trans fat ${this.transFat}g </div>` : html``
  }
}

// Register the element with the browser
customElements.define('nutrient-check', NutrientCheck);
