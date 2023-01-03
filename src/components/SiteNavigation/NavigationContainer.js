import React from "react";
import styled from "styled-components";

const StyledNavigationContainer = styled.div`
    display: flex; /* This is the default value, but it's good to be explicit */
    gap: 1rem; /* Add some space between the navigation items */
    align-items: center; /* Align the navigation items to the center */
    `;
const NavigationContainer = (props) => {
    return (
        <StyledNavigationContainer>
            {props.children}
        </StyledNavigationContainer>
    );
}

export default NavigationContainer;