import React from "react";

function PageContent() {
    return (
        <div className="page__content">
            <div className="tabs">
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
                <label htmlFor="tab1" className="tabs__label">Tab 1</label>
                <div className="tabs__content">
                    <p>1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nunc in ex viverra interdum. Curabitur non lacus imperdiet, placerat nisi at, efficitur diam. Aliquam vulputate ex quis placerat ultricies. Aenean ex quam, pharetra et massa vitae, gravida sollicitudin tortor. Cras volutpat condimentum justo non aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula sed sem non consequat. Vivamus sed justo vel turpis sagittis sodales. Phasellus fringilla urna quam, id commodo felis facilisis quis. Ut accumsan, massa quis aliquam blandit, nunc justo malesuada ex, eget pulvinar purus metus nec tellus. Sed sodales vitae velit at efficitur. Ut pretium libero vitae tristique pellentesque. Quisque ac elit tincidunt, efficitur felis eu, varius dui.</p>
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
                <label htmlFor="tab2" className="tabs__label">Tab 2</label>
                <div className="tabs__content">
                    <p>2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nunc in ex viverra interdum. Curabitur non lacus imperdiet, placerat nisi at, efficitur diam. Aliquam vulputate ex quis placerat ultricies. Aenean ex quam, pharetra et massa vitae, gravida sollicitudin tortor. Cras volutpat condimentum justo non aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula sed sem non consequat. Vivamus sed justo vel turpis sagittis sodales. Phasellus fringilla urna quam, id commodo felis facilisis quis. Ut accumsan, massa quis aliquam blandit, nunc justo malesuada ex, eget pulvinar purus metus nec tellus. Sed sodales vitae velit at efficitur. Ut pretium libero vitae tristique pellentesque. Quisque ac elit tincidunt, efficitur felis eu, varius dui.</p>
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
                <label htmlFor="tab3" className="tabs__label">Tab 3</label>
                <div className="tabs__content">
                    <p>3-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum nunc in ex viverra interdum. Curabitur non lacus imperdiet, placerat nisi at, efficitur diam. Aliquam vulputate ex quis placerat ultricies. Aenean ex quam, pharetra et massa vitae, gravida sollicitudin tortor. Cras volutpat condimentum justo non aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula sed sem non consequat. Vivamus sed justo vel turpis sagittis sodales. Phasellus fringilla urna quam, id commodo felis facilisis quis. Ut accumsan, massa quis aliquam blandit, nunc justo malesuada ex, eget pulvinar purus metus nec tellus. Sed sodales vitae velit at efficitur. Ut pretium libero vitae tristique pellentesque. Quisque ac elit tincidunt, efficitur felis eu, varius dui.</p>
                </div>
            </div>
        </div>
    )
}

export default PageContent;