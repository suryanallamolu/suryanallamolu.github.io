(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <style>
        img {
            width: 200px;
            height: 100px;
        }
    </style>
    <img src="https://sap-1953.oc.mckesson.com/SAC_CF_QA/CW_Gauge/gauge-amber.svg">
    `;

    customElements.define('com-sap-sample-gaugeamber', class GaugeAmber extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            this._tagContainer;
            this._tagType = "img";
            this._tagSource = "https://sap-1953.oc.mckesson.com/SAC_CF_QA/CW_Gauge/gauge-amber.svg";
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();           
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        redraw(){
            if (this._tagContainer){
                this._tagContainer.parentNode.removeChild(this._tagContainer);
            }

            var shadow = window.getSelection(this._shadowRoot);
            //this._tagContainer = document.createElement(this._tagType);
            var img = document.createElement(this._tagType);
            img.src = this._tagSource;   
            this._tagContainer.appendChild(img); 
            this._shadowRoot.appendChild(this._tagContainer);

        }
    
    
    });
        
})();