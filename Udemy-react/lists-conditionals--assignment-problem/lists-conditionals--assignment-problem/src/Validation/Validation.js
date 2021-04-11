import React from'react';

const validation = (props) =>
{
    let validationMessage = 'Text Long enought';

    if (props.inputLength <= 5)
        validationMessage = 'Text too short';

    return(
        <div>
            {/* {
                props.inputLength> 5?"Text long enought":<p>Text too short</p>
            }
             */}

            <p>{validationMessage}</p>
        </div>
    );
}

export default validation;