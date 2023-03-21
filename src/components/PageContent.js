import React from "react";

function PageContent() {
    return (
        <div className="page__content">
            <div className="tabs">
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" checked />
                <label for="tab1" className="tabs__label">Tab #1</label>
                <div className="tabs__content">
                    CONTENT for Tab #1
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
                <label for="tab2" className="tabs__label">Tab #2</label>
                <div className="tabs__content">
                    CONTENT for Tab #2
                </div>
            </div>
        </div>
    )
}

export default PageContent;