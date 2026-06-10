class GlobalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
        `;
  }
}
customElements.define("global-footer", GlobalFooter);
export { GlobalFooter };
